import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div
      className="
    relative
    w-full  
    pl-[16px] md:pl-0
    my-10 md:mb-0 md:mt-10 lg:mb-12
    h-[400px]
    md:h-[600px]
    lg:h-[590px]
    2xl:h-[650px]
  "
    >
      {/* 1. Background Image - Mobile */}
      {/* ================= MOBILE BACKGROUND ================= */}
      <Image
        src="/aboutmob.png"
        alt="About Us Background"
        className="absolute inset-y-0 w-full h-[403px] md:h-[539px] lg:hidden"
        width={374}
        height={403}
      />

      {/* ================= DESKTOP (NORMAL) ================= */}
      <Image
        src="/aboutdesktop.png"
        alt="About Us Background"
        className="absolute inset-0 w-full h-full hidden lg:block xl:hidden"
        width={1440}
        height={542}
      />

      {/* ================= DESKTOP (BIGGER / XL+) ================= */}
      <Image
        src="/aboutdesktopbigger.png"
        alt="About Us Background"
        className="absolute inset-0 w-full h-full hidden xl:block"
        width={1920}
        height={700}
      />

      {/* 3. Left-Center Text Content */}
      <div className="absolute top-[1%] md:top-[15%] left-[3%] md:left-[5%] z-20 max-w-[90%] md:max-w-[600px] w-[94%] md:w-[90%] px-2 md:px-0 pl-[20px]">
        <h1
          className="font-noto-serif font-normal capitalize  md:mb-6 text-[30px] md:text-[60px] lg:text-[60px] xl:text-[60px] 2xl:text-[80px]"
          style={{
            lineHeight: "70px",
            letterSpacing: "0px",
          }}
        >
          <span className="text-[#162766]">About</span>{" "}
          <span className="text-[#F2C438]">Us</span>
        </h1>
        <p className="font-urbanist font-normal text-[#162766] mb-3 md:mb-4  text-[12px] min-[360px]:text-[14px] min-[375px]:text-[16px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] leading-[24px] 2xl:leading-[30px] ">
          Free, confidential case reviews. Serving all 50 states. No fees unless
          you win. Understand Your Rights in Minutes Your Bridge To Trusted
          Legal Solutions
        </p>
        <p className="font-urbanist font-normal text-[#162766] text-[12px] min-[360px]:text-[14px] min-[375px]:text-[16px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] leading-[24px] 2xl:leading-[30px] ">
          C2A bridges the gap between victims seeking justice and the right
          legal experts they need. We transform overwhelming choices into
          tailored connections, isolated clients into empowered voices, and
          complex legal challenges into clear, guided pathways toward
          resolution.
        </p>
      </div>

      {/* 4. Left-Bottom Button */}

      <a
        href="/about-us"
        className="
        
  absolute top-[353px] md:top-[80%] left-[7%] md:left-[5%] lg:left-[2%] lg:bottom-[3%] xl:bottom-[1%]
  z-20 group bg-[#fbc02d] text-[#1a237e] rounded-xl
  lg:rounded-3xl font-urbanist font-semibold
  text-[13px] md:text-[16px] lg:text-[18px]  2xl:text-[24px]
  inline-flex items-center justify-center  gap-1 md:gap-2 whitespace-nowrap 2xl:gap-4
  shadow-lg shadow-yellow-500/20
  hover:-translate-y-1 transition-transform duration-200
  min-[360px]:min-w-[200px] min-[360px]:min-h-[50px]   min-[375px]:min-w-[210px] min-[375px]:min-h-[50px]
  min-w-[180px] h-[52px]
  md:min-w-[400px] md:h-[72px]
  lg:min-w-[210px] lg:h-[90px]  xl:min-w-[270px]  xl:min-h-[90px]  
"
      >
        <span className="lg:hidden">Know more</span>
        <span className=" sm:inline">About Us</span>
        <div className="bg-[#1a237e] w-[25px] h-[25px] lg:w-[50px] lg:h-[50px] rounded-lg flex-shrink-0 flex items-center justify-center group-hover:bg-opacity-90">
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
    </div>
  );
};

export default AboutUs;
