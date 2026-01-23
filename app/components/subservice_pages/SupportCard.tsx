/* eslint-disable react/display-name */
import React from "react";
import Link from "next/link";

const MagnifyingGlassIcon = React.memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="17"
    viewBox="0 0 18 17"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.6907 4.18009C12.9396 4.84724 13.0759 5.56704 13.0759 6.31755C13.0759 7.80807 12.5399 9.17913 11.6451 10.2589L17.4418 15.8602L16.4135 16.8539L10.6167 11.2526C9.49937 12.1172 8.08047 12.6351 6.53791 12.6351C2.92953 12.6351 0 9.80411 0 6.3176C0 2.83108 2.92977 7.0079e-05 6.53791 7.0079e-05C8.56007 7.0079e-05 10.3688 0.889283 11.5688 2.28501L10.535 3.28308C9.60391 2.13931 8.15854 1.40456 6.53784 1.40456C3.73179 1.40456 1.45342 3.60611 1.45342 6.3176C1.45342 7.01371 1.60331 7.67733 1.87493 8.27688L5.31144 5.10969C5.5976 4.84634 6.04819 4.85162 6.32707 5.12198L7.99405 6.73101L13.5064 1.40449H12.3545V0H15.2615C15.663 0 15.9882 0.314247 15.9882 0.702247V3.51124H14.5347V2.39818L12.6907 4.18009Z"
      fill="#F2C438"
    />
  </svg>
));

const DocumentIcon = React.memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="23"
    viewBox="0 0 20 23"
    fill="none"
  >
    <path
      d="M6.11128 20.1207C4.52273 20.1207 3.23029 18.8283 3.23029 17.2398V3.69531C2.23878 3.81395 1.51155 4.69647 1.60123 5.69378L2.86184 19.9039C2.90332 20.3968 3.13577 20.8443 3.5177 21.1626C3.85528 21.4442 4.27291 21.5947 4.70982 21.5947C4.76287 21.5947 4.81688 21.5928 4.86993 21.5879L15.5238 20.6418C15.951 20.6032 16.3378 20.4151 16.6416 20.1209H6.11025L6.11128 20.1207Z"
      fill="#F2C438"
    />
    <path
      d="M15.0938 4.31599C15.0938 4.52336 15.2625 4.69311 15.4709 4.69311H18.3153C18.2555 4.60919 18.1909 4.52625 18.1166 4.45101L15.3253 1.66657C15.2539 1.5952 15.1748 1.53443 15.0938 1.47656L15.0938 4.31599Z"
      fill="#F2C438"
    />
    <path
      d="M15.4642 5.71295C14.6888 5.71295 14.058 5.08216 14.058 4.3067V1.12201C14.0416 1.12201 14.0261 1.11719 14.0098 1.11719H6.10185C5.08044 1.11719 4.25 1.94763 4.25 2.96904V17.235C4.25 18.2564 5.08044 19.0868 6.10185 19.0868H16.8011C17.8225 19.0868 18.653 18.2564 18.653 17.235L18.6539 5.75348C18.6539 5.73998 18.6501 5.72648 18.6501 5.71297L15.4642 5.71295ZM9.01558 6.26465C9.01558 5.9811 9.2461 5.75058 9.52966 5.75058H10.5877V4.6925C10.5877 4.40895 10.8182 4.17843 11.1018 4.17843H12.0731C12.3566 4.17843 12.5871 4.40895 12.5871 4.6925V5.75058H13.6452C13.9288 5.75058 14.1593 5.98109 14.1593 6.26465V7.23591C14.1593 7.51947 13.9288 7.74998 13.6452 7.74998H12.5871V8.80806C12.5871 9.09161 12.3566 9.32213 12.0731 9.32213H11.1018C10.8182 9.32213 10.5877 9.09162 10.5877 8.80806V7.74998H9.52966C9.2461 7.74998 9.01558 7.51947 9.01558 7.23591V6.26465ZM14.2346 17.013H7.03262C6.74906 17.013 6.51855 16.7825 6.51855 16.499C6.51855 16.2154 6.74906 15.9849 7.03262 15.9849H14.2346C14.5181 15.9849 14.7487 16.2154 14.7487 16.499C14.7487 16.7825 14.5182 17.013 14.2346 17.013ZM16.2919 14.4407H7.03262C6.74906 14.4407 6.51855 14.2102 6.51855 13.9266C6.51855 13.6431 6.74906 13.4126 7.03262 13.4126H16.2919C16.5754 13.4126 16.806 13.6431 16.806 13.9266C16.806 14.2102 16.5754 14.4407 16.2919 14.4407ZM16.2919 11.8684H7.03262C6.74906 11.8684 6.51855 11.6378 6.51855 11.3543C6.51855 11.0707 6.74906 10.8402 7.03262 10.8402H16.2919C16.5754 10.8402 16.806 11.0707 16.806 11.3543C16.806 11.6378 16.5754 11.8684 16.2919 11.8684Z"
      fill="#F2C438"
    />
  </svg>
));

