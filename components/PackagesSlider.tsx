'use client'

import { useState } from 'react';
import { packages, tabs } from '@/constants/index';
import Pagination from "@/components/pagination";

const PackagesSlider = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 1; // Set the number of items per page

    const filteredPackages = packages.filter(pkg => pkg.tabId === activeTab);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredPackages.slice(indexOfFirstItem, indexOfFirstItem + itemsPerPage);

    const totalPages = Math.ceil(filteredPackages.length / itemsPerPage);

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="flex flex-wrap justify-between gap-2  overflow-hidden">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 py-2 lg:py-4 px-4 lg:px-6 text-center  ${activeTab === tab.id ? 'bg-[#C9D851] text-black' : 'bg-white text-black'}`}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>


            <div className="mt-6 flex lg:flex-row flex-col  gap-0.5 ">
                {packages.map((pkg) => (
                    <div key={pkg.id} className="flex flex-row relative  rounded-lg shadow-md mb-6 ">
                        <img src={pkg.image} alt={pkg.title} className="rounded-lg w-full object-contain" />
                        <div className="absolute top-0 left-0 lg:px-10 px-2 lg:py-6 py-2 w-full h-full flex flex-col  justify-between  rounded-lg">
                            <div>
                                <h3 className="lg:text-2xl text-sm  font-semibold mb-2 text-black">{pkg.title}</h3>
                                <div className="flex f flex-wrap gap-1 lg:gap-2 mb-2 lg:w-[90%] w-full">
                                    {pkg.tests.map((test, index) => (
                                        <span key={index} className="bg-white border border-black rounded-full lg:px-3 px-1.5 py-1 text-[10px] lg:text-sm text-xs">{test}</span>
                                    ))}
                                </div>
                            </div>


                            <div className="flex items-center rounded-l-lg justify-between text-black w-[80%] rounded-r-lg bg-[#52B2AD] lg:pl-2.5 pl-1.5 ">
                                <div className="  flex flex-col rounded-l-lg bg-[#52B2AD]">
                                    <div className=' font-semibold text-white text-xs'> Discount
                                        <div className='lg:text-3xl text-sm'>{pkg.discount}
                                        </div>
                                    </div>
                                </div>

                                <div className="text-right flex flex-row rounded-r-lg bg-[#C9D851] pl:1.5 lg:pl-2.5 pr-1.5 lg:pr-2.5 gap-2 lg:gap-4">
                                    <div className='flex flex-row gap-2 text-xs lg:font-normal items-center'>MRP -
                                        <div className="block line-through "> {pkg.mrp}</div>
                                    </div>
                                    <div className='flex flex-col gap-1 text-xs'>Discounted Price
                                        <div className="block lg:text-3xl font-bold ">{pkg.price} /-</div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default PackagesSlider;
