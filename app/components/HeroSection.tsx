/* eslint-disable react/display-name */
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const ArrowUpRightIcon = React.memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
));

const ChevronDownIcon = React.memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#162766"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
));

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
        flex flex-col justify-between h-[129px] w-[105px]
        lg:w-[88px] md:w-[111px] md:h-[111px] lg:h-[100px] xl:w-[90px] p-2 xl:p-2.5 rounded-xl
        transition-all duration-300 ease-in-out
        hover:-translate-y-1
        bg-white/45 
        backdrop-blur-md 
        shadow-[0_4px_16px_0_rgba(31,38,135,0.1)]
        hover:bg-white/65
      "
    >
      <div className="w-[44px] h-[44px] md:w-[44px] md:h-[44px] xl:w-[38px] xl:h-[38px] bg-white rounded-lg flex items-center justify-center mb-2 shadow-sm">
        {icon}
      </div>
      <h3 className="font-urbanist text-[#0f1c4d] text-[12px] md:text-[12px] lg:text-[13px] font-semibold leading-tight">
        {title}
      </h3>
    </div>
  );
};

const BAR_COLORS = ["#E5E7EB", "#8B93B3", "#162766"];

const lawsuits = [
  {
    title: "Talcum Powder Lawsuit",
    stats: "1,88,511",
    statsImage: "/talcCard/svg",
    dataGrid: [
      { label: "Average Settlement", value: "$100K – $1M" },
      { label: "Time to Receive Settlement", value: "18–30 Months" },
      { label: "Time in Court (if not settled)", value: "4–5 Weeks" },
    ],
  },
  {
    title: "Roundup Lawsuit",
    stats: "11,860",
    statsImage: "/roundupcard/svg",
    dataGrid: [
      { label: "Average Settlement", value: "$80K – $250K" },
      { label: "Time to Receive Settlement", value: "12–24 Months" },
      { label: "Time in Court (if not settled)", value: "4–6 Weeks" },
    ],
  },
  {
    title: "Mesothelioma Lawsuit",
    stats: "85,000",
    statsImage: "/mesocard.svg",
    dataGrid: [
      { label: "Average Settlement", value: "$1M – $2.4M" },
      { label: "Time to Receive Settlement", value: "18–24 Months" },
      { label: "Time in Court (if not settled)", value: "3–4 Weeks" },
    ],
  },
  {
    title: "Depo-Provera Lawsuit",
    stats: "8,600",
    statsImage: "/depocard.svg",
    dataGrid: [
      { label: "Average Settlement", value: "$300K – $700K" },
      { label: "Time to Receive Settlement", value: "12–18 Months" },
      { label: "Time in Court (if not settled)", value: "2–3 Weeks" },
    ],
  },
];

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

