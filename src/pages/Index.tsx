
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import BlogList from "../components/BlogList";
import SEO from "../components/SEO";
import { blogPosts } from "../utils/blogData";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

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
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title="List Of The Richest People in South Africa - MoneyWorth"
        description="Get the latest list of the richest people in South Africa. Find their net worth and the industries behind their fortunes."
        canonicalUrl="/"
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/categories" className="block">
              <div className="bg-white p-6 rounded-md shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <h2 className="text-lg font-semibold mb-2">Browse Wealth Categories</h2>
                <p className="text-sm text-gray-600 mb-3">Explore South Africa's wealthiest individuals by category</p>
                <Button variant="outline" size="sm" className="w-full">View Categories</Button>
              </div>
            </Link>
            <Link to="/salaries" className="block">
              <div className="bg-white p-6 rounded-md shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <h2 className="text-lg font-semibold mb-2">Explore Salaries</h2>
                <p className="text-sm text-gray-600 mb-3">Discover salary information across different professions</p>
                <Button variant="outline" size="sm" className="w-full">View Salaries</Button>
              </div>
            </Link>
            <Link to="/tax-calculator" className="block">
              <div className="bg-white p-6 rounded-md shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <h2 className="text-lg font-semibold mb-2">Tax Calculator</h2>
                <p className="text-sm text-gray-600 mb-3">Calculate your tax liability with our simple tool</p>
                <Button variant="outline" size="sm" className="w-full">Calculate Now</Button>
              </div>
            </Link>
          </div>
        </div>

        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search posts..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        <BlogList posts={blogPosts} searchQuery={searchQuery} />
      </main>

      <footer className="border-t border-gray-300 py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center text-[#828282] text-sm">
          <p>
            &copy; {new Date().getFullYear()} MoneyWorth. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Index;
