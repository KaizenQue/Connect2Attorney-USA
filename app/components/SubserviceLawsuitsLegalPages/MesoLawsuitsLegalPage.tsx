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
    healthRisksTitle: "health-risks-title",
    whoQualifiesTitle: "who-qualifies-title",
    compensationTitle: "compensation-title",
    mdllitigationTitle: "mdl-litigation-title",
    realStoriesTitle: "real-stories-title",
    stepsTitle: "steps-title",
  },

  realStories: [
    {
      name: "Robert Miller",
      story:
        "Robert worked in shipyards for over 20 years and was exposed to asbestos daily. Decades later, he was diagnosed with pleural mesothelioma, requiring aggressive chemotherapy and surgery.",
    },
    {
      name: "James Carter",
      story:
        "James worked as an auto mechanic and regularly handled asbestos brake pads. He was diagnosed with peritoneal mesothelioma after experiencing unexplained abdominal pain and swelling.",
    },
    {
      name: "Linda Thompson",
      story:
        "Linda was exposed secondhand through her husband’s work clothes. She later developed mesothelioma and now faces lifelong treatment and medical expenses.",
    },
  ],

  eligibilityPoints: [
    {
      title: "Failure to Warn:",
      description:
        "Companies did not warn workers or consumers about the dangers of asbestos exposure.",
    },
    {
      title: "Negligent Exposure:",
      description:
        "You were exposed to asbestos at work, home, or through a product.",
    },
    {
      title: "Confirmed Diagnosis:",
      description:
        "You have been diagnosed with mesothelioma or another asbestos-related disease.",
    },
    {
      title: "Severe Damages:",
      description:
        "Your illness caused major medical costs, lost income, or death in the family.",
    },
  ],

  healthRisks: [
    {
      number: "01",
      title: "Mesothelioma",
      description:
        "A rare and aggressive cancer affecting the lining of the lungs, abdomen, heart, or testes.",
    },
    {
      number: "02",
      title: "Asbestosis",
      description:
        "A chronic lung disease that causes scarring of lung tissue and long-term breathing problems.",
    },
    {
      number: "03",
      title: "Lung Cancer",
      description:
        "Asbestos exposure significantly increases the risk of developing lung cancer.",
    },
    {
      number: "04",
      title: "Pleural Disease",
      description:
        "Thickening and fluid buildup around the lungs, causing chest pain and breathing difficulty.",
    },
    {
      number: "05",
      title: "Organ Damage",
      description:
        "Ingested or inhaled asbestos fibers can damage organs and weaken the immune system.",
    },
  ],

  whoQualifies: [
    {
      description:
        "Evaluate your medical diagnosis and asbestos exposure history.",
    },
    {
      description:
        "Identify responsible companies, employers, or product manufacturers.",
    },
    {
      description:
        "File your claim within your state’s statute of limitations.",
    },
    {
      description:
        "Pursue compensation for medical bills, lost income, and suffering.",
    },
    {
      description:
        "Handle negotiations, settlements, or trial proceedings on your behalf.",
    },
  ],

  compensation: [
    {
      title: "Medical Expenses",
      description:
        "Coverage for surgeries, chemotherapy, hospital stays, medications, and long-term treatment.",
    },
    {
      title: "Lost Wages",
      description:
        "Compensation for time missed from work or permanent inability to work.",
    },
    {
      title: "Pain and Suffering",
      description:
        "Financial recovery for physical pain, emotional distress, and reduced quality of life.",
    },
    {
      title: "Punitive Damages",
      description:
        "Additional damages in cases where companies knowingly exposed people to asbestos.",
    },
  ],

  mdllitigationPoints: [
    {
      title: "Widespread Litigation:",
      description:
        "Hundreds of thousands of asbestos-related claims have been filed across the U.S. over several decades.",
    },
    {
      title: "Massive Payouts:",
      description:
        "Asbestos lawsuits have resulted in over $70 billion in total compensation to victims.",
    },
    {
      title: "Ongoing Filings:",
      description:
        "New mesothelioma lawsuits continue to be filed each year due to the long latency period of the disease.",
    },
  ],

  pageContent: {
    mainTitle: "What is a Mesothelioma  Lawsuit?",
    mainParagraphs: [
      "A Mesothelioma lawsuit helps individuals diagnosed with mesothelioma cancer and families who lost loved ones, seek compensation for asbestos exposure. These legal claims focus on holding negligent companies accountable for exposing people to asbestos and failing to warn about its dangers. ",
      "At Connect 2 Attorney, we help connect you with experienced mesothelioma attorneys who understand the medical, emotional, and financial challenges involved. ",
      "A mesothelioma lawsuit is a legal claim filed by patients or families against asbestos manufacturers, employers, or distributors responsible for asbestos exposure. Over 3,700 asbestos claims are filed in the United States each year. Most cases are handled by a specialized mesothelioma law firm and resolved through settlements, asbestos trust fund claims, or jury verdicts.",
      "What is Mesothelioma?",
      "Mesothelioma is a rare and aggressive cancer caused exclusively by asbestos exposure. It affects the lining of the lungs (pleural mesothelioma), abdomen (peritoneal mesothelioma), heart (pericardial mesothelioma), or testes (testicular mesothelioma).",
      "Common mesothelioma symptoms include: ",
      "Shortness of breath ",
      "Chest or abdominal pain ",
      "Persistent cough ",
      "Fatigue and unexplained weight loss",    
    ],

    allegationsTitle: "What Are the Allegations in Mesothelioma Lawsuits?",
    allegationsParagraph:
      "Mesothelioma lawsuits allege that companies knowingly exposed workers and consumers to asbestos while hiding the dangers and failing to provide proper safety warnings or protections.",
    allegationsSubtitle: "Common allegations include:",

    healthRisksTitle: "What Are the Health Risks of Asbestos Exposure?",
    healthRisksParagraph:
      "Asbestos fibers can remain in the body for decades and cause severe, life-threatening diseases. Many victims are diagnosed only after irreversible damage has occurred.",
    healthRisksSubtitle: "Serious conditions linked to asbestos include:",
    healthRisksSubtitle2:
      "Long-term exposure can lead to:",

    whoQualifiesTitle: "Who Qualifies for a Mesothelioma Lawsuit?",
    whoQualifiesParagraph:
      "Many people develop mesothelioma years after workplace or secondary exposure. You may qualify even if the exposure happened decades ago.",
    whoQualifiesSubtitle: "You may qualify if you:",

    mdllitigationTitle:
      "What Is the Current Status of Mesothelioma and Asbestos Litigation?",
    mdllitigationParagraph:
      "Asbestos litigation is one of the longest-running mass torts in U.S. history. Claims continue to be filed due to the long latency period of mesothelioma.",

    compensationTitle: "What Compensation Can You Seek?",
    compensationParagraph:
      "Average mesothelioma settlements typically range from $1 million to $2 million, depending on exposure history, severity of illness, and responsible parties.",
    compensationSubtitle:
      "You may be eligible to recover:",

    realStoriesTitle: "Real Stories Behind Mesothelioma Lawsuits",

    stepsTitle: "How to File a Mesothelioma Lawsuit with Connect2Attorney?",
    stepsParagraph:
      "Connect2Attorney makes the process simple and stress-free with just three steps:",
  },

  ctaContent: {
    title: "Get Legal Help Today",
    description:
      "If you or a loved one has been diagnosed with mesothelioma, don’t wait. You may be entitled to substantial compensation.",
    buttonText: "Get a Free Case Review",
  },

  steps: [
    {
      step: 1,
      title: "Submit a Free Case Review",
      description:
        "Share your diagnosis and exposure history so we can evaluate your claim.",
    },
    {
      step: 2,
      title: "Confirm Eligibility",
      description:
        "Our legal team reviews your case and matches you with the right attorney.",
    },
    {
      step: 3,
      title: "Start Your Claim",
      description:
        "Your lawyer handles everything while you focus on your health.",
    },
  ],
};

