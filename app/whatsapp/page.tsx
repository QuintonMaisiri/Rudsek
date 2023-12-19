'use client'

import { useState } from "react"
import { sendMessage } from "./twilio"

export default function Page() {
    let [msg, setMsg] = useState('')


    return (
        <div>
            <input placeholder="Add Message" className="p-5" type="text" onChange={(e) => {
                setMsg(e.target.value)
            }}
                value={msg}
            />
            <button
                onClick={async () => {
                    const data = {
                        message: msg
                    }
                    await fetch('/whatsapp/twi/', {
                        method: "POST",
                        body: JSON.stringify(data)
                    })
                }}
            >Send Message</button>
            <button
                onClick={
                    async () => {
                        const res = await fetch(`http://localhost:3001/api/v1/user/tynoemaisyry@gmail.com`)
                        console.log(await res.json())
                    }
                }
            >

                Get user
            </button>
        </div>
    )
}