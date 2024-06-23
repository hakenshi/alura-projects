'use client'

import React, { useRef } from 'react'
import IconButton from '../CardPost/IconButton'
import Modal from '../Modal'
import Comentario from '../Comment/comment'
import { CommentProps, ModalRef } from '@/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useFormStatus } from 'react-dom'
import Loader from '../Loader/loader'
import { Comment } from '@prisma/client'

type HandleCommentSubmit = (parent: Comment, formData: FormData) => Promise<void>

type ModalReply = {
  action: HandleCommentSubmit
  comment: Comment
}

export default function ModalReply({ action, comment }:ModalReply ) {

  const modalRef = useRef<ModalRef>(null)

  const {pending} = useFormStatus()

  return (
    <>
    <Modal ref={modalRef}>
                <Comentario comment={comment} />
                <form action={action} onSubmit={() => modalRef.current?.closeModal()}>
                    <textarea className="text-black p-2 bg-cinza-200 w-full resize-none h-24 rounded-lg placeholder:text-cinza-300" placeholder="Deixe algum comentário..." name="comment" id="comment">
                    </textarea>
                    <div className="w-full flex justify-end p-2" ><button disabled={pending} className="bg-verde-0 p-2 rounded text-black">{pending ? <Loader /> : <>Comentar <FontAwesomeIcon icon={faArrowLeft} /></>}</button></div>
                </form>
            </Modal>
    <button className='text-base' onClick={() => modalRef.current?.openModal()}>
      Responder
    </button>
    </>
  )
}
