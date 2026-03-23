const companies = [
  "Salesforce", "HubSpot", "Stripe", "Notion", "Intercom", "Gong", "Outreach",
  "Salesloft", "Segment", "Drift", "Clearbit", "Apollo", "ZoomInfo", "Lavender",
  "Clay", "Pipedrive", "Loom", "Figma", "Linear", "Rippling",
];

export default function LogoTicker() {
  return (
    <div className="bg-il-dark border-t border-b border-il-border py-6 overflow-hidden">
      <div className="text-center mb-4">
        <span className="text-xs uppercase tracking-widest text-il-gray-light">Trusted by teams at</span>
      </div>
      <div className="flex ticker-animation" style={{ width: "max-content" }}>
        {[...companies, ...companies].map((name, i) => (
          <span
            key={i}
            className="bg-il-dark2 border border-il-border rounded-md px-3 py-1 text-xs font-semibold text-il-gray-light/60 mx-3 whitespace-nowrap"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
