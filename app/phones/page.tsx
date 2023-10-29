'use client'
import Footer from "@/app/components/footer/Footer";
import Navbar from "@/app/components/navbar/Navbar";
import Searchbar from "@/app/components/searchbar/Searchbar";
import { getAllPhones } from "@/app/dbengine";
import { useState, useEffect } from "react";
import Pagination from "../components/pagination/pagination";
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
                <Pagination phones={phones} />
            </div>

            <Footer />
        </div>
    )
}
export const dynamic = 'force-dynamic'