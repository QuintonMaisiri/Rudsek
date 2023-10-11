"use client"
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default function PhoneCard({product} : {product : any}){
    return (
        <div 
        className="md:w-[220px] w-[160px] flex-shrink-0 mr-10 mb-5 inline rounded-lg shadow-lg p-2 md:p-5 bg-white cursor-pointer">
            <a href={`/phones/${product.id}`}>
            <div className='flex justify-center'>
                <Image 
                src={'/images/phone.jpg'}
                alt='cellphone'
                width={50}
                height={100}
                />
            </div>
            <div>
                <div className='flex items-center justify-between mt-3'> 
                    <p className="font-bold text-xs md:text-sm lg:mb-1 ">{product.data.name}</p>
                    <p className='text-xs'> <FontAwesomeIcon icon={faStar} /> 4.5 </p>
                </div>
                <p className="font-bold mt-5 text-xs md:text-sm ">${product.data.price}.00</p>
            </div>
            </a>
        </div>
    )
}