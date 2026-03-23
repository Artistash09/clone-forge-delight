import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import ToastNotification from "@/components/ToastNotification";
import CookieBanner from "@/components/CookieBanner";
import { Link } from "react-router-dom";
import { CheckCircle, RefreshCw, Shield, Database, Globe, Zap } from "lucide-react";

const verificationSteps = [
  { step: "1", title: "Syntax Check", desc: "Valid email format?" },
  { step: "2", title: "Domain Check", desc: "Domain exists & active?" },
  { step: "3", title: "MX Records", desc: "Can receive email?" },
  { step: "4", title: "SMTP Ping", desc: "Mailbox accepts mail?" },
  { step: "5", title: "Catch-all", desc: "Not a catch-all?" },
  { step: "6", title: "Confidence Score", desc: "90%+ confidence?" },
];

const dataPoints = [
  { icon: Database, value: "280M+", label: "Verified B2B Contacts", desc: "The largest independently verified contact database for sales teams." },
  { icon: Globe, value: "200+", label: "Countries Covered", desc: "Global coverage with deep data in North America, Europe, and APAC." },
  { icon: RefreshCw, value: "Weekly", label: "Data Refresh Cycle", desc: "Every record is re-verified weekly. Stale data is automatically flagged." },
  { icon: Shield, value: "98%", label: "Email Accuracy Rate", desc: "Industry-leading accuracy. Triple-verified emails that don't bounce." },
  { icon: Zap, value: "60M+", label: "Direct Mobile Numbers", desc: "Verified direct dials with a 30% average mobile pick-up rate." },
  { icon: CheckCircle, value: "GDPR", label: "Fully Compliant", desc: "SOC2-ready infrastructure. GDPR compliant. Data processed in the EU." },
];

const comparisons = [
  { provider: "Inbound Labs", accuracy: "98%", mobiles: "60M+", refresh: "Weekly", gdpr: true, highlight: true },
  { provider: "ZoomInfo", accuracy: "~82%", mobiles: "Available (extra cost)", refresh: "Monthly", gdpr: true, highlight: false },
  { provider: "Apollo", accuracy: "~79%", mobiles: "40M (lower match rate)", refresh: "Monthly", gdpr: false, highlight: false },
  { provider: "Cognism", accuracy: "~89%", mobiles: "Diamond Verified", refresh: "Bi-weekly", gdpr: true, highlight: false },
];

const freshnessData = [
  { type: "📧 Email Addresses", width: "95%", freq: "Weekly refresh" },
  { type: "📱 Mobile Numbers", width: "75%", freq: "Monthly refresh" },
  { type: "💼 Job Titles", width: "85%", freq: "Bi-weekly refresh" },
  { type: "🏢 Company Data", width: "80%", freq: "Bi-weekly refresh" },
  { type: "🔥 Intent Signals", width: "100%", freq: "Real-time" },
];

const complianceCards = [
  { icon: "🇪🇺", title: "GDPR Compliant", desc: "We operate under Article 6(1)(f) legitimate interest for B2B professional data. Full opt-out database maintained. Data Processing Agreements available on all plans." },
  { icon: "🇺🇸", title: "CCPA Compliant", desc: "California Consumer Privacy Act compliance built in. Data subject access requests handled within 30 days. Do-not-sell registry maintained." },
  { icon: "🔒", title: "Data Security", desc: "All data encrypted at rest (AES-256) and in transit (TLS 1.3). EU-region servers by default. Annual penetration testing. SOC2 Type II in progress." },
  { icon: "👤", title: "Data Subject Rights", desc: "We honor all data subject requests — access, deletion, correction, and portability. Submit requests at our opt-out portal. Processed within 30 days." },
  { icon: "📋", title: "Sub-processors", desc: "Full list of sub-processors available in our Trust Center. All sub-processors are vetted for GDPR compliance and subject to data processing agreements." },
  { icon: "📄", title: "Data Processing Agreement", desc: "DPAs available to all paid customers. Enterprise customers get dedicated legal review support and custom DPA negotiation if needed." },
];

