
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { 
  getCrdbLoanCalculation,
  formatCurrency,
  CrdbTimeFrame
} from "../utils/loanCalculator";

interface CrdbCalculatorProps {
  timeFrame: CrdbTimeFrame;
  onTimeFrameChange: (value: string) => void;
  initialAmount?: string;
  initialRate?: string;
  initialTerm?: string;
  bankPath?: string;
}

const CrdbCalculator = ({ 
  timeFrame, 
  onTimeFrameChange, 
  initialAmount, 
  initialRate, 
  initialTerm,
  bankPath = "crdb"
}: CrdbCalculatorProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [amount, setAmount] = useState(initialAmount || "100000");
  const [rate, setRate] = useState(initialRate || "13");
  const [term, setTerm] = useState(initialTerm || "36");
  
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
  const numericAmount = getNumericValue(amount);
  const numericRate = getNumericRate(rate);
  const numericTerm = parseInt(term) || 0;
  
  const loanResult = numericAmount > 0 && numericRate > 0 && numericTerm > 0
    ? getCrdbLoanCalculation(numericAmount, numericRate, numericTerm, timeFrame)
    : null;

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setAmount(value);
  };

  const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setRate(value);
  };

  const handleTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setTerm(value);
  };

  const handleTimeFrameChangeInternal = (value: string) => {
    onTimeFrameChange(value);
  };

  const handleViewDetails = () => {
    if (loanResult) {
      // Navigate to the simple loan detail route
      navigate("/loan-detail");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 space-y-6"
    >
      {/* Amount Input */}
      <div className="space-y-2">
        <Label htmlFor="loan-amount" className="text-sm font-medium text-gray-700">
          Loan Amount
        </Label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
            R
          </span>
          <Input
            id="loan-amount"
            type="text"
            placeholder="100000"
            value={formatNumberWithSeparators(amount)}
            onChange={handleAmountChange}
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
            value={rate}
            onChange={handleRateChange}
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
          Loan Term ({timeFrame === "monthly" ? "months" : "years"})
        </Label>
        <Input
          id="loan-term"
          type="text"
          placeholder={timeFrame === "monthly" ? "36" : "3"}
          value={term}
          onChange={handleTermChange}
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
          {/* Simplified Loan Calculation Results */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
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
              <div className="text-center p-3 bg-white rounded border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">Total Repayment</div>
                <div className="font-semibold text-sm text-gray-800">{formatCurrency(loanResult.totalRepayment)}</div>
              </div>
            </div>
          </motion.div>

          {/* Dynamic Paragraph */}
          <div className="text-sm text-gray-600 leading-relaxed">
            <p>
              Your loan of {formatCurrency(loanResult.loanAmount)} at {loanResult.interestRate}% interest rate for {loanResult.termDisplay} will require {timeFrame === "monthly" ? "monthly" : "annual"} payments of {formatCurrency(loanResult.payment)}. 
              Click below to see the complete breakdown of your loan calculation including total repayment and amortization schedule.
            </p>
          </div>
          
          {/* View Details Button */}
          <Button 
            onClick={handleViewDetails}
            className="w-full bg-primary hover:bg-primary/90 text-white text-sm py-2"
          >
            View Detailed Breakdown
          </Button>
        </>
      )}
    </motion.div>
  );
};

export default CrdbCalculator;
