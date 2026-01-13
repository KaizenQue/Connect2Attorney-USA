"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CaseCardProps {
  id: number;
  title: string;
  image: string;
  url: string;
}

const CaseCard: React.FC<CaseCardProps> = ({ title, image, url }) => {
  return (
    <Link
      href={url}
      className="
        relative
        block
        group
        cursor-pointer
      "
    >
      <div
        className="
          relative

          /* HEIGHT */
          h-[360px]
          md:h-[300px]
          lg:h-[320px]
          xl:h-[380px]
          2xl:h-[420px]

          /* WIDTH */
          w-[280px]
          sm:w-[320px]
          md:w-[260px]
          lg:w-[230px]
          xl:w-[280px]
          2xl:w-[320px]

          min-w-[280px]
          md:min-w-[260px]
          lg:min-w-[230px]
          xl:min-w-[280px]
          2xl:min-w-[320px]

          flex-shrink-0
          rounded-[18px]
          overflow-hidden pb-10
          mx-2 lg:mx-3 xl:mx-4
          transition-transform duration-300
          lg:hover:-translate-y-2
          xl:hover:-translate-y-3
        "
      >
        {/* Image */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain -translate-y-9"
        />

        {/* Arrow / Notch */}
        <div
          className="
            absolute top-3 right-0
            md:top-0 md:right-0
            lg:top-5 lg:right-1
            xl:top-5 xl:right-0
            2xl:top-3 2xl:right-0
            z-20
          "
        >
          <Image
            src="/CardNotch.png"
            alt="Arrow"
            width={59}
            height={59}
            className="
              object-contain
              md:w-[59px] md:h-[59px]
              lg:w-[52px] lg:h-[52px]
              xl:w-[59px] xl:h-[59px]
              2xl:w-[68px] 2xl:h-[78px]
            "
          />
        </div>

        {/* Title */}
        <div
          className="
            absolute bottom-4 left-4
            md:bottom-7 md:left-7
            lg:bottom-10 lg:left-6
            xl:bottom-28 xl:left-6
            z-20
            max-w-[80%]
          "
        >
          <h2
            className="
              font-noto-serif font-semibold text-white
              whitespace-pre-line
              text-[20px] leading-[28px]
              md:text-[16px] md:leading-[22px]
              lg:text-[18px] lg:leading-[26px]
              xl:text-[22px] xl:leading-[30px]
              2xl:text-[24px] 2xl:leading-[34px]
            "
          >
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default CaseCard;
