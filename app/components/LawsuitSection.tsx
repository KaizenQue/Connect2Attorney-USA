"use client";

import React from "react";
import {
  CaseCardCompact,
  CaseCardExpanded,
} from "./CaseCard";
import MobileCaseCard from "./MobileCaseCard";

/* ---------------- Types ---------------- */
interface CaseItem {
  id: number;
  title: string;
  image: string;
  url:string;
}

/* ---------------- Desktop / Tablet Data ---------------- */
const casesData: CaseItem[] = [
  {
    id: 1,
    title: "Tesla Autopilot Recall Lawsuit",
    image: "/sectionimg12.svg",
        url: "/class-action/tesla-autopilot-recall-lawsuit",

  },
  {
    id: 2,
    title: "MacLaren Hall Sex Abuse Lawsuit",
    image: "/sectionimg13.svg",
        url: "/class-action/maclaren-hall-sex-abuse-lawsuit",

  },
];

/* ---------------- Mobile Data ---------------- */
const mobileCasesData: CaseItem[] = [
  {
    id: 1,
    title: "Tesla Autopilot Recall Lawsuit",
    image: "/TeslaAutopilotRecallLawsuitmobile.svg",
        url: "/class-action/tesla-autopilot-recall-lawsuit",
  
  },
  {
    id: 2,
    title: "MacLaren Hall Sex Abuse Lawsuit",
    image: "/MacLarenHallSexAbuseLawsuitmobile.svg",
        url: "/class-action/maclaren-hall-sex-abuse-lawsuit",

  },
];

const CasesSection2: React.FC = () => {
  const totalCases = casesData.length;

  return (
    <section className="font-sans   md:bg-[url('/bgfolderstruturenew.svg')]
    md:bg-no-repeat
    md:bg-cover
    md:bg-left-top">
      {/* ================= MOBILE VERSION ================= */}
      <div className="md:hidden bg-[#fff] px-4 py-10">
        {/* Header */}
        <div className="mb-8 text-left">
          <h1 className="font-noto-serif font-normal text-[#162766] text-[28px] leading-[36px]">
            Together in{" "}
            <span className="text-[#F2C438]">{totalCases} Class Action</span>
          </h1>

          <h2 className="font-noto-serif font-normal text-[#162766] text-[28px] leading-[36px]">
            Lawsuits to Demand Accountability.
          </h2>
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

      </div>

      {/* ================= TABLET / DESKTOP VERSION ================= */}
      <div className="hidden md:block  py-12 px-6 lg:px-12">
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
              Together in{" "}
              <span className="text-[#F2C438]">
                {totalCases} Class Action
              </span>{" "}
              Lawsuits
            </h1>

            <h2
              className="font-noto-serif font-normal capitalize text-white"
              style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                lineHeight: "clamp(44px, 6vw, 70px)",
              }}
            >
              to Demand Accountability.
            </h2>
          </div>

          {/* Desktop Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
