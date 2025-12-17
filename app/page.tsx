import HeroSection from "./components/HeroSection";
import CasesSection from "./components/CasesSection";
import HowItWorks from "./components/HowItWorks";
import FaqSection from "./components/FaqSection";
import ContactSection from "./components/ContactSection";
import AboutUs from "./components/AboutUs";
import BlogsEducationCard from "./components/BlogsEducationCard";
import BlogsEducationCard2 from "./components/BlogsEducationCard2";
import ContactCard from "./components/ContactCard";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CasesSection />
      <HowItWorks />
      <AboutUs />
      <BlogsEducationCard2 />
       
      <ContactSection />
      <FaqSection />


     
      {/* <BlogsEducationCard /> */}
   
      <ContactCard />
      <Footer />
    </main>
  );
}
