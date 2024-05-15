// components/CardSlider.tsx

import React from 'react';
import { cards } from '@/constants/index';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const LeftArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className="w-4 h-4"
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
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 5l7 7-7 7"
    />
  </svg>
);


const CardSlider: React.FC = () => {
  return (
    <div className="relative">
      <div className="flex overflow-x-scroll no-scrollbar space-x-4 p-4">
        {cards.map(card => (
          <div key={card.id} className="flex-shrink-0 w-32 h-40 bg-gray-100 rounded-lg flex flex-col items-center justify-center">
            <img src={card.icon} alt={card.title} className="w-12 h-12 mb-2 object-contain"  />
            <p className="text-center">{card.title}</p>
          </div>
        ))}
      </div>
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 ">
        <LeftArrow />
      </button>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 ">
        <RightArrow />
      </button>
    </div>
  );
};

export default CardSlider;
