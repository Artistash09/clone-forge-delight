import { useState } from "react";

const tabs = ["Sales Teams", "Agencies", "Founders", "RevOps"] as const;
type Tab = typeof tabs[number];

const content: Record<Tab, {
  quote: string;
  author: string;
  desc: string;
  bullets: { title: string; text: string }[];
  visual: React.ReactNode;
}> = {
  "Sales Teams": {
    quote: "Booked 40% more calls with the same team size.",
    author: "Henry Clayton, Allego",
    desc: "Stop prospecting blind. Find direct dials and verified emails for every VP of Sales, Head of RevOps, or CRO in your territory — before your competitor does.",
    bullets: [
      { title: "ICP Builder", text: "Filter 280M contacts by title, seniority, industry, headcount, revenue, and tech stack." },
      { title: "Verified Mobiles", text: "60M direct dials with a 30% average pick-up rate." },
      { title: "Job Change Alerts", text: "Get notified when a champion moves to a new company." },
    ],
    visual: (
      <div className="bg-il-dark2 border border-il-border rounded-xl p-5">
        <div className="text-xs uppercase tracking-widest text-il-gray-light mb-4">Live Pipeline</div>
        {[
          { name: "Sarah Chen", company: "Stripe", status: "Meeting Booked", color: "text-il-green" },
          { name: "Marcus Webb", company: "Notion", status: "Replied", color: "text-il-violet-light" },
          { name: "Lisa Park", company: "Gong", status: "Opened", color: "text-il-gray-light" },
        ].map((row) => (
          <div key={row.name} className="flex items-center justify-between py-2.5 border-b border-il-border last:border-0">
            <div>
              <div className="text-sm font-semibold text-il-white">{row.name}</div>
              <div className="text-xs text-il-gray-light">{row.company}</div>
            </div>
            <span className={`text-xs font-semibold ${row.color}`}>{row.status}</span>
          </div>
        ))}
      </div>
    ),
  },
  Agencies: {
    quote: "Scaled to $1M ARR in 18 months using Inbound Labs as our only data source.",
    author: "StackOptimise",
    desc: "Run high-volume outbound for multiple clients without juggling five tools. One platform, one data source, one monthly invoice.",
    bullets: [
      { title: "Multi-Client Lists", text: "Separate workspaces and credit pools for each client campaign." },
      { title: "White-Label Ready", text: "Export clean CSV data with your branding." },
      { title: "Bulk Enrichment", text: "Upload a list of names + companies, get verified emails and mobiles back in minutes." },
    ],
    visual: (
      <div className="bg-il-dark2 border border-il-border rounded-xl p-5">
        <div className="text-xs uppercase tracking-widest text-il-gray-light mb-4">Client Campaigns</div>
        {[
          { client: "Acme Corp", status: "Active", credits: "1,240" },
          { client: "TechFlow", status: "Active", credits: "890" },
          { client: "GrowthCo", status: "Paused", credits: "320" },
        ].map((row) => (
          <div key={row.client} className="flex items-center justify-between py-2.5 border-b border-il-border last:border-0">
            <div>
              <div className="text-sm font-semibold text-il-white">{row.client}</div>
              <div className="text-xs text-il-gray-light">{row.status}</div>
            </div>
            <span className="text-xs text-il-gray-light">{row.credits} credits</span>
          </div>
        ))}
      </div>
    ),
  },
  Founders: {
    quote: "Went from zero to 50 qualified calls in my first month.",
    author: "Founder, early-stage SaaS",
    desc: "You're the sales team. Make every outreach count. Find the exact decision-makers who would actually buy your product — not just anyone with a title.",
    bullets: [
      { title: "No Minimums", text: "Start with 50 free credits. Scale as you close." },
      { title: "Chrome Extension", text: "Find anyone's email on LinkedIn or any company website in one click." },
      { title: "GDPR Safe", text: "Send with confidence. Every contact is legally sourceable." },
    ],
    visual: (
      <div className="bg-il-dark2 border border-il-border rounded-xl p-5">
        <div className="text-xs uppercase tracking-widest text-il-gray-light mb-3">Chrome Extension</div>
        <div className="bg-il-dark border border-il-border rounded-lg p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-il-violet to-il-violet-light flex items-center justify-center text-sm">JD</div>
            <div>
              <div className="text-sm font-semibold text-il-white">Jane Doe</div>
              <div className="text-xs text-il-gray-light">VP Sales · Acme Inc</div>
            </div>
          </div>
          <div className="bg-il-dark2 rounded-md px-3 py-2 text-xs">
            <span className="text-il-gray-light">Email:</span>{" "}
            <span className="text-il-green font-semibold">jane.doe@acme.com ✓</span>
          </div>
        </div>
      </div>
    ),
  },
  RevOps: {
    quote: "CRM data was 40% stale. Inbound Labs cleaned it in 48 hours.",
    author: "Brigitta Ruha, Growth Today",
    desc: "Your CRM is only as good as the data inside it. Keep it clean, enriched, and up-to-date without manual work.",
    bullets: [
      { title: "CRM Enrichment", text: "Push verified emails, mobiles, and titles directly into HubSpot or Salesforce fields." },
      { title: "Duplicate Detection", text: "Identify and merge stale or duplicate contact records." },
      { title: "API Access", text: "Build automated enrichment workflows triggered by any CRM event." },
    ],
    visual: (
      <div className="bg-il-dark2 border border-il-border rounded-xl p-5">
        <div className="text-xs uppercase tracking-widest text-il-gray-light mb-3">CRM Enrichment</div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-il-dark border border-il-border rounded-lg p-3">
            <div className="text-[10px] uppercase tracking-widest text-destructive mb-2">Before</div>
            <div className="space-y-1.5 text-xs">
              <div><span className="text-il-gray-light">Email:</span> <span className="text-il-border">—</span></div>
              <div><span className="text-il-gray-light">Mobile:</span> <span className="text-il-border">—</span></div>
              <div><span className="text-il-gray-light">Title:</span> <span className="text-il-border">Unknown</span></div>
            </div>
          </div>
          <div className="bg-il-dark border border-il-violet/30 rounded-lg p-3">
            <div className="text-[10px] uppercase tracking-widest text-il-green mb-2">After</div>
            <div className="space-y-1.5 text-xs">
              <div><span className="text-il-gray-light">Email:</span> <span className="text-il-green">✓ verified</span></div>
              <div><span className="text-il-gray-light">Mobile:</span> <span className="text-il-green">✓ direct</span></div>
              <div><span className="text-il-gray-light">Title:</span> <span className="text-il-white">VP Sales</span></div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
};

export default function UseCasesTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("Sales Teams");
  const active = content[activeTab];

  return (
    <section className="py-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="section-label">Use Cases</div>
        <h2 className="section-title">Built for every team that does outbound</h2>

        <div className="flex border-b border-il-border mt-10 mb-10 gap-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-medium px-5 py-3 transition-colors ${
                activeTab === tab
                  ? "text-il-white border-b-2 border-il-violet"
                  : "text-il-gray-light hover:text-il-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="mb-6">
              <p className="text-il-white italic text-[17px] leading-relaxed mb-2">"{active.quote}"</p>
              <p className="text-il-gray-light text-sm">— {active.author}</p>
            </div>
            <p className="text-il-gray-light text-[15px] leading-relaxed mb-8">{active.desc}</p>
            <div className="space-y-5">
              {active.bullets.map((b, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-7 h-7 rounded-full bg-il-violet/20 text-il-violet-light flex items-center justify-center text-xs font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <div className="text-il-white text-sm font-semibold mb-0.5">{b.title}</div>
                    <div className="text-il-gray-light text-sm leading-relaxed">{b.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>{active.visual}</div>
        </div>
      </div>
    </section>
  );
}
