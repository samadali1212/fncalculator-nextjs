
import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useSearchParams, useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import SEO from "../components/SEO";
import ShareButton from "../components/ShareButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, CreditCard, Clock, Calendar, Calculator, Percent, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getLoanCalculation, getRelatedLoanAmounts, formatCurrency, formatDate, LoanCalculation, LoanTerm, AmortizationItem } from "../utils/loanCalculator";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const LoanCalculationDetail = () => {
  const { loanId } = useParams<{ loanId: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  // Get query parameters with defaults
  const defaultTerm = parseInt(searchParams.get("term") || "36") as LoanTerm;
  const defaultRate = parseFloat(searchParams.get("rate") || "5");
  
  // State for loan parameters
  const [loanAmount, setLoanAmount] = useState(loanId ? parseInt(loanId) : 0);
  const [downPayment, setDownPayment] = useState(0);
  const [loanTerm, setLoanTerm] = useState<LoanTerm>(defaultTerm);
  const [interestRate, setInterestRate] = useState(defaultRate);
  const [balloonPayment, setBalloonPayment] = useState(0);
  const [startDate, setStartDate] = useState<Date>(new Date());
  
  // UI state
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  
  // Calculate loan details
  const loanDetails = useMemo(() => 
    getLoanCalculation(loanAmount, downPayment, loanTerm, interestRate, balloonPayment, startDate), 
    [loanAmount, downPayment, loanTerm, interestRate, balloonPayment, startDate]
  );
  
  // Get related loan amounts
  const relatedLoans = useMemo(() => 
    getRelatedLoanAmounts(loanAmount, 6, loanTerm, interestRate),
    [loanAmount, loanTerm, interestRate]
  );
  
  // Simulate loading for better UX
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, [loanId]);
  
  // Handle term change
  const handleTermChange = (value: string) => {
    setLoanTerm(parseInt(value) as LoanTerm);
    toast(`Loan term updated to ${value} months`);
  };
  
  // Format input as currency
  const formatInputCurrency = (value: string): string => {
    const numericValue = value.replace(/[^0-9]/g, '');
    if (!numericValue) return '';
    return formatCurrency(parseInt(numericValue));
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
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!loanDetails) {
    return (
      <div className="min-h-screen bg-[#f6f6f0] flex items-center justify-center">
        <Card>
          <CardContent className="p-6">
            <p>Loan calculation not found. Please try another loan amount.</p>
            <Button onClick={() => navigate('/loan-calculator')} className="mt-4">
              Back to Loan Calculator
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
      <SEO 
        title={`${formatCurrency(loanAmount)} Loan Repayment Calculator`}
        description={`Calculate monthly repayments for a ${formatCurrency(loanAmount)} loan over ${loanTerm} months at ${interestRate}% interest. Monthly payment: ${formatCurrency(loanDetails.monthlyPayment)}.`}
        canonicalUrl={`/loan-calculator/${loanId}?term=${loanTerm}&rate=${interestRate}`}
      />
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center justify-between mb-6">
            <Link 
              to="/loan-calculator"
              className="inline-flex items-center text-sm text-[#000000] hover:underline"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Loan Calculator
            </Link>
            
            <ShareButton 
              title={`${formatCurrency(loanAmount)} Loan Repayment Calculator - SalaryList`} 
              variant="outline"
            />
          </div>
          
          <article className="bg-white p-6 sm:p-8 rounded-md shadow-sm mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#333] mb-4">
              {formatCurrency(loanAmount)} Loan Repayment Calculator
            </h1>
            
            <div className="flex flex-wrap items-center gap-3 text-sm text-[#666] mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-[#999]" />
                <span className="font-medium">{loanTerm} months term</span>
              </div>
              
              <div className="flex items-center">
                <Percent className="h-4 w-4 mr-1 text-[#999]" />
                <span>{interestRate}% interest rate</span>
              </div>
              
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1 text-[#999]" />
                <span>Starting {format(startDate, "dd MMM yyyy")}</span>
              </div>
              
              <span className="px-2 py-1 bg-gray-100 rounded text-[#666] text-xs">
                South Africa
              </span>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <div className="grid md:grid-cols-3 gap-2">
                <div className="flex flex-col items-center bg-white p-4 rounded border border-gray-100">
                  <div className="text-gray-600 text-sm mb-1">Loan Amount</div>
                  <div className="text-xl font-bold">{formatCurrency(loanDetails.loanAmount - loanDetails.downPayment)}</div>
                  <div className="text-gray-500 text-xs mt-1">After down payment</div>
                </div>
                <div className="flex flex-col items-center bg-white p-4 rounded border border-gray-100 shadow-sm">
                  <div className="text-gray-600 text-sm mb-1">Monthly Payment</div>
                  <div className="text-2xl font-bold text-primary">{formatCurrency(loanDetails.monthlyPayment)}</div>
                  <div className="text-gray-500 text-xs mt-1">For {loanTerm} months</div>
                </div>
                <div className="flex flex-col items-center bg-white p-4 rounded border border-gray-100">
                  <div className="text-gray-600 text-sm mb-1">Total Cost</div>
                  <div className="text-xl font-bold">{formatCurrency(loanDetails.totalCost)}</div>
                  <div className="text-gray-500 text-xs mt-1">Including interest</div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-4">Customize Calculation</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="loanAmount">Loan Amount</Label>
                    <div className="relative">
                      <Input
                        id="loanAmount"
                        value={formatCurrency(loanAmount)}
                        onChange={(e) => {
                          const value = e.target.value.replace(/[^0-9]/g, '');
                          if (value) setLoanAmount(parseInt(value));
                        }}
                        className="pl-10"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                        R
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="downPayment">Down Payment</Label>
                    <div className="relative">
                      <Input
                        id="downPayment"
                        value={formatCurrency(downPayment)}
                        onChange={(e) => {
                          const value = e.target.value.replace(/[^0-9]/g, '');
                          if (value) setDownPayment(parseInt(value));
                          else setDownPayment(0);
                        }}
                        className="pl-10"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                        R
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="balloonPayment">Balloon Payment</Label>
                    <div className="relative">
                      <Input
                        id="balloonPayment"
                        value={formatCurrency(balloonPayment)}
                        onChange={(e) => {
                          const value = e.target.value.replace(/[^0-9]/g, '');
                          if (value) setBalloonPayment(parseInt(value));
                          else setBalloonPayment(0);
                        }}
                        className="pl-10"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                        R
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="loanTerm">Loan Term</Label>
                    <Select 
                      value={loanTerm.toString()} 
                      onValueChange={handleTermChange}
                    >
                      <SelectTrigger id="loanTerm">
                        <SelectValue placeholder="Select term" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="12">12 months</SelectItem>
                        <SelectItem value="24">24 months</SelectItem>
                        <SelectItem value="36">36 months</SelectItem>
                        <SelectItem value="48">48 months</SelectItem>
                        <SelectItem value="60">60 months</SelectItem>
                        <SelectItem value="72">72 months</SelectItem>
                        <SelectItem value="84">84 months</SelectItem>
                        <SelectItem value="96">96 months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="interestRate">Interest Rate: {interestRate}%</Label>
                    </div>
                    <Slider 
                      id="interestRate"
                      defaultValue={[interestRate]} 
                      min={0} 
                      max={25} 
                      step={0.25} 
                      onValueChange={(value) => setInterestRate(value[0])}
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>0%</span>
                      <span>25%</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="startDate">Loan Start Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="startDate"
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          {format(startDate, "PPP")}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={startDate}
                          onSelect={(date) => date && setStartDate(date)}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="prose prose-sm sm:prose max-w-none mb-8">
              <h2 className="text-xl font-semibold mb-3">Payment Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                For a loan of {formatCurrency(loanAmount)} with 
                {downPayment > 0 ? ` a down payment of ${formatCurrency(downPayment)} and ` : ' '}
                an interest rate of {interestRate}% over {loanTerm} months, 
                your monthly payment will be {formatCurrency(loanDetails.monthlyPayment)}. 
                The total amount you will pay is {formatCurrency(loanDetails.totalCost)}, 
                which includes {formatCurrency(loanDetails.totalInterest)} in interest.
                {balloonPayment > 0 ? ` Your loan includes a balloon payment of ${formatCurrency(balloonPayment)} at the end of the term.` : ''}
              </p>
              
              <div className="mt-4 flex items-center gap-4">
                <div className="bg-green-50 border border-green-100 rounded-lg px-4 py-3">
                  <h4 className="text-sm font-medium text-green-800 mb-1">Loan Start Date</h4>
                  <p className="text-green-700">{formatDate(startDate)}</p>
                </div>
                
                <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3">
                  <h4 className="text-sm font-medium text-blue-800 mb-1">Estimated Payoff Date</h4>
                  <p className="text-blue-700">{loanDetails.payoffDate ? formatDate(loanDetails.payoffDate) : 'N/A'}</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <Collapsible open={isScheduleOpen} onOpenChange={setIsScheduleOpen}>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg mb-3">Payment Schedule</h3>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                      {isScheduleOpen ? (
                        <ChevronUp className="h-4 w-4 mr-1" />
                      ) : (
                        <ChevronDown className="h-4 w-4 mr-1" />
                      )}
                      {isScheduleOpen ? "Hide Schedule" : "Show Complete Schedule"}
                    </Button>
                  </CollapsibleTrigger>
                </div>
                
                <CollapsibleContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Payment #</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Payment</TableHead>
                          <TableHead>Principal</TableHead>
                          <TableHead>Interest</TableHead>
                          <TableHead>Remaining Balance</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {loanDetails.amortizationSchedule?.map((payment: AmortizationItem) => (
                          <TableRow key={payment.paymentNumber}>
                            <TableCell>{payment.paymentNumber}</TableCell>
                            <TableCell>{formatDate(payment.paymentDate)}</TableCell>
                            <TableCell>{formatCurrency(payment.paymentAmount)}</TableCell>
                            <TableCell>{formatCurrency(payment.principalAmount)}</TableCell>
                            <TableCell>{formatCurrency(payment.interestAmount)}</TableCell>
                            <TableCell>{formatCurrency(payment.remainingBalance)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
            
            <div className="bg-[#fff9e6] p-5 rounded-md">
              <h3 className="font-medium mb-3">Loan Summary</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <CreditCard className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium">Total Interest</h4>
                    <p className="text-sm text-gray-700">
                      {formatCurrency(loanDetails.totalInterest)} ({Math.round(loanDetails.totalInterest / (loanDetails.loanAmount - loanDetails.downPayment) * 100)}% of principal)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calculator className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium">Total Cost</h4>
                    <p className="text-sm text-gray-700">
                      {formatCurrency(loanDetails.totalCost)} (principal + interest)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Related Loan Amounts Section */}
            <div className="mt-10">
              <h3 className="font-semibold text-lg mb-4">Related Loan Amounts</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {relatedLoans.map((loan) => (
                  <Link 
                    key={loan.loanAmount} 
                    to={`/loan-calculator/${loan.loanAmount}?term=${loanTerm}&rate=${interestRate}`}
                    className="group"
                  >
                    <div className="bg-white border border-gray-200 p-4 rounded-md hover:border-primary transition-all hover:shadow-sm">
                      <p className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {formatCurrency(loan.loanAmount)}
                      </p>
                      <p className="text-sm text-gray-600">
                        {formatCurrency(loan.monthlyPayment)}/month
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </article>
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

export default LoanCalculationDetail;
