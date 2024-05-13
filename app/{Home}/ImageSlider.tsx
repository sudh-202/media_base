"use client";
import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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
      <button className="absolute top-1/2 left-0 transform -translate-y-1/2" onClick={goToPrev}>
        <IoIosArrowBack className="w-6 h-6" />
      </button>
      <button className="absolute top-1/2 right-0 transform -translate-y-1/2" onClick={goToNext}>
        <IoIosArrowForward className="w-6 h-6" />
      </button>
      <img
        src={isMobile ? images[currentIndex].mobile : images[currentIndex].desktop}
        alt="slider"
        className="lg:w-full"
      />
    </div>
  );
};

export default ImageSlider;
