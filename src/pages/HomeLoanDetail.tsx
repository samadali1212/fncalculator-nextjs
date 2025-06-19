
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, Calculator } from "lucide-react";
import Header from "../components/Header";
import SEO from "../components/SEO";
import ShareButton from "../components/ShareButton";
import HomeLoanDetailCalculator from "../components/HomeLoanDetailCalculator";
import HomeLoanAmortizationSchedule from "../components/HomeLoanAmortizationSchedule";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  getHomeLoanCalculation, 
  formatCurrency,
  HomeLoanTimeFrame 
} from "../utils/homeLoanCalculator";
import { usePageReload } from "../hooks/usePageReload";

const HomeLoanDetail = () => {
  const { loanAmount, downPayment, loanTerm, interestRate } = useParams();
  const navigate = useNavigate();
  const { pageKey, isLoading } = usePageReload();
  
  const [timeFrame, setTimeFrame] = useState<HomeLoanTimeFrame>("monthly");
  const [currentLoanAmount, setCurrentLoanAmount] = useState(0);
  const [currentDownPayment, setCurrentDownPayment] = useState(0);
  const [currentInterestRate, setCurrentInterestRate] = useState(0);
  const [currentLoanTerm, setCurrentLoanTerm] = useState(0);
  
  // Determine bank name and timeframe from URL
  const path = window.location.pathname;
  const getBankInfo = () => {
    // Check for bank-specific routes first
    if (path.includes("/capitec/")) {
      return {
        bankName: "Capitec Bank",
        backLink: "/capitec",
        displayName: "Capitec"
      };
    }
    // Add more banks here as needed
    // if (path.includes("/fnb/")) {
    //   return {
    //     bankName: "FNB",
    //     backLink: "/fnb",
    //     displayName: "FNB"
    //   };
    // }
    
    // Default to general South Africa home loan
    return {
      bankName: "South Africa",
      backLink: "/home-loan",
      displayName: "South Africa"
    };
  };

  const bankInfo = getBankInfo();
  
  // Determine timeframe from URL
  useEffect(() => {
    if (path.includes("/yearly/")) {
      setTimeFrame("yearly");
    } else {
      setTimeFrame("monthly");
    }
  }, [path]);

  // Parse parameters
  const homeLoanAmount = parseInt(loanAmount || "0");
  const homeDownPayment = parseInt(downPayment || "0");
  const homeInterestRate = parseFloat(interestRate || "0");
  const homeLoanTerm = parseInt(loanTerm || "0");

  // Set initial values
  useEffect(() => {
    setCurrentLoanAmount(homeLoanAmount);
    setCurrentDownPayment(homeDownPayment);
    setCurrentInterestRate(homeInterestRate);
    setCurrentLoanTerm(homeLoanTerm);
  }, [homeLoanAmount, homeDownPayment, homeInterestRate, homeLoanTerm]);

  // Calculate loan details using current values
  const loanResult = currentLoanAmount > 0 && currentInterestRate > 0 && currentLoanTerm > 0
    ? getHomeLoanCalculation(currentLoanAmount, currentDownPayment, currentInterestRate, currentLoanTerm, timeFrame)
    : null;

  const handleTimeFrameChange = (value: string) => {
    if (value === "yearly" || value === "monthly") {
      setTimeFrame(value as HomeLoanTimeFrame);
      const basePath = bankInfo.backLink === "/home-loan" ? "/home-loan" : bankInfo.backLink;
      navigate(`${basePath}/${value}/${currentLoanAmount}/${currentDownPayment}/${currentLoanTerm}/${currentInterestRate}`);
    }
  };

  const handleLoanChange = (newLoanAmount: number, newDownPayment: number, newInterestRate: number, newLoanTerm: number) => {
    setCurrentLoanAmount(newLoanAmount);
    setCurrentDownPayment(newDownPayment);
    setCurrentInterestRate(newInterestRate);
    setCurrentLoanTerm(newLoanTerm);
  };

  if (!loanAmount || !downPayment || !loanTerm || !interestRate || homeLoanAmount <= 0 || homeInterestRate <= 0 || homeLoanTerm <= 0) {
    return (
      <motion.div
        key={pageKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-[#f6f6f0]"
      >
        <Header />
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <Card>
              <CardContent className="p-6 text-center">
                <h1 className="text-2xl font-bold mb-4">Invalid Home Loan Parameters</h1>
                <p className="text-gray-600 mb-6">
                  The home loan parameters provided are invalid. Please return to the calculator.
                </p>
                <Link to={bankInfo.backLink}>
                  <Button>
                    <Calculator className="mr-2 h-4 w-4" />
                    Back to {bankInfo.bankName} Home Loan Calculator
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </main>
      </motion.div>
    );
  }

  // Format currency for the title without spaces
  const formattedCurrencyForTitle = formatCurrency(currentLoanAmount).replace(/\s/g, "");

  if (isLoading) {
    return (
      <motion.div
        key={pageKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-[#f6f6f0] flex items-center justify-center"
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      key={pageKey}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title={`${bankInfo.bankName} Home Loan Calculator ${formattedCurrencyForTitle} - ${timeFrame === "monthly" ? "Monthly" : "Annual"} Payment ${loanResult ? formatCurrency(loanResult.payment) : ""}`}
        description={`Calculate your ${bankInfo.bankName} home loan of ${formatCurrency(currentLoanAmount)} with ${formatCurrency(currentDownPayment)} down payment at ${currentInterestRate}% interest rate. ${timeFrame === "monthly" ? "Monthly" : "Annual"} payment ${loanResult ? `of ${formatCurrency(loanResult.payment)} over ${loanResult.termDisplay}` : ""}.`}
        canonicalUrl={`${bankInfo.backLink}/${timeFrame}/${currentLoanAmount}/${currentDownPayment}/${currentLoanTerm}/${currentInterestRate}`}
      />
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center justify-between mb-6">
            <Link 
              to={`${bankInfo.backLink}${timeFrame !== "monthly" ? "/" + timeFrame : ""}`}
              className="inline-flex items-center text-sm text-[#000000] hover:underline"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back To {bankInfo.bankName} Home Loan Calculator
            </Link>
            
            <ShareButton 
              title={`${bankInfo.bankName} Home Loan ${formattedCurrencyForTitle} ${timeFrame === "monthly" ? "Monthly" : "Annual"} Payment - SalaryList`} 
              variant="outline"
            />
          </div>

          {/* Title Section */}
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#333] mb-4">
              {bankInfo.bankName} Home Loan Calculator On {formatCurrency(currentLoanAmount)} {timeFrame === "monthly" ? "Monthly" : "Annual"} Payment
            </h1>
          </div>

          {/* Calculator Section */}
          <div className="mb-6">
            <HomeLoanDetailCalculator 
              timeFrame={timeFrame}
              onTimeFrameChange={handleTimeFrameChange}
              initialLoanAmount={homeLoanAmount.toString()}
              initialDownPayment={homeDownPayment.toString()}
              initialInterestRate={homeInterestRate.toString()}
              initialLoanTerm={homeLoanTerm.toString()}
              onLoanChange={handleLoanChange}
            />
          </div>

          {loanResult && (
            <>
              {/* Combined Loan Overview and Detailed Breakdown Section */}
              <div className="bg-white p-6 sm:p-8 rounded-md shadow-sm mb-8">
                <h2 className="text-xl font-semibold mb-4">Home Loan Overview & Breakdown</h2>
                
                <div className="prose prose-sm sm:prose max-w-none mb-6">
                  <p>
                    Your {bankInfo.displayName} home loan of {formatCurrency(loanResult.loanAmount)} with a down payment of {formatCurrency(loanResult.downPayment)} at {loanResult.interestRate}% interest rate for {loanResult.termDisplay} will require {timeFrame === "monthly" ? "monthly" : "annual"} payments of {formatCurrency(loanResult.payment)}. 
                    The total interest you'll pay over the life of the loan is {formatCurrency(loanResult.totalInterest)}, making your total repayment {formatCurrency(loanResult.totalRepayment)}.
                  </p>
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
                      <TableCell>Home Price</TableCell>
                      <TableCell className="text-right">{formatCurrency(loanResult.loanAmount)}</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-200">
                      <TableCell>Down Payment</TableCell>
                      <TableCell className="text-right">{formatCurrency(loanResult.downPayment)}</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-200">
                      <TableCell>Loan Amount</TableCell>
                      <TableCell className="text-right">{formatCurrency(loanResult.loanAmount - loanResult.downPayment)}</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-200">
                      <TableCell>Interest Rate</TableCell>
                      <TableCell className="text-right">{loanResult.interestRate}%</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-200">
                      <TableCell>Loan Term</TableCell>
                      <TableCell className="text-right">{loanResult.termDisplay}</TableCell>
                    </TableRow>
                    <TableRow className="font-medium border-b border-gray-200">
                      <TableCell>{timeFrame === "monthly" ? "Monthly" : "Annual"} Payment</TableCell>
                      <TableCell className="text-right">{formatCurrency(loanResult.payment)}</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-200">
                      <TableCell>Total Interest</TableCell>
                      <TableCell className="text-right">{formatCurrency(loanResult.totalInterest)}</TableCell>
                    </TableRow>
                    <TableRow className="bg-gray-50 font-medium border-b border-gray-200">
                      <TableCell>Total Repayment</TableCell>
                      <TableCell className="text-right">{formatCurrency(loanResult.totalRepayment)}</TableCell>
                    </TableRow>
                    {timeFrame === "yearly" && (
                      <TableRow className="bg-gray-50">
                        <TableCell>Monthly Payment</TableCell>
                        <TableCell className="text-right">{formatCurrency(Math.round(loanResult.payment / 12))}</TableCell>
                      </TableRow>
                    )}
                    {timeFrame === "monthly" && (
                      <TableRow className="bg-gray-50">
                        <TableCell>Annual Payment</TableCell>
                        <TableCell className="text-right">{formatCurrency(loanResult.payment * 12)}</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>

              {/* Amortization Schedule Section */}
              <div className="mb-8">
                <HomeLoanAmortizationSchedule 
                  homePrice={currentLoanAmount}
                  downPayment={currentDownPayment}
                  interestRate={currentInterestRate}
                  loanTerm={currentLoanTerm}
                  timeFrame={timeFrame}
                />
              </div>
            </>
          )}

          <p className="text-sm text-gray-500 text-center">
            <em><strong>{bankInfo.bankName === "Capitec Bank" ? "Capitec Bank interest rates may vary based on your credit profile, loan terms, and market conditions. Contact Capitec Bank for personalized rates." : "Interest rates may vary based on your credit profile, loan terms, and market conditions. Contact your preferred lender for personalized rates."}</strong></em>
          </p>
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

export default HomeLoanDetail;
