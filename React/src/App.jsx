import { useState } from "react"
import { Components } from "./components"


function App() {

  const [cards,setCards] = useState([])

  const times = [
    {
    nome: 'Front-End',
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8F8FF',
},
{
    nome: 'Data Sciense',
    corPrimaria: '#A6D157',
    corSecundaria: '#F0F8E2',
},
{
    nome: 'Devops',
    corPrimaria: '#E06B69',
    corSecundaria: '#FDE7E8',
},
{
    nome: 'UX e Design',
    corPrimaria: '#D86EBF',
    corSecundaria: '#FAE5F5',
},
{
    nome: 'Mobile',
    corPrimaria: '#FEBA05',
    corSecundaria: '#FFF5D9',
},
{
    nome: 'Inovação e Gestão',
    corPrimaria: '#FF8A29',
    corSecundaria: '#FFEEDF',
}

  ]

  const addCards = (card) => {
    setCards(c =>[...c, card])
  }
  return (
    <>
      <Components.Banner/>
      <div className="container">
        <Components.Formulario times={times} cards={card => addCards(card)}/>
        </div>
        {times.map(time => <Components.Time key={time.nome}  nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} cards={cards.filter(card => card.time === time.nome)}/>)}
        <Components.Footer/>
    </>
  )
}

export default App
