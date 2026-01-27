"use client";

import React from "react";
import { CaseCardCompact, CaseCardExpanded } from "./CaseCard";
import MobileCaseCard from "./MobileCaseCard";

/* ---------------- Types ---------------- */
interface CaseItem {
  id: number;
  title: string;
  image: string;
  url: string;
}

/* ---------------- Desktop / Tablet Data ---------------- */
const casesData: CaseItem[] = [
  {
    id: 1,
    title: "Sexual Abuse Lawsuit",
    image: "/injuryimg.svg",
    url: "/personal-injury/sexual-abuse-lawsuit",
  },
  {
    id: 2,
    title: "Motor Vehicle Accident Lawsuit",
    image: "/motorimg.svg",
    url: "/personal-injury/motor-vehicle-accident",
  },
  {
    id: 3,
    title: "Slip and Fall Injury Lawsuit",
    image: "/slipimg.svg",
    url: "/personal-injury/slip-and-fall",
  },
  {
    id: 4,
    title: "18-Wheeler Accident Lawsuit",
    image: "/truckimg.svg",
    url: "/personal-injury/18-wheeler-accident-lawsuit",
  },
];

/* ---------------- Mobile Data ---------------- */
const mobileCasesData: CaseItem[] = [
  {
    id: 1,
    title: "Sexual Abuse Lawsuit",
    image: "/injuryimgmobile.svg",
    url: "/personal-injury/sexual-abuse-lawsuit",
  },
  {
    id: 2,
    title: "Motor Vehicle Accident Lawsuit",
    image: "/motorimgmobile.svg",
    url: "/personal-injury/motor-vehicle-accident",
  },
  {
    id: 3,
    title: "Slip and Fall Injury Lawsuit",
    image: "/slipimgmobile.svg",
    url: "/personal-injury/slip-and-fall",
  },
  {
    id: 4,
    title: "18-Wheeler Accident Lawsuit",
    image: "/truckimgmobile.svg",
    url: "/personal-injury/18-wheeler-accident-lawsuit",
  },
];

const CasesSection2: React.FC = () => {
  const totalCases = casesData.length;

  return (
    <section
      className="font-sans  
    md:bg-[url('/bgfolderstruturenew.svg')]
    md:bg-no-repeat
    md:bg-cover
    md:bg-left-top "
    >
      {/* ================= MOBILE VERSION ================= */}
      <div className="md:hidden bg-[#fff] px-4 py-10">
        {/* Header */}
        <div className="mb-8 text-left">
          <h1 className="font-noto-serif font-normal text-[#162766] text-[28px] leading-[36px]">
            Together in Personal Injury Lawsuits to Demand Accountability.
          </h1>
        </div>

        {/* Mobile Grid (WHITE cards, untouched) */}
        <div className="grid grid-cols-2 gap-4">
          {mobileCasesData.map((item) => (
            <MobileCaseCard
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              url={item.url}
            />
          ))}
        </div>

        {/*  No button on mobile (intentionally removed) */}
      </div>

      {/* ================= TABLET / DESKTOP VERSION ================= */}
      <div className="hidden md:block py-12 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="mb-12 text-left">
            <h1
              className="font-noto-serif font-normal capitalize text-white mb-2"
              style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                lineHeight: "clamp(44px, 6vw, 70px)",
              }}
            >
              Together in Personal Injury Lawsuits to Demand Accountability.
            </h1>
          </div>

          {/* Desktop Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 ">
            {casesData.map((item) => (
              <CaseCardCompact
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                url={item.url}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection2;
