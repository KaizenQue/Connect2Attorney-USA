"use client";

import React, { useState, useEffect } from "react";
import { X, ChevronDown } from "lucide-react";
import type { TimelineData } from "../timelineTypes";

interface TimeLineCardProps {
  title: string;
  timelineData: TimelineData;
  defaultYear?: string;
}

const TimeLineCard = ({
  title,
  timelineData,
  defaultYear,
}: TimeLineCardProps) => {
  const years = Object.keys(timelineData).sort((a, b) => Number(b) - Number(a));

  const latestYear = years[0];

  const [activeYear, setActiveYear] = useState<string>(() => {
    if (defaultYear && timelineData[defaultYear]) {
      return defaultYear;
    }
    return latestYear;
  });

  const [isFirstHalfOpen, setIsFirstHalfOpen] = useState(true);
  const [isSecondHalfOpen, setIsSecondHalfOpen] = useState(false);

  useEffect(() => {
    setIsFirstHalfOpen(true);
    setIsSecondHalfOpen(false);
  }, [activeYear]);

  const data = timelineData[activeYear];

  if (!data) return null;
  const glassBtn =
    "backdrop-blur-md bg-white/10 border border-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] hover:bg-white/15 hover:border-white/40 transition-all duration-300";

  return (
    <section className="w-full bg-[#0E1B4D] text-white overflow-hidden">
      {/* ================= HEADER ================= */}
      <div className="relative bg-[#162766] border-b border-white/10 p-6 sm:p-10">
        <h2 className="font-noto-serif text-[24px] sm:text-[28px] font-medium mb-5">
          {title}
        </h2>

        <div className="relative inline-flex rounded-full border border-white/20 lg:mb-8 lg:mt-2">
          {/* OUTER GLASS STROKE */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
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

          {/* SOFT INNER GLOW */}
          <div
            className="
      pointer-events-none
      absolute inset-[1px]
      rounded-full
      bg-gradient-to-br
      from-white/20
      via-transparent
      to-transparent
      opacity-40
    "
          />

          {/* MAIN SHELL */}
          <div
            className="
      relative
      rounded-full
      w-full
      bg-gradient-to-b from-white/5 to-white/0
      shadow-[inset_0_0_0.5px_rgba(255,255,255,0.35)]
      flex items-center justify-center
      p-[3px] sm:p-[4px]
    "
          >
            {/* INNER GLASS PILL */}
            <div
              className="
        relative
        inline-flex
        items-center
        gap-1
        p-1 sm:p-1.5
        rounded-full
        bg-white/10
        backdrop-blur-md
        shadow-[inset_0_0_0.5px_rgba(255,255,255,0.35)]
        flex-wrap sm:flex-nowrap
      "
            >
              {/* INNER HIGHLIGHT */}
              <div
                className="
          pointer-events-none
          absolute inset-[1px]
          rounded-full
          bg-gradient-to-br
          from-white/60
          via-transparent
          to-transparent
          opacity-40
        "
              />

              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`
            relative z-10
            px-3 sm:px-5 md:px-6
            py-1.5 sm:py-2 md:py-2.5
            text-[13px] sm:text-[15px] md:text-[18px]
            font-urbanist font-semibold
            transition-all duration-300 ease-out
            motion-safe:active:scale-95
            rounded-full
            whitespace-nowrap
            ${
              activeYear === year
                ? "bg-[#F2C438] text-[#162766] shadow-lg"
                : "bg-[#162766] text-white hover:brightness-110"
            }
          `}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= FIRST HALF ================= */}
      <div className="border-b border-white/10">
        <div
          onClick={() => !isFirstHalfOpen && setIsFirstHalfOpen(true)}
          className="px-4 sm:px-6 pr-14 lg:pr-36 py-4 flex justify-between items-center cursor-pointer bg-[#2C3B73]"
        >
          <h3 className="text-sm font-semibold text-[#F2C438]">
            {activeYear}
            <span className="ml-2 text-white/80">First Half</span>
          </h3>

          {isFirstHalfOpen ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsFirstHalfOpen(false);
              }}
              className={`w-10 h-10 flex items-center justify-center rounded-[10px]
           ${glassBtn}
           motion-safe:hover:scale-105 motion-safe:active:scale-95`}
            >
              <X size={16} className="text-[#F2C438]" />
            </button>
          ) : (
            <div className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-[#F2C338] shadow border border-[#FFF]">
              <ChevronDown size={18} stroke="#162766" strokeWidth={3} />
            </div>
          )}
        </div>

        <div
          className={`grid transition-all duration-500 ease-in-out ${
            isFirstHalfOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden px-4 sm:px-6 py-6 bg-[#162766]">
            <div
              className={`transition-all duration-500 ease-out ${
                isFirstHalfOpen ? "translate-y-0" : "-translate-y-2"
              }`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                {data.firstHalf?.map((item, i) => (
                  <div key={i}>
                    <p className="text-[#F2C438] font-semibold mb-1">
                      {item.date}
                    </p>
                    <p className="text-white/80">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SECOND HALF ================= */}
      <div>
        <div
          onClick={() => !isSecondHalfOpen && setIsSecondHalfOpen(true)}
          className="px-4 sm:px-6 pr-14 lg:pr-36 py-4 flex justify-between items-center cursor-pointer bg-[#2C3B73]"
        >
          <h3 className="text-sm font-semibold text-[#F2C438]">
            {activeYear}
            <span className="ml-2 text-white/80">Second Half</span>
          </h3>

          {isSecondHalfOpen ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsSecondHalfOpen(false);
              }}
              className={`w-10 h-10 flex items-center justify-center rounded-[10px]
           ${glassBtn}
           motion-safe:hover:scale-105 motion-safe:active:scale-95`}
            >
              <X size={16} className="text-[#F2C438]" />
            </button>
          ) : (
            <div className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-[#F2C338] shadow border border-[#FFF]">
              <ChevronDown size={18} stroke="#162766" strokeWidth={3} />
            </div>
          )}
        </div>

        <div
          className={`grid transition-all duration-500 ease-in-out ${
            isSecondHalfOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden px-4 sm:px-6 py-6 bg-[#162766]">
            <div
              className={`transition-all duration-500 ease-out ${
                isSecondHalfOpen ? "translate-y-0" : "-translate-y-2"
              }`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                {data.secondHalf?.map((item, i) => (
                  <div key={i}>
                    <p className="text-[#F2C438] font-semibold mb-1">
                      {item.date}
                    </p>
                    <p className="text-white/80">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLineCard;
