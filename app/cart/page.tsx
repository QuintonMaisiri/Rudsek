"use client"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import CartItem from "../components/cart_item/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { emptyCart } from "@/redux/cart.slice";
import { createOrder } from "../dbengine";
import { OrderItem } from "@/app/components/interfaces/order_item"


export default function Cart() {

    let orders : OrderItem[] = []
    const userID = "someUserID"

    const dispatch = useDispatch();
    const cart = useSelector((state: any) => state.data);
    let total = 0;
    cart.forEach((item: any) => {
        total = total + item.quantity * item.price
        const order : OrderItem = { name: item.name, price: item.price, qty: item.quantity, }
        orders.push(order)
    });
    return (
        <div>
            <Navbar />
            <div className="mx-auto w-5/6 mt-20">
                <div className="flex justify-between">
                    <div className="border border-primary-blue py-5 px-10 rounded-lg w-7/12">

                        <h2>Items</h2>
                        <div>
                            {cart.map((item: any) => (
                                <div key={item.id}>
                                    < CartItem product={item} />
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="bg-primary-blue rounded-lg text-white p-5 font-bold shadow-sm w-1/3 h-max">
                        <h2 className="text-[28px] mb-10">Summary</h2>
                        <div className="flex justify-between mb-5">
                            <p>Total</p>
                            <p className="text-[28px]">${total
                            }</p>
                        </div>
                        <button
                            onClick={() => {
                                dispatch(emptyCart())
                                createOrder(
                                    userID,
                                    orders
                                )
                            }}
                            className="bg-white text-primary-blue rounded-lg p-3 w-full"> <FontAwesomeIcon icon={faCartShopping} /> Check Out</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export const dynamic = 'force-dynamic'