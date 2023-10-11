'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Searchbar from "../../components/searchbar/Searchbar";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import PhoneCard from "../../components/phonecard/Phonecard";
import Image from "next/image";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { addToCart } from '@/redux/cart.slice';
import { useDispatch } from "react-redux"
import { useState, useEffect } from "react";
import { getAllPhones, getPhone } from "@/app/dbengine";
import { set } from "firebase/database";


export default function Phone({ params }: { params: { id: string } }) {

    const dispatch = useDispatch();
    let [phone, setPhone] = useState({ 
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
    } )
    let [phones,setPhones] = useState([])

    const id = params.id
    console.log(phone)

    useEffect(() => {
        (async () => {
            try {
                const resPhone = await getPhone(id)
                const resPhones = await getAllPhones()
                setPhone(resPhone)
                setPhones(resPhones)
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="w-11/12 lg:w-5/6 m-auto ">
                <Searchbar />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="">
                        <Image
                            src={'/images/phone.jpg'}
                            width={200}
                            height={300}
                            alt="hauwei phone"
                            className="mx-[auto] mb-5"
                        />
                        <div className="grid grid-cols-3">

                            <Image
                                src={'/images/phone.jpg'}
                                width={50}
                                height={300}
                                alt="hauwei phone"
                            />
                            <Image
                                src={'/images/phone.jpg'}
                                width={50}
                                height={300}
                                alt="hauwei phone"
                            />

                            <Image
                                src={'/images/phone.jpg'}
                                width={50}
                                height={300}
                                alt="hauwei phone"
                            />


                        </div>
                        <div className="grid grid-cols-5 w-1/3 mt-5">
                            <FontAwesomeIcon icon={faStar} className="text-yellow-300 text-xl" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-300 text-xl" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-300 text-xl" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-300 text-xl" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-300 text-xl" />
                        </div>

                    </div>
                    <div>
                        <div className="bg-primary-blue p-5">
                            <p className="text-white font-bold text-center ">{phone.name}</p>
                        </div>
                        <div>
                            <table className="min-w-full">
                                <tbody>
                                    <tr className=" border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Size</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {phone.size}
                                        </td>
                                    </tr>
                                    <tr className="bg-primary-blue border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Memory</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {phone.memory}
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Network</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {phone.network}
                                        </td>
                                    </tr>
                                    <tr className="bg-primary-blue border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Front Camera</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {phone.frontCamera}
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Battery</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {phone.battery}
                                        </td>
                                    </tr>
                                    <tr className="bg-primary-blue border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Back Camera</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {phone.backCamera}
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Fingerprint</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {phone.fingerPrint}
                                        </td>
                                    </tr>
                                    <tr className="bg-primary-blue border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Android</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {phone.android}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="md:col-span-2 lg:col-span-1">
                        <div className="border border-primary-blue p-5 md:mt-10 lg:mt-0">
                            <p className="text-primary-blue text-center font-bold ">Description</p>
                        </div>
                        <div>
                            <h2 className="text-primary-blue font-bold font-xl mt-5">
                                Overview
                            </h2>
                            <p>{phone.description}</p>
                        </div>
                        <div>
                            <div className="flex items-center mb-5 mt-5">
                                <div className="grid grid-cols-5 w-1/3">
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-300 text-xl" />
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-300 text-xl" />
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-300 text-xl" />
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-300 text-xl" />
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-300 text-xl" />
                                </div>
                                <p className="text-yellow-300 ml-5" >Add Stars</p>
                            </div>
                            <button
                                onClick={() => {
                                    dispatch(addToCart(phone))
                                }}
                                className="text-white bg-primary-blue w-full p-3" type="button"> <FontAwesomeIcon icon={faCartShopping} /> Add to cart</button>
                        </div>
                    </div>
                </div>

                <div className='mt-10'>
                    <h2 className='mb-5 text-primary-blue font-bold'>
                        Customer Reviews
                    </h2>
                    <div className='border border-primary-blue rounded-lg p-3'>
                        <textarea className="w-full resize-none" placeholder="Leave a comment ..." rows={5} />
                    </div>
                    <div>
                        <p className="text-sm text-primary-blue text-end mt-5">View Comments</p>
                    </div>
                </div>

                <div className='mt-20 overflow-hidden'>
                    <h2 className='mb-10 text-primary-blue font-bold'>
                        Similar phones
                    </h2>
                    <div className='overflow-x-auto flex p-5 rounded-lg'>
                        {phones.map((phone: any) => {
                            return (<PhoneCard key={phone.id} product={phone} />)
                        })}
                    </div>
                </div>


            </div>
            <Footer />
        </div>

    )
}