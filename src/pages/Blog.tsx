import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sanityClient } from "@/lib/sanity";
import { POSTS_QUERY, SanityPost } from "@/lib/queries";

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Cold Email', value: 'cold-email' },
  { label: 'Prospecting', value: 'prospecting' },
  { label: 'Data & Tools', value: 'data' },
  { label: 'LinkedIn', value: 'linkedin' },
  { label: 'Templates', value: 'templates' },
];

const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case 'cold-email': return 'bg-blue-900/30';
    case 'prospecting': return 'bg-violet-900/30';
    case 'data': return 'bg-green-900/30';
    case 'linkedin': return 'bg-blue-800/30';
    case 'templates': return 'bg-orange-900/30';
    default: return 'bg-il-violet/10';
  }
};

const getCategoryEmoji = (category: string) => {
  switch (category.toLowerCase()) {
    case 'cold-email': return '📧';
    case 'prospecting': return '🎯';
    case 'data': return '📊';
    case 'linkedin': return '💼';
    case 'templates': return '📝';
    default: return '📄';
  }
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export default function Blog() {
  const [posts, setPosts] = useState<SanityPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await sanityClient.fetch(POSTS_QUERY);
        setPosts(fetchedPosts);
      } catch (err) {
        setError('Failed to fetch posts');
        console.error('Error fetching posts:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = activeCategory === 'all'
    ? posts
    : posts.filter(post => post.category === activeCategory);

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="text-center pt-20 pb-12 px-6 glow-violet">
          <div className="section-label">Sales Hub & Blog</div>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-il-white leading-tight mb-4">
            Become a better prospector.
          </h1>
          <p className="text-il-gray-light text-lg max-w-[600px] mx-auto mb-6">
            Tactics, templates, and data-backed guides from the Inbound Labs team — used by 15,000+ sales professionals.
          </p>
          <div className="flex justify-center gap-2 flex-wrap mt-6">
            {categories.map(category => (
              <div key={category.value} className="h-8 w-20 bg-il-dark2 rounded-lg animate-pulse" />
            ))}
          </div>
        </section>

        <div className="max-w-[1100px] mx-auto px-6 pb-20 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-il-dark2 rounded-xl h-48 animate-pulse" />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="text-center pt-20 pb-12 px-6 glow-violet">
          <div className="section-label">Sales Hub & Blog</div>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-il-white leading-tight mb-4">
            Become a better prospector.
          </h1>
          <p className="text-il-gray-light text-lg max-w-[600px] mx-auto mb-6">
            Tactics, templates, and data-backed guides from the Inbound Labs team — used by 15,000+ sales professionals.
          </p>
        </section>

        <div className="max-w-[1100px] mx-auto px-6 pb-20 mt-8">
          <div className="text-center text-il-gray-light">
            Couldn't load posts. Check back soon.
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="text-center pt-20 pb-12 px-6 glow-violet">
        <div className="section-label">Sales Hub & Blog</div>
        <h1 className="font-display text-4xl md:text-6xl font-extrabold text-il-white leading-tight mb-4">
          Become a better prospector.
        </h1>
        <p className="text-il-gray-light text-lg max-w-[600px] mx-auto mb-6">
          Tactics, templates, and data-backed guides from the Inbound Labs team — used by 15,000+ sales professionals.
        </p>
        
        {/* Category Filter Pills */}
        <div className="flex justify-center gap-2 flex-wrap mt-6">
          {categories.map(category => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                activeCategory === category.value
                  ? 'bg-il-violet/10 border-il-violet text-il-violet-light'
                  : 'border-il-border text-il-gray-light hover:text-il-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <div className="max-w-[1100px] mx-auto px-6 pb-20 mt-8">
        {filteredPosts.length === 0 ? (
          <div className="text-center text-il-gray-light">
            No posts in this category yet — check back soon.
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {featuredPost && (
              <Link 
                to={`/blog/${featuredPost.slug.current}`}
                className="block mb-8 group"
              >
                <div className="bg-il-dark2 border border-il-border rounded-2xl overflow-hidden flex flex-col md:flex-row hover:border-il-violet/20 transition-colors">
                  <div className={`md:w-1/2 ${getCategoryColor(featuredPost.category)} flex items-center justify-center text-6xl`}>
                    {getCategoryEmoji(featuredPost.category)}
                  </div>
                  <div className="p-8">
                    <div className="inline-block px-3 py-1 bg-il-violet/10 text-il-violet-light text-xs font-medium rounded-full mb-4">
                      {featuredPost.category}
                    </div>
                    <h2 className="font-display text-2xl font-extrabold text-il-white leading-tight mb-3 group-hover:text-il-violet-light transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-il-gray-light text-sm leading-relaxed mb-4 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-il-gray-light">
                      <span>{featuredPost.readTime} • {formatDate(featuredPost.publishedAt)}</span>
                      <span className="text-il-violet-light font-medium group-hover:translate-x-1 transition-transform">
                        Read article →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Remaining Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {remainingPosts.map(post => (
                <Link 
                  key={post._id}
                  to={`/blog/${post.slug.current}`}
                  className="group block"
                >
                  <div className="bg-il-dark2 border border-il-border rounded-xl overflow-hidden hover:border-il-violet/20 transition-colors cursor-pointer">
                    <div className={`h-36 ${getCategoryColor(post.category)} flex items-center justify-center text-4xl`}>
                      {getCategoryEmoji(post.category)}
                    </div>
                    <div className="p-5">
                      <div className="inline-block px-2 py-1 bg-il-violet/10 text-il-violet-light text-xs font-medium rounded-full mb-2">
                        {post.category}
                      </div>
                      <h3 className="font-semibold text-il-white text-[15px] leading-snug mb-2 group-hover:text-il-violet-light transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-xs text-il-gray-light line-clamp-3 mb-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-il-gray-light">
                        <span>{post.readTime}</span>
                        <span className="text-il-violet-light font-medium group-hover:translate-x-1 transition-transform">
                          Read →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
