import { CommentProps } from '@/types'
import Image from 'next/image'
import React from 'react'

export const Comment = ({ comment }: CommentProps) => {
  return (
    <div>
        <Image src={comment.author.avatar} alt={comment.post.title} />
    </div>
)
}
