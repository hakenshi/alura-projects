'user client'

import React from "react";
import { ErrorPage } from "../components/ErrorPage";


export default function NotFound() {
  return (
    <>
        <ErrorPage error="Página não encontrada!" errorImg={"/404.png"} errorMsg="Fique tranquilo, você ainda pode retornar ao feed para continuar vendo projetos maravilhosos." />
</>
  )
}
