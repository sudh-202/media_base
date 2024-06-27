'use client'
import { useState } from "react";
import { contentData } from "../constants";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface SectionProps {
  title: string;
  content: string;
}

const Section: React.FC<SectionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4  hover:bg-gray-200"
      >
        <div className="flex justify-between items-center p-4">
          <span className="text-[#52B2AD] text-2xl">{title}</span>
          {/* <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} /> */}
        </div>
      </button>
      {isOpen && (
        <div className="p-4 bg-white">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      )}
    </div>
  );
};

const Dropdown: React.FC = () => {
  return (
    <div className="">
      {Object.entries(contentData).map(([key, value]) => (
        <Section key={key} title={value.title} content={value.content} />
      ))}
    </div>
  );
};

export default Dropdown;
