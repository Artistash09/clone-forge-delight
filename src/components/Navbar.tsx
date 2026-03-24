import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import BookDemoModal from "@/components/BookDemoModal";

const navItems = [
  { label: "Platform", path: "/database" },
  { label: "Our Data", path: "/our-data" },
  { label: "Why Us", path: "/why-us" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Pricing", path: "/pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
    <nav
      className={`sticky top-0 z-50 backdrop-blur-xl border-b border-il-border px-6 md:px-10 flex items-center justify-between h-16 transition-shadow ${
        scrolled ? "shadow-[0_4px_40px_rgba(0,0,0,0.4)]" : ""
      }`}
      style={{ background: "rgba(12,1,24,0.96)" }}
    >
      <Link to="/" className="font-display text-lg font-bold text-il-white flex items-center gap-2">
        <img src={logo} alt="Inbound Labs" className="w-8 h-8 object-contain" />
        inbound labs
      </Link>

      {/* Desktop */}
      <ul className="hidden lg:flex items-center gap-1">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`text-sm px-3.5 py-2 rounded-md transition-colors block ${
                location.pathname === item.path
                  ? "text-il-white"
                  : "text-il-text-muted hover:text-il-white hover:bg-il-dark2"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
        {/* Tools Dropdown */}
        <li className="relative">
          <button
            onClick={() => setToolsOpen(!toolsOpen)}
            className={`text-sm px-3.5 py-2 rounded-md transition-colors flex items-center gap-1 ${
              toolsOpen || ["/email-finder", "/domain-search", "/chrome-extension"].includes(location.pathname)
                ? "text-il-white"
                : "text-il-text-muted hover:text-il-white hover:bg-il-dark2"
            }`}
          >
            Tools
            <ChevronDown size={16} className={toolsOpen ? "rotate-180" : ""} />
          </button>
          {toolsOpen && (
            <div className="absolute top-full left-0 mt-1 bg-il-dark2 border border-il-border rounded-lg shadow-lg py-2 min-w-[160px] z-50">
              <Link
                to="/email-finder"
                className="block px-4 py-2 text-sm text-il-gray-light hover:text-il-white hover:bg-il-dark transition-colors"
              >
                Email Finder
              </Link>
              <Link
                to="/domain-search"
                className="block px-4 py-2 text-sm text-il-gray-light hover:text-il-white hover:bg-il-dark transition-colors"
              >
                Domain Search
              </Link>
              <Link
                to="/chrome-extension"
                className="block px-4 py-2 text-sm text-il-gray-light hover:text-il-white hover:bg-il-dark transition-colors"
              >
                Chrome Extension
              </Link>
            </div>
          )}
        </li>
      </ul>

      <div className="hidden lg:flex items-center gap-3">
        <button className="text-il-text-muted text-sm px-3.5 py-2 rounded-md hover:text-il-white hover:bg-il-dark2 transition-colors">
          Sign in
        </button>
        <button onClick={() => setDemoOpen(true)} className="text-il-white text-sm px-4 py-2.5 rounded-lg border border-il-border hover:border-il-violet/40 transition-colors font-medium">
          Book Demo
        </button>
        <Link
          to="/pricing"
          className="bg-il-violet text-primary-foreground px-5 py-2.5 text-sm font-semibold rounded-lg hover:bg-il-violet-light transition-all hover:-translate-y-0.5"
        >
          Start Free
        </Link>
      </div>

      {/* Mobile toggle */}
      <button className="lg:hidden text-il-white" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b border-il-border p-6 flex flex-col gap-3 lg:hidden z-50">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-il-text-muted hover:text-il-white text-sm py-2"
            >
              {item.label}
            </Link>
          ))}
          <div className="border-t border-il-border pt-3 mt-2">
            <div className="text-il-gray-light text-xs uppercase tracking-widest mb-2">Tools</div>
            <Link
              to="/email-finder"
              className="text-il-text-muted hover:text-il-white text-sm py-2 block"
            >
              Email Finder
            </Link>
            <Link
              to="/domain-search"
              className="text-il-text-muted hover:text-il-white text-sm py-2 block"
            >
              Domain Search
            </Link>
            <Link
              to="/chrome-extension"
              className="text-il-text-muted hover:text-il-white text-sm py-2 block"
            >
              Chrome Extension
            </Link>
          </div>
          <Link
            to="/pricing"
            className="bg-il-violet text-primary-foreground px-5 py-3 text-sm font-semibold rounded-lg text-center mt-2"
          >
            Start Free Trial
          </Link>
        </div>
      )}
    </nav>
    <BookDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
}
