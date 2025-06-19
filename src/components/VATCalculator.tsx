
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { calculateVAT, formatCurrency, VAT_RATE, VATResults } from "../utils/vatCalculator";

const VATCalculator = () => {
  const [amount, setAmount] = useState("");
  const [results, setResults] = useState<VATResults | null>(null);

  const handleAmountChange = (value: string) => {
    // Remove all non-digit and non-decimal characters
    const cleanValue = value.replace(/[^\d.]/g, "");
    
    // Format with R prefix if there's a value
    const formattedValue = cleanValue === "" ? "" : `R ${cleanValue}`;
    setAmount(formattedValue);

    // Calculate VAT if there's a valid number
    const numericValue = parseFloat(cleanValue);
    if (!isNaN(numericValue) && numericValue > 0) {
      const vatResults = calculateVAT(numericValue);
      setResults(vatResults);
    } else {
      setResults(null);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>VAT Calculator - {VAT_RATE}% Rate</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="amount">Enter Amount</Label>
            <Input
              id="amount"
              type="text"
              value={amount}
              onChange={(e) => handleAmountChange(e.target.value)}
              placeholder="R 0.00"
              className="text-lg"
            />
          </div>
        </CardContent>
      </Card>

      {results && (
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">VAT Exclusive</CardTitle>
              <p className="text-sm text-gray-600">Amount entered includes VAT</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-1">
                <div className="text-sm text-gray-600">Amount excluding VAT:</div>
                <div className="font-medium">{formatCurrency(results.vatExclusive.amountExcludingVAT)}</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-gray-600">VAT Amount:</div>
                <div className="font-medium">{formatCurrency(results.vatExclusive.vatAmount)}</div>
              </div>
              <div className="space-y-1 border-t pt-2">
                <div className="text-sm text-gray-600">Amount including VAT:</div>
                <div className="font-semibold text-lg">{formatCurrency(results.vatExclusive.amountIncludingVAT)}</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">VAT Inclusive</CardTitle>
              <p className="text-sm text-gray-600">Amount entered excludes VAT</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-1">
                <div className="text-sm text-gray-600">Amount excluding VAT:</div>
                <div className="font-medium">{formatCurrency(results.vatInclusive.amountExcludingVAT)}</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-gray-600">VAT Amount:</div>
                <div className="font-medium">{formatCurrency(results.vatInclusive.vatAmount)}</div>
              </div>
              <div className="space-y-1 border-t pt-2">
                <div className="text-sm text-gray-600">Amount including VAT:</div>
                <div className="font-semibold text-lg">{formatCurrency(results.vatInclusive.amountIncludingVAT)}</div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default VATCalculator;
