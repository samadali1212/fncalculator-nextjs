
export interface CrdbLoanCalculationResult {
  loanAmount: number;
  interestRate: number;
  loanTerm: number;
  termDisplay: string;
  payment: number;
  totalRepayment: number;
  totalInterest: number;
  timeFrame: CrdbTimeFrame;
}

export type CrdbTimeFrame = "monthly" | "yearly";

export const formatCurrency = (amount: number): string => {
  return `TSh ${amount.toLocaleString('en-US')}`;
};

export const calculateLoanPayment = (
  principal: number, 
  annualRate: number, 
  termInMonths: number
): number => {
  const monthlyRate = annualRate / 100 / 12;
  if (monthlyRate === 0) return principal / termInMonths;
  
  const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, termInMonths)) / 
                  (Math.pow(1 + monthlyRate, termInMonths) - 1);
  
  return payment;
};

export const getCrdbLoanCalculation = (
  loanAmount: number,
  interestRate: number,
  loanTerm: number,
  timeFrame: CrdbTimeFrame = "monthly"
): CrdbLoanCalculationResult => {
  const termInMonths = timeFrame === "yearly" ? loanTerm * 12 : loanTerm;
  const monthlyPayment = calculateLoanPayment(loanAmount, interestRate, termInMonths);
  const totalRepayment = monthlyPayment * termInMonths;
  const totalInterest = totalRepayment - loanAmount;
  
  const payment = timeFrame === "yearly" ? monthlyPayment * 12 : monthlyPayment;
  const termDisplay = timeFrame === "yearly" ? `${loanTerm} years` : `${loanTerm} months`;
  
  return {
    loanAmount,
    interestRate,
    loanTerm,
    termDisplay,
    payment,
    totalRepayment,
    totalInterest,
    timeFrame
  };
};

export const generateCrdbLoanCalculations = (
  minAmount: number,
  maxAmount: number,
  step: number,
  interestRate: number = 13,
  loanTerm: number = 36,
  timeFrame: CrdbTimeFrame = "monthly"
): CrdbLoanCalculationResult[] => {
  const calculations: CrdbLoanCalculationResult[] = [];
  
  for (let amount = minAmount; amount <= maxAmount; amount += step) {
    calculations.push(getCrdbLoanCalculation(amount, interestRate, loanTerm, timeFrame));
  }
  
  return calculations;
};
