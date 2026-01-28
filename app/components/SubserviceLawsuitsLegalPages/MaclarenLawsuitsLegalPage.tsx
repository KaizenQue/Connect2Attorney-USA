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
    eligibleTitle: "allegations-title",
    healthRisksTitle: "health-risks-title",
    allegationsTitle1: "allegations-title1",
    harmsExpiriencedTitle: "harms-experienced-title",
    whoQualifiesTitle: "who-qualifies-title",
    compensationTitle: "compensation-title",
    settlementImpactTitle: "settlement-impact-title",
    realStoriesTitle: "real-stories-title",
    stepsTitle: "steps-title",
    updateTitle: "lawsuit-update-title",
  },
  updatePoints: [
    {
      item: "More than 6,800 survivors of childhood sexual abuse are covered under the agreement.",
    },
    {
      item: "Over 3,500 former MacLaren Hall residents are included among the beneficiaries.",
    },
    {
      item: "Claims span abuse allegations dating back several decades.",
    },
    {
      item: "Compensation will be distributed through independent claims administrators based on severity of abuse, duration, and supporting evidence.",
    },
  ],

  realStories: [
    {
      name: "Survivor A",
      story:
        "Described being repeatedly assaulted by staff while others ignored their cries for help.",
    },
    {
      name: "Survivor B",
      story:
        "Was physically beaten for minor infractions and left in isolation for hours at a time.",
    },
    {
      name: "Survivor C",
      story:
        "Reported living in constant fear, witnessing other children being abused, and receiving no emotional support.",
    },
  ],
  settlementTakeaways: [
    { item: "Nearly 7,000 sexual abuse claims were resolved." },
    {
      item: "Average estimated compensation is approximately $570,000 per survivor (not a guarantee).",
    },
    {
      item: "Claims are reviewed through a structured, tiered or point-based evaluation system.",
    },
  ],

  settlementFactors: [
    { item: "Severity, duration, and frequency of abuse." },
    { item: "Survivor’s age at the time of abuse." },
    { item: "Long-term psychological or physical harm." },
    { item: "Evidence of institutional failures or cover-ups." },
  ],

  eligibilityPoints: [
    {
      title: "Resident at MacLaren Hall:",
      description:
        "You were housed at MacLaren Hall as a minor between 1961 and 2003.",
    },
    {
      title: "Experienced Sexual Abuse:",
      description:
        "You experienced sexual abuse, assault, or other inappropriate conduct while in the facility.",
    },
    {
      title: "Abuse by Authority Figures:",
      description:
        "The abuse was committed by staff, contractors, or others in positions of authority.",
    },
    {
      title: "Long-Term Harm:",
      description:
        "You suffered long-term emotional, psychological, or physical harm as a result of the abuse.",
    },
  ],

  healthRisks: [
    {
      number: "01",
      title: "Emotional Distress and Psychological Trauma",
      description:
        "Survivors often suffer from long-term emotional distress, PTSD, anxiety, depression, and other psychological injuries resulting from the abuse.",
    },
    {
      number: "02",
      title: "Pain and Suffering",
      description:
        "Compensation may be sought for the physical pain, emotional anguish, fear, humiliation, and lasting suffering caused by the abuse.",
    },
    {
      number: "03",
      title: "Loss of Quality of Life",
      description:
        "Many survivors experience difficulty maintaining relationships, working, or enjoying daily life due to lasting trauma.",
    },
    {
      number: "04",
      title: "Therapy, Counseling, and Medical Expenses",
      description:
        "Survivors often require years of therapy, psychiatric care, medications, and other medical treatment to cope with the effects of abuse.",
    },
    {
      number: "05",
      title: "Lost Educational or Career Opportunities",
      description:
        "Abuse and trauma can disrupt education and career paths, leading to long-term financial and professional losses.",
    },
    {
      number: "06",
      title: "Punitive Damages",
      description:
        "In cases involving gross negligence or intentional misconduct, courts may award punitive damages to punish and deter wrongful conduct.",
    },
  ],

  whoQualifies: [
    {
      description: "You lived at MacLaren Hall between 1961 and 2003.",
    },
    {
      description:
        "You were sexually abused, physically abused, emotionally abused, or severely neglected.",
    },
    {
      description:
        "You suffer from lasting emotional trauma, PTSD, depression, or psychological injuries.",
    },
    {
      description:
        "You are filing within California’s allowed statute of limitations or revival window.",
    },
  ],

  compensation: [
    {
      title: "Evaluate your eligibility for a sex abuse lawsuit ",
      description:
        "Compensation for therapy, counseling, psychiatric care, medications, and long-term mental health treatment.",
    },
    {
      title: "Gather records, testimony, and supporting evidence ",
      description:
        "Damages for emotional trauma, PTSD, fear, humiliation, and lifelong psychological harm.",
    },
    {
      title: "Handle all legal filings and deadlines ",
      description:
        "Compensation for relationship difficulties, work impairment, and lasting emotional distress.",
    },
    {
      title: "Negotiate settlements or pursue trial if needed ",
      description:
        "In some cases, courts may award additional damages to punish systemic and institutional misconduct.",
    },
    {
      title: "Protect your privacy and advocate for survivor-focused justice",
    },
  ],

  allegationPoints: [
    {
      item: "Sexual abuse by staff members and other authority figures.",
    },
    {
      item: "Physical violence and excessive or cruel punishment.",
    },
    {
      item: "Neglect, intimidation, and emotional or psychological abuse.",
    },
    {
      item: "Unsafe, overcrowded, and unsanitary living conditions.",
    },
  ],

  harmPoints: [
    {
      item: "Survivors generally have until age 40 to file a civil sexual abuse lawsuit, or ",
    },
    {
      item: "Five years from the date they discovered (or reasonably should have discovered) the psychological harm caused by the abuse ",
    },
    {
      item: "The law included a three-year lookback window, enabling survivors with previously time-barred sexual abuse claims to pursue legal action. ",
    },
  ],

  pageContent: {
    mainTitle: "What is the MacLaren Hall Sex Abuse Lawsuit? ",
    mainParagraphs: [
      "The MacLaren Hall sex abuse lawsuit gives survivors of abuse at the former Los Angeles County juvenile facility a legal path to seek justice, accountability, and compensation. Survivors who suffered sexual abuse, physical abuse, or neglect while housed at MacLaren Hall may now have expanded rights under California law to file a sex abuse lawsuit, even decades after the abuse occurred. ",
      "Connect 2 Attorney helps survivors understand their legal options and connect with experienced attorneys who handle institutional sex abuse lawsuits with compassion and confidentiality. If you or someone you love was abused at MacLaren Hall, you are eligible for justice and compensation. ",
      "The MacLaren Hall sex abuse lawsuit refers to legal claims filed by former residents who allege they were sexually abused, assaulted, or mistreated while detained at MacLaren Hall, a now-closed juvenile detention and assessment facility operated by Los Angeles County. This lawsuit typically falls under child sexual abuse lawsuits and holds government entities and responsible parties accountable for failing to protect vulnerable children. ",
      "About MacLaren Hall Sex Abuse ",
      "MacLaren Hall was operational from 1961 to 2003 as an intake and detention center for children in Los Angeles County’s foster care and juvenile justice systems. Many children housed at MacLaren Hall were already vulnerable, making the alleged abuse especially traumatic. These reports eventually led to investigations, public scrutiny, and the facility’s permanent closure. ",
    ],

    eligibleTitle: "Who is Eligible to File a Claim?",
    eligibleParagraph:
      "You may be eligible to file a MacLaren Hall sex abuse lawsuit if: ",
    allegationsSubtitle:
      "You may be eligible to file a MacLaren Hall lawsuit if:",
    allegationsTitle1: "Allegations of Abuse at MacLaren Hall:",
    allegationsTitle2: "What Survivors Report?  ",
    harmsExpiriencedTitle: "What Are the Harms Experienced by Survivors?",
    harmsExpiriencedParagraph:
      "Under California’s Child Victims Act (Assembly Bill 218), the law significantly expanded the rights of survivors of childhood sexual abuse. As it stands today:",
    harmsExpiriencedFooter:
      "If you experienced abuse at MacLaren Hall, a qualified lawyer can help you understand how compensation is calculated, whether you qualify for current or future settlements, and how to protect your right to pursue a sex abuse lawsuit.",
    allegationsParagraph:
      "Survivors describe an environment of rampant cruelty, neglect, and terror. Over the years, survivors have reported:",
    healthRisksTitle:
      "Settlements & Compensation in MacLaren Hall Sex Abuse Cases  ",
    healthRisksParagraph:
      "Survivors of sexual abuse at MacLaren Hall may be entitled to significant financial compensation through a civil sex abuse lawsuit. These claims aim to address the deep and lasting harm caused by institutional abuse and the county’s failure to protect children in its care. ",
    healthRisksSubtitle:
      "Compensation in MacLaren Hall abuse cases may include damages for: ",
    healthRisksFooter:
      " Every claim is evaluated individually, and compensation depends on the specific facts of the survivor’s experience.  ",
    whoQualifiesTitle: "Who Qualifies for a MacLaren Hall Lawsuit?",
    whoQualifiesParagraph:
      "Many former residents continue to suffer long-term trauma due to the abuse and neglect they endured at MacLaren Hall.",
    whoQualifiesSubtitle: "You may be eligible to file a claim if:",

    compensationTitle: "How a MacLaren Hall Sex Abuse Attorney Can Help You?  ",
    compensationParagraph:
      "An experienced MacLaren Hall sex abuse lawyer can: ",
    compensationSubtitle:
      "If eligible, you may be able to recover damages such as:",
    updateTitle:
      "MacLaren Hall Sex Abuse Lawsuit Update: Court Status & Developments",

    updateParagraph:
      "The MacLaren Hall Sex Abuse Lawsuit has reached a historic turning point. In April 2025, the Los Angeles County Board of Supervisors unanimously approved a $4 billion settlement to resolve thousands of sexual abuse claims involving MacLaren Hall and other county-run juvenile detention facilities. This unprecedented resolution is among the largest institutional sex abuse settlements in U.S. history and reflects decades of alleged systemic failures to protect children in county care.",
    updatesubtitle: "Key Developments in the MacLaren Hall Lawsuit:",
    updateFooter:
      "This settlement represents formal accountability by Los Angeles County and acknowledges the widespread and systemic nature of abuse across its juvenile facilities.",
    settlementImpactTitle:
      "Impact Of The $4 Billion Los Angeles County Settlement",

    settlementImpactParagraph:
      "In 2025, Los Angeles County approved a historic $4 billion settlement resolving thousands of childhood sexual abuse claims connected to MacLaren Hall and other juvenile facilities. This landmark agreement is reshaping how MacLaren Hall claims are evaluated and valued going forward.",

    settlementImpactSubtitle1: "Key takeaways from the settlement include:",

    settlementImpactSubtitle2:
      "Factors considered in settlement evaluations typically include:",

    settlementImpactFooter:
      "Because evidence tied to MacLaren Hall is particularly strong, survivors from this facility may be well-positioned for higher settlement valuations.",

    realStoriesTitle: "Real Stories Behind the MacLaren Hall Abuse Claims",

    stepsTitle:
      "How to File a MacLaren Hall Abuse Lawsuit with Connect2Attorney?",
    stepsParagraph:
      "Connect2Attorney helps survivors pursue justice through a private and supportive legal process:",
  },

  ctaContent: {
    title: "Were You Affected?",
    description: "You may be entitled to compensation. ",
    buttonText: "Get a Free Case Review",
  },

  steps: [
    {
      step: 1,
      title: "Submit a Free Case Review",
      description:
        "Share your experience privately with our legal intake team.",
    },
    {
      step: 2,
      title: "Confirm Eligibility",
      description:
        "Our attorneys review your case and confirm whether you qualify under California law.",
    },
    {
      step: 3,
      title: "File Your Case",
      description:
        "If eligible, your legal team will handle filing, negotiations, and the entire legal process.",
    },
  ],
};

