"use client"
import ContactCardsSection from "../components/ContactCardsSection";
import Footer from "../components/Footer";
import FaqSection from "../components/FaqSection";
import ContactCard from "../components/ContactCard";
import LandingPageContactus from "../components/LandingPageContactus";
import { useState } from "react";
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
  title: "Contact Us",
  alternates: {
    canonical: "https://connect2attorney.com/contact-us",
  },
};

export default function ContactUsPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="">
      <LandingPageContactus setOpen={setOpen} />
      <ContactCardsSection />
      <FaqSection faqData={faqData} />;
      <ContactCard />
      {/* <Footer /> */}
    </main>
  );
}


