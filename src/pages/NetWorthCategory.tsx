
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Header from "../components/Header";
import SEO from "../components/SEO";
import CategoryRoundup from "../components/CategoryRoundup";
import { Button } from "@/components/ui/button";
import { 
  findCategoryBySlug, 
  getCategoryIdBySlug 
} from "../utils/netWorthData";

const NetWorthCategory = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  // Find category by slug
  const category = slug ? findCategoryBySlug(slug) : undefined;
  const categoryId = slug ? getCategoryIdBySlug(slug) : undefined;
  
  useEffect(() => {
    // Simulate loading state for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
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

  if (!category || !categoryId) {
    return (
      <div className="min-h-screen bg-[#f6f6f0] flex items-center justify-center">
        <Header />
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Category Not Found</h2>
          <p className="mb-4">The category you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/net-worth/categories')}>
            View All Categories
          </Button>
        </div>
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
        title={`${category.title} | South Africa's Wealthiest`}
        description={category.description}
        canonicalUrl={`/net-worth/category/${slug}`}
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="mb-6">
          <Link 
            to="/net-worth/categories"
            className="inline-flex items-center text-sm text-[#000000] hover:underline"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            All Categories
          </Link>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-2">{category.title}</h1>
          <p className="text-gray-600 mb-8">
            {category.description}
          </p>
          
          {category.imageUrl && (
            <div className="mb-8 rounded-md overflow-hidden">
              <img 
                src={category.imageUrl} 
                alt={category.title} 
                className="w-full h-64 object-cover"
              />
            </div>
          )}
          
          <CategoryRoundup 
            category={category} 
            categoryId={categoryId} 
            limit={50}
          />
          
          <div className="mt-8 flex justify-center">
            <Button 
              variant="outline" 
              onClick={() => navigate('/net-worth/categories')}
            >
              View All Categories
            </Button>
          </div>
        </motion.div>
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

export default NetWorthCategory;
