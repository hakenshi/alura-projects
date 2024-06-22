'use client'

import React, { forwardRef,  useImperativeHandle, useRef} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons";


type ModalProps = {
    children: React.ReactNode
}

const Modal = forwardRef(({children}:ModalProps, ref) => {

    const dialogRef= useRef<HTMLDialogElement>(null)

    const closeModal = () => {
       if(dialogRef.current){
           dialogRef.current.close()
       }
    }

    const openModal = () => {
        if (dialogRef.current){
            dialogRef.current.showModal()
        }
    }

    useImperativeHandle(ref, () => {
        return{
            closeModal,
            openModal
        }
    })

    return (
        <dialog className={"backdrop:bg-black/70 backdrop:backdrop-blur-[3px] max-w-4xl w-full rounded-xl bg-cinza-400 text-cinza-200 p-5"} ref={dialogRef}>
            <header className='w-full flex justify-end'>
                <button onClick={()=> closeModal()}><FontAwesomeIcon icon={faX} /></button>
            </header>
            {children}
        </dialog>
    )
})

Modal.displayName = "modal"

export default Modal