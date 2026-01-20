"use client";
import LawsuitsHeroCard from "../../components/subservice_pages/LawsuitsHeroCard";
import OzempicInfo from "../../components/subservice_pages/OzempicInfo";
import TimeLineCard from "../../components/subservice_pages/TimeLineCard";
import FaqSection from "../../components/FaqSection";
import ContactCard from "../../components/ContactCard";
import Footer from "../../components/Footer";
import { useParams } from "next/navigation";
import type { ReactNode } from "react";
import MesoLawsuitsLegalPage from "../../components/SubserviceLawsuitsLegalPages/MesoLawsuitsLegalPage";
import TeslaLawsuitsLegalPage from "../../components/SubserviceLawsuitsLegalPages/TeslaLawsuitsLegalPage"
import { teslaTimelineData } from "@/app/components/timelines/teslaTimelineData";
import { TimelineData } from "@/app/components/timelineTypes";
import MaclarenLawsuitsLegalPage from "../../components/SubserviceLawsuitsLegalPages/MaclarenLawsuitsLegalPage";

/* ================= PAGE TITLES ================= */
const HERO_TITLES: Record<string, string> = {
  "tesla-autopilot-recall-lawsuit":
    "Tesla Autopilot Recall Lawsuit: Crash Claims, Safety Defects & Legal Updates",

  "maclaren-hall-sex-abuse-lawsuit":
    "MacLaren Hall Sex Abuse Lawsuit: Survivor Claims, Legal Rights & Support",
};
/* ================= FAQ DATA ================= */
const FAQ_BY_SLUG: Record<string, { question: string; answer: string }[]> = {
  "maclaren-hall-sex-abuse-lawsuit": [
    {
      question: "What is the MacLaren Hall Sex Abuse Lawsuit about?",
      answer:
        "It involves survivors who were abused or neglected at the facility, claiming Los Angeles County failed to protect them.",
    },
    {
      question: "What types of abuse occurred?",
      answer:
        "Survivors have reported sexual assault, physical abuse, emotional abuse, neglect, and traumatic living conditions.",
    },
    {
      question: "Who qualifies for compensation?",
      answer:
        "Anyone who lived at MacLaren Hall from 1961 to 2003 and suffered abuse or trauma may be eligible for compensation.",
    },
    {
      question: "How much can survivors receive?",
      answer:
        "Compensation varies depending on the severity of the abuse, the lasting impact on the survivor, and legal factors involved in the claim.",
    },
    {
      question: "Is this handled as a class action?",
      answer:
        "Many MacLaren Hall cases fall under institutional abuse class actions or group settlements due to the number of victims involved.",
    },
  ],

  "tesla-autopilot-recall-lawsuit": [
    {
      question: "What is the Tesla Autopilot recall lawsuit about?",
      answer:
        "It alleges Tesla misled consumers about Autopilot safety and failed to prevent crashes caused by defective driver-assistance systems.",
    },
    {
      question: "What are the safety risks?",
      answer:
        "Reported risks include lane-keeping failures, sudden braking, crashes into stationary vehicles, and over-reliance on the system due to misleading marketing.",
    },
    {
      question: "Is Tesla being forced to remove Autopilot?",
      answer:
        "No. Tesla has issued recalls and software updates, but Autopilot remains available in its vehicles.",
    },
    {
      question: "How much compensation can I receive?",
      answer:
        "The amount depends on the severity of your injuries, property damage, and financial losses. Serious injury cases may result in significant settlements.",
    },
    {
      question: "Do I need to pay an attorney upfront?",
      answer:
        "No. Most attorneys handle Tesla Autopilot cases on a contingency fee basis, meaning you only pay if your case is successful.",
    },
  ],
};



export default function MassTortPage() {
  const { slug } = useParams<{ slug: string }>();
  const heroTitle: ReactNode = HERO_TITLES[slug] ?? (
    <>
      Class Action
      <br />
      Lawsuits
    </>
  );

    const TIMELINE_BY_SLUG: Record<
      string,
      { title: string; data: TimelineData }
    > = {
      "tesla-autopilot-recall-lawsuit": {
        title: "Tesla Autopilot Timeline",
        data: teslaTimelineData,
      },
    };

  const faqData = FAQ_BY_SLUG[slug] ?? [
    {
      question: "How much does it cost to start a case?",
      answer: "We work on a contingency basis. You pay nothing unless we win.",
    },
  ];

  if (!slug) {
    return null; // or a loader, or notFound()
  }
  const LEGAL_PAGE_BY_SLUG: Record<string, ReactNode> = {
    "tesla-autopilot-recall-lawsuit": <TeslaLawsuitsLegalPage />,
    "maclaren-hall-sex-abuse-lawsuit": <MaclarenLawsuitsLegalPage />,
  };

    const timelineConfig = TIMELINE_BY_SLUG[slug];
  return (
    <main className="min-h-screen">
      <LawsuitsHeroCard heroTitle={heroTitle} />
      {LEGAL_PAGE_BY_SLUG[slug]}
     <div id="timeline-section">
        {timelineConfig && (
          <div id="timeline-section">
            <TimeLineCard
              title={timelineConfig.title}
              timelineData={timelineConfig.data}
              defaultYear="2025"
            />
          </div>
        )}
      </div>

      <OzempicInfo />
      <FaqSection faqData={faqData} />
      <ContactCard />
      <Footer />
    </main>
  );
}

