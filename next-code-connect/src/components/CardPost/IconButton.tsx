import { ButtonHTMLAttributes } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode
}
 
export default function IconButton({children, ...rest}: IconButtonProps) {
    return (
        <button {...rest} className="flex flex-col items-center">
            {children}
        </button>
    )
}
