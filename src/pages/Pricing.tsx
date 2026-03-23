import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const plans = [
  {
    name: "Starter",
    monthly: 49,
    annual: 39,
    desc: "For founders and small teams finding their first 1,000 customers.",
    cta: "Start Free Trial",
    ctaStyle: "border border-il-border text-il-white hover:bg-il-dark2",
    featured: false,
    features: [
      { text: "500 credits/month", included: true, bold: true },
      { text: "Verified email lookup", included: true },
      { text: "Mobile number finder", included: true },
      { text: "Chrome extension", included: true },
      { text: "CSV export", included: true },
      { text: "1 user seat", included: true },
      { text: "CRM integrations", included: false },
      { text: "Intent data filters", included: false },
    ],
    quote: '"Perfect for testing. Got 200 meetings in my first month." — Founder, early-stage SaaS',
  },
  {
    name: "Growth",
    monthly: 149,
    annual: 119,
    desc: "For sales teams scaling outbound and agencies running multiple campaigns.",
    cta: "Start Free Trial",
    ctaStyle: "bg-il-violet text-primary-foreground hover:bg-il-violet-light",
    featured: true,
    features: [
      { text: "2,500 credits/month", included: true, bold: true },
      { text: "Everything in Starter", included: true },
      { text: "CRM integrations (HubSpot, SF)", included: true },
      { text: "Intent data filters", included: true },
      { text: "Bulk CSV enrichment", included: true },
      { text: "5 user seats", included: true },
      { text: "API access (10k calls/mo)", included: true },
      { text: "Priority support", included: true },
    ],
    quote: '"We tripled pipeline in 60 days. Went from Growth to Pro in month 3." — VP Sales, Series A startup',
  },
  {
    name: "Enterprise",
    monthly: null,
    annual: null,
    desc: "For large sales orgs, outbound agencies, and RevOps teams needing scale.",
    cta: "Contact Sales",
    ctaStyle: "border border-il-border text-il-white hover:bg-il-dark2",
    featured: false,
    features: [
      { text: "Unlimited credits", included: true, bold: true },
      { text: "Everything in Growth", included: true },
      { text: "Unlimited user seats", included: true },
      { text: "Dedicated CSM", included: true },
      { text: "Custom integrations", included: true },
      { text: "SLA + 99.9% uptime", included: true },
      { text: "DPA & GDPR support", included: true },
      { text: "SSO / SAML", included: true },
    ],
    quote: '"Our 50 AEs run on Inbound Labs. Results tripled." — Director of Sales, Snyk',
  },
];

