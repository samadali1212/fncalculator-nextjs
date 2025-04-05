
import { celebrities } from "./celebrityData";

export interface CelebrityCategory {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageUrl?: string;
  filter: (celebrity: any) => boolean;
}

// List of pre-defined celebrity categories
const celebrityCategories: CelebrityCategory[] = [
  {
    id: 1,
    title: "Kaizer Chiefs Players",
    slug: "kaizer-chiefs-players",
    description: "Top earning football players from Kaizer Chiefs, one of South Africa's most popular football clubs.",
    imageUrl: "/placeholder.svg",
    filter: (celebrity) => celebrity.company?.toLowerCase().includes("kaizer chiefs")
  },
  {
    id: 2,
    title: "Orlando Pirates Players",
    slug: "orlando-pirates-players",
    description: "Highest paid football stars from Orlando Pirates FC in the Premier Soccer League.",
    imageUrl: "/placeholder.svg",
    filter: (celebrity) => celebrity.company?.toLowerCase().includes("orlando pirates")
  },
  {
    id: 3,
    title: "TV Presenters",
    slug: "tv-presenters",
    description: "South Africa's top earning television hosts and presenters across all networks.",
    filter: (celebrity) => celebrity.occupation?.toLowerCase().includes("presenter") || celebrity.occupation?.toLowerCase().includes("host")
  },
  {
    id: 4,
    title: "Musicians",
    slug: "musicians",
    description: "The highest earning South African musicians and recording artists.",
    filter: (celebrity) => celebrity.industry?.toLowerCase() === "music" || celebrity.occupation?.toLowerCase().includes("musician") || celebrity.occupation?.toLowerCase().includes("singer")
  },
  {
    id: 5,
    title: "Actors",
    slug: "actors",
    description: "Top earning South African actors from television, film and theater.",
    filter: (celebrity) => celebrity.industry?.toLowerCase() === "acting" || celebrity.occupation?.toLowerCase().includes("actor") || celebrity.occupation?.toLowerCase().includes("actress")
  },
  {
    id: 6,
    title: "Sports Stars",
    slug: "sports-stars",
    description: "The highest paid athletes and sports personalities in South Africa.",
    filter: (celebrity) => celebrity.industry?.toLowerCase() === "sports" || celebrity.occupation?.toLowerCase().includes("player") || celebrity.occupation?.toLowerCase().includes("athlete")
  }
];

// Get all celebrity categories 
export function getAllCelebrityCategories(): CelebrityCategory[] {
  return celebrityCategories;
}

// Find a category by slug
export function findCelebrityCategoryBySlug(slug: string): CelebrityCategory | undefined {
  return celebrityCategories.find(category => category.slug === slug);
}

// Get a category ID by slug
export function getCelebrityCategoryIdBySlug(slug: string): number | undefined {
  const category = celebrityCategories.find(category => category.slug === slug);
  return category?.id;
}

// Get celebrities by category ID
export function getCelebritiesByCategory(categoryId: number): any[] {
  const category = celebrityCategories.find(cat => cat.id === categoryId);
  
  if (!category) {
    return [];
  }
  
  return celebrities.filter(celebrity => category.filter(celebrity));
}

// Get category metadata
export interface CategoryMetadata {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageUrl?: string;
}

// Get all category metadata
export function getAllCelebrityMetadata(): CategoryMetadata[] {
  return celebrityCategories.map(({ id, title, slug, description, imageUrl }) => ({
    id,
    title,
    slug,
    description,
    imageUrl,
  }));
}

