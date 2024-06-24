import React, { Fragment } from 'react'
import Comentario from './comment'
import ModalReply from '../ModalReply/modal-reply'
import { postReply } from '@/actions'
import { Comment } from '@prisma/client'
import Replies from '../Replies/replies'

type CommentProps = {
    comment: Comment[]
}

export const CommentList = ({ comment }: CommentProps) => {

    return (
        <ul>
            {comment.map((comment: any) => (
                <Fragment key={comment.id}>
                    <Comentario key={comment.id} comment={comment} />
                    <ModalReply comment={comment} />
                    <Replies comments={comment} />
                </Fragment>))}
        </ul>
    )
}
