"use client";
import React, { useState } from 'react';
import { LuX as X, LuChevronDown as ChevronDown, LuChevronUp as ChevronUp } from "react-icons/lu";

// Data for the timeline events to keep JSX clean
const firstHalfEvents = [
  {
    date: "June 21",
    desc: "A lawsuit filed in New Jersey Superior Court alleges that Wegovy caused a man to develop NAION (non-arteritic anterior ischemic optic neuropathy), resulting in permanent vision loss."
  },
  {
    date: "June 17",
    desc: "21 plaintiffs in New Jersey seek to consolidate NAION-related vision loss cases into multicounty litigation, citing the severe and irreversible nature of the injuries."
  },
  {
    date: "June 12",
    desc: "The GLP-1 MDL (MDL No. 3094) in the Eastern District of Pennsylvania now holds 1,882 active gastrointestinal injury cases, though NAION-related vision claims are not included."
  },
  {
    date: "June 10",
    desc: "Doctors and advocacy groups urge the FDA to issue a black box warning on semaglutide drugs due to increasing evidence of vision loss risks like NAION."
  },
  {
    date: "May 19",
    desc: "Patients begin filing lawsuits alleging Ozempic caused NAION and that Novo Nordisk failed to warn of vision risks, even as scientific data accumulated."
  },
  {
    date: "May 2",
    desc: "Over 500 new cases were added to the GLP-1 MDL in April alone, bringing the total to 1,685. This surge reflects growing public awareness of stomach paralysis claims."
  },
  {
    date: "April 24",
    desc: "A woman from North Carolina sues Novo Nordisk after suffering permanent vision loss from NAION allegedly caused by Ozempic."
  },
  {
    date: "April 22",
    desc: "Oral arguments are held on motions to dismiss. Plaintiffs argue their GI injury claims are specific and well-supported; defendants call them vague."
  },
  {
    date: "April 21",
    desc: "A CDC-backed study finds nearly 25,000 semaglutide-related ER visits occurred in 2022–2023, with many requiring hospitalizations for GI or hypoglycemic events."
  },
  {
    date: "April 1",
    desc: "The MDL adds 164 new cases in March as parties prepare for a Rule 702 hearing that could shape expert testimony eligibility."
  },
  {
    date: "March 26",
    desc: "A new direct-filed case from Illinois alleges Ozempic caused gastroparesis requiring hospitalization. Plaintiff argues Novo failed to warn users."
  },
  {
    date: "March 17",
    desc: "Eli Lilly requests that only gastroparesis claims supported by objective diagnostic tests be allowed, challenging the admissibility of broader clinical evaluations."
  },
  {
    date: "February 26",
    desc: "A JAMA Ophthalmology study shows semaglutide users may face an increased risk of NAION, suggesting doctors must consider this risk before prescribing."
  },
  {
    date: "February 25",
    desc: "Eli Lilly reduces prices for Zepbound amid slower-than-expected sales. Price cuts range from $349 to $499 depending on dosage."
  },
  {
    date: "February 6",
    desc: "January filings surged to 110 new cases, a sharp increase from December 2024. The MDL now has 1,443 active cases."
  },
  {
    date: "February 1",
    desc: "A Michigan woman files suit against Novo Nordisk, alleging severe GI injuries from Ozempic, including vomiting, ileus, and dehydration requiring hospitalization."
  },
  {
    date: "January 22",
    desc: "A 2025 study finds Ozempic may also increase risks of pancreatitis, kidney stones, arthritis, and fainting - complicating its touted benefits."
  },
  {
    date: "January 9",
    desc: "The court sets a Rule 702 hearing for May 14, 2025, to evaluate the admissibility of causation expert testimony across all GLP-1 lawsuits."
  }
];

const OzempicTimeline = () => {
  const [activeYear, setActiveYear] = useState('2025');
  const [isSecondHalfOpen, setIsSecondHalfOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#141b41] text-white p-4 md:p-8 font-sans">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-serif mb-8 text-white">
          Ozempic Lawsuit Timeline
        </h1>

        {/* Year Selector Tabs */}
        <div className="flex items-center mb-8 relative z-10">
          <div className="inline-flex bg-[#2a3464] rounded-full p-1 border border-[#3e4a80]">
            {['2025', '2024', '2023'].map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`
                  px-6 py-2 rounded-full text-sm font-bold transition-all duration-300
                  ${activeYear === year 
                    ? 'bg-[#fec94a] text-[#141b41]' 
                    : 'text-white hover:text-[#fec94a]'}
                `}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Graphic Line */}
        <div className="relative h-10 flex items-center mb-6 -mt-4">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#3b4572] -z-0"></div>
          
          {/* Active Marker (aligned loosely with first tab) */}
          <div className="w-6 h-6 rounded-full bg-transparent border-[3px] border-[#fec94a] shadow-[0_0_0_4px_#141b41] z-10 ml-12 relative">
             <div className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-[#fec94a]"></div>
          </div>
          
          {/* Inactive Markers */}
          <div className="w-5 h-5 rounded-full bg-[#141b41] border-[3px] border-[#3b4572] z-10 ml-24"></div>
          <div className="w-5 h-5 rounded-full bg-[#141b41] border-[3px] border-[#3b4572] z-10 ml-24"></div>
        </div>

        {/* 2025 First Half Panel */}
        <div className="bg-[#1e2652] rounded-lg shadow-xl mb-4 overflow-hidden border border-white/5">
          {/* Panel Header */}
          <div className="flex justify-between items-center p-5 border-b border-white/5 bg-white/5">
            <h2 className="text-xl font-bold text-[#fec94a]">
              2025 <span className="text-white font-normal ml-2">First Half</span>
            </h2>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-white/10 hover:bg-white/20 text-gray-400 border border-white/10 transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Grid Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 p-6 md:p-8">
            {firstHalfEvents.map((event, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="text-[#fec94a] font-serif font-bold text-lg">
                  {event.date}
                </div>
                <p className="text-[#d0d4e4] text-sm leading-relaxed">
                  {event.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2025 Second Half Panel (Accordion) */}
        <div className="bg-[#1e2652] rounded-lg shadow-xl overflow-hidden border border-white/5">
          <div 
            className="flex justify-between items-center p-5 border-b border-white/5 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors"
            onClick={() => setIsSecondHalfOpen(!isSecondHalfOpen)}
          >
            <h2 className="text-xl font-bold text-[#fec94a]">
              2025 <span className="text-white font-normal ml-2">Second Half</span>
            </h2>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-[#fec94a] text-[#141b41] border-none transition-transform">
              {isSecondHalfOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>

          {isSecondHalfOpen && (
            <div className="p-6 md:p-8">
              <p className="text-[#d0d4e4] text-center italic">
                Events for the second half of 2025 will be updated as they occur.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default OzempicTimeline;