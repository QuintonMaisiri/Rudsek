'use client'

import { enumOrderStatus, getOrders } from "@/app/dbengine";
import { useEffect, useState } from "react";
import { timeElapsed } from "../helper_functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEye, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { isPending } from "@reduxjs/toolkit";


export default function Page({ params }: { params: { id: string } }) {

    let [orders, setOrders] = useState<any>([])
    let [showPending, setShowPending] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                const res: any = await getOrders()
                setOrders(res)
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
                            <div className={showPending ? `p-3 bg-primary-blue text-white mt-5 mx-5 shadow cursor-pointer` : `p-3 bg-white text-black mt-5 mx-5 shadow cursor-pointer`}
                                onClick={() => {
                                    setShowPending(true)
                                }}
                            >
                                <p><FontAwesomeIcon icon={faSpinner} /> Pending</p>
                            </div>
                            <div className={!showPending ? `p-3 bg-primary-blue text-white mt-5 mx-5 shadow cursor-pointer` : `p-3 bg-white text-black mt-5 mx-5 shadow cursor-pointer`}
                                onClick={() => {
                                    setShowPending(false)
                                }}
                            >
                                <p><FontAwesomeIcon icon={faCheck} /> Delivered</p>
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
                                                <div className="font-semibold text-left">UserID</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Status</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-gray-100">
                                        {
                                            orders.map((order: any) => {
                                                if (order.data.status == enumOrderStatus.PENDING && isPending || order.data.status == enumOrderStatus.DELIVERED && !isPending) {
                                                    return (
                                                        <tr key={order.data.userID}>
                                                            <td className="p-2 whitespace-nowrap">
                                                                <div className="flex items-center">
                                                                    <div className="font-medium">{timeElapsed(Date.now() - order.data.date)}</div>
                                                                </div>
                                                            </td>
                                                            <td className="p-2 whitespace-nowrap">
                                                                <div className="text-left">{order.data.userID}</div>
                                                            </td>
                                                            <td className="p-2 whitespace-nowrap">
                                                                <div className="text-left font-medium ">{order.data.status}</div>
                                                            </td>
                                                            <td className="p-2 whitespace-nowrap">
                                                                <div className="text-lg text-center border py-2">
                                                                    <a href={`admin/orders/${order.id}`}>
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