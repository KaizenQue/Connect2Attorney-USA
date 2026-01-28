"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const content = {
  sectionIds: {
    mainTitle: "title",
    causeTitle: "allegations",
    eligibleTitle: "eligible-claim",
    typesTitle: "types-sexual-abuse",
    compensationTitle: "compensation",
    helpTitle: "help-survivors",
  },

  allegationPoints: [
    {
      description: "Distracted driving (texting, phone use, in-car technology)",
    },
    {
      description: "Speeding or reckless driving",
    },
    {
      description: "Driving under the influence of alcohol or drugs ",
    },
    {
      description: "Failure to obey traffic signals or road signs ",
    },
    {
      description: "Fatigued or drowsy driving ",
    },
    {
      description: "Poor road conditions or defective vehicle parts ",
    },
    {
      description:
        "Identifying the cause is critical in establishing liability in a motor vehicle accident lawsuit. ",
    },
  ],

  eligibilityPoints: [
    {
      description:
        "You were injured in a car, truck, motorcycle, pedestrian, or bicycle accident ",
    },
    {
      description:
        "The accident was caused by another party’s negligence or recklessness ",
    },
    {
      description:
        "You suffered medical expenses, lost wages, pain and suffering, or long-term disability ",
    },
    {
      description:
        "You are filing on behalf of an injured minor or a deceased loved one (wrongful death claim) ",
    },
  ],

  typesPoints: [
    {
      title: "Car accident injury claims",
      description:
        "Legal claims filed by drivers or passengers injured in car crashes caused by another motorist’s negligence. ",
    },
    {
      title: "Truck and commercial vehicle accidents",
      description:
        "Claims involving serious injuries caused by large trucks or commercial vehicles, often holding drivers, employers, or carriers liable. ",
    },
    {
      title: "Motorcycle accident lawsuits",
      description:
        "Injury claims brought by motorcyclists harmed due to careless drivers, road hazards, or defective motorcycle parts. ",
    },
    {
      title: "Pedestrian and bicycle accident claims",
      description:
        "Lawsuits filed by pedestrians or cyclists injured after being struck by a motor vehicle. ",
    },
    {
      title: "Rideshare accidents (Uber/Lyft)",
      description:
        "Injury claims arising from accidents involving Uber or Lyft vehicles, where insurance coverage depends on driver status at the time of the crash. ",
    },
    {
      title: "Wrongful death lawsuits",
      description:
        "Legal actions filed by surviving family members seeking compensation after a fatal motor vehicle accident caused by negligence. ",
    },
  ],
  legalRights: [
    {
      title: "Right to File a Criminal Case",
      description:
        "Survivors can press criminal charges against their abusers. Successful prosecution may lead to imprisonment, restraining orders, or mandatory registration as a sex offender. Criminal cases focus on punishing the perpetrator and safeguarding the public.",
    },
    {
      title: "Right to File a Civil Lawsuit",
      description:
        "Beyond criminal charges, survivors can file a sexual abuse lawsuit to seek financial compensation for the harm suffered. Civil cases focus on the survivor’s needs, covering damages such as medical expenses, therapy costs, lost wages, and emotional distress.",
    },
    {
      title: "Right to Hold Institutions Accountable",
      description:
        "Survivors can also file claims against schools, religious organizations, employers, or other institutions that failed to prevent abuse or cover it up. These lawsuits can lead to both financial compensation and systemic changes to prevent future abuse.",
    },
    {
      title: "Right to Privacy and Support",
      description:
        "Survivors have the right to pursue justice at their own pace. Legal action does not have to be immediate; knowing your rights empowers you to make informed decisions about your future while accessing support resources and counseling.",
    },
  ],

  limitationsPoints1: [
    {
      description:
        "In many states, you generally have 2–3 years from the date of the accident or injury to file a motor vehicle accident lawsuit for personal injury claims.",
    },
    {
      description:
        "Some states have shorter deadlines, such as 1 year for certain injury claims in Tennessee and Louisiana. ",
    },
    {
      description:
        "Other states allow for longer periods, with up to 6 years in states like Maine and North Dakota for some types of claims. ",
    },
  ],

  limitationsPoints2: [
    {
      title: "Personal injury claims: ",
      description:
        "Usually must be filed within 1–6 years, depending on state law.",
    },
    {
      title: "Property damage claims:",
      description:
        "Some states allow a different (often longer) deadline for vehicle or item damage versus injury claims.",
    },
    {
      title: "Wrongful death lawsuits:",
      description:
        "These also have specific deadlines that vary by state, often ranging from 2–3 years from the date of death. ",
    },
  ],

  compensation: [
    {
      number: "01",
      title: "Medical Expenses",
      description:
        "Coverage for hospital bills, surgeries, rehabilitation, and ongoing treatment. ",
    },
    {
      number: "02",
      title: "Property Damage",
      description:
        "Compensation for repair or replacement of vehicles and other damaged property.",
    },
    {
      number: "03",
      title: "Lost Income",
      description:
        "Reimbursement for wages lost due to injury or recovery time. ",
    },
    {
      number: "04",
      title: "Pain and Suffering",
      description:
        "Financial recognition of the physical and emotional distress caused by the accident. ",
    },
    {
      number: "05",
      title: "Future Medical Costs",
      description:
        "Covers anticipated medical expenses, therapy, or surgeries needed in the long term.",
    },
  ],
  currentLegal: [
    {
      title: "Large-Scale Settlements Increasing",
      description:
        "Courts are approving large settlements against schools, churches, and care facilities for abuse-related failures.",
    },
    {
      title: "Expanded Filing Rights for Survivors",
      description:
        "Many states have extended or removed statutes of limitations, allowing older sexual abuse claims to proceed.",
    },
    {
      title: "Protection Against Statute of Limitations",
      description:
        "Many states have extended or even eliminated the statute of limitations for sexual abuse claims. This means that even if abuse occurred years ago, survivors may still have the legal right to pursue a claim.",
    },
    {
      title: "Stronger Institutional Accountability",
      description:
        " Lawsuits increasingly target organizations that ignored or concealed abuse.",
    },
    {
      title: "Growing Number of Claims Nationwide",
      description:
        " Lawsuits increasingly target organizations that ignored or concealed abuse.",
    },
  ],

  settlements: [
    {
      description:
        "In 2025, motor vehicle accident settlement amounts typically range from $15,000 to over $100,000, depending on injury severity and case factors. ",
    },
    {
      description:
        "Minor injury cases may settle for under $10,000, while catastrophic injury claims can exceed $1 million.",
    },
    {
      description:
        "The average U.S. car accident injury settlement is approximately $30,000, with non-injury claims often exceeding $15,000.",
    },
    {
      description:
        "Settlements are based on economic damages, including medical bills, lost wages, and vehicle repair costs.",
    },
    {
      description:
        "Non-economic damages such as pain and suffering are commonly calculated using a 2–3x multiplier of economic losses.",
    },
    {
      description:
        "Severe or life-altering injuries may justify a higher multiplier, increasing overall compensation.",
    },
  ],

  helpPoints: [
    {
      description: "Investigate the accident and establish fault ",
    },
    {
      description: "Handle insurance company communications ",
    },
    {
      description: "Calculate the true value of your injury claim ",
    },
    {
      description: "File a personal injury lawsuit within legal deadlines ",
    },
    {
      description: "Negotiate maximum compensation or represent you in court ",
    },
  ],

  pageContent: {
    mainTitle: "What is a Motor Vehicle Accident Lawsuit?",
    mainParagraphs: [
      "A motor vehicle accident lawsuit allows injured victims to seek financial compensation after being harmed in a car, truck, motorcycle, or other roadway accident caused by someone else’s negligence. If you suffered injuries, property damage, or emotional trauma, filing a personal injury lawsuit may help you recover medical costs, lost income, and other damages. Connect 2 Attorney helps accident victims connect with experienced motor vehicle accident attorneys across the U.S. to understand their legal rights and next steps.",
      "A motor vehicle accident lawsuit is a legal claim filed by someone injured or whose property was damaged in a vehicle collision.  The goal is to hold the responsible party accountable and secure compensation for medical bills, lost income, and repair costs.",
      "The process involves proving negligence through evidence such as police reports, witness statements, and expert analysis. Disputes with insurance companies often make legal action necessary.",
    ],

    causeTitle: "Common Causes of Motor Vehicle Accidents",
    causeParagraph:
      "Motor vehicle accidents often occur due to preventable driver or third-party errors",
    causeSubtitle: "Including:",

    eligibleTitle: "Who is Eligible to File a Claim?",

    eligibleSubtitle:
      "You may be eligible to file a motor vehicle accident lawsuit if:",

    typesTitle: "Types of Motor Vehicle Accident Injury Claims",

    typesParagraph:
      "Motor vehicle accident lawsuits may involve various injury-related claims",

    typesSubtitle: "Such as:",

    limitationsTitle:
      "Motor Vehicle Accident Lawsuit Deadlines & Statute of Limitations",
    limitationsParagraph:
      "Understanding the deadlines to file a motor vehicle accident lawsuit is critical to protecting your legal rights and securing the compensation you deserve. In the U.S., these deadlines are set by state law and are known as statutes of limitations. Missing these deadlines can permanently bar your right to seek compensation through the courts.",

    limitationsSub1: "Typical Timeframes Across the U.S.",
    limitationsSub2: "Different Deadlines for Different Claims:",

    compensationTitle:
      "What Compensation Can You Seek for a Motor Vehicle Accident Lawsuit?",
    compensationParagraph:
      "Depending on the severity of the injury or damage, compensation in these cases can range from $50,000 to $500,000. Understanding the types of compensation available helps you protect your rights and recover fully.",
    compensationSubtitle: "Types of Compensation You Can Seek:",

    settlementsTitle: "Motor Vehicle Accident Lawsuit Settlements",

    helptitle: "How a Motor Vehicle Accident Lawyer Can Help You?  ",

    helpSubtitle: "A qualified motor vehicle accident lawyer can:",

    helpParagraph:
      "Through Connect 2 Attorney, injured victims can connect with trusted motor vehicle accident lawyers nationwide who offer case evaluations and contingency-based representation. ",
    stepsTitle:
      "How to File a Motor Vehicle Accident Lawsuit with Connect2Attorney?",
    stepsParagraph:
      "Connect2Attorney guides you through the process of filing a motor vehicle lawsuit against the responsible party, in just three simple steps:",
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
            </div>

            {/* ==================== Eligibility SECTION ==================== */}
            <div className="bg-[#162766] text-[#FFF] rounded-xl p-4 sm:p-6 w-full  mb-16">
              <h2
                id={content.sectionIds.eligibleTitle}
                className="font-noto-serif font-normal capitalize text-[#FFF] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4"
              >
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
                    <p className="font-urbanist text-[#F9F9F9] text-[16px] sm:text-[18px] font-medium leading-[24px] sm:leading-[27px]">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* <Ozempicfreecasecard /> */}
            <h2
              id={content.sectionIds.causeTitle}
              className="font-noto-serif font-normal capitalize text-[#162766] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4"
            >
              {content.pageContent.causeTitle}
            </h2>

            <p className="mb-4 font-poppins font-normal text-[#425777] text-[18px] leading-[27px]">
              {content.pageContent.causeParagraph}
            </p>

            <p className="mb-4 font-poppins font-bold text-[#425777] text-[18px] leading-[27px]">
              {content.pageContent.causeSubtitle}
            </p>

            <ul className="list-none list-outside space-y-3 mb-8 marker:text-[#2d3663] marker:font-bold font-urbanist font-normal text-[16px] sm:text-[17px] lg:text-[18px] leading-[22px] sm:leading-[24px] lg:leading-[27px]">
              {content.allegationPoints.map((item, index) => (
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

            {/* ==================== Types SECTION ==================== */}
            <h2
              id={content.sectionIds.typesTitle}
              className="font-noto-serif font-normal capitalize text-[#162766] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4"
            >
              {content.pageContent.typesTitle}
            </h2>

            <p className="mb-4 font-poppins font-normal text-[#425777] text-[18px] leading-[27px]">
              {content.pageContent.typesParagraph}
            </p>

            <p className="mb-4 font-poppins font-bold text-[#425777] text-[18px] leading-[27px]">
              {content.pageContent.typesSubtitle}
            </p>

            <div className="space-y-4 w-full mb-16">
              {content.typesPoints.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#F4F6F8] rounded-lg px-4 sm:px-6 py-5"
                >
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

            {/* ==================== Limitations SECTION ==================== */}

            <h2 className="font-noto-serif font-normal capitalize text-[#162766] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4">
              {content.pageContent.limitationsTitle}
            </h2>

            {/* Description */}
            <p className="font-urbanist text-[#425777] text-[16px] sm:text-[18px] font-medium leading-[24px] sm:leading-[27px]">
              {content.pageContent.limitationsParagraph}
            </p>

            <p className="font-urbanist text-[#425777] text-[16px] sm:text-[18px] font-bold leading-[24px] sm:leading-[27px]">
              {content.pageContent.limitationsSub1}
            </p>
            <br />

            <ul className="list-none list-outside space-y-3 mb-8  marker:font-bold font-urbanist font-normal text-[16px] sm:text-[17px] lg:text-[18px] leading-[22px] sm:leading-[24px] lg:leading-[27px]">
              {content.limitationsPoints1.map((item, index) => (
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

            <p className="font-urbanist text-[#425777] text-[16px] sm:text-[18px] font-bold leading-[24px] sm:leading-[27px]">
              {content.pageContent.limitationsSub2}
            </p>
            <br />

            <ul className="list-none list-outside space-y-3 mb-8 marker:text-[#2d3663] marker:font-bold font-urbanist font-normal text-[16px] sm:text-[17px] lg:text-[18px] leading-[22px] sm:leading-[24px] lg:leading-[27px]">
              {content.limitationsPoints2.map((item, index) => (
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

            {/* ==================== Compensation SECTION ==================== */}

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

              <p className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.compensationSubtitle}
              </p>

              <div className="space-y-4 w-full mb-16">
                {content.compensation.map((item, index) => (
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
            </div>

            <h2
              id={content.sectionIds.compensationTitle}
              className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
            >
              {content.pageContent.settlementsTitle}
            </h2>

            <ul className="list-none list-outside space-y-3 mb-8 marker:text-[#2d3663] marker:font-bold font-urbanist font-normal text-[16px] sm:text-[17px] lg:text-[18px] leading-[22px] sm:leading-[24px] lg:leading-[27px]">
              {content.settlements.map((item, index) => (
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

            {/* ==================== STEPS SECTION ==================== */}
            <div className="mb-15 md:mb-10 lg:mb-10">
              <h2 className="font-noto-serif font-normal text-[#162766] text-[30px] md:text-[40px] capitalize mb-4">
                {content.pageContent.stepsTitle}
              </h2>

              <p className="mb-8 font-urbanist font-medium text-[#425777] text-[18px] leading-[27px]">
                {content.pageContent.stepsParagraph}
              </p>

              <StepsComponent />
            </div>

            <h2
              id={content.sectionIds.helpTitle}
              className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
            >
              {content.pageContent.helptitle}
            </h2>

            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.helpSubtitle}
            </p>

            <ul className="list-none list-outside space-y-3 mb-8 marker:text-[#2d3663] marker:font-bold font-urbanist font-normal text-[16px] sm:text-[17px] lg:text-[18px] leading-[22px] sm:leading-[24px] lg:leading-[27px]">
              {content.helpPoints.map((item, index) => (
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
              {content.pageContent.helpParagraph}
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
    label: "What is a Motor Vehicle Accident Lawsuit?",
    id: "title",
  },
  {
    label: "What are the Allegations in Motor Vehicle Accident?",
    id: "allegations",
  },
  {
    label: "What are the Issues Related to Motor Vehicle Accident? ",
    id: "issues",
  },
  {
    label: "Who is Eligible to File a Motor Vehicle Accident? ",
    id: "eligible-claim",
  },
  { label: "What Compensation Can You Seek? ", id: "compensation" },

  {
    label:
      "How to File a Motor Vehicle Accident Lawsuit with Connect2Attorney?",
    id: "help-survivors",
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
