
import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import ShareButton from "../components/ShareButton";
import PayeDetailCalculator from "../components/PayeDetailCalculator";
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
  getSouthAfricaTaxCalculation, 
  formatSouthAfricaCurrency, 
  generateSouthAfricaTaxCalculations,
  SouthAfricaTaxCalculationResult,
  SouthAfricaTimeFrame,
  AgeGroup
} from "../utils/southAfricaTaxCalculator";

const PayeDetail = () => {
  const { incomeId, ageGroup: urlAgeGroup } = useParams<{ incomeId: string; ageGroup?: AgeGroup }>();
  const location = useLocation();
  
  // Use the page reload hook
  const { pageKey, isLoading, setIsLoading } = usePageReload();
  
  // Default to monthly timeframe (no longer determined from URL)
  const [timeFrame, setTimeFrame] = useState<SouthAfricaTimeFrame>("monthly");
  
  const navigate = useNavigate();
  
  const initialIncome = incomeId ? parseInt(incomeId) : 0;
  const initialAgeGroup: AgeGroup = (urlAgeGroup as AgeGroup) || "below65";
  
  // Add state for current income and age group that can be updated by the calculator
  const [currentIncome, setCurrentIncome] = useState(initialIncome);
  const [currentAgeGroup, setCurrentAgeGroup] = useState<AgeGroup>(initialAgeGroup);
  
  // Use currentIncome and currentAgeGroup for tax calculations instead of the URL values
  const taxDetails = useMemo(() => 
    getSouthAfricaTaxCalculation(currentIncome, currentAgeGroup, timeFrame), 
    [currentIncome, currentAgeGroup, timeFrame]
  );
  
  // Get nearby incomes for comparison (still use initial income from URL)
  const allCalculations = useMemo(() => 
    generateSouthAfricaTaxCalculations(
      timeFrame === "monthly" ? 4000 : 48000,     // Min: R4,000 monthly, R48,000 yearly
      timeFrame === "monthly" ? 100000 : 1200000, // Max: R100,000 monthly, R1,200,000 yearly
      timeFrame === "monthly" ? 1000 : 12000,     // Step: R1,000 monthly, R12,000 yearly
      initialAgeGroup,
      timeFrame
    ), 
    [timeFrame, initialAgeGroup]
  );
  
  const nearbyIncomes = useMemo(() => {
    if (!initialIncome) return [];
    
    return allCalculations
      .filter(calc => calc.grossIncome !== initialIncome)
      .sort((a, b) => Math.abs(a.grossIncome - initialIncome) - Math.abs(b.grossIncome - initialIncome))
      .slice(0, 10);
  }, [initialIncome, allCalculations]);

  const handleTimeFrameChange = (value: string) => {
    if (value === "yearly" || value === "monthly") {
      setTimeFrame(value);
      // Convert income when switching timeframes
      if (value === "yearly" && timeFrame === "monthly") {
        setCurrentIncome(currentIncome * 12);
      } else if (value === "monthly" && timeFrame === "yearly") {
        setCurrentIncome(Math.round(currentIncome / 12));
      }
    }
  };
  
  // Callback function to handle income changes from the calculator
  const handleIncomeChange = (newIncome: number) => {
    setCurrentIncome(newIncome);
  };

  // Callback function to handle age group changes from the calculator
  const handleAgeGroupChange = (newAgeGroup: AgeGroup) => {
    setCurrentAgeGroup(newAgeGroup);
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
  const formattedCurrencyForTitle = formatSouthAfricaCurrency(initialIncome).replace(/\s/g, "");

  return (
    <motion.div
      key={pageKey}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center justify-between mb-6">
            <Link 
              to="/paye"
              className="inline-flex items-center text-sm text-[#000000] hover:underline"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back To PAYE Calculator
            </Link>
            
            <ShareButton 
              title={`PAYE Tax on ${formattedCurrencyForTitle} ${timeFrame === "monthly" ? "Monthly" : "Annual"} Salary in South Africa - SalaryList`} 
              variant="outline"
            />
          </div>
          
          {/* Title Section - No Background */}
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#333] mb-4">
              PAYE Calculator On {formatSouthAfricaCurrency(taxDetails.grossIncome)} {timeFrame === "monthly" ? "Monthly" : "Annual"} Salary
            </h1>
          </div>

          {/* Calculator Section - No Background */}
          <div className="mb-6">
            <PayeDetailCalculator 
              timeFrame={timeFrame}
              onTimeFrameChange={handleTimeFrameChange}
              initialAmount={initialIncome.toString()}
              initialAgeGroup={initialAgeGroup}
              onIncomeChange={handleIncomeChange}
              onAgeGroupChange={handleAgeGroupChange}
            />
          </div>
          
          {/* Combined PAYE Tax Overview and Detailed Breakdown Section */}
          <div className="bg-white p-6 sm:p-8 rounded-md shadow-sm mb-8">
            <h2 className="text-xl font-semibold mb-4">PAYE Tax Overview & Breakdown</h2>
            
            <div className="prose prose-sm sm:prose max-w-none mb-6">
              <DynamicTaxOverviewParagraph 
                taxResult={taxDetails}
                timeFrame={timeFrame}
                income={currentIncome}
              />
            </div>
            
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
                  <TableCell className="text-right">{formatSouthAfricaCurrency(taxDetails.grossIncome)}</TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell>Taxable Income</TableCell>
                  <TableCell className="text-right">{formatSouthAfricaCurrency(taxDetails.taxableIncome)}</TableCell>
                </TableRow>
                <TableRow className="font-medium border-b border-gray-200">
                  <TableCell>PAYE Tax Payable</TableCell>
                  <TableCell className="text-right">{formatSouthAfricaCurrency(taxDetails.netTax)}</TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell>Effective Tax Rate</TableCell>
                  <TableCell className="text-right">{taxDetails.effectiveTaxRate.toFixed(1)}%</TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell>Marginal Tax Rate</TableCell>
                  <TableCell className="text-right">{taxDetails.marginalTaxRate.toFixed(1)}%</TableCell>
                </TableRow>
                <TableRow className="bg-gray-50 font-medium border-b border-gray-200">
                  <TableCell>{timeFrame === "yearly" ? "Annual" : "Monthly"} Take-home Pay</TableCell>
                  <TableCell className="text-right">{formatSouthAfricaCurrency(taxDetails.netIncome)}</TableCell>
                </TableRow>
                {timeFrame === "yearly" && (
                  <TableRow className="bg-gray-50">
                    <TableCell>Monthly Take-home Pay</TableCell>
                    <TableCell className="text-right">{formatSouthAfricaCurrency(Math.round(taxDetails.netIncome / 12))}</TableCell>
                  </TableRow>
                )}
                {timeFrame === "monthly" && (
                  <TableRow className="bg-gray-50">
                    <TableCell>Annual Take-home Pay</TableCell>
                    <TableCell className="text-right">{formatSouthAfricaCurrency(taxDetails.netIncome * 12)}</TableCell>
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
                          to={`/paye/${calcResult.grossIncome}${initialAgeGroup !== "below65" ? `/${initialAgeGroup}` : ""}`}
                          className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-blog-accent"
                        >
                          {formatSouthAfricaCurrency(calcResult.grossIncome)} {timeFrame === "monthly" ? "monthly" : "annual"} income
                        </Link>
                        
                        <div className="flex items-center text-xs text-[#828282]">
                          <span>{formatSouthAfricaCurrency(calcResult.netIncome)} take-home</span>
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
                  onClick={() => navigate("/paye")}
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
