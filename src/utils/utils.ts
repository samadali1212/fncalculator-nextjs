
/**
 * Converts a string to a URL-friendly slug
 * @param text The text to convert to a slug
 * @returns A URL-friendly slug
 */
export const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')        // Replace spaces with -
    .replace(/&/g, '-and-')      // Replace & with 'and'
    .replace(/[^\w\-]+/g, '')    // Remove all non-word characters
    .replace(/\-\-+/g, '-')      // Replace multiple - with single -
    .replace(/^-+/, '')          // Trim - from start of text
    .replace(/-+$/, '');         // Trim - from end of text
};

/**
 * Format a currency amount with the appropriate symbol
 * @param amount The amount to format
 * @param currency The currency code (e.g., ZAR, USD) or timeframe (e.g., yearly, monthly)
 * @returns Formatted currency string
 */
export const formatCurrency = (amount: number | string, currency: string = 'ZAR'): string => {
  // Convert amount to number if it's a string
  const numericAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
  
  // Handle special non-currency codes (like timeframe indicators)
  if (['yearly', 'monthly', 'hourly'].includes(currency.toLowerCase())) {
    const timeframe = currency.toLowerCase();
    const formatter = new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    
    const formattedAmount = formatter.format(numericAmount);
    return `${formattedAmount} ${timeframe}`;
  }
  
  // Normal currency formatting
  const formatter = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  
  return formatter.format(numericAmount);
};

/**
 * Creates SEO-friendly URL for comparison pages
 * @param person1 First person's slug
 * @param person2 Second person's slug
 * @param type Type of comparison (networth or salary)
 * @returns Formatted URL string
 */
export const createComparisonUrl = (person1: string, person2: string, type: 'networth' | 'salary' = 'networth'): string => {
  // Fix: Return the correct URL based on the type parameter
  if (type === 'salary') {
    return `/compare-salaries/${person1}-vs-${person2}`;
  }
  return `/compare/${person1}-vs-${person2}`;
};
