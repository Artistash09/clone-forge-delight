import { useState, useEffect } from "react";
import { X, Check } from "lucide-react";

export default function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    let triggered = false;
    const handler = (e: MouseEvent) => {
      if (e.clientY < 10 && !triggered) {
        triggered = true;
        setOpen(true);
      }
    };
    // Also trigger after 45s as fallback
    const timeout = setTimeout(() => {
      if (!triggered) {
        triggered = true;
        setOpen(true);
      }
    }, 45000);

    document.addEventListener("mouseleave", handler);
    return () => {
      document.removeEventListener("mouseleave", handler);
      clearTimeout(timeout);
    };
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md mx-4 rounded-2xl border border-il-violet/40 bg-gradient-to-b from-il-dark2 to-il-dark p-8 text-center shadow-[0_0_80px_rgba(124,58,237,0.25)]">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-il-gray-light hover:text-il-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-5xl mb-5">🎁</div>
        <h2 className="text-2xl font-bold text-il-white mb-3">
          Wait — grab 50 free credits
        </h2>
        <p className="text-il-gray-light text-sm mb-6 leading-relaxed">
          Don't leave empty-handed. Drop your email and we'll unlock 50 verified contact lookups, free.
        </p>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full px-4 py-3 rounded-lg border border-il-border bg-transparent text-il-white placeholder:text-il-gray-light mb-4 focus:outline-none focus:border-il-violet transition-colors"
        />

        <button className="w-full py-3 rounded-lg bg-il-violet hover:bg-il-violet-light text-white font-semibold transition-colors text-base">
          Claim My Free Credits →
        </button>

        <div className="flex items-center justify-center gap-5 mt-5 text-xs text-il-gray-light">
          <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-il-green" /> No credit card</span>
          <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-il-green" /> Instant access</span>
          <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-il-green" /> GDPR compliant</span>
        </div>
      </div>
    </div>
  );
}
