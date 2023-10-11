'use client'
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAllPhones } from "@/app/dbengine";
import { useState, useEffect } from "react";


export default function Admin() {

    let [phones, setPhones] = useState();

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
                                                {phones.forEach((phone) => {
                                                    return <th className="p-2 whitespace-nowrap">
                                                        <div className="font-semibold text-left">{phone.data.name}</div>
                                                    </th>
                                                })}
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm divide-y divide-gray-100">
                                                {phones.forEach((phone) => {
                                                    return(
                                                    <tr>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="font-medium text-gray-800">{phone.data.name}</div>
                                                            </div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="font-medium text-gray-800">{phone.data.brand}</div>
                                                            </div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="font-medium text-gray-800">{phone.data.}</div>
                                                            </div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="font-medium text-gray-800">{phone.data.name}</div>
                                                            </div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="font-medium text-gray-800">{phone.data.name}</div>
                                                            </div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="font-medium text-gray-800">{phone.data.name}</div>
                                                            </div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="font-medium text-gray-800">{phone.data.name}</div>
                                                            </div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="font-medium text-gray-800">{phone.data.name}</div>
                                                            </div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="font-medium text-gray-800">{phone.data.name}</div>
                                                            </div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="font-medium text-gray-800">{phone.data.name}</div>
                                                            </div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="font-medium text-gray-800">{phone.data.name}</div>
                                                            </div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="font-medium text-gray-800">{phone.data.name}</div>
                                                            </div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="font-medium text-gray-800">{phone.data.name}</div>
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