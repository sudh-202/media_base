import React from 'react';
import { infoData } from '../constants';

const LiverFunctionTest: React.FC = () => {
  const { title, features, price, buttonText } = infoData.liverFunctionTest;

  return (
    <div className="bg-[#C9D851] p-8  text-black mb-1">
      <h2 className="lg:text-4xl text-2xl font-semibold mb-2">{title}</h2>
      <ul className="list-disc list-inside mb-4 lg:text-">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <div className="flex justify-between items-center">
        <span className="lg:text-5xl text-2xl font-light">{price}</span>
        <button className="bg-[#52B2AD] text-white px-10 py-4 rounded-md lg:text-2xl">{buttonText}</button>
      </div>
    </div>
  );
};

export default LiverFunctionTest;
