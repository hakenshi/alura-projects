import { AvatarProps } from "@/types"
import Image from "next/image"

export const Avatar = ({name, url}: AvatarProps) => {
  return (
   <ul className="flex items-center gap-3 text-cinza-300">
    <li><Image src={url} alt={name} height={32} width={32}/></li>
    <li className="font-semibold">@{name}</li>
   </ul>
  )
}
