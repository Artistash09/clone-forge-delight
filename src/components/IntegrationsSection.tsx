import { useState } from "react";
import { Link } from "react-router-dom";

const enrichData = [
  {
    header: "Full Name + Company",
    output: "Verified Email",
    rows: [
      ["Sarah Chen · Growth.io", "s.chen@growth.io ✓"],
      ["Mark Johnson · TechCorp", "m.johnson@techcorp.com ✓"],
      ["Emily Davis · Acme Inc", "e.davis@acme.co ✓"],
    ],
  },
  {
    header: "LinkedIn / Name",
    output: "Verified Mobile",
    rows: [
      ["James Wilson · Cloudify", "+1 (628) 555-0124 ✓"],
      ["Ana Martinez · Growthly", "+44 7700 900456 ✓"],
      ["Raj Patel · SaaSify", "+1 (415) 555-0187 ✓"],
    ],
  },
  {
    header: "Company Domain",
    output: "Job Title + Role",
    rows: [
      ["acme.io", "VP of Sales"],
      ["cloudify.com", "Head of Revenue"],
      ["growthly.io", "Director of Demand Gen"],
    ],
  },
];

const tabs = ["Emails from names", "Mobile numbers", "Job titles"];

const crmLogos = ["🔵", "⚡", "🟠", "🔶", "📊", "💬", "📧", "🔗"];

export default function IntegrationsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const data = enrichData[activeTab];

  return (
    <div className="bg-il-dark border-t border-b border-il-border">
      <div className="grid md:grid-cols-2 max-w-[1200px] mx-auto">
        {/* CRM */}
        <div className="p-12 md:p-16 md:border-r border-il-border">
          <h6 className="font-display text-xl font-bold mb-3 tracking-tight text-il-white">Push leads to your CRM in one click</h6>
          <p className="text-sm text-il-gray-light leading-relaxed mb-5">
            Connect HubSpot, Salesforce, Pipedrive, Outreach, and more. Contacts flow directly into your stack — no CSV exports, no manual entry.
          </p>
          <Link to="/pricing" className="text-il-violet text-sm font-semibold">View all integrations →</Link>
          <div className="flex flex-wrap gap-2.5 mt-7">
            {crmLogos.map((emoji, i) => (
              <div key={i} className="w-11 h-11 bg-card border border-il-border rounded-[10px] flex items-center justify-center text-lg hover:border-il-gray-mid hover:scale-105 transition-all cursor-pointer">
                {emoji}
              </div>
            ))}
          </div>
        </div>

        {/* Enrich */}
        <div className="p-12 md:p-16">
          <h6 className="font-display text-xl font-bold mb-3 tracking-tight text-il-white">Enrich any data from any source</h6>
          <div className="flex border border-il-border rounded-lg overflow-hidden w-fit mb-5">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-2 text-sm transition-colors ${
                  i === activeTab ? "bg-il-dark2 text-il-white" : "text-il-gray-light hover:text-il-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="bg-card border border-il-border rounded-[10px] p-5">
            <div className="flex justify-between text-[11px] text-il-gray-light mb-2.5 pb-2 border-b border-il-border">
              <span>{data.header}</span>
              <span>{data.output}</span>
            </div>
            {data.rows.map((row, i) => (
              <div key={i} className={`flex justify-between items-center py-2 text-xs ${i < data.rows.length - 1 ? "border-b border-il-border/50" : ""}`}>
                <span className="text-il-text-muted">{row[0]}</span>
                <span className="text-il-green text-[11px]">{row[1]}</span>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link to="/pricing" className="text-il-violet text-sm font-semibold">Learn more →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
