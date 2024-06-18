import Image from "next/image"
import logo from "../../../public/logo.png"
import Link from "next/link"

export const Aside = () => {
  return (
    <aside className="flex justify-center py-10 px-5 bg-cinza-500 rounded-lg h-[1500px] min-w-52">
        <Link className="h-fit" href={"/"} ><Image src={logo} alt="code connect logo"/></Link>
    </aside>
)
}
