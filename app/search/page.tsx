"use client";

import Image from 'next/image';
import { healthCheckupDetails } from '@/constants/index';
import AccordionComponent from "@/components/accordion";


const Search: React.FC = () => {
    const { title, subTitle, description, availability, samples, preparation } = healthCheckupDetails;

    return (
        <main className="p-[65px]">
            <div className="flex gap-5 mb-20">
                <section className="w-[70%]">
                    <div className="bg-[#C9D851] p-[35px] rounded-2xl h-[10%]"></div>
                    {/* <div className="md:flex border border-[#0F3C49] rounded-2xl mx-[35px] mt-[-120px] bg-white">
                        <div className=" flex-1">
                            <div className='flex gap-10 px-8 '>
                                <div className='pt-8'>
                                    <h2 className="text-2xl font-medium mb-2">{title}</h2>
                                    <p className="text-gray-600 mb-4">{subTitle}</p>
                                    <p className="text-black mb-6">{description}</p>
                                </div>
                                <div className='flex items-end'>
                                    <Image src="/doctor.webp" width={100} height={100} alt='image' className='w-[1550px] h-[325px]' />
                                </div>

                            </div>
                            <p className="text-gray-600  bg-[#F5F6E5] flex justify-center py-3">{availability}</p>
                            <div className="mt-4 flex justify-between items-center p-8">
                                <div className="flex  flex-col justify-start">
                                    <span className="mr-2 text-lg text-gray-600 justify-start items-start mb-3 font-semibold">Sample(s) required</span>
                                    <div className="flex space-x-10 justify-start">
                                        {samples.map((sample, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                            
                                                <img src={sample.src} alt={sample.alt} className="w-10 h-10" />
                                                <span>{sample.alt}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex justify-start flex-col mr-40">
                                    <p className="font-semibold text-gray-600 text-xl">{preparation.title}</p>
                                    <p className="font-semibold text-gray-600 text-xl">{preparation.details}</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* new section */}
                    <main className='py-16 px-[35px] '>
                        <div className='flex justify-start items-center flex-row gap-20'>
                            <div className='flex flex-row items-center gap-4 '>
                                <Image src="/award.webp" width={100} height={100} alt='image' className='w-[76px] h-[71px]' />
                                <p className='text-xl text-[#6D6D6D]'>In-house labs
                                    400+ test</p>
                            </div>
                            <div className='flex flex-row items-center gap-4 '>
                                <Image src="/newreport.webp" width={100} height={100} alt='image' className='w-[76px] h-[71px]' />
                                <p className='text-xl text-[#6D6D6D]'>60 mins collection
                                    6 AM - 10 PM</p>
                            </div>
                            <div className='flex flex-row items-center gap-4 '>
                                <Image src="/quick.webp" width={100} height={100} alt='image' className='w-[76px] h-[71px]' />
                                <p className='text-xl text-[#6D6D6D]'>Reports in
                                    6 hours</p>
                            </div>
                        </div>
                        <div className='my-10 bg-[#FBFCF6] p-14 rounded-xl'>
                            <h2 className='text-2xl font-semibold'>Tests Included</h2>
                            <p className='text-md text-[#52B2AD] font-semibold pb-10'>6 tests | 69 parameters</p>
                            <AccordionComponent />
                        </div>
                    </main>
                </section>
                <section className="w-[30%]">
                    <div className="p-6 bg-[#F5F6E5] rounded-2xl  ">
                        <div className='bg-white p-5 rounded-2xl mb-4'>
                            <div className=" text-white text-center p-4 rounded-lg flex justify-between">
                                <div>
                                    <span className="text-xl text-black font-semibold">₹1599</span>
                                    <span className="line-through text-gray-300 ml-2">₹4130</span>
                                </div>

                                <span className="bg-[#E3EBA8] font-semibold text-gray-800 px-2 py-1 rounded-lg ml-2">61% off</span>
                            </div>
                            <button className="bg-[#0F3C49] text-white w-full py-2 rounded-2xl shadow-md mb-4">Book now</button>
                        </div>
                        <div className='bg-white p-5  rounded-2xl'>
                            <div className="flex items-center mb-4 gap-3">
                                <Image src="/delivery.webp" width={50} height={50} alt='image' className='w-[35px] h-[26px]' />
                                <p className='text-sm'>Free home sample collection in 60 mins</p>
                            </div>
                            <div className=' border-[#6D6D6D] border-[1px] w-[90%]  mx-6' />
                            <div className="flex items-center mt-4 gap-3">
                                <Image src="/reports.webp" width={50} height={50} alt='image' className='w-[35px] h-[26px]' />
                                <p className='text-sm'>Reports by Today</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </main>
    );
};

export default Search;

// end
