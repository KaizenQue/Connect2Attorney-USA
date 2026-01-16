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
type Props = {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
};

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
  lawsuits,
  TALC_CONFIG,
  ROUNDUP_CONFIG,
  MESO_CONFIG,
  DEPO_CONFIG,
  CHART_CONFIGS,
  ChevronDownIcon,
} from "./lawsuitData";
import {
  BlueShapeSVG,
  LightShapeSVG,
  LightShapeSVGExpanded,

} from "./svg"

export const scrollToNextSection = () => {
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

          w-[44px] h-[44px]
          lg:w-[40px] lg:h-[40px]
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
export const scrollToNextSection = () => {
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

export const scrollToNextSection = () => {
 const StatisticsCard = ({
  stats,
  chartConfig,
}: {
  stats: string;
  chartConfig: ChartConfig;
}) => {
  return (
    <div
      className="
        w-full h-[216px] flex flex-col p-[15px]

        border border-[0.756px] border-[#DDE6FF]
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
          {stats}
        </span>
      </div>

      {/* ===== FULL WIDTH DIVIDER ===== */}
      <div className="relative mt-1 mb-3 h-[6px] w-full">
        {/* Yellow fixed segment */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[3px] w-[48px] bg-[#F5C844] rounded-l-full z-10" />

        {/* Blue flexible segment */}
        <div className="absolute left-[48px] right-0 top-[-5px] h-[6px]">
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

export const scrollToNextSection = () => {
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

export const scrollToNextSection = () => {
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
            gap-[14px] xl:gap-[19px]

            w-[86px] xl:w-[91px]
            min-h-[70px] xl:min-h-[80px]

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

export const scrollToNextSection = () => {
  const el = document.getElementById("next-section");
  if (!el) return;

  const yOffset = -80; // header height
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
};