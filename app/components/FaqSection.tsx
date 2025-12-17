"use client";

import React, { useState } from 'react';

const faqData = [
  {
    question: "How much does it cost to start a case?",
    answer: "Starting a case with us is completely free. We work on a contingency fee basis, meaning we only get paid if we win your case. There are no upfront legal fees."
  },
  {
    question: "Who will handle my case?",
    answer: "Your case will be assigned to a dedicated attorney specializing in your specific type of claim, supported by a team of paralegals and legal assistants to ensure you get full attention."
  },
  {
    question: "Is my information confidential?",
    answer: "Absolutely. All communications between you and our firm are protected by attorney-client privilege. We adhere to strict privacy policies to keep your data secure."
  },
  {
    question: "How long will my case take?",
    answer: "Every case is unique. Simple settlements may take a few months, while complex litigation can take a year or more. We will provide a timeline estimate during your consultation."
  },
  {
    question: "What kinds of cases do we accept?",
    answer: "We specialize in personal injury, worker's compensation, and medical malpractice. If you aren't sure if your case qualifies, give us a call for a free evaluation."
  }
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white font-inter flex justify-end w-full px-0 sm:px-6 md:px-10 lg:px-0 lg:pl-14 py-20 md:py-24 lg:py-24 text-white lg:overflow-x-hidden md:bg-[#111e4d] lg:bg-white">
      
      {/* 
        Main Blue Container 
        - lg:w-[95%] creates the offset look on desktop.
        - The background uses an arbitrary linear-gradient value to create the "Cut" corner.
        - drop-shadow handles the custom shadow requirements.
      */}
      <main 
        className="
          relative flex flex-col w-full max-w-none
          p-8 sm:p-10 md:p-12 lg:pl-20 lg:pr-16 lg:py-16
          bg-[#111e4d] 
          lg:bg-transparent 
          lg:bg-[linear-gradient(135deg,transparent_80px,#111e4d_80px)]
          lg:rounded-bl-[60px] lg:drop-shadow-[-10px_10px_20px_rgba(0,0,0,0.2)]
        "
      >
        
        {/* Header */}
        <header className="mb-12 pt-3 pl-3 sm:pt-0 sm:pl-0 lg:transform lg:translate-x-26 lg:translate-y-8">
          <h2
            className="font-noto-serif font-normal capitalize"
            style={{
              color: '#FFF',
              fontFamily: '"Noto Serif"',
              fontSize: '50px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '60px',
              textTransform: 'capitalize',
              letterSpacing: '0px',
            }}
          >
            Any Questions? 
            <span 
              className="block mt-2"
              style={{
                color: '#F2C438',
                fontFamily: '"Noto Serif"',
                fontSize: '50px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '60px',
                textTransform: 'capitalize',
              }}
            >
              We Got You
            </span>
          </h2>
        </header>

        {/* FAQ List */}
        <div className="flex flex-col gap-5 w-full px-2 sm:px-3 md:px-4 pt-6 pb-8 md:pt-8 md:pb-10">
          {faqData.map((item, index) => {
            const isActive = activeIndex === index;
            
            return (
              <div 
                key={index} 
                onClick={() => toggleFAQ(index)}
                className={`
                  relative bg-[#3b4b80] rounded-xl 
                  pl-6 pr-12 sm:pl-8 sm:pr-16 py-6 min-h-[90px]
                  cursor-pointer overflow-hidden
                  transition-all duration-200 ease-in-out
                  hover:translate-x-1 hover:bg-[#45568f]
                  ${isActive ? 'bg-[#45568f]' : ''}
                `}
              >
                
                {/* Content Wrapper */}
                <div className="flex flex-col">
                  {/* Question */}
                  <p
                    className="font-noto-serif m-0"
                    style={{
                      color: '#FFF',
                      fontFeatureSettings: "'dlig' on",
                      fontFamily: '"Noto Serif"',
                      fontSize: '20px',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      lineHeight: 'normal',
                    }}
                  >
                    {item.question}
                  </p>
                  
                  {/* Answer - Animated using Grid Rows trick */}
                  <div 
                    className={`
                      grid transition-[grid-template-rows] duration-300 ease-out
                      ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
                    `}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="pt-4 text-blue-100 font-urbanist font-normal leading-relaxed"
                        style={{
                          fontSize: '18px',
                          lineHeight: '24px',
                          letterSpacing: '0px',
                        }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 
                   The "Notch" Bottom Right 
                   Matches parent background color (#111e4d) to create the scoop effect
                */}
                <div className="absolute bottom-0 right-0 w-[60px] h-[60px] bg-[#111e4d] rounded-tl-[25px] pointer-events-none z-10"></div>

                {/* The Plus Button */}
                <div 
                  className={`
                    absolute bottom-1.5 right-1.5 
                    w-11 h-11 rounded-lg 
                    bg-[#fcc030] shadow-md z-20 
                    flex items-center justify-center
                    transition-transform duration-300
                    ${isActive ? 'rotate-[135deg] bg-white' : 'rotate-0'}
                  `}
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    className={`w-6 h-6 transition-colors duration-300 ${isActive ? 'fill-[#111e4d]' : 'fill-[#111e4d]'}`}
                  >
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                  </svg>
                </div>

              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default FaqSection;

