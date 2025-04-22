
import { NetWorthPerson } from './index';

export const politicians: NetWorthPerson[] = [
  {
    id: 'politician-1',
    slug: 'vladimir-putin',
    name: 'Vladimir Putin',
    netWorth: 200000000000, // estimated
    currency: 'USD',
    occupation: 'Politician',
    industry: 'Politics',
    company: 'Russian Federation',
    country: 'Russia',
    imageUrl: 'https://example.com/vladimir-putin.jpg',
    categories: ['politicians']
  },
  {
    id: 'politician-2',
    slug: 'michael-bloomberg',
    name: 'Michael Bloomberg',
    netWorth: 94000000000,
    currency: 'USD',
    occupation: 'Entrepreneur and Politician',
    industry: 'Politics/Business',
    company: 'Bloomberg LP',
    country: 'United States',
    imageUrl: 'https://example.com/michael-bloomberg.jpg',
    categories: ['politicians', 'business']
  },
  {
    id: 'politician-3',
    slug: 'mitt-romney',
    name: 'Mitt Romney',
    netWorth: 300000000,
    currency: 'USD',
    occupation: 'Politician and Businessman',
    industry: 'Politics',
    country: 'United States',
    imageUrl: 'https://example.com/mitt-romney.jpg',
    categories: ['politicians']
  }
];
