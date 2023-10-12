import Image from 'next/image';

export default function BrandCard({name} : {name: string}) {
    return (
        <div
         className="bg-primary-blue p-5 rounded-lg shadow-md">
            <a href={`/phones/brand/${name}`} className='flex items-center '>
            <div>
                <Image
                    src={'/images/hauwei-logo.jpg'}
                    alt='hauwei-logo'
                    width={70}
                    height={70}
                    className='rounded-full mr-5'
                />
            </div>
            <div className='ml-3'>
                <h3 className='font-bold text-white'>{name}</h3>
            </div>
            </a>
        </div>
    )
}