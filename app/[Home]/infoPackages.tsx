// pages/index.tsx
import React from 'react';



import Tabs from '@/components/tabs';
import Image from 'next/image';

const infoPackages: React.FC = () => {
  const tabs = [
    {
      label: 'Swasth Bihar Packages',
      content: (
        <div className='flex flex-row'>
          <Image src="/Swasth Bihar.png" alt='' width={586} height={261}/>
          <Image src="/Swasth Bihar Wellness 2.png"  alt=''width={586} height={261}/>
          
        </div>
      ),
    },
    {
      label: 'Full Body Special Packages',
      content: (
        <>
        <Image src="/Swasth Bihar Wellness 2.png"  alt=''width={586} height={261}/>
        </>
      ),
    },
    {
      label: 'Medi Bridge Special Packages',
      content: (
        <>
        <Image src="/Swasth Bihar Wellness 2.png"  alt=''width={586} height={261}/>
        </>
      ),
    },
    {
      label: 'Special Health Packages',
      content: (
        <>
        <Image src="/Swasth Bihar Wellness 2.png"  alt=''width={586} height={261}/>
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-[74px] px-18 bg-[#F6F6F6]">
      <div className="text-xl lg:text-4xl font-medium mb-8">Specialized Health Packages</div>
      <main className="w-full max-w-7xl ">
        <Tabs tabs={tabs}/>
      </main>
    </div>
  );
};

export default infoPackages;
