import { fixGenderCaseInData } from './fixGenderCase';

interface Person {
  id: string;
  slug: string;
  name: string;
  netWorth: number;
  currency: string;
  source: string;
  details: string;
  country: string;
  gender: string;
  occupation: string;
  company?: string;
  industry: string;
  imageUrl?: string;
}

interface Category {
  id: number;
  slug: string;
  title: string;
  description: string;
  imageUrl?: string;
}

const rawNetWorthPeople: Person[] = [
  {
    id: "aliko-dangote",
    slug: "aliko-dangote",
    name: "Aliko Dangote",
    netWorth: 13900000000,
    currency: "USD",
    source: "Cement, Sugar, Flour",
    details: "Aliko Dangote is the richest person in Africa, with a net worth of $13.9 billion. He founded Dangote Cement, the continent's largest cement producer.",
    country: "Nigeria",
    gender: "male",
    occupation: "Business Magnate",
    company: "Dangote Group",
    industry: "Manufacturing",
    imageUrl: "/images/people/aliko-dangote.jpg",
  },
  {
    id: "mike-adenuga",
    slug: "mike-adenuga",
    name: "Mike Adenuga",
    netWorth: 6900000000,
    currency: "USD",
    source: "Telecom, Oil",
    details: "Mike Adenuga is the second richest person in Nigeria, with interests in telecom and oil production.",
    country: "Nigeria",
    gender: "male",
    occupation: "Business Magnate",
    company: "Globacom, Conoil",
    industry: "Telecommunications, Oil and Gas",
    imageUrl: "/images/people/mike-adenuga.jpg",
  },
  {
    id: "nassef-sawiris",
    slug: "nassef-sawiris",
    name: "Nassef Sawiris",
    netWorth: 8600000000,
    currency: "USD",
    source: "Construction, Investments",
    details: "Nassef Sawiris is an Egyptian billionaire businessman, the youngest of Onsi Sawiris' three sons. As of January 2024, his net worth was estimated at US$8.6 billion.",
    country: "Egypt",
    gender: "male",
    occupation: "Businessman",
    company: "Orascom Construction Industries",
    industry: "Construction, Investments",
    imageUrl: "/images/people/nassef-sawiris.jpg",
  },
  {
    id: "nicky-oppenheimer",
    slug: "nicky-oppenheimer",
    name: "Nicky Oppenheimer",
    netWorth: 8400000000,
    currency: "USD",
    source: "Diamonds",
    details: "Nicholas F. Oppenheimer is a South African billionaire businessman. He was formerly the chairman of De Beers diamond mining company and its subsidiary Diamond Trading Company.",
    country: "South Africa",
    gender: "male",
    occupation: "Businessman",
    company: "De Beers",
    industry: "Mining",
    imageUrl: "/images/people/nicky-oppenheimer.jpg",
  },
  {
    id: "johann- Rupert",
    slug: "johann- Rupert",
    name: "Johann Rupert",
    netWorth: 10700000000,
    currency: "USD",
    source: "Luxury Goods",
    details: "Johann Peter Rupert is a South African-born businessman who is the eldest son of business tycoon Anton Rupert and his wife Huberte. He is the chairman of Swiss-based luxury goods company Richemont and South Africa-based investment holding company Remgro.",
    country: "South Africa",
    gender: "male",
    occupation: "Businessman",
    company: "Richemont, Remgro",
    industry: "Luxury Goods, Investments",
    imageUrl: "/images/people/johann-rupert.jpg",
  },
  {
    id: "patrice-motsepe",
    slug: "patrice-motsepe",
    name: "Patrice Motsepe",
    netWorth: 2700000000,
    currency: "USD",
    source: "Mining",
    details: "Patrice Motsepe is a South African mining magnate. He is the founder and chairman of African Rainbow Minerals.",
    country: "South Africa",
    gender: "male",
    occupation: "Businessman",
    company: "African Rainbow Minerals",
    industry: "Mining",
    imageUrl: "/images/people/patrice-motsepe.jpg",
  },
  {
    id: "naguid-sawiris",
    slug: "naguid-sawiris",
    name: "Naguib Sawiris",
    netWorth: 3300000000,
    currency: "USD",
    source: "Telecom",
    details: "Naguib Onsi Sawiris is an Egyptian billionaire businessman. He is chairman of Orascom Telecom Media and Technology (OTMT).",
    country: "Egypt",
    gender: "male",
    occupation: "Businessman",
    company: "Orascom Telecom Media and Technology",
    industry: "Telecommunications",
    imageUrl: "/images/people/naguid-sawiris.jpg",
  },
  {
    id: "mohamed-mansour",
    slug: "mohamed-mansour",
    name: "Mohamed Mansour",
    netWorth: 3200000000,
    currency: "USD",
    source: "Diversified",
    details: "Mohamed Mansour is an Egyptian billionaire businessman and politician. He is the chairman of Mansour Group, a diversified conglomerate.",
    country: "Egypt",
    gender: "male",
    occupation: "Businessman, Politician",
    company: "Mansour Group",
    industry: "Diversified",
    imageUrl: "/images/people/mohamed-mansour.jpg",
  },
   {
    id: "issad-rebrab",
    slug: "issad-rebrab",
    name: "Issad Rebrab",
    netWorth: 5100000000,
    currency: "USD",
    source: "Food",
    details: "Issad Rebrab is an Algerian businessman, the founder and CEO of Cevital, the largest private company in Algeria.",
    country: "Algeria",
    gender: "male",
    occupation: "Businessman",
    company: "Cevital",
    industry: "Food",
    imageUrl: "/images/people/issad-rebrab.jpg",
  },
  {
    id: "yasseen-mansour",
    slug: "yasseen-mansour",
    name: "Yasseen Mansour",
    netWorth: 1900000000,
    currency: "USD",
    source: "Diversified",
    details: "Yasseen Mansour is an Egyptian businessman. He is a shareholder in the Mansour Group, a family-owned conglomerate.",
    country: "Egypt",
    gender: "male",
    occupation: "Businessman",
    company: "Mansour Group",
    industry: "Diversified",
    imageUrl: "/images/people/yasseen-mansour.jpg",
  },
  {
    id: "isabel-dos-santos",
    slug: "isabel-dos-santos",
    name: "Isabel dos Santos",
    netWorth: 2100000000,
    currency: "USD",
    source: "Investments",
    details: "Isabel dos Santos is an Angolan businesswoman and the eldest child of Angola's former president José Eduardo dos Santos.",
    country: "Angola",
    gender: "female",
    occupation: "Businesswoman",
    company: "Unitel",
    industry: "Telecommunications, Investments",
    imageUrl: "/images/people/isabel-dos-santos.jpg",
  },
  {
    id: "raymond-ackerman",
    slug: "raymond-ackerman",
    name: "Raymond Ackerman",
    netWorth: 1000000000,
    currency: "USD",
    source: "Retail",
    details: "Raymond Ackerman was a South African businessman, who was best known as the founder of the Pick n Pay supermarket chain.",
    country: "South Africa",
    gender: "male",
    occupation: "Businessman",
    company: "Pick n Pay",
    industry: "Retail",
    imageUrl: "/images/people/raymond-ackerman.jpg",
  },
  {
    id: "strive-masiyiwa",
    slug: "strive-masiyiwa",
    name: "Strive Masiyiwa",
    netWorth: 1400000000,
    currency: "USD",
    source: "Telecom",
    details: "Strive Masiyiwa is a Zimbabwean businessman, entrepreneur, and philanthropist. He is the founder and chairman of Econet Wireless.",
    country: "Zimbabwe",
    gender: "male",
    occupation: "Businessman, Philanthropist",
    company: "Econet Wireless",
    industry: "Telecommunications",
    imageUrl: "/images/people/strive-masiyiwa.jpg",
  },
  {
    id: "samih-sawiris",
    slug: "samih-sawiris",
    name: "Samih Sawiris",
    netWorth: 1100000000,
    currency: "USD",
    source: "Construction",
    details: "Samih Onsi Sawiris is an Egyptian businessman and the second of Onsi Sawiris' three sons. He is the chairman of Orascom Development Holding AG.",
    country: "Egypt",
    gender: "male",
    occupation: "Businessman",
    company: "Orascom Development Holding AG",
    industry: "Construction, Tourism",
    imageUrl: "/images/people/samih-sawiris.jpg",
  },
  {
    id: "folorunsho-alakija",
    slug: "folorunsho-alakija",
    name: "Folorunsho Alakija",
    netWorth: 1000000000,
    currency: "USD",
    source: "Oil, Fashion, Real Estate",
    details: "Folorunsho Alakija is a Nigerian businesswoman, one of the richest African women.",
    country: "Nigeria",
    gender: "female",
    occupation: "Businesswoman",
    company: "Famfa Oil",
    industry: "Oil, Fashion, Real Estate",
    imageUrl: "/images/people/folorunsho-alakija.jpg",
  },
];

