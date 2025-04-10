
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ArrowUpRight, ListFilter } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SEO from "../components/SEO";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { generalKnowledgeCategories } from "../utils/generalKnowledgeData";

const GeneralKnowledge = () => {
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
        title="South African General Knowledge Guide" 
        description="Discover a wealth of information about South Africa including valuable coins, shopping malls, universities, and more. Your comprehensive guide to South African knowledge."
        canonicalUrl="/general-knowledge"
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">South African General Knowledge</h1>
            <p className="text-gray-600">
              Explore comprehensive guides and information about South Africa's valuable coins, shopping malls, best products, top institutions, and more.
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

        {filteredCategories.length === 0 ? (
          <div className="bg-white p-6 text-center rounded-md shadow-sm">
            <p className="text-gray-500">No categories found matching "{searchQuery}"</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredCategories.map((category, index) => (
              <motion.div 
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow border border-gray-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                      {category.emoji && (
                        <span className="text-2xl">{category.emoji}</span>
                      )}
                    </div>
                    <CardDescription className="line-clamp-2">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">{category.articleCount} articles</span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="group flex items-center"
                        asChild
                      >
                        <Link to={`/general-knowledge/category/${category.slug}`}>
                          Explore
                          <ArrowUpRight 
                            className="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
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

export default GeneralKnowledge;
