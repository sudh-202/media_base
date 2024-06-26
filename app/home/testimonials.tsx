"use client";

import Image from 'next/image'
import React, { useState } from 'react';
import { testimonials } from '@/constants/index';
const GoogleImage = '/googleimg.webp'

const Testimonials: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleDotClick = (index: number) => {
        setCurrentSlide(index);
    };
    return (
        <div className="w-full lg:h-full bg-[#52B2AD] flex lg:justify-center
            lg:items-center  p-12 lg:flex-col flex-row lg:my-24">
            <h2 className="lg:text-4xl text-2xl text-white lg:block hidden">What Our Customers Say</h2>
            <div className="flex lg:flex-row  lg:gap-24 items-center ">
                <div className=" lg:w-1/4 lg:block hidden ">
                    <Image
                        src={GoogleImage}
                        alt="google image"
                        width={1050}
                        height={300}
                    />
                </div>
                <div className="container lg:mx-auto  lg:py-8 ">
                <h2 className="text-3xl text-white lg:hidden mb-8">What Our <br></br>Customers Say</h2>
                    <div className="flex flex-wrap justify-center gap-2 ">
                        {testimonials.slice(currentSlide, currentSlide + 4).map((testimonial, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3 lg:flex-row flex-grow">
                                <p className="text-gray-800 mb-4 lg:text-sm">{testimonial.text}</p>
                                <div className="flex items-center gap-4">
                                    <Image 
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={48}
                                        height={48}
                                     />
                                    <div>
                                        <p className="font-bold text-gray-700 text-sm">{testimonial.name}</p>
                                        <p className="text-gray-600 text-xs">{testimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-4">
                        {Array(Math.ceil(testimonials.length / 4)).fill(0).map((_, i) => (
                            <span
                                key={i}
                                className={`lg:h-4 lg:w-4 h-3 w-3 rounded-full border-2 border-[#C9D851] mx-2 cursor-pointer ${currentSlide === i * 4 ? 'bg-green-500' : 'bg-gray-400'}`}
                                onClick={() => handleDotClick(i * 4)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testimonials