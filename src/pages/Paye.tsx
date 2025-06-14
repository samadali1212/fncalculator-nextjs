
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SEO from "../components/SEO";
import PayeCalculator from "../components/PayeCalculator";
import PayeCollapsible from "../components/PayeCollapsible";
import ToolStructuredData from "../components/StructuredData/ToolStructuredData";
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

const Paye = () => {
  const [itemsToShow, setItemsToShow] = useState(50);
  const location = useLocation();
  const navigate = useNavigate();
  
  const timeFrame: TanzaniaTimeFrame = location.pathname.includes("/yearly") 
    ? "yearly" 
    : "monthly";
  
  const taxResults = generateTanzaniaTaxCalculations(
    timeFrame === "monthly" ? 270000 : 3240000,    // Min: TSh 100,000 monthly / TSh 1,200,000 yearly
    timeFrame === "monthly" ? 2070000 : 24840000,  // Max: TSh 2,000,000 monthly / TSh 24,000,000 yearly
    timeFrame === "monthly" ? 100000 : 1200000,      // Step: TSh 10,000 monthly / TSh 120,000 yearly
    timeFrame
  );
    
  const displayedResults = taxResults.slice(0, itemsToShow);
  const hasMoreResults = displayedResults.length < taxResults.length;
  
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
        title="PAYE Calculator 2024/2025 For Tanzania Mainland Tax Rates" 
        description="Calculate your PAYE tax in Tanzania Mainland with our 2024/2025 tax calculator. Monthly and annual income tax calculations based on current tax brackets."
        canonicalUrl={`/paye${timeFrame !== "monthly" ? "/" + timeFrame : ""}`}
      />
      <ToolStructuredData toolType="paye" />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-2">PAYE Tax Calculator In Tanzania For 2024/2025</h1>
        <p className="text-gray-600 mb-8">
          Our PAYE calculator tool helps you easily calculate PAYE in Tanzania with accurate TRA PAYE calculator rates. 
          Estimate your tax in seconds, whether you're checking PAYE rates in Tanzania or looking for a PAYE calculator {timeFrame === "monthly" ? "monthly" : "annual"} update. 
          Ideal for anyone needing a PAYE calculator for Tanzania mainland or simply learning how to calculate PAYE in Tanzania. 
          From PAYE tax breakdowns to personalized figures, the calculator gives you everything you need. 
        </p>

        {/* Custom Income Calculator */}
        <PayeCalculator 
          timeFrame={timeFrame}
          onTimeFrameChange={handleTimeFrameChange}
        />

        {/* PAYE Information Collapsibles */}
        <PayeCollapsible />

        <p className="text-gray-600 mb-8">
          <em><strong>Note that PAYE is calculated after deducting NSSF or PSSSF contributions from your gross income.</strong></em>
        </p>
        
        {/* Time Frame Toggle - Full Width */}
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex gap-2 w-full">
            <Button
              variant={timeFrame === "monthly" ? "default" : "outline"}
              onClick={() => handleTimeFrameChange("monthly")}
              size="sm"
              className="flex-1 text-sm"
            >
              Monthly
            </Button>
            <Button
              variant={timeFrame === "yearly" ? "default" : "outline"}
              onClick={() => handleTimeFrameChange("yearly")}
              size="sm"
              className="flex-1 text-sm"
            >
              Yearly
            </Button>
          </div>
        </motion.div>

        <div className="bg-white rounded-sm shadow-sm border border-gray-200">
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
