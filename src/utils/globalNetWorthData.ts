import React from 'react';

export interface NetWorthPerson {
  id: number;
  name: string;
  netWorth: number;
  currency: string;
  occupation: string;
  dateOfBirth: string; // ISO date string format
  country: string;
  industry: string;
  company?: string;
  description: string;
  source: string;
  lastUpdated: string;
  imageUrl: string;
  slug: string;
  categories: string[];
  gender: 'male' | 'female';
}

export const netWorthPeople: NetWorthPerson[] = [
  {
    id: 1,
    name: "Keyra Agustina",
    gender: "female",
    netWorth: 100000,
    currency: "USD",
    occupation: "Model",
    dateOfBirth: "1986-05-14",
    country: "Argentina",
    industry: "Modeling",
    company: "Independent",
    description: "Keyra Agustina is an Argentine glamour model and webcam mistress who has a net worth of $100 thousand dollars. Born in Laferrere, Great Buenos Aires, Argentina, Keyra Agustina, also known as Julieta Machado, began posting pictures of her body on an Argentine internet forum in 2004. Her photos, which rarely featured her face, became quite popular very quickly. She was subsequently mentioned by multiple media sources, including Howard Stern, who stated that she had \"The Best Ass on the Internet\".",
    source: "Idol Net Worth",
    lastUpdated: "2025-01-01",
    imageUrl: "https://vz.cnwimg.com/thm/MeqK3Ua4jLTaxZv8ZMZgoAdEa2I=/400x400/center/top/filters:format(webp)/2013/01/CNW-Woman-4.png",
    slug: "keyra-agustina-net-worth",
    categories: ["celebrities", "models"]
  },
  {
    id: 2,
    name: "Asa Akira",
    gender: "female",
    netWorth: 4000000,
    currency: "USD",
    occupation: "Pornographic film actor",
    dateOfBirth: "1986-01-03",
    country: "United States of America",
    industry: "Adult Entertainment",
    company: "Evil Angel",
    description: "Asa Akira is a Japanese-American adult film star who has a net worth of $4 million. Over the course of her adult film career, Asa Akira has appeared in over 500 adult films. She has won 32 major awards out of 82 nominations. In 2013, Akira became the third Asian performer after Asia Carrera and Stephanie Swift to win the AVN Female Performer of the Year Award. She also hosted the first and second ceremonies for the Pornhub Awards. Asa Akira is 5 feet two inches tall.",
    source: "Celebrity Net Worth",
    lastUpdated: "2025-01-02",
    imageUrl: "https://vz.cnwimg.com/thm/F5tfpDpoY1tMkxumGzptVlnrk5w=/600x300/center/top/filters:format(webp)/2021/08/asa-akira.jpg",
    slug: "asa-akira-net-worth",
    categories: ["celebrities", "models"]
  },
  {
    id: 3,
    name: "Alessandra Ambrosio",
    gender: "female",
    netWorth: 80000000,
    currency: "USD",
    occupation: "Fashion Model, Supermodel, Actor",
    dateOfBirth: "1981-04-11",
    country: "Brazil",
    industry: "Modeling",
    company: "Victoria's Secret",
    description: "Alessandra Ambrósio is a Brazilian model who has a net worth of $80 million. Alessandra Ambrósio established herself as one of the world's most recognizable supermodels through her work with Victoria's Secret, where she served as a Victoria's Secret Angel from 2004 to 2017. She began modeling at age 12 in Brazil and gained international recognition after becoming a finalist in Elite Model Look in 1996. Her breakthrough came when she appeared on the cover of Brazilian Elle magazine.",
    source: "Forbes",
    lastUpdated: "2025-01-03",
    imageUrl: "https://vz.cnwimg.com/thm/eTDbTjht4Z1vmfM5ejqLK4qF_fg=/600x300/center/top/filters:format(webp)/2010/03/Alessandra-Ambrosio.jpg",
    slug: "alessandra-ambrosio-net-worth",
    categories: ["celebrities", "models"]
  },
  {
    id: 5,
    name: "J. Alexander",
    gender: "male",
    netWorth: 7000000,
    currency: "USD",
    occupation: "Model",
    dateOfBirth: "1958-04-12",
    country: "United States of America",
    industry: "Fashion",
    company: "ANTM",
    description: "J. Alexander is an American reality television personality and runway coach who has a net worth of $7 million. J. Alexander was born in The Bronx, New York City, New York in April 1958. He is known for his work on the reality TV series America's Next Top Model. J. Alexander travels for the fashion and modeling industries and resides in New York City and Paris.",
    source: "TheRichest",
    lastUpdated: "2025-01-05",
    imageUrl: "https://vz.cnwimg.com/thm/qiFvQXrvOViwzFdQcEuCb-WyGrY=/600x300/center/top/filters:format(webp)/2019/02/jalex.jpg",
    slug: "j.-alexander-net-worth",
    categories: ["celebrities", "models"]
  },
  {
    id: 269,
    name: "Yellowman",
    gender: "male",
    netWorth: 500000,
    currency: "USD",
    occupation: "Singer, Musician, Songwriter",
    dateOfBirth: "1956-01-15",
    country: "Jamaica",
    industry: "Disc jockey",
    company: "Independent",
    description: "Yellowman is a Jamaican reggae and dancehall DJ who has a net worth of $500 thousand. Yellowman was born in Kingston, Jamaica in January 1957. Yellowman became popular in Jamaica in the 1980s with a series of popular singles. He won The Tastee Talent Contest in Jamaica and became the first dancehall artist signed to a major American label when he joined Columbia Records. Yellowman's debut studio album Mister Yellowman was released in 1982.",
    source: "Celebrity Net Worth",
    lastUpdated: "2025-04-13",
    imageUrl: "https://vz.cnwimg.com/thm/OH5b_m7UiXKUI8nShG5TfcPaiu0=/400x400/center/top/filters:format(webp)/2015/06/GettyImages-74118438-e1522452214160.jpg",
    slug: "yellowman-net-worth",
    categories: ["celebrities", "djs"]
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
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 1,
    minimumFractionDigits: 0,
    notation: 'compact',
    compactDisplay: 'short',
  });
};

