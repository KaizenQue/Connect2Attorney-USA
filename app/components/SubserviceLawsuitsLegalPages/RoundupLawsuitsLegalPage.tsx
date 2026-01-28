"use client";
import React from "react";
// import Ozempicfreecasecard from "./Ozempicfreecasecard";
import TableOfContents from "../subservice_pages/TableOfContents";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const content = {
  sectionIds: {
    mainTitle: "main-title",
    allegationsTitle: "allegations-title",
    RisksTitle: "risks-title",
    whoQualifiesTitle: "who-qualifies-title",
    mdllitigationTitle: "mdl-litigation-title",
    compensationTitle: "compensation-title",
    healthRisksTitle: "health-risks-title",
    realStoriesTitle: "real-stories-title",
    stepsTitle: "steps-title",
  },

  realStories: [
    {
      name: "John Barnes",
      story:
        "In 2021, he filed a lawsuit against Monsanto related to his non-Hodgkin's lymphoma. A Georgia jury ordered Bayer to pay approximately $2.1 billion in damages.",
    },
    {
      name: "John McKivison",
      story:
        "After using Roundup for over two decades, he developed non-Hodgkin's lymphoma. A Philadelphia jury ordered Bayer to pay $2.25 billion in damages.",
    },
  ],

  eligibilityPoints: [
    {
      title: "Regular Roundup Exposure:",
      description:
        "You used Roundup weed killer at work or home over a long period of time.",
    },
    {
      title: "Occupational Exposure:",
      description:
        "You were exposed through farming, landscaping, or gardening work.",
    },
    {
      title: "Cancer Diagnosis:",
      description:
        "You were diagnosed with non-Hodgkin's lymphoma or a related cancer.",
    },
    {
      title: "Timing of Diagnosis:",
      description:
        "Your diagnosis occurred after prolonged exposure to Roundup.",
    },
  ],

  healthRisks: [
    {
      number: "01",
      title: "Cancer",
      description:
        "Beyond non-Hodgkin's lymphoma, some research suggests links to other cancers like leukemia.",
    },
    {
      number: "02",
      title: "Liver and Kidney Damage",
      description:
        "Glyphosate may impair how these organs filter waste and toxins.",
    },
  ],

  whoQualifies: [
    {
      description:
        "You regularly used Roundup weed killer spray at work or home.",
    },
    {
      description:
        "You were exposed to Roundup through agricultural, landscaping, or gardening work.",
    },
    {
      description:
        "You were diagnosed with non-Hodgkin's lymphoma or a related cancer.",
    },
    {
      description:
        "Your diagnosis occurred after prolonged exposure to Roundup.",
    },
  ],

  compensation: [
    {
      title: "Medical Expenses",
      description:
        "Coverage for current and future medical bills related to your illness.",
    },
    {
      title: "Lost Wages",
      description:
        "Compensation for income lost due to inability to work during treatment or recovery.",
    },
    {
      title: "Pain and Suffering",
      description:
        "Financial awards for physical pain, emotional distress, and reduced quality of life.",
    },
    {
      title: "Punitive Damages",
      description:
        "Additional damages intended to punish the manufacturer for negligence or misconduct (granted in certain cases).",
    },
    {
      title: "Other Related Costs",
      description:
        "This can include travel expenses for treatment, rehabilitation, and ongoing care needs.",
    },
  ],

  riskPoints: [
    {
      title: "Glyphosate exposure damages cells and DNA",
    },
    {
      title: "Monsanto failed to adequately test long-term safety",
    },
    {
      title: "Users were not warned about cancer risks",
    },
  ],
  mdllitigationPoints1: [
    {
      title: "Active Cases",
      description:
        "Approximately 61,000 Roundup lawsuits remain pending as of fall 2025.",
    },
    {
      title: "Federal MDL Cases",
      description:
        "More than 4,000 claims are consolidated in the federal MDL in the Northern District of California.",
    },
    {
      title: "State Court Filings",
      description:
        "Most new and ongoing cases are now being pursued in state courts.",
    },
  ],

  mdllitigationPoints2: [
    {
      title: "Massive Settlements",
      description:
        "About 100,000 claims have been settled, with payouts reaching around $11 billion.",
    },
    {
      title: "New Cases Still Being Filed",
      description:
        "New cases continue to be added weekly as more victims come forward.",
    },
  ],

  roundupRisks: [
    {
      title: "Glyphosate exposure damages cells and DNA",
      description:
        "Approximately 61,000 Roundup lawsuits remain pending as of fall 2025.",
    },
    {
      title: "Monsanto failed to adequately test long-term safety",
      description:
        "Over 4,000 claims are consolidated in the Northern District of California.",
    },
    {
      title: "Users were not warned about cancer risks",
      description:
        "About 100,000 claims have been settled totaling around $11 billion.",
    },
  ],

  pageContent: {
    mainTitle: "What is the Roundup Cancer Lawsuit?",
    mainParagraphs: [
      "The Roundup cancer lawsuit involves claims that the popular weed killer Roundup caused cancer due to long-term exposure to its chemical ingredients. Thousands of individuals across the U.S. have filed lawsuits against Bayer and Monsanto, alleging that the companies failed to warn consumers about the cancer risks linked to Roundup weed killer spray. If you or a loved one is exposed to Roundup and develops cancer or related symptoms, we can help you fight for maximum compensation.",
      "The Roundup cancer lawsuit refers to legal claims filed by individuals who allege that exposure to the herbicide Roundup caused serious health conditions, particularly cancer. The lawsuits argue that Bayer, which acquired Monsanto (the original manufacturer of Roundup), knew or should have known about the dangers of the Roundup chemical but continued to market it as a safe weed killer without proper warnings. These claims have been consolidated into large-scale litigation to streamline the legal process and ensure consistent rulings",
      "What is Roundup Cancer?",
      "Roundup is a glyphosate-based herbicide developed by Monsanto in the 1970s. Its use expanded in the 1990s when Monsanto introduced genetically modified seeds resistant to glyphosate.",
      "Roundup cancer commonly refers to cancers allegedly linked to exposure to Roundup weed killer, especially non-Hodgkin's lymphoma. Scientific studies and jury verdicts have connected glyphosate, the primary ingredient in Roundup, to increased cancer risk after repeated or prolonged exposure.",
    ],

    allegationsTitle: "Who is Eligible to File a Claim?",
    allegationsSubtitle: "You may qualify for a Roundup cancer lawsuit if:",

    RisksTitle: "Roundup Weed Killer Risks",
    RisksParagraph:
      "Roundup has long been marketed as an effective and safe weed killer. However, emerging evidence suggests that repeated exposure to this herbicide may pose serious health risks, especially for individuals with frequent contact. ",
    RisksSubtitle: "Cancer Claims & Chemical Exposure",
    RisksSubtitle2:
      "The main concern in Roundup lawsuits is glyphosate, the active Roundup chemical. Plaintiffs claim that: ",

    whoQualifiesTitle: "Who is Eligible to File a Claim? ",
    whoQualifiesSubtitle: "You may qualify for a Roundup cancer lawsuit if:  ",

    healthRisksTitle: "What are the Other Health Risks of Roundup? ",

    healthRisksParagraph:
      "While non-Hodgkin's lymphoma is the most well-known condition linked to Roundup exposure, the herbicide may also be connected to a variety of other health issues. Here are some of the other possible health risks:   ",
    mdllitigationTitle: "Roundup Cancer Lawsuit & MDL Litigation Explained ",

    mdllitigationParagraph:
      "Most of the Roundup Cancer lawsuit cases are handled through MDL (Multidistrict Litigation). MDL allows individual lawsuits to be grouped under one federal court for pretrial proceedings while preserving each claimant’s right to individual compensation. ",

    mdllitigationsubheading1: "Latest News",
    mdllitigationsubheading2: "Settlements & Payouts",

    compensationTitle: "What Compensation Can You Seek?",
    compensationParagraph:
      "The compensation from a Roundup lawsuit depends largely on the severity of your health issues and the specific circumstances of your case. While typical payouts range from $5,000 to $250,000, the actual amount can vary depending on factors like medical costs and the strength of your claim.",
    compensationSubtitle:
      "Here are the main types of compensation you can seek: ",

    realStoriesTitle: "Real Stories Behind Lawsuit",

    stepsTitle: "How to File a Roundup Cancer Lawsuit with Connect2Attorney?",
    stepsParagraph:
      "Connect2Attorney guides you through the process of filing a Roundup cancer lawsuit against the responsible party, in just three simple steps: ",
  },

  ctaContent: {
    title: "Were You Affected? ",
    description:
      "Don't wait. If you or a loved one was exposed to Roundup and developed cancer, you may be entitled to compensation.",
    buttonText: "Get a Free Case Review",
  },

  steps: [
    {
      step: 1,
      title: "Submit a Free Case Review",
      description: "Share details about your exposure and diagnosis.",
    },
    {
      step: 2,
      title: "Confirm Eligibility",
      description: "Our legal team will evaluate your case.",
    },
    {
      step: 3,
      title: "Sign Agreement",
      description: "If eligible, your lawyer handles everything.",
    },
  ],
};

