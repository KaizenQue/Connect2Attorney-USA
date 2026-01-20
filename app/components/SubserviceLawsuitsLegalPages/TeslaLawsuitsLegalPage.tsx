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

  currentDevsPoints: [
    {
      title: "$243 Million Federal Jury Verdict",
      description:
      "In August 2025, a federal jury found Tesla partially liable in a fatal 2019 Autopilot crash, awarding $243 million in damages. The case marked one of the first major jury verdicts holding Tesla accountable for Autopilot-related failures. ",
    },
    {
      title: "Consumer Misrepresentation Rulings ",
      description:
      "In late December 2025, the California DMV said that Tesla made Autopilot sound more advanced than it really is. Many drivers believed the car could drive itself, but Autopilot still needs full human control and attention. Because of this, the DMV warned Tesla that it must change how Autopilot is named or advertised. If Tesla does not fix this, it could face limits on selling its cars in California, which is Tesla’s biggest U.S. market.  "
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

    risksTitle: "Tesla Autopilot Safety Issues: Crash Defects & Injury Risks",

    risksSubtitle:
      "Investigations link Tesla Autopilot to multiple safety concerns, including:",

    defectsTitle: "Tesla Autopilot Recall Details: Affected Models & Defects Explained ",
    whoQualifiesParagraph:
      "Many users of Ozempic or similar drugs have developed severe digestive issues like gastroparesis after using them for weight loss or diabetes. Lawsuits claim that manufacturers like Novo Nordisk and Eli Lilly failed to warn about these risks",
    whoQualifiesSubtitle: "You may be eligible to file a claim if:",

    compensationTitle: "What Compensation Can You Seek?",
    compensationParagraph:
    "The Tesla recall related to Autopilot impacts several popular models, including Model S, Model 3, Model X, and Model Y. ",
    "Defects focus on Autopilot’s inability to prevent misuse and insufficient safeguards to ensure active driver engagement. These issues mirror broader concerns seen in other recalls, including the Tesla Cybertruck recall and steering-related defects. ",
    
    currenDevsTitle:"Tesla Autopilot Recall Lawsuit Update: Current Court Developments ",

    currentDevsParagraph:"Tesla users have reported real-world consequences that affect not only safety but also trust, financial stability, and emotional well-being. The system, marketed as an advanced driver-assistance feature, has often been criticized for inconsistent performance. ",
   

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

const LawsuitsLegalPage = () => {
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
      <div className="mx-auto px-4 sm:px-6 md:px-8 py-12">
        {/* ==================== SECTION 1: Ozempic Lawsuit ==================== */}
        <div className="lg:hidden mb-4">
          <TableOfContents />
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
              <h2
                id={content.sectionIds.whoQualifiesTitle}
                className="font-noto-serif font-normal capitalize text-[#FFF] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4"
              >
                {content.pageContent.allegationsTitle}
              </h2>

              <p className="mb-4 font-urbanist font-bold text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                {content.pageContent.allegationsSubtitle}
              </p>

              <ul className="space-y-3 mb-8">
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

  

            {/* ==================== HEALTH RISKS SECTION ==================== */}
            <div className="mb-16">
              <h2
                id={content.sectionIds.healthRisksTitle}
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

              <div className="bg-[#162766] text-[#FFF] rounded-xl p-4 sm:p-6 w-full  mb-16">
                <h2
                  id={content.sectionIds.whoQualifiesTitle}
                  className="font-noto-serif font-normal capitalize text-[#FFF] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4"
                >
                  <span className="text-[#F2C438]">
                    {content.pageContent.whoQualifiesTitle.split(" ")[0]}{" "}
                    {content.pageContent.whoQualifiesTitle.split(" ")[1]}
                  </span>{" "}
                  {content.pageContent.whoQualifiesTitle
                    .split(" ")
                    .slice(2)
                    .join(" ")}
                </h2>

                <p className="mb-4 font-urbanist font-normal text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px]">
                  {content.pageContent.whoQualifiesParagraph}
                </p>

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
            <div className="mb-24">
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
                    {content.ctaContent.title}
                  </h3>

                  <p className="text-[#F9F9F9] font-urbanist font-medium text-[16px] leading-normal mb-6">
                    {content.ctaContent.description}
                  </p>
                  <Link href="/contact-us">
                    <button className="w-full bg-[#fccb48] hover:bg-[#eebb20] text-[#162766] font-poppins font-semibold text-[16px] leading-normal tracking-[0.32px] uppercase text-center py-3 px-4 rounded transition-colors duration-200">
                      {content.ctaContent.buttonText}
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

export default LawsuitsLegalPage;
