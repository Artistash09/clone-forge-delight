const caseStudies = [
  { company: "Meritt", metric: "3×", desc: "Weekly pipeline without adding headcount. Same team, three times the output in 60 days." },
  { company: "StackOptimise", metric: "$1M", desc: "ARR in 18 months trusting one data provider for all client campaigns and internal outbound." },
  { company: "Founder Led Sales", metric: "22%", desc: "Cold-call connect rate using verified direct mobiles. Up from 5%. Reached decision-makers directly." },
  { company: "GreyScout", metric: "2.5×", desc: "Faster quota ramp for new SDRs — 4 weeks instead of 10. 15–20 conversations in week one." },
  { company: "Snyk", metric: "300%", desc: "Email response rate increase with 50 AEs prospecting part-time. Data that actually works." },
];

export default function CaseStudiesSection() {
  return (
    <div className="py-20 px-6 md:px-10 bg-il-dark border-t border-il-border">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-[11px] font-bold uppercase tracking-[3px] text-il-gray-light mb-4">YOU'RE IN GOOD COMPANY</div>
        <div className="section-title max-w-[520px]">
          Companies generating real revenue<br />with Inbound Labs
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 mt-12 border border-il-border rounded-[14px] overflow-hidden">
          {caseStudies.map((cs, i) => (
            <div
              key={cs.company}
              className={`p-7 cursor-pointer hover:bg-card transition-colors ${
                i < caseStudies.length - 1 ? "border-r border-il-border" : ""
              }`}
            >
              <div className="text-xs font-semibold text-il-gray-light uppercase tracking-wider mb-2">{cs.company}</div>
              <div className="font-display text-[40px] font-extrabold text-il-white mb-1.5 tracking-tight leading-none">{cs.metric}</div>
              <div className="text-sm text-il-gray-light leading-relaxed mb-3">{cs.desc}</div>
              <div className="text-xs text-il-violet flex items-center gap-1">Read story →</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
