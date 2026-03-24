import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const changelogEntries = [
  {
    date: "Mar 2025",
    type: "New",
    title: "Blog & content hub launched",
    description: "Sales Hub is now live — tactics, templates, and cold email guides updated weekly. Accessible from the main navigation.",
  },
  {
    date: "Mar 2025",
    type: "Improved",
    title: "Chrome extension — LinkedIn enrichment 2× faster",
    description: "Reduced enrichment time from ~3 seconds to under 1.5 seconds per contact. Also fixed a bug where the extension would sometimes show cached data.",
  },
  {
    date: "Feb 2025",
    type: "New",
    title: "Intent Data Signals on Growth plan",
    description: "Filter prospect searches by buying intent signals. Identify accounts actively researching solutions in your category. Previously Enterprise-only.",
  },
  {
    date: "Feb 2025",
    type: "Improved",
    title: "Mobile number coverage expanded to 60M",
    description: "Added 8M new verified direct mobile numbers across North America and Western Europe. Coverage now includes more SMB and mid-market contacts.",
  },
  {
    date: "Feb 2025",
    type: "Fixed",
    title: "HubSpot sync — duplicate contact handling",
    description: "Fixed an issue where contacts with multiple email addresses were creating duplicate CRM records. Deduplication now runs before sync.",
  },
  {
    date: "Jan 2025",
    type: "New",
    title: "Job Change Alerts — real-time notifications",
    description: "Get notified the moment a saved contact changes company. Catch job changers before anyone else and reach out while they're still evaluating vendors.",
  },
  {
    date: "Jan 2025",
    type: "Improved",
    title: "Bulk enrichment throughput — 10,000 rows/batch",
    description: "Increased batch processing limit from 2,500 to 10,000 rows. Average processing time for a 10k file is now under 4 minutes.",
  },
  {
    date: "Dec 2024",
    type: "New",
    title: "Salesforce bi-directional sync",
    description: "Push enriched contacts to Salesforce and pull back CRM activity data. Enrichment now updates existing Salesforce records rather than creating duplicates.",
  },
  {
    date: "Dec 2024",
    type: "Improved",
    title: "Search speed — 40% faster results",
    description: "Rebuilt the search index for the main contact database. Filters now apply in real-time without a full-page reload.",
  },
  {
    date: "Nov 2024",
    type: "New",
    title: "API v2 released",
    description: "New REST API with improved rate limits, better error messages, and webhook support. v1 remains supported until June 2025.",
  },
];

const getTagStyles = (type: string) => {
  switch (type) {
    case "New":
      return "bg-green-400/15 text-green-400";
    case "Improved":
      return "bg-blue-400/15 text-blue-400";
    case "Fixed":
      return "bg-amber-400/15 text-amber-400";
    default:
      return "bg-il-gray/15 text-il-gray-light";
  }
};

export default function Changelog() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <header className="pt-20 pb-8 px-6 max-w-[780px] mx-auto">
        <div className="section-label inline-block mb-4">What&apos;s New</div>
        <h1 className="section-title text-4xl md:text-5xl text-left mb-4">
          Changelog
        </h1>
        <p className="text-il-gray-light text-lg leading-relaxed mb-6">
          New features, improvements, and fixes. Updated every time we ship.
        </p>
        <div className="inline-flex items-center gap-2 bg-il-dark2 border border-il-border rounded-full px-4 py-2 text-sm text-il-gray-light cursor-pointer hover:border-il-violet/30 transition-colors">
          <span>Subscribe to updates →</span>
        </div>
      </header>

      {/* Entries */}
      <section className="max-w-[780px] mx-auto px-6 pb-20">
        {changelogEntries.map((entry, index) => (
          <div
            key={index}
            className="grid grid-cols-[120px_1fr] gap-6 py-8 border-b border-il-border last:border-b-0"
          >
            <div className="text-il-gray-light text-sm font-medium pt-1">
              {entry.date}
            </div>
            <div>
              <span
                className={`inline-block text-xs font-bold uppercase px-2 py-0.5 rounded mb-2 ${getTagStyles(
                  entry.type
                )}`}
              >
                {entry.type}
              </span>
              <h3 className="text-il-white font-semibold text-[16px] mt-1 mb-2">
                {entry.title}
              </h3>
              <p className="text-il-gray-light text-sm leading-relaxed">
                {entry.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}
