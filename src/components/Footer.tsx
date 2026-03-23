import { Link } from "react-router-dom";

const columns = [
  {
    title: "Platform",
    links: [
      { label: "B2B Database", path: "/database" },
      { label: "Email Finder", path: "/" },
      { label: "Mobile Numbers", path: "/" },
      { label: "Domain Search", path: "/" },
      { label: "Chrome Extension", path: "/chrome-extension" },
      { label: "Integrations", path: "/" },
      { label: "API Docs", path: "/" },
    ],
  },
  {
    title: "Use Cases",
    links: [
      { label: "For Sales Teams", path: "/" },
      { label: "For Agencies", path: "/" },
      { label: "For Founders", path: "/" },
      { label: "For RevOps", path: "/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", path: "/case-studies" },
      { label: "Our Data", path: "/our-data" },
      { label: "Blog", path: "/" },
      { label: "Trust Center", path: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Pricing", path: "/pricing" },
      { label: "Referral Program", path: "/" },
      { label: "Trust Center", path: "/" },
      { label: "Privacy Policy", path: "/" },
      { label: "Terms of Service", path: "/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-il-dark border-t border-il-border py-16 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 pb-12 border-b border-il-border">
          <div className="col-span-2">
            <Link to="/" className="font-display text-[17px] font-bold text-il-white flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-il-violet rounded-full inline-block" />
              inbound labs
            </Link>
            <div className="text-sm text-il-gray-light leading-relaxed mb-5 max-w-[280px]">
              Find leads that actually buy. Access 280M verified B2B contacts built for teams that close.
            </div>
            <div className="flex gap-2 flex-wrap mb-5">
              {["⭐ 4.8 G2", "✓ GDPR", "🔒 SOC2"].map((badge) => (
                <span key={badge} className="bg-card border border-il-border rounded-md px-2.5 py-1 text-[11px] text-il-gray-light">
                  {badge}
                </span>
              ))}
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-[11px] font-bold text-il-text-muted uppercase tracking-[2px] mb-4">{col.title}</div>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} className="text-sm text-il-gray-light hover:text-il-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-7 flex items-center justify-between flex-wrap gap-4">
          <div className="text-sm text-il-gray-light">2025 © Inbound Labs. All rights reserved.</div>
          <a href="#" className="text-sm text-il-gray-light hover:text-il-white transition-colors">Read reviews on G2 →</a>
        </div>
      </div>
    </footer>
  );
}
