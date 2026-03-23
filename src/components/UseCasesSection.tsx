import { useState } from "react";

const useCases = [
  {
    tab: "Sales Teams",
    emoji: "📈",
    metric: "+47%",
    metricLabel: "Meeting booking rate",
    metricSub: "Avg. result for sales teams in first 90 days",
    quote: '"We now reach buyers before they even talk to a competitor."',
    author: "— Felix Frank, Founder at StackOptimise",
    desc: "Sales teams book more meetings, waste less time on bad data, and close more pipeline with verified emails and direct mobile numbers.",
    features: [
      { title: "Talk to in-market buyers", desc: "Use buying intent, headcount growth, and tech filters to find companies actively evaluating your category." },
      { title: "Prospecting that takes minutes, not hours", desc: "Build targeted ICP lists in seconds, export clean data, and push directly to your sequencer without cleanup." },
      { title: "Pay only for verified contacts", desc: "Credits only deduct on verified emails and mobile numbers. No credits wasted on bounced or invalid data." },
    ],
  },
  {
    tab: "Outbound Agencies",
    emoji: "🏢",
    metric: "3×",
    metricLabel: "More client pipeline on same budget",
    metricSub: "Avg. result for agency clients",
    quote: '"Better data. Better results. Happier clients."',
    author: "— Outbound agency customers",
    desc: "Outbound agencies run better campaigns, keep bounce rates low, and show clients results they can actually point to.",
    features: [
      { title: "More replies for your clients", desc: "Better data means more opened emails, more positive replies, and better numbers in your monthly reports." },
      { title: "Protect deliverability across accounts", desc: "Verified contacts keep bounce rates low across all client campaigns so you stop rotating domains every month." },
      { title: "Best data at the best margins", desc: "Pay only for verified contacts at a lower price so you can protect client margins while delivering strong results." },
    ],
  },
  {
    tab: "Founders",
    emoji: "⚡",
    metric: "1 day",
    metricLabel: "To test a new audience & send",
    metricSub: "From zero to 1,000 verified contacts",
    quote: '"Find Your First 1,000 Customers — Fast."',
    author: "— Founder customers",
    desc: "Founders test new audiences, build targeted lists in minutes, and turn outbound into pipeline without hiring a lead gen team.",
    features: [
      { title: "Test a new audience in a day", desc: "Build a list of 1,000 verified contacts in minutes. Start conversations the same day." },
      { title: "Reach people who actually need you", desc: "Intent filters surface companies actively looking for your type of product right now." },
      { title: "Keep costs and runway low", desc: "Pay only for verified data. No wasted budget on bad lists or bounced campaigns." },
    ],
  },
  {
    tab: "RevOps",
    emoji: "🎯",
    metric: "100%",
    metricLabel: "Data standardization across teams",
    metricSub: "One source of truth for all reps",
    quote: '"One Source of Truth. Zero Data Debt."',
    author: "— RevOps customers",
    desc: "RevOps teams standardize data inputs, protect domain reputation, and give every rep a clear, consistent source of verified leads.",
    features: [
      { title: "Standardize GTM inputs", desc: "One verified source for all reps means performance depends on skills — not who bought which list." },
      { title: "Protect deliverability at scale", desc: "Verification checks keep bounce rates low across every sequence so domains stay healthy." },
      { title: "Clear cost per lead", desc: "Pay only for verified contacts at a predictable price. Easy to track CPL and forecast acquisition cost." },
    ],
  },
];

export default function UseCasesSection() {
  const [active, setActive] = useState(0);
  const uc = useCases[active];

  return (
    <section className="py-24 px-6 md:px-10 max-w-[1200px] mx-auto">
      <div className="section-label">Use Cases</div>
      <div className="section-title">
        Built for every team<br />that does outbound
      </div>

      <div className="flex border-b border-il-border mb-12 overflow-x-auto">
        {useCases.map((uc, i) => (
          <button
            key={uc.tab}
            onClick={() => setActive(i)}
            className={`px-6 py-3 text-sm font-medium whitespace-nowrap border-b-2 -mb-px transition-colors ${
              i === active
                ? "text-il-white border-il-violet"
                : "text-il-gray-light border-transparent hover:text-il-white"
            }`}
          >
            {uc.tab}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="bg-card border border-il-border rounded-[14px] h-[380px] flex items-center justify-center">
          <div className="text-center p-6">
            <div className="text-5xl mb-3">{uc.emoji}</div>
            <div className="font-display text-[40px] font-extrabold text-il-violet">{uc.metric}</div>
            <div className="text-sm text-il-gray-light mt-1">{uc.metricLabel}</div>
            <div className="mt-5 bg-il-dark2 rounded-lg p-3.5 text-xs text-il-gray-light">{uc.metricSub}</div>
          </div>
        </div>

        <div>
          <div className="font-display text-xl font-bold leading-snug mb-2 text-il-white tracking-tight">{uc.quote}</div>
          <div className="text-sm text-il-gray-light mb-5">{uc.author}</div>
          <div className="text-sm text-il-gray-light leading-relaxed mb-7">{uc.desc}</div>
          <ul>
            {uc.features.map((f, i) => (
              <li key={i} className={`flex gap-3 py-4 ${i < uc.features.length - 1 ? "border-b border-il-border" : ""}`}>
                <div className="font-display text-[11px] font-bold text-il-violet bg-il-violet/10 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="font-semibold text-il-white text-sm mb-1">{f.title}</div>
                  <div className="text-il-gray-light text-sm leading-relaxed">{f.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
