
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { 
  generateVehicleFinanceCalculations,
  formatCurrency,
  VehicleFinanceTimeFrame
} from "../utils/vehicleFinanceCalculator";

interface VehicleFinanceCalculatorProps {
  timeFrame: VehicleFinanceTimeFrame;
  onTimeFrameChange: (value: string) => void;
}

const VehicleFinanceCalculator = ({ timeFrame, onTimeFrameChange }: VehicleFinanceCalculatorProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [vehiclePrice, setVehiclePrice] = useState("300000");
  const [downPayment, setDownPayment] = useState("0");
  const [interestRate, setInterestRate] = useState("10.5");
  const [loanTerm, setLoanTerm] = useState("60");
  const [balloonPayment, setBalloonPayment] = useState("0");
  
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
  
  // Generate calculations for display
  const calculations = generateVehicleFinanceCalculations(
    100000, 1000000, 50000, 
    getNumericRate(interestRate), 
    parseInt(loanTerm) || 60, 
    getNumericValue(downPayment),
    getNumericValue(balloonPayment),
    timeFrame
  );

  const handleVehiclePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setVehiclePrice(value);
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

  const handleBalloonPaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setBalloonPayment(value);
  };

  const handleTimeFrameChangeInternal = (value: string) => {
    onTimeFrameChange(value);
  };

  const handleViewDetails = (calculation: any) => {
    const path = `/vehicle-finance/${timeFrame}/${calculation.vehiclePrice}/${calculation.downPayment}/${calculation.loanTerm}/${calculation.interestRate}/${calculation.balloonPayment}`;
    navigate(path);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 space-y-6"
    >
      {/* Vehicle Price Input */}
      <div className="space-y-2">
        <Label htmlFor="vehicle-price" className="text-sm font-medium text-gray-700">
          Vehicle Purchase Price
        </Label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
            R
          </span>
          <Input
            id="vehicle-price"
            type="text"
            placeholder="300000"
            value={formatNumberWithSeparators(vehiclePrice)}
            onChange={handleVehiclePriceChange}
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
          Loan Term (in months)
        </Label>
        <Input
          id="loan-term"
          type="text"
          placeholder="60"
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

      {/* Balloon Payment Input */}
      <div className="space-y-2">
        <Label htmlFor="balloon-payment" className="text-sm font-medium text-gray-700">
          Balloon Payment
        </Label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
            R
          </span>
          <Input
            id="balloon-payment"
            type="text"
            placeholder="0"
            value={formatNumberWithSeparators(balloonPayment)}
            onChange={handleBalloonPaymentChange}
            className="pl-8 h-10 border-gray-300 focus:border-primary"
          />
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

      {/* Vehicle Finance Calculation Results */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="space-y-4"
      >
        <div className="text-lg font-semibold text-gray-800 mb-4">
          Vehicle Finance Calculator Results ({timeFrame === "monthly" ? "Monthly" : "Annual"} Payments)
        </div>
        
        <div className="space-y-3">
          {calculations.map((calculation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm font-medium text-gray-600">Vehicle Price:</span>
                  <span className="text-sm font-semibold text-gray-800">{formatCurrency(calculation.vehiclePrice)}</span>
                </div>
                <div className="text-lg font-bold text-primary">
                  {formatCurrency(calculation.payment)} {timeFrame === "monthly" ? "per month" : "per year"}
                </div>
              </div>
              <Button
                onClick={() => handleViewDetails(calculation)}
                variant="outline"
                size="sm"
                className="ml-4"
              >
                View Detailed Breakdown
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default VehicleFinanceCalculator;
