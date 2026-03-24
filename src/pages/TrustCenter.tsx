import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";

const complianceCards = [
  {
    emoji: "🇪🇺",
    title: "GDPR Compliance",
    body: "Full GDPR compliance under Article 6(1)(f) legitimate interest for B2B data. Data Processing Agreements available to all paid customers. EU-region data storage by default.",
    link: "Download DPA Template →",
  },
  {
    emoji: "🇺🇸",
    title: "CCPA Compliance",
    body: "California Consumer Privacy Act compliant. Data subject requests honored within 30 days. Do-not-sell and do-not-share registries maintained and updated daily.",
    link: "View CCPA Policy →",
  },
  {
    emoji: "🔒",
    title: "Data Security",
    body: "All data encrypted at rest (AES-256) and in transit (TLS 1.3). Penetration testing conducted annually. SOC 2 Type II audit in progress.",
    link: "Security Overview →",
  },
  {
    emoji: "📄",
    title: "Sub-Processors",
    body: "Full list of sub-processors disclosed. All contractually bound to equivalent data protection standards. Updated with 30 days notice when changes occur.",
    link: "View Sub-processors →",
  },
  {
    emoji: "👤",
    title: "Data Subject Rights",
    body: "We honor access, deletion, correction, and portability requests. Submit via our opt-out portal. Processed within 30 days. Enterprise customers get a dedicated privacy contact.",
    link: "Opt-Out Portal →",
  },
  {
    emoji: "🤝",
    title: "Enterprise DPA",
    body: "Enterprise customers can negotiate custom Data Processing Agreements. We support SCCs and custom addenda. Legal review support included.",
    link: "Contact Legal Team →",
  },
];

const securityChecklist = [
  "AES-256 encryption at rest",
  "TLS 1.3 encryption in transit",
  "Annual third-party penetration testing",
  "Role-based access controls (RBAC)",
  "Multi-factor authentication enforced",
  "SOC 2 Type II audit in progress",
  "99.9% uptime SLA (Enterprise)",
  "Automated vulnerability scanning",
  "No data sold to third parties — ever",
  "Right to erasure honored within 30 days",
  "EU data residency available",
  "Breach notification within 72 hours",
];

export default function TrustCenter() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-6 max-w-[900px] mx-auto">
        <div className="section-label inline-block mb-4">Trust Center</div>
        <h1 className="section-title text-4xl md:text-5xl mb-4">
          Security, Privacy & Compliance
        </h1>
        <p className="text-il-gray-light text-lg leading-relaxed mb-8 max-w-[700px]">
          Everything you need to evaluate Inbound Labs from a security, privacy,
          and compliance perspective. No gatekeeping — it&apos;s all here.
        </p>
        <div className="flex flex-wrap gap-3">
          {["✓ GDPR Compliant", "✓ SOC 2 Ready", "✓ CCPA Compliant"].map(
            (pill) => (
              <span
                key={pill}
                className="bg-il-dark2 border border-il-border rounded-full px-4 py-2 text-sm text-il-gray-light"
              >
                {pill}
              </span>
            )
          )}
        </div>
      </section>

      {/* Compliance Grid */}
      <section className="py-16 px-6 max-w-[1100px] mx-auto">
        <div className="grid md:grid-cols-3 gap-5">
          {complianceCards.map((card) => (
            <div
              key={card.title}
              className="bg-il-dark2 border border-il-border rounded-xl p-6"
            >
              <div className="text-2xl mb-3">{card.emoji}</div>
              <h3 className="text-il-white font-semibold text-[15px] mb-2">
                {card.title}
              </h3>
              <p className="text-il-gray-light text-sm leading-relaxed mb-4">
                {card.body}
              </p>
              <span className="text-il-violet text-sm font-semibold cursor-pointer hover:text-il-violet-light">
                {card.link}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Security Checklist */}
      <section className="bg-il-dark border-t border-b border-il-border py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <div className="section-label mb-3">Technical security</div>
          <h2 className="section-title text-3xl mb-10">
            Built secure from the ground up
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {securityChecklist.map((item) => (
              <div
                key={item}
                className="bg-il-dark2 border border-il-border rounded-lg px-4 py-3 flex items-center gap-3"
              >
                <span className="text-green-400">✓</span>
                <span className="text-il-gray-light text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="section-title text-3xl mb-6">
            Questions about compliance? Talk to our team.
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button className="bg-il-violet hover:bg-il-violet/90 text-white rounded-xl px-6 py-3 font-semibold">
              Book a Security Review
            </Button>
            <Button
              variant="outline"
              className="border-il-border text-il-gray-light hover:text-il-white rounded-xl px-6 py-3"
            >
              Download Trust Package
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
