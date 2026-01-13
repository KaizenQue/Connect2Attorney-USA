"use client";

import Image from "next/image";

const PartnerStatsCard = () => {
  return (
    <div
      className="
        flex flex-col items-start
        w-[288px]
        p-4
        gap-[7.564px]

        rounded-[20px]
        border-[0.756px] border-white/10
        bg-transparent
        shadow-[0_7.564px_11.346px_-2.269px_rgba(0,0,0,0.10)]
      "
    >
      {/* PEOPLE IMAGE — FIXED SIZE */}
      <div className="relative w-[160px] h-[48px]">
        <Image
          src="/Partnerprofilepictures.svg"
          alt="Partner profiles"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* TEXT + 28K */}
      <div className="flex items-end justify-between w-full">
      <p
  className="
    text-white
    font-inter
    text-[12px]
    font-normal
    leading-normal
    tracking-[-0.72px]
    max-w-[190px]
  "
>
  Partner with us as we protect your rights
</p>


   <span
  className="
    text-white
    text-center
    font-inter
    text-[50px]
    font-semibold
    leading-[48px]
  "
>
  28K
</span>

      </div>
    </div>
  );
};

export default PartnerStatsCard;
