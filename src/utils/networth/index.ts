
// Re-export all data
import { actors } from './Actors'; // Fixed capitalization
import { businessMen } from './businessMen';
import { djs } from './djs';
import { politicians } from './politicians';

// Combine all categories into a single array
export const netWorthPeople = [
  ...actors,
  ...businessMen,
  ...djs,
  ...politicians
];

// Re-export individual categories for direct access
export { actors, businessMen, djs, politicians };

// Export types 
export type NetWorthPerson = {
  id: string;
  name: string;
  gender: string;
  netWorth: number;
  currency: string;
  occupation: string;
  dateOfBirth: string;
  country: string;
  industry: string;
  company?: string;
  description: string;
  source: string;
  lastUpdated: string;
  imageUrl?: string;
  slug: string;
  categories?: string[];
};

// Helper functions
export const findPersonBySlug = (slug: string): NetWorthPerson | undefined => {
  return netWorthPeople.find(person => person.slug === slug);
};

export const formatNetWorth = (amount: number, currency: string): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    notation: 'compact',
    maximumFractionDigits: 1
  }).format(amount);
};

export const formatAge = (dateOfBirth: string): string => {
  const birthDate = new Date(dateOfBirth);
  const ageDifMs = Date.now() - birthDate.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970).toString();
};

export const getSimilarPeople = (person: NetWorthPerson, limit: number = 3): NetWorthPerson[] => {
  // Get people in the same industry, excluding the current person
  const sameIndustry = netWorthPeople.filter(
    p => p.industry === person.industry && p.id !== person.id
  );
  
  // Sort by net worth difference (closest first)
  return sameIndustry
    .sort((a, b) => {
      const diffA = Math.abs(a.netWorth - person.netWorth);
      const diffB = Math.abs(b.netWorth - person.netWorth);
      return diffA - diffB;
    })
    .slice(0, limit);
};

// Categories metadata
export type CategoryMetadata = {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageUrl?: string;
};

export const categories: CategoryMetadata[] = [
  {
    id: '1',
    slug: 'djs',
    title: 'Richest DJs',
    description: 'A list of the wealthiest DJs and music producers worldwide.'
  },
  {
    id: '2',
    slug: 'actors',
    title: 'Richest Actors',
    description: 'The highest net worth actors in the film and television industry.'
  },
  {
    id: '3',
    slug: 'politicians',
    title: 'Wealthiest Politicians',
    description: 'Political figures with the highest net worth.'
  },
  {
    id: '4',
    slug: 'businessmen',
    title: 'Richest Business People',
    description: 'The most successful entrepreneurs and business magnates globally.'
  }
];

export const findCategoryBySlug = (slug: string): CategoryMetadata | undefined => {
  return categories.find(category => category.slug === slug);
};

export const getCategoryIdBySlug = (slug: string): string | undefined => {
  const category = findCategoryBySlug(slug);
  return category?.id;
};

export const getPeopleByCategory = (categoryId: string): NetWorthPerson[] => {
  switch (categoryId) {
    case '1': return djs;
    case '2': return actors;
    case '3': return politicians;
    case '4': return businessMen;
    default: return [];
  }
};
