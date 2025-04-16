
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Filter, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SEO from "../components/SEO";
import AdSense from "../components/AdSense";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { generateHourlyRates } from "../utils/hourlyConverter";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";

const HourlyRates = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsToShow, setItemsToShow] = useState(50);
  const [isLoading, setIsLoading] = useState(true);
  const [hourlyRates, setHourlyRates] = useState([]);
  
  // Load data with simulated network delay
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate a network request
    const timer = setTimeout(() => {
      // Generate hourly rates
      const rates = generateHourlyRates();
      setHourlyRates(rates);
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Filter hourly rates based on search query
  const filteredRates = searchQuery
    ? hourlyRates.filter(rate => 
        rate.hourlyRate.toString().includes(searchQuery) ||
        rate.monthlyEquivalent.toString().includes(searchQuery))
    : hourlyRates;
    
  const displayedRates = filteredRates.slice(0, itemsToShow);
  const hasMoreRates = displayedRates.length < filteredRates.length;
  
  const loadMore = () => {
    setItemsToShow(prevItemsToShow => prevItemsToShow + 50);
  };

  // Function to format with space as thousand separator
  const formatWithSpaces = (value: number): string => {
    return value.toLocaleString().replace(/,/g, ' ');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f6f6f0]">
        <SEO 
          title="Hourly to Monthly Salary Converter" 
          description="Convert hourly rates to monthly and yearly salaries in South Africa. Find out what your hourly rate means in terms of monthly and annual income."
          canonicalUrl="/hourly-rates"
        />
        <Header />
        <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
          <h1 className="text-3xl font-bold mb-2">Hourly to Monthly Salary Converter</h1>
          <p className="text-gray-600 mb-6">
            See how hourly rates translate to monthly and yearly salaries in South Africa
          </p>
          
          <div className="mb-6 h-10 w-full bg-gray-200 animate-pulse rounded"></div>
          
          <div className="bg-white rounded-sm shadow-sm border border-gray-200 p-6">
            <div className="space-y-4">
              {Array(10).fill(0).map((_, i) => (
                <div key={i} className="w-full h-16 bg-gray-100 animate-pulse rounded"></div>
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
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title="Hourly to Monthly Salary Converter" 
        description="Convert hourly rates to monthly and yearly salaries in South Africa. Find out what your hourly rate means in terms of monthly and annual income."
        canonicalUrl="/hourly-rates"
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-2">Hourly to Monthly Salary Converter</h1>
        <p className="text-gray-600 mb-6">
          See how hourly rates translate to monthly and yearly salaries in South Africa
        </p>
        
        {/* Top Ad */}
        <div className="mb-6">
          <AdSense slot="9889084223" format="auto" className="py-3" />
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
              placeholder="Search rate (e.g. 150)..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        <div className="bg-white rounded-sm shadow-sm border border-gray-200">
          {filteredRates.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No rates found matching "{searchQuery}"
            </div>
          ) : (
            <>
              {/* Middle Ad after ~15 items */}
              {displayedRates.length > 0 && (
                <div className="px-4 py-3 border-b border-gray-100">
                  <AdSense slot="job-list-ad-9" format="auto" className="py-1" />
                </div>
              )}
              
              {displayedRates.map((rate, index) => (
                <motion.div 
                  key={rate.hourlyRate}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`group px-4 py-3 ${index !== displayedRates.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <div className="flex items-start">
                    <div className="pr-3 text-center hidden sm:block">
                      <span className="text-gray-500 text-sm">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <Link 
                          to={`/hourly-rates/${rate.hourlyRate}`}
                          className="text-[#333] hover:underline text-base sm:text-lg font-medium transition-colors group-hover:text-blog-accent"
                        >
                          R{rate.hourlyRate} per hour
                        </Link>
                        <ArrowUpRight 
                          className="h-3.5 w-3.5 text-blog-subtle opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                      
                      <div className="flex items-center text-xs text-[#828282]">
                        <span>R{formatWithSpaces(rate.monthlyEquivalent)} per month</span>
                        <span className="mx-1">•</span>
                        <span>R{formatWithSpaces(rate.yearlySalary)} per year</span>
                        <span className="mx-1">•</span>
                        <span className="px-1.5 py-0.5 bg-gray-100 rounded text-[#666] text-xs">
                          {rate.workHoursPerWeek}h/week
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Middle Ad after ~25 items */}
              {displayedRates.length > 24 && (
                <div className="px-4 py-3 border-b border-gray-100">
                  <AdSense slot="job-list-ad-24" format="auto" className="py-1" />
                </div>
              )}
              
              {/* Middle Ad after ~40 items */}
              {displayedRates.length > 39 && (
                <div className="px-4 py-3 border-b border-gray-100">
                  <AdSense slot="job-list-ad-39" format="auto" className="py-1" />
                </div>
              )}
              
              {hasMoreRates && (
                <>
                  <div className="p-4 border-t border-gray-100">
                    <AdSense slot="job-list-load-more" format="auto" className="py-1" />
                  </div>
                  <Pagination className="py-5">
                    <PaginationContent>
                      <PaginationItem className="w-full">
                        <Button 
                          variant="outline" 
                          onClick={loadMore} 
                          className="w-full"
                        >
                          Load More Rates
                        </Button>
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </>
              )}
            </>
          )}
        </div>
        
        {/* Bottom Ad */}
        <div className="mt-6">
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

export default HourlyRates;
