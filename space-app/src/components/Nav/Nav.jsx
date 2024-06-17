import styled from "styled-components"
import { logo } from "../../../public/imagens"
import { InputField } from "./InputField"

const HeaderStyled = styled.header`
    font-family: Arial, Helvetica, sans-serif;
    padding: 60px 0;
    /* margin: 0 20px; */
    display: flex;
    justify-content: space-between;
    img{
        max-width: 212px;
    }
    input{
        padding: 10px
    }
`
export const Nav = () => {
    return(
        <HeaderStyled>
            <img src={logo} alt="space-app" />
            <InputField/>
        </HeaderStyled>
    )
}