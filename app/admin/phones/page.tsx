'use client'
import { faMagnifyingGlass, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deletePhone, getAllPhones } from "@/app/dbengine";
import { useState, useEffect } from "react";


export default function Admin() {

    let [phones, setPhones] = useState([{ id: 0, data: { 
        name: 'nothing',
        brand: 'nothing',
        size: 'nothing',
        network: 'nothing',
        battery: 'nothing',
        frontCamera: 'nothing',
        backCamera: 'nothing',
        fingerPrint: 'nothing',
        android: 'nothing',
        description: 'nothing',
        simCard: 'nothing',
        price: 'nothing',
        memory: 'nothing'
    } }]);


    useEffect(() => {
        (async () => {
            try {
                const res = await getAllPhones()
                setPhones(res)
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);

    const tableHeadings = [
        'Name', 'Size', 'Memory', 'Network', 'Back Camera', 'Front Camera', 'Sim Card', 'Android', 'Battery', 'FingerPrint'
    ]

    return (
        <div className="w-11/12 lg:w-5/6  mx-[auto] mt-10">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                    <h1 className="text-xl font-bold ">Phones</h1>
                    <p>manage your phones</p>
                </div>
                <div className="mt-10 md:mt-0">
                    <a href="/admin/phones/new">
                        <button className="bg-primary-blue rounded p-3 text-white w-full md:w-[auto]">
                            <FontAwesomeIcon icon={faPlus} className="text-white mr-5" />
                            Add New Phone
                        </button>
                    </a>
                </div>
            </div>
            <div className="rounded p-5 border mt-10 shadow-sm">
                <div className="relative mt-5">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute top-4 left-3 text-gray-400" />
                    <input type="text" placeholder="search" className="p-3 pl-8 border rounded w-full " />
                </div>
                <div className="mt-10">
                    <div className="flex flex-col justify-center h-full">
                        <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                            <div className="p-3">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full">
                                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                            <tr>
                                                {tableHeadings.map((heading) => {
                                                    return <th className="p-2 whitespace-nowrap">
                                                        <div className="font-semibold text-left">{heading}</div>
                                                    </th>
                                                })}
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm divide-y divide-gray-100">
                                            {/* 'Name','Size','Memory','Network','Back Camera','Front Camera','Sim Card','Android','Battery','FingerPrint' */}
                                            {phones.map((phone) => {
                                                return (
                                                    <tr>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="font-medium text-gray-800">{phone.data.name}</div>
                                                            </div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="font-medium text-gray-800">{phone.data.size}</div>
                                                            </div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="font-medium text-gray-800">{phone.data.memory}</div>
                                                            </div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="font-medium text-gray-800">{phone.data.network}</div>
                                                            </div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="font-medium text-gray-800">{phone.data.backCamera}</div>
                                                            </div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="font-medium text-gray-800">{phone.data.frontCamera}</div>
                                                            </div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="font-medium text-gray-800">{phone.data.simCard}</div>
                                                            </div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="font-medium text-gray-800">{phone.data.android}</div>
                                                            </div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="font-medium text-gray-800">{phone.data.battery}</div>
                                                            </div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="font-medium text-gray-800">{phone.data.fingerPrint}</div>
                                                            </div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                               <button><FontAwesomeIcon icon={faTrash} className="text-red[400] text-lg" type="button" onClick={
                                                                ()=>{
                                                                    deletePhone(phone.id)
                                                                }
                                                               }/></button>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                )
                                            })}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}