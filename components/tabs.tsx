'use client'

import React, { useState } from 'react';

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  style?: React.CSSProperties;
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex flex-wrap border-b justify-evenly gap-2 lg:gap-0 px-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`lg:w-[280px] w-[150px] font-medium lg:text-balance py-4 px-2 lg:py-2 lg:px-4 mr-2 text-xs lg:text-lg  rounded-lg ${activeTab === index ? ' bg-[#C9D851] text-black' : 'bg-[#FFFEFE] text-gray-600'} focus:outline-none`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="py-4 ">
        {tabs[activeTab]?.content}
      </div>
    </div>
  );
};

export default Tabs;
