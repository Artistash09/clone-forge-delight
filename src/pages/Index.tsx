import AnnouncementBar from "@/components/AnnouncementBar";
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
import ExitIntentPopup from "@/components/ExitIntentPopup";
import CookieBanner from "@/components/CookieBanner";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div className="py-8" />
      <StatsRow />
      <div className="py-8" />
      <IntegrationsSection />
      <div className="py-8" />
      <TestimonialsSection />
      <div className="py-8" />
      <UseCasesSection />
      <div className="py-8" />
      <CaseStudiesSection />
      <div className="py-8" />
      <ChromeExtensionSection />
      <div className="py-8" />
      <CTABand />
      <Footer />
      <ToastNotification />
      <ExitIntentPopup />
    </div>
  );
}
