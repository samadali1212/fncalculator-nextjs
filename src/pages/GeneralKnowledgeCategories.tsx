import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import SEO from "../components/SEO";
import { Input } from "@/components/ui/input";
import { generalKnowledgeCategories } from "../utils/generalKnowledgeCategoriesData";

const GeneralKnowledgeCategories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Filter categories based on search query
  const filteredCategories = generalKnowledgeCategories.filter(category => {
    return searchQuery 
      ? category.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        category.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
  });

  // Simulate loading state
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
        title="Knowledge Categories | South African General Knowledge" 
        description="Browse all knowledge categories including valuable coins, shopping malls, best products, top institutions, and more about South Africa."
        canonicalUrl="/categories/general-knowledge"
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Knowledge Categories</h1>
            <p className="text-gray-600">
              Browse all our knowledge categories about South Africa
            </p>
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
              placeholder="Search categories..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        <div className="bg-white rounded-sm shadow-sm border border-gray-200">
          {filteredCategories.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              <p>No categories found matching "{searchQuery}"</p>
            </div>
          ) : (
            <>
              <div className="p-4 border-b border-gray-100 bg-gray-50">
                <div className="grid grid-cols-10 text-xs font-medium text-gray-600">
                  <div className="col-span-1">#</div>
                  <div className="col-span-5">Category</div>
                  <div className="col-span-2">Articles</div>
                  <div className="col-span-2"></div>
                </div>
              </div>
              
              {filteredCategories.map((category, index) => (
                <motion.div 
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`group px-4 py-3 ${index !== filteredCategories.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <div className="grid grid-cols-10 items-center">
                    <div className="col-span-1 text-sm text-gray-500">
                      {index + 1}
                    </div>
                    
                    <div className="col-span-5">
                      <div className="flex items-center">
                        <div>
                          <Link 
                            to={`/general-knowledge/category/${category.slug}`}
                            className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-blog-accent"
                          >
                            {category.emoji && <span className="mr-2">{category.emoji}</span>}
                            {category.title}
                          </Link>
                          <div className="text-xs text-gray-500 line-clamp-1">
                            {category.description}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-span-2">
                      <span className="px-2 py-0.5 bg-gray-100 rounded text-[#666] text-xs">
                        {category.articleCount} articles
                      </span>
                    </div>
                    
                    <div className="col-span-2 text-right">
                      <Link 
                        to={`/general-knowledge/category/${category.slug}`}
                        className="inline-flex items-center text-sm text-blog-accent hover:text-blog-accent-hover"
                      >
                        Explore 
                        <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </>
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

export default GeneralKnowledgeCategories;
