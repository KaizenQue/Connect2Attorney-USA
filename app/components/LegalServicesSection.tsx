import React from "react";

const LegalServicesSection = () => {
  const cards = [
    {
      title: "Deep Expertise",
      subtitle: "Brand name",
      text: " Depo-Provera, Depo-SubQ Provera, or authorized generic forms.",
      imageSrc: "/AUI1.png",
    },
    {
      title: "Personalized Service",
      subtitle: "Brand name",
      text: " Depo-Provera, Depo-SubQ Provera, or authorized generic forms.",
      imageSrc: "/AUI2.png",
    },
    {
      title: "Integrity\nand Ethics",

      subtitle: "Brand name",
      text: " Depo-Provera, Depo-SubQ Provera, or authorized generic forms.",
      imageSrc: "/AUI3.png",
    },
    {
      title: "No Fee Until You Win",
      subtitle: "Brand name",
      text: " Depo-Provera, Depo-SubQ Provera, or authorized generic forms.",
      imageSrc: "/AUI4.png",
    },
  ];

  return (
    <section className="bg-white font-sans max-w-[1560px] mx-auto">
      <div
        className="
          w-full
          px-4
          sm:px-6
          md:px-8
          lg:px-12
          xl:px-16
          2xl:px-24
          py-6
          sm:py-8
          md:py-10
        "
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* --- LEFT COLUMN --- */}
          <div className="flex flex-col">
            <h1
              className="
                font-noto-serif font-normal capitalize
                text-[#1B264F]
                mb-6 lg:mb-8

                text-[28px] leading-[34px]
                sm:text-[32px] sm:leading-[38px]
                md:text-[40px] md:leading-[46px]
                lg:text-[44px] lg:leading-[52px]
                xl:text-[56px] xl:leading-[64px]
                2xl:text-[60px] 2xl:leading-[70px]
              "
            >
              <span className="text-[#F2C037]">What Sets</span> Us Apart
            </h1>

            <div className="grid grid-cols-2 gap-3 xs:gap-4 sm:gap-6 lg:auto-rows-fr">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="
                    bg-[#F2F4F8]
                    p-3 sm:p-4 md:p-5 lg:p-4 xl:p-6
                    rounded-2xl
                    flex flex-col
                    gap-3 lg:gap-3 xl:gap-4
                    h-full
                    min-h-[120px] sm:min-h-[150px] md:min-h-[170px] lg:min-h-[170px] xl:min-h-[200px] 2xl:min-h-[220px]
                  "
                >
                  {/* ===== Top Row: Title + Icon ===== */}
                  <div className="flex items-start gap-3">
                 <h3
  className="
    flex-1
    font-noto-serif
    font-semibold
    text-[#162766]

    text-[15px] sm:text-[15px] md:text-[20px] lg:text-[19px] xl:text-[24px]
    leading-[22px] sm:leading-[26px] md:leading-[30px] lg:leading-[28px] xl:leading-[34px]
    whitespace-pre-line
  "
>
  {card.title}
</h3>


                    <div
                      className="
                        flex items-center justify-center gap-[10px] shrink-0

                        w-[52px] h-[50px]
                        sm:w-[60px] sm:h-[56px]
                        md:w-[68px] md:h-[64px]
                        lg:w-[54px] lg:h-[50px]
                        xl:w-[70px] xl:h-[77px]

                        p-[10px]

                        rounded-[14px]
                        lg:rounded-[16px]
                        xl:rounded-[20px]

                        border border-white
                        bg-[#162766]

                        shadow-[0_7.564px_11.346px_-2.269px_rgba(0,0,0,0.10)]
                      "
                    >
                      <img
                        src={card.imageSrc}
                        alt={card.title}
                        className="
                          w-[28px] h-[22px]
                          sm:w-[34px] sm:h-[26px]
                          md:w-[40px] md:h-[30px]
                          lg:w-[40px] lg:h-[30px]
                          xl:w-[53px] xl:h-[40px]

                          shrink-0
                          object-contain
                        "
                      />
                    </div>
                  </div>

                  {/* ===== Text ===== */}
                  <p
                    className="
                      flex-1
                      font-urbanist
                      font-normal
                      text-[#162766]

                      text-[12px] sm:text-[12px] md:text-[15px] lg:text-[14px] xl:text-[18px]
                      leading-[18px] sm:leading-[20px] md:leading-[22px] lg:leading-[20px] xl:leading-normal
                    "
                  >
                    {card.subtitle}
                    <br />
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="hidden lg:flex flex-col lg:pt-2 gap-8 xl:gap-10">
            <p className="font-urbanist font-normal text-[#142A66] text-[18px] leading-[28px] mb-0 max-w-[520px] xl:max-w-[620px]">
              We offer a wide range of legal services to address your unique
              needs. Whether you're seeking justice in a personal injury case or
              joining a class action lawsuit, we're here to guide you every step
              of the way.
            </p>

            <div className="relative w-full h-[320px] lg:h-[300px] xl:h-[400px]">
              <div className="w-full h-full rounded-tl-[40px] rounded-br-[40px] rounded-tr-[30px] overflow-hidden flex justify-start items-start">
                <img
                  src="/AU2Mobile.png"
                  alt="Office Meeting"
                  className="block max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalServicesSection;
