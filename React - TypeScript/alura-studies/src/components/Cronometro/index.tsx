import { Relogio } from "./Relogio/Relogio";
import styles from "./Cronometro.module.scss"
import Button from "../Button";
import { Tarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/date";

interface Props {
  selected: Tarefa | undefined,
  finalizarTarefa: ()=> void,
}

export function Cronometro({ selected, finalizarTarefa }: Props) {

  const [tempo, setTempo] = useState<number>()

  useEffect(()=>{
    
   if(selected?.tempo) setTempo(timeToSeconds(selected.tempo))

  },[selected])

  function contagemRegressiva(contador: number = 0){

    setTimeout(()=>{
      if(contador > 0){
        setTempo(contador - 1)
        return contagemRegressiva(contador-1)
      }
      finalizarTarefa()
    }, 1000)

  }

  return (
    <div className={styles.cronometro}>
      <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={styles.relogioWrapper}>
        <Relogio tempo={tempo}/>
      </div>
      <Button type="button" onClick={()=>contagemRegressiva(tempo)}>
        Iniciar
      </Button>
    </div>
  );
}
