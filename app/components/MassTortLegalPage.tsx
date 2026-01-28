"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const eligibilityPoints = [
  {
    title: "Harmed by Defective Product or Misconduct:",
    description:
      "You experienced injury from a dangerous drug, faulty product, or corporate wrongdoing.",
  },
  {
    title: "Harmed by Defective Product or Misconduct:",
    description:
      "You experienced injury from a dangerous drug, faulty product, or corporate wrongdoing.",
  },
  {
    title: "Direct Link to Injury:",
    description:
      "Your harm must be caused by the product or action in question.",
  },
  {
    title: "Others Affected Similarly:",
    description: "There are multiple individuals with claims like yours.",
  },
];
const compensationItems = [
  {
    title: "Medical Expenses:",
    description: "Covers hospital stays, treatments, and procedures.",
  },
  {
    title: "Lost Income:",
    description:
      "Compensates for wages lost and reduced ability to earn in the future.",
  },
  {
    title: "Pain and Suffering:",
    description:
      "Pays for physical and emotional distress, and lower quality of life.",
  },
  {
    title: "Long-Term Disability:",
    description: "Pays for ongoing care and support for lasting impairments.",
  },
  {
    title: "Punitive Damages:",
    description: "Additional penalties for corporate negligence.",
  },
];

const MassTortLegalPage = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  const [isFixed, setIsFixed] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!wrapperRef.current || !ctaRef.current) return;

      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const ctaHeight = ctaRef.current.offsetHeight;
      const topOffset = 92;

      if (wrapperRect.top <= topOffset) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }

      if (wrapperRect.bottom <= ctaHeight + topOffset) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className=" bg-white
    relative
    mx-auto
    max-w-[1440px]
    2xl:max-w-[1600px]
    px-4
    sm:px-6
    lg:px-3
    2xl:px-20"
    >
      {/* PAGE CONTAINER */}
      <div className="mx-auto px-4 sm:px-6 md:px-8 py-12">
        {/* MAIN LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* ================= LEFT CONTENT ================= */}
          <div className="flex-1 max-w-[946px]">
            <h1 className="font-noto-serif text-[#162766] text-[30px] md:text-[40px] mb-4">
              What Is A Mass Tort?
            </h1>

            <p className="mb-10 font-urbanist text-[#425777] text-[18px] leading-[27px]">
              Mass torts cases are civil lawsuits filed by victims against a
              single company or companies for causing similar harm. These
              lawsuits often arise when defective medical products, harmful
              medications, or corporate negligence affect thousands of people in
              similar ways.
            </p>

            <h2 className="font-noto-serif text-[#162766] text-[30px] md:text-[40px] mb-4">
              How Do You Qualify For A Mass Tort Lawsuit?
            </h2>

            <p className="mb-4 font-urbanist font-medium text-[#425777] text-[18px] leading-[27px]">
              Mass tort lawsuits bring together victims harmed by the same
              product or action. To qualify, you need to meet specific criteria
              related to your injury and the case.
            </p>

            <p className="mb-4 font-urbanist font-bold text-[#425777] text-[18px]">
              Here&apos;s what we look for:
            </p>

            <ol className="list-decimal ml-5 text-[18px] font-normal font-urbanist space-y-3 mb-16 text-[#425777] leading-[27px]">
              {eligibilityPoints.map((item, index) => (
                <li key={index}>
                  {item.title} {item.description}
                </li>
              ))}
            </ol>

            <h2 className="font-noto-serif text-[#162766] text-[30px] md:text-[40px] mb-4">
              What Compensation Can You Seek?
            </h2>

            <p className="mb-4 font-urbanist text-[#425777] text-[18px] leading-[27px]">
              Compensation typically covers medical costs and lost income. In
              some cases, it can also include punitive damages.
            </p>

            <p className="mb-4 font-urbanist font-bold text-[#425777] text-[18px]">
              Your compensation may include:
            </p>

            <ul className="list-none pl-0 space-y-3 mb-16 font-urbanist text-[18px] text-[#425777] leading-[27px]">
              {compensationItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    className="mt-2 flex-shrink-0"
                  >
                    <circle cx="5" cy="5" r="5" fill="#162766" />
                  </svg>

                  <span>
                    <strong>{item.title}</strong> {item.description}
                  </span>
                </li>
              ))}
            </ul>

            <h2 className="font-noto-serif font-normal text-[#162766] text-[30px] md:text-[40px] capitalize mb-4">
              How Can Connect2Attorney{" "}<br/>
              <span className="text-[#F2C438]">Help You File</span> A Mass Tort
               Lawsuit?
            </h2>

            <p className="mb-8 font-urbanist font-medium text-[#425777] text-[18px] leading-[27px]">
              Connect2Attorney guides you through the process of filing a mass
              tort claim against the responsible company in just three simple
              steps:
            </p>

            <StepsComponent />
          </div>

          {/* ================= RIGHT STICKY CTA ================= */}
          <aside className="hidden lg:block w-[350px]">
            <div
              ref={ctaRef}
              className={`w-[350px]
              ${
                isAtBottom
                  ? "absolute bottom-12"
                  : isFixed
                  ? "fixed top-23"
                  : "relative"
              }`}
            >
              <div className="bg-[#162766] rounded-lg shadow-xl">
                <div className="h-48">
                  <Image
                    src="/americanlawcourt.svg"
                    alt="Courthouse"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 text-white">
                  <h3 className="text-[26px] mb-3">Ready to Get Started?</h3>

                  <p className="text-[#F9F9F9] font-urbanist font-medium text-[16px] leading-normal mb-6">
                    Don’t wait to protect your rights. Get a free case
                    evaluation today.
                  </p>
                  <Link href="/contact-us">
                   <button className="w-full bg-[#fccb48] text-[#162766] font-semibold uppercase py-3 rounded">
                    Get a Free Case Review
                  </button>
                  </Link>
                 
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

