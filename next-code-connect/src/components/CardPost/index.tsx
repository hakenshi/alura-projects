import React from "react"

import { PostProps } from "@/types"
import Image from "next/image"
import { Avatar } from "../Avatar"
import Link from "next/link"
import { incrementLikes, postComment } from "@/actions"
import LikeButton from "@/components/CardPost/LikeButton";
import ModalComment from "../ModalComment"

export const CardPost = ({ posts, cardSize }: PostProps) => {

    const sizes = {
        sm: "w-[486px] min-h-[431px]",
        lg: "w-[993px] h-[601px]"
    }

   const handleSubmit = incrementLikes.bind(null, posts)

   const handleCommentSubmit = postComment.bind(null, posts)

    if (cardSize === "lg") {
        return (
            <article className={`bg-cinza-500 rounded-xl`}>
                <header>
                    <figure className="bg-cinza-300 flex items-center rounded-t-xl justify-center h-96">
                        <Image className="h-80 w-11/12 rounded-xl shadow-2xl" src={posts.cover} alt={posts.title} width={993} height={601} />
                    </figure>
                </header>
                <section className="text-cinza-200 px-5 py-2 space-y-2 ">
                    <h2 className="font-bold">{posts.title}</h2>
                    <p className="min-h-24">{posts.body}</p>
                </section>
                <footer className="flex justify-between items-center p-4">
                <div className="text-cinza-300 flex gap-4">
                    <form action={handleSubmit}>
                        <LikeButton likes={posts.likes} />
                    </form>
                    <div>
                        <ModalComment action={handleCommentSubmit} />
                        <p className="text-xs">{posts.comments.length}</p>
                    </div>
                </div>
                <Avatar name={posts.author.username} url={posts.author.avatar} />
            </footer>
            </article>
        )
    }

    return (
        <article className={`bg-cinza-500 rounded-xl ${sizes[cardSize]}`}>
            <header>
                <figure className="bg-cinza-300 flex items-center rounded-t-xl justify-center h-52 ">
                    <Image className="h-44 w-11/12 rounded-xl shadow-2xl" src={posts.cover} alt={posts.title} width={438} height={431} />
                </figure>
            </header>
            <section className="text-cinza-200 px-5 py-2 space-y-2 ">
                <h2 className="font-bold">{posts.title}</h2>
                <p className="min-h-24">{posts.body}</p>

                <Link className="font-semibold text-verde-0 visited:text-verde-1" href={`/post/${posts.slug}`}>Ver Detalhes</Link>
            </section>
            <footer className="flex justify-between items-center p-4">
                <div className="text-cinza-300 flex gap-4">
                    <form action={handleSubmit}>
                        <LikeButton likes={posts.likes} />
                    </form>
                    <div>
                        <ModalComment action={handleCommentSubmit} />
                        <p className="text-xs">{posts.comments.length}</p>
                    </div>
                </div>
                <Avatar name={posts.author.username} url={posts.author.avatar} />
            </footer>
        </article>


    )
}
