'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import IconButton from "../CardPost/IconButton"
import { faArrowRight, faComment } from "@fortawesome/free-solid-svg-icons"
import { useRef } from "react"
import Modal from "../Modal"
import { useFormStatus } from "react-dom"
import Loader from "../Loader/loader"
import { ModalRef } from "@/types"

type HandleCommentSubmit = (formData: FormData) => Promise<void>


export default function ModalComment({ action }: {action: HandleCommentSubmit}) {

    const modalRef = useRef<ModalRef>(null)

    const { pending } = useFormStatus()

    return (
        <>
            <Modal ref={modalRef}>
                <h2 className="text-verde-0 font-normal text-3xl py-2">Deixe seu comentário abaixo</h2>
                <form action={action} onSubmit={() => modalRef.current?.closeModal()}>
                    <textarea className="text-black p-2 bg-cinza-200 w-full resize-none h-24 rounded-lg placeholder:text-cinza-300" placeholder="Deixe algum comentário..." name="comment" id="comment">
                    </textarea>
                    <div className="w-full flex justify-end p-2" ><button disabled={pending} className="bg-verde-0 p-2 rounded text-black">{pending ? <Loader /> : <>Comentar <FontAwesomeIcon icon={faArrowRight} /></>}</button></div>
                </form>
            </Modal>
            <IconButton onClick={() => modalRef.current?.openModal()}>
                <FontAwesomeIcon icon={faComment} className="w-6 h-6" />
            </IconButton>
        </>
    )
}
