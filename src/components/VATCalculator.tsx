
import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { 
  calculateVAT,
  formatVATCurrency,
  VAT_RATE,
  VATCalculation
} from "../utils/vatCalculator";

const VATCalculator = () => {
  const [customAmount, setCustomAmount] = useState("10000");
  
  // Format number with thousand separators
  const formatNumberWithSeparators = (value: string): string => {
    const numericValue = value.replace(/[^0-9.]/g, '');
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  // Get numeric value from formatted string
  const getNumericValue = (formattedValue: string): number => {
    return parseFloat(formattedValue.replace(/[^0-9.]/g, '')) || 0;
  };
  
  // Calculate custom VAT if user enters an amount
  const numericCustomAmount = getNumericValue(customAmount);
  const customVATResult = numericCustomAmount > 0 
    ? calculateVAT(numericCustomAmount)
    : null;

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, ''); // Only allow numbers and decimal
    setCustomAmount(value);
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
        <Label htmlFor="custom-amount" className="text-sm font-medium text-gray-700">
          Amount (ZAR)
        </Label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
            R
          </span>
          <Input
            id="custom-amount"
            type="text"
            placeholder="Enter amount..."
            value={formatNumberWithSeparators(customAmount)}
            onChange={handleCustomAmountChange}
            className="pl-12 h-10 border-gray-300 focus:border-primary"
          />
        </div>
      </div>

      {customVATResult && (
        <>
          {/* VAT Calculation Results */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            
            {/* VAT Exclusive Section */}
            <div className="bg-white rounded border border-gray-100 p-4">
              <div className="text-sm font-medium text-gray-700 mb-3">VAT Exclusive (Amount is VAT Inclusive):</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="text-center p-3 bg-gray-50 rounded border border-gray-100">
                  <div className="text-xs text-gray-500 mb-1">Amount Excluding VAT</div>
                  <div className="font-semibold text-sm text-gray-800">{formatVATCurrency(customVATResult.vatExclusive.amountExcludingVAT)}</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded border border-gray-100">
                  <div className="text-xs text-gray-500 mb-1">VAT Amount</div>
                  <div className="font-semibold text-sm text-red-600">{formatVATCurrency(customVATResult.vatExclusive.vatAmount)}</div>
                </div>
                <div className="text-center p-3 bg-white rounded border-2 border-primary">
                  <div className="text-xs text-gray-500 mb-1">Amount Including VAT</div>
                  <div className="font-semibold text-sm text-primary">{formatVATCurrency(customVATResult.vatExclusive.amountIncludingVAT)}</div>
                </div>
              </div>
            </div>

            {/* VAT Inclusive Section */}
            <div className="bg-white rounded border border-gray-100 p-4">
              <div className="text-sm font-medium text-gray-700 mb-3">VAT Inclusive (Amount is VAT Exclusive):</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="text-center p-3 bg-white rounded border-2 border-primary">
                  <div className="text-xs text-gray-500 mb-1">Amount Excluding VAT</div>
                  <div className="font-semibold text-sm text-primary">{formatVATCurrency(customVATResult.vatInclusive.amountExcludingVAT)}</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded border border-gray-100">
                  <div className="text-xs text-gray-500 mb-1">VAT Amount</div>
                  <div className="font-semibold text-sm text-red-600">{formatVATCurrency(customVATResult.vatInclusive.vatAmount)}</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded border border-gray-100">
                  <div className="text-xs text-gray-500 mb-1">Amount Including VAT</div>
                  <div className="font-semibold text-sm text-gray-800">{formatVATCurrency(customVATResult.vatInclusive.amountIncludingVAT)}</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-1 bg-white rounded border border-gray-200 text-xs">
                <span className="text-gray-600">VAT Rate: </span>
                <span className="font-medium text-gray-800">{(VAT_RATE * 100).toFixed(1)}%</span>
              </div>
            </div>
          </motion.div>

          {/* Dynamic Paragraph */}
          <div className="text-sm text-gray-600 leading-relaxed">
            <p>
              Your amount of {formatVATCurrency(customVATResult.originalAmount)} can be treated as either VAT inclusive or VAT exclusive. 
              If VAT inclusive, the excluding amount is {formatVATCurrency(customVATResult.vatExclusive.amountExcludingVAT)} with VAT of {formatVATCurrency(customVATResult.vatExclusive.vatAmount)}. 
              If VAT exclusive, the including amount is {formatVATCurrency(customVATResult.vatInclusive.amountIncludingVAT)} with VAT of {formatVATCurrency(customVATResult.vatInclusive.vatAmount)}.
              Current South African VAT rate is {(VAT_RATE * 100).toFixed(1)}%.
            </p>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default VATCalculator;
