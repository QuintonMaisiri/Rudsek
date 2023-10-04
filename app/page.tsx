import Image from 'next/image'
import Searchbar from './components/searchbar/Searchbar'
import BrandCard from './components/brandcard/Brandcard'
import PhoneCard from './components/phonecard/Phonecard'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <header className='bg-primary-blue flex justify-evenly px-5 py-10 lg:px-40 relative'>
        <div className='absolute top-0 left-0 w-full h-full bg-[url("/images/pattern2.jpg")] bg-center bg-cover opacity-[0.05] z-10'></div>
        <div className='lg:w-[500px] flex-col justify-between '>
          <div>
            <h1 className=' text-[28px] md:text-[36px] lg:text-[38px] drop-shadow font-bold text-white mb-5'>
              Shop In China <br />
              From The Comfort Of<br />
              Your Own Home
            </h1>
          </div>
          <div>
            <p className='font-black  mb-5 text-sm md:text-lg lg:text-xl mb-5 '>Buy Direct From China Freight And Duty Inclusive</p>
          </div>
          <div>
            <button className='p-3 bg-white rounded-md text-primary-blue md:text-lg lg:text-xl mb-5 w-[200px] text-sm font-bold shadow-sm md:mt-[50px]'>
              Start Buying
            </button>
          </div>
        </div>
        <div className='relative md:rotate-12 lg:rotate-[20deg] hidden md:block'>
          <Image
            src={'/images/hero-image.png'}
            alt="phone"
            width={300}
            height={500}
            className='md:w-[250px] lg:w-[300px]'
          />
          <h1 className='absolute text-white top-10 left-16 lg:left-20 drop-shadow text-[32px] lg:text-[36px] font-bold'>
            I <br />
            AM <br />
            FROM <br />
            CHINA <br />
          </h1>
        </div>
      </header>

      <Searchbar />

      <div className='w-11/12 lg:w-5/6 mx-[auto] p-5 mt-10 overflow-hidden'>
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


      <div className='w-11/12 lg:w-5/6 mx-[auto]'>
        <h2 className='mb-10 text-primary-blue font-bold'>
          Browse Phones by brand
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          <BrandCard />
          <BrandCard />
          <BrandCard />
          <BrandCard />
          <BrandCard />
          <BrandCard />
        </div>
      </div>

      <div className='w-11/12 lg:w-5/6 mx-[auto] mt-20'>
        <h2 className='mb-10 text-primary-blue font-bold'>
          Recently added
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
        </div>
      </div>


      <div className='mt-10 relative bg-[url("/images/about-bg.jpg")] bg-cover bg-center -z-50 p-5'>
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-[80%] -z-10'></div>
        <div className='md:w-5/6 w-11/12 mx-auto flex flex-wrap md:flex-nowrap justify-between'>
          <div className='md:w-2/3 py-3'>
            <h2 className='text-white font-bold text-xl md:text-[36px] mb-4 md:mb-8'>A supplier you can trust</h2>
            <p className='text-white mb-8 md:mb-12 md:text-lg text-sm trailing-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque neque maiores rem illo dolor maxime architecto aspernatur pariatur laboriosam in!</p>
            <h2 className='text-white font-bold text-xl md:text-[36px] mb-4 md:mb-8'>About us</h2>
            <p className='text-white md:text-lg text-sm mb-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad odit sit pariatur. Quibusdam esse accusantium eaque! Vel quae est cupiditate!</p>
          </div>
          <div className='flex justify-center w-full md:w-[auto] md:ml-4' >
            <Image
              src={'/images/ceo.jpg'}
              alt='Ceo picture'
              height={200}
              width={400}
              className='rounded-full w-[200px] md:w-[300px]'
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
