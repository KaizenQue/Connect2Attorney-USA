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

export const CaseCardCompact: React.FC<CaseCardProps> = ({
  title,
  image,
  url,
}) => {
  return (
    <Link href={url} className="relative block group cursor-pointer">
      <div
        className="
          relative
          h-[300px]
          md:h-[280px]
          lg:h-[260px]
          xl:h-[300px]
          2xl:h-[340px]

          w-[260px]
          sm:w-[300px]
          md:w-[270px]
          lg:w-[220px]
          xl:w-[260px]
          2xl:w-[300px]

          min-w-[260px]
          md:min-w-[250px]
          lg:min-w-[220px]
          xl:min-w-[260px]
          2xl:min-w-[300px]

          flex-shrink-0
          rounded-[18px]
          overflow-hidden
          mx-2 lg:mx-3
          transition-transform duration-300
          lg:hover:-translate-y-2
        "
      >
        {/* Image */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain lg:-translate-y-4  md:-translate-y-1 -translate-y-3"
        />

        {/* Notch */}
        <div className="absolute top-3 right-0 z-20 lg:w-[48px]">
          <Image
            src="/CardNotch.png"
            alt="Arrow"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>

        {/* Title */}
        <div className="absolute bottom-20 left-4 z-20 max-w-[85%]">
          <h2
            className="
              font-noto-serif font-semibold text-white
              whitespace-pre-line
              text-[18px] leading-[26px]
              md:text-[16px]
              lg:text-[17px]
              xl:text-[20px]
            "
          >
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export const CaseCardExpanded: React.FC<CaseCardProps> = ({
  title,
  image,
  url,
}) => {
  return (
    <Link href={url} className="relative block group cursor-pointer">
      <div
        className="
          relative

          /* HEIGHT */
          h-[360px]
          md:h-[360px]
          lg:h-[250px]
          xl:h-[420px]
          2xl:h-[440px]

          /* WIDTH */
          w-full
          sm:w-[320px]
          md:w-[300px]
          lg:w-[220px]
          xl:w-[300px]
          2xl:w-[340px]

          /* GRID SAFETY */
          min-w-0

          rounded-[20px]
          overflow-hidden
          mx-auto 2xl:mx-0
          transition-transform duration-300
          lg:hover:-translate-y-3
        "
      >
        {/* Background Image */}
        <Image
          src={image}
          alt={title}
          fill
          priority={false}
          className="
            object-contain 
            object-center xl:translate-y-0  xl:translate-x-0 lg:translate-y-2
          "
        />

        {/* Notch */}
        <div className="absolute top-0 right-5 z-20 lg:w-[40px] xl:w-[60px]">
          <Image
            src="/CardNotch.png"
            alt="Arrow"
            width={64}
            height={64}
            className="object-contain"
          />
        </div>

        {/* Title */}
        <div className="absolute bottom-6 left-6 z-20 max-w-[80%]">
          <h2
            className="
              font-noto-serif font-semibold text-white
              whitespace-pre-line
              text-[18px] leading-[26px]
              md:text-[18px]
              lg:text-[18px] lg:pl-4
              xl:text-[22px]
              2xl:text-[24px]
            "
          >
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};
