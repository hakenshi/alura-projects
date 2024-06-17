import { FaCheck } from "react-icons/fa"
import { Tarefa } from "../../types/tarefa"
import styles from "./Lista.module.scss"

interface Props extends Tarefa{
  selectTask: (selectTask: Tarefa)=> void
}

export const Item = ({nome, tempo, selected, completed, id, selectTask}: Props) =>{

    const {item, itemSelecionado, itemCompletado, concluido} = styles

    return(
        <li className={`${item} ${selected ? itemSelecionado : ""} ${completed ? itemCompletado : ""}`} onClick={()=> !completed && selectTask({nome, tempo, selected, completed, id})}>
        <h3>
          {nome}
        </h3>
        <span>{tempo}</span>
      {completed && <span className={concluido} aria-label="tarefa-concluida">{<FaCheck/>}</span>}
        </li>
    )
}