import Image from "next/image"
import logo from "../../../public/logo.png"
import Link from "next/link"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleExclamation, faFile, faRightFromBracket, faUser} from "@fortawesome/free-solid-svg-icons";
import {getServerSideProps} from "next/dist/build/templates/pages";
import {options} from "@/app/api/auth/[...nextauth]/options";
import {getServerSession} from "next-auth";

export const Aside = async () => {

   const session = await getServerSession(options)

  return (
    <aside className="flex flex-col items-center gap-20 py-10 px-5 bg-cinza-500 rounded-lg min-h-[1500px] min-w-52">

        <div className="flex flex-col items-center gap-10 fixed">
        <Link className="h-fit" href={"/"} ><Image src={logo} alt="code connect logo"/></Link>
            <button className="border-verde-0 border border-collapse p-3 text-xl rounded-lg text-verde-0 hover:bg-verde-0 hover:text-verde-2 transition-all ease-in duration-150">Publicar</button>
            <Link className="flex gap-2 flex-col text-cinza-300 hover:text-cinza-100 text-2xl transition-all ease-in duration-150" href={"/"}><FontAwesomeIcon icon={faFile} /><p className="text-xl">Feed</p></Link>
            <Link className="flex gap-2 flex-col text-cinza-300 hover:text-cinza-100 text-2xl transition-all ease-in duration-150" href={"/"}><FontAwesomeIcon icon={faUser} /><p className="text-xl">Perfil</p></Link>
            <Link className="flex gap-2 flex-col text-cinza-300 hover:text-cinza-100 text-2xl transition-all ease-in duration-150" href={"/"}><FontAwesomeIcon icon={faCircleExclamation} /><p className="text-xl">Sobre Nós</p></Link>
            <Link className="flex gap-2 flex-col text-cinza-300 hover:text-cinza-100 text-2xl transition-all ease-in duration-150" href={session ? "/api/auth/signout" : '/api/auth/login'}><FontAwesomeIcon icon={faRightFromBracket} /><p className="text-xl">{session ? "Sair": "Entrar"}</p></Link>
        </div>
    </aside>
)
}
