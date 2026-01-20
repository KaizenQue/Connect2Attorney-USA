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

/* ================= PAGE TITLES ================= */
const HERO_TITLES: Record<string, string> = {
  "tesla-autopilot-recall-lawsuit":
    "Tesla Autopilot Recall Lawsuit: Crash Claims, Safety Defects & Legal Updates",

  "maclaren-hall-sex-abuse-lawsuit":
    "MacLaren Hall Sex Abuse Lawsuit: Survivor Claims, Legal Rights & Support",
};
/* ================= FAQ DATA ================= */
const FAQ_BY_SLUG: Record<string, { question: string; answer: string }[]> = {
  "tesla-autopilot-recall-lawsuit": [
    {
      question: "What is the Tesla Autopilot recall lawsuit about?",
      answer:
        "The lawsuit alleges that Tesla misled consumers about the safety and capabilities of its Autopilot and Full Self-Driving systems and failed to adequately prevent crashes linked to defective or insufficient driver-assistance controls.",
    },
    {
      question: "What safety risks are associated with Tesla Autopilot?",
      answer:
        "Reported risks include lane-keeping failures, sudden or unexpected braking, collisions with stationary objects or emergency vehicles, and driver over-reliance allegedly encouraged by misleading marketing.",
    },
    {
      question: "Is Tesla being forced to remove Autopilot from vehicles?",
      answer:
        "No. Tesla has issued recalls and software updates to address regulatory concerns, but Autopilot remains available and has not been removed from vehicles.",
    },
    {
      question: "How much compensation can I receive from a Tesla Autopilot lawsuit?",
      answer:
        "Compensation varies depending on the severity of injuries, property damage, and other losses. Cases involving serious injury or wrongful death may result in substantial settlements or verdicts.",
    },
    {
      question: "Do I need to pay an attorney upfront to file a Tesla Autopilot lawsuit?",
      answer:
        "No. Most Tesla Autopilot attorneys work on a contingency fee basis, meaning you only pay legal fees if your case is successful.",
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
    "maclaren-hall-sex-abuse-lawsuit": <MesoLawsuitsLegalPage />,
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

