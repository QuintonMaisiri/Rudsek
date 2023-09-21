import { faShop } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer() {
    return (
        <div>
            <div className="w-full border-t border-t-gray-400 mt-20 ">
                <div className="w-5/6 text-sm  py-10 px-5 grid grid-cols-4 mx-[auto]">
                    <div>
                        <FontAwesomeIcon icon={faShop} className="text-primary-blue text-[26px]" />
                        <p className="mb-5">Rudsek</p>
                        <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolores deserunt, quibusdam placeat corporis possimus neque quae libero enim sed?</p>
                    </div>
                    <div>
                        <h2 className='mb-5 font-bold'>Links</h2>
                        <ul>
                            <li className='text-sm mb-3'>Lorem, ipsum.</li>
                            <li className='text-sm mb-3'>Lorem, ipsum.</li>
                            <li className='text-sm mb-3'>Lorem, ipsum.</li>
                            <li className='text-sm mb-3'>Lorem, ipsum.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='mb-5 font-bold'>Links</h2>
                        <ul>
                            <li className='text-sm mb-3'>Lorem, ipsum.</li>
                            <li className='text-sm mb-3'>Lorem, ipsum.</li>
                            <li className='text-sm mb-3'>Lorem, ipsum.</li>
                            <li className='text-sm mb-3'>Lorem, ipsum.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='mb-5 font-bold'>Links</h2>
                        <ul>
                            <li className='text-sm mb-3'>Lorem, ipsum.</li>
                            <li className='text-sm mb-3'>Lorem, ipsum.</li>
                            <li className='text-sm mb-3'>Lorem, ipsum.</li>
                            <li className='text-sm mb-3'>Lorem, ipsum.</li>
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