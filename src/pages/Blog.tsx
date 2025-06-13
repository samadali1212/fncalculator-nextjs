
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, CalendarDays, User, ArrowRight, Plus } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "../components/Header";
import SEO from "../components/SEO";
import { Button } from "@/components/ui/button";
import { getAllBlogPosts, formatBlogDate, getAllCategories, BlogPost } from "../utils/blogData";
import { Card, CardContent } from "@/components/ui/card";
import AdSense from "../components/AdSense";

// Function to limit text to a specific number of words
const limitWords = (text: string, wordLimit: number): string => {
  if (!text) return "";
  
  const words = text.trim().split(/\s+/);
  if (words.length <= wordLimit) return text;
  
  return words.slice(0, wordLimit).join(' ') + '...';
};

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(20);
  const location = useLocation();
  
  // Fetch blog posts and categories
  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      const allPosts = getAllBlogPosts();
      const allCategories = getAllCategories();
      
      setBlogPosts(allPosts);
      setCategories(allCategories);
      setIsLoading(false);
      
      // Check for category in URL params
      const params = new URLSearchParams(location.search);
      const categoryParam = params.get('category');
      if (categoryParam && allCategories.includes(categoryParam)) {
        setSelectedCategory(categoryParam);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [location.search]);
  
  // Filter blog posts based on search query and selected category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchQuery 
      ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
      
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Sort by date (newest first)
  const sortedPosts = [...filteredPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  // Paginate results
  const displayedPosts = sortedPosts.slice(0, itemsToShow);
  const hasMorePosts = displayedPosts.length < sortedPosts.length;
  
  const loadMore = () => {
    setItemsToShow(prevItemsToShow => prevItemsToShow + 20);
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title="Personal Finance Tips & Investment Advice" 
        description="Get expert financial advice, investment strategies, and personal finance tips for South Africans. Stay updated with the latest financial news and insights."
        canonicalUrl="/blog"
      />
      <Header />
      
      <main className="container mx-auto pt-20 sm:pt-24 px-4 md:px-6 pb-12 sm:pb-16 max-w-4xl">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-[#1a1a1a]">Explore Our Latest Articles</h1>
          <p className="text-gray-700 text-sm sm:text-base mb-6">
            Browse all our blog posts in one place. From expert tips to trending topics, this is your gateway to every article we've published. Stay informed, inspired, and up to date with our full collection.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Badge 
                variant={selectedCategory === "all" ? "default" : "outline"} 
                className="cursor-pointer"
                onClick={() => setSelectedCategory("all")}
              >
                All
              </Badge>
              {categories.map(category => (
                <Badge 
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"} 
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <AdSense slot="9889084223" format="auto" className="py-3" />
        </div>
          
        {filteredPosts.length === 0 ? (
          <div className="p-6 text-center text-gray-500 bg-white rounded-sm shadow-sm border border-gray-200">
            No articles found matching your criteria.
          </div>
        ) : (
          <>
            <div className="flex flex-col space-y-4">
              {displayedPosts.map((post, index) => (
                <div key={post.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
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
                  
                  {(index + 1) % 3 === 0 && index !== displayedPosts.length - 1 && (
                    <div className="my-2">
                      <AdSense slot="9889084223" format="auto" className="py-3" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {hasMorePosts && (
              <div className="py-5">
                <Button 
                  variant="outline" 
                  onClick={loadMore} 
                  className="w-full"
                >
                  Load More Articles
                </Button>
              </div>
            )}
          </>
        )}
      </main>

      <div className="container mx-auto px-4 md:px-6 mb-6 sm:mb-8">
        <AdSense slot="9889084223" format="auto" className="py-3" />
      </div>

      <footer className="border-t border-gray-200 py-6 sm:py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center text-gray-600 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Sassa Insider. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Blog;
