"use client";

import React, { useState } from "react";
import Image from "next/image";

/* ---------------- Types ---------------- */
export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqData: FaqItem[];
}

/* ---------------- Component ---------------- */
const FaqSection: React.FC<FaqSectionProps> = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white font-inter flex justify-end w-full px-0 sm:px-6 md:px-0 lg:px-0 lg:pl-14 py-8 md:py-10 lg:py-24 lg:pt-0 text-white lg:overflow-x-hidden  lg:bg-white">
<main
  className="
    relative flex flex-col w-full max-w-none
    p-8 sm:p-10 md:p-10 lg:pl-20 lg:pr-16 lg:py-16

    bg-[url('/bgfolderstruturemobile.svg')]
    bg-no-repeat
    bg-cover
    bg-left-top

    md:bg-[url('/bgfolderstruture.svg')]
    md:bg-no-repeat
    md:bg-cover
    md:bg-left-top

    lg:bg-[url('/bgfolderstruture.svg')]
    lg:bg-no-repeat
    lg:bg-cover
    lg:bg-left-top

    lg:drop-shadow-[-10px_10px_20px_rgba(0,0,0,0.2)]
  "
>


        {/* Header */}
        <header className="mb-2 lg:mb-12 pt-5 pl-3 sm:pt-0 sm:pl-0 lg:transform lg:translate-x-11 lg:translate-y-8 md:p-6">
          <h2
            className="
              font-noto-serif font-normal capitalize
              text-white text-[30px] md:text-[50px] lg:leading-[60px]
            "
          >
            Any Questions? 
            <span
              className="
                md:inline lg:inline block mt-2 font-noto-serif font-normal capitalize
                text-[#F2C438] text-[30px] md:text-[50px] lg:leading-[60px]
              "
            >
            {" "}We Got You
            </span>
          </h2>
        </header>

        {/* FAQ List */}
        <div className="flex flex-col gap-5 w-full px-4 sm:px-3 lg:px-10 pt-6 pb-8 md:pt-8 md:pb-10">
          {faqData.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onClick={() => toggleFAQ(index)}
                className={`
                  relative bg-[#3b4b80] rounded-xl
                  pl-6 pr-12 sm:pl-8 sm:pr-16 py-4 min-h-[80px]
                  cursor-pointer overflow-hidden flex items-center
                  transition-all duration-200 ease-in-out
                  hover:translate-x-1 hover:bg-[#45568f]
                  ${isActive ? "bg-[#45568f]" : ""}
                `}
              >
                {/* Content */}
                <div className="flex flex-col px-2">
                  {/* Question */}
                  <p
                    className="font-noto-serif m-0 transition-colors duration-200 text-[18px] md:text-[20px]"
                    style={{
                      color: isActive ? "#F2C438" : "#FFFFFF",
                      fontWeight: 500,
                    }}
                  >
                    {item.question}
                  </p>

                  {/* Answer */}
                  <div
                    className={`
                      grid transition-[grid-template-rows] duration-300 ease-out
                      ${
                        isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="pt-4 text-blue-100 font-urbanist font-normal"
                        style={{
                          fontSize: "18px",
                          lineHeight: "24px",
                        }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Notch */}
                <div className="absolute bottom-0 right-0 w-[60px] h-[60px] bg-[#111e4d] rounded-tl-[25px] pointer-events-none z-10" />

                {/* Plus Button */}
                <div
                  className={`
                    absolute bottom-1.5 right-1.5
                    w-11 h-11 rounded-lg
                    shadow-md z-20
                    flex items-center justify-center
                    transition-transform duration-300
                    ${isActive ? "" : "bg-[#fcc030]"}
                  `}
                >
                  {isActive ? (
                    // 🔽 OPEN STATE (minus / close icon)
                    <Image
                      src="/openbtn.svg"
                      alt="open btn"
                      width={44}
                      height={44}
                    />
                  ) : (
                    // ➕ CLOSED STATE (plus icon)
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#111e4d]">
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                    </svg>
                  )}
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
