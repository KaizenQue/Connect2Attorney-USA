import OzempicLawsuitForm from "../components/OzempicLawsuitForm";
import OzempicLawsuitPage from "../components/OzempicLawsuitPage";
import OzempicTimeLine from "../components/OzempicTimeLine";
import FaqSection from "../components/FaqSection";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";
import LegalCaseCard from "../components/LegalCaseCard";

export default function DpPage() {
  return (
    <main className="min-h-screen">
      <OzempicLawsuitForm />
      <OzempicLawsuitPage />
      <OzempicTimeLine />
      <LegalCaseCard />
      <FaqSection />
      <ContactCard />
      <Footer />
    </main>
  );
}
