'use client'
import Footer from "@/app/components/footer/Footer";
import Navbar from "@/app/components/navbar/Navbar";
import Pagination from "@/app/components/pagination/pagination";
import PhoneCard from "@/app/components/phonecard/Phonecard";
import Searchbar from "@/app/components/searchbar/Searchbar";
import { getPhonesByBrand } from "@/app/dbengine";
import { useState, useEffect } from "react";

export default function Page({ params }: { params: { brand: String } }) {
    let [phones, setPhones] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const res = await getPhonesByBrand(params.brand as string)
                setPhones(res)
                console.log(phones)
            } catch (e) {
                console.log(e);
            }
        })();
    }, [params.brand, phones]);


    return (
        <div>
            <Navbar />
            <div className="w-11/12 lg:w-5/6 m-auto" >
                <Searchbar />
                <Pagination phones={phones} />
            </div>

            <Footer />
        </div>
    )
}
export const dynamic = 'force-dynamic'