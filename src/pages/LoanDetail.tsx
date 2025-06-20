import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, Calculator } from "lucide-react";
import Header from "../components/Header";
import SEO from "../components/SEO";
import ShareButton from "../components/ShareButton";
import LoanDetailCalculator from "../components/LoanDetailCalculator";
import AmortizationSchedule from "../components/AmortizationSchedule";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  getCrdbLoanCalculation, 
  formatCurrency,
  CrdbTimeFrame 
} from "../utils/loanCalculator";
import { usePageReload } from "../hooks/usePageReload";

const LoanDetail = () => {
  const { amount, rate, term } = useParams();
  const navigate = useNavigate();
  const { pageKey, isLoading } = usePageReload();
  
  const [timeFrame, setTimeFrame] = useState<CrdbTimeFrame>("monthly");
  const [currentLoanAmount, setCurrentLoanAmount] = useState(0);
  const [currentInterestRate, setCurrentInterestRate] = useState(0);
  const [currentLoanTerm, setCurrentLoanTerm] = useState(0);
  
  // Determine bank from URL path
  const path = window.location.pathname;
  const getBankInfo = () => {
    if (path.includes("/loan/")) {
      return {
        bankName: "Personal",
        bankPath: "loan",
        displayName: "Personal",
        backLink: "/loan"
      };
    } else if (path.includes("/nedbank-loan-calculator/")) {
      return {
        bankName: "Nedbank",
        bankPath: "nedbank-loan-calculator",
        displayName: "Nedbank",
        backLink: "/nedbank-loan-calculator"
      };
    } else if (path.includes("/azania/")) {
      return {
        bankName: "Azania Bank",
        bankPath: "azania",
        displayName: "Azania",
        backLink: "/azania"
      };
    } else if (path.includes("/absa/")) {
      return {
        bankName: "ABSA Bank",
        bankPath: "absa",
        displayName: "ABSA",
        backLink: "/absa"
      };
    } else if (path.includes("/nbc/")) {
      return {
        bankName: "NBC Bank South Africa",
        bankPath: "nbc",
        displayName: "NBC",
        backLink: "/nbc"
      };
    } else if (path.includes("/nmb/")) {
      return {
        bankName: "NMB Bank",
        bankPath: "nmb",
        displayName: "NMB",
        backLink: "/nmb"
      };
    } else if (path.includes("/crdb/")) {
      return {
        bankName: "CRDB Bank",
        bankPath: "crdb",
        displayName: "CRDB",
        backLink: "/crdb"
      };
    }
    
    // Default fallback
    return {
      bankName: "Personal",
      bankPath: "loan",
      displayName: "Personal",
      backLink: "/loan"
    };
  };

  const bankInfo = getBankInfo();

  // Parse parameters
  const loanAmount = parseInt(amount || "0");
  const interestRate = parseFloat(rate || "0");
  const loanTerm = parseInt(term || "0");

  // Set initial values
  useEffect(() => {
    setCurrentLoanAmount(loanAmount);
    setCurrentInterestRate(interestRate);
    setCurrentLoanTerm(loanTerm);
  }, [loanAmount, interestRate, loanTerm]);

  // Calculate loan details using current values
  const loanResult = currentLoanAmount > 0 && currentInterestRate > 0 && currentLoanTerm > 0
    ? getCrdbLoanCalculation(currentLoanAmount, currentInterestRate, currentLoanTerm, timeFrame)
    : null;

  const handleTimeFrameChange = (value: string) => {
    if (value === "yearly" || value === "monthly") {
      setTimeFrame(value as CrdbTimeFrame);
      // Convert term when switching timeframes
      let convertedTerm = currentLoanTerm;
      if (timeFrame === "monthly" && value === "yearly") {
        convertedTerm = Math.round(currentLoanTerm / 12);
      } else if (timeFrame === "yearly" && value === "monthly") {
        convertedTerm = currentLoanTerm * 12;
      }
      navigate(`${bankInfo.backLink}/${currentLoanAmount}/${currentInterestRate}/${convertedTerm}`);
    }
  };

  const handleLoanChange = (newLoanAmount: number, newInterestRate: number, newLoanTerm: number) => {
    setCurrentLoanAmount(newLoanAmount);
    setCurrentInterestRate(newInterestRate);
    setCurrentLoanTerm(newLoanTerm);
  };

  if (!amount || !rate || !term || loanAmount <= 0 || interestRate <= 0 || loanTerm <= 0) {
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
                <h1 className="text-2xl font-bold mb-4">Invalid Loan Parameters</h1>
                <p className="text-gray-600 mb-6">
                  The loan parameters provided are invalid. Please return to the calculator.
                </p>
                <Link to={bankInfo.backLink}>
                  <Button>
                    <Calculator className="mr-2 h-4 w-4" />
                    Back to {bankInfo.bankName} Calculator
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
        title={`${bankInfo.bankName} Loan Calculator ${formattedCurrencyForTitle} - ${timeFrame === "monthly" ? "Monthly" : "Annual"} Payment ${loanResult ? formatCurrency(loanResult.payment) : ""}`}
        description={`Calculate your ${bankInfo.bankName} ${bankInfo.bankPath === "loan" ? "" : "Bank"} personal loan of ${formatCurrency(currentLoanAmount)} at ${currentInterestRate}% interest rate. ${timeFrame === "monthly" ? "Monthly" : "Annual"} payment ${loanResult ? `of ${formatCurrency(loanResult.payment)} over ${loanResult.termDisplay}` : ""}.`}
        canonicalUrl={`${bankInfo.backLink}/${currentLoanAmount}/${currentInterestRate}/${currentLoanTerm}`}
      />
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center justify-between mb-6">
            <Link 
              to={bankInfo.backLink}
              className="inline-flex items-center text-sm text-[#000000] hover:underline"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back To {bankInfo.bankName} Calculator
            </Link>
            
            <ShareButton 
              title={`${bankInfo.bankName} Loan ${formattedCurrencyForTitle} ${timeFrame === "monthly" ? "Monthly" : "Annual"} Payment - SalaryList`} 
              variant="outline"
            />
          </div>

          {/* Title Section - No Background */}
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#333] mb-4">
              {bankInfo.bankName} Loan Calculator On {formatCurrency(currentLoanAmount)} {timeFrame === "monthly" ? "Monthly" : "Annual"} Payment
            </h1>
          </div>

          {/* Calculator Section - No Background */}
          <div className="mb-6">
            <LoanDetailCalculator 
              timeFrame={timeFrame}
              onTimeFrameChange={handleTimeFrameChange}
              initialAmount={loanAmount.toString()}
              initialRate={interestRate.toString()}
              initialTerm={loanTerm.toString()}
              onLoanChange={handleLoanChange}
            />
          </div>

          {loanResult && (
            <>
              {/* Combined Loan Overview and Detailed Breakdown Section */}
              <div className="bg-white p-6 sm:p-8 rounded-md shadow-sm mb-8">
                <h2 className="text-xl font-semibold mb-4">{bankInfo.bankName} Loan Overview & Breakdown</h2>
                
                <div className="prose prose-sm sm:prose max-w-none mb-6">
                  <p>
                    Your {bankInfo.displayName} {bankInfo.bankPath === "loan" ? "personal" : "bank"} loan of {formatCurrency(loanResult.loanAmount)} at {loanResult.interestRate}% interest rate for {loanResult.termDisplay} will require {timeFrame === "monthly" ? "monthly" : "annual"} payments of {formatCurrency(loanResult.payment)}. 
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
                      <TableCell>Loan Amount</TableCell>
                      <TableCell className="text-right">{formatCurrency(loanResult.loanAmount)}</TableCell>
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
                <AmortizationSchedule 
                  loanAmount={currentLoanAmount}
                  interestRate={currentInterestRate}
                  loanTerm={currentLoanTerm}
                  timeFrame={timeFrame}
                />
              </div>
            </>
          )}

          <p className="text-sm text-gray-500 text-center">
            <em><strong>Interest rates may vary based on your credit profile and loan terms. Contact {bankInfo.bankPath === "loan" ? "your preferred lender" : `${bankInfo.bankName}`} for personalized rates.</strong></em>
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

export default LoanDetail;
