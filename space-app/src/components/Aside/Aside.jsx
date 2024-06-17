import { AiOutlineEye } from "react-icons/ai"
import { BiLike } from "react-icons/bi"
import { FaLightbulb } from "react-icons/fa"
import { IoSunny } from "react-icons/io5"
import { MdHome } from "react-icons/md"
import styled from "styled-components"
import { AsideItem } from "./AsideItem"
import { Banner } from "./Banner"
import { Galeria } from "../Galeria/Galeria"

const StyledList = styled.ul`
    width: 212px;
    list-style: none;
    padding: 0;
    margin: 0;
`

const StyledAside = styled.aside`
    display: flex;
    /* align-items: center; */
    gap: 32px;
`

export const Aside = () => {

    const items = [
        {
            nome: "Início",
            icon: <MdHome/>,
        },
        {
            nome: "Mais Vistas",
            icon: <AiOutlineEye />,
        },
        {
            nome: "Mais Curtidas",
            icon: <BiLike/>,
        },
        {
            nome: "Novas",
            icon: <IoSunny/>,
        },
        {
            nome: "Surpreenda-me",
            icon: <FaLightbulb/>,
        },
    ]

    return(
        <StyledAside>
            <nav>
                <StyledList>
                    {items.map((item, index)=> <AsideItem key={item.nome} texto={item.nome} icone={item.icon} activeIndex={index} />)}
                </StyledList>
            </nav>

        </StyledAside>
    )
}