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
  startDate?: Date;
  payoffDate?: Date;
  amortizationSchedule?: AmortizationItem[];
}

export interface AmortizationItem {
  paymentNumber: number;
  paymentDate: Date;
  paymentAmount: number;
  principalAmount: number;
  interestAmount: number;
  remainingBalance: number;
}

export type LoanTerm = 12 | 24 | 36 | 48 | 60 | 72 | 84 | 96;

/**
 * Calculate loan repayment details
 * @param loanAmount Total loan amount in Rand
 * @param downPayment Down payment amount in Rand
 * @param loanTerm Loan term in months
 * @param interestRate Annual interest rate (as a percentage)
 * @param balloonPayment Optional balloon payment at the end of the term
 * @param startDate Optional loan start date
 * @returns Object with loan calculation details
 */
export function calculateLoanRepayment(
  loanAmount: number,
  downPayment: number = 0,
  loanTerm: number = 36,
  interestRate: number = 5,
  balloonPayment: number = 0,
  startDate: Date = new Date()
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

  // Calculate payoff date
  const payoffDate = new Date(startDate);
  payoffDate.setMonth(payoffDate.getMonth() + loanTerm);

  // Generate complete amortization schedule
  const amortizationSchedule = generateAmortizationSchedule(
    principal, 
    balloonPayment, 
    loanTerm, 
    monthlyInterestRate, 
    monthlyPayment,
    startDate
  );
  
  return {
    loanAmount,
    downPayment,
    loanTerm,
    interestRate,
    balloonPayment,
    monthlyPayment,
    totalInterest,
    totalCost,
    finalPayment,
    startDate,
    payoffDate,
    amortizationSchedule
  };
}

/**
 * Generate complete amortization schedule for the loan
 */
function generateAmortizationSchedule(
  principal: number,
  balloonPayment: number,
  loanTerm: number,
  monthlyInterestRate: number,
  monthlyPayment: number,
  startDate: Date
): AmortizationItem[] {
  const schedule: AmortizationItem[] = [];
  let remainingBalance = principal;
  const loanStartDate = new Date(startDate);
  
  for (let month = 1; month <= loanTerm; month++) {
    // Calculate payment date
    const paymentDate = new Date(loanStartDate);
    paymentDate.setMonth(loanStartDate.getMonth() + month);
    
    // Calculate interest portion of payment
    const interestForMonth = remainingBalance * monthlyInterestRate;
    
    // Calculate principal portion of payment
    let principalForMonth = monthlyPayment - interestForMonth;
    let paymentAmount = monthlyPayment;
    
    // Handle balloon payment for the final payment
    if (month === loanTerm && balloonPayment > 0) {
      principalForMonth = remainingBalance;
      paymentAmount = interestForMonth + principalForMonth;
    }
    
    // Update remaining balance
    remainingBalance -= principalForMonth;
    
    // Handle rounding errors in the final payment
    if (month === loanTerm) {
      if (Math.abs(remainingBalance) < 0.01) {
        remainingBalance = 0;
      }
    }
    
    // Add to schedule
    schedule.push({
      paymentNumber: month,
      paymentDate,
      paymentAmount,
      principalAmount: principalForMonth,
      interestAmount: interestForMonth,
      remainingBalance: Math.max(0, remainingBalance)
    });
  }
  
  return schedule;
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

/**
 * Format date to a localized string
 * @param date The date to format
 * @returns Formatted date string
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Generate a range of loan amounts with calculations
export function generateLoanAmounts(
  min: number = 5000,
  max: number = 2000000,
  step: number = 5000,
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
  balloonPayment: number = 0,
  startDate: Date = new Date()
): LoanCalculation | null {
  if (isNaN(loanAmount)) return null;
  return calculateLoanRepayment(loanAmount, downPayment, loanTerm, interestRate, balloonPayment, startDate);
}

// Get related loan amounts
export function getRelatedLoanAmounts(
  loanAmount: number,
  count: number = 6,
  loanTerm: number = 36,
  interestRate: number = 5
): LoanCalculation[] {
  const result: LoanCalculation[] = [];
  const step = 5000;
  
  // Get 3 lower and 3 higher amounts
  const halfCount = Math.floor(count / 2);
  
  // Lower amounts
  for (let i = halfCount; i > 0; i--) {
    const amount = Math.max(5000, loanAmount - (i * step));
    if (amount !== loanAmount) { // Exclude current loan amount
      result.push(calculateLoanRepayment(amount, 0, loanTerm, interestRate, 0));
    }
  }
  
  // Higher amounts
  for (let i = 1; i <= halfCount; i++) {
    const amount = loanAmount + (i * step);
    result.push(calculateLoanRepayment(amount, 0, loanTerm, interestRate, 0));
  }
  
  // Sort by loan amount and ensure we have exactly the requested count
  return result.sort((a, b) => a.loanAmount - b.loanAmount).slice(0, count);
}
