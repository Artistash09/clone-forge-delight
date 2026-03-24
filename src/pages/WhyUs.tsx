import { useState } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import ToastNotification from "@/components/ToastNotification";
import CookieBanner from "@/components/CookieBanner";
import BookDemoModal from "@/components/BookDemoModal";
import { Link } from "react-router-dom";

const painPoints = [
  { icon: "⏱️", title: "2+ hours cleaning lists per rep per day", desc: "Your highest-paid people are doing data entry instead of selling. That's not a process problem — it's a data quality problem." },
  { icon: "📨", title: "Emails bouncing. Domains dying.", desc: "Every bounced email chips away at your domain reputation. One bad list can damage deliverability for months." },
  { icon: "📞", title: "Calling company numbers, not decision-makers", desc: "Generic company phone numbers route to reception, not the VP of Sales. Direct mobiles change everything." },
];

const solutions = [
  { icon: "🎯", title: "Verified Emails — Every Time", desc: "6-step verification means every email you export is deliverable. Bounce rate drops to under 2%. Your domain reputation stays intact.", stat: "98%", statLabel: "deliverability rate" },
  { icon: "📱", title: "Direct Mobile Numbers", desc: "Real mobile numbers validated against carrier databases. 30% average pick-up rate vs under 5% on company lines.", stat: "30%", statLabel: "avg. pick-up rate" },
  { icon: "🔥", title: "In-Market Intent Signals", desc: "Buying intent filters show which accounts are actively researching solutions like yours — so reps call warm, not cold.", stat: "5×", statLabel: "higher reply rate on intent leads" },
];

const workflow = [
  { icon: "🎯", title: "Build ICP List", desc: "Filter 280M contacts by industry, title, intent, location" },
  { icon: "✉️", title: "Verify & Enrich", desc: "Every email and mobile verified before export" },
  { icon: "🔌", title: "Push to Sequencer", desc: "One click to Outreach, Salesloft, Apollo, or CSV" },
  { icon: "📈", title: "Book Meetings", desc: "Higher reply rates. More calls answered. More pipeline." },
];

