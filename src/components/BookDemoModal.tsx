import { useState } from "react";
import { X } from "lucide-react";

const TEAM_SIZE_OPTIONS = ["1-5", "6-20", "21-50", "51-200", "201-1000", "1000+"];
const USE_CASE_OPTIONS = [
  "Lead Generation",
  "Sales Prospecting",
  "Data Enrichment",
  "Account-Based Marketing",
  "Recruiting",
  "Other",
];

const GOOGLE_SHEET_WEBHOOK_URL = ""; // User sets this

interface BookDemoModalProps {
  open: boolean;
  onClose: () => void;
}

export default function BookDemoModal({ open, onClose }: BookDemoModalProps) {
  const [step, setStep] = useState<"form" | "success">("form");
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    teamSize: "",
    useCase: "",
  });

  const handleChange = (field: string, value: string) =>
    setForm((p) => ({ ...p, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      if (GOOGLE_SHEET_WEBHOOK_URL) {
        await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            submittedAt: new Date().toISOString(),
          }),
        });
      }
    } catch (err) {
      console.error("Webhook error:", err);
    }

    setSubmitting(false);
    setStep("success");
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep("form");
      setForm({ firstName: "", lastName: "", email: "", company: "", teamSize: "", useCase: "" });
    }, 300);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative w-full max-w-[540px] max-h-[90vh] overflow-y-auto rounded-2xl border border-il-border bg-il-dark shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-il-gray-light hover:text-il-white transition-colors z-10"
        >
          <X size={20} />
        </button>

        {step === "form" ? (
          <form onSubmit={handleSubmit} className="p-8">
            {/* Header */}
            <h2 className="font-display text-2xl font-bold text-il-white mb-1">
              Book a 20-min Demo
            </h2>
            <p className="text-il-gray-light text-sm mb-6">
              We'll walk through the platform with your ICP in mind. No pitch. Just product.
            </p>

            {/* Step indicator */}
            <div className="flex items-center justify-center gap-0 mb-6">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-il-violet text-white text-sm font-bold flex items-center justify-center">
                  1
                </div>
                <span className="text-[11px] text-il-gray-light mt-1">Your details</span>
              </div>
              <div className="w-24 h-[2px] bg-il-border -mt-4" />
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-il-dark2 border border-il-border text-il-gray-light text-sm font-bold flex items-center justify-center">
                  2
                </div>
                <span className="text-[11px] text-il-gray-light mt-1">Confirm slot</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full h-[3px] bg-il-border rounded-full mb-6">
              <div className="w-1/2 h-full bg-il-violet rounded-full" />
            </div>

            {/* Steps icons */}
            <div className="flex justify-between mb-8 px-4">
              <div className="flex flex-col items-center gap-1">
                <span className="text-2xl">📋</span>
                <span className="text-[11px] text-il-gray-light">Fill in your details</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-2xl">📅</span>
                <span className="text-[11px] text-il-gray-light">Pick a time slot</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-2xl">🚀</span>
                <span className="text-[11px] text-il-gray-light text-center">Get a personalised<br />walkthrough</span>
              </div>
            </div>

            {/* Form fields */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-[11px] font-semibold text-il-gray-light uppercase tracking-wider mb-1.5 block">
                  First Name
                </label>
                <input
                  required
                  value={form.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  placeholder="Sarah"
                  className="w-full bg-il-dark2 border border-il-border rounded-lg px-4 py-3 text-sm text-il-white placeholder:text-il-gray-mid focus:outline-none focus:border-il-violet/60 transition-colors"
                />
              </div>
              <div>
                <label className="text-[11px] font-semibold text-il-gray-light uppercase tracking-wider mb-1.5 block">
                  Last Name
                </label>
                <input
                  required
                  value={form.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  placeholder="Chen"
                  className="w-full bg-il-dark2 border border-il-border rounded-lg px-4 py-3 text-sm text-il-white placeholder:text-il-gray-mid focus:outline-none focus:border-il-violet/60 transition-colors"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="text-[11px] font-semibold text-il-gray-light uppercase tracking-wider mb-1.5 block">
                Work Email
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="sarah@company.com"
                className="w-full bg-il-dark2 border border-il-border rounded-lg px-4 py-3 text-sm text-il-white placeholder:text-il-gray-mid focus:outline-none focus:border-il-violet/60 transition-colors"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-[11px] font-semibold text-il-gray-light uppercase tracking-wider mb-1.5 block">
                  Company
                </label>
                <input
                  required
                  value={form.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  placeholder="Acme Inc"
                  className="w-full bg-il-dark2 border border-il-border rounded-lg px-4 py-3 text-sm text-il-white placeholder:text-il-gray-mid focus:outline-none focus:border-il-violet/60 transition-colors"
                />
              </div>
              <div>
                <label className="text-[11px] font-semibold text-il-gray-light uppercase tracking-wider mb-1.5 block">
                  Team Size
                </label>
                <select
                  required
                  value={form.teamSize}
                  onChange={(e) => handleChange("teamSize", e.target.value)}
                  className="w-full bg-il-dark2 border border-il-border rounded-lg px-4 py-3 text-sm text-il-white appearance-none cursor-pointer focus:outline-none focus:border-il-violet/60 transition-colors"
                >
                  <option value="" disabled>Select…</option>
                  {TEAM_SIZE_OPTIONS.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="text-[11px] font-semibold text-il-gray-light uppercase tracking-wider mb-1.5 block">
                What's your main use case?
              </label>
              <select
                required
                value={form.useCase}
                onChange={(e) => handleChange("useCase", e.target.value)}
                className="w-full bg-il-dark2 border border-il-border rounded-lg px-4 py-3 text-sm text-il-white appearance-none cursor-pointer focus:outline-none focus:border-il-violet/60 transition-colors"
              >
                <option value="" disabled>Select…</option>
                {USE_CASE_OPTIONS.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-il-violet hover:bg-il-violet-light text-white font-semibold py-4 rounded-xl text-base transition-all disabled:opacity-60"
            >
              {submitting ? "Submitting…" : "Book My Demo →"}
            </button>

            <p className="text-center text-[12px] text-il-gray-mid mt-3">
              Usually replied within 1 business hour · No spam ever
            </p>
          </form>
        ) : (
          /* Success state */
          <div className="p-8 text-center">
            <div className="bg-il-dark2 rounded-2xl p-10 mt-4">
              <div className="text-5xl mb-5">🎉</div>
              <h3 className="font-display text-2xl font-bold text-il-white mb-3">
                Demo booked!
              </h3>
              <p className="text-il-gray-light text-sm">
                We'll reach out within 1 business hour at{" "}
                <span className="text-il-white font-medium">{form.email}</span>.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
