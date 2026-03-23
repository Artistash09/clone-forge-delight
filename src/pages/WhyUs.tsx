import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import ToastNotification from "@/components/ToastNotification";
import CookieBanner from "@/components/CookieBanner";
import { Link } from "react-router-dom";
import { CheckCircle, X } from "lucide-react";

const reasons = [
  { title: "97% Email Accuracy — Guaranteed", desc: "Every email is triple-verified before delivery. Credits only deduct on verified contacts. No bounces, no wasted spend." },
  { title: "50M+ Verified Direct Mobiles", desc: "Reach decision-makers directly. Our users see a 22% average cold-call connect rate — up from 5% on other platforms." },
  { title: "Weekly Data Refresh", desc: "Our database refreshes every week. Stale contacts are flagged or removed automatically so you always work with fresh data." },
  { title: "No Contracts, Cancel Anytime", desc: "Month-to-month plans with no lock-in. Start free with 50 verified lookups. Upgrade only when you're ready." },
  { title: "GDPR & SOC2 Compliant", desc: "Enterprise-grade compliance out of the box. Data processed in the EU. SOC2-ready infrastructure." },
  { title: "Credits That Don't Waste", desc: "Pay only for verified contacts. If we can't verify an email or mobile, you keep your credits. Simple as that." },
];

const vsFeatures = [
  { feature: "Triple-verified emails", us: true, them: false },
  { feature: "97%+ email accuracy", us: true, them: false },
  { feature: "50M+ direct mobiles", us: true, them: false },
  { feature: "Weekly data refresh", us: true, them: false },
  { feature: "No annual contracts", us: true, them: false },
  { feature: "Credits only on verified", us: true, them: false },
  { feature: "GDPR compliant", us: true, them: true },
  { feature: "Chrome extension", us: true, them: true },
  { feature: "CRM integrations", us: true, them: true },
  { feature: "Intent data", us: true, them: false },
];

const testimonials = [
  { quote: "Inbound Labs was the first platform where we didn't have to second-guess the data. Every email, every phone number — it just works.", author: "Josh Whitfield", role: "Founder at CMM Agency", rating: "4.9★ G2" },
  { quote: "The job change filter helps us reach qualified leads the moment they switch roles — before anyone else does. This alone is worth the entire subscription.", author: "Pete Lipton", role: "Snr. Director of Sales", rating: "5.0★ G2" },
  { quote: "We tested four enrichment tools side by side. Inbound Labs was the only one where the data didn't need cleaning after.", author: "Sönke Venjacob", role: "Founder · Platinum Agency", rating: "4.8★ G2" },
];

export default function WhyUs() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <section className="relative py-24 px-6 md:px-10 text-center glow-violet">
        <div className="max-w-[800px] mx-auto">
          <div className="section-label">WHY INBOUND LABS</div>
          <h1 className="section-title text-il-white">
            Better Data. Fair Pricing.<br />No Excuses.
          </h1>
          <p className="text-il-text-muted text-lg max-w-[600px] mx-auto mb-8">
            We built Inbound Labs because we were tired of paying enterprise prices for data that bounced.
            Here's why 15,000+ teams switched.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link to="/pricing" className="bg-il-violet text-primary-foreground px-7 py-3.5 text-sm font-semibold rounded-lg hover:bg-il-violet-light transition-all hover:-translate-y-0.5">
              Start Free Trial
            </Link>
            <Link to="/our-data" className="text-il-white text-sm px-6 py-3.5 rounded-lg border border-il-border hover:border-il-violet/40 transition-colors font-medium">
              See Our Data →
            </Link>
          </div>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="py-20 px-6 md:px-10 border-t border-il-border">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="bg-card border border-il-border rounded-xl p-7 hover:border-il-violet/30 transition-colors">
                <CheckCircle size={24} className="text-il-green mb-4" />
                <h3 className="font-display text-lg font-bold text-il-white mb-2">{r.title}</h3>
                <p className="text-sm text-il-gray-light leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6 md:px-10 border-t border-il-border">
        <div className="max-w-[700px] mx-auto">
          <div className="text-center mb-10">
            <div className="section-label">COMPARISON</div>
            <h2 className="section-title text-il-white">Inbound Labs vs The Rest</h2>
          </div>
          <div className="border border-il-border rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-il-border">
                  <th className="text-left p-4 text-il-gray-light font-medium">Feature</th>
                  <th className="text-center p-4 text-il-violet font-semibold">Inbound Labs</th>
                  <th className="text-center p-4 text-il-gray-light font-medium">Others</th>
                </tr>
              </thead>
              <tbody>
                {vsFeatures.map((f) => (
                  <tr key={f.feature} className="border-b border-il-border last:border-0">
                    <td className="p-4 text-il-white">{f.feature}</td>
                    <td className="p-4 text-center">{f.us ? <CheckCircle size={16} className="text-il-green mx-auto" /> : <X size={16} className="text-il-gray-light mx-auto" />}</td>
                    <td className="p-4 text-center">{f.them ? <CheckCircle size={16} className="text-il-green mx-auto" /> : <X size={16} className="text-il-gray-light mx-auto" />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 md:px-10 border-t border-il-border">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <div className="section-label">TESTIMONIALS</div>
            <h2 className="section-title text-il-white">Don't Take Our Word For It</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-card border border-il-border rounded-xl p-7">
                <p className="text-sm text-il-gray-light leading-relaxed mb-5 italic">"{t.quote}"</p>
                <div>
                  <div className="text-sm font-semibold text-il-white">{t.author}</div>
                  <div className="text-xs text-il-gray-light">{t.role}</div>
                  <div className="text-xs text-il-violet mt-1">{t.rating}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-8" />
      <CTABand />
      <Footer />
      <ToastNotification />
      <CookieBanner />
    </div>
  );
}
