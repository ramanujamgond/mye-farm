import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrustBar from "./components/TrustBar";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";
import ImpactSection from "./components/ImpactSection";
import HowItWorksSection from "./components/HowItWorksSection";
import SustainabilitySection from "./components/SustainabilitySection";
import TestimonialSection from "./components/TestimonialSection";
import FarmerSection from "./components/FarmerSection";
import CTABanner from "./components/CTABanner";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <TrustBar />
        <AboutSection />
        <ProductsSection />
        <ImpactSection />
        <HowItWorksSection />
        <SustainabilitySection />
        <TestimonialSection />
        <FarmerSection />
        <CTABanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