export default function WhyUs() {
  const [demoOpen, setDemoOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />

      {/* Breadcrumbs */}
      <div className="px-6 md:px-10 pt-4 max-w-[1200px] mx-auto">
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-il-gray-light hover:text-il-violet-light">Home</Link>
          <span className="text-il-violet/30">›</span>
          <Link to="/" className="text-il-gray-light hover:text-il-violet-light">Use Cases</Link>
          <span className="text-il-violet/30">›</span>
          <span className="text-il-white">Sales Teams</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-24 px-6 md:px-10 glow-violet">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-il-violet/10 border border-il-violet/20 text-il-violet text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              💼 For Sales Teams
            </div>
            <h1 className="font-display text-5xl font-extrabold text-il-white leading-[1.1] mb-5 tracking-tight">
              Book More Meetings.<br />Stop Fighting Bad Data.
            </h1>
            <p className="text-il-gray-light text-base leading-relaxed mb-7">
              Your reps deserve verified emails, direct mobiles, and in-market signals — not 3 hours a day cleaning lists. Inbound Labs gives them everything they need to close.
            </p>
            <div className="flex gap-3 flex-wrap mb-5">
              <Link to="/pricing" className="bg-il-violet text-primary-foreground px-7 py-3.5 text-sm font-semibold rounded-lg hover:bg-il-violet-light transition-all hover:-translate-y-0.5">
                Start Free Trial
              </Link>
              <Link to="/case-studies" className="text-il-white text-sm px-6 py-3.5 rounded-lg border border-il-border hover:border-il-violet/40 transition-colors font-medium">
                See a Sales Case Study
              </Link>
            </div>
            <div className="flex gap-3 flex-wrap">
              <span className="text-sm text-il-gray-light bg-card border border-il-border rounded-full px-3 py-1">✓ Used by 8,000+ sales teams</span>
              <span className="text-sm text-il-gray-light bg-card border border-il-border rounded-full px-3 py-1">4.8★ on G2</span>
            </div>
          </div>
          <div className="bg-card border border-il-border rounded-2xl flex items-center justify-center p-8">
            <div className="text-center">
              <div className="font-display text-7xl font-extrabold text-il-violet">+47%</div>
              <div className="text-sm text-il-gray-light mt-2">Meeting booking rate</div>
              <div className="text-[13px] text-il-gray-light mt-4">Average result in first 90 days</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="section-label">Sound Familiar?</div>
          <h2 className="section-title text-il-white">The problems your reps face every day.</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {painPoints.map((p) => (
              <div key={p.title} className="bg-card border border-il-border border-l-[3px] border-l-il-violet rounded-xl p-7">
                <div className="text-2xl mb-3">{p.icon}</div>
                <h3 className="font-display text-base font-bold text-il-white mb-2">{p.title}</h3>
                <p className="text-sm text-il-gray-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 px-6 md:px-10 bg-il-dark border-t border-b border-il-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="section-label">The Solution</div>
          <h2 className="section-title text-il-white">How Inbound Labs solves it.</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {solutions.map((s) => (
              <div key={s.title} className="bg-card border border-il-border rounded-xl p-7">
                <div className="text-2xl mb-3">{s.icon}</div>
                <h3 className="font-display text-base font-bold text-il-white mb-2">{s.title}</h3>
                <p className="text-sm text-il-gray-light leading-relaxed mb-4">{s.desc}</p>
                <div className="font-display text-4xl font-extrabold text-il-violet-light">{s.stat}</div>
                <div className="text-[12px] text-il-gray-light">{s.statLabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study - Snyk */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="section-label">Case Study</div>
          <h2 className="section-title text-il-white">How Snyk tripled response rates.</h2>
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            <div>
              <div className="font-display text-6xl font-extrabold text-il-violet-light mb-2">300%</div>
              <div className="text-sm text-il-gray-light mb-5">Increase in email response rate</div>
              <div className="flex gap-3 flex-wrap">
                {["50 AEs", "4-6hrs/week prospecting", "From 0.9% → 3.6% reply"].map((t) => (
                  <span key={t} className="bg-card border border-il-border rounded-lg px-3 py-2 text-[12px] text-il-gray-light">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-il-gray-light text-base italic leading-relaxed mb-4">
                "Pete got 50 AEs prospecting 4–6 hours per week. Response rates tripled from 0.9% because the data actually worked."
              </p>
              <div className="text-sm text-il-text-muted mb-5">— Pete Lipton, Snr. Director of Sales, Snyk</div>
              <Link to="/case-studies" className="text-il-violet text-sm font-semibold">Read the full case study →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 px-6 md:px-10 border-t border-il-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="section-label">Your Workflow</div>
          <h2 className="section-title text-il-white">How it fits into your stack.</h2>
          <div className="grid md:grid-cols-4 gap-6 mt-10 relative">
            {workflow.map((w, i) => (
              <div key={w.title} className="text-center">
                <div className="w-12 h-12 rounded-full border-2 border-il-violet flex items-center justify-center text-xl mx-auto mb-3">{w.icon}</div>
                <h3 className="font-display text-sm font-bold text-il-white mb-1">{w.title}</h3>
                <p className="text-[13px] text-il-gray-light">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center py-24 px-6 relative overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[500px] glow-violet pointer-events-none" />
        <div className="relative z-10">
          <div className="inline-block bg-il-violet/10 border border-il-violet/20 text-il-violet text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            💼 For Sales Teams
          </div>
          <h2 className="font-display font-extrabold leading-[1.1] mb-3 text-il-white" style={{ fontSize: "clamp(36px, 5vw, 60px)", letterSpacing: "-1.5px" }}>
            Give your reps data<br />that actually works.
          </h2>
          <p className="text-il-gray-light text-[17px] mb-9">
            Join 8,000+ sales teams already booking more meetings with Inbound Labs.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link to="/pricing" className="bg-il-violet text-primary-foreground px-7 py-3.5 text-base font-semibold rounded-[10px] hover:bg-il-violet-light transition-all hover:-translate-y-0.5">
              Start Free Trial
            </Link>
            <button onClick={() => setDemoOpen(true)} className="bg-transparent text-il-white border border-il-border px-7 py-3.5 text-base font-semibold rounded-[10px] hover:bg-il-dark2 transition-colors">
              Book a Demo
            </button>
          </div>
          <div className="flex items-center justify-center gap-5 mt-5 flex-wrap">
            {["No CC required", "Setup in 2 min", "GDPR"].map((t) => (
              <span key={t} className="text-sm text-il-gray-light flex items-center gap-1.5">
                <span className="text-il-green">✓</span> {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <ToastNotification />
      <CookieBanner />
      <BookDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
}
