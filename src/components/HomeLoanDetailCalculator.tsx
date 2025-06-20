
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { 
  getHomeLoanCalculation,
  formatCurrency,
  HomeLoanTimeFrame
} from "../utils/homeLoanCalculator";

interface HomeLoanDetailCalculatorProps {
  timeFrame: HomeLoanTimeFrame;
  onTimeFrameChange: (value: string) => void;
  initialLoanAmount: string;
  initialDownPayment: string;
  initialInterestRate: string;
  initialLoanTerm: string;
  onLoanChange: (loanAmount: number, downPayment: number, interestRate: number, loanTerm: number) => void;
}

const HomeLoanDetailCalculator = ({ 
  timeFrame, 
  onTimeFrameChange, 
  initialLoanAmount,
  initialDownPayment, 
  initialInterestRate, 
  initialLoanTerm,
  onLoanChange
}: HomeLoanDetailCalculatorProps) => {
  const [loanAmount, setLoanAmount] = useState(initialLoanAmount);
  const [downPayment, setDownPayment] = useState(initialDownPayment);
  const [interestRate, setInterestRate] = useState(initialInterestRate);
  const [loanTerm, setLoanTerm] = useState(initialLoanTerm);
  
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
  const numericDownPayment = getNumericValue(downPayment);
  const numericInterestRate = getNumericRate(interestRate);
  const numericLoanTerm = parseInt(loanTerm) || 0;
  
  const loanResult = numericLoanAmount > 0 && numericInterestRate > 0 && numericLoanTerm > 0
    ? getHomeLoanCalculation(numericLoanAmount, numericDownPayment, numericInterestRate, numericLoanTerm, timeFrame)
    : null;

  // Update parent component when values change
  useEffect(() => {
    onLoanChange(numericLoanAmount, numericDownPayment, numericInterestRate, numericLoanTerm);
  }, [loanAmount, downPayment, interestRate, loanTerm, onLoanChange]);

  const handleLoanAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setLoanAmount(value);
  };

  const handleDownPaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setDownPayment(value);
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
    onTimeFrameChange(value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 space-y-6"
    >
      {/* Loan Amount Input */}
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
            placeholder="300000"
            value={formatNumberWithSeparators(loanAmount)}
            onChange={handleLoanAmountChange}
            className="pl-8 h-10 border-gray-300 focus:border-primary"
          />
        </div>
      </div>

      {/* Down Payment Input */}
      <div className="space-y-2">
        <Label htmlFor="down-payment" className="text-sm font-medium text-gray-700">
          Down Payment
        </Label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
            R
          </span>
          <Input
            id="down-payment"
            type="text"
            placeholder="0"
            value={formatNumberWithSeparators(downPayment)}
            onChange={handleDownPaymentChange}
            className="pl-8 h-10 border-gray-300 focus:border-primary"
          />
        </div>
      </div>

      {/* Loan Term Input */}
      <div className="space-y-2">
        <Label htmlFor="loan-term" className="text-sm font-medium text-gray-700">
          Loan Term (in years)
        </Label>
        <Input
          id="loan-term"
          type="text"
          placeholder="30"
          value={loanTerm}
          onChange={handleLoanTermChange}
          className="h-10 border-gray-300 focus:border-primary"
        />
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
            placeholder="10.5"
            value={interestRate}
            onChange={handleInterestRateChange}
            className="pr-8 h-10 border-gray-300 focus:border-primary"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
            %
          </span>
        </div>
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
                <div className="text-xs text-gray-500 mb-1">Home Price</div>
                <div className="font-semibold text-sm text-gray-800">{formatCurrency(loanResult.loanAmount)}</div>
              </div>
              <div className="text-center p-3 bg-white rounded border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">Down Payment</div>
                <div className="font-semibold text-sm text-gray-800">{formatCurrency(loanResult.downPayment)}</div>
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
          </motion.div>

          {/* Dynamic Paragraph */}
          <div className="text-sm text-gray-600 leading-relaxed">
            <p>
              Your home loan of {formatCurrency(loanResult.loanAmount)} with a down payment of {formatCurrency(loanResult.downPayment)} at {loanResult.interestRate}% interest rate for {loanResult.termDisplay} will require {timeFrame === "monthly" ? "monthly" : "annual"} payments of {formatCurrency(loanResult.payment)}.
            </p>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default HomeLoanDetailCalculator;