const MoneyBagIcon = React.memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="22"
    viewBox="0 0 20 22"
    fill="none"
  >
    <g clipPath="url(#clip0_1041_3424)">
      <path
        d="M14.1328 5.24219C15.7002 6.72556 17.5742 9.06205 18.0547 11.5186C19.1117 16.8685 15.624 20.1012 10.1152 20.0352C0.220859 20.0682 -0.0567272 10.5033 6.21191 5.36816C8.62943 5.96417 11.2595 5.83331 13.6826 5.5C13.8808 5.46397 14.0367 5.36827 14.1328 5.24219ZM10.1152 8.11914C9.78499 8.11923 9.51465 8.38944 9.51465 8.71973V9.23047C6.80188 9.84784 7.36185 13.1112 10.1152 13.1279C11.6872 13.1805 11.6872 14.6354 10.1152 14.6895C9.47877 14.6894 8.92688 14.3235 8.92676 13.9092C8.92676 13.579 8.65628 13.3088 8.32617 13.3086C7.98985 13.3086 7.72559 13.5788 7.72559 13.9092C7.72566 14.828 8.48179 15.6089 9.51465 15.8252V16.3359C9.53005 17.1267 10.7004 17.1222 10.7158 16.3359V15.8252C11.7488 15.609 12.5116 14.8281 12.5117 13.9092C12.5117 12.8161 11.4365 11.9268 10.1152 11.9268C9.47881 11.9267 8.92601 11.5608 8.92578 11.1465C8.92578 10.7321 9.47868 10.3653 10.1152 10.3652C10.7519 10.3652 11.3105 10.7321 11.3105 11.1465C11.3258 11.9345 12.495 11.936 12.5117 11.1465C12.5117 10.2275 11.7488 9.44669 10.7158 9.23047V8.71973C10.7158 8.38938 10.4456 8.11914 10.1152 8.11914ZM10.7754 0.102539C11.2933 -0.0776368 11.8343 0.130754 12.2832 0.396484C12.9393 -0.112172 13.9589 0.391538 13.8809 1.23828C13.8746 1.29594 13.8139 2.11149 13.4844 3.12402C14.3476 3.04753 14.5789 4.15568 13.6768 4.31348C11.3272 4.70385 8.91853 4.63778 6.54785 4.31348C5.55992 4.11374 5.95034 2.93289 6.86621 3.1416C6.56605 2.3491 6.39145 1.62876 6.36133 1.23828C6.2968 0.376527 7.2937 -0.106152 7.96484 0.396484C8.41372 0.132247 8.94583 -0.0776306 9.4668 0.102539L10.0312 0.276367C10.1679 0.337785 10.634 0.128247 10.7754 0.102539Z"
        fill="#F2C438"
      />
    </g>
    <defs>
      <clipPath id="clip0_1041_3424">
        <rect width="20" height="21.3699" fill="white" />
      </clipPath>
    </defs>
  </svg>
));
interface SupportCardProps {
  title: string;
  description: string;
}

