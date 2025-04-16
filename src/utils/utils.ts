
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
 * @param currency The currency code (e.g., ZAR, USD) or time period (yearly, monthly)
 * @returns Formatted currency string
 */
export const formatCurrency = (amount: number | string, currency: string = 'ZAR'): string => {
  // Convert amount to number if it's a string
  const numericAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
  
  // Check if the currency parameter is actually a time period
  if (currency === 'yearly' || currency === 'monthly' || currency === 'hourly') {
    // Default to ZAR for time periods
    const formatter = new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    
    return formatter.format(numericAmount);
  }
  
  // Regular currency formatting
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
 * @param person1Slug First person's slug
 * @param person2Slug Second person's slug
 * @param isCelebrity Whether the comparison is for celebrities
 * @returns Formatted URL string
 */
export const createComparisonUrl = (person1Slug: string, person2Slug: string, isCelebrity: boolean = false) => {
  if (isCelebrity) {
    return `/compare-celebrities/${person1Slug}-vs-${person2Slug}`;
  }
  return `/compare/${person1Slug}-vs-${person2Slug}`;
};
