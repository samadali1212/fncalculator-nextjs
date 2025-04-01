
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

// Sample celebrity data
export const celebrities: Celebrity[] = [
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
