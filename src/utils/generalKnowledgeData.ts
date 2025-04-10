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
// Re-export the category interface using 'export type'
export type { GeneralKnowledgeCategory };

// Re-export the helper functions and data (values) using regular 'export'
export { generalKnowledgeCategories, getCategoryBySlug };

// Data for best sugar brands South African
const bestSugarBrands: GeneralKnowledgeItem[] = [
 {
    id: "illovo-sugar-africa",
    title: "Illovo Sugar Africa",
    slug: "illovo-sugar-africa",
    categoryId: "sugar-brands",
    categoryName: "Best South African Sugar Brands",
    shortDescription: "One of the best and largest sugar producers in South Africa, offering a wide variety of sugars, syrups, and sweeteners since 1891.",
    fullDescription: "This brand is one of the best in South Africa, offering a variety of products like white sugar, brown sugar, and more. Illovo Sugar Africa has been producing high-quality sugar since 1891 and is now one of the largest producers of sugar in Africa. Their products, known for being affordable and great-tasting using high-quality ingredients, are available in more than 20 countries on the continent.",
    imageUrl: "https://onehotoven.com/wp-content/uploads/2024/04/feature-brown-sugar.jpg",
    facts: [
      { title: "Established", value: "Since 1891" },
      { title: "Product Types", value: "White sugar, brown sugar, syrups, sweeteners" },
      { title: "Availability", value: "South Africa, >20 African countries" },
      { title: "Reputation", value: "High-quality, Affordable, Great taste" }
    ],
    tags: ["sugar", "south africa", "sweetener", "white sugar", "brown sugar", "syrups", "illovo", "major producer", "africa"],
    rating: 4.8,
    createdAt: "2023-12-17",
    updatedAt: "2025-04-10",
  },
  {
    id: "tongaat-hulett",
    title: "Tongaat Hulett",
    slug: "tongaat-hulett",
    categoryId: "sugar-brands",
    categoryName: "Best South African Sugar Brands",
    shortDescription: "A major South African sugar producer with a history dating back to 1892, known for high-quality sugar and sustainability efforts.",
    fullDescription: "Tongaat Hulett is one of the best sugar brands in South Africa, with a long history dating back to early 1892. As one of the biggest producers in the country, its products are sold nationwide. Tongaat Hulett is renowned for its high-quality sugar, ideal for baking or cooking. The company has operated for over a hundred years, building a strong reputation for quality products and notable sustainability initiatives, making it a respected business in South Africa.",
    imageUrl: "/items/sugar/tongaat-hulett.jpg",
    facts: [
      { title: "Established", value: "Since 1892" },
      { title: "Product Types", value: "High-quality sugar (for baking/cooking)" },
      { title: "Availability", value: "Nationwide (South Africa)" },
      { title: "Reputation", value: "High-quality, Strong reputation, Sustainable" }
    ],
    tags: ["sugar", "south africa", "sweetener", "baking", "cooking", "tongaat hulett", "major producer", "sustainable"],
    rating: 4.8,
    createdAt: "2023-12-17",
    updatedAt: "2025-04-10",
  },
  {
    id: "rcl-foods-sugar-milling",
    title: "RCL Foods Sugar & Milling",
    slug: "rcl-foods-sugar-milling",
    categoryId: "sugar-brands",
    categoryName: "Best South African Sugar Brands",
    shortDescription: "A trusted South African sugar brand known for quality, consistency, and offering both white and brown sugar in various packaging options.",
    fullDescription: "For a sugar brand known for quality and consistency, RCL Foods Sugar & Milling is a perfect choice. Operating in South Africa for many years, it has become a trusted name. RCL Foods Sugar & Milling produces both white and brown sugar, ensuring you can find the right product. They also offer various packaging options for convenient storage.",
    imageUrl: "https://onehotoven.com/wp-content/uploads/2024/04/feature-brown-sugar.jpg",
    facts: [
      { title: "Known For", value: "Quality and Consistency" },
      { title: "Product Types", value: "White sugar, Brown sugar" },
      { title: "Availability", value: "South Africa" },
      { title: "Features", value: "Variety of packaging options" }
    ],
    tags: ["sugar", "south africa", "sweetener", "white sugar", "brown sugar", "rcl foods", "quality", "consistent", "trusted"],
    rating: 4.8,
    createdAt: "2023-12-17",
    updatedAt: "2025-04-10",
  },
  {
    id: "ucl-company",
    title: "UCL Company",
    slug: "ucl-company",
    categoryId: "sugar-brands",
    categoryName: "Best South African Sugar Brands",
    shortDescription: "A long-standing South African company (over 100 years) producing a wide variety of sugar products, honey, syrups, jams, and jellies.",
    fullDescription: "With over 100 years in business, UCL Company has a reputation as one of the best sugar brands in the country. It produces a wide variety of sugar products, including white sugar, brown sugar, and honey. The company also manufactures other food products like syrups, jams, and jellies. Known for quality and innovation, its products are popular with consumers throughout South Africa.",
    imageUrl: "https://onehotoven.com/wp-content/uploads/2024/04/feature-brown-sugar.jpg",
    facts: [
      { title: "Established", value: "Over 100 years" },
      { title: "Product Types", value: "White sugar, Brown sugar, Honey, Syrups, Jams, Jellies" },
      { title: "Availability", value: "Throughout South Africa" },
      { title: "Reputation", value: "Quality, Innovation, Popular" }
    ],
    tags: ["sugar", "south africa", "sweetener", "white sugar", "brown sugar", "honey", "syrups", "jams", "jellies", "ucl company", "diversified products"],
    rating: 4.8,
    createdAt: "2023-12-17",
    updatedAt: "2025-04-10",
  },
  {
    id: "umfolozi-sugar-mill",
    title: "Umfolozi Sugar Mill",
    slug: "umfolozi-sugar-mill",
    categoryId: "sugar-brands",
    categoryName: "Best South African Sugar Brands",
    shortDescription: "Operating for over 100 years in Kwazulu Natal, producing high-quality, high-purity sugar with a distinctive flavour.",
    fullDescription: "Umfolozi Sugar Mill is one of South Africa's best sugar brands, operating for over 100 years and producing some of the country's highest-quality sugar. Located between the Isimangaliso Wetlands Park and the Hluhluwe Umfolozi game reserve in Zululand, an area known for rich soil and favourable climate. The sugar from Umfolozi has a distinctive flavour and high purity, making it a consumer favourite. The mill prides itself on its tradition of excellence.",
    imageUrl: "https://onehotoven.com/wp-content/uploads/2024/04/feature-brown-sugar.jpg",
    facts: [
      { title: "Established", value: "Over 100 years" },
      { title: "Product Types", value: "High-quality sugar" },
      { title: "Location", value: "Kwazulu Natal North Coast (Zululand)" },
      { title: "Reputation", value: "High-quality, High purity, Distinctive flavour, Excellence" }
    ],
    tags: ["sugar", "south africa", "sweetener", "umfolozi", "kwazulu natal", "zululand", "high purity", "distinctive flavour", "sugar mill"],
    rating: 4.8,
    createdAt: "2023-12-17",
    updatedAt: "2025-04-10",
  },
  {
    id: "gledhow-sugar-company",
    title: "Gledhow Sugar Company",
    slug: "gledhow-sugar-company",
    categoryId: "sugar-brands",
    categoryName: "Best South African Sugar Brands",
    shortDescription: "A reputable, long-standing South African sugar company producing high-quality white, brown, and raw sugar suitable for baking and cooking.",
    fullDescription: "Gledhow Sugar Company is recognized as one of the best sugar brands in South Africa. With many years in operation, it holds a good reputation. Gledhow produces high-quality sugar perfect for baking or cooking and offers a variety including white sugar, brown sugar, and raw sugar.",
    imageUrl: "https://onehotoven.com/wp-content/uploads/2024/04/feature-brown-sugar.jpg",
    facts: [
      { title: "Established", value: "Many years" },
      { title: "Product Types", value: "White sugar, Brown sugar, Raw sugar" },
      { title: "Use Case", value: "Baking, Cooking" },
      { title: "Reputation", value: "Good reputation, High-quality" }
    ],
    tags: ["sugar", "south africa", "sweetener", "gledhow", "white sugar", "brown sugar", "raw sugar", "baking", "cooking", "reputable"],
    rating: 4.8,
    createdAt: "2023-12-17",
    updatedAt: "2025-04-10",
  },
  {
    id: "atlanta-sugar",
    title: "Atlanta Sugar",
    slug: "atlanta-sugar",
    categoryId: "sugar-brands",
    categoryName: "Best South African Sugar Brands",
    shortDescription: "A leading, popular South African sugar brand known for quality, affordability, and wide availability in granulated and brown forms.",
    fullDescription: "Atlanta Sugar is a leading sugar brand in South Africa, available in both granulated and brown forms. It's a popular choice for households across the country. The company has produced sugar for years, earning a reputation for quality and affordability. Atlanta Sugar is also widely available in supermarkets and grocery stores, making it easy to find.",
    imageUrl: "https://onehotoven.com/wp-content/uploads/2024/04/feature-brown-sugar.jpg",
    facts: [
      { title: "Position", value: "Leading brand" },
      { title: "Product Types", value: "Granulated sugar, Brown sugar" },
      { title: "Availability", value: "Widely available in supermarkets/grocery stores" },
      { title: "Reputation", value: "Quality, Affordability, Popular" }
    ],
    tags: ["sugar", "south africa", "sweetener", "atlanta sugar", "granulated sugar", "brown sugar", "affordable", "quality", "widely available"],
    rating: 4.8,
    createdAt: "2023-12-17",
    updatedAt: "2025-04-10",
  },
  {
    id: "noodsberg-sugar-mill",
    title: "Noodsberg Sugar Mill",
    slug: "noodsberg-sugar-mill",
    categoryId: "sugar-brands",
    categoryName: "Best South African Sugar Brands",
    shortDescription: "A well-known South African sugar mill operating for over 100 years, recognized for high-quality products and commitment to sustainability.",
    fullDescription: "Noodsberg Sugar Mill is a well-known sugar producer in South Africa, renowned for its high-quality products sold throughout the country. Having operated for over 100 years, it continues to produce some of the best sugar in South Africa. The mill is also recognized for its commitment to sustainability and has received several awards for its environmental initiatives.",
    imageUrl: "https://onehotoven.com/wp-content/uploads/2024/04/feature-brown-sugar.jpg",
    facts: [
      { title: "Established", value: "Over 100 years" },
      { title: "Product Types", value: "High-quality sugar" },
      { title: "Availability", value: "Throughout South Africa" },
      { title: "Reputation", value: "High-quality, Commitment to sustainability, Award-winning (environmental)" }
    ],
    tags: ["sugar", "south africa", "sweetener", "noodsberg", "sugar mill", "high quality", "sustainable", "environmental awards", "long-standing"],
    rating: 4.8,
    createdAt: "2023-12-17",
    updatedAt: "2025-04-10",
  },
  {
    id: "royal-sugar",
    title: "Royal Sugar",
    slug: "royal-sugar",
    categoryId: "sugar-brands",
    categoryName: "Best South African Sugar Brands",
    shortDescription: "A popular, reliable South African sugar brand offering high-quality, affordable sugar suitable for baking or sweetening drinks.",
    fullDescription: "For sugar that is both high-quality and affordable, Royal Sugar is a great option. This brand is very popular in South Africa, known for products made with utmost care and attention to detail. Whether for baking or sweetening coffee, Royal Sugar is sure to satisfy. This reliable South African brand has been around for years.",
    imageUrl: "https://onehotoven.com/wp-content/uploads/2024/04/feature-brown-sugar.jpg",
    facts: [
      { title: "Known For", value: "High-quality and Affordability" },
      { title: "Use Case", value: "Baking, Sweetening coffee/drinks" },
      { title: "Reputation", value: "Popular, Reliable, Care and attention to detail" },
      { title: "Established", value: "Years" }
    ],
    tags: ["sugar", "south africa", "sweetener", "royal sugar", "affordable", "quality", "popular", "reliable", "baking"],
    rating: 4.8,
    createdAt: "2023-12-17",
    updatedAt: "2025-04-10",
  },
  {
    id: "lluvia-sugar-distributors",
    title: "Lluvia Sugar Distributors",
    slug: "lluvia-sugar-distributors",
    categoryId: "sugar-brands",
    categoryName: "Best South African Sugar Brands",
    shortDescription: "A popular family-owned South African distributor (since 2012) offering high-quality sugars, syrups (for cocktails), and natural honey.",
    fullDescription: "Operating since 2012, Lluvia Sugar Distributors is a popular sugar brand in South Africa. They offer a wide variety of high-quality sugars, syrups (perfect for cocktails/mocktails), and honey (a natural sweetener great for baking). As a family-owned business, Lluvia takes pride in its products and dedication to quality, supported by a team of skilled professionals ensuring customer satisfaction.",
    imageUrl: "https://onehotoven.com/wp-content/uploads/2024/04/feature-brown-sugar.jpg",
    facts: [
      { title: "Established", value: "Since 2012" },
      { title: "Product Types", value: "Sugars, Syrups (for cocktails), Honey (natural sweetener)" },
      { title: "Ownership", value: "Family-owned business" },
      { title: "Reputation", value: "Popular, High-quality ingredients, Customer satisfaction focus" }
    ],
    tags: ["sugar", "south africa", "sweetener", "lluvia", "syrups", "honey", "cocktails", "baking", "family owned", "distributor"],
    rating: 4.8,
    createdAt: "2023-12-17",
    updatedAt: "2025-04-10",
  }
  ];

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
