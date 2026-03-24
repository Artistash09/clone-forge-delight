import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "LinkedIn Email Finder",
    desc: "Get verified emails from any LinkedIn profile. See confidence score and verification status instantly.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-8a2 2 0 012-2h14a2 2 0 012 2v8M3 10V5a2 2 0 012-2h14a2 2 0 012 2v5M9 10h6v8H9v-8z" />
      </svg>
    ),
    title: "Company Domain Search",
    desc: "Find all contacts at any company. Works on LinkedIn company pages, job posts, and website footers.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "CRM Integration",
    desc: "One-click export to Salesforce, HubSpot, Pipedrive. Auto-enrich contacts with firmographic data.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Save to Lists",
    desc: "Build targeted lists as you browse. Export when ready — no tab switching, no manual data entry.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "90-Day Free Trial",
    desc: "Use every feature free for 90 days — even verified email lookups. No credit card required.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    title: "Zero Data Leakage",
    desc: "Works in a side panel. No external page redirects. Your browsing data never leaves your browser.",
  },
];

const browserSteps = [
  { browser: "Chrome", action: "Add to Chrome", time: "It\'s free" },
  { browser: "Edge", action: "Get for Edge", time: "2 min install" },
  { browser: "Arc", action: "Get for Arc", time: "2 min install" },
];

export default function ChromeExtension() {
  const [activeBrowser, setActiveBrowser] = useState("Chrome");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative pt-20 pb-16 px-6 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% -10%, rgba(59,130,246,0.1), transparent)",
        }}
      >
        <div className="max-w-[1100px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <div className="section-label inline-block mb-4">Chrome Extension</div>
              <h1 className="section-title text-4xl md:text-5xl mb-4">
                The Best Sales Prospecting Extension on the Web
              </h1>
              <p className="text-il-gray-light text-lg leading-relaxed mb-6">
                Find verified emails and phone numbers on LinkedIn, company
                websites, and Crunchbase — without leaving your tab. 90-day free
                trial with full access.
              </p>

              {/* Browser Tabs */}
              <div className="flex gap-2 mb-6">
                {["Chrome", "Edge", "Arc"].map((browser) => (
                  <button
                    key={browser}
                    onClick={() => setActiveBrowser(browser)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeBrowser === browser
                        ? "bg-il-violet text-white"
                        : "bg-il-dark2 border border-il-border text-il-gray-light hover:text-il-white"
                    }`}
                  >
                    {browser}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-4 mb-4">
                <Button className="bg-il-violet hover:bg-il-violet/90 text-white rounded-xl px-6 py-3 font-semibold">
                  {browserSteps.find((s) => s.browser === activeBrowser)?.action} →
                </Button>
                <span className="text-il-gray-light text-sm">
                  {browserSteps.find((s) => s.browser === activeBrowser)?.time}
                </span>
              </div>

              <p className="text-il-gray-light text-xs">
                4.9 stars · 12,000+ reviews · Updated weekly
              </p>
            </div>

            {/* Right Column - Mock Browser */}
            <div className="relative">
              <div className="bg-il-dark2 border border-il-border rounded-xl overflow-hidden shadow-2xl">
                {/* Browser Header */}
                <div className="bg-il-dark border-b border-il-border px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  </div>
                  <div className="flex-1 bg-il-dark2 border border-il-border rounded-md px-3 py-1.5 text-il-gray-light text-sm">
                    linkedin.com/in/sarah-chen
                  </div>
                </div>
                {/* Browser Content */}
                <div className="p-4 bg-il-dark min-h-[280px]">
                  <div className="flex gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-il-violet to-purple-600 flex items-center justify-center text-xl font-bold text-white">
                      SC
                    </div>
                    <div className="flex-1">
                      <div className="text-il-white font-semibold mb-1">Sarah Chen</div>
                      <div className="text-il-gray-light text-sm mb-2">
                        VP of Sales at Stripe
                      </div>
                      <div className="flex gap-2">
                        <span className="bg-il-dark2 border border-il-border rounded px-2 py-0.5 text-xs text-il-gray-light">
                          San Francisco
                        </span>
                        <span className="bg-il-dark2 border border-il-border rounded px-2 py-0.5 text-xs text-il-gray-light">
                          500+ connections
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Extension Panel */}
                  <div className="absolute right-4 top-20 w-[200px] bg-il-dark2 border border-il-border rounded-lg shadow-xl p-3">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-5 h-5 bg-il-violet rounded"></div>
                      <span className="text-il-white text-sm font-medium">
                        Inbound Labs
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-il-gray-light">Email</span>
                        <span className="text-green-400">✓ Verified</span>
                      </div>
                      <div className="text-il-white text-sm font-medium bg-il-dark border border-il-border rounded px-2 py-1">
                        s.chen@stripe.com
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-il-gray-light">Mobile</span>
                        <span className="text-green-400">✓ Verified</span>
                      </div>
                      <div className="text-il-white text-sm font-medium bg-il-dark border border-il-border rounded px-2 py-1">
                        +1 (628) 555-0124
                      </div>
                      <Button
                        size="sm"
                        className="w-full bg-il-violet hover:bg-il-violet/90 text-white text-xs mt-2"
                      >
                        Save Contact →
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 border-t border-b border-il-border">
        <div className="max-w-[1000px] mx-auto">
          <div className="section-label mb-3 text-center">Features</div>
          <h2 className="section-title text-3xl mb-12 text-center">
            Everything you need, nothing you don&apos;t
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-il-dark2 border border-il-border rounded-xl p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-il-violet/10 border border-il-violet/30 flex items-center justify-center text-il-violet mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-il-white font-semibold text-[15px] mb-2">
                  {feature.title}
                </h3>
                <p className="text-il-gray-light text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Install Section */}
      <section className="py-20 px-6">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="section-title text-3xl mb-4">
            Ready to prospect smarter?
          </h2>
          <p className="text-il-gray-light mb-8">
            Join 50,000+ sales professionals who prospect faster with Inbound Labs.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {["Chrome", "Edge", "Arc"].map((browser) => (
              <Button
                key={browser}
                variant={activeBrowser === browser ? "default" : "outline"}
                onClick={() => setActiveBrowser(browser)}
                className={`rounded-xl px-6 py-3 ${
                  activeBrowser === browser
                    ? "bg-il-violet text-white"
                    : "border-il-border text-il-gray-light hover:text-il-white"
                }`}
              >
                {browser === "Chrome" && "Add to Chrome →"}
                {browser === "Edge" && "Get for Edge →"}
                {browser === "Arc" && "Get for Arc →"}
              </Button>
            ))}
          </div>

          <p className="text-il-gray-light text-sm mb-6">
            Free for 90 days · No credit card required
          </p>

          <Link
            to="/pricing"
            className="text-il-violet hover:text-il-violet-light font-semibold text-sm"
          >
            View full pricing →
          </Link>
        </div>
      </section>

      <CTABand />
      <Footer />
    </div>
  );
}
