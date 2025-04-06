
import { v4 as uuidv4 } from 'uuid';

// Define Celebrity interface
export interface Celebrity {
  id: string;
  name: string;
  slug: string;
  occupation: string;
  salary: number;
  currency: string;
  imageUrl?: string;
  description: string;
  age: number;
  country: string;
  company?: string;
  industry: string;
  source: string;
  lastUpdated: string;
  categories: string[];
}

// Function to determine default categories based on company/industry
const getDefaultCategories = (celebrity: Omit<Celebrity, 'categories'>): string[] => {
  const categories: string[] = [];
  
  // Add categories based on company
  if (celebrity.company) {
    if (celebrity.company.toLowerCase().includes('kaizer chiefs')) {
      categories.push('highest-paid-players-at-kaizer-chiefs');
    }
    if (celebrity.company.toLowerCase().includes('mamelodi sundowns')) {
      categories.push('highest-paid-players-at-mamelodi-sundowns');
    }
    if (celebrity.company.toLowerCase().includes('orlando pirates')) {
      categories.push('highest-paid-players-at-orlando-pirates');
    }
  }
  
  // Add categories based on industry and occupation
  if (celebrity.industry.toLowerCase() === 'football' && 
      celebrity.occupation.toLowerCase().includes('player')) {
    categories.push('highest-paid-football-players-in-south-africas-psl');
  }
  
  // Add CEO category
  if (celebrity.occupation.toLowerCase().includes('ceo')) {
    categories.push('highest-paid-ceos-in-south-africa');
  }
  
  // If no categories matched, add a default
  if (categories.length === 0) {
    categories.push('uncategorized');
  }
  
  return categories;
};

// Sample celebrity data with added categories property
export const celebrities: Celebrity[] = [
  {
    id: uuidv4(),
    name: "Lucas Ribeiro",
    slug: "lucas-ribeiro",
    occupation: "Football Player",
    salary: 850000,
    currency: "ZAR",
    imageUrl: "https://sundownsfc.co.za/wp-content/uploads/2023/10/a_%C2%ACKit-Shoot-1447.jpg",
    description: "Lucas Ribeiro is a highly-rated Brazilian professional footballer who excels as an attacking midfielder for Mamelodi Sundowns FC. Known for his ability to revamp the midfield and generate interest from top-flight clubs like Burnley, Ribeiro is considered one of the best players in the league. Born on October 9, 1998, making him 27 years old in 2025, his estimated monthly salary ranges from R700,000 to R1,000,000. He brings international experience and skill to the Mamelodi Sundowns squad.",
    age: 27,
    country: "Brazil",
    company: "Mamelodi Sundowns",
    industry: "Football",
    source: "Research",
    lastUpdated: "2025-04-02",
    categories: ["highest-paid-players-at-mamelodi-sundowns", "highest-paid-football-players-in-south-africas-psl"]
  },
  // ... For all remaining celebrity objects, we need to add the categories property
];

// Add categories to all existing celebrity objects using a loop
for (let i = 1; i < celebrities.length; i++) {
  // Extract all fields except 'categories' which doesn't exist yet
  const { 
    id, name, slug, occupation, salary, currency, imageUrl, 
    description, age, country, company, industry, source, lastUpdated 
  } = celebrities[i] as any;
  
  // Create temporary object without categories to pass to our function
  const tempCelebrity = { 
    id, name, slug, occupation, salary, currency, imageUrl, 
    description, age, country, company, industry, source, lastUpdated 
  };
  
  // Add the categories
  (celebrities[i] as any).categories = getDefaultCategories(tempCelebrity);
}

/**
 * Format celebrity salary with proper currency symbol
 */
export function formatSalary(amount: number, currency: string = 'ZAR'): string {
  if (!amount) return 'Not Available';

  let symbol = 'R';
  
  switch(currency) {
    case 'USD':
      symbol = '$';
      break;
    case 'EUR':
      symbol = '€';
      break;
    case 'GBP':
      symbol = '£';
      break;
    default:
      symbol = 'R'; // South African Rand default
  }
  
  // Format number with comma as thousands separator
  return `${symbol}${amount.toLocaleString()}`;
}

/**
 * Find a celebrity by their slug
 */
export function findCelebrityBySlug(slug: string): Celebrity | undefined {
  return celebrities.find(celebrity => celebrity.slug === slug);
}

/**
 * Get similar celebrities based on industry, company, or salary range
 */
export function getSimilarCelebrities(celebrity: Celebrity, limit: number = 5): Celebrity[] {
  // Get all celebrities except the current one
  const otherCelebrities = celebrities.filter(c => c.id !== celebrity.id);
  
  // Score each celebrity by similarity
  const scoredCelebrities = otherCelebrities.map(c => {
    let score = 0;
    
    // Same industry gets highest score
    if (c.industry === celebrity.industry) {
      score += 5;
    }
    
    // Same company gets high score
    if (c.company && celebrity.company && c.company === celebrity.company) {
      score += 4;
    }
    
    // Similar salary range (within 30%)
    const salaryDiff = Math.abs(c.salary - celebrity.salary);
    const salaryRatio = salaryDiff / celebrity.salary;
    if (salaryRatio < 0.3) {
      score += 3;
    }
    
    // Same occupation type
    if (c.occupation.toLowerCase().includes(celebrity.occupation.toLowerCase()) ||
        celebrity.occupation.toLowerCase().includes(c.occupation.toLowerCase())) {
      score += 2;
    }
    
    // Same country
    if (c.country === celebrity.country) {
      score += 1;
    }
    
    return { celebrity: c, score };
  });
  
  // Sort by score (highest first) and return the celebrities
  return scoredCelebrities
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.celebrity);
}
