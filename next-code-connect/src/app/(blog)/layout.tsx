import {ReactNode} from "react";
import {Aside} from "@/components/Aside";
import SearchBar from "@/components/SearchBar";

export default function PostLayout({children}: { children: ReactNode }) {
    return (
        <div className="flex w-full justify-center gap-5 p-5">
            <Aside/>
            <div className="flex flex-col items-center">
                <SearchBar/>
                {children}
            </div>
        </div>
    )
}