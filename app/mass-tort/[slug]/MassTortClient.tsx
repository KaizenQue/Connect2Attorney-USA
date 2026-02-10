"use client";

import type { ReactNode } from "react";
import LawsuitsHeroCard from "../../components/subservice_pages/LawsuitsHeroCard";
import TimeLineCard from "../../components/subservice_pages/TimeLineCard";
import FaqSection from "../../components/FaqSection";
import ContactCard from "../../components/ContactCard";
import Footer from "../../components/Footer";
import SupportCard from "../../components/subservice_pages/SupportCard";

import OzempicLawsuitsLegalPage from "../../components/SubserviceLawsuitsLegalPages/OzempicLawsuitsLegalPage";
import MesoLawsuitsLegalPage from "../../components/SubserviceLawsuitsLegalPages/MesoLawsuitsLegalPage";
import DepoLawsuitsLegalPage from "../../components/SubserviceLawsuitsLegalPages/DepoLawsuitsLegalPage";
import RoundupLawsuitsLegalPage from "../../components/SubserviceLawsuitsLegalPages/RoundupLawsuitsLegalPage";
import TalcumLawsuitsLegalPage from "../../components/SubserviceLawsuitsLegalPages/TalcumLawsuitsLegalPage";
import RideshareSexualLawsuitsLegalPage from "../../components/SubserviceLawsuitsLegalPages/RideshareSexualLawsuitsLegalPage";

import { ozempicTimelineData } from "../../components/timelines/ozempicTimelineData";

import { TimelineData } from "@/app/components/timelineTypes";
import { depoTimelineData } from "@/app/components/timelines/depoTimelineData";
import { talcumTimelineData } from "@/app/components/timelines/talcumTimelineData";
import { roundupTimelineData } from "@/app/components/timelines/roundupTimelineData";
import { rideshareTimelineData } from "@/app/components/timelines/rideshareTimelineData";

type Props = {
  slug: string;
};

/* ================= PAGE TITLES ================= */
const HERO_TITLES: Record<string, string> = {
  "ozempic-lawsuit":
    "Ozempic Lawsuit: Side Effects, Updates & How to File a Claim",

  "mesothelioma-lawsuit":
    "Mesothelioma Lawsuit: Asbestos Exposure Claims & Compensation Guide",

  "depo-provera-lawsuit":
    "Depo Provera Lawsuit: Depo Shot Lawsuit & Brain Tumor Claims Explained",

  "roundup-lawsuit":
    "Roundup Cancer Lawsuit: Weed Killer Lawsuit, Settlement & Legal Claims",

  "talcum-powder-lawsuit":
    "Talcum Powder Lawsuit: Baby Powder Cancer Claims & Legal Updates",
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

  "mesothelioma-lawsuit": [
    {
      question: "Can you file a wrongful death mesothelioma lawsuit?",
      answer:
        "Yes. If a loved one passed away from mesothelioma, family members may file a claim for funeral costs, lost support, and other damages.",
    },
    {
      question: "How long does it take to settle a mesothelioma lawsuit?",
      answer:
        "Most cases settle within 6 to 18 months, but timelines vary based on the case and court schedule.",
    },
    {
      question: "How do you prove mesothelioma in a lawsuit?",
      answer:
        "You need medical records, a confirmed diagnosis, and evidence of asbestos exposure linked to a job, product, or location.",
    },
    {
      question: "How should I file a mesothelioma claim?",
      answer:
        "Start by contacting an experienced attorney. They will guide you through eligibility, paperwork, and the legal process.",
    },
    {
      question: "Who can be held responsible for asbestos exposure?",
      answer:
        "Companies that made or used asbestos products, employers, or property owners may be legally responsible.",
    },
    {
      question: "Can you still file a claim if exposure happened decades ago?",
      answer:
        "Yes. Mesothelioma often appears years later, and most states allow claims if they are filed within the legal time limit after diagnosis.",
    },
  ],

  "depo-provera-lawsuit": [
    {
      question: "Who is eligible to file a Depo Provera lawsuit?",
      answer:
        "You may be eligible if you used Depo-Provera (the depo shot) and were later diagnosed with a brain tumor such as meningioma, especially if you were not warned about this risk before using the drug.",
    },
    {
      question: "What health conditions are linked to Depo-Provera lawsuits?",
      answer:
        "Most Depo Provera lawsuits focus on meningioma, a type of brain tumor. Claims may involve symptoms such as severe headaches, vision problems, seizures, or the need for surgery or long-term medical care.",
    },
    {
      question: "What legal claims are being filed in Depo Provera cases?",
      answer:
        "Claims generally allege failure to warn, inadequate safety disclosures, and negligent marketing. Plaintiffs argue that manufacturers did not properly inform patients about known or potential brain tumor risks.",
    },
    {
      question: "What compensation may be available in a Depo Provera lawsuit?",
      answer:
        "Compensation may include medical expenses, lost income, pain and suffering, future treatment costs, and other damages related to the injury. The amount depends on the severity of the condition and individual case details.",
    },
    {
      question: "How do I start a Depo Provera lawsuit claim?",
      answer:
        "The first step is to speak with a qualified attorney who can review your medical history and Depo-Provera use. A lawyer can help determine eligibility, file the claim, and guide you through the legal process.",
    },
  ],

  "talcum-powder-lawsuit": [
    {
      question: "Which companies are named in talcum powder lawsuits?",
      answer:
        "Johnson & Johnson is the primary company named, along with some of its subsidiaries and suppliers.",
    },
    {
      question: "Which cancers are linked to talcum powder?",
      answer:
        "Ovarian cancer and mesothelioma are the main cancers linked to talcum powder exposure.",
    },
    {
      question: "What is the current status of talcum powder lawsuits?",
      answer:
        "Thousands of cases are ongoing, with many settlements reached, but no official admission of guilt by the company.",
    },
    {
      question: "What evidence is needed to file a talcum powder lawsuit?",
      answer:
        "You need proof of product use, a cancer diagnosis linked to talcum exposure, and medical records supporting the connection.",
    },
    {
      question:
        "Can family members file a wrongful death talcum powder lawsuit?",
      answer:
        "Yes, surviving family members can file wrongful death claims if their loved one died from talcum-related cancer.",
    },
  ],
  "roundup-lawsuit": [
    {
      question: "What cancers qualify for Roundup lawsuits?",
      answer:
        "Most cases involve non-Hodgkin’s lymphoma, but some related blood cancers like leukemia may also qualify.",
    },
    {
      question: "What is the average settlement for a Roundup case?",
      answer:
        "Settlements typically range from $5,000 to $250,000, depending on the severity of the case.",
    },
    {
      question: "What proof do you need for a Roundup lawsuit?",
      answer:
        "You’ll need a medical diagnosis and evidence linking your condition to Roundup exposure.",
    },
    {
      question: "How long does it take to get a settlement for Roundup?",
      answer:
        "Most cases take several months to a few years, depending on the court process and case complexity.",
    },
    {
      question: "How to prove exposure to Roundup?",
      answer:
        "Proof may include work records, receipts, personal use history, or witness statements.",
    },
  ],

};

