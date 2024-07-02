"use client";
import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

import { ImagesSlider } from "@/constants/index"

interface ImageSliderProps {
  images: { desktop: string; mobile: string }[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Change 768 to your desired breakpoint
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative ">
      <button className="absolute top-1/2 left-10 transform -translate-y-1/2" onClick={goToPrev}>
        <IoIosArrowBack className="w-6 h-6" />
      </button>
      <button className="absolute top-1/2 right-10 transform -translate-y-1/2" onClick={goToNext}>
        <IoIosArrowForward className="w-6 h-6" />
      </button>
      <div style={{ marginLeft: '' }}>
        <Image
          src={isMobile ? ImagesSlider[currentIndex].mobile : ImagesSlider[currentIndex].desktop}
          alt="slider"
          width={1920}
          height={550}
          priority // This attribute ensures the image is loaded with high priority
          className="lg:w-full"
        />
      </div>
      <div className="absolute top-4 left-4 flex  flex-col justify-center pl-72   gap-0">
        <h2 className="lg:text-2xl font-medium text-black px-2 ">Looking for an</h2>
        <h2 className="lg:text-4xl font-bold text-black p-2 ">
          Investigation?</h2>
        <p className="lg:text-sm text-black flex-wrap w-[61%]  py-4 px-2 italic ">
          People reach us to our customer care team, we would be happy to assist you to all means
        </p>

        <div className="flex flex-col md:flex-row items-center  ">
          <button className="flex items-center justify-center px-6 py-3 bg-teal-900 text-white rounded-full hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
            Our Services <span className="ml-2">→</span>
          </button>
          <button className="flex items-center justify-center px-6 py-3 bg-teal-900 text-white rounded-full hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
            <span role="img" aria-label="phone" className="mr-2">📞</span> 1800 889 8255
          </button>
        </div>

      </div>


    </div>


  );
};

export default ImageSlider;

