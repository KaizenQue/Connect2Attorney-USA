"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const content = {
  sectionIds: {
    mainTitle: "title",
    causeTitle: "causes",
    limitationsTitle: "limitations",
    settlementsTitle: "settlements",
    compensationTitle: "compensation",
    helpsurvivorsTitle: "help-section",
    stepsTitle: "steps-title",
  },

  causePoints: [
    {
      title: "Driver Error:",
      description:
        " Mistakes such as distracted driving, speeding, or failing to obey traffic laws.  ",
    },
    {
      title: "Driver Fatigue:",
      description:
        "Falling asleep at the wheel or reduced attention due to long driving hours ",
    },
    {
      title: "Weather Conditions:",
      description:
        "Rain, snow, fog, or ice that reduces visibility and road traction.",
    },
    {
      title: "Vehicle Maintenance:",
      description: "Faulty brakes, worn tires, or other mechanical failures.",
    },
    {
      title: "Road Conditions:",
      description:
        "Potholes, poor signage, construction zones, or poorly maintained highways.",
    },
    {
      title: "Improper Loading: ",
      description:
        "Cargo that is unsecured or overloaded, causing imbalance or shifting.   ",
    },
    {
      title: "Alcohol or Substance Use:",
      description:
        "Impairment from drugs or alcohol affecting the driver’s ability to operate safely.  ",
    },
    {
      title: "Aggressive Driving: ",
      description:
        "Tailgating, unsafe lane changes, or road rage incidents involving large trucks. ",
    },
  ],

  eligibilityPoints: [
    {
      description: "A driver or passenger injured in a truck accident ",
    },
    {
      description: "A pedestrian or cyclist hit by an 18-wheeler  ",
    },
    {
      description:
        "A family member filing a wrongful death claim after a fatal crash ",
    },
    {
      description:
        "Individuals whose property was damaged due to the truck accident ",
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
      description:
        "In most U.S. states, victims generally have 2 to 3 years from the date of the truck accident to file a personal injury lawsuit. ",
    },
    {
      description:
        "Wrongful death claims may follow different timelines, depending on state law. ",
    },
    {
      description:
        "Some states allow shorter filing periods, while others provide extended deadlines in limited situations. ",
    },
    {
      description:
        "Exceptions or tolling may apply if the victim is a minor, incapacitated, or if a government entity is involved. ",
    },
    {
      description:
        "Missing the statute of limitations can permanently bar your right to seek compensation. ",
    },
    {
      description:
        "Acting quickly and consulting a lawyer early helps protect your legal rights and preserves critical evidence. ",
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
      title: "Medical Expenses",
      description:
        "Costs for hospital stays, surgeries, medications, rehabilitation, and ongoing care.  ",
    },
    {
      title: "Lost Wages",
      description:
        "Reimbursement for income loss during recovery or due to long-term disability.  ",
    },
    {
      title: "Property Damage",
      description:
        "Payment for repairs or replacement of vehicles and other personal property.  ",
    },
    {
      title: "Pain and Suffering",
      description:
        "Compensation for physical pain, emotional distress, and reduced quality of life.  ",
    },
    {
      title: "Wrongful Death Claims",
      description:
        "In fatal cases, families may recover damages for funeral costs, loss of support, and emotional impact.",
    },
  ],

  helpSurvivors: [
    {
      description: "Investigating trucking company records and driver logs  ",
    },
    {
      description: "Identifying all liable parties  ",
    },
    {
      description: "Handling aggressive insurance companies  ",
    },
    {
      description: "Calculating full and fair compensation  ",
    },
    {
      description: "Representing you in settlement negotiations or court ",
    },
  ],

  pageContent: {
    mainTitle: "What is an 18-Wheeler Accident Lawsuit?",
    mainParagraphs: [
      "An 18-wheeler accident lawsuit allows victims of serious truck crashes to seek financial compensation for injuries, losses, and long-term impact on their lives. As of October 31, 2025, approximately 2,900 fatal truck crashes have been recorded, and with most of the year’s data already in, early estimates indicate that the total for 2025 is expected to be lower than in 2024. If you have been involved in an 18-wheeler accident and suffered injuries or property damage, you may be entitled to compensation. We can help you pursue the maximum payout for your medical expenses",
      "An 18-wheeler accident lawsuit is a legal claim filed by individuals injured in crashes involving large commercial trucks, tractor-trailers, or semi-trucks. These lawsuits are typically filed as personal injury lawsuits or wrongful death claims and seek compensation for medical bills, lost income, pain and suffering, and other damages caused by negligence.",
      "About 18-Wheeler Accidents ",
      "18-wheeler trucks are large commercial vehicles with 18 wheels, commonly used for transporting goods across the country. 18-wheeler accidents are far more severe than typical car crashes due to the truck’s massive size and weight, longer braking distances, high-speed highway operation, and the complex federal regulations that govern commercial trucking.  ",
      "When a collision occurs, the impact can be devastating, often resulting in traumatic brain injuries, spinal cord damage, multiple fractures, or permanent disabilities. Because these injuries can lead to long-term medical care, lost income, and reduced quality of life, pursuing legal action is often essential for securing financial recovery. ",
    ],

    causeTitle: "Common Causes of 18-Wheeler Accidents",
    causeParagraph:
      "18-wheeler accidents can cause injuries, financial loss, and emotional trauma for victims. Many crashes occur due to preventable factors, making it crucial to understand the common causes when pursuing a lawsuit. Common causes of 18-wheeler accidents include: ",

    eligibleTitle: "Who is Eligible to File a Claim?",
    eligibleParagraph:
      "Eligibility depends on proving that negligence by the truck driver, trucking company, or another liable party caused the accident. You may be eligible to file an 18-wheeler accident lawsuit if you are: ",
    typesTitle: "Types Of Sexual Abuse Cases",

    legalRightsTitle: "Property Owner Liability in Slip and Fall Injury Cases",
    legalRightsParagraph:
      "A slip and fall injury lawsuit, establishing property owner liability is crucial to proving that the owner’s negligence caused your injuries. Property owners and occupiers have a legal duty of care to ensure their premises are reasonably safe for visitors. If they fail to meet this duty, they can be held financially responsible for your losses.",
    legalRightsSubtitle:
      "To determine liability, courts and insurance companies look at several key factors:",

    limitationsTitle:
      "18-Wheeler Accident Lawsuit Deadlines & Statute of Limitations  ",

    limitationsSubtitle:
      "Every 18-wheeler accident lawsuit is subject to strict statutes of limitations that set deadlines for filing a claim. ",

    settlementsTitle: "18-Wheeler Accident Lawsuit Settlements",
    settlementsParagraph:
      "Settlement values vary depending on factors such as injury severity, medical costs, lost wages, and how clearly fault can be established. The average settlement for an 18-wheeler accident in 2026 is projected to range from $100,000 to $150,000, with significantly higher payouts possible in cases involving catastrophic injuries or wrongful death. ",
    compensationTitle: "What Compensation Can You Seek? ",
    compensationParagraph:
      "Compensation in a slip and fall injury case depends on how severe the injury is and how it affects your life. The average settlement ranges between $10,000 and $50,000, but serious cases involving long-term disability or major medical care can result in higher payouts. ",

    compensationSubtitle:
      "You may be entitled to seek the following types of compensation: ",
    helpsurvivorsTitle: "How an 18-Wheeler Accident Lawyer Can Help You?  ",

    helpsurvivorsParagraph:
      "An experienced 18-wheeler accident lawyer plays a critical role by:",
    helpsurvivorsSubTitle:
      "Through Connect 2 Attorney, injured victims can quickly connect with qualified personal injury lawyers who understand slip and fall injury lawsuits and fight to secure the maximum compensation you deserve. ",
    stepsTitle: "How to File a Sexual Abuse Lawsuit with Connect2Attorney?",
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
            <div className="mb-10 font-urbanist font-medium text-[#425777] text-[18px] leading-[27px] space-y-1">
              <p>{content.pageContent.mainParagraphs[0]}</p>
              <br />

              <p>{content.pageContent.mainParagraphs[1]}</p>
              <br />

              <p className="font-bold">
                {content.pageContent.mainParagraphs[2]}
              </p>

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

              <p className="mb-4 font-urbanist font-normal text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px]">
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
                    <p className="font-urbanist text-[#F9F9F9] text-[16px] sm:text-[18px] font-medium leading-[24px] sm:leading-[27px]">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* ==================== Cause SECTION ==================== */}

            <h2
              id={content.sectionIds.causeTitle}
              className="font-noto-serif font-normal capitalize text-[#162766] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4"
            >
              {content.pageContent.causeTitle}
            </h2>

            <p className="mb-4 font-poppins font-normal text-[#425777] text-[16px] lg:text-[18px] leading-[27px]">
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
                    {item.title}
                  </span>

                  <span className="text-[#425777] "> {item.description}</span>
                </li>
              ))}
            </ul>

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

                  <span className="text-[#425777] font-bold">
                    {" "}
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>

            <h2
              id={content.sectionIds.limitationsTitle}
              className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
            >
              {content.pageContent.settlementsTitle}
            </h2>

            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.settlementsParagraph}
            </p>

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
    label: "What is an 18-Wheeler Accident Lawsuit?",
    id: "title",
  },
  {
    label: "Common Causes of 18-Wheeler Accidents",
    id: "causes",
  },
  {
    label: "18-Wheeler Accident Lawsuit Deadlines & Statute of Limitations ",
    id: "limitations",
  },
  {
    label: "18-Wheeler Accident Lawsuit Settlements    ",
    id: "settlements",
  },
  {
    label: "18-Wheeler Accident Lawsuit Step-by-Step Process",
    id: "compensation",
  },

  {
    label: " How a 18-Wheeler Accident Lawyer Can Help You? ",
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
