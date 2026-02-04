import React from "react";
import Image from "next/image";

const BlogsEducationCard2 = () => {
  return (
    <section className="relative w-full overflow-hidden md:my-0">
      {/* MOBILE */}
      <div className="relative w-full aspect-[375/260] md:hidden">
        <Image
          src="/Containermob.png"
          alt="Mobile background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* TABLET */}
      <div className="relative w-full aspect-[789/230] hidden md:block lg:hidden">
        <Image
          src="/Containertab.png"
          alt="Tablet background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* DESKTOP */}
      <div className="relative w-full aspect-[1630/476] hidden lg:block ">
        <Image
          src="/Containerlap.png"
          alt="Desktop background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* ================= CONTENT LAYER ================= */}
      <div className="absolute inset-0 z-10 flex items-center px-8 sm:px-6 md:px-10 lg:px-16">
        {/* BUTTON */}
        <a
          href="https://legalcaseinfo.com/" target="_blank"
          className="
        absolute
        top-0 right-5  min-[375px]:w-[130px] min-[375px]:h-[60px] w-[110px] h-[50px] md:w-[140px] lg:w-[160px] lg:h-[80px] xl:w-[240px] xl:h-[90px] 2xl:w-[280px] 2xl:h-[108px] 3xl:w-[400px] 3xl:h-[180px]
        lg:top-1 lg:right-12 xl:top-2 xl:right-12 2xl:right-12
        bg-[#fbc02d]
        text-[#162766] rounded-xl lg:rounded-3xl
        xl:rounded-4xl
        font-urbanist font-semibold
        px-4 py-2
        md:px-5 md:py-2.5
        lg:px-6 lg:py-3
        text-[10px] min-[360px]:text-[14px] lg:text-[18px] justify-between 2xl:text-[24px]
        inline-flex items-center gap-3
        shadow-lg shadow-yellow-500/20
        hover:-translate-y-1 transition
      "
        >
          See All Blogs
          <div className="bg-[#1a237e] w-[37px] h-[25px] lg:w-[50px] lg:h-[50px] rounded-lg flex items-center justify-center group-hover:bg-opacity-90">
            <svg
               className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fbc02d"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>

              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </a>

        {/* TEXT — DESKTOP ONLY */}
        <div className="lg:block max-w-lg flex items-center pl-5 2xl:pl-10">
          <h1 className="font-noto-serif font-normal capitalize leading-tight">
            <span className="block text-[#FDCF42] text-4xl lg:text-[60px] 2xl:text-[80px]">
              Blogs &
            </span>
            <span className="block text-[#1C2D5C] text-4xl lg:text-[60px] 2xl:text-[80px]">
              Education
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default BlogsEducationCard2;
