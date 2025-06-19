
interface LoanCalculationResult {
  loanAmount: number;
  interestRate: number;
  loanTerm: number;
  payment: number;
  totalInterest: number;
  totalRepayment: number;
  termDisplay: string;
}

export type CrdbTimeFrame = "monthly" | "yearly";

/**
 * Calculate loan payment using the standard loan payment formula
 * @param principal Loan amount
 * @param annualRate Annual interest rate as a percentage
 * @param termInMonths Loan term in months
 * @returns Monthly payment amount
 */
function calculateMonthlyPayment(principal: number, annualRate: number, termInMonths: number): number {
  const monthlyRate = annualRate / 100 / 12;
  const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, termInMonths)) / 
                  (Math.pow(1 + monthlyRate, termInMonths) - 1);
  return Math.round(payment);
}

/**
 * Calculate loan details for a given amount, rate, and term
 * @param loanAmount Principal amount
 * @param interestRate Annual interest rate as percentage
 * @param loanTermMonths Loan term in months
 * @param timeFrame Whether to show monthly or yearly payments
 * @returns Loan calculation result
 */
export function calculateCrdbLoan(
  loanAmount: number, 
  interestRate: number, 
  loanTermMonths: number,
  timeFrame: CrdbTimeFrame = "monthly"
): LoanCalculationResult {
  const monthlyPayment = calculateMonthlyPayment(loanAmount, interestRate, loanTermMonths);
  const totalRepayment = monthlyPayment * loanTermMonths;
  const totalInterest = totalRepayment - loanAmount;
  
  // For yearly timeframe, multiply monthly payment by 12
  const payment = timeFrame === "yearly" ? monthlyPayment * 12 : monthlyPayment;
  
  const termDisplay = timeFrame === "yearly" 
    ? `${Math.round(loanTermMonths / 12)} years`
    : `${loanTermMonths} months`;

  return {
    loanAmount,
    interestRate,
    loanTerm: loanTermMonths,
    payment,
    totalInterest,
    totalRepayment,
    termDisplay
  };
}

/**
 * Generate a range of loan calculations
 * @param min Minimum loan amount
 * @param max Maximum loan amount
 * @param step Step size between amounts
 * @param interestRate Interest rate percentage
 * @param loanTermMonths Loan term in months
 * @param timeFrame Whether to show monthly or yearly payments
 * @returns Array of loan calculation results
 */
export function generateCrdbLoanCalculations(
  min: number = 1000000,
  max: number = 50000000,
  step: number = 1000000,
  interestRate: number = 13,
  loanTermMonths: number = 36,
  timeFrame: CrdbTimeFrame = "monthly"
): LoanCalculationResult[] {
  const results: LoanCalculationResult[] = [];
  
  for (let amount = min; amount <= max; amount += step) {
    results.push(calculateCrdbLoan(amount, interestRate, loanTermMonths, timeFrame));
  }
  
  return results;
}

/**
 * Get loan calculation for a specific amount
 * @param loanAmount Loan amount
 * @param interestRate Interest rate percentage
 * @param loanTermMonths Loan term in months
 * @param timeFrame Whether to show monthly or yearly payments
 * @returns Loan calculation result or null if invalid
 */
export function getCrdbLoanCalculation(
  loanAmount: number,
  interestRate: number,
  loanTermMonths: number,
  timeFrame: CrdbTimeFrame = "monthly"
): LoanCalculationResult | null {
  if (isNaN(loanAmount) || loanAmount <= 0) return null;
  return calculateCrdbLoan(loanAmount, interestRate, loanTermMonths, timeFrame);
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

/**
 * Convert between monthly and yearly amounts
 * @param amount The amount to convert
 * @param fromTimeFrame The current timeframe of the amount
 * @returns The converted amount
 */
export function convertLoanAmount(amount: number, fromTimeFrame: CrdbTimeFrame): number {
  return fromTimeFrame === "monthly" ? amount * 12 : Math.round(amount / 12);
}
