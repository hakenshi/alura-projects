import styled from "styled-components"
import tags from "../../../public/json/tags.json"

const StyledButton = styled.button`
    color: white;
    background: #D9D9D94D;
    border: 3px solid transparent;
    &:hover{
        cursor: pointer;
        border: 3px solid #7B78E5;
    }
    border-radius: 10px;
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    padding: 7px;
   
`

const Container = styled.div`
    display: flex;
    align-items: center;
    margin: 32px 0;
`

const ButtonContainer = styled.div`
    display: flex;
    gap: 32px;   
    
`

const Titulo = styled.h3`
    color: white;
    font-weight: 400;
    width: 230px;
    font-size: 24px;
`

export const Tags = () =>{
    return(
        <>
            <Container>
            <Titulo>Busque por Tags:</Titulo>
            <ButtonContainer>{tags.map(tag => <StyledButton key={tag.id}>{tag.titulo}</StyledButton>)}</ButtonContainer>
            </Container>
        </>
    )
}