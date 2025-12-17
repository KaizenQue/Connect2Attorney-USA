import MassTortHero from "../components/MassTortHero";
import MassTortCard from "../components/MassTortCard";
import CasesSection2 from "../components/CasesSection2";
import MassTortInfo from "../components/MassTortInfo";
import LegalBanner from "../components/LegalBanner";
import FaqSection from "../components/FaqSection";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";
import MassTortLegalPage from "../components/MassTortLegalPage";

export default function MassTortPage() {
  return (
    <main className="min-h-screen">
      <MassTortHero />
      <MassTortCard />
      <CasesSection2 />
      <MassTortLegalPage />
      <MassTortInfo />
      <FaqSection />
      <ContactCard />
      <Footer />
    </main>
  );
}

