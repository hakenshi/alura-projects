import { imagens } from "../../assets"
import "./footer.css"

export const Footer = () =>{
    return(
        <footer >
            <div className="social-media-container">
                <img className="social-media" src={imagens.fb} alt="" />
                <img className="social-media" src={imagens.tw} alt="" />
                <img className="social-media" src={imagens.ig} alt="" />
            </div>
            <div className="social-media-container">
                <img src={imagens.logo} alt="" />
            </div>
            <div className="social-media-container">
                <span><p>Desenvolvido por lonely</p></span>
            </div>
        </footer>
    )
}