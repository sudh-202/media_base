import React from 'react';
import { infoData } from '../constants';
import '../styles/customScrollbar.css';

const Headline: React.FC = () => {
  const { title, items } = infoData.headline;

  return (
    <div className="bg-white p-10  shadow-md  overflow-y-auto border-black custom-scrollbar" style={{ maxHeight: '380px' }}>
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      <ul className="list-disc list-inside">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Headline;
