export interface NetWorthPerson {
  id: string;
  name: string;
  netWorth: number;
  currency: string;
  occupation: string;
  age: number;
  country: string;
  industry: string;
  company?: string;
  description: string;
  source: string;
  lastUpdated: string;
  imageUrl: string;
  slug: string;
  categories: string[];
}

export const netWorthPeople: NetWorthPerson[] = [
  {
    id: "1",
    name: "Patrice Motsepe",
    netWorth: 3200000000,
    currency: "USD",
    occupation: "Mining Magnate",
    age: 61,
    country: "South Africa",
    industry: "Mining",
    company: "African Rainbow Minerals",
    description: "A trailblazer in the South African mining sector, Patrice Motsepe has carved out a remarkable success story through his company, African Rainbow Minerals (ARM). Demonstrating exceptional entrepreneurial drive, Motsepe transformed a modest mining services business into a diversified mining giant with interests in platinum, gold, ferrous metals, and coal. His journey is particularly noteworthy as he was one of the first black South Africans to enter the mining industry at a senior level following the end of apartheid. Beyond his business achievements, Motsepe is also recognized for his philanthropic commitments through the Motsepe Foundation, which supports education, healthcare, and poverty alleviation initiatives. Furthermore, his passion for sports is evident in his ownership of the Mamelodi Sundowns Football Club, one of the most successful teams in South Africa.",
    source: "Forbes",
    lastUpdated: "2023-05-15",
    imageUrl: "https://media.gettyimages.com/id/994504746/photo/johannesburg-south-africa-patrice-motsepe-of-the-motsepe-foundation-speaks-during-the-press.jpg?s=612x612&w=0&k=20&c=Y8KvOlDCUxXV-4LwCz3fNhHZtCs__8_C9Rf7ssBO6xY=",
    slug: "patrice-motsepe",
    categories: ["football-club-owners", "mining-magnates", "philanthropists"]
  },
  {
    id: "2",
    name: "Johann Rupert",
    netWorth: 10700000000,
    currency: "USD",
    occupation: "Businessman",
    age: 73,
    country: "South Africa",
    industry: "Luxury Goods",
    company: "Richemont",
    description: "A titan of South African industry, Johann Rupert has expertly steered the fortunes of luxury goods conglomerate Richemont, a company renowned for its prestigious brands in jewelry, watches, fashion, and writing instruments. Born into a family with a strong entrepreneurial legacy, Rupert inherited and expanded upon his father Anton Rupert's business empire. Beyond Richemont, his influence extends through Remgro, an investment holding company with diverse interests spanning banking, healthcare, and consumer products. Known for his astute business acumen and often outspoken views on economic and social issues in South Africa, Rupert maintains a relatively private profile despite his significant public standing. His leadership has been instrumental in positioning Richemont as a global leader in the high-end market, navigating the complexities of international commerce and evolving consumer preferences.",
    source: "Forbes",
    lastUpdated: "2023-05-15",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Rupert-Johann-2004.jpg",
    slug: "johann-rupert",
    categories: ["luxury-goods", "business-magnates"]
  },
  {
    id: "3",
    name: "Nicky Oppenheimer",
    netWorth: 8700000000,
    currency: "USD",
    occupation: "Diamond Heir",
    age: 78,
    country: "South Africa",
    industry: "Mining",
    company: "De Beers",
    description: "The name Oppenheimer resonates deeply within the history of South African mining, particularly in the realm of diamonds. Nicky Oppenheimer represents the third generation of this influential family to lead the De Beers diamond mining company. For decades, the Oppenheimer family held a dominant position in the global diamond trade, shaping the industry and contributing significantly to South Africa's economic landscape. While the family's direct control over De Beers has since transitioned, Nicky Oppenheimer remains a figure of considerable wealth and influence. His legacy is intertwined with the intricate history of diamond mining in the region, a story marked by both immense prosperity and complex social implications. Today, he focuses on conservation efforts and philanthropic endeavors, channeling his resources towards preserving Africa's natural heritage and supporting various social causes.",
    source: "Forbes",
    lastUpdated: "2023-05-15",
    imageUrl: "https://media.gettyimages.com/id/81157695/photo/gaborone-botswana-nicky-oppenheimer-age-63-the-chairman-of-de-beers-sits-in-a-de-beers-office.jpg?s=612x612&w=0&k=20&c=7JVCg_OsD8SQNXvo7F3t5xZ7G5Yc82Y3wiK6kjRjxfw=",
    slug: "nicky-oppenheimer",
    categories: ["mining-magnates", "diamond-industry"]
  },
  {
    id: "4",
    name: "Koos Bekker",
    netWorth: 2300000000,
    currency: "USD",
    occupation: "Media Executive",
    age: 71,
    country: "South Africa",
    industry: "Media & Technology",
    company: "Naspers",
    description: "Having served as the chief executive officer of Naspers for nearly two decades, Koos Bekker is widely credited with transforming the South African publishing house into a global internet and media powerhouse. His visionary leadership saw Naspers make an early and incredibly lucrative investment in the Chinese technology company Tencent, a move that has generated enormous returns and significantly elevated Naspers' international standing. Bekker's strategic foresight and understanding of the burgeoning digital landscape were instrumental in this transformation. Though he stepped down as CEO in 2014, his impact on Naspers and the broader technology investment world remains profound. His tenure is remembered for bold decisions and a keen eye for identifying high-growth potential in emerging markets, particularly in the rapidly evolving internet sector.",
    source: "Forbes",
    lastUpdated: "2023-05-15",
    imageUrl: "https://media.gettyimages.com/id/472544152/photo/koos-bekker-billionaire-and-chairman-of-naspers-ltd-reacts-during-an-interview-at-his-office.jpg?s=612x612&w=0&k=20&c=9cuD31U6fHI1XqU6GUHs6q2XLhJYcEdRD3g3cwBKX3I=",
    slug: "koos-bekker",
    categories: ["media-executives", "tech-investors"]
  },
  {
    id: "5",
    name: "Michiel Le Roux",
    netWorth: 1100000000,
    currency: "USD",
    occupation: "Banker",
    age: 73,
    country: "South Africa",
    industry: "Banking",
    company: "Capitec Bank",
    description: "The astute businessman behind Capitec Bank, Michiel Le Roux, has significantly disrupted the South African banking industry. Recognizing a gap in the market for a more accessible and affordable banking model, Le Roux played a pivotal role in establishing Capitec as a major player. The bank's innovative approach, focusing on simplicity, transparency, and lower fees, resonated with a large segment of the population, leading to rapid growth and challenging the dominance of more established institutions. Le Roux's entrepreneurial spirit and understanding of consumer needs were crucial to Capitec's success. While he may maintain a lower public profile compared to some other business leaders, his impact on the financial lives of millions of South Africans through Capitec Bank is undeniable and has earned him a place among the country's wealthiest individuals.",
    source: "Forbes",
    lastUpdated: "2023-05-15",
    imageUrl: "https://imageio.forbes.com/specials-images/imageserve/5a80fc894bbe6f2652f543fb/0x0.jpg?format=jpg&crop=455,455,x87,y0,safe&height=416&width=416&fit=bounds",
    slug: "michiel-le-roux",
    categories: ["bankers", "financial-innovators"]
  },
  {
    id: "6",
    name: "Douw Steyn",
    netWorth: 1000000000,
    currency: "USD",
    occupation: "Insurance Entrepreneur",
    age: 70,
    country: "South Africa",
    industry: "Insurance",
    company: "BGL Group",
    description: "A prominent figure in the South African property development sector, Douw Steyn has left an indelible mark on the landscape with his ambitious and large-scale projects. He is best known for the creation of Steyn City, a sprawling and luxurious mixed-use development north of Johannesburg, which exemplifies his vision for creating self-contained, high-quality urban environments. Steyn's career has been characterized by a bold approach to development, often involving significant investment and innovative design concepts. His ventures have not only generated substantial wealth but have also contributed to shaping the urban sprawl and lifestyle offerings in the Gauteng province. Through his various property endeavors, Steyn has demonstrated a keen understanding of market trends and a commitment to creating distinctive and sought-after residential and commercial spaces.",
    source: "Forbes",
    lastUpdated: "2023-05-15",
    imageUrl: "https://www.goodthingsguy.com/wp-content/uploads/2025/02/douw-steyn.jpg",
    slug: "douw-steyn",
    categories: ["insurance-executives", "property-developers"]
  },
  {
    id: "7",
    name: "Stephen Saad",
    netWorth: 900000000,
    currency: "USD",
    occupation: "Pharmaceutical Executive",
    age: 59,
    country: "South Africa",
    industry: "Pharmaceuticals",
    company: "Aspen Pharmacare",
    description: "As the co-founder and current Chief Executive Officer of Aspen Pharmacare, Stephen Saad has built a pharmaceutical giant with a global reach. Starting from relatively humble beginnings, Saad and his partners transformed Aspen into the largest pharmaceutical manufacturer in Africa, with a growing presence in international markets. His leadership has been instrumental in navigating the complexities of the pharmaceutical industry, including research and development, manufacturing, and distribution across diverse regulatory environments. Saad's entrepreneurial journey is a testament to his strategic vision and his ability to capitalize on opportunities within the healthcare sector. Aspen's success under his guidance has not only contributed to his personal wealth but has also played a significant role in providing access to essential medicines for millions of people in South Africa and beyond.",
    source: "Forbes",
    lastUpdated: "2023-05-15",
    imageUrl: "https://lh3.googleusercontent.com/dPQ9LQuUnK6m65uLminDsUclszwNcLjorH7B7LqVFg_ztCHK6QPjW5tn-olOpgFPq32iBK8BERSG2wAFU-XiDxrd-PMyEfTB60ls4Nuzf-SuuA",
    slug: "stephen-saad",
    categories: ["pharmaceutical-executives", "healthcare-entrepreneurs"]
  },
  {
    id: "8",
    name: "Cyril Ramaphosa",
    netWorth: 450000000,
    currency: "USD",
    occupation: "Politician & Businessman",
    age: 71,
    country: "South Africa",
    industry: "Politics & Business",
    company: "Shanduka Group",
    description: "Currently serving as the President of the Republic of South Africa, Cyril Ramaphosa has had a long and distinguished career spanning business, politics, and trade unionism. Before entering the highest office, Ramaphosa was a prominent businessman with significant investments in various sectors, including mining, telecommunications, and beverages. His early career saw him as a key figure in the anti-apartheid movement and the formation of the powerful National Union of Mineworkers. Following the transition to democracy, he played a crucial role in the drafting of South Africa's constitution. Ramaphosa's journey reflects a unique blend of political activism, business acumen, and public service, making him a complex and influential figure in South African society. His current focus is on addressing the country's economic challenges and fostering social cohesion.",
    source: "Bloomberg",
    lastUpdated: "2023-05-15",
    imageUrl: "https://lh3.googleusercontent.com/CuxBt-N3r9YNz9dlrNK8AMZLq5_WdkyjH1-esXje3fwBWMLnA9wxfiuVYYqj5u0KV5PJkX_4CpipTkr2jlnaOgrGvp7GtMCnsGDc3SlRQj8X9Ic=s750",
    slug: "cyril-ramaphosa",
    categories: ["politicians", "business-leaders"]
  },
  {
    id: "9",
    name: "Jannie Mouton",
    netWorth: 800000000,
    currency: "USD",
    occupation: "Investor",
    age: 77,
    country: "South Africa",
    industry: "Finance",
    company: "PSG Group",
    description: "Often hailed as the 'Boere Buffett,' Jannie Mouton is a highly respected figure in the South African investment community. He founded the PSG Group, an investment holding company with interests in financial services, banking, education, and agriculture. Mouton's investment philosophy, characterized by a long-term perspective and a focus on value investing, has proven remarkably successful over the years. His astute stock-picking abilities and his knack for identifying promising businesses have earned him a legendary status among investors in South Africa. Mouton's down-to-earth approach and his willingness to share his insights have made him a popular and influential voice in the financial markets. His legacy is one of shrewd investment decisions and the creation of a diversified and enduring investment group that continues to generate value.",
    source: "Forbes",
    lastUpdated: "2023-05-15",
    imageUrl: "https://imageio.forbes.com/specials-images/imageserve/8ab9cfd81c126830ba99bde49a2fdc07/0x0.jpg?format=jpg&crop=531,532,x105,y16,safe&height=416&width=416&fit=bounds",
    slug: "jannie-mouton",
    categories: ["investment-gurus", "financial-advisors"]
  },
  {
    id: "10",
    name: "Adrian Gore",
    netWorth: 700000000,
    currency: "USD",
    occupation: "Insurance Executive",
    age: 59,
    country: "South Africa",
    industry: "Insurance & Healthcare",
    company: "Discovery Limited",
    description: "The visionary founder and Chief Executive Officer of Discovery Limited, Adrian Gore has revolutionized the South African healthcare and financial services industries with his innovative business models. Discovery's integrated approach, centered around incentivizing healthy behavior through its Vitality program, has gained international recognition and has been adopted in various forms across the globe. Gore's entrepreneurial spirit and his commitment to using data and behavioral economics to improve people's health and financial well-being have been the driving forces behind Discovery's success. His leadership has not only built a highly profitable company but has also had a significant positive impact on the health and wellness of its millions of members. Gore's forward-thinking approach and his ability to disrupt traditional industries have established him as a prominent and influential business leader in South Africa.",
    source: "Forbes",
    lastUpdated: "2023-05-15",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/78/Adrian_Gore.jpg",
    slug: "adrian-gore",
    categories: ["insurance-executives", "healthcare-innovators"]
  }
];

