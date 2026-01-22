"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export type TocItem = {
  label: string;
  id: string;
};

const TableOfContents = ({ items }: { items: TocItem[] }) => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -100;
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="mt-6 w-full">
      <button
        onClick={() => setOpen(!open)}
        className="w-full h-[60px] flex items-center justify-between px-4 rounded-xl border border-[#d9e0ff] bg-tranparent "
      >
        <span className="text-[#162766] font-urbanist text-[20px] font-bold">
          Table of Contents
        </span>

        <span className="w-8 h-8 rounded-lg md:bg-[#162766] bg-[#F2C338] md:text-white text-bg-[#162766]  flex items-center justify-center">
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>

      {open && (
        <div className="mt-2 rounded-xl border border-[#d9e0ff] bg-[#f9fafc] p-4">
          <div className="max-h-[300px] overflow-y-auto flex flex-col gap-2 pr-1">
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setOpen(false);
                }}
                className="px-4 py-3.5  rounded-lg md:text-[#162766] text-[#162766] font-urbanist text-[15px] font-medium cursor-pointer hover:bg-[#eef1ff] transition"
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TableOfContents;
