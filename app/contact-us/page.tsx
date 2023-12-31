'use client'

import { useState } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { addNewMessage } from "../dbengine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faMultiply } from "@fortawesome/free-solid-svg-icons";

export default function ContactUs() {
    let [name, setName] = useState<string>()
    let [lastName, setLastName] = useState<string>()
    let [email, setEmail] = useState<string>()
    let [msg, setMsg] = useState<string>()
    let [incompleForm, setIncompleteForm] = useState(false)
    let [shortMsg, setShortMsg] = useState(false)
    let [sent, setSent] = useState(false)
    let [error, setError] = useState(false)

    return (
        <div>
            <Navbar />
            <div className='mx-[auto] w-5/6 mt-10'>
                <div className={sent ? "bg-green-400 p-5 mx-auto text-center md:w-max text-white rounded shadow my-5 flex items-center w-11/12" : "hidden"}>
                    <FontAwesomeIcon icon={faCheck} className="mr-5 text-3xl" />
                    Your message has been sent successfully. We will reply as soon as we can.
                </div>
                <div className={error ? "bg-red-400 p-5 mx-auto text-center md:w-max text-white rounded shadow my-5 flex items-center w-11/12" : "hidden"}>
                    <FontAwesomeIcon icon={faMultiply} className="mr-5 text-3xl" />
                    An error has occured. Please try again.
                </div>
                <div className={incompleForm ? "bg-red-400 p-5 mx-auto text-center md:w-max text-white rounded shadow my-5 flex items-center w-11/12" : "hidden"}>
                    <FontAwesomeIcon icon={faMultiply} className="mr-5 text-3xl" />
                    Make sure you entered all the required details
                </div>
                <div className={shortMsg ? "bg-red-400 p-5 mx-auto text-center md:w-max text-white rounded shadow my-5 flex items-center w-11/12" : "hidden"}>
                    <FontAwesomeIcon icon={faMultiply} className="mr-5 text-3xl" />
                    Make sure your message is not too short
                </div>
                <h1 className="text-[64px] text-gray-300">
                    Fill the form <br /> to <span className="text-primary-blue">contact us.</span>
                </h1>
                <div className='flex flex-wrap pt-5 lg:flex-row '>
                    <div className='lg:basis-3/5 lg:pr-10 mb-10 w-full'  >
                        <form action="#" method="POST" className="">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <div className="mt-2.5">
                                        <input
                                            onChange={(e) => setName(e.target.value)}
                                            value={name} placeholder="Name" type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full  border-0 px-3.5 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div>
                                    <div className="mt-2.5">
                                        <input
                                            onChange={(e) => setLastName(e.target.value)}
                                            value={lastName} placeholder="Last Name" type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full  border-0 px-3.5 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="mt-2.5">
                                        <input
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={email} placeholder="Email address" type="text" name="email" id="email" autoComplete="organization" className="block w-full  border-0 px-3.5 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="mt-2.5">
                                        <textarea
                                            onChange={(e) => setMsg(e.target.value)}
                                            value={msg} placeholder="How can we help you ? &#10; Describe here your message" name="message" id="message" rows={4} className="block w-full  border-0 px-3.5 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10">
                                <button
                                    onClick={async () => {
                                        setError(false)
                                        setIncompleteForm(false)
                                        setSent(false)
                                        setShortMsg(false)
                                        if (!name || !email || !lastName || !msg) {
                                            setIncompleteForm(true)
                                        } else if (msg.length < 20) {
                                            setShortMsg(true)
                                        } else {
                                            const success = await addNewMessage({
                                                name,
                                                lastName,
                                                email,
                                                message: msg,
                                            })
                                            if (success) {
                                                setSent(true)
                                                setName("")
                                                setLastName("")
                                                setEmail("")
                                                setMsg("")
                                            } else {
                                                setError(true)
                                            }
                                        }
                                    }
                                    }
                                    type="submit" className='block w-full rounded-md bg-primary-blue px-3.5 py-3.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-violet-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-950 '>Send message </button>
                            </div>
                        </form>
                    </div>

                    <div className='lg:basis-2/5'>
                        <p className='text=gray-300 leading-[30px]'>For all questions, comments and concerns,email us at <a href='#' className='text-primary-blue'> terencechimunda@gmail.com</a></p>
                        <br />
                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}