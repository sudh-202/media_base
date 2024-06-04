'use client'


import React, { useRef, useState } from 'react';
import { cards } from '@/constants/index';
import Image from 'next/image';
import Link from 'next/link';

const LeftArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

const RightArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const LogoSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsToShow = 6; // Show n-1 items
  const totalItems = cards.length * 2;

  const scrollLeft = () => {
    if (currentIndex === 0) {
      setCurrentIndex(totalItems - itemsToShow);
      if (sliderRef.current) {
        sliderRef.current.scrollTo({
          left: sliderRef.current.scrollWidth,
          behavior: 'smooth',
        });
      }
    } else {
      setCurrentIndex(currentIndex - 1);
      if (sliderRef.current) {
        sliderRef.current.scrollBy({
          left: -sliderRef.current.clientWidth / itemsToShow,
          behavior: 'smooth',
        });
      }
    }
  };

  const scrollRight = () => {
    if (currentIndex >= totalItems - itemsToShow) {
      setCurrentIndex(0);
      if (sliderRef.current) {
        sliderRef.current.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
      }
    } else {
      setCurrentIndex(currentIndex + 1);
      if (sliderRef.current) {
        sliderRef.current.scrollBy({
          left: sliderRef.current.clientWidth / itemsToShow,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <>
      <div className="hidden lg:block relative w-[1250px] overflow-hidden">
        <div
          ref={sliderRef}
          className="flex gap-2 transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100 / itemsToShow}%)` }}
        >
          {cards.concat(cards).map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 h-60 bg-gray-100 rounded-lg flex flex-col items-center justify-center"
              style={{ width: `${96.5 / itemsToShow}%` }}
            >
              <Link href={card.link} legacyBehavior>
                <a>
                  <Image
                    src={card.icon}
                    alt={card.title}
                    className="w-34 h-24 mb-2 object-contain"
                    width={136}
                    height={96}
                  />
                  <p className="text-center">{card.title}</p>
                </a>
              </Link>
            </div>
          ))}
        </div>
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <LeftArrow />
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <RightArrow />
        </button>
      </div>

      {/* Mobile View */}
      <div className="relative lg:hidden">
        <div className="flex flex-wrap justify-center">
          {cards.map((card, index) => (
            <React.Fragment key={card.id}>
              <div className="w-24 h-28 bg-gray-100 rounded-lg flex flex-col items-center justify-center m-2">
                <Link href={card.link} legacyBehavior>
                  <a>
                    <Image
                      src={card.icon}
                      alt={card.title}
                      className="w-14 h-14 mb-2 object-contain"
                      width={136}
                      height={96}
                    />
                    <p className="text-center">{card.title}</p>
                  </a>
                </Link>
              </div>
              {(index + 1) % 3 === 0 && <div className="w-full"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default LogoSlider;