
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Header from "../components/Header";
import LoanDetailCalculator from "../components/LoanDetailCalculator";
import AmortizationSchedule from "../components/AmortizationSchedule";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  getCrdbLoanCalculation, 
  formatCurrency,
  CrdbTimeFrame 
} from "../utils/loanCalculator";

const InternalLoanCalculator = () => {
  const navigate = useNavigate();
  const [timeFrame, setTimeFrame] = useState<CrdbTimeFrame>("monthly");
  const [currentLoanAmount, setCurrentLoanAmount] = useState(5000000);
  const [currentInterestRate, setCurrentInterestRate] = useState(13);
  const [currentLoanTerm, setCurrentLoanTerm] = useState(36);
  
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
      setCurrentLoanTerm(convertedTerm);
    }
  };

  const handleLoanChange = (newLoanAmount: number, newInterestRate: number, newLoanTerm: number) => {
    setCurrentLoanAmount(newLoanAmount);
    setCurrentInterestRate(newInterestRate);
    setCurrentLoanTerm(newLoanTerm);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center justify-between mb-6">
            <Button 
              variant="outline"
              onClick={() => navigate(-1)}
              className="inline-flex items-center text-sm"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back
            </Button>
          </div>

          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#333] mb-4">
              Internal Loan Calculator
            </h1>
            <p className="text-gray-600">
              Use this calculator to help customers understand their loan options.
            </p>
          </div>

          {/* Calculator Section */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Loan Calculator</CardTitle>
            </CardHeader>
            <CardContent>
              <LoanDetailCalculator 
                timeFrame={timeFrame}
                onTimeFrameChange={handleTimeFrameChange}
                initialAmount={currentLoanAmount.toString()}
                initialRate={currentInterestRate.toString()}
                initialTerm={currentLoanTerm.toString()}
                onLoanChange={handleLoanChange}
              />
            </CardContent>
          </Card>

          {loanResult && (
            <>
              {/* Loan Overview Section */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Loan Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none mb-6">
                    <p>
                      Loan of {formatCurrency(loanResult.loanAmount)} at {loanResult.interestRate}% interest rate for {loanResult.termDisplay} requires {timeFrame === "monthly" ? "monthly" : "annual"} payments of {formatCurrency(loanResult.payment)}.
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
                      <TableRow>
                        <TableCell>Loan Amount</TableCell>
                        <TableCell className="text-right">{formatCurrency(loanResult.loanAmount)}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Interest Rate</TableCell>
                        <TableCell className="text-right">{loanResult.interestRate}%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Loan Term</TableCell>
                        <TableCell className="text-right">{loanResult.termDisplay}</TableCell>
                      </TableRow>
                      <TableRow className="font-medium">
                        <TableCell>{timeFrame === "monthly" ? "Monthly" : "Annual"} Payment</TableCell>
                        <TableCell className="text-right">{formatCurrency(loanResult.payment)}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Total Interest</TableCell>
                        <TableCell className="text-right">{formatCurrency(loanResult.totalInterest)}</TableCell>
                      </TableRow>
                      <TableRow className="bg-gray-50 font-medium">
                        <TableCell>Total Repayment</TableCell>
                        <TableCell className="text-right">{formatCurrency(loanResult.totalRepayment)}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Amortization Schedule */}
              <Card>
                <CardContent className="pt-6">
                  <AmortizationSchedule 
                    loanAmount={currentLoanAmount}
                    interestRate={currentInterestRate}
                    loanTerm={currentLoanTerm}
                    timeFrame={timeFrame}
                  />
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </main>
    </motion.div>
  );
};

export default InternalLoanCalculator;
