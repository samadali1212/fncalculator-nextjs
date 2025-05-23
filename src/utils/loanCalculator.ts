
export interface LoanCalculation {
  loanAmount: number;
  downPayment: number;
  loanTerm: number;
  interestRate: number;
  balloonPayment: number;
  monthlyPayment: number;
  totalInterest: number;
  totalCost: number;
  finalPayment: number;
}

export type LoanTerm = 12 | 24 | 36 | 48 | 60 | 72 | 84 | 96;

/**
 * Calculate loan repayment details
 * @param loanAmount Total loan amount in Rand
 * @param downPayment Down payment amount in Rand
 * @param loanTerm Loan term in months
 * @param interestRate Annual interest rate (as a percentage)
 * @param balloonPayment Optional balloon payment at the end of the term
 * @returns Object with loan calculation details
 */
export function calculateLoanRepayment(
  loanAmount: number,
  downPayment: number = 0,
  loanTerm: number = 36,
  interestRate: number = 5,
  balloonPayment: number = 0
): LoanCalculation {
  // Calculate principal loan amount after down payment
  const principal = loanAmount - downPayment;
  
  // Calculate monthly interest rate
  const monthlyInterestRate = (interestRate / 100) / 12;
  
  // Calculate number of monthly payments
  const numPayments = loanTerm;
  
  // Calculate monthly payment using the formula
  const monthlyPayment = principal > 0 && monthlyInterestRate > 0 
    ? (principal - balloonPayment) * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numPayments)) / (Math.pow(1 + monthlyInterestRate, numPayments) - 1)
    : (principal - balloonPayment) / numPayments;  // Simple division if no interest
  
  // Calculate total interest
  const totalInterest = (monthlyPayment * numPayments) - (principal - balloonPayment);
  
  // Calculate total cost of loan
  const totalCost = (monthlyPayment * numPayments) + balloonPayment;
  
  // Calculate final payment
  const finalPayment = monthlyPayment + balloonPayment;
  
  return {
    loanAmount,
    downPayment,
    loanTerm,
    interestRate,
    balloonPayment,
    monthlyPayment,
    totalInterest,
    totalCost,
    finalPayment
  };
}

/**
 * Format a value as currency with ZAR symbol and spaces as thousand separators
 * @param value The number to format
 * @returns Formatted string with currency symbol and spaces as thousand separators
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-ZA', { 
    style: 'currency', 
    currency: 'ZAR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value).replace(/,/g, ' ');
}

/**
 * Parse a currency string into a number
 * @param currencyString The currency string to parse
 * @returns The parsed number value
 */
export function parseCurrency(currencyString: string): number {
  return parseFloat(currencyString.replace(/[^0-9.-]+/g, "")) || 0;
}

// Generate a range of loan amounts with calculations
export function generateLoanAmounts(
  min: number = 10000,
  max: number = 1000000,
  step: number = 10000,
  loanTerm: number = 36,
  interestRate: number = 5
): LoanCalculation[] {
  const loans: LoanCalculation[] = [];
  
  for (let amount = min; amount <= max; amount += step) {
    loans.push(calculateLoanRepayment(amount, 0, loanTerm, interestRate, 0));
  }
  
  return loans;
}

// Get a specific loan calculation by its amount
export function getLoanCalculation(
  loanAmount: number,
  downPayment: number = 0,
  loanTerm: number = 36,
  interestRate: number = 5,
  balloonPayment: number = 0
): LoanCalculation | null {
  if (isNaN(loanAmount)) return null;
  return calculateLoanRepayment(loanAmount, downPayment, loanTerm, interestRate, balloonPayment);
}
