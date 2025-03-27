
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
    description: "Patrice Motsepe is a South African mining billionaire and founder of African Rainbow Minerals. He became the first black African on the Forbes list in 2008.",
    source: "Forbes",
    lastUpdated: "2023-05-15",
    imageUrl: "/placeholder.svg",
    slug: "patrice-motsepe"
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
    description: "Johann Rupert is chairman of Swiss luxury goods firm Richemont and South Africa-based investment company Remgro.",
    source: "Forbes",
    lastUpdated: "2023-05-15",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Rupert-Johann-2004.jpg",
    slug: "johann-rupert"
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
    description: "Nicky Oppenheimer is heir to the De Beers diamond fortune. He sold his 40% stake in De Beers to mining company Anglo American for $5.1 billion in cash in 2012.",
    source: "Forbes",
    lastUpdated: "2023-05-15",
    imageUrl: "/placeholder.svg",
    slug: "nicky-oppenheimer"
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
    description: "Koos Bekker is the former CEO of South African media group Naspers. Under his leadership, Naspers invested in Chinese internet giant Tencent in 2001, a stake now worth billions.",
    source: "Forbes",
    lastUpdated: "2023-05-15",
    imageUrl: "/placeholder.svg",
    slug: "koos-bekker"
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
    description: "Michiel Le Roux founded Capitec Bank in 2001, which has grown to be one of South Africa's largest retail banks.",
    source: "Forbes",
    lastUpdated: "2023-05-15",
    imageUrl: "/placeholder.svg",
    slug: "michiel-le-roux"
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
    description: "Douw Steyn is the founder of insurance and financial services company BGL Group, which owns brands like Budget Insurance and Dial Direct.",
    source: "Forbes",
    lastUpdated: "2023-05-15",
    imageUrl: "/placeholder.svg",
    slug: "douw-steyn"
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
    description: "Stephen Saad co-founded Aspen Pharmacare in 1997, which has grown to become one of Africa's largest pharmaceutical manufacturers.",
    source: "Forbes",
    lastUpdated: "2023-05-15",
    imageUrl: "/placeholder.svg",
    slug: "stephen-saad"
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
    description: "Before becoming South Africa's president, Cyril Ramaphosa built his fortune through investments in mining, banking, and telecommunications.",
    source: "Bloomberg",
    lastUpdated: "2023-05-15",
    imageUrl: "/placeholder.svg",
    slug: "cyril-ramaphosa"
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
    description: "Jannie Mouton founded PSG Group, a listed investment holding company with interests in financial services, education, and agriculture.",
    source: "Forbes",
    lastUpdated: "2023-05-15",
    imageUrl: "/placeholder.svg",
    slug: "jannie-mouton"
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
    description: "Adrian Gore founded Discovery Limited in 1992, which has revolutionized the health insurance industry with its behavior-based model.",
    source: "Forbes",
    lastUpdated: "2023-05-15",
    imageUrl: "/placeholder.svg",
    slug: "adrian-gore"
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
