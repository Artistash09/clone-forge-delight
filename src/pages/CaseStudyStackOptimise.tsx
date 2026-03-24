import { Link } from "react-router-dom";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import ToastNotification from "@/components/ToastNotification";
import CookieBanner from "@/components/CookieBanner";

const stats = [
  { num: "$1M", label: "ARR achieved" },
  { num: "18", label: "Months to $1M" },
  { num: "1", label: "Data provider used" },
];

const results = [
  { before: "Multiple vendors", metric: "1", label: "Trusted data source" },
  { before: "Inconsistent results", metric: "$1M", label: "ARR in 18 months" },
  { before: "High bounce rates", metric: "95%", label: "Email deliverability" },
];

export default function CaseStudyStackOptimise() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />

      <section className="relative py-20 px-6 md:px-10 border-b border-il-border">
        <div className="max-w-[1100px] mx-auto">
          <Link to="/case-studies" className="text-il-violet text-sm font-medium mb-8 inline-block hover:text-il-violet-light">← Case Studies</Link>
          <div className="grid md:grid-cols-[1fr_320px] gap-10">
            <div>
              <div className="section-label">Case Study · Agency</div>
              <h1 className="font-display font-extrabold text-il-white leading-[1.1] mb-8" style={{ fontSize: "clamp(32px, 4.5vw, 52px)", letterSpacing: "-1.5px" }}>
                $1M ARR in 18 Months on One Data Source
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
                  "We now reach buyers before they even talk to a competitor. Inbound Labs is the only data provider we use for clients and our own growth."
                </p>
              </blockquote>
              <div className="text-sm text-il-text-muted">— Felix Frank, Founder at StackOptimise</div>
            </div>
            <div className="bg-il-dark2 border border-il-border rounded-xl p-6 h-fit">
              <div className="text-xs text-il-gray-light uppercase tracking-wider mb-4 font-semibold">Company Profile</div>
              <div className="space-y-3 text-sm">
                <div><span className="text-il-gray-light">Company:</span> <span className="text-il-white font-medium">StackOptimise</span></div>
                <div><span className="text-il-gray-light">Industry:</span> <span className="text-il-white font-medium">Outbound Agency</span></div>
                <div><span className="text-il-gray-light">Use case:</span> <span className="text-il-white font-medium">Agency scaling</span></div>
                <div><span className="text-il-gray-light">Result:</span> <span className="text-green-400 font-medium">$1M ARR in 18 months</span></div>
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
            <p className="text-il-gray-light leading-relaxed">As an outbound agency, StackOptimise's business depends entirely on deliverability and reply rates. Using multiple data providers made results inconsistent across client campaigns — impossible to predict and hard to scale.</p>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-il-white mb-3">The Solution</h3>
            <p className="text-il-gray-light leading-relaxed">Felix standardised 100% of client prospecting on Inbound Labs. Every client campaign uses the same data source — same verification standards, same freshness cadence, same reliability. This became a key selling point to new agency clients.</p>
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
              "Our pitch to clients now includes guaranteed deliverability because we know our data works. That closes deals."
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
