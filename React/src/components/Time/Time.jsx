import p from "prop-types"
import "./time.css"
import { Card } from "../Card/Card"

export const Time = ({nome, corPrimaria, corSecundaria, cards}) =>{

    return(
        cards.length > 0 && <section style={{ backgroundColor: corSecundaria }} className="time">
            <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
            <div className="container">
            {cards.map((card) => <Card key={card.nome} nome={card.nome} cargo={card.cargo} src={card.imagem} corPrimaria={corPrimaria}/>)}

            </div>
        </section>
    )
}

Time.propTypes = {
    nome: p.string,
    corPrimaria: p.string,
    corSecundaria: p.string,
    cards: p.array
}