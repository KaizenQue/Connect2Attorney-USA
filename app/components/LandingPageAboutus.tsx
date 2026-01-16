/* eslint-disable react/display-name */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import PartnerStatsCard from "./PartnerStatsCard";
import RotatingSvg from "./RotatingSvg";
const ArrowUpRightIcon = React.memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
));

const MagnifyingGlassIcon = React.memo(() => (
 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M12.6907 4.18009C12.9396 4.84724 13.0759 5.56704 13.0759 6.31755C13.0759 7.80807 12.5399 9.17913 11.6451 10.2589L17.4418 15.8602L16.4135 16.8539L10.6167 11.2526C9.49937 12.1172 8.08047 12.6351 6.53791 12.6351C2.92953 12.6351 0 9.80411 0 6.3176C0 2.83108 2.92977 7.0079e-05 6.53791 7.0079e-05C8.56007 7.0079e-05 10.3688 0.889283 11.5688 2.28501L10.535 3.28308C9.60391 2.13931 8.15854 1.40456 6.53784 1.40456C3.73179 1.40456 1.45342 3.60611 1.45342 6.3176C1.45342 7.01371 1.60331 7.67733 1.87493 8.27688L5.31144 5.10969C5.5976 4.84634 6.04819 4.85162 6.32707 5.12198L7.99405 6.73101L13.5064 1.40449H12.3545V0H15.2615C15.663 0 15.9882 0.314247 15.9882 0.702247V3.51124H14.5347V2.39818L12.6907 4.18009Z" fill="#F2C438"/>
</svg>
));

const DocumentIcon = React.memo(() => (
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 20 23" fill="none">
  <path d="M6.11128 20.1207C4.52273 20.1207 3.23029 18.8283 3.23029 17.2398V3.69531C2.23878 3.81395 1.51155 4.69647 1.60123 5.69378L2.86184 19.9039C2.90332 20.3968 3.13577 20.8443 3.5177 21.1626C3.85528 21.4442 4.27291 21.5947 4.70982 21.5947C4.76287 21.5947 4.81688 21.5928 4.86993 21.5879L15.5238 20.6418C15.951 20.6032 16.3378 20.4151 16.6416 20.1209H6.11025L6.11128 20.1207Z" fill="#F2C438"/>
  <path d="M15.0938 4.31599C15.0938 4.52336 15.2625 4.69311 15.4709 4.69311H18.3153C18.2555 4.60919 18.1909 4.52625 18.1166 4.45101L15.3253 1.66657C15.2539 1.5952 15.1748 1.53443 15.0938 1.47656L15.0938 4.31599Z" fill="#F2C438"/>
  <path d="M15.4642 5.71295C14.6888 5.71295 14.058 5.08216 14.058 4.3067V1.12201C14.0416 1.12201 14.0261 1.11719 14.0098 1.11719H6.10185C5.08044 1.11719 4.25 1.94763 4.25 2.96904V17.235C4.25 18.2564 5.08044 19.0868 6.10185 19.0868H16.8011C17.8225 19.0868 18.653 18.2564 18.653 17.235L18.6539 5.75348C18.6539 5.73998 18.6501 5.72648 18.6501 5.71297L15.4642 5.71295ZM9.01558 6.26465C9.01558 5.9811 9.2461 5.75058 9.52966 5.75058H10.5877V4.6925C10.5877 4.40895 10.8182 4.17843 11.1018 4.17843H12.0731C12.3566 4.17843 12.5871 4.40895 12.5871 4.6925V5.75058H13.6452C13.9288 5.75058 14.1593 5.98109 14.1593 6.26465V7.23591C14.1593 7.51947 13.9288 7.74998 13.6452 7.74998H12.5871V8.80806C12.5871 9.09161 12.3566 9.32213 12.0731 9.32213H11.1018C10.8182 9.32213 10.5877 9.09162 10.5877 8.80806V7.74998H9.52966C9.2461 7.74998 9.01558 7.51947 9.01558 7.23591V6.26465ZM14.2346 17.013H7.03262C6.74906 17.013 6.51855 16.7825 6.51855 16.499C6.51855 16.2154 6.74906 15.9849 7.03262 15.9849H14.2346C14.5181 15.9849 14.7487 16.2154 14.7487 16.499C14.7487 16.7825 14.5182 17.013 14.2346 17.013ZM16.2919 14.4407H7.03262C6.74906 14.4407 6.51855 14.2102 6.51855 13.9266C6.51855 13.6431 6.74906 13.4126 7.03262 13.4126H16.2919C16.5754 13.4126 16.806 13.6431 16.806 13.9266C16.806 14.2102 16.5754 14.4407 16.2919 14.4407ZM16.2919 11.8684H7.03262C6.74906 11.8684 6.51855 11.6378 6.51855 11.3543C6.51855 11.0707 6.74906 10.8402 7.03262 10.8402H16.2919C16.5754 10.8402 16.806 11.0707 16.806 11.3543C16.806 11.6378 16.5754 11.8684 16.2919 11.8684Z" fill="#F2C438"/>
</svg>
));

