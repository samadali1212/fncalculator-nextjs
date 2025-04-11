
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CalendarDays, User, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
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
      <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-blog-accent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="min-h-screen bg-[#f8f8f8] flex flex-col items-center justify-center p-4">
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
    <div className="min-h-screen bg-[#f8f8f8]">
      <SEO 
        title={`${blogPost.title} | Financepedia Blog`} 
        description={blogPost.excerpt}
        canonicalUrl={`/blog/${blogPost.slug}`}
      />
      <Header />
      
      <main className="container mx-auto pt-24 pb-16 px-4 sm:px-6">
        {/* Breadcrumb navigation */}
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-gray-700">Home</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link to="/blog" className="hover:text-gray-700">Blog</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-gray-700 truncate max-w-[200px]">{blogPost.title}</span>
        </div>

        {/* Ad slot before the main content */}
        <div className="mb-6">
          <AdSense slot="1234567890" format="horizontal" className="py-2" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden mb-6">
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary">{blogPost.category}</Badge>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{blogPost.title}</h1>
                  <div className="flex flex-wrap items-center text-sm text-gray-500 mt-3 gap-4">
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
                        className="flex items-center text-gray-500 hover:text-blog-accent"
                      />
                    </div>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                {blogPost.imageUrl && (
                  <div className="mb-6 overflow-hidden rounded-md">
                    <AspectRatio ratio={16 / 9}>
                      <img 
                        src={blogPost.imageUrl} 
                        alt={blogPost.title}
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </div>
                )}
                
                {/* First half of the content */}
                <div 
                  className="blog-content prose prose-sm max-w-none mb-6"
                  dangerouslySetInnerHTML={{ 
                    __html: blogPost.content.substring(0, Math.floor(blogPost.content.length / 2)) 
                  }}
                />
                
                {/* Mid-content ad */}
                <div className="my-8">
                  <AdSense slot="2345678901" format="rectangle" className="py-2" />
                </div>
                
                {/* Second half of the content */}
                <div 
                  className="blog-content prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ 
                    __html: blogPost.content.substring(Math.floor(blogPost.content.length / 2)) 
                  }}
                />
              </div>
            </Card>
            
            {/* Bottom ad */}
            <div className="mb-6">
              <AdSense slot="4567890123" format="horizontal" className="py-2" />
            </div>
          </div>
          
          {/* Sidebar with related posts */}
          <div>
            {relatedPosts.length > 0 && (
              <Card className="overflow-hidden sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map(post => (
                      <Link 
                        key={post.id} 
                        to={`/blog/${post.slug}`}
                        className="group block"
                      >
                        <div className="flex gap-3 items-start hover:bg-gray-50 p-2 rounded-md transition-colors">
                          {post.imageUrl && (
                            <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
                              <img
                                src={post.imageUrl}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform group-hover:scale-105"
                              />
                            </div>
                          )}
                          <div>
                            <h4 className="font-medium line-clamp-2 group-hover:text-blog-accent transition-colors text-sm">
                              {post.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">{formatBlogDate(post.date)}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Financepedia. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BlogDetail;
