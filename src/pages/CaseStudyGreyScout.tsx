import { Link } from "react-router-dom";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import ToastNotification from "@/components/ToastNotification";
import CookieBanner from "@/components/CookieBanner";

const stats = [
  { num: "4 wks", label: "To quota (was 10)" },
  { num: "15–20", label: "Conversations week 1" },
  { num: "2.5×", label: "Faster ramp time" },
];

const results = [
  { before: "10 weeks", metric: "4 wks", label: "↓ Time to quota" },
  { before: "3–4 convos week 1", metric: "15–20", label: "↑ Conversations in week 1" },
  { before: "High attrition", metric: "60%↓", label: "SDR attrition reduction" },
];

export default function CaseStudyGreyScout() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />

      <section className="relative py-20 px-6 md:px-10 border-b border-il-border">
        <div className="max-w-[1100px] mx-auto">
          <Link to="/case-studies" className="text-il-violet text-sm font-medium mb-8 inline-block hover:text-il-violet-light">← Case Studies</Link>
          <div className="grid md:grid-cols-[1fr_320px] gap-10">
            <div>
              <div className="section-label">Case Study · Sales Team</div>
              <h1 className="font-display font-extrabold text-il-white leading-[1.1] mb-8" style={{ fontSize: "clamp(32px, 4.5vw, 52px)", letterSpacing: "-1.5px" }}>
                New SDRs Hit Quota 2.5× Faster
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
                  "New SDRs had 15–20 real conversations in their first week. Before, it was 3–4. When reps succeed early, they stay. Our attrition dropped alongside ramp time."
                </p>
              </blockquote>
              <div className="text-sm text-il-text-muted">— Sales Director, GreyScout</div>
            </div>
            <div className="bg-il-dark2 border border-il-border rounded-xl p-6 h-fit">
              <div className="text-xs text-il-gray-light uppercase tracking-wider mb-4 font-semibold">Company Profile</div>
              <div className="space-y-3 text-sm">
                <div><span className="text-il-gray-light">Company:</span> <span className="text-il-white font-medium">GreyScout</span></div>
                <div><span className="text-il-gray-light">Industry:</span> <span className="text-il-white font-medium">B2B SaaS</span></div>
                <div><span className="text-il-gray-light">Use case:</span> <span className="text-il-white font-medium">SDR team scaling</span></div>
                <div><span className="text-il-gray-light">Result:</span> <span className="text-green-400 font-medium">60% reduction in SDR attrition</span></div>
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
            <p className="text-il-gray-light leading-relaxed">GreyScout was hiring SDRs and losing them within 3–4 months. Exit interviews kept surfacing the same theme: reps felt they were calling into a void. Bad data meant early discouragement, which drove attrition. The cost of recruiting and training replacements was becoming a serious problem.</p>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-il-white mb-3">The Solution</h3>
            <p className="text-il-gray-light leading-relaxed">Standardised new SDR onboarding on Inbound Labs. Every new hire started with a curated, verified ICP list with direct mobile numbers. Week one was spent making calls and having real conversations — not building lists.</p>
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
              "The data quality problem was a morale problem. Fix the data, fix the ramp, fix the attrition. Inbound Labs was the fix."
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
