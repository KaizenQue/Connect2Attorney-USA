import React from "react";
import Form from "../subserviceform/FormMain";
import Image from "next/image";

type LawsuitsHeroCardProps = {
  heroTitle: React.ReactNode;
  heroImage: string;
  imageAlt?: string;
  imageClassName?: string;
};

const LawsuitsHeroCard = ({
  heroTitle,
  heroImage,
  imageAlt = "Lawsuit hero background",
  imageClassName = "object-cover scale-[1.1] md:scale-[1.12] md:translate-y-[-20px]",
}: LawsuitsHeroCardProps) => {

  // console.log(heroImage)
  return (
    <section
      className="
        relative w-full
        bg-[#162766]
        overflow-hidden
      "
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt={imageAlt}
          fill
          priority
          className={`w-full h-full ${imageClassName}`}
        />
      </div>

      {/* Content */}
      <div
        className="
          relative z-20
          mx-auto
          max-w-[1280px]
          px-4 sm:px-6 lg:px-8
          py-10 sm:py-14 lg:py-2
          flex flex-col lg:flex-row
          items-center
          gap-10 lg:gap-16
        "
      >
        {/* Left Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1
            className="
              font-noto-serif
              font-normal
              capitalize
              text-[#F2C438]
              text-[32px]
              sm:text-[38px]
              md:text-[42px]
              lg:text-[48px]
              xl:text-[50px]
              leading-tight
              lg:leading-[64px]
            "
          >
            {heroTitle}
          </h1>
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-[460px]">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawsuitsHeroCard;
