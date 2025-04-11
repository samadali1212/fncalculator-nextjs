
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, CalendarDays, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Header from "../components/Header";
import SEO from "../components/SEO";
import { getAllBlogPosts, formatBlogDate, getAllCategories, BlogPost } from "../utils/blogData";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(true);
  
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
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
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
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link to={`/blog/${post.slug}`}>
                    <Card className="h-full overflow-hidden hover:shadow-md transition-shadow group">
                      <AspectRatio ratio={16 / 9}>
                        <img 
                          src={post.imageUrl || "/placeholder.svg"} 
                          alt={post.title}
                          className="object-cover w-full h-full transition-transform group-hover:scale-105 duration-300"
                        />
                      </AspectRatio>
                      <CardContent className="p-5">
                        <Badge className="mb-2">{post.category}</Badge>
                        <h2 className="text-xl font-semibold mb-2 group-hover:text-blog-accent transition-colors">{post.title}</h2>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center text-xs text-gray-500 gap-4">
                          <div className="flex items-center">
                            <User className="h-3.5 w-3.5 mr-1" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center">
                            <CalendarDays className="h-3.5 w-3.5 mr-1" />
                            <span>{formatBlogDate(post.date)}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>

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

export default Blog;
