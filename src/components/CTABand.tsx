import { Link } from "react-router-dom";

export default function CTABand() {
  return (
    <div className="text-center py-24 px-6 relative overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[500px] glow-violet pointer-events-none" />
      <div className="relative z-10">
        <div className="section-label">Get started today</div>
        <h2 className="font-display font-extrabold leading-[1.1] mb-3 text-il-white" style={{ fontSize: "clamp(36px, 5vw, 60px)", letterSpacing: "-1.5px" }}>
          Try our data quality<br />for free.
        </h2>
        <p className="text-il-gray-light text-[17px] mb-9">
          No commitment. No credit card. Just 50 free verified contact lookups.
        </p>
        <div className="flex gap-3.5 justify-center flex-wrap">
          <Link to="/pricing" className="bg-il-violet text-primary-foreground px-7 py-3.5 text-base font-semibold rounded-[10px] hover:bg-il-violet-light transition-all hover:-translate-y-0.5">
            Start Free Trial
          </Link>
          <button className="bg-transparent text-il-white border border-il-border px-7 py-3.5 text-base font-semibold rounded-[10px] hover:bg-il-dark2 transition-colors">
            Contact Sales
          </button>
        </div>
        <div className="flex items-center justify-center gap-5 mt-5 flex-wrap">
          {["No credit card required", "Cancel anytime", "GDPR compliant", "Setup in 2 minutes"].map((t) => (
            <span key={t} className="text-sm text-il-gray-light flex items-center gap-1.5">
              <span className="text-il-green">✓</span> {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
