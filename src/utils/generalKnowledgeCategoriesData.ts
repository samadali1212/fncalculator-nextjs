
import { slugify } from "./utils";

// Define the structure for general knowledge categories
export interface GeneralKnowledgeCategory {
  id: string;
  title: string;
  slug: string;
  description: string;
  imageUrl?: string;
  articleCount: number;
  emoji?: string;
  createdAt: string;
}

// Categories of general knowledge
export const generalKnowledgeCategories: GeneralKnowledgeCategory[] = [
  {
    id: "valuable-coins",
    title: "10 Most Valuable Coins In South Africa",
    slug: "valuable-south-african-coins",
    description: "Discover the most valuable and rare coins in South African currency history, including their current market value and historical significance.",
    imageUrl: "/categories/valuable-coins.jpg",
    articleCount: 10,
    emoji: "💰",
    createdAt: "2023-05-10",
  },
  {
    id: "shopping-malls",
    title: "15 Biggest Shopping Malls in South Africa",
    slug: "biggest-shopping-malls-south-africa",
    description: "A comprehensive guide to South Africa's largest shopping destinations with information on size, stores, amenities, and visitor numbers.",
    imageUrl: "https://toprates.co.za/assets/uploads/1/large/featured_1699521608.jpg",
    articleCount: 15,
    emoji: "🛍️",
    createdAt: "2023-06-15",
  },
  {
  id: "sugar-brands",
  title: "10 Best Sugar Brands in South Africa",
  slug: "best-south-african-sugar-brands",
  description: "Discover the top sugar brands available in South Africa, known for quality, reliability, and diverse product offerings.", 
  imageUrl: "https://irp.cdn-website.com/cbf48001/dms3rep/multi/shutterstock_2463705563.jpg",
  articleCount: 10,
  emoji: "🍬",
  createdAt: "2025-04-10",
},
];

// Helper functions
export const getCategoryBySlug = (slug: string): GeneralKnowledgeCategory | undefined => {
  return generalKnowledgeCategories.find(category => category.slug === slug);
};

