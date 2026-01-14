import React from "react";
import Form from "../subserviceform/FormMain";

const OzempicHeroCard = () => {
  return (
    <div
      className="
        relative w-full
        min-h-[520px]
        sm:min-h-[560px]
        lg:min-h-[540px]
        xl:min-h-[580px]
        2xl:min-h-[620px]
        max-h-[700px]
        overflow-hidden
        bg-[#162766]
        flex
        items-center
        justify-center
      "
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/ozempic_bg_dark.svg"
          alt="Mass tort hero background"
          className="
            w-full h-full
            object-cover
            scale-[1.12]
            translate-y-[-20px]
          "
        />
      </div>

      {/* Content Row */}
      <div
        className="
          relative z-20
          w-full h-full
          flex
          flex-col
          lg:flex-row
          items-center
          justify-center
        "
      >
        {/* Left Text */}
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
              lg:text-[45px]
              xl:text-[55px]
              leading-tight
              lg:leading-[64px]
            "
          >
            Ozempic and GLP-1
            <br />
            Drug Lawsuit
          </h1>
        </div>

        {/* Right Form — TRUE PERFECT CENTER */}
        <div
          className="
            w-full
            h-full
            flex
            items-center
            justify-center
            px-4
            sm:px-6
            lg:px-12
            xl:px-20
          "
        >
          <div className="w-full max-w-[420px]">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OzempicHeroCard;
