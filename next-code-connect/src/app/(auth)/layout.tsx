import React from "react";

export default function LoginLayout({children}:{children:React.ReactNode}){
    return(
        <main className="w-screen h-screen flex flex-col items-center justify-center">
            {children}
        </main>
    )
}