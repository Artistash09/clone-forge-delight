import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import ToastNotification from "@/components/ToastNotification";
import CookieBanner from "@/components/CookieBanner";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    company: "Meritt",
    metric: "3×",
    metricLabel: "Weekly pipeline",
    industry: "B2B Agency",
    challenge: "Meritt's sales team was stuck. They needed to scale pipeline without adding headcount, but their existing data provider was delivering stale contacts and bounced emails.",
    solution: "After switching to Inbound Labs, they built targeted ICP lists in minutes instead of hours. Verified emails meant zero bounces, and direct mobile numbers opened doors that email alone couldn't.",
    result: "Same team, three times the pipeline output in just 60 days. No new hires. No new tools. Just better data.",
    quote: "We tripled our weekly pipeline without adding a single person. The data quality difference was immediate.",
    author: "Head of Sales, Meritt",
  },
  {
    company: "StackOptimise",
    metric: "$1M",
    metricLabel: "ARR in 18 months",
    industry: "SaaS",
    challenge: "StackOptimise needed a single, reliable data source for both client campaigns and internal outbound. Managing multiple providers was costly and inconsistent.",
    solution: "They consolidated everything onto Inbound Labs — one platform for all prospecting. Weekly data refresh kept campaigns fresh, and the enrichment API automated their workflow.",
    result: "From zero to $1M ARR in 18 months, trusting one data provider for everything.",
    quote: "We now reach buyers before they even talk to a competitor.",
    author: "Felix Frank, Founder at StackOptimise",
  },
  {
    company: "Founder Led Sales",
    metric: "22%",
    metricLabel: "Cold-call connect rate",
    industry: "Sales Consulting",
    challenge: "Their cold-call connect rate was stuck at 5%. Most numbers in their database were switchboards or outdated. Reps were wasting hours dialing wrong numbers.",
    solution: "Inbound Labs' verified direct mobile numbers changed the game. Every number was validated against carrier databases before delivery.",
    result: "Connect rate jumped from 5% to 22%. Reps reached decision-makers directly on the first call.",
    quote: "The difference was night and day. We went from leaving voicemails to having real conversations.",
    author: "Founder, Founder Led Sales",
  },
  {
    company: "GreyScout",
    metric: "2.5×",
    metricLabel: "Faster quota ramp",
    industry: "Staffing & Recruitment",
    challenge: "New SDRs took 10 weeks to ramp. They spent most of their first month learning tools and cleaning data instead of having conversations.",
    solution: "With Inbound Labs, new reps could build clean prospect lists in minutes on day one. No data cleaning required. Verified contacts meant they could start dialing immediately.",
    result: "Ramp time dropped from 10 weeks to 4. New SDRs had 15–20 conversations in their first week.",
    quote: "Our new reps are productive from week one. That's never happened before.",
    author: "VP Sales, GreyScout",
  },
  {
    company: "Snyk",
    metric: "300%",
    metricLabel: "Email response rate increase",
    industry: "Cybersecurity",
    challenge: "With 50 AEs prospecting part-time, Snyk needed data that actually worked at scale. Low email deliverability was killing their outbound performance.",
    solution: "Inbound Labs' 97% email accuracy meant dramatically higher deliverability. AEs spent less time on bounced emails and more time on real conversations.",
    result: "300% increase in email response rates across 50 AEs. Data that actually works at enterprise scale.",
    quote: "The data quality transformed our outbound program. Our AEs finally trust the contacts they're reaching out to.",
    author: "Head of Sales Development, Snyk",
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <section className="relative py-24 px-6 md:px-10 text-center glow-violet">
        <div className="max-w-[800px] mx-auto">
          <div className="section-label">CASE STUDIES</div>
          <h1 className="section-title text-il-white">
            Companies Generating Real<br />Revenue with Inbound Labs
          </h1>
          <p className="text-il-text-muted text-lg max-w-[600px] mx-auto mb-8">
            See how sales teams, agencies, and founders use our data to book more meetings, close more deals, and scale faster.
          </p>
        </div>
      </section>

      {/* Metric Cards */}
      <section className="px-6 md:px-10 pb-16">
        <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
          {caseStudies.map((cs) => (
            <div key={cs.company} className="bg-card border border-il-border rounded-xl p-5 text-center hover:border-il-violet/30 transition-colors">
              <div className="text-xs font-semibold text-il-gray-light uppercase tracking-wider mb-1">{cs.company}</div>
              <div className="font-display text-3xl font-extrabold text-il-white">{cs.metric}</div>
              <div className="text-xs text-il-gray-light mt-1">{cs.metricLabel}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Case Studies */}
      <section className="py-12 px-6 md:px-10">
        <div className="max-w-[900px] mx-auto space-y-16">
          {caseStudies.map((cs, i) => (
            <div key={cs.company} className="bg-card border border-il-border rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs bg-il-violet/20 text-il-violet px-3 py-1 rounded-full font-medium">{cs.industry}</span>
                <span className="text-xs text-il-gray-light">Case Study #{i + 1}</span>
              </div>

              <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                <div className="md:w-1/3">
                  <div className="font-display text-5xl font-extrabold text-il-violet mb-1">{cs.metric}</div>
                  <div className="text-sm text-il-gray-light">{cs.metricLabel}</div>
                  <div className="text-lg font-display font-bold text-il-white mt-2">{cs.company}</div>
                </div>
                <div className="md:w-2/3 space-y-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-il-gray-light mb-1">Challenge</h4>
                    <p className="text-sm text-il-text-muted leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-il-gray-light mb-1">Solution</h4>
                    <p className="text-sm text-il-text-muted leading-relaxed">{cs.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-il-green mb-1">Result</h4>
                    <p className="text-sm text-il-white leading-relaxed font-medium">{cs.result}</p>
                  </div>
                </div>
              </div>

              <blockquote className="border-l-2 border-il-violet pl-5">
                <p className="text-sm text-il-gray-light italic mb-2">"{cs.quote}"</p>
                <cite className="text-xs text-il-text-muted not-italic">— {cs.author}</cite>
              </blockquote>
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
