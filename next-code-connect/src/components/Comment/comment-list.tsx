import React, { Fragment } from 'react'
import Comentario from './comment'
import ModalReply from '../ModalReply/modal-reply'
import { postReply } from '@/actions'
import { Comment } from '@prisma/client'

type CommentProps = {
    comment: Comment[]
}

export const CommentList = ({ comment }: CommentProps) => {

    const reply = postReply.bind(null, comment)
    return (
        <ul className='divide-y divide-cinza-400'>
            {comment.map((comment: any) => (
                <Fragment key={comment.id}>
                    <Comentario key={comment.id} comment={comment} />
                    <ModalReply comment={comment} action={reply} />
                </Fragment>))}
        </ul>
    )
}
