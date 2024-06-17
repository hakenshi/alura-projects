/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from "react";
import Button from "../Button";
import styles from "./Form.module.scss"
import Lista from "../Lista";
import { Tarefa } from "../../types/tarefa";
import { v4 as uuidv4 } from "uuid"
import { Cronometro } from "../Cronometro";

export default function Form() {

  const { novaTarefa, inputContainer } = styles

  const [tarefas, setTarefas] = useState<Tarefa[]>([])

  const tarefa = useRef<HTMLInputElement>(null)
  const tempo = useRef<HTMLInputElement>(null)

  const [selected, setSelected] = useState<Tarefa>();
  const selectTask = (selectTask: Tarefa) =>{
    setSelected(selectTask)
    setTarefas(t => t.map(tarefa => ({...tarefa, selected: tarefa.id === selectTask.id ? true : false})))
  }

  function addTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const novaTarefa: Tarefa = {
      nome: tarefa.current?.value || "",
      tempo: tempo.current?.value || "",
      selected: false,
      completed: false,
      id: uuidv4()
    }

    setTarefas((t) => [...t, novaTarefa])

    tarefa.current!.value = ""
    tempo.current!.value = ""

  }

  function finalizarTarefa(){
    if(selected){
      setTarefas(t => t. map(tarefa => {
        if(tarefa.id === selected.id){
          return{
            ...tarefa,
            selected: false,
            completed: true
          }
        }
        return tarefa
      }))
    }
  }
  return (
    <>
      <form className={novaTarefa} onSubmit={addTarefa}>
        <div className={inputContainer}>
          <label htmlFor="task">Adicionar um novo estudo</label>
          <input ref={tarefa} name='study' id='study' type="text" placeholder='o que você quer estudar?' required />
        </div>
        <div className={inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input ref={tempo} type="time" step="1" name="tempo" id="tempo" min="00:00:00" max="01:30:00" required
          />
        </div>
        <Button type={"submit"}>
          Adicionar
        </Button>
      </form>

      <Lista tarefas={tarefas} selectTask={selectTask}  />

      <Cronometro selected={selected} finalizarTarefa={finalizarTarefa}/>
    </>


  );
}
