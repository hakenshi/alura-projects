'use server'

import { Comment, Post } from "@prisma/client";
import prisma from "../../prisma/db"
import {revalidatePath} from "next/cache";
import { Author } from "@/types";

export async function incrementLikes(post: any){

    await new Promise(resolve => setTimeout(resolve,1000))

    await prisma.post.update({
        where:{
            id: post.id,
        },
        data: {
            likes: {increment: 1}
        }
    })

    revalidatePath(`/`)
    revalidatePath(`/${post.slug}`)

}

export async function postComment(post:any, formData: FormData){

    // await new Promise(resolve => setTimeout(resolve, 1000))

    const author = await prisma.user.findFirst({
        where: {
             username: "anabeatriz_dev"
        }
    })

    await prisma.comment.create({
        data: {
            text: formData.get('comment'),
            authorId: author.id,
            postId: post.id 
        }
    })

    revalidatePath(`/`)
    revalidatePath(`/${post.slug}`)

}
export async function postReply(parent: Comment, formData: FormData){

    // await new Promise(resolve => setTimeout(resolve, 1000))

    const author = await prisma.user.findFirst({
        where: {
             username: "anabeatriz_dev"
        }
    })

    const comment:any = formData.get('comment')

    const post = await prisma.comment.findFirst({
        where: {
            id: parent.id
        }
    })

    await prisma.comment.create({
        data: {
            text: comment,
            authorId: author?.id,
            postId: post?.id,
            parentId: parent.parentId ?? parent.id
        }
    })

    revalidatePath(`/${post?.slug}`)
}