import React from "react";
import Image from "next/image";

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-white text-[#1a237e] py-[10px] lg:px-5 px-[16px] lg:px-[30px] md:px-10 font-sans mx-auto">
      {/* Header Section */}

      <header className="flex flex-col md:flex-row justify-between items-start mb-[30px] gap-[30px] lg:px-[30px]">
        <div className="max-w-2xl">
          <h1 className="font-noto-serif font-normal text-[30px] md:text-[40px] lg:text-[60px] mb-[10px] leading-[70px] tracking-[0px] align-middle capitalize">
            How It <span className="text-[#F2C438]">Works</span>
          </h1>

          <p className="font-urbanist font-normal text-[16px] lg:text-[18px] leading-[25px] tracking-[0px]  text-slate-500">
            Free, confidential case reviews. Serving all 50 states. No fees
            unless you win.
          </p>
        </div>

        <a
          href="/contact-us"
          className="
    group bg-[#fbc02d] text-[#1a237e]
    px-[15px] py-[11px] lg:px-[30px] lg:py-[15px]
    rounded-2xl
    font-urbanist font-semibold
    text-[16px] lg:text-[18px]
    inline-flex items-center md:gap-2 lg:gap-4
    shadow-lg shadow-yellow-500/20
    hover:-translate-y-1 transition-transform duration-200
    w-[256px] h-[50px]
    md:w-[270px] md:h-[108px]
    justify-between
  "
        >
          {/* TEXT */}
          <span className="md:flex  md:flex-col leading-tight text-[16px] md:text-[18px] lg:text-[18px]">
            <span>Start My Free</span>
            <span className="md:mt-1">Case Review</span>
          </span>

          {/* ICON */}
          <div
            className="
      bg-[#1a237e]
      w-[25px] h-[25px]
      md:w-[50px] md:h-[50px]
      rounded-lg
      flex items-center justify-center
      group-hover:bg-opacity-90
    "
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fbc02d"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
        </a>
      </header>

      {/* Grid Layout */}

      {/* first row */}
      <div className="grid grid-cols-[1fr_0.5fr] md:grid-cols-[1fr_0.5fr] lg:grid-cols-[1fr_0.5fr_1fr_1fr] gap-[20px] mb-[20px] col-span-2  lg:px-[30px] group ">
        <div
          className="lg:col-span-2 lg:col-start-1 flex items-center justify-center shrink-0 rounded-[20px] bg-[#162766] h-[98px] md:h-[150px] ] lg:h-[200px] w-full min-w-0 p-[10px]
    sm:px-5 sm:py-5
    md:px-7 md:py-6
    lg:px-[44px] lg:py-[27px]   
"
        >
          {/* Glass effect inner layer */}
          <div className="relative rounded-[20px] w-full h-full flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110">
            {/* GLASS BORDER (broken bottom-right) */}
            <div
              className="absolute inset-0 rounded-[20px] pointer-events-none"
              style={{
                padding: "0.756px",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.6) 65%, rgba(255,255,255,0) 85%)",
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                boxShadow: "0 7.564px 11.346px -2.269px rgba(0,0,0,0.10)",
              }}
            />

            {/* ORIGINAL CARD (unchanged) */}
            <div
              className="
      relative rounded-[19px] w-full h-full
      bg-gradient-to-b from-white/5 to-white/0
      shadow-[inset_0_0_0.5px_rgba(255,255,255,0.35)]
      flex items-center justify-center
    "
            >
              {/* your existing inner glow */}
              <div
                className="
        pointer-events-none
        absolute inset-[1px]
        rounded-[19px]
        bg-gradient-to-br
        from-white/18
        via-transparent
        to-transparent
        opacity-40
      "
              />

              <div className="flex items-center px-3 md:px-6 lg:px-8 w-full h-full">
             <div
  className="
    bg-[#fbc02d]
    text-[#162766]
    font-urbanist
    font-normal
    tracking-[5px]
    text-center

    text-[14px] md:text-[20px] lg:text-[50px]

    w-[30px] h-[30px]
    md:w-14 md:h-14
    lg:w-[102px] lg:h-[102px]

    rounded-full
    flex items-center justify-center
    shrink-0
    mr-3 md:mr-5
  "
>
  01
</div>


                <div className="flex flex-col justify-center">
                  <h3 className="font-urbanist font-semibold text-[14px] md:text-[20px] lg:text-[20px] xl:text-[24px] text-white leading-[100%] tracking-[0%] align-middle mb-2">
                    Share Your <br /> Case
                  </h3>

                  <p className="text-white/70  text-[11px] md:text-[16px]  lg:text-[18px] ">
                    Takes just 2 minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image: Handshake */}

        <div
          className="
    relative
    rounded-xl
    overflow-hidden
    
   w-full min-w-0

    h-[98px]
    sm:h-[180px]
    md:h-[150px]
    lg:h-[200px]
  "
        >
          <Image
            src="/LegalCase.svg"
            alt="Legal Case Review"
            fill
            className="w-full h-full object-cover  rounded-xl transition-transform duration-500 ease-out  group-hover:scale-110"
          />
        </div>

        <div
          className="
    relative  hidden md:hidden lg:block
    rounded-xl
    overflow-hidden
       w-full min-w-0

    h-[98px]
    sm:h-[180px]
    md:h-[200px]
  "
        >
          <Image
            src="/Handshake.svg"
            alt="Legal Case Review"
            fill
            className="w-full h-full object-cover  rounded-xl transition-transform duration-500 ease-out  group-hover:scale-110"
          />
        </div>
      </div>

      {/* second row */}
      <div
        className="grid grid-cols-[0.5fr_1fr] md:grid-flow-col md:grid-cols-[0.5fr_1fr] lg:grid-cols-[1fr_0.5fr_1fr_1fr] gap-[20px]  mb-[20px] col-span-2  lg:px-[30px] 
      group"
      >
        <div
          className="
    md:order-0 order-0
    relative                
    rounded-xl
    w-full min-w-0
    lg:h-[200px]
    overflow-hidden        
   
  "
        >
          {/* MOVING IMAGE LAYER */}
          <div
            className="
      absolute inset-0        
      transition-transform
      duration-700
      ease-out 
      
    "
          >
            <Image
              src="/img21.svg"
              alt="Legal Case Review"
              width={338}
              height={200}
              className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500 ease-out"
            />
          </div>
        </div>

        <div
          className="lg:col-span-2 lg:col-start-2 md:col-start-2 md:col-span-1 flex items-center justify-center shrink-0 rounded-[20px] bg-[#162766] h-[98px] md:h-[150px] lg:h-[200px] w-full min-w-0
 p-[10px] sm:px-5 sm:py-5
    md:px-7 md:py-6 lg:px-[44px] lg:py-[27px]  shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
        >
          {/* Glass effect inner layer */}
          <div className="relative rounded-[20px] w-full h-full flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110">
            {/* GLASS BORDER (broken bottom-right) */}
            <div
              className="absolute inset-0 rounded-[20px] pointer-events-none"
              style={{
                padding: "0.756px",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.6) 65%, rgba(255,255,255,0) 85%)",
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                boxShadow: "0 7.564px 11.346px -2.269px rgba(0,0,0,0.10)",
              }}
            />

            {/* ORIGINAL CARD (unchanged) */}
            <div
              className="
      relative rounded-[19px] w-full h-full
      bg-gradient-to-b from-white/5 to-white/0
      shadow-[inset_0_0_0.5px_rgba(255,255,255,0.35)]
      flex items-center justify-center
    "
            >
              {/* your existing inner glow */}
              <div
                className="
        pointer-events-none
        absolute inset-[1px]
        rounded-[19px]
        bg-gradient-to-br
        from-white/18
        via-transparent
        to-transparent
        opacity-40
      "
              />

              <div className="flex items-center px-3 md:px-6 lg:px-8 w-full h-full">
              <div
  className="
    bg-[#fbc02d]
    text-[#162766]
    font-urbanist
    font-normal
    tracking-[5px]
    text-center

    text-[14px] md:text-[20px] lg:text-[50px]

    w-[30px] h-[30px]
    md:w-14 md:h-14
    lg:w-[102px] lg:h-[102px]

    rounded-full
    flex items-center justify-center
    shrink-0
    mr-3 md:mr-5
  "
>
  02
</div>


                <div className="flex flex-col justify-center">
                  <h3 className="font-urbanist font-semibold text-[14px] md:text-[20px] lg:text-[20px] xl:text-[24px] text-white leading-[100%] tracking-[0%] align-middle mb-2">
                    Matched With <br />
                    an Attorney
                  </h3>

                  <p className="text-white/70 text-[11px] md:text-[16px] lg:text-[16px]">
                    Specialist in your lawsuit type
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image: Contract */}

        <div className="rounded-xl overflow-hidden  w-full h-[200px] min-w-0 hidden md:hidden lg:block overflow-hidden group">
          <Image
            src="/img22.svg"
            alt="Legal Case Review"
            className="w-full h-full object-cover rounded-xl transition-transform duration-500 ease-out group-hover:scale-110"
            width={338}
            height={200}
          />
        </div>
      </div>

      <div className="grid  grid-cols-[1fr_0.5fr] md:grid-cols-[1fr_0.5fr] lg:grid-cols-[1fr_1fr_0.5fr_1fr] gap-[20px] mb-[20px] col-span-2  lg:px-[30px] group">
        {/* Image: Scales */}

        <div
          className="md:order-1 lg:order-0 order-1 rounded-xl overflow-hidden w-full min-w-0
 lg:h-[200px]"
        >
          <Image
            src="/img31.svg"
            alt="Legal Case Review"
            className="w-full h-full object-cover  transition-transform duration-500 ease-out group-hover:scale-110"
            width={338}
            height={200}
          />
        </div>

        {/* Image: Desk */}

        <div className="rounded-xl overflow-hidden h-[200px] hidden md:hidden lg:block">
          <Image
            src="/img32.svg"
            alt="Legal Case Review"
            className="w-full h-full object-cover  transition-transform duration-500 ease-out group-hover:scale-110"
            width={338}
            height={200}
          />
        </div>

        {/* 03: Pursue Your Claim */}

        <div
          className="lg:col-span-2 lg:col-start-3.5  lg:order-3 flex items-center justify-center shrink-0 rounded-[20px] bg-[#162766] h-[98px] md:h-[150px] lg:h-[200px] w-full min-w-0
 p-[10px] sm:px-5 sm:py-5
    md:px-7 md:py-6
    lg:px-[44px] lg:py-[27px] shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
        >
          {/* Glass effect inner layer */}
          <div className="relative rounded-[20px] w-full h-full flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110">
            {/* GLASS BORDER (broken bottom-right) */}
            <div
              className="absolute inset-0 rounded-[20px] pointer-events-none"
              style={{
                padding: "0.756px",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.6) 65%, rgba(255,255,255,0) 85%)",
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                boxShadow: "0 7.564px 11.346px -2.269px rgba(0,0,0,0.10)",
              }}
            />

            {/* ORIGINAL CARD (unchanged) */}
            <div
              className="
      relative rounded-[19px] w-full h-full
      bg-gradient-to-b from-white/5 to-white/0
      shadow-[inset_0_0_0.5px_rgba(255,255,255,0.35)]
      flex items-center justify-center
    "
            >
              {/* your existing inner glow */}
              <div
                className="
        pointer-events-none
        absolute inset-[1px]
        rounded-[19px]
        bg-gradient-to-br
        from-white/18
        via-transparent
        to-transparent
        opacity-40
      "
              />

              {/* CONTENT (UNCHANGED) */}
              <div className="flex items-center px-3 md:px-6 lg:px-8 w-full h-full">
              <div
  className="
    bg-[#fbc02d]
    text-[#162766]
    font-urbanist
    font-normal
    tracking-[5px]
    text-center

    text-[14px] md:text-[20px] lg:text-[50px]

    w-[30px] h-[30px]
    md:w-14 md:h-14
    lg:w-[102px] lg:h-[102px]

    rounded-full
    flex items-center justify-center
    shrink-0
    mr-3 md:mr-5
  "
>
  03
</div>


                <div className="flex flex-col justify-center">
                  <h3 className="font-urbanist font-semibold text-[14px] md:text-[20px] lg:text-[20px] xl:text-[24px] text-white leading-[100%] mb-2">
                    Pursue Your <br /> Claim
                  </h3>
                  <p className="text-white/70 text-[11px] md:text-[16px]">
                    No fees unless you win.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
