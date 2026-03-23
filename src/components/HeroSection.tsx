import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const searches = [
  "VPs of Sales at SaaS companies in the US...",
  "CTOs at Series B startups in Europe...",
  "Heads of Marketing at E-commerce brands...",
  "Founders at HR tech with 50–200 employees...",
  "Revenue leaders at FinTech companies...",
];

export default function HeroSection() {
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    let idx = 0, charIdx = 0, typing = true;
    const interval = setInterval(() => {
      const target = searches[idx];
      if (typing) {
        charIdx++;
        if (charIdx > target.length) { typing = false; return; }
      } else {
        charIdx--;
        if (charIdx < 0) { charIdx = 0; typing = true; idx = (idx + 1) % searches.length; }
      }
      setPlaceholder(target.slice(0, charIdx));
    }, typing ? 55 : 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-20 md:pt-28 pb-0 text-center overflow-hidden px-6">
      <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[900px] glow-violet pointer-events-none" />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-card border border-il-border rounded-full px-4 py-1.5 text-sm mb-7 text-il-text-muted">
          <span className="text-amber-400">★★★★★</span> 4.8 on G2 · Rated #1 in accuracy
        </div>

        <h1 className="font-display font-extrabold leading-[1.02] mb-6 text-il-white" style={{ fontSize: "clamp(48px, 7.5vw, 92px)", letterSpacing: "-2.5px" }}>
          Find Leads That<br />Actually Buy
        </h1>

        <p className="text-lg text-il-gray-light max-w-[520px] mx-auto mb-9 leading-relaxed">
          Access 280M verified B2B contacts. Find verified emails and direct mobiles for your ideal customers. 98% deliverability. Start free.
        </p>

        <div className="flex items-center justify-center gap-3.5 mb-16 flex-wrap">
          <Link to="/pricing" className="bg-il-violet text-primary-foreground px-7 py-3.5 text-base font-semibold rounded-[10px] hover:bg-il-violet-light transition-all hover:-translate-y-0.5 inline-flex items-center gap-2">
            Start Free Trial →
          </Link>
          <button className="bg-transparent text-il-white border border-il-border px-7 py-3.5 text-base font-semibold rounded-[10px] hover:bg-il-dark2 transition-colors">
            Contact Sales
          </button>
        </div>

        {/* Dashboard preview */}
        <div className="relative max-w-[1100px] mx-auto rounded-t-2xl overflow-hidden border border-il-border border-b-0 bg-card">
          <div className="w-full h-[300px] md:h-[500px] bg-gradient-to-b from-il-dark2 to-background flex items-center justify-center relative overflow-hidden">
            <div className="w-[92%] h-[90%] relative flex overflow-hidden">
              {/* Sidebar */}
              <div className="hidden md:block w-[180px] flex-shrink-0 h-full bg-il-dark border-r border-il-border rounded-l p-4">
                {["Dashboard", "Contacts", "Companies", "Lists", "Enrichment"].map((item, i) => (
                  <div key={item} className={`px-2.5 py-2 rounded-md mb-1 text-xs ${i === 1 ? "bg-il-dark2 text-il-white" : "text-il-gray-light"}`}>
                    {item}
                  </div>
                ))}
              </div>
              {/* Main area */}
              <div className="flex-1 min-w-0 p-3.5">
                <div className="flex gap-2 mb-3.5">
                  <div className="flex-1 h-[34px] bg-il-dark2 border border-il-border rounded-md flex items-center px-3">
                    <span className="text-xs text-il-gray-light">{placeholder || "Search contacts..."}</span>
                  </div>
                  <div className="h-[34px] w-[90px] bg-il-violet rounded-md opacity-90 flex-shrink-0 flex items-center justify-center text-xs text-primary-foreground font-semibold">Search</div>
                </div>
                <div className="grid grid-cols-[40px_1fr_1fr_1fr] md:grid-cols-[40px_1fr_1fr_1fr_1fr] gap-2 px-2.5 py-2 border-b border-il-border text-[11px] text-il-gray-light">
                  <div></div><div>Name</div><div>Company</div><div className="hidden md:block">Title</div><div>Status</div>
                </div>
                {[
                  { name: "Sarah Chen", company: "Growth.io", title: "VP Sales", verified: true },
                  { name: "Mark Johnson", company: "TechCorp", title: "CTO", verified: true },
                  { name: "Emily Davis", company: "Acme Inc", title: "Head of Marketing", verified: true },
                  { name: "James Wilson", company: "Cloudify", title: "Founder", verified: true },
                  { name: "Ana Martinez", company: "SaaS.co", title: "Director RevOps", verified: true },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-[40px_1fr_1fr_1fr] md:grid-cols-[40px_1fr_1fr_1fr_1fr] gap-2 px-2.5 py-2.5 border-b border-il-border/50 items-center">
                    <div className="w-7 h-7 rounded-full bg-il-gray" />
                    <div className="text-xs text-il-white truncate">{row.name}</div>
                    <div className="text-xs text-il-gray-light truncate">{row.company}</div>
                    <div className="text-xs text-il-gray-light truncate hidden md:block">{row.title}</div>
                    <div className="h-[22px] w-[60px] rounded bg-il-green/15 border border-il-green/30 flex items-center justify-center text-[10px] text-il-green">
                      ✓ Verified
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Floating popup */}
            <div className="absolute bottom-10 right-5 hidden md:block bg-card border border-il-border rounded-xl p-4 min-w-[240px] shadow-[0_20px_60px_rgba(0,0,0,0.6)]" style={{ animation: "floatPopup 6s ease-in-out infinite" }}>
              <div className="text-xs text-il-text-muted mb-2">Email found</div>
              <div className="text-sm text-il-green font-semibold mb-2">s.chen@growth.io</div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-il-gray-light">Confidence: 98%</span>
                <span className="text-il-green">✓ Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
