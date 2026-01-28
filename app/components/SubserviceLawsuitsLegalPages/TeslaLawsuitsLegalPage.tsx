"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const content = {
  sectionIds: {
    mainTitle: "title",
    risksTitle: "risks",
    defectsTitle: "defects",
    currenDevsTitle: "defects",
    compensationTitle: "compensation",
    helpTitle: "help",
    realStoriesTitle: "stories",
    stepsTitle: "help-section",
  },

  eligibilityPoints: [
    {
      description:
        "You were driving a Tesla Model S, 3, X, or Y equipped with Autopilot or Full Self-Driving.",
    },
    {
      description:
        "You were involved in a crash where Autopilot was engaged, partially engaged, or unexpectedly disengaged.  ",
    },
    {
      description: "The crash caused injury, death, or major property damage. ",
    },
    {
      description: "You are within your state’s statute of limitations. ",
    },
    {
      description: "Autopilot failed to detect another vehicle",
    },
    {
      description: "Autopilot caused sudden braking or acceleration",
    },
    {
      description: "Lane-keeping malfunction leading to crash",
    },
    {
      description: "Misleading marketing caused over-trust in Autopilot",
    },
    {
      description:
        "Vehicle struck a stationary object or emergency vehicle while Autopilot was active",
    },
  ],

  healthRisks: [
    {
      title: "Fatal Crashes",
      description:
        "Autopilot has reportedly failed to detect stopped vehicles, trucks, and emergency responders, leading to deadly collisions.  ",
    },
    {
      title: "Unexpected Braking",
      description:
        "“Phantom braking” causes the vehicle to brake suddenly without warning, risking rear-end crashes.  ",
    },
    {
      title: "Lane-Keeping Failures",
      description:
        "Autopilot may drift into other lanes or fail to navigate turns safely. ",
    },
    {
      title: "Acceleration Malfunctions",
      description:
        "Some drivers report sudden unintended acceleration before a crash.  ",
    },
    {
      title: "Reduced Driver Awareness",
      description:
        "Autopilot’s design may lead drivers to over-rely on it, increasing reaction times during emergencies. ",
    },
  ],

  currentDevsPoints: [
    {
      title: "$243 Million Federal Jury Verdict",
      description:
        "In August 2025, a federal jury found Tesla partially liable in a fatal 2019 Autopilot crash, awarding $243 million in damages. The case marked one of the first major jury verdicts holding Tesla accountable for Autopilot-related failures. ",
    },
    {
      title: "Consumer Misrepresentation Rulings ",
      description:
        "In late December 2025, the California DMV said that Tesla made Autopilot sound more advanced than it really is. Many drivers believed the car could drive itself, but Autopilot still needs full human control and attention. Because of this, the DMV warned Tesla that it must change how Autopilot is named or advertised. If Tesla does not fix this, it could face limits on selling its cars in California, which is Tesla’s biggest U.S. market.  ",
    },
  ],

  compensationPoints: [
    {
      title: "Medical Expenses",
      description:
        "Hospitalization, surgeries, therapy, rehabilitation, and long-term care.  ",
    },
    {
      title: "Vehicle & Property Damage",
      description:
        "Repair or replacement of your Tesla and any other property damaged in the crash.  ",
    },
    {
      title: "Lost Income",
      description:
        "Compensation for missed workdays and loss of future earning potential.  ",
    },
    {
      title: "Pain and Suffering",
      description:
        "Awards for physical trauma, emotional distress, PTSD, or long-term disability.  ",
    },
    {
      title: "Wrongful Death Damages",
      description: "For fatal crashes involving Autopilot malfunction.",
    },
    {
      title: "Punitive Damages",
      description:
        "Tesla could face punitive damages if the court finds reckless disregard for safety.",
    },
  ],

  helpPoints: [
    {
      description: "Investigate Autopilot and recall-related defects ",
    },
    {
      description: "Gather crash data and vehicle software evidence ",
    },
    {
      description: "Work with accident reconstruction experts ",
    },
    {
      description: "Handle negotiations with Tesla and insurers  ",
    },
    {
      description: "File a lawsuit and pursue maximum compensation ",
    },
  ],
  realStories: [
    {
      name: "Jeremy Banner (Fatal Crash) : ",
      story:
        "Banner died when his Tesla Model 3 crashed into a truck that the Autopilot failed to detect. His family claims Tesla oversold the system’s capabilities. ",
    },
    {
      name: "California Family (Autopilot Highway Collision) :",
      story:
        "A family survived a highway crash after Autopilot drifted into a concrete divider. They sustained severe injuries and suffered long-term trauma. ",
    },
    {
      name: "“Phantom Braking” Victims  : ",
      story:
        "Multiple drivers reported sudden braking at high speeds, causing rear-end collisions and serious whiplash injuries. ",
    },
  ],

  pageContent: {
    mainTitle: "What is the Tesla Autopilot Lawsuit?",
    mainParagraphs: [
      "The Tesla Autopilot Recall Lawsuit centers on claims that Tesla vehicles equipped with Autopilot contain serious safety defects that increase the risk of crashes, injuries, and fatalities. Following a major Tesla recall, affected drivers and families are now pursuing legal action to hold Tesla accountable for failures tied to misleading technology, inadequate warnings, and delayed safety fixes. If you or a loved one were injured in a Tesla crash involving Autopilot, we are here to help you.",
      "The Tesla Autopilot Recall Lawsuit involves injury and wrongful death claims filed by drivers, passengers, and pedestrians who allege Tesla’s Autopilot system failed to operate safely. Lawsuits argue that Tesla overstated Autopilot’s capabilities, encouraged driver overreliance, and released vehicles with known safety defects, resulting in preventable crashes. ",
      "Federal regulators, including the National Highway Traffic Safety Administration (NHTSA), launched a multi-year investigation into Tesla’s Autopilot after hundreds of crashes.",
      "What is the Tesla Autopilot Recall?",
      "The Tesla Autopilot Recall was issued after federal regulators found that Autopilot and Full Self-Driving (FSD) systems may fail to adequately ensure the driver’s attention. According to regulators, the software allowed misuse, including driving without proper supervision, increasing crash risks. This recall affected millions of vehicles and added to a growing list of safety-related actions, including the Tesla power steering recall, Tesla Cybertruck recall, and other high-profile Tesla recalls.",
    ],

    allegationsTitle: "Who is Eligible to File a Claim? ",
    allegationsSubtitle: "You may be eligible to file a Tesla lawsuit if: ",
    allegationsParagraph: "Common qualifying scenarios:  ",

    risksTitle: "Tesla Autopilot Safety Issues: Crash Defects & Injury Risks",

    risksSubtitle:
      "Investigations link Tesla Autopilot to multiple safety concerns, including:",

    defectsTitle:
      "Tesla Autopilot Recall Details: Affected Models & Defects Explained ",
    defectsParagraph: [
      "The Tesla recall related to Autopilot impacts several popular models, including Model S, Model 3, Model X, and Model Y. ",
      "Defects focus on Autopilot’s inability to prevent misuse and insufficient safeguards to ensure active driver engagement. These issues mirror broader concerns seen in other recalls, including the Tesla Cybertruck recall and steering-related defects.",
    ],

    currenDevsTitle:
      "Tesla Autopilot Recall Lawsuit Update: Current Court Developments ",

    currentDevsParagraph:
      "Tesla users have reported real-world consequences that affect not only safety but also trust, financial stability, and emotional well-being. The system, marketed as an advanced driver-assistance feature, has often been criticized for inconsistent performance. ",

    compensationTitle:
      "Compensation & Settlements in Tesla Autopilot Recall Claims ",
    compensationParagraph:
      "Compensation depends on the severity of injuries and damages caused by the Autopilot malfunction.  ",
    compensationSubtitle: "You may be eligible to recover:  ",

    settlementTitle: "Settlement",
    settlementParagraph: [
      "Tesla’s Autopilot and Full Self-Driving (FSD) systems have faced increasing legal scrutiny following crashes linked to these driver-assistance features. Multiple lawsuits and settlements highlight growing concerns over safety, responsibility, and consumer expectations. ",
      "Florida Jury Verdict ",
      "A Florida jury awarded $243 million in damages to victims of a 2019 crash involving a Tesla Model S operating with Autopilot. Tesla reportedly offered $60 million to settle, but the offer was rejected, leading to the landmark verdict. ",
      "Confidential California Settlements",
      "Tesla also reached confidential settlements in two California lawsuits involving fatal crashes that occurred in 2019. These cases were closely watched because Tesla’s business value is strongly tied to its self-driving technology claims.",
      "Settlement Amounts Vary",
      "Compensation in Tesla Autopilot crash cases varies widely and depends on factors such as injury severity, medical costs, long-term impact, and evidence showing Tesla may be liable under product liability laws.",
    ],

    helpTitle: "How a Tesla Autopilot Recall Lawyer Can Help Your Case? ",
    helpSubtitle: "A qualified Tesla Autopilot recall lawyer can: ",
    helpParagraph:
      "At Connect 2 Attorney, we help injured victims connect with experienced Tesla recall attorneys nationwide at no upfront cost. ",

    realStoriesTitle: "Real Stories Behind Lawsuit ",
    stepsTitle: "How to File a Tesla Autopilot Lawsuit with Connect2Attorney? ",
    stepsParagraph:
      "Connect2Attorney guides you through the process of filing an Tesla lawsuit against the responsible party, in just three simple steps:",
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
            <div className="mb-10 font-urbanist font-medium text-[#425777] text-[18px] leading-[27px] space-y-1">
              <p>{content.pageContent.mainParagraphs[0]}</p>
              <br />
              <p>{content.pageContent.mainParagraphs[1]}</p>
              <br />
              <p>{content.pageContent.mainParagraphs[2]}</p>
              <br />
              <h4 className="font-bold">
                {content.pageContent.mainParagraphs[3]}
              </h4>

              <p>{content.pageContent.mainParagraphs[4]}</p>
            </div>

            <div className="bg-[#162766] text-[#FFF] rounded-xl p-4 sm:p-6 w-full  mb-16">
              <h2 className="font-noto-serif font-normal capitalize text-[#FFF] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4">
                {content.pageContent.allegationsTitle}
              </h2>

              <p className="mb-4 font-urbanist font-bold text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                {content.pageContent.allegationsSubtitle}
              </p>

              <ul className="space-y-3 mb-8">
                {content.eligibilityPoints.map((item, index) => (
                  <React.Fragment key={index}>
                    <li className="flex items-start gap-3">
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

                    {/* 👇 Paragraph after 4th point */}
                    {index === 3 && (
                      <p className="mb-4 font-urbanist font-bold text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                        {content.pageContent.allegationsParagraph}
                      </p>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </div>

            {/* ==================== RISKS SECTION ==================== */}
            <div className="mb-16">
              <h2
                id={content.sectionIds.risksTitle}
                className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
              >
                {content.pageContent.risksTitle}
              </h2>

              <p className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.risksSubtitle}
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
            </div>

            {/* ==================== Defects SECTION ==================== */}

            <h2
              id={content.sectionIds.defectsTitle}
              className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
            >
              {content.pageContent.defectsTitle}
            </h2>

            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.defectsParagraph[0]}
            </p>
            <br />
            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.defectsParagraph[1]}
            </p>

            <h2
              id={content.sectionIds.currenDevsTitle}
              className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
            >
              {content.pageContent.currenDevsTitle}
            </h2>

            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.currentDevsParagraph}
            </p>

            <div className="space-y-4 w-full mb-16">
              {content.currentDevsPoints.map((item, index) => (
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

            {/* Section Title */}

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
              {content.compensationPoints.map((item, index) => (
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

              <div className="bg-[#F4F6F8] rounded-lg px-4 sm:px-4 py-6">
                <h2
                  id={content.sectionIds.compensationTitle}
                  className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
                >
                  {content.pageContent.settlementTitle}
                </h2>

                <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                  {content.pageContent.settlementParagraph[0]}
                </p>

                <p className="font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                  {content.pageContent.settlementParagraph[1]}
                </p>
                <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                  {content.pageContent.settlementParagraph[2]}
                </p>
                <br />
                <p className="font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                  {content.pageContent.settlementParagraph[3]}
                </p>
                <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                  {content.pageContent.settlementParagraph[4]}
                </p>
                <br />
                <p className="font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                  {content.pageContent.settlementParagraph[5]}
                </p>
                <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                  {content.pageContent.settlementParagraph[6]}
                </p>
              </div>
            </div>

            {/* ==================== Help SECTION ==================== */}

            <h2
              id={content.sectionIds.helpTitle}
              className="font-noto-serif font-normal text-[#162766] text-[30px] md:text-[40px] capitalize mb-4"
            >
              {content.pageContent.helpTitle}
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

            {/* ==================== Real Stories SECTION ==================== */}

            <div className="bg-[#F4F6F8] rounded-lg px-4 sm:px-8 py-6 mb-8">
              <h2
                id={content.sectionIds.realStoriesTitle}
                className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[26px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
              >
                {content.pageContent.realStoriesTitle}
              </h2>
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
                        {item.name}
                      </strong>{" "}
                      {item.story}
                    </p>
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

                <div className="p-2 text-white">
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
    label: "What is the Tesla Autopilot Recall Lawsuit?",
    id: "title",
  },
  {
    label: "Tesla Autopilot Safety Issues: Crash Defects & Injury Risks",
    id: "risks",
  },
  {
    label:
      "Tesla Autopilot Recall Details: Affected Models & Defects Explained",
    id: "defects",
  },
  {
    label: "Tesla Autopilot Recall Lawsuit Update: Current Court Developments",
    id: "currentdev",
  },
  {
    label: "Compensation & Settlements in Tesla Autopilot Recall Claims",
    id: "compensation",
  },
  {
    label: "How a Tesla Autopilot Recall Lawyer Can Help Your Case?   ",
    id: "help",
  },
  {
    label: "Real Stories Behind the Tesla Autopilot Claims ",
    id: "stories",
  },

  {
    label:
      " How to File a Tesla Autopilot Recall Lawsuit with Connect2Attorney ",
    id: "help-section",
  },
  {
    label: "Tesla Autopilot Lawsuit Timeline ",
    id: "timeline-section",
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
