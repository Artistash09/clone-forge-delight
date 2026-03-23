export default function ChromeExtensionSection() {
  return (
    <div className="border-t border-il-border">
      <div className="py-20 px-6 md:px-10 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="section-label">Chrome Extension</div>
          <div className="font-display text-4xl font-extrabold leading-[1.1] mb-4 text-il-white tracking-tight">
            Prospect from<br />anywhere online
          </div>
          <p className="text-il-gray-light text-base leading-relaxed mb-7">
            Find verified emails and mobile numbers directly on LinkedIn, company websites, or anywhere else on the web — without leaving your browser.
          </p>
          <div className="flex items-center gap-3 mb-4">
            <button className="bg-il-violet text-primary-foreground px-6 py-3 text-[15px] font-semibold rounded-lg hover:bg-il-violet-light transition-all">
              Add to Chrome — Free
            </button>
          </div>
          <div className="flex items-center gap-4 text-sm text-il-gray-light">
            <span>⭐ 4.8 · 12,000 installs</span>
            <span>·</span>
            <span>Works on any website</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { badge: "🌐 Any website", icon: "🔍", label: "Find contacts on any company page" },
            { badge: "💼 LinkedIn", icon: "🔗", label: "Enrich profiles instantly on LinkedIn" },
          ].map((card, i) => (
            <div key={i} className="bg-card border border-il-border rounded-[14px] h-60 flex items-center justify-center relative">
              <div className="absolute top-3.5 left-3.5 bg-il-dark2/50 border border-il-border rounded-lg px-2.5 py-1 text-[11px] text-il-text-muted">
                {card.badge}
              </div>
              <div className="text-center p-5">
                <div className="text-5xl mb-2">{card.icon}</div>
                <p className="text-xs text-il-gray-light">{card.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
