
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

const taxBrackets: TaxBracket[] = [
  { min: 0, max: 237100, rate: 0.18, baseAmount: 0, thresholdAmount: 0 },
  { min: 237101, max: 370500, rate: 0.26, baseAmount: 42678, thresholdAmount: 237100 },
  { min: 370501, max: 512800, rate: 0.31, baseAmount: 77362, thresholdAmount: 370500 },
  { min: 512801, max: 673000, rate: 0.36, baseAmount: 121475, thresholdAmount: 512800 },
  { min: 673001, max: 857900, rate: 0.39, baseAmount: 179147, thresholdAmount: 673000 },
  { min: 857901, max: 1817000, rate: 0.41, baseAmount: 251258, thresholdAmount: 857900 },
  { min: 1817001, max: null, rate: 0.45, baseAmount: 644489, thresholdAmount: 1817000 },
];

const rebates: Rebate = {
  primary: 17235,
  secondary: 9444,
  tertiary: 3145,
};

const ageThresholds: AgeThreshold = {
  below65: 95750,
  age65to75: 148217,
  above75: 165689,
};

export type AgeGroup = "below65" | "age65to75" | "above75";

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
}

/**
 * Calculate income tax based on the South African PAYE system
 * @param grossIncome The annual gross income in Rand
 * @param ageGroup Age group for rebate calculation
 * @returns Object with tax calculation details
 */
export function calculateIncomeTax(
  grossIncome: number,
  ageGroup: AgeGroup = "below65"
): TaxCalculationResult {
  // Determine the applicable tax bracket
  const bracket = taxBrackets.find(
    (bracket) => 
      grossIncome >= bracket.min && 
      (bracket.max === null || grossIncome <= bracket.max)
  ) || taxBrackets[0];
  
  // Calculate tax before rebates
  const taxBeforeRebates = 
    bracket.baseAmount + 
    bracket.rate * (grossIncome - bracket.thresholdAmount);
  
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
  const netIncome = grossIncome - netTax;
  
  // Calculate effective tax rate
  const effectiveTaxRate = grossIncome > 0 ? (netTax / grossIncome) * 100 : 0;
  
  return {
    grossIncome,
    taxableIncome: grossIncome, // Assuming no deductions for simplicity
    taxBeforeRebates,
    taxRebates,
    netTax,
    netIncome,
    effectiveTaxRate,
    marginalTaxRate: bracket.rate * 100,
    bracket
  };
}

/**
 * Generate a range of gross incomes with tax calculations
 * @param min Minimum gross annual income to calculate
 * @param max Maximum gross annual income to calculate
 * @param step Step size between income values
 * @param ageGroup Age group for rebate calculation
 * @returns Array of tax calculation results
 */
export function generateTaxCalculations(
  min: number = 100000,
  max: number = 2000000,
  step: number = 50000,
  ageGroup: AgeGroup = "below65"
): TaxCalculationResult[] {
  const results: TaxCalculationResult[] = [];
  
  for (let income = min; income <= max; income += step) {
    results.push(calculateIncomeTax(income, ageGroup));
  }
  
  return results;
}

/**
 * Get tax calculation for a specific income
 * @param grossIncome Annual gross income
 * @param ageGroup Age group for rebate calculation
 * @returns Tax calculation result or null if invalid income
 */
export function getTaxCalculation(
  grossIncome: number,
  ageGroup: AgeGroup = "below65"
): TaxCalculationResult | null {
  if (isNaN(grossIncome) || grossIncome < 0) return null;
  return calculateIncomeTax(grossIncome, ageGroup);
}

/**
 * Formats a monetary value with the South African Rand currency symbol
 * @param value Monetary value to format
 * @param fractionDigits Number of fraction digits to show
 * @returns Formatted currency string
 */
export function formatCurrency(value: number, fractionDigits: number = 0): string {
  return new Intl.NumberFormat('en-ZA', { 
    style: 'currency', 
    currency: 'ZAR',
    maximumFractionDigits: fractionDigits
  }).format(value);
}
