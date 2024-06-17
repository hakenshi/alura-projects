import Form from "../components/Form"
import styles from "./App.module.scss"


function App() {
  const { AppStyle } = styles
  return (
    <div className={AppStyle}>
      <Form/>
    </div>
  )
}

export default App
