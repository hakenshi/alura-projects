import { useRef } from "react"
import "./formulario.css"
import p from "prop-types"


export const Formulario = (props) => {

    const nomeRef = useRef(null)
    const cargoRef = useRef(null)
    const imagemRef = useRef(null)
    const timeRef = useRef(null)

    function handleSubmit(e) {
        e.preventDefault()
        const nome = nomeRef.current.value
        const cargo = cargoRef.current.value
        const imagem = imagemRef.current.value
        const time = timeRef.current.value
        props.cards({nome,cargo,imagem,time})
        nomeRef.current.value = null
        cargoRef.current.value = null
        imagemRef.current.value = null
        timeRef.current.value = null

    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <div className="campo-texto">
                <label htmlFor="nome">Nome</label>
                <input ref={nomeRef} type="text" name="nome" placeholder="Digite seu nome" />
            </div>
            <div className="campo-texto">
                <label htmlFor="cargo">Cargo</label>
                <input ref={cargoRef} type="text" name="cargo" placeholder="Digite seu cargo" />
            </div>

            <div className="campo-texto">
                <label htmlFor="imagem">Image</label>
                <input ref={imagemRef} type="text" name="imagem" placeholder="Informe o endereço da imagem" />
            </div>
            <div className="campo-texto">
                <label htmlFor="time">Time</label>
                <select ref={timeRef} name="time" id="time">
                    <option value="">Escolha seu time</option>
                    {props.times.map((time) => <option key={time.nome}>{time.nome}</option>)}</select>
            </div>
            <button>Criar Card</button>
        </form>
    )
}
Formulario.propTypes = {
    times: p.array.isRequired,
    cards: p.func.isRequired
}
