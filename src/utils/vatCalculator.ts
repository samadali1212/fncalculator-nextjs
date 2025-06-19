
export const VAT_RATE = 15.5;

export interface VATCalculation {
  amountExcludingVAT: number;
  vatAmount: number;
  amountIncludingVAT: number;
}

export interface VATResults {
  vatExclusive: VATCalculation;
  vatInclusive: VATCalculation;
}

export const formatCurrency = (value: number): string => {
  const parts = value.toFixed(2).split(".");
  const formattedValue = `R ${parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ")}${parts[1] ? "," + parts[1] : ""}`;
  return formattedValue;
};

export const calculateVAT = (amount: number): VATResults => {
  const vatMultiplier = 1 + (VAT_RATE / 100);
  const vatDecimal = VAT_RATE / 100;

  // VAT Exclusive Calculation (amount entered includes VAT)
  const excludingVAT = amount / vatMultiplier;
  const vatAmountExclusive = amount - excludingVAT;

  // VAT Inclusive Calculation (amount entered excludes VAT)
  const vatAmountInclusive = amount * vatDecimal;
  const includingVAT = amount + vatAmountInclusive;

  return {
    vatExclusive: {
      amountExcludingVAT: excludingVAT,
      vatAmount: vatAmountExclusive,
      amountIncludingVAT: amount
    },
    vatInclusive: {
      amountExcludingVAT: amount,
      vatAmount: vatAmountInclusive,
      amountIncludingVAT: includingVAT
    }
  };
};
