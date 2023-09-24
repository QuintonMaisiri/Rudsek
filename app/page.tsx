import Image from 'next/image'
import Searchbar from './components/searchbar/Searchbar'
import BrandCard from './components/brandcard/Brandcard'
import PhoneCard from './components/phonecard/Phonecard'

export default function Home() {
  return (
    <div>
      <header className='bg-primary-blue flex justify-evenly px-5 py-10 lg:px-40 relative'>
        <div className='absolute top-0 left-0 w-full h-full bg-[url("/images/pattern2.jpg")] bg-center bg-cover opacity-[0.05] z-10'></div>
        <div className='lg:w-[500px] flex-col '>
          <h1 className=' text-[28px] drop-shadow font-bold text-white mb-5'>
            Shop In China <br />
            From The Comfort Of<br />
            Your Own Home
          </h1>
          <p className='font-black mb-5 text-sm mb-5 '>Buy Direct From China Freight And Duty Inclusive</p>
          <button className='p-3 bg-white rounded-md text-primary-blue mb-5 w-[200px] text-sm font-bold shadow-sm'>
            Start Buying
          </button>
        </div>
        <div className='relative rotate-45 hidden md:block'>
          <Image
            src={'/images/hero-image.png'}
            alt="phone"
            width={300}
            height={500}
          />
          <h1 className='absolute text-white top-10 left-20 text-[44px] font-bold'>
            I <br />
            AM <br />
            TOO <br />
            CHEAP <br />
          </h1>
        </div>
      </header>

      <Searchbar />

      <div className='w-11/12 md:w-5/6 mx-[auto] p-5 mt-20 overflow-hidden'>
        <h2 className='mb-10 text-primary-blue font-bold'>
          This Week&apos;s Top Picks
        </h2>
        <div className='overflow-x-auto flex'>
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
        </div>
      </div>


      <div className='w-11/12 md:w-3/4 mx-[auto]'>
        <h2 className='mb-10 text-primary-blue font-bold'>
          Browse Phones by brand
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          <BrandCard />
          <BrandCard />
          <BrandCard />
          <BrandCard />
          <BrandCard />
          <BrandCard />
        </div>
      </div>

      <div className='md:w-5/6 w-11/12 mx-[auto] mt-20'>
        <h2 className='mb-10 text-primary-blue font-bold'>
          Recently added
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 '>
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
        </div>
      </div>


      <div className='mt-20 relative bg-[url("/images/about-bg.jpg")] bg-cover bg-center -z-50'>
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-[80%] -z-10'></div>
        <div className='md:w-5/6 w-11/12 mx-auto flex flex-wrap justify-between'>
          <div className='md:w-1/2 py-3'>
            <h2 className='text-white font-bold text-xl md:text-[36px] mb-4 md:mb-8'>A supplier you can trust</h2>
            <p className='text-white mb-8 md:mb-12 md:text-lg text-sm trailing-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque neque maiores rem illo dolor maxime architecto aspernatur pariatur laboriosam in!</p>
            <h2 className='text-white font-bold text-xl md:text-[36px] mb-4 md:mb-8'>About us</h2>
            <p className='text-white md:text-lg text-sm mb-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad odit sit pariatur. Quibusdam esse accusantium eaque! Vel quae est cupiditate!</p>
          </div>
          <div className='flex justify-center w-full' >
            <Image
              src={'/images/ceo.jpg'}
              alt='Ceo picture'
              height={200}
              width={400}
              className='rounded-full w-[200px] md:w-[400px]'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
