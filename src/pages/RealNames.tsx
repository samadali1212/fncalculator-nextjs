
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, ArrowUpRight, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import SEO from "../components/SEO";
import { getAllRealNames, searchCelebrities, CelebrityRealName } from "../utils/realNamesData";

const RealNames = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [celebrities, setCelebrities] = useState<CelebrityRealName[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(20);
  
  useEffect(() => {
    // Simulate loading state
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      const allCelebrities = getAllRealNames();
      setCelebrities(allCelebrities);
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Reset items to show when search query changes
  useEffect(() => {
    setItemsToShow(20);
  }, [searchQuery]);
  
  // Filter celebrities based on search query
  const filteredCelebrities = searchQuery
    ? searchCelebrities(searchQuery)
    : celebrities;
  
  // Sort celebrities alphabetically by stage name
  const sortedCelebrities = [...filteredCelebrities].sort((a, b) => {
    return a.stageName.localeCompare(b.stageName);
  });
  
  const displayedCelebrities = sortedCelebrities.slice(0, itemsToShow);
  const hasMoreCelebrities = displayedCelebrities.length < sortedCelebrities.length;
  
  const loadMore = () => {
    setItemsToShow(prevItemsToShow => prevItemsToShow + 20);
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
        title="Celebrity Real Names - South Africa" 
        description="Discover the birth names behind your favorite South African celebrities. Find out the real names of musicians, actors, and other famous personalities."
        canonicalUrl="/real-names"
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="flex flex-col mb-8">
          <h1 className="text-3xl font-bold mb-2">Celebrity Real Names</h1>
          <p className="text-gray-600 mb-6">
            Ever wondered what your favorite South African celebrities were named at birth? Many famous personalities use stage names or shorter versions of their birth names. Browse our comprehensive list to discover the real names behind the famous faces.
          </p>
          
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search by stage name, real name, or profession..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="bg-white rounded-sm shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-100 bg-gray-50">
              <div className="grid grid-cols-12 text-xs font-medium text-gray-600">
                <div className="col-span-1">#</div>
                <div className="col-span-4 md:col-span-4">Stage Name</div>
                <div className="col-span-6 md:col-span-6">Real Name</div>
                <div className="col-span-1 md:col-span-1 text-right">Details</div>
              </div>
            </div>
            
            {filteredCelebrities.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                No celebrities found matching "{searchQuery}"
              </div>
            ) : (
              <>
                {displayedCelebrities.map((celebrity, index) => (
                  <motion.div 
                    key={celebrity.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`group px-4 py-3 ${index !== displayedCelebrities.length - 1 ? 'border-b border-gray-100' : ''}`}
                  >
                    <div className="grid grid-cols-12 items-center">
                      <div className="col-span-1 text-sm text-gray-500">
                        {index + 1}
                      </div>
                      
                      <div className="col-span-4 md:col-span-4">
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-3">
                            <AvatarImage src={celebrity.imageUrl || "/placeholder.svg"} alt={celebrity.stageName} />
                            <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-xs">
                              {getInitials(celebrity.stageName)}
                            </AvatarFallback>
                          </Avatar>
                          
                          <div>
                            <Link 
                              to={`/real-names/${celebrity.slug}`}
                              className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-blog-accent flex items-center"
                            >
                              {celebrity.stageName}
                              <ArrowUpRight 
                                className="h-3.5 w-3.5 ml-1 text-blog-subtle opacity-0 group-hover:opacity-100 transition-opacity"
                              />
                            </Link>
                            <div className="text-xs text-gray-500">{celebrity.profession}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-span-6 md:col-span-6">
                        <span className="text-gray-800 font-medium">{celebrity.realName}</span>
                      </div>
                      
                      <div className="col-span-1 md:col-span-1 text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="hover:bg-gray-100 px-2"
                        >
                          <Link to={`/real-names/${celebrity.slug}`}>
                            <User className="h-4 w-4" />
                          </Link>
                        </Button>
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
                          Load More Celebrities
                        </Button>
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                )}
              </>
            )}
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-300 py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center text-[#828282] text-sm">
          <p>
            &copy; {new Date().getFullYear()} Salary List. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default RealNames;
