import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const comparisonRows = [
  { feature: "Email accuracy", them: "~92%", us: "98% verified", usWin: true, themLose: true },
  { feature: "Mobile coverage (US)", them: "~35M (EU-focused)", us: "60M (strong US + EU)", usWin: true, themLose: true },
  { feature: "US mid-market coverage", them: "Weaker", us: "40% more mobiles", usWin: true, themLose: true },
  { feature: "Pricing transparency", them: "Custom quote required", us: "From $49/mo, self-serve", usWin: true, themLose: true },
  { feature: "Data refresh frequency", them: "Monthly", us: "Weekly", usWin: true, themLose: true },
  { feature: "Free trial", them: "✗ (demo only)", us: "✓ 50 free credits", usWin: true, themLose: true },
  { feature: "GDPR compliant", them: "✓", us: "✓", usWin: false, themLose: false },
  { feature: "Chrome extension", them: "✓", us: "✓", usWin: false, themLose: false },
  { feature: "Intent data", them: "✓", us: "✓ (Growth+)", usWin: false, themLose: false },
];

export default function VsCognism() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-10 px-6 text-center max-w-[900px] mx-auto">
        <div className="inline-block bg-il-green/10 border border-il-green/30 rounded-full px-5 py-2 text-green-400 text-sm font-semibold mb-6">
          ✓ Stronger US coverage. Transparent pricing. No custom quotes.
        </div>
        <h1 className="section-title">Inbound Labs vs Cognism</h1>
        <p className="text-il-gray-light text-[16px] leading-relaxed mt-4">
          Cognism is strong in EU/UK but weaker in US mid-market. Inbound Labs covers North America with 40% more mobile numbers. Cognism pricing requires a custom quote; we're transparent from day one.
        </p>
      </div>

      <div className="max-w-[900px] mx-auto px-6 py-12">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-il-border">
                <th className="text-left text-sm text-il-gray-light font-semibold py-3 px-4 w-[35%]">Feature</th>
                <th className="text-center text-sm text-il-gray-light font-semibold py-3 px-4">Cognism</th>
                <th className="text-center text-sm font-semibold py-3 px-4 bg-il-violet/10 text-il-violet-light">Inbound Labs</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={i} className={`border-b border-il-border ${i % 2 === 1 ? "bg-il-violet/[0.02]" : ""}`}>
                  <td className="text-sm text-il-gray-light py-3 px-4">{row.feature}</td>
                  <td className={`text-sm text-center py-3 px-4 ${row.themLose ? "text-red-400" : "text-il-gray-light"}`}>{row.them}</td>
                  <td className={`text-sm text-center py-3 px-4 bg-il-violet/[0.03] ${row.usWin ? "text-green-400 font-semibold" : "text-il-gray-light"}`}>
                    {row.us} {row.usWin && "✓"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-6 py-12">
        <h2 className="section-title" style={{ fontSize: "28px" }}>Where Cognism still wins</h2>
        <p className="text-il-gray-light text-sm mb-6">We believe in honest comparisons:</p>
        <div className="space-y-4">
          {[
            "Cognism has deeper European phone-verified mobile data (Diamond Data®)",
            "Cognism's intent data partnerships (Bombora) are more mature",
            "Cognism has stronger compliance tooling for EU-specific regulations",
          ].map((point) => (
            <div key={point} className="flex gap-3 items-start">
              <span className="text-il-gray-light mt-0.5">•</span>
              <p className="text-il-gray-light text-sm leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-6 py-12">
        <h2 className="section-title" style={{ fontSize: "28px" }}>Who should switch</h2>
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {[
            { emoji: "🇺🇸", title: "US-focused teams", desc: "If your ICP is North American, Inbound Labs has significantly better coverage and more direct dials." },
            { emoji: "💰", title: "Budget-conscious teams", desc: "Cognism requires custom pricing. We start at $49/mo with no sales call required." },
            { emoji: "⚡", title: "Fast-moving startups", desc: "Self-serve signup, instant access, and 50 free credits to validate before you commit." },
          ].map((card) => (
            <div key={card.title} className="bg-il-dark2 border border-il-border rounded-xl p-6">
              <div className="text-3xl mb-3">{card.emoji}</div>
              <h3 className="text-il-white font-semibold text-[15px] mb-2">{card.title}</h3>
              <p className="text-il-gray-light text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-il-dark border-t border-il-border py-16 px-6 text-center mt-12">
        <h2 className="section-title" style={{ fontSize: "28px" }}>Try Inbound Labs free — no credit card, no sales call</h2>
        <Link to="/pricing" className="inline-block mt-6 bg-il-violet hover:bg-il-violet-light text-white font-semibold px-8 py-3.5 rounded-lg transition-colors">
          Start Free
        </Link>
      </div>
      <Footer />
    </div>
  );
}
