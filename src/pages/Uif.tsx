
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import SEO from "../components/SEO";
import UIFCalculator from "../components/UIFCalculator";
import { Button } from "@/components/ui/button";
import { 
  generateUIFCalculations, 
  formatUIFCurrency,
  UIFCalculation
} from "../utils/uifCalculator";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";

const Uif = () => {
  const [itemsToShow, setItemsToShow] = useState(50);
  
  const uifResults = generateUIFCalculations(
    5000,    // Min: R5,000
    17712,   // Max: R17,712 (UIF cap)
    500,     // Step: R500
    1460     // 4 years employment duration
  );
    
  const displayedResults = uifResults.slice(0, itemsToShow);
  const hasMoreResults = displayedResults.length < uifResults.length;
  
  const loadMore = () => {
    setItemsToShow(prevItemsToShow => prevItemsToShow + 50);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title="UIF Calculator South Africa 2024/2025 - Unemployment Insurance Fund" 
        description="Calculate UIF benefits in South Africa with our 2024/2025 UIF calculator. Calculate unemployment insurance benefits based on your salary and employment duration."
        canonicalUrl="/uif"
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-2">UIF Calculator South Africa For 2024/2025</h1>
        <p className="text-gray-600 mb-8">
          Calculate UIF (Unemployment Insurance Fund) benefits in South Africa with our comprehensive UIF calculator tool. 
          Calculate your unemployment insurance benefits based on your average monthly salary and employment duration. 
          Perfect for employees who need to understand their potential UIF benefits in case of unemployment, illness, or maternity leave.
        </p>

        {/* Custom UIF Calculator */}
        <UIFCalculator />

        <p className="text-gray-600 mb-8">
          <em><strong>Note: UIF benefits are calculated based on your average salary (capped at R17,712), employment duration, and the current UIF formula. The maximum benefit period is 365 days.</strong></em>
        </p>

        <div className="bg-white rounded-sm shadow-sm border border-gray-200">
          <div className="p-4 border-b border-gray-100 bg-gray-50">
            <div className="grid grid-cols-12 text-xs font-medium text-gray-600">
              <div className="col-span-2">Salary</div>
              <div className="col-span-2">Daily Income</div>
              <div className="col-span-2">IRR (%)</div>
              <div className="col-span-2">Daily Benefit</div>
              <div className="col-span-2">Credit Days</div>
              <div className="col-span-2">Total Benefit</div>
            </div>
          </div>
          
          {displayedResults.map((result, index) => (
            <motion.div 
              key={result.averageSalary}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`group px-4 py-3 ${index !== displayedResults.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <div className="grid grid-cols-12 items-center">
                <div className="col-span-2">
                  <span className="text-[#333] text-sm font-medium">
                    {formatUIFCurrency(result.averageSalary)}
                  </span>
                </div>
                
                <div className="col-span-2">
                  <span className="text-xs">{formatUIFCurrency(result.dailyIncome)}</span>
                </div>
                
                <div className="col-span-2">
                  <span className="text-xs text-blue-600">{result.irr.toFixed(1)}%</span>
                </div>
                
                <div className="col-span-2">
                  <span className="text-xs text-green-600">{formatUIFCurrency(result.dba)}</span>
                </div>
                
                <div className="col-span-2">
                  <span className="text-xs">{Math.round(result.creditDays)}</span>
                </div>
                
                <div className="col-span-2">
                  <span className="text-xs font-medium">{formatUIFCurrency(result.totalBenefit)}</span>
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

export default Uif;