const MoneyBagIcon = React.memo(() => (
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
  <g clipPath="url(#clip0_1041_3424)">
    <path d="M14.1328 5.24219C15.7002 6.72556 17.5742 9.06205 18.0547 11.5186C19.1117 16.8685 15.624 20.1012 10.1152 20.0352C0.220859 20.0682 -0.0567272 10.5033 6.21191 5.36816C8.62943 5.96417 11.2595 5.83331 13.6826 5.5C13.8808 5.46397 14.0367 5.36827 14.1328 5.24219ZM10.1152 8.11914C9.78499 8.11923 9.51465 8.38944 9.51465 8.71973V9.23047C6.80188 9.84784 7.36185 13.1112 10.1152 13.1279C11.6872 13.1805 11.6872 14.6354 10.1152 14.6895C9.47877 14.6894 8.92688 14.3235 8.92676 13.9092C8.92676 13.579 8.65628 13.3088 8.32617 13.3086C7.98985 13.3086 7.72559 13.5788 7.72559 13.9092C7.72566 14.828 8.48179 15.6089 9.51465 15.8252V16.3359C9.53005 17.1267 10.7004 17.1222 10.7158 16.3359V15.8252C11.7488 15.609 12.5116 14.8281 12.5117 13.9092C12.5117 12.8161 11.4365 11.9268 10.1152 11.9268C9.47881 11.9267 8.92601 11.5608 8.92578 11.1465C8.92578 10.7321 9.47868 10.3653 10.1152 10.3652C10.7519 10.3652 11.3105 10.7321 11.3105 11.1465C11.3258 11.9345 12.495 11.936 12.5117 11.1465C12.5117 10.2275 11.7488 9.44669 10.7158 9.23047V8.71973C10.7158 8.38938 10.4456 8.11914 10.1152 8.11914ZM10.7754 0.102539C11.2933 -0.0776368 11.8343 0.130754 12.2832 0.396484C12.9393 -0.112172 13.9589 0.391538 13.8809 1.23828C13.8746 1.29594 13.8139 2.11149 13.4844 3.12402C14.3476 3.04753 14.5789 4.15568 13.6768 4.31348C11.3272 4.70385 8.91853 4.63778 6.54785 4.31348C5.55992 4.11374 5.95034 2.93289 6.86621 3.1416C6.56605 2.3491 6.39145 1.62876 6.36133 1.23828C6.2968 0.376527 7.2937 -0.106152 7.96484 0.396484C8.41372 0.132247 8.94583 -0.0776306 9.4668 0.102539L10.0312 0.276367C10.1679 0.337785 10.634 0.128247 10.7754 0.102539Z" fill="#F2C438"/>
  </g>
  <defs>
    <clipPath id="clip0_1041_3424">
      <rect width="20" height="21.3699" fill="white"/>
    </clipPath>
  </defs>
</svg>
));

const MicroscopeIcon = React.memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 18h8"></path>
    <path d="M3 22h12"></path>
    <path d="M14 22a7 7 0 1 0 0-14h-1"></path>
    <path d="M9 14h2"></path>
    <path d="M9 12a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"></path>
  </svg>
));

