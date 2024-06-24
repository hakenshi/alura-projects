'use client'

import { useEffect, useState } from "react"
import Comentario from "../Comment/comment"
import ModalReply from "../ModalReply/modal-reply"

export default function Replies({comments}: any) {
    
    const [showReplies, setShowReplies] = useState(false)
    const [replies, setReplies] = useState([])

    async function fetchData(url:string){
        const response = await fetch(url)
        const data = await response.json()

        if(data){
            setReplies(data)
        }
    }

    useEffect(() => {
        if(showReplies){
            fetchData(`/api/comment/${comments.id}/replies`)
        }
    },[showReplies])

    return (
    <div className="border-b border-cinza-400 p-2">
        <div >
           {comments.children.length > 0 && <button className="relative border-none bg-transparent pl-2 cursor-pointer text-xs font-normal before:content-[''] before:absolute before:top-1/2 before:-left-1/4 before:transform before:-translate-y-1/2 before:w-5 before:h-px before:bg-black" onClick={() => {setShowReplies(!showReplies)}}>{showReplies ? "Ocultar" : "Ver"} respostas</button>}
            {showReplies && 
            <ul>
                {replies.map((reply:any) => <li key={reply}><Comentario comment={reply} /> <ModalReply comment={reply} /></li>)}
            </ul>
            }
        </div>
    </div>
)
}
