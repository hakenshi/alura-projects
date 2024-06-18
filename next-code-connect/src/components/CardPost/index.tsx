import { PostProps } from "@/types"
import Image from "next/image"
import { Avatar } from "../Avatar"
import Link from "next/link"

export const CardPost = ({ posts, cardSize }: PostProps) => {

    const sizes = {
        sm: "w-[486px] h-[431px]",
        lg: "w-[993px] h-[601px]"
    }
    
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
                <footer className="flex justify-end p-4">
                    <Avatar name={posts.author.username} url={posts.author.avatar} />
                </footer>
            </article>
        )
    }

    return (
        <Link href={`/post/${posts.slug}`}>
            <article className={`bg-cinza-500 rounded-xl ${sizes[cardSize]}`}>
                <header>
                    <figure className="bg-cinza-300 flex items-center rounded-t-xl justify-center h-52 ">
                        <Image className="h-44 w-11/12 rounded-xl shadow-2xl" src={posts.cover} alt={posts.title} width={438} height={431} />
                    </figure>
                </header>
                <section className="text-cinza-200 px-5 py-2 space-y-2 ">
                    <h2 className="font-bold">{posts.title}</h2>
                    <p className="min-h-24">{posts.body}</p>
                </section>
                <footer className="flex justify-end p-4">
                    <Avatar name={posts.author.username} url={posts.author.avatar} />
                </footer>
            </article>

        </Link>
    )
}
