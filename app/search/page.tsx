import React from 'react';
import Image from 'next/image';
import { healthCheckupDetails } from '@/constants/index';

const Search: React.FC = () => {
    const { title, subTitle, description, availability, samples, preparation } = healthCheckupDetails;

    return (
        <main className="p-[65px] ">
            <div className="flex gap-5 mb-20">
                <section className="w-[70%]">
                    <div className="bg-[#C9D851] p-[35px] rounded-2xl h-[40%]"></div>
                    <div className="md:flex border border-[#0F3C49] rounded-2xl mx-[35px] mt-[-125px] bg-white">
                        <div className=" flex-1">
                            <div className='flex gap-10 px-8 '>
                                <div className='pt-8'>
                                    <h2 className="text-2xl font-medium mb-2">{title}</h2>
                                    <p className="text-gray-600 mb-4">{subTitle}</p>
                                    <p className="text-black mb-6">{description}</p>
                                </div>
                                <div className='flex items-end'>
                                    <Image src="/searchimg.webp" width={100} height={100} alt='image' className='w-[800px] h-[227px]' />
                                </div>

                            </div>
                            <p className="text-gray-600  bg-[#F5F6E5] flex justify-center py-3">{availability}</p>
                            <div className="mt-4 flex justify-between items-center p-8">
                                <div className="flex  flex-col justify-start">
                                    <span className="mr-2 text-lg text-gray-600 justify-start items-start mb-3 font-semibold">Sample(s) required</span>
                                    <div className="flex space-x-10 justify-start">
                                        {samples.map((sample, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                {/* <span role="img" aria-label={sample.type}>{sample.emoji}</span> */}
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
                    </div>
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
                            <div className="flex items-center my-4">
                                <span role="img" aria-label="Free home sample collection in 60 mins" className="mr-2">🚚</span>
                                Free home sample collection in 60 mins
                            </div>
                            <div className="flex items-center">
                                <span role="img" aria-label="Reports by Today" className="mr-2">📄</span>
                                Reports by Today
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Search;
