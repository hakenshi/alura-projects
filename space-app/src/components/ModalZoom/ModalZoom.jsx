import styled from "styled-components"
import { Imagem } from "../Galeria/Imagem"
import { FaX } from "react-icons/fa6"
import { useState } from "react"

const Overlay = styled.div`
  background-color: rgba(0,0,0, 0.75);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left:0;
`

const Dialog = styled.dialog`
  position: absolute;
  top: 294px;
  background-color: transparent;
  border: none;
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;

  button{
    position: relative;
    top: 20px;
    right: 50px;
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
  }

`

export const ModalZoom = ({ foto,handleClose }) => {

  return (
    <>
      {
        foto &&
        <>
          <Overlay />
          <Dialog open={!!foto}>

            <Imagem key={foto.id} foto={foto.path} titulo={foto.titulo} fonte={foto.fonte} expandida={true} />

            <form method="dialog"><button><FaX /></button></form >
          </Dialog>
        </>
      }
    </>
  )
}
