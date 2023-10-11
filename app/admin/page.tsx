'use client';

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession } from 'next-auth/react';
import { redirect } from "next/navigation";

export default function Admin() {
    const { data: session } = useSession();
    
    if(!session){
        redirect('/auth/signin')
    }
    return (
        <div className="w-11/12 lg:w-5/6  mx-[auto] mt-10">
            <div>
                <h1 className="text-xl font-bold ">Pending Orders</h1>
                <p>manage your orders</p>
            </div>
            <div className="rounded p-5 border mt-10 shadow-sm">
                <div className="relative mt-5">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute top-4 left-3 text-gray-400" />
                    <input type="text" placeholder="search" className="p-3 pl-8 border rounded w-full" />
                </div>
                <div className="mt-10">
                    <div className="flex flex-col justify-center h-full">
                        <div className="w-full mx-auto bg-white rounded-sm border border-gray-200">
                            <div className="p-3">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full">
                                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                            <tr>
                                                <th className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-left">Name</div>
                                                </th>
                                                <th className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-left">Email</div>
                                                </th>
                                                <th className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-left">Spent</div>
                                                </th>
                                                <th className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-center">Country</div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm divide-y divide-gray-100">
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="font-medium text-gray-800">Alex Shatov</div>
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left">alexshatov@gmail.com</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left font-medium text-green-500">$2,890.66</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-lg text-center">??</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="font-medium text-gray-800">Philip Harbach</div>
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left">philip.h@gmail.com</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left font-medium text-green-500">$2,767.04</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-lg text-center">??</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="font-medium text-gray-800">Mirko Fisuk</div>
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left">mirkofisuk@gmail.com</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left font-medium text-green-500">$2,996.00</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-lg text-center">??</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="font-medium text-gray-800">Olga Semklo</div>
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left">olga.s@cool.design</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left font-medium text-green-500">$1,220.66</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-lg text-center">??</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="font-medium text-gray-800">Burak Long</div>
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left">longburak@gmail.com</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left font-medium text-green-500">$1,890.66</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-lg text-center">??</div>
                                                </td>
                                            </tr>
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