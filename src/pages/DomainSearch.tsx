import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const mockContacts = [
  {
    name: "Claire Dunning",
    title: "VP of Revenue",
    company: "Stripe",
    email: "c.dunning@stripe.com",
    mobile: "+1 (628) 555-0124",
    emailVerified: true,
    mobileVerified: true,
  },
  {
    name: "James Wu",
    title: "Head of Sales",
    company: "Stripe",
    email: "j.wu@stripe.com",
    mobile: "+1 (415) 555-0187",
    emailVerified: true,
    mobileVerified: true,
  },
  {
    name: "Priya Sharma",
    title: "Director of GTM",
    company: "Stripe",
    email: "p.sharma@stripe.com",
    mobile: "Unlock →",
    emailVerified: true,
    mobileVerified: false,
    locked: true,
  },
  {
    name: "Tom Bradley",
    title: "Sales Manager",
    company: "Stripe",
    email: "t.bradley@stripe.com",
    mobile: "Unlock →",
    emailVerified: true,
    mobileVerified: false,
    locked: true,
  },
  {
    name: "Ana Costa",
    title: "SDR Manager",
    company: "Stripe",
    email: "a.costa@stripe.com",
    mobile: "Unlock →",
    emailVerified: true,
    mobileVerified: false,
    locked: true,
  },
];

const filterChips = ["All roles", "Leadership", "Sales", "Engineering", "Marketing"];

export default function DomainSearch() {
  const [searchDomain, setSearchDomain] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All roles");

  const handleSearch = () => {
    if (!searchDomain.trim()) return;
    setIsLoading(true);
    setShowResults(false);
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
    }, 800);
  };

  const displayDomain = searchDomain.trim() || "stripe.com";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-10 px-6 text-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139, 92, 246, 0.15), transparent)",
          }}
        />
        <div className="relative max-w-[900px] mx-auto">
          <div className="section-label inline-block mb-4">Domain Search</div>
          <h1 className="section-title text-4xl md:text-5xl mb-4">
            Find Everyone at Any Company
          </h1>
          <p className="text-il-gray-light text-lg max-w-[700px] mx-auto leading-relaxed">
            Enter any company domain and instantly see all verified contacts —
            emails, job titles, and direct mobiles.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="px-6">
        <div className="max-w-[680px] mx-auto mt-10">
          <div className="flex bg-il-dark2 border border-il-border rounded-xl overflow-hidden">
            <Input
              placeholder="Enter a company domain (e.g. stripe.com)"
              value={searchDomain}
              onChange={(e) => setSearchDomain(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="flex-1 bg-transparent border-none outline-none px-5 py-4 text-il-white placeholder:text-il-gray-light focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button
              onClick={handleSearch}
              disabled={isLoading}
              className="bg-il-violet hover:bg-il-violet/90 text-white px-6 py-4 font-semibold text-sm flex-shrink-0 rounded-none"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Searching...
                </span>
              ) : (
                "Search →"
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* Results */}
      {showResults && (
        <section className="px-6 mt-6">
          <div className="max-w-[900px] mx-auto">
            <div className="bg-il-dark2 border border-il-border rounded-xl overflow-hidden">
              {/* Header */}
              <div className="px-5 py-3 border-b border-il-border flex justify-between items-center">
                <span className="text-sm text-il-white">
                  {displayDomain} — 2,847 contacts found
                </span>
                <Button className="bg-il-violet hover:bg-il-violet/90 text-white text-xs px-4 py-1.5 rounded-lg h-auto">
                  Export CSV
                </Button>
              </div>

              {/* Filter Chips */}
              <div className="px-5 py-3 border-b border-il-border flex gap-2 flex-wrap">
                {filterChips.map((chip) => (
                  <button
                    key={chip}
                    onClick={() => setActiveFilter(chip)}
                    className={`text-xs border rounded-full px-3 py-1 cursor-pointer transition-colors ${
                      activeFilter === chip
                        ? "bg-il-violet/10 border-il-violet text-il-violet-light"
                        : "border-il-border text-il-gray-light hover:text-il-white"
                    }`}
                  >
                    {chip}
                  </button>
                ))}
              </div>

              {/* Table */}
              <div className="w-full">
                {/* Header Row */}
                <div className="px-5 py-2 grid grid-cols-[32px_1fr_1fr_1fr_80px] text-xs text-il-gray-light uppercase tracking-widest border-b border-il-border">
                  <div>
                    <input type="checkbox" className="w-4 h-4 rounded border-il-border" />
                  </div>
                  <div>Name / Title</div>
                  <div>Company</div>
                  <div>Email</div>
                  <div>Mobile</div>
                </div>

                {/* Data Rows */}
                {mockContacts.map((contact, idx) => (
                  <div
                    key={idx}
                    className={`px-5 py-3 grid grid-cols-[32px_1fr_1fr_1fr_80px] items-center border-b border-il-border last:border-b-0 ${
                      contact.locked ? "opacity-80" : ""
                    }`}
                  >
                    <div>
                      <input type="checkbox" className="w-4 h-4 rounded border-il-border" />
                    </div>
                    <div>
                      <div className="text-il-white text-sm font-medium">{contact.name}</div>
                      <div className="text-il-gray-light text-xs">{contact.title}</div>
                    </div>
                    <div className="text-il-white text-sm">{contact.company}</div>
                    <div className="text-green-400 text-xs">
                      {contact.email} ✓
                    </div>
                    <div>
                      {contact.mobileVerified ? (
                        <span className="text-green-400 text-xs">{contact.mobile} ✓</span>
                      ) : (
                        <span className="text-il-violet text-xs cursor-pointer hover:underline">
                          {contact.mobile}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="text-il-gray-light text-xs text-center py-3 border-t border-il-border">
                Showing 5 of 2,847 contacts ·{" "}
                <Link to="/pricing" className="text-il-violet hover:underline">
                  Sign up free to unlock all →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Use Cases Section */}
      <section className="bg-il-dark border-t border-b border-il-border py-16 px-6 mt-16">
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-3 gap-5">
          <div className="bg-il-dark2 border border-il-border rounded-xl p-6">
            <h3 className="text-il-white font-semibold mb-2">Account-Based Marketing</h3>
            <p className="text-il-gray-light text-sm">
              Build a complete contact map of target accounts before your first outreach. Know who to call before you call.
            </p>
          </div>
          <div className="bg-il-dark2 border border-il-border rounded-xl p-6">
            <h3 className="text-il-white font-semibold mb-2">Competitive Intelligence</h3>
            <p className="text-il-gray-light text-sm">
              See who your competitors are hiring. Spot their go-to-market moves before they happen.
            </p>
          </div>
          <div className="bg-il-dark2 border border-il-border rounded-xl p-6">
            <h3 className="text-il-white font-semibold mb-2">Partnership Outreach</h3>
            <p className="text-il-gray-light text-sm">
              Find the right person at any partner or prospect company — not just the generic info@ address.
            </p>
          </div>
        </div>
      </section>

      <CTABand />
      <Footer />
    </div>
  );
}
