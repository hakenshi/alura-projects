import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import { ImageProps } from "next/image"
import { ImgHTMLAttributes } from "react"

export interface Author{
    id: number
    name: string
    username: string
    avatar: string
}

interface Post{
    id: number
    cover: string
    title: string
    slug: string
    body: string
    markdown: string
    author: Author
}

export interface PostProps{
    posts: Post
    cardSize: "sm" | "lg"
}

export interface AvatarProps{
    name: string
    url: string
}

export interface PageProps {
  params: {
    slug: string
  }
  searchParams?: {
    [key: string]: string
  }
}

export interface HomeProps {
  searchParams: Params
}
export interface ErrorPageProps{
  error: string
  errorMsg: string
  errorImg: string
}
