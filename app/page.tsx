import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import VisionMissionSection from "./components/VisionMissionSection";
import ServicesSection from "./components/ServicesSection";
import ImpactSection from "./components/ImpactSection";
import PartnersSection from "./components/PartnersSection";
import LeadershipSection from "./components/LeadershipSection";
import CTABanner from "./components/CTABanner";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <VisionMissionSection />
        <ServicesSection />
        <ImpactSection />
        <PartnersSection />
        <LeadershipSection />
        <CTABanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
