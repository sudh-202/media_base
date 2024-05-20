'use client'

import React, { useState } from 'react';

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex border-b justify-center">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 mr-2 text-sm lg:text-base ${activeTab === index ? 'border-b-2 bg-[#C9D851] text-black' : 'bg-[#FFFEFE] text-gray-600'}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="py-4">
        {tabs[activeTab]?.content}
      </div>
    </div>
  );
};

export default Tabs;
