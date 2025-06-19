
import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  getSouthAfricaTaxCalculation,
  formatSouthAfricaCurrency,
  SouthAfricaTimeFrame,
  AgeGroup
} from "../utils/southAfricaTaxCalculator";

interface PayeCalculatorProps {
  timeFrame: SouthAfricaTimeFrame;
  onTimeFrameChange: (value: string) => void;
  initialAmount?: string;
}

const PayeCalculator = ({ timeFrame, onTimeFrameChange, initialAmount }: PayeCalculatorProps) => {
  const navigate = useNavigate();
  const [customIncome, setCustomIncome] = useState(initialAmount || (timeFrame === "yearly" ? "600000" : "50000"));
  const [ageGroup, setAgeGroup] = useState<AgeGroup>("below65");
  
  // Format number with thousand separators
  const formatNumberWithSeparators = (value: string): string => {
    const numericValue = value.replace(/[^0-9]/g, '');
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  // Get numeric value from formatted string
  const getNumericValue = (formattedValue: string): number => {
    return parseInt(formattedValue.replace(/[^0-9]/g, '')) || 0;
  };
  
  // Calculate custom income tax if user enters an amount
  const numericCustomIncome = getNumericValue(customIncome);
  const customTaxResult = numericCustomIncome > 0 
    ? getSouthAfricaTaxCalculation(numericCustomIncome, ageGroup, timeFrame)
    : null;

  const handleCustomIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // Only allow numbers
    setCustomIncome(value);
  };

  const handleTimeFrameChangeInternal = (value: string) => {
    if (value === "yearly" || value === "monthly") {
      // Convert the current amount to the new timeframe if user has entered a custom amount
      const currentNumericValue = getNumericValue(customIncome);
      if (currentNumericValue > 0) {
        const currentTimeFrame = timeFrame;
        let convertedAmount;
        
        if (currentTimeFrame === "monthly" && value === "yearly") {
          // Converting from monthly to yearly
          convertedAmount = currentNumericValue * 12;
        } else if (currentTimeFrame === "yearly" && value === "monthly") {
          // Converting from yearly to monthly
          convertedAmount = Math.round(currentNumericValue / 12);
        } else {
          // Same timeframe, keep the amount
          convertedAmount = currentNumericValue;
        }
        
        setCustomIncome(convertedAmount.toString());
      }
      
      onTimeFrameChange(value);
    }
  };

  const viewDetailedCalculation = () => {
    if (customTaxResult) {
      navigate(`/paye/${timeFrame}/${customTaxResult.grossIncome}/${ageGroup}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 space-y-6"
    >

      {/* Income Input */}
      <div className="space-y-2">
        <Label htmlFor="custom-income" className="text-sm font-medium text-gray-700">
          {timeFrame === "monthly" ? "Monthly" : "Annual"} Income (ZAR)
        </Label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
            R
          </span>
          <Input
            id="custom-income"
            type="text"
            placeholder={`Enter your ${timeFrame} income...`}
            value={formatNumberWithSeparators(customIncome)}
            onChange={handleCustomIncomeChange}
            className="pl-12 h-10 border-gray-300 focus:border-primary"
          />
        </div>
      </div>

      {/* Age Group Selection */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-700">Age Group</Label>
        <Select value={ageGroup} onValueChange={(value: AgeGroup) => setAgeGroup(value)}>
          <SelectTrigger className="h-10 border-gray-300 focus:border-primary">
            <SelectValue placeholder="Select age group" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="below65">Below 65</SelectItem>
            <SelectItem value="age65to75">65 to 75</SelectItem>
            <SelectItem value="above75">Above 75</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {/* Time Frame Toggle - Matching Insurance/Offence Style */}
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

      {customTaxResult && (
        <>
          {/* Tax Calculation Results */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="text-center p-3 bg-white rounded border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">Gross Income</div>
                <div className="font-semibold text-sm text-gray-800">{formatSouthAfricaCurrency(customTaxResult.grossIncome)}</div>
              </div>
              <div className="text-center p-3 bg-white rounded border-2 border-primary">
                <div className="text-xs text-gray-500 mb-1">Take-home Pay</div>
                <div className="font-semibold text-sm text-primary">{formatSouthAfricaCurrency(customTaxResult.netIncome)}</div>
              </div>
              <div className="text-center p-3 bg-white rounded border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">PAYE Tax</div>
                <div className="font-semibold text-sm text-red-600">{formatSouthAfricaCurrency(customTaxResult.netTax)}</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-1 bg-white rounded border border-gray-200 text-xs">
                <span className="text-gray-600">Effective Rate: </span>
                <span className="font-medium text-gray-800">{customTaxResult.effectiveTaxRate.toFixed(1)}%</span>
              </div>
              <div className="px-3 py-1 bg-white rounded border border-gray-200 text-xs">
                <span className="text-gray-600">Marginal Rate: </span>
                <span className="font-medium text-gray-800">{customTaxResult.marginalTaxRate.toFixed(1)}%</span>
              </div>
              <div className="px-3 py-1 bg-white rounded border border-gray-200 text-xs">
                <span className="text-gray-600">Tax Rebates: </span>
                <span className="font-medium text-gray-800">{formatSouthAfricaCurrency(customTaxResult.taxRebates)}</span>
              </div>
            </div>
          </motion.div>

          {/* Dynamic Paragraph */}
          <div className="text-sm text-gray-600 leading-relaxed">
            <p>
              Your {timeFrame} income of {formatSouthAfricaCurrency(customTaxResult.grossIncome)} falls under the {customTaxResult.marginalTaxRate.toFixed(1)}% tax bracket, resulting in an effective tax rate of {customTaxResult.effectiveTaxRate.toFixed(1)}%. 
              After applying tax rebates of {formatSouthAfricaCurrency(customTaxResult.taxRebates)}, your net PAYE tax is {formatSouthAfricaCurrency(customTaxResult.netTax)}.
              Click below to see the complete breakdown of your tax calculation including all applicable deductions and bracket details.
            </p>
          </div>
          
          {/* View Details Button */}
          <Button 
            onClick={viewDetailedCalculation} 
            className="w-full bg-primary hover:bg-primary/90 text-white text-sm py-2"
          >
            View Detailed Breakdown
          </Button>
        </>
      )}
    </motion.div>
  );
};

export default PayeCalculator;
