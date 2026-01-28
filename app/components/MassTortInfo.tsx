'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";

const MassTortInfo = () => {

  return (
    <>
      {/* 2. Main Container */}
      <div className="w-full flex justify-center items-center bg-white px-4 md:px-8 lg:px-12 md:pb-12 font-sans">
        <div
          className="
            relative w-full max-w-[1440px]
            bg-[#162766]
            rounded-3xl
            shadow-2xl
            overflow-hidden
            grid grid-cols-1 md:grid-cols-2
            min-h-[260px] md:min-h-[240px] lg:min-h-[310px]
          "
        >
          {/* ================= MOBILE BACKGROUND IMAGE ================= */}
          <div className="absolute inset-0 md:hidden z-0">
            <Image
              src="/bgimgmasstortbigfull.svg"
              alt="Mass Tort"
              fill
              priority
              className="object-contain object-left-bottom"
            />
          </div>

          {/* Mobile overlay for readability */}
          <div className="absolute inset-0 md:hidden bg-[#162766]/80 z-10" />

          {/* ================= LEFT: CONTENT ================= */}
          <div className="flex flex-col justify-center p-6 md:p-8 lg:p-[50px] relative z-20">
            <h1
              className="font-noto-serif font-normal capitalize text-white
                         text-[26px] md:text-[24px] lg:text-[35px] mb-2"
              style={{
                lineHeight: "clamp(34px, 6vw, 70px)",
                letterSpacing: "0px",
              }}
            >
              <span className="text-[#F2C94C] block md:inline">Ready</span> To Get
              Started?
            </h1>

            <p
              className="font-urbanist font-normal text-[#F9F9F9]
                         mb-6 lg:mb-8
                         max-w-lg
                         text-[14px] md:text-[13px] lg:text-[18px]"
              style={{ lineHeight: "22px", letterSpacing: "0px" }}
            >
              Don&apos;t Wait To Seek The Justice You Deserve. Contact Us <br />
              Today To Schedule Your Free Case Evaluation.
            </p>

              <Link href="/contact-us">
                  <button 
              className="
                bg-[#F2C94C]
                text-[#19224D]
                font-urbanist font-bold
                uppercase
                tracking-wide
                py-3 md:py-2.5 lg:py-4
                px-6 lg:px-8
                rounded-lg
                shadow-lg
                w-full max-w-md md:max-w-[240px] lg:w-auto
                transition-transform hover:-translate-y-1 hover:bg-[#ffd65c]
                text-[11px] md:text-[11px] lg:text-[16px]
              "
              style={{ lineHeight: "100%", letterSpacing: "0%" }}
            >
              Start a Free Case Review
            </button>
              </Link>
        
          </div>

          {/* ================= RIGHT: IMAGE (DESKTOP/TABLET ONLY) ================= */}
          <div className="relative w-full h-[200px] md:h-full hidden md:block">
            {/* subtle gradient fade so image blends into blue */}
            <div className="absolute inset-0 z-10 bg-gradient-to-l from-transparent to-[#162766]" />

            <Image
              src="/bgimgmasstortbigfull.svg"
              alt="Mass Tort"
              fill
              priority
              className="object-contain object-right"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MassTortInfo;
