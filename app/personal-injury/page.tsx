import PersonalInjuryHero from "../components/PersonalInjuryHero";
import PersonalInjuryCard from "../components/PersonalInjuryCard";
import LawsuitSectionPersonalInjury from "../components/LawsuitSectionPersonalInjury";
import PersonalInjuryLegalPage from "../components/PersonalInjuryLegalPage";
import MassTortInfo from "../components/MassTortInfo";
import FaqSection from "../components/FaqSection";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";
const faqData = [
  {
    question: "How do I know if I qualify for a personal injury lawsuit?",
    answer:
      "You may qualify if you were injured because someone else acted carelessly, violated safety rules, or failed to protect you from harm.",
  },
  {
    question: "What if my injuries are minor?",
    answer:
      "You may still have a case. Even minor injuries can result in medical bills, lost income, and ongoing pain or discomfort.",
  },
  {
    question: "Do I need to pay upfront?",
    answer:
      "No. Personal injury attorneys work on a contingency fee basis, which means you only pay if your case is won or settled.",
  },
  {
    question: "How long does a personal injury case take?",
    answer:
      "The timeline varies. Some cases settle within a few months, while more complex cases may take longer to resolve.",
  },
  {
    question: "How is compensation calculated?",
    answer:
      "Compensation is based on factors such as the severity of your injuries, medical expenses, lost wages, and the long-term impact on your life.",
  },
];

export const metadata = {
  title: "Personal Injury",
  alternates: {
    canonical: "https://connect2attorney.com/personal-injury",
  },
};
export default function PersonalInjuryPage() {
  return (
    <main className="min-h-screen">
      <PersonalInjuryHero />
      <PersonalInjuryCard />
      <LawsuitSectionPersonalInjury />
      <PersonalInjuryLegalPage />
      <MassTortInfo />
      <FaqSection faqData={faqData} />;
      <ContactCard />
      <Footer />
    </main>
  );
}
