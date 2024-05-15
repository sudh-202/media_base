'use client'

import { useState } from 'react';
import { packages, tabs } from '@/constants/index';

const TabSection = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between bg-gray-200 rounded-lg overflow-hidden">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 py-2 px-4 text-center ${activeTab === tab.id ? 'bg-green-400 text-white' : 'bg-white text-black'}`}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>


            <div className="mt-6 flex lg:flex-row flex-col gap-0.5">
                {packages.map((pkg) => (
                    <div key={pkg.id} className="flex flex-row relative  rounded-lg shadow-md mb-6 ">
                        <img src={pkg.image} alt={pkg.title} className="rounded-lg w-full object-contain" />
                        <div className="absolute top-0 left-0 px-10 py-6 w-full h-full flex lg:flex-col flex-row justify-between  rounded-lg">
                            <div>
                                <h3 className="text-2xl font-semibold mb-2 text-black">{pkg.title}</h3>
                                <div className="flex flex-wrap gap-2 mb-2 w-[90%]">
                                    {pkg.tests.map((test, index) => (
                                        <span key={index} className="bg-white border border-black rounded-full px-3 py-1 text-sm">{test}</span>
                                    ))}
                                </div>
                            </div>


                            <div className="flex items-center rounded-l-lg justify-between text-black w-[80%] rounded-r-lg bg-[#52B2AD] pl-2.5 ">
                                <div className="  flex flex-col rounded-l-lg bg-[#52B2AD]">
                                    <div className=' font-semibold text-white'> Discount
                                        <div className='text-3xl'>{pkg.discount}
                                        </div>
                                    </div>
                                </div>

                                <div className="text-right flex flex-row rounded-r-lg bg-[#C9D851] pl-2.5 pr-2.5 pt-2.5  gap-4">
                                    <div className='flex flex-row gap-2 items-center'>MRP -
                                        <div className="block line-through "> {pkg.mrp}</div>
                                    </div>
                                    <div className='flex flex-col gap-1'>Discounted Price
                                        <div className="block text-3xl font-bold ">{pkg.price} /-</div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TabSection;
