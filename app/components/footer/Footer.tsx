import { faMessage, faPhone, faShop } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer() {
    return (
        <div>
            <div className="w-full border-t border-t-gray-400 mt-20 ">
                <div className="w-5/6 text-sm  py-10 px-5 grid grid-cols-1 mx-[auto] md:grid-cols-3 lg:grid-cols-4 md:place-content-start gap-5 lg:gap-10 place-content-center">
                    <div>
                        <FontAwesomeIcon icon={faShop} className="text-primary-blue text-[26px]" />
                        <p className="mb-5">Rudsek</p>
                        <p className="text-sm"> We collect payment only after delivery of your phone. We also provide a 6 month long warranty to test out the phones. We will strip you of all your online transaction fears by operating transparently with you.</p>
                    </div>
                    <div>
                        <h2 className='mb-5 font-bold'>Popular brands</h2>
                        <ul>
                            <li className='text-sm mb-3'><a href="#">Huawei</a></li>
                            <li className='text-sm mb-3'><a href="#">Samsung</a></li>
                            <li className='text-sm mb-3'><a href="#">Oppo</a></li>
                            <li className='text-sm mb-3'><a href="#">Xiaomi</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='mb-5 font-bold'>Links</h2>
                        <ul>
                            <li className='text-sm mb-3'><a href="/">Home</a></li>
                            <li className='text-sm mb-3'><a href="/phones">Phones</a></li>
                            <li className='text-sm mb-3'><a href="/#about-us">About us</a></li>
                            <li className='text-sm mb-3'><a href="/contact-us">Contact us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='mb-5 font-bold'>Contact Details</h2>
                        <ul>
                            <li className='text-sm mb-3'><FontAwesomeIcon icon={faPhone}/> +263 777 777 777 </li>
                            <li className='text-sm mb-3'><FontAwesomeIcon icon={faMessage}/> terrencechimunda@gmail.com</li>
                            {/* <li className='text-sm mb-3'><FontAwesomeIcon icon={faTwitter}/></li>
                            <li className='text-sm mb-3'>Lorem, ipsum.</li> */}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t
        border-t-gray-400 ">
                <div className="flex justify-between my-5 w-5/6 mx-[auto]">
                    <p className="text-sm"> &copy; 2023 Rudsek</p>
                    <p className="text-sm">By Quinton Maisiri</p>
                </div>
            </div>
        </div>
    )
}