import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SEO from "../components/SEO";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import AdBanner from "../components/ads/AdBanner";
import { celebrities } from "../utils/celebrityData";

const Celebrities = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsToShow, setItemsToShow] = useState(50);
  const [industryFilter, setIndustryFilter] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(true);

  const formatSalary = (salary: number, currency: string = "ZAR") => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(salary);
  };

  const industries = ["all", ...Array.from(new Set(celebrities.map(celebrity => celebrity.industry)))];
  
  const filteredCelebrities = celebrities.filter(celebrity => {
    const matchesSearch = searchQuery 
      ? celebrity.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        celebrity.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        celebrity.industry.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
      
    const matchesIndustry = industryFilter === "all" || celebrity.industry === industryFilter;
    
    return matchesSearch && matchesIndustry;
  });
  
  const sortedCelebrities = [...filteredCelebrities].sort((a, b) => b.salary - a.salary);
  
  const displayedCelebrities = sortedCelebrities.slice(0, itemsToShow);
  const hasMoreCelebrities = displayedCelebrities.length < filteredCelebrities.length;
  
  const loadMore = () => {
    setItemsToShow(prevItemsToShow => prevItemsToShow + 40);
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

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
        title="South African Celebrities' Salaries" 
        description="Explore the salaries of South Africa's most popular celebrities. Updated information on earnings of actors, musicians, athletes, and more."
        canonicalUrl="/celebrities"
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Salaries of the Most Popular People in South Africa</h1>
            <p className="text-gray-600">
              Explore the earnings of South Africa's most well-known personalities. From entertainers and athletes to business leaders and influencers, see how much the country's top figures make and what contributes to their wealth.
            </p>
          </div>
        </div>
        
        <AdBanner adFormat="horizontal" className="mb-6" />
        
        <motion.div 
          className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative md:col-span-2">
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
          
          <div>
            <Select 
              value={industryFilter} 
              onValueChange={setIndustryFilter}
            >
              <SelectTrigger>
                <SelectValue placeholder="Filter by industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((industry) => (
                  <SelectItem key={industry} value={industry}>
                    {industry === "all" ? "All Industries" : industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        <div className="bg-white rounded-sm shadow-sm border border-gray-200">
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
              
              {displayedCelebrities.map((celebrity, index) => {
                const listItem = (
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
                      
                      <div className="col-span-5 md:col-span-4">
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-3">
                            <AvatarImage src={celebrity.imageUrl || "/placeholder.svg"} alt={celebrity.name} />
                            <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-xs">
                              {getInitials(celebrity.name)}
                            </AvatarFallback>
                          </Avatar>
                          
                          <div>
                            <Link 
                              to={`/celebrities/${celebrity.slug}`}
                              className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-blog-accent flex items-center"
                            >
                              {celebrity.name}
                              <ArrowUpRight 
                                className="h-3.5 w-3.5 ml-1 text-blog-subtle opacity-0 group-hover:opacity-100 transition-opacity"
                              />
                            </Link>
                            <div className="text-xs text-gray-500">{celebrity.occupation}</div>
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
                      
                      <div className="col-span-3 md:col-span-2">
                        <span className="text-xs text-gray-600">{celebrity.company || "—"}</span>
                      </div>
                    </div>
                  </motion.div>
                );

                if (index === 10 || (index > 10 && (index - 10) % 20 === 0)) {
                  return (
                    <React.Fragment key={`ad-${index}`}>
                      {listItem}
                      <div className="border-b border-gray-100">
                        <AdBanner adFormat="fluid" className="py-2" />
                      </div>
                    </React.Fragment>
                  );
                }
                
                return listItem;
              })}
              
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
        
        <AdBanner adFormat="horizontal" className="mt-8" />
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

export default Celebrities;
