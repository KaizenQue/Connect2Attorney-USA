"use client";

import React, { useState, useEffect } from "react";
import { CaseCardCompact, CaseCardExpanded } from "./CaseCard";

// Define the data interface
interface CaseItem {
  id: number;
  title: string;
  image: string;
  url: string;
}

const casesData: CaseItem[] = [
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
    url: "/mass-tort/talcum-powder-lawsuit",
  },

  // {
  //   id: 5,
  //   title: "Depo-Provera\nLawsuit",
  //   image: "/depoprovera.svg"
  // },
  // {
  //   id: 6,
  //   title: "Bard PowerPort\nLawsuit",
  //   image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop"
  // },
  // {
  //   id: 7,
  //   title: "Tylenol Autism\nLawsuit",
  //   image: "https://images.unsplash.com/photo-1555633514-ab47b1963751?q=80&w=600&auto=format&fit=crop"
  // },
  // {
  //   id: 8,
  //   title: "Hernia Mesh\nLawsuit",
  //   image: "https://images.unsplash.com/photo-1516574187841-69301976e499?q=80&w=600&auto=format&fit=crop"
  // },
  // {
  //   id: 9,
  //   title: "NEC Baby\nFormula Lawsuit",
  //   image: "https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?q=80&w=600&auto=format&fit=crop"
  // },
  // {
  //   id: 10,
  //   title: "Hair Relaxer\nCancer Lawsuit",
  //   image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop"
  // },
  // {
  //   id: 11,
  //   title: "Philips CPAP\nSleep Lawsuit",
  //   image: "https://images.unsplash.com/photo-1512069772995-ec65ed456d32?q=80&w=600&auto=format&fit=crop"
  // },
  // {
  //   id: 12,
  //   title: "Camp Lejeune\nWater Lawsuit",
  //   image: "https://images.unsplash.com/photo-1628146957896-1a3b9343360c?q=80&w=600&auto=format&fit=crop"
  // },
  // {
  //   id: 13,
  //   title: "Exactech Knee\nAnkle Lawsuit",
  //   image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=600&auto=format&fit=crop"
  // },
  // {
  //   id: 14,
  //   title: "Elmiron Eye Damage\nLawsuit",
  //   image: "https://images.unsplash.com/photo-1580256081112-e49377338b7f?q=80&w=600&auto=format&fit=crop"
  // },
  // {
  //   id: 15,
  //   title: "Paragard IUD\nBreakage Lawsuit",
  //   image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=600&auto=format&fit=crop"
  // },
  // {
  //   id: 16,
  //   title: "Uber/Lyft Ride\nAssault Lawsuit",
  //   image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=600&auto=format&fit=crop"
  // },
  // {
  //   id: 17,
  //   title: "Zantac Cancer\nLawsuit",
  //   image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=600&auto=format&fit=crop"
  // },
  // {
  //   id: 18,
  //   title: "Paraquat\nParkinson's Lawsuit",
  //   image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=600&auto=format&fit=crop"
  // },
  // {
  //   id: 19,
  //   title: "Sunscreen\nBenzene Lawsuit",
  //   image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=600&auto=format&fit=crop"
  // },
  // {
  //   id: 20,
  //   title: "Similac Formula\nLawsuit",
  //   image: "https://images.unsplash.com/photo-1594824476961-48e6a41cd95a?q=80&w=600&auto=format&fit=crop"
  // },
  // {
  //   id: 21,
  //   title: "Firefighting Foam\nLawsuit",
  //   image: "https://images.unsplash.com/photo-1555699897-adee86d06d48?q=80&w=600&auto=format&fit=crop"
  // },
  // {
  //   id: 22,
  //   title: "Opioid Crisis\nLawsuit",
  //   image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=600&auto=format&fit=crop"
  // },
  // {
  //   id: 23,
  //   title: "Social Media\nAddiction Lawsuit",
  //   image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop"
  // },
  // {
  //   id: 24,
  //   title: "Chemical Hair\nStraightener Lawsuit",
  //   image: "https://images.unsplash.com/photo-1632059336152-4740702d7e98?q=80&w=600&auto=format&fit=crop"
  // }
];

const tabCasesCompact: Record<string, CaseItem[]> = {
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
      url: "/mass-tort/talcum-powder-lawsuit",
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
      url: "/personal-injury/motor-vehicle-accident",
    },
    {
      id: 3,
      title: "Slip and Fall Injury\n Lawsuit",
      image: "/slipimg.svg",
      url: "/personal-injury/slip-and-fall",
    },
    {
      id: 4,
      title: "18-Wheeler Accident\n Lawsuit",
      image: "/truckimg.svg",
      url: "/personal-injury/18-wheeler-accident",
    },
  ],
};

