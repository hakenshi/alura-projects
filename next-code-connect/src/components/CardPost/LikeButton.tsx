'use client'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsUp} from "@fortawesome/free-solid-svg-icons/faThumbsUp";
import Loader from "@/components/Loader/loader";
import  {useFormStatus} from "react-dom"
interface LikeProps{
    likes: number
}
const LikeButton = ({likes}: LikeProps) => {

    const {pending} = useFormStatus()

    return (
        <button disabled={pending } className="flex flex-col items-center">
            {pending ?  (<Loader />) :  (<>
                <FontAwesomeIcon icon={faThumbsUp} className="w-6 h-6"/><p
                className="text-xs">{likes}</p>
            </>)
            }



        </button>
    );
};

export default LikeButton;