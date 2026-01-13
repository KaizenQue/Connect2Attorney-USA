"use client";
import React, { useState, useEffect } from "react";
import { X, ChevronDown } from "lucide-react";

const YEARS = ["2025", "2024", "2023"] as const;
type YearType = (typeof YEARS)[number];

interface TimelineItem {
  date: string;
  text: string;
}
interface TimelineYearData {
  firstHalf: TimelineItem[];
  secondHalf: TimelineItem[];
}

const TimeLineCard = () => {
  const [activeYear, setActiveYear] = useState<YearType>("2025");
  const [isFirstHalfOpen, setIsFirstHalfOpen] = useState(true);
  const [isSecondHalfOpen, setIsSecondHalfOpen] = useState(false);

  useEffect(() => {
    setIsFirstHalfOpen(true);
    setIsSecondHalfOpen(false);
  }, [activeYear]);

  const timelineData: Record<YearType, TimelineYearData> = {
    "2025": {
      firstHalf: [
        {
          date: "June 21",
          text: "A lawsuit filed in New Jersey Superior Court alleges that Wegovy caused a man to develop NAION (non-arteritic anterior ischemic optic neuropathy), resulting in permanent vision loss.",
        },
        {
          date: "June 17",
          text: "Twenty-one plaintiffs in New Jersey seek to consolidate NAION-related vision loss cases into multicounty litigation, citing the severe and irreversible nature of the injuries.",
        },
        {
          date: "June 12",
          text: "The GLP-1 MDL (MDL No. 3094) in the Eastern District of Pennsylvania now includes 1,882 active gastrointestinal injury cases, though NAION-related vision claims are not part of the MDL.",
        },
        {
          date: "June 10",
          text: "Doctors and advocacy groups urge the FDA to issue a black box warning on semaglutide drugs due to mounting evidence of vision loss risks such as NAION.",
        },
        {
          date: "May 19",
          text: "Patients begin filing lawsuits alleging Ozempic caused NAION and that Novo Nordisk failed to warn of vision risks despite accumulating scientific evidence.",
        },
        {
          date: "May 2",
          text: "More than 500 new cases were added to the GLP-1 MDL in April alone, bringing the total to 1,685 and reflecting growing awareness of stomach paralysis claims.",
        },
        {
          date: "April 24",
          text: "A woman from North Carolina files suit against Novo Nordisk after suffering permanent vision loss from NAION allegedly caused by Ozempic.",
        },
        {
          date: "April 22",
          text: "Oral arguments are held on motions to dismiss, with plaintiffs asserting their GI injury claims are well-supported and defendants arguing they are overly vague.",
        },
        {
          date: "April 21",
          text: "A CDC-backed study reports nearly 25,000 semaglutide-related emergency room visits during 2022–2023, many involving hospitalization for GI or hypoglycemic events.",
        },
        {
          date: "April 1",
          text: "The GLP-1 MDL adds 164 new cases in March as parties prepare for a Rule 702 hearing that may determine which expert testimony is admissible.",
        },
        {
          date: "March 26",
          text: "A new direct-filed Illinois case alleges Ozempic caused gastroparesis requiring hospitalization and claims Novo Nordisk failed to warn users of the risk.",
        },
        {
          date: "March 17",
          text: "Eli Lilly requests that only gastroparesis claims supported by objective diagnostic testing be permitted, challenging broader clinical evaluations.",
        },
        {
          date: "February 26",
          text: "A JAMA Ophthalmology study suggests semaglutide users may face an increased risk of NAION, raising concerns doctors should weigh before prescribing.",
        },
        {
          date: "February 25",
          text: "Eli Lilly announces price reductions for Zepbound amid slower-than-expected sales, with costs lowered to between $349 and $499 depending on dosage.",
        },
        {
          date: "February 6",
          text: "January filings surge to 110 new cases, a sharp rise from December 2024, bringing the GLP-1 MDL to 1,443 active cases.",
        },
        {
          date: "February 1",
          text: "A Michigan woman files suit against Novo Nordisk alleging severe gastrointestinal injuries from Ozempic, including vomiting, ileus, and dehydration requiring hospitalization.",
        },
        {
          date: "January 22",
          text: "A 2025 study finds Ozempic may increase risks of pancreatitis, kidney stones, arthritis, and fainting, complicating its perceived benefits.",
        },
        {
          date: "January 9",
          text: "The court schedules a Rule 702 hearing for May 14, 2025, to evaluate the admissibility of causation expert testimony across all GLP-1 lawsuits.",
        },
      ],
      secondHalf: [
        {
          date: "December 12",
          text: "The court issues pretrial scheduling orders outlining discovery deadlines and bellwether selection criteria for the GLP-1 MDL.",
        },
        {
          date: "October 18",
          text: "Plaintiffs submit expert reports linking semaglutide to delayed gastric emptying and long-term gastrointestinal injury.",
        },
        {
          date: "August 6",
          text: "Defense motions seek summary judgment on failure-to-warn claims, arguing federal labeling compliance.",
        },
      ],
    },

    "2024": {
      firstHalf: [
        {
          date: "June 14",
          text: "The Judicial Panel on Multidistrict Litigation centralizes federal GLP-1 gastrointestinal injury cases in the Eastern District of Pennsylvania.",
        },
        {
          date: "April 30",
          text: "Early lawsuits allege Ozempic and Wegovy caused severe gastroparesis, nausea, and vomiting requiring hospitalization.",
        },
        {
          date: "February 12",
          text: "Medical literature begins highlighting delayed gastric emptying associated with GLP-1 receptor agonists.",
        },
      ],
      secondHalf: [
        {
          date: "November 19",
          text: "The MDL surpasses 900 active cases as consumer awareness grows through national media coverage.",
        },
        {
          date: "September 7",
          text: "Initial case management conferences set discovery protocols and preservation obligations for defendants.",
        },
        {
          date: "July 22",
          text: "Plaintiffs move for coordinated discovery on internal safety data and adverse event reporting.",
        },
      ],
    },

    "2023": {
      firstHalf: [
        {
          date: "May 8",
          text: "Physicians report increased patient complaints of persistent nausea and abdominal pain linked to GLP-1 medications.",
        },
        {
          date: "March 3",
          text: "FDA adverse event data reflects rising reports of gastrointestinal complications tied to semaglutide use.",
        },
      ],
      secondHalf: [
        {
          date: "December 1",
          text: "The first product liability lawsuits are filed alleging manufacturers failed to adequately warn of severe GI risks.",
        },
        {
          date: "October 11",
          text: "Consumer advocacy groups call for stronger post-market surveillance of GLP-1 weight loss drugs.",
        },
      ],
    },
  };  const data = timelineData[activeYear];

  return (
    <section className="w-full bg-[#0E1B4D] text-white overflow-hidden">
      {/* HEADER */}
      <div className="relative bg-[#162766] border-b border-white/10 p-6 sm:p-10">
        <h2 className="font-noto-serif text-[24px] sm:text-[28px] font-medium mb-5">
          Ozempic Lawsuit Timeline
        </h2>

        <div className="inline-flex items-center gap-2 sm:gap-[10px] h-[50px] px-2 py-2 rounded-[90px] bg-white/10 shadow">
          {YEARS.map((year) => (
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

      {/* FIRST HALF */}
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
              <ChevronDown
                size={18}
                stroke="#162766"
                strokeWidth={3}
                fill="#F2C438"
                className="transition-transform duration-300 rotate-0"
              />
            </div>
          )}
        </div>

        <div
          className={`
            grid transition-all duration-500 ease-in-out
            ${isFirstHalfOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
          `}
        >
          <div className="overflow-hidden px-4 sm:px-6 py-6 bg-[#162766]">
            <div
              className={`
                transition-all duration-500 ease-out
                ${isFirstHalfOpen ? "translate-y-0" : "-translate-y-2"}
              `}
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

      {/* SECOND HALF */}
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
              <ChevronDown
                size={18}
                stroke="#162766"
                strokeWidth={3}
                fill="#F2C438"
                className="transition-transform duration-300 rotate-0"
              />
            </div>
          )}
        </div>

        <div
          className={`
            grid transition-all duration-500 ease-in-out
            ${isSecondHalfOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
          `}
        >
          <div className="overflow-hidden px-4 sm:px-6 py-6 bg-[#162766]">
            <div
              className={`
                transition-all duration-500 ease-out
                ${isSecondHalfOpen ? "translate-y-0" : "-translate-y-2"}
              `}
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
