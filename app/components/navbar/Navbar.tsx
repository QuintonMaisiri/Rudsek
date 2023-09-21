import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faShop } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-20 py-5 shadow-sm">
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
    )
}