import React, { useState } from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { faqData } from '@/constants';
// import ArrowIcon from './arrowicon';

const AccordionComponent = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Accordion>
      {faqData.map((item, index) => (
        <AccordionItem
          key={index}
          aria-label={`Accordion ${index + 1}`}
          subtitle={<span className="text-[#A5A5A5] text-[14px]">{item.description}</span>}
          title={
            <div className="flex justify-between items-center">
              <span className="text-2xl">{item.title}</span>
              {/* <ArrowIcon isOpen={activeIndex === index} /> */}
            </div>
          }
          className={`border ${activeIndex === index ? 'border-[#fff0]' : 'border-[#fff0]'}`}
          onClick={() => handleToggle(index)}
        >
          <ul>
            {item.content.map((contentItem, idx) => (
              <li key={idx} className="py-1 flex justify-start items-start text-start">
                {contentItem}
              </li>
            ))}
          </ul>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionComponent;
