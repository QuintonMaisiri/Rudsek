import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartItem from "../components/cart_item/CartItem";

export default function Cart() {
    return (
        <div className="mx-auto w-5/6 mt-20">
            <div className="flex justify-between">
                <div className="border border-primary-blue py-5 px-10 rounded-lg w-7/12">

                    <h2>Items</h2>
                    <div>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </div>

                </div>
                <div className="bg-primary-blue rounded-lg text-white p-5 font-bold shadow-sm w-1/3 h-max">
                    <h2 className="text-[28px] mb-10">Summary</h2>
                    <div className="flex justify-between mb-5">
                        <p>Total</p>
                        <p className="text-[28px]">$300.00</p>
                    </div>
                    <button className="bg-white text-primary-blue rounded-lg p-3 w-full"> <FontAwesomeIcon icon={faCartShopping} /> Check Out</button>
                </div>
            </div>
        </div>
    )
}