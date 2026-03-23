import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const comparisonRows = [
  { feature: "Email accuracy", them: "~85% (reported)", us: "98% verified", usWin: true, themLose: true },
  { feature: "Verification method", them: "No real-time verification", us: "6-step SMTP verification", usWin: true, themLose: true },
  { feature: "Mobile coverage", them: "~30M", us: "60M direct dials", usWin: true, themLose: true },
  { feature: "Data freshness", them: "Unknown refresh cycle", us: "Weekly", usWin: true, themLose: true },
  { feature: "Pricing", them: "From $59/mo", us: "From $49/mo", usWin: true, themLose: true },
  { feature: "Chrome extension", them: "LinkedIn only", us: "LinkedIn + any website", usWin: true, themLose: true },
  { feature: "Free trial", them: "✓ (limited)", us: "✓ 50 free credits", usWin: false, themLose: false },
  { feature: "GDPR compliant", them: "✓", us: "✓", usWin: false, themLose: false },
  { feature: "API access", them: "✓", us: "✓", usWin: false, themLose: false },
];

export default function VsRocketReach() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-10 px-6 text-center max-w-[900px] mx-auto">
        <div className="inline-block bg-il-green/10 border border-il-green/30 rounded-full px-5 py-2 text-green-400 text-sm font-semibold mb-6">
          ✓ Verified data beats big data. 98% accuracy guaranteed.
        </div>
        <h1 className="section-title">Inbound Labs vs RocketReach</h1>
        <p className="text-il-gray-light text-[16px] leading-relaxed mt-4">
          RocketReach has 700M profiles but no real-time verification. Inbound Labs' SMTP verification means 98% deliverability vs RocketReach's reported 85%. Our Chrome extension works on LinkedIn, company websites, and any web page.
        </p>
      </div>

      <div className="max-w-[900px] mx-auto px-6 py-12">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-il-border">
                <th className="text-left text-sm text-il-gray-light font-semibold py-3 px-4 w-[35%]">Feature</th>
                <th className="text-center text-sm text-il-gray-light font-semibold py-3 px-4">RocketReach</th>
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
        <h2 className="section-title" style={{ fontSize: "28px" }}>Where RocketReach still wins</h2>
        <p className="text-il-gray-light text-sm mb-6">We believe in honest comparisons:</p>
        <div className="space-y-4">
          {[
            "RocketReach has a larger raw database (700M+ profiles vs our 280M)",
            "RocketReach covers more niche industries and non-tech verticals",
            "RocketReach's bulk lookup API has higher throughput limits",
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
            { emoji: "📧", title: "Teams with high bounce rates", desc: "RocketReach doesn't verify in real-time. If your emails are bouncing, the data is the problem." },
            { emoji: "📱", title: "Anyone who cold calls", desc: "Our 60M mobile numbers with 30% pick-up rate are 2× RocketReach's coverage." },
            { emoji: "🌐", title: "Chrome extension power users", desc: "Our extension works everywhere — LinkedIn, company sites, even blog author pages." },
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
