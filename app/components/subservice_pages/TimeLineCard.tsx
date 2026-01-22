"use client";

import { useEffect, useState } from "react";
import { ChevronDown, X } from "lucide-react";

type TimelineItem = {
  date: string;
  text: string;
};

type TimelineYearData = {
  firstHalf?: TimelineItem[];
  secondHalf?: TimelineItem[];
};

type TimeLineCardProps = {
  title: string;
  timelineData: Record<string, TimelineYearData>;
  defaultYear?: string;
};

const TimeLineCard = ({
  title,
  timelineData,
  defaultYear,
}: TimeLineCardProps) => {
  const years = Object.keys(timelineData).sort((a, b) => Number(b) - Number(a));
  const latestYear = years[0];

  const [activeYear, setActiveYear] = useState<string>(() => {
    if (defaultYear && timelineData[defaultYear]) return defaultYear;
    return latestYear;
  });

  const data = timelineData[activeYear];

  const hasFirstHalf =
    Array.isArray(data?.firstHalf) && data.firstHalf.length > 0;
  const hasSecondHalf =
    Array.isArray(data?.secondHalf) && data.secondHalf.length > 0;

  const [isFirstHalfOpen, setIsFirstHalfOpen] = useState(false);
  const [isSecondHalfOpen, setIsSecondHalfOpen] = useState(false);

  // Auto-open logic when year changes
  useEffect(() => {
    if (hasFirstHalf && hasSecondHalf) {
      setIsFirstHalfOpen(true);
      setIsSecondHalfOpen(false);
    } else if (hasFirstHalf) {
      setIsFirstHalfOpen(true);
      setIsSecondHalfOpen(false);
    } else if (hasSecondHalf) {
      setIsFirstHalfOpen(false);
      setIsSecondHalfOpen(true);
    } else {
      setIsFirstHalfOpen(false);
      setIsSecondHalfOpen(false);
    }
  }, [activeYear, hasFirstHalf, hasSecondHalf]);

  // Hide entire timeline if no data
  if (!hasFirstHalf && !hasSecondHalf) return null;

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
          <div className="relative rounded-full p-[3px] sm:p-[4px] bg-white/5 flex flex-wrap">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-4 py-2 rounded-full text-sm sm:text-base font-semibold transition-all ${
                  activeYear === year
                    ? "bg-[#F2C438] text-[#162766]"
                    : "bg-[#162766] text-white hover:brightness-110"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ================= FIRST HALF ================= */}
      {hasFirstHalf && (
        <div className="border-b border-white/10">
          <div
            onClick={() => setIsFirstHalfOpen((v) => !v)}
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
                className={`w-10 h-10 flex items-center justify-center rounded-[10px] ${glassBtn}`}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                {data.firstHalf!.map((item, i) => (
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
      )}

      {/* ================= SECOND HALF ================= */}
      {hasSecondHalf && (
        <div>
          <div
            onClick={() => setIsSecondHalfOpen((v) => !v)}
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
                className={`w-10 h-10 flex items-center justify-center rounded-[10px] ${glassBtn}`}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                {data.secondHalf!.map((item, i) => (
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
      )}
    </section>
  );
};

export default TimeLineCard;
