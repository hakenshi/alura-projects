import { imagens } from "../../assets"
import "./banner.css"
export const Banner = () =>{
    return(
    <header className="banner">
        <img src={imagens.banner} alt="banner" />
    </header>
    )
}