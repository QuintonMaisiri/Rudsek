import Image from 'next/image'
import Searchbar from './components/searchbar/Searchbar'
import BrandCard from './components/brandcard/Brandcard'
import PhoneCard from './components/phonecard/Phonecard'
import Footer from './components/footer/Footer'

export default function Home() {
  return (
    <div>
      <header className='bg-primary-blue flex justify-evenly p-10 px-40 relative'>
        <div className='absolute top-0 left-0 w-full h-full bg-[url("/images/pattern2.jpg")] opacity-[0.02] z-10'></div>
        <div className='w-[500px] flex-col '>
          <h1 className=' text-[52px] font-bold text-white'>
            High <br />
            Quality<br />
            Phones <br />
            For Less</h1>
          <p className='font-bold mb-5'>Buy direct from China Freight and Duty Inclusive</p>
          <button className='p-2 bg-white rounded-full mb-5 w-[200px] text-sm font-bold'>
            Start Buying
          </button>
        </div>
        <div className='relative rotate-45'>
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

      <div className='w-3/4 mx-[auto]'>
        <h2 className='mb-10 text-primary-blue font-bold'>
          Browse Phones by brand
        </h2>
        <div className='grid grid-cols-3 gap-5'>
          <BrandCard />
          <BrandCard />
          <BrandCard />
          <BrandCard />
          <BrandCard />
          <BrandCard />
        </div>
      </div>

      <div className='w-5/6 mx-[auto] p-5 mt-20 overflow-hidden'>
        <h2 className='mb-10 text-primary-blue font-bold'>
          This Week&apos;s Top Picks
        </h2>
        <div className='overflow-x-auto flex p-5'>
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
        <div className='w-5/6 mx-auto flex justify-between'>
          <div className='w-1/2'>
            <h2 className='text-white font-bold text-[36px] mb-8'>A supplier you can trust</h2>
            <p className='text-white mb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque neque maiores rem illo dolor maxime architecto aspernatur pariatur laboriosam in!</p>
            <h2 className='text-white font-bold text-[36px] mb-8'>About us</h2>
            <p className='text-white mb-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad odit sit pariatur. Quibusdam esse accusantium eaque! Vel quae est cupiditate!</p>
          </div>
          <div >
            <Image
              src={'/images/ceo.jpg'}
              alt='Ceo picture'
              height={200}
              width={400}
              className='rounded-full'
            />
          </div>
        </div>
      </div>

      <div className='w-5/6 mx-[auto] p-5 mt-20 overflow-hidden'>
        <h2 className='mb-10 text-primary-blue font-bold'>
          Recently added
        </h2>
        <div className='overflow-x-auto flex p-5'>
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
        </div>
      </div>

      <div className='w-5/6 mx-auto flex justify-between'>
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <figure className="mt-10">
                <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                  <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
                </blockquote>
                <figcaption className="mt-10">
                  <img className="mx-auto h-20 w-20 rounded-full" src='/images/test.jpg' alt="" />
                    <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                      <div className="font-semibold text-gray-900">Judith Black</div>
                      <div className="text-gray-600">CEO of Workcation</div>
                    </div>
                </figcaption>
              </figure>
          </div>
        </section>
      </div>
    </div>
  )
}
