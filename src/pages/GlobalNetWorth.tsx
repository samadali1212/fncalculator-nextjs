
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ArrowUpRight, ListFilter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SEO from "../components/SEO";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  Card, 
  CardContent
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AdSense from "../components/AdSense";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";

// Global net worth data structure
// This is a simplified version for this example
// In a real implementation, you'd fetch this from an API or use a more comprehensive data file
const globalNetWorthPeople = [
  {
    id: "1",
    slug: "elon-musk",
    name: "Elon Musk",
    netWorth: 228900000000,
    currency: "USD",
    occupation: "Entrepreneur",
    industry: "Technology",
    company: "Tesla, SpaceX, X",
    country: "United States",
    age: 52,
    description: "Elon Musk is an entrepreneur and business magnate. He is the founder, CEO, and Chief Engineer at SpaceX; CEO and product architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI.",
    imageUrl: "/placeholder.svg",
    source: "Forbes",
    lastUpdated: "April 2025"
  },
  {
    id: "2",
    slug: "bernard-arnault",
    name: "Bernard Arnault",
    netWorth: 183000000000,
    currency: "USD",
    occupation: "Business Magnate",
    industry: "Fashion & Retail",
    company: "LVMH",
    country: "France",
    age: 75,
    description: "Bernard Arnault is the chairman and CEO of LVMH Moët Hennessy Louis Vuitton, the world's largest luxury goods company. He is one of the world's richest individuals.",
    imageUrl: "/placeholder.svg",
    source: "Forbes",
    lastUpdated: "April 2025"
  },
  {
    id: "3",
    slug: "jeff-bezos",
    name: "Jeff Bezos",
    netWorth: 180000000000,
    currency: "USD",
    occupation: "Entrepreneur",
    industry: "Technology",
    company: "Amazon",
    country: "United States",
    age: 60,
    description: "Jeff Bezos is an American entrepreneur, media proprietor, investor, and computer engineer. He is the founder and executive chairman of Amazon, where he previously served as the president and CEO.",
    imageUrl: "/placeholder.svg",
    source: "Forbes",
    lastUpdated: "April 2025"
  },
  {
    id: "4",
    slug: "mark-zuckerberg",
    name: "Mark Zuckerberg",
    netWorth: 177000000000,
    currency: "USD",
    occupation: "Entrepreneur",
    industry: "Technology",
    company: "Meta",
    country: "United States",
    age: 40,
    description: "Mark Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist. He is known for co-founding Meta Platforms, Inc. (formerly Facebook, Inc.).",
    imageUrl: "/placeholder.svg",
    source: "Forbes",
    lastUpdated: "April 2025"
  },
  {
    id: "5",
    slug: "larry-ellison",
    name: "Larry Ellison",
    netWorth: 141000000000,
    currency: "USD",
    occupation: "Entrepreneur",
    industry: "Technology",
    company: "Oracle",
    country: "United States",
    age: 79,
    description: "Larry Ellison is an American business magnate, investor, and former chief executive officer of the software company Oracle Corporation.",
    imageUrl: "/placeholder.svg",
    source: "Forbes",
    lastUpdated: "April 2025"
  },
  {
    id: "6",
    slug: "warren-buffett",
    name: "Warren Buffett",
    netWorth: 133000000000,
    currency: "USD",
    occupation: "Investor",
    industry: "Finance",
    company: "Berkshire Hathaway",
    country: "United States",
    age: 93,
    description: "Warren Buffett is an American business magnate, investor, and philanthropist. He is currently the chairman and CEO of Berkshire Hathaway.",
    imageUrl: "/placeholder.svg",
    source: "Forbes",
    lastUpdated: "April 2025"
  },
  {
    id: "7",
    slug: "bill-gates",
    name: "Bill Gates",
    netWorth: 128000000000,
    currency: "USD",
    occupation: "Entrepreneur",
    industry: "Technology",
    company: "Microsoft",
    country: "United States",
    age: 68,
    description: "Bill Gates is an American business magnate, software developer, investor, author, and philanthropist. He is a co-founder of Microsoft Corporation.",
    imageUrl: "/placeholder.svg",
    source: "Forbes",
    lastUpdated: "April 2025"
  },
  {
    id: "8",
    slug: "mukesh-ambani",
    name: "Mukesh Ambani",
    netWorth: 116000000000,
    currency: "USD",
    occupation: "Business Magnate",
    industry: "Energy & Telecom",
    company: "Reliance Industries",
    country: "India",
    age: 66,
    description: "Mukesh Ambani is an Indian billionaire businessman, and the chairman, managing director, and largest shareholder of Reliance Industries Ltd.",
    imageUrl: "/placeholder.svg",
    source: "Forbes",
    lastUpdated: "April 2025"
  },
  {
    id: "9",
    slug: "steve-ballmer",
    name: "Steve Ballmer",
    netWorth: 112000000000,
    currency: "USD",
    occupation: "Businessman",
    industry: "Technology",
    company: "Microsoft",
    country: "United States",
    age: 68,
    description: "Steve Ballmer is an American businessman and investor who served as the chief executive officer of Microsoft from 2000 to 2014.",
    imageUrl: "/placeholder.svg",
    source: "Forbes",
    lastUpdated: "April 2025"
  },
  {
    id: "10",
    slug: "larry-page",
    name: "Larry Page",
    netWorth: 111000000000,
    currency: "USD",
    occupation: "Computer Scientist",
    industry: "Technology",
    company: "Google",
    country: "United States",
    age: 51,
    description: "Larry Page is an American computer scientist and Internet entrepreneur. He is best known as one of the co-founders of Google, along with Sergey Brin.",
    imageUrl: "/placeholder.svg",
    source: "Forbes",
    lastUpdated: "April 2025"
  }
];

