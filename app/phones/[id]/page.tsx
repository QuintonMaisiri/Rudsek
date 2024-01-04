'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import PhoneCard from "../../components/phonecard/Phonecard";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { addToCart } from '@/redux/cart.slice';
import { useDispatch } from "react-redux"
import { useState, useEffect } from "react";
import { addComment, getAllPhones, getComments, getPhone } from "@/app/dbengine";
import Rating from "@/app/components/rating/rating";
import ImageSlider from "@/app/components/image_slider/image_slider";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import { timeElapsed } from "@/app/helper_functions";
import BarLoader from "react-spinners/BarLoader";


export default function Phone({ params }: { params: { id: string } }) {
    const { data: session } = useSession()
    const user = session?.user?.email

    const dispatch = useDispatch();

    let [phone, setPhone] = useState<any>()
    let [phones, setPhones] = useState<any>([])
    let [showComments, setShowComments] = useState(false)
    let [comment, setComment] = useState<string>()
    let [comments, setComments] = useState([{}])
    let [rated, setRated] = useState(false)

    const id = params.id


    useEffect(() => {
        (async () => {
            try {
                const resPhone = await getPhone(id)
                const resPhones = await getAllPhones()
                const resComments = await getComments(id)
                setPhone(resPhone)
                setPhones(resPhones)
                setComments(resComments)
            } catch (e) {
                console.log(e);
            }
        })();
    }, [id]);

    if (phone == undefined) {
        return (
           <div className="w-full h-[100vh] flex flex-col items-center justify-center">
             <BarLoader
                color={'#3BDBE3'}
                loading={true}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
            <p>Loading... Please be patient</p>
           </div>
        )
    } else {
        return (
            <div>
                <Navbar />
                <div className="w-11/12 lg:w-5/6 m-auto mt-20">
                    <div className={rated ? "bg-green-400 p-5 w-max mx-[auto] text-white my-5 shadow rounded" : 'hidden'}>
                        Thank you for your rating, Pliz continue to support us!
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div>
                            <ImageSlider imgs={phone.image} />
                            <div className="flex items-center w-1/3 mt-5">
                                <FontAwesomeIcon icon={faStar} className="text-yellow-300 text-lg" />
                                <p className="ml-3 text-sm">{phone.rating ? phone.rating : 'not rated yet'}</p>
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
                                <div>
                                    <Rating props={{ phoneID: id }} />
                                </div>
                                <button
                                    onClick={() => {
                                        if (session) {
                                            dispatch(addToCart(phone as any))
                                        } else {
                                            window.alert('Sign in or register first')
                                            signIn()
                                        }
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
                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className="w-full resize-none" placeholder="Leave a comment ..." rows={5} />
                        </div>
                        <div className="flex justify-end" >
                            <button
                                disabled={!comment}
                                onClick={() => {
                                    if (session) {
                                        addComment(id, user!, comment!)
                                        setComment("")
                                    }
                                    else {
                                        signIn()
                                    }
                                }}
                                className="text-white bg-primary-blue my-5 p-3 "
                                type="button">Add comment</button>
                        </div>
                        <div>
                            <p
                                onClick={
                                    () => { setShowComments(!showComments) }
                                }
                                className="text-sm text-primary-blue mt-5 cursor-pointer">{showComments ? "Close comments" : "View Comments"}</p>
                        </div>
                        {showComments
                            ?
                            <div>
                                {
                                    comments.map((comment: any) => {
                                        return <div key={comment} className="w-full my-5 p-5">
                                            <p className="text-base">{comment.comment}</p>
                                            <div className="flex justify-between mt-5">
                                                <p className="text-xs md:text-sm text-gray-400">{comment.user == undefined ? "no comments" : <span className="rounded-full border bg-primary-blue text-white border-primary-blue py-1 px-3 ">{` ${comment.user}`}</span>}</p>
                                                <p className="text-xs md:text-sm text-primary-blue text-right">{timeElapsed(Date.now() - comment.date)}</p>
                                            </div>
                                        </div>
                                    })
                                }

                            </div>
                            :
                            null}
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
}
export const dynamic = 'force-dynamic'