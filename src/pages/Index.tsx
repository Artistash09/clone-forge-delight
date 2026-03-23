import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsRow from "@/components/StatsRow";
import IntegrationsSection from "@/components/IntegrationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import UseCasesSection from "@/components/UseCasesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ChromeExtensionSection from "@/components/ChromeExtensionSection";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";
import ToastNotification from "@/components/ToastNotification";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsRow />
      <IntegrationsSection />
      <TestimonialsSection />
      <UseCasesSection />
      <CaseStudiesSection />
      <ChromeExtensionSection />
      <CTABand />
      <Footer />
      <ToastNotification />
    </div>
  );
}
