import { faBinoculars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default function PhoneCard(){
    return (
        <div className="w-[200px] flex-shrink-0 mr-10 mb-5 inline rounded-lg shadow-lg p-5 bg-white">
            <div className='flex justify-center'>
                <Image 
                src={'/images/phone.jpg'}
                alt='cellphone'
                width={80}
                height={100}
                />
            </div>
            <div>
                <div>
                    <p className="font-bold text-sm mb-1 text-center">Hauwei P20 Pro 2020</p>
                    <p className="font-bold mb-3 text-center">$300.00</p>
                </div>
                <div className="text-sm text-gray-400 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="mt-3 w-full flex justify-center">
                    <button className="bg-green-500 text-white text-sm p-2 rounded-full w-[150px]">
                       <FontAwesomeIcon icon={faCartShopping}/> Add to cart
                    </button>
                </div>
                <div className="mt-3 w-full flex justify-center">
                    <button className="bg-primary-blue text-white text-sm p-2 rounded-full w-[150px]">
                       <FontAwesomeIcon icon={faBinoculars} /> View
                    </button>
                </div>
            </div>
        </div>
    )
}