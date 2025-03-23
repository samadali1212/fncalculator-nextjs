
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import BlogCard from "../components/BlogCard";
import FeaturedPost from "../components/FeaturedPost";
import { blogPosts, getFeaturedPosts } from "../utils/blogData";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const featuredPosts = getFeaturedPosts();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

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
      className="min-h-screen"
    >
      <Header />
      
      <main className="pt-24 px-4 md:px-6 pb-16">
        {featuredPosts.length > 0 && <FeaturedPost post={featuredPosts[0]} />}

        <div className="container mx-auto">
          <motion.div 
            className="flex items-center justify-between mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-medium text-blog-text">Latest Articles</h2>
            <div className="flex items-center space-x-2">
              <select 
                className="bg-white border border-gray-200 text-blog-text rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blog-accent"
              >
                <option value="latest">Latest</option>
                <option value="popular">Popular</option>
                <option value="trending">Trending</option>
              </select>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-blog-card border-t border-gray-200 py-12">
        <div className="container mx-auto px-4 md:px-6 text-center text-blog-subtle">
          <p>
            &copy; {new Date().getFullYear()} BlogDomain. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Index;
