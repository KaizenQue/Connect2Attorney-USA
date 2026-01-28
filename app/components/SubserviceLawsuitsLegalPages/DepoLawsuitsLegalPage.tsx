"use client";
import React from "react";
// import Depo Provera freecasecard from "./Depo Provera freecasecard";
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
    tumorRisksTitle: "tumor-risks-title",
    realStoriesTitle: "real-stories-title",
    stepsTitle: "steps-title",
  },

  realStories: [
    {
      name: "Sandra Somarakis",
      story:
        "Sandra used Depo-Provera from 1996 to 2010 and was later diagnosed with meningioma. She underwent radiation therapy to completely remove the tumor.",
    },
    {
      name: "Taylor Devorak",
      story:
        "Taylor alleges that researchers have found a link between Depo-Provera and a higher incidence of brain tumors known as intracranial meningioma. She is seeking damages for failure to warn, defective design, negligence, and misrepresentation.",
    },
  ],

  eligibilityPoints: [
    {
      title: "Depo-Provera Use:",
      description: "You received Depo-Provera injections for birth control.",
    },
    {
      title: "Brain Tumor Diagnosis:",
      description: "You were diagnosed with a brain tumor, such as meningioma.",
    },
    {
      title: "Serious Medical Treatment:",
      description: "You required surgery, radiation, or long-term treatment.",
    },
    {
      title: "Failure to Warn:",
      description:
        "You were not adequately warned about the risk of brain tumors.",
    },
    {
      title: "Wrongful Death or Severe Complications:",
      description:
        "A loved one suffered severe complications or passed away after Depo-Provera use.",
    },
  ],

  healthRisks: [
    {
      number: "01",
      title: "Bone Mineral Density Loss",
      description:
        "Using Depo-Provera for long periods has been linked to a significant decrease in bone mineral density (BMD), leading to weakened bones and an increased risk of fractures.",
    },
    {
      number: "02",
      title: "Brain Tumor",
      description:
        "Some women have filed lawsuits alleging that long-term use of Depo-Provera contributed to the development of brain tumors, particularly meningiomas.",
    },
    {
      number: "03",
      title: "Menstrual Cycle Changes",
      description:
        "Some women reported extremely heavy bleeding, while others experienced complete amenorrhea (no periods).",
    },
    {
      number: "04",
      title: "Bloating and Abdominal Pain",
      description:
        "Women using Depo-Provera reported digestive discomfort, bloating, lower abdominal pain, and frequent headaches.",
    },
    {
      number: "05",
      title: "Cardiovascular Risks",
      description:
        "Emerging research and user reports have suggested a possible link between long-term use of Depo-Provera and an increased risk of heart disease.",
    },
  ],

  whoQualifies: [
    {
      description: "Failure to warn users about brain tumor risks.",
    },
    {
      description: "Defective drug design.",
    },
    {
      description: "Negligent marketing practices.",
    },
    {
      description: "Misrepresentation of long-term safety.",
    },
    {
      description: "Corporate negligence and lack of informed consent.",
    },
  ],

  compensation: [
    {
      title: "Medical Expenses",
      description:
        "Costs of diagnosis, treatment, medication, surgeries, and long-term care.",
    },
    {
      title: "Lost Wages",
      description:
        "Income lost due to time away from work or reduced earning capacity.",
    },
    {
      title: "Pain and Suffering",
      description:
        "Compensation for physical pain, emotional distress, and reduced quality of life.",
    },
    {
      title: "Future Medical Needs",
      description:
        "Projected healthcare expenses if your condition requires ongoing treatment.",
    },
    {
      title: "Wrongful Death Damages",
      description:
        "If a loved one died due to Depo-Provera-related complications, surviving family members may be entitled to funeral costs and additional damages.",
    },
  ],

  mdllitigationPoints: [
    {
      title: "Grouped Cases:",
      description:
        "U.S. District Judge M. Casey Rodgers, who is overseeing about 2,000 Depo-Provera lawsuits, heard oral arguments on Pfizer's federal preemption motion on Sept. 29.",
    },
    {
      title: "Current Status:",
      description:
        "The judge set the first Depo-Provera trial for Dec. 7, 2026. ",
    },
    {
      title: "Ongoing Filings:",
      description:
        "The U.S. Food and Drug Administration (FDA) has approved a label change for Pfizer’s Depo-Provera birth control injection to include a warning about the risk of meningioma, a type of brain tumor affecting the lining of the brain.",
    },
  ],

  pageContent: {
    mainTitle: "What is a Depo-Provera Lawsuit?",
    mainParagraphs: [
      "Depo Provera has been widely used as a long-acting birth control injection for many years. However, growing concerns about serious health risks, including potential links to brain tumors, have led many individuals to file a Depo Provera lawsuit against drug manufacturers. If you or a loved one experienced severe side effects after using Depo-Provera (the Depo Shot), you may be eligible to seek compensation. We’re here to help you understand your options and take the next step.",
      "The Depo Provera lawsuit centers on allegations that long-term use of the Depo Provera contraceptive injection increases the risk of developing brain tumors, particularly meningiomas. Plaintiffs claim that manufacturers, Pfizer and Prasco Labs, failed to provide adequate warnings to patients and healthcare providers about these risks.",
      "Women who relied on Depo-Provera for birth control allege they were not fully informed of the potential long-term neurological dangers, leading to delayed diagnosis and severe medical consequences. Depo-Provera is an injectable hormonal contraceptive administered once every three months. It contains medroxyprogesterone acetate, a synthetic form of progesterone designed to prevent ovulation and pregnancy. ",
      "While effective, Depo Provera has been associated with several side effects, and recent studies have raised concerns about a possible link between prolonged use and brain tumor development, leading to an increase in depo lawsuit filings. ",
    ],
    tumorRisksTitle: "Depo Provera and Brain Tumor Risk",
    tumorRisksParagraph:
      "Medical research has increasingly examined the connection between Depo Provera and brain tumors, especially hormone-sensitive tumors like meningiomas. These tumors can press against the brain or spinal cord, causing serious neurological symptoms",
    tumorRisksParagraph2:
      "Many lawsuits allege that the hormonal composition of Depo-Provera may promote tumor growth when used over extended periods.",

    allegationsTitle: "Who is Eligible to File a Claim? ",
    allegationsParagraph:
      "Patients allege that Novo Nordisk failed to warn about gastroparesis, a condition that delays stomach emptying. They also claim the company downplayed serious side effects in its marketing while ignoring early signs of harm.",
    allegationsSubtitle:
      "You may be eligible to file an Depo Provera  lawsuit if: ",

    healthRisksTitle: "What are the Side Effects of Depo Provera? ",
    healthRisksParagraph:
      "A French study found that women who used Depo Provera for over a year had a 5.6 times higher risk of developing meningioma, a type of brain tumor. In addition to this serious concern, the shot has been linked to fertility issues and more common side effects like nausea and headaches.   ",
    healthRisksSubtitle:
      "Here are some of the commonly reported health effects of Depo Provera:   ",
    healthRisksSubtitle2:
      "Reported health risks associated with Depo Provera  include: ",

    whoQualifiesTitle: "Depo Provera Legal Claims  ",
    whoQualifiesParagraphTitle:
      "The Depo Provera lawsuit and individual claims typically allege:",
    whoQualifiesParagraph:
      "Many users of Depo Provera  or similar drugs have developed severe digestive issues like gastroparesis after using them for weight loss or diabetes. Lawsuits claim that manufacturers like Novo Nordisk and Eli Lilly failed to warn about these risks",
    whoQualifiesSubtitle:
      "If you’ve suffered harm, you may qualify to file a lawsuit under the following conditions:  ",
    mdllitigationTitle:
      "Depo Provera Legal News: MDL Updates & Litigation Status ",

    mdllitigationParagraph:
      "Pfizer is currently battling a lawsuit in which more than 1,000 women claim the company knew about the risk and failed to warn patients. ",

    compensationTitle: "What Compensation Can You Get? ",
    compensationParagraph:
      "The compensation depends on the severity of your condition and how it has impacted your life. Victims with serious, long-term effects such as meningioma may be entitled to higher payouts. Estimated settlement values range from $150,000 for minor injuries to over $1,500,000 for severe cases. ",
    compensationSubtitle:
      "If eligible, you may be able to recover damages such as:",

    realStoriesTitle: "Real Stories Behind Lawsuit",

    stepsTitle: "How to File an Depo Provera  Lawsuit with Connect2Attorney?",
    stepsParagraph:
      "Connect2Attorney guides you through the process of filing an Depo Provera  lawsuit against the responsible party, in just three simple steps:",
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
const DepoProvera_TOC = [
  { label: "What is a Depo-Provera Lawsuit?", id: "main-title" },
  { label: "Who is Eligible to File a Claim?", id: "allegations-title" },
  { label: "Depo Provera and Brain Tumor Risk", id: "tumor-risks-title" },
  {
    label: "What are the Side Effects of Depo Provera?",
    id: "health-risks-title",
  },
  { label: "Depo Provera Legal Claims", id: "who-qualifies-title" },
  {
    label: "Depo Provera Legal News: MDL Updates & Litigation Status",
    id: "mdl-litigation-title",
  },
  { label: "What Compensation Can You Get?", id: "compensation-title" },
  { label: "Real Stories Behind the Lawsuit", id: "real-stories-title" },
  {
    label: "How to File a Depo Provera Lawsuit with Connect2Attorney?",
    id: "steps-title",
  },
  { label: "Depo Provera Lawsuit Timeline", id: "timeline-section" },
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
        {/* ==================== SECTION 1: Depo Provera  Lawsuit ==================== */}

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
            <TableOfContents items={DepoProvera_TOC} />
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
              <br className="lg:hidden" />

              <h3 className="">{content.pageContent.mainParagraphs[2]}</h3>

              <p>{content.pageContent.mainParagraphs[3]}</p>
            </div>

            {/* <Depo Provera freecasecard /> */}
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

            <h2
              id={content.sectionIds.tumorRisksTitle}
              className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
            >
              {content.pageContent.tumorRisksTitle}
            </h2>

            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.tumorRisksParagraph}
            </p>
            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.tumorRisksParagraph2}
            </p>
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

                <p className="mb-4 font-urbanist font-normal text-[#F9F9F9] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                  {content.pageContent.whoQualifiesParagraphTitle}
                </p>

                <p className="mb-4 font-urbanist font-bold text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                  {content.pageContent.whoQualifiesSubtitle}
                </p>

                <ul className="space-y-8 mb-2">
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
                id={content.sectionIds.mdllitigationTitle}
                className="font-noto-serif font-normal capitalize text-[#162766] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4"
              >
                {content.pageContent.mdllitigationTitle}
              </h2>

              <p className="mb-4 font-poppins font-normal text-[#425777] text-[16px] lg:text-[18px] leading-[27px]">
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
                    <span className="font-urbanist text-[#425777] text-[16px] lg:text-[18px] leading-[27px]">
                      <span className="font-normal">{item.description}</span>
                    </span>
                  </li>
                ))}
              </ul>
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
                
                    <button  onClick={scrollToNextSection}  className="w-full bg-[#fccb48] hover:bg-[#eebb20] text-[#162766] font-poppins font-semibold text-[16px] leading-normal tracking-[0.32px] uppercase text-center py-3 px-4 rounded transition-colors duration-200">
                      {content.ctaContent.buttonText}
                    </button>
                  
                </div>
              </div>
              <div className="mb-8">
                <TableOfContents items={DepoProvera_TOC} />
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
