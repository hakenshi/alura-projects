import styled from "styled-components"
import p from "prop-types"

const Li = styled.li`
    padding: 5px;
    a{
        color: ${props => props.$isActive ? '#d9d9d9' : '#7B78E5'};;
        text-decoration: none;
        display: flex;
        gap: 20px;
        font-size:20px;
        align-items: center;
      
        &:hover{
            color: ${props => props.$isActive ? '#7B78E5' : '#d9d9d9' };;
            span{
                background:linear-gradient(90deg, #C98CF1 0%, #7B78E5 100%) ;
                color: #d9d9d9;

            }
        }
    }
    span{
        margin: 0;
        text-align: center;
        color: #d9d9d9;
        width: 24px;
        height: 24px;
        padding: 10px;
        background: ${props => props.$isActive ? '#052e63' : 'linear-gradient(90deg, #C98CF1 0%, #7B78E5 100%)'};
        font-size:24px;
        border-radius: 8px;
    }
`

export const AsideItem = ({ texto, icone, active = false}) =>{
    
    return(
        <Li $isActive={!active}> <a href="#"><span>{icone}</span>{texto}</a></Li>
    )
}

AsideItem.propTypes = {
    texto: p.string,
    icone: p.node,
    active: p.bool,

}