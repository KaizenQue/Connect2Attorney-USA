import React from "react";

const MassTortCard = () => {
  const pills = [
    { color: "navy" },
    { color: "yellow" },
    { color: "navy" },
    { color: "yellow" },
    { color: "navy" },
  ];

  return (
<section
  className="
    w-full
    bg-white
    font-sans

    

    sm:pr-6 sm:pb-2
    md:pr-10 md:pb-14
    lg:pr-14 lg:pb-16
    xl:pr-20 xl:pb-20
    2xl:pr-24 2xl:pb-24
  "
>
     <div className="block lg:hidden">
  <div
    className="
      relative
      mx-auto
      bg-[#f2f4f6]
      flex items-center
      overflow-hidden
      min-h-[159px] sm:min-h-[159px] md:min-h-[300px]
      [clip-path:polygon(0_0,100%_0,100%_calc(100%-40px),calc(100%-40px)_100%,0_100%)]
    "
  >
    <div
      className="
        relative z-10
        w-full
        max-w-[900px]
        pl-4 pr-16 sm:pr-28 md:pr-36
        text-[#162766]/80
        font-urbanist font-light capitalize
        text-[clamp(16px,3.5vw,18px)]
        sm:text-[clamp(18px,3vw,20px)]
        md:text-[clamp(22px,2.8vw,26px)]
        leading-[1.45]
      "
    >
      <h1 className="font-urbanist text-[18px] md:text-[35px] font-normal capitalize">
       We specialize in mass tort cases, supporting individuals harmed by
      defective products, dangerous drugs, or corporate misconduct.
      </h1>
     
    </div>

    <div
      className="
        absolute
        top-[-12px] right-[10px]
        sm:top-[-20px] sm:right-[90px]
        md:right-[16px]
        flex gap-3
        scale-75 sm:scale-90
        origin-top-right
        pointer-events-none
      "
    >
      <div className="flex flex-col gap-3">
        {pills.map((pill, i) => (
          <div
            key={`m-left-${i}`}
            className="
              w-[14px] sm:w-[16px]
              h-[52px] sm:h-[58px]
              rounded-full
            "
            style={{
              backgroundColor:
                pill.color === "navy" ? "#172a5a" : "#f5c946",
            }}
          />
        ))}
      </div>

      <div className="flex flex-col gap-3 pt-8 sm:pt-10">
        {pills.map((pill, i) => (
          <div
            key={`m-right-${i}`}
            className="
              w-[14px] sm:w-[16px]
              h-[52px] sm:h-[58px]
              rounded-full
            "
            style={{
              backgroundColor:
                pill.color === "navy" ? "#172a5a" : "#f5c946",
            }}
          />
        ))}
      </div>
    </div>
  </div>
</div>


      <div className="hidden lg:block">
        <div
          className="
            relative
            mx-auto
            bg-[#f2f4f6]
            flex items-center
            overflow-hidden
            min-h-[320px] xl:min-h-[280px]
            [clip-path:polygon(0_0,100%_0,100%_calc(100%-80px),calc(100%-80px)_100%,0_100%)]
          "
        >
          {/* TEXT */}
          <div
            className="
              relative z-10
              w-full
              max-w-[900px] lg:max-w-[980px] xl:max-w-[1240px]
              px-5 sm:px-8 md:px-12
              lg:pl-16 lg:pr-32
              xl:pl-14 xl:pr-38
              2xl:pl-14 2xl:pr-14
              text-[#162766]/80
              font-urbanist font-light capitalize
              text-[clamp(16px,3.5vw,18px)]
              sm:text-[clamp(18px,3vw,20px)]
              md:text-[clamp(22px,2.8vw,26px)]
              lg:text-[clamp(28px,2.4vw,36px)]
              xl:text-[clamp(36px,2.2vw,44px)]
              2xl:text-[clamp(44px,2vw,50px)]
              leading-[1.35]
            "
          >
            <h1 className="font-urbanist  font-normal capitalize">
       We specialize in mass tort cases, supporting individuals harmed by
      defective products, dangerous drugs, or corporate misconduct.
      </h1>
          </div>

          {/* PATTERN */}
          <div
            className="
              absolute
              lg:bottom-[-25px] lg:right-[80px]
              xl:right-[120px]
              2xl:right-[160px]
              flex gap-3
              lg:scale-100 xl:scale-110
              origin-bottom-right
              pointer-events-none
            "
          >
            <div className="flex flex-col gap-3">
              {pills.map((pill, i) => (
                <div
                  key={`d-left-${i}`}
                  className="
                    w-[14px] sm:w-[16px]
                    h-[52px] sm:h-[58px] lg:h-[65px]
                    rounded-full
                  "
                  style={{
                    backgroundColor:
                      pill.color === "navy" ? "#172a5a" : "#f5c946",
                  }}
                />
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-8 sm:pt-10 lg:pt-12">
              {pills.map((pill, i) => (
                <div
                  key={`d-right-${i}`}
                  className="
                    w-[14px] sm:w-[16px]
                    h-[52px] sm:h-[58px] lg:h-[65px]
                    rounded-full
                  "
                  style={{
                    backgroundColor:
                      pill.color === "navy" ? "#172a5a" : "#f5c946",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MassTortCard;
