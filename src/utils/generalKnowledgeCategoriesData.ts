
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
    imageUrl: "/categories/shopping-malls.jpg",
    articleCount: 15,
    emoji: "🛍️",
    createdAt: "2023-06-15",
  },
  {
    id: "mattresses",
    title: "Best Mattresses in South Africa",
    slug: "best-mattresses-south-africa",
    description: "Reviews and comparisons of the top mattress brands available in South Africa, with guidance on comfort, durability, and value for money.",
    imageUrl: "/categories/mattresses.jpg",
    articleCount: 8,
    emoji: "🛏️",
    createdAt: "2023-07-22",
  },
  {
    id: "cars",
    title: "Best Cars in South Africa",
    slug: "best-cars-south-africa",
    description: "Expert reviews of the most popular and top-rated vehicles on South African roads, including performance, fuel efficiency, and affordability.",
    imageUrl: "/categories/cars.jpg",
    articleCount: 20,
    emoji: "🚗",
    createdAt: "2023-08-05",
  },
  {
    id: "universities",
    title: "Top Universities in South Africa",
    slug: "top-universities-south-africa",
    description: "Rankings and information about South Africa's leading higher education institutions, including academic excellence, research output, and student satisfaction.",
    imageUrl: "/categories/universities.jpg",
    articleCount: 12,
    emoji: "🎓",
    createdAt: "2023-09-18",
  },
  {
    id: "restaurants",
    title: "Best Restaurants in South Africa",
    slug: "best-restaurants-south-africa",
    description: "A culinary guide to South Africa's finest dining establishments, featuring reviews, chef profiles, and signature dishes worth trying.",
    imageUrl: "/categories/restaurants.jpg",
    articleCount: 25,
    emoji: "🍽️",
    createdAt: "2023-10-30",
  },
  {
  id: "sugar-brands",
  title: "Best South African Sugar Brands",
  slug: "best-south-african-sugar-brands",
  description: "Discover the top sugar brands available in South Africa, known for quality, reliability, and diverse product offerings.", 
  imageUrl: "https://irp.cdn-website.com/cbf48001/dms3rep/multi/shutterstock_2463705563.jpg",
  articleCount: 10,
  emoji: "🍬",
  createdAt: "2025-04-17",
},
];

// Helper functions
export const getCategoryBySlug = (slug: string): GeneralKnowledgeCategory | undefined => {
  return generalKnowledgeCategories.find(category => category.slug === slug);
};

