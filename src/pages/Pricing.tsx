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
  const [reps, setReps] = useState(5);
  const [dealSize, setDealSize] = useState(15000);

  const extraMeetings = reps * 8;
  const pipelineAdded = Math.round(extraMeetings * (dealSize * 0.15));
  const roiPercent = Math.round(((pipelineAdded * 0.2) / 149) * 100);

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

      {/* Feature Comparison Table */}
      <div className="max-w-[1000px] mx-auto px-6 pb-16">
        <div className="text-center mb-10">
          <div className="section-label">Compare</div>
          <h2 className="section-title">Compare plans in detail</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-il-border">
                <th className="text-left text-sm text-il-gray-light font-semibold py-3 px-4 w-[40%]">Feature</th>
                <th className="text-center text-sm text-il-gray-light font-semibold py-3 px-4">Starter</th>
                <th className="text-center text-sm font-semibold py-3 px-4 bg-il-violet/10 border-x border-il-violet text-il-violet-light">Growth</th>
                <th className="text-center text-sm text-il-gray-light font-semibold py-3 px-4">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {[
                { category: "Credits & Usage", rows: [
                  ["Monthly credits", "500", "2,500", "Unlimited"],
                  ["Credit rollover", "✗", "3 months", "12 months"],
                  ["Bulk enrichment", "✗", "✓", "✓"],
                ]},
                { category: "Data Access", rows: [
                  ["Verified emails", "✓", "✓", "✓"],
                  ["Direct mobile numbers", "✓", "✓", "✓"],
                  ["Intent data filters", "✗", "✓", "✓"],
                  ["Job change alerts", "✗", "✓", "✓"],
                  ["Technographic filters", "✗", "✗", "✓"],
                ]},
                { category: "Integrations", rows: [
                  ["Chrome extension", "✓", "✓", "✓"],
                  ["HubSpot / Salesforce", "✗", "✓", "✓"],
                  ["API access", "✗", "10k calls/mo", "Unlimited"],
                  ["Zapier / Make", "✗", "✓", "✓"],
                  ["Custom integrations", "✗", "✗", "✓"],
                ]},
                { category: "Team & Support", rows: [
                  ["User seats", "1", "5", "Unlimited"],
                  ["Email support", "✓", "✓", "✓"],
                  ["Priority support", "✗", "✓", "✓"],
                  ["Dedicated CSM", "✗", "✗", "✓"],
                  ["SSO / SAML", "✗", "✗", "✓"],
                  ["SLA guarantee", "✗", "✗", "✓"],
                ]},
                { category: "Compliance", rows: [
                  ["GDPR compliant", "✓", "✓", "✓"],
                  ["DPA available", "✗", "✓", "✓"],
                  ["SOC 2 Type II", "✗", "✗", "✓"],
                ]},
              ].map((group) => (
                <>
                  <tr key={`cat-${group.category}`}>
                    <td colSpan={4} className="bg-il-dark2 text-il-gray-light text-xs uppercase tracking-widest font-semibold py-2.5 px-4">{group.category}</td>
                  </tr>
                  {group.rows.map((row, ri) => (
                    <tr key={`${group.category}-${ri}`} className={`border-b border-il-border ${ri % 2 === 1 ? "bg-il-violet/[0.02]" : ""}`}>
                      <td className="text-sm text-il-gray-light py-3 px-4">{row[0]}</td>
                      {[1, 2, 3].map((ci) => (
                        <td key={ci} className={`text-sm text-center py-3 px-4 ${ci === 2 ? "bg-il-violet/[0.03]" : ""}`}>
                          {row[ci] === "✓" ? (
                            <span className="text-green-400">✓</span>
                          ) : row[ci] === "✗" ? (
                            <span className="text-il-border">—</span>
                          ) : (
                            <span className="text-il-gray-light">{row[ci]}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="px-6">
        <div className="bg-il-dark border border-il-border rounded-2xl p-10 max-w-[900px] mx-auto my-16">
          <h2 className="section-title">Calculate your ROI</h2>
          <p className="text-il-gray-light text-sm mb-8">See what Inbound Labs is worth to your team before you pay a cent.</p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-il-white text-sm font-semibold">SDRs / sales reps</label>
                <span className="text-il-violet-light font-semibold text-sm">{reps} reps</span>
              </div>
              <input
                type="range"
                min={1}
                max={50}
                value={reps}
                onChange={(e) => setReps(Number(e.target.value))}
                className="w-full"
                style={{ accentColor: "hsl(var(--il-violet))" }}
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-il-white text-sm font-semibold">Average deal size ($)</label>
                <span className="text-il-violet-light font-semibold text-sm">${dealSize.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={1000}
                max={100000}
                step={1000}
                value={dealSize}
                onChange={(e) => setDealSize(Number(e.target.value))}
                className="w-full"
                style={{ accentColor: "hsl(var(--il-violet))" }}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-6">
            <div className="bg-background border border-il-border rounded-xl p-6 text-center">
              <div className="text-il-violet-light font-display text-4xl font-extrabold">{extraMeetings}</div>
              <div className="text-il-gray-light text-sm mt-2">Extra meetings/month</div>
            </div>
            <div className="bg-background border border-il-border rounded-xl p-6 text-center">
              <div className="text-il-violet-light font-display text-4xl font-extrabold">${pipelineAdded.toLocaleString()}</div>
              <div className="text-il-gray-light text-sm mt-2">Pipeline added/month</div>
            </div>
            <div className="bg-background border border-il-border rounded-xl p-6 text-center">
              <div className="text-il-violet-light font-display text-4xl font-extrabold">{roiPercent}%</div>
              <div className="text-il-gray-light text-sm mt-2">ROI on subscription</div>
            </div>
          </div>

          <p className="text-il-gray-light/50 text-xs text-center">Estimates based on average customer results. Actual results vary.</p>
        </div>
      </div>

      <FAQSection />
      <Footer />
    </div>
  );
}
