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

const MobileCaseCard: React.FC<CaseCardProps> = ({ title, image, url }) => {
  return (
    <Link href={url} className="block">
      <div
        className="
          relative
          w-full
          h-[clamp(150px,42vw,200px)]
          rounded-[20px]
          overflow-hidden
          shadow-[0_7.564px_11.346px_-2.269px_rgba(0,0,0,0.10)]
          cursor-pointer
        "
      >
        {/* Image */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, 33vw"
        />

        {/* Title */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <h3
            className="
              font-noto-serif
              text-white
              font-bold
              text-[clamp(14px,3.5vw,16px)]
              leading-[clamp(20px,4.5vw,24px)]
            "
          >
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default MobileCaseCard;
