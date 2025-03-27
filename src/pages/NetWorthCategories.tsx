
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "../components/Header";
import SEO from "../components/SEO";
import { 
  Card, 
  CardContent, 
  CardFooter,
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getAllCategories, CategoryMetadata } from "../utils/netWorthData";

const NetWorthCategories = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<CategoryMetadata[]>([]);
  
  useEffect(() => {
    // Simulate loading state for better UX
    const timer = setTimeout(() => {
      setCategories(getAllCategories());
      setIsLoading(false);
    }, 300);
    
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
        title="Net Worth Categories | Richest People in South Africa by Category" 
        description="Explore the net worth of South Africa's richest individuals by category - from business tycoons to sports stars and entertainers."
        canonicalUrl="/net-worth/categories"
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-5xl">
        <h1 className="text-3xl font-bold mb-2">Net Worth Categories</h1>
        <p className="text-gray-600 mb-8">
          Explore South Africa's wealthiest individuals organized by different categories
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col group hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                {category.imageUrl && (
                  <CardContent className="pt-0">
                    <div className="aspect-video rounded-md overflow-hidden">
                      <img 
                        src={category.imageUrl} 
                        alt={category.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </CardContent>
                )}
                <CardFooter className="mt-auto pt-4">
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-gray-100 transition-colors"
                    asChild
                  >
                    <Link to={`/net-worth/category/${category.slug}`} className="flex items-center justify-center">
                      View List
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
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

export default NetWorthCategories;
