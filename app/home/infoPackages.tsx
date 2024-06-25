// pages/index.tsx
import Tabs from '@/components/tabs';
import Image from 'next/image';

const infoPackages: React.FC = () => {
  const tabs = [
    {
      label: 'Swasth Bihar Packages',
      content: (
        <div className='flex flex-row'>
          <Image src="/swasth_bihar_wellness.webp" alt='' width={586} height={100} className='rounded-lg w-full'/>
          {/* <Image src="/Swasth Bihar Wellness 2.webp"  alt=''width={586} height={261}/> */}
          
        </div>
      ),
    },
    {
      label: 'Full Body Special Packages',
      content: (
        <>
        <Image src="/Swasth Bihar Wellness 2.webp"  alt=''width={586} height={261}/>
        </>
      ),
    },
    {
      label: 'Medi Bridge Special Packages',
      content: (
        <>
        <Image src="/Swasth Bihar Wellness 2.webp"  alt=''width={586} height={261}/>
        </>
      ),
    },
    {
      label: 'Special Health Packages',
      content: (
        <>
        <Image src="/Swasth Bihar Wellness 2.webp"  alt=''width={586} height={261}/>
        </>
      ),
    },
  ];

  const tabStyle = {
    border: '2px solid #4A90E2',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: 'red',
    display: 'flex',

  };

  return (
    <div className="flex flex-col items-center justify-center py-[74px] px-18 bg-[#F5F6E5]">
      <div className="text-xl lg:text-4xl font-medium mb-8">Specialized Health Packages</div>
      <main className="lg-w-full   ">
        <Tabs tabs={tabs} style={tabStyle} />
      </main>
    </div>
  );
};

export default infoPackages;
