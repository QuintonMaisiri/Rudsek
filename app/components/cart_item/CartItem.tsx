"use client"

import { decrementQuantity, incrementQuantity, removeFromCart } from "@/redux/cart.slice";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useDispatch } from "react-redux";

export default function CartItem({product} : any) {
    const dispatch = useDispatch()
    return (
        <div className="flex border-b border-b-primary-blue p-3 w-full justify-between items-center">
            <div>
                <Image
                    src={'/images/phone.jpg'}
                    width={50}
                    height={50}
                    alt="phone"
                />
            </div>
            <div>
                <h2 className="font-bold mb-5">{product.name}</h2>
                <div className="flex items-center mb-5">
                    <button type="button"
                    onClick={()=>{
                        dispatch(decrementQuantity(product))
                    }}
                     className="p-3 text-green-400">
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <p className="py-3 px-5 border border-primary-blue rounded-lg">{product.quantity}</p>
                    <button type="button"
                    onClick={()=>{
                        dispatch(incrementQuantity(product))
                    }}
                     className="p-3 text-red-400">
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
                <div>
                    <p className="font-bold">${product.price}</p>
                </div>
            </div>
            <div className="text-[32px] flex flex-col items-end h-full justify-between">
                <button type="button"
                onClick={()=>{
                    dispatch(removeFromCart(product))
                }}
                 className="text-red-600 text-[32px]">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
                <p className="text-[32px] font-bold">${product.price*product.quantity}</p>
            </div>
        </div>
    )
}