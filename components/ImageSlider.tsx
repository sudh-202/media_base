"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

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
    <div className="relative">
      <button className="absolute top-1/2 left-[50px] transform -translate-y-1/2" onClick={goToPrev}>
        <Image src="/arrowb1.webp" alt="Previous" width={24} height={24} />
      </button>
      <button className="absolute top-1/2 right-[50px] transform -translate-y-1/2" onClick={goToNext}>
        <Image src="/arrowb2.webp" alt="Next" width={24} height={24} />
      </button>
      <Image 
        src={isMobile ? images[currentIndex].mobile : images[currentIndex].desktop}
        alt="slider"
        width={1920}
        height={1080}
        priority // This attribute ensures the image is loaded with high priority
        className="lg:w-full bg-contain" 
      />
      <button className="absolute right-0 top-[50%] transform translate-y-[-50%]">
        <Image src="/sidebutton.webp" alt="" width={40} height={36} />
      </button>
    </div>
  );
};

export default ImageSlider;
