
import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { 
  calculateUIF,
  formatUIFCurrency,
  UIF_SALARY_CAP,
  UIFCalculation
} from "../utils/uifCalculator";

const UIFCalculator = () => {
  const [averageSalary, setAverageSalary] = useState("15000");
  const [employmentDuration, setEmploymentDuration] = useState("1460"); // 4 years in days
  
  // Format number with thousand separators
  const formatNumberWithSeparators = (value: string): string => {
    const numericValue = value.replace(/[^0-9.]/g, '');
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  // Get numeric value from formatted string
  const getNumericValue = (formattedValue: string): number => {
    return parseFloat(formattedValue.replace(/[^0-9.]/g, '')) || 0;
  };
  
  // Calculate UIF if user enters values
  const numericAverageSalary = getNumericValue(averageSalary);
  const numericEmploymentDuration = getNumericValue(employmentDuration);
  
  const uifResult = (numericAverageSalary > 0 && numericEmploymentDuration > 0) 
    ? calculateUIF(numericAverageSalary, numericEmploymentDuration)
    : null;

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, ''); // Only allow numbers and decimal
    setAverageSalary(value);
  };

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // Only allow numbers
    setEmploymentDuration(value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 space-y-6"
    >
      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Average Salary Input */}
        <div className="space-y-2">
          <Label htmlFor="average-salary" className="text-sm font-medium text-gray-700">
            Average Monthly Salary (ZAR)
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
              R
            </span>
            <Input
              id="average-salary"
              type="text"
              placeholder="Enter average salary..."
              value={formatNumberWithSeparators(averageSalary)}
              onChange={handleSalaryChange}
              className="pl-12 h-10 border-gray-300 focus:border-primary"
            />
          </div>
          <p className="text-xs text-gray-500">Maximum salary for UIF: {formatUIFCurrency(UIF_SALARY_CAP)}</p>
        </div>

        {/* Employment Duration Input */}
        <div className="space-y-2">
          <Label htmlFor="employment-duration" className="text-sm font-medium text-gray-700">
            Employment Duration (Days)
          </Label>
          <Input
            id="employment-duration"
            type="text"
            placeholder="Enter employment duration..."
            value={formatNumberWithSeparators(employmentDuration)}
            onChange={handleDurationChange}
            className="h-10 border-gray-300 focus:border-primary"
          />
          <p className="text-xs text-gray-500">Total days worked (e.g., 1460 days = 4 years)</p>
        </div>
      </div>

      {uifResult && (
        <>
          {/* UIF Calculation Results */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            
            {/* Calculation Breakdown */}
            <div className="bg-white rounded border border-gray-100 p-4">
              <div className="text-sm font-medium text-gray-700 mb-3">UIF Calculation Breakdown:</div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="text-center p-3 bg-gray-50 rounded border border-gray-100">
                  <div className="text-xs text-gray-500 mb-1">Daily Income</div>
                  <div className="font-semibold text-sm text-gray-800">{formatUIFCurrency(uifResult.dailyIncome)}</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded border border-gray-100">
                  <div className="text-xs text-gray-500 mb-1">Income Replacement Rate</div>
                  <div className="font-semibold text-sm text-blue-600">{uifResult.irr.toFixed(2)}%</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded border border-gray-100">
                  <div className="text-xs text-gray-500 mb-1">Daily Benefit Amount</div>
                  <div className="font-semibold text-sm text-green-600">{formatUIFCurrency(uifResult.dba)}</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded border border-gray-100">
                  <div className="text-xs text-gray-500 mb-1">Credit Days</div>
                  <div className="font-semibold text-sm text-gray-800">{Math.round(uifResult.creditDays)} days</div>
                </div>
              </div>
            </div>

            {/* Total Benefit */}
            <div className="bg-white rounded border-2 border-primary p-4">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-1">Total UIF Benefit</div>
                <div className="text-2xl font-bold text-primary">{formatUIFCurrency(uifResult.totalBenefit)}</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-1 bg-white rounded border border-gray-200 text-xs">
                <span className="text-gray-600">Salary Cap: </span>
                <span className="font-medium text-gray-800">{formatUIFCurrency(UIF_SALARY_CAP)}</span>
              </div>
              <div className="px-3 py-1 bg-white rounded border border-gray-200 text-xs">
                <span className="text-gray-600">Max Benefit Period: </span>
                <span className="font-medium text-gray-800">365 days</span>
              </div>
            </div>
          </motion.div>

          {/* Dynamic Paragraph */}
          <div className="text-sm text-gray-600 leading-relaxed">
            <p>
              Based on your average monthly salary of {formatUIFCurrency(uifResult.averageSalary)} and employment duration of {Math.round(uifResult.employmentDuration)} days, 
              your daily income is {formatUIFCurrency(uifResult.dailyIncome)} with an income replacement rate of {uifResult.irr.toFixed(2)}%. 
              This gives you a daily benefit amount of {formatUIFCurrency(uifResult.dba)} for {Math.round(uifResult.creditDays)} credit days, 
              resulting in a total UIF benefit of {formatUIFCurrency(uifResult.totalBenefit)}.
            </p>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default UIFCalculator;
