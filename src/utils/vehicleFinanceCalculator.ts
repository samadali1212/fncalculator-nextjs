
interface VehicleFinanceCalculationResult {
  vehiclePrice: number;
  downPayment: number;
  interestRate: number;
  loanTerm: number;
  balloonPayment: number;
  payment: number;
  totalInterest: number;
  totalRepayment: number;
  termDisplay: string;
}

export type VehicleFinanceTimeFrame = "monthly" | "yearly";

/**
 * Calculate vehicle finance payment using the balloon payment formula
 * @param principal Loan amount (after down payment)
 * @param annualRate Annual interest rate as a percentage
 * @param termInMonths Loan term in months
 * @param balloonPayment Balloon payment amount
 * @returns Monthly payment amount
 */
function calculateMonthlyPayment(principal: number, annualRate: number, termInMonths: number, balloonPayment: number = 0): number {
  const monthlyRate = annualRate / 100 / 12;
  
  if (monthlyRate === 0) {
    return (principal - balloonPayment) / termInMonths;
  }
  
  // Calculate present value of balloon payment
  const balloonPV = balloonPayment / Math.pow(1 + monthlyRate, termInMonths);
  
  // Calculate payment on remaining amount
  const loanAmount = principal - balloonPV;
  
  const payment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, termInMonths)) / 
                  (Math.pow(1 + monthlyRate, termInMonths) - 1);
  
  return Math.round(payment);
}

/**
 * Calculate vehicle finance details for a given amount, down payment, rate, term, and balloon
 * @param vehiclePrice Total vehicle price
 * @param downPayment Down payment amount
 * @param interestRate Annual interest rate as percentage
 * @param loanTermMonths Loan term in months
 * @param balloonPayment Balloon payment amount
 * @param timeFrame Whether to show monthly or yearly payments
 * @returns Vehicle finance calculation result
 */
export function calculateVehicleFinance(
  vehiclePrice: number, 
  downPayment: number,
  interestRate: number, 
  loanTermMonths: number,
  balloonPayment: number = 0,
  timeFrame: VehicleFinanceTimeFrame = "monthly"
): VehicleFinanceCalculationResult {
  const loanAmount = vehiclePrice - downPayment;
  const monthlyPayment = calculateMonthlyPayment(loanAmount, interestRate, loanTermMonths, balloonPayment);
  const totalMonthlyPayments = monthlyPayment * loanTermMonths;
  const totalRepayment = totalMonthlyPayments + balloonPayment;
  const totalInterest = totalRepayment - loanAmount;
  
  // For yearly timeframe, multiply monthly payment by 12
  const payment = timeFrame === "yearly" ? monthlyPayment * 12 : monthlyPayment;
  
  const termDisplay = `${loanTermMonths} months`;

  return {
    vehiclePrice,
    downPayment,
    interestRate,
    loanTerm: loanTermMonths,
    balloonPayment,
    payment,
    totalInterest,
    totalRepayment,
    termDisplay
  };
}

/**
 * Generate a range of vehicle finance calculations
 * @param min Minimum vehicle price
 * @param max Maximum vehicle price
 * @param step Step size between amounts
 * @param interestRate Interest rate percentage
 * @param loanTermMonths Loan term in months
 * @param downPayment Down payment amount
 * @param balloonPayment Balloon payment amount
 * @param timeFrame Whether to show monthly or yearly payments
 * @returns Array of vehicle finance calculation results
 */
export function generateVehicleFinanceCalculations(
  min: number = 100000,
  max: number = 1000000,
  step: number = 50000,
  interestRate: number = 10.5,
  loanTermMonths: number = 60,
  downPayment: number = 0,
  balloonPayment: number = 0,
  timeFrame: VehicleFinanceTimeFrame = "monthly"
): VehicleFinanceCalculationResult[] {
  const results: VehicleFinanceCalculationResult[] = [];
  
  for (let amount = min; amount <= max; amount += step) {
    results.push(calculateVehicleFinance(amount, downPayment, interestRate, loanTermMonths, balloonPayment, timeFrame));
  }
  
  return results;
}

/**
 * Get vehicle finance calculation for specific parameters
 * @param vehiclePrice Vehicle price
 * @param downPayment Down payment amount
 * @param interestRate Interest rate percentage
 * @param loanTermMonths Loan term in months
 * @param balloonPayment Balloon payment amount
 * @param timeFrame Whether to show monthly or yearly payments
 * @returns Vehicle finance calculation result or null if invalid
 */
export function getVehicleFinanceCalculation(
  vehiclePrice: number,
  downPayment: number,
  interestRate: number,
  loanTermMonths: number,
  balloonPayment: number = 0,
  timeFrame: VehicleFinanceTimeFrame = "monthly"
): VehicleFinanceCalculationResult | null {
  if (isNaN(vehiclePrice) || vehiclePrice <= 0) return null;
  if (isNaN(downPayment) || downPayment < 0) return null;
  if (downPayment >= vehiclePrice) return null;
  return calculateVehicleFinance(vehiclePrice, downPayment, interestRate, loanTermMonths, balloonPayment, timeFrame);
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
