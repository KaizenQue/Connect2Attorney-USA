// src/config/lawsuitData.tsx
import React from "react";

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
// ================= ICON =================
export const ArrowUpRightIcon = React.memo(() => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="w-[18px] h-[18px]"
  >
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
));
export const ChevronDownIcon = React.memo(() => (
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
ArrowUpRightIcon.displayName = "ArrowUpRightIcon";

// ================= COLORS =================
export const BAR_COLORS = ["#E5E7EB", "#8B93B3", "#162766"];

// ================= LAWSUITS =================
// export const lawsuits = [
//   {
//     title: "Talcum Powder Lawsuit",
//     stats: "1,88,511",
//     statsImage: "/talcCard/svg",
//     dataGrid: [
//       { label: "Average Settlement", value: "$100K – $1M" },
//       { label: "Time to Receive Settlement", value: "18–30 Months" },
//       { label: "Time in Court (if not settled)", value: "4–5 Weeks" },
//     ],
//   },
//   {
//     title: "Roundup Lawsuit",
//     stats: "11,860",
//     statsImage: "/roundupcard/svg",
//     dataGrid: [
//       { label: "Average Settlement", value: "$80K – $250K" },
//       { label: "Time to Receive Settlement", value: "12–24 Months" },
//       { label: "Time in Court (if not settled)", value: "4–6 Weeks" },
//     ],
//   },
//   {
//     title: "Mesothelioma Lawsuit",
//     stats: "85,000",
//     statsImage: "/mesocard.svg",
//     dataGrid: [
//       { label: "Average Settlement", value: "$1M – $2.4M" },
//       { label: "Time to Receive Settlement", value: "18–24 Months" },
//       { label: "Time in Court (if not settled)", value: "3–4 Weeks" },
//     ],
//   },
//   {
//     title: "Depo-Provera Lawsuit",
//     stats: "8,600",
//     statsImage: "/depocard.svg",
//     dataGrid: [
//       { label: "Average Settlement", value: "$300K – $700K" },
//       { label: "Time to Receive Settlement", value: "12–18 Months" },
//       { label: "Time in Court (if not settled)", value: "2–3 Weeks" },
//     ],
//   },
// ];

// ================= CHART CONFIGS =================
// export const TALC_CONFIG: ChartConfig = {
//   title: "Talcum Powder Pending MDL Cases",
//   xAxisLabel: "Month (2025)",
//   yAxisLabel: "# of Pending Cases",
//   xLabels: ["Apr", "Jul", "Sept"],
//   yTicks: [10000, 30000, 60000, 90000],
//   maxY: 90000,
//   bars: [58208, 63693, 66910],
//   stats: {
//     averageSettlement: "$100K – $1M",
//     settlementTime: "18–30 months",
//     courtTime: "4–5 weeks",
//   },
// };

// export const ROUNDUP_CONFIG: ChartConfig = {
//   title: "Roundup Pending Federal MDL Cases",
//   xAxisLabel: "Year",
//   yAxisLabel: "# of Pending Cases",
//   xLabels: ["2020", "2023", "2025"],
//   yTicks: [1000, 3000, 6000, 9000],
//   maxY: 9000,
//   bars: [3460, 4000, 4400],
//   stats: {
//     averageSettlement: "$80K – $250K",
//     settlementTime: "12–24 months",
//     courtTime: "4–6 weeks",
//   },
// };

// export const MESO_CONFIG: ChartConfig = {
//   title: "Pending Mesothelioma / Asbestos Cases",
//   xAxisLabel: "Month (Sample)",
//   yAxisLabel: "# of Pending Cases",
//   xLabels: ["1991", "2018", "2025"],
//   yTicks: [10000, 30000, 60000, 90000],
//   maxY: 90000,
//   bars: [52000, 78000, 13000],
//   stats: {
//     averageSettlement: "$1M – $2.4M",
//     settlementTime: "18–24 months",
//     courtTime: "3–4 weeks",
//   },
// };

// export const DEPO_CONFIG: ChartConfig = {
//   title: "Depo-Provera Lawsuits Filed Over Time",
//   xAxisLabel: "Year",
//   yAxisLabel: "# of Cases Filed",
//   xLabels: ["2023", "2024", "2025"],
//   yTicks: [1000, 2000, 3000, 4000],
//   maxY: 4000,
//   bars: [2100, 3000, 3500],
//   stats: {
//     averageSettlement: "$300K – $700K",
//     settlementTime: "12–18 months",
//     courtTime: "2–3 weeks",
//   },
// };

// export const CHART_CONFIGS: ChartConfig[] = [
//   TALC_CONFIG,
// ];

function buildTicks(maxY: number) {
   if (!maxY || maxY <= 0) return [0, 1, 2, 3];

  let step;

  //  Small charts (under 10k)
  if (maxY <= 10000) {
    step = Math.ceil(maxY / 4 / 500) * 500; // step in 500s
  }

  //  Medium charts (10k–100k)
  else if (maxY <= 100000) {
    step = Math.ceil(maxY / 4 / 5000) * 5000;
  }

  //  Large charts (100k+)
  else {
    step = Math.ceil(maxY / 4 / 10000) * 10000;
  }
  return [step, step * 2, step * 3, step * 4];
}


export function mapChartFromDB(row: any) {
  const cleanedLabels = row.x_labels.filter(
    (x: string) => x.trim() !== ""
  );

  const cleanedBars = row.bar_values.slice(0, cleanedLabels.length);

  return {
    title: row.lawsuit_type,

    xLabels: cleanedLabels,
    bars: cleanedBars,

    maxY: row.max_y,
    yTicks: buildTicks(row.max_y),

    xAxisLabel: "Month",
    yAxisLabel: "Pending Cases",

    stats: {
      averageSettlement: row.avg_settlement,
      settlementTime: row.settlement_time,
      courtTime: row.court_time,
    },
  };
}

