import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import SEO from "../components/SEO";
import ShareButton from "../components/ShareButton";
import PayeDetailCalculator from "../components/PayeDetailCalculator";
import DynamicTaxParagraph from "../components/DynamicTaxParagraph";
import DynamicTaxOverviewParagraph from "../components/DynamicTaxOverviewParagraph";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar, ArrowRight } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { usePageReload } from "../hooks/usePageReload";
import { 
  getTanzaniaTaxCalculation, 
  formatTanzaniaCurrency, 
  generateTanzaniaTaxCalculations,
  TanzaniaTaxCalculationResult,
  TanzaniaTimeFrame,
  convertTanzaniaIncome
} from "../utils/tanzaniaTaxCalculator";

const PayeDetail = () => {
  const { incomeId } = useParams<{ incomeId: string }>();
  const location = useLocation();
  const pathname = location.pathname;
  
  // Use the page reload hook
  const { pageKey, isLoading, setIsLoading } = usePageReload();
  
  // Determine timeFrame from URL path
  const timeFrame: TanzaniaTimeFrame = pathname.includes("/yearly/") ? "yearly" : "monthly";
  
  const navigate = useNavigate();
  
  const income = incomeId ? parseInt(incomeId) : 0;
  const taxDetails = useMemo(() => 
    getTanzaniaTaxCalculation(income, timeFrame), 
    [income, timeFrame]
  );
  
  // Get nearby incomes for comparison
  const allCalculations = useMemo(() => 
    generateTanzaniaTaxCalculations(
      timeFrame === "monthly" ? 200000 : 2400000,   // Min: TSh 200,000 monthly, TSh 2,400,000 yearly
      timeFrame === "monthly" ? 1500000 : 18000000, // Max: TSh 1,500,000 monthly, TSh 18,000,000 yearly
      timeFrame === "monthly" ? 50000 : 600000,     // Step: TSh 50,000 monthly, TSh 600,000 yearly
      timeFrame
    ), 
    [timeFrame]
  );
  
  const nearbyIncomes = useMemo(() => {
    if (!income) return [];
    
    return allCalculations
      .filter(calc => calc.grossIncome !== income)
      .sort((a, b) => Math.abs(a.grossIncome - income) - Math.abs(b.grossIncome - income))
      .slice(0, 10);
  }, [income, allCalculations]);

  const handleTimeFrameChange = (value: string) => {
    if (value === "yearly" || value === "monthly") {
      // Navigate to the same income but with different timeframe
      navigate(`/paye/${value}/${income}`);
    }
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f6f6f0]">
        <Header />
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="h-8 mb-6"></div>
            <div className="bg-white p-6 sm:p-8 rounded-md shadow-sm mb-8">
              <Skeleton className="h-10 w-3/4 mb-4" />
              <div className="flex flex-wrap items-center gap-3 mb-6 pb-6 border-b border-gray-200">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-5 w-16" />
              </div>
              <Skeleton className="h-24 w-full mb-8" />
              <div className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!taxDetails) {
    return (
      <div className="min-h-screen bg-[#f6f6f0] flex items-center justify-center">
        <Card>
          <CardContent className="p-6">
            <p>Income value not found. Please try another income amount.</p>
            <Button onClick={() => navigate('/paye')} className="mt-4">
              Back to PAYE Calculator
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Format currency for the title without spaces
  const formattedCurrencyForTitle = formatTanzaniaCurrency(income).replace(/\s/g, "");

  return (
    <motion.div
      key={pageKey}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title={`PAYE Calculator on ${formattedCurrencyForTitle} ${timeFrame === "monthly" ? "Monthly" : "Annual"} Salary in Tanzania`}
        description={`Calculate your PAYE tax for ${formatTanzaniaCurrency(income)} ${timeFrame === "monthly" ? "monthly" : "annual"} income in Tanzania. After tax income: ${formatTanzaniaCurrency(taxDetails.netIncome)}. Effective tax rate: ${taxDetails.effectiveTaxRate.toFixed(1)}%.`}
        canonicalUrl={`/paye/${timeFrame}/${income}`}
      />
      
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center justify-between mb-6">
            <Link 
              to={`/paye${timeFrame !== "monthly" ? "/" + timeFrame : ""}`}
              className="inline-flex items-center text-sm text-[#000000] hover:underline"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back To PAYE Calculator
            </Link>
            
            <ShareButton 
              title={`PAYE Tax on ${formattedCurrencyForTitle} ${timeFrame === "monthly" ? "Monthly" : "Annual"} Salary in Tanzania - SalaryList`} 
              variant="outline"
            />
          </div>
          
          {/* Title Section - No Background */}
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#333] mb-4">
              PAYE Calculator On {formatTanzaniaCurrency(taxDetails.grossIncome)} {timeFrame === "monthly" ? "Monthly" : "Annual"} Salary
            </h1>
          </div>

          {/* Calculator Section - No Background */}
          <div className="mb-6">
            <PayeDetailCalculator 
              timeFrame={timeFrame}
              onTimeFrameChange={handleTimeFrameChange}
              initialAmount={income.toString()}
            />
          </div>
          
          {/* Combined PAYE Tax Overview and Detailed Breakdown Section */}
          <div className="bg-white p-6 sm:p-8 rounded-md shadow-sm mb-8">
            <h2 className="text-xl font-semibold mb-4">PAYE Tax Overview & Breakdown</h2>
            
            <div className="prose prose-sm sm:prose max-w-none mb-6">
              <DynamicTaxOverviewParagraph 
                taxResult={taxDetails} 
                timeFrame={timeFrame} 
                income={income} 
              />
            </div>

            {/* Dynamic Paragraph */}
            <DynamicTaxParagraph taxResult={taxDetails} timeFrame={timeFrame} />
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b border-gray-200">
                  <TableCell>{timeFrame === "yearly" ? "Annual" : "Monthly"} Gross Income</TableCell>
                  <TableCell className="text-right">{formatTanzaniaCurrency(taxDetails.grossIncome)}</TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell>Taxable Income</TableCell>
                  <TableCell className="text-right">{formatTanzaniaCurrency(taxDetails.taxableIncome)}</TableCell>
                </TableRow>
                <TableRow className="font-medium border-b border-gray-200">
                  <TableCell>PAYE Tax Payable</TableCell>
                  <TableCell className="text-right">{formatTanzaniaCurrency(taxDetails.netTax)}</TableCell>
                </TableRow>
                <TableRow className="bg-gray-50 font-medium border-b border-gray-200">
                  <TableCell>{timeFrame === "yearly" ? "Annual" : "Monthly"} Take-home Pay</TableCell>
                  <TableCell className="text-right">{formatTanzaniaCurrency(taxDetails.netIncome)}</TableCell>
                </TableRow>
                {timeFrame === "yearly" && (
                  <TableRow className="bg-gray-50">
                    <TableCell>Monthly Take-home Pay</TableCell>
                    <TableCell className="text-right">{formatTanzaniaCurrency(Math.round(taxDetails.netIncome / 12))}</TableCell>
                  </TableRow>
                )}
                {timeFrame === "monthly" && (
                  <TableRow className="bg-gray-50">
                    <TableCell>Annual Take-home Pay</TableCell>
                    <TableCell className="text-right">{formatTanzaniaCurrency(taxDetails.netIncome * 12)}</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          
          {/* Similar Incomes Section */}
          {nearbyIncomes.length > 0 && (
            <div className="bg-white rounded-md shadow-sm overflow-hidden mb-8">
              <div className="p-6 sm:p-8 border-b border-gray-100">
                <h2 className="text-2xl font-bold mb-2">Similar Incomes</h2>
                <p className="text-sm text-gray-600">
                  Compare PAYE tax calculations for nearby income levels
                </p>
              </div>
              
              <div className="divide-y divide-gray-100">
                {nearbyIncomes.map((calcResult, index) => (
                  <motion.div 
                    key={calcResult.grossIncome}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group py-3 px-6 sm:px-8"
                  >
                    <div className="flex items-center">
                      <div className="pr-3 text-center hidden sm:block">
                        <span className="text-gray-500 text-sm">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <Link 
                          to={`/paye/${timeFrame}/${calcResult.grossIncome}`}
                          className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-blog-accent"
                        >
                          {formatTanzaniaCurrency(calcResult.grossIncome)} {timeFrame === "monthly" ? "monthly" : "annual"} income
                        </Link>
                        
                        <div className="flex items-center text-xs text-[#828282]">
                          <span>{formatTanzaniaCurrency(calcResult.netIncome)} take-home</span>
                          <span className="mx-1">•</span>
                          <span className="font-medium text-[#555]">{calcResult.effectiveTaxRate.toFixed(1)}% effective rate</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#999] group-hover:text-[#ff6600] transition-colors opacity-0 group-hover:opacity-100" />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="p-6 sm:p-8 border-t border-gray-100">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate(`/paye${timeFrame !== "monthly" ? "/" + timeFrame : ""}`)}
                >
                  View All PAYE Calculations
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-gray-300 py-6 bg-white">
        <div className="container mx-auto px-4 text-center text-[#828282] text-sm">
          <p>
            &copy; {new Date().getFullYear()} SalaryList. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default PayeDetail;
