import ContactCardsSection from "../components/ContactCardsSection";
import Footer from "../components/Footer";
import FaqSection from "../components/FaqSection";
import ContactCard from "../components/ContactCard";
import LandingPageContactus from "../components/LandingPageContactus";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen">
      <LandingPageContactus />
      <ContactCardsSection />
      <FaqSection />
      <ContactCard />
      <Footer />
    </main>
  );
}