export const TALC_CONFIG: ChartConfig = {
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

export const ROUNDUP_CONFIG: ChartConfig = {
  title: "Roundup Pending Federal MDL Cases",
  xAxisLabel: "Year",
  yAxisLabel: "# of Pending Cases",

  xLabels: ["2020", "2023", "2025"],
  yTicks: [1000, 3000, 6000, 9000],
  maxY: 9000,

  bars: [3460, 4000, 4400],

  stats: {
    averageSettlement: "$80K – $250K",
    settlementTime: "12–24 months",
    courtTime: "4–6 weeks",
  },
};

export const MESO_CONFIG: ChartConfig = {
  title: "Pending Mesothelioma / Asbestos Cases",
  xAxisLabel: "Month (Sample)",
  yAxisLabel: "# of Pending Cases",

  // user requested Apr / Jul / Sept
  xLabels: ["1991", "2018", "2025"],

  // reasonable ticks for Mesothelioma
  yTicks: [10000, 30000, 60000, 90000],
  maxY: 90000,

  // 3 bars (match xLabels)
  bars: [52000, 78000, 13000],

  stats: {
    averageSettlement: "$1M – $2.4M",
    settlementTime: "18–24 months",
    courtTime: "3–4 weeks",
  },
};

export const DEPO_CONFIG: ChartConfig = {
  title: "Depo-Provera Lawsuits Filed Over Time",
  xAxisLabel: "Year",
  yAxisLabel: "# of Cases Filed",

  // user requested 1991, 2018, 2022
  xLabels: ["2023", "2024", "2025"],
  yTicks: [1000, 2000, 3000, 4000],
  maxY: 4000,

  // 3 bars (match xLabels)
  bars: [2100, 3000, 3500],

  stats: {
    averageSettlement: "$300K – $700K",
    settlementTime: "12–18 months",
    courtTime: "2–3 weeks",
  },
};

const CHART_CONFIG_MAP: Record<number, ChartConfig> = {
  0: TALC_CONFIG,
  1: ROUNDUP_CONFIG,
  2: MESO_CONFIG,
  3: DEPO_CONFIG,
};

const ClearBarChart = ({ config }: { config: ChartConfig }) => {
  const data = config.xLabels.map((label, i) => ({
    label,
    value: config.bars[i],
  }));

  const minTick = Math.min(...config.yTicks);
  const maxTick = Math.max(...config.yTicks);

  return (
    <div className="w-full h-[130px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          barCategoryGap={22}
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
            domain={[minTick, maxTick]}
            ticks={config.yTicks}
            interval={0}
            tickFormatter={(v) => `${v / 1000}K`}
            tick={{ fontSize: 9, fill: "#162766" }}
            tickLine={false}
            axisLine={false}
            width={40}
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

const StatisticsCard = ({
  stats,
  chartConfig,
}: {
  stats: string;
  chartConfig: ChartConfig;
}) => {
  return (
    <div className="bg-white border-[#DDE6FF] rounded-[1.5rem] p-[15px] shadow-xl w-full  h-[216px] flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-start mb-3 h-[50px]">
        <div className="flex-1 min-w-0 pr-3">
          <h3 className="text-[#162766] font-bold font-urbanist text-[15px]">
            Case Closure Statistics
          </h3>
          <p className="text-[#808080] text-[10px] font-urbanist mt-1">
            MDL Cases (2025)
          </p>
          <div className="relative mt-2 h-[6px] w-[280px]">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[3px] w-[48px] bg-[#F5C844] rounded-l-full z-10" />

            <svg
              className="absolute left-[48px] top-0 h-[6px] w-[270px]"
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

          <div />
        </div>

        <span className="font-urbanist font-normal text-[#162766] text-[25px] font-light">
          {stats}
        </span>
      </div>

      {/* Chart */}
      <ClearBarChart config={chartConfig} />
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
  <div className="w-full h-[80px] mt-2">
    <p className="text-[#162766] font-urbanist text-[15px] font-semibold mt-5 mb-2 pl-2">
      Case Summary
    </p>
    <div className="absolute grid grid-cols-3 gap-20 p-2 rounded-xl mr-20">
      {grid.map((item, idx) => (
        <div
          key={idx}
          className="bg-white/70 p-2 xl:p-3 rounded-lg shadow-sm min-h-[80px] xl:min-h-[100px] flex flex-col justify-between shadow-xl w-[80px]"
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
const BlueShapeSVG = React.memo(() => (
  <svg width="0" height="0" aria-hidden>
    <defs>
      <clipPath id="blue-shape-clip-hero" clipPathUnits="objectBoundingBox">
        <path
          transform="scale(0.00114155 0.00155521)"
          d="M0 30C0 13.4314 13.4315 0 30 0H846C862.569 0 876 13.4315 876 30V246.743C876 252.713 873.333 258.372 868.727 262.171L627.503 461.171C622.897 464.971 620.23 470.629 620.23 476.599V613C620.23 629.569 606.799 643 590.23 643H151.809C142.474 643 133.671 638.655 127.994 631.244L20.6175 491.084C7.24625 473.63 0 452.256 0 430.269V267.171V30Z"
        />
      </clipPath>
    </defs>
  </svg>
));

const LightShapeSVG = React.memo(
  ({ children }: { children?: React.ReactNode }) => (
    <svg
      viewBox="0 0 665 643"
      className="w-full h-full object-cover"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <path
          id="light-shape-path-hero"
          d="M482.667 523C478.63 523 474.989 525.427 473.436 529.154L433.693 624.538C429.034 635.718 418.111 643 406 643H30.0002C13.4317 643 0.000244141 629.569 0.000244141 613V509.978C0.000244141 501.019 4.00494 492.528 10.9188 486.829L240.212 297.829C249.431 290.23 254.77 278.909 254.77 266.963V30C254.77 13.4315 268.202 0 284.77 0H558H635C651.569 0 665 13.4315 665 30V493C665 509.569 651.569 523 635 523H482.667Z"
        />
        <clipPath id="light-shape-clip-hero">
          <use href="#light-shape-path-hero" />
        </clipPath>
      </defs>
      <use href="#light-shape-path-hero" fill="#F0F2F4" />
      <image
        href="/Homeherowhite.png"
        width="665"
        height="643"
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#light-shape-clip-hero)"
      />

      {/* Removed 'xmlns' to fix TypeScript error in React */}
      <foreignObject
        x="0"
        y="0"
        width="665"
        height="643"
        clipPath="url(#light-shape-clip-hero)"
        style={{ overflow: "visible" }}
      >
        <div className="w-full h-full relative pointer-events-auto ">
          {children}
        </div>
      </foreignObject>
    </svg>
  )
);

const LightShapeSVGExpanded = React.memo(
  ({ children }: { children?: React.ReactNode }) => (
    <svg
      viewBox="0 0 665 643"
      className="w-full h-full object-cover"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <path
          id="light-shape-path-hero"
          d="M482.667 523C478.63 523 474.989 525.427 473.436 529.154L433.693 624.538C429.034 635.718 418.111 643 406 643H30.0002C13.4317 643 0.000244141 629.569 0.000244141 613V509.978C0.000244141 501.019 4.00494 492.528 10.9188 486.829L240.212 297.829C249.431 290.23 254.77 278.909 254.77 266.963V30C254.77 13.4315 268.202 0 284.77 0H558H635C651.569 0 665 13.4315 665 30V493C665 509.569 651.569 523 635 523H482.667Z"
        />
        <clipPath id="light-shape-clip-hero">
          <use href="#light-shape-path-hero" />
        </clipPath>
      </defs>
      <use href="#light-shape-path-hero" fill="#F0F2F4" />
      <image
        href="/Homeherowhite.png"
        width="665"
        height="643"
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#light-shape-clip-hero)"
      />

      <foreignObject
        x="0"
        y="0"
        width="665"
        height="643"
        clipPath="url(#light-shape-clip-hero)"
        style={{ overflow: "visible" }}
      >
        <div className="w-full h-full relative pointer-events-auto flex flex-col justify-center items-end">
          <div className="w-full pr-4 flex flex-col gap-1 items-end mt-2">
            {children}
          </div>
        </div>
      </foreignObject>
    </svg>
  )
);
// const MobileBlueShapeSVG = React.memo(() => (
//   <svg
//     viewBox="0 0 876 643"
//     className="w-full h-full"
//     preserveAspectRatio="xMidYMid slice"
//     aria-hidden
//     focusable="false"
//   >
//     <defs>
//       <path
//         id="mobile-shape-path"
//         d="M0 30C0 13.4314 13.4315 0 30 0H846C862.569 0 876 13.4315 876 30V246.743C876 252.713 873.333 258.372 868.727 262.171L627.503 461.171C622.897 464.971 620.23 470.629 620.23 476.599V613C620.23 629.569 606.799 643 590.23 643H151.809C142.474 643 133.671 638.655 127.994 631.244L20.6175 491.084C7.24625 473.63 0 452.256 0 430.269V267.171V30Z"
//       />
//       <clipPath id="blue-shape-clip-hero-mobile">
//         <use href="#mobile-shape-path" />
//       </clipPath>
//     </defs>

//     {/* Visible filled shape to act as container background */}
//     <use href="#mobile-shape-path" fill="#162766" />
//   </svg>
// ));

const scrollToNextSection = () => {
  const el = document.getElementById("next-section");
  if (!el) return;

  const yOffset = -80; // header height
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
};

const MobileLanding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const link = "/contact-us";
  const router = useRouter();

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
      value: "1,88,511",
    },
    {
      id: 2,
      type: "stats",
      title: "Case Summary",
      items: [
        { label: "Average Settlement", value: "$100K – $1M" },
        { label: "Time to Settlement", value: "18–30 Months" },
        { label: "Time in Court", value: "4–5 Weeks" },
      ],
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
      prev === slides.length - 1 ? 0 : prev + 1
    );
  const prevSlide = () =>
    setCurrentSlide((prev: number) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const selectedLawsuit = lawsuits[selectedIndex];
  const selectedChartConfig = CHART_CONFIG_MAP[selectedIndex];

  return (
    <div className="block lg:hidden  w-full bg-white flex flex-col items-stretch justify-center p-0 font-sans">
      <div className="relative w-full bg-white flex flex-col mt-2">
        <div
          className="absolute top-0 inset-x-0 mx-[15px] lg:hidden  aspect-[357/358] md:aspect-[357/260]"
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

        <div
          className="absolute top-0 inset-x-0 mx-[15px] lg:hidden hidden md:block  aspect-[357/358] md:aspect-[357/260]"
          style={{
            WebkitMaskImage: "url(/tabtophero.png)",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            maskImage: "url(/tabtophero.png)",
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

        <div className="md:hidden absolute inset-x-0 mx-[15px] bottom-[40px] min-[360px]:bottom-[208px] min-[375px]:bottom-[35px] md:bottom-[140px] left-0 h-[346px] md:h-[446px] z-0">
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
              className=" w-[160px] h-[38px]      
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

          <div className="mt-[27px] min-[375px]:mt-[28px] min-[425px]:mt-[90px]  min-[360px]:mt-[80px] md:mt-[230px] ">
            <div className="flex justify-end">
              <div className="flex justify-end relative">
                <div
                  onClick={() => setDropdownOpen((v) => !v)}
                  className="justify-between bg-[#FFFFFF] border border-white py-2 px-3 rounded-xl flex items-center gap-4 shadow-sm min-[375px]:mt-1 min-[425px]:mr-4 mb-4 md:hidden w-[150px] min-[360px]:w-[160px] min-[375px]:w-[197px] md:w-[415px] cursor-pointer"
                >
                  <span className="text-[#1a2b5e] font-urbanist text-[8px] min-[360px]:text-[10px] min-[375px]:text-[12px] md:text-[16px] font-semibold">
                    {selectedLawsuit.title}
                  </span>

                  <div className="bg-[#f2c94c] w-5 h-5 rounded flex items-center justify-center">
                    <ChevronDownIcon />
                  </div>
                </div>

                {dropdownOpen && (
                  <div className="absolute top-10 left-0 mt-1 bg-white rounded-xl shadow-lg border border-gray-200 z-20 min-[360px]:w-[180px] min-[375px]:w-[195px] min-[425px]:w-[200px]">
                    {lawsuits.map((lawsuit, idx) => (
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
                            {selectedLawsuit.stats}
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
                          {selectedLawsuit.dataGrid.map((item) => (
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
      </div>
    </div>
  );
};
type Lawsuit = (typeof lawsuits)[number];
type DataGridItem = Lawsuit["dataGrid"][number];
type TabletLandingProps = {
  selectedLawsuit: Lawsuit;
  selectedChartConfig: ChartConfig;
  selectedIndex: number;
  setSelectedIndex: (v: number) => void;
  dropdownOpen: boolean;
  setDropdownOpen: (v: boolean) => void;
  setOpen: (v: boolean) => void;
  open: boolean;
};

const TabletLanding = ({
  selectedLawsuit,
  selectedChartConfig,
  selectedIndex,
  setSelectedIndex,
  dropdownOpen,
  setDropdownOpen,
  setOpen,
}: TabletLandingProps) => {
  return (
    <div className="hidden md:block lg:hidden w-full overflow-visible px-6 -mt-15">
      <div className="relative w-full h-[500px] rounded-[32px]">
        {/* HPR BACKGROUND */}
        <Image
          src="/tabhero.png"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 z-10 flex flex-col gap-4 px-[25px] py-[20px]">
          <div className="flex justify-end relative mr-2 z-40">
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-white shadow-2xl flex items-center justify-between gap-4 bg-[#eff2f6] border border-white rounded-xl px-4 py-2 shadow-sm cursor-pointer w-[355px] h-[55px]"
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
              <div className="absolute top-13 left-77 mt-1 bg-white rounded-xl shadow-lg border border-gray-200 z-20 w-[350px]">
                {lawsuits.map((lawsuit, idx) => (
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
            <StatisticsCard
              stats={selectedLawsuit.stats}
              chartConfig={selectedChartConfig}
            />

            {/* RIGHT — DATA CARDS */}
            <div className="flex flex-col gap-4  w-[277px]">
              {selectedLawsuit.dataGrid.map((item: DataGridItem) => (
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

const DesktopLandingHeroCompact = ({
  selectedIndex,
  setSelectedIndex,
}: {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}) => {
  const link = "/contact-us";

  const router = useRouter();

  const [open, setOpen] = useState(false);
  const selectedChartConfig = CHART_CONFIG_MAP[selectedIndex];

  const selectedLawsuit = lawsuits[selectedIndex];
  return (
    <div className="hidden lg:flex h-[650px] font-sans flex-col mx-10 ">
      <div className="relative w-full  h-[650px] mt-4 overflow-hidden max-w-[1560px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-contain "
        >
          <source src="/video1.mp4" type="video/mp4" />
        </video>

        {/* left side content */}

        <div className="relative top-0 z-10 xl:left-[160px] px-12 xl:px-20 flex flex-col justify-start h-full pt-14 ">
          <h1 className="lg:text-[55px] leading-none mb-4">
            <span className="font-[noto-serif] text-[#F2C438] block mb-2">
              Justice
            </span>
            <span className="font-[noto-serif] text-white block">
              Starts Here
            </span>
          </h1>
          <p className="text-blue-100 text-[16px] xl:text-[18px] mt-6 max-w-md font-light leading-relaxed">
            Free, confidential case reviews. Serving all 50 states. No fees
            unless you win.
          </p>
          <div className="mt-5">
            <button
              aria-label="Check if you qualify"
              className="group flex items-center bg-[#F5C844] text-[#162766] px-1 pl-6 py-1 rounded-full font-bold text-[15px] shadow-lg hover:bg-[#e0b533] transition-all w-[243px]"
              onClick={() => router.push("/contact-us")}
            >
              <span className="mr-6">Check if you Qualify</span>
              <span className="bg-[#162766] text-white rounded-full w-10 h-10 flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowUpRightIcon />
              </span>
            </button>
          </div>
        </div>
        {/* right side content */}
        <div className="absolute inset-y-0 -right-[4px] top-[20px] z-10 -ml-[140px]">
          <div className="absolute top-[24px] right-[16px] xl:right-[208px] w-[280px]">
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
              <div className="absolute top-[52px] left-0 bg-white rounded-xl shadow-lg border border-gray-200 z-20 w-full">
                {lawsuits.map((lawsuit, idx) => (
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

          {/* 🔹 MIDDLE ZONE — STATS + GRID */}
          <div className="absolute top-[96px] right-[16px] xl:right-[208px] w-[280px]">
            <StatisticsCard
              stats={selectedLawsuit.stats}
              chartConfig={selectedChartConfig}
            />

            <DataGridCompact grid={selectedLawsuit.dataGrid} />
          </div>

          {/* 🔹 BOTTOM ZONE — GLASS CARDS */}
          <div className="absolute bottom-[28px] right-[180px] xl:right-[375px] flex gap-2">
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
                  Free case
                  <br />
                  Review
                </>
              }
            />
            <GlassCard
              icon={
                <Image
                  src="/scaleicon.svg"
                  alt="Serving Nationwide"
                  width={44}
                  height={44}
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
            <GlassCard
              icon={
                <Image
                  src="/gavelicon.svg"
                  alt="No Win No Fee"
                  width={44}
                  height={44}
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

          {/* Scroll Button (unchanged) */}
          <div className="absolute bottom-8 right-0 z-50 scale-90 xl:scale-100 origin-bottom-right">
            <button
              className="lg:w-[190px] h-[87px] text-white px-4 py-3 flex items-center gap-2 hover:scale-[1.08]"
              onClick={scrollToNextSection}
            >
              <Image
                src="/scrolldown.png"
                alt="scroll"
                width={195}
                height={87}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const DesktopLandingHeroExpanded = ({
  selectedIndex,
  setSelectedIndex,
}: {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}) => {
  const link = "/contact-us";

  const router = useRouter();

  const [open, setOpen] = useState(false);
  const selectedChartConfig = CHART_CONFIG_MAP[selectedIndex];

  const selectedLawsuit = lawsuits[selectedIndex];
  return (
    <div className="hidden lg:flex jbg-white overflow-hidden font-sans flex-col my-10">
      <div className="relative max-w-[1560px] h-[70vh] min-h-[720px]">
        <div className="relative">
          {/* LEFT / VIDEO */}
          <div className="relative w-full h-[700px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover object-center"
            >
              <source src="/1920x860.mp4" type="video/mp4" />
            </video>
          </div>
          {/* <div className="relative top-0 z-10 px-12 xl:px-20 flex flex-col justify-start h-full pt-14 ">
              <h1 className="lg:text-[80px] leading-none mb-4">
                <span className="font-[noto-serif] text-[#F2C438] block mb-2">
                  Justice
                </span>
                <span className="font-[noto-serif] text-white block">
                  Starts Here
                </span>
              </h1>
              <p className="text-blue-100 text-lg xl:text-xl mt-6 max-w-md font-light leading-relaxed">
                Free, confidential case reviews. Serving all 50 states. No fees
                unless you win.
              </p>
              <div className="mt-12">
                <button
                  aria-label="Check if you qualify"
                  className="group flex items-center bg-[#F5C844] text-[#162766] px-1 pl-6 py-1 rounded-full font-bold text-lg shadow-lg hover:bg-[#e0b533] transition-all w-fit"
                  onClick={() => router.push("/contact-us")}
                >
                  <span className="mr-6">Check if you Qualify</span>
                  <span className="bg-[#162766] text-white rounded-full w-10 h-10 flex items-center justify-center group-hover:rotate-45 transition-transform">
                    <ArrowUpRightIcon />
                  </span>
                </button>
              </div>
            </div> */}

          <div className="absolute inset-y-0 right-[40px] w-[48%] z-10 -ml-[140px]">
            {/* 1. Dropdown & Stats Card */}
            <div className="w-full max-w-[370px] flex flex-col items-end relative pl-0 -translate-y-8">
              {/* <div
                  className="flex items-center justify-between bg-white rounded-xl shadow-md p-2 pl-4 w-full mb-3 xl:mb-4 cursor-pointer"
                  onClick={() => setOpen(!open)}
                >
                  <span className="text-[#162766] font-bold font-urbanist text-xs xl:text-sm">
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
                      className={`transition-all duration-200 ${
                        "rotate-180 text-[#F2C438] bg-[#142A66] rounded" // OPEN state
                      }`}
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
                      className={`transition-all duration-200 ${
                        "text-[#ffffff] bg-[#F2C438] rounded" // CLOSED state
                      }`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}
                </div> */}

              {/* Dropdown List */}
              {/* {open && (
                  <div className="absolute top-10 left-0 mt-1 bg-white rounded-xl shadow-lg border border-gray-200 z-20 w-[360px]">
                    {lawsuits.map((lawsuit, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center justify-between px-4 py-2 cursor-pointer text-[#162766] font-urbanist text-[12px]${
                          selectedIndex === idx
                            ? " font-bold text-[#162766] font-urbanist text-[12px]"
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
                )} */}

              {/* Statistics and Data Grid */}
              {/* <div className="mt-4 w-full">
                  <StatisticsCard
                    stats={selectedLawsuit.stats}
                    chartConfig={selectedChartConfig}
                  />

                  <DataGrid grid={selectedLawsuit.dataGrid} />
                </div> */}
            </div>

            {/* <div className="flex flex-row gap-2 w-full max-w-[500px] justify-start ml-0 transform -translate-x-8 lg:-translate-x-24 xl:-translate-x-22">
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
                      Free case
                      <br />
                      Review
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
                      Serving
                      <br />
                      Nationwide
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
                      No Win,
                      <br />
                      No Fee
                    </>
                  }
                />
              </div> */}

            {/* 4. Scroll Button - MOVED OUTSIDE + SCALED UP */}
            {/* 
                       - scale-90 / scale-100: Makes it bigger.
                       - bottom-6 right-6: Positions it in the corner gap created by the margin above.
                    */}
            {/* <div className="absolute bottom-16 right-0 z-50 scale-90 xl:scale-100 origin-bottom-right translate-y-5 sm:translate-y-7 xl:translate-y-8">
              <button
                className="lg:w-[240px] h-[87px] text-white px-4 sm:px-5 py-3 flex items-center gap-2 hover:scale-[1.08]"
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
// --- Landing Page ---

const LandingPage = () => {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const [isTallScreen, setIsTallScreen] = useState<boolean | null>(null);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const selectedLawsuit = lawsuits[selectedIndex];
  const selectedChartConfig = CHART_CONFIG_MAP[selectedIndex];
  const [open, setOpen] = useState(false);

  /* DESKTOP WIDTH CHECK */
  useEffect(() => {
    const updateDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    updateDesktop();
    window.addEventListener("resize", updateDesktop);
    return () => window.removeEventListener("resize", updateDesktop);
  }, []);

  useEffect(() => {
    if (isDesktop !== true) return;

    const updateHeight = () => {
      setIsTallScreen(window.innerHeight >= 850);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [isDesktop]);

  /* PREVENT HYDRATION / FLASH */
  if (isDesktop === null || (isDesktop && isTallScreen === null)) {
    return null;
  }

  return (
    <>
      {/* MOBILE */}
      {!isDesktop && <MobileLanding />}

      {/* TABLET */}
      <div className="hidden md:block lg:hidden">
        <TabletLanding
          selectedLawsuit={selectedLawsuit}
          selectedChartConfig={selectedChartConfig}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}
          open={open}
          setOpen={setOpen}
        />
      </div>

      {/* DESKTOP HERO SWITCH */}
      {isDesktop &&
        (isTallScreen ? (
          <DesktopLandingHeroExpanded
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        ) : (
          <DesktopLandingHeroCompact
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        ))}
    </>
  );
};

export default LandingPage;
