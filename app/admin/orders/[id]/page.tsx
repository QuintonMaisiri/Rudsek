'use client'
import Navbar from "@/app/components/admin/navbar/navbar";
import { getOrder } from "@/app/dbengine";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
    const id = params.id

    let [order, setOrder] = useState<any>()
    useEffect(() => {
        (async () => {
            try {
                const res: any = await getOrder(id)
                setOrder(res)
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);

    return (
        <div>
            <Navbar />
            <div>
                <div>
                    <p>UserId: Some sort of id</p>
                </div>
                <div>
                    <div>
                        <p>Name:</p>
                        <p>Quinton Maisiri</p>
                    </div>
                    <div>Date Created:</div>
                    <p>Date</p>
                </div>
                <div>
                    <table>
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
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="font-medium text-gray-800">order.data.Date</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">order.data.userID</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-green-500">order.data.Status</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-lg text-center">
                                        <a href={`admin/orders/${order.id}`}>
                                            View
                                        </a>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div>
                    <button
                    className="bg-primary-blue px-5 py-3 text-primary font-bold"
                    >
                        Mark As Delivered
                    </button>
                </div>
            </div>
        </div>
    )

}