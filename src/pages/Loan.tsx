
import { useState } from "react";
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

const Loan = () => {
  const [itemsToShow, setItemsToShow] = useState(50);
  const location = useLocation();
  const navigate = useNavigate();
  
  const timeFrame: CrdbTimeFrame = location.pathname.includes("/yearly") 
    ? "yearly" 
    : "monthly";
  
  const loanResults = generateCrdbLoanCalculations(
    50000,    // Min: R50,000
    1000000,  // Max: R1,000,000
    50000,    // Step: R50,000
    13,       // Default interest rate
    timeFrame === "yearly" ? 3 : 36, // 3 years / 36 months
    timeFrame
  );
    
  const displayedResults = loanResults.slice(0, itemsToShow);
  const hasMoreResults = displayedResults.length < loanResults.length;
  
  const loadMore = () => {
    setItemsToShow(prevItemsToShow => prevItemsToShow + 50);
  };

  const handleTimeFrameChange = (value: string) => {
    if (value === "yearly" || value === "monthly") {
      navigate(`/loan${value !== "monthly" ? "/" + value : ""}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title="Personal Loan Calculator - Monthly & Annual Payments" 
        description="Calculate your personal loan payments with our comprehensive calculator. Get accurate monthly and annual payment estimates with customizable loan terms, interest rates, and repayment periods."
        canonicalUrl={`/loan${timeFrame !== "monthly" ? "/" + timeFrame : ""}`}
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-2">Personal Loan Calculator</h1>
        <p className="text-gray-600 mb-8">
          Calculate your personal loan payments with our comprehensive calculator.
          Get accurate {timeFrame === "monthly" ? "monthly" : "yearly"} payment estimates based on current interest rates, loan amount, and repayment term. Perfect for planning your personal financing needs—featuring flexible parameters, instant results, and complete transparency for informed decision-making.
        </p>

        {/* Custom Loan Calculator */}
        <CrdbCalculator 
          timeFrame={timeFrame}
          onTimeFrameChange={handleTimeFrameChange}
          bankPath="loan"
        />

        <p className="text-gray-600 mb-8">
          <em>Interest rates may vary based on your credit profile, loan terms, and market conditions. Contact your preferred lender for personalized rates.</em>
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
                    to={`/loan/${timeFrame}/${result.loanAmount}/${result.interestRate}/${result.loanTerm}`}
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

export default Loan;