/**
 * Find a person by their slug
 * @param slug The slug of the person to find
 * @returns The person object or undefined if not found
 */
export function findPersonBySlug(slug: string): NetWorthPerson | undefined {
  return netWorthPeople.find(person => person.slug === slug);
}

/**
 * Format currency amounts with appropriate symbol
 * @param amount The amount to format
 * @param currency The currency code
 * @returns Formatted currency string
 */
export function formatNetWorth(amount: number, currency: string = "USD"): string {
  // Default to USD if no currency specified
  const currencyCode = currency || "USD";
  
  // Format with the appropriate currency symbol
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
    maximumFractionDigits: 0,
    notation: 'compact',
    compactDisplay: 'short',
  }).format(amount);
}

/**
 * Get a list of similar people based on industry and net worth range
 * @param currentPerson The current person being viewed
 * @param limit Maximum number of people to return
 * @returns Array of similar people
 */
export function getSimilarPeople(currentPerson: NetWorthPerson, limit: number = 5): NetWorthPerson[] {
  if (!currentPerson) return [];
  
  return netWorthPeople
    .filter(person => 
      person.id !== currentPerson.id && 
      (person.industry === currentPerson.industry || 
       Math.abs(person.netWorth - currentPerson.netWorth) < currentPerson.netWorth * 0.5)
    )
    .sort((a, b) => Math.abs(a.netWorth - currentPerson.netWorth) - Math.abs(b.netWorth - currentPerson.netWorth))
    .slice(0, limit);
}

