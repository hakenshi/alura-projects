import { LuSearch } from "react-icons/lu"
import styled from "styled-components"

const InputContainer = styled.div`
    position: relative;
    display: inline-block;
`
const IconContainer = styled.span`
    position: absolute;
    top: 15px;
    right: 10px;
    width: 38px;
    height: 38px;
    cursor: pointer;
`

const StyledInput = styled.input`
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    box-sizing: border-box;
    background-color: transparent;
    width: 566px;
    height: 56px;
    outline: none;
    border: 2px solid transparent;
    border-image: linear-gradient(90deg, #C98CF1 0%, #7B78E5 100%);
    border-image-slice: 20;
    border-radius: 8px;
    font-size: 20px;
    outline: none;
    color: #D9D9D9;
`

export const InputField = () => {
    return (
        <InputContainer>
            <StyledInput placeholder="O que você procura?" />
            <IconContainer><LuSearch size={"25px"} stroke={'#7B78E5'} /></IconContainer>            
        </InputContainer>
    )
}