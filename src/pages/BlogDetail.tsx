import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CalendarDays, User, Share2 } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// Removed Table components as they are no longer used in the sidebar
// import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Header from "../components/Header";
import SEO from "../components/SEO";
import ShareButton from "../components/ShareButton";
import AdSense from "../components/AdSense"; // Assuming this component handles ad logic
import { findBlogPostBySlug, getRecentPosts, formatBlogDate, BlogPost } from "../utils/blogData"; // Ensure these utils are correct

// Interface for BlogPost (assuming it looks something like this)
// interface BlogPost {
//   id: number | string;
//   slug: string;
//   title: string;
//   excerpt: string;
//   content: string; // Expecting sanitized HTML string
//   imageUrl?: string;
//   author: string;
//   date: string | Date; // Adjust type as needed
//   category: string;
// }

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Optional: for showing specific errors

  useEffect(() => {
    const fetchPostData = async () => {
      setIsLoading(true);
      setError(null); // Reset error on new load
      setBlogPost(null); // Reset post on new load
      setRelatedPosts([]);
      window.scrollTo(0, 0);

      // Simulate async delay if needed, replace with actual API call timing
      await new Promise(resolve => setTimeout(resolve, 300));

      try {
        if (!slug) {
          throw new Error("No article slug provided.");
        }

        // Assuming findBlogPostBySlug might become async in the future
        // const post = await fetchPostBySlugFromAPI(slug);
        const post = findBlogPostBySlug(slug); // Current synchronous implementation

        if (post) {
          setBlogPost(post);
          // Fetch related posts (sync for now, could also be async)
          const recent = getRecentPosts(3).filter(p => p.slug !== slug);
          setRelatedPosts(recent);
        } else {
          // If findBlogPostBySlug returns null/undefined, treat as Not Found
          setError("Article not found.");
        }
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError(err instanceof Error ? err.message : "An unknown error occurred.");
        setBlogPost(null); // Ensure post is null on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostData();

  }, [slug]); // Dependency array includes slug

  // Loading State (Consider replacing with Skeleton Loaders for better UX)
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f6f6f0]">
        {/* Suggestion: Implement Skeleton loaders here that mimic page layout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-16 h-16 border-4 border-blog-accent border-t-transparent rounded-full animate-spin"
        ></motion.div>
      </div>
    );
  }

  // Error State / Not Found State
  if (error || !blogPost) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#f6f6f0]">
        <Header /> {/* Show header even on error page */}
        <div className="text-center mt-20">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">
             {error || "The article you're looking for doesn't exist or has been moved."}
          </p>
          <Button asChild variant="outline">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
         {/* Optional: Add footer here too */}
      </div>
    );
  }

  // --- Main Content Render ---
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO
        title={`${blogPost.title} | Financepedia Blog`}
        description={blogPost.excerpt}
        canonicalUrl={`/blog/${blogPost.slug}`}
        // Add image URL for social sharing meta tags if available
        imageUrl={blogPost.imageUrl}
      />
      <Header />

      <main className="container mx-auto pt-24 px-4 pb-12"> {/* Increased top padding */}
        <div className="mb-8"> {/* Increased bottom margin */}
          <Link to="/blog" className="inline-flex items-center text-blog-accent hover:underline mb-6 text-sm"> {/* Added margin */}
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all articles
          </Link>

          {/* Optional: Ad slot before the main content grid */}
          <div className="my-6">
            <AdSense slot="1234567890" format="auto" responsive="true" className="py-2" />
          </div>

          {/* Using CSS Grid for layout: Main content and Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 items-start"> {/* Use gap-8, items-start for sticky */}

            {/* Main content column */}
            <article className="lg:col-span-2 bg-white rounded-lg shadow-md overflow-hidden"> {/* Slightly larger shadow */}
              <AspectRatio ratio={16 / 9} className="bg-gray-100"> {/* Added bg color */}
                <img
                  src={blogPost.imageUrl || "/placeholder.svg"} // Ensure placeholder exists
                  alt={blogPost.title} // Consider more descriptive alt text if possible
                  className="object-cover w-full h-full"
                  // Eager load main image for LCP, lazy load others
                  // loading="lazy" // Removed for main image
                />
              </AspectRatio>

              <div className="p-5 sm:p-6 md:p-8"> {/* Increased padding */}
                {/* Category Badge */}
                <div className="mb-3">
                  <Link to={`/blog?category=${encodeURIComponent(blogPost.category)}`}>
                     <Badge variant="secondary" className="hover:bg-primary/10 cursor-pointer">
                       {blogPost.category}
                     </Badge>
                  </Link>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight"> {/* Larger title, adjusted margin */}
                  {blogPost.title}
                </h1>

                {/* Metadata: Author, Date, Share */}
                <div className="flex flex-wrap items-center text-sm text-gray-600 mb-6 gap-x-4 gap-y-2"> {/* Adjusted gap, margin */}
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1.5" />
                    <span>{blogPost.author}</span>
                  </div>
                  <div className="flex items-center">
                    <CalendarDays className="h-4 w-4 mr-1.5" />
                    <time dateTime={new Date(blogPost.date).toISOString()}> {/* Semantic time */}
                      {formatBlogDate(blogPost.date)}
                    </time>
                  </div>
                  <div className="ml-auto"> {/* Pushes share button to the right */}
                    <ShareButton
                      title={blogPost.title}
                      text={blogPost.excerpt}
                      url={typeof window !== 'undefined' ? window.location.href : ''} // Pass full URL
                      className="flex items-center text-gray-600 hover:text-blog-accent p-1" // Added padding for easier clicking
                    >
                      <Share2 className="h-4 w-4 mr-1" />
                      <span>Share</span>
                    </ShareButton>
                  </div>
                </div>

                {/* --- Main Blog Post Content --- */}
                <div
                  className="blog-content prose prose-sm sm:prose lg:prose-lg max-w-none prose-img:rounded-md prose-img:shadow-sm prose-a:text-blog-accent hover:prose-a:underline" // Added styles for images/links within content
                  dangerouslySetInnerHTML={{ __html: blogPost.content }} // Render entire sanitized HTML
                />
                {/* Ensure blogPost.content is sanitized before rendering to prevent XSS */}

                {/* Ad after the main content */}
                <div className="my-8"> {/* Increased margin */}
                  <AdSense slot="2345678901" format="auto" responsive="true" className="py-2" />
                </div>

              </div> {/* End padding div */}
            </article> {/* End Main content column */}

            {/* --- Sidebar column --- */}
            <aside className="lg:col-span-1 lg:sticky lg:top-24 space-y-6 mt-6 lg:mt-0"> {/* Sticky top matches header+padding, space between items */}

              {/* Sidebar Ad */}
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-sm font-semibold mb-3 text-gray-500 uppercase tracking-wider">Advertisement</h3>
                <AdSense slot="3456789012" format="auto" responsive="true" className="py-2 flex justify-center" /> {/* Centered ad maybe */}
              </div>

              {/* Related Articles Section */}
              {relatedPosts.length > 0 && (
                <div className="bg-white rounded-lg shadow-md p-4">
                  <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((post) => (
                      <Link
                        key={post.id}
                        to={`/blog/${post.slug}`}
                        className="block group"
                        onClick={() => window.scrollTo(0, 0)} // Ensure scroll to top on click
                      >
                        <div className="flex gap-4 items-start"> {/* Increased gap */}
                          <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-md bg-gray-100"> {/* Slightly larger image + bg */}
                            <img
                              src={post.imageUrl || "/placeholder.svg"}
                              alt={post.title} // Use post title for alt
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              loading="lazy" // Lazy load related post images
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold group-hover:text-blog-accent transition-colors line-clamp-3 text-sm leading-snug"> {/* Use line-clamp */}
                              {post.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">
                               <time dateTime={new Date(post.date).toISOString()}>
                                  {formatBlogDate(post.date)}
                                </time>
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside> {/* End Sidebar column */}

          </div> {/* End Grid */}
        </div> {/* End Inner Container div */}
      </main>

      {/* Bottom ad before footer */}
      <div className="container mx-auto px-4 pb-8"> {/* Increased bottom padding */}
        <AdSense slot="4567890123" format="auto" responsive="true" className="py-2" />
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-300 py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center text-[#828282] text-sm">
          <p>
            &copy; {new Date().getFullYear()} Financepedia. All rights reserved.
            {/* Consider adding links to Privacy Policy, Terms, etc. */}
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default BlogDetail;