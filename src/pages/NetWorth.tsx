
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ArrowUpRight, ListFilter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SEO from "../components/SEO";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  Card, 
  CardContent, 
  CardHeader, 
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
import { netWorthPeople, formatNetWorth } from "../utils/netWorthData";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";

const NetWorth = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsToShow, setItemsToShow] = useState(50);
  const [industryFilter, setIndustryFilter] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(true);

// Get unique industries for filter
const industries = ["all", ...new Set(netWorthPeople.map(person => person.industry).filter(Boolean))];

// Ensure searchQuery and industryFilter are always strings
const searchLower = searchQuery?.trim().toLowerCase() || "";
const industryLower = industryFilter?.trim().toLowerCase() || "all";

// Filter function
const filteredPeople = netWorthPeople.filter(person => {
  // Ensure data properties exist and convert to lowercase safely
  const name = person.name?.toLowerCase() || "";
  const company = person.company?.toLowerCase() || "";
  const industry = person.industry?.toLowerCase() || "";

  // Check search query match
  const matchesSearch = !searchLower || 
    name.includes(searchLower) || 
    company.includes(searchLower) || 
    industry.includes(searchLower);

  // Check industry filter match
  const matchesIndustry = industryLower === "all" || industry === industryLower;

  return matchesSearch && matchesIndustry;
});
  
  // Sort by net worth (descending)
  const sortedPeople = [...filteredPeople].sort((a, b) => b.netWorth - a.netWorth);
  
  // Paginate results
  const displayedPeople = sortedPeople.slice(0, itemsToShow);
  const hasMorePeople = displayedPeople.length < filteredPeople.length;
  
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
        title="Richest People in South Africa | MoneyWorth" 
        description="Explore the net worth of South Africa's richest individuals. Updated list of millionaires and billionaires with detailed wealth information."
        canonicalUrl="/net-worth"
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">South Africa's Richest People</h1>
            <p className="text-gray-600">
              Explore the net worth of South Africa's wealthiest individuals
            </p>
          </div>
          
          <Link 
            to="/categories"
            className="mt-4 md:mt-0 inline-flex items-center text-blog-accent hover:text-blog-accent-hover transition-colors"
          >
            <ListFilter className="h-4 w-4 mr-1.5" />
           Top 10
          </Link>
        </div>
        
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
          {filteredPeople.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No individuals found matching "{searchQuery}"
            </div>
          ) : (
            <>
              <div className="p-4 border-b border-gray-100 bg-gray-50">
                <div className="grid grid-cols-12 text-xs font-medium text-gray-600">
                  <div className="col-span-1">#</div>
                  <div className="col-span-5 md:col-span-4">Name</div>
                  <div className="col-span-3 md:col-span-3">Net Worth</div>
                  <div className="hidden md:block md:col-span-2">Industry</div>
                  <div className="col-span-3 md:col-span-2">Company</div>
                </div>
              </div>
              
              {displayedPeople.map((person, index) => (
                <motion.div 
                  key={person.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`group px-4 py-3 ${index !== displayedPeople.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <div className="grid grid-cols-12 items-center">
                    <div className="col-span-1 text-sm text-gray-500">
                      {index + 1}
                    </div>
                    
                    <div className="col-span-5 md:col-span-4">
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8 mr-3">
                          <AvatarImage src={person.imageUrl || "/placeholder.svg"} alt={person.name} />
                          <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-xs">
                            {getInitials(person.name)}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div>
                          <Link 
                            to={`/net-worth/${person.slug}`}
                            className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-blog-accent flex items-center"
                          >
                            {person.name}
                            <ArrowUpRight 
                              className="h-3.5 w-3.5 ml-1 text-blog-subtle opacity-0 group-hover:opacity-100 transition-opacity"
                            />
                          </Link>
                          <div className="text-xs text-gray-500">{person.occupation}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-span-3 md:col-span-3">
                      <span className="text-sm font-medium">{formatNetWorth(person.netWorth, person.currency)}</span>
                    </div>
                    
                    <div className="hidden md:block md:col-span-2">
                      <span className="px-1.5 py-0.5 bg-gray-100 rounded text-[#666] text-xs">
                        {person.industry}
                      </span>
                    </div>
                    
                    <div className="col-span-3 md:col-span-2">
                      <span className="text-xs text-gray-600">{person.company || "—"}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {hasMorePeople && (
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
            &copy; {new Date().getFullYear()} MoneyWorth. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default NetWorth;
