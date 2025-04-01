
import { v4 as uuidv4 } from 'uuid';

// Define Celebrity interface
export interface Celebrity {
  id: string;
  name: string;
  slug: string;
  occupation: string;
  salary: number;
  currency: string;
  imageUrl?: string;
  description: string;
  age: number;
  country: string;
  company?: string;
  industry: string;
  source: string;
  lastUpdated: string;
  categories: string[];
}

// Define Category interface
export interface CelebrityCategory {
  id: string;
  title: string;
  description: string;
  slug: string;
  imageUrl?: string;
}

// Categories for celebrities
export const celebrityCategories: CelebrityCategory[] = [
  {
    id: uuidv4(),
    title: "Football Players",
    description: "The highest-paid football players in South Africa",
    slug: "football-players",
    imageUrl: "/placeholder.svg"
  },
  {
    id: uuidv4(),
    title: "Actors & Actresses",
    description: "South Africa's top-paid actors and actresses",
    slug: "actors-actresses",
    imageUrl: "/placeholder.svg"
  },
  {
    id: uuidv4(),
    title: "Musicians",
    description: "The most successful musicians in South Africa",
    slug: "musicians",
    imageUrl: "/placeholder.svg"
  },
  {
    id: uuidv4(),
    title: "TV Personalities",
    description: "South Africa's highest-paid TV personalities",
    slug: "tv-personalities",
    imageUrl: "/placeholder.svg"
  },
  {
    id: uuidv4(),
    title: "Sports Stars",
    description: "Top-earning sports stars in South Africa",
    slug: "sports-stars",
    imageUrl: "/placeholder.svg"
  }
];

// Sample celebrity data
export const celebrities: Celebrity[] = [
  {
    id: uuidv4(),
    name: "Percy Tau",
    slug: "percy-tau",
    occupation: "Football Player",
    salary: 8500000,
    currency: "ZAR",
    imageUrl: "/placeholder.svg",
    description: "Percy Tau is a South African professional footballer who plays as a forward for Egyptian Premier League club Al Ahly and the South Africa national team. Known for his pace and technical ability, Tau has previously played for European clubs including Club Brugge and Brighton & Hove Albion.",
    age: 30,
    country: "South Africa",
    company: "Al Ahly SC",
    industry: "Football",
    source: "Sports Industry Reports",
    lastUpdated: "May 2023",
    categories: ["football-players", "sports-stars"]
  },
  {
    id: uuidv4(),
    name: "Themba Zwane",
    slug: "themba-zwane",
    occupation: "Football Player",
    salary: 5200000,
    currency: "ZAR",
    imageUrl: "/placeholder.svg",
    description: "Themba Zwane is a South African football midfielder who plays for Mamelodi Sundowns and the South African national team. Known for his playmaking abilities and technical skills, Zwane has been instrumental in Sundowns' domestic and continental successes.",
    age: 34,
    country: "South Africa",
    company: "Mamelodi Sundowns",
    industry: "Football",
    source: "Sports Industry Reports",
    lastUpdated: "June 2023",
    categories: ["football-players", "sports-stars"]
  },
  {
    id: uuidv4(),
    name: "Itumeleng Khune",
    slug: "itumeleng-khune",
    occupation: "Football Player",
    salary: 4800000,
    currency: "ZAR",
    imageUrl: "/placeholder.svg",
    description: "Itumeleng Khune is a South African professional footballer who plays as a goalkeeper for Kaizer Chiefs and the South Africa national team. Renowned for his distribution skills and shot-stopping abilities, Khune has been one of South Africa's most consistent performers.",
    age: 37,
    country: "South Africa",
    company: "Kaizer Chiefs",
    industry: "Football",
    source: "Sports Industry Reports",
    lastUpdated: "April 2023",
    categories: ["football-players", "sports-stars"]
  },
  {
    id: uuidv4(),
    name: "Thembinkosi Lorch",
    slug: "thembinkosi-lorch",
    occupation: "Football Player",
    salary: 3800000,
    currency: "ZAR",
    imageUrl: "/placeholder.svg",
    description: "Thembinkosi Lorch is a South African professional footballer who plays as a forward for Orlando Pirates and the South African national team. Known for his creativity and goal-scoring ability, Lorch has established himself as one of the premier talents in South African football.",
    age: 31,
    country: "South Africa",
    company: "Orlando Pirates",
    industry: "Football",
    source: "Sports Industry Reports",
    lastUpdated: "July 2023",
    categories: ["football-players", "sports-stars"]
  },
  {
    id: uuidv4(),
    name: "Andile Jali",
    slug: "andile-jali",
    occupation: "Football Player",
    salary: 3600000,
    currency: "ZAR",
    imageUrl: "/placeholder.svg",
    description: "Andile Jali is a South African professional footballer who plays as a midfielder. Known for his tenacity and passing range, Jali has had stints with Orlando Pirates, KV Oostende, and Mamelodi Sundowns, as well as representing the South African national team.",
    age: 34,
    country: "South Africa",
    company: "Mamelodi Sundowns",
    industry: "Football",
    source: "Sports Industry Reports",
    lastUpdated: "May 2023",
    categories: ["football-players", "sports-stars"]
  },
  {
    id: uuidv4(),
    name: "Pearl Thusi",
    slug: "pearl-thusi",
    occupation: "Actress",
    salary: 4200000,
    currency: "ZAR",
    imageUrl: "/placeholder.svg",
    description: "Pearl Thusi is a South African actress, model, television host, and radio personality. She is known for her roles in various South African productions as well as international series like 'Quantico' and Netflix's 'Queen Sono'.",
    age: 36,
    country: "South Africa",
    company: "Netflix",
    industry: "Entertainment",
    source: "Entertainment Industry Reports",
    lastUpdated: "August 2023",
    categories: ["actors-actresses", "tv-personalities"]
  },
  {
    id: uuidv4(),
    name: "Black Coffee",
    slug: "black-coffee",
    occupation: "DJ and Producer",
    salary: 15000000,
    currency: "ZAR",
    imageUrl: "/placeholder.svg",
    description: "Black Coffee (born Nkosinathi Maphumulo) is a South African DJ, record producer, and songwriter. He has gained international recognition and has performed at major music festivals worldwide. His unique blend of house music with African influences has made him one of South Africa's most successful musical exports.",
    age: 46,
    country: "South Africa",
    company: "Self-employed",
    industry: "Music",
    source: "Music Industry Reports",
    lastUpdated: "September 2023",
    categories: ["musicians"]
  },
  {
    id: uuidv4(),
    name: "Bonang Matheba",
    slug: "bonang-matheba",
    occupation: "TV Presenter",
    salary: 7500000,
    currency: "ZAR",
    imageUrl: "/placeholder.svg",
    description: "Bonang Matheba is a South African television presenter, radio personality, businesswoman, and philanthropist. Often referred to as 'Queen B,' she has hosted shows like 'Top Billing' and 'Being Bonang' and has her own line of sparkling wine called House of BNG.",
    age: 37,
    country: "South Africa",
    company: "Self-employed",
    industry: "Entertainment",
    source: "Entertainment Industry Reports",
    lastUpdated: "July 2023",
    categories: ["tv-personalities"]
  },
  {
    id: uuidv4(),
    name: "Siya Kolisi",
    slug: "siya-kolisi",
    occupation: "Rugby Player",
    salary: 9800000,
    currency: "ZAR",
    imageUrl: "/placeholder.svg",
    description: "Siya Kolisi is a South African professional rugby union player who captained the South Africa national team, the Springboks, to victory at the 2019 Rugby World Cup. He currently plays for Racing 92 in the French Top 14 competition and continues to lead the national team.",
    age: 33,
    country: "South Africa",
    company: "Racing 92",
    industry: "Rugby",
    source: "Sports Industry Reports",
    lastUpdated: "October 2023",
    categories: ["sports-stars"]
  },
  {
    id: uuidv4(),
    name: "Trevor Noah",
    slug: "trevor-noah",
    occupation: "Comedian",
    salary: 25000000,
    currency: "ZAR",
    imageUrl: "/placeholder.svg",
    description: "Trevor Noah is a South African comedian, television host, actor, and political commentator. He is best known for hosting 'The Daily Show' on Comedy Central from 2015 to 2022. Noah has won numerous awards for his work and has authored the bestselling book 'Born a Crime'.",
    age: 40,
    country: "South Africa",
    company: "Self-employed",
    industry: "Entertainment",
    source: "Entertainment Industry Reports",
    lastUpdated: "November 2023",
    categories: ["tv-personalities"]
  }
];

