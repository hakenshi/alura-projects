'use client'

import React from "react"
import { useEffect } from "react"
import { ErrorPage } from "../components/ErrorPage"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string },
    reset: () => void
}) {

    useEffect(() => {
        console.error(error)
    }, [error])

  return (
    <>
         <ErrorPage error="Parece que aconteceu algum erro" errorImg={"/500.png"} errorMsg="Não conseguimos carregar a página, mas fique a vontade para retornar a página principal." />
    </>
  )
}
