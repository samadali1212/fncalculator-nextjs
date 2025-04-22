// Import all category data
import { djs } from './djs';
import { actors } from './actors';
import { athletes } from './athletes';
import { businessMen } from './businessMen';
import { politicians } from './politicians';

// Combine all categories into a single array
export const netWorthPeople = [
  ...djs,
  ...actors,
  ...athletes,
  ...businessMen,
  ...politicians
];

// Re-export individual categories for direct access
export { djs, actors, athletes, businessMen, politicians };

// Export types
export type NetWorthPerson = {
  id: string;
  slug: string;
  name: string;
  netWorth: number;
  currency: string;
  occupation: string;
  industry: string;
  company?: string;
  country?: string;
  imageUrl?: string;
  categories?: string[];
};

// Category type
export type CategoryMetadata = {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageUrl?: string;
};

// Categories data
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
    slug: 'athletes',
    title: 'Richest Athletes',
    description: 'The wealthiest sports figures from around the world.'
  },
  {
    id: '4',
    slug: 'business',
    title: 'Richest Business People',
    description: 'The most successful entrepreneurs and business magnates globally.'
  },
  {
    id: '5',
    slug: 'politicians',
    title: 'Wealthiest Politicians',
    description: 'Political figures with the highest net worth.'
  }
];

// Helper functions
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
    case '3': return athletes;
    case '4': return businessMen;
    case '5': return politicians;
    default: return [];
  }
};

export const findPersonBySlug = (slug: string): NetWorthPerson | undefined => {
  return netWorthPeople.find(person => person.slug === slug);
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
