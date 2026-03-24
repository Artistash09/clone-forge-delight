import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function EmailFinder() {
  const [finderName, setFinderName] = useState("");
  const [finderDomain, setFinderDomain] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleFindEmail = () => {
    setIsLoading(true);
    setShowResult(false);
    setTimeout(() => {
      setIsLoading(false);
      setShowResult(true);
    }, 1200);
  };

  const generateEmail = () => {
    if (!finderName.trim() && !finderDomain.trim()) {
      return "s.chen@acme.com";
    }
    const nameParts = finderName.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts[nameParts.length - 1] || "";
    const firstInitial = firstName.charAt(0).toLowerCase();
    const lastNameLower = lastName.toLowerCase();
    const domain = finderDomain.trim() || "acme.com";
    return `${firstInitial}.${lastNameLower}@${domain}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 text-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139, 92, 246, 0.15), transparent)",
          }}
        />
        <div className="relative max-w-[900px] mx-auto px-6">
          <div className="section-label inline-block mb-4">Email Finder</div>
          <h1 className="section-title text-4xl md:text-5xl mb-4">
            Find Anyone&apos;s Work Email in Seconds
          </h1>
          <p className="text-il-gray-light text-lg max-w-[700px] mx-auto leading-relaxed">
            Enter a name and company domain. We verify using a 6-step pipeline —
            syntax, domain, MX record, SMTP handshake, catch-all detection, and
            activity scoring.
          </p>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="px-6 pb-16">
        <div className="max-w-[600px] mx-auto mt-10">
          <div className="bg-il-dark2 border border-il-border rounded-2xl overflow-hidden">
            {/* Header Bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-il-border">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                <span className="text-xs text-il-gray-light">
                  Email Finder — Live Demo
                </span>
              </div>
              <span className="text-xs text-green-400">✓ Free to try</span>
            </div>

            {/* Body */}
            <div className="p-6">
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <Input
                  placeholder="Full name (e.g. Sarah Chen)"
                  value={finderName}
                  onChange={(e) => setFinderName(e.target.value)}
                  className="bg-il-dark border-il-border text-il-white placeholder:text-il-gray-light flex-1"
                />
                <Input
                  placeholder="Company domain (e.g. acme.com)"
                  value={finderDomain}
                  onChange={(e) => setFinderDomain(e.target.value)}
                  className="bg-il-dark border-il-border text-il-white placeholder:text-il-gray-light flex-1"
                />
              </div>

              <Button
                onClick={handleFindEmail}
                disabled={isLoading}
                className="w-full bg-il-violet hover:bg-il-violet/90 text-white rounded-xl py-3 font-semibold"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Searching...
                  </span>
                ) : (
                  "Find Email →"
                )}
              </Button>

              {/* Result Section */}
              {showResult && (
                <div className="mt-6 pt-6 border-t border-il-border">
                  <div className="text-green-400 font-semibold text-lg mb-4">
                    {generateEmail()}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-400/10 border border-green-400/30 text-green-400 text-xs">
                      ✓ Verified
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-il-violet/10 border border-il-violet/30 text-il-violet text-xs">
                      97% confidence
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-il-gray/10 border border-il-gray/30 text-il-gray-light text-xs">
                      Direct · Not catch-all
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <Button className="bg-il-violet hover:bg-il-violet/90 text-white rounded-lg px-4 py-2 text-sm">
                      Save Contact →
                    </Button>
                    <Button
                      variant="outline"
                      className="border-il-border text-il-gray-light hover:text-il-white rounded-lg px-4 py-2 text-sm"
                    >
                      Copy Email
                    </Button>
                  </div>
                  <p className="text-il-gray-light text-xs text-center mt-4">
                    Demo shows sample output format · Sign up free to find real
                    emails
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Upload Section */}
      <section className="bg-il-dark border-t border-b border-il-border py-16 px-6">
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <div className="section-label mb-3">Bulk Enrichment</div>
            <h2 className="section-title text-3xl mb-4">
              Enrich thousands of contacts at once
            </h2>
            <p className="text-il-gray-light leading-relaxed mb-8">
              Upload a CSV with names and companies. Get verified emails back in
              minutes — not hours. No manual work.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-il-violet/10 border border-il-violet/30 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-il-violet"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-il-white font-semibold text-sm mb-1">
                    Upload any CSV
                  </h3>
                  <p className="text-il-gray-light text-xs">
                    We accept name + company, LinkedIn URLs, or raw domain
                    lists.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-il-violet/10 border border-il-violet/30 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-il-violet"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-il-white font-semibold text-sm mb-1">
                    Results in minutes
                  </h3>
                  <p className="text-il-gray-light text-xs">
                    Our pipeline processes up to 10,000 rows per batch. Results
                    delivered to your inbox and dashboard.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-il-violet/10 border border-il-violet/30 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-il-violet"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-il-white font-semibold text-sm mb-1">
                    Only pay for verified hits
                  </h3>
                  <p className="text-il-gray-light text-xs">
                    Credits are only deducted for emails we successfully verify.
                    No charge for misses.
                  </p>
                </div>
              </div>
            </div>

            <Link
              to="/pricing"
              className="inline-flex items-center mt-8 text-il-violet hover:text-il-violet-light font-semibold text-sm"
            >
              Start free — 50 credits included →
            </Link>
          </div>

          {/* Right Column - Mock Upload Card */}
          <div className="bg-il-dark2 border border-il-border rounded-xl p-6">
            {/* Upload Zone */}
            <div className="border-2 border-dashed border-il-border rounded-xl p-8 text-center mb-4">
              <svg
                className="w-8 h-8 text-il-gray-light mx-auto mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <p className="text-il-gray-light text-sm mb-1">
                Drop your CSV here
              </p>
              <p className="text-il-text-muted text-xs">
                or click to browse · Max 10,000 rows
              </p>
            </div>

            {/* Preview Table */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-il-gray-light">Sarah Chen · acme.io</span>
                <span className="text-green-400">s.chen@acme.io ✓</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-il-gray-light">
                  Mark Johnson · techcorp.com
                </span>
                <span className="text-green-400">m.johnson@techcorp.com ✓</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-il-gray-light">Emily Davis · scale.co</span>
                <span className="text-green-400">e.davis@scale.co ✓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6">
        <div className="max-w-[1000px] mx-auto">
          <div className="section-label mb-3">Verification pipeline</div>
          <h2 className="section-title text-3xl mb-10">6 steps to 98% accuracy</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                step: 1,
                title: "Syntax check",
                desc: "Validates email format and structure before any network requests.",
              },
              {
                step: 2,
                title: "Domain validation",
                desc: "Confirms the domain exists and is configured to receive email.",
              },
              {
                step: 3,
                title: "MX record lookup",
                desc: "Checks that the domain has active mail exchange records.",
              },
              {
                step: 4,
                title: "SMTP handshake",
                desc: "Connects to the mail server and verifies the mailbox exists without sending.",
              },
              {
                step: 5,
                title: "Catch-all detection",
                desc: "Identifies domains that accept all emails regardless of validity.",
              },
              {
                step: 6,
                title: "Activity scoring",
                desc: "Cross-references recent email activity to confirm the address is in active use.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-il-dark2 border border-il-border rounded-xl p-5 flex gap-4"
              >
                <div className="w-10 h-10 rounded-full border border-il-violet/30 flex items-center justify-center shrink-0">
                  <span className="text-il-violet font-bold text-lg">
                    {item.step}
                  </span>
                </div>
                <div>
                  <h3 className="text-il-white font-semibold text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-il-gray-light text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
      <Footer />
    </div>
  );
}
