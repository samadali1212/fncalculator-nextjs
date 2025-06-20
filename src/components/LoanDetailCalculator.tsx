
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { 
  getCrdbLoanCalculation,
  formatCurrency,
  CrdbTimeFrame
} from "../utils/loanCalculator";

interface LoanDetailCalculatorProps {
  timeFrame: CrdbTimeFrame;
  onTimeFrameChange: (value: string) => void;
  initialAmount?: string;
  initialRate?: string;
  initialTerm?: string;
  onLoanChange?: (loanAmount: number, interestRate: number, loanTerm: number) => void;
}

const LoanDetailCalculator = ({ 
  timeFrame, 
  onTimeFrameChange, 
  initialAmount, 
  initialRate, 
  initialTerm,
  onLoanChange 
}: LoanDetailCalculatorProps) => {
  const navigate = useNavigate();
  const [loanAmount, setLoanAmount] = useState(initialAmount || "50000");
  const [interestRate, setInterestRate] = useState(initialRate || "13");
  const [loanTerm, setLoanTerm] = useState(initialTerm || (timeFrame === "yearly" ? "3" : "36"));
  
  // Format number with thousand separators
  const formatNumberWithSeparators = (value: string): string => {
    const numericValue = value.replace(/[^0-9]/g, '');
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // Get numeric value from formatted string
  const getNumericValue = (formattedValue: string): number => {
    return parseInt(formattedValue.replace(/[^0-9]/g, '')) || 0;
  };

  // Get numeric value for rate
  const getNumericRate = (rateValue: string): number => {
    return parseFloat(rateValue) || 0;
  };
  
  // Calculate loan details if user enters values
  const numericLoanAmount = getNumericValue(loanAmount);
  const numericInterestRate = getNumericRate(interestRate);
  const numericLoanTerm = parseInt(loanTerm) || 0;
  
  const loanResult = numericLoanAmount > 0 && numericInterestRate > 0 && numericLoanTerm > 0
    ? getCrdbLoanCalculation(numericLoanAmount, numericInterestRate, numericLoanTerm, timeFrame)
    : null;

  // Call onLoanChange whenever the loan parameters change
  useEffect(() => {
    if (onLoanChange && numericLoanAmount > 0 && numericInterestRate > 0 && numericLoanTerm > 0) {
      onLoanChange(numericLoanAmount, numericInterestRate, numericLoanTerm);
    }
  }, [numericLoanAmount, numericInterestRate, numericLoanTerm, onLoanChange]);

  const handleLoanAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setLoanAmount(value);
  };

  const handleInterestRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setInterestRate(value);
  };

  const handleLoanTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setLoanTerm(value);
  };

  const handleTimeFrameChangeInternal = (value: string) => {
    if (value === "yearly" || value === "monthly") {
      // Convert loan term when switching timeframes
      const currentTerm = parseInt(loanTerm) || 0;
      if (currentTerm > 0) {
        let convertedTerm;
        
        if (timeFrame === "monthly" && value === "yearly") {
          // Converting from months to years
          convertedTerm = Math.round(currentTerm / 12);
        } else if (timeFrame === "yearly" && value === "monthly") {
          // Converting from years to months
          convertedTerm = currentTerm * 12;
        } else {
          // Same timeframe, keep the term
          convertedTerm = currentTerm;
        }
        
        setLoanTerm(convertedTerm.toString());
      }
      
      onTimeFrameChange(value);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Loan Amount Input */}
      <div className="space-y-2">
        <Label htmlFor="loan-amount" className="text-sm font-medium text-gray-700">
          Loan Amount (R)
        </Label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
            R
          </span>
          <Input
            id="loan-amount"
            type="text"
            placeholder="Enter loan amount..."
            value={formatNumberWithSeparators(loanAmount)}
            onChange={handleLoanAmountChange}
            className="pl-8 h-10 border-gray-300 focus:border-primary"
          />
        </div>
      </div>

      {/* Interest Rate Input */}
      <div className="space-y-2">
        <Label htmlFor="interest-rate" className="text-sm font-medium text-gray-700">
          Interest Rate (%)
        </Label>
        <div className="relative">
          <Input
            id="interest-rate"
            type="text"
            placeholder="13"
            value={interestRate}
            onChange={handleInterestRateChange}
            className="pr-8 h-10 border-gray-300 focus:border-primary"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
            %
          </span>
        </div>
      </div>

      {/* Loan Term Input */}
      <div className="space-y-2">
        <Label htmlFor="loan-term" className="text-sm font-medium text-gray-700">
          Loan Term ({timeFrame === "monthly" ? "Months" : "Years"})
        </Label>
        <Input
          id="loan-term"
          type="text"
          placeholder={timeFrame === "monthly" ? "36" : "3"}
          value={loanTerm}
          onChange={handleLoanTermChange}
          className="h-10 border-gray-300 focus:border-primary"
        />
      </div>
      
      {/* Time Frame Toggle */}
      <div className="space-y-2">
        <div className="flex gap-2">
          <Button
            variant={timeFrame === "monthly" ? "default" : "outline"}
            onClick={() => handleTimeFrameChangeInternal("monthly")}
            size="sm"
            className="flex-1 text-sm"
          >
            Monthly
          </Button>
          <Button
            variant={timeFrame === "yearly" ? "default" : "outline"}
            onClick={() => handleTimeFrameChangeInternal("yearly")}
            size="sm"
            className="flex-1 text-sm"
          >
            Yearly
          </Button>
        </div>
      </div>

      {loanResult && (
        <>
          {/* Loan Calculation Results */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="text-center p-3 bg-white rounded border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">Loan Amount</div>
                <div className="font-semibold text-sm text-gray-800">{formatCurrency(loanResult.loanAmount)}</div>
              </div>
              <div className="text-center p-3 bg-white rounded border-2 border-primary">
                <div className="text-xs text-gray-500 mb-1">{timeFrame === "monthly" ? "Monthly" : "Annual"} Payment</div>
                <div className="font-semibold text-sm text-primary">{formatCurrency(loanResult.payment)}</div>
              </div>
              <div className="text-center p-3 bg-white rounded border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">Total Interest</div>
                <div className="font-semibold text-sm text-red-600">{formatCurrency(loanResult.totalInterest)}</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-1 bg-white rounded border border-gray-200 text-xs">
                <span className="text-gray-600">Total Repayment: </span>
                <span className="font-medium text-gray-800">{formatCurrency(loanResult.totalRepayment)}</span>
              </div>
              <div className="px-3 py-1 bg-white rounded border border-gray-200 text-xs">
                <span className="text-gray-600">Interest Rate: </span>
                <span className="font-medium text-gray-800">{loanResult.interestRate}%</span>
              </div>
            </div>
          </motion.div>

          {/* Dynamic Paragraph */}
          <div className="text-sm text-gray-600 leading-relaxed">
            <p>
              Your loan of {formatCurrency(loanResult.loanAmount)} at {loanResult.interestRate}% interest rate for {loanResult.termDisplay} will require {timeFrame === "monthly" ? "monthly" : "annual"} payments of {formatCurrency(loanResult.payment)}.
            </p>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default LoanDetailCalculator;
