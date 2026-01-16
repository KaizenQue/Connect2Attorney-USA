import React from "react";

const ContactCardsSection = () => {
  const contactData = [
    {
      id: 1,
      title: "Give us a Call",
      subtitle: "(888) 202-1350",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-6 h-6 lg:w-7 lg:h-7 fill-current text-[#F3C442]"
        >
          <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Drop us an Email",
      subtitle: "connect2attorney.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-6 h-6 lg:w-7 lg:h-7 fill-current text-[#F3C442]"
        >
          <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-10 lg:py-14 md:mb-10 font-sans">
      <div className="max-w-[1400px] mx-auto px-6">
        <div
          className="
            grid
            grid-cols-1
            gap-6

            lg:grid-cols-[1.1fr_1fr_1fr]
            lg:gap-8
            items-center
          "
        >
          {/* ===== LEFT TITLE ===== */}
          <div className="flex items-center">
            <h2
              className="
                text-[#162766]
                font-['Noto_Serif']
                font-normal
                capitalize

                text-[32px]
                leading-[40px]

                sm:text-[40px]
                sm:leading-[52px]

                xl:text-[50px]
                xl:leading-[64px]
              "
            >
              Reach out to us
            </h2>
          </div>

          {/* ===== RIGHT CARDS ===== */}
          {contactData.map((item) => (
            <ContactCard
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ================= Card =================
const ContactCard = ({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}) => {
  return (
    <div
      className="
        flex items-center gap-4

        w-full
        h-[88px]
        sm:h-[96px]
        lg:h-[110px]

        px-5 lg:px-7

        rounded-[16px]
        bg-white

        shadow-[0_8px_24px_rgba(0,0,0,0.08)]
      "
    >
      {/* Icon Box */}
      <div
        className="
          w-[44px] h-[44px]
          lg:w-[48px] lg:h-[48px]

          rounded-[10px]
          border border-[#F3C442]

          flex items-center justify-center
          shrink-0

          shadow-[0_2px_6px_rgba(0,0,0,0.08)]
          bg-white
        "
      >
        {icon}
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <h3 className="font-noto-serif font-semibold text-[#162766] text-[16px] lg:text-[18px] leading-tight">
          {title}
        </h3>
        <p className="font-urbanist text-[#9A9A9A] text-[14px] lg:text-[15px] leading-snug">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default ContactCardsSection;
