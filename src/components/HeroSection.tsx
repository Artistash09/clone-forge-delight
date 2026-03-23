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
          <span className="text-amber-400">★★★★★</span>
          <span className="text-il-white font-semibold">4.8</span>
          <span className="text-il-border">|</span>
          <span className="text-il-text-muted">40,000 users</span>
          <span className="text-il-border">|</span>
          <span className="text-il-violet text-[11px]">✓ GDPR</span>
        </div>

        <h1 className="font-display font-extrabold leading-[1.02] mb-6 text-il-white" style={{ fontSize: "clamp(48px, 7.5vw, 92px)", letterSpacing: "-2.5px" }}>
          Find Leads That<br />Actually Buy.
        </h1>

        <p className="text-lg text-il-gray-light max-w-[520px] mx-auto mb-9 leading-relaxed">
          Access 280M verified B2B contacts. Built for teams who close, not just prospect.
        </p>

        <div className="flex items-center justify-center gap-3.5 mb-16 flex-wrap">
          <Link to="/pricing" className="bg-il-violet text-primary-foreground px-7 py-3.5 text-base font-semibold rounded-[10px] hover:bg-il-violet-light transition-all hover:-translate-y-0.5 inline-flex items-center gap-2">
            Start Free — No CC Needed
          </Link>
          <Link to="/database" className="bg-transparent text-il-white border border-il-border px-7 py-3.5 text-base font-semibold rounded-[10px] hover:bg-il-dark2 transition-colors">
            See How It Works →
          </Link>
        </div>

        {/* Dashboard preview */}
        <div className="relative max-w-[1100px] mx-auto rounded-t-2xl overflow-hidden border border-il-border border-b-0 bg-card">
          <div className="w-full h-[300px] md:h-[500px] bg-gradient-to-b from-il-dark2 to-background flex items-center justify-center relative overflow-hidden">
            <div className="w-[92%] h-[90%] relative flex overflow-hidden">
              {/* Sidebar */}
              <div className="hidden md:block w-[180px] flex-shrink-0 h-full bg-il-dark border-r border-il-border rounded-l p-4">
                <div className="flex items-center gap-1.5 mb-4">
                  <span className="font-display text-[11px] font-bold text-il-violet-light">inbound labs</span>
                </div>
                {[
                  { icon: "🔍", label: "Search", active: true },
                  { icon: "👥", label: "My Lists", active: false },
                  { icon: "📧", label: "Enrichment", active: false },
                  { icon: "📊", label: "Intent Data", active: false },
                  { icon: "🔌", label: "Integrations", active: false },
                  { icon: "⚙️", label: "Settings", active: false },
                ].map((item) => (
                  <div key={item.label} className={`px-2.5 py-2 rounded-md mb-1 text-xs ${item.active ? "bg-il-dark2 text-il-white" : "text-il-gray-light"}`}>
                    {item.icon} {item.label}
                  </div>
                ))}
                <div className="absolute bottom-5 left-4 right-4">
                  <div className="bg-il-dark2 border border-il-border rounded-lg p-2.5">
                    <div className="text-[10px] text-il-gray-light mb-1.5">Credits remaining</div>
                    <div className="h-[5px] bg-il-dark rounded-full overflow-hidden mb-1">
                      <div className="w-[62%] h-full bg-il-violet rounded-full"></div>
                    </div>
                    <div className="text-[10px] text-il-gray-light">1,240 / 2,000</div>
                  </div>
                </div>
              </div>
              {/* Main area */}
              <div className="flex-1 min-w-0 p-3.5">
                <div className="flex gap-2 mb-3.5">
                  <div className="flex-1 h-[34px] bg-il-dark2 border border-il-border rounded-md flex items-center px-3">
                    <span className="text-xs text-il-gray-light">🔍 {placeholder || "Search VP Sales, SaaS, United States…"}</span>
                  </div>
                  <div className="h-[34px] w-[80px] bg-il-dark2 border border-il-border rounded-md flex items-center justify-center text-xs text-il-gray-light">Filters ⌄</div>
                  <div className="h-[34px] w-[70px] bg-il-violet rounded-md flex items-center justify-center text-xs text-primary-foreground font-semibold">Export</div>
                </div>
                <div className="flex gap-1.5 mb-3">
                  {["SaaS ×", "VP Level ×", "US & Canada ×"].map((f) => (
                    <span key={f} className="text-[10px] bg-il-violet/10 border border-il-violet/30 text-il-violet px-3 py-1 rounded-full">{f}</span>
                  ))}
                  <span className="text-[10px] bg-il-dark2 border border-il-border text-il-gray-light px-3 py-1 rounded-full">+ Add Filter</span>
                </div>
                <div className="grid grid-cols-[40px_1fr_1fr_1fr] md:grid-cols-[40px_1fr_1fr_1fr_1fr] gap-2 px-2.5 py-2 border-b border-il-border text-[11px] text-il-gray-light">
                  <div></div><div>Name / Title</div><div>Company</div><div>Email</div><div className="hidden md:block">Mobile</div>
                </div>
                {[
                  { email: "j.chen@cloudco.io ✓" },
                  { email: "m.ross@growthly.com ✓" },
                  { email: "a.patel@scale.io ✓" },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-[40px_1fr_1fr_1fr] md:grid-cols-[40px_1fr_1fr_1fr_1fr] gap-2 px-2.5 py-2.5 border-b border-il-border/50 items-center">
                    <div className="w-7 h-7 rounded-full bg-il-violet/20" />
                    <div><div className="h-3 w-24 bg-il-dark2 rounded mb-1"></div><div className="h-2 w-16 bg-il-dark rounded"></div></div>
                    <div><div className="h-3 w-20 bg-il-dark2 rounded"></div></div>
                    <div className="text-[10px] text-il-green">{row.email}</div>
                    <div className="hidden md:block h-5 w-[50px] bg-il-green/10 border border-il-green/30 rounded text-[10px] text-il-green flex items-center justify-center">✓</div>
                  </div>
                ))}
                <div className="grid grid-cols-[40px_1fr_1fr_1fr] md:grid-cols-[40px_1fr_1fr_1fr_1fr] gap-2 px-2.5 py-2.5 items-center opacity-40">
                  <div className="w-7 h-7 rounded-full bg-il-dark2" />
                  <div><div className="h-3 w-24 bg-il-dark2 rounded"></div></div>
                  <div><div className="h-3 w-20 bg-il-dark2 rounded"></div></div>
                  <div><div className="h-3 w-28 bg-il-dark2 rounded"></div></div>
                  <div className="hidden md:block h-5 w-[50px] bg-il-dark2 rounded"></div>
                </div>
              </div>
            </div>
            {/* Floating popup */}
            <div className="absolute bottom-10 right-5 hidden md:block bg-card border border-il-border rounded-xl p-4 min-w-[240px] shadow-[0_20px_60px_rgba(0,0,0,0.6)]" style={{ animation: "floatPopup 6s ease-in-out infinite" }}>
              <div className="text-xs text-il-green font-medium mb-1">✓ Email verified</div>
              <div className="text-sm text-il-green font-semibold mb-2">sarah.chen@growthco.io</div>
              <div className="flex justify-between items-center text-[11px] mb-2">
                <span className="text-il-gray-light">Direct mobile</span>
                <span className="text-il-green">+1 (628) 555-0192 ✓</span>
              </div>
              <div className="pt-2 border-t border-il-border flex gap-2">
                <div className="flex-1 bg-il-violet rounded-md py-1.5 text-center text-[10px] text-primary-foreground font-semibold cursor-pointer">Save to List</div>
                <div className="flex-1 bg-il-dark2 border border-il-border rounded-md py-1.5 text-center text-[10px] text-il-gray-light cursor-pointer">Push to CRM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
