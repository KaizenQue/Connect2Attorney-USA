import PersonalInjuryHero from "../components/PersonalInjuryHero";
import ClassActionCard from "../components/ClassActionCard";
import LawsuitSection from "../components/LawsuitSection";
import ClassActionLegalPage from "../components/ClassActionLegalPage";
import MassTortInfo from "../components/MassTortInfo";
import FaqSection from "../components/FaqSection";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";

export default function PersonalInjuryPage() {
  return (
    <main className="min-h-screen">
      <PersonalInjuryHero />
      <ClassActionCard />
      <LawsuitSection />
      <ClassActionLegalPage />
      <MassTortInfo />
      <FaqSection />
      <ContactCard />
      <Footer />
    </main>
  );
}
