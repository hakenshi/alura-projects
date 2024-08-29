import {CardPost} from "@/components/CardPost";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import db from "../../../prisma/db";
import {HomeProps} from "@/types";


type WhereClause = {
    title?: {
        contains: string
        mode: "insensitive"
    }
}

const fetchData = async (page: number, search: string) => {
    try {

        const where: WhereClause = {}

        if (search) {
            where.title = {
                contains: search,
                mode: "insensitive"
            }
        }

        const take = 6
        const skip = (page - 1) * take

        const totalItems = await db.post.count({where})

        const totalPage = Math.ceil(totalItems / take)

        const prev = page > 1 ? page - 1 : null
        const next = page < totalPage ? page + 1 : null

        const posts = await db.post.findMany({
            take,
            skip,
            where,
            include: {
                author: true,
                comments: true,
            }
        })

        return {data: posts, prev: prev, next: next}

    } catch (error) {

        console.error(error)

        return {data: [], prev: null, next: null}
    }
}
export default async function PostPage({searchParams}: HomeProps) {

    const currentPage = parseInt(searchParams?.page || 1)

    const search = searchParams?.q || ''

    const {data: posts, prev, next} = await fetchData(currentPage, search)


    return (
        <main className="flex flex-col items-center gap-10">
            <div className="flex items-center max-w-screen-lg gap-10 flex-wrap">
                {posts.map((post: any) => <CardPost cardSize="sm" key={post.id} posts={post}/>)}
            </div>
            <div className="underline flex gap-10 text-verde-0 visited:text-verde-1 flex-grow">
                {prev &&
                    <Link href={{pathname: '/', query: {page: prev, q: search}}}><FontAwesomeIcon icon={faChevronLeft}/></Link>}
                {next && <Link href={{pathname: '/', query: {page: next, q: search}}}><FontAwesomeIcon
                    icon={faChevronRight}/></Link>}
            </div>
        </main>
    )
}