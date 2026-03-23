import { useState } from "react";

const faqs = [
  {
    q: "How accurate is Inbound Labs data?",
    a: "We achieve 98% email deliverability through a 6-step verification pipeline that includes syntax checks, domain validation, MX record lookup, SMTP handshake, catch-all detection, and activity scoring. Data is refreshed weekly.",
  },
  {
    q: "Is Inbound Labs GDPR compliant?",
    a: "Yes, fully. We only index publicly available professional data. All data subjects can request deletion at any time. Data Processing Agreements (DPAs) are available for all paid plans, and we are SOC 2 Type II ready.",
  },
  {
    q: "What's a credit and how does it work?",
    a: "One credit unlocks one verified contact record — including email, mobile number, job title, and company data. Credits refresh monthly and unused credits roll over for up to 3 months on paid plans.",
  },
  {
    q: "Can I use Inbound Labs with my CRM?",
    a: "Yes. We integrate natively with HubSpot, Salesforce, Pipedrive, and Outreach. You can also push data via Zapier, Make, or our REST API. Setup takes under 5 minutes.",
  },
  {
    q: "How is Inbound Labs different from Apollo or ZoomInfo?",
    a: "Three main differences: (1) Our data is verified in real-time, not pulled from a stale static database. (2) Our mobile number coverage is 2× higher — 60M direct dials vs industry average of 25M. (3) Our pricing is transparent and doesn't require an enterprise sales call to get started.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes. Sign up for free and get 50 credits with no credit card required. Free credits never expire, so you can verify the data quality before committing.",
  },
  {
    q: "What happens if an email bounces?",
    a: "We offer a bounce guarantee. If a verified email hard bounces within 30 days, we refund the credit — no questions asked.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-il-dark border-t border-il-border py-20 px-6">
      <div className="max-w-[800px] mx-auto">
        <div className="section-label">FAQ</div>
        <h2 className="section-title">Everything you need to know</h2>

        <div className="mt-10">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-il-border">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="text-il-white font-semibold text-[15px]">{faq.q}</span>
                  <span
                    className={`text-il-gray-light text-xl transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="text-il-gray-light text-sm leading-relaxed pt-2 pb-5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
