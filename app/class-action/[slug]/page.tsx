"use client";
import LawsuitsHeroCard from "../../components/subservice_pages/LawsuitsHeroCard";
import OzempicInfo from "../../components/subservice_pages/OzempicInfo";
import TimeLineCard from "../../components/subservice_pages/TimeLineCard";
import FaqSection from "../../components/FaqSection";
import ContactCard from "../../components/ContactCard";
import Footer from "../../components/Footer";
import LawsuitsLegalPage from "../../components/subservice_pages/LawsuitsLegalPage";
import { useParams } from "next/navigation";
import type { ReactNode } from "react";
import OzempicLawsuitsLegalPage from "../../components/SubserviceLawsuitsLegalPages/OzempicLawsuitsLegalPage";
import MesoLawsuitsLegalPage from "../../components/SubserviceLawsuitsLegalPages/MesoLawsuitsLegalPage";
import TeslaLawsuitsLegalPage from "../../components/SubserviceLawsuitsLegalPages/TeslaLawsuitsLegalPage"


/* ================= PAGE TITLES ================= */
const HERO_TITLES: Record<string, string> = {
  "tesla-autopilot-recall-lawsuit":
    "Tesla Autopilot Recall Lawsuit: Crash Claims, Safety Defects & Legal Updates",

  "maclaren-hall-sex-abuse-lawsuit":
    "MacLaren Hall Sex Abuse Lawsuit: Survivor Claims, Legal Rights & Support",
};
/* ================= FAQ DATA ================= */
const FAQ_BY_SLUG: Record<string, { question: string; answer: string }[]> = {
  "ozempic-lawsuit": [
    {
      question: "What is the Ozempic lawsuit about?",
      answer:
        "The Ozempic lawsuit involves claims that the drug caused serious gastrointestinal injuries, such as gastroparesis, and that the manufacturer failed to provide adequate warnings.",
    },
    {
      question: "Who can file an Ozempic lawsuit?",
      answer:
        "Individuals who used Ozempic and experienced severe digestive issues, required medical treatment, or suffered long-term health problems may be eligible to file a claim.",
    },
    {
      question: "What are the problems caused by Ozempic?",
      answer:
        "Reported problems include gastroparesis (stomach paralysis), nausea, vomiting, intestinal blockage, and other painful stomach conditions.",
    },
    {
      question: "What kind of compensation can I recover?",
      answer:
        "Eligible plaintiffs may recover compensation for medical bills, lost income, pain and suffering, and other damages caused by Ozempic-related injuries.",
    },
    {
      question: "How do I start an Ozempic claim?",
      answer:
        "You can start by contacting an experienced Ozempic lawyer for a free case review. They can evaluate your eligibility, gather medical records, and guide you through the lawsuit process.",
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

  return (
    <main className="min-h-screen">
      <LawsuitsHeroCard heroTitle={heroTitle} />
      {LEGAL_PAGE_BY_SLUG[slug]}
      {/* <TimeLineCard /> */}
      <OzempicInfo />
      <FaqSection faqData={faqData} />
      <ContactCard />
      <Footer />
    </main>
  );
}

