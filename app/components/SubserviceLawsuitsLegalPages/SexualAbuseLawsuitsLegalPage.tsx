"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const content = {
  sectionIds: {
    mainTitle: "what-is-sexual-abuse-lawsuit",
    allegationsTitle: "allegations-against-sexual-abuse",
    eligibleTitle: "eligible-claim",
    typesTitle: "types-sexual-abuse",
    legalRightsTitle: "legal-rights-sexual-abuse",
    limitationsTitle: "limitations-explained-sexual-abuse",
    currentLegalTitle: "current-legal-dev",
    compensationTitle: "compensation-title",
    helpsurvivorsTitle: "help-survivors",
    stepsTitle: "steps-title",
  },

  allegationPoints: [
    {
      title: "Physical Abuse:",
      description:
        "Claims of unwanted touching, assault, or sexual assault that caused bodily harm.",
    },
    {
      title: "Emotional and Psychological Harm:",
      description:
        " Allegations of trauma, anxiety, depression, or long-term mental health issues.",
    },
    {
      title: "Negligence of Institutions:",
      description:
        "Accusations that schools, workplaces, or organizations failed to protect victims.",
    },
    {
      title: "Cover-ups or Concealment:",
      description:
        "Claims that perpetrators or institutions hid incidents and delayed reporting.",
    },
    {
      title: "Harassment and Intimidation:",
      description:
        "Allegations that victims were threatened or coerced to remain silent.",
    },
  ],

  eligibilityPoints: [
    {
      title: "Direct Victims:",
      description:
        "Individuals who personally experienced sexual abuse, regardless of age at the time of the incident.",
    },
    {
      title: "Minors:",
      description:
        "Children under 18 may have a guardian or parent file on their behalf. Some jurisdictions allow survivors to file later in life once they reach adulthood.",
    },
    {
      title: "Victims of Institutional Abuse:",
      description:
        "Individuals abused in schools, workplaces, care facilities, or religious organizations can hold institutions accountable for negligence.",
    },
    {
      title: "Family Members:",
      description:
        "In some cases, family members may file claims for emotional distress or loss of support resulting from the abuse.",
    },
    {
      title: "Survivors Facing Delayed Discovery:",
      description:
        "Victims who only realize the abuse or its impact later may still be eligible under laws that extend filing deadlines.",
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
      title: "Workplace",
      description:
        "Workplace sexual abuse cases include harassment or assault by supervisors, coworkers, or other staff. Survivors may seek compensation for emotional distress, lost income, and career setbacks through a sexual abuse lawsuit.",
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
      title: "Protection Against Statute of Limitations",
      description:
        "Many states have extended or even eliminated the statute of limitations for sexual abuse claims. This means that even if abuse occurred years ago, survivors may still have the legal right to pursue a claim. ",
    },
    {
      title: "Right to Privacy and Support",
      description:
        "Survivors have the right to pursue justice at their own pace. Legal action does not have to be immediate; knowing your rights empowers you to make informed decisions about your future while accessing support resources and counseling.",
    },
  ],

  limitationsPoints: [
    {
      title: "No Time Limit for Childhood Abuse:",
      description:
        "States like Delaware and Vermont have abolished civil time limits for child sexual abuse, allowing survivors to bring claims at any point in life.",
    },
    {
      title: "Extended Deadlines:",
      description:
        "States like California allow survivors of childhood abuse to file until age 40 or within five years of discovering the injury, whichever is later.",
    },
    {
      title: "Traditional Deadlines:",
      description:
        "Some states, such as Alabama, generally require civil claims to be filed within two years of the abuse or discovery of injury.",
    },
    {
      title: "Mixed Rules:",
      description:
        " States like Arizona and Illinois have discovery rules or age-based extensions that can lengthen the filing window beyond a typical two- to three-year period.",
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

  helpSurvivors: [
    {
      description: "Evaluating eligibility and legal options",
    },
    {
      description: "Gathering evidence and documenting abuse",
    },
    {
      description: "Filing claims within the statute of limitations",
    },
    {
      description: "Negotiating settlements or pursuing court trials",
    },
    {
      description: "Ensuring survivors receive the compensation they deserve ",
    },
  ],

  pageContent: {
    mainTitle: "What is a Sexual Abuse Lawsuit?",
    mainParagraphs: [
      "Sexual abuse is a traumatic experience that can leave lasting physical, emotional, and psychological scars. Survivors of sexual abuse have legal rights and options to seek justice and hold perpetrators accountable. A sexual abuse lawsuit allows victims to pursue compensation for the harm they endured, helping them cover medical costs, therapy, and lost opportunities while sending a strong message against abuse.",
      "A sexual abuse lawsuit is a legal action filed by a survivor against an individual, institution, or organization responsible for sexual misconduct. These lawsuits aim to hold perpetrators accountable, recover financial compensation, and ensure justice for survivors. Cases can involve direct abuse or situations where an institution failed to prevent or respond appropriately to the abuse.",
      "Filing a sexual abuse lawsuit may result in:",
      "Compensation for physical and emotional injuries",
      "Coverage for medical treatment and therapy",
      "Punitive damages in cases of gross negligence",
      "Public accountability for institutions or perpetrators",
      "Legal Definition of Sexual Abuse",
      "Under U.S. law, sexual abuse refers to any unwanted or non-consensual sexual act committed against a person through force, coercion, manipulation, or exploitation. This includes sexual contact, assault, molestation, harassment, or exploitation of both adults and minors. Consent obtained through intimidation, authority, or pressure is not considered valid under the law.",
    ],

    allegationsTitle: "What are the Allegations in Sexual Abuse Lawsuits?",
    allegationsParagraph:
      "Sexual abuse lawsuits often arise from deeply traumatic experiences that leave lasting physical, emotional, and psychological scars. Understanding the typical claims can help victims know what to expect when filing a lawsuit.",
    allegationsSubtitle: "Common allegations in sexual abuse lawsuits:",

    eligibleTitle: "Who is Eligible to File a Claim?",
    eligibleParagraph:
      "Victims of sexual abuse often face uncertainty about whether they can take legal action. Many survivors struggle with fear, shame, or confusion about the process, while others worry about time limits or proving abuse.",
    eligibleSubtitle: "Eligibility to file a sexual abuse lawsuit: ",

    typesTitle: "Types Of Sexual Abuse Cases",

    legalRightsTitle: "Legal Rights of Sexual Abuse Survivors",
    legalRightsParagraph:
      "Understanding your legal rights as a sexual abuse survivor ensures you can take informed steps toward justice and recovery.",
    legalRightsSubtitle: "Key Legal Rights for Survivors:",

    limitationsTitle:
      "Sexual Abuse Lawsuit Deadlines: Statute of Limitations Explained",
    limitationsParagraph:
      "The statute of limitations sets the legal deadline for filing a sexual abuse lawsuit. These deadlines vary by state and depend on factors such as the survivor’s age at the time of abuse, whether the claim is civil or criminal, and when the harm was discovered. Understanding these timelines is critical, as missing a deadline can prevent you from pursuing compensation and justice.",
    limitationsSub1: "Examples of Statute of Limitations Across the U.S.",
    limitationsSub2:
      "State laws differ significantly in how they treat sexual abuse lawsuit deadlines:",

    currentLegalTitle:
      "Sexual Abuse Lawsuit Update: Current Legal Developments",
    currentLegalParagraph:
      "Sexual abuse litigation in the United States continues to evolve, with courts and lawmakers expanding protections for survivors and increasing accountability for institutions. These changes have opened new opportunities for survivors to pursue a sexual abuse lawsuit, even for abuse that occurred decades ago.",
    currentLegalSubtitle: "Key Legal Updates Survivors Should Know",

    compensationTitle: "Settlements & Compensation in Sexual Abuse Lawsuits",
    compensationParagraph:
      "When survivors pursue a sexual abuse lawsuit, financial compensation can play a vital role in recovery. Settlements and verdicts provide monetary relief for trauma, medical care, therapy, lost income, and long-term emotional harm. Compensation also holds individuals and institutions accountable for abuse and negligence. Institutions and individuals have paid over $13 billion in publicly reported sexual abuse settlements and verdicts to survivors since 2003.",

    helpsurvivorsTitle: "How a Sexual Abuse Lawyer Can Help Survivors? ",

    helpsurvivorsParagraph:
      "A sexual abuse lawyer can guide survivors through every step of a lawsuit, including:",
    stepsTitle: "How to File a Sexual Abuse Lawsuit with Connect2Attorney?",
    stepsParagraph:
      "Connect2Attorney guides you through the process of filing a sexual abuse lawsuit against the responsible party, in just three simple steps:",
  },

  ctaContent: {
    title: "Were You Affected?",
    description: "You may be entitled to compensation.",
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

              <h3 className=" font-bold">
                {content.pageContent.mainParagraphs[2]}
                <ul className="list-disc list-outside ml-5 mb-8 marker:text-[#2d3663] marker:font-bold font-urbanist font-bold text-[16px] sm:text-[17px] lg:text-[18px] leading-[22px] sm:leading-[24px] lg:leading-[27px]">
                  <li>{content.pageContent.mainParagraphs[3]}</li>
                  <li>{content.pageContent.mainParagraphs[4]}</li>
                  <li>{content.pageContent.mainParagraphs[5]}</li>
                  <li>{content.pageContent.mainParagraphs[6]}</li>
                </ul>
              </h3>

              <p className="font-bold">
                {content.pageContent.mainParagraphs[7]}
              </p>
              <p>{content.pageContent.mainParagraphs[8]}</p>
            </div>

            {/* <Ozempicfreecasecard /> */}
            <h2
              id={content.sectionIds.allegationsTitle}
              className="font-noto-serif font-normal capitalize text-[#162766] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4"
            >
              {content.pageContent.allegationsTitle}
            </h2>

            <p className="mb-4 font-poppins font-normal text-[#425777] text-[16px] lg:text-[18px] leading-[27px]">
              {content.pageContent.allegationsParagraph}
            </p>

            <p className="mb-4 font-poppins font-bold text-[#425777] text-[18px] leading-[27px]">
              {content.pageContent.allegationsSubtitle}
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
                  <span className="font-bold text-[#425777] ">
                    {" "}
                    {item.title}{" "}
                  </span>
                  <span className="text-[#425777]"> {item.description}</span>
                </li>
              ))}
            </ul>

            {/* ==================== Eligibility SECTION ==================== */}
            <div className="bg-[#162766] text-[#FFF] rounded-xl p-4 sm:p-6 w-full  mb-16">
              <h2
                id={content.sectionIds.eligibleTitle}
                className="font-noto-serif font-normal capitalize text-[#FFF] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4"
              >
                <span className="text-[#F2C438]">
                  {content.pageContent.eligibleTitle.split(" ")[0]}{" "}
                  {content.pageContent.eligibleTitle.split(" ")[1]}{" "}
                  {content.pageContent.eligibleTitle.split(" ")[2]}
                </span>{" "}
                {content.pageContent.eligibleTitle
                  .split(" ")
                  .slice(3)
                  .join(" ")}
              </h2>

              <p className="mb-4 font-urbanist font-normal text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px]">
                {content.pageContent.eligibleParagraph}
              </p>

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
                      <span className="font-bold">{item.title}</span>{" "}
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* ==================== Types SECTION ==================== */}
            <h2
              id={content.sectionIds.typesTitle}
              className="font-noto-serif font-normal capitalize text-[#162766] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4"
            >
              {content.pageContent.typesTitle}
            </h2>

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
                    <p className="font-urbanist text-[#425777] text-[16px] sm:text-[18px] font-normal leading-[24px] sm:leading-[27px]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ==================== Limitations SECTION ==================== */}

            <div className="bg-[#F4F6F8] rounded-lg px-4 sm:px-6 py-5">
              <h2
                id={content.sectionIds.limitationsTitle}
                className="font-noto-serif font-normal capitalize text-[#162766] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4"
              >
                {content.pageContent.limitationsTitle}
              </h2>

              {/* Description */}
              <p className="font-urbanist text-[#425777] text-[16px] sm:text-[18px] font-medium leading-[24px] sm:leading-[27px]">
                {content.pageContent.limitationsParagraph}
              </p>
              <br />

              <p className="font-urbanist text-[#425777] text-[16px] sm:text-[18px] font-bold leading-[24px] sm:leading-[27px]">
                {content.pageContent.limitationsSub1}
              </p>
              <br />

              <p className="font-urbanist text-[#425777] text-[16px] sm:text-[18px] font-medium leading-[24px] sm:leading-[27px]">
                {content.pageContent.limitationsSub2}
              </p>
              <br />

              <ul className="list-disc list-outside ml-5 space-y-3 mb-8 marker:text-[#2d3663] marker:font-bold font-urbanist font-normal text-[16px] sm:text-[17px] lg:text-[18px] leading-[22px] sm:leading-[24px] lg:leading-[27px]">
                {content.limitationsPoints.map((item, index) => (
                  <li key={index} className="">
                    <span className="font-bold text-[#425777] ">
                      {" "}
                      {item.title}{" "}
                    </span>
                    <span className="text-[#425777]"> {item.description}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ==================== Current Legal devs SECTION ==================== */}

            <div className="mb-16 mt-10">
              <h2
                id={content.sectionIds.currentLegalTitle}
                className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
              >
                {content.pageContent.currentLegalTitle}
              </h2>

              <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.currentLegalParagraph}
              </p>

              <p className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.currentLegalSubtitle}
              </p>

              <div className="space-y-4 w-full mb-16">
                {content.currentLegal.map((item, index) => (
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

            <h2
              id={content.sectionIds.compensationTitle}
              className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
            >
              {content.pageContent.compensationTitle}
            </h2>

            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.compensationParagraph}
            </p>

            <br />
            <br />

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
    label: "What is a Sexual Abuse Lawsuit?",
    id: "what-is-sexual-abuse-lawsuit",
  },
  {
    label: "What are the Allegations in Sexual Abuse Lawsuits?",
    id: "allegations-against-sexual-abuse",
  },
  { label: "Who is Eligible to File a Claim?", id: "eligible-claim" },
  { label: "Types of Sexual Abuse Cases", id: "types-sexual-abuse" },
  {
    label: "Legal Rights of Sexual Abuse Survivors",
    id: "legal-rights-sexual-abuse",
  },
  {
    label: "Sexual Abuse Lawsuit Deadlines: Statute of Limitations Explained",
    id: "limitations-explained-sexual-abuse",
  },
  {
    label: "Sexual Abuse Lawsuit Update: Current Legal Developments",
    id: "current-legal-dev",
  },
  {
    label: "Settlements & Compensation in Sexual Abuse Lawsuits",
    id: "compensation-title",
  },

  {
    label: "How a Sexual Abuse Lawyer Can Help Survivors?",
    id: "help-survivors",
  },
  {
    label: "How to File a Sexual Abuse Lawsuit with Connect2Attorney?",
    id: "steps-title",
  },

  {
    label: " Sexual Abuse Lawsuit Timeline",
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