// --- Background Shapes ---
const BlueShapeSVG = React.memo(() => (
  <svg
    viewBox="0 0 876 643"
    className="w-full h-full object-cover"
    preserveAspectRatio="none"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <path
        id="blue-shape-path-about"
        d="M0 30C0 13.4314 13.4315 0 30 0H846C862.569 0 876 13.4315 876 30V246.743C876 252.713 873.333 258.372 868.727 262.171L627.503 461.171C622.897 464.971 620.23 470.629 620.23 476.599V613C620.23 629.569 606.799 643 590.23 643H151.809C142.474 643 133.671 638.655 127.994 631.244L20.6175 491.084C7.24625 473.63 0 452.256 0 430.269V267.171V30Z"
      />
      <clipPath id="blue-shape-clip-about">
        <use href="#blue-shape-path-about" />
      </clipPath>
    </defs>
    <use href="#blue-shape-path-about" fill="#162766" />
    <image
      href="/BGAboutMain.svg"
      width="876"
      height="643"
      preserveAspectRatio="xMidYMid slice"
      clipPath="url(#blue-shape-clip-about)"
    />
  </svg>
));

const LightShapeSVG = React.memo(() => (
  <svg
    viewBox="0 0 665 643"
    className="w-full h-full object-cover"
    preserveAspectRatio="none"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <path
        id="light-shape-path-about"
        d="M30 643C13.4315 643 0 629.569 0 613V509.978C0 501.019 4.00472 492.528 10.9185 486.829L240.212 297.829C249.43 290.23 254.77 278.909 254.77 266.963V30C254.77 13.4314 268.201 0 284.77 0H635C651.569 0 665 13.4315 665 30V593C665 620.614 642.614 643 615 643H30Z"
      />
      <clipPath id="light-shape-clip-about">
        <use href="#light-shape-path-about" />
      </clipPath>
    </defs>
    <use href="#light-shape-path-about" fill="#F0F2F4" />
    <image
      href="/AUOTR.svg"
      width="665"
      height="643"
      preserveAspectRatio="xMidYMid slice"
      clipPath="url(#light-shape-clip-about)"
    />
  </svg>
));

