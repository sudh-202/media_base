"use client";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      <img src={images[currentIndex]} alt="slider" className="w-full" />
    </div>
  );
};

export default ImageSlider;

