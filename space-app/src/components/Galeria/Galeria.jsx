import { Tags } from "./Tags"
import { Titulo } from "../Titulo"
import styled from "styled-components"
import { Populares } from "./Populares"
import { Imagem } from "./Imagem"
import p from "prop-types"

const GaleriaContainer = styled.div`
    display: flex;
`

const Section = styled.section`
    flex-grow: 1;
`

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
`

export const Galeria = ({ fotos, selectFoto }) => {


    return (
        <>
            <Tags />
            <GaleriaContainer>
                <Section>
                    <Titulo>Navegue pela galeria</Titulo>
                    <Container>
                        {fotos.map(foto => (

                            <Imagem onClick={() => selectFoto(foto)} key={foto.id} foto={foto.path} titulo={foto.titulo} fonte={foto.fonte} />

                        ))}
                    </Container>
                </Section>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

Galeria.p = {
    fotos: p.object,
    selectFoto: p.func
}
