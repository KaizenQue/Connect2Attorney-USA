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
      name: "Mae Moore",
      story:
        "The family of Mae Moore sued Johnson & Johnson following her death from mesothelioma. The jury awarded $966 million to the family as compensation for their loss. ",
    },
    {
      name: "Darlene Coker",
      story:
        "Coker was diagnosed with mesothelioma, which she alleged was caused by her long-term use of Johnson & Johnson’s talcum powder. .",
    },
  ],

  eligibilityPoints: [
    {
      title: "Failure to Warn of Gastroparesis:",
      description:
        "You were prescribed Ozempic for diabetes or off-label weight loss",
    },
    {
      title: "Misleading Marketing and Safety Claims:",
      description:
        "You experienced severe or persistent gastrointestinal side effects ",
    },
    {
      title: "Omission of Vision Loss Warnings:",
      description:
        "You were diagnosed with conditions such as gastroparesis, intestinal blockage, or severe vomiting ",
    },
    {
      title: "Ignoring Critical Safety Signals:",
      description:
        "Your injuries required medical treatment, hospitalization, or surgery\nEligibility depends on medical records, duration of use, and severity of injuries.",
    },
  ],

  healthRisks: [
    {
      number: "01",
      title: "Breathing Problems",
      description:
        "Inhalation of talc particles can cause coughing, wheezing, or shortness of breath, particularly in infants and those with respiratory conditions. ",
    },
    {
      number: "02",
      title: "Talc Pneumoconiosis",
      description:
        "Prolonged exposure to talc dust, often in industrial settings, can lead to lung inflammation and scarring. ",
    },
    {
      number: "03",
      title: "Skin Irritation",
      description:
        "Frequent use may cause rashes or allergic reactions in people with sensitive skin. ",
    },
    {
      number: "04",
      title: "Lung Cancer",
      description:
        "Workers exposed to asbestos-contaminated talc may face a higher risk of mesothelioma or lung cancer. ",
    },
  ],

  whoQualifies: [
    {
      description:
        "Used talcum powder or baby powder regularly over several years.",
    },
    {
      description: "Was diagnosed with ovarian cancer or mesothelioma.",
    },
    {
      description:
        "Has medical records linking the diagnosis to talcum powder exposure.",
    },
    {
      description:
        "Is filing on behalf of a deceased family member (wrongful death claim).",
    },
  ],

  compensation: [
    {
      title: "Medical Expenses",
      description:
        "Covers hospital bills, treatments, medications, and ongoing care costs. ",
    },
    {
      title: "Lost Wages",
      description:
        "Compensation for income lost due to illness or time away from work. ",
    },
    {
      title: "Pain and Suffering",
      description:
        "For physical pain, mental anguish, and reduced quality of life.",
    },
    {
      title: "Punitive Damages",
      description:
        "Support for spouses or family members affected by the victim’s condition. ",
    },
    {
      title: "Other Related Costs",
      description:
        "For families who lost a loved one due to talcum powder–related cancer. ",
    },
  ],

  mdllitigationPoints: [
    {
      description:
        "As of December 2025, over 90,000 talcum powder claims have been filed against manufacturers and sellers of talc-based products.",
    },
    {
      description:
        "As of December 2025, more than 67,600 talcum powder lawsuits have been brought against Johnson & Johnson (J&J) and grouped into a consolidated multidistrict litigation (MDL). ",
    },
    {
      description:
        "In December 2025, a jury awarded $40 million to two women who developed ovarian cancer after long-term use of Johnson & Johnson talc products. ",
    },
    {
      description:
        "In October 2025, a court ordered the company to pay $966 million to the family of a California woman who had passed away. ",
    },
    {
      description:
        "Also, a Minnesota jury awarded $65.5 million to a 37-year-old woman. ",
    },
  ],

  pageContent: {
    mainTitle: "What is the Talcum Powder Lawsuit? ",
    mainParagraphs: [
      "Thousands of individuals and families have filed a talcum powder lawsuit after developing serious cancers linked to long-term use of talcum powder and baby powder products. In recent years, asbestos-contaminated talcum powder has been linked to ovarian cancer in women who used it for daily feminine hygiene. Connect 2 Attorney helps you connect with experienced talcum powder lawyers ",
      "to explore your legal options quickly and confidentially. The talcum powder lawsuit involves legal claims against manufacturers of talcum powder and baby powder products, including Johnson & Johnson. Plaintiffs allege that these companies knowingly sold talcum powder contaminated with asbestos and failed to provide adequate cancer warnings, putting millions of consumers at risk",
      "About Talcum Powder ",
      "Talcum powder is made from talc, a naturally occurring mineral used for its moisture-absorbing properties. For decades, talcum powder and baby powder were marketed as safe for daily hygiene use, including feminine hygiene and infant care. However, talc is often found near asbestos deposits, increasing the risk of contamination during mining.",
    ],

    allegationsTitle: "Who is Eligible to File a Claim? ",
    allegationsParagraph:
      "Many individuals have come forward claiming that long-term use of talcum powder led to ovarian cancer or other health complications. You may qualify to file a talcum powder lawsuit if you or a loved one: ",
    allegationsSubtitle: "You may qualify if:  ",

    healthRisksTitle: "Talcum Powder, Baby Powder & Cancer Risk Explained",
    healthRisksParagraph:
      "Beyond its link to ovarian cancer, talcum powder exposure has been associated with several other serious health conditions. These risks arise primarily from inhaling talc particles or exposure to asbestos-contaminated products. Other health risks include:  ",
    healthRisksSubtitle: "Health Risks Linked to Ozempic Use ",
    healthRisksSubtitle2:
      "Reported health risks associated with Ozempic include: ",
    whoQualifiesTitle:
      "How Can an Ozempic Lawyer Help You Recover Compensation? ",
    whoQualifiesParagraph:
      "Many users of Ozempic or similar drugs have developed severe digestive issues like gastroparesis after using them for weight loss or diabetes. Lawsuits claim that manufacturers like Novo Nordisk and Eli Lilly failed to warn about these risks",
    whoQualifiesSubtitle: "An experienced Ozempic lawyer can help you: ",
    mdllitigationTitle:
      "Talcum Powder Lawsuit Updates: Latest Court Decisions & Case Status ",

    mdllitigationParagraph:
      "Thousands of claims remain active as courts evaluate liability, scientific evidence, and corporate conduct. Several verdicts have resulted in multi-million-dollar awards for victims, while appeals and settlement negotiations continue. ",

    compensationTitle:
      "Talcum Powder Settlements & Compensation: What You Can Expect ",
    compensationParagraph:
      "Victims of talcum powder exposure often face heavy medical costs, emotional distress, and loss of income due to long-term illness. Settlements can range from $100,000 to $1 million or more, based on the severity of harm and evidence presented.  ",
    compensationSubtitle: "Types of compensation include:  ",

    realStoriesTitle: "Real Stories Behind Lawsuit",

    stepsTitle: "How to File a Talcum Powder Lawsuit with Connect2Attorney? ",
    stepsParagraph:
      "Connect2Attorney guides you through the process of filing a Talcum Powder lawsuit against the responsible party, in just three simple steps: ",
  },

  ctaContent: {
    title: "Were You Affected? ",
    description: "You may be entitled to compensation. ",
    buttonText: "Get a Free Case Review",
  },

  steps: [
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
  ],
};
const TALCUM_TOC = [
  { label: "What is the Talcum Powder Lawsuit?", id: "main-title" },
  { label: "Who is Eligible to File a Claim?", id: "allegations-title" },
  {
    label: "Talcum Powder, Baby Powder & Cancer Risk Explained",
    id: "health-risks-title",
  },
  {
    label: "Talcum Powder Lawsuit Updates & MDL Status",
    id: "mdl-litigation-title",
  },
  {
    label: "Talcum Powder Settlements & Compensation",
    id: "compensation-title",
  },
  { label: "Real Stories Behind the Lawsuit", id: "real-stories-title" },
  { label: "How to File a Talcum Powder Lawsuit", id: "steps-title" },
  { label: "Get Legal Support from Connect2Attorney", id: "get-legal-support" },
  { label: " Talcum Lawsuit Timeline", id: "timeline-section" },
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
            <TableOfContents items={TALCUM_TOC} />
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
            </div>

            {/* <Ozempicfreecasecard /> */}

            {/* <Ozempicfreecasecard /> */}
            <div className="bg-[#162766] text-[#FFF] rounded-xl p-4 sm:p-6 w-full  mb-16">
              <h2
                id={content.sectionIds.allegationsTitle}
                className="font-noto-serif font-normal capitalize text-[#FFF] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4"
              >
                <span className="text-[#FCCB48]">
                  {content.pageContent.allegationsTitle.split(" ")[0]}{" "}
                  {content.pageContent.allegationsTitle.split(" ")[1]}{" "}
                  {content.pageContent.allegationsTitle.split(" ")[2]}
                </span>{" "}
                {content.pageContent.allegationsTitle
                  .split(" ")
                  .slice(3)
                  .join(" ")}
              </h2>
              <p className="mb-4 font-urbanist   text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                {content.pageContent.allegationsParagraph}
              </p>
              <p className="mb-4 font-urbanist font-bold   text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                {content.pageContent.allegationsSubtitle}
              </p>
              <ul className="space-y-5 mb-2">
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

              <div className="space-y-4 w-full mb-16">
                {content.healthRisks.map((item, index) => (
                  <div
                    key={index}
                    className=" bg-[#F4F6F8] rounded-lg px-4 sm:px-6 py-5"
                  >
                    {/* Title + Number */}
                    <h4 className="font-noto-serif text-[#162766] text-[20px] sm:text-[24px] font-medium leading-normal mb-2">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="font-urbanist text-[#425777] text-[16px] sm:text-[18px] font-medium leading-[24px] sm:leading-[27px] capitalize">
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

              <p className="mb-4 font-poppins font-normal text-[#425777] text-[16px] leading-[27px]">
                {content.pageContent.mdllitigationParagraph}
              </p>

              <div className="space-y-4 w-full mb-16">
                {content.mdllitigationPoints.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#F4F6F8] rounded-lg px-4 sm:px-6 py-5"
                  >
                    {/* Description */}
                    <p className="font-urbanist font-bold text-[#425777] text-[16px] sm:text-[18px]  leading-[24px] sm:leading-[27px]">
                      {item.description}
                    </p>
                  </div>
                ))}
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
                                    font-medium
                                    leading-[27px]
                                    capitalize
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
                <TableOfContents items={TALCUM_TOC} />
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
