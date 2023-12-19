'use client'

import { getOrder, getUserByEmail, updateStatus } from "@/app/dbengine";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Page({ params }: { params: { id: string } }) {
    const id = params.id

    let [order, setOrder] = useState<any>({ cart: [] })
    let [delivered, setDelivered] = useState(false)
    let [user, setUser] = useState<any>({})

    useEffect(() => {
        (async () => {
            try {
                const res: any = await getOrder(id)
                setOrder(res)
                if (order.userID) {
                    let resUser: any = await getUserByEmail(order.userID)
                    setUser(resUser)
                }
            } catch (e) {
                console.log(e);
            }
        })();
    }, [id, order]);

    return (
        <div className="w-11/12 md:w-5/6 mx-[auto]  ">
             <div className={delivered ? "bg-green-400 p-5 mx-auto w-max text-white rounded shadow my-5 flex items-center" : "hidden"}>
                <FontAwesomeIcon icon={faCheck}  className="mr-5 text-3xl"/>
                    Order has successfully been marked as delivered
                </div>
            <div className="mt-20">
                <div className="flex justify-between items-center mb-5">
                    <p className="text-primary-blue">Name</p>
                    <p >{user.name}</p>
                </div>
                <div className="flex justify-between items-center mb-5">
                    <p className="text-primary-blue">Email</p>
                    <p >{user.email}</p>
                </div>
                <div className="flex justify-between items-center mb-5">
                    <p className="text-primary-blue">Phone Number</p>
                    <p >{user.phoneNumber}</p>
                </div>
                <div className="flex justify-between items-center mb-5">
                    <p className="text-primary-blue">Date Created:</p>
                    <p >{new Date(order.date).toUTCString()}</p>
                </div>
            </div>
            <div>
                <table className="w-full mb-10">
                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">Name</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">Qty</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">Price</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">Total</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100">
                        {
                            order.cart.map((item: any) => {
                                return (
                                    <tr key={item.name}>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="font-medium  text-gray-800">{item.name}</div>
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left font-bold">{item.qty}</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left font-medium font-bold">{item.price}</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left font-medium text-green-500 font-bold">{item.price * item.qty}</div>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
            <div>
                <button
                    className={delivered ? "bg-gray-200 px-5 py-3 text-white font-bold" :"bg-primary-blue px-5 py-3 text-white font-bold"}
                    disabled={delivered}
                    onClick={ async ()=>{
                        setDelivered(false)
                        const res = await updateStatus(id)
                        const result = res.json()
                        if (res.msg == undefined){
                            setDelivered(true)
                        }
                    }}
                >
                    Mark As Delivered
                </button>
            </div>
        </div>

    )

}