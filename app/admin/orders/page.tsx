import { getOrder } from "@/app/dbengine";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
    let [orders, setOrders] = useState<any>()
    useEffect(() => {
        (async () => {
            try {
                const res: any = await getOrder
                setOrders(res)
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);
    return (
        <div className="w-11/12 lg:w-5/6  mx-[auto] mt-10">
            <div>
                <h1 className="text-xl font-bold ">{params.id.toUpperCase()}</h1>
                <p>View invoice</p>
            </div>
            <div className="rounded p-5 border mt-10 shadow-sm">
                <div className="flex flex-col justify-center h-full">
                    <div className="w-full mx-auto bg-white rounded-sm border border-gray-200">
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
                                                return <tr>
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
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <button className="bg-primary-blue rounded text-white p-3">
                        Mark as complete
                    </button>
                </div>
            </div>

        </div>
    )
}