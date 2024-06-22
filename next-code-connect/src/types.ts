import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import { ImageProps } from "next/image"
import React, { ImgHTMLAttributes } from "react"

export interface Author{
    id: number
    name: string
    username: string
    avatar: string
}

interface Comments{
  id: number
  text: string
  updated_ad: Date
  created_at: Date
  post: Post
  author: Author
}

interface Post{
    id: number
    cover: string
    title: string
    slug: string
    body: string
    markdown: string
    likes: number
    author: Author
    comments: Comments[]
}

export type PostProps = {
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
export interface ModalProps {
    children: React.ReactNode
    ref: React.Ref<any>
}

export type CommentProps = {
  comment: Comments
}