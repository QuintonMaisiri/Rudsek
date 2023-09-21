
import { faBuilding, faSearch, faTextWidth } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Searchbar() {
    return (
        <div className="flex border w-max border-primary-blue my-20 mx-auto">
            <div className="p-3 flex">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FontAwesomeIcon icon={faBuilding} className='w-4 h-4 text-gray-500' />
                    </div>
                    <select className="w-full focus:outline-0 p-4 pl-10 pr-20 text-sm text-gray-900 placeholder-gray-400 " defaultValue='Select Brand' > 
                    <option value={'Selecet Brand'} >Select Brand</option>
                    </select>

                </div>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FontAwesomeIcon icon={faTextWidth} className='w-4 h-4 text-gray-500' />
                    </div>
                    <input type="search" className="w-full focus:outline-0 p-4 pl-10 pr-20 text-sm text-gray-900      placeholder-gray-400 border-l border-l-primary-blue" placeholder="Enter Search Word Here..." />
                </div>
            </div>
            <div className="bg-primary-blue flex items-center px-5 pr-20">
                <FontAwesomeIcon icon={faSearch} className='text-white mr-5' />
                <p className='text-white font-bold'>Search</p>
            </div>
        </div>
    )
}