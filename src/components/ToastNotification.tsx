import { useState, useEffect } from "react";

const toastData = [
  ["Sarah from Austin 🇺🇸", "just started a free trial"],
  ["James from London 🇬🇧", "just booked a demo"],
  ["Priya from Toronto 🇨🇦", "just upgraded to Growth"],
  ["Marcus from Berlin 🇩🇪", "just exported 500 contacts"],
  ["Yuki from Tokyo 🇯🇵", "just signed up"],
  ["Carlos from Madrid 🇪🇸", "just pushed 200 leads to HubSpot"],
  ["Aisha from Dubai 🇦🇪", "just started a free trial"],
  ["Tom from NYC 🇺🇸", "just booked a demo"],
];

export default function ToastNotification() {
  const [visible, setVisible] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const showToast = () => {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
        setIdx((prev) => (prev + 1) % toastData.length);
      }, 4500);
    };

    const initialTimeout = setTimeout(() => {
      showToast();
      const interval = setInterval(showToast, 9000);
      return () => clearInterval(interval);
    }, 4000);

    return () => clearTimeout(initialTimeout);
  }, []);

  const [name, action] = toastData[idx];

  return (
    <div
      className="fixed bottom-6 left-6 z-[999] bg-card border border-il-border rounded-xl px-4 py-3.5 flex items-center gap-3 shadow-[0_12px_40px_rgba(0,0,0,0.5)] max-w-[320px] transition-all duration-400"
      style={{
        transform: visible ? "translateX(0)" : "translateX(-120%)",
        opacity: visible ? 1 : 0,
      }}
    >
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-il-violet to-il-violet-light flex items-center justify-center text-base flex-shrink-0">
        🚀
      </div>
      <div>
        <strong className="text-il-white text-sm block">{name}</strong>
        <span className="text-il-gray-light text-sm">{action}</span>
      </div>
    </div>
  );
}