export default function MassTortClient({ slug }: Props) {
  if (!slug) return null;
  //   const { slug } = useParams<{ slug: string }>();
  const heroTitle: ReactNode = HERO_TITLES[slug] ?? (
    <>
      Mass Tort
      <br />
      Lawsuits
    </>
  );

  //   console.log("MassTort slug:", slug);
  const TIMELINE_BY_SLUG: Record<
    string,
    { title: string; data: TimelineData }
  > = {
    "ozempic-lawsuit": {
      title: "Ozempic Lawsuit Timeline",
      data: ozempicTimelineData,
    },
    // "mesothelioma-lawsuit": {
    //   title: "Mesothelioma Lawsuit Timeline",
    //   data: mesotheliomaTimelineData,
    // },
    "depo-provera-lawsuit": {
      title: "Depo Provera Lawsuit Timeline",
      data: depoTimelineData,
    },

    "roundup-lawsuit": {
      title: "Roundup Lawsuit Timeline",
      data: roundupTimelineData,
    },

    "talcum-powder-lawsuit": {
      title: "Talcum Powder Lawsuit Timeline",
      data: talcumTimelineData,
    },
   
  };

  const faqData = FAQ_BY_SLUG[slug] ?? [
    {
      question: "How much does it cost to start a case?",
      answer: "We work on a contingency basis. You pay nothing unless we win.",
    },
  ];
  /* ================= HERO IMAGES ================= */
  const HERO_IMAGE_BY_SLUG: Record<string, string> = {
    "ozempic-lawsuit": "/ozempic_bg_dark_new.png",
    "mesothelioma-lawsuit": "/meso_bg_dark.png",
    "depo-provera-lawsuit": "/depo_bg_dark.png",
    "roundup-lawsuit": "/roundup_bg_dark.png",
    "talcum-powder-lawsuit": "/talc_bg_dark.png",
  };

  const LEGAL_PAGE_BY_SLUG: Record<string, ReactNode> = {
    "ozempic-lawsuit": <OzempicLawsuitsLegalPage />,
    "mesothelioma-lawsuit": <MesoLawsuitsLegalPage />,
    "depo-provera-lawsuit": <DepoLawsuitsLegalPage />,
    "roundup-lawsuit": <RoundupLawsuitsLegalPage />,
    "talcum-powder-lawsuit": <TalcumLawsuitsLegalPage />,
  };
  const timelineConfig = TIMELINE_BY_SLUG[slug];
  const heroImage = HERO_IMAGE_BY_SLUG[slug] ?? "/default_hero_bg.png";

  const SUPPORT_BY_SLUG: Record<
    string,
    { title: string; description: string }
  > = {
    "ozempic-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You don’t have to fight this battle alone. If Ozempic caused serious harm to your health, Connect2Attorney can help you:",
    },

    "mesothelioma-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You don’t have to face a mesothelioma challenge. If asbestos exposure caused your illness, Connect2Attorney can help you:",
    },

    "depo-provera-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You don’t have to face this challenge alone. If Depo-Provera caused serious harm to your health, Connect2Attorney is here to help you:",
    },

    "roundup-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You don’t have to fight this battle alone. If Roundup has caused you cancer or any other health problem, Connect2Attorney can help you:",
    },

    "talcum-powder-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You are not alone in this fight. If talcum powder has caused you ovarian cancer or any other health problem, Connect2Attorney can help you:",
    },
  
  };

  const supportData = SUPPORT_BY_SLUG[slug];

  return (
    <main className="min-h-screen">
      <LawsuitsHeroCard heroTitle={heroTitle} heroImage={heroImage} />

      {LEGAL_PAGE_BY_SLUG[slug] ?? null}

      {timelineConfig && (
        <TimeLineCard
          title={timelineConfig.title}
          timelineData={timelineConfig.data}
        />
      )}

      {supportData && (
        <SupportCard
          title={supportData.title}
          description={supportData.description}
        />
      )}

      <FaqSection faqData={faqData} />
      <ContactCard />
      <Footer />
    </main>
  );
}
