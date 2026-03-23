import { useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[998] bg-il-dark2 border-t border-il-border px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-il-text-muted text-sm leading-relaxed">
        We use cookies to improve your experience, analyse traffic, and show personalised content. By clicking "Accept", you agree to our{" "}
        <a href="#" className="text-il-violet-light hover:underline">Cookie Policy</a> and{" "}
        <a href="#" className="text-il-violet-light hover:underline">Privacy Policy</a>.
      </p>
      <div className="flex items-center gap-3 flex-shrink-0">
        <button
          onClick={() => setVisible(false)}
          className="text-il-text-muted text-sm px-4 py-2 rounded-lg border border-il-border hover:text-il-white hover:border-il-gray-light transition-colors"
        >
          Essential only
        </button>
        <button
          onClick={() => setVisible(false)}
          className="bg-il-violet text-white text-sm px-5 py-2 rounded-lg font-medium hover:bg-il-violet-light transition-colors"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