// Helper function to format net worth
const formatGlobalNetWorth = (amount: number, currency: string): string => {
  if (amount >= 1000000000) {
    return `${(amount / 1000000000).toFixed(1)}B ${currency}`;
  } else if (amount >= 1000000) {
    return `${(amount / 1000000).toFixed(1)}M ${currency}`;
  } else {
    return `${amount.toLocaleString()} ${currency}`;
  }
};

// Helper function to find person by slug
export const findGlobalPersonBySlug = (slug: string) => {
  return globalNetWorthPeople.find(person => person.slug === slug) || null;
};

// Helper function to get similar people
export const getSimilarGlobalPeople = (person: any, limit: number) => {
  if (!person) return [];
  
  const similar = globalNetWorthPeople
    .filter(p => p.id !== person.id)
    .sort((a, b) => {
      // Prioritize same industry
      if (a.industry === person.industry && b.industry !== person.industry) return -1;
      if (a.industry !== person.industry && b.industry === person.industry) return 1;
      
      // Then sort by net worth difference
      const aDiff = Math.abs(a.netWorth - person.netWorth);
      const bDiff = Math.abs(b.netWorth - person.netWorth);
      return aDiff - bDiff;
    })
    .slice(0, limit);
    
  return similar;
};

const GlobalNetWorth = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsToShow, setItemsToShow] = useState(10);
  const [industryFilter, setIndustryFilter] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(true);

  const industries = ["all", ...Array.from(new Set(globalNetWorthPeople.map(person => person.industry)))];
  
  const filteredPeople = globalNetWorthPeople.filter(person => {
    const matchesSearch = searchQuery 
      ? person.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        person.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        person.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        person.country.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
      
    const matchesIndustry = industryFilter === "all" || person.industry === industryFilter;
    
    return matchesSearch && matchesIndustry;
  });
  
  const sortedPeople = [...filteredPeople].sort((a, b) => b.netWorth - a.netWorth);
  
  const displayedPeople = sortedPeople.slice(0, itemsToShow);
  const hasMorePeople = displayedPeople.length < filteredPeople.length;
  
  const loadMore = () => {
    setItemsToShow(prevItemsToShow => prevItemsToShow + 10);
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
        title="World's Richest People" 
        description="Explore the net worth of the world's richest individuals. Updated list of billionaires with detailed wealth information from around the globe."
        canonicalUrl="/global-net-worth"
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">World's Richest People</h1>
            <p className="text-gray-600">
              Explore the net worth of the world's wealthiest individuals
            </p>
          </div>
          <Link 
            to="/compare"
            className="mt-4 md:mt-0 inline-flex items-center text-blog-accent hover:text-blog-accent-hover transition-colors"
          >
            <ListFilter className="h-4 w-4 mr-1.5" />
            Compare Wealth
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
              placeholder="Search by name, company, country, or industry..."
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

        <div className="mb-4">
          <AdSense slot="9889084223" format="auto" className="py-3" />
        </div>

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
                  <div className="hidden md:block md:col-span-2">Country</div>
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
                          <AvatarImage 
                            src={person.imageUrl || "/placeholder.svg"} 
                            alt={person.name} 
                            className="object-cover"
                          />
                          <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-xs">
                            {getInitials(person.name)}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div>
                          <Link 
                            to={`/global-net-worth/${person.slug}`}
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
                      <span className="text-sm font-medium">{formatGlobalNetWorth(person.netWorth, person.currency)}</span>
                    </div>
                    
                    <div className="hidden md:block md:col-span-2">
                      <span className="px-1.5 py-0.5 bg-gray-100 rounded text-[#666] text-xs">
                        {person.country}
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

        <div className="mb-4 mt-8">
          <AdSense slot="9889084223" format="auto" className="py-3" />
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

export default GlobalNetWorth;
