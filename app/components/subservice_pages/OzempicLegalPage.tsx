"use client";
import React from "react";
import Ozempicfreecasecard from "./Ozempicfreecasecard";
import TableOfContents from "./TableOfContents";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Centralized text content object for reusability
export const OzempicContent = {
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
        "Patients were not adequately warned about the risk of gastroparesis — a severe form of stomach paralysis that can cause persistent nausea, vomiting, abdominal pain, and long-term digestive complications.",
    },
    {
      title: "Misleading Marketing and Safety Claims:",
      description:
        "Marketing materials allegedly minimized or downplayed serious side effects, creating the impression that the drug was safer than evidence suggested.",
    },
    {
      title: "Omission of Vision Loss Warnings:",
      description:
        "Despite emerging reports and studies linking the drug to potential vision problems, these risks were not clearly disclosed on warning labels or patient information.",
    },
    {
      title: "Ignoring Critical Safety Signals:",
      description:
        "Internal data, adverse event reports, and patient complaints describing gastrointestinal harm were allegedly dismissed, delayed, or overlooked instead of being promptly addressed.",
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
        "You took Ozempic, Wegovy, Mounjaro, Rybelsus, Saxenda, Trulicity, or Zepbound as prescribed for weight loss or diabetes management.",
    },
    {
      description:
        "You were diagnosed with gastroparesis, intestinal blockage, or experienced chronic and uncontrollable vomiting that required medical treatment.",
    },
    {
      description:
        "Your symptoms began during treatment or shortly after taking the medication, without a prior history of the condition or with a significant worsening of existing symptoms.",
    },
    {
      description:
        "You are within your state's statute of limitations, meaning you may still be eligible to file a lawsuit and pursue compensation.",
    },
  ],

  compensation: [
    {
      title: "Medical Expenses",
      description:
        "Compensation for hospital stays, doctor visits, medications, diagnostic testing, and surgeries required to treat Ozempic-related health complications.",
    },
    {
      title: "Lost Wages",
      description:
        "Reimbursement for income lost due to missed work, reduced earning capacity, or extended recovery caused by severe side effects and ongoing medical treatment.",
    },
    {
      title: "Pain and Suffering",
      description:
        "Financial compensation for physical pain, emotional distress, mental anguish, and the diminished quality of life caused by serious injuries.",
    },
    {
      title: "Punitive Damages",
      description:
        "In certain cases, additional damages may be awarded if the manufacturer is found to have knowingly withheld safety information or acted with reckless disregard for patient health.",
    },
  ],

  pageContent: {
    mainTitle: "What is an Ozempic Lawsuit?",
    mainParagraphs: [
      "<span class='font-bold'>Ozempic (semaglutide)</span> is an injectable drug approved for type 2 diabetes but increasingly used for weight loss. It belongs to a class of medications called GLP-1 receptor agonists, which affect insulin levels and appetite.",
      "Users have reported severe gastrointestinal issues and other side effects that were not properly disclosed. As of 2025, Novo Nordisk faces multiple lawsuits for failing to warn consumers about these risks If you or a loved one has experienced serious side effects after using Ozempic, Wegovy, or Mounjaro, you may be eligible for compensation. We're ready to help you take action.",
      "More than 2,000 multidistrict litigation (MDL) lawsuits have been filed against the manufacturers of Ozempic, including Novo Nordisk and Eli Lilly. These lawsuits allege that the companies failed to adequately warn patients and healthcare providers about the risk of serious and potentially irreversible gastrointestinal side effects.",
    ],

    allegationsTitle: "What are the Allegations Against Ozempic?",
    allegationsParagraph:
      "Patients allege that Novo Nordisk failed to warn about gastroparesis, a condition that delays stomach emptying. They also claim the company downplayed serious side effects in its marketing while ignoring early signs of harm.",
    allegationsSubtitle: "Allegations against the manufacturers include:",

    healthRisksTitle: "What are the Health Risks of Ozempic?",
    healthRisksParagraph:
      "Affected individuals argue that the manufacturer failed to disclose the potential risks associated with prolonged use of the drug.",
    healthRisksSubtitle: "These health issues include:",

    whoQualifiesTitle: "Who Qualifies for an Ozempic Lawsuit?",
    whoQualifiesParagraph:
      "Many users of Ozempic or similar drugs have developed severe digestive issues like gastroparesis after using them for weight loss or diabetes. Lawsuits claim that manufacturers like Novo Nordisk and Eli Lilly failed to warn about these risks",
    whoQualifiesSubtitle: "You may be eligible to file a claim if:",

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
    title: "Ready to Get Started?",
    description:
      "Don't wait to seek the justice you deserve. Contact us today to schedule your free case evaluation.",
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

const sectionIds = {
  mainTitle: "what-is-ozempic-lawsuit",
  allegationsTitle: "allegations-against-ozempic",
  healthRisksTitle: "health-risks-ozempic",
  whoQualifiesTitle: "who-qualifies-ozempic",
  compensationTitle: "compensation-ozempic",
  realStoriesTitle: "real-stories",
  stepsTitle: "how-to-file-ozempic",
};

const OzempicLegalPage = () => {
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
          <TableOfContents/>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content Column */}
          <div className="flex-1 max-w-[946px]">
            <h1
              id={sectionIds.mainTitle}
              className="font-noto-serif font-normal capitalize text-[#162766] text-[30px] md:text-[40px] leading-[36px] mb-6"
            >
              {OzempicContent.pageContent.mainTitle}
            </h1>

            <p className="mb-10 font-urbanist font-medium text-[#425777] text-[18px] leading-[27px]">
              <span
                dangerouslySetInnerHTML={{
                  __html: OzempicContent.pageContent.mainParagraphs[0],
                }}
              />
              <br />
              {OzempicContent.pageContent.mainParagraphs[1]}
              <br />
              <br />
              {OzempicContent.pageContent.mainParagraphs[2]}
            </p>
            {/* <Ozempicfreecasecard /> */}
            <h2
              id={sectionIds.allegationsTitle}
              className="font-noto-serif font-normal capitalize text-[#162766] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4"
            >
              {OzempicContent.pageContent.allegationsTitle}
            </h2>

            <p className="mb-4 font-urbanist font-medium text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {OzempicContent.pageContent.allegationsParagraph}
            </p>

            <p className="mb-4 font-poppins font-bold text-[#425777] text-[18px] leading-[27px]">
              {OzempicContent.pageContent.allegationsSubtitle}
            </p>

            <ul className="list-disc list-outside ml-5 space-y-3 mb-8 marker:text-[#2d3663] marker:font-bold font-urbanist font-normal text-[16px] sm:text-[17px] lg:text-[18px] leading-[22px] sm:leading-[24px] lg:leading-[27px]">
              {OzempicContent.eligibilityPoints.map((item, index) => (
                <li key={index} className="pl-2">
                  <span className="text-[#425777] font-bold">{item.title}</span>{" "}
                  {item.description}
                </li>
              ))}
            </ul>

            {/* ==================== HEALTH RISKS SECTION ==================== */}
            <div className="mb-16">
              <h2
                id={sectionIds.healthRisksTitle}
                className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
              >
                {OzempicContent.pageContent.healthRisksTitle}
              </h2>

              <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {OzempicContent.pageContent.healthRisksParagraph}
              </p>

              <p className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {OzempicContent.pageContent.healthRisksSubtitle}
              </p>

              <div className="space-y-4 w-full mb-16">
                {OzempicContent.healthRisks.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#F4F6F8] rounded-lg px-4 sm:px-6 py-5"
                  >
                    {/* Title + Number */}
                    <h4 className="font-noto-serif text-[#162766] text-[20px] sm:text-[24px] font-medium leading-normal mb-2">
                      {item.number} – {item.title}
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
                  id={sectionIds.whoQualifiesTitle}
                  className="font-noto-serif font-normal capitalize text-[#FFF] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4"
                >
                  <span className="text-[#F2C438]">
                    {OzempicContent.pageContent.whoQualifiesTitle.split(" ")[0]}{" "}
                    {OzempicContent.pageContent.whoQualifiesTitle.split(" ")[1]}
                  </span>{" "}
                  {OzempicContent.pageContent.whoQualifiesTitle
                    .split(" ")
                    .slice(2)
                    .join(" ")}
                </h2>

                <p className="mb-4 font-urbanist font-normal text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px]">
                  {OzempicContent.pageContent.whoQualifiesParagraph}
                </p>

                <p className="mb-4 font-urbanist font-bold text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                  {OzempicContent.pageContent.whoQualifiesSubtitle}
                </p>

                <ul className="space-y-3 mb-8">
                  {OzempicContent.whoQualifies.map((item, index) => (
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
                id={sectionIds.compensationTitle}
                className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
              >
                {OzempicContent.pageContent.compensationTitle}
              </h2>

              <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {OzempicContent.pageContent.compensationParagraph}
              </p>

              <p className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {OzempicContent.pageContent.compensationSubtitle}
              </p>

              <ul className="rounded-xl p-4 sm:p-6 space-y-4 sm:space-y-6 w-full mb-16 bg-[#F0F2F4]">
                {OzempicContent.compensation.map((item, index) => (
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
                  id={sectionIds.realStoriesTitle}
                  className="font-noto-serif text-[#162766] text-[20px] sm:text-[22px] font-medium mb-4"
                >
                  {OzempicContent.pageContent.realStoriesTitle}
                </h3>

                {/* Stories */}
                <ul className="space-y-4">
                  {OzempicContent.realStories.map((item, index) => (
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
                id={sectionIds.stepsTitle}
                className="font-noto-serif font-normal text-[#162766] text-[30px] md:text-[40px] capitalize mb-4"
              >
                {OzempicContent.pageContent.stepsTitle}
              </h2>

              <p className="mb-8 font-urbanist font-medium text-[#425777] text-[18px] leading-[27px]">
                {OzempicContent.pageContent.stepsParagraph}
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
                    {OzempicContent.ctaContent.title}
                  </h3>

                  <p className="text-[#F9F9F9] font-urbanist font-medium text-[16px] leading-normal mb-6">
                    {OzempicContent.ctaContent.description}
                  </p>
                  <Link href="/contact-us">
                    <button className="w-full bg-[#fccb48] hover:bg-[#eebb20] text-[#162766] font-poppins font-semibold text-[16px] leading-normal tracking-[0.32px] uppercase text-center py-3 px-4 rounded transition-colors duration-200">
                      {OzempicContent.ctaContent.buttonText}
                    </button>
                  </Link>
                </div>
              </div>
              <div className="mb-8">
                <TableOfContents />
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

export default OzempicLegalPage;
