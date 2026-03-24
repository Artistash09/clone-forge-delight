import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const tiers = [
  {
    emoji: "🌱",
    name: "Starter Affiliate",
    range: "0–5 active referrals",
    commission: "20%",
    footer: "Monthly payouts · Standard dashboard",
  },
  {
    emoji: "🚀",
    name: "Pro Affiliate",
    range: "6–25 active referrals",
    commission: "25%",
    footer: "Bi-weekly payouts · Priority support",
    featured: true,
  },
  {
    emoji: "👑",
    name: "Elite Affiliate",
    range: "26+ active referrals",
    commission: "30%",
    footer: "Weekly payouts · Dedicated affiliate manager",
  },
];

const steps = [
  {
    step: 1,
    title: "Get your link",
    desc: "Apply and get a unique referral link with a 90-day tracking cookie.",
  },
  {
    step: 2,
    title: "Share with your audience",
    desc: "Post it, email it, embed it. We provide banners, copy templates, and landing pages.",
  },
  {
    step: 3,
    title: "Get paid",
    desc: "Earn recurring commission every month as long as your referrals stay subscribed. No caps.",
  },
];

export default function Affiliate() {
  const [referrals, setReferrals] = useState(10);
  const monthlyCommission = referrals * 149 * 0.25;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative text-center pt-20 pb-12 px-6 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(34,197,94,0.07), transparent 60%)",
        }}
      >
        <div className="relative max-w-[900px] mx-auto">
          <div className="section-label inline-block mb-4 text-green-400">
            Affiliate Program
          </div>
          <h1 className="section-title text-4xl md:text-5xl mb-4">
            Monetise Your Audience. Earn Up to 30%.
          </h1>
          <p className="text-il-gray-light text-lg max-w-[700px] mx-auto leading-relaxed mb-8">
            Built for newsletters, YouTubers, podcasters, consultants, and B2B
            content creators with a sales-focused audience.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button className="bg-il-violet hover:bg-il-violet/90 text-white rounded-xl px-6 py-3 font-semibold">
              Apply to Become an Affiliate
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-il-border text-il-gray-light hover:text-il-white rounded-xl px-6 py-3"
            >
              <a href="#referral">Individual Referral Program →</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Commission Tiers Section */}
      <section className="py-16 px-6 max-w-[900px] mx-auto">
        <div className="section-label mb-3">Commission Tiers</div>
        <h2 className="section-title text-3xl mb-10">
          The more you refer, the more you earn.
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-7 text-center ${
                tier.featured
                  ? "bg-il-dark2 border-2 border-il-violet relative"
                  : "bg-il-dark2 border border-il-border"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-il-violet text-white text-xs px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-3xl mb-3">{tier.emoji}</div>
              <h3 className="text-il-white font-semibold text-lg mb-1">
                {tier.name}
              </h3>
              <p className="text-il-gray-light text-sm mb-4">{tier.range}</p>
              <div className="font-display text-5xl font-extrabold text-il-violet-light mb-1">
                {tier.commission}
              </div>
              <p className="text-il-gray-light text-sm mb-4">
                recurring monthly commission
              </p>
              <p className="text-il-gray-light text-xs border-t border-il-border pt-4 mt-4">
                {tier.footer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Commission Calculator */}
      <section className="max-w-[560px] mx-auto my-16 bg-il-dark2 border border-il-border rounded-2xl p-8">
        <h3 className="text-il-white font-semibold text-lg mb-6">
          Calculate your commission
        </h3>
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <span className="text-il-gray-light text-sm">
              Referrals per month
            </span>
            <span className="text-il-white font-semibold">
              {referrals} referrals/month
            </span>
          </div>
          <Slider
            value={[referrals]}
            onValueChange={(value) => setReferrals(value[0])}
            min={1}
            max={50}
            step={1}
            className="w-full"
          />
        </div>
        <div className="bg-background border border-il-border rounded-xl p-5 flex justify-between items-center">
          <span className="text-il-gray-light text-sm">Monthly commission</span>
          <span className="text-green-400 font-display text-3xl font-extrabold">
            ${monthlyCommission.toLocaleString()}
          </span>
        </div>
        <p className="text-il-gray-light text-xs mt-4 text-center">
          Based on average Growth plan ($149/mo). Actual varies by plan mix.
        </p>
      </section>

      {/* How It Works Section */}
      <section
        id="referral"
        className="bg-il-dark border-t border-b border-il-border py-16 px-6"
      >
        <div className="max-w-[900px] mx-auto">
          <div className="section-label mb-3">How it works</div>
          <h2 className="section-title text-3xl mb-10">
            Three steps to your first payout.
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            {steps.map((step) => (
              <div
                key={step.step}
                className="bg-il-dark2 border border-il-border rounded-xl p-6"
              >
                <div className="w-10 h-10 rounded-full border border-il-violet/40 flex items-center justify-center text-il-violet font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-il-white font-semibold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-il-gray-light text-sm leading-relaxed">
                  {step.desc}
                </p>
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
