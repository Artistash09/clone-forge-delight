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
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <div className="py-8" />
      <StatsRow />

      {/* Featured Testimonial */}
      <div className="bg-il-dark border-b border-il-border py-14 px-10">
        <div className="max-w-[820px] mx-auto">
          <div className="font-serif text-5xl text-il-border leading-none mb-4">"</div>
          <p className="text-[19px] text-[#e0e0e0] leading-[1.8] mb-6 italic">
            Inbound Labs was the first platform where we didn't have to second-guess the data. Every email, every phone number — it just works. It's now the backbone of our entire outbound operation.
          </p>
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#e63946] to-[#a855f7] flex items-center justify-center text-lg">👤</div>
            <div>
              <div className="text-[15px] font-bold text-il-white">Josh Whitfield</div>
              <div className="text-[13px] text-il-gray-light">Founder at CMM Agency · 4.9★ G2 review</div>
            </div>
          </div>
        </div>
      </div>

      {/* G2 Trust Band */}
      <div className="bg-il-dark border-b border-il-border py-6 px-6">
        <div className="max-w-[1100px] mx-auto flex flex-wrap items-center justify-between gap-6">
          <div>
            <div className="text-[13px] font-bold text-il-white mb-1.5">Rated #1 for Data Accuracy</div>
            <div className="flex items-center gap-1">
              <span className="text-amber-400">★★★★★</span>
              <span className="text-il-white font-bold ml-1">4.8</span>
              <span className="text-il-gray-light text-sm ml-1">/ 5 · 1,200+ reviews on G2</span>
            </div>
            <div className="text-[12px] text-il-gray-light mt-1">Reviews verified by G2 · Updated weekly</div>
          </div>
          <div className="flex gap-3 flex-wrap">
            {[
              { icon: "🏆", label: "G2 Leader", value: "Winter 2025" },
              { icon: "⚡", label: "Easiest to Use", value: "2025" },
              { icon: "📈", label: "High Performer", value: "Mid-Market" },
              { icon: "🎯", label: "Best Results", value: "SMB 2025" },
            ].map((b) => (
              <div key={b.label} className="bg-il-violet/5 border border-il-border rounded-lg px-3.5 py-2.5 flex items-center gap-2.5 hover:border-il-violet/25 transition-colors">
                <span className="text-lg">{b.icon}</span>
                <div>
                  <div className="text-[11px] font-semibold text-il-gray-light">{b.label}</div>
                  <div className="text-[11px] text-il-text-muted">{b.value}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-right">
            <div className="text-[13px] text-il-gray-light mb-2">Trusted by teams at</div>
            <div className="flex gap-2 flex-wrap justify-end">
              {["SALESFORCE", "HUBSPOT", "SNYK", "STRIPE"].map((co) => (
                <span key={co} className="text-[12px] font-bold text-il-gray-light/50 px-2.5 py-1 border border-il-border rounded-md">{co}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

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
      <CookieBanner />
    </div>
  );
}
