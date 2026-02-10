"use client";
import LawsuitsHeroCard from "../../components/subservice_pages/LawsuitsHeroCard";
import TimeLineCard from "../../components/subservice_pages/TimeLineCard";
import FaqSection from "../../components/FaqSection";
import ContactCard from "../../components/ContactCard";
import Footer from "../../components/Footer";
import { useParams } from "next/navigation";
import type { ReactNode } from "react";

import SexualAbuseLegalPage from "../../components/SubserviceLawsuitsLegalPages/SexualAbuseLawsuitsLegalPage";
import MvaLawsuitsLegalPage from "../../components/SubserviceLawsuitsLegalPages/MvaLawsuitsLegalPage";
import SlipnFallLawsuitsLegalPage from "../../components/SubserviceLawsuitsLegalPages/SlipnFallLawsuitsLegalPage";
import TruckAccidentLawsuitsLegalPage from "../../components/SubserviceLawsuitsLegalPages/TruckAccidentLawsuitsLegalPage";
import RideshareSexualLawsuitsLegalPage from "../../components/SubserviceLawsuitsLegalPages/RideshareSexualLawsuitsLegalPage";

import { TimelineData } from "@/app/components/timelineTypes";
import { sexualAbuseTimelineData } from "@/app/components/timelines/sexualabuselawsuitTimelineData";
import { rideshareTimelineData } from "@/app/components/timelines/rideshareTimelineData";

import SupportCard from "../../components/subservice_pages/SupportCard";

/* ================= PAGE TITLES ================= */
const HERO_CONFIG: Record<string, { title: React.ReactNode; bg: string }> = {
  "sexual-abuse-lawsuit": {
    title:
      "Sexual Abuse Lawsuit: Survivor Rights, Legal Options & Compensation",
    bg: "/sexualabuseimg.png",
  },

  "motor-vehicle-accident": {
    title:
      "Motor Vehicle Accident Lawsuit: Injury Claims, Legal Rights & Compensation",
    bg: "/motorbgimg.png",
  },

  "slip-and-fall": {
    title:
      "Slip and Fall Injury Lawsuit: Liability, Legal Rights & Compensation",
    bg: "/slipnfallimg.png",
  },

  "18-wheeler-accident": {
    title: "18-Wheeler Accident Lawsuit Settlements and Compensation",
    bg: "/truckbgimg.png",
  },
  "rideshare-sexual-assault-lawsuit": {
    title:  "Rideshare Sexual Assault Lawsuit: Legal Claims & Compensation Help ",
    bg: "/rideshare_bg_dark.png"
  },
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
  "motor-vehicle-accident": [
    {
      question: "Who can file a motor vehicle accident claim?",
      answer:
        "Drivers, passengers, pedestrians, cyclists, property owners, and surviving family members in wrongful death cases may be eligible to file a motor vehicle accident claim.",
    },
    {
      question: "How long do I have to file a motor vehicle accident claim?",
      answer:
        "The statute of limitations varies by state, but in most cases it ranges from one to three years from the date of the accident. Certain exceptions may apply, so it is important to act promptly.",
    },
    {
      question:
        "What types of compensation can I seek after a motor vehicle accident?",
      answer:
        "You may be able to recover compensation for medical expenses, vehicle or property damage, lost income, pain and suffering, future medical care, and permanent or long-term disability.",
    },
    {
      question:
        "Is hiring an attorney necessary to file a motor vehicle accident claim?",
      answer:
        "You are not required to hire an attorney, but working with an experienced motor vehicle accident lawyer can help protect your rights, deal with insurance companies, and maximize your potential compensation.",
    },
    {
      question:
        "What evidence is needed to support a motor vehicle accident claim?",
      answer:
        "Common evidence includes police reports, medical records, witness statements, photographs or videos of the accident scene, vehicle damage documentation, and insurance information.",
    },
  ],
  "slip-and-fall": [
    {
      question: "Do I need an attorney for a slip and fall case?",
      answer:
        "You are not legally required to hire an attorney, but working with an experienced slip and fall lawyer can help prove fault, handle insurance companies, and pursue fair compensation for your injuries.",
    },
    {
      question: "What evidence is needed to support a slip and fall claim?",
      answer:
        "Helpful evidence may include photographs or videos of the hazardous condition, witness statements, incident or accident reports, and medical records documenting your injuries.",
    },
    {
      question: "Can I still file a claim if I was partly at fault?",
      answer:
        "Yes. Many states follow comparative negligence laws, which allow you to recover compensation even if you were partially responsible, although your total recovery may be reduced based on your share of fault.",
    },
    {
      question: "How long does a slip and fall lawsuit take?",
      answer:
        "Most slip and fall cases are resolved within several months to a year. The timeline can vary depending on the severity of injuries, the strength of the evidence, and whether the case settles or goes to court.",
    },
    {
      question: "Will my slip and fall case go to court?",
      answer:
        "Many slip and fall claims are resolved through settlement negotiations. However, if a fair settlement cannot be reached, the case may proceed to litigation.",
    },
  ],
  "18-wheeler-accident": [
    {
      question: "What should I do immediately after an 18-wheeler accident?",
      answer:
        "Your health and safety come first. Seek medical attention immediately, then document the accident scene if possible, gather witness information, and report the crash to law enforcement authorities.",
    },
    {
      question: "Who may be held accountable for an 18-wheeler accident?",
      answer:
        "Liability may extend beyond the truck driver and can include the trucking company, vehicle or parts manufacturers, maintenance providers, cargo loaders, or other parties whose negligence contributed to the accident.",
    },
    {
      question: "How long do I have to file a lawsuit?",
      answer:
        "The statute of limitations varies by state but typically ranges from one to three years from the date of the accident. Some exceptions may apply, so it is important to act promptly.",
    },
    {
      question: "Can I claim compensation if I was partially at fault?",
      answer:
        "Yes. Many states follow comparative negligence laws that allow injured parties to recover compensation even if they share some responsibility, though the total amount may be reduced based on their percentage of fault.",
    },
    {
      question: "What types of damages can I recover?",
      answer:
        "You may be able to recover compensation for medical expenses, lost wages, pain and suffering, property damage, future medical care, and long-term or permanent disabilities.",
    },
  ],
    "rideshare-sexual-assault-lawsuit": [
    {
      question: "Who can get compensation from a rideshare lawsuit?",
      answer:
        "Anyone who experienced sexual assault or harassment during a rideshare trip may be eligible to pursue compensation. This can include passengers and, in some cases, minors represented by a parent or legal guardian.",
    },
    {
      question: "Can I still join a rideshare sexual assault lawsuit?",
      answer:
        "You may qualify if the litigation is still active and you meet the eligibility requirements. An attorney can review your situation and determine whether you can file an individual claim or join ongoing multidistrict litigation (MDL).",
    },
    {
      question: "How long do I have to file a rideshare sexual assault claim?",
      answer:
        "The time limit to file a claim varies by state and depends on the statute of limitations. Filing as soon as possible helps preserve evidence and ensures your claim is considered within the legal deadline.",
    },
    {
      question: "Can minors file a rideshare sexual assault lawsuit?",
      answer:
        "Yes. A parent or legal guardian can file a claim on behalf of a minor to seek compensation and accountability.",
    },
    {
      question: "Will the rideshare company automatically pay compensation?",
      answer:
        "No. Compensation is not automatic. Claims typically proceed through legal review, negotiations, or court proceedings before any settlement or award is determined.",
    },
  ],
};

