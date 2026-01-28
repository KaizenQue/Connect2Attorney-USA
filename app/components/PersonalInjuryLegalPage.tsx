"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const eligibilityPoints = [
  {
    title: "You Were Injured:",
    description:
      "You suffered physical or emotional harm as a result of an accident, incident, or assault.",
  },
  {
    title: "Someone Else Was Negligent:",
    description:
      "A driver, company, property owner, or individual failed to act responsibly or safely.",
  },
  {
    title: "The Negligence Caused Your Injury:",
    description:
      "The careless or reckless behavior directly led to your injuries or emotional trauma.",
  },
  {
    title: "You Have Documentation:",
    description:
      "Medical records, photos, police reports, or witness statements support your claim.",
  },
];

const compensationItems = [
  {
    title: "Medical Expenses:",
    description:
      "Covers ER visits, surgeries, medications, therapy, rehabilitation, and ongoing treatment.",
  },
  {
    title: "Lost Income:",
    description:
      "Compensation for missed work, reduced earning capacity, or long-term inability to work.",
  },
  {
    title: "Pain and Suffering:",
    description:
      "Accounts for physical pain, emotional distress, trauma, and reduced quality of life.",
  },
  {
    title: "Property Damage:",
    description:
      "Repair or replacement of vehicles or personal property damaged in the incident.",
  },
  {
    title: "Punitive Damages:",
    description:
      "Additional compensation intended to penalize reckless or intentional wrongdoing.",
  },
];

const estimationItems = [
  {
    title: "Severity of your injuries",
  },
  {
    title: "Medical bills and future care needs",
  },
  {
    title: "Loss of income and ability to work",
  },
  {
    title: "Emotional and psychological impact",
  },
  {
    title: "Level of negligence involved",
  },
];
const PersonalInjuryLegalPage: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [isAtBottom, setIsAtBottom] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      if (!wrapperRef.current || !ctaRef.current) return;

      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const ctaHeight = ctaRef.current.offsetHeight;
      const topOffset = 92; // matches top-23

      // start sticky
      setIsFixed(wrapperRect.top <= topOffset);

      // stop at bottom
      setIsAtBottom(wrapperRect.bottom <= ctaHeight + topOffset);
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // run once on mount

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
      {/* Page Container */}
      <div className="mx-auto px-4 sm:px-6 md:px-8 py-12">
        {/* ==================== SECTION 1: PERSONAL INJURY ==================== */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content Column */}
          <div className="flex-1 max-w-[946px]">
            <h1 className="font-noto-serif font-normal capitalize text-[#162766] text-[30px] md:text-[40px] leading-[36px] mb-6">
              What Is A Personal Injury Lawsuit?
            </h1>

            <p className="mb-6 font-urbanist font-medium text-[#425777] text-[18px] leading-[27px]">
              A personal injury lawsuit is a legal claim filed by someone who
              was physically or emotionally harmed due to another party’s
              negligence. Unlike class actions, personal injury cases are
              individual, meaning your compensation depends on your specific
              injuries, losses, and recovery.
            </p>

            <p className="mb-4 font-poppins font-bold text-[#425777] text-[18px] leading-[27px]">
              Common personal injury cases include:
            </p>

            <ul className="list-disc ml-5 font-poppins text-[#425777] text-[18px] leading-[40px] mb-4">
              <li>Motor vehicle accidents</li>
              <li>Slip and fall injuries</li>
              <li>Sexual abuse claims</li>
              <li>Workplace injuries</li>
              <li>18-wheeler and commercial truck accidents</li>
              <li>Rideshare assaults</li>
              <li>Premises liability injuries</li>
            </ul>

            <p className="mb-10 font-urbanist font-medium text-[#425777] text-[18px] leading-[27px]">
              When someone else’s carelessness causes harm, the law allows you
              to seek compensation for the damage done to your body, your
              livelihood, and your future.
            </p>

            <h2 className="font-noto-serif font-normal capitalize text-[#162766] text-[30px] md:text-[40px]  mb-4">
              How Do You Qualify For A Personal Injury Lawsuit?
            </h2>

            <p className="mb-4 font-urbanist font-medium text-[#425777] text-[18px] leading-[27px]">
              To qualify for a personal injury claim, you must show that:
            </p>

            <ol className="list-none font-normal font-poppins text-[18px] space-y-3 mb-6 text-[#425777] leading-[27px]">
              {eligibilityPoints.map((item, index) => (
                <li key={index}>
                  <strong className="text-[#425777]">{item.title}</strong>{" "}
                  <br /> {item.description}
                </li>
              ))}
            </ol>

            <p className="font-urbanist font-medium text-[#425777] text-[18px] mb-10 leading-[27px]">
              Even if you’re unsure whether your experience qualifies, you can
              still request a free case review.
            </p>

            <h2 className="font-noto-serif font-normal text-[#162766] text-[30px] md:text-[40px] leading-[50px] capitalize mb-4">
              What Compensation Can You Seek?
            </h2>

            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[18px] leading-[27px]">
              A personal injury lawsuit helps you recover money for the harm
              you’ve suffered and the losses you face now and in the future.
            </p>

            <p className="mb-4 font-urbanist font-bold text-[#425777] text-[18px] leading-[27px]">
              You may receive compensation for:
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

            <h2 className="font-noto-serif font-normal capitalize text-[#162766] text-[30px] md:text-[40px] mb-4">
              What is the Estimated Settlement Range?
            </h2>

            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[18px] leading-[27px]">
              Personal injury settlements vary widely because each case is
              unique. The payout depends on:
            </p>

            <ul className="list-none pl-0 space-y-3 mb-16 font-urbanist text-[18px] text-[#425777] leading-[27px]">
              {estimationItems.map((item, index) => (
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
                    <strong>{item.title}</strong>
                  </span>
                </li>
              ))}
            </ul>
            <h2 className="font-noto-serif font-normal text-[#162766] text-[30px] md:text-[40px]  capitalize mb-4">
              How Can Connect2Attorney{" "}
              <span className="text-[#F2C438]">Help You File</span> A Class
              Action Lawsuit?
            </h2>

            <p className="mb-8 font-urbanist font-medium text-[#425777] text-[18px] leading-[27px]">
              Connect2Attorney guides you through the process of filing a
              personal injury claim against the responsible company in just
              three simple steps:
            </p>

            <StepsComponent />
          </div>

          {/* Right Sidebar - CTA Card */}
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
                    className="w-full h-full object-cover"
                    width={100}
                    height={100}
                  />
                </div>

                <div className="p-6 text-white">
                  <h3 className="font-noto-serif font-medium text-white text-[26px] leading-normal capitalize mb-3">
                    Ready to Get Started?
                  </h3>

                  <p className="text-[#F9F9F9] font-urbanist font-medium text-[16px] leading-normal mb-6">
                    Don’t wait to seek the justice you deserve. Get a free case
                    review today.
                  </p>

                  <Link href="/contact-us">
                  <button className="w-full bg-[#fccb48] hover:bg-[#eebb20] text-[#162766] font-poppins font-semibold text-[16px] leading-normal tracking-[0.32px] uppercase text-center py-3 px-4 rounded transition-colors duration-200">
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

export default PersonalInjuryLegalPage;
