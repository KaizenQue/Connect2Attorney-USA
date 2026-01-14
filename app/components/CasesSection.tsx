"use client";

import React, { useState } from "react";
import CaseCard from "./CaseCard";

// Define the data interface
interface CaseItem {
  id: number;
  title: string;
  image: string;
  url: string;
}

const tabCases: Record<string, CaseItem[]> = {
  "Mass Tort": [
    {
      id: 1,
      title: "Ozempic\nLawsuit",
      image: "/sectionimg1.svg",
      url: "/mass-tort/ozempic-lawsuit",
    },
    {
      id: 2,
      title: "Mesothelioma\nLawsuit",
      image: "/sectionimg2.svg",
      url: "/mass-tort/mesotheliomaa-lawsuit",
    },
    {
      id: 3,
      title: "Roundup Cancer\nLawsuit",
      image: "/sectionimg3.svg",
      url: "/mass-tort/roundup-lawsuit",
    },
    {
      id: 4,
      title: "Talcum Powder\nLawsuit",
      image: "/sectionimg4.svg",
      url: "/mass-tort/talcum-lawsuit",
    },
  ],

  "Class Action": [
    {
      id: 1,
      title: "Tesla Autopilot\nRecall Lawsuit",
      image: "/sectionimg12.svg",
      url: "/class-action/tesla-autopilot-recall-lawsuit",
    },
    {
      id: 2,
      title: "Maclaren Hall Sex\n Abuse Lawsuit",
      image: "/sectionimg13.svg",
      url: "/class-action/maclaren-hall-sex-abuse-lawsuit",
    },
  ],

  "Personal Injury": [
    {
      id: 1,
      title: "Sexual Abuse\n Lawsuit",
      image: "/injuryimg.svg",
      url: "/personal-injury/sexual-abuse-lawsuit",
    },
    {
      id: 2,
      title: "Motor Vehicle\n Accident Lawsuit",
      image: "/motorimg.svg",
      url: "/personal-injury/motor-vehicle-accident-lawsuit",
    },
    {
      id: 3,
      title: "Slip and Fall Injury\n Lawsuit",
      image: "/slipimg.svg",
      url: "/personal-injury/slip-and-fall-injury-lawsuit",
    },
    {
      id: 4,
      title: "18-Wheeler Accident\n Lawsuit",
      image: "/truckimg.svg",
      url: "/personal-injury/18-wheeler-lawsuit",
    },
  ],
};

const CasesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Mass Tort");
  const tabs = ["Mass Tort", "Class Action", "Personal Injury"];

  const activeCases = tabCases[activeTab] ?? tabCases["Mass Tort"];

  return (
    <div
      className="flex justify-end bg-white font-sans md:my-10"
      id="next-section"
    >
      <div
        className="
    w-full lg:w-[95%] relative lg:h-[508px] xl:h-[560px]
 
    bg-[#162766]                

    lg:bg-[url('/bgfolderstruture.svg')]
    lg:bg-no-repeat
    lg:bg-cover
    lg:bg-left-top
    lg:bg-transparent

    px-4 sm:px-6 md:px-8 lg:pl-4 lg:pr-10 
    py-4 md:py-4 lg:pb-[20px] lg:pt-[20px] lg:pl-0 2xl:pl-15
    lg:rounded-bl-[18px]  

    drop-shadow-[-10px_10px_20px_rgba(0,0,0,0.2)]
  "
      >
        {/* Header */}
        <div className="flex flex-col lg:items-start items-center mb-8 lg:pl-10 ">
          <h1 className="font-noto-serif font-normal text-[30px] md:text-[44px] text-white md:mb-8 text-center lg:text-left leading-[50px] md:leading-[52px] lg:leading-[70px] capitalize">
            <span className="text-[#fcc030]">Cases</span> We Handle
          </h1>

          {/* Tabs */}
          <div className="relative rounded-full inline-flex border border-1 border-white h-[50px]">
            <div
              className="absolute inset-0 rounded-full pointer-events-none h-[50px]"
              style={{
                padding: "0.7px",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.6) 65%, rgba(255,255,255,0) 82%)",
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                boxShadow: "0 7.564px 11.346px -2.269px rgba(0,0,0,0.10)",
              }}
            />
            <div
              className="
        pointer-events-none h-[50px]
        absolute inset-[1px]
        rounded-[19px]
        bg-gradient-to-br
        from-white/18
        via-transparent
        to-transparent
        opacity-40
      "
            />
            <div
              className="
      relative rounded-full w-full h-[50px]
      bg-gradient-to-b from-white/5 to-white/0
      shadow-[inset_0_0_0.5px_rgba(255,255,255,0.35)]
      flex items-center justify-center
    "
            >
              {/* REAL PILL CONTENT */}
              <div
                className="
      relative
      inline-flex
      items-center
      gap-1
      p-1.5
      rounded-full
      bg-white/10
      backdrop-blur-md
      shadow-[inset_0_0_0.5px_rgba(255,255,255,0.35)]
    "
              >
                {/* inner glass glow (same as card) */}
                <div
                  className="
        pointer-events-none
        absolute inset-[1px]
        rounded-full
        bg-gradient-to-br
        from-white/68
        via-transparent
        to-transparent
        opacity-40
      "
                />

                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`
          relative z-10
          px-3 sm:px-4 md:px-6
          py-2 sm:py-2.5 md:py-3
          rounded-full
          font-urbanist font-semibold
          text-[14px] md:text-[18px]
          transition-all duration-300
          ${
            activeTab === tab
              ? "bg-[#fcc030] text-[#111e4d]"
              : "text-white bg-[#162766]"
          }
        `}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div
          className="
    flex md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 
    gap-6 sm:gap-5 lg:gap-10
    w-full lg:pl-2 lg:pr-2  lg:pb-0
   
  "
        >
          {activeCases.map((item) => (
            <CaseCard
              key={`${activeTab}-${item.id}`}
              id={item.id}
              title={item.title}
              image={item.image}
              url={item.url}
            />
          ))}
        </div>

        {/* Mobile dots */}
        <div className="flex md:hidden justify-center gap-2">
          {activeCases.map((_, idx) => (
            <div
              key={idx}
              className={`rounded-full ${
                idx === 0 ? "w-8 h-2 bg-[#fcc030]" : "w-2 h-2 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CasesSection;
