import MassTortHero from "../components/MassTortHero";
import MassTortCard from "../components/MassTortCard";
import CasesSection2 from "../components/CasesSection2";
import MassTortInfo from "../components/MassTortInfo";
// import LegalBanner from "../components/LegalBanner";
import FaqSection from "../components/FaqSection";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";
import MassTortLegalPage from "../components/MassTortLegalPage";
const faqData = [
  {
    question: "How much does it cost to start a case?",
    answer:
      "Starting a case with us is completely free. We work on a contingency fee basis, meaning we only get paid if we win your case. There are no upfront legal fees.",
  },
  {
    question: "Who will handle my case?",
    answer:
      "Your case will be assigned to a dedicated attorney specializing in your specific type of claim, supported by a team of paralegals and legal assistants to ensure you get full attention.",
  },
  {
    question: "Is my information confidential?",
    answer:
      "Absolutely. All communications between you and our firm are protected by attorney-client privilege. We adhere to strict privacy policies to keep your data secure.",
  },
  {
    question: "How long will my case take?",
    answer:
      "Every case is unique. Simple settlements may take a few months, while complex litigation can take a year or more. We will provide a timeline estimate during your consultation.",
  },
  {
    question: "What kinds of cases do we accept?",
    answer:
      "We specialize in personal injury, worker's compensation, and medical malpractice. If you aren't sure if your case qualifies, give us a call for a free evaluation.",
  },
];

export const metadata = {
  title: "Mass Tort",
  alternates: {
    canonical: "https://connect2attorney.com/mass-tort",
  },
};


export default function MassTortPage() {
  return (
    <main className="min-h-screen">
      <MassTortHero />
      <MassTortCard />
      <CasesSection2 />
      <MassTortLegalPage />
      <MassTortInfo />
      <FaqSection faqData={faqData} />;
      <ContactCard />
      <Footer />
    </main>
  );
}
