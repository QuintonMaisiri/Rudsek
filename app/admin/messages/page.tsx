'use client'

import { getMessages } from "@/app/dbengine";
import { timeElapsed } from "@/app/helper_functions";
import { faSpinner, faCheck, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

export default function Page() {
    let [messages, setmessages] = useState<any>([])
    let [showRead, setShowRead] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                const res: any = await getMessages()
                setmessages(res)
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);
    return (
        <div className="w-11/12 lg:w-5/6  mx-[auto] mt-10">
            <div className="rounded p-5 border mt-10 shadow-sm">
                <div className="flex flex-col justify-center h-full">
                    <div className="w-full mx-auto bg-white rounded-sm border border-gray-200">
                        <div className="flex">
                            <div className={!showRead ? `p-3 bg-primary-blue text-white mt-5 mx-5 shadow cursor-pointer` : `p-3 bg-white text-black mt-5 mx-5 shadow cursor-pointer`}
                                onClick={() => {
                                    setShowRead(false)
                                }}
                            >
                                <p><FontAwesomeIcon icon={faSpinner} /> Inbox</p>
                            </div>
                            <div className={showRead ? `p-3 bg-primary-blue text-white mt-5 mx-5 shadow cursor-pointer` : `p-3 bg-white text-black mt-5 mx-5 shadow cursor-pointer`}
                                onClick={() => {
                                    setShowRead(true)
                                }}
                            >
                                <p><FontAwesomeIcon icon={faCheck} /> Read</p>
                            </div>
                        </div>
                        <div className="p-3">
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Date</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Name</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Email</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Message</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">View</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-gray-100">
                                        {
                                            messages.map((msg: any) => {
                                                if (msg.data.read == true && showRead || msg.data.read == false && !showRead) {
                                                    return (
                                                        <tr key={msg.data.userID}>
                                                            <td className="p-2 whitespace-nowrap">
                                                                <div className="flex items-center">
                                                                    <div className="font-medium">{timeElapsed(Date.now() - msg.data.date)}</div>
                                                                </div>
                                                            </td>
                                                            <td className="p-2 whitespace-nowrap">
                                                                <div className="text-left">{msg.data.name}  {msg.data.lastName}</div>
                                                            </td>
                                                            <td className="p-2 whitespace-nowrap">
                                                                <div className="text-left font-medium ">{msg.data.email}</div>
                                                            </td>
                                                            <td className="p-2 whitespace-nowrap">
                                                                <div className="text-left font-medium ">{msg.data.message.substring(0,10)} ...</div>
                                                            </td>
                                                            <td className="p-2 whitespace-nowrap">
                                                                <div className="text-lg text-center border py-2">
                                                                    <a href={`/admin/messages/message/${msg.id}`}>
                                                                        <FontAwesomeIcon icon={faEye} className="mr-2 text-primary-blue" />
                                                                        View
                                                                    </a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                }
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}