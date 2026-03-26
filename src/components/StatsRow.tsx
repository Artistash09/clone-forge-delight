import { useEffect, useState } from "react";

const stats = [
  { target: 98, suffix: "%", label: "Email accuracy rate" },
  { target: 143, suffix: "M", label: "Verified email addresses" },
  { target: 280, suffix: "M", label: "Total B2B contacts" },
  { target: 30, suffix: "%", label: "Mobile pick-up rate" },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const delay = setTimeout(() => {
      let current = 0;
      const step = target / 50;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        setValue(Math.floor(current));
        if (current >= target) clearInterval(timer);
      }, 20);
    }, 600);
    return () => clearTimeout(delay);
  }, [target]);

  return (
    <div className="font-display text-4xl font-extrabold text-il-white mb-1.5">
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
