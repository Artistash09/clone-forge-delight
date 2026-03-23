import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const comparisonRows = [
  { feature: "Data type", them: "Email only", us: "Email + Mobile + Intent", usWin: true, themLose: true },
  { feature: "Email verification", them: "Web scraping based", us: "6-step SMTP verification", usWin: true, themLose: true },
  { feature: "Mobile numbers", them: "✗", us: "60M direct dials", usWin: true, themLose: true },
  { feature: "Intent data", them: "✗", us: "✓ (Growth+)", usWin: true, themLose: true },
  { feature: "Job change alerts", them: "✗", us: "✓ (Growth+)", usWin: true, themLose: true },
  { feature: "Bulk enrichment", them: "✓ (email only)", us: "✓ (email + mobile + company)", usWin: true, themLose: true },
  { feature: "Pricing", them: "From $49/mo", us: "From $49/mo", usWin: false, themLose: false },
  { feature: "Domain search", them: "✓", us: "✓", usWin: false, themLose: false },
  { feature: "Chrome extension", them: "✓", us: "✓", usWin: false, themLose: false },
];

export default function VsHunter() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-10 px-6 text-center max-w-[900px] mx-auto">
        <div className="inline-block bg-il-green/10 border border-il-green/30 rounded-full px-5 py-2 text-green-400 text-sm font-semibold mb-6">
          ✓ Beyond email. Verified mobiles + intent data included.
        </div>
        <h1 className="section-title">Inbound Labs vs Hunter.io</h1>
        <p className="text-il-gray-light text-[16px] leading-relaxed mt-4">
          Hunter.io is email-only — no mobile numbers, no intent data. Hunter's data is based on web scraping; ours is actively verified. For teams who need more than just emails, Inbound Labs is the natural upgrade.
        </p>
      </div>

      <div className="max-w-[900px] mx-auto px-6 py-12">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-il-border">
                <th className="text-left text-sm text-il-gray-light font-semibold py-3 px-4 w-[35%]">Feature</th>
                <th className="text-center text-sm text-il-gray-light font-semibold py-3 px-4">Hunter.io</th>
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
        <h2 className="section-title" style={{ fontSize: "28px" }}>Where Hunter.io still wins</h2>
        <p className="text-il-gray-light text-sm mb-6">We believe in honest comparisons:</p>
        <div className="space-y-4">
          {[
            "Hunter's domain search is best-in-class for finding all emails at a company",
            "Hunter has a clean, focused UI that's hard to beat for email-only workflows",
            "Hunter's email verification tool works as a standalone service",
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
            { emoji: "📱", title: "Teams who need mobile numbers", desc: "Hunter doesn't have them. We have 60M direct dials with a 30% pick-up rate." },
            { emoji: "🎯", title: "Sales teams doing outbound", desc: "Email-only outreach has declining response rates. Multi-channel (email + phone) is the standard now." },
            { emoji: "📊", title: "Teams wanting intent data", desc: "Know who's actively researching your category. Hunter can't tell you that." },
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
