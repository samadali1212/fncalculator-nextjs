
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import SEO from "../components/SEO";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { celebrities, formatSalary } from "../utils/celebrityData";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";

const CelebrityCategory = () => {
  const { category } = useParams<{ category: string }>();
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsToShow, setItemsToShow] = useState(50);
  const [isLoading, setIsLoading] = useState(true);
  
  const categoryTitle = category ? 
    category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 
    'All Categories';

  // Filter celebrities based on search query and category
  const filteredCelebrities = celebrities.filter(celebrity => {
    const matchesSearch = searchQuery 
      ? celebrity.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        celebrity.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        celebrity.industry.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
      
    const matchesCategory = !category || celebrity.categories.includes(category);
    
    return matchesSearch && matchesCategory;
  });
  
  // Sort by salary (descending)
  const sortedCelebrities = [...filteredCelebrities].sort((a, b) => b.salary - a.salary);
  
  // Paginate results
  const displayedCelebrities = sortedCelebrities.slice(0, itemsToShow);
  const hasMoreCelebrities = displayedCelebrities.length < filteredCelebrities.length;
  
  const loadMore = () => {
    setItemsToShow(prevItemsToShow => prevItemsToShow + 40);
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

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [category]);

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
        title={`${categoryTitle} Salaries | SalaryList`} 
        description={`Explore the salaries of ${categoryTitle.toLowerCase()} in South Africa. Updated list with detailed salary information.`}
        canonicalUrl={`/celebrities/category/${category || ''}`}
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">{categoryTitle} Salaries</h1>
            <p className="text-gray-600">
              Explore the salaries of {categoryTitle.toLowerCase()} in South Africa
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
              placeholder="Search by name, company, or industry..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        <div className="bg-white rounded-md shadow-sm overflow-hidden mb-8">
          {filteredCelebrities.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No celebrities found matching "{searchQuery}"
            </div>
          ) : (
            <>
              <div className="p-4 border-b border-gray-100 bg-gray-50">
                <div className="grid grid-cols-12 text-xs font-medium text-gray-600">
                  <div className="col-span-1">#</div>
                  <div className="col-span-5 md:col-span-4">Name</div>
                  <div className="col-span-3 md:col-span-3">Salary</div>
                  <div className="hidden md:block md:col-span-2">Industry</div>
                  <div className="col-span-3 md:col-span-2">Company</div>
                </div>
              </div>
              
              {displayedCelebrities.map((celebrity, index) => (
                <motion.div 
                  key={celebrity.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`group px-4 py-3 ${index !== displayedCelebrities.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <div className="grid grid-cols-12 items-center">
                    <div className="col-span-1 text-sm text-gray-500">
                      {index + 1}
                    </div>
                    
                    <div className="col-span-5 md:col-span-4">
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src={celebrity.imageUrl || "/placeholder.svg"} alt={celebrity.name} />
                          <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-xs">
                            {getInitials(celebrity.name)}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div>
                          <Link 
                            to={`/celebrities/${celebrity.slug}`}
                            className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-blog-accent"
                          >
                            {celebrity.name}
                          </Link>
                          
                          <div className="flex items-center text-xs text-[#828282]">
                            <span>{celebrity.occupation}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-span-3 md:col-span-3">
                      <span className="text-sm font-medium">{formatSalary(celebrity.salary, celebrity.currency)}</span>
                    </div>
                    
                    <div className="hidden md:block md:col-span-2">
                      <span className="px-1.5 py-0.5 bg-gray-100 rounded text-[#666] text-xs">
                        {celebrity.industry}
                      </span>
                    </div>
                    
                    <div className="col-span-3 md:col-span-2 flex items-center">
                      <span className="text-xs text-gray-600 flex-1 truncate">{celebrity.company || "—"}</span>
                      <ArrowRight className="w-4 h-4 text-[#999] group-hover:text-[#ff6600] transition-colors opacity-0 group-hover:opacity-100" />
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {hasMoreCelebrities && (
                <Pagination className="py-5">
                  <PaginationContent>
                    <PaginationItem className="w-full">
                      <Button 
                        variant="outline" 
                        onClick={loadMore} 
                        className="w-full"
                      >
                        Load More Results
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
            &copy; {new Date().getFullYear()} SalaryList. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default CelebrityCategory;
