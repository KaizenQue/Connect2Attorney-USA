"use client";
import LawsuitsHeroCard from "../../components/subservice_pages/LawsuitsHeroCard";
import OzempicInfo from "../../components/subservice_pages/SupportCard";
import TimeLineCard from "../../components/subservice_pages/TimeLineCard";
import FaqSection from "../../components/FaqSection";
import ContactCard from "../../components/ContactCard";
import Footer from "../../components/Footer";
// import LawsuitsLegalPage from "../../components/subservice_pages/LawsuitsLegalPage";
import { useParams } from "next/navigation";
import type { ReactNode } from "react";
import SexualAbuseLegalPage from "../../components/SubserviceLawsuitsLegalPages/SexualAbuseLawsuitsLegalPage";
import MvaLawsuitsLegalPage from "../../components/SubserviceLawsuitsLegalPages/MvaLawsuitsLegalPage";
import { sexualAbuseTimelineData } from "@/app/components/timelines/sexualabuselawsuitTimelineData";
import SlipnFallLawsuitsLegalPage from "../../components/SubserviceLawsuitsLegalPages/SlipnFallLawsuitsLegalPage";
import TruckAccidentLawsuitsLegalPage from "../../components/SubserviceLawsuitsLegalPages/TruckAccidentLawsuitsLegalPage"
import { TimelineData } from "@/app/components/timelineTypes";
import SupportCard from "../../components/subservice_pages/SupportCard";

/* ================= PAGE TITLES ================= */
const HERO_TITLES: Record<string, string> = {
  "sexual-abuse-lawsuit":
    "Sexual Abuse Lawsuit: Survivor Rights, Legal Options & Compensation",

  "motor-vehicle-accident-lawsuit":
    "Motor Vehicle Accident Lawsuit: Injury Claims, Legal Rights & Compensation",

  "slip-and-fall-injury-lawsuit":
    "Slip and Fall Injury Lawsuit: Liability, Legal Rights & Compensation",

  "18-wheeler-lawsuit":
    "18-Wheeler Accident Lawsuit Settlements and Compensation",
};
/* ================= FAQ DATA ================= */
const FAQ_BY_SLUG: Record<string, { question: string; answer: string }[]> = {
  "sexual-abuse-lawsuit": [
    {
      question: "What evidence do you need for sexual abuse lawsuits?",
      answer:
        "Police reports, medical records, witness statements, and any written or digital communications related to the abuse.",
    },
    {
      question: "What is the average settlement for sexual abuse lawsuits?",
      answer:
        "Settlements vary widely depending on severity, location, and impact, but they often range from tens of thousands to millions of dollars.",
    },
    {
      question: "How long do I have to file a claim?",
      answer:
        "Time limits differ by state, but many allow filing years after the abuse, especially in cases of delayed discovery.",
    },
    {
      question: "Can institutions be held responsible?",
      answer:
        "Yes, schools, workplaces, religious organizations, or care facilities may be held liable if they failed to protect victims or neglected their duty of care.",
    },
    {
      question: "Do I need an attorney to file a claim?",
      answer:
        "While not legally required, working with an experienced sexual abuse attorney can help ensure proper documentation, maximize compensation, and navigate complex legal procedures.",
    },
  ],
  "motor-vehicle-accident-lawsuit": [
    {
      question: "What is the maximum compensation for motor vehicle accidents?",
      answer:
        "Compensation varies by case and state law. Depending on the severity of injuries, property damage, and available insurance coverage, settlements or verdicts may range from tens of thousands to several hundred thousand dollars or more.",
    },
    {
      question: "Who can file a motor vehicle accident claim?",
      answer:
        "Drivers, passengers, pedestrians, cyclists, property owners, and surviving family members in wrongful death cases may be eligible to file a motor vehicle accident claim.",
    },
    {
      question: "How long do I have to file a claim?",
      answer:
        "The statute of limitations differs by state but typically ranges from one to three years from the date of the accident. Some exceptions may apply in cases involving minors or government entities.",
    },
    {
      question: "What types of compensation can I seek?",
      answer:
        "You may be entitled to compensation for medical expenses, vehicle or property damage, lost wages, pain and suffering, future medical care, and permanent or long-term disability.",
    },
    {
      question:
        "Is hiring an attorney necessary to file a motor vehicle accident claim?",
      answer:
        "While you can file a claim on your own, working with an experienced motor vehicle accident attorney can help protect your rights, negotiate with insurance companies, and maximize the compensation you receive.",
    },
    {
      question: "What evidence is needed for a motor vehicle accident claim?",
      answer:
        "Common evidence includes police reports, medical records, witness statements, photographs or videos of the accident scene, vehicle damage documentation, and insurance policy information.",
    },
  ],
   "slip-and-fall-injury-lawsuit": [
    {
      question: "Do I need an attorney for a slip and fall case?",
      answer:
        "While it is possible to pursue a claim on your own, working with an experienced slip and fall attorney can help establish liability, deal with insurance companies, and pursue fair compensation for your injuries.",
    },
    {
      question: "What evidence is needed to support a slip and fall claim?",
      answer:
        "Strong evidence may include photographs or videos of the hazardous condition, witness statements, incident reports, and medical records documenting your injuries.",
    },
    {
      question: "Can I still file a claim if I was partly at fault?",
      answer:
        "Yes. Many states follow comparative negligence rules, which allow you to recover compensation even if you were partially responsible, though your recovery may be reduced by your percentage of fault.",
    },
    {
      question: "How long does a slip and fall lawsuit take?",
      answer:
        "Most slip and fall cases are resolved within several months to a year, depending on the severity of the injuries, the strength of the evidence, and whether the case settles or proceeds to litigation.",
    },
    {
      question: "Will my slip and fall case go to court?",
      answer:
        "Many slip and fall claims are resolved through settlement negotiations. However, if a fair settlement cannot be reached, the case may proceed to court.",
    },
  ],
  "18-wheeler-lawsuit": [
    {
      question: "What should I do immediately after an 18-wheeler accident?",
      answer:
        "Your safety comes first. Seek medical attention immediately, then document the accident scene if possible, gather contact information from witnesses, and report the crash to law enforcement.",
    },
    {
      question: "Who may be held accountable for an 18-wheeler accident?",
      answer:
        "Depending on the circumstances, liability may extend to the truck driver, the trucking company, vehicle or parts manufacturers, maintenance providers, cargo loaders, or other negligent parties.",
    },
    {
      question: "How long do I have to file a lawsuit after an 18-wheeler accident?",
      answer:
        "The statute of limitations varies by state and typically ranges from one to three years from the date of the accident. Certain exceptions may apply, so acting quickly is important.",
    },
    {
      question: "Can I claim compensation if I was partially at fault?",
      answer:
        "Yes. Many states follow comparative negligence laws, allowing injured parties to recover compensation even if they share some responsibility, though the total recovery may be reduced.",
    },
    {
      question: "What types of damages can I recover after an 18-wheeler accident?",
      answer:
        "You may be entitled to compensation for medical expenses, lost wages, pain and suffering, property damage, future medical care, and long-term or permanent disabilities.",
    },
  ],
};

