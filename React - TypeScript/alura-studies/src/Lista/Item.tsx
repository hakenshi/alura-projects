import { Tarefa } from "../types/tarefa"
import styles from "./Lista.module.scss"

interface Props extends Tarefa{
  selectTask: (selectTask: Tarefa)=> void
}

export const Item = ({nome, tempo, selected, completed, id, selectTask}: Props) =>{

    const {item, itemSelecionado} = styles

    return(
        <li className={`${item} ${selected ? itemSelecionado : ""}`} onClick={()=> selectTask({nome, tempo, selected, completed, id})}>
        <h3>
          {nome}
        </h3>
        <span>{tempo}</span>
        </li>
    )
}