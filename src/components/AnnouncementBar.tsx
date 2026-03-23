import { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-il-violet/20 via-il-dark2 to-il-violet/20 border-b border-il-border px-4 py-2.5 text-sm">
      <span>🚀</span>
      <strong className="text-il-white">Launch offer:</strong>
      <span className="text-il-text-muted">20% LIFETIME discount — ends soon.</span>
      <Link to="/pricing" className="text-il-violet-light hover:text-il-white font-medium ml-1 transition-colors">
        See Plans →
      </Link>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-il-gray-light hover:text-il-white transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
