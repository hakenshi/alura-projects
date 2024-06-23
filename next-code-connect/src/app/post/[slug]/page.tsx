import { CardPost } from '@/components/CardPost'
import React from 'react'
import { remark } from 'remark'
import html from "remark-html"
import db from '../../../../prisma/db'
import { redirect } from 'next/navigation'
import { CommentList } from '@/components/Comment/comment-list'
async function getPosts(slug:string) {
  try {
    const post = await db.post.findFirst({
      where: {
        slug: slug,
      },
      include: {
        author: true,
        comments: {
          include: {
            author: true
          }
        }
      }
    })

    if(!post) throw new Error(`Não foi possível encontraro o post ${slug}`)

    const processedContent = await remark().use(html).process(post.markdown)
    const htmlContent = processedContent.toString()

    post.markdown = htmlContent

    return post

  } catch (error) {
    console.error(error)
    }
    redirect('/not-found')
}

const PagePost = async ({params}: {params:{slug: string}}) => {
  
  const post = await getPosts(params.slug)

  return (
    <main className='max-w-screen-lg flex flex-col items-center gap-10'>
      <div className='flex flex-col w-full gap-10'>
      <CardPost cardSize='lg' posts={post} />
      <h2 className='text-cinza-300 text-2xl font-semibold'>Código:</h2>
        <div className='bg-cinza-500 p-5 rounded-xl text-cinza-200 max-h-64 overflow-y-scroll' dangerouslySetInnerHTML={{ __html: post.markdown }}></div>
      </div>
      <div className='bg-cinza-300 text-black rounded-xl w-full max-h-[839px] px-7 py-10 text-2xl font-semibold'>
        <h2>Comentários</h2>
        <CommentList comment={post.comments} />
      </div>
    </main>
  )
}

export default PagePost
