import { BiSolidHeart } from "react-icons/bi";
import { FaExpandAlt } from "react-icons/fa";
import { RiExpandUpDownFill } from "react-icons/ri";
import styled from "styled-components"
const Figure = styled.figure`
    width: ${(props) => (props.$expandida ? '90%' : '45%')};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h4 {
            flex-grow: 1;
        }
        h3,
        h4 {
            margin: 0;
            font-size: 16px;
        }
    }

    footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    button{
        background-color: transparent;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 28px;
    }
`

export const Imagem = ({foto, titulo, fonte, onClick, expandida = false}) =>{
    return(
        <Figure >
            <img src={foto} alt={titulo} />
            <figcaption>
                <h3>{titulo}</h3>
                <footer>
                    <p>
                        {fonte}
                    </p>
                    <ButtonContainer>
                        <button><BiSolidHeart/></button>
                       {!expandida && <button onClick={onClick}><FaExpandAlt/></button>}
                    </ButtonContainer>
                </footer>
            </figcaption>
        </Figure>
    )
}