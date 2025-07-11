'use client';

import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem = ({ question, answer }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={toggleAccordion}
        className="w-full cursor-pointer flex justify-between items-center text-left"
      >
        <h3 className="text-lg cursor-pointer font-semibold text-[#003865]">{question}</h3>
        <span className="text-[#E02454] bg-pink-200 p-[9px] rounded-full">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </button>

      {/* The answer panel with a smooth transition */}
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pt-4 text-[16px] text-[#7A8A9E]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;