const testimonials = [
  { text: "We tested four enrichment tools side by side. Inbound Labs was the only one where the data didn't need cleaning after. Everything came back accurate and ready to use.", name: "Felix Fernandez", role: "CEO · Firefly Growth Accelerator", gradient: "from-[#2a3a5a] to-[#1a2a4a]" },
  { text: "The job change filter helps us reach qualified leads the moment they switch roles — before anyone else does. This alone is worth the entire subscription.", name: "Sönke Venjacob", role: "Founder · Platinum Agency", gradient: "from-[#3a2a5a] to-[#2a1a4a]" },
  { text: "We've used a lot of email finders. Inbound Labs is the only one where the emails are actually verified. Our bounce rate dropped by over 70% in the first month.", name: "Pete Lipton", role: "Snr. Director of Sales · Snyk", gradient: "from-[#2a5a3a] to-[#1a4a2a]" },
  { text: "Syncing lead lists to our CRM used to take hours. With Inbound Labs it's instant, and the data is clean on arrival. Our reps actually use it now.", name: "Brigitta Ruha", role: "Founder · Growth Today", gradient: "from-[#5a3a2a] to-[#4a2a1a]" },
  { text: "Finding verified mobile numbers felt like a cheat code. We're booking 40% more calls with hard-to-reach executives. Nothing else comes close.", name: "Henry Clayton", role: "Principal SDR · Allego", gradient: "from-[#2a2a5a] to-[#1a1a4a]" },
  { text: "The verified mobile filter is a game changer. Our team prioritizes high-quality leads and cuts through the noise on every campaign we run.", name: "Tai Shiver", role: "Manager of BD · Loopio", gradient: "from-[#5a2a2a] to-[#4a1a1a]" },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="bg-card border border-il-border rounded-[14px] p-6 w-[320px] flex-shrink-0 hover:border-il-gray-mid/40 transition-colors">
      <div className="text-4xl text-il-violet/20 font-serif leading-none mb-3">"</div>
      <p className="text-sm text-il-text-muted leading-relaxed mb-4">{t.text}</p>
      <div className="flex items-center gap-2.5">
        <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-base flex-shrink-0`}>
          👤
        </div>
        <div>
          <div className="text-sm font-semibold text-il-white">{t.name}</div>
          <div className="text-xs text-il-gray-light">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const allCards = [...testimonials, ...testimonials];

  return (
    <div>
      <div className="text-center py-10 text-sm text-il-gray-light">
        Trusted by <strong className="text-il-white">15,000+</strong> companies worldwide
      </div>
      <div className="overflow-hidden py-4">
        <div className="ticker-animation flex gap-5 w-max">
          {allCards.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-2.5 py-6 px-10 flex-wrap">
        {[
          { icon: "★", label: "4.8 on G2", color: "text-amber-400" },
          { icon: "✓", label: "GDPR Compliant", color: "text-il-green" },
          { icon: "📅", label: "Weekly data refresh", color: "" },
          { icon: "🔒", label: "SOC2 Ready", color: "" },
        ].map((pill, i) => (
          <div key={i} className="bg-card border border-il-border rounded-full px-3.5 py-1 text-sm flex items-center gap-1.5 text-il-gray-light">
            <span className={pill.color}>{pill.icon}</span> {pill.label}
          </div>
        ))}
      </div>
    </div>
  );
}
