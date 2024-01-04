'use client'

import { getMessage, updateRead } from "@/app/dbengine";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faMultiply, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import BarLoader from "react-spinners/BarLoader";

export default function Page({ params }: { params: { id: string } }) {
    const id = params.id

    let [msg, setMsg] = useState<any>()
    let [retrievedMsg, setRetrievedMsg] = useState(false)
    let [sent, setSent] = useState(false)
    let [error, setError] = useState(false)
    let [showReplyPanel, setShowReplyPanel] = useState(false)
    let [reply, setReply] = useState<string>()

    useEffect(() => {
        (async () => {
            try {
                const res: any = await getMessage(id)
                setMsg(res)
                setRetrievedMsg(true)
                await updateRead(id)
                if (msg.replied == true){
                    setSent(true)
                }
            } catch (e) {
                console.log(e);
            }
        })();
    }, [id, msg, retrievedMsg]);

    if (retrievedMsg) {
        return (
            <div className="w-11/12 md:w-5/6 mx-[auto]  ">
                <div className={sent ? "bg-green-400 p-5 mx-auto text-center md:w-max text-white rounded shadow my-5 flex items-center w-11/12" : "hidden"}>
                    <FontAwesomeIcon icon={faCheck} className="mr-5 text-3xl" />
                    Reply has been successfully sent
                </div>
                <div className={error ? "bg-red-400 p-5 mx-auto text-center md:w-max text-white rounded shadow my-5 flex items-center w-11/12" : "hidden"}>
                    <FontAwesomeIcon icon={faMultiply} className="mr-5 text-3xl" />
                    An error has occured
                </div>
                <div className="mt-20">
                    <div className="flex justify-between items-center mb-5">
                        <p className="text-primary-blue">Name</p>
                        <p >{msg.name} {msg.lastName}</p>
                    </div>
                    <div className="flex justify-between items-center mb-5">
                        <p className="text-primary-blue">Email</p>
                        <p >{msg.email}</p>
                    </div>
                    <div className="flex justify-between items-center mb-5">
                        <p className="text-primary-blue">Date Created:</p>
                        <p >{new Date(msg.date).toUTCString()}</p>
                    </div>
                </div>
                <div className="p-3 border rounded my-5">
                  <p>{msg.message}</p>
                </div>
                <div>
                    <button
                        onClick={() => {
                           setShowReplyPanel(!showReplyPanel)
                        }}
                        className="bg-primary-blue px-5 py-3 text-white font-bold"
                    >
                        Reply
                    </button>
                </div>
                <div className={showReplyPanel ? "shadow absolute right-10 py-8 rounded" : "hidden"}>
                    <div className="bold absolute top-0 left-0 bg-primary-blue text-white rounded-t-lg w-full p-2 text-xs">
                        Reply :
                    </div>
                    <div className="my-5">
                        <textarea 
                        onChange={(e)=>setReply(e.target.value)}
                        value={reply} placeholder={'Enter reply here...'} cols={40} rows={10} className="w-full text-xs active:border border-white p-2"></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button 
                        onClick={async ()=>{
                            setShowReplyPanel(false)
                            const data = {
                                email : msg.email
                            }
                            const res = await fetch("/api/email",{
                                method: "POST",
                                headers: { "Content-Type": "application/json"},
                                body: JSON.stringify(data)
                            })
                            console.log(await res.json())
                        }}
                        className="p-3 shadow-sm rounded mx-2 bg-primary-blue "><FontAwesomeIcon icon={faPaperPlane} className="text-white"/></button>
                    </div>
                </div>
            </div>

        )
    } else {
        <div className="flex flex-col justify-center items-center w-full h-[100vh]">
            <BarLoader
                color={'#3BDBE3'}
                loading={true}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
            <p>Loading...</p>
        </div>
    }

}