
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

/**
 * Find related people for comparisons based on industry, company, or occupation
 * @param currentPerson Current person to find relations for
 * @param otherPerson Person currently being compared with
 * @param allPeople Array of all available people
 * @param limit Maximum number of results to return
 * @returns Array of related people
 */
export const findRelatedPeople = (
  currentPerson: any, 
  otherPerson: any, 
  allPeople: any[], 
  limit: number = 4
): any[] => {
  if (!currentPerson || !otherPerson || !allPeople.length) return [];
  
  // Start with people from the same industry
  let relatedPeople = allPeople.filter(person => 
    person.id !== currentPerson.id && 
    person.id !== otherPerson.id &&
    person.industry === currentPerson.industry
  );
  
  // If we don't have enough, add people from the same company
  if (relatedPeople.length < limit && currentPerson.company) {
    const companyRelated = allPeople.filter(person => 
      person.id !== currentPerson.id && 
      person.id !== otherPerson.id &&
      person.company === currentPerson.company &&
      !relatedPeople.some(p => p.id === person.id)
    );
    relatedPeople = [...relatedPeople, ...companyRelated];
  }
  
  // If we still don't have enough, add people with similar occupations
  if (relatedPeople.length < limit) {
    const occupationRelated = allPeople.filter(person => 
      person.id !== currentPerson.id && 
      person.id !== otherPerson.id &&
      person.occupation === currentPerson.occupation &&
      !relatedPeople.some(p => p.id === person.id)
    );
    relatedPeople = [...relatedPeople, ...occupationRelated];
  }
  
  // If we still need more, add the highest paid people
  if (relatedPeople.length < limit) {
    const remainingPeople = allPeople.filter(person => 
      person.id !== currentPerson.id && 
      person.id !== otherPerson.id &&
      !relatedPeople.some(p => p.id === person.id)
    ).sort((a, b) => b.salary - a.salary);
    
    relatedPeople = [...relatedPeople, ...remainingPeople];
  }
  
  return relatedPeople.slice(0, limit);
};