export default function OurData() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />

      {/* Breadcrumbs */}
      <div className="px-6 md:px-10 pt-4 max-w-[1200px] mx-auto">
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-il-gray-light hover:text-il-violet-light">Home</Link>
          <span className="text-il-violet/30">›</span>
          <span className="text-il-white">Our Data</span>
        </div>
      </div>

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

      {/* 6-Step Verification Pipeline */}
      <section className="py-20 px-6 md:px-10 border-t border-il-border">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-6">
            <div className="section-label">Verification Process</div>
            <h2 className="section-title text-il-white">How we verify every email.</h2>
          </div>
          <p className="text-il-gray-light text-[15px] mb-10 max-w-[560px]">
            Every email goes through 6 verification steps before it's marked as verified. Only emails that pass every step are delivered to you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {verificationSteps.map((s, i) => (
              <div key={s.step} className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-il-violet to-il-violet-dark flex items-center justify-center text-primary-foreground font-bold text-sm">{s.step}</div>
                  <div className="font-bold text-[13px] text-il-white mt-2 mb-1">{s.title}</div>
                  <div className="text-[12px] text-il-gray-light">{s.desc}</div>
                </div>
                {i < verificationSteps.length - 1 && <span className="text-il-gray-light text-lg hidden md:block">→</span>}
              </div>
            ))}
          </div>
          <div className="bg-il-green/5 border border-il-green/20 rounded-xl p-5 flex items-center gap-4 mt-8">
            <span className="text-2xl">✅</span>
            <div>
              <div className="font-bold text-il-white mb-1">Result: 98% deliverability rate</div>
              <div className="text-[13px] text-il-gray-light">Only emails passing all 6 steps are marked "Verified" and included in your export. Failed emails are not charged to your account.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Freshness */}
      <section className="py-20 px-6 md:px-10 border-t border-il-border">
        <div className="max-w-[1000px] mx-auto">
          <div className="section-label">Data Freshness</div>
          <h2 className="section-title text-il-white">How often we refresh each data type.</h2>
          <div className="space-y-4 mt-10">
            {freshnessData.map((f) => (
              <div key={f.type} className="flex items-center gap-4">
                <div className="w-[180px] text-sm text-il-white flex-shrink-0">{f.type}</div>
                <div className="flex-1 h-3 bg-il-dark2 rounded-full overflow-hidden">
                  <div className="h-full bg-il-violet rounded-full" style={{ width: f.width }}></div>
                </div>
                <div className="w-[130px] text-sm text-il-gray-light text-right flex-shrink-0">{f.freq}</div>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-card border border-il-border rounded-[10px] p-4 text-sm text-il-gray-light">
            📊 <strong className="text-il-white">12 million records</strong> are updated every week across our entire database.
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

      {/* Compliance */}
      <section className="py-20 px-6 md:px-10 bg-il-dark border-t border-b border-il-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="section-label">Compliance</div>
          <h2 className="section-title text-il-white">GDPR, CCPA & beyond.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {complianceCards.map((c) => (
              <div key={c.title} className="bg-card border border-il-border rounded-xl p-7">
                <div className="text-2xl mb-3">{c.icon}</div>
                <h3 className="font-display text-lg font-bold text-il-white mb-2">{c.title}</h3>
                <p className="text-sm text-il-gray-light leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-7 flex-wrap">
            {["🇪🇺 GDPR Certified", "🇺🇸 CCPA Compliant", "🔒 256-bit Encryption", "📄 DPA Available"].map((badge) => (
              <div key={badge} className="bg-card border border-il-border rounded-lg px-4 py-2.5 text-[13px] text-il-gray-light">{badge}</div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-8" />
      <div className="text-center py-24 px-6 relative overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[500px] glow-violet pointer-events-none" />
        <div className="relative z-10">
          <h2 className="font-display font-extrabold leading-[1.1] mb-3 text-il-white" style={{ fontSize: "clamp(36px, 5vw, 60px)", letterSpacing: "-1.5px" }}>
            Data you can trust.<br />Results you can prove.
          </h2>
          <p className="text-il-gray-light text-[17px] mb-9">
            See our 98% accuracy rate for yourself — 50 free lookups, no credit card.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link to="/pricing" className="bg-il-violet text-primary-foreground px-7 py-3.5 text-base font-semibold rounded-[10px] hover:bg-il-violet-light transition-all hover:-translate-y-0.5">
              Try Free
            </Link>
            <button className="bg-transparent text-il-white border border-il-border px-7 py-3.5 text-base font-semibold rounded-[10px] hover:bg-il-dark2 transition-colors">
              Download Data Sheet
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <ToastNotification />
      <CookieBanner />
    </div>
  );
}