const MobileLanding = () => {
  return (
    <div className="block lg:hidden w-full bg-white font-sans px-4 py-6">
      {/* ⬅️ MOBILE SAME | ⬆️ TABLET WIDER */}
      <div className="w-full max-w-[420px] md:max-w-[680px] mx-auto">

        {/* HERO CARD */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            backgroundImage: "url('/aboutherobg.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right bottom",
            backgroundSize: "cover",
          }}
        >
          {/* ⬅️ MOBILE SAME | ⬆️ TABLET MORE BREATHING */}
          <div className="p-5  pb-14 md:p-12 md:pb-16">

            {/* About Us Title */}
            <div className="inline-block mb-5 md:mb-6">
              <h1
                className="
                  font-noto-serif text-[#F2C438] font-normal capitalize
                  text-[35px] leading-[36.773px]
                  md:text-[38px] md:leading-[40px]
                "
              >
                About Us
              </h1>
            </div>

            {/* Bullet Points */}
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-[#F2C438] flex-shrink-0 mt-[2px]">
                  <MagnifyingGlassIcon />
                </span>
                <p
                  className="
                    text-white font-urbanist font-medium capitalize
                    text-[15px]
                    md:text-[16px]
                  "
                >
                  <span className="text-[#F2C438] font-bold">Free,</span>{" "}
                  Confidential Case Reviews.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#F2C438] flex-shrink-0 mt-[2px]">
                  <DocumentIcon />
                </span>
                <p
                  className="
                    text-white font-urbanist font-medium capitalize
                    text-[15px]
                    md:text-[16px]
                  "
                >
                  Serving All{" "}
                  <span className="text-[#F2C438] font-bold">50 States.</span>
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#F2C438] flex-shrink-0 mt-[2px]">
                  <MoneyBagIcon />
                </span>
                <p
                  className="
                    text-white font-urbanist font-medium capitalize
                    text-[15px]
                    md:text-[16px]
                  "
                >
                  <span className="text-[#F2C438] font-bold">No Fees</span>{" "}
                  Unless You Win.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* CONTENT CARD */}
        <div className="mt-5 md:mt-6 bg-[#F3F4F6] rounded-2xl p-5 md:p-8">
          <p
            className="
              text-[#162766] font-urbanist font-normal
              text-[18px] leading-[28px]
              md:text-[19px] md:leading-[30px]
            "
          >
            At Connect2Attorney, we bridge the gap between individuals and the legal support they need, connecting clients with trusted, experienced attorneys dedicated to securing justice.
            <br /><br />
            Whether it's a personal injury case, a class action lawsuit, or general legal advice, our team of professionals ensures guidance every step of the way, empowering individuals to access the justice they deserve.
          </p>
        </div>

      </div>
    </div>
  );
};


const DesktopLanding = () => {
  return (
    <div className="hidden lg:flex w-full justify-center bg-white font-sans lg:py-1  lg:px-5 xl:px-10">
      <div
        className="
          relative
          w-full
          max-w-[1600px]
          min-h-[700px]
          2xl:min-h-[820px]
          overflow-hidden

          bg-[url('/aboutusbgfulllgonly1.svg')]

          xl:bg-[url('/aboutusbgfull1.svg')]

          bg-no-repeat
          bg-center
          bg-contain
        "
      >
        {/* ================= CONTENT GRID ================= */}
        <div className="relative z-10 w-full h-full grid grid-cols-2">

          {/* ================= LEFT SIDE ================= */}
          <div className="relative">
        <div
          className="
            absolute
            lg:left-[20%] lg:top-[10%]
            xl:left-[10%] xl:top-[12%]
            2xl:left-[10%] 2xl:top-[12%]
            max-w-[520px]
            relative
          "
        >
  {/* ===== Rotating SVG pinned to top-right of About Us ===== */}
  <div className="absolute top-[15%] right-[5%] md:top-[25%] md:right-[15%] lg:right-[25%] lg:top-[10%] xl:right-[5%] xl:top-[10%] 2xl:hidden">
    <RotatingSvg />
  </div>

  <h1
    className="
      font-noto-serif
      font-normal
      capitalize
      text-[#F2C438]
      text-[56px]
      leading-[64px]
      xl:text-[72px]
      xl:leading-[82px]
      2xl:text-[80px]
      2xl:leading-[90px]
      mb-8
    "
  >
    About Us
  </h1>

  <div className="space-y-6">
    <div className="flex items-start gap-4">
      <MagnifyingGlassIcon />
      <p className="text-blue-100 text-[18px] leading-[24px]">
        <span className="text-[#F2C438]">Free,</span> Confidential Case Reviews.
      </p>
    </div>

    <div className="flex items-start gap-4">
      <DocumentIcon />
      <p className="text-blue-100 text-[18px] leading-[24px]">
        Serving All <span className="text-[#F2C438]">50 States.</span>
      </p>
    </div>

    <div className="flex items-start gap-4">
      <MoneyBagIcon />
      <p className="text-blue-100 text-[18px] leading-[24px]">
        <span className="text-[#F2C438]">No Fees</span> Unless You Win.
      </p>
    </div>
  </div>
</div>

            {/* ======= STATS CARD (INDEPENDENT) ======= */}
            <div
              className="
                absolute
                lg:left-[30%] lg:bottom-[10%]
                xl:left-[40%] xl:bottom-[10%]
                2xl:left-[38%] 2xl:bottom-[12%]
              "
            >
              <PartnerStatsCard />
            </div>

          </div>
 <div className="hidden 2xl:block absolute left-[50%] top-[10%]">
  <RotatingSvg />
</div>

          {/* ================= RIGHT SIDE ================= */}
<div className="relative  xl:pr-[2%] lg:pr-[20%] pl-[42%] lg:pl-[40%] pt-[10%] xl:pt-[12%]">
  <p
    className="
      font-urbanist
      text-[#162766]
      lg:text-[15px]
      lg:leading-[20px]
      text-[18px]
      leading-[26px]
      2xl:text-[20px]
      2xl:leading-[28px]
      max-w-[420px]
      2xl:max-w-[520px]
      
    "
  >
    At Connect2Attorney, we bridge the gap between individuals and the legal support they need, connecting clients with trusted, experienced attorneys dedicated to securing justice.
    <br /><br />
    Whether it's a personal injury case, a class action lawsuit, or general legal advice, our team of professionals ensures guidance every step of the way, empowering individuals to access the justice they deserve.
  </p>
</div>


        </div>
      </div>
    </div>
  );
};







// --- Landing Page ---
const LandingPageAboutus = () => {
  return (
    <>
      <MobileLanding />
      <DesktopLanding />
    </>
  );
};

export default LandingPageAboutus;