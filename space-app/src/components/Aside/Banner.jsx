import styled from "styled-components"
import { banner } from "../../../public/imagens"

const FigureEstilizada = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;
    background-position-y: bottom;
    transform: scaleX(-1);
`

const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;
    transform: scaleX(-1);
`

export const Banner = () => {
    return (
    <FigureEstilizada $backgroundImage={banner}>
        <TituloEstilizado>A gelaeria mais completa do  de fotos do espaço!</TituloEstilizado>
    </FigureEstilizada>
    )
}

