import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Blog() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
    // Reset form
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative py-24 px-6 md:px-10 text-center">
        <div className="max-w-[800px] mx-auto">
          <div className="section-label">Blog</div>
          <h1 className="section-title text-il-white">
            Coming Soon
          </h1>
          <p className="text-il-text-muted text-lg max-w-[600px] mx-auto mb-8">
            We're building the Inbound Labs Sales Hub — cold email tactics, prospecting guides, and data-backed templates. Enter your email to get notified when we launch.
          </p>
          
          {/* Email Signup */}
          <div className="max-w-[400px] mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-il-dark2 border border-il-border rounded-lg text-il-white placeholder:text-il-gray-light focus:outline-none focus:border-il-violet/50 transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-il-violet text-primary-foreground px-6 py-3 text-sm font-semibold rounded-lg hover:bg-il-violet-light transition-all hover:-translate-y-0.5"
              >
                Notify Me
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