// Format salary for display
export const formatSalary = (salary: number, currency: string) => {
  return salary.toLocaleString('en-US', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 1,
    minimumFractionDigits: 0,
    notation: 'compact',
    compactDisplay: 'short',
  });
};

// Find a celebrity by slug
export const findCelebrityBySlug = (slug: string): Celebrity | undefined => {
  return celebrities.find(celebrity => celebrity.slug === slug);
};

// Find category by slug
export const findCategoryBySlug = (slug: string): CelebrityCategory | undefined => {
  return celebrityCategories.find(category => category.slug === slug);
};

// Get category ID by slug
export const getCategoryIdBySlug = (slug: string): string | undefined => {
  const category = findCategoryBySlug(slug);
  return category?.id;
};

// Get celebrities by category
export const getCelebritiesByCategory = (categoryId: string): Celebrity[] => {
  return celebrities.filter(celebrity => 
    celebrity.categories.includes(categoryId) || 
    celebrity.categories.includes(findCategoryBySlug(categoryId)?.slug || '')
  );
};

// Get similar celebrities (same industry or similar salary)
export const getSimilarCelebrities = (celebrity: Celebrity, limit: number = 5): Celebrity[] => {
  return celebrities
    .filter(c => 
      c.id !== celebrity.id && 
      (c.industry === celebrity.industry || 
       Math.abs(c.salary - celebrity.salary) / celebrity.salary < 0.3)
    )
    .sort((a, b) => {
      // Sort by industry match first, then by salary similarity
      if (a.industry === celebrity.industry && b.industry !== celebrity.industry) {
        return -1;
      }
      if (a.industry !== celebrity.industry && b.industry === celebrity.industry) {
        return 1;
      }
      return Math.abs(a.salary - celebrity.salary) - Math.abs(b.salary - celebrity.salary);
    })
    .slice(0, limit);
};
