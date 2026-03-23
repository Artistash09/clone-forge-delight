import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import ToastNotification from "@/components/ToastNotification";
import CookieBanner from "@/components/CookieBanner";
import { Link } from "react-router-dom";
import { Search, Filter, Download, Zap, Mail, Phone, Building, Globe, Users, Shield, CheckCircle } from "lucide-react";

const features = [
  { icon: Mail, title: "Verified Emails", desc: "97% accuracy rate. Every email is triple-verified before delivery. No bounces, no wasted credits." },
  { icon: Phone, title: "Direct Mobile Numbers", desc: "Reach decision-makers directly. 22% average cold-call connect rate with our verified mobile data." },
  { icon: Building, title: "Company Intelligence", desc: "Firmographics, technographics, funding data, headcount growth, and 50+ company attributes." },
  { icon: Filter, title: "Advanced Filters", desc: "Filter by industry, title, seniority, location, tech stack, funding stage, headcount, and more." },
  { icon: Download, title: "Instant Export", desc: "Export clean, enriched lists directly to your CRM or sequencer. CSV, API, or native integrations." },
  { icon: Zap, title: "Intent Signals", desc: "Identify companies actively researching your category. Reach buyers before they talk to competitors." },
];

const stats = [
  { value: "280M+", label: "B2B Contacts" },
  { value: "97%", label: "Email Accuracy" },
  { value: "50M+", label: "Direct Mobiles" },
  { value: "15K+", label: "Companies Trust Us" },
];

export default function Database() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <section className="relative py-24 px-6 md:px-10 text-center glow-violet">
        <div className="max-w-[800px] mx-auto">
          <div className="section-label">PLATFORM</div>
          <h1 className="section-title text-il-white">
            The B2B Database Built<br />for Revenue Teams
          </h1>
          <p className="text-il-text-muted text-lg max-w-[600px] mx-auto mb-8">
            Access 280M+ verified contacts with emails, direct mobiles, and company intelligence.
            Build targeted prospect lists in seconds — not hours.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link to="/pricing" className="bg-il-violet text-primary-foreground px-7 py-3.5 text-sm font-semibold rounded-lg hover:bg-il-violet-light transition-all hover:-translate-y-0.5">
              Start Free Trial
            </Link>
            <button className="text-il-white text-sm px-6 py-3.5 rounded-lg border border-il-border hover:border-il-violet/40 transition-colors font-medium">
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Search Preview */}
      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-[900px] mx-auto bg-card border border-il-border rounded-2xl overflow-hidden">
          <div className="p-5 border-b border-il-border flex items-center gap-3">
            <Search size={18} className="text-il-gray-light" />
            <span className="text-il-white text-sm font-medium">VP Sales, SaaS, United States</span>
          </div>
          <div className="p-5 border-b border-il-border">
            <div className="text-xs text-il-gray-light uppercase tracking-wider mb-3">Filters</div>
            <div className="flex flex-wrap gap-2">
              {["SaaS", "VP Level", "US & Canada"].map((f) => (
                <span key={f} className="text-xs bg-il-violet/20 text-il-violet px-3 py-1.5 rounded-full font-medium">{f}</span>
              ))}
              <span className="text-xs text-il-gray-light px-3 py-1.5 rounded-full border border-il-border cursor-pointer hover:border-il-violet/40 transition-colors">+ Add Filter</span>
            </div>
          </div>
          <div className="divide-y divide-il-border">
            {[
              { name: "Sarah Chen", title: "VP of Sales", company: "Growth.io", email: "s.chen@growth.io" },
              { name: "Mark Johnson", title: "VP Sales & BD", company: "TechCorp", email: "m.johnson@techcorp.com" },
              { name: "Emily Davis", title: "VP Revenue", company: "Acme Inc", email: "e.davis@acme.co" },
              { name: "James Wilson", title: "VP Sales Ops", company: "ScaleUp", email: "j.wilson@scaleup.io" },
            ].map((c) => (
              <div key={c.name} className="p-4 flex items-center justify-between hover:bg-il-dark2/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-il-violet/20 flex items-center justify-center text-il-violet text-xs font-bold">
                    {c.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm text-il-white font-medium">{c.name}</div>
                    <div className="text-xs text-il-gray-light">{c.title} · {c.company}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-il-green flex items-center gap-1"><CheckCircle size={12} /> {c.email}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 md:px-10 border-t border-il-border">
        <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl font-extrabold text-il-white mb-1">{s.value}</div>
              <div className="text-sm text-il-gray-light">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 md:px-10 border-t border-il-border">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <div className="section-label">FEATURES</div>
            <h2 className="section-title text-il-white">Everything you need to<br />find and close deals</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-card border border-il-border rounded-xl p-7 hover:border-il-violet/30 transition-colors">
                <f.icon size={28} className="text-il-violet mb-4" />
                <h3 className="font-display text-lg font-bold text-il-white mb-2">{f.title}</h3>
                <p className="text-sm text-il-gray-light leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 px-6 md:px-10 border-t border-il-border">
        <div className="max-w-[800px] mx-auto flex flex-wrap items-center justify-center gap-8">
          {[
            { icon: "⭐", label: "4.8 on G2" },
            { icon: "✓", label: "GDPR Compliant" },
            { icon: "📅", label: "Weekly data refresh" },
            { icon: "🔒", label: "SOC2 Ready" },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-2 text-sm text-il-gray-light">
              <span>{b.icon}</span>
              <span>{b.label}</span>
            </div>
          ))}
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
