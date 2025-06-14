import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Info, Calculator, Receipt, Building2 } from "lucide-react";
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
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Paye = () => {
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

        {/* PAYE Information Collapsibles */}
        <motion.div 
          className="mb-8 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding PAYE in Tanzania</h2>
          
          <Collapsible defaultOpen>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <Info className="h-5 w-5 text-blue-600" />
                <span className="font-medium text-left">What is PAYE in Tanzania?</span>
              </div>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
              <div className="text-gray-600">
                <p className="mb-3">
                  Pay As You Earn (PAYE) is a system of income tax collection in Tanzania where employers deduct tax from employees' salaries before paying them. This ensures continuous tax collection throughout the year.
                </p>
                <p className="mb-3">
                  PAYE applies to employment income including salaries, wages, bonuses, overtime pay, and other benefits. The tax is calculated based on progressive tax brackets, meaning higher earners pay higher rates.
                </p>
                <p>
                  All employers in Tanzania are required to register for PAYE and deduct tax from their employees' salaries before remitting it to the Tanzania Revenue Authority (TRA).
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible defaultOpen>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <Calculator className="h-5 w-5 text-green-600" />
                <span className="font-medium text-left">Tanzania PAYE Tax Brackets 2024/2025</span>
              </div>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
              <div className="text-gray-600">
                <p className="mb-3">Tanzania uses a progressive tax system with the following monthly brackets:</p>
                <div className="space-y-2 mb-3">
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span>TSh 0 - 270,000</span>
                    <span className="font-medium">0%</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span>TSh 270,001 - 520,000</span>
                    <span className="font-medium">9%</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span>TSh 520,001 - 760,000</span>
                    <span className="font-medium">20%</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span>TSh 760,001 - 1,000,000</span>
                    <span className="font-medium">25%</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span>Above TSh 1,000,000</span>
                    <span className="font-medium">30%</span>
                  </div>
                </div>
                <p className="text-sm">
                  Note: These are monthly brackets. Annual brackets are calculated by multiplying by 12.
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible defaultOpen>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <Receipt className="h-5 w-5 text-purple-600" />
                <span className="font-medium text-left">PAYE Deductions and Allowances</span>
              </div>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
              <div className="text-gray-600">
                <p className="mb-3">
                  Before calculating PAYE tax, certain deductions are made from gross income:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-3">
                  <li><strong>NSSF Contributions:</strong> National Social Security Fund contributions (worker's portion)</li>
                  <li><strong>PSSSF Contributions:</strong> Public Service Social Security Fund (for public servants)</li>
                  <li><strong>LAPF Contributions:</strong> Local Authorities Provident Fund (for local government employees)</li>
                  <li><strong>Other approved pension schemes</strong></li>
                </ul>
                <p className="mb-3">
                  The standard NSSF contribution rate is 10% of basic salary (5% employee + 5% employer), with a maximum monthly contribution ceiling.
                </p>
                <p>
                  PAYE tax is then calculated on the income remaining after these deductions.
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible defaultOpen>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <Building2 className="h-5 w-5 text-orange-600" />
                <span className="font-medium text-left">Employer PAYE Obligations</span>
              </div>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
              <div className="text-gray-600">
                <p className="mb-3">
                  Employers in Tanzania have several PAYE-related responsibilities:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-3">
                  <li>Register for PAYE with Tanzania Revenue Authority (TRA)</li>
                  <li>Deduct correct amount of PAYE tax from employee salaries</li>
                  <li>Remit PAYE tax to TRA by the 15th of the following month</li>
                  <li>Submit monthly PAYE returns</li>
                  <li>Issue P9A forms (tax deduction cards) to employees</li>
                  <li>Submit annual returns and reconciliation</li>
                </ul>
                <p className="mb-3">
                  <strong>Penalties:</strong> Late payment or non-compliance attracts penalties and interest charges from TRA.
                </p>
                <p>
                  Employers must keep proper records of all PAYE transactions for audit purposes.
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </motion.div>
        
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
