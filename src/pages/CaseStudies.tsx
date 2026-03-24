import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import ToastNotification from "@/components/ToastNotification";
import CookieBanner from "@/components/CookieBanner";
import { Link } from "react-router-dom";

const featuredStudy = {
  company: "Snyk",
  companyType: "Developer Security Platform · Series E",
  metric: "300%",
  metricLabel: "Increase in email response rate",
  quote: "Pete got 50 AEs prospecting 4–6 hours per week. Response rates tripled from 0.9% because the data actually worked.",
  author: "— Pete Lipton, Snr. Director of Sales, Snyk",
};

const caseStudies = [
  {
    company: "Meritt",
    metric: "3×",
    desc: "Tripled weekly pipeline from $100K to $300K without adding a single headcount. Same team. Better data.",
    tags: ["RevOps", "Pipeline Growth"],
    link: "/case-studies/meritt",
  },
  {
    company: "StackOptimise",
    metric: "$1M",
    desc: "$1M ARR in 18 months using Inbound Labs as the single data provider for all client and internal outbound.",
    tags: ["Agency", "ARR Growth"],
    link: "/case-studies/stackoptimise",
  },
  {
    company: "Founder Led Sales",
    metric: "22%",
    desc: "Cold-call connect rate jumped from 5% to 22% with verified direct mobiles. Decision-makers answered.",
    tags: ["Founder", "Connect Rate"],
    link: "/case-studies/founder-led-sales",
  },
  {
    company: "GreyScout",
    metric: "2.5×",
    desc: "New SDRs ramped to quota in 4 weeks instead of 10. Had 15–20 real conversations in their first week.",
    tags: ["Sales Team", "Ramp Speed"],
    link: "/case-studies/greyscout",
  },
  {
    company: "Snyk",
    metric: "300%",
    desc: "Response rate tripled from 0.9% to 3.6%. 50 AEs prospecting part-time generated more pipeline than full-time before.",
    tags: ["Enterprise", "Reply Rate"],
    link: "/case-studies/snyk",
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />

      {/* Breadcrumbs */}
      <div className="px-6 md:px-10 pt-4 max-w-[1200px] mx-auto">
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-il-gray-light hover:text-il-violet-light">Home</Link>
          <span className="text-il-violet/30">›</span>
          <span className="text-il-white">Case Studies</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-24 px-6 md:px-10 text-center glow-violet">
        <div className="max-w-[800px] mx-auto">
          <div className="section-label">CASE STUDIES</div>
          <h1 className="section-title text-il-white">
            Real results.<br />Real companies.
          </h1>
          <p className="text-il-text-muted text-lg max-w-[600px] mx-auto mb-8">
            Every number is real. Every quote is unedited. See exactly how companies like yours generate more pipeline with Inbound Labs.
          </p>
        </div>
      </section>

      {/* Featured Story */}
      <section className="px-6 md:px-10 pb-16">
        <div className="max-w-[1100px] mx-auto">
          <div className="bg-card border border-il-border rounded-2xl overflow-hidden grid md:grid-cols-[1fr_340px]">
            <div className="p-10 md:p-12">
              <div className="inline-block bg-il-violet/10 border border-il-violet/30 text-il-violet text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
                Featured Story
              </div>
              <div className="font-display text-[72px] font-extrabold text-il-violet leading-none mb-2">{featuredStudy.metric}</div>
              <div className="text-il-gray-light text-base mb-6">{featuredStudy.metricLabel}</div>
              <p className="text-il-gray-light text-base italic leading-relaxed mb-4">
                "{featuredStudy.quote}"
              </p>
              <div className="text-sm text-il-text-muted">{featuredStudy.author}</div>
            </div>
            <div className="bg-il-dark2 flex items-center justify-center p-8 border-l border-il-border">
              <div className="text-center">
                <div className="text-5xl mb-4">🔒</div>
                <div className="font-display text-xl font-bold text-il-white mb-1">{featuredStudy.company}</div>
                <div className="text-sm text-il-gray-light">{featuredStudy.companyType}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="py-12 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.company + cs.metric} className="bg-card border border-il-border rounded-xl p-7 hover:bg-il-violet/5 transition-colors cursor-pointer">
                <div className="font-display text-4xl font-extrabold text-il-violet-light mb-2">{cs.metric}</div>
                <div className="text-sm font-bold text-il-white mb-2">{cs.company}</div>
                <div className="text-sm text-il-gray-light leading-relaxed mb-4">{cs.desc}</div>
                <div className="flex gap-2 flex-wrap mb-4">
                  {cs.tags.map((tag) => (
                    <span key={tag} className="text-[11px] bg-il-dark2 border border-il-border text-il-gray-light px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <span className="text-il-violet text-[13px] font-semibold">Read story →</span>
              </div>
            ))}

            {/* Could be your story */}
            <div className="bg-il-violet/5 border border-il-border border-dashed rounded-xl p-7 flex flex-col items-center justify-center text-center">
              <div className="text-4xl mb-3">🚀</div>
              <div className="font-bold text-[15px] text-il-white mb-1.5">Could be your story</div>
              <div className="text-[13px] text-il-gray-light mb-4">Join 15,000+ companies already generating more pipeline</div>
              <Link to="/pricing" className="bg-il-violet text-primary-foreground px-5 py-2.5 text-[13px] font-semibold rounded-lg hover:bg-il-violet-light transition-all">
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="py-8" />
      <div className="text-center py-24 px-6 relative overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[500px] glow-violet pointer-events-none" />
        <div className="relative z-10">
          <h2 className="font-display font-extrabold leading-[1.1] mb-3 text-il-white" style={{ fontSize: "clamp(36px, 5vw, 60px)", letterSpacing: "-1.5px" }}>
            Your case study could be next.
          </h2>
          <p className="text-il-gray-light text-[17px] mb-9">
            Start free. See results in 30 days.
          </p>
          <Link to="/pricing" className="bg-il-violet text-primary-foreground px-7 py-3.5 text-base font-semibold rounded-[10px] hover:bg-il-violet-light transition-all hover:-translate-y-0.5">
            Start Free Trial
          </Link>
        </div>
      </div>
      <Footer />
      <ToastNotification />
      <CookieBanner />
    </div>
  );
}
