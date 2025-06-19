
/**
 * UIF Calculator utility functions for South Africa
 * Unemployment Insurance Fund calculations
 */

export interface UIFCalculation {
  averageSalary: number;
  dailyIncome: number;
  irr: number; // Income Replacement Rate
  dba: number; // Daily Benefit Amount
  employmentDuration: number;
  creditDays: number;
  totalBenefit: number;
}

export const UIF_SALARY_CAP = 17712; // Monthly salary cap for UIF

/**
 * Calculate UIF benefits
 */
export const calculateUIF = (averageSalary: number, employmentDuration: number): UIFCalculation => {
  // Cap the average salary at R17,712
  const cappedSalary = Math.min(averageSalary, UIF_SALARY_CAP);
  
  // Calculate daily income
  const dailyIncome = (cappedSalary * 12) / 365;
  
  // Calculate Income Replacement Rate (IRR)
  const irr = 29.2 + (7173.92 / (232.92 + dailyIncome));
  
  // Calculate Daily Benefit Amount (DBA)
  const dba = dailyIncome * (irr / 100);
  
  // Calculate credit days (max 365 days)
  const creditDays = Math.min(employmentDuration / 4, 365);
  
  // Calculate total benefit
  const totalBenefit = dba * creditDays;

  return {
    averageSalary: cappedSalary,
    dailyIncome,
    irr,
    dba,
    employmentDuration,
    creditDays,
    totalBenefit,
  };
};

/**
 * Format currency in South African Rand format
 */
export const formatUIFCurrency = (amount: number): string => {
  const parts = amount.toFixed(2).split(".");
  const formattedValue = `R ${parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ")}${parts[1] ? "," + parts[1] : ""}`;
  return formattedValue;
};

/**
 * Generate UIF calculations for display table
 */
export const generateUIFCalculations = (
  minSalary: number,
  maxSalary: number,
  step: number,
  employmentDuration: number = 1460 // Default 4 years
): UIFCalculation[] => {
  const results: UIFCalculation[] = [];
  
  for (let salary = minSalary; salary <= maxSalary; salary += step) {
    results.push(calculateUIF(salary, employmentDuration));
  }
  
  return results;
};