const SupportCard = ({ title, description }: SupportCardProps) => {
  const scrollToNextSection = () => {
    const el = document.getElementById("stepper-form");
    if (!el) return;

    const yOffset = -80; // header height
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };
  return (
    <>
      {/*================= MOBILE VERSION ===================== */}
      <div className="md:hidden w-full px-4 py-6 sm:py-8 font-sans">
        <div
          className="
      relative
      w-[358px]
      h-[271px]
      max-w-full
      mx-auto
      rounded-xl
      p-[20px]
      bg-no-repeat
      bg-contain
      bg-center
      overflow-hidden
    "
          style={{ backgroundImage: "url('/bgmobilecompletecard.svg')" }}
        >
          <h1
            className="
        font-noto-serif
        text-[#F2C438]
        text-[22px] sm:text-[25px]
        font-medium
        leading-normal
        pt-[4px]
      "
          >
            {title}
          </h1>

          {/* Paragraph */}
          <p
            className="
        font-urbanist
        text-white
        text-[14px] sm:text-[15px]
        font-medium
        leading-[19px] sm:leading-[20px]
        mt-[12px]
        pr-[20px]
      "
          >
            {description}
          </p>

          {/* Button text – locked to yellow background */}
       
            <button
              onClick={scrollToNextSection}
              className="
          absolute
          bottom-[12px]
          left-[20px]
          text-[#162766]
          text-center
          font-urbanist
          text-[16px] sm:text-[18px]
          font-semibold
          leading-normal
          bg-transparent
          p-0
          whitespace-nowrap
        "
            >
              Check if you Qualify
            </button>
        
        </div>
      </div>

      <div
        id="support"
        className="hidden md:flex w-full justify-center bg-white font-sans px-4 md:px-6 lg:px-8 xl:px-10 py-8"
      >
        <div
          className="
      relative w-full
      bg-[#162766]
      rounded-3xl
      shadow-2xl
      overflow-hidden
      flex items-center

      min-h-[220px]
      md:min-h-[240px]
      lg:min-h-[255px]
      xl:min-h-[270px]
    "
        >
          {/* Background */}
          <div className="absolute inset-0 pointer-events-none bg-[url('/still-life-with-scales-justice1bg.svg')] bg-no-repeat bg-contain bg-right">
            <div className="absolute inset-0 bg-gradient-to-r from-[#19224D] via-[#162766]/85 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-20 w-full md:w-[80%] lg:w-[68%] xl:w-[60%] px-6 md:px-8 lg:px-10 xl:px-12 py-5 md:py-6 lg:py-7">
            <h1
              className="
    font-noto-serif
    text-white
    capitalize
    font-medium

    text-[24px]
    md:text-[26px]
    lg:text-[28px]
    xl:text-[30px]

    leading-tight
    mb-2.5

    whitespace-nowrap
  "
            >
              {title}
            </h1>

            <p
              className="
          font-urbanist
          text-[#F9F9F9]
          capitalize
          font-normal
          text-[14px]
          md:text-[15px]
          lg:text-[16px]
          leading-[22px]
          max-w-3xl
          mb-4
        "
            >
              {description}
            </p>

            <div className="flex flex-nowrap items-center gap-4 lg:gap-5 mb-4">
              <div className="flex items-center gap-2">
                <MagnifyingGlassIcon />
                <p className="font-urbanist text-white text-[13px] md:text-[14px] lg:text-[15px] whitespace-nowrap">
                  Analyze Your Case
                </p>
              </div>

              <div className="flex items-center gap-2">
                <DocumentIcon />
                <p className="font-urbanist text-white text-[13px] md:text-[14px] lg:text-[15px] whitespace-nowrap">
                  Help Secure Medical Records
                </p>
              </div>

              <div className="flex items-center gap-2">
                <MoneyBagIcon />
                <p className="font-urbanist text-white text-[13px] md:text-[14px] lg:text-[15px] whitespace-nowrap">
                  Maximize Your Chance For Compensation
                </p>
              </div>
            </div>

            <Link href="/contact-us">
              <button
                className="
            inline-flex items-center justify-center
            bg-[#F2C94C]
            font-urbanist
            text-[#162766]
            text-[13px]
            md:text-[14px]
            font-bold
            uppercase
            py-2.5 px-6
            rounded-lg
            transition-all duration-200 ease-out
            hover:shadow-xl hover:-translate-y-[1px]
            active:translate-y-0
          "
              >
                Start a Free Case Review
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportCard;
