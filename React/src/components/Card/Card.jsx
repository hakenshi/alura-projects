import "./card.css"
import p from "prop-types"

export const Card = ({src, nome, cargo, corPrimaria}) => {



    return(
    <div className="card">
        <div style={{ background: corPrimaria}} className="header">
            <img src={src} alt={nome} />
        </div>
        <div className="footer">
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>)
}



Card.propTypes = {
    src: p.string,
    nome: p.string,
    cargo: p.string,
    corPrimaria: p.string
}