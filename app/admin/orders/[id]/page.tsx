'use client'

import { enumOrderStatus, getOrder, getUserByEmail, updateStatus } from "@/app/dbengine";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCross, faMultiply } from "@fortawesome/free-solid-svg-icons";
import BarLoader from "react-spinners/BarLoader";

export default function Page({ params }: { params: { id: string } }) {
    const id = params.id

    let [order, setOrder] = useState<any>({ cart: [] })
    let [retrievedOrder, setRetrievedOrder] = useState(false)
    let [delivered, setDelivered] = useState(false)
    let [error, setError] = useState(false)
    let [user, setUser] = useState<any>({})

    useEffect(() => {
        (async () => {
            try {
                const res: any = await getOrder(id)
                setOrder(res)
                setRetrievedOrder(true)
                if (order.userID) {
                    let resUser: any = await getUserByEmail(order.userID)
                    setUser(resUser)
                    if(order.status == enumOrderStatus.DELIVERED){
                        setDelivered(true)
                    }
                }
            } catch (e) {
                console.log(e);
            }
        })();
    }, [id, order, retrievedOrder]);

    if (retrievedOrder) {
        return (
            <div className="w-11/12 md:w-5/6 mx-[auto]  ">
                <div className={delivered ? "bg-green-400 p-5 mx-auto text-center md:w-max text-white rounded shadow my-5 flex items-center w-11/12" : "hidden"}>
                    <FontAwesomeIcon icon={faCheck} className="mr-5 text-3xl" />
                    Order has successfully been marked as delivered
                </div>
                <div className={error ? "bg-red-400 p-5 mx-auto text-center md:w-max text-white rounded shadow my-5 flex items-center w-11/12" : "hidden"}>
                    <FontAwesomeIcon icon={faMultiply} className="mr-5 text-3xl" />
                    An error has occured
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
                        className={delivered ? "bg-gray-200 px-5 py-3 text-white font-bold" : "bg-primary-blue px-5 py-3 text-white font-bold"}
                        disabled={delivered}
                        onClick={async () => {
                            setDelivered(false)
                            setError(false)
                            const res = await updateStatus(id)
                            if (res) {
                                setDelivered(true)
                            } else {
                                setError(true)
                            }
                        }}
                    >
                        Mark As Delivered
                    </button>
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