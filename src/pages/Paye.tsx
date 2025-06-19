
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  generateSouthAfricaTaxCalculations, 
  formatSouthAfricaCurrency,
  SouthAfricaTimeFrame,
  AgeGroup
} from "../utils/southAfricaTaxCalculator";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";

const Paye = () => {
  const [itemsToShow, setItemsToShow] = useState(50);
  const [ageGroup, setAgeGroup] = useState<AgeGroup>("below65");
  const location = useLocation();
  const navigate = useNavigate();
  
  const timeFrame: SouthAfricaTimeFrame = location.pathname.includes("/yearly") 
    ? "yearly" 
    : "monthly";
  
  const taxResults = generateSouthAfricaTaxCalculations(
    timeFrame === "monthly" ? 4000 : 48000,      // Min: R 4,000 monthly / R 48,000 yearly
    timeFrame === "monthly" ? 650000 : 7800000,  // Max: R 650,000 monthly / R 7,800,000 yearly
    timeFrame === "monthly" ? 5000 : 60000,      // Step: R 5,000 monthly / R 60,000 yearly
    ageGroup,
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
        title="PAYE Calculator 2024/2025 For South Africa Tax Rates" 
        description="Calculate your PAYE tax in South Africa with our 2024/2025 tax calculator. Monthly and annual income tax calculations based on current tax brackets and rebates."
        canonicalUrl={`/paye${timeFrame !== "monthly" ? "/" + timeFrame : ""}`}
      />
      <ToolStructuredData toolType="paye" />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-2">PAYE Tax Calculator In South Africa For 2024/2025</h1>
        <p className="text-gray-600 mb-8">
          Our PAYE calculator tool helps you easily calculate PAYE in South Africa with accurate SARS PAYE calculator rates. 
          Estimate your tax in seconds, whether you're checking PAYE rates in South Africa or looking for a PAYE calculator {timeFrame === "monthly" ? "monthly" : "annual"} update. 
          Ideal for anyone needing a PAYE calculator for South Africa or simply learning how to calculate PAYE in South Africa. 
          From PAYE tax breakdowns to personalized figures with age-based rebates, the calculator gives you everything you need. 
        </p>

        {/* Custom Income Calculator */}
        <PayeCalculator 
          timeFrame={timeFrame}
          onTimeFrameChange={handleTimeFrameChange}
        />

        {/* PAYE Information Collapsibles */}
        <PayeCollapsible />

        <p className="text-gray-600 mb-8">
          <em><strong>Note that PAYE is calculated based on your gross income with applicable rebates for different age groups.</strong></em>
        </p>
        
        {/* Controls Row - Time Frame and Age Group */}
        <motion.div 
          className="mb-6 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Time Frame Toggle */}
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

          {/* Age Group Selection */}
          <div className="w-full">
            <Select value={ageGroup} onValueChange={(value: AgeGroup) => setAgeGroup(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select age group for rebates" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="below65">Below 65 (Primary rebate only)</SelectItem>
                <SelectItem value="age65to75">65 to 75 (Primary + Secondary rebate)</SelectItem>
                <SelectItem value="above75">Above 75 (Primary + Secondary + Tertiary rebate)</SelectItem>
              </SelectContent>
            </Select>
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
                    to={`/paye/${timeFrame}/${result.grossIncome}/${ageGroup}`}
                    className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-blog-accent flex items-center"
                  >
                    {formatSouthAfricaCurrency(result.grossIncome)}
                    <ArrowUpRight 
                      className="h-3.5 w-3.5 ml-1 text-blog-subtle opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </div>
                
                <div className="col-span-4 md:col-span-3">
                  <span className="text-sm">{formatSouthAfricaCurrency(result.netIncome)}</span>
                </div>
                
                <div className="hidden md:block md:col-span-2">
                  <span className="text-sm">{formatSouthAfricaCurrency(result.netTax)}</span>
                </div>
                
                <div className="col-span-3 md:col-span-2">
                  <span className="px-1.5 py-0.5 bg-gray-100 rounded text-[#666] text-xs">
                    {result.effectiveTaxRate.toFixed(1)}%
                  </span>
                </div>
                
                <div className="hidden md:block md:col-span-2">
                  <span className="text-sm">{result.marginalTaxRate.toFixed(1)}%</span>
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