const netWorthCategories: Category[] = [
  {
    id: 1,
    slug: "richest-global-executives",
    title: "Richest Global Executives",
    description: "Explore the net worth of the wealthiest executives worldwide, showcasing leaders in various industries.",
    imageUrl: "/images/categories/richest-global-executives.jpg",
  },
  {
    id: 2,
    slug: "richest-african-businessmen",
    title: "Richest African Businessmen",
    description: "Discover the wealthiest businessmen in Africa, their sources of wealth, and their impact on the continent's economy.",
    imageUrl: "/images/categories/richest-african-businessmen.jpg",
  },
  {
    id: 3,
    slug: "richest-african-women",
    title: "Richest African Women",
    description: "Meet the richest women in Africa, their diverse business ventures, and their contributions to various sectors.",
    imageUrl: "/images/categories/richest-african-women.jpg",
  },
  {
    id: 4,
    slug: "richest-egyptians",
    title: "Richest Egyptians",
    description: "Explore the list of the wealthiest individuals in Egypt, their industries, and their economic influence.",
    imageUrl: "/images/categories/richest-egyptians.jpg",
  },
  {
    id: 5,
    slug: "richest-south-africans",
    title: "Richest South Africans",
    description: "Discover the wealthiest people in South Africa, their business empires, and their impact on the country's economy.",
    imageUrl: "/images/categories/richest-south-africans.jpg",
  },
];

