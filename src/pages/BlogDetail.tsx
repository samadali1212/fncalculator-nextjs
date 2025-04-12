import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CalendarDays, User, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
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
        title={`${blogPost.title} - Sassa Insider`} 
        description={blogPost.excerpt}
        canonicalUrl={`/blog/${blogPost.slug}`}
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="mb-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.history.back()}
            className="gap-1 mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Button>

          <div className="my-6">
            <AdSense slot="1234567890" format="horizontal" className="py-3" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <div className="flex flex-col">
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge>{blogPost.category}</Badge>
                </div>
                <h1 className="text-3xl font-bold mb-3">{blogPost.title}</h1>
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
                      variant="ghost"
                      className="flex items-center text-gray-600 hover:text-blog-accent"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden mb-6">
              {blogPost.imageUrl && (
                <div className="w-full h-[300px] md:h-[400px] relative">
                  <img 
                    src={blogPost.imageUrl} 
                    alt={blogPost.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div 
                  className="blog-content prose prose-sm max-w-none mb-5"
                  dangerouslySetInnerHTML={{ 
                    __html: blogPost.content.substring(0, Math.floor(blogPost.content.length / 4)) 
                  }}
                />
                
                <div className="my-6">
                  <AdSense slot="2345678901" format="rectangle" className="py-3" />
                </div>
                
                <div 
                  className="blog-content prose prose-sm max-w-none mb-5"
                  dangerouslySetInnerHTML={{ 
                    __html: blogPost.content.substring(
                      Math.floor(blogPost.content.length / 4),
                      Math.floor(blogPost.content.length / 2)
                    ) 
                  }}
                />
                
                <div className="my-6">
                  <AdSense slot="3456789012" format="rectangle" className="py-3" />
                </div>
                
                <div 
                  className="blog-content prose prose-sm max-w-none mb-5"
                  dangerouslySetInnerHTML={{ 
                    __html: blogPost.content.substring(
                      Math.floor(blogPost.content.length / 2),
                      Math.floor(blogPost.content.length * 3 / 4)
                    ) 
                  }}
                />
                
                <div className="my-6">
                  <AdSense slot="4567890123" format="rectangle" className="py-3" />
                </div>
                
                <div 
                  className="blog-content prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ 
                    __html: blogPost.content.substring(Math.floor(blogPost.content.length * 3 / 4)) 
                  }}
                />
              </div>
            </div>
            
            {relatedPosts.length > 0 && (
              <div className="bg-white rounded-sm shadow-sm border border-gray-200 p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">Related Articles</h3>
                
                <div className="mb-6">
                  <AdSense slot="5678901234" format="horizontal" className="py-3" />
                </div>
                
                <div className="bg-white rounded-sm shadow-sm border border-gray-200">
                  {relatedPosts.map((post, index) => (
                    <motion.div 
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className={`group p-4 ${index !== relatedPosts.length - 1 ? 'border-b border-gray-100' : ''}`}
                    >
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-3 hidden sm:flex">
                          <AvatarImage src={post.imageUrl || "/placeholder.svg"} alt={post.title} />
                          <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-xs">
                            {post.title.substring(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1">
                          <Link 
                            to={`/blog/${post.slug}`}
                            className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-blog-accent flex items-center"
                          >
                            {post.title}
                            <ArrowUpRight 
                              className="h-3.5 w-3.5 ml-1 text-blog-subtle opacity-0 group-hover:opacity-100 transition-opacity"
                            />
                          </Link>
                          <div className="text-xs text-gray-500 line-clamp-1 md:line-clamp-2 mt-1">
                            {post.excerpt}
                          </div>
                          <div className="mt-1 flex items-center gap-4">
                            <Badge className="text-xs">{post.category}</Badge>
                            <span className="text-xs text-gray-500">{formatBlogDate(post.date)}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </main>

      <div className="container mx-auto px-4 pb-8">
        <AdSense slot="6789012345" format="horizontal" className="py-4" />
      </div>

      <footer className="border-t border-gray-300 py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center text-[#828282] text-sm">
          <p>
            &copy; {new Date().getFullYear()} Sassa Insider. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default BlogDetail;
