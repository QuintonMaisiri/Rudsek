import Image from 'next/image';

export default function BrandCard() {
    return (
        <div className="bg-primary-blue p-5 rounded-lg flex items-center shadow-md">
            <div>
                <Image
                    src={'/images/hauwei-logo.jpg'}
                    alt='hauwei-logo'
                    width={70}
                    height={700}
                    className='rounded-full mr-5'
                />
            </div>
            <div>
                <h3 className='font-bold'>Hauwei</h3>
                <p className=''>300 Products</p>
            </div>
        </div>
    )
}