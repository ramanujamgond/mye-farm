import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import VisionMissionSection from "./components/VisionMissionSection";
import TechApproachSection from "./components/TechApproachSection";
import EcosystemSection from "./components/EcosystemSection";
import ImpactSection from "./components/ImpactSection";
import AgritechImpactSection from "./components/AgritechImpactSection";
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
        <TechApproachSection />
        <EcosystemSection />
        <ImpactSection />
        <AgritechImpactSection />
        <CTABanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
