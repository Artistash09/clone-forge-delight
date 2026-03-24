import { Link } from "react-router-dom";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import ToastNotification from "@/components/ToastNotification";
import CookieBanner from "@/components/CookieBanner";

const stats = [
  { num: "300%", label: "Response rate increase" },
  { num: "50", label: "AEs prospecting" },
  { num: "4–6hrs", label: "Per week per AE" },
];

const results = [
  { before: "0.9%", metric: "3.6%", label: "↑ Email reply rate" },
  { before: "8–10hrs/week", metric: "4–6hrs", label: "↓ Prospecting time" },
  { before: "22% bounce", metric: "<2%", label: "↓ Bounce rate" },
];

export default function CaseStudySnyk() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <section className="relative py-20 px-6 md:px-10 border-b border-il-border">
        <div className="max-w-[1100px] mx-auto">
          <Link to="/case-studies" className="text-il-violet text-sm font-medium mb-8 inline-block hover:text-il-violet-light">← Case Studies</Link>

          <div className="grid md:grid-cols-[1fr_320px] gap-10">
            <div>
              <div className="section-label">Case Study · Enterprise Sales</div>
              <h1 className="font-display font-extrabold text-il-white leading-[1.1] mb-8" style={{ fontSize: "clamp(32px, 4.5vw, 52px)", letterSpacing: "-1.5px" }}>
                300% Increase in Email Response Rate
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
                  "Pete got 50 AEs prospecting 4–6 hours per week. Response rates tripled from 0.9% because the data actually worked. We finally had emails that landed."
                </p>
              </blockquote>
              <div className="text-sm text-il-text-muted">— Pete Lipton, Snr. Director of Sales, Snyk</div>
            </div>

            {/* Sidebar */}
            <div className="bg-il-dark2 border border-il-border rounded-xl p-6 h-fit">
              <div className="text-xs text-il-gray-light uppercase tracking-wider mb-4 font-semibold">Company Profile</div>
              <div className="space-y-3 text-sm">
                <div><span className="text-il-gray-light">Company:</span> <span className="text-il-white font-medium">Snyk</span></div>
                <div><span className="text-il-gray-light">Industry:</span> <span className="text-il-white font-medium">Developer Security</span></div>
                <div><span className="text-il-gray-light">Team size:</span> <span className="text-il-white font-medium">50 AEs</span></div>
                <div><span className="text-il-gray-light">Use case:</span> <span className="text-il-white font-medium">Enterprise Sales</span></div>
                <div><span className="text-il-gray-light">Result:</span> <span className="text-green-400 font-medium">3× response rate</span></div>
              </div>
              <Link to="/pricing" className="mt-6 block text-center bg-il-violet text-primary-foreground px-5 py-2.5 text-sm font-semibold rounded-lg hover:bg-il-violet-light transition-all">
                Get Similar Results
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 md:px-10">
        <div className="max-w-[760px] mx-auto space-y-10">
          <div>
            <h3 className="font-display text-xl font-bold text-il-white mb-3">The Challenge</h3>
            <p className="text-il-gray-light leading-relaxed">Snyk's 50 AEs were self-sourcing pipeline alongside closing inbound leads. The data was unreliable — bounce rates above 20%, reps spending 8–10 hours per week on prospecting admin instead of selling. At 50 reps, that was 400–500 hours of lost selling time every week.</p>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-il-white mb-3">The Solution</h3>
            <p className="text-il-gray-light leading-relaxed">Pete standardised the entire sales org on Inbound Labs. Chrome extension let reps enrich contacts directly from LinkedIn. CRM push meant zero manual data entry — contacts flowed straight into Salesforce. Team standardised on 4–6 hours of prospecting per week, focused entirely on outreach, not data admin.</p>
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

      {/* Closing Quote */}
      <section className="py-12 px-6 md:px-10">
        <div className="max-w-[760px] mx-auto">
          <blockquote className="border-l-2 border-il-violet pl-5">
            <p className="text-il-gray-light italic leading-relaxed">
              "The ROI was immediate. In the first month, pipeline from AE self-sourcing increased by 40%. By month three, it had more than doubled. Inbound Labs paid for itself in week two."
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
