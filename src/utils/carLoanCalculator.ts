
interface CarLoanCalculationResult {
  vehiclePrice: number;
  downPayment: number;
  loanAmount: number;
  interestRate: number;
  loanTerm: number;
  balloonPayment: number;
  payment: number;
  totalInterest: number;
  totalRepayment: number;
  termDisplay: string;
}

export type CarLoanTimeFrame = "monthly" | "yearly";

/**
 * Calculate car loan payment using the standard loan payment formula with balloon payment
 * @param vehiclePrice Vehicle purchase price
 * @param downPayment Down payment amount
 * @param annualRate Annual interest rate as a percentage
 * @param termInMonths Loan term in months
 * @param balloonPayment Balloon payment amount
 * @returns Monthly payment amount
 */
function calculateCarLoanPayment(
  vehiclePrice: number, 
  downPayment: number, 
  annualRate: number, 
  termInMonths: number, 
  balloonPayment: number
): number {
  const loanAmount = vehiclePrice - downPayment;
  const monthlyRate = annualRate / 100 / 12;
  
  if (monthlyRate === 0) {
    return (loanAmount - balloonPayment) / termInMonths;
  }
  
  // Calculate present value of balloon payment
  const pvBalloon = balloonPayment / Math.pow(1 + monthlyRate, termInMonths);
  
  // Calculate payment on remaining amount
  const remainingAmount = loanAmount - pvBalloon;
  const payment = remainingAmount * (monthlyRate * Math.pow(1 + monthlyRate, termInMonths)) / 
                  (Math.pow(1 + monthlyRate, termInMonths) - 1);
  
  return Math.round(payment);
}

/**
 * Calculate car loan details for a given amount, rate, and term
 * @param vehiclePrice Vehicle purchase price
 * @param downPayment Down payment amount
 * @param interestRate Annual interest rate as percentage
 * @param loanTerm Loan term in months
 * @param balloonPayment Balloon payment amount
 * @param timeFrame Whether to show monthly or yearly payments
 * @returns Car loan calculation result
 */
export function calculateCarLoan(
  vehiclePrice: number,
  downPayment: number,
  interestRate: number,
  loanTerm: number,
  balloonPayment: number,
  timeFrame: CarLoanTimeFrame = "monthly"
): CarLoanCalculationResult {
  const loanAmount = vehiclePrice - downPayment;
  const monthlyPayment = calculateCarLoanPayment(vehiclePrice, downPayment, interestRate, loanTerm, balloonPayment);
  const totalPayments = monthlyPayment * loanTerm;
  const totalRepayment = totalPayments + balloonPayment + downPayment;
  const totalInterest = totalRepayment - vehiclePrice;
  
  // For yearly timeframe, multiply monthly payment by 12
  const payment = timeFrame === "yearly" ? monthlyPayment * 12 : monthlyPayment;
  
  const termDisplay = timeFrame === "yearly" 
    ? `${Math.round(loanTerm / 12)} years`
    : `${loanTerm} months`;

  return {
    vehiclePrice,
    downPayment,
    loanAmount,
    interestRate,
    loanTerm,
    balloonPayment,
    payment,
    totalInterest,
    totalRepayment,
    termDisplay
  };
}

/**
 * Generate a range of car loan calculations
 * @param min Minimum vehicle price
 * @param max Maximum vehicle price
 * @param step Step size between amounts
 * @param downPayment Down payment amount
 * @param interestRate Interest rate percentage
 * @param loanTerm Loan term in months
 * @param balloonPayment Balloon payment amount
 * @param timeFrame Whether to show monthly or yearly payments
 * @returns Array of car loan calculation results
 */
export function generateCarLoanCalculations(
  min: number = 100000,
  max: number = 1000000,
  step: number = 50000,
  downPayment: number = 0,
  interestRate: number = 5,
  loanTerm: number = 36,
  balloonPayment: number = 0,
  timeFrame: CarLoanTimeFrame = "monthly"
): CarLoanCalculationResult[] {
  const results: CarLoanCalculationResult[] = [];
  
  for (let amount = min; amount <= max; amount += step) {
    results.push(calculateCarLoan(amount, downPayment, interestRate, loanTerm, balloonPayment, timeFrame));
  }
  
  return results;
}

/**
 * Get car loan calculation for a specific amount
 * @param vehiclePrice Vehicle purchase price
 * @param downPayment Down payment amount
 * @param interestRate Interest rate percentage
 * @param loanTerm Loan term in months
 * @param balloonPayment Balloon payment amount
 * @param timeFrame Whether to show monthly or yearly payments
 * @returns Car loan calculation result or null if invalid
 */
export function getCarLoanCalculation(
  vehiclePrice: number,
  downPayment: number,
  interestRate: number,
  loanTerm: number,
  balloonPayment: number,
  timeFrame: CarLoanTimeFrame = "monthly"
): CarLoanCalculationResult | null {
  if (isNaN(vehiclePrice) || vehiclePrice <= 0) return null;
  return calculateCarLoan(vehiclePrice, downPayment, interestRate, loanTerm, balloonPayment, timeFrame);
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
