
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { calculateVAT, formatCurrency, VAT_RATE, VATResults } from "../utils/vatCalculator";

const VATCalculator = () => {
  const [amount, setAmount] = useState("");
  const [results, setResults] = useState<VATResults | null>(null);

  // Format number with thousand separators
  const formatNumberWithSeparators = (value: string): string => {
    const numericValue = value.replace(/[^0-9.]/g, '');
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // Get numeric value from formatted string
  const getNumericValue = (formattedValue: string): number => {
    return parseFloat(formattedValue.replace(/[^0-9.]/g, '')) || 0;
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setAmount(value);

    // Calculate VAT if there's a valid number
    const numericValue = getNumericValue(value);
    if (!isNaN(numericValue) && numericValue > 0) {
      const vatResults = calculateVAT(numericValue);
      setResults(vatResults);
    } else {
      setResults(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* VAT Calculator Input Card */}
      <Card className="border border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg">VAT Calculator - {VAT_RATE}% Rate</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="amount" className="text-sm font-medium text-gray-700">
              Enter Amount (R)
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                R
              </span>
              <Input
                id="amount"
                type="text"
                placeholder="Enter amount..."
                value={formatNumberWithSeparators(amount)}
                onChange={handleAmountChange}
                className="pl-8 h-10 border-gray-300 focus:border-primary"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {results && (
        <div className="grid md:grid-cols-2 gap-4">
          {/* VAT Exclusive Card */}
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg">VAT Exclusive</CardTitle>
              <p className="text-sm text-gray-600">Amount entered includes VAT</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-center p-3 bg-white rounded border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">Amount excluding VAT</div>
                <div className="font-semibold text-sm text-gray-800">{formatCurrency(results.vatExclusive.amountExcludingVAT)}</div>
              </div>
              <div className="text-center p-3 bg-white rounded border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">VAT Amount</div>
                <div className="font-semibold text-sm text-red-600">{formatCurrency(results.vatExclusive.vatAmount)}</div>
              </div>
              <div className="text-center p-3 bg-white rounded border-2 border-primary">
                <div className="text-xs text-gray-500 mb-1">Amount including VAT</div>
                <div className="font-semibold text-sm text-primary">{formatCurrency(results.vatExclusive.amountIncludingVAT)}</div>
              </div>
            </CardContent>
          </Card>

          {/* VAT Inclusive Card */}
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg">VAT Inclusive</CardTitle>
              <p className="text-sm text-gray-600">Amount entered excludes VAT</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-center p-3 bg-white rounded border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">Amount excluding VAT</div>
                <div className="font-semibold text-sm text-gray-800">{formatCurrency(results.vatInclusive.amountExcludingVAT)}</div>
              </div>
              <div className="text-center p-3 bg-white rounded border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">VAT Amount</div>
                <div className="font-semibold text-sm text-red-600">{formatCurrency(results.vatInclusive.vatAmount)}</div>
              </div>
              <div className="text-center p-3 bg-white rounded border-2 border-primary">
                <div className="text-xs text-gray-500 mb-1">Amount including VAT</div>
                <div className="font-semibold text-sm text-primary">{formatCurrency(results.vatInclusive.amountIncludingVAT)}</div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default VATCalculator;
