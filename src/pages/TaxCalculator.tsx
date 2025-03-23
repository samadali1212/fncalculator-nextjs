
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Header from "../components/Header";
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
import { generateTaxCalculations, formatCurrency, AgeGroup } from "../utils/taxCalculator";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";

const TaxCalculator = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsToShow, setItemsToShow] = useState(50);
  const [ageGroup, setAgeGroup] = useState<AgeGroup>("below65");
  
  // Generate tax calculations
  const taxResults = generateTaxCalculations(100000, 2000000, 50000, ageGroup);
  
  // Filter tax calculations based on search query
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

  const handleAgeGroupChange = (value: string) => {
    setAgeGroup(value as AgeGroup);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-2">Income Tax Calculator</h1>
        <p className="text-gray-600 mb-6">
          See how annual income gets taxed and what your take-home pay would be after PAYE in South Africa (2026 Tax Year)
        </p>
        
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
              placeholder="Search income (e.g. 300000)..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div>
            <Select 
              value={ageGroup} 
              onValueChange={handleAgeGroupChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Age group" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="below65">Below 65 years old</SelectItem>
                <SelectItem value="age65to75">Between 65 and 75 years old</SelectItem>
                <SelectItem value="above75">75 years and older</SelectItem>
              </SelectContent>
            </Select>
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
                  <div className="col-span-4 md:col-span-3">Annual Income</div>
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
                        to={`/tax-calculator/${result.grossIncome}`}
                        className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-blog-accent flex items-center"
                      >
                        {formatCurrency(result.grossIncome)}
                        <ArrowUpRight 
                          className="h-3.5 w-3.5 ml-1 text-blog-subtle opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </Link>
                    </div>
                    
                    <div className="col-span-4 md:col-span-3">
                      <span className="text-sm">{formatCurrency(result.netIncome)}</span>
                    </div>
                    
                    <div className="hidden md:block md:col-span-2">
                      <span className="text-sm">{formatCurrency(result.netTax)}</span>
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
            &copy; {new Date().getFullYear()} MoneyWorth. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default TaxCalculator;