const ROUNDUP_TOC = [
  { label: "What is the Roundup Cancer Lawsuit?", id: "main-title" },
  { label: "Who is Eligible to File a Claim?", id: "who-qualifies-title" },
  { label: "Roundup Weed Killer Risks", id: "risks-title" },
  { label: "Other Health Risks of Roundup", id: "health-risks-title" },
  {
    label: "Roundup Cancer Lawsuit & MDL Litigation",
    id: "mdl-litigation-title",
  },
  { label: "What Compensation Can You Seek?", id: "compensation-title" },
  { label: "Real Stories Behind the Lawsuit", id: "real-stories-title" },
  { label: "How to File a Roundup Cancer Lawsuit", id: "steps-title" },
  { label: "Get Legal Support from Connect2Attorney", id: "get-legal-support" },
  { label: " Roundup Lawsuit Timeline", id: "timeline-section" },
  { label: "FAQs", id: "faq-section" },
];

const LawsuitsLegalPage = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [isAtBottom, setIsAtBottom] = useState<boolean>(false);

  const mobileTocWrapperRef = useRef<HTMLDivElement | null>(null);
  const mobileTocInnerRef = useRef<HTMLDivElement | null>(null);

  const [isMobileTocFixed, setIsMobileTocFixed] = useState(false);

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

  useEffect(() => {
    const onScroll = () => {
      if (!mobileTocWrapperRef.current) return;

      // Only for tablet + mobile
      if (window.innerWidth >= 1024) return;

      const NAVBAR_HEIGHT = 60;
      const rect = mobileTocWrapperRef.current.getBoundingClientRect();

      // Stick when TOC reaches navbar
      setIsMobileTocFixed(rect.top <= NAVBAR_HEIGHT);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
    const scrollToNextSection = () => {
    const el = document.getElementById("stepper-form");
    if (!el) return;

    const yOffset = -80; // header height
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div
      ref={wrapperRef}
      className="
        bg-white
        relative
        mx-auto
        max-w-[1440px]
        2xl:max-w-[1600px]
        px-4
        sm:px-6
        lg:px-3
        2xl:px-20
      "
    >
      {" "}
      {/* Custom Bullet Styling */}
      <style>{`
        .custom-bullet li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .custom-bullet li::before {
          content: "•";
          color: #1a237e;
          font-weight: bold;
          font-size: 1.5rem;
          position: absolute;
          left: 0;
          top: -0.6rem;
        }
      `}</style>
      {/* Page Container */}
      <div className="mx-auto px-4 sm:px-6 md:px-8 py-2 lg:py-12">
        {/* ==================== SECTION 1: Ozempic Lawsuit ==================== */}

        <div ref={mobileTocWrapperRef} className="lg:hidden relative mb-10">
          {/* Spacer to prevent content jump */}
          {isMobileTocFixed && <div className="h-[60px]" />}

          <div
            ref={mobileTocInnerRef}
            className={
              isMobileTocFixed
                ? "fixed left-0 right-0 z-40 px-5 md:px-10 lg:px-0 bg-white"
                : "relative"
            }
            style={isMobileTocFixed ? { top: 60 } : undefined}
          >
            <TableOfContents items={ROUNDUP_TOC} />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content Column */}
          <div className="flex-1 max-w-[946px]">
            <h1
              id={content.sectionIds.mainTitle}
              className="font-noto-serif font-normal capitalize text-[#162766] text-[30px] md:text-[40px] leading-[36px] mb-6"
            >
              {content.pageContent.mainTitle}
            </h1>
            <div className="mb-10 font-urbanist font-medium text-[#425777] text-[16px] lg:text-[18px] leading-[27px] space-y-1 capitalize">
              <p>{content.pageContent.mainParagraphs[0]}</p>
              <br className="lg:hidden" />
              <p>{content.pageContent.mainParagraphs[1]}</p>
              <br />
              <h3 className=" font-bold">
                {content.pageContent.mainParagraphs[2]}
              </h3>
              <p>{content.pageContent.mainParagraphs[3]}</p>
              <p>{content.pageContent.mainParagraphs[4]}</p>
            </div>

            {/* <Ozempicfreecasecard /> */}
            <div className="bg-[#162766] text-[#FFF] rounded-xl p-4 sm:p-6 w-full  mb-16">
              <h2
                id={content.sectionIds.whoQualifiesTitle}
                className="font-noto-serif font-normal capitalize text-[#FFF] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4"
              >
                <span className="text-[#FCCB48]">
                  {content.pageContent.whoQualifiesTitle.split(" ")[0]}{" "}
                  {content.pageContent.whoQualifiesTitle.split(" ")[1]}{" "}
                  {content.pageContent.whoQualifiesTitle.split(" ")[2]}
                </span>{" "}
                {content.pageContent.whoQualifiesTitle
                  .split(" ")
                  .slice(3)
                  .join(" ")}
              </h2>
              <p className="mb-4 font-urbanist  font-bold text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                {content.pageContent.whoQualifiesSubtitle}
              </p>
              <ul className="space-y-3 mb-8">
                {content.whoQualifies.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {/* Yellow Bullet */}
                    <span className="mt-[6px] flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <ellipse
                          cx="6.83621"
                          cy="6.9697"
                          rx="6.83621"
                          ry="6.9697"
                          fill="#F2C438"
                        />
                      </svg>
                    </span>
                    {/* Text */}
                    <p className="font-urbanist text-[#F9F9F9] text-[16px] sm:text-[18px] font-medium leading-[24px] sm:leading-[27px]">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
              {/* <p
                className="
                  mt-[20px]
                  text-[#fff]
                  font-urbanist
                  text-[16px]
                  font-semibold
                  underline
                  underline-offset-auto
                "
              >
                <a href="#" className="underline font-urbanist font-semibold">
                  Here&apos;s a Monsanto Roundup Lawsuit Update 
                </a>
              </p> */}
            </div>

            {/* ==================== HEALTH RISKS SECTION ==================== */}
            <div className="mb-16">
              <h2
                id={content.sectionIds.RisksTitle}
                className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
              >
                {content.pageContent.RisksTitle}
              </h2>

              <p className="mb-4 font-poppins font-normal text-[#425777] text-[18px] leading-[30px] capitalize">
                {content.pageContent.RisksParagraph}
              </p>

              <p className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.RisksSubtitle}
              </p>
              <p className="mb-4 font-poppins capitalize font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.RisksSubtitle2}
              </p>

              <ul className="space-y-5 mb-8 whitespace-pre-line">
                {content.roundupRisks.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {/* Custom bullet */}
                    <span className="mt-[7px] shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <circle cx="7" cy="7" r="7" fill="#162766" />
                      </svg>
                    </span>
                    {/* Text */}
                    <span className="font-urbanist text-[#425777] text-[18px] leading-[27px]">
                      <span className="font-bold">{item.title}</span>{" "}
                    </span>
                  </li>
                ))}
              </ul>

              <h2
                id={content.sectionIds.healthRisksTitle}
                className="font-noto-serif font-normal capitalize text-[#162766] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4"
              >
                {content.pageContent.healthRisksTitle}
              </h2>

              <p className="mb-4 font-poppins font-normal text-[#425777] text-[16px] leading-[27px]">
                {content.pageContent.healthRisksParagraph}
              </p>

              <div className="space-y-4 w-full mb-16">
                {content.healthRisks.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#F4F6F8] rounded-lg px-4 sm:px-6 py-5"
                  >
                    <h4 className="font-noto-serif text-[#162766] text-[20px] sm:text-[24px] font-medium leading-normal mb-2">
                      {item.title}
                    </h4>
                    <p className="font-urbanist text-[#425777] text-[16px] sm:text-[18px] font-medium leading-[24px] sm:leading-[27px]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-[#F0F2F4] text-[#FFF] rounded-xl p-4 sm:p-6 w-full  mb-16">
                <h2
                  id={content.sectionIds.mdllitigationTitle}
                  className="
    font-noto-serif
    font-medium
    capitalize
    text-[#162766]
    text-[26px]
    leading-normal
    mb-4
  "
                >
                  {content.pageContent.mdllitigationTitle}
                </h2>

                <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] leading-[27px]">
                  {content.pageContent.mdllitigationParagraph}
                </p>

                <p className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] leading-[27px]">
                  {content.pageContent.mdllitigationsubheading1}
                </p>

                <ul className="space-y-3 mb-8">
                  {content.mdllitigationPoints1.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      {/* Custom Bullet */}
                      <span className="mt-[9px] shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                        >
                          <circle cx="2" cy="2" r="2" fill="#425777" />
                        </svg>
                      </span>

                      {/* Text */}
                      <span className="font-urbanist text-[#425777] text-[18px] leading-[27px]">
                        <span className="font-bold">{item.title}</span>{" "}
                        <span className="font-normal">{item.description}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mb-4 font-urbanist font-bold text-[#425777] text-[18px] leading-[27px]">
                  {content.pageContent.mdllitigationsubheading2}
                </p>

                <ul className="space-y-3 mb-8">
                  {content.mdllitigationPoints2.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      {/* Custom Bullet */}
                      <span className="mt-[9px] shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                        >
                          <circle cx="2" cy="2" r="2" fill="#425777" />
                        </svg>
                      </span>

                      {/* Text */}
                      <span className="font-urbanist text-[#425777] text-[18px] leading-[27px]">
                        <span className="font-normal">{item.description}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <h2
                id={content.sectionIds.compensationTitle}
                className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
              >
                {content.pageContent.compensationTitle}
              </h2>

              <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.compensationParagraph}
              </p>

              <p className="mb-4 font-urbanist  capitalize font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.compensationSubtitle}
              </p>

              <div className="space-y-4 sm:space-y-5 w-full mb-16">
                {content.compensation.map((item, index) => (
                  <div
                    key={index}
                    className="
                      flex
                      flex-col
                      items-start
                      gap-[10px]
                      self-stretch
                      p-[20px]
                      rounded-[10px]
                      bg-[#F0F2F4]
                    "
                  >
                    {/* Title */}
                    <h4
                      className="
                        text-[#162766]
                        font-noto-serif
                        text-[20px]
                        sm:text-[22px]
                        lg:text-[24px]
                        font-medium
                        leading-normal
                      "
                    >
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p
                      className="
                        text-[#425777]
                        font-urbanist
                        text-[16px]
                        sm:text-[17px]
                        lg:text-[18px]
                        font-bold
                        leading-[27px]
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-[#F4F6F8] rounded-lg px-4 sm:px-8 py-6">
                {/* Section Title */}
                <h3
                  id={content.sectionIds.realStoriesTitle}
                  className="
      font-noto-serif
      text-[#162766]
      text-[26px]
      font-medium
      leading-normal
      capitalize
      mb-4
    "
                >
                  {content.pageContent.realStoriesTitle}
                </h3>

                {/* Stories */}
                <ul className="space-y-4">
                  {content.realStories.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      {/* Small Bullet */}
                      <span className="mt-[9px] shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                        >
                          <circle cx="2" cy="2" r="2" fill="#425777" />
                        </svg>
                      </span>

                      {/* Text */}
                      <p className="font-urbanist text-[#425777] text-[18px] leading-[27px]">
                        <span className="font-bold">{item.name}:</span>{" "}
                        <span className="font-medium">{item.story}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ==================== STEPS SECTION ==================== */}
            <div className="mb-15 md:mb-10 lg:mb-10">
              <h2
                id={content.sectionIds.stepsTitle}
                className="font-noto-serif font-normal text-[#162766] text-[30px] md:text-[40px] capitalize mb-4"
              >
                {content.pageContent.stepsTitle}
              </h2>

              <p className="mb-8 font-urbanist font-medium text-[#425777] text-[18px] leading-[27px]">
                {content.pageContent.stepsParagraph}
              </p>

              <StepsComponent />
            </div>
          </div>

          {/* Right Sidebar - CTA Card and Content Table */}
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
                {/* <div className="h-48">
                  <Image
                    src="/americanlawcourt.svg"
                    alt="Courthouse"
                    className="w-full h-full object-cover"
                    width={400}
                    height={200}
                  />
                </div> */}

                <div className="p-6 text-white">
                  <h3 className="font-noto-serif font-medium text-white  text-center text-[26px] leading-normal capitalize mb-3">
                    {content.ctaContent.title}
                  </h3>

                  <p className="text-[#F9F9F9] font-urbanist font-medium text-center text-[16px] leading-normal mb-6">
                    {content.ctaContent.description}
                  </p>
              
                    <button onClick={scrollToNextSection} className="w-full bg-[#fccb48] hover:bg-[#eebb20] text-[#162766] font-poppins font-semibold text-[16px] leading-normal tracking-[0.32px] uppercase text-center py-3 px-4 rounded transition-colors duration-200">
                      {content.ctaContent.buttonText}
                    </button>
             
                </div>
              </div>
              <div className="mb-8">
                <TableOfContents items={ROUNDUP_TOC} />
              </div>
            </div>
          </aside>
          {/* Content Table */}
        </div>
      </div>
    </div>
  );
};

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
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
      {steps.map((item) => (
        <div
          key={item.step}
          className="
            bg-[#f4f6f8]
            rounded-xl
            p-5 md:p-4 xl:p-6
            flex
            flex-col
            min-h-[200px]
          "
        >
          {/* TOP ROW: BADGE + TITLE */}
          <div className="flex items-start gap-4">
            {/* STEP BADGE (Figma Perfect) */}
            <div
              className="
                inline-flex
                aspect-square
                h-[63.058px]
                px-[11.741px]
                pt-[9px]
                pb-[8.058px]
                justify-center
                items-center
                rounded-[10px]
                border
                border-white
                bg-[#162766]
                shadow-[0_7.564px_11.346px_-2.269px_rgba(0,0,0,0.10)]
              "
            >
              <div className="flex flex-col items-center justify-center leading-none">
                <span className="text-white font-urbanist text-[18px] font-semibold leading-[20px]">
                  Step
                </span>
                <span className="text-white font-urbanist text-[20px] font-bold leading-[24px]">
                  {item.step}
                </span>
              </div>
            </div>

            {/* TITLE */}
            <h4
              className="
                font-urbanist
                font-bold
                text-[#162766]
                text-[18px]
                leading-[24px]
                mt-[4px]
              "
            >
              {item.title}
            </h4>
          </div>

          {/* DESCRIPTION */}
          <p
            className="
              mt-4
              font-urbanist
              font-normal
              text-[#162766]
              text-[16px]
              leading-[22px]
            "
          >
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default LawsuitsLegalPage;
