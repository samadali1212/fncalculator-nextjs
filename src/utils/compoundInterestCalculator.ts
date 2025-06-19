
export interface CompoundInterestCalculation {
  initialDeposit: number;
  regularDeposit: number;
  depositFrequency: number;
  compoundFrequency: number;
  numberOfYears: number;
  interestRate: number;
  totalAmount: number;
  totalContributions: number;
  totalInterest: number;
  regularDepositsTotal: number;
}

export const calculateCompoundInterest = (
  initialDeposit: number,
  regularDeposit: number,
  depositFrequency: number,
  compoundFrequency: number,
  numberOfYears: number,
  interestRate: number
): CompoundInterestCalculation => {
  // Replace NaN with 0 for empty input fields
  const sanitizedInitialDeposit = isNaN(initialDeposit) ? 0 : initialDeposit;
  const sanitizedRegularDeposit = isNaN(regularDeposit) ? 0 : regularDeposit;
  const rateDecimal = interestRate / 100;
  
  let totalAmount = sanitizedInitialDeposit;
  let currentYear = 1;
  
  while (currentYear <= numberOfYears) {
    for (let i = 0; i < depositFrequency; i++) {
      totalAmount += sanitizedRegularDeposit;
    }
    totalAmount *= Math.pow(1 + rateDecimal / compoundFrequency, compoundFrequency);
    currentYear += 1;
  }
  
  const regularDepositsTotal = sanitizedRegularDeposit * depositFrequency * numberOfYears;
  const totalContributions = sanitizedInitialDeposit + regularDepositsTotal;
  const totalInterest = totalAmount - totalContributions;
  
  return {
    initialDeposit: sanitizedInitialDeposit,
    regularDeposit: sanitizedRegularDeposit,
    depositFrequency,
    compoundFrequency,
    numberOfYears,
    interestRate,
    totalAmount,
    totalContributions,
    totalInterest,
    regularDepositsTotal
  };
};

export const formatCompoundCurrency = (amount: number): string => {
  const parts = amount.toFixed(2).toString().split(".");
  const formattedValue = `R ${parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ")}${parts[1] ? "," + parts[1] : ""}`;
  return formattedValue;
};