const netWorthPeople = fixGenderCaseInData(rawNetWorthPeople) as Person[];

function findPersonBySlug(slug: string): Person | undefined {
  return netWorthPeople.find(person => person.slug === slug);
}

function findCategoryBySlug(slug: string): Category | undefined {
  return netWorthCategories.find(category => category.slug === slug);
}

function getCategoryIdBySlug(slug: string): number | undefined {
  const category = netWorthCategories.find(category => category.slug === slug);
  return category ? category.id : undefined;
}

function getPeopleByCategory(categoryId: number): Person[] {
  return netWorthPeople.filter(person => {
    const categorySlugs = {
      1: ["Cement", "Sugar", "Flour", "Telecom", "Construction", "Investments", "Mining", "Luxury Goods", "Oil", "Food", "Real Estate", "Fashion"],
      2: ["Cement", "Sugar", "Flour", "Telecom", "Construction", "Investments", "Mining", "Luxury Goods", "Oil", "Food", "Real Estate", "Fashion"],
      3: ["Oil", "Fashion", "Real Estate", "Telecommunications, Investments"],
      4: ["Construction", "Investments", "Telecom", "Diversified"],
      5: ["Diamonds", "Luxury Goods", "Mining", "Retail", "Telecommunications"],
    };

    const categoryIdExists = categoryId in categorySlugs;
    if (!categoryIdExists) {
      console.warn(`No categories found for categoryId: ${categoryId}`);
      return false;
    }

    const personIndustry = person.industry;
    const categorySlugList = categorySlugs[categoryId as keyof typeof categorySlugs];

    if (!categorySlugList) {
      console.warn(`No slugs found for categoryId: ${categoryId}`);
      return false;
    }

    return categorySlugList.includes(personIndustry);
  });
}

function formatNetWorth(netWorth: number, currency: string): string {
  return netWorth.toLocaleString('en-US', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 1,
    minimumFractionDigits: 0,
    notation: 'compact',
    compactDisplay: 'short',
  });
}

export {
  netWorthPeople,
  netWorthCategories,
  findPersonBySlug,
  findCategoryBySlug,
  getCategoryIdBySlug,
  getPeopleByCategory,
  formatNetWorth
};
