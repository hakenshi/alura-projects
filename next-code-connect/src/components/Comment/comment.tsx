import { CommentProps } from '@/types'
import { Comment } from '@prisma/client'
import Image from 'next/image'
import React from 'react'

const Comentario: React.FC<CommentProps>  = ({ comment }) => {
  return (
    <div className='text-base font-normal flex items-center gap-2 py-5'>
        <Image src={comment.author.avatar} alt={comment.author.name} width={32} height={32} />
        <div className='flex gap-2'><strong>@{comment.author.username}</strong><p>{comment.text}</p></div>
    </div>
)
}

export default Comentario