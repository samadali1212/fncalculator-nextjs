
import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar, User, ArrowRight } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  getTaxCalculation, 
  formatCurrency, 
  generateTaxCalculations,
  AgeGroup,
  TaxCalculationResult
} from "../utils/taxCalculator";

const TaxCalculationDetail = () => {
  const { incomeId } = useParams<{ incomeId: string }>();
  const navigate = useNavigate();
  const [ageGroup, setAgeGroup] = useState<AgeGroup>("below65");
  const [isLoading, setIsLoading] = useState(true);
  
  const income = incomeId ? parseInt(incomeId) : 0;
  const taxDetails = useMemo(() => 
    getTaxCalculation(income, ageGroup), 
    [income, ageGroup]
  );
  
  // Get nearby incomes for comparison
  const allCalculations = useMemo(() => generateTaxCalculations(), []);
  const nearbyIncomes = useMemo(() => {
    if (!income) return [];
    
    return allCalculations
      .filter(calc => calc.grossIncome !== income)
      .sort((a, b) => Math.abs(a.grossIncome - income) - Math.abs(b.grossIncome - income))
      .slice(0, 10);
  }, [income, allCalculations]);
  
  // Simulate loading from API
  useEffect(() => {
    setIsLoading(true);
    // Simulate network delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [incomeId, ageGroup]);
  
  const handleAgeGroupChange = (value: string) => {
    setAgeGroup(value as AgeGroup);
    toast(`Recalculating for ${value === "below65" ? "under 65" : value === "age65to75" ? "65-75" : "over 75"} age group`);
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
            <Button onClick={() => navigate('/tax-calculator')} className="mt-4">
              Back to Tax Calculator
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link 
            to="/tax-calculator"
            className="inline-flex items-center text-sm text-[#000000] mb-6 hover:underline"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            All Tax Calculations
          </Link>
          
          <article className="bg-white p-6 sm:p-8 rounded-md shadow-sm mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#333] mb-4">
              {formatCurrency(taxDetails.grossIncome)} Annual Income Tax Calculation
            </h1>
            
            <div className="flex flex-wrap items-center gap-3 text-sm text-[#666] mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1 text-[#999]" />
                Last updated: {new Date().toLocaleDateString()}
              </div>
              
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1 text-[#999]" />
                <span className="mr-2">Age group:</span>
                <Select 
                  value={ageGroup} 
                  onValueChange={handleAgeGroupChange}
                >
                  <SelectTrigger className="h-7 text-xs px-2 py-0">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="below65">Below 65 years old</SelectItem>
                    <SelectItem value="age65to75">Between 65 and 75 years old</SelectItem>
                    <SelectItem value="above75">75 years and older</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <span className="px-2 py-1 bg-gray-100 rounded text-[#666] text-xs">
                Tax Year 2023/2024
              </span>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <div className="grid md:grid-cols-3 gap-2">
                <div className="flex flex-col items-center bg-white p-4 rounded border border-gray-100">
                  <div className="text-gray-600 text-sm mb-1">Gross Income</div>
                  <div className="text-xl font-bold">{formatCurrency(taxDetails.grossIncome)}</div>
                  <div className="text-gray-500 text-xs mt-1">Annual before tax</div>
                </div>
                <div className="flex flex-col items-center bg-white p-4 rounded border border-gray-100 shadow-sm">
                  <div className="text-gray-600 text-sm mb-1">After Tax Income</div>
                  <div className="text-2xl font-bold text-primary">{formatCurrency(taxDetails.netIncome)}</div>
                  <div className="text-gray-500 text-xs mt-1">Take-home pay per year</div>
                </div>
                <div className="flex flex-col items-center bg-white p-4 rounded border border-gray-100">
                  <div className="text-gray-600 text-sm mb-1">Tax Payable</div>
                  <div className="text-xl font-bold">{formatCurrency(taxDetails.netTax)}</div>
                  <div className="text-gray-500 text-xs mt-1">Annual tax amount</div>
                </div>
              </div>
            </div>
            
            <div className="prose prose-sm sm:prose max-w-none mb-8">
              <h2 className="text-xl font-semibold mb-3">Tax Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                With an annual income of {formatCurrency(taxDetails.grossIncome)}, your tax liability would be approximately 
                {" "}{formatCurrency(taxDetails.netTax)} per year, leaving you with a take-home pay of 
                {" "}{formatCurrency(taxDetails.netIncome)} per year ({formatCurrency(taxDetails.netIncome / 12)} per month).
                Your effective tax rate is {taxDetails.effectiveTaxRate.toFixed(1)}%, while your marginal tax rate is {taxDetails.marginalTaxRate}%.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-3">Detailed Breakdown</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Annual Gross Income</TableCell>
                    <TableCell className="text-right">{formatCurrency(taxDetails.grossIncome)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Taxable Income</TableCell>
                    <TableCell className="text-right">{formatCurrency(taxDetails.taxableIncome)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Tax Calculated (before rebates)</TableCell>
                    <TableCell className="text-right">{formatCurrency(taxDetails.taxBeforeRebates)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Tax Rebates</TableCell>
                    <TableCell className="text-right">{formatCurrency(taxDetails.taxRebates)}</TableCell>
                  </TableRow>
                  <TableRow className="font-medium">
                    <TableCell>Net Tax Payable</TableCell>
                    <TableCell className="text-right">{formatCurrency(taxDetails.netTax)}</TableCell>
                  </TableRow>
                  <TableRow className="bg-gray-50 font-medium">
                    <TableCell>Annual Take-home Pay</TableCell>
                    <TableCell className="text-right">{formatCurrency(taxDetails.netIncome)}</TableCell>
                  </TableRow>
                  <TableRow className="bg-gray-50">
                    <TableCell>Monthly Take-home Pay</TableCell>
                    <TableCell className="text-right">{formatCurrency(taxDetails.netIncome / 12)}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div className="bg-[#fff9e6] p-5 rounded-md">
              <h3 className="font-medium mb-3">Tax Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Effective Tax Rate</h4>
                  <p className="text-sm text-gray-700">
                    {taxDetails.effectiveTaxRate.toFixed(1)}% of your total income goes to tax
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Marginal Tax Rate</h4>
                  <p className="text-sm text-gray-700">
                    For each additional rand earned, you'll pay {taxDetails.marginalTaxRate}% in tax
                  </p>
                </div>
              </div>
            </div>
          </article>
          
          {/* Similar Incomes Section */}
          {nearbyIncomes.length > 0 && (
            <div className="bg-white rounded-md shadow-sm overflow-hidden mb-8">
              <div className="p-6 sm:p-8 border-b border-gray-100">
                <h2 className="text-2xl font-bold mb-2">Similar Incomes</h2>
                <p className="text-sm text-gray-600">
                  Compare tax calculations for nearby income levels
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
                          to={`/tax-calculator/${calcResult.grossIncome}`}
                          className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-blog-accent"
                        >
                          {formatCurrency(calcResult.grossIncome)} annual income
                        </Link>
                        
                        <div className="flex items-center text-xs text-[#828282]">
                          <span>{formatCurrency(calcResult.netIncome)} take-home</span>
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
                  onClick={() => navigate('/tax-calculator')}
                >
                  View All Tax Calculations
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-gray-300 py-6 bg-white">
        <div className="container mx-auto px-4 text-center text-[#828282] text-sm">
          <p>
            &copy; {new Date().getFullYear()} MoneyWorth. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default TaxCalculationDetail;
