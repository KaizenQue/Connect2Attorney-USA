// /* ================= TYPES ================= */
// type ChartConfig = {
//   title: string;
//   xAxisLabel: string;
//   yAxisLabel: string;
//   xLabels: string[];
//   yTicks: number[];
//   maxY: number;
//   bars: number[];
//   stats: {
//     averageSettlement: string;
//     settlementTime: string;
//     courtTime: string;
//   };
// };


// type Lawsuit = (typeof lawsuits)[number];
// // type DataGridItem = Lawsuit["dataGrid"][number];

// type TabletLandingProps = {
//   selectedLawsuit: Lawsuit;
//   selectedChartConfig: ChartConfig;
//   selectedIndex: number;
//   setSelectedIndex: (v: number) => void;
//   dropdownOpen: boolean;
//   setDropdownOpen: (v: boolean) => void;
//   setOpen: (v: boolean) => void;
//   open: boolean;
// };

// type Props = {
//   selectedIndex: number;
//   setSelectedIndex: (index: number) => void;
// };

// /* ================= IMPORTS ================= */
// import React from "react";
// import {
//   BarChart,
//   Bar,
//   Cell,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   ResponsiveContainer,
// } from "recharts";

// import {
//   ArrowUpRightIcon,
//   BAR_COLORS,
//   // lawsuits,
//   // TALC_CONFIG,
//   // ROUNDUP_CONFIG,
//   // MESO_CONFIG,
//   // DEPO_CONFIG,
//   // CHART_CONFIGS,
//   ChevronDownIcon,
// } from "./lawsuitData";

// import {
//   BlueShapeSVG,
//   LightShapeSVG,
//   LightShapeSVGExpanded,
// } from "./svg";
// import {mapChartFromDB} from "../homecomponents/lawsuitData";
// import { useEffect,useState } from "react";

// /* ================= COMPONENTS ================= */


// const GlassCard = ({
//   icon,
//   title,
// }: {
//   icon: React.ReactNode;
//   title: React.ReactNode;
// }) => {
//   return (
//     <div className="group cursor-pointer flex flex-col justify-between w-[105px] h-[129px] md:w-[111px] md:h-[111px] lg:w-[84px] lg:h-[92px] xl:w-[84px] xl:h-[92px] p-2 lg:p-2 xl:p-1.5 rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-1 bg-white/45 backdrop-blur-md shadow-[0_4px_16px_0_rgba(31,38,135,0.1)] hover:bg-white/65">
//       <div className="bg-white rounded-lg flex items-center justify-center mb-2 shadow-sm w-[44px] h-[44px] lg:w-[40px] lg:h-[40px] xl:w-[34px] xl:h-[34px]">
//         {icon}
//       </div>

//       <h3 className="font-urbanist text-[#0f1c4d] font-semibold leading-tight text-[12px] lg:text-[12px] xl:text-[11px]">
//         {title}
//       </h3>
//     </div>
//   );
// };

// const ClearBarChart = ({ config }: { config: ChartConfig }) => {
//   const data = config.xLabels.map((label, i) => ({
//     label,
//     value: config.bars[i],
//   }));

//   const minTick = Math.min(...config.yTicks);
//   const maxTick = Math.max(...config.yTicks);

//   return (
//     <div className="w-full h-[130px]">
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart
//           data={data}
//           barCategoryGap={22}
//           margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
//         >
//           <CartesianGrid stroke="#E6ECFF" vertical={false} />

//           <XAxis
//             dataKey="label"
//             tick={{ fontSize: 9, fill: "#162766" }}
//             tickLine={false}
//             axisLine={false}
//           />

//           <YAxis
//             domain={[minTick, maxTick]}
//             ticks={config.yTicks}
//             interval={0}
//             tickFormatter={(v) => `${v / 1000}K`}
//             tick={{ fontSize: 9, fill: "#162766" }}
//             tickLine={false}
//             axisLine={false}
//             width={40}
//             tickMargin={4}
//           />

//           <Bar dataKey="value" radius={[8, 8, 0, 0]}>
//             {data.map((_, index) => (
//               <Cell key={index} fill={BAR_COLORS[index % BAR_COLORS.length]} />
//             ))}
//           </Bar>
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// const StatisticsCard = ({
//   stats,
//   chartConfig,
// }: {
//   stats: string;
//   chartConfig: ChartConfig;
// }) => {
//   return (
//     <div className="w-full h-[216px] flex flex-col p-[15px] border border-[#DDE6FF] rounded-[12px] bg-[rgba(255,255,255,0.30)] shadow-[0_7.564px_11.346px_-2.269px_rgba(0,0,0,0.10)] backdrop-blur-[9px]">
//       <div className="flex justify-between items-start mb-2">
//         <div>
//           <h3 className="text-[#162766] font-bold text-[15px]">
//             Case Closure Statistics
//           </h3>
//           <p className="text-[#808080] text-[10px] mt-1">MDL Cases (2025)</p>
//         </div>

//         <span className="text-[#162766] text-[25px] font-light">{stats}</span>
//       </div>

//       <div className="flex-1">
//         <ClearBarChart config={chartConfig} />
//       </div>
//     </div>
//   );
// };

// const DataGrid = ({ grid }: { grid: { label: string; value: string }[] }) => (
//   <div className="w-full max-w-[440px] mt-2">
//     <p className="text-[#162766] text-[15px] font-semibold mt-5 mb-2 pl-2">
//       Case Summary
//     </p>
//     <div className="grid grid-cols-3 gap-2 p-2 rounded-xl">
//       {grid.map((item, idx) => (
//         <div
//           key={idx}
//           className="bg-white/70 p-2 rounded-lg min-h-[70px] flex flex-col justify-between w-[108px]"
//         >
//           <p className="text-[9px] text-[#808080] mb-1">{item.label}</p>
//           <p className="text-[#162766] font-bold text-[12px]">{item.value}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// const DataGridCompact = ({
//   grid,
// }: {
//   grid: { label: string; value: string }[];
// }) => (
//   <div className="w-full mt-3">
//     <p className="text-[#162766] text-[14px] font-semibold mb-2 pl-1">
//       Case Summary
//     </p>

//     <div className="grid grid-cols-3 gap-x-4 gap-y-3">
//       {grid.map((item, idx) => (
//         <div
//           key={idx}
//           className="flex flex-col gap-3 w-[86px] min-h-[70px] bg-white/70 border border-[#DDE6FF] rounded-[10px] p-2 shadow"
//         >
//           <p className="text-[#808080] text-[11px]">{item.label}</p>
//           <p className="text-[#162766] font-semibold text-[13px]">
//             {item.value}
//           </p>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// /* ================= UTIL ================= */

// export const scrollToNextSection = () => {
//   const el = document.getElementById("next-section");
//   if (!el) return;

//   const yOffset = -80;
//   const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

//   window.scrollTo({ top: y, behavior: "smooth" });
// };