// export const CONTENT_BY_SLUG: Record<string, LawsuitContent> = {
//   "sexual-abuse-lawsuit": sexualabuselawsuitContent,
//   "motor-vehicle-accident-lawsuit": mvaContent,
//   "slip-and-fall-injury-lawsuit": slipnfallContent,
//   "18-wheeler-lawsuit": trucklawsuitContent,
// };

export default function MassTortPage() {
  const { slug } = useParams<{ slug: string }>();
  //   const content: LawsuitContent | undefined = CONTENT_BY_SLUG[slug];
  const heroTitle: ReactNode = HERO_TITLES[slug] ?? (
    <>
      Personal Injury
      <br />
      Lawsuits
    </>
  );
  const TIMELINE_BY_SLUG: Record<
    string,
    { title: string; data: TimelineData }
  > = {
    "sexual-abuse-lawsuit": {
      title: "Sexual Abuse Timeline",
      data: sexualAbuseTimelineData,
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
    "sexual-abuse-lawsuit": <SexualAbuseLegalPage />,
    "motor-vehicle-accident-lawsuit": <MvaLawsuitsLegalPage />,
    "slip-and-fall-injury-lawsuit": <SlipnFallLawsuitsLegalPage />,
    "18-wheeler-lawsuit": <TruckAccidentLawsuitsLegalPage />,
  };
    const SUPPORT_BY_SLUG: Record<
    string,
    { title: string; description: string }
  > = {
    "sexual-abuse-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
      "You don’t have to fight this battle alone. If sexual abuse in an institution or workplace has harmed you physically or mentally, Connect2Attorney can help you: ",
    },

    "motor-vehicle-accident-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
      "You don’t have to fight this battle alone. If a motor vehicle accident has caused you injury or property damage, Connect2Attorney can help you: ",
    },
      "slip-and-fall-injury-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
      "You don’t have to fight this battle alone. If slip and fall has caused you injury, Connect2Attorney can help you: ",
    },
      "18-wheeler-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
      "You don't have to handle this issue alone. If an 18-wheeler accident has caused you personal injury or property damage, Connect2Attorney can help you: ",
    },
  };
  const HERO_IMAGE_BY_SLUG: Record<string, string> = {
    "sexual-abuse-lawsuit": "/sexual-abuse-lawsuit.png",
    "motor-vehicle-accident-lawsuit": "/motor-vehicle-accident.png",
    "slip-and-fall-injury-lawsuit": "/slip-and-fall-injury-lawsuit.png",
    "18-wheeler-lawsuit": "/18-wheeler-lawsuit.png",
  };
  const timelineConfig = TIMELINE_BY_SLUG[slug];
  const supportData = SUPPORT_BY_SLUG[slug];
  const heroImage = HERO_IMAGE_BY_SLUG[slug] ?? "/default_hero_bg.png";

  return (
    <main className="min-h-screen">
<LawsuitsHeroCard
  heroTitle={heroTitle}
  heroImage={heroImage}
/>       {LEGAL_PAGE_BY_SLUG[slug]}
      <div id="timeline-section">
        {timelineConfig && (
          <div id="timeline-section">
            <TimeLineCard
              title={timelineConfig.title}
              timelineData={timelineConfig.data}
            />
          </div>
        )}
      </div>
{supportData && (
  <SupportCard
    title={supportData.title}
    description={supportData.description}
  />
)}          <FaqSection faqData={faqData} />
      <ContactCard />
      <Footer />
    </main>
  );
}
