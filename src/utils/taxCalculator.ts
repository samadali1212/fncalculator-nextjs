interface TaxBracket {
  min: number;
  max: number | null;
  rate: number;
  baseAmount: number;
  thresholdAmount: number;
}

interface Rebate {
  primary: number;
  secondary: number;
  tertiary: number;
}

interface AgeThreshold {
  below65: number;
  age65to75: number;
  above75: number;
}

// Tax brackets are annual figures
const annualTaxBrackets: TaxBracket[] = [
  { min: 0, max: 237100, rate: 0.18, baseAmount: 0, thresholdAmount: 0 },
  { min: 237101, max: 370500, rate: 0.26, baseAmount: 42678, thresholdAmount: 237100 },
  { min: 370501, max: 512800, rate: 0.31, baseAmount: 77362, thresholdAmount: 370500 },
  { min: 512801, max: 673000, rate: 0.36, baseAmount: 121475, thresholdAmount: 512800 },
  { min: 673001, max: 857900, rate: 0.39, baseAmount: 179147, thresholdAmount: 673000 },
  { min: 857901, max: 1817000, rate: 0.41, baseAmount: 251258, thresholdAmount: 857900 },
  { min: 1817001, max: null, rate: 0.45, baseAmount: 644489, thresholdAmount: 1817000 },
];

// Convert annual tax brackets to monthly by dividing by 12
const monthlyTaxBrackets: TaxBracket[] = annualTaxBrackets.map(bracket => ({
  min: Math.floor(bracket.min / 12),
  max: bracket.max ? Math.floor(bracket.max / 12) : null,
  rate: bracket.rate,
  baseAmount: Math.floor(bracket.baseAmount / 12),
  thresholdAmount: Math.floor(bracket.thresholdAmount / 12)
}));

// Annual rebates
const annualRebates: Rebate = {
  primary: 17235,
  secondary: 9444,
  tertiary: 3145,
};

// Monthly rebates (annual / 12)
const monthlyRebates: Rebate = {
  primary: Math.floor(annualRebates.primary / 12),
  secondary: Math.floor(annualRebates.secondary / 12),
  tertiary: Math.floor(annualRebates.tertiary / 12),
};

// Annual thresholds
const annualAgeThresholds: AgeThreshold = {
  below65: 95750,
  age65to75: 148217,
  above75: 165689,
};

// Monthly thresholds
const monthlyAgeThresholds: AgeThreshold = {
  below65: Math.floor(annualAgeThresholds.below65 / 12),
  age65to75: Math.floor(annualAgeThresholds.age65to75 / 12),
  above75: Math.floor(annualAgeThresholds.above75 / 12),
};

export type AgeGroup = "below65" | "age65to75" | "above75";
export type TimeFrame = "monthly" | "yearly";

export interface TaxCalculationResult {
  grossIncome: number;
  taxableIncome: number;
  taxBeforeRebates: number;
  taxRebates: number;
  netTax: number;
  netIncome: number;
  effectiveTaxRate: number;
  marginalTaxRate: number;
  bracket: TaxBracket;
  timeFrame: TimeFrame;
}

/**
 * Calculate income tax based on the South African PAYE system
 * @param income The income amount (monthly or annual)
 * @param ageGroup Age group for rebate calculation
 * @param timeFrame Whether the income is monthly or yearly
 * @returns Object with tax calculation details
 */
export function calculateIncomeTax(
  income: number,
  ageGroup: AgeGroup = "below65",
  timeFrame: TimeFrame = "monthly"
): TaxCalculationResult {
  // Determine if we're using monthly or annual figures
  const taxBrackets = timeFrame === "monthly" ? monthlyTaxBrackets : annualTaxBrackets;
  const rebates = timeFrame === "monthly" ? monthlyRebates : annualRebates;
  
  // Determine the applicable tax bracket
  const bracket = taxBrackets.find(
    (bracket) => 
      income >= bracket.min && 
      (bracket.max === null || income <= bracket.max)
  ) || taxBrackets[0];
  
  // Calculate tax before rebates
  const taxBeforeRebates = 
    bracket.baseAmount + 
    bracket.rate * (income - bracket.thresholdAmount);
  
  // Calculate applicable rebates based on age group
  let taxRebates = rebates.primary;
  if (ageGroup === "age65to75") {
    taxRebates += rebates.secondary;
  } else if (ageGroup === "above75") {
    taxRebates += rebates.secondary + rebates.tertiary;
  }
  
  // Calculate net tax (cannot be less than 0)
  const netTax = Math.max(0, taxBeforeRebates - taxRebates);
  
  // Calculate net income after tax
  const netIncome = income - netTax;
  
  // Calculate effective tax rate
  const effectiveTaxRate = income > 0 ? (netTax / income) * 100 : 0;
  
  return {
    grossIncome: income,
    taxableIncome: income, // Assuming no deductions for simplicity
    taxBeforeRebates,
    taxRebates,
    netTax,
    netIncome,
    effectiveTaxRate,
    marginalTaxRate: bracket.rate * 100,
    bracket,
    timeFrame
  };
}

/**
 * Generate a range of income values with tax calculations
 * @param min Minimum income to calculate
 * @param max Maximum income to calculate
 * @param step Step size between income values
 * @param ageGroup Age group for rebate calculation
 * @param timeFrame Whether the income is monthly or yearly
 * @returns Array of tax calculation results
 */
export function generateTaxCalculations(
  min: number = 4000,
  max: number = 600000,
  step: number = 500,
  ageGroup: AgeGroup = "below65",
  timeFrame: TimeFrame = "monthly"
): TaxCalculationResult[] {
  const results: TaxCalculationResult[] = [];
  
  for (let income = min; income <= max; income += step) {
    results.push(calculateIncomeTax(income, ageGroup, timeFrame));
  }
  
  return results;
}

/**
 * Get tax calculation for a specific income
 * @param income Income amount
 * @param ageGroup Age group for rebate calculation
 * @param timeFrame Whether the income is monthly or yearly
 * @returns Tax calculation result or null if invalid income
 */
export function getTaxCalculation(
  income: number,
  ageGroup: AgeGroup = "below65",
  timeFrame: TimeFrame = "monthly"
): TaxCalculationResult | null {
  if (isNaN(income) || income < 0) return null;
  return calculateIncomeTax(income, ageGroup, timeFrame);
}

/**
 * Formats a monetary value with the South African Rand currency symbol
 * @param value Monetary value to format
 * @param fractionDigits Number of fraction digits to show
 * @returns Formatted currency string
 */
export function formatCurrency(value: number, fractionDigits: number = 0): string {
  // Use 'en-ZA' locale but replace the comma with a space for thousand separators
  const formatted = new Intl.NumberFormat('en-ZA', { 
    style: 'currency', 
    currency: 'ZAR',
    maximumFractionDigits: fractionDigits
  }).format(value);
  
  // Replace commas with spaces for thousand separators (South African convention)
  return formatted.replace(/,/g, ' ');
}

/**
 * Convert between monthly and yearly income
 * @param amount The amount to convert
 * @param fromTimeFrame The current timeframe of the amount
 * @returns The converted amount
 */
export function convertIncome(amount: number, fromTimeFrame: TimeFrame): number {
  return fromTimeFrame === "monthly" ? amount * 12 : Math.round(amount / 12);
}
