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
import { LawsuitContent } from "../_content/types";
import { ozempicContent } from "../_content/ozempic";
import { mesotheliomaContent } from "../_content/mesothelioma";
import { depoproveraContent } from "../_content/depoprovera";
import { roundupContent } from "../_content/roundup";
import { talcumContent } from "../_content/talcum";
import OzempicLawsuitsLegalPage from "../../components/SubserviceLawsuitsLegalPages/OzempicLawsuitsLegalPage";
import MesoLawsuitsLegalPage from "../../components/SubserviceLawsuitsLegalPages/MesoLawsuitsLegalPage";
import DepoLawsuitsLegalPage from "../../components/SubserviceLawsuitsLegalPages/DepoLawsuitsLegalPage";
import RoundupLawsuitsLegalPage from "../../components/SubserviceLawsuitsLegalPages/RoundupLawsuitsLegalPage";
import TalcumLawsuitsLegalPage from "../../components/SubserviceLawsuitsLegalPages/TalcumLawsuitsLegalPage";

// const faqData = [
//   {
//     question: "How much does it cost to start a case?",
//     answer:
//       "Starting a case with us is completely free. We work on a contingency fee basis, meaning we only get paid if we win your case. There are no upfront legal fees.",
//   },
//   {
//     question: "Who will handle my case?",
//     answer:
//       "Your case will be assigned to a dedicated attorney specializing in your specific type of claim, supported by a team of paralegals and legal assistants to ensure you get full attention.",
//   },
//   {
//     question: "Is my information confidential?",
//     answer:
//       "Absolutely. All communications between you and our firm are protected by attorney-client privilege. We adhere to strict privacy policies to keep your data secure.",
//   },
//   {
//     question: "How long will my case take?",
//     answer:
//       "Every case is unique. Simple settlements may take a few months, while complex litigation can take a year or more. We will provide a timeline estimate during your consultation.",
//   },
//   {
//     question: "What kinds of cases do we accept?",
//     answer:
//       "We specialize in personal injury, worker's compensation, and medical malpractice. If you aren't sure if your case qualifies, give us a call for a free evaluation.",
//   },
// ];

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

  "talcum-lawsuit":
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
  ],

  "roundup-lawsuit": [
    {
      question: "Is Roundup linked to cancer?",
      answer:
        "Several studies and jury verdicts have linked Roundup exposure to non-Hodgkin’s lymphoma.",
    },
    {
      question: "Can I still file a Roundup claim?",
      answer:
        "Yes, even if exposure happened years ago, you may still qualify.",
    },
  ],
};

export const CONTENT_BY_SLUG: Record<string, LawsuitContent> = {
  "ozempic-lawsuit": ozempicContent,
  "mesothelioma-lawsuit": mesotheliomaContent,
  "depo-provera-lawsuit":depoproveraContent,
  "roundup-lawsuit":roundupContent,
  "talcum-lawsuit":talcumContent,
};

export default function MassTortPage() {
  const { slug } = useParams<{ slug: string }>();
  const content: LawsuitContent | undefined = CONTENT_BY_SLUG[slug];
  const heroTitle: ReactNode = HERO_TITLES[slug] ?? (
    <>
      Mass Tort
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

  if (!slug || !content) {
    return null; // or a loader, or notFound()
  }const LEGAL_PAGE_BY_SLUG: Record<string, ReactNode> = {
  "ozempic-lawsuit": <OzempicLawsuitsLegalPage />,
  "mesothelioma-lawsuit": <MesoLawsuitsLegalPage />,
  "depo-provera-lawsuit": <DepoLawsuitsLegalPage />,
  "roundup-lawsuit": <RoundupLawsuitsLegalPage />,
  "talcum-lawsuit": <TalcumLawsuitsLegalPage />,
};

  return (
    <main className="min-h-screen">
      <LawsuitsHeroCard heroTitle={heroTitle} />
{LEGAL_PAGE_BY_SLUG[slug]}
      <TimeLineCard />
      <OzempicInfo />
      <FaqSection faqData={faqData} />
      <ContactCard />
      <Footer />
    </main>
  );
}

//app\mass-tort\ozempic-lawsuit\page.tsx code (if needed)

// "use client";
// import OzempicHeroCard from "../../components/subservice_pages/LawsuitsHeroCard";
// import OzempicInfo from "../../components/subservice_pages/OzempicInfo";
// import TimeLineCard from "../../components/subservice_pages/TimeLineCard";
// import FaqSection from "../../components/FaqSection";
// import ContactCard from "../../components/ContactCard";
// import Footer from "../../components/Footer";
// import OzempicLegalPage from "../../components/subservice_pages/LawsuitsLegalPage";
// import { usePathname } from "next/navigation";

// const faqData = [
//   {
//     question: "How much does it cost to start a case?",
//     answer:
//       "Starting a case with us is completely free. We work on a contingency fee basis, meaning we only get paid if we win your case. There are no upfront legal fees.",
//   },
//   {
//     question: "Who will handle my case?",
//     answer:
//       "Your case will be assigned to a dedicated attorney specializing in your specific type of claim, supported by a team of paralegals and legal assistants to ensure you get full attention.",
//   },
//   {
//     question: "Is my information confidential?",
//     answer:
//       "Absolutely. All communications between you and our firm are protected by attorney-client privilege. We adhere to strict privacy policies to keep your data secure.",
//   },
//   {
//     question: "How long will my case take?",
//     answer:
//       "Every case is unique. Simple settlements may take a few months, while complex litigation can take a year or more. We will provide a timeline estimate during your consultation.",
//   },
//   {
//     question: "What kinds of cases do we accept?",
//     answer:
//       "We specialize in personal injury, worker's compensation, and medical malpractice. If you aren't sure if your case qualifies, give us a call for a free evaluation.",
//   },
// ];

// /* ================= PAGE TITLES ================= */
// const HERO_TITLES: Record<string, string> = {
//   "ozempic-lawsuit":
//     "Ozempic Lawsuit: Side Effects, Updates & How to File a Claim",

//   "mesothelioma-lawsuit":
//     "Mesothelioma Lawsuit: Asbestos Exposure Claims & Compensation Guide",

//   "depo-provera-lawsuit":
//     "Depo Provera Lawsuit: Depo Shot Lawsuit & Brain Tumor Claims Explained",

//   "roundup-lawsuit":
//     "Roundup Cancer Lawsuit: Weed Killer Lawsuit, Settlement & Legal Claims",

//   "talcum-lawsuit":
//     "Talcum Powder Lawsuit: Baby Powder Cancer Claims & Legal Updates",
// };

// export default function MassTortPage() {
//   const pathname = usePathname();

//   const slug = pathname.split("/").filter(Boolean).pop();

//   const heroTitle = (slug && HERO_TITLES[slug]) ?? (
//     <>
//       Mass Tort
//       <br />
//       Lawsuits
//     </>
//   );
//   return (
//     <main className="min-h-screen">
//       <OzempicHeroCard heroTitle={heroTitle} />
//       {/* <MassTortCard /> */}
//       {/* <CasesSection2 /> */}
//       <OzempicLegalPage/>
//       <TimeLineCard />
//       <OzempicInfo />
//       <FaqSection faqData={faqData} />;
//       <ContactCard />
//       <Footer />
//     </main>
//   );
// }
