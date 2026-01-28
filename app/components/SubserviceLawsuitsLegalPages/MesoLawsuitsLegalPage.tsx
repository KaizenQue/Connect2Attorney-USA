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
    stepsTitle: "steps-title",
    realStoriesTitle: "real-stories-title",
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
      title: "Pulmonary Fibrosis",
      description:
        "Scarring in the lungs that makes breathing difficult and reduces lung function.",
    },
    {
      number: "02",
      title: "Asbestosis",
      description:
        "A chronic lung disease caused by long-term asbestos exposure, leading to shortness of breath and chest pain.",
    },
    {
      number: "03",
      title: "Laryngitis",
      description:
        "Inflammation of the voice box due to asbestos fiber irritation.",
    },
    {
      number: "04",
      title: "Cardiovascular Problems",
      description:
        "Reduced lung function can strain the heart, increasing the risk of heart disease.",
    },
    {
      number: "05",
      title: "Gastrointestinal Issues",
      description:
        "Ingested asbestos fibers may contribute to stomach or colon disorders over time.",
    },
    {
      number: "06",
      title: "Immune System Effects",
      description:
        "Long-term exposure can weaken the immune response, making the body more vulnerable to other illnesses.",
    },
  ],

  whoQualifies: [
    {
      description: "You have been diagnosed with mesothelioma cancer.",
    },
    {
      description:
        "You were exposed to asbestos at work, during military service, or through products.",
    },
    {
      description: "You are a family member filing a wrongful death claim.",
    },
    {
      description:
        "You experienced secondary exposure (e.g., asbestos carried home on clothing).",
    },
  ],

  compensation: [
    {
      title: "Medical bills and ongoing mesothelioma treatment ",
      description:
        "Coverage for surgeries, chemotherapy, hospital stays, medications, and long-term treatment.",
    },
    {
      title:
        "Costs related to the treatment of mesothelioma, including travel and care ",
      description:
        "Compensation for time missed from work or permanent inability to work.",
    },
    {
      title: "Lost wages and reduced earning capacity ",
      description:
        "Compensation for time missed from work or permanent inability to work.",
    },
    {
      title: "Pain, suffering, and emotional distress ",
      description:
        "Financial recovery for physical pain, emotional distress, and reduced quality of life.",
    },
    {
      title: "Financial security for surviving family members ",
      description:
        "Additional damages in cases where companies knowingly exposed people to asbestos.",
    },
  ],

  mdllitigationPoints: [
    {
      title: "Experienced mesothelioma law firms",
      description:
        "Hundreds of thousands of asbestos-related claims have been filed across the U.S. over several decades.",
    },
    {
      title: "Attorneys with a proven track record in asbestos claims ",
      description:
        "Asbestos lawsuits have resulted in over $70 billion in total compensation to victims.",
    },
    {
      title: "Legal teams offering free case reviews and no upfront fees ",
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

    healthRisksTitle: "What are the Other Health Risks of Asbestos Exposure?  ",
    healthRisksParagraph:
      "Asbestos is a well-known carcinogen. Inhaled fibers can stay in the body for years, leading to serious and sometimes fatal health conditions. While mesothelioma is the most recognized outcome, asbestos exposure is also linked to diseases like:  ",
    healthRisksSubtitle: "These health issues include: ",
    healthRisksSubtitle2: "Long-term exposure can lead to:",

    whoQualifiesTitle: "Who is Eligible to File a Claim? ",
    whoQualifiesParagraph:
      "Many people develop mesothelioma years after workplace or secondary exposure. You may qualify even if the exposure happened decades ago.",
    whoQualifiesSubtitle:
      "Even if the exposure happened decades ago, you may still qualify for compensation with proper mesothelioma attorney assistance. You may be eligible to file a mesothelioma lawsuit if:",

    mdllitigationTitle: "Top Mesothelioma Attorneys for Asbestos Claims ",
    mdllitigationParagraph:
      "Choosing the right legal support matters. A skilled mesothelioma attorney understands asbestos laws, exposure history investigation, and available compensation sources. Through Connect2Attorney, we help you connect with: ",

    compensationTitle:
      "Mesothelioma Compensation & Settlements: What You Can Expect ",
    compensationParagraph:
      "A mesothelioma diagnosis can bring not only physical pain but also emotional and financial strain. Patients face costly treatments, loss of income, and lasting damage to their quality of life.  Average settlements typically range from $1 million to $2 million, though the exact amount depends on the specifics of each case. ",
    compensationSubtitle:
      "Compensation from a mesothelioma lawsuit can help cover: ",

    realStoriesTitle: "Real Stories Behind Mesothelioma Lawsuits",

    stepsTitle: "How to File a Mesothelioma Lawsuit with Connect2Attorney?",
    stepsParagraph:
      "Connect2Attorney guides you through the process of filing a mesothelioma/asbestos lawsuit against the responsible party in simple steps:  ",
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
  {
    label: "What is a Mesothelioma Lawsuit?",
    id: content.sectionIds.mainTitle,
  },
  {
    label: "Who is Eligible to File a Claim?",
    id: content.sectionIds.whoQualifiesTitle,
  },
  {
    label: "What are the Other Health Risks of Asbestos Exposure?",
    id: content.sectionIds.healthRisksTitle,
  },
  {
    label: "Top Mesothelioma Attorneys for Asbestos Claims",
    id: content.sectionIds.mdllitigationTitle,
  },
  {
    label: "Mesothelioma Compensation & Settlements: What You Can Expect",
    id: content.sectionIds.compensationTitle,
  },
  {
    label: "Real Stories Behind Mesothelioma Lawsuits",
    id: content.sectionIds.realStoriesTitle,
  },
  {
    label: "How to File a Mesothelioma Lawsuit with Connect2Attorney?",
    id: content.sectionIds.stepsTitle,
  },
  { label: "Mesothelioma Lawsuit Timeline", id: "timeline-section" },
  {
    label: "Get Legal Support from Connect2Attorney ",
    id: "get-legal-support",
  },
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
            <TableOfContents items={MESOTHELIOMA_TOC} />
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
            <div className="mb-10 font-urbanist font-medium text-[#425777] text-[16px] lg:text-[18px] leading-[27px] space-y-1">
              <p>{content.pageContent.mainParagraphs[0]}</p>
              <br className="lg:hidden" />

              <p>{content.pageContent.mainParagraphs[1]}</p>

              <p>{content.pageContent.mainParagraphs[2]}</p>
              <br />
              <p className="font-bold">
                {content.pageContent.mainParagraphs[3]}
              </p>
              <p>{content.pageContent.mainParagraphs[4]}</p>
              <br />
              <p className="font-bold">
                {content.pageContent.mainParagraphs[5]}
              </p>
              <ul className="font-bold list-disc pl-6 space-y-1">
                <li>{content.pageContent.mainParagraphs[6]}</li>
                <li>{content.pageContent.mainParagraphs[7]}</li>
                <li>{content.pageContent.mainParagraphs[8]}</li>
                <li>{content.pageContent.mainParagraphs[9]}</li>
              </ul>
            </div>
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

              <p className="mb-4 font-urbanist  text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                {content.pageContent.whoQualifiesSubtitle}
              </p>

              <ul className="space-y-4 mb-8">
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
  Here’s an article on Mesothelioma Lawsuit.{" "}
  <a href="#" className="underline font-urbanist font-semibold">
    Click here to read.
  </a>
</p> */}
            </div>
            {/* <Ozempicfreecasecard /> */}
            {/* <h2
              id={content.sectionIds.allegationsTitle}
              className="font-noto-serif font-normal capitalize text-[#162766] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4"
            >
              {content.pageContent.allegationsTitle}
            </h2>

            <p className="mb-4 font-poppins font-bold text-[#425777] text-[18px] leading-[27px]">
              {content.pageContent.allegationsSubtitle}
            </p> */}

            {/* <ul className="space-y-3 mb-8 font-urbanist font-normal text-[16px] sm:text-[17px] lg:text-[18px] leading-[22px] sm:leading-[24px] lg:leading-[27px] whitespace-pre-line">
              {content.eligibilityPoints.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
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

                  <span>{item.description}</span>
                </li>
              ))}
            </ul> */}

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

              <div className="space-y-4 w-full mb-16">
                {content.healthRisks.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#F4F6F8] rounded-lg px-4 sm:px-6 py-5"
                  >
                    {/* Title + Number */}
                    <h4 className="font-noto-serif text-[#162766] text-[20px] sm:text-[24px] font-medium leading-normal mb-2">
                      {item.number} - {item.title}
                    </h4>

                    {/* Description */}
                    <p className="font-urbanist text-[#425777] text-[16px] sm:text-[18px] font-medium leading-[24px] sm:leading-[27px]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl p-4 sm:p-6 space-y-4 sm:space-y-6 w-full mb-16 bg-[#F0F2F4]">
                <h2
                  id={content.sectionIds.mdllitigationTitle}
                  className="font-noto-serif font-normal capitalize text-[#162766] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4"
                >
                  {content.pageContent.mdllitigationTitle}
                </h2>

                <p className="mb-4 font-poppins font-normal text-[#425777] text-[16px] lg:text-[18px] leading-[27px]">
                  {content.pageContent.mdllitigationParagraph}
                </p>

                <ul className="space-y-3  whitespace-pre-line list-disc pl-6">
                  {content.mdllitigationPoints.map((item, index) => (
                    <li
                      key={index}
                      className="text-[#425777] text-[16px] lg:text-[18px] leading-[27px] mb-6"
                    >
                      <span className="font-bold">{item.title}</span>{" "}
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
                  </div>
                ))}
                {/* <p
  className="
    mt-[20px]
    text-[#162766]
    font-urbanist
    text-[16px]
    font-semibold
    underline
    underline-offset-auto
  "
>
  Here’s an article on Mesothelioma Lawsuit.{" "}
  <a href="#" className="underline font-urbanist font-semibold">
    Click here to read.
  </a>
</p> */}
              </div>
            </div>

            {/* ==================== STEPS SECTION ==================== */}
            <div className="mb-1 md:mb-10 lg:mb-10">
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
                <TableOfContents items={MESOTHELIOMA_TOC} />
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
