
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CalendarDays, User, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import SEO from "../components/SEO";
import ShareButton from "../components/ShareButton";
import AdSense from "../components/AdSense";
import { findBlogPostBySlug, getRecentPosts, formatBlogDate, BlogPost } from "../utils/blogData";
import BlogSchema from "../components/BlogSchema";
import { Card, CardContent } from "@/components/ui/card";

// Function to limit text to a specific number of words
const limitWords = (text: string, wordLimit: number): string => {
  if (!text) return "";
  
  const words = text.trim().split(/\s+/);
  if (words.length <= wordLimit) return text;
  
  return words.slice(0, wordLimit).join(' ') + '...';
};

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

  // Function to split content by paragraph tags and insert ads between paragraphs
  const renderContentWithAds = (content: string) => {
    // Split content by closing paragraph tags
    const paragraphs = content.split('</p>');
    
    // Only process if we have paragraphs
    if (paragraphs.length <= 1) return <div dangerouslySetInnerHTML={{ __html: content }} />;
    
    // Calculate roughly where to place ads
    const quarterPoint = Math.floor(paragraphs.length / 4);
    const halfPoint = Math.floor(paragraphs.length / 2);
    const threeQuarterPoint = Math.floor(paragraphs.length * 3 / 4);
    
    return (
      <>
        {paragraphs.map((paragraph, index) => {
          // Skip empty paragraphs
          if (!paragraph.trim()) return null;
          
          // Add closing tag back if not the last item
          const fullParagraph = index < paragraphs.length - 1 
            ? `${paragraph}</p>` 
            : paragraph;
            
          return (
            <div key={index}>
              <div dangerouslySetInnerHTML={{ __html: fullParagraph }} />
              
              {/* Insert ads at strategic positions */}
              {(index === quarterPoint || index === halfPoint || index === threeQuarterPoint) && 
               (index < paragraphs.length - 1) && (
                <div className="my-6">
                  <AdSense 
                    slot="9803570345"
                    format="auto" 
                    className="py-3" 
                  />
                </div>
              )}
            </div>
          );
        })}
      </>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f6f6f0]">
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
      <div className="min-h-screen bg-[#f6f6f0] flex flex-col items-center justify-center p-4">
        <Header />
        <h1 className="text-2xl font-bold mb-4 text-[#1a1a1a]">Article Not Found</h1>
        <p className="text-gray-700 mb-6">The article you're looking for doesn't exist or has been moved.</p>
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
      
      <BlogSchema
        title={blogPost.title}
        description={blogPost.excerpt}
        author={blogPost.author}
        datePublished={blogPost.date}
        category={blogPost.category}
        imageUrl={blogPost.imageUrl}
        slug={blogPost.slug}
        content={blogPost.content}
      />
      
      <Header />
      
      <main className="container mx-auto pt-20 sm:pt-24 px-4 md:px-6 pb-12 sm:pb-16 max-w-4xl">
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
            <AdSense slot="9803570345" format="auto" className="py-3" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <div className="flex flex-col">
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge className="bg-white text-gray-700 border border-gray-200">{blogPost.category}</Badge>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-[#1a1a1a]">{blogPost.title}</h1>
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
                <div className="blog-content-detail prose prose-sm max-w-none text-[#1a1a1a]">
                  {renderContentWithAds(blogPost.content)}
                </div>
              </div>
            </div>
            
            {relatedPosts.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-6 text-[#1a1a1a]">Related Articles</h3>                
                <div className="flex flex-col space-y-4">
                  {relatedPosts.map((post, index) => (
                    <motion.div 
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <Card className="hover:shadow-md transition-shadow overflow-hidden group">
                        <div className="flex flex-col md:flex-row">
                          <div className="relative md:w-1/3 h-48 md:h-auto overflow-hidden">
                            <img 
                              src={post.imageUrl || "/placeholder.svg"} 
                              alt={post.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute top-0 right-0 mt-2 mr-2">
                              <Badge className="bg-white/90 text-gray-700 text-xs">
                                {post.category}
                              </Badge>
                            </div>
                          </div>
                          
                          <CardContent className="p-4 md:p-5 md:w-2/3 flex flex-col">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center text-xs text-gray-500">
                                <User className="h-3 w-3 mr-1" />
                                <span className="mr-3">{post.author}</span>
                                <CalendarDays className="h-3 w-3 mr-1" />
                                <span>{formatBlogDate(post.date)}</span>
                              </div>
                              <span className="text-xs text-gray-500">#{index + 1}</span>
                            </div>
                          
                            <h2 className="text-xl text-[#000] font-medium mb-2">
                              <Link 
                                to={`/blog/${post.slug}`}
                                className="hover:text-blog-accent transition-colors"
                              >
                                {post.title}
                              </Link>
                            </h2>
                           
                            <p className="text-gray-600 text-sm mb-4">
                              {limitWords(post.excerpt, 30)}
                            </p>
                            
                            <div className="mt-auto">
                              <Link
                                to={`/blog/${post.slug}`}
                                className="inline-flex items-center text-xs text-blog-accent hover:underline"
                              >
                                Read Article
                                <ArrowRight className="h-3 w-3 ml-1" />
                              </Link>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </main>

      <div className="container mx-auto px-4 pb-8">
        <AdSense slot="9803570345" format="auto" className="py-4" />
      </div>

      <footer className="border-t border-gray-200 py-6 sm:py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center text-gray-600 text-sm">
          <p>
            &copy; {new Date().getFullYear()} denilagari. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default BlogDetail;
