
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import SEO from "../components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CategoryMetadata,
  getAllCategories 
} from "../utils/netWorthData";
import { Filter, Search, Tag, Users, X } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const StandaloneCategories = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<CategoryMetadata[]>([]);
  const [filteredCategories, setFilteredCategories] = useState<CategoryMetadata[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  
  useEffect(() => {
    const fetchCategories = () => {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        const allCategories = getAllCategories();
        setCategories(allCategories);
        setFilteredCategories(allCategories);
        setIsLoading(false);
      }, 800);
    };
    
    fetchCategories();
  }, []);
  
  // Apply search and filters
  useEffect(() => {
    let result = [...categories];
    
    // Apply search
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(category => 
        category.name.toLowerCase().includes(term) || 
        category.description.toLowerCase().includes(term)
      );
    }
    
    // Apply filter
    if (selectedFilter !== "all") {
      if (selectedFilter === "popular") {
        result = result.filter(category => (category.count || 0) > 2);
      } else if (selectedFilter === "business") {
        result = result.filter(category => 
          category.name.toLowerCase().includes("business") || 
          category.name.toLowerCase().includes("executive") ||
          category.description.toLowerCase().includes("business")
        );
      }
    }
    
    setFilteredCategories(result);
  }, [searchTerm, selectedFilter, categories]);
  
  const clearSearch = () => {
    setSearchTerm("");
  };
  
  const resetFilters = () => {
    setSelectedFilter("all");
    setSearchTerm("");
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f6f6f0]">
        <Header />
        <main className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <Skeleton className="h-10 w-64" />
              <Skeleton className="h-10 w-48" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array(9).fill(0).map((_, i) => (
                <Skeleton key={i} className="h-64 rounded-lg" />
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title="Browse Wealth Categories | MoneyWorth"
        description="Explore different categories of wealthy individuals, from tech entrepreneurs to real estate moguls. Discover the industries and sectors where wealth is concentrated."
        canonicalUrl="/categories"
      />
      
      <Header />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Wealth Categories</h1>
            <p className="text-gray-600">
              Explore different industries and sectors where wealth is concentrated
            </p>
          </div>
          
          {/* Search and filter controls */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="relative col-span-2">
                <Input
                  placeholder="Search categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                {searchTerm && (
                  <button 
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              
              <div>
                <Tabs defaultValue="all" value={selectedFilter} onValueChange={setSelectedFilter}>
                  <TabsList className="w-full">
                    <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
                    <TabsTrigger value="popular" className="flex-1">Popular</TabsTrigger>
                    <TabsTrigger value="business" className="flex-1">Business</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
            
            {(searchTerm || selectedFilter !== "all") && (
              <div className="flex items-center mt-4 text-sm">
                <Tag className="h-4 w-4 mr-2 text-gray-400" />
                <span>
                  Showing {filteredCategories.length} of {categories.length} categories
                </span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={resetFilters}
                  className="ml-2 h-7 text-xs"
                >
                  Reset filters
                </Button>
              </div>
            )}
          </div>
          
          {filteredCategories.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-lg shadow-sm">
              <Users className="h-12 w-12 mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-medium mb-2">No categories found</h3>
              <p className="text-gray-500 mb-4">
                Try adjusting your search or filter to find what you're looking for
              </p>
              <Button onClick={resetFilters} variant="outline">
                Reset filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCategories.map((category) => (
                <Link 
                  key={category.id}
                  to={`/net-worth/category/${category.slug}`}
                  className="block"
                >
                  <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {category.description}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Filter className="h-4 w-4 mr-2" />
                        <span>{category.count || 0} individuals</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <footer className="border-t border-gray-300 py-6 bg-white">
        <div className="container mx-auto px-4 text-center text-[#828282] text-sm">
          <p>
            &copy; {new Date().getFullYear()} MoneyWorth. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default StandaloneCategories;
