
interface HomeLoanCalculationResult {
  loanAmount: number;
  downPayment: number;
  interestRate: number;
  loanTerm: number;
  payment: number;
  totalInterest: number;
  totalRepayment: number;
  termDisplay: string;
}

export type HomeLoanTimeFrame = "monthly" | "yearly";

/**
 * Calculate home loan payment using the standard mortgage payment formula
 * @param principal Loan amount (after down payment)
 * @param annualRate Annual interest rate as a percentage
 * @param termInYears Loan term in years
 * @returns Monthly payment amount
 */
function calculateMonthlyPayment(principal: number, annualRate: number, termInYears: number): number {
  const monthlyRate = annualRate / 100 / 12;
  const termInMonths = termInYears * 12;
  
  if (monthlyRate === 0) {
    return principal / termInMonths;
  }
  
  const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, termInMonths)) / 
                  (Math.pow(1 + monthlyRate, termInMonths) - 1);
  return Math.round(payment);
}

/**
 * Calculate home loan details for a given amount, down payment, rate, and term
 * @param homePrice Total home price
 * @param downPayment Down payment amount
 * @param interestRate Annual interest rate as percentage
 * @param loanTermYears Loan term in years
 * @param timeFrame Whether to show monthly or yearly payments
 * @returns Home loan calculation result
 */
export function calculateHomeLoan(
  homePrice: number, 
  downPayment: number,
  interestRate: number, 
  loanTermYears: number,
  timeFrame: HomeLoanTimeFrame = "monthly"
): HomeLoanCalculationResult {
  const loanAmount = homePrice - downPayment;
  const monthlyPayment = calculateMonthlyPayment(loanAmount, interestRate, loanTermYears);
  const totalRepayment = monthlyPayment * loanTermYears * 12;
  const totalInterest = totalRepayment - loanAmount;
  
  // For yearly timeframe, multiply monthly payment by 12
  const payment = timeFrame === "yearly" ? monthlyPayment * 12 : monthlyPayment;
  
  const termDisplay = `${loanTermYears} years`;

  return {
    loanAmount: homePrice,
    downPayment,
    interestRate,
    loanTerm: loanTermYears,
    payment,
    totalInterest,
    totalRepayment,
    termDisplay
  };
}

/**
 * Generate a range of home loan calculations
 * @param min Minimum home price
 * @param max Maximum home price
 * @param step Step size between amounts
 * @param interestRate Interest rate percentage
 * @param loanTermYears Loan term in years
 * @param downPayment Down payment amount
 * @param timeFrame Whether to show monthly or yearly payments
 * @returns Array of home loan calculation results
 */
export function generateHomeLoanCalculations(
  min: number = 300000,
  max: number = 5000000,
  step: number = 100000,
  interestRate: number = 10.5,
  loanTermYears: number = 30,
  downPayment: number = 0,
  timeFrame: HomeLoanTimeFrame = "monthly"
): HomeLoanCalculationResult[] {
  const results: HomeLoanCalculationResult[] = [];
  
  for (let amount = min; amount <= max; amount += step) {
    results.push(calculateHomeLoan(amount, downPayment, interestRate, loanTermYears, timeFrame));
  }
  
  return results;
}

/**
 * Get home loan calculation for specific parameters
 * @param homePrice Home price
 * @param downPayment Down payment amount
 * @param interestRate Interest rate percentage
 * @param loanTermYears Loan term in years
 * @param timeFrame Whether to show monthly or yearly payments
 * @returns Home loan calculation result or null if invalid
 */
export function getHomeLoanCalculation(
  homePrice: number,
  downPayment: number,
  interestRate: number,
  loanTermYears: number,
  timeFrame: HomeLoanTimeFrame = "monthly"
): HomeLoanCalculationResult | null {
  if (isNaN(homePrice) || homePrice <= 0) return null;
  if (isNaN(downPayment) || downPayment < 0) return null;
  if (downPayment >= homePrice) return null;
  return calculateHomeLoan(homePrice, downPayment, interestRate, loanTermYears, timeFrame);
}

/**
 * Formats a monetary value with the South African Rand currency symbol
 * @param value Monetary value to format
 * @param fractionDigits Number of fraction digits to show
 * @returns Formatted currency string with ZAR
 */
export function formatCurrency(value: number, fractionDigits: number = 0): string {
  // Use South African Rand formatting
  const formatted = new Intl.NumberFormat('en-ZA', { 
    style: 'currency', 
    currency: 'ZAR',
    maximumFractionDigits: fractionDigits
  }).format(value);
  
  // Replace commas with spaces for thousand separators (South African convention)
  return formatted.replace(/,/g, ' ');
}
