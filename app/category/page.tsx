
import Image from 'next/image'
import { cards } from '@/constants/index';
import LogoSlider from '@/components/LogoSlider';

const liver = () => {
  const itemsToShow = 6; // Show n-1 items
        const totalItems = cards.length * 2;
  return (
    <main className='lg:w-[100%] h-full'>
    <Image
      src='/careersbanner.webp'
      alt='Masklogo'
      width={1920}
      height={1000}
    />
    <div className="text-xl lg:text-4xl font-medium flex justify-center p-10">Search Test and Packages by Category</div>
    <main className="flex flex-col items-center justify-center py-10">
        <LogoSlider />
        </main>
    </main>

  )
}

export default liver