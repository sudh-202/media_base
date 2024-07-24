"use client";

import Image from 'next/image';
import { testContent } from '@/constants/index';
import Carousel from '@/components/carousel';
import AccordionComponent from "@/components/accordion";
import { fullBodyCheckupContent } from '@/constants';

const Test: React.FC = () => {
    const { title, subTitle, } = testContent;



    return (
        <main className="px-[65px] max-w-screen-2xl pt-20 ">
            <div className="flex gap-5 mb-20">
                <section className="w-full">
                    <div className="bg-[#C9D851] p-[35px] rounded-2xl h-[7%]" />
                    <div className="md:flex border-2 border-[#3d7f99] rounded-2xl mx-[35px] mt-[-120px] bg-white">
                        <div className="w-full h-[300px] rounded-xl" style={{ backgroundImage: "url('/test.webp')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className='flex gap-10 px-8 '>
                                <div className='pt-8'>
                                    <p className=" mb-4 text-[24px] text-white">{subTitle}</p>
                                    <h2 className="text-[48px] font-medium mb-2 text-white">{title}</h2>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='bg-[#FBFCF6] rounded-2xl my-10 mx-8'>
                        <div className="p-20">
                            {fullBodyCheckupContent.map((section, index) => (
                                <div key={index} className="mb-8">
                                    <h2 className="text-[32px] font-normal mb-4">{section.title}</h2>
                                    <p className="text-[16px] whitespace-pre-line">{section.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* new section */}
                    <main className=' px-[35px]'>

                        <div className='my-10 bg-[#FBFCF6] p-14 rounded-xl'>
                            <h2 className='text-2xl font-semibold'>Tests Included</h2>
                            <p className='text-md text-[#52B2AD] font-semibold pb-10'>6 tests | 69 parameters</p>
                            <AccordionComponent />
                        </div>
                    </main>

                </section>


            </div>
            <div className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-7 pt-72 pb-10  px-24">
                <div className='w-[40%] mt-[-600px]'>
                    <Carousel />
                </div>
                <div className="md:w-1/2 w-full pr-28 flex flex-col justify-between">
                    <div className="bg-white rounded-3xl px-[65px] py-8 mb-4 border-[#C9D851] border-2">
                        <Image src="/3steps.webp" alt="MediBridge Building" className="rounded-md mb-2 w-full h-auto" width={500} height={100} />
                        <button className="bg-[#0F3C49] text-white px-4 py-3  rounded-xl w-full mt-[-25px]">Order now</button>
                    </div>
                    <div className="">
                        <Image src="/medibuild.webp" alt="MediBridge Building" className="" width={500} height={100} />
                        {/* <button className="bg-blue-600 text-white px-4 py-3 rounded">Watch Video</button> */}
                    </div>
                </div>
            </div>
            <div
                className="relative px-16 py-14 flex flex-col h-[280px] w-[74%] mx-32 mb-10 border-2 border-[#C9D851] rounded-[50px] "
                style={{ backgroundImage: "url('/news.webp')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top' }}
            >
                <h3 className='text-white text-4xl font-normal '>Subscribe our Newsletter</h3>
                <p className='text-white text-base my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                {/* <Image src="/newsletterimg1.webp" alt="MediBridge Building" className="w-full h-auto" width={500} height={100} /> */}
                <button className=" bg-[#52B2AD] text-white px-4 py-3 rounded-[20px] w-[25%] my-5">Subscribe </button>
            </div>


        </main>
    );
};

export default Test;

