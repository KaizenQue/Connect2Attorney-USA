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
      name: "Todd Engel",
      story:
        "He was prescribed Ozempic in 2023 to manage his type 2 diabetes. Within four months, he was diagnosed with nonarteritic anterior ischemic optic neuropathy (NAION), which resulted in irreversible vision loss.",
    },
    {
      name: "Paulsen Bronston",
      story:
        "Paul was prescribed Ozempic to lower his blood sugar. He experienced severe side effects, including persistent diarrhea, which ultimately required gallbladder removal.",
    },
    {
      name: "Monica Church",
      story:
        "She began taking Ozempic to treat diabetes and soon developed symptoms including pain, vomiting, and gastroparesis. Monica reports she was not warned about the risk of serious digestive side effects before starting the medication.",
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
      title: "Severe Gastrointestinal Issues",
      description:
        "Reports indicate that Ozempic users have suffered from gastroparesis, a condition where the stomach muscles stop working properly, leading to chronic nausea, vomiting, and bloating.",
    },
    {
      number: "02",
      title: "Uncontrollable Vomiting",
      description:
        "Lawsuits have highlighted cases where individuals experienced excessive and repeated vomiting, leading to emergency medical treatment.",
    },
    {
      number: "03",
      title: "Gallbladder Diseases",
      description:
        "Medical studies have linked Ozempic to an increased risk of gallbladder problems. This includes gallstones and inflammation, requiring surgery in some cases.",
    },
    {
      number: "04",
      title: "Pancreatitis",
      description:
        "This inflammation of the pancreas causes severe abdominal pain and, in some cases, requires hospitalization and surgery.",
    },
    {
      number: "05",
      title: "Intestinal Blockage",
      description:
        "Paralysis or inflammation can cause food to build up in the intestines. This may lead to surgery or bowel removal.",
    },
  ],

  whoQualifies: [
    {
      description:
        "Review your medical history to determine your eligibility to file an Ozempic lawsuit claim.",
    },
    {
      description:
        "Gather medical records, prescriptions, and supporting evidence to build your case.",
    },
    {
      description:
        "File your lawsuit within all applicable legal deadlines and statute of limitations requirements.",
    },
    {
      description:
        "Pursue compensation for medical bills, lost income, pain and suffering, and other damages.",
    },
    {
      description:
        "Navigate the MDL process and participate in potential settlement negotiations or trial proceedings.",
    },
  ],

  compensation: [
    {
      title: "Medical Expenses",
      description:
        "Reimbursement for hospital visits, medications, and surgeries needed to treat Ozempic-related health complications.",
    },
    {
      title: "Lost Wages",
      description:
        "Compensation for time missed from work due to severe side effects and ongoing medical treatments.",
    },
    {
      title: "Pain and Suffering",
      description:
        "Financial awards for physical pain, emotional distress, and diminished quality of life.",
    },
    {
      title: "Punitive Damages",
      description:
        "In cases where the manufacturer is found to have knowingly withheld information about the drug’s risks, additional punitive damages may be awarded.",
    },
  ],

  mdllitigationPoints: [
    {
      title: "Grouped Cases:",
      description:
        "The Ozempic lawsuits have been combined in a federal court case called MDL No. 3094 to handle similar claims in the Eastern District of Pennsylvania.",
    },
    {
      title: "Current Status:",
      description:
        "As of December 2025, there are 2,947 lawsuits pending, overseen by Judge Karen Spencer Marston, with timelines for case management being set.",
    },
    {
      title: "Ongoing Filings:",
      description:
        "People are continuing to file new Ozempic lawsuits every day, showing that more individuals are coming forward with claims.",
    },
  ],

  pageContent: {
    mainTitle: "What is an Ozempic Lawsuit?",
    mainParagraphs: [
      "Ozempic has gained widespread attention as a treatment for type 2 diabetes and for its off-label use in weight loss. However, growing reports of severe gastrointestinal injuries have led many patients to file Ozempic lawsuits against drug manufacturers. If you or a loved one has experienced serious side effects after using Ozempic, Wegovy, or Mounjaro, you may be eligible for compensation. We’re ready to help you take action.",
      "Ozempic lawsuits allege that the companies failed to adequately warn patients and healthcare providers about the risk of serious and potentially irreversible gastrointestinal side effects of the drug. More than 2,000 multidistrict litigation (MDL) lawsuits have been filed against the manufacturers of Ozempic, including Novo Nordisk and Eli Lilly. As of 2025, Novo Nordisk faces multiple lawsuits for allegedly failing to warn consumers about the risks associated with Ozempic",
      "What Is Ozempic?",
      "Ozempic (semaglutide) is an FDA-approved prescription medication used to manage type 2 diabetes. It belongs to a class of drugs called GLP-1 receptor agonists, which help regulate blood sugar by slowing digestion and increasing insulin production. While Ozempic is not FDA-approved for weight loss, it has been widely prescribed off-label for that purpose. ",
    ],

    allegationsTitle: "Who is Eligible to File a Claim? ",
    allegationsParagraph:
      "Patients allege that Novo Nordisk failed to warn about gastroparesis, a condition that delays stomach emptying. They also claim the company downplayed serious side effects in its marketing while ignoring early signs of harm.",
    allegationsSubtitle: "You may be eligible to file an Ozempic lawsuit if: ",

    healthRisksTitle: "What are the Ozempic Side Effects? ",
    healthRisksParagraph:
      "While mild nausea and digestive discomfort were disclosed, many patients reported far more serious complications that were not clearly warned about. ",
    healthRisksSubtitle: "Health Risks Linked to Ozempic Use ",
    healthRisksSubtitle2:
      "Reported health risks associated with Ozempic include: ",
    whoQualifiesTitle:
      "How Can an Ozempic Lawyer Help You Recover Compensation? ",
    whoQualifiesParagraph:
      "Many users of Ozempic or similar drugs have developed severe digestive issues like gastroparesis after using them for weight loss or diabetes. Lawsuits claim that manufacturers like Novo Nordisk and Eli Lilly failed to warn about these risks",
    whoQualifiesSubtitle: "An experienced Ozempic lawyer can help you: ",
    mdllitigationTitle:
      "What Is the Current Status of the Ozempic Lawsuit and MDL Litigation?",

    mdllitigationParagraph:
      "Individuals are filing Ozempic lawsuits against Novo Nordisk due to gastroparesis and other serious gastrointestinal injuries. These cases have been consolidated into a federal multidistrict litigation (MDL) to streamline proceedings.",

    compensationTitle: "What Compensation Can You Seek?",
    compensationParagraph:
      "Patients harmed by Ozempic and similar drugs are pursuing compensation for the physical, emotional, and financial toll caused by undisclosed side effects. Novo Nordisk is already facing lawsuits worth over $2 billion, with potential settlements ranging from $300,000 to $700,000, depending on the severity of each case.",
    compensationSubtitle:
      "If eligible, you may be able to recover damages such as:",

    realStoriesTitle: "Real Stories Behind Lawsuit",

    stepsTitle: "How to File an Ozempic Lawsuit with Connect2Attorney?",
    stepsParagraph:
      "Connect2Attorney guides you through the process of filing an Ozempic lawsuit against the responsible party, in just three simple steps:",
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
const OZEMPIC_TOC = [
  { label: "What is an Ozempic Lawsuit?", id: "main-title" },
  { label: "Who is Eligible to File a Claim?", id: "allegations-title" },
  { label: "What are the Side Effects of Ozempic?", id: "health-risks-title" },
  {
    label:
      "What Is the Current Status of the Ozempic Lawsuit and MDL Litigation?",
    id: "mdl-litigation-title",
  },
  {
    label: "How Can an Ozempic Lawyer Help You Recover Compensation?",
    id: "who-qualifies-title",
  },
  { label: "What Compensation Can You Seek?", id: "compensation-title" },
  { label: "Real Stories Behind Ozempic Lawsuit", id: "real-stories-title" },
  {
    label: "How to File an Ozempic Lawsuit with Connect2Attorney?",
    id: "steps-title",
  },
  { label: "Ozempic Lawsuit Timeline", id: "timeline-section" },
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
      <div className="mx-auto px-2 sm:px-2 md:px-8 py-1 md:py-8">
        {/* ==================== SECTION 1: Ozempic Lawsuit ==================== */}
        {/* MOBILE / TABLET TOC */}
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
            <TableOfContents items={OZEMPIC_TOC} />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-18">
          {/* Left Content Column */}
          <div className="flex-1 max-w-[946px]">
            <h1
              id={content.sectionIds.mainTitle}
              className="
    font-noto-serif
    font-normal
    capitalize
    text-[#162766]

    text-[24px]
    leading-[30px]

    md:text-[32px]
    md:leading-[38px]

    lg:text-[40px]
    lg:leading-[48px]

    mb-6
  "
            >
              {content.pageContent.mainTitle}
            </h1>

            <div className="mb-10 font-urbanist font-medium text-[#425777] text-[16px] lg:text-[18px] leading-[27px] space-y-1">
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
            <br />
            <br />

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
                      <span className="font-bold">{item.title}</span>{" "}
                      <span className="font-normal">{item.description}</span>
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
              <div className="mb-8 ">
                <TableOfContents items={OZEMPIC_TOC} />
              </div>
            </div>
          </aside>
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
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-13">
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
