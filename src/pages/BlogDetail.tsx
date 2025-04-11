
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CalendarDays, User, Share2 } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import SEO from "../components/SEO";
import ShareButton from "../components/ShareButton";
import AdSense from "../components/AdSense";
import { findBlogPostBySlug, getRecentPosts, formatBlogDate, BlogPost } from "../utils/blogData";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading state
    setIsLoading(true);
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      if (slug) {
        const post = findBlogPostBySlug(slug);
        const recent = getRecentPosts(3).filter(p => p.slug !== slug);
        
        if (post) {
          setBlogPost(post);
          setRelatedPosts(recent);
        }
      }
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-16 h-16 border-4 border-blog-accent border-t-transparent rounded-full animate-spin"
        ></motion.div>
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
        <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been moved.</p>
        <Button asChild>
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>
    );
  }

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
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="mb-8">
          <Link to="/blog" className="inline-flex items-center text-blog-accent hover:underline mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all articles
          </Link>
          
          {/* Ad slot before the main content */}
          <div className="my-4">
            <AdSense slot="1234567890" format="horizontal" className="py-2" />
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <AspectRatio ratio={16 / 9}>
              <img 
                src={blogPost.imageUrl || "/placeholder.svg"} 
                alt={blogPost.title}
                className="object-cover w-full h-full"
              />
            </AspectRatio>
            
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge>{blogPost.category}</Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{blogPost.title}</h1>
              
              <div className="flex flex-wrap items-center text-sm text-gray-600 mb-6 gap-4">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>{blogPost.author}</span>
                </div>
                <div className="flex items-center">
                  <CalendarDays className="h-4 w-4 mr-2" />
                  <span>{formatBlogDate(blogPost.date)}</span>
                </div>
                <div className="ml-auto">
                  <ShareButton 
                    title={blogPost.title}
                    text={blogPost.excerpt}
                    className="flex items-center text-gray-600 hover:text-blog-accent"
                  >
                    <Share2 className="h-4 w-4 mr-1" />
                    <span>Share</span>
                  </ShareButton>
                </div>
              </div>
              
              {/* First half of the content */}
              <div 
                className="blog-content prose prose-lg max-w-none mb-6"
                dangerouslySetInnerHTML={{ 
                  __html: blogPost.content.substring(0, Math.floor(blogPost.content.length / 2)) 
                }}
              />
              
              {/* Mid-content ad */}
              <div className="my-6">
                <AdSense slot="2345678901" format="rectangle" className="py-3" />
              </div>
              
              {/* Second half of the content */}
              <div 
                className="blog-content prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ 
                  __html: blogPost.content.substring(Math.floor(blogPost.content.length / 2)) 
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Ad before related posts */}
        <div className="my-6">
          <AdSense slot="3456789012" format="horizontal" className="py-2" />
        </div>
        
        {relatedPosts.length > 0 && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-6">More Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link to={`/blog/${post.slug}`} className="block h-full">
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col group">
                      <div className="overflow-hidden">
                        <img 
                          src={post.imageUrl || "/placeholder.svg"} 
                          alt={post.title}
                          className="w-full h-48 object-cover transition-transform group-hover:scale-105 duration-300"
                        />
                      </div>
                      <div className="p-4 flex-1 flex flex-col">
                        <Badge className="self-start mb-2">{post.category}</Badge>
                        <h3 className="font-medium group-hover:text-blog-accent transition-colors">{post.title}</h3>
                        <div className="mt-auto pt-3 text-xs text-gray-500">
                          {formatBlogDate(post.date)}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Bottom ad before footer */}
      <div className="container mx-auto px-4 md:px-6 pb-8">
        <AdSense slot="4567890123" format="horizontal" className="py-3" />
      </div>

      <footer className="border-t border-gray-300 py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center text-[#828282] text-sm">
          <p>
            &copy; {new Date().getFullYear()} Financepedia. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default BlogDetail;