/* Reusable Steps Component */
const StepsComponent = () => {
  const steps = [
    {
      step: 1,
      title: "Submit a Free Case Review",
      description:
        "Share details about your situation so we can understand your claim.",
    },
    {
      step: 2,
      title: "Confirm Eligibility",
      description:
        "Our legal team will review your case and let you know if you qualify.",
    },
    {
      step: 3,
      title: "Sign Agreement",
      description:
        "If eligible, sign a legal agreement. Your attorney will handle all legal formalities.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {steps.map((item) => (
        <div
          key={item.step}
          className="
          bg-[#f4f6f8]
          rounded-xl
          p-5
          flex
          flex-col
          gap-3
        "
        >
          {/* TOP ROW: STEP + TITLE */}
          <div className="flex items-start gap-4">
            {/* STEP BADGE */}
            <div
              className="
              inline-flex
              flex-col
              aspect-square
              h-[45px]
              lg:h-[45px]
              items-center
              justify-center
              rounded-[10px]
              border
              border-white
              bg-[#162766]
              text-white
              shadow-[0_7.564px_11.346px_-2.269px_rgba(0,0,0,0.10)]
            "
            >
              <span className="font-urbanist font-semibold uppercase text-[10px] leading-[12px]">
                Step
              </span>
              <span className="font-urbanist font-bold text-[20px] leading-[24px]">
                {item.step}
              </span>
            </div>

            {/* TITLE */}
            <h4
              className=" w-[130px]
              font-urbanist
              font-semibold
              text-[#162766]
              text-[18px]
              leading-[24px]
              mt-1
            "
            >
              {item.title}
            </h4>
          </div>

          {/* DESCRIPTION (BELOW BOTH, INSIDE BLUE BOX) */}
          <p
            className="
            font-urbanist
            font-normal
            text-[#162766]
            text-[16px]
            leading-[20px]
          "
          >
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MassTortLegalPage;
