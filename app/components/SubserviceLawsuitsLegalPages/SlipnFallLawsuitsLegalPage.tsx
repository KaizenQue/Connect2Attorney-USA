"use client";
import React from "react";
// import Ozempicfreecasecard from "./Ozempicfreecasecard";
// import TableOfContents from "../subservice_pages/TableOfContents";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const content = {
  sectionIds: {
    mainTitle: "what-is-slip-n-fall-lawsuit",
    causeTitle: "causes",
    legalRightsTitle: "liability",
    limitationsTitle: "limitations",
    compensationTitle: "compensation",
    helpsurvivorsTitle: "help-section",
    stepsTitle: "steps-title",
  },

  causePoints: [
    {
      description: "Wet or slippery floors without warning signs ",
    },
    {
      description: "Uneven sidewalks, broken steps, or loose flooring ",
    },
    {
      description: "Poor lighting in stairwells or walkways ",
    },
    {
      description: "Snow, ice, or water accumulation",
    },
    {
      description: "Torn carpets or unsecured rugs",
    },
    {
      description: "Spilled liquids in grocery stores or restaurants ",
    },
  ],

  eligibilityPoints: [
    {
      description:
        "You were legally on the property (customer, guest, tenant, or worker) ",
    },
    {
      description: "A dangerous condition existed on the property ",
    },
    {
      description:
        "The property owner knew or should have known about the hazard ",
    },
    {
      description: "The hazard was not fixed or properly warned about ",
    },
    {
      description: "You suffered injuries and financial losses as a result ",
    },
  ],

  typesPoints: [
    {
      title: "Institutional",
      description:
        "Institutional abuse occurs when organizations such as foster homes, care facilities, or orphanages fail to protect children or adults in their care. Survivors can pursue claims against the institution for negligence or deliberate misconduct.",
    },
    {
      title: "Clergy",
      description:
        "Clergy abuse cases involve sexual misconduct by religious leaders. Survivors may file a sexual abuse lawsuit against both the individual and the institution, such as a church, diocese, or religious organization, for failing to prevent or respond to abuse.",
    },
    {
      title: "School",
      description:
        "Schools have a duty to maintain a safe environment. Sexual abuse lawsuits against schools may involve teachers, staff, or administrators who abused students or ignored complaints, creating long-term harm.",
    },
    {
      title: "Family Members",
      description:
        "In some cases, family members may file claims for emotional distress or loss of support resulting from the abuse.",
    },
    {
      title: "Workplace",
      description:
        "Workplace sexual abuse cases include harassment or assault by supervisors, coworkers, or other staff. Survivors may seek compensation for emotional distress, lost income, and career setbacks through a sexual abuse lawsuit.",
    },
  ],
  legalRights: [
    {
      title: "Duty of Care",
      description:
        "The owner must owe you a legal obligation to maintain safety. This applies whether you were a customer, guest, or invitee on the property.  ",
    },
    {
      title: "Knowledge of the Hazard",
      description:
        "You must show the owner knew or should have known about the dangerous condition, such as a wet floor, broken step, or uneven surface, but failed to fix it or warn you. ",
    },
    {
      title: "Breach of Duty",
      description:
        "Liability arises when the owner fails to act as a reasonable person would, under similar circumstances, like cleaning spills promptly or repairing hazards. ",
    },
    {
      title: "Causation",
      description:
        "There must be a direct link between the dangerous conditions and your fall and injuries. ",
    },
    {
      title: "Damages",
      description:
        "Finally, your injuries must have caused real losses, such as medical bills, lost wages, or pain and suffering, to justify compensation.",
    },
  ],

  limitationsPoints: [
    {
      title: "Strict Legal Deadlines:",
      description:
        "Each U.S. state sets a statute of limitations for filing a personal injury lawsuit. Missing it can permanently bar your claim.",
    },
    {
      title: "Typical Timeframe:",
      description:
        "Most states allow about 2 years from the date of the accident, though some states may allow up to 3–4 years. ",
    },
    {
      title: "Start of the Clock:",
      description:
        "The statute usually begins on the date of the injury, but may start later if the injury was not immediately apparent.",
    },
    {
      title: "Special Exceptions:",
      description:
        "Shorter deadlines may apply for claims against government entities, minors, or incapacitated individuals. ",
    },
    {
      title: "Importance of Early Action:",
      description:
        "Consulting a slip and fall lawyer promptly ensures your claim is filed on time, and your right to compensation is protected.",
    },
  ],

  currentLegal: [
    {
      title: "Duty of Care",
      description:
        "The owner must owe you a legal obligation to maintain safety. This applies whether you were a customer, guest, or invitee on the property.",
    },
    {
      title: "Knowledge of the Hazard",
      description:
        "You must show the owner knew or should have known about the dangerous condition, such as a wet floor, broken step, or uneven surface, but failed to fix it or warn you.",
    },
    {
      title: "Breach of Duty",
      description:
        "Liability arises when the owner fails to act as a reasonable person would, under similar circumstances, like cleaning spills promptly or repairing hazards. ",
    },
    {
      title: "Causation",
      description:
        "There must be a direct link between the dangerous conditions and your fall and injuries. ",
    },
    {
      title: "Damages",
      description:
        "Finally, your injuries must have caused real losses, such as medical bills, lost wages, or pain and suffering, to justify compensation.",
    },
  ],

  compensation: [
    {
      title: "Typical Settlement Range",
      description:
        "Nationally, many slip and fall settlements fall between $10,000 and $50,000, though serious cases can exceed this range significantly.  ",
    },
    {
      title: "Factors That Affect Value",
      description:
        "Compensation depends on the severity of injuries, medical expenses, lost wages, future care needs, and the impact on quality of life.  ",
    },
    {
      title: "Economic Damages",
      description:
        "These include medical bills, rehabilitation costs, lost income, and reduced earning capacity directly tied to the accident.  ",
    },
    {
      title: "Non-Economic Damages",
      description:
        "You may also recover for pain and suffering, emotional distress, and loss of enjoyment of life. ",
    },
    {
      title: "Severity Impacts Payout",
      description:
        "Minor injuries often result in lower settlements, while fractures, surgeries, traumatic brain injuries, or permanent disabilities can lead to higher six-figure or even seven-figure compensation depending on the case.  ",
    },
    {
      title: "Most Cases Settle Out of Court",
      description:
        "Most of the slip and fall claims are resolved through negotiation with insurers rather than going to trial, which can speed up recovery of compensation. ",
    },
  ],

  helpSurvivors: [
    {
      description: "Evaluate the strength of your personal injury lawsuit ",
    },
    {
      description: "Identify liable parties and gather evidence ",
    },
    {
      description: "Handle insurance company negotiations ",
    },
    {
      description: "Calculate fair compensation ",
    },
    {
      description: "File legal paperwork and meet deadlines ",
    },
    {
      description: "Represent you in court if necessary ",
    },
  ],

  pageContent: {
    mainTitle: "What is a Slip and Fall Injury Lawsuit?",
    mainParagraphs: [
      "Slip and fall injuries are among the most frequent accidents occurring in workplaces, stores, and public spaces. These incidents can cause severe harm, from broken bones to head trauma, and in some cases, can be fatal. A slip and fall injury lawsuit is meant to cover the financial and personal losses caused by unsafe property conditions.",
      "The U.S. Bureau of Labor Statistics reported 5,283 fatal workplace injuries in 2023, highlighting the serious consequences of unsafe conditions. Beyond physical pain, victims often face financial strain from medical bills, lost income, and emotional distress. ",
      "If you or someone close to you has suffered a slip and fall injury, legal action may help you recover rightful compensation for your losses through a slip and fall injury lawsuit. ",
      "A slip and fall injury lawsuit is a type of personal injury lawsuit filed when someone suffers injuries after slipping, tripping, or falling on another party’s property due to unsafe conditions. These claims are based on premises liability, which holds property owners legally responsible for maintaining reasonably safe environments for visitors. ",
      "If negligence can be proven, injured victims may recover compensation for medical bills, lost income, pain and suffering, and other damages. ",
    ],

    causeTitle: "Common Causes of Slip and Fall Accidents",
    causeParagraph:
      "Slip and fall accidents often occur due to preventable hazards, including: ",

    eligibleTitle: "Who is Eligible to File a Claim?",
    eligibleParagraph:
      "Even a partial fault does not automatically disqualify you from compensation, depending on state comparative negligence laws. ",
    eligibleSubtitle:
      "You may be eligible to file a slip and fall injury lawsuit if: ",
    typesTitle: "Types Of Sexual Abuse Cases",

    legalRightsTitle: "Property Owner Liability in Slip and Fall Injury Cases",
    legalRightsParagraph:
      "A slip and fall injury lawsuit, establishing property owner liability is crucial to proving that the owner’s negligence caused your injuries. Property owners and occupiers have a legal duty of care to ensure their premises are reasonably safe for visitors. If they fail to meet this duty, they can be held financially responsible for your losses.",
    legalRightsSubtitle:
      "To determine liability, courts and insurance companies look at several key factors:",

    limitationsTitle:
      "Slip and Fall Injury Lawsuit Deadlines & Statute of Limitations ",

    limitationsSubtitle:
      "Understanding the deadlines is crucial when filing a slip and fall injury lawsuit. Key points include: ",

    compensationTitle:
      "Slip and Fall Injury Lawsuit Settlements & Compensation ",
    compensationParagraph:
      "In a slip and fall injury lawsuit, victims may be entitled to financial compensation that reflects both economic and non-economic damages. Settlements and awards vary widely depending on the specifics of each case, but understanding typical compensation helps set reasonable expectations. ",

    helpsurvivorsTitle: "How a Slip and Fall Injury Lawyer Can Help You?",

    helpsurvivorsParagraph: "An experienced slip and fall injury lawyer can: ",
    helpsurvivorsSubTitle:
      "Through Connect 2 Attorney, injured victims can quickly connect with qualified personal injury lawyers who understand slip and fall injury lawsuits and fight to secure the maximum compensation you deserve. ",
    stepsTitle:
      "How to File a Slip and Fall Injury Lawsuit with Connect2Attorney?",
    stepsParagraph:
      "Connect2Attorney guides you through the process of filing a sexual abuse lawsuit against the responsible party, in just three simple steps:",
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
            <TableOfContents />
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
              <br />

              <p>{content.pageContent.mainParagraphs[1]}</p>
              <br />

              <p>{content.pageContent.mainParagraphs[2]}</p>
              <br />

              <p>{content.pageContent.mainParagraphs[3]}</p>
              <br />
              <p>{content.pageContent.mainParagraphs[4]}</p>
              <br />
            </div>

            {/* ==================== Eligibility SECTION ==================== */}
            <div className="bg-[#162766] text-[#FFF] rounded-xl p-4 sm:p-6 w-full  mb-16">
              <h2 className="font-noto-serif font-normal capitalize text-[#FFF] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4">
                <span className="text-[#F2C438]">
                  {content.pageContent.eligibleTitle.split(" ")[0]}{" "}
                  {content.pageContent.eligibleTitle.split(" ")[1]}
                </span>{" "}
                {content.pageContent.eligibleTitle
                  .split(" ")
                  .slice(2)
                  .join(" ")}
              </h2>

              <p className="mb-4 font-urbanist font-bold text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                {content.pageContent.eligibleSubtitle}
              </p>

              <ul className="space-y-3 mb-4">
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
                    <p className="font-urbanist text-[#F9F9F9] text-[16px] sm:text-[18px] font-medium leading-[24px] sm:leading-[27px]">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>

              <p className="mb-4 font-urbanist font-normal text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px]">
                {content.pageContent.eligibleParagraph}
              </p>
            </div>

            {/* ==================== Cause SECTION ==================== */}

            <h2
              id={content.sectionIds.causeTitle}
              className="font-noto-serif font-normal capitalize text-[#162766] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4"
            >
              {content.pageContent.causeTitle}
            </h2>

            <p className="mb-4 font-poppins font-bold text-[#425777] text-[18px] leading-[27px]">
              {content.pageContent.causeParagraph}
            </p>

            <ul className="list-none list-outside space-y-3 mb-8 marker:text-[#2d3663] marker:font-bold font-urbanist font-normal text-[16px] sm:text-[17px] lg:text-[18px] leading-[22px] sm:leading-[24px] lg:leading-[27px]">
              {content.causePoints.map((item, index) => (
                <li key={index} className="">
                  <span className="inline-block mr-2">
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

                  <span className="text-[#425777] font-bold">
                    {" "}
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>

            {/* ==================== Legal Rights SECTION ==================== */}
            <div className="mb-16">
              <h2
                id={content.sectionIds.legalRightsTitle}
                className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
              >
                {content.pageContent.legalRightsTitle}
              </h2>

              <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.legalRightsParagraph}
              </p>

              <p className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.legalRightsSubtitle}
              </p>

              <div className="space-y-4 w-full mb-16">
                {content.legalRights.map((item, index) => (
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
            </div>

            {/* ==================== Limitations SECTION ==================== */}

            <h2
              id={content.sectionIds.limitationsTitle}
              className="font-noto-serif font-normal capitalize text-[#162766] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4"
            >
              {content.pageContent.limitationsTitle}
            </h2>

            <p className="font-urbanist text-[#425777] text-[16px] sm:text-[18px] font-bold leading-[24px] sm:leading-[27px]">
              {content.pageContent.limitationsSubtitle}
            </p>
            <br />

            <ul className="list-none list-outside space-y-3 mb-8 marker:text-[#2d3663] marker:font-bold font-urbanist font-normal text-[16px] sm:text-[17px] lg:text-[18px] leading-[22px] sm:leading-[24px] lg:leading-[27px]">
              {content.limitationsPoints.map((item, index) => (
                <li key={index} className="">
                  <span className="inline-block mr-2">
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
                  <span className="font-bold text-[#425777] ">
                    {" "}
                    {item.title}{" "}
                  </span>
                  <span className="text-[#425777]"> {item.description}</span>
                </li>
              ))}
            </ul>

            {/* ==================== Ccompensation  SECTION ==================== */}

            <div className="mb-16">
              <h2
                id={content.sectionIds.compensationTitle}
                className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
              >
                {content.pageContent.compensationTitle}
              </h2>

              <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.compensationParagraph}
              </p>

              <div className="space-y-4 w-full mb-16">
                {content.compensation.map((item, index) => (
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

            <h2
              id={content.sectionIds.helpsurvivorsTitle}
              className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
            >
              {content.pageContent.helpsurvivorsTitle}
            </h2>

            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.helpsurvivorsParagraph}
            </p>

            <ul className="list-none list-outside space-y-3 mb-8 marker:text-[#2d3663] marker:font-bold font-urbanist font-normal text-[16px] sm:text-[17px] lg:text-[18px] leading-[22px] sm:leading-[24px] lg:leading-[27px]">
              {content.helpSurvivors.map((item, index) => (
                <li key={index} className="">
                  <span className="inline-block mr-2">
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
                  <span className="text-[#425777] font-bold">
                    {" "}
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.helpsurvivorsSubTitle}
            </p>
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

const tocItems1 = [
  {
    label: "What is a Slip and Fall Injury Lawsuit?",
    id: "what-is-slip-n-fall-lawsuit",
  },
  {
    label: "Common Causes of Slip and Fall Accidents",
    id: "causes",
  },
  {
    label: "Property Owner Liability in Slip and Fall Injury Cases",
    id: "liability",
  },
  {
    label: "Slip and Fall Injury Lawsuit Deadlines & Statute of Limitations ",
    id: "limitations",
  },
  {
    label: "Slip and Fall Injury Lawsuit Settlements & Compensation",
    id: "compensation",
  },

  {
    label: "How to File a Slip and Fall Injury Lawsuit with Connect2Attorney?",
    id: "steps-title",
  },

  {
    label: " How a Slip and Fall Injury Lawyer Can Help You? ",
    id: "help-section",
  },
  { label: "Get Legal Support from Connect2Attorney", id: "support" },
  { label: "FAQs", id: "faqs" },
];

const TableOfContents = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const [open, setOpen] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth >= 1024; // lg+
  });

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(true); // always open on desktop
      } else {
        setOpen(false); // collapsed on mobile/tablet
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -100; // adjust for sticky navbar
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const ids = tocItems1.map((item) => item.id);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [tocItems1]);

  return (
    <div className="lg:mt-6 mt-4 w-full">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full h-[60px]
          flex items-center justify-between
          px-4
          rounded-xl
          border border-[#d9e0ff]
          bg-white
          
        "
        aria-expanded={open}
      >
        <span className="text-[#162766] font-urbanist text-[20px] font-bold">
          Table of Contents
        </span>

        <span
          className="
            w-8 h-8
            rounded-lg
            bg-[#F2C338]
            text-[#162766]
            border border-[#DDE6FF]
            shadow-lg
            flex items-center justify-center
          "
        >
          {open ? (
            <ChevronUp size={18} strokeWidth={2.5} />
          ) : (
            <ChevronDown size={18} strokeWidth={2.5} />
          )}
        </span>
      </button>

      {/* Content */}
      {open && (
        <div
          className="
            mt-2
            flex flex-col
            gap-3
            rounded-xl
            border border-[#d9e0ff]
            bg-[#f9fafc]
            p-4 
          "
        >
          <div
            className="
              max-h-[300px]     
              overflow-y-auto
              flex flex-col
              gap-2
              pr-1           
            "
          >
            {tocItems1.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  if (window.innerWidth < 1024) {
                    setOpen(false);
                  }
                }}
                className={`
    px-4
    py-3.5
    rounded-lg
    font-urbanist
    text-[15px]
    cursor-pointer
    transition
    ${
      activeId === item.id
        ? "bg-[#eef1ff] text-[#162766] font-bold"
        : "text-[#162766] font-medium hover:bg-[#eef1ff]"
    }
  `}
              >
                <span className="leading-snug">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LawsuitsLegalPage;
