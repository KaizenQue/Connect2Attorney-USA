"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export type TocItem = {
  label: string;
  id: string;
};

const TableOfContents = ({ items }: { items: TocItem[] }) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  const [open, setOpen] = useState(false)
   
  useEffect(() => {
    setMounted(true);

    //  After mount decide initial open state
    if (window.innerWidth >= 1024) {
      setOpen(true);
    }
  }, []);

  useEffect(() => {

        if (!mounted) return;

    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(true); // always open on desktop
      } else {
        setOpen(false); // collapsed on mobile/tablet
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mounted]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -100;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const ids = items.map((item) => item.id);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (!mounted) return null;

  return (
    <div className="mt-6  w-full top-[120px]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full   h-[60px] flex items-center justify-between px-4 rounded-xl border border-[#d9e0ff] bg-tranparent "
      >
        <span className="text-[#162766] font-urbanist text-[20px] font-bold">
          Table of Contents
        </span>

        <span className="w-8 h-8 rounded-lg bg-[#F2C338] md:text-white text-bg-[#162766]  flex items-center justify-center">
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>

      {open && (
        <div className="mt-2 rounded-xl border border-[#d9e0ff] bg-[#f9fafc] p-4">
          <div className="max-h-[300px] overflow-y-auto flex flex-col gap-2 pr-1">
            {items.map((item, index) => (
                <div key={`${item.id}-${index}`}
                onClick={() => {
                  scrollToSection(item.id);
                  if (window.innerWidth < 1024) {
                    setOpen(false);
                  }
                }}
                className={`
    px-4
    py-3.5
    rounded-lg
    font-urbanist
    text-[15px]
    cursor-pointer
    transition
    ${
      activeId === item.id
        ? "bg-[#eef1ff] text-[#162766] font-bold"
        : "text-[#162766] font-medium hover:bg-[#eef1ff]"
    }
  `}
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
