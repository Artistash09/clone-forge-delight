import { useState } from "react";
import { Link } from "react-router-dom";

const enrichData = [
  {
    header: "Full Name + Company",
    output: "Enriched Output",
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

export default function IntegrationsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const data = enrichData[activeTab];

  return (
    <div className="bg-il-dark border-t border-b border-il-border">
      <div className="grid md:grid-cols-2 max-w-[1200px] mx-auto">
        {/* Integrations */}
        <div className="p-12 md:p-16 md:border-r border-il-border">
          <div className="section-label">Integrations</div>
          <h6 className="font-display text-xl font-bold mb-3 tracking-tight text-il-white">Plug into your entire stack in minutes</h6>
          <p className="text-sm text-il-gray-light leading-relaxed mb-5">
            Connect Inbound Labs to every tool your team already uses. Push verified data directly into your CRM, sequencer, or custom workflow — no manual exports.
          </p>
          <Link to="/database" className="text-il-violet text-sm font-semibold">Explore all integrations →</Link>
          <div className="flex flex-wrap gap-2.5 mt-7">
            {[
              { abbr: "HS", title: "HubSpot", color: "text-orange-400" },
              { abbr: "SF", title: "Salesforce", color: "text-blue-400" },
              { abbr: "OR", title: "Outreach", color: "text-purple-400" },
              { abbr: "SL", title: "Salesloft", color: "text-teal-400" },
              { abbr: "AP", title: "Apollo", color: "text-indigo-400" },
              { abbr: "ZP", title: "Zapier", color: "text-orange-300" },
              { abbr: "MK", title: "Make", color: "text-violet-400" },
              { abbr: "CL", title: "Clay", color: "text-pink-400" },
              { abbr: "PD", title: "Pipedrive", color: "text-green-400" },
              { abbr: "SL", title: "Slack", color: "text-yellow-400" },
              { abbr: "GM", title: "Gmail", color: "text-red-400" },
              { abbr: "+18", title: "More", color: "text-il-gray-light" },
            ].map((logo, i) => (
              <div key={i} className="w-12 h-12 bg-il-dark2 border border-il-border rounded-[10px] flex flex-col items-center justify-center hover:border-il-violet/40 hover:scale-105 transition-all cursor-pointer" title={logo.title}>
                <span className={`text-[11px] font-bold ${logo.color}`}>{logo.abbr}</span>
                <span className="text-[8px] text-il-gray-light mt-0.5">{logo.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Data Enrichment */}
        <div className="p-12 md:p-16">
          <div className="section-label">Data Enrichment</div>
          <h6 className="font-display text-xl font-bold mb-3 tracking-tight text-il-white">Enrich any data from any source</h6>
          <div className="flex border border-il-border rounded-lg overflow-hidden w-fit mb-5">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-2 text-sm transition-colors ${
                  i === activeTab ? "bg-il-violet/10 text-il-violet-light" : "text-il-text-muted hover:text-il-white"
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
            <Link to="/database" className="text-il-violet text-sm font-semibold">Learn more →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
