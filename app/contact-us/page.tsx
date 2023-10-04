import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

export default function ContactUs() {
    return (
        <div>
            <Navbar />
            <div className='mx-[auto] w-5/6 mt-10'>
                <h1 className="text-[64px] text-gray-300">
                    Fill the form <br /> to <span className="text-primary-blue">contact us.</span>
                </h1>
                <div className='flex flex-wrap pt-5 lg:flex-row '>
                    <div className='lg:basis-3/5 lg:pr-10 mb-10 w-full'  >
                        <form action="#" method="POST" className="">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <div className="mt-2.5">
                                        <input placeholder="Name" type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full  border-0 px-3.5 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div>
                                    <div className="mt-2.5">
                                        <input placeholder="Last Name" type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full  border-0 px-3.5 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="mt-2.5">
                                        <input placeholder="Email address" type="text" name="email" id="email" autoComplete="organization" className="block w-full  border-0 px-3.5 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="mt-2.5">
                                        <textarea placeholder="How can we help you ? &#10; Describe here your message" name="message" id="message" rows={4} className="block w-full  border-0 px-3.5 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10">
                                <button type="submit" className='block w-full rounded-md bg-primary-blue px-3.5 py-3.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-violet-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-950 '>Send message </button>
                            </div>
                        </form>
                    </div>

                    <div className='lg:basis-2/5'>
                        <p className='text=gray-300 leading-[30px]'>For all questions, comments and concerns,email us at <a href='#' className='text-primary-blue'> terencechimunda@gmail.com</a></p>
                        <br />
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}