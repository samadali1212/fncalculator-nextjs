import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { 
  getTanzaniaTaxCalculation,
  formatTanzaniaCurrency,
  TanzaniaTimeFrame
} from "../utils/tanzaniaTaxCalculator";

interface PayeCalculatorProps {
  timeFrame: TanzaniaTimeFrame;
  onTimeFrameChange: (value: string) => void;
  initialAmount?: string;
}

const PayeCalculator = ({ timeFrame, onTimeFrameChange, initialAmount }: PayeCalculatorProps) => {
  const navigate = useNavigate();
  const [customIncome, setCustomIncome] = useState(initialAmount || (timeFrame === "yearly" ? "6000000" : "500000"));
  
  // Format number with thousand separators
  const formatNumberWithSeparators = (value: string): string => {
    const numericValue = value.replace(/[^0-9]/g, '');
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // Get numeric value from formatted string
  const getNumericValue = (formattedValue: string): number => {
    return parseInt(formattedValue.replace(/[^0-9]/g, '')) || 0;
  };
  
  // Calculate custom income tax if user enters an amount
  const numericCustomIncome = getNumericValue(customIncome);
  const customTaxResult = numericCustomIncome > 0 
    ? getTanzaniaTaxCalculation(numericCustomIncome, timeFrame)
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
      navigate(`/paye/${timeFrame}/${customTaxResult.grossIncome}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <Card className="border-0 shadow-lg bg-white">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Calculator className="h-6 w-6 text-primary" />
            Quick PAYE Calculator
          </CardTitle>
          <CardDescription className="text-gray-600 text-sm">
            Enter your {timeFrame} income to calculate your PAYE tax instantly
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label htmlFor="custom-income" className="text-sm font-medium text-gray-700">
                {timeFrame === "monthly" ? "Monthly" : "Annual"} Income (TSh)
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
                  TSh
                </span>
                <Input
                  id="custom-income"
                  type="text"
                  placeholder={`Enter your ${timeFrame} income...`}
                  value={formatNumberWithSeparators(customIncome)}
                  onChange={handleCustomIncomeChange}
                  className="text-lg h-12 border-gray-200 focus:border-primary pl-12"
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-700">Time Frame</Label>
              <ToggleGroup 
                type="single" 
                value={timeFrame}
                onValueChange={handleTimeFrameChangeInternal}
                className="w-full border border-gray-200 rounded-lg bg-gray-50 p-1"
              >
                <ToggleGroupItem 
                  value="monthly" 
                  className="flex-1 data-[state=on]:bg-white data-[state=on]:shadow-sm text-sm font-medium"
                >
                  Monthly
                </ToggleGroupItem>
                <ToggleGroupItem 
                  value="yearly" 
                  className="flex-1 data-[state=on]:bg-white data-[state=on]:shadow-sm text-sm font-medium"
                >
                  Yearly
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>

          {customTaxResult && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100"
            >
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Calculator className="h-4 w-4" />
                Tax Calculation Results
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="text-center p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Gross Income</div>
                  <div className="font-bold text-lg text-gray-800">{formatTanzaniaCurrency(customTaxResult.grossIncome)}</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border-2 border-primary shadow-sm">
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Take-home Pay</div>
                  <div className="font-bold text-xl text-primary">{formatTanzaniaCurrency(customTaxResult.netIncome)}</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">PAYE Tax</div>
                  <div className="font-bold text-lg text-red-600">{formatTanzaniaCurrency(customTaxResult.netTax)}</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
                  <span className="text-sm text-gray-600">Effective Rate: </span>
                  <span className="font-semibold text-gray-800">{customTaxResult.effectiveTaxRate.toFixed(1)}%</span>
                </div>
                <div className="px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
                  <span className="text-sm text-gray-600">Marginal Rate: </span>
                  <span className="font-semibold text-gray-800">{customTaxResult.marginalTaxRate}%</span>
                </div>
              </div>
              <Button 
                onClick={viewDetailedCalculation} 
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg transition-colors"
              >
                View Detailed Breakdown
              </Button>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PayeCalculator;
