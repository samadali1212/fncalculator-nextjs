
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
    imageUrl: "https://media.gettyimages.com/id/185080314/photo/gold-coins.jpg?s=612x612&w=0&k=20&c=M6DEzoikwTh_W9YL1ofsaZWgIphZsG8aUedMaOPys0I=",
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
    {
    id: "coin-marketplaces",
    title: "Best Places to Sell Old Coins in South Africa",
    slug: "best-places-to-sell-old-coins-in-south-africa",
    description: "Find the top marketplaces and dealers in South Africa for selling old coins, from online platforms to specialized coin dealers.",
    imageUrl: "https://media.gettyimages.com/id/57585915/photo/chicago-american-eagle-and-south-african-krugerrand-gold-bullion-is-offered-for-sale-at-the.jpg?s=612x612&w=0&k=20&c=TOARsQ3VV4t5ARuaoi0d6uBvUn_higk6pAkNE0O_ixg=",  // Replace with appropriate image URL
    articleCount: 15,
    emoji: "💰",
    createdAt: "2025-04-13",
  },
  {
    id: "coin-marketplaces",
    title: "Where to Sell Mandela R5 2008 Coin",
    slug: "where-to-sell-mandela-r5-2008-coin",
    description: "Find the best places to sell your 2008 Mandela R5 coin, including online platforms and specialized coin dealers.",
    imageUrl: "https://media.gettyimages.com/id/997732704/photo/a-model-showing-a-commemorative-south-african-rand-coin-stands-on-display-in-pretoria-south.jpg?s=612x612&w=0&k=20&c=aeuUdyFs6Q1nnFG0PZQCMuiZj-_XlLh8WFmtfl2CtA8=",  // Replace with the appropriate image URL
    articleCount: 15,
    emoji: "🎉",
    createdAt: "2025-04-13",
  },
  {
    id: "coin-marketplaces",
    title: "Where to Sell Mandela Coins",
    slug: "where-to-sell-mandela-coins",
    description: "Discover the best places to sell Mandela coins, including online platforms and specialized coin dealers in South Africa.",
    imageUrl: "https://media.gettyimages.com/id/458537517/photo/nelson-mandela-gold-coin.jpg?s=612x612&w=0&k=20&c=J4ZsK6mYyJdiIyqsyVZUwpHJynaR-ysV4eCZRcem-ns=",  // Replace with appropriate image URL
    articleCount: 10,
    emoji: "💎",
    createdAt: "2025-04-13",
  },
  {
    id: "coin-marketplaces",
    title: "Where to Sell Nelson Mandela Centenary R5 Coin 2018",
    slug: "where-to-sell-nelson-mandela-centenary-r5-2018-coin",
    description: "Find the best platforms and dealers for selling your 2018 Nelson Mandela Centenary R5 coin, from specialized numismatic dealers to online markets.",
    imageUrl: "https://media.gettyimages.com/id/91120878/photo/south-africa-president-nelson-mandela-at-the-south-african-mint-where-the-first-presidential.jpg?s=612x612&w=0&k=20&c=u_Mlpi_0PxN1myAYKUc5FcERgCKOsK_HmRMZNJoAtgs=",  // Replace with the appropriate image URL
    articleCount: 15,
    emoji: "🎉",
    createdAt: "2025-04-13",
  },
  {
    id: "coin-marketplaces",
    title: "Where to Sell Old R1 Coins",
    slug: "where-to-sell-old-r1-coins",
    description: "Explore the best places to sell your old R1 coins, including online marketplaces and specialized coin dealers in South Africa.",
    imageUrl: "https://media.gettyimages.com/id/997732622/photo/a-commemorative-south-african-fifty-rand-coin-stands-on-display-in-pretoria-south-africa-on.jpg?s=612x612&w=0&k=20&c=4Q2uBvkHHJDz7et4c047zWkLU6BYEJ39fHGjeH6ZT0c=",  // Replace with appropriate image URL
    articleCount: 15,
    emoji: "💵",
    createdAt: "2025-04-13",
  },
  {
    id: "coin-marketplaces",
    title: "Where to Sell Krugerrand",
    slug: "where-to-sell-krugerrand",
    description: "Discover the best places to sell your Krugerrand coins, including trusted dealers and online platforms in South Africa.",
    imageUrl: "https://example.com/krugerrand.jpg",  // Replace with appropriate image URL
    articleCount: 15,
    emoji: "🏅",
    createdAt: "2025-04-13",
  },
  {
    id: "coin-marketplaces",
    title: "Where to Sell 1965 Coins",
    slug: "where-to-sell-1965-coins",
    description: "Explore the best places to sell your 1965 coins, including reputable dealers and online marketplaces in South Africa.",
    imageUrl: "https://media.gettyimages.com/id/171585447/photo/new-south-african-ten-rand-banknote-with-r5-coin.jpg?s=612x612&w=0&k=20&c=BZRvWJ2PAV6hl_6VtmmlYQzHTm4Wpq-GmqT9LXN6Gzc=",  // Replace with appropriate image URL
    articleCount: 15,
    emoji: "🔍",
    createdAt: "2025-04-13",
  },
  {
    id: "coin-marketplaces",
    title: "Where to Sell Mandela Coins in Pretoria",
    slug: "where-to-sell-mandela-coins-in-pretoria",
    description: "Discover reputable dealers and platforms in Pretoria to sell your Mandela coins, including both physical locations and online marketplaces.",
    imageUrl: "https://media.gettyimages.com/id/150341451/photo/former-south-african-president-nelson-mandela-sits-near-an-image-of-a-new-rand-5-coin-issued.jpg?s=612x612&w=0&k=20&c=Y0J__FhUBIwS_A0eJlS-8P3_lg2trqis0nEnapmFLys=",  // Replace with appropriate image URL
    articleCount: 15,
    emoji: "📍",
    createdAt: "2025-04-13",
  },
];

// Helper functions
export const getCategoryBySlug = (slug: string): GeneralKnowledgeCategory | undefined => {
  return generalKnowledgeCategories.find(category => category.slug === slug);
};

