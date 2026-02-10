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
    currentTitle: "current-title",
    helpTitle: "help-title",
    realStoriesTitle: "real-stories-title",
    stepsTitle: "steps-title",
  },

  realStories: [
    {
      name: "Tabatha Means",
      story:
        " She filed a lawsuit against Lyft after her driver allegedly sexually abused her during a rideshare trip.",
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
      title: "Emotional and Psychological Impact",
      description:
        "Victims may suffer from anxiety, depression, or post-traumatic stress following an assault.",
    },
    {
      number: "02",
      title: "Financial Burden",
      description:
        "Medical bills, therapy costs, and lost wages can add significant financial stress to survivors. ",
    },
    {
      number: "03",
      title: "Company Accountability",
      description:
        "Questions arise over whether rideshare platforms took sufficient measures to prevent assaults. ",
    },
    {
      number: "04",
      title: "Public Safety Concerns",
      description:
        "Incidents raise awareness of potential risks in rideshare travel, affecting overall trust in the service. ",
    },
    {
      number: "05",
      title: " Legal and Reporting Challenges",
      description:
        "Victims may face difficulties handling the reporting process or pursuing legal action.  ",
    },
  ],

  whoQualifies: [
    {
      description: "You were sexually assaulted by a rideshare driver",
    },
    {
      description:
        "The assault occurred during or shortly after a rideshare trip",
    },
    {
      description:
        "You were a passenger using apps like Uber, Lyft, or similar services ",
    },
    {
      description:
        "The incident caused physical injury, emotional trauma, or financial losses ",
    },
  ],

  compensation: [
    {
      title: "Medical Expenses",
      description:
        "Coverage for treatment, therapy, and other healthcare costs related to the assault. ",
    },
    {
      title: "Lost Wages",
      description:
        "Compensation for income lost due to recovery time or inability to work.  ",
    },
    {
      title: "Pain and Suffering",
      description:
        "Monetary recognition for emotional distress, trauma, and mental anguish caused by the incident. ",
    },
    {
      title: "Punitive Damages",
      description:
        "Additional compensation intended to punish the responsible party and deter similar behavior in the future. ",
    },
    {
      title: "Legal Costs",
      description:
        "Reimbursement for attorney fees, court costs, and other expenses associated with pursuing the lawsuit. ",
    },
  ],

  mdllitigationPoints: [
    {
      description: "Uber, the largest rideshare company in the United States ",
    },
    {
      description: "Lyft, another widely used platform ",
    },
    {
      description: "Other regional or app-based rideshare services  ",
    },
  ],

  helpPoints: [
    {
      description: "Investigate the incident and preserve evidence ",
    },
    {
      description: "Handle communications with rideshare companies  ",
    },
    {
      description: "File claims within legal deadlines ",
    },
    {
      description: "File claims within legal deadlines ",
    },
    {
      description: "Pursue maximum compensation through settlement or trial ",
    },
  ],

  pageContent: {
    mainTitle: "What is Rideshare Sexual Assault Lawsuit?",
    mainParagraphs: [
      "Rideshare services like Uber and Lyft are meant to offer safe, convenient transportation. However, thousands of passengers across the United States have reported sexual assault during rideshare trips, leading to growing litigation against these companies. A Rideshare Sexual Assault Lawsuit allows survivors to seek justice, accountability, and financial compensation for the harm they suffered.",
      "If you or a loved one experienced sexual assault while using a rideshare app, you may have legal options. ",
      "A Rideshare Sexual Assault Lawsuit is a civil legal claim filed by passengers who were sexually assaulted by rideshare drivers or, in some cases, other passengers, while using platforms like Uber or Lyft. These lawsuits allege that rideshare companies failed to take reasonable steps to protect users, such as proper background checks, driver monitoring, or safety controls. ",
      "Unlike criminal cases, these lawsuits focus on financial compensation and corporate accountability, not criminal punishment. ",
      "About Rideshare Sexual Assault ",
      "Rideshare sexual assault refers to unwanted sexual contact, harassment, or violence that occurs during or immediately after a rideshare trip. Incidents may include groping, forced sexual acts, attempted rape, or other forms of sexual misconduct. ",
      "Many survivors report that the assault occurred when they were alone with the driver, intoxicated, asleep, or otherwise vulnerable, raising serious concerns about rideshare safety policies. ",
    ],

    allegationsTitle: "Who is Eligible to File a Claim? ",
    allegationsParagraph:
      "Survivors do not need a criminal conviction to file a civil lawsuit. Even if the assault was never reported to police, you may still have a valid legal claim. ",
    allegationsSubtitle:
      "You may be eligible to file a rideshare sexual assault lawsuit if:   ",

    healthRisksTitle:
      "Rideshare Safety Risks: Sexual Assault and Passenger Protection",
    healthRisksParagraph:
      "Rideshare sexual assault cases often raise broader concerns beyond the immediate harm to victims. Survivors may experience emotional trauma, financial strain, and fear of using shared transportation in the future.  ",
    healthRisksSubtitle: "Other issues related to rideshare sexual assault: ",

    whoQualifiesTitle:
      "How Can an Ozempic Lawyer Help You Recover Compensation? ",
    whoQualifiesParagraph:
      "Many users of Ozempic or similar drugs have developed severe digestive issues like gastroparesis after using them for weight loss or diabetes. Lawsuits claim that manufacturers like Novo Nordisk and Eli Lilly failed to warn about these risks",
    whoQualifiesSubtitle: "An experienced Ozempic lawyer can help you: ",
    mdllitigationTitle:
      "Common Rideshare Platforms Involved: Uber, Lyft & Others   ",

    mdllitigationSubtitle:
      "Most rideshare sexual assault lawsuits focus on major transportation apps, including: ",

    mdllitigationParagraph: [
      "Both Uber and Lyft have publicly acknowledged that sexual assault incidents occur on their platforms.  ",
      "According to Uber’s own safety reports, the company disclosed nearly 6,000 alleged sexual assaults in 2017–2018, 3,824 in 2019–2020, and 2,717 in 2021–2022, totaling over 12,500 reported incidents between 2017 and 2022. ",
      "Lyft’s safety transparency reports show more than 4,000 sexual assault incidents from 2017–2019 and about 2,651 during 2020–2022. Together, these figures suggest tens of thousands of reported sexual assault incidents over several years on U.S. rideshare trips.",
      "These published figures likely understate the real totals, as many victims never report assaults to police or rideshare companies, and litigation claims suggest the numbers could be much higher when including unreported cases. ",
    ],

    currentTitle:
      "Rideshare Sexual Assault Lawsuit Update: Current Legal Developments  ",

    currentParagraph: [
      "As of January 2026, over 3,000 Uber sexual assault lawsuits were pending in federal court, claiming the company failed to provide adequate safety measures, leading to incidents of sexual assault or harassment. Related cases are also coordinated in California courts. ",
      "A bellwether trial in Arizona began in January 2026, serving as a test case that could influence thousands of similar lawsuits. An adverse verdict for Uber may encourage settlements in other cases. ",
      "Lyft faces over 100 sexual assault lawsuits in California, with a motion filed in October 2025 to consolidate potentially hundreds more into a separate MDL. Both Uber and Lyft have been repeatedly sued for creating unsafe rideshare conditions, putting passengers at risk",
    ],

    helpTitle: "How a Rideshare Sexual Assault Lawyer Can Help Your Case? ",
    helpSubtitle:
      "A qualified sexual assault lawyer can guide survivors through the legal process with sensitivity and confidentiality. An experienced attorney can: ",

    compensationTitle:
      "Compensation & Settlements in Rideshare Assault Cases  ",
    compensationParagraph:
      "Victims of rideshare sexual assault often face physical injuries, emotional trauma, and financial burdens. The aftermath can include medical bills, therapy costs, lost wages, and ongoing stress. ",

    compensationSubtitle: "Types of compensation you may be eligible for:  ",

    realStoriesTitle: "Real Stories Behind Lawsuit",

    stepsTitle:
      "How to File a Rideshare Sexual Assault Lawsuit with Connect2Attorney? ",
    stepsParagraph:
      "Connect2Attorney guides you through the process of filing a rideshare sexual assault lawsuit against the responsible party, in just three simple steps:  ",
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
  { label: "What is Rideshare Sexual Assault Lawsuit?", id: "main-title" },
  { label: "Who is Eligible to File a Claim?", id: "allegations-title" },
  {
    label: "Rideshare Safety Risks: Sexual Assault and Passenger Protection   ",
    id: "health-risks-title",
  },
  {
    label: "Common Rideshare Platforms Involved: Uber, Lyft & Others ",
    id: "mdl-litigation-title",
  },
  {
    label:
      "Rideshare Sexual Assault Lawsuit Update: Current Legal Developments   ",
    id: "current-title",
  },
  {
    label: "How a Rideshare Sexual Assault Lawyer Can Help Your Case?   ",
    id: "help-title",
  },
  {
    label: "Compensation & Settlements in Rideshare Assault Cases ",
    id: "compensation-title",
  },
  { label: "Real Stories Behind the Lawsuit", id: "real-stories-title" },
  {
    label: "How to File a Rideshare Sexual Assault Lawsuit",
    id: "steps-title",
  },
  { label: "Get Legal Support from Connect2Attorney", id: "get-legal-support" },
  {
    label: "Rideshare Sexual Assualt Lawsuit Timeline",
    id: "timeline-section",
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
              <br />

              <p>{content.pageContent.mainParagraphs[1]}</p>
              <br />

              <p>{content.pageContent.mainParagraphs[2]}</p>

              <p>{content.pageContent.mainParagraphs[3]}</p>

              <br />
              <p className="font-bold">
                {content.pageContent.mainParagraphs[4]}
              </p>

              <br />

              <p>{content.pageContent.mainParagraphs[5]}</p>
              <br />
              <p>{content.pageContent.mainParagraphs[6]}</p>
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

              <p className="mb-4 font-urbanist   text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                {content.pageContent.allegationsParagraph}
              </p>
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
                      {item.number} - {item.title}
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
                {content.pageContent.mdllitigationSubtitle}
              </p>

              <div className="space-y-4 w-full mb-5">
                <ul className="space-y-4">
                  {content.mdllitigationPoints.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      {/* Bullet */}
                      <span className=" text-[#162766] text-[16px]">•</span>

                      {/* Text */}
                      <p className="font-urbanist font-bold text-[#425777] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mb-4 font-poppins font-normal text-[#425777] text-[16px] leading-[27px]">
                {content.pageContent.mdllitigationParagraph[0]}
              </p>

              <p className="mb-4 font-poppins font-normal text-[#425777] text-[16px] leading-[27px]">
                {content.pageContent.mdllitigationParagraph[1]}
              </p>

              <p className="mb-4 font-poppins font-normal text-[#425777] text-[16px] leading-[27px]">
                {content.pageContent.mdllitigationParagraph[2]}
              </p>

              <p className="mb-4 font-poppins font-normal text-[#425777] text-[16px] leading-[27px]">
                {content.pageContent.mdllitigationParagraph[3]}
              </p>

              <h2
                id={content.sectionIds.currentTitle}
                className="font-noto-serif mt-10 font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
              >
                {content.pageContent.currentTitle}
              </h2>
              <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.currentParagraph[0]}
              </p>

              <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.currentParagraph[1]}
              </p>

              <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.currentParagraph[2]}
              </p>

              <h2
                id={content.sectionIds.helpTitle}
                className="font-noto-serif mt-10 font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
              >
                {content.pageContent.helpTitle}
              </h2>

              <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.helpSubtitle}
              </p>

              <div className="space-y-4 w-full mb-5">
                <ul className="space-y-4">
                  {content.helpPoints.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      {/* Bullet */}
                      <span className=" text-[#162766] text-[16px]">•</span>

                      {/* Text */}
                      <p className="font-urbanist font-bold text-[#425777] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <h2
                id={content.sectionIds.compensationTitle}
                className="font-noto-serif mt-10 font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
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

                  <button
                    onClick={scrollToNextSection}
                    className="w-full bg-[#fccb48] hover:bg-[#eebb20] text-[#162766] font-poppins font-semibold text-[16px] leading-normal tracking-[0.32px] uppercase text-center py-3 px-4 rounded transition-colors duration-200"
                  >
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
