import { Link } from "react-router-dom";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import ToastNotification from "@/components/ToastNotification";
import CookieBanner from "@/components/CookieBanner";

const stats = [
  { num: "3×", label: "Pipeline growth" },
  { num: "$300K", label: "Weekly pipeline" },
  { num: "0", label: "New hires needed" },
];

const results = [
  { before: "$100K/week", metric: "$300K", label: "↑ Weekly pipeline" },
  { before: "28% bounce", metric: "<2%", label: "↓ Bounce rate" },
  { before: "60 days", metric: "60 days", label: "Time to 3× pipeline" },
];

export default function CaseStudyMeritt() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />

      <section className="relative py-20 px-6 md:px-10 border-b border-il-border">
        <div className="max-w-[1100px] mx-auto">
          <Link to="/case-studies" className="text-il-violet text-sm font-medium mb-8 inline-block hover:text-il-violet-light">← Case Studies</Link>
          <div className="grid md:grid-cols-[1fr_320px] gap-10">
            <div>
              <div className="section-label">Case Study · RevOps</div>
              <h1 className="font-display font-extrabold text-il-white leading-[1.1] mb-8" style={{ fontSize: "clamp(32px, 4.5vw, 52px)", letterSpacing: "-1.5px" }}>
                3× Weekly Pipeline Without Adding Headcount
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
                  "We went from $100K to $300K in weekly pipeline in 60 days. Same team, same effort — just better data. The ROI is insane."
                </p>
              </blockquote>
              <div className="text-sm text-il-text-muted">— Head of RevOps, Meritt</div>
            </div>
            <div className="bg-il-dark2 border border-il-border rounded-xl p-6 h-fit">
              <div className="text-xs text-il-gray-light uppercase tracking-wider mb-4 font-semibold">Company Profile</div>
              <div className="space-y-3 text-sm">
                <div><span className="text-il-gray-light">Company:</span> <span className="text-il-white font-medium">Meritt</span></div>
                <div><span className="text-il-gray-light">Industry:</span> <span className="text-il-white font-medium">B2B SaaS</span></div>
                <div><span className="text-il-gray-light">Use case:</span> <span className="text-il-white font-medium">RevOps & Outbound</span></div>
                <div><span className="text-il-gray-light">Result:</span> <span className="text-green-400 font-medium">3× pipeline in 60 days</span></div>
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
            <p className="text-il-gray-light leading-relaxed">Meritt's sales team was hitting a ceiling on outbound pipeline quality. They were using multiple data providers with inconsistent quality. Bounce rates were high, hurting email deliverability. They were generating $100K in weekly pipeline but knew the ceiling was much higher.</p>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-il-white mb-3">The Solution</h3>
            <p className="text-il-gray-light leading-relaxed">Meritt standardised all outbound data on Inbound Labs. Weekly-refreshed database meant contacts were always current. Intent signals let the team prioritise accounts actively in-market.</p>
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
              "We stopped arguing about data quality in RevOps meetings. The data works. Now we focus on the actual sales process."
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
