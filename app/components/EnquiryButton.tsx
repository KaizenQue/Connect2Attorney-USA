"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import EnquiryForm from "./EnquiryForm2";

export default function EnquiryButton() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [formInstanceKey, setFormInstanceKey] = useState(0);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close on Escape and outside click
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Element | null;
      if (!target) return;
      const inside = target.closest("[data-modal-content]");
      if (!inside) setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  // pages where the enquiry button should be hidden
  const excluded: string[] = [];
  const hideForPage = excluded.includes(pathname || "");

  return (
    <>
      {!hideForPage && (
        <>
          {/* Sticky vertical button on right (desktop only) */}
          <button
            onClick={() => {
              setFormInstanceKey((k) => k + 1);
              setOpen(true);
            }}
            className="hidden lg:block fixed right-0 top-[70%] md:top-1/3 -translate-y-1/2
            z-[9999] w-[40px] h-[116px] flex items-center justify-center  
            text-[#C4A36E] font-semibold   
            bg-transparent overflow-visible group
            hover:scale-105 transition-transform duration-200"
            aria-label="Enquiry"
          >
            {/* SVG Background */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="116"
              viewBox="0 0 40 116"
              fill="none"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                d="M10.0577 103.592C3.9832 101.163 0 95.2789 0 88.7369V8C0 3.5818 3.5817 0 8 0H40V115.569L10.0577 103.592Z"
                fill="#F2C438"
                className="group-hover:fill-[#F5C844] transition-colors duration-200"
              />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center -rotate-90 origin-center pointer-events-none ">
              <div className="flex flex-row-reverse items-center gap-3 px-4">
                <span className="text-[#162766] font-semibold text-[14.25px]">Enquiry</span>

                <Image
                  src="/Enquirybutton.svg"
                  alt="Enquiry"
                  width={14.555}
                  height={14.555}
                  className="shrink-0"
                />
              </div>
            </div>
          </button>

          {/* Mobile floating button */}
          <div
            onClick={() => {
              setFormInstanceKey((k) => k + 1);
              setOpen(true);
            }}
            className="
              lg:hidden
              fixed bottom-4 right-4
              z-[9999]
              cursor-pointer
              active:scale-95
              transition
            "
            role="button"
            aria-label="Open enquiry form"
          >
            <Image
              src="/Enqmob.png"
              alt="Enquiry"
              width={80}
              height={80}
              priority
            />
          </div>

          {/* overlay */}
          {open && (
            <div
              className="fixed inset-0 bg-black/50 z-[9998]"
              onClick={() => setOpen(false)}
            />
          )}

          {/* form container */}
          <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center ${
              open ? "pointer-events-auto" : "pointer-events-none"
            }`}
            aria-hidden={!open}
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpen(false);
            }}
          >
            {/* mobile drawer */}
            <div
              className={`fixed top-0 right-0 h-full w-full    transition-transform duration-300 md:hidden ${
                open ? "translate-x-0" : "translate-x-full"
              }`}
              data-modal-content
            >
              <div className="h-full overflow-y-auto no-scrollbar scroll-smooth">
                <EnquiryForm key={formInstanceKey} setOpen={setOpen} />
              </div>
            </div>

          {/* desktop popup */}
<div className="hidden md:flex items-center justify-center w-full h-full p-6">
  <div
    className={`transform transition-all duration-300 ${
      open
        ? "scale-100 opacity-100"
        : "scale-95 opacity-0 pointer-events-none"
    }`}
    role="dialog"
    aria-modal="true"
    aria-label="Enquiry Form"
    data-modal-content
  >
    <EnquiryForm key={formInstanceKey} setOpen={setOpen} />
  </div>
</div>

          </div>
        </>
      )}
    </>
  );
}
