'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { addRating, hasAddedRating } from "@/app/dbengine";
import { useSession,signIn } from "next-auth/react";

export default function Rating({props} : {props : {phoneID : string}}) {
    let [starsSelected, setStarsSelected] = useState(0)
    let [addedRating, setAddedRating] = useState(false)
    let [user,setUser] = useState('')

    const {data : session} = useSession()
   

    useEffect(() => {
        (async () => {
            try {
                setUser(session?.user?.email!)
                console.log(user)
                const res : any = await hasAddedRating(user || '', props.phoneID)
                setAddedRating( res)
            } catch (e) {
                console.log(e);
            }
        })();
    }, [session, user]);

    return <div className={addedRating ? 'hidden' : 'flex items-center mb-5 mt-5'}>
        <div className="grid grid-cols-5 w-1/3">
            <FontAwesomeIcon
                onClick={() => {
                    setStarsSelected(1)
                }}
                icon={faStar} className={starsSelected > 0 ? `text-yellow-300 text-lg` : 'text-gray-300 text-lg'} />
            <FontAwesomeIcon
                onClick={() => {
                    setStarsSelected(2)
                }}
                icon={faStar} className={starsSelected > 1 ? `text-yellow-300  text-lg` : 'text-gray-300 text-lg'} />
            <FontAwesomeIcon
                onClick={() => {
                    setStarsSelected(3)
                }}
                icon={faStar} className={starsSelected > 2 ? `text-yellow-300  text-lg` : 'text-gray-300 text-lg'} />
            <FontAwesomeIcon
                onClick={() => {
                    setStarsSelected(4)
                }}
                icon={faStar} className={starsSelected > 3 ? `text-yellow-300  text-lg` : 'text-gray-300 text-lg'} />
            <FontAwesomeIcon
                onClick={() => {
                    setStarsSelected(5)
                }}
                icon={faStar} className={starsSelected > 4 ? `text-yellow-300  text-lg` : 'text-gray-300 text-lg'} />
        </div>
        <p
            onClick={() => {
                if (session) {
                    addRating(props.phoneID, user!,starsSelected)
                    setAddedRating(true)
                }
                else {
                    signIn()
                }
                
            }}
            className="bg-yellow-300 ml-5 cursor-pointer text-white shadow rounded p-2 " >Add Stars</p>
    </div >

}