const MESOTHELIOMA_TOC = [
  { label: "What is a Mesothelioma / Asbestos Lawsuit?", id: "main-title" },
  { label: "What Are the Allegations in Mesothelioma Lawsuits?", id: "allegations-title" },
  { label: "What Are the Health Risks of Asbestos Exposure?", id: "health-risks-title" },
  { label: "Who Qualifies for a Mesothelioma Lawsuit?", id: "who-qualifies-title" },
  { label: "What Is the Current Status of Mesothelioma Litigation?", id: "mdl-litigation-title" },
  { label: "What Compensation Can You Seek?", id: "compensation-title" },
  { label: "Real Stories Behind Mesothelioma Lawsuits", id: "real-stories-title" },
  { label: "How to File a Mesothelioma Lawsuit with Connect2Attorney?", id: "steps-title" },
  { label: "Mesothelioma Lawsuit Timeline", id: "timeline-section" },
  { label: "Get Legal Support from Connect2Attorney", id: "get-legal-support" },
  { label: "FAQs", id: "faq-section" },
];

const LawsuitsLegalPage = () => {
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
      <div className="mx-auto px-4 sm:px-6 md:px-8 py-12">
        {/* ==================== SECTION 1: Ozempic Lawsuit ==================== */}
        <div className="lg:hidden mb-4">
          <TableOfContents items={MESOTHELIOMA_TOC } />

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
            <div className="mb-10 font-urbanist font-medium text-[#425777] text-[18px] leading-[27px] space-y-1">
              <p>{content.pageContent.mainParagraphs[0]}</p>

              <p>{content.pageContent.mainParagraphs[1]}</p>

              <p>{content.pageContent.mainParagraphs[2]}</p>
              <br/>
              <p className="font-bold">{content.pageContent.mainParagraphs[3]}</p>
                            <p>{content.pageContent.mainParagraphs[4]}</p>
                            <br/>
                                          <p className="font-bold">{content.pageContent.mainParagraphs[5]}</p>
                                          <ul className="font-bold">
                                            <li>{content.pageContent.mainParagraphs[6]}</li>
                                            <li>{content.pageContent.mainParagraphs[7]}</li>
                                            <li>{content.pageContent.mainParagraphs[8]}</li>
                                            <li>{content.pageContent.mainParagraphs[9]}</li>
                                            
                                          </ul>

            </div>

            {/* <Ozempicfreecasecard /> */}
            <h2
              id={content.sectionIds.allegationsTitle}
              className="font-noto-serif font-normal capitalize text-[#162766] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4"
            >
              {content.pageContent.allegationsTitle}
            </h2>

            <p className="mb-4 font-poppins font-bold text-[#425777] text-[18px] leading-[27px]">
              {content.pageContent.allegationsSubtitle}
            </p>

            <ul className="space-y-3 mb-8 font-urbanist font-normal text-[16px] sm:text-[17px] lg:text-[18px] leading-[22px] sm:leading-[24px] lg:leading-[27px] whitespace-pre-line">
              {content.eligibilityPoints.map((item, index) => (
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
                  <span>{item.description}</span>
                </li>
              ))}
            </ul>

            {/* ==================== HEALTH RISKS SECTION ==================== */}
            <div className="mb-16">
              <h2
                id={content.sectionIds.healthRisksTitle}
                className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
              >
                {content.pageContent.healthRisksTitle}
              </h2>

              <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.healthRisksParagraph}
              </p>

              <p className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.healthRisksSubtitle}
              </p>
              <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.healthRisksSubtitle2}
              </p>
              <div className="space-y-4 w-full mb-16">
                {content.healthRisks.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#F4F6F8] rounded-lg px-4 sm:px-6 py-5"
                  >
                    {/* Title + Number */}
                    <h4 className="font-noto-serif text-[#162766] text-[20px] sm:text-[24px] font-medium leading-normal mb-2">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="font-urbanist text-[#425777] text-[16px] sm:text-[18px] font-medium leading-[24px] sm:leading-[27px]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
    
    
        <h2
  id={content.sectionIds.mdllitigationTitle}
  className="font-noto-serif font-normal capitalize text-[#162766] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4"
>
  {content.pageContent.mdllitigationTitle}
</h2>

<p className="mb-4 font-poppins font-normal text-[#425777] text-[18px] leading-[27px]">
  {content.pageContent.mdllitigationParagraph}
</p>

<ul className="space-y-3 mb-8 whitespace-pre-line">
  {content.mdllitigationPoints.map((item, index) => (
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
        <span className="font-bold">
          {item.title}
        </span>{" "}
        <span className="font-normal">
          {item.description}
        </span>
      </span>
    </li>
  ))}
</ul>





              <div className="bg-[#162766] text-[#FFF] rounded-xl p-4 sm:p-6 w-full  mb-16">
                <h2
                  id={content.sectionIds.whoQualifiesTitle}
                  className="font-noto-serif font-normal capitalize text-[#FFF] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4"
                >
                  <span className="">
                    {content.pageContent.whoQualifiesTitle.split(" ")[0]}{" "}
                    {content.pageContent.whoQualifiesTitle.split(" ")[1]}
                  </span>{" "}
                  {content.pageContent.whoQualifiesTitle
                    .split(" ")
                    .slice(2)
                    .join(" ")}
                </h2>

         

                <p className="mb-4 font-urbanist font-bold text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
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

              <p className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.compensationSubtitle}
              </p>

              <ul className="rounded-xl p-4 sm:p-6 space-y-4 sm:space-y-6 w-full mb-16 bg-[#F0F2F4]">
                {content.compensation.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {/* Blue Bullet */}
                    <span className="mt-[6px] text-[#162766] text-[16px] sm:text-[18px]">
                      •
                    </span>

                    <div>
                      {/* Title */}
                      <h4 className="font-noto-serif text-[#162766] text-[18px] sm:text-[20px] font-medium leading-normal mb-1">
                        {item.title}:
                      </h4>

                      {/* Description */}
                      <p className="font-urbanist text-[#425777] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="bg-[#F4F6F8] rounded-lg px-4 sm:px-8 py-6">
                {/* Section Title */}
                <h3
                  id={content.sectionIds.realStoriesTitle}
                  className="font-noto-serif text-[#162766] text-[20px] sm:text-[22px] font-medium mb-4"
                >
                  {content.pageContent.realStoriesTitle}
                </h3>

                {/* Stories */}
                <ul className="space-y-4">
                  {content.realStories.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      {/* Bullet */}
                      <span className="mt-[6px] text-[#162766] text-[16px]">
                        •
                      </span>

                      {/* Text */}
                      <p className="font-urbanist text-[#425777] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">
                        <strong className="font-semibold text-[#162766]">
                          {item.name}:
                        </strong>{" "}
                        {item.story}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ==================== STEPS SECTION ==================== */}
            <div className="mb-24">
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
                <div className="h-48">
                  <Image
                    src="/americanlawcourt.svg"
                    alt="Courthouse"
                    className="w-full h-full object-cover"
                    width={400}
                    height={200}
                  />
                </div>

                <div className="p-6 text-white">
                  <h3 className="font-noto-serif font-medium text-white text-[26px] leading-normal capitalize mb-3">
                    {content.ctaContent.title}
                  </h3>

                  <p className="text-[#F9F9F9] font-urbanist font-medium text-[16px] leading-normal mb-6">
                    {content.ctaContent.description}
                  </p>
                  <Link href="/contact-us">
                    <button className="w-full bg-[#fccb48] hover:bg-[#eebb20] text-[#162766] font-poppins font-semibold text-[16px] leading-normal tracking-[0.32px] uppercase text-center py-3 px-4 rounded transition-colors duration-200">
                      {content.ctaContent.buttonText}
                    </button>
                  </Link>
                </div>
              </div>
              <div className="mb-8">
                <TableOfContents items={MESOTHELIOMA_TOC } />

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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
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
            {/* STEP BADGE */}
            <div
              className="
                shrink-0
                w-[34px] xl:w-[44px] h-[44px]
                flex flex-col
                items-center justify-center
                rounded-[10px]
                border border-white
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
              className="
                font-urbanist
                font-bold
                text-[#162766]
                text-[18px]
                leading-[24px]
                mt-[2px]
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
