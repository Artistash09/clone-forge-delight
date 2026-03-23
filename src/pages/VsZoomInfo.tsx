import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = ["Overview", "Data Quality", "Pricing", "Integrations", "Mobile Numbers", "Who Should Switch"];

const comparisonRows = [
  { feature: "Email accuracy", zi: "~85% (self-reported)", il: "98% verified", ilWin: true, ziLose: true },
  { feature: "Mobile number coverage", zi: "~25M", il: "60M direct dials", ilWin: true, ziLose: true },
  { feature: "Data refresh frequency", zi: "Quarterly", il: "Weekly", ilWin: true, ziLose: true },
  { feature: "Pricing", zi: "$15,000+/yr (enterprise sales call required)", il: "From $49/mo, self-serve", ilWin: true, ziLose: true },
  { feature: "Free trial", zi: "✗", il: "✓ 50 free credits", ilWin: true, ziLose: true },
  { feature: "GDPR compliant", zi: "✓", il: "✓", ilWin: false, ziLose: false },
  { feature: "API access", zi: "Enterprise only", il: "All paid plans", ilWin: true, ziLose: true },
  { feature: "Chrome extension", zi: "✓", il: "✓", ilWin: false, ziLose: false },
  { feature: "Contract lock-in", zi: "Annual contract required", il: "Cancel anytime", ilWin: true, ziLose: true },
];

const switchCards = [
  { emoji: "🎯", title: "SMBs and growth-stage teams", desc: "ZoomInfo's minimum $15k/yr contract is too expensive when you're still validating your ICP." },
  { emoji: "🔄", title: "Teams burned by stale data", desc: "If your bounce rate is above 5%, your data vendor is the problem." },
  { emoji: "🚀", title: "Agencies and founders", desc: "Self-serve access, no sales calls, and transparent pricing matter when you're moving fast." },
];

export default function VsZoomInfo() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-20 pb-10 px-6 text-center max-w-[900px] mx-auto">
        <div className="inline-block bg-il-green/10 border border-il-green/30 rounded-full px-5 py-2 text-green-400 text-sm font-semibold mb-6">
          ✓ Better data quality. Lower price. No contract.
        </div>
        <h1 className="section-title">Inbound Labs vs ZoomInfo: The Honest Comparison</h1>
        <p className="text-il-gray-light text-[16px] leading-relaxed mt-4">
          ZoomInfo built its reputation in 2015. The B2B data market has changed. Here's how they stack up today.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {sections.map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(/ /g, "-")}`}
              className="bg-il-dark2 border border-il-border rounded-full px-4 py-2 text-xs font-medium text-il-gray-light hover:text-il-white hover:border-il-violet/30 transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div id="overview" className="max-w-[900px] mx-auto px-6 py-12">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-il-border">
                <th className="text-left text-sm text-il-gray-light font-semibold py-3 px-4 w-[35%]">Feature</th>
                <th className="text-center text-sm text-il-gray-light font-semibold py-3 px-4">ZoomInfo</th>
                <th className="text-center text-sm font-semibold py-3 px-4 bg-il-violet/10 text-il-violet-light">Inbound Labs</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={i} className={`border-b border-il-border ${i % 2 === 1 ? "bg-il-violet/[0.02]" : ""}`}>
                  <td className="text-sm text-il-gray-light py-3 px-4">{row.feature}</td>
                  <td className={`text-sm text-center py-3 px-4 ${row.ziLose ? "text-red-400" : "text-il-gray-light"}`}>{row.zi}</td>
                  <td className={`text-sm text-center py-3 px-4 bg-il-violet/[0.03] ${row.ilWin ? "text-green-400 font-semibold" : "text-il-gray-light"}`}>
                    {row.il} {row.ilWin && "✓"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Where ZoomInfo still wins */}
      <div className="max-w-[900px] mx-auto px-6 py-12">
        <h2 className="section-title" style={{ fontSize: "28px" }}>Where ZoomInfo still wins</h2>
        <p className="text-il-gray-light text-sm mb-6">We believe in honest comparisons. Here's where ZoomInfo has the edge:</p>
        <div className="space-y-4">
          {[
            "ZoomInfo has a larger total database (600M+ vs our 280M)",
            "ZoomInfo has more established enterprise integrations",
            "ZoomInfo's org chart / buying committee data is more detailed",
          ].map((point) => (
            <div key={point} className="flex gap-3 items-start">
              <span className="text-il-gray-light mt-0.5">•</span>
              <p className="text-il-gray-light text-sm leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Who Should Switch */}
      <div id="who-should-switch" className="max-w-[900px] mx-auto px-6 py-12">
        <h2 className="section-title" style={{ fontSize: "28px" }}>Who should switch</h2>
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {switchCards.map((card) => (
            <div key={card.title} className="bg-il-dark2 border border-il-border rounded-xl p-6">
              <div className="text-3xl mb-3">{card.emoji}</div>
              <h3 className="text-il-white font-semibold text-[15px] mb-2">{card.title}</h3>
              <p className="text-il-gray-light text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-il-dark border-t border-il-border py-16 px-6 text-center mt-12">
        <h2 className="section-title" style={{ fontSize: "28px" }}>Try Inbound Labs free — no credit card, no sales call</h2>
        <Link
          to="/pricing"
          className="inline-block mt-6 bg-il-violet hover:bg-il-violet-light text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
        >
          Start Free
        </Link>
      </div>

      <Footer />
    </div>
  );
}
