"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  ArrowUpRightIcon,
  BAR_COLORS,
  // lawsuits,
  // TALC_CONFIG,
  // ROUNDUP_CONFIG,
  // MESO_CONFIG,
  // DEPO_CONFIG,
  // CHART_CONFIGS,
  ChevronDownIcon,
} from "./homecomponents/lawsuitData";
import {
  BlueShapeSVG,
  LightShapeSVG,
  LightShapeSVGExpanded,
} from "./homecomponents/svg";

import { mapChartFromDB } from "./homecomponents/lawsuitData";
import LawsuitsHeroCard from "./subservice_pages/LawsuitsHeroCard";
import dynamic from "next/dynamic";

/* ================= TYPES ================= */
type ChartConfig = {
  title: string;
  xAxisLabel: string;
  yAxisLabel: string;
  xLabels: string[];
  yTicks: number[];
  maxY: number;
  bars: number[];
  stats: {
    averageSettlement: string;
    settlementTime: string;
    courtTime: string;
  };
};
// type Lawsuit = (typeof lawsuits)[number];
// type DataGridItem = Lawsuit["dataGrid"][number];

type TabletLandingProps = {
  selectedIndex: number;
  setSelectedIndex: (v: number) => void;

  dropdownOpen: boolean;
  setDropdownOpen: (v: boolean) => void;

  chartConfigs: ChartConfig[];
  lawsuitsList: any[];
};

type Props = {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  chartConfigs: ChartConfig[];
  lawsuitsList: any[];
};

type GridItem = {
  label: string;
  value: string;
};

