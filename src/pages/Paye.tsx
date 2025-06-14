
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SEO from "../components/SEO";
import PayeCalculator from "../components/PayeCalculator";
import { Button } from "@/components/ui/button";
import { 
  generateTanzaniaTaxCalculations, 
  formatTanzaniaCurrency,
  TanzaniaTimeFrame
} from "../utils/tanzaniaTaxCalculator";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const Paye = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsToShow, setItemsToShow] = useState(50);
  const location = useLocation();
  const navigate = useNavigate();
  
  const timeFrame: TanzaniaTimeFrame = location.pathname.includes("/yearly") 
    ? "yearly" 
    : "monthly";
  
  const taxResults = generateTanzaniaTaxCalculations(
    timeFrame === "monthly" ? 100000 : 1200000,    // Min: TSh 100,000 monthly / TSh 1,200,000 yearly
    timeFrame === "monthly" ? 2000000 : 24000000,  // Max: TSh 2,000,000 monthly / TSh 24,000,000 yearly
    timeFrame === "monthly" ? 10000 : 120000,      // Step: TSh 10,000 monthly / TSh 120,000 yearly
    timeFrame
  );
  
  const filteredResults = searchQuery
    ? taxResults.filter(result => 
        result.grossIncome.toString().includes(searchQuery) ||
        result.netIncome.toString().includes(searchQuery))
    : taxResults;
    
  const displayedResults = filteredResults.slice(0, itemsToShow);
  const hasMoreResults = displayedResults.length < filteredResults.length;
  
  const loadMore = () => {
    setItemsToShow(prevItemsToShow => prevItemsToShow + 50);
  };

  const handleTimeFrameChange = (value: string) => {
    if (value === "yearly" || value === "monthly") {
      navigate(`/paye${value !== "monthly" ? "/" + value : ""}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title="Tanzania PAYE Tax Calculator 2024/2025 - Mainland Tax Rates" 
        description="Calculate your PAYE tax in Tanzania Mainland with our 2024/2025 tax calculator. Monthly and annual income tax calculations based on current tax brackets."
        canonicalUrl={`/paye${timeFrame !== "monthly" ? "/" + timeFrame : ""}`}
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-2">Tanzania PAYE Tax Calculator 2024/2025</h1>
        <p className="text-gray-600 mb-8">
          Calculate how {timeFrame === "monthly" ? "monthly" : "annual"} income gets taxed under Tanzania Mainland PAYE system and what your take-home pay would be. Note that PAYE is calculated after deducting NSSF or PSSSF contributions from your gross income.
        </p>

        {/* Custom Income Calculator */}
        <PayeCalculator 
          timeFrame={timeFrame}
          onTimeFrameChange={handleTimeFrameChange}
        />
        
        <motion.div 
          className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"
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
              placeholder={`Search ${timeFrame} income...`}
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div>
            <ToggleGroup 
              type="single" 
              value={timeFrame}
              onValueChange={handleTimeFrameChange}
              className="w-full border rounded-md"
            >
              <ToggleGroupItem value="monthly" className="text-xs px-3 py-1 flex-1">
                Monthly
              </ToggleGroupItem>
              <ToggleGroupItem value="yearly" className="text-xs px-3 py-1 flex-1">
                Yearly
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </motion.div>

        <div className="bg-white rounded-sm shadow-sm border border-gray-200">
          {filteredResults.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No tax calculations found matching "{searchQuery}"
            </div>
          ) : (
            <>
              <div className="p-4 border-b border-gray-100 bg-gray-50">
                <div className="grid grid-cols-12 text-xs font-medium text-gray-600">
                  <div className="col-span-4 md:col-span-3">{timeFrame === "monthly" ? "Monthly" : "Annual"} Income</div>
                  <div className="col-span-4 md:col-span-3">After Tax</div>
                  <div className="hidden md:block md:col-span-2">Tax Amount</div>
                  <div className="col-span-3 md:col-span-2">Tax Rate</div>
                  <div className="hidden md:block md:col-span-2">Marginal Rate</div>
                </div>
              </div>
              
              {displayedResults.map((result, index) => (
                <motion.div 
                  key={result.grossIncome}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`group px-4 py-3 ${index !== displayedResults.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <div className="grid grid-cols-12 items-center">
                    <div className="col-span-4 md:col-span-3">
                      <Link 
                        to={`/paye/${timeFrame}/${result.grossIncome}`}
                        className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-blog-accent flex items-center"
                      >
                        {formatTanzaniaCurrency(result.grossIncome)}
                        <ArrowUpRight 
                          className="h-3.5 w-3.5 ml-1 text-blog-subtle opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </Link>
                    </div>
                    
                    <div className="col-span-4 md:col-span-3">
                      <span className="text-sm">{formatTanzaniaCurrency(result.netIncome)}</span>
                    </div>
                    
                    <div className="hidden md:block md:col-span-2">
                      <span className="text-sm">{formatTanzaniaCurrency(result.netTax)}</span>
                    </div>
                    
                    <div className="col-span-3 md:col-span-2">
                      <span className="px-1.5 py-0.5 bg-gray-100 rounded text-[#666] text-xs">
                        {result.effectiveTaxRate.toFixed(1)}%
                      </span>
                    </div>
                    
                    <div className="hidden md:block md:col-span-2">
                      <span className="text-sm">{result.marginalTaxRate}%</span>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {hasMoreResults && (
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

export default Paye;
