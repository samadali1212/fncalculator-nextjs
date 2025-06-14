
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SEO from "../components/SEO";
import CrdbCalculator from "../components/CrdbCalculator";
import { Button } from "@/components/ui/button";
import { 
  generateCrdbLoanCalculations, 
  formatCurrency,
  CrdbTimeFrame
} from "../utils/loanCalculator";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";

const Azania = () => {
  const [itemsToShow, setItemsToShow] = useState(50);
  const location = useLocation();
  const navigate = useNavigate();
  
  const timeFrame: CrdbTimeFrame = location.pathname.includes("/yearly") 
    ? "yearly" 
    : "monthly";
  
  const loanResults = generateCrdbLoanCalculations(
    timeFrame === "monthly" ? 1000000 : 1000000,    // Min: TSh 1,000,000
    timeFrame === "monthly" ? 50000000 : 50000000,  // Max: TSh 50,000,000
    timeFrame === "monthly" ? 1000000 : 1000000,    // Step: TSh 1,000,000
    17, // Azania default interest rate (highest among all banks)
    timeFrame === "monthly" ? 36 : 3,               // 36 months or 3 years
    timeFrame
  );
    
  const displayedResults = loanResults.slice(0, itemsToShow);
  const hasMoreResults = displayedResults.length < loanResults.length;
  
  const loadMore = () => {
    setItemsToShow(prevItemsToShow => prevItemsToShow + 50);
  };

  const handleTimeFrameChange = (value: string) => {
    if (value === "yearly" || value === "monthly") {
      navigate(`/azania${value !== "monthly" ? "/" + value : ""}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title="Azania Bank Personal Loan Calculator Tanzania" 
        description="Calculate your Azania Bank personal loan payments with our calculator. Monthly and annual payment calculations at the current interest rate with customizable terms."
        canonicalUrl={`/azania${timeFrame !== "monthly" ? "/" + timeFrame : ""}`}
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-2">Azania Bank Personal Loan Calculator</h1>
        <p className="text-gray-600 mb-8">
Use our Azania Bank loan calculator to estimate your personal loan payments with precision.
Get fast and reliable {timeFrame === "monthly" ? "monthly" : "yearly"} payment breakdowns based on current interest rates. Ideal for anyone planning a personal loan with Azania Bank—featuring flexible repayment terms, clear figures, and an easy-to-use interface for smart financial planning.
        </p>

        {/* Custom Loan Calculator */}
        <CrdbCalculator 
          timeFrame={timeFrame}
          onTimeFrameChange={handleTimeFrameChange}
          bankPath="azania"
        />

        <p className="text-gray-600 mb-8">
          <em><strong>Interest rates may vary based on your credit profile and loan terms. Contact Azania Bank for personalized rates.</strong></em>
        </p>
        
        {/* Time Frame Toggle */}
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
              Monthly Payments
            </Button>
            <Button
              variant={timeFrame === "yearly" ? "default" : "outline"}
              onClick={() => handleTimeFrameChange("yearly")}
              size="sm"
              className="flex-1 text-sm"
            >
              Annual Payments
            </Button>
          </div>
        </motion.div>

        <div className="bg-white rounded-sm shadow-sm border border-gray-200">
          <div className="p-4 border-b border-gray-100 bg-gray-50">
            <div className="grid grid-cols-12 text-xs font-medium text-gray-600">
              <div className="col-span-4 md:col-span-3">Loan Amount</div>
              <div className="col-span-4 md:col-span-3">{timeFrame === "monthly" ? "Monthly" : "Annual"} Payment</div>
              <div className="hidden md:block md:col-span-2">Total Interest</div>
              <div className="col-span-3 md:col-span-2">Total Repayment</div>
              <div className="hidden md:block md:col-span-2">Loan Term</div>
            </div>
          </div>
          
          {displayedResults.map((result, index) => (
            <motion.div 
              key={result.loanAmount}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`group px-4 py-3 ${index !== displayedResults.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <div className="grid grid-cols-12 items-center">
                <div className="col-span-4 md:col-span-3">
                  <Link 
                    to={`/azania/${timeFrame}/${result.loanAmount}/${result.interestRate}/${result.loanTerm}`}
                    className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-blog-accent flex items-center"
                  >
                    {formatCurrency(result.loanAmount)}
                    <ArrowUpRight 
                      className="h-3.5 w-3.5 ml-1 text-blog-subtle opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </div>
                
                <div className="col-span-4 md:col-span-3">
                  <span className="text-sm">{formatCurrency(result.payment)}</span>
                </div>
                
                <div className="hidden md:block md:col-span-2">
                  <span className="text-sm">{formatCurrency(result.totalInterest)}</span>
                </div>
                
                <div className="col-span-3 md:col-span-2">
                  <span className="text-sm">{formatCurrency(result.totalRepayment)}</span>
                </div>
                
                <div className="hidden md:block md:col-span-2">
                  <span className="px-1.5 py-0.5 bg-gray-100 rounded text-[#666] text-xs">
                    {result.termDisplay}
                  </span>
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

export default Azania;
