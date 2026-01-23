"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const ContactCard = () => {

 

  return (
    <section
      className="
        relative w-full
        flex justify-center items-end 
        pt-24 pb-10
        md:pt-32 md:pb-16
        lg:pt-40 lg:pb-20
        2xl:pt-48 2xl:pb-28
        min-h-[360px]
        md:min-h-[700px]
        lg:min-h-[820px]
        2xl:min-h-[980px]
       bg-[url('/LastSection.png')]
        bg-no-repeat bg-cover bg-bottom
      "
    >
      {/* ================= DESKTOP (LG → 2XL) ================= */}
      <div
        className="
          hidden lg:block
          relative w-full
          max-w-[75%]
          2xl:max-w-[85%]
          px-4 
        "
      >
        {/* Background card image */}
        <Image
          src="/Mask group.png"
          alt="Contact section"
          width={1093}
          height={295}
          priority
          className="
            w-full h-auto
            object-contain
            2xl:scale-[1.0]
            2xl:origin-bottom
          "
        />

        {/* Text + CTA overlay */}
        <div
          className="
            absolute left-0
            bottom-[10%]
            2xl:bottom-[14%]
            translate-x-16
            2xl:translate-x-24
            flex flex-col
            gap-4 2xl:gap-8
            max-w-[45%]
            2xl:max-w-[42%]
            text-left
          "
        >
          <h2
            className="
              font-noto-serif
              font-normal
              text-[#162766]
              capitalize
              xl:text-[40px]
              xleading-[50px]
              lg:text-[30px]
              lg:leading-[40px]
              2xl:text-[56px]
              2xl:leading-[68px]
            "
          >
            Still have more <br /> questions?
          </h2>

          <Link
            href="/contact-us"  
            className="
              flex items-center justify-center
              w-[242px] h-[65px]
              bg-[#F2C438] hover:bg-[#162766]
              text-[#162766] hover:text-[#fff]
              font-urbanist font-semibold
              text-[20px] leading-[30px]
              2xl:text-[24px]
              2xl:w-[300px]
              2xl:h-[78px]
              rounded-full
              shadow-lg hover:shadow-xl
              transition-all duration-200
              hover:scale-105
            "
          >
            Reach out to us
          </Link>
        </div>
      </div>

      {/* ================= MOBILE + TABLET ================= */}
      <div className="lg:hidden relative w-full flex justify-center">
        <Image
          src="/footermobimg.svg"
          alt="Contact section mobile"
          width={358}
          height={187}
          className="
            w-[92%]
            max-w-[320px]
            sm:max-w-[360px]
            md:max-w-[480px]
            h-auto
            object-contain
          "
        />

        <div
          className="
            absolute
            bottom-[16%]
            sm:bottom-[18%]
            md:bottom-[20%]
            left-1/2 -translate-x-1/2
            flex flex-col items-center
            gap-3 sm:gap-4 md:gap-5
            text-center
            w-full px-3 sm:px-4
          "
        >
          <h2
            className="
              font-noto-serif
              font-medium
              text-[#162766]
              capitalize
              text-[25px]
              leading-[30px]
            "
          >
            Still have more <br /> questions?
          </h2>

          <Link
            href="/contact-us"
            className="
              flex items-center justify-center
              w-[200px] h-[52px]
              bg-[#F2C438] hover:bg-[#E0B030]
              text-[#162766]
              font-urbanist font-semibold
              text-[16px]
              leading-normal
              rounded-full
              shadow-lg hover:shadow-xl
              transition-all duration-200
              hover:scale-105
            "
          >
            Reach out to us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
