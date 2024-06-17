import { Tarefa } from "../../types/tarefa";
import { Item } from "./Item";
import styles from "./Lista.module.scss"

interface Props{
  tarefas: Tarefa[]
  selectTask: (selectTask: Tarefa)=> void
}

export default function Lista({tarefas, selectTask}:Props) {

  const  {listaTarefas} = styles

  return (
    <aside className={listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
      {tarefas.map((tarefa)=> 
        <Item key={tarefa.id} {...tarefa} selectTask={selectTask} />
        )}
      </ul>
    </aside>
  );
}
