import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const sidebarSections = [
  {
    title: "Getting Started",
    links: ["Authentication", "Rate Limits", "Errors"],
  },
  {
    title: "Endpoints",
    links: ["Search Contacts", "Email Finder", "Domain Search"],
  },
  {
    title: "Integrations",
    links: ["Webhooks", "SDKs"],
  },
];

export default function ApiDocs() {
  const [activeSection, setActiveSection] = useState("Authentication");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-[220px] flex-shrink-0 bg-il-dark border-r border-il-border sticky top-16 self-start py-6 hidden md:block">
          {sidebarSections.map((section) => (
            <div key={section.title}>
              <div className="text-[10px] uppercase tracking-widest text-il-gray-light/50 px-5 py-2">
                {section.title}
              </div>
              {section.links.map((link) => (
                <button
                  key={link}
                  onClick={() => setActiveSection(link)}
                  className={`w-full text-left text-xs px-5 py-1 hover:text-il-white transition-colors ${
                    activeSection === link ? "text-il-violet" : "text-il-gray-light"
                  }`}
                >
                  {link}
                </button>
              ))}
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 py-10 px-10 max-w-[860px]">
          {/* Authentication Section */}
          {activeSection === "Authentication" && (
            <section>
              <h2 className="text-3xl font-bold text-il-white mb-4">Authentication</h2>
              <p className="text-il-gray-light mb-6">
                All API requests require an API key passed as a Bearer token in the Authorization header.
              </p>
              
              <div className="bg-[#07000f] border border-il-border/50 rounded-xl p-5 font-mono text-sm text-[#e2e8f0] leading-7 overflow-x-auto">
                <pre>
                  <code>
{`curl https://api.inboundlabs.io/v2/contacts/search \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"filters": {"job_title": "VP of Sales"}}'`}
                  </code>
                </pre>
              </div>

              <div className="bg-il-dark2 border border-il-border rounded-xl p-4 mt-6">
                <p className="text-il-gray-light text-sm">
                  <span className="text-il-violet font-semibold">Note:</span> Your API key is available in Settings → API. Keep it secret — never expose it in client-side code.
                </p>
              </div>
            </section>
          )}

          {/* Rate Limits Section */}
          {activeSection === "Rate Limits" && (
            <section>
              <h2 className="text-3xl font-bold text-il-white mb-4">Rate Limits</h2>
              
              <div className="bg-il-dark2 border border-il-border rounded-xl overflow-hidden mb-6">
                <table className="w-full">
                  <thead>
                    <tr className="bg-il-dark border-b border-il-border">
                      <th className="text-left px-5 py-3 text-il-white text-sm font-medium">Plan</th>
                      <th className="text-left px-5 py-3 text-il-white text-sm font-medium">Requests/min</th>
                      <th className="text-left px-5 py-3 text-il-white text-sm font-medium">Requests/day</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-il-border">
                      <td className="px-5 py-3 text-il-gray-light text-sm">Starter</td>
                      <td className="px-5 py-3 text-il-gray-light text-sm">10</td>
                      <td className="px-5 py-3 text-il-gray-light text-sm">1,000</td>
                    </tr>
                    <tr className="border-b border-il-border">
                      <td className="px-5 py-3 text-il-gray-light text-sm">Growth</td>
                      <td className="px-5 py-3 text-il-gray-light text-sm">60</td>
                      <td className="px-5 py-3 text-il-gray-light text-sm">10,000</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 text-il-gray-light text-sm">Enterprise</td>
                      <td className="px-5 py-3 text-il-gray-light text-sm">Unlimited</td>
                      <td className="px-5 py-3 text-il-gray-light text-sm">Unlimited</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-il-gray-light">
                Rate limit headers are returned on every response: X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset.
              </p>
            </section>
          )}

          {/* Errors Section */}
          {activeSection === "Errors" && (
            <section>
              <h2 className="text-3xl font-bold text-il-white mb-4">Errors</h2>
              <p className="text-il-gray-light mb-6">
                The API uses standard HTTP status codes to indicate success or failure of requests.
              </p>
              
              <div className="space-y-4">
                <div className="bg-il-dark2 border border-il-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-green-400/15 text-green-400 text-xs font-bold px-2 py-1 rounded">200</span>
                    <span className="text-il-white font-medium">OK</span>
                  </div>
                  <p className="text-il-gray-light text-sm">Request was successful.</p>
                </div>

                <div className="bg-il-dark2 border border-il-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-amber-400/15 text-amber-400 text-xs font-bold px-2 py-1 rounded">400</span>
                    <span className="text-il-white font-medium">Bad Request</span>
                  </div>
                  <p className="text-il-gray-light text-sm">Invalid request parameters or malformed JSON.</p>
                </div>

                <div className="bg-il-dark2 border border-il-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-amber-400/15 text-amber-400 text-xs font-bold px-2 py-1 rounded">401</span>
                    <span className="text-il-white font-medium">Unauthorized</span>
                  </div>
                  <p className="text-il-gray-light text-sm">Missing or invalid API key.</p>
                </div>

                <div className="bg-il-dark2 border border-il-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-amber-400/15 text-amber-400 text-xs font-bold px-2 py-1 rounded">429</span>
                    <span className="text-il-white font-medium">Too Many Requests</span>
                  </div>
                  <p className="text-il-gray-light text-sm">Rate limit exceeded. Check the Retry-After header.</p>
                </div>
              </div>

              <div className="bg-[#07000f] border border-il-border/50 rounded-xl p-5 font-mono text-sm text-[#e2e8f0] leading-7 overflow-x-auto mt-6">
                <pre>
                  <code>
{`{
  "error": {
    "code": "INVALID_API_KEY",
    "message": "The provided API key is invalid or expired."
  }
}`}
                  </code>
                </pre>
              </div>
            </section>
          )}

          {/* Search Contacts Section */}
          {activeSection === "Search Contacts" && (
            <section>
              <h2 className="text-3xl font-bold text-il-white mb-4">Search Contacts</h2>
              <p className="text-il-gray-light mb-6">
                Search our database of 280M+ B2B contacts using various filters.
              </p>
              
              <div className="bg-il-dark2 border border-il-border rounded-xl overflow-hidden mb-5">
                <div className="bg-il-dark border-b border-il-border px-5 py-4 flex items-center gap-3">
                  <span className="bg-blue-400/15 text-blue-400 text-xs font-mono font-bold px-2 py-0.5 rounded">POST</span>
                  <code className="font-mono text-sm text-il-white">/v2/contacts/search</code>
                  <span className="text-il-gray-light text-xs ml-auto">Search contacts by filters</span>
                </div>
                <div className="p-5">
                  <div className="grid lg:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-il-white font-medium text-sm mb-2">Request</h4>
                      <div className="bg-[#07000f] border border-il-border/40 rounded-lg p-4 font-mono text-xs text-[#e2e8f0] leading-6 overflow-x-auto whitespace-pre">
{`{
  "filters": {
    "job_title": "VP of Sales",
    "industry": "SaaS",
    "location": "United States",
    "company_size": "50-200"
  },
  "limit": 25,
  "page": 1
}`}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-il-white font-medium text-sm mb-2">Response</h4>
                      <div className="bg-[#07000f] border border-il-border/40 rounded-lg p-4 font-mono text-xs text-[#e2e8f0] leading-6 overflow-x-auto whitespace-pre">
{`{
  "total": 4821,
  "page": 1,
  "results": [
    {
      "id": "cid_9xk2m",
      "name": "Sarah Chen",
      "title": "VP of Sales",
      "company": "Growthly",
      "email": "s.chen@growthly.com",
      "email_verified": true,
      "mobile": "+1 (628) 555-0192",
      "linkedin": "linkedin.com/in/sarahchen"
    }
  ]
}`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Email Finder Section */}
          {activeSection === "Email Finder" && (
            <section>
              <h2 className="text-3xl font-bold text-il-white mb-4">Email Finder</h2>
              <p className="text-il-gray-light mb-6">
                Find verified email addresses using a person's name and company domain.
              </p>
              
              <div className="bg-il-dark2 border border-il-border rounded-xl overflow-hidden mb-5">
                <div className="bg-il-dark border-b border-il-border px-5 py-4 flex items-center gap-3">
                  <span className="bg-blue-400/15 text-blue-400 text-xs font-mono font-bold px-2 py-0.5 rounded">POST</span>
                  <code className="font-mono text-sm text-il-white">/v2/enrich/email</code>
                  <span className="text-il-gray-light text-xs ml-auto">Find email by name and domain</span>
                </div>
                <div className="p-5">
                  <div className="grid lg:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-il-white font-medium text-sm mb-2">Request</h4>
                      <div className="bg-[#07000f] border border-il-border/40 rounded-lg p-4 font-mono text-xs text-[#e2e8f0] leading-6 overflow-x-auto whitespace-pre">
{`{
  "first_name": "Sarah",
  "last_name": "Chen",
  "domain": "growthly.com"
}`}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-il-white font-medium text-sm mb-2">Response</h4>
                      <div className="bg-[#07000f] border border-il-border/40 rounded-lg p-4 font-mono text-xs text-[#e2e8f0] leading-6 overflow-x-auto whitespace-pre">
{`{
  "email": "s.chen@growthly.com",
  "verified": true,
  "confidence": 0.97,
  "type": "direct",
  "catch_all": false,
  "credits_used": 1
}`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Domain Search Section */}
          {activeSection === "Domain Search" && (
            <section>
              <h2 className="text-3xl font-bold text-il-white mb-4">Domain Search</h2>
              <p className="text-il-gray-light mb-6">
                Find all contacts at a specific company domain.
              </p>
              
              <div className="bg-il-dark2 border border-il-border rounded-xl overflow-hidden mb-5">
                <div className="bg-il-dark border-b border-il-border px-5 py-4 flex items-center gap-3">
                  <span className="bg-green-400/15 text-green-400 text-xs font-mono font-bold px-2 py-0.5 rounded">GET</span>
                  <code className="font-mono text-sm text-il-white">/v2/domain/:domain</code>
                  <span className="text-il-gray-light text-xs ml-auto">Search contacts by domain</span>
                </div>
                <div className="p-5">
                  <div className="grid lg:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-il-white font-medium text-sm mb-2">Request</h4>
                      <div className="bg-[#07000f] border border-il-border/40 rounded-lg p-4 font-mono text-xs text-[#e2e8f0] leading-6 overflow-x-auto whitespace-pre">
{`GET /v2/domain/stripe.com?limit=50&role=sales`}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-il-white font-medium text-sm mb-2">Response</h4>
                      <div className="bg-[#07000f] border border-il-border/40 rounded-lg p-4 font-mono text-xs text-[#e2e8f0] leading-6 overflow-x-auto whitespace-pre">
{`{
  "domain": "stripe.com",
  "company": "Stripe",
  "total_contacts": 2847,
  "results": [
    {
      "name": "Claire Dunning",
      "title": "VP of Revenue",
      "email": "c.dunning@stripe.com",
      "mobile": "+1 (628) 555-0124",
      "verified": true
    }
  ]
}`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Webhooks Section */}
          {activeSection === "Webhooks" && (
            <section>
              <h2 className="text-3xl font-bold text-il-white mb-4">Webhooks</h2>
              <p className="text-il-gray-light mb-6">
                Receive real-time notifications about your bulk enrichment jobs and account events.
              </p>
              
              <div className="bg-il-dark2 border border-il-border rounded-xl p-6 mb-6">
                <h3 className="text-il-white font-semibold mb-4">Supported Events</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="bg-il-violet/10 border border-il-violet/30 text-il-violet text-xs px-2 py-1 rounded">bulk.completed</span>
                    <span className="text-il-gray-light text-sm">Bulk enrichment job finished</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-il-violet/10 border border-il-violet/30 text-il-violet text-xs px-2 py-1 rounded">credit.low</span>
                    <span className="text-il-gray-light text-sm">Account credits below threshold</span>
                  </div>
                </div>
              </div>

              <div className="bg-il-dark2 border border-il-border rounded-xl p-6">
                <h3 className="text-il-white font-semibold mb-4">Webhook Payload</h3>
                <div className="bg-[#07000f] border border-il-border/50 rounded-xl p-5 font-mono text-sm text-[#e2e8f0] leading-7 overflow-x-auto">
                  <pre>
                    <code>
{`{
  "event": "bulk.completed",
  "data": {
    "job_id": "job_abc123",
    "status": "completed",
    "enriched": 145,
    "failed": 5,
    "download_url": "https://api.inboundlabs.io/downloads/job_abc123.csv"
  },
  "timestamp": "2024-01-15T14:30:00Z"
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </section>
          )}

          {/* SDKs Section */}
          {activeSection === "SDKs" && (
            <section>
              <h2 className="text-3xl font-bold text-il-white mb-4">SDKs</h2>
              <p className="text-il-gray-light mb-6">
                Official SDKs for popular programming languages.
              </p>
              
              <div className="grid gap-4">
                <div className="bg-il-dark2 border border-il-border rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-il-white font-semibold">Node.js</h3>
                    <code className="text-il-violet text-sm">npm install inboundlabs</code>
                  </div>
                  <div className="bg-[#07000f] border border-il-border/50 rounded-xl p-5 font-mono text-sm text-[#e2e8f0] leading-7 overflow-x-auto">
                    <pre>
                      <code>
{`const InboundLabs = require('inboundlabs');
const client = new InboundLabs('YOUR_API_KEY');

const contacts = await client.search({
  filters: {
    job_title: 'VP of Sales',
    industry: 'SaaS'
  }
});`}
                      </code>
                    </pre>
                  </div>
                </div>

                <div className="bg-il-dark2 border border-il-border rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-il-white font-semibold">Python</h3>
                    <code className="text-il-violet text-sm">pip install inboundlabs</code>
                  </div>
                  <div className="bg-[#07000f] border border-il-border/50 rounded-xl p-5 font-mono text-sm text-[#e2e8f0] leading-7 overflow-x-auto">
                    <pre>
                      <code>
{`import inboundlabs

client = inboundlabs.Client('YOUR_API_KEY')

contacts = client.search(
    filters={
        'job_title': 'VP of Sales',
        'industry': 'SaaS'
    }
)`}
                      </code>
                    </pre>
                  </div>
                </div>

                <div className="bg-il-dark2 border border-il-border rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-il-white font-semibold">Ruby</h3>
                    <code className="text-il-violet text-sm">gem install inboundlabs</code>
                  </div>
                  <div className="bg-[#07000f] border border-il-border/50 rounded-xl p-5 font-mono text-sm text-[#e2e8f0] leading-7 overflow-x-auto">
                    <pre>
                      <code>
{`require 'inboundlabs'

client = InboundLabs::Client.new('YOUR_API_KEY')

contacts = client.search(
  filters: {
    job_title: 'VP of Sales',
    industry: 'SaaS'
  }
)`}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* CTA Card - Show on Endpoints sections */}
          {["Search Contacts", "Email Finder", "Domain Search"].includes(activeSection) && (
            <div className="bg-il-violet/10 border border-il-violet/30 rounded-xl p-6 flex items-center justify-between mt-8">
              <div>
                <h3 className="text-il-white font-semibold mb-1">Ready to build?</h3>
                <p className="text-il-gray-light text-sm">
                  Get your API key in Settings after signing up.
                </p>
              </div>
              <Link to="/pricing">
                <Button className="bg-il-violet hover:bg-il-violet/90 text-white rounded-lg px-5 py-2.5 text-sm font-semibold">
                  Get API Access →
                </Button>
              </Link>
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}
