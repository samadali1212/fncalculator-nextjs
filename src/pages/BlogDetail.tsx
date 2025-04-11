
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CalendarDays, User, Share2 } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
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
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16">
        <div className="mb-8">
          <Link to="/blog" className="inline-flex items-center text-blog-accent hover:underline mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all articles
          </Link>
          
          {/* Ad slot before the main content */}
          <div className="my-4">
            <AdSense slot="1234567890" format="horizontal" className="py-2" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content column */}
            <div className="lg:col-span-2">
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

            {/* Sidebar column */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-4">Article Details</h3>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Author</TableCell>
                      <TableCell>{blogPost.author}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Published</TableCell>
                      <TableCell>{formatBlogDate(blogPost.date)}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Category</TableCell>
                      <TableCell>
                        <Link to={`/blog?category=${blogPost.category}`}>
                          <Badge className="hover:bg-primary/90 cursor-pointer">{blogPost.category}</Badge>
                        </Link>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <div className="mt-6">
                  <AdSense slot="3456789012" format="rectangle" className="py-3" />
                </div>
              </div>

              {relatedPosts.length > 0 && (
                <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
                  <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((post) => (
                      <Link 
                        key={post.id} 
                        to={`/blog/${post.slug}`}
                        className="block group"
                      >
                        <div className="flex gap-3">
                          <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded">
                            <img 
                              src={post.imageUrl || "/placeholder.svg"} 
                              alt={post.title}
                              className="w-full h-full object-cover transition-transform group-hover:scale-105"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium group-hover:text-blog-accent transition-colors line-clamp-2">
                              {post.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">
                              {formatBlogDate(post.date)}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
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
