import {CommentProps} from '@/types'
import {Comment} from '@prisma/client'
import Image from 'next/image'
import React from 'react'

const Comentario: React.FC<CommentProps> = ({comment}) => {

    const imageSrc = comment.author.avatar ?? comment.author.image

    const username = comment.author.username ?? comment.author.name

    return (
        <div className='text-base font-normal flex items-center gap-2 py-5'>
            <Image className="rounded-full" src={imageSrc}
                   alt={username} width={32} height={32}/>
            <div className='flex gap-2'><strong>@{username}</strong><p>{comment.text}</p></div>
        </div>
    )
}

export default Comentario