const tabCasesExpanded: Record<string, CaseItem[]> = {
  "Mass Tort": [
    {
      id: 1,
      title: "Ozempic\nLawsuit",
      image: "/img11.svg",
      url: "/mass-tort/ozempic-lawsuit",
    },
    {
      id: 2,
      title: "Mesothelioma\nLawsuit",
      image: "/img12.svg",
      url: "/mass-tort/mesotheliomaa-lawsuit",
    },
    {
      id: 3,
      title: "Roundup Cancer\nLawsuit",
      image: "/img13.svg",
      url: "/mass-tort/roundup-lawsuit",
    },
    {
      id: 4,
      title: "Talcum Powder\nLawsuit",
      image: "/img14.svg",
      url: "/mass-tort/talcum-powder-lawsuit",
    },
  ],

  "Class Action": [
    {
      id: 1,
      title: "Tesla Autopilot\nRecall Lawsuit",
      image: "/CAimg1.svg",
      url: "/class-action/tesla-autopilot-recall-lawsuit",
    },
    {
      id: 2,
      title: "Maclaren Hall Sex\n Abuse Lawsuit",
      image: "/CAimg2.svg",
      url: "/class-action/maclaren-hall-sex-abuse-lawsuit",
    },
  ],

  "Personal Injury": [
    {
      id: 1,
      title: "Sexual Abuse\n Lawsuit",
      image: "/PIimg1.svg",
      url: "/personal-injury/sexual-abuse-lawsuit",
    },
    {
      id: 2,
      title: "Motor Vehicle\n Accident Lawsuit",
      image: "/PIimg2.svg",
      url: "/personal-injury/motor-vehicle-accident",
    },
    {
      id: 3,
      title: "Slip and Fall Injury\n Lawsuit",
      image: "/PIimg3.svg",
      url: "/personal-injury/slip-and-fall",
    },
    {
      id: 4,
      title: "18-Wheeler Accident\n Lawsuit",
      image: "/PIimg4.svg",
      url: "/personal-injury/18-wheeler-accident",
    },
  ],
};

const CasesSectionCompact: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Mass Tort");
  const tabs = ["Mass Tort", "Class Action", "Personal Injury"];

  const activeCases =
    tabCasesCompact[activeTab] ?? tabCasesCompact["Mass Tort"];

  const activeTabIndex = tabs.indexOf(activeTab);

  return (
    <div
      className="flex justify-end bg-white font-sans md:my-20"
      id="next-section"
    >
      <div
        className="
    w-full lg:w-[95%] relative lg:h-[500px] xl:h-[556px] 2xl:h-[650px]
 
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
        <div className="flex flex-col lg:items-start items-center mt-4 md:mt-6 lg:m-0 lg:pl-10">
          <h1 className="font-noto-serif font-normal text-[30px] md:text-[44px] text-white mb-2 md:mb-5 md:mt-0 xl:mb-10 xl:mt-10 text-center lg:text-left leading-[50px] md:leading-[52px] lg:leading-[70px] capitalize">
            <span className="text-[#fcc030]">Cases</span> We Handle
          </h1>

          {/* Tabs */}
          <div className="relative rounded-full inline-flex border border-1 border-white h-[50px] mb-10">
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
    gap-6 sm:gap-5 lg:gap-10 h-[300px] md:h-auto
    w-full lg:pl-2 lg:pr-2  lg:pb-0 overflow-x-auto scrollbar-hide md:overflow-visible 
   
  "
        >
          {activeCases.map((item) => (
            <CaseCardCompact
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
          {tabs.map((_, idx) => (
            <div
              key={idx}
              className={`rounded-full transition-all duration-300 ${
                idx === activeTabIndex
                  ? "w-8 h-2 bg-[#fcc030]"
                  : "w-2 h-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const CasesSectionExpanded: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Mass Tort");
  const tabs = ["Mass Tort", "Class Action", "Personal Injury"];

  const activeCases =
    tabCasesExpanded[activeTab] ?? tabCasesExpanded["Mass Tort"];

  return (
    <div
      className="flex justify-end bg-white font-sans md:my-20 "
      id="next-section"
    >
      <div
        className="
    w-full lg:w-[95%] relative lg:h-[488px] xl:h-[750px] 
 
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
        <div className="flex flex-col lg:items-start items-center mt-4 md:mt-6 lg:m-0  lg:pl-10">
          <h1 className="font-noto-serif font-normal text-[30px] md:text-[44px] lg:text-[55px] lg:mt-4 xl:mt-10 xl:mb-10 text-white mb-2 md:mb-4 text-center lg:text-left leading-[50px] md:leading-[52px] lg:leading-[70px] capitalize">
            <span className="text-[#fcc030]">Cases</span> We Handle
          </h1>

          {/* Tabs */}
          <div className="relative rounded-full inline-flex border border-1 border-white h-[50px] lg:mb-8 lg:mt-2">
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
     flex
    gap-4
    overflow-x-auto
    scroll-smooth
    snap-x snap-mandatory
    pb-4

    md:grid
    md:grid-cols-2
    md:gap-6
    md:overflow-visible
    md:snap-none

    lg:grid
    lg:grid-cols-4
    lg:gap-10
  "
        >
          {activeCases.map((item) => (
            <CaseCardExpanded
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

const CasesSectionMain = () => {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const [isTallScreen, setIsTallScreen] = useState<boolean>(false);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const updateDesktop = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);

      // Update height logic immediately when checking desktop
      if (desktop) {
        setIsTallScreen(window.innerHeight >= 850);
      }
    };

    updateDesktop();
    window.addEventListener("resize", updateDesktop);
    return () => window.removeEventListener("resize", updateDesktop);
  }, []);

  useEffect(() => {
    // Only track height for desktop screens
    if (!isDesktop) return;

    const updateHeight = () => {
      setIsTallScreen(window.innerHeight >= 845);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [isDesktop]);

  /* PREVENT HYDRATION / FLASH */
  if (isDesktop === null) {
    return null;
  }

  return (
    <>
      {/* MOBILE + TABLET */}
      {!isDesktop && <CasesSectionCompact />}
      {/* DESKTOP HERO SWITCH */}
      {isDesktop &&
        (isTallScreen ? <CasesSectionExpanded /> : <CasesSectionCompact />)}
    </>
  );
};
export default CasesSectionMain;
