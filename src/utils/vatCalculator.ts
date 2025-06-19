
/**
 * VAT Calculator utility functions for South Africa
 * Current VAT rate: 15%
 */

export interface VATCalculation {
  originalAmount: number;
  vatExclusive: {
    amountExcludingVAT: number;
    vatAmount: number;
    amountIncludingVAT: number;
  };
  vatInclusive: {
    amountExcludingVAT: number;
    vatAmount: number;
    amountIncludingVAT: number;
  };
}

export const VAT_RATE = 0.15; // 15%
export const VAT_MULTIPLIER = 1 + VAT_RATE; // 1.15

/**
 * Calculate VAT for a given amount
 */
export const calculateVAT = (amount: number): VATCalculation => {
  // VAT Exclusive Calculation (amount is VAT inclusive)
  const excludingVATFromInclusive = amount / VAT_MULTIPLIER;
  const vatAmountExclusive = amount - excludingVATFromInclusive;

  // VAT Inclusive Calculation (amount is VAT exclusive)
  const vatAmountInclusive = amount * VAT_RATE;
  const includingVATFromExclusive = amount + vatAmountInclusive;

  return {
    originalAmount: amount,
    vatExclusive: {
      amountExcludingVAT: excludingVATFromInclusive,
      vatAmount: vatAmountExclusive,
      amountIncludingVAT: amount,
    },
    vatInclusive: {
      amountExcludingVAT: amount,
      vatAmount: vatAmountInclusive,
      amountIncludingVAT: includingVATFromExclusive,
    },
  };
};

/**
 * Format currency in South African Rand format
 */
export const formatVATCurrency = (amount: number): string => {
  const parts = amount.toFixed(2).split(".");
  const formattedValue = `R ${parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ")}${parts[1] ? "," + parts[1] : ""}`;
  return formattedValue;
};

/**
 * Generate VAT calculations for display table
 */
export const generateVATCalculations = (
  minAmount: number,
  maxAmount: number,
  step: number
): VATCalculation[] => {
  const results: VATCalculation[] = [];
  
  for (let amount = minAmount; amount <= maxAmount; amount += step) {
    results.push(calculateVAT(amount));
  }
  
  return results;
};