const MACLAREN_TOC = [
  { label: "What is the MacLaren Hall Sex Abuse Lawsuit?", id: "main-title" },

  { label: "Who is Eligible to File a Claim?", id: "allegations-title" },

  { label: "Allegations of Abuse at MacLaren Hall", id: "allegations-title" },

  { label: "Harms Experienced by Survivors", id: "harms-experienced-title" },

  { label: "MacLaren Hall Lawsuit Update", id: "lawsuit-update-title" },

  { label: "Settlements & Compensation", id: "health-risks-title" },

  {
    label: "Impact of the $4 Billion Settlement",
    id: "settlement-impact-title",
  },

  { label: "Real Stories", id: "real-stories-title" },

  { label: "How a MacLaren Hall Lawyer Can Help", id: "compensation-title" },

  { label: "How to File a Lawsuit", id: "steps-title" },
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
            <TableOfContents items={MACLAREN_TOC} />
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

              <p>{content.pageContent.mainParagraphs[1]}</p>
              <br />

              <p>{content.pageContent.mainParagraphs[2]}</p>

              <br />
              <h3 className=" font-bold">
                {content.pageContent.mainParagraphs[3]}
              </h3>

              <p>{content.pageContent.mainParagraphs[4]}</p>
            </div>

            <div className="bg-[#162766] text-[#FFF] rounded-xl p-4 sm:p-6 w-full  mb-16">
              <h2
                id={content.sectionIds.eligibleTitle}
                className="font-noto-serif font-normal capitalize text-[#FFF] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4"
              >
                <span className="text-[#FCCB48]">
                  {content.pageContent.eligibleTitle.split(" ")[0]}{" "}
                  {content.pageContent.eligibleTitle.split(" ")[1]}{" "}
                  {content.pageContent.eligibleTitle.split(" ")[2]}
                </span>{" "}
                {content.pageContent.eligibleTitle
                  .split(" ")
                  .slice(3)
                  .join(" ")}
              </h2>

              <p className="mb-4 font-urbanist  font-bold text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                {content.pageContent.eligibleParagraph}
              </p>

              <ul className="space-y-3">
                {content.eligibilityPoints.map((item, index) => (
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
                    <p className="font-urbanist text-[#F9F9F9] text-[16px] sm:text-[18px] font-normal leading-[24px] sm:leading-[27px]">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2
                id={content.sectionIds.allegationsTitle1}
                className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize "
              >
                {content.pageContent.allegationsTitle1}
              </h2>
              <h2
                id={content.sectionIds.allegationsTitle1}
                className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
              >
                {content.pageContent.allegationsTitle2}
              </h2>
              <p className="mb-4 font-poppins font-normal text-[#425777] text-[18px] leading-[30px] capitalize">
                {content.pageContent.allegationsParagraph}
              </p>

              <ul className="space-y-5 mb-8 whitespace-pre-line">
                {content.allegationPoints.map((item, index) => (
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
                      <span className="font-bold">{item.item}</span>{" "}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2
                id={content.sectionIds.harmsExpiriencedTitle}
                className="font-noto-serif font-normal text-[#162766] mb-2 text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize "
              >
                {content.pageContent.harmsExpiriencedTitle}
              </h2>

              <p className="mb-4 font-poppins font-normal text-[#425777] text-[16px] lg:text-[18px] leading-[30px] capitalize">
                {content.pageContent.harmsExpiriencedParagraph}
              </p>

              <ul className="space-y-5 mb-8 whitespace-pre-line">
                {content.harmPoints.map((item, index) => (
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
                      <span className="font-bold">{item.item}</span>{" "}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mb-4 font-poppins font-normal text-[#425777] text-[16px] lg:text-[18px] leading-[30px] capitalize">
                {content.pageContent.harmsExpiriencedFooter}
              </p>
            </div>
            <br />
            <br />

            {/* ==================== LAWSUIT UPDATE SECTION ==================== */}
            <div className="mb-16">
              <h2
                id={content.sectionIds.updateTitle}
                className="font-noto-serif font-normal text-[#162766] text-[40px] leading-[50px] capitalize mb-4"
              >
                {content.pageContent.updateTitle}
              </h2>

              <p className="mb-6 font-poppins font-normal text-[#425777] text-[16px] lg:text-[18px] leading-[30px]">
                {content.pageContent.updateParagraph}
              </p>
              <p className="mb-6 font-poppins font-bold text-[#425777] text-[18px] leading-[30px]">
                {content.pageContent.updatesubtitle}
              </p>
              <ul className="space-y-5 mb-8">
                {content.updatePoints.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {/* Bullet */}
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
                    <span className="font-urbanist text-[#425777] text-[18px] font-bold leading-[27px]">
                      {item.item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="font-poppins font-medium text-[#425777] text-[18px] leading-[30px]">
                {content.pageContent.updateFooter}
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
                      {item.title}
                    </h4>
                  </div>
                ))}
                <p className="mb-4 font-urbanist  text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                  {content.pageContent.healthRisksFooter}
                </p>
              </div>

              {/* ==================== LAWSUIT UPDATE SECTION ==================== */}
              {/* ==================== SETTLEMENT IMPACT SECTION ==================== */}
              <div className="mb-10">
                <h2
                  id={content.sectionIds.settlementImpactTitle}
                  className="font-noto-serif font-normal text-[#162766] text-[40px] leading-[50px] capitalize mb-4"
                >
                  {content.pageContent.settlementImpactTitle}
                </h2>

                <p className="mb-6 font-poppins font-normal text-[#425777] text-[16px] lg:text-[18px] leading-[30px]">
                  {content.pageContent.settlementImpactParagraph}
                </p>

                {/* Key Takeaways */}
                <p className="mb-4 font-urbanist font-bold text-[#162766] text-[18px] leading-[27px]">
                  {content.pageContent.settlementImpactSubtitle1}
                </p>

                <ul className="space-y-5 mb-8">
                  {content.settlementTakeaways.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-[7px] shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                        >
                          <circle cx="7" cy="7" r="7" fill="#162766" />
                        </svg>
                      </span>
                      <span className="font-urbanist font-bold text-[#425777] text-[18px] leading-[27px]">
                        {item.item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Factors */}
                <p className="mb-4 font-urbanist font-bold text-[#162766] text-[18px] leading-[27px]">
                  {content.pageContent.settlementImpactSubtitle2}
                </p>

                <ul className="space-y-5 mb-8">
                  {content.settlementFactors.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-[7px] shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                        >
                          <circle cx="7" cy="7" r="7" fill="#162766" />
                        </svg>
                      </span>
                      <span className="font-urbanist font-bold text-[#425777] text-[18px] leading-[27px]">
                        {item.item}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="font-poppins font-medium text-[#425777] text-[16px] lg:text-[18px] leading-[30px]">
                  {content.pageContent.settlementImpactFooter}
                </p>
              </div>
              <div className="bg-[#F4F6F8] rounded-lg px-4 sm:px-8 py-6">
                {/* Section Title */}
                <h3
                  id={content.sectionIds.realStoriesTitle}
                  className="font-noto-serif text-[#162766] text-[20px] sm:text-[22px] font-medium mb-6"
                >
                  {content.pageContent.realStoriesTitle}
                </h3>

                {/* Stories */}
                <div className="space-y-5">
                  {content.realStories.map((item, index) => (
                    <div key={index} className=" rounded-md p-4 sm:p-5 ">
                      {/* Name */}
                      <h4 className="font-urbanist font-semibold text-[#162766] text-[15px] sm:text-[16px] mb-1">
                        {item.name}
                      </h4>

                      {/* Story */}
                      <p className="font-urbanist text-[#425777] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">
                        {item.story}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <h2
                id={content.sectionIds.compensationTitle}
                className="mt-10 font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
              >
                {content.pageContent.compensationTitle}
              </h2>

              <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.compensationParagraph}
              </p>

              <ul className="rounded-xl p-4 sm:p-6 space-y-4 sm:space-y-6 w-full mb-16 ">
                {content.compensation.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {/* Blue Bullet */}
                    <span className="mt-[6px] text-[#162766] text-[20px] sm:text-[20px]">
                      •
                    </span>

                    <div>
                      {/* Title */}
                      <h4 className="font-noto-serif text-[#162766] text-[18px] sm:text-[20px] font-medium leading-normal mb-1">
                        {item.title}
                      </h4>
                    </div>
                  </li>
                ))}
              </ul>
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
                <TableOfContents items={MACLAREN_TOC} />
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
