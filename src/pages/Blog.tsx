
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, CalendarDays, User, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Header from "../components/Header";
import SEO from "../components/SEO";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { getAllBlogPosts, formatBlogDate, getAllCategories, BlogPost } from "../utils/blogData";

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
    // Simulate loading state
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

  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title="Financial Blog - Personal Finance Tips & Investment Advice" 
        description="Get expert financial advice, investment strategies, and personal finance tips for South Africans. Stay updated with the latest financial news and insights."
        canonicalUrl="/blog"
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-5xl">
        <div className="flex flex-col mb-8">
          <h1 className="text-3xl font-bold mb-2">Financial Blog</h1>
          <p className="text-gray-600 mb-6">
            Get expert financial advice, investment strategies, and personal finance tips tailored for South Africans.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
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
          
          <div className="bg-white rounded-sm shadow-sm border border-gray-200">
            {filteredPosts.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                No articles found matching your criteria.
              </div>
            ) : (
              <>
                <div className="p-4 border-b border-gray-100 bg-gray-50 hidden md:block">
                  <div className="grid grid-cols-12 text-xs font-medium text-gray-600">
                    <div className="col-span-1">#</div>
                    <div className="col-span-7">Article</div>
                    <div className="col-span-2">Author</div>
                    <div className="col-span-2">Date</div>
                  </div>
                </div>
                
                {displayedPosts.map((post, index) => (
                  <motion.div 
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`group px-4 py-3 ${index !== displayedPosts.length - 1 ? 'border-b border-gray-100' : ''}`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                      <div className="hidden md:block md:col-span-1 text-sm text-gray-500">
                        {index + 1}
                      </div>
                      
                      <div className="md:col-span-7">
                        <div className="flex items-center">
                          <Avatar className="h-10 w-10 mr-3 hidden sm:flex">
                            <AvatarImage src={post.imageUrl || "/placeholder.svg"} alt={post.title} />
                            <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-xs">
                              {post.title.substring(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          
                          <div>
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
                            <div className="mt-1 md:hidden">
                              <Badge className="text-xs mr-2">{post.category}</Badge>
                              <span className="text-xs text-gray-500">{formatBlogDate(post.date)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm md:col-span-2">
                        <User className="h-3.5 w-3.5 mr-1.5 text-gray-400 md:hidden" />
                        <span className="text-gray-600">{post.author}</span>
                      </div>
                      
                      <div className="md:col-span-2 flex items-center text-xs text-gray-500">
                        <CalendarDays className="h-3.5 w-3.5 mr-1.5 text-gray-400" />
                        <span>{formatBlogDate(post.date)}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {hasMorePosts && (
                  <Pagination className="py-5">
                    <PaginationContent>
                      <PaginationItem className="w-full">
                        <Button 
                          variant="outline" 
                          onClick={loadMore} 
                          className="w-full"
                        >
                          Load More Articles
                        </Button>
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                )}
              </>
            )}
          </div>
        </div>
      </main>

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

export default Blog;