/**
 * Get category metadata including title, description, and slug
 */
export interface CategoryMetadata {
  id: string;
  title: string;
  description: string;
  slug: string;
  imageUrl?: string;
}

export const categoryDefinitions: Record<string, CategoryMetadata> = {
  "football-club-owners": {
    id: "cat1",
    title: "Richest Football Club Owners in South Africa",
    description: "South Africa's wealthiest football club owners who have invested their fortunes in the beautiful game.",
    slug: "richest-football-club-owners",
    imageUrl: "https://media.gettyimages.com/id/994504746/photo/johannesburg-south-africa-patrice-motsepe-of-the-motsepe-foundation-speaks-during-the-press.jpg?s=612x612&w=0&k=20&c=Y8KvOlDCUxXV-4LwCz3fNhHZtCs__8_C9Rf7ssBO6xY="
  },
  "djs": {
    id: "cat2",
    title: "Richest DJs in South Africa",
    description: "South Africa's top earning disc jockeys who have made their fortunes in the music industry.",
    slug: "richest-south-african-djs",
    imageUrl: "https://media.gettyimages.com/id/472544152/photo/koos-bekker-billionaire-and-chairman-of-naspers-ltd-reacts-during-an-interview-at-his-office.jpg?s=612x612&w=0&k=20&c=9cuD31U6fHI1XqU6GUHs6q2XLhJYcEdRD3g3cwBKX3I="
  },
  "rappers": {
    id: "cat3",
    title: "Richest Rappers in South Africa",
    description: "The highest-earning hip-hop artists and rappers who have built their wealth through music and business ventures.",
    slug: "richest-south-african-rappers",
    imageUrl: "https://lh3.googleusercontent.com/CuxBt-N3r9YNz9dlrNK8AMZLq5_WdkyjH1-esXje3fwBWMLnA9wxfiuVYYqj5u0KV5PJkX_4CpipTkr2jlnaOgrGvp7GtMCnsGDc3SlRQj8X9Ic=s750"
  },
  "mining-magnates": {
    id: "cat4",
    title: "Richest Mining Magnates in South Africa",
    description: "South Africa's mining industry titans who have built enormous wealth through mineral extraction and processing.",
    slug: "richest-mining-magnates",
    imageUrl: "https://media.gettyimages.com/id/81157695/photo/gaborone-botswana-nicky-oppenheimer-age-63-the-chairman-of-de-beers-sits-in-a-de-beers-office.jpg?s=612x612&w=0&k=20&c=7JVCg_OsD8SQNXvo7F3t5xZ7G5Yc82Y3wiK6kjRjxfw="
  },
  "insurance-executives": {
    id: "cat5",
    title: "Richest Insurance Executives in South Africa",
    description: "Leading figures in South Africa's insurance industry who have amassed significant wealth through innovative financial products.",
    slug: "richest-insurance-executives",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/78/Adrian_Gore.jpg"
  }
};

/**
 * Get all available categories with their metadata
 * @returns Array of category metadata
 */
export function getAllCategories(): CategoryMetadata[] {
  return Object.values(categoryDefinitions);
}

/**
 * Find a category by its slug
 * @param slug The slug of the category to find
 * @returns The category metadata or undefined if not found
 */
export function findCategoryBySlug(slug: string): CategoryMetadata | undefined {
  return Object.values(categoryDefinitions).find(cat => cat.slug === slug);
}

/**
 * Get all people in a specific category
 * @param categoryId The category ID to filter by
 * @param limit Optional limit on number of results
 * @returns Array of people in the category
 */
export function getPeopleByCategory(categoryId: string, limit?: number): NetWorthPerson[] {
  const people = netWorthPeople.filter(person => 
    person.categories.includes(categoryId)
  ).sort((a, b) => b.netWorth - a.netWorth);
  
  return limit ? people.slice(0, limit) : people;
}

/**
 * Find a category ID by its slug
 * @param slug The slug of the category
 * @returns The category ID or undefined if not found
 */
export function getCategoryIdBySlug(slug: string): string | undefined {
  const entry = Object.entries(categoryDefinitions).find(([_, metadata]) => metadata.slug === slug);
  return entry ? entry[0] : undefined;
}
