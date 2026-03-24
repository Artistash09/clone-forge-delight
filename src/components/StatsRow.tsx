import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 98, suffix: "%", label: "Email accuracy rate" },
  { target: 143, suffix: "M", label: "Verified email addresses" },
  { target: 280, suffix: "M", label: "Total B2B contacts" },
  { target: 30, suffix: "%", label: "Mobile pick-up rate" },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    // Fallback for browsers that don't support IntersectionObserver
    if (!window.IntersectionObserver) {
      let current = 0;
      const step = target / 60;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        setValue(Math.floor(current));
        if (current >= target) clearInterval(timer);
      }, 20);
      return;
    }
    
    const obs = new IntersectionObserver(
      ([entry]) => {
        console.log('StatsRow IntersectionObserver:', entry.isIntersecting, entry.intersectionRatio);
        if (entry.isIntersecting) {
          let current = 0;
          const step = target / 60;
          const timer = setInterval(() => {
            current = Math.min(current + step, target);
            setValue(Math.floor(current));
            if (current >= target) clearInterval(timer);
          }, 20);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-display text-4xl font-extrabold text-il-white mb-1.5">
      {value}{suffix}
    </div>
  );
}

export default function StatsRow() {
  return (
    <div className="flex flex-wrap justify-center border-t border-il-border bg-il-dark">
      {stats.map((stat, i) => (
        <div key={i} className={`flex-1 min-w-[140px] text-center py-10 px-5 ${i < stats.length - 1 ? "border-r border-il-border" : ""}`}>
          <AnimatedNumber target={stat.target} suffix={stat.suffix} />
          <div className="text-sm text-il-gray-light">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
