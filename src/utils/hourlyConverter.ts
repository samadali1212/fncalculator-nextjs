

export interface HourlyRate {
  hourlyRate: number;
  monthlyEquivalent: number;
  yearlySalary: number;
  workHoursPerWeek: number;
  workWeeksPerYear: number;
}

/**
 * Converts an hourly rate to monthly and yearly equivalents
 * @param hourlyRate The hourly rate in Rand
 * @param hoursPerWeek Hours worked per week (default: 40)
 * @param weeksPerYear Weeks worked per year (default: 48)
 * @returns Object with hourly, monthly, and yearly values
 */
export function convertHourlyRate(
  hourlyRate: number,
  hoursPerWeek: number = 40,
  weeksPerYear: number = 48
): HourlyRate {
  const monthlyEquivalent = hourlyRate * hoursPerWeek * 4;
  const yearlySalary = hourlyRate * hoursPerWeek * weeksPerYear;
  
  return {
    hourlyRate,
    monthlyEquivalent,
    yearlySalary,
    workHoursPerWeek: hoursPerWeek,
    workWeeksPerYear: weeksPerYear
  };
}

/**
 * Format a value with spaces as thousand separators (South African convention)
 * @param value The number to format
 * @returns Formatted string with spaces as thousand separators
 */
export function formatWithSpaces(value: number): string {
  return value.toLocaleString().replace(/,/g, ' ');
}

// Generate a range of hourly rates with conversions
export function generateHourlyRates(
  min: number = 50,
  max: number = 1000,
  step: number = 25
): HourlyRate[] {
  const rates: HourlyRate[] = [];
  
  for (let rate = min; rate <= max; rate += step) {
    rates.push(convertHourlyRate(rate));
  }
  
  return rates;
}

// Get a specific hourly rate by its value
export function getHourlyRateDetails(
  hourlyRate: number,
  hoursPerWeek?: number,
  weeksPerYear?: number
): HourlyRate | null {
  if (isNaN(hourlyRate)) return null;
  return convertHourlyRate(hourlyRate, hoursPerWeek, weeksPerYear);
}
