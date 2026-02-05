import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import WhyUsSection from "@/components/WhyUsSection";
import ProblemAgitationSection from "@/components/ProblemAgitationSection";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <SocialProofSection />
      <WhyUsSection />
      <ProblemAgitationSection />
      <ServicesSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
