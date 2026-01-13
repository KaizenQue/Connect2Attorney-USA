import React from "react";
import Form from "../subserviceform/FormMain";


const OzempicHeroCard = () => {
  return (
  <div
  className="
    relative w-full
    h-[759px]
    min-h-[600px]
    max-h-[759px]
    overflow-hidden
    bg-[#162766]
  "
>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
      <img
  src="/ozempic_bg_dark.svg"
  alt="Mass tort hero background"
  className="
    w-full h-full
    object-cover
    scale-[1.23]
    translate-x-[-5px]
    translate-y-[-50px]
  "
/>

      </div>

      {/* Main Container */}
      <div
        className="
          relative z-20
          w-full h-full
          flex
          flex-col
          lg:flex-row
          items-center
          justify-center
          lg:justify-start
        "
      >
        {/* Left Text Content */}
        <div
          className="
            w-full
            text-center
            lg:text-left
            px-4
            sm:px-6
            lg:px-0
            lg:ml-[5%]
            xl:ml-[10%]
            max-w-xl
            mb-8
            lg:mb-0
          "
        >
          <h1
            className="
              font-noto-serif
              font-normal
              capitalize
              mb-4
              text-[#F2C438]
              text-[34px]
              sm:text-[42px]
              md:text-[50px]
              lg:text-[60px]
              leading-tight
              lg:leading-[70px]
            "
          >
            Ozempic and GLP-1 Drug Lawsuit
          </h1>
        </div>

        {/* Right Container – Form */}
        <div
          className="
            w-full
            flex
            justify-center
            lg:justify-end
            px-4
            sm:px-6
            lg:px-12
            xl:px-20
          "
        >
          {/* Control form width only */}
          <div className="w-full max-w-[420px]">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OzempicHeroCard;
