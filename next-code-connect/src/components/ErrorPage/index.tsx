import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { ErrorPageProps } from "../../types"
import Image from 'next/image'

export const ErrorPage = ({ error, errorMsg, errorImg }: ErrorPageProps) => {
    return (
        <main className='max-w-screen-lg flex flex-col items-center'>
      <div className='flex flex-col w-full gap-10'>
            <Image className='rounded-lg h-auto w-auto' width={656} height={367}  src={errorImg} alt={error} />

            <h2 className='text-verde-0 text-3xl font-bold'>{error}</h2>
            <p className='text-cinza-200'>{errorMsg}</p>
            <Link className='text-verde-0 visited:text-verde-1' href="/"><strong className='underline'>Voltar ao feed</strong>  <FontAwesomeIcon icon={faArrowLeft} /> </Link>
        </div>
        </main>
    )
}
