'use client'
import Footer from "@/app/components/footer/Footer";
import Navbar from "@/app/components/navbar/Navbar";
import PhoneCard from "@/app/components/phonecard/Phonecard";
import Searchbar from "@/app/components/searchbar/Searchbar";
import { getAllPhones } from "@/app/dbengine";
import { useState, useEffect } from "react";
export default function Phone() {
    let [phones, setPhones] = useState([])

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
        <div>
            <Navbar />
            <div className="w-11/12 lg:w-5/6 m-auto" >
                <Searchbar />
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5'>
                    {phones.map((phone: any)=>{
                        return (<PhoneCard key={phone.id} product={phone} />)       
                    }
                    )}
                </div>

                <div className="flex flex-col items-center">
                    <span className="text-sm text-gray-700 dark:text-gray-400">
                        Showing <span className="font-semibold text-gray-900 dark:text-white">1</span> to <span className="font-semibold text-gray-900 dark:text-white">10</span> of <span className="font-semibold text-gray-900 dark:text-white">100</span> Entries
                    </span>
                    <div className="inline-flex mt-2 xs:mt-0">
                        <button className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary-blue rounded-l hover:bg-gray-900">
                            Prev
                        </button>
                        <button className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary-blue border-0 border-l border-white rounded-r hover:bg-gray-900">
                            Next
                        </button>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}