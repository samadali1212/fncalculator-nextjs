import { slugify } from "./utils";
import { GeneralKnowledgeCategory, generalKnowledgeCategories, getCategoryBySlug } from "./generalKnowledgeCategoriesData";

// Define the structure for general knowledge items
export interface GeneralKnowledgeItem {
  id: string;
  title: string;
  slug: string;
  categoryId: string;
  categoryName: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl?: string;
  facts: Array<{ title: string; value: string }>;
  tags: string[];
  rating?: number;
  price?: { value: number; currency: string };
  createdAt: string;
  updatedAt: string;
}

// Re-export the category interface and helper functions for backward compatibility
export { GeneralKnowledgeCategory, generalKnowledgeCategories, getCategoryBySlug };

// Sample data for valuable South African coins
const valuableCoinsData: GeneralKnowledgeItem[] = [
  {
    id: "mandela-90th-birthday-gold-coin",
    title: "Mandela 90th Birthday Gold Coin",
    slug: "mandela-90th-birthday-gold-coin",
    categoryId: "valuable-coins",
    categoryName: "Valuable South African Coins",
    shortDescription: "One of the most valuable commemorative coins in South Africa, issued to celebrate Nelson Mandela's 90th birthday.",
    fullDescription: "The Nelson Mandela 90th Birthday Gold Coin was issued in 2008 to commemorate the 90th birthday of South Africa's first democratically elected president. This R5 gold coin features a portrait of Nelson Mandela on the obverse and the South African coat of arms on the reverse. Limited to just 500 pieces, this coin has become one of the most sought-after modern South African coins among collectors worldwide. Its value has appreciated significantly since its release, with auction prices regularly exceeding R50,000 depending on condition and certification.",
    imageUrl: "/items/mandela-90th-birthday-coin.jpg",
    facts: [
      { title: "Year", value: "2008" },
      { title: "Metal", value: "Gold (24 carat)" },
      { title: "Weight", value: "31.1 grams" },
      { title: "Diameter", value: "32.69 mm" },
      { title: "Mintage", value: "500 pieces" },
      { title: "Current Value", value: "R50,000 - R70,000" }
    ],
    tags: ["gold", "commemorative", "limited edition", "nelson mandela"],
    rating: 4.9,
    createdAt: "2023-05-10",
    updatedAt: "2023-12-15",
  },
  {
    id: "2008-mandela-silver-r5",
    title: "2008 Mandela 90th Birthday Silver R5",
    slug: "2008-mandela-90th-birthday-silver-r5",
    categoryId: "valuable-coins",
    categoryName: "Valuable South African Coins",
    shortDescription: "The silver version of the Mandela 90th birthday commemorative coin, more accessible but still valuable.",
    fullDescription: "The silver version of the Mandela 90th birthday coin was produced in higher quantities than its gold counterpart but remains a valuable collector's item. The 2008 Mandela 90th Birthday Silver R5 coin features the same design as the gold version but was struck in sterling silver. While more accessible to average collectors, uncirculated examples in perfect condition have seen significant appreciation in value. The coin represents an important piece of South African numismatic history and celebrates one of the nation's most beloved leaders.",
    imageUrl: "/items/mandela-silver-r5.jpg",
    facts: [
      { title: "Year", value: "2008" },
      { title: "Metal", value: "Sterling Silver (92.5%)" },
      { title: "Weight", value: "28.0 grams" },
      { title: "Diameter", value: "38.73 mm" },
      { title: "Mintage", value: "5,000 pieces" },
      { title: "Current Value", value: "R3,000 - R5,000" }
    ],
    tags: ["silver", "commemorative", "nelson mandela", "r5"],
    rating: 4.7,
    createdAt: "2023-05-12",
    updatedAt: "2023-12-15",
  },
  {
    id: "1892-single-9-pond",
    title: "1892 Single 9 Pond",
    slug: "1892-single-9-pond",
    categoryId: "valuable-coins",
    categoryName: "Valuable South African Coins",
    shortDescription: "One of the rarest and most valuable South African coins ever produced, with only one known example.",
    fullDescription: "The 1892 Single 9 Pond is considered the holy grail of South African numismatics. The coin was created during the early days of the Zuid-Afrikaansche Republiek (ZAR) when there was a shortage of dies for the 1892 production. A die from 1891 was modified by adding a '9' over the '1' in the date, creating the famous 'Single 9' coin. Only one example is known to exist, currently housed in the Mint of South Africa's collection, making it essentially priceless. If it were ever to come to auction, experts estimate it could fetch millions of Rand, making it one of the most valuable coins in the world.",
    imageUrl: "/items/single-9-pond.jpg",
    facts: [
      { title: "Year", value: "1892" },
      { title: "Metal", value: "Gold" },
      { title: "Weight", value: "8.3 grams" },
      { title: "Diameter", value: "22 mm" },
      { title: "Mintage", value: "1 piece" },
      { title: "Current Value", value: "Priceless (Estimated R15+ million)" }
    ],
    tags: ["gold", "ultra rare", "historical", "ZAR", "pond"],
    rating: 5.0,
    createdAt: "2023-05-15",
    updatedAt: "2023-12-15",
  }
];

