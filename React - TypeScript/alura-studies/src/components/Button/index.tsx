import styles from "./Button.module.scss"

interface Props{
  children: string, 
  type?: "button" | "reset" | "submit",
  onClick?: ()=>void 
}

export default function Button({children, type, onClick}: Props) {

  const {botao} = styles

  return (
    <button onClick={onClick} type={type} className={botao}>{children}</button>
  );
}
