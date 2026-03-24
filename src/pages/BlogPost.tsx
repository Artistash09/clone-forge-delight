import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { sanityClient } from "@/lib/sanity";
import { POSTS_QUERY, POST_BY_SLUG_QUERY, SanityPost } from "@/lib/queries";
import { PortableText } from '@portabletext/react';

const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case 'cold email': return 'bg-blue-900/30';
    case 'prospecting': return 'bg-violet-900/30';
    case 'data & tools': return 'bg-green-900/30';
    case 'linkedin': return 'bg-blue-800/30';
    case 'templates': return 'bg-orange-900/30';
    default: return 'bg-il-violet/10';
  }
};

const getCategoryEmoji = (category: string) => {
  switch (category.toLowerCase()) {
    case 'cold email': return '📧';
    case 'prospecting': return '🎯';
    case 'data & tools': return '📊';
    case 'linkedin': return '💼';
    case 'templates': return '📝';
    default: return '📄';
  }
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<SanityPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<SanityPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPostAndRelated = async () => {
      if (!slug) return;

      try {
        // Fetch the current post
        const fetchedPost = await sanityClient.fetch(POST_BY_SLUG_QUERY, { slug });
        
        if (!fetchedPost) {
          setError('Post not found');
          return;
        }

        setPost(fetchedPost);

        // Fetch all posts for related posts
        const allPosts = await sanityClient.fetch(POSTS_QUERY);
        const filtered = allPosts
          .filter((p: SanityPost) => p._id !== fetchedPost._id)
          .slice(0, 3);
        setRelatedPosts(filtered);

      } catch (err) {
        setError('Failed to fetch post');
        console.error('Error fetching post:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostAndRelated();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-il-violet"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
          <h1 className="text-2xl font-bold text-il-white mb-4">Post not found</h1>
          <Link to="/blog" className="text-il-violet hover:text-il-violet-light transition-colors">
            ← Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-il-dark border-b border-il-border pt-16 pb-12 px-6">
        <div className="max-w-[720px] mx-auto">
          {/* Breadcrumb */}
          <Link 
            to="/blog" 
            className="text-il-gray-light text-sm hover:text-il-white transition-colors mb-6 inline-block"
          >
            ← Blog
          </Link>

          {/* Category Pill */}
          <div className="inline-block px-3 py-1 bg-il-violet/10 text-il-violet-light text-xs font-medium rounded-full mb-6">
            {post.category}
          </div>

          {/* Title */}
          <h1 className="section-title text-il-white text-left max-w-[720px]">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-il-gray-light text-lg leading-relaxed max-w-[640px] mt-4">
            {post.excerpt}
          </p>

          {/* Metadata */}
          <div className="flex flex-wrap items-center text-sm text-il-gray-light mt-6 gap-2">
            <span>{post.author}</span>
            {post.authorRole && (
              <>
                <span>{post.authorRole}</span>
                <span>·</span>
              </>
            )}
            <span>{post.readTime}</span>
            <span>·</span>
            <span>{formatDate(post.publishedAt)}</span>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="max-w-[720px] mx-auto px-6 py-12">
        {post.body ? (
          <div className="prose prose-invert max-w-none text-il-gray-light
            [&_h2]:text-il-white [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4
            [&_h3]:text-il-white [&_h3]:font-semibold [&_h3]:text-xl [&_h3]:mt-8 [&_h3]:mb-3
            [&_p]:leading-relaxed [&_p]:mb-5
            [&_a]:text-il-violet [&_a]:hover:text-il-violet-light
          ">
            <PortableText value={post.body} />
          </div>
        ) : (
          <div className="text-il-gray-light text-center py-12">
            Full article coming soon.
          </div>
        )}
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-il-dark border-t border-il-border py-12 px-6">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="text-il-white font-semibold text-lg mb-6">More from the Sales Hub</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <Link 
                  key={relatedPost._id}
                  to={`/blog/${relatedPost.slug.current}`}
                  className="group block"
                >
                  <div className="bg-il-dark2 border border-il-border rounded-xl overflow-hidden hover:border-il-violet/20 transition-colors cursor-pointer">
                    <div className={`h-36 ${getCategoryColor(relatedPost.category)} flex items-center justify-center text-4xl`}>
                      {getCategoryEmoji(relatedPost.category)}
                    </div>
                    <div className="p-5">
                      <div className="inline-block px-2 py-1 bg-il-violet/10 text-il-violet-light text-xs font-medium rounded-full mb-2">
                        {relatedPost.category}
                      </div>
                      <h3 className="font-semibold text-il-white text-[15px] leading-snug mb-2 group-hover:text-il-violet-light transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-xs text-il-gray-light line-clamp-3 mb-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-il-gray-light">
                        <span>{relatedPost.readTime}</span>
                        <span className="text-il-violet-light font-medium group-hover:translate-x-1 transition-transform">
                          Read →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Band */}
      <CTABand />

      <Footer />
    </div>
  );
}
