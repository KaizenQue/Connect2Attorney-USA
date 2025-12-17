import LegalServicesSection from "../components/LegalServicesSection";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";
import LandingPageAboutus from '../components/LandingPageAboutus'

export default function AboutUsPage() {
  return (
    <main className="min-h-screen">
      <LandingPageAboutus />
      <LegalServicesSection />
      <TeamSection />
      <Footer />
    </main>
  );
}

