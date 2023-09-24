'use client'

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faShop, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    let [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='shadow-sm bg-white w-full p-5 '>
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
                                <a href='#About'>About us</a>
                            </li>
                            <li className="mr-10">
                                <a href='/contact-us'>Contact us</a>
                            </li>
                            <li className="mr-10">
                                <a href='/phone'>Phone</a>
                            </li>
                        </ul>
                    </div>
                    <div className="ml-10">
                        <FontAwesomeIcon icon={faCartShopping} className='text-[24px]' />
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
                        <a href='#About'>About us</a>
                    </li>
                    <li className="mb-5 text-center">
                        <a href='/contact-us'>Contact us</a>
                    </li>
                    <li className="mb-5 text-center">
                        <a href='/phone'>Phone</a>
                    </li>
                    <li className="mb-5 text-center">
                        <FontAwesomeIcon icon={faCartShopping} className='text-[24px]' />
                    </li>
                </ul>

            </nav>
        </div>

    )
}