import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import ToastNotification from "@/components/ToastNotification";
import CookieBanner from "@/components/CookieBanner";
import { Link } from "react-router-dom";
import { CheckCircle, RefreshCw, Shield, Database, Globe, Zap } from "lucide-react";

const verificationSteps = [
  { step: "01", title: "Collect", desc: "We aggregate data from thousands of public sources, partnerships, and proprietary crawlers across the web." },
  { step: "02", title: "Verify", desc: "Every email is triple-verified through SMTP, domain, and mailbox checks. Mobiles are validated against carrier databases." },
  { step: "03", title: "Enrich", desc: "We layer on firmographics, technographics, intent signals, and 50+ attributes so your data is always complete." },
  { step: "04", title: "Refresh", desc: "Our data refreshes weekly. Stale contacts are flagged or removed automatically to keep accuracy above 97%." },
];

const dataPoints = [
  { icon: Database, value: "280M+", label: "Verified B2B Contacts", desc: "The largest independently verified contact database for sales teams." },
  { icon: Globe, value: "200+", label: "Countries Covered", desc: "Global coverage with deep data in North America, Europe, and APAC." },
  { icon: RefreshCw, value: "Weekly", label: "Data Refresh Cycle", desc: "Every record is re-verified weekly. Stale data is automatically flagged." },
  { icon: Shield, value: "97%", label: "Email Accuracy Rate", desc: "Industry-leading accuracy. Triple-verified emails that don't bounce." },
  { icon: Zap, value: "50M+", label: "Direct Mobile Numbers", desc: "Verified direct dials with a 22% average cold-call connect rate." },
  { icon: CheckCircle, value: "GDPR", label: "Fully Compliant", desc: "SOC2-ready infrastructure. GDPR compliant. Data processed in the EU." },
];

const comparisons = [
  { provider: "Inbound Labs", accuracy: "97%", mobiles: "50M+", refresh: "Weekly", gdpr: true, highlight: true },
  { provider: "ZoomInfo", accuracy: "~85%", mobiles: "Limited", refresh: "Monthly", gdpr: true, highlight: false },
  { provider: "Apollo", accuracy: "~80%", mobiles: "Limited", refresh: "Quarterly", gdpr: false, highlight: false },
  { provider: "Cognism", accuracy: "~90%", mobiles: "35M", refresh: "Bi-weekly", gdpr: true, highlight: false },
];

export default function OurData() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <section className="relative py-24 px-6 md:px-10 text-center glow-violet">
        <div className="max-w-[800px] mx-auto">
          <div className="section-label">OUR DATA</div>
          <h1 className="section-title text-il-white">
            Data You Can Actually Trust
          </h1>
          <p className="text-il-text-muted text-lg max-w-[600px] mx-auto mb-8">
            We tested four enrichment tools side by side. Inbound Labs was the only one where the data didn't need cleaning after.
            Everything came back accurate and ready to use.
          </p>
          <Link to="/pricing" className="bg-il-violet text-primary-foreground px-7 py-3.5 text-sm font-semibold rounded-lg hover:bg-il-violet-light transition-all hover:-translate-y-0.5 inline-block">
            Try It Free
          </Link>
        </div>
      </section>

      {/* Data Points Grid */}
      <section className="py-20 px-6 md:px-10 border-t border-il-border">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataPoints.map((d) => (
            <div key={d.label} className="bg-card border border-il-border rounded-xl p-7 hover:border-il-violet/30 transition-colors">
              <d.icon size={24} className="text-il-violet mb-3" />
              <div className="font-display text-3xl font-extrabold text-il-white mb-1">{d.value}</div>
              <div className="text-sm font-semibold text-il-white mb-1">{d.label}</div>
              <p className="text-sm text-il-gray-light leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Verification Pipeline */}
      <section className="py-20 px-6 md:px-10 border-t border-il-border">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-14">
            <div className="section-label">HOW IT WORKS</div>
            <h2 className="section-title text-il-white">Our 4-Step Verification Pipeline</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {verificationSteps.map((s) => (
              <div key={s.step} className="flex gap-5">
                <div className="font-display text-3xl font-extrabold text-il-violet/30">{s.step}</div>
                <div>
                  <h3 className="font-display text-lg font-bold text-il-white mb-1.5">{s.title}</h3>
                  <p className="text-sm text-il-gray-light leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6 md:px-10 border-t border-il-border">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-10">
            <div className="section-label">COMPARISON</div>
            <h2 className="section-title text-il-white">How We Stack Up</h2>
          </div>
          <div className="border border-il-border rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-il-border">
                  <th className="text-left p-4 text-il-gray-light font-medium">Provider</th>
                  <th className="text-left p-4 text-il-gray-light font-medium">Accuracy</th>
                  <th className="text-left p-4 text-il-gray-light font-medium">Mobiles</th>
                  <th className="text-left p-4 text-il-gray-light font-medium">Refresh</th>
                  <th className="text-left p-4 text-il-gray-light font-medium">GDPR</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((c) => (
                  <tr key={c.provider} className={`border-b border-il-border last:border-0 ${c.highlight ? "bg-il-violet/5" : ""}`}>
                    <td className={`p-4 font-medium ${c.highlight ? "text-il-violet" : "text-il-white"}`}>{c.provider}</td>
                    <td className="p-4 text-il-white">{c.accuracy}</td>
                    <td className="p-4 text-il-white">{c.mobiles}</td>
                    <td className="p-4 text-il-white">{c.refresh}</td>
                    <td className="p-4">{c.gdpr ? <CheckCircle size={16} className="text-il-green" /> : <span className="text-il-gray-light">—</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
