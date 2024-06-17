import styled from "styled-components"
import { Nav } from "./components/Nav/Nav"
import { Aside } from "./components/Aside/Aside"
import spaceFotos from "../public/json/fotos.json"
import { useState } from "react"
import { Banner } from "./components/Aside/Banner"
import { Galeria } from "./components/Galeria/Galeria"
import { ModalZoom } from "./components/ModalZoom/ModalZoom"

const BgGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 95vw;
  margin: 0 auto;
  max-width: 100%;
`
const Main = styled.main`
  display: flex;
  /* flex-direction: column; */
  gap: 24px;
`

const GaleriaContainer = styled.section`
  display: flex;
  flex-direction:column;
  flex-grow: 1;
`

export default function App() {

  const [fotos, setFotos] = useState(spaceFotos)
  const [fotoSelecionada, setFotoSelecioanda] = useState(null)


  return (
    <BgGradient>
      <AppContainer>
          <Nav />
        <Main>
          <Aside />
            <GaleriaContainer>
              <Banner/>
              <Galeria selectFoto={foto => setFotoSelecioanda(foto)} fotos={fotos}/>
            </GaleriaContainer>
        </Main>
      </AppContainer>
      <ModalZoom foto={fotoSelecionada} />
    </BgGradient>
  )
}