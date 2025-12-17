"use client";

import React, { useState } from 'react';
import CaseCard from './CaseCard';

// Define the data interface
interface CaseItem {
  id: number;
  title: string;
  image: string;
}

const casesData: CaseItem[] = [
  {
    id: 1,
    title: "Ozempic\nLawsuit",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Mesothelioma\nLawsuit",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Roundup Cancer\nLawsuit",
    image: "https://images.unsplash.com/photo-1625246333195-58197bd47d19?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Talcum Powder\nLawsuit",
    image: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=600&auto=format&fit=crop"
  }
];

const CasesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Mass Tort');
  const tabs = ['Mass Tort', 'Class Action', 'Personal Injury'];

  return (
    <div className="flex justify-end bg-white py-0 lg:py-12 font-sans overflow-x-hidden">
      
      {/* 
        Main Blue Container 
        - lg:bg-[image:...] creates the diagonal cut on desktop using a hard-stop gradient.
        - bg-[#111e4d] is the fallback for mobile.
      */}
      <div 
        className="
          w-full lg:w-[95%] relative 
          bg-[#111e4d] 
          lg:bg-transparent 
          lg:bg-[linear-gradient(135deg,transparent_80px,#111e4d_80px)]
          lg:rounded-bl-[60px]
          px-4 sm:px-6 md:px-8 lg:pl-20 lg:pr-10 
          py-8 md:py-12 lg:py-16
          drop-shadow-[-10px_10px_20px_rgba(0,0,0,0.2)]
        "
      >
        {/* Header Section */}
        <div className="flex flex-col lg:items-start items-center mb-8 md:mb-12">
          <h1 className="font-noto-serif font-normal text-[60px] text-white mb-6 md:mb-8 text-center lg:text-left leading-[70px] tracking-[0px] capitalize align-middle">
            <span className="text-[#fcc030]">Cases</span> We Handle
          </h1>

          {/* Tabs */}
          <div className="inline-flex bg-white/10 border border-white/20 rounded-full p-1 sm:p-1.5 gap-1 w-full sm:w-auto justify-center">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full 
                  font-urbanist font-semibold text-[18px] leading-[100%] tracking-[0%] text-center align-middle
                  transition-all duration-300 whitespace-nowrap
                  ${activeTab === tab 
                    ? 'bg-[#fcc030] text-[#111e4d]' 
                    : 'text-white hover:bg-white/10 bg-transparent'
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 
          Cards Wrapper 
          - Grid on Desktop (4 cols) and Tablet (2 cols)
          - Scrollable Flex (Carousel) on Mobile
        */}
        <div className="
          flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 w-full
          overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none
          pb-6 md:pb-0
          scrollbar-hide
        ">
          {casesData.map((item) => (
            <CaseCard
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
            />
          ))}
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex md:hidden justify-center gap-2 mt-6">
          <div className="w-8 h-2 bg-[#fcc030] rounded-full"></div>
          <div className="w-2 h-2 bg-white/30 rounded-full"></div>
          <div className="w-2 h-2 bg-white/30 rounded-full"></div>
          <div className="w-2 h-2 bg-white/30 rounded-full"></div>
        </div>

      </div>
    </div>
  );
};

export default CasesSection;

