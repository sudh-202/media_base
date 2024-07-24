import React, { useState } from 'react';
import { carouselData } from '../constants';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Carousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-full ">
      {carouselData.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000  ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image src={slide.image} width={500} height={100} alt='' className=" "/>
          <div className='mt-[-70%] '>
          <button onClick={prevSlide} className="absolute left-0 p-2 text-white text-3xl"><IoIosArrowBack/></button>
          <button onClick={nextSlide} className="absolute right-0 p-2 text-white text-3xl"><IoIosArrowForward /></button>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Carousel;