/**
 * Get a list of similar people based on industry and net worth range
 * @param currentPerson The current person being viewed
 * @param limit Maximum number of people to return
 * @returns Array of similar people
 */
export function getSimilarPeople(currentPerson: NetWorthPerson, limit: number = 10): NetWorthPerson[] {
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
  "celebrities": {
    id: "cat1",
    title: "50 Richest Celebrities In The World",
    description: "Explore the richest celebrities in the world, featuring actors, musicians, athletes, and media moguls who built massive fortunes. See how fame, talent, and smart investments shaped their financial empires across entertainment and beyond.",
    slug: "richest-celebrities-in-the-world",
    imageUrl: "https://img-cdn.inc.com/image/upload/f_webp,q_auto,c_fit/images/panoramic/Lebron-James_534593_uejtbc.jpg"
  },
  "models": {
    id: "cat2",
    title: "50 Richest Models In The World",
    description: "Discover the world's richest models, from fashion icons to business-savvy superstars, ranked by net worth. Explore how these influential figures turned modeling into global empires through endorsements, brand deals, and entrepreneurship.",
    slug: "richest-models-in-the-world",
    imageUrl: "https://images.hellomagazine.com/horizon/landscape/1cd2bd9db1df-kim-kardashian-t.jpg?tx=c_limit,w_640"
  },
    "djs": {
    id: "cat3",
    title: "50 Richest DJs In The World",
    description: "Discover the world's richest models, from fashion icons to business-savvy superstars, ranked by net worth. Explore how these influential figures turned modeling into global empires through endorsements, brand deals, and entrepreneurship.",
    slug: "richest-djs-in-the-world",
    imageUrl: "https://dailymusicroll.s3.us-west-2.amazonaws.com/wp-content/uploads/2022/08/30121227/david-guetta-live-665x365.jpg"
  },
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

/**
 * Calculate age from date of birth
 * @param dateOfBirth ISO date string
 * @returns Formatted age string
 */
export function formatAge(dateOfBirth: string): string {
  const birthDate = new Date(dateOfBirth);
  const today = new Date();
  
  const monthDiff = today.getMonth() - birthDate.getMonth();
  let age = today.getFullYear() - birthDate.getFullYear();
  
  // Adjust age if birthday hasn't occurred this year
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  const formattedDate = birthDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
  
  return `${formattedDate} (${age} years old)`;
}

/**
 * Generate a dynamic description using proper pronouns
 * @param person The person object
 * @returns A formatted description string
 */
export function generateDynamicDescription(person: NetWorthPerson): string {
  const pronouns = {
    subject: person.gender === 'male' ? 'he' : 'she',
    object: person.gender === 'male' ? 'him' : 'her',
    possessive: person.gender === 'male' ? 'his' : 'her',
  };

  const age = new Date().getFullYear() - new Date(person.dateOfBirth).getFullYear();
  const formattedNetWorth = formatNetWorth(person.netWorth, person.currency);

return `${person.name} has an estimated net worth of ${formattedNetWorth}, ${pronouns.subject} has made ${pronouns.possessive} fortune primarily through ${pronouns.possessive} work in the ${person.industry.toLowerCase()} industry. Born in {formatAge(person.dateOfBirth)}, ${person.name} is a ${person.occupation.toLowerCase()} based in ${person.country}, `;
}
