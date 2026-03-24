import { Link } from "react-router-dom";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import ToastNotification from "@/components/ToastNotification";
import CookieBanner from "@/components/CookieBanner";

const stats = [
  { num: "22%", label: "Connect rate" },
  { num: "4.4×", label: "More answers" },
  { num: "60M", label: "Mobile numbers used" },
];

const results = [
  { before: "5% connect rate", metric: "22%", label: "↑ Connect rate" },
  { before: "Gatekeeper calls", metric: "Direct", label: "Dial to decision-maker" },
  { before: "Hours list building", metric: "Minutes", label: "Time to build ICP list" },
];

export default function CaseStudyFounderLedSales() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />

      <section className="relative py-20 px-6 md:px-10 border-b border-il-border">
        <div className="max-w-[1100px] mx-auto">
          <Link to="/case-studies" className="text-il-violet text-sm font-medium mb-8 inline-block hover:text-il-violet-light">← Case Studies</Link>
          <div className="grid md:grid-cols-[1fr_320px] gap-10">
            <div>
              <div className="section-label">Case Study · Founder Sales</div>
              <h1 className="font-display font-extrabold text-il-white leading-[1.1] mb-8" style={{ fontSize: "clamp(32px, 4.5vw, 52px)", letterSpacing: "-1.5px" }}>
                Cold-Call Connect Rate Jumped from 5% to 22%
              </h1>
              <div className="grid grid-cols-3 gap-4 mb-10">
                {stats.map((s) => (
                  <div key={s.label} className="bg-il-dark2 border border-il-border rounded-xl p-5">
                    <div className="font-display text-2xl font-extrabold text-il-violet-light mb-1">{s.num}</div>
                    <div className="text-xs text-il-gray-light">{s.label}</div>
                  </div>
                ))}
              </div>
              <blockquote className="border-l-2 border-il-violet pl-5 mb-4">
                <p className="text-il-gray-light italic leading-relaxed">
                  "We were calling the same people as everyone else and getting 5% pickup. With Inbound Labs direct dials, decision-makers actually answered. Changed everything."
                </p>
              </blockquote>
              <div className="text-sm text-il-text-muted">— Founder, Founder Led Sales</div>
            </div>
            <div className="bg-il-dark2 border border-il-border rounded-xl p-6 h-fit">
              <div className="text-xs text-il-gray-light uppercase tracking-wider mb-4 font-semibold">Company Profile</div>
              <div className="space-y-3 text-sm">
                <div><span className="text-il-gray-light">Company:</span> <span className="text-il-white font-medium">Founder Led Sales</span></div>
                <div><span className="text-il-gray-light">Use case:</span> <span className="text-il-white font-medium">Founder-led outbound</span></div>
                <div><span className="text-il-gray-light">Focus:</span> <span className="text-il-white font-medium">Cold calling</span></div>
                <div><span className="text-il-gray-light">Result:</span> <span className="text-green-400 font-medium">22% connect rate</span></div>
              </div>
              <Link to="/pricing" className="mt-6 block text-center bg-il-violet text-primary-foreground px-5 py-2.5 text-sm font-semibold rounded-lg hover:bg-il-violet-light transition-all">
                Get Similar Results
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-10">
        <div className="max-w-[760px] mx-auto space-y-10">
          <div>
            <h3 className="font-display text-xl font-bold text-il-white mb-3">The Challenge</h3>
            <p className="text-il-gray-light leading-relaxed">Founder Led Sales was running cold outbound for founder-led B2B companies. Cold call connect rates were stuck at 5% — they were reaching gatekeepers, wrong numbers, and outdated contacts. Most of the work was admin, not selling.</p>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-il-white mb-3">The Solution</h3>
            <p className="text-il-gray-light leading-relaxed">Switched entirely to Inbound Labs for direct mobile numbers. 60M verified direct dials meant they were calling the actual decision-maker's mobile, not the company switchboard.</p>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-il-white mb-3">The Results</h3>
            <div className="grid grid-cols-3 gap-4 mt-6">
              {results.map((r) => (
                <div key={r.label} className="bg-il-dark2 border border-il-border rounded-xl p-5 text-center">
                  <div className="text-il-gray-light text-xs mb-2">Before: {r.before}</div>
                  <div className="font-display text-3xl font-extrabold text-il-violet-light mb-1">{r.metric}</div>
                  <div className="text-green-400 text-xs">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-10">
        <div className="max-w-[760px] mx-auto">
          <blockquote className="border-l-2 border-il-violet pl-5">
            <p className="text-il-gray-light italic leading-relaxed">
              "When you're a founder doing sales yourself, every hour is precious. Inbound Labs gave us back 60% of our prospecting time and 4× the results."
            </p>
          </blockquote>
        </div>
      </section>

      <CTABand />
      <Footer />
      <ToastNotification />
      <CookieBanner />
    </div>
  );
}