export default function MassTortPage({ slug }: { slug: string }) {
    if (!slug) return null;
  // const { slug } = useParams<{ slug: string }>();
  const heroConfig = HERO_CONFIG[slug];

  const TIMELINE_BY_SLUG: Record<
    string,
    { title: string; data: TimelineData }
  > = {
    "sexual-abuse-lawsuit": {
      title: "Sexual Abuse Timeline",
      data: sexualAbuseTimelineData,
    },
    "rideshare-sexual-assault-lawsuit":{
      title: "RideShare Sexual Assault Timeline",
      data: rideshareTimelineData,
    }
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
    "motor-vehicle-accident": <MvaLawsuitsLegalPage />,
    "slip-and-fall": <SlipnFallLawsuitsLegalPage />,
    "18-wheeler-accident": <TruckAccidentLawsuitsLegalPage />,
    "rideshare-sexual-assault-lawsuit": <RideshareSexualLawsuitsLegalPage />,
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

    "motor-vehicle-accident": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You don’t have to fight this battle alone. If a motor vehicle accident has caused you injury or property damage, Connect2Attorney can help you: ",
    },
    "slip-and-fall": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You don’t have to fight this battle alone. If slip and fall has caused you injury, Connect2Attorney can help you: ",
    },
    "18-wheeler-accident": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You don't have to handle this issue alone. If an 18-wheeler accident has caused you personal injury or property damage, Connect2Attorney can help you: ",
    },
       "rideshare-sexual-assault-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You are not alone in this fight. If talcum powder has caused you ovarian cancer or any other health problem, Connect2Attorney can help you:",
    },
  };
  const HERO_IMAGE_BY_SLUG: Record<string, string> = {
    "sexual-abuse-lawsuit": "/sexualabuseimg.png",
    "motor-vehicle-accident": "/motorbgimg.png",
    "slip-and-fall": "/slipnfallimg.png",
    "18-wheeler-accident": "/truckbgimg.png",
    "rideshare-sexual-assault-lawsuit": "/rideshare_bg_dark.png",
  };

  const timelineConfig = TIMELINE_BY_SLUG[slug];
  const supportData = SUPPORT_BY_SLUG[slug];
  const heroImage = HERO_IMAGE_BY_SLUG[slug] ?? "/default_hero_bg.png";
  const heroTitle = heroConfig?.title ?? "Lawsuit Information";
  return (
    <main className="min-h-screen">
      <LawsuitsHeroCard heroTitle={heroTitle} heroImage={heroImage} />{" "}
      {LEGAL_PAGE_BY_SLUG[slug]}
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
      )}{" "}
      <FaqSection faqData={faqData} />
      <ContactCard />
      <Footer />
    </main>
  );
}
