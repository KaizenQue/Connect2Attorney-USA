"use client";

import React, { useState, useEffect } from "react";
import { X, ChevronDown } from "lucide-react";
import type { TimelineData } from "../timelineTypes";

interface TimeLineCardProps {
  title: string;
  timelineData: TimelineData;
  defaultYear?: string;
}

const TimeLineCard = ({ title, timelineData, defaultYear }: TimeLineCardProps) => {
const years = Object.keys(timelineData).sort((a, b) => Number(b) - Number(a));

  const [activeYear, setActiveYear] = useState<string>(
    defaultYear && timelineData[defaultYear] ? defaultYear : years[0]
  );

  const [isFirstHalfOpen, setIsFirstHalfOpen] = useState(true);
  const [isSecondHalfOpen, setIsSecondHalfOpen] = useState(false);

  useEffect(() => {
    setIsFirstHalfOpen(true);
    setIsSecondHalfOpen(false);
  }, [activeYear]);

  const data = timelineData[activeYear];

  if (!data) return null;

  return (
    <section className="w-full bg-[#0E1B4D] text-white overflow-hidden">
      {/* ================= HEADER ================= */}
      <div className="relative bg-[#162766] border-b border-white/10 p-6 sm:p-10">
        <h2 className="font-noto-serif text-[24px] sm:text-[28px] font-medium mb-5">
          {title}
        </h2>

        <div className="inline-flex items-center gap-2 sm:gap-[10px] h-[50px] px-2 py-2 rounded-[90px] bg-white/10 shadow">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`
                px-4 sm:px-6 py-2 text-[16px] sm:text-[18px]
                font-urbanist font-semibold
                transition-all duration-300 ease-out
                motion-safe:active:scale-95
                ${
                  activeYear === year
                    ? "bg-[#F2C438] text-[#162766] rounded-[160px] shadow-lg"
                    : "bg-[#162766] text-white rounded-[220px] border border-white/10 hover:brightness-110"
                }
              `}
            >
              {year}
            </button>
          ))}
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
              className="w-10 h-10 flex items-center justify-center rounded-[10px]
                         bg-white/10 shadow transition-transform duration-300
                         motion-safe:hover:scale-105 motion-safe:active:scale-95"
            >
              <X size={16} className="text-[#F2C438]" />
            </button>
          ) : (
            <div className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-[#F2C338] shadow">
              <ChevronDown size={18} stroke="#162766" strokeWidth={3} />
            </div>
          )}
        </div>

        <div
          className={`grid transition-all duration-500 ease-in-out ${
            isFirstHalfOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden px-4 sm:px-6 py-6 bg-[#162766]">
            <div
              className={`transition-all duration-500 ease-out ${
                isFirstHalfOpen ? "translate-y-0" : "-translate-y-2"
              }`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                {data.firstHalf.map((item, i) => (
                  <div key={i}>
                    <p className="text-[#F2C438] font-semibold mb-1">{item.date}</p>
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
              className="w-10 h-10 flex items-center justify-center rounded-[10px]
                         bg-white/10 shadow transition-transform duration-300
                         motion-safe:hover:scale-105 motion-safe:active:scale-95"
            >
              <X size={16} className="text-[#F2C438]" />
            </button>
          ) : (
            <div className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-[#F2C338] shadow">
              <ChevronDown size={18} stroke="#162766" strokeWidth={3} />
            </div>
          )}
        </div>

        <div
          className={`grid transition-all duration-500 ease-in-out ${
            isSecondHalfOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden px-4 sm:px-6 py-6 bg-[#162766]">
            <div
              className={`transition-all duration-500 ease-out ${
                isSecondHalfOpen ? "translate-y-0" : "-translate-y-2"
              }`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                {data.secondHalf.map((item, i) => (
                  <div key={i}>
                    <p className="text-[#F2C438] font-semibold mb-1">{item.date}</p>
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
