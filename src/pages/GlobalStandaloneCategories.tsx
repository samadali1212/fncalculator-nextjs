
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ArrowUpRight, ListFilter, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SEO from "../components/SEO";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  Card, 
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllCategories, CategoryMetadata } from "../utils/globalNetWorthData";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";

const GlobalStandaloneCategories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<CategoryMetadata[]>([]);
  const [itemsToShow, setItemsToShow] = useState(10);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setCategories(getAllCategories());
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  const filteredCategories = categories.filter(category => {
    return searchQuery 
      ? category.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        category.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
  });
  
  const displayedCategories = filteredCategories.slice(0, itemsToShow);
  const hasMoreCategories = displayedCategories.length < filteredCategories.length;
  
  const loadMore = () => {
    setItemsToShow(prevItemsToShow => prevItemsToShow + 5);
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
        title="Rankings of the Wealthy People in the World" 
        description="Explore World's wealthiest individuals by categories - from business tycoons to sports stars and entertainers."
        canonicalUrl="/global-categories"
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Rankings of The Wealthy People in the World</h1>
            <p className="text-gray-600">
              Explore the world's wealthiest individuals organized by different categories
            </p>
          </div>
          
          <Link 
            to="/global-net-worth"
            className="mt-4 md:mt-0 inline-flex items-center text-blog-accent hover:text-blog-accent-hover transition-colors"
          >
            <ListFilter className="h-4 w-4 mr-1.5" />
            View All Rich People
          </Link>
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
              No categories found matching "{searchQuery}"
            </div>
          ) : (
            <>
              <div className="p-4 border-b border-gray-100 bg-gray-50">
                <div className="grid grid-cols-12 text-xs font-medium text-gray-600">
                  <div className="col-span-1">#</div>
                  <div className="col-span-6 md:col-span-5">Category</div>
                  <div className="col-span-5 md:col-span-6">Description</div>
                </div>
              </div>
              
              {displayedCategories.map((category, index) => (
                <motion.div 
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`group px-4 py-4 ${index !== displayedCategories.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <div className="grid grid-cols-12 items-center">
                    <div className="col-span-1 text-sm text-gray-500">
                      {index + 1}
                    </div>
                    
                    <div className="col-span-6 md:col-span-5">
                      <div className="flex items-center">
                        {category.imageUrl && (
                          <div className="h-10 w-10 mr-3 rounded-full overflow-hidden">
                            <img 
                              src={category.imageUrl} 
                              alt={category.title} 
                              className="h-full w-full object-cover"
                            />
                          </div>
                        )}
                        
                        <div>
                          <Link 
                            to={`/global-net-worth/category/${category.slug}`}
                            className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-blog-accent flex items-center"
                          >
                            {category.title}
                            <ArrowUpRight 
                              className="h-3.5 w-3.5 ml-1 text-blog-subtle opacity-0 group-hover:opacity-100 transition-opacity"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-span-5 md:col-span-6">
                      <p className="text-sm text-gray-600 line-clamp-2">{category.description}</p>
                      <Link 
                        to={`/global-net-worth/category/${category.slug}`}
                        className="text-xs text-blog-accent hover:underline mt-1 inline-flex items-center"
                      >
                        View List
                        <ChevronRight className="h-3 w-3 ml-1"/>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {hasMoreCategories && (
                <Pagination className="py-5">
                  <PaginationContent>
                    <PaginationItem className="w-full">
                      <Button 
                        variant="outline" 
                        onClick={loadMore} 
                        className="w-full"
                      >
                        Load More Categories
                      </Button>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </>
          )}
        </div>
      </main>

      <footer className="border-t border-gray-300 py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center text-[#828282] text-sm">
          <p>
            &copy; {new Date().getFullYear()} SoExpensive. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default GlobalStandaloneCategories;