export default function Pricing() {
  const [period, setPeriod] = useState<"monthly" | "annual">("monthly");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="text-center pt-20 pb-10 px-6 relative overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] glow-violet pointer-events-none" />
        <div className="relative z-10">
          <div className="section-label">Pricing</div>
          <div className="section-title">
            Simple pricing.<br />Serious results.
          </div>
          <p className="text-il-gray-light text-[17px] max-w-[480px] mx-auto mb-8 leading-relaxed">
            Pay only for verified data. No credits wasted on bounced emails or invalid numbers.
          </p>
          <div className="inline-flex border border-il-border rounded-lg overflow-hidden">
            <button
              onClick={() => setPeriod("monthly")}
              className={`px-5 py-2.5 text-sm font-medium transition-colors ${
                period === "monthly" ? "bg-il-dark2 text-il-white" : "text-il-gray-light"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setPeriod("annual")}
              className={`px-5 py-2.5 text-sm font-medium transition-colors flex items-center gap-2 ${
                period === "annual" ? "bg-il-dark2 text-il-white" : "text-il-gray-light"
              }`}
            >
              Annual <span className="bg-il-green/20 text-il-green text-[10px] font-bold px-2 py-0.5 rounded">SAVE 20%</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-[1100px] mx-auto px-6 pb-20">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`bg-card border rounded-2xl p-7 relative ${
              plan.featured ? "border-il-violet shadow-[0_0_40px_rgba(124,58,237,0.15)]" : "border-il-border"
            }`}
          >
            {plan.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-il-violet text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
            )}
            <div className={`text-sm font-semibold mb-2 ${plan.featured ? "text-il-violet" : "text-il-white"}`}>{plan.name}</div>
            {plan.monthly !== null ? (
              <div className="font-display text-5xl font-extrabold text-il-white mb-2">
                <sup className="text-xl">$</sup>
                {period === "annual" ? plan.annual : plan.monthly}
                <sub className="text-base font-normal text-il-gray-light">/mo</sub>
              </div>
            ) : (
              <div className="font-display text-4xl font-extrabold text-il-white mb-2 pt-2 pb-2">Custom</div>
            )}
            <div className="text-sm text-il-gray-light mb-5">{plan.desc}</div>
            <button className={`w-full py-3 text-sm font-semibold rounded-lg transition-all mb-1 ${plan.ctaStyle}`}>
              {plan.cta}
            </button>
            <div className="text-center text-xs text-il-gray-light mb-5">
              {plan.monthly !== null ? "No credit card required" : "Talk to us today"}
            </div>
            <hr className="border-il-border mb-5" />
            {plan.features.map((f, i) => (
              <div key={i} className="flex items-start gap-2 mb-2.5 text-sm">
                <span className={f.included ? "text-il-green" : "text-il-gray-mid"}>
                  {f.included ? "✓" : "–"}
                </span>
                <span className={f.included ? "text-il-gray-light" : "text-il-gray-mid"}>
                  {f.bold ? <strong className="text-il-white">{f.text}</strong> : f.text}
                </span>
              </div>
            ))}
            <div className="mt-5 text-xs text-il-gray-light italic leading-relaxed border-t border-il-border pt-4">
              {plan.quote}
            </div>
          </div>
        ))}
      </div>

      {/* Credit explanation */}
      <div className="max-w-[800px] mx-auto px-6 pb-16">
        <div className="bg-card border border-il-border rounded-[14px] p-7 border-l-[3px] border-l-il-violet">
          <h3 className="font-display text-lg font-bold mb-2.5">💡 What counts as a credit?</h3>
          <p className="text-sm text-il-gray-light leading-relaxed mb-3">
            1 credit = 1 verified email address <em>or</em> 1 verified mobile number. You only pay when we successfully return a verified result.
          </p>
          <div className="flex gap-5 flex-wrap">
            {[
              ["500 contacts", "= 500 credits max"],
              ["Email only", "= 1 credit per email"],
              ["Email + Mobile", "= 2 credits per person"],
            ].map(([title, sub]) => (
              <div key={title} className="bg-il-dark2 rounded-lg px-4 py-3 text-sm">
                <strong className="text-il-white">{title}</strong>
                <br />
                <span className="text-il-gray-light">{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-[680px] mx-auto px-6 pb-20">
        <div className="section-title text-center" style={{ fontSize: "28px" }}>Frequently Asked Questions</div>
        {[
          { q: "How accurate is Inbound Labs data?", a: "Inbound Labs achieves 98% email deliverability through a 6-step verification pipeline. Data is refreshed weekly." },
          { q: "Is Inbound Labs GDPR compliant?", a: "Yes. Inbound Labs is fully GDPR compliant. Data Processing Agreements are available for all paid plans." },
          { q: "Can I cancel anytime?", a: "Yes. No annual contracts required. Cancel anytime from your dashboard. No cancellation fees." },
          { q: "Do unused credits roll over?", a: "Credits reset monthly. We recommend choosing a plan that matches your monthly usage. Upgrade or downgrade anytime." },
        ].map((faq, i) => (
          <FAQItem key={i} q={faq.q} a={faq.a} />
        ))}
      </div>

      <FAQSection />
      <Footer />
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-il-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left text-sm font-semibold text-il-white hover:text-il-violet transition-colors"
      >
        {q}
        <span className="text-il-gray-light text-lg ml-4">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="pb-5 text-sm text-il-gray-light leading-relaxed">{a}</div>
      )}
    </div>
  );
}
