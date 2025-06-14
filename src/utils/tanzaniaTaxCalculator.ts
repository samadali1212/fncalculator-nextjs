
export interface TanzaniaTaxCalculationResult {
  grossIncome: number;
  taxableIncome: number;
  taxBeforeRebates: number;
  taxRebates: number;
  netTax: number;
  netIncome: number;
  effectiveTaxRate: number;
  marginalTaxRate: number;
}

export type TanzaniaTimeFrame = "monthly" | "yearly";

export const formatTanzaniaCurrency = (amount: number): string => {
  return `TSh ${amount.toLocaleString('en-US')}`;
};

export const calculateTanzaniaTax = (monthlyIncome: number): number => {
  if (monthlyIncome <= 270000) {
    return 0;
  } else if (monthlyIncome <= 520000) {
    return (monthlyIncome - 270000) * 0.08;
  } else if (monthlyIncome <= 760000) {
    return 20000 + (monthlyIncome - 520000) * 0.20;
  } else if (monthlyIncome <= 1000000) {
    return 68000 + (monthlyIncome - 760000) * 0.25;
  } else {
    return 128000 + (monthlyIncome - 1000000) * 0.30;
  }
};

export const getMarginalTaxRate = (monthlyIncome: number): number => {
  if (monthlyIncome <= 270000) {
    return 0;
  } else if (monthlyIncome <= 520000) {
    return 8;
  } else if (monthlyIncome <= 760000) {
    return 20;
  } else if (monthlyIncome <= 1000000) {
    return 25;
  } else {
    return 30;
  }
};

export const getTanzaniaTaxCalculation = (
  income: number,
  timeFrame: TanzaniaTimeFrame = "monthly"
): TanzaniaTaxCalculationResult => {
  const monthlyIncome = timeFrame === "yearly" ? income / 12 : income;
  const yearlyIncome = timeFrame === "monthly" ? income * 12 : income;
  
  const monthlyTax = calculateTanzaniaTax(monthlyIncome);
  const yearlyTax = monthlyTax * 12;
  
  const taxAmount = timeFrame === "monthly" ? monthlyTax : yearlyTax;
  const netIncome = income - taxAmount;
  const effectiveTaxRate = income > 0 ? (taxAmount / income) * 100 : 0;
  const marginalTaxRate = getMarginalTaxRate(monthlyIncome);
  
  return {
    grossIncome: income,
    taxableIncome: income,
    taxBeforeRebates: taxAmount,
    taxRebates: 0,
    netTax: taxAmount,
    netIncome,
    effectiveTaxRate,
    marginalTaxRate
  };
};

export const generateTanzaniaTaxCalculations = (
  minIncome: number,
  maxIncome: number,
  step: number,
  timeFrame: TanzaniaTimeFrame = "monthly"
): TanzaniaTaxCalculationResult[] => {
  const calculations: TanzaniaTaxCalculationResult[] = [];
  
  for (let income = minIncome; income <= maxIncome; income += step) {
    calculations.push(getTanzaniaTaxCalculation(income, timeFrame));
  }
  
  return calculations;
};

export const convertTanzaniaIncome = (income: number, fromTimeFrame: TanzaniaTimeFrame): number => {
  return fromTimeFrame === "monthly" ? income * 12 : Math.round(income / 12);
};
