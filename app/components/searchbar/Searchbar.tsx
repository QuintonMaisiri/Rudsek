'use client'
import { getBrands } from '@/app/dbengine';
import { faBuilding, faSearch, faTextWidth } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

export default function Searchbar() {
    let [brands, setbrands] = useState<any>([{ id: 'nothing', data: { name: 'nothing' } }])
    let [word, setWord] = useState<string>()

    useEffect(() => {
        (async () => {
            try {
                const res = await getBrands()
                setbrands(res)
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);

    return (
        <div className="flex justify-between flex-wrap md:flex-nowrap border lg:w-5/6 border-primary-blue my-10 lg:my-20 p-3 w-11/12 mx-auto">
            <div className="lg:p-3 flex justify-between flex-wrap md:flex-nowrap">
                <div className="relative w-full ">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FontAwesomeIcon icon={faBuilding} className='w-4 h-4 text-gray-500' />
                    </div>
                    <select className="w-full focus:outline-0 p-4 pl-10 md:pr-20 mr-10 text-sm placeholder-gray-400 " defaultValue='Select Brand' >
                        <option value={'Selecet Brand'} >Select Brand</option>
                        {brands.map((brand: any) => {
                            return <option key={brand.id} value={brand.data.name} >{brand.data.name}</option>
                        })}
                    </select>
                </div>
                <div className="relative w-full ml-10">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FontAwesomeIcon icon={faTextWidth} className='w-4 h-4 text-gray-500' />
                    </div>
                    <input
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                        type="search" className="w-full focus:outline-0 p-4 pl-10 text-sm text-gray-900 placeholder-gray-400 md:border-l md:border-l-primary-blue" placeholder="Enter Search Word Here..." />
                </div>
            </div>
            <a href={`/phones/search/${word}`} className="bg-primary-blue flex items-center justify-center p-3 rounded-md w-full md:w-1/3">
                    <div className='w-max flex items-center'>
                        <FontAwesomeIcon icon={faSearch} className='text-white mr-5' />
                        <p className='text-white font-bold'>Search</p>
                    </div>
            </a>
        </div>
    )
}