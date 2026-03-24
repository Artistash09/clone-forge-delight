const caseStudies = [
  { company: "Meritt", metric: "3×", desc: "Tripled weekly pipeline from $100K to $300K without adding a single headcount. Same team. Better data." },
  { company: "StackOptimise", metric: "$1M", desc: "$1M ARR in 18 months using Inbound Labs as the single data provider for all client and internal outbound." },
  { company: "Founder Led Sales", metric: "22%", desc: "Cold-call connect rate jumped from 5% to 22% with verified direct mobiles. Decision-makers answered." },
  { company: "GreyScout", metric: "2.5×", desc: "New SDRs ramped to quota in 4 weeks instead of 10. Had 15–20 real conversations in their first week." },
  { company: "Snyk", metric: "300%", desc: "Response rate tripled from 0.9% to 3.6%. 50 AEs prospecting part-time generated more pipeline than full-time before." },
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
              className={`p-7 cursor-pointer hover:bg-il-violet/5 transition-colors ${
                i < caseStudies.length - 1 ? "md:border-r border-il-border" : ""
              }`}
            >
              <div className="text-xs font-semibold text-il-gray-light uppercase tracking-wider mb-2">{cs.company}</div>
              <div className="font-display text-[40px] font-extrabold text-il-violet-light mb-1.5 tracking-tight leading-none">{cs.metric}</div>
              <div className="text-sm text-il-gray-light leading-relaxed mb-3">{cs.desc}</div>
              <div className="text-xs text-il-violet flex items-center gap-1">Read story →</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
