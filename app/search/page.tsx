"use client";

import Image from 'next/image';
import { easyOrderingSteps, healthCheckup } from '@/constants/index';
import Carousel from '@/components/carousel';
import AccordionComponent from "@/components/accordion";
const Search: React.FC = () => {
    const { title, subTitle, description, availability, samples, preparation, pricing, features } = healthCheckup;



    return (
        <main className="px-[65px] max-w-screen-2xl pt-20 ">
            <div className="flex gap-5 mb-20">
                <section className="w-[60%]">
                    <div className="bg-[#C9D851] p-[35px] rounded-2xl h-[10%]"></div>
                    <div className="md:flex border-2 border-[#52B2AD] rounded-2xl mx-[35px] mt-[-120px] bg-white">
                        <div className=" flex-1">
                            <div className='flex gap-10 px-8 '>
                                <div className='pt-8'>
                                    <h2 className="text-xl font-medium mb-2">{title}</h2>
                                    <p className="text-gray-600 mb-4 text-sm">{subTitle}</p>
                                    <p className="text-black mb-6 text-sm">{description}</p>
                                </div>
                                <div className='flex items-end'>
                                    <Image src="/doctor.webp" width={100} height={100} alt='image' className='w-[1250px] h-[250px]' />
                                </div>

                            </div>
                            <p className="text-gray-600  bg-[#F5F6E5] flex justify-center py-3 text-sm">{availability}</p>
                            <div className="mt-4 flex justify-between items-center p-8">
                                <div className="flex  flex-col justify-start">
                                    <span className="mr-2 text-base text-gray-600 justify-start items-start mb-3 font-semibold">Sample(s) required</span>
                                    <div className="flex space-x-10 justify-start">
                                        {samples.map((sample, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <Image src={sample.src} width={100} height={100} alt={sample.alt} className="w-10 h-10" />
                                                <p className='text-[16px]'>{sample.alt}</p>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                                <div className='border-[#6D6D6D] border-[1px] w-[10%] transform rotate-90' />
                                <div className="flex  justify-start flex-col ">
                                    <p className="font-semibold text-gray-600 text-base">{preparation.title}</p>
                                    <p className="font-semibold text-gray-600 text-base">{preparation.details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* new section */}
                    <main className=' px-[35px]'>
                        <div className='flex justify-start items-center flex-row gap-12 my-20'>
                            {features.map((feature, index) => (
                                <div key={index} className='flex flex-row items-center gap-4'>
                                    <Image src={feature.imgSrc} width={100} height={100} alt='image' className='w-[76px] h-[71px]' />
                                    <p className='text-[16px] text-[#6D6D6D]'>{feature.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className='my-10 bg-[#FBFCF6] p-14 rounded-xl'>
                            <h2 className='text-2xl font-semibold'>Tests Included</h2>
                            <p className='text-md text-[#52B2AD] font-semibold pb-10'>6 tests | 69 parameters</p>
                            <AccordionComponent />
                        </div>
                    </main>

                </section>
                <section className="w-[35%]">
                    <div className="p-6 bg-[#F5F6E5] rounded-2xl">
                        <div className='bg-white p-5 rounded-2xl mb-4'>
                            <div className="text-white text-center p-4 rounded-lg flex justify-between">
                                <div>
                                    <span className="text-xl text-black font-semibold">{pricing.discountedPrice}</span>
                                    <span className="line-through text-gray-300 ml-2">{pricing.originalPrice}</span>
                                </div>
                                <span className="bg-[#E3EBA8] font-semibold text-gray-800 px-2 py-1 rounded-lg ml-2">{pricing.discount}</span>
                            </div>
                            <button className="bg-[#0F3C49] text-white w-full py-2 rounded-2xl shadow-md mb-4">Book now</button>
                        </div>
                        <div className='bg-white p-5 rounded-2xl'>
                            <div className="flex items-center mb-4 gap-3">
                                <Image src="/delivery.webp" width={50} height={50} alt='image' className='w-[35px] h-[26px]' />
                                <p className='text-sm'>Free home sample collection in 60 mins</p>
                            </div>
                            <div className='border-[#6D6D6D] border-[1px] w-[90%] mx-6' />
                            <div className="flex items-center mt-4 gap-3">
                                <Image src="/reports.webp" width={50} height={50} alt='image' className='w-[35px] h-[26px]' />
                                <p className='text-sm'>Reports by Today</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <div className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-7  px-24">
                <div className='w-[40%] mt-[-680px]'>
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
                style={{ backgroundImage: "url('/news.webp')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top'}}
            >
                <h3 className='text-white text-4xl font-normal '>Subscribe our Newsletter</h3>
                <p className='text-white text-base my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                {/* <Image src="/newsletterimg1.webp" alt="MediBridge Building" className="w-full h-auto" width={500} height={100} /> */}
                <button className=" bg-[#52B2AD] text-white px-4 py-3 rounded-[20px] w-[25%] my-5">Subscribe </button>
            </div>


        </main>
    );
};

export default Search;