// Sample data for shopping malls
const shoppingMallsData: GeneralKnowledgeItem[] = [
  {
    id: "mall-of-africa",
    title: "Mall of Africa",
    slug: "mall-of-africa",
    categoryId: "shopping-malls",
    categoryName: "Biggest Shopping Malls in South Africa",
    shortDescription: "The largest single-phase shopping mall development in South Africa, located in Midrand, Gauteng.",
    fullDescription: "Mall of Africa is a super-regional mall located in Waterfall City, Midrand, Gauteng. Opened in 2016, it is the largest single-phase shopping mall development in South Africa. The mall spans over 130,000 square meters of retail space and features over 300 shops, restaurants, and entertainment venues. Its distinctive design was inspired by Africa's geological features, with different sections representing different parts of the continent. The mall houses both local and international brands, including the first Starbucks in Gauteng. With ample parking, easy accessibility from major highways, and a wide range of amenities, Mall of Africa has become a premier shopping destination in the country.",
    imageUrl: "/items/mall-of-africa.jpg",
    facts: [
      { title: "Location", value: "Waterfall City, Midrand, Gauteng" },
      { title: "Size", value: "130,000 square meters" },
      { title: "Opened", value: "April 28, 2016" },
      { title: "Number of Stores", value: "Over 300" },
      { title: "Parking Spaces", value: "6,500" },
      { title: "Developer", value: "Atterbury Property Development" }
    ],
    tags: ["shopping", "gauteng", "midrand", "retail", "entertainment"],
    rating: 4.7,
    createdAt: "2023-06-15",
    updatedAt: "2023-12-20",
  },
  {
    id: "gateway-theatre-of-shopping",
    title: "Gateway Theatre of Shopping",
    slug: "gateway-theatre-of-shopping",
    categoryId: "shopping-malls",
    categoryName: "Biggest Shopping Malls in South Africa",
    shortDescription: "One of the largest shopping centers in the southern hemisphere, located in Umhlanga, Durban.",
    fullDescription: "Gateway Theatre of Shopping is a super-regional shopping mall located in Umhlanga, north of Durban, KwaZulu-Natal. Opened in 2001, it is one of the largest shopping centers in the southern hemisphere. The mall offers over 400 stores, 70 restaurants, an IMAX theater, a Wavehouse with artificial surfing, a rock climbing wall, and a Skate Park designed by Tony Hawk. With its distinctive architecture and wide range of shopping and entertainment options, Gateway has become a landmark destination for both locals and tourists. The mall continues to expand and upgrade its facilities to maintain its status as one of South Africa's premier shopping destinations.",
    imageUrl: "/items/gateway-theatre.jpg",
    facts: [
      { title: "Location", value: "Umhlanga, Durban, KwaZulu-Natal" },
      { title: "Size", value: "220,000 square meters" },
      { title: "Opened", value: "September 2001" },
      { title: "Number of Stores", value: "Over 400" },
      { title: "Parking Spaces", value: "8,000" },
      { title: "Developer", value: "Old Mutual Properties" }
    ],
    tags: ["shopping", "kwazulu-natal", "durban", "retail", "entertainment"],
    rating: 4.8,
    createdAt: "2023-06-18",
    updatedAt: "2023-12-20",
  }
];

// Combine all data into one array
export const generalKnowledgeItems: GeneralKnowledgeItem[] = [
  ...valuableCoinsData,
  ...shoppingMallsData,
  // Additional category data would be added here
];

// Helper functions
export const getItemBySlug = (slug: string): GeneralKnowledgeItem | undefined => {
  return generalKnowledgeItems.find(item => item.slug === slug);
};

export const getItemsByCategory = (categoryId: string): GeneralKnowledgeItem[] => {
  return generalKnowledgeItems.filter(item => item.categoryId === categoryId);
};

export const getSimilarItems = (currentItem: GeneralKnowledgeItem, limit: number = 4): GeneralKnowledgeItem[] => {
  // First get items in the same category
  const sameCategoryItems = generalKnowledgeItems.filter(
    item => item.categoryId === currentItem.categoryId && item.id !== currentItem.id
  );
  
  // If we have enough items from the same category, return them
  if (sameCategoryItems.length >= limit) {
    return sameCategoryItems.slice(0, limit);
  }
  
  // Otherwise, get items with similar tags
  const currentTags = new Set(currentItem.tags);
  const itemsWithSimilarTags = generalKnowledgeItems.filter(item => {
    if (item.id === currentItem.id || sameCategoryItems.some(sci => sci.id === item.id)) {
      return false;
    }
    return item.tags.some(tag => currentTags.has(tag));
  });
  
  // Combine and return
  return [...sameCategoryItems, ...itemsWithSimilarTags].slice(0, limit);
};
