
import { EPLPlayer } from "./eplPlayersData";

export interface EPLCategory {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageUrl?: string;
  filter: (player: EPLPlayer) => boolean;
}

// Empty array for EPL categories
const eplCategories: EPLCategory[] = [];

// Get all EPL categories 
export function getAllEPLCategories(): EPLCategory[] {
  return eplCategories;
}

// Find a category by slug
export function findEPLCategoryBySlug(slug: string): EPLCategory | undefined {
  return eplCategories.find(category => category.slug === slug);
}

// Get a category ID by slug
export function getEPLCategoryIdBySlug(slug: string): number | undefined {
  const category = eplCategories.find(category => category.slug === slug);
  return category?.id;
}

// Get players by category ID
export function getPlayersByCategory(categoryId: number): EPLPlayer[] {
  return []; // Return empty array as EPL feature is removed
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
export function getAllEPLCategoriesMetadata(): CategoryMetadata[] {
  return eplCategories.map(({ id, title, slug, description, imageUrl }) => ({
    id,
    title,
    slug,
    description,
    imageUrl,
  }));
}
