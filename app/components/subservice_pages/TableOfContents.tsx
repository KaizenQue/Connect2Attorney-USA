"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const tocItems = [
  { label: "What is an Ozempic Lawsuit?", id: "what-is-ozempic-lawsuit" },
  { label: "What are the Allegations Against Ozempic?", id: "allegations-against-ozempic" },
  { label: "What are the Health Risks of Ozempic?", id: "health-risks-ozempic" },
  { label: "Who Qualifies for an Ozempic Lawsuit?", id: "who-qualifies-ozempic" },
  { label: "How to File an Ozempic Lawsuit with Connect2Attorney?", id: "how-to-file-ozempic" },
  { label: "Ozempic Lawsuit Timeline", id: "ozempic-timeline" },
  { label: "Questions? We got you", id: "questions" },
];


const TableOfContents = () => {

  const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  const yOffset = -100; // adjust for sticky navbar
  const y =
    el.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
};

  const [open, setOpen] = useState(false);

  return (
    <div className="mt-6 w-full">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full h-[60px]
          flex items-center justify-between
          px-4
          rounded-xl
          border border-[#d9e0ff]
          bg-white
          
        "
        aria-expanded={open}
      >
        <span className="text-[#162766] font-urbanist text-[20px] font-bold">
          Table of Contents
        </span>

        <span
          className="
            w-8 h-8
            rounded-lg
            bg-[#162766]
            text-white
            flex items-center justify-center
          "
        >
          {open ? (
            <ChevronUp size={18} strokeWidth={2.5} />
          ) : (
            <ChevronDown size={18} strokeWidth={2.5} />
          )}
        </span>
      </button>

      {/* Content */}
      {open && (
        <div
          className="
            mt-2
            flex flex-col
            gap-3
            rounded-xl
            border border-[#d9e0ff]
            bg-[#f9fafc]
            p-4 
          "
        >

          <div className="
              max-h-[300px]     
              overflow-y-auto
              flex flex-col
              gap-2
              pr-1           
            ">

      
        {tocItems.map((item) => (
  <div
    key={item.id}
    onClick={() => {
      scrollToSection(item.id);
      setOpen(false);
    }}
    className="
      w-full
      flex items-center
      px-4 py-3.5
      bg-white
      rounded-lg
      text-[#162766]
      font-urbanist
      text-[15px] xl:text-[16px]
      font-medium
      cursor-pointer
      hover:bg-[#eef1ff]
      transition
    "
  >
    <span className="leading-snug">{item.label}</span>
  </div>
))}

        </div>
            </div>
      )}
    </div>
  );
};

export default TableOfContents;
