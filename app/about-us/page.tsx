import LegalServicesSection from "../components/LegalServicesSection";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";
import LandingPageAboutus from '../components/LandingPageAboutus'
import ContactCard from "../components/ContactCard";

export const metadata = {
  title: "About Us",
  alternates: {
    canonical: "https://connect2attorney.com/about-us",
  },
};


export default function AboutUsPage() {
  return (
    <main className="min-h-screen">
      <LandingPageAboutus />
      <LegalServicesSection />
      <TeamSection />
      <ContactCard />
      <Footer />
    </main>
  );
}

