'use client'

import React, { FormEvent, useRef } from 'react'
import IconButton from '../CardPost/IconButton'
import Modal from '../Modal'
import Comentario from '../Comment/comment'
import { CommentProps, ModalRef } from '@/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useFormStatus } from 'react-dom'
import Loader from '../Loader/loader'
import { Comment, Post } from '@prisma/client'
import { postReply } from '@/actions'

type ModalReply = {
  comment: Comment
}

export default function ModalReply({comment }:ModalReply ) {

  const modalRef = useRef<ModalRef>(null)

  const {pending} = useFormStatus()

  const action = postReply.bind(null, comment)

  return (
    <>
    <Modal ref={modalRef}>
                <Comentario comment={comment} />
                <form action={action} onSubmit={() => modalRef.current?.closeModal()}>
                    <textarea className="text-black p-2 bg-cinza-200 w-full resize-none h-24 rounded-lg placeholder:text-cinza-300 text-base font-normal" placeholder="Deixe algum comentário..." name="comment" id="comment">
                    </textarea>
                    <div className="text-base w-full flex justify-end p-2" ><button disabled={pending} className="bg-verde-0 p-2 rounded text-black">{pending ? <Loader /> : <>Responder <FontAwesomeIcon icon={faArrowRight} /></>}</button></div>
                </form>
            </Modal>
    <button className='text-base' onClick={() => modalRef.current?.openModal()}>
      Responder
    </button>
    </>
  )
}
