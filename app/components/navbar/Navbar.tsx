'use client'

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faShop, faXmark } from '@fortawesome/free-solid-svg-icons';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from '@/redux/cart.slice';

export default function Navbar() {
    const cart = useSelector((state: any) => state.data);
    const { data: session, status } = useSession()
    let [isMenuOpen, setIsMenuOpen] = useState(false)

    const dispatch = useDispatch()

    return (
        <div className='shadow-sm bg-white w-full p-2 '>
            <div className='flex items-center justify-between lg:hidden'>
                <div className='flex'>
                    <FontAwesomeIcon icon={faShop} className='text-primary-blue text-[24px]' />
                    <p className='font-bold text-primary-blue ml-3'>Rudsek</p>
                </div>
                <div>
                    <button className={isMenuOpen ? 'hidden' : 'lg:hidden w-max'} onClick={
                        () => {
                            setIsMenuOpen(true)
                        }
                    }>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>
            <nav className="justify-between items-center px-20 py-3 hidden lg:flex">
                <div className='flex'>
                    <FontAwesomeIcon icon={faShop} className='text-primary-blue text-[24px]' />
                    <p className='font-bold text-primary-blue'>Rudsek</p>
                </div>
                <div className="flex items-center">
                    <div>
                        <ul className="flex">
                            <li className="mr-10">
                                <a href='/'>Home</a>
                            </li>
                            <li className="mr-10">
                                <a href='/phones'>All Phones</a>
                            </li>
                            <li className="mr-10">
                                <a href='/#about'>About us</a>
                            </li>
                            <li className="mr-10">
                                <a href='/contact-us'>Contact us</a>
                            </li>
                            {session ?
                                <li className="mr-10">
                                    <button
                                        onClick={() => {
                                            signOut()
                                            dispatch(emptyCart())
                                        }}>
                                        Sign Out
                                    </button>
                                </li> :
                                null}
                        </ul>
                    </div>
                    <div className="ml-10">
                        {session ? <div>
                            <a className='flex items-center ' href="/cart">
                                <FontAwesomeIcon icon={faCartShopping} className='text-[24px] mr-3 ' />
                                <p className='font-bold text-white border rounded-full h-10 w-10 bg-primary-blue flex items-center justify-center'>{cart.length}</p>
                            </a>
                        </div>
                            : <button onClick={() => {
                                signIn()
                            }} className='rounded-full p-3 bg-primary-blue text-white shadow'>Sign in / up</button>}
                    </div>
                </div>
            </nav>
            <nav className={isMenuOpen ? 'absolute left-0 top-0 bottom-0 bg-white z-50 w-3/4 shadow-lg duration-500 p-5' : 'absolute -left-[100%] top-0 bottom-0 z-50 w-3/4 shadow-lg duration-500'}>
                <div className='flex justify-end mb-5'>
                    <button className='w-max'>
                        <FontAwesomeIcon icon={faXmark} onClick={
                            () => {
                                setIsMenuOpen(false)
                            }
                        } />
                    </button>
                </div>
                <div className='flex justify-center'>
                    <FontAwesomeIcon icon={faShop} className='text-primary-blue text-[24px] mr-5' />
                    <p className='font-bold text-primary-blue'>Rudsek</p>
                </div>
                <ul className='flex-col items-center justify-center mt-10'>
                    <li className="mb-5 text-center">
                        <a href='/'>Home</a>
                    </li>
                    <li className="mb-5 text-center">
                        <a href='/phones'>All Phones</a>
                    </li>
                    <li className="mb-5 text-center">
                        <a href='/#About'>about us</a>
                    </li>
                    <li className="mb-5 text-center">
                        <a href='/contact-us'>Contact us</a>
                    </li>
                    <li className="mb-5 text-center">
                        {session ? <FontAwesomeIcon icon={faCartShopping} className='text-[24px]' /> : <button onClick={() => {
                            signIn()
                        }} className='rounded-full p-3 bg-primary-blue text-white shadow'>Sign in / up</button>}
                    </li>
                </ul>

            </nav>
        </div>

    )
}