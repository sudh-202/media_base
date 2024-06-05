
import Image from 'next/image'
import Headline from '@/components/Headline';
import Overview from '@/components/Overview';
import LiverFunctionTest from '@/components/LiverFunctionTest';
import Counter from '@/components/counter';
import Benefits from '@/components/benefits';


const liver = () => {
  return (
    <main className=''>
      <Image
        src='/liverb.webp'
        alt='LiverBanner'
        width={1920}
        height={1000}
        className='lg:w-[100%] h-full'

      />
      <div className='flex lg:flex-row lg:p-16 p-5 gap-10 flex-col'>
        <div className='lg:w-[65%]'>
        <Overview />
        </div>
        <div className='lg:w-[35%]'>
        <LiverFunctionTest />
        <Headline />
        </div>
      </div>

      <div className="flex flex-wrap lg:justify-center items-center lg:py-8 py-14 lg:w-full lg:gap-12 gap-4 lg:p-20 p-5">
        <Counter />
      </div>
      
      <div className=' gap-24 lg:justify-center lg:px-24 lg:py-14'>
      <h1 className='lg:text-2xl px-4 text-2xl text-[#52B2AD] lg:px-36 font-semibold'>Benefits / Facility</h1>
      <div className="lg:w-[78%] w-[90%] h-[2px] bg-[#C9D851] mx-auto lg:my-4 my-2 flex justify-start"></div>
      <div className="flex flex-col md:flex-row lg:gap-24 gap-8 justify-center items-center mt-12 pb-12">
        <Benefits />
      </div>
      </div>
    </main>
  )
}

export default liver