/* ================= SUBCOMPONENTS ================= */
const GlassCard = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
}) => {
  return (
    <div
      className="
        group
        cursor-pointer
        flex flex-col justify-between

        w-[105px] h-[129px]
        md:w-[111px] md:h-[111px]
        lg:w-[84px] lg:h-[92px]
        xl:w-[84px] xl:h-[92px]

        p-2 lg:p-2 xl:p-1.5
        rounded-xl

        transition-all duration-300 ease-in-out
        hover:-translate-y-1

        bg-white/45 
        backdrop-blur-md 
        shadow-[0_4px_16px_0_rgba(31,38,135,0.1)]
        hover:bg-white/65
      "
    >
      {/* Icon */}
      <div
        className="
          bg-white rounded-lg flex items-center justify-center mb-2 shadow-sm

          w-11 h-11
          lg:w-10 lg:h-10
          xl:w-[34px] xl:h-[34px]
        "
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className="
          font-urbanist text-[#0f1c4d] font-semibold leading-tight

          text-[12px]
          lg:text-[12px]
          xl:text-[11px]
        "
      >
        {title}
      </h3>
    </div>
  );
};

const GlassCardExtend = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
}) => {
  return (
    <div
      className="
        group cursor-pointer
        flex flex-col justify-between
        rounded-xl
        transition-all duration-300 ease-in-out
        hover:-translate-y-1
        bg-white/45 backdrop-blur-md 
        shadow-[0_4px_16px_0_rgba(31,38,135,0.1)]
        hover:bg-white/65
        
        /* LG: optimized for smaller screen */
        lg:w-[72px] lg:h-[78px] lg:p-1.5
        xl:w-[84px] xl:h-[92px] xl:p-2
        2xl:w-[90px] 2xl:h-[100px] 2xl:p-2.5
      "
    >
      {/* Icon */}
      <div
        className="
          bg-white rounded-lg flex items-center justify-center shadow-sm
          lg:w-7 lg:h-7 lg:mb-1
          xl:w-9 xl:h-9 xl:mb-2
          2xl:w-10 2xl:h-10 2xl:mb-2.5
        "
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className="
          font-urbanist text-[#0f1c4d] font-semibold leading-tight
          lg:text-[10px]
          xl:text-[11px]
          2xl:text-[12px]
        "
      >
        {title}
      </h3>
    </div>
  );
};
const DataGridCompactExtend = ({
  grid,
}: {
  grid: { label: string; value: string }[];
}) => (
  <div className="w-full lg:mt-1 xl:mt-2">
    <p
      className="
      text-[#162766] font-urbanist font-semibold mb-1 lg:mb-1.5 xl:mb-2 pl-1
      lg:text-[13px]
      xl:text-[14px]
      2xl:text-[15px]
    "
    >
      Case Summary
    </p>

    <div className="grid grid-cols-3 gap-x-2 lg:gap-x-2.5 xl:gap-x-3 gap-y-1.5 lg:gap-y-2 xl:gap-y-2.5">
      {grid.map((item, idx) => (
        <div
          key={idx}
          className="
            flex flex-col items-start
            bg-white/70 border border-[#DDE6FF]
            rounded-[10px] 
            shadow-[0_4px_11px_rgba(0,0,0,0.08)] backdrop-blur-[6px]
            
            /* LG padding */
            lg:p-1.5
            /* XL padding */
            xl:p-2.5
            
            /* LG dimensions */
            lg:w-[68px] lg:min-h-[58px] lg:gap-2
            /* XL dimensions */
            xl:w-[85px] xl:min-h-[70px] xl:gap-2.5
            /* 2XL dimensions */
            2xl:w-[95px] 2xl:min-h-[78px] 2xl:gap-3
          "
        >
          <p
            className="
            text-[#808080] font-urbanist font-medium leading-none
            lg:text-[9px]
            xl:text-[11px]
            2xl:text-[12px]
          "
          >
            {item.label}
          </p>

          <p
            className="
            text-[#162766] font-urbanist font-semibold leading-none
            lg:text-[11px]
            xl:text-[13px]
            2xl:text-[14px]
          "
          >
            {item.value}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const ClearBarChart = ({ config }: { config: ChartConfig }) => {
  const data = config.xLabels.map((label, i) => ({
    label,
    value: config.bars[i],
  }));

  const maxValue = Math.max(...config.bars);

  // Dynamic rounding based on maxValue size
  let roundedMax = 0;
  let step = 0;

  if (maxValue <= 100) {
    roundedMax = Math.ceil(maxValue / 10) * 10;
    step = roundedMax / 4;
  } else if (maxValue <= 1000) {
    roundedMax = Math.ceil(maxValue / 100) * 100;
    step = roundedMax / 4;
  } else if (maxValue <= 10000) {
    roundedMax = Math.ceil(maxValue / 500) * 500;
    step = roundedMax / 4;
  } else if (maxValue <= 100000) {
    roundedMax = Math.ceil(maxValue / 1000) * 1000;
    step = roundedMax / 4;
  } else {
    roundedMax = Math.ceil(maxValue / 10000) * 10000;
    step = roundedMax / 4;
  }

  //  Build ticks cleanly
  const dynamicTicks = [step, step * 2, step * 3, step * 4];

  return (
    <div className="w-full h-[130px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          barCategoryGap={20}
          margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
        >
          <CartesianGrid stroke="#E6ECFF" vertical={false} />

          <XAxis
            dataKey="label"
            tick={{ fontSize: 9, fill: "#162766" }}
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            domain={[0, roundedMax]}
            ticks={dynamicTicks}
            interval={0}
            tickFormatter={(v) => (v >= 1000 ? `${v / 1000}K` : `${v}`)}
            tick={{ fontSize: 9, fill: "#162766" }}
            tickLine={false}
            axisLine={false}
            width={45}
            tickMargin={4}
          />

          <Bar dataKey="value" radius={[8, 8, 0, 0]}>
            {data.map((_, index) => (
              <Cell key={index} fill={BAR_COLORS[index % BAR_COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const StatisticsCard = ({ chartConfig }: { chartConfig: ChartConfig }) => {
  const totalStats = chartConfig.bars.reduce((sum, val) => sum + val, 0);
  return (
    <div
      className="
        w-full h-[216px] flex flex-col p-[15px]

        border border-[#DDE6FF]
        rounded-[12.103px]

        bg-[rgba(255,255,255,0.30)]
        shadow-[0_7.564px_11.346px_-2.269px_rgba(0,0,0,0.10)]
        backdrop-blur-[9.076923370361328px]
      "
    >
      {/* ===== HEADER ROW ===== */}
      <div className="flex justify-between items-start mb-2">
        <div className="flex-1 min-w-0">
          <h3 className="text-[#162766] font-bold font-urbanist text-[15px]">
            Case Closure Statistics
          </h3>
          <p className="text-[#808080] text-[10px] font-urbanist mt-1">
            MDL Cases (2025)
          </p>
        </div>

        <span className="font-urbanist text-[#162766] text-[25px] font-light ml-2 shrink-0">
          {totalStats.toLocaleString()}
        </span>
      </div>

      {/* ===== FULL WIDTH DIVIDER ===== */}
      <div className="relative mt-1 mb-3 h-1.5 w-full">
        {/* Yellow fixed segment */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[3px] w-12 bg-[#F5C844] rounded-l-full z-10" />

        {/* Blue flexible segment */}
        <div className="absolute left-12 right-0 top-[-5px] h-1.5">
          <svg
            className="w-full h-full"
            viewBox="0 0 232 6"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 5V6H16L25 1H30H232V0H30H25L16 5H0Z"
              fill="#DDE6FF"
            />
          </svg>
        </div>
      </div>

      {/* ===== CHART ===== */}
      <div className="flex-1">
        <ClearBarChart config={chartConfig} />
      </div>
    </div>
  );
};

const DataGrid = ({ grid }: { grid: { label: string; value: string }[] }) => (
  <div className="w-full max-w-[440px] mt-2 ">
    <p className="text-[#162766] font-urbanist text-[15px] font-semibold mt-5 mb-2 pl-2">
      Case Summary
    </p>
    <div className="grid grid-cols-3 gap-2 p-2 rounded-xl">
      {grid.map((item, idx) => (
        <div
          key={idx}
          className="bg-white/70 p-2 xl:p-3 rounded-lg shadow-sm min-h-[70px] xl:min-h-[90px] flex flex-col justify-between shadow-xl w-[108px]"
        >
          <p className="text-[9px] xl:text-[12px] font-urbanist text-[#808080] mb-1 leading-tight">
            {item.label}
          </p>
          <p className="text-[#162766] font-bold font-urbanist text-[10px] lg:text-[13px]">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const DataGridCompact = ({
  grid,
}: {
  grid: { label: string; value: string }[];
}) => (
  <div className="w-full mt-3">
    <p className="text-[#162766] font-urbanist text-[14px] xl:text-[15px] font-semibold mb-2 pl-1">
      Case Summary
    </p>

    <div className="grid grid-cols-3 gap-x-4 gap-y-3">
      {grid.map((item, idx) => (
        <div
          key={idx}
          className="
            flex flex-col items-start
            gap-3.5 xl:gap-[19px]

            w-[86px] xl:w-[91px]
            min-h-[70px] xl:min-h-20

            bg-white/70
            border border-[#DDE6FF]
            rounded-[10px]
            p-2 xl:p-3

            shadow-[0_4px_11px_rgba(0,0,0,0.08)]
            backdrop-blur-[6px]
          "
        >
          <p className="text-[#808080] font-urbanist font-medium text-[11px] xl:text-[12px] leading-none">
            {item.label}
          </p>

          <p className="text-[#162766] font-urbanist font-semibold text-[13px] xl:text-[14px] leading-none">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const GlassCardCompactLG = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
}) => {
  return (
    <div
      className="
        group
        cursor-pointer
        flex flex-col justify-between
        w-[84px] h-[92px]
        p-2
        rounded-xl
        transition-all duration-300 ease-in-out
        hover:-translate-y-1
        bg-white/45 
        backdrop-blur-md 
        shadow-[0_4px_16px_0_rgba(31,38,135,0.1)]
        hover:bg-white/65
      "
    >
      <div
        className="
          bg-white rounded-lg flex items-center justify-center mb-1 shadow-sm
          w-[34px] h-[34px]
        "
      >
        {icon}
      </div>

      <h3
        className="
          font-urbanist text-[#0f1c4d] font-semibold leading-tight
          text-[11px]
        "
      >
        {title}
      </h3>
    </div>
  );
};

const DataGridCompactLG = ({ grid }: { grid: GridItem[] }) => (
  <div className="w-full">
    <div className="grid grid-cols-3 gap-x-[6px] gap-y-[6px]">
      {grid.map((item, idx) => (
        <div
          key={idx}
          className="
            flex flex-col justify-between
            w-[84px] h-[92px]
            rounded-xl
            bg-white/70
            border border-[#DDE6FF]
            p-2
            shadow-[0_4px_11px_rgba(0,0,0,0.08)]
            backdrop-blur-[6px]
          "
        >
          <p className="text-[#808080] font-urbanist font-medium text-[11px] leading-tight">
            {item.label}
          </p>

          <p className="text-[#162766] font-urbanist font-semibold text-[13px] leading-tight">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const scrollToNextSection = () => {
  const el = document.getElementById("next-section");
  if (!el) return;

  const yOffset = -80; // header height
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
};

/* ================= MOBILE ================= */
const MobileLanding = ({
  selectedIndex,
  setSelectedIndex,
  chartConfigs,
  lawsuitsList,
}: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const link = "/contact-us";
  const router = useRouter();

  const selectedChartConfig = chartConfigs[selectedIndex];
  const selectedLawsuit = lawsuitsList[selectedIndex];

  const totalStats = selectedChartConfig.bars.reduce(
    (sum, val) => sum + Number(val),
    0,
  );

  const formattedTotal = totalStats.toLocaleString();

  type Slide =
    | {
        id: number;
        type: "chart";
        title: string;
        subtitle: string;
        value: string;
      }
    | {
        id: number;
        type: "stats";
        title: string;
        subtitle?: string;
        items: { label: string; value: string }[];
      }
    | {
        id: number;
        type: "info";
        title: string;
        subtitle?: string;
        items: string[];
      };

  const slides: Slide[] = [
    {
      id: 1,
      type: "chart",
      title: "Case Closure Statistics",
      subtitle: "MDL Cases (2025)",
      value: formattedTotal,
    },
    {
      id: 2,
      type: "stats",
      title: "Case Summary",
      items: selectedLawsuit.dataGrid,
    },
    {
      id: 3,
      type: "info",
      title: "Why Choose Us",
      items: ["Serving Nationwide", "No Win, No Fee"],
    },
  ];

  const nextSlide = () =>
    setCurrentSlide((prev: number) =>
      prev === slides.length - 1 ? 0 : prev + 1,
    );
  const prevSlide = () =>
    setCurrentSlide((prev: number) =>
      prev === 0 ? slides.length - 1 : prev - 1,
    );

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);
  if (!selectedLawsuit || !selectedChartConfig) return null;

  return (
    <div className="block lg:hidden w-full bg-white font-sans">
      {/* ================= HERO ================= */}
      <section className="relative w-full overflow-hidden min-h-[520px] sm:min-h-[600px]">
        <div
          className="absolute top-0 inset-x-0 mx-[15px] lg:hidden  aspect-357/358 md:aspect-357/260"
          style={{
            WebkitMaskImage: "url(/HPL.png)",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            maskImage: "url(/HPL.png)",
            maskRepeat: "no-repeat",
            maskSize: "100% 100%",
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/herovideo.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-[#162766]/60" />
        </div>

        {/* Masked video background */}
        <div
          className="absolute inset-x-0 top-0 mx-[15px] aspect-[357/358] sm:aspect-[357/260]"
          style={{
            WebkitMaskImage: "url(/HPL.png)",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            maskImage: "url(/HPL.png)",
            maskRepeat: "no-repeat",
            maskSize: "100% 100%",
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/herovideo.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-[#162766]/60" />
        </div>

        <div className="md:hidden absolute inset-x-0 mx-[15px] bottom-10 min-[360px]:bottom-12 min-[375px]:bottom-[35px] md:bottom-[140px] left-0 h-[346px] md:h-[446px] z-0">
          <Image
            src="/HPR.png"
            alt="Hero bottom background"
            fill
            sizes="100vw"
            priority
          />
        </div>

        <div className="relative z-10 flex flex-col h-full px-6 py-8">
          <div className="mt-4 mb-6 mx-[30px]">
            <h1 className="font-noto-serif text-[#f2c94c] text-[26px] min-[375px]:text-[35px] sm:text-[40px] leading-tight">
              Justice
            </h1>
            <h2 className="font-noto-serif text-white text-[26px] min-[375px]:text-[35px] sm:text-[40px] leading-tight mb-4">
              Starts Here
            </h2>
            <p className="text-[#d0d5e2] font-urbanist text-[11px] min-[375px]:text-[14px] sm:text-[18px] font-light leading-relaxed mb-2">
              Free, confidential case reviews.
              <br />
              Serving all 50 states. No fees unless you win.
            </p>

            <button
              className=" w-40 h-[38px]      
    min-[360px]:w-[180px] min-[360px]:h-[42px] md:px-4 md:py-2 md:w-[220px] md:h-[50px]
    min-[375px]:w-[201px] min-[375px]:h-[45px] bg-[#f2c94c] hover:bg-[#e0b840] transition-colors text-[#1a2b5e] text-[11px] min-[375px]:text-[14px] sm:text-[16px] font-urbanist font-semibold rounded-full flex items-center justify-center gap-3 shadow-lg"
              onClick={() => router.push("/contact-us")}
            >
              Check if you Qualify
              <Image
                src="/qualifybtnmob.png"
                alt="qualify"
                width={25}
                height={25}
                className="shrink-0"
              />
            </button>
          </div>

          <div className="mt-10  min-[360px]:mt-20 min-[375px]:mt-8 min-[390px]:mt-12 min-[400px]:mt-18 min-[425px]:mt-[90px] md:mt-[230px] ">
            <div className="flex justify-end">
              <div className="flex justify-end relative">
                <div
                  onClick={() => setDropdownOpen((v) => !v)}
                  className="justify-between bg-[#FFFFFF] border border-white py-2 px-3 rounded-xl flex items-center gap-4 shadow-sm min-[375px]:mt-1 min-[425px]:mr-4 mb-4 md:hidden w-[150px] min-[360px]:w-[160px] min-[375px]:w-[197px] md:w-[415px] cursor-pointer"
                >
                  <span className="text-[#1a2b5e] font-urbanist text-[10px] min-[360px]:text-[10px] min-[375px]:text-[12px] md:text-[16px] font-semibold">
                    {selectedLawsuit.title}
                  </span>

                  <div className="bg-[#f2c94c] w-5 h-5 rounded flex items-center justify-center">
                    <ChevronDownIcon />
                  </div>
                </div>

                {dropdownOpen && (
                  <div className="absolute top-10 left-0 mt-1 bg-white rounded-xl shadow-lg border border-gray-200 z-20 min-[360px]:w-[180px] min-[375px]:w-[195px] min-[425px]:w-[200px] overflow-y-auto max-h-40">
                    {lawsuitsList.map((lawsuit, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center justify-between px-4 py-2 cursor-pointer text-[#162766] font-urbanist text-[12px]${
                          selectedIndex === idx
                            ? "font-bold text-[#162766] font-urbanist text-[12px]"
                            : ""
                        }`}
                        onClick={() => {
                          setSelectedIndex(idx);
                          setOpen(false);
                        }}
                      >
                        <span>{lawsuit.title}</span>
                        {selectedIndex === idx && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <rect
                              width="14"
                              height="14"
                              rx="4"
                              fill="#162766"
                            />
                            <path
                              d="M5 7L6.1847 8.1847C6.61501 8.61501 7.32668 8.56443 7.69181 8.07759L10 5"
                              stroke="#F2C438"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="w-full overflow-hidden mb-auto">
              <div
                className="flex transition-transform duration-500 ease-in-out  "
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className="min-w-full flex justify-center"
                  >
                    <div
                      className={`rounded-xl overflow-hidden w-[333px] md:w-[680px] lg:w-[333px] h-[182px] p-3 md:hidden sm:p-4 
                          ${index === 0 ? "bg-white" : ""} `}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-[#1a2b5e] font-urbanist font-semibold text-sm sm:text-base leading-tight">
                            {slide.title}
                          </h3>
                          {slide.subtitle && (
                            <span className="text-[#8890a5] font-[urbanist] text-[0.7rem] sm:text-xs">
                              {slide.subtitle}
                            </span>
                          )}
                        </div>
                        {slide.type === "chart" && (
                          <div className="font-serif text-[#1a2b5e] text-xl sm:text-2xl">
                            {formattedTotal}
                          </div>
                        )}
                      </div>

                      {slide.type === "chart" && (
                        <div className="relative flex gap-3 mt-2">
                          <ClearBarChart config={selectedChartConfig} />
                        </div>
                      )}

                      {slide.type === "stats" && (
                        <div className="grid grid-cols-3 gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-2xl md:hidden">
                          {selectedLawsuit.dataGrid.map((item:any) => (
                            <div
                              key={item.label}
                              className="bg-white/70 p-2.5 sm:p-3 rounded-xl border border-white/60 shadow-sm min-h-[129px] sm:min-h-[92px] flex flex-col justify-between"
                            >
                              <p className="text-[10px] sm:text-[10px] text-gray-500 mb-1 font-urbanist leading-tight">
                                {item.label}
                              </p>
                              <p className="text-[#1a2b5e] font-semibold text-[14px] sm:text-sm leading-tight font-urbanist">
                                {item.value}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {slide.type === "info" && (
                        <div className="flex flex-col gap-3 sm:gap-4 text-[#1a2b5e]">
                          <div className="flex justify-between gap-1.5 sm:gap-2 items-end">
                            <GlassCard
                              icon={
                                <Image
                                  src="/handshakeicon.svg"
                                  alt="Case Review"
                                  width={44}
                                  height={44}
                                />
                              }
                              title={
                                <>
                                  Free
                                  <br />
                                  Confidential
                                  <br />
                                  case reviews
                                </>
                              }
                            />
                            <GlassCard
                              icon={
                                <Image
                                  src="/scaleicon.svg"
                                  alt="Case Review"
                                  width={44}
                                  height={44}
                                />
                              }
                              title={
                                <>
                                  Serving all 50
                                  <br />
                                  states
                                </>
                              }
                            />
                            <GlassCard
                              icon={
                                <Image
                                  src="/gavelicon.svg"
                                  alt="Case Review"
                                  width={44}
                                  height={44}
                                />
                              }
                              title={
                                <>
                                  No fees unless
                                  <br />
                                  you win.
                                </>
                              }
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* =========================
   TABLET DASHBOARD (md only)
   ========================= */}

            <div className="flex justify-between md:justify-end items-center mt-4 md:hidden ">
              <div className="flex items-center gap-3 md:hidden">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 sm:w-11 sm:h-11 bg-[#f2c94c] hover:bg-[#e0b840] rounded-xl flex items-center justify-center transition-colors"
                  aria-label="Previous slide"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1a2b5e"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </button>
                <div className="flex gap-1.5">
                  {slides.map((_, idx) => (
                    <div
                      key={idx}
                      className={`rounded-full ${
                        currentSlide === idx
                          ? "w-8 h-2 bg-[#162766] opacity-100"
                          : "w-2 h-2 bg-[#DDE6FF] opacity-180"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 sm:w-11 sm:h-11 bg-[#f2c94c] hover:bg-[#e0b840] rounded-xl flex items-center justify-center transition-colors"
                  aria-label="Next slide"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1a2b5e"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
              <button
                className="min-[360px]:w-[120px] min-[375px]:w-[120px] w-[130px] h-[75px] text-white px-4 sm:px-5 py-3 ml-3 flex items-center gap-2"
                onClick={scrollToNextSection}
              >
                <Image
                  src="/scrolldownmob.png"
                  alt="scroll"
                  width={113}
                  height={55}
                  className="block"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ================= TABLET ================= */

const TabletLanding = ({
  selectedIndex,
  setSelectedIndex,
  dropdownOpen,
  setDropdownOpen,
  chartConfigs,
  lawsuitsList,
}: TabletLandingProps) => {
  const selectedChartConfig = chartConfigs[selectedIndex];
  const selectedLawsuit = lawsuitsList[selectedIndex];

  if (!selectedLawsuit || !selectedChartConfig) return null;

  return (
    <div className="hidden md:block lg:hidden w-full overflow-visible px-6 -mt-25 ">
      <div className="relative w-full h-[500px] rounded-4xl">
        {/* HPR BACKGROUND */}
        <Image
          src="/tabhero.png"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 z-10 flex flex-col gap-4 px-[25px] py-5">
          <div className="flex justify-end relative mr-2 z-40">
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-white shadow-2xl flex items-center justify-between gap-4 border border-white rounded-xl px-4 py-2 shadow-sm cursor-pointer w-[355px] h-[55px]"
            >
              <span className="text-[#162766] font-semibold text-[16px]">
                {selectedLawsuit.title}
              </span>

              <div className="bg-[#f2c94c] w-6 h-6 rounded flex items-center justify-center">
                <ChevronDownIcon />
              </div>
            </div>

            {/* DROPDOWN LIST */}
            {dropdownOpen && (
              <div className="absolute top-13 left-77 mt-1 bg-white rounded-xl shadow-lg border border-gray-200 z-20 w-[350px] overflow-y-auto max-h-40">
                {lawsuitsList.map((lawsuit, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between px-4 py-2 cursor-pointer text-[#162766] font-urbanist text-[12px]${
                      selectedIndex === idx
                        ? "font-bold text-[#162766] font-urbanist text-[12px]"
                        : ""
                    }`}
                    onClick={() => {
                      setSelectedIndex(idx);
                      setDropdownOpen(false);
                    }}
                  >
                    <span>{lawsuit.title}</span>
                    {selectedIndex === idx && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <rect width="14" height="14" rx="4" fill="#162766" />
                        <path
                          d="M5 7L6.1847 8.1847C6.61501 8.61501 7.32668 8.56443 7.69181 8.07759L10 5"
                          stroke="#F2C438"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ================= MAIN CONTENT ================= */}
          <div className="grid grid-cols-[2fr_1fr] gap-6 items-start">
            {/* LEFT — CHART */}
            <StatisticsCard chartConfig={selectedChartConfig} />

            {/* RIGHT — DATA CARDS */}
            <div className="flex flex-col gap-4  w-[277px]">
              {selectedLawsuit.dataGrid.map((item:any) => (
                <div
                  key={item.label}
                  className="bg-white rounded-xl p-4 shadow-md"
                >
                  <p className="text-[12px] text-[#808080] mb-1">
                    {item.label}
                  </p>
                  <p className="text-[#162766] font-bold text-[14px]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= BOTTOM CONTENT ================= */}
          <div className="flex justify-between items-end">
            {/* Glass Cards */}
            <div className="flex gap-4 mb-2">
              <GlassCard
                icon={
                  <Image
                    src="/handshakeicon.svg"
                    alt=""
                    width={44}
                    height={44}
                  />
                }
                title={
                  <>
                    Free case
                    <br />
                    Review
                  </>
                }
              />
              <GlassCard
                icon={
                  <Image src="/scaleicon.svg" alt="" width={44} height={44} />
                }
                title={
                  <>
                    Serving
                    <br />
                    Nationwide
                  </>
                }
              />
              <GlassCard
                icon={
                  <Image src="/gavelicon.svg" alt="" width={44} height={44} />
                }
                title={
                  <>
                    No Win,
                    <br />
                    No Fee
                  </>
                }
              />
            </div>

            {/* Scroll Button */}

            <div className="absolute bottom-16 right-0 z-50 scale-90 xl:scale-100 origin-bottom-right translate-y-5 sm:translate-y-7 xl:translate-y-8">
              <button
                className="w-[245px] h-[87px] text-white px-4 sm:px-5 py-3 flex items-center gap-2 hover:scale-[1.08]"
                onClick={scrollToNextSection}
              >
                <Image
                  src="/scrolldown.png"
                  alt="scroll"
                  width={195}
                  height={87}
                  className="block"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ================= DESKTOP WITH HEIGHT <850  ================= */

const DesktopLandingHeroCompact = ({
  selectedIndex,
  setSelectedIndex,
  chartConfigs,
  lawsuitsList,
}: {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  chartConfigs: ChartConfig[];
  lawsuitsList: any[];
}) => {
  const link = "/contact-us";
  const router = useRouter();

  const [open, setOpen] = useState(false);
  // const selectedChartConfig = CHART_CONFIGS[selectedIndex];

  const selectedChartConfig = chartConfigs[selectedIndex];
  const selectedLawsuit = lawsuitsList[selectedIndex];

  // const selectedLawsuit = lawsuits[selectedIndex];
  useEffect(() => {
    if (selectedIndex >= lawsuitsList.length) {
      setSelectedIndex(0);
    }
  }, [lawsuitsList]);

  const [heroSlide, setHeroSlide] = useState(0);

  type HeroSlide =
    | {
        id: number;
        type: "stats";
        title: string;
        items: { label: string; value: string }[];
      }
    | {
        id: number;
        type: "info";
        title: string;
        items: string[];
      };

  const heroSlides: HeroSlide[] = [
    {
      id: 1,
      type: "stats",
      title: "Case Summary",
      items: selectedLawsuit.dataGrid,
    },
    {
      id: 2,
      type: "info",
      title: "Why Choose Us",
      items: ["Serving Nationwide", "No Win, No Fee"],
    },
  ];

  const [heroMiniSlide, setHeroMiniSlide] = useState(0);

  const nextHeroMini = () => {
    setHeroMiniSlide((prev) => (prev === 1 ? 0 : 1));
  };

  const prevHeroMini = () => {
    setHeroMiniSlide((prev) => (prev === 0 ? 1 : 0));
  };

  const dragStartX = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (dragStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - dragStartX.current;

    if (Math.abs(delta) > 40) {
      delta < 0 ? nextHeroMini() : prevHeroMini();
    }
    dragStartX.current = null;
  };

  return (
    <div className="hidden lg:flex h-[490px] font-sans flex-col justify-center items-center mx-10">
      <div className="relative w-full h-[650px] mt-2 overflow-hidden max-w-[1560px]">
        {/* ================= VIDEO BACKGROUND ================= */}
        {/* < 1168 */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-contain block [@media(min-width:1168px)]:hidden"
        >
          <source src="/1920x860.mp4" type="video/mp4" />
        </video>

        {/* 1168 → 1279 (CUSTOM RANGE) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-contain hidden [@media(min-width:1168px)]:block [@media(min-width:1280px)]:hidden"
        >
          <source src="/1920x860.mp4" type="video/mp4" />
        </video>

        {/* >= 1280 */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-contain hidden [@media(min-width:1280px)]:block"
        >
          <source src="/1920x860.mp4" type="video/mp4" />
        </video>

        <div
          className="
    relative top-0 z-10
    min-[1280px]:left-[5.25rem]
    min-[1440px]:left-[9.5rem]
    2xl:left-[12.5rem]
    px-20 lg:px-20
    flex flex-col justify-start
    h-full pt-14
  "
        >
          <h1 className="lg:text-[55px] leading-none mb-4">
            <span className="font-[noto-serif] text-[#F2C438] block mb-2">
              Justice
            </span>
            <span className="font-[noto-serif] text-white block">
              Starts Here
            </span>
          </h1>
          <p className="font-urbanist text-blue-100 text-[16px] xl:text-[18px] mt-6 max-w-md font-light leading-relaxed">
            Free, confidential case reviews. Serving all 50 states. No fees
            unless you win.
          </p>
          <div className="mt-5">
            <button
              aria-label="Check if you qualify"
              className="font-urbanist group flex items-center bg-[#F5C844] text-[#162766] px-1 pl-6 py-1 rounded-full text-[15px] shadow-lg hover:bg-[#e0b533] transition-all w-[243px]"
              onClick={() => router.push("/contact-us")}
            >
              <span className="mr-6">Check if you Qualify</span>
              <span className="bg-[#162766] text-white rounded-full w-10 h-10 flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowUpRightIcon />
              </span>
            </button>
          </div>
        </div>

        {/* ================= RIGHT SIDE CONTENT CONTAINER ================= */}
        <div className="absolute inset-y-0 -right-1 top-5 z-10 w-[280px]">
          {/* Adjust the left positioning based on your parent container logic */}
          <div
            className="
            -ml-[140px] 
            [@media(min-width:1168px)]:-ml-[120px]
            [@media(min-width:1280px)]:-ml-[100px]
            transition-all duration-300
          "
          >
            {/* Dropdown Menu */}
            <div
              className="absolute top-5 right-4     
            [@media(min-width:1024px)_and_(max-width:1167px)]:right-[18px]
            [@media(min-width:1168px)_and_(max-width:1279px)]:right-[60px]
            [@media(min-width:1280px)_and_(max-width:1399px)]:right-[100px]
            [@media(min-width:1440px)_and_(max-width:1535px)]:right-[163px]
            [@media(min-width:1536px)_and_(max-width:1919px)]:right-[225px]
            [@media(min-width:1920px)_and_(max-width:2559px)]:right-[200px]
            [@media(min-width:2560px)]:right-[280px] w-[280px]"
            >
              <div
                className="flex items-center justify-between bg-white rounded-xl shadow-md p-2 pl-4 w-full h-[45px] cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <span className="text-[#162766] font-bold font-urbanist text-[14px] leading-[1.45]">
                  {selectedLawsuit.title}
                </span>

                {open ? (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="rotate-180 text-[#F2C438] bg-[#142A66] rounded transition-all duration-200"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                ) : (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white bg-[#F2C438] rounded transition-all duration-200"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                )}
              </div>

              {open && (
                <div className="absolute top-[52px] left-0 bg-white rounded-xl shadow-lg border border-gray-200 z-20 w-full overflow-y-auto max-h-40">
                  {lawsuitsList.map((lawsuit, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between px-4 py-2 cursor-pointer text-[#162766] font-urbanist text-[12px] ${
                        selectedIndex === idx ? "font-bold" : ""
                      }`}
                      onClick={() => {
                        setSelectedIndex(idx);
                        setOpen(false);
                      }}
                    >
                      <span>{lawsuit.title}</span>
                      {selectedIndex === idx && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <rect width="14" height="14" rx="4" fill="#162766" />
                          <path
                            d="M5 7L6.1847 8.1847C6.61501 8.61501 7.32668 8.56443 7.69181 8.07759L10 5"
                            stroke="#F2C438"
                            strokeLinecap="round"
                          />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Statistics Card */}
            <div
              className="absolute top-18 right-4    
           [@media(min-width:1024px)_and_(max-width:1167px)]:right-[18px]
            [@media(min-width:1168px)_and_(max-width:1279px)]:right-[60px]
            [@media(min-width:1280px)_and_(max-width:1399px)]:right-[100px]
            [@media(min-width:1440px)_and_(max-width:1535px)]:right-[163px]
            [@media(min-width:1536px)_and_(max-width:1919px)]:right-[225px]
            [@media(min-width:1920px)_and_(max-width:2559px)]:right-[200px]
            [@media(min-width:2560px)]:right-[280px] w-[280px]"
            >
              <StatisticsCard chartConfig={selectedChartConfig} />
            </div>

            {/* ================= MINI INFO SLIDER ================= */}
            <div
              className="
  absolute
  w-[280px]
  group
  transition-all duration-300

  /* 1024–1167 */
  lg:top-75 lg:right-44

  /* 1168–1279 (Small laptop) */
  [@media(min-width:1168px)_and_(max-width:1279px)]:top-80
  [@media(min-width:1168px)_and_(max-width:1279px)]:right-55

  /* 1280–1399 (1280 design) */
  [@media(min-width:1280px)_and_(max-width:1399px)]:top-80
  [@media(min-width:1280px)_and_(max-width:1399px)]:right-68

  /* 1400–1535 (1440 design) */
  [@media(min-width:1400px)_and_(max-width:1535px)]:top-80
  [@media(min-width:1400px)_and_(max-width:1535px)]:right-90

  /* 1536–1919 (2XL small) */
  [@media(min-width:1536px)_and_(max-width:1919px)]:top-80
  [@media(min-width:1536px)_and_(max-width:1919px)]:right-105

  /* 1920+ (Large desktop) */
  [@media(min-width:1920px)]:top-80
  [@media(min-width:1920px)]:right-115
"
            >
              {/* ===== Header Row ===== */}
              <div className="flex items-center justify-between mb-0 px-1">
                <p className="text-[#162766] font-urbanist text-[14px] xl:text-[15px] ml-5 font-semibold transition-all duration-300">
                  {heroMiniSlide === 0 ? "Case Summary" : "Why Choose Us"}
                </p>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={prevHeroMini}
                    className="
                      w-6 h-6 bg-white shadow-md rounded-full
                      flex items-center justify-center
                      opacity-100 scale-90
                      hover:scale-100
                      transition-all
                    "
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#162766"
                      strokeWidth="3"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>

                  <button
                    onClick={nextHeroMini}
                    className="
                      w-6 h-6 bg-white shadow-md rounded-full
                      flex items-center justify-center
                      opacity-100 scale-90
                      hover:scale-100
                      transition-all
                    "
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#162766"
                      strokeWidth="3"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>
              {/* ===== Viewport ===== */}
              <div
                className="relative overflow-hidden rounded-xl w-full h-[155px]"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
              >
                <div
                  className="flex h-full transition-transform duration-500 ease-out will-change-transform"
                  style={{ transform: `translateX(-${heroMiniSlide * 100}%)` }}
                >
                  {/* ===== Slide 1: Data Grid ===== */}
                  <div className="min-w-full h-full flex items-start pt-1">
                    <DataGridCompactLG grid={selectedLawsuit.dataGrid} />
                  </div>

                  {/* ===== Slide 2: Glass Cards ===== */}
                  <div className="min-w-full h-full flex items-start pt-1">
                    <div className="w-full flex justify-between gap-[6px]">
                      <div className="transition-all duration-500 delay-[0ms]">
                        <GlassCardCompactLG
                          icon={
                            <Image
                              src="/handshakeicon.svg"
                              alt=""
                              width={40}
                              height={40}
                            />
                          }
                          title={
                            <>
                              Free case
                              <br />
                              Review
                            </>
                          }
                        />
                      </div>
                      <div className="transition-all duration-500 delay-[120ms]">
                        <GlassCardCompactLG
                          icon={
                            <Image
                              src="/scaleicon.svg"
                              alt=""
                              width={40}
                              height={40}
                            />
                          }
                          title={
                            <>
                              Serving
                              <br />
                              Nationwide
                            </>
                          }
                        />
                      </div>
                      <div className="transition-all duration-500 delay-[240ms]">
                        <GlassCardCompactLG
                          icon={
                            <Image
                              src="/gavelicon.svg"
                              alt=""
                              width={40}
                              height={40}
                            />
                          }
                          title={
                            <>
                              No Win
                              <br />
                              No Fee
                            </>
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Scroll Down Button */}
            <div
              className="
  absolute
  z-50
  scale-90
  xl:scale-100
  origin-bottom-right
  transition-all duration-300

  /* 1024–1167 */
  lg:right-[5px] lg:bottom-[30px]

  /* 1168–1279 */
  [@media(min-width:1168px)_and_(max-width:1279px)]:right-[40px]
  [@media(min-width:1168px)_and_(max-width:1279px)]:bottom-[0px]

  /* 1280–1399 */
  [@media(min-width:1280px)_and_(max-width:1399px)]:right-[40px]
  [@media(min-width:1280px)_and_(max-width:1399px)]:bottom-[4px]

  /* 1400–1535 */
  [@media(min-width:1400px)_and_(max-width:1535px)]:right-[130px]
  [@media(min-width:1400px)_and_(max-width:1535px)]:bottom-[2px]

  /* 1536–1919 */
  [@media(min-width:1536px)_and_(max-width:1919px)]:right-[178px]
  [@media(min-width:1536px)_and_(max-width:1919px)]:bottom-[0px]

  /* 1920+ */
  [@media(min-width:1920px)]:right-[240px]
  [@media(min-width:1920px)]:bottom-[0px]
"
            >
              <button
                className="lg:w-[190px] h-[87px] text-white px-4 py-3 flex items-center gap-2 hover:scale-[1.08] transition-transform duration-200"
                onClick={scrollToNextSection}
                aria-label="Scroll to next section"
              >
                <Image
                  src="/scrolldown.png"
                  alt="scroll down"
                  width={195}
                  height={87}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ================= DESKTOP WITH HEIGHT >850 ================= */

const DesktopLandingHeroExpanded: React.FC<Props> = ({
  selectedIndex,
  setSelectedIndex,
  chartConfigs,
  lawsuitsList,
}: {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  chartConfigs: ChartConfig[];
  lawsuitsList: any[];
}) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  // const selectedChartConfig = CHART_CONFIGS[selectedIndex];

  const selectedChartConfig = chartConfigs[selectedIndex];
  const selectedLawsuit = lawsuitsList[selectedIndex];

  // const selectedLawsuit = lawsuits[selectedIndex];
  useEffect(() => {
    if (selectedIndex >= lawsuitsList.length) {
      setSelectedIndex(0);
    }
  }, [lawsuitsList]);

  return (
    <div className="hidden lg:flex justify-center font-sans px-4 xl:px-8 2xl:px-10 mt-10">
      <div
        className="
          relative overflow-hidden rounded-2xl
          w-full
          
          /* LG specific sizing */
          lg:w-[calc(100%-2rem)] lg:max-w-[1200px]
          xl:w-full xl:max-w-[1440px]
          [@media(min-width:1600px)]:max-w-[1560px]
          
          /* Heights */
          h-[480px]           /* LG - compact height */
          xl:h-[620px]        /* XL - expanded height */
          2xl:h-[720px]       /* 2XL - even taller */
        "
      >
        {/* ================= VIDEO BACKGROUND ================= */}
        {/* LG only (1024-1279) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="
            absolute inset-0 w-full h-full object-contain
            block lg:block xl:hidden
          "
        >
          <source src="/1280x503.mp4" type="video/mp4" />
        </video>

        {/* XL+ (1280px+) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="
            absolute inset-0 w-full h-full object-cover
            hidden xl:block
          "
        >
          <source src="/1920x860.mp4" type="video/mp4" />
        </video>

        {/* ================= CONTENT GRID ================= */}
        <div
          className="
            relative z-10 grid h-full
            
            /* LG: More space for content */
            lg:grid-cols-[1.1fr_0.9fr]
            xl:grid-cols-[1.25fr_0.75fr]
            
            /* Gap adjustments */
            lg:gap-6
            xl:gap-8
            2xl:gap-10
            
            /* Padding */
            lg:px-10 lg:py-10
            xl:px-12 xl:py-12
            2xl:px-16 2xl:py-14
          "
        >
          {/* ================= LEFT COLUMN ================= */}
          <div className="flex flex-col justify-start mt-10 max-w-[720px]">
            <h1 className="leading-none">
              <span
                className="
                block font-[noto-serif] text-[#F2C438]
                /* LG adjustments for better fit */
                lg:text-[48px] lg:mb-[-5px]
                xl:text-[60px] xl:mb-0
                2xl:text-[68px]
                [@media(min-width:1600px)]:text-[76px]
              "
              >
                Justice
              </span>
              <span
                className="
                block font-[noto-serif] text-white
                /* LG adjustments for better fit */
                lg:text-[48px]
                xl:text-[60px]
                2xl:text-[72px]
                [@media(min-width:1600px)]:text-[80px]
              "
              >
                Starts Here
              </span>
            </h1>

            <p
              className="
              text-blue-100 font-light leading-relaxed mt-4
              /* LG text adjustments */
              lg:text-[14px] lg:mt-3 lg:max-w-[360px]
              xl:text-[16px] xl:mt-6 xl:max-w-md
              2xl:text-[17px]
            "
            >
              Free, confidential case reviews. Serving all 50 states. No fees
              unless you win.
            </p>

            <div className="mt-6 xl:mt-8">
              <button
                aria-label="Check if you qualify"
                onClick={() => router.push("/contact-us")}
                className="
                  group flex items-center justify-center
                  /* LG button - slightly smaller but proportional */
                  lg:h-[46px] lg:px-3 lg:pl-[20px] lg:gap-2.5 lg:w-[240px]
                  /* XL button - original size */
                  xl:h-[55px] xl:px-4 xl:pl-[26px] xl:gap-3.5 xl:w-[280px]
                  
                  rounded-4xl
                  bg-[#F2C438]
                  text-[#162766]
                  font-urbanist font-medium
                  lg:text-[14px]
                  xl:text-[16px]
                  shadow-lg hover:brightness-95 transition-all
                "
              >
                <span className="whitespace-nowrap">Check if you Qualify</span>

                <span
                  className="
                    flex items-center justify-center
                    rounded-full
                    bg-[#162766] text-white
                    shadow
                    group-hover:rotate-45 transition-transform
                    shrink-0
                    /* LG icon */
                    lg:w-[32px] lg:h-[32px]
                    /* XL icon */
                    xl:w-[38px] xl:h-[38px]
                  "
                >
                  <ArrowUpRightIcon />
                </span>
              </button>
            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="relative h-full flex items-center justify-end">
            <div
              className="
              relative h-full flex flex-col justify-center
              /* LG width for better fit */
              lg:w-[260px]
              xl:w-[320px]
              2xl:w-[360px]
              [@media(min-width:1600px)]:w-[380px]
              
              /* Positioning */
              lg:right-[-5px]
              xl:right-[-10px]
              2xl:right-[-20px]
            "
            >
              {/* ===== DROPDOWN ===== */}
              <div className="relative z-30">
                <div
                  className="
                    flex items-center justify-between
                    bg-[#F4F6F7]
                    border border-[#DDE6FF]
                    rounded-[10px]
                    shadow-[0_4px_11px_0_rgba(0,0,0,0.10)]
                    cursor-pointer
                    
                    /* LG dropdown */
                    lg:px-3 lg:h-[38px] lg:mb-3
                    /* XL dropdown */
                    xl:px-4 xl:h-[46px] xl:mb-4
                    
                    w-full
                  "
                  onClick={() => setOpen(!open)}
                >
                  <span
                    className="
                    text-[#162766] font-bold truncate
                    lg:text-[13px]
                    xl:text-[14px]
                  "
                  >
                    {selectedLawsuit.title}
                  </span>

                  <div
                    className="
                      flex items-center justify-center
                      rounded
                      bg-[#F2C438]
                      lg:w-[20px] lg:h-[20px]
                      xl:w-[22px] xl:h-[22px]
                    "
                  >
                    {open ? (
                      <ChevronUp
                        className="
                          text-[#162766] font-black
                          lg:text-[9px]
                          xl:text-[10px]
                          2xl:text-[11px]
                        "
                        strokeWidth={3}
                      />
                    ) : (
                      <ChevronDown
                        className="
                          text-[#162766] font-black
                          lg:text-[9px]
                          xl:text-[10px]
                          2xl:text-[11px]
                        "
                        strokeWidth={3}
                      />
                    )}
                  </div>
                </div>

                {open && (
                  <div
                    className="
                    absolute
                    lg:top-[42px]
                    xl:top-[52px]
                    
                    left-0 bg-white rounded-xl shadow-lg border border-gray-200
                    w-full overflow-hidden z-40 overflow-y-auto max-h-40
                  "
                  >
                    {lawsuitsList.map((lawsuit, idx) => (
                      <div
                        key={idx}
                        className={` flex items-center justify-between
                          px-3 xl:px-4 py-2 cursor-pointer
                          text-[#162766]
                          lg:text-[12px]
                          xl:text-[13px]
                          ${selectedIndex === idx ? "font-bold" : ""}
                        `}
                        onClick={() => {
                          setSelectedIndex(idx);
                          setOpen(false);
                        }}
                      >
                        <span>{lawsuit.title}</span>
                        {selectedIndex === idx && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <rect
                              width="14"
                              height="14"
                              rx="4"
                              fill="#162766"
                            />
                            <path
                              d="M5 7L6.1847 8.1847C6.61501 8.61501 7.32668 8.56443 7.69181 8.07759L10 5"
                              stroke="#F2C438"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* ===== CONTENT ===== */}
              <div
                className="
                flex-1 flex flex-col
                lg:gap-3
                xl:gap-4
                /* Ensure content fills available space */
                lg:h-[calc(100%-50px)]
                xl:h-[calc(100%-60px)]
              "
              >
                <StatisticsCard chartConfig={selectedChartConfig} />
                <DataGridCompactExtend grid={selectedLawsuit.dataGrid} />
              </div>
            </div>
          </div>
        </div>

        {/* ================= FLOATING CARDS ================= */}
        <div
          className="
            absolute flex z-20
            
            /* Vertical positioning */
            lg:bottom-7
            xl:bottom-8
            2xl:bottom-10
            
            /* Horizontal positioning */
            lg:right-[calc(260px+1rem)]  /* Right column width + gap */
            xl:right-[calc(320px+2rem)]
            2xl:right-[calc(360px+2.5rem)]
            
            /* Gap */
            lg:gap-2
            xl:gap-3
            2xl:gap-4
          "
        >
          <GlassCardExtend
            icon={
              <Image
                src="/handshakeicon.svg"
                alt=""
                width={40}
                height={40}
                className="lg:w-8 lg:h-8 xl:w-10 xl:h-10"
              />
            }
            title={
              <>
                Free case
                <br />
                Review
              </>
            }
          />
          <GlassCardExtend
            icon={
              <Image
                src="/scaleicon.svg"
                alt=""
                width={40}
                height={40}
                className="lg:w-8 lg:h-8 xl:w-10 xl:h-10"
              />
            }
            title={
              <>
                Serving
                <br />
                Nationwide
              </>
            }
          />
          <GlassCardExtend
            icon={
              <Image
                src="/gavelicon.svg"
                alt=""
                width={40}
                height={40}
                className="lg:w-8 lg:h-8 xl:w-10 xl:h-10"
              />
            }
            title={
              <>
                No Win,
                <br />
                No Fee
              </>
            }
          />
        </div>

        {/* ================= SCROLL BUTTON ================= */}
        <div
          className="
          absolute bottom-6 right-6 z-30
          
          /* Scale adjustments */
          lg:scale-[0.75]
          xl:scale-90
          2xl:scale-100
          
          origin-bottom-right
          transition-all duration-300
        "
        >
          <button
            className="
              lg:w-[130px] lg:h-[58px]
              xl:w-[160px] xl:h-[71px]
              2xl:w-[180px] 2xl:h-20
              
              hover:scale-[1.05] transition-transform
            "
            onClick={scrollToNextSection}
          >
            <Image
              src="/scrolldown.png"
              alt="scroll"
              width={180}
              height={80}
              className="w-full h-full"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

/* ================= LANDING PAGE  ================= */
const LandingPage = () => {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const [isTallScreen, setIsTallScreen] = useState<boolean>(false);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [chartConfigs, setChartConfigs] = useState<ChartConfig[]>([]);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);

  
  const CHART_CONFIGS: ChartConfig = {
  title: "Talcum Powder Pending MDL Cases",
  xAxisLabel: "Month (2025)",
  yAxisLabel: "# of Pending Cases",
  xLabels: ["Apr", "Jul", "Sept"],
  yTicks: [10000, 30000, 60000, 90000],
  maxY: 90000,
  bars: [58208, 63693, 66910],
  stats: {
    averageSettlement: "$100K – $1M",
    settlementTime: "18–30 months",
    courtTime: "4–5 weeks",
  },
};

  const configsToUse = chartConfigs.length > 0 ? chartConfigs : CHART_CONFIGS;

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

  useEffect(() => {
    async function loadCharts() {
      try {
        const res = await fetch(
          "https://crm-internal-backend-ayb9fqawg8b6bjen.canadacentral-01.azurewebsites.net/api/stats/published",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        if (!res.ok) {
          throw new Error("API Error: " + res.status);
        }

        const data = await res.json();
        // console.log("Published charts:", data);

        setChartConfigs(data.map(mapChartFromDB));
      } catch (err) {
        console.error("Fetch failed:", err);
      } finally {
        setLoading(false);
      }
    }

    loadCharts();
  }, []);

  useEffect(() => {
    if (selectedIndex >= chartConfigs.length && chartConfigs.length > 0) {
      setSelectedIndex(0);
    }
  }, [chartConfigs.length,selectedIndex]);

  /* PREVENT HYDRATION / FLASH */
  if (isDesktop === null) {
    return null;
  }

  if (loading) return null;

  const lawsuitsList = chartConfigs.map((c) => ({
    title: c.title,
    stats: c.bars[c.bars.length - 1],
    statsImage: "/default.svg",
    dataGrid: [
      { label: "Average Settlement", value: c.stats.averageSettlement },
      { label: "Time to Receive Settlement", value: c.stats.settlementTime },
      { label: "Time in Court", value: c.stats.courtTime },
    ],
  }));


  return (
    <>
      {/* MOBILE */}
      {!isDesktop && (
        <MobileLanding
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          chartConfigs={chartConfigs}
          lawsuitsList={lawsuitsList}
        />
      )}

      {/* TABLET */}
      <div className="hidden md:block lg:hidden">
        <TabletLanding
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}
          chartConfigs={chartConfigs}
          lawsuitsList={lawsuitsList}
        />
      </div>

      {/* DESKTOP HERO SWITCH */}
      {isDesktop &&
        (isTallScreen ? (
          <DesktopLandingHeroExpanded
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            chartConfigs={chartConfigs}
            lawsuitsList={lawsuitsList}
          />
        ) : (
          <DesktopLandingHeroCompact
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            chartConfigs={chartConfigs}
            lawsuitsList={lawsuitsList}
          />
        ))}
    </>
  );
};

export default LandingPage;
