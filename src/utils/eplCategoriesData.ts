
import { eplPlayers } from "./eplPlayersData";

export interface EPLCategory {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageUrl?: string;
  filter: (player: any) => boolean;
}

// List of pre-defined EPL player categories
const eplCategories: EPLCategory[] = [
  {
    id: 1,
    title: "Top 10 Highest Paid Players in the Premier League",
    slug: "top-10-highest-paid-epl-players",
    description: "The Premier League is home to some of the highest-paid footballers in the world. These players earn astronomical weekly wages, reflecting their status as elite athletes in the world's most-watched football league.",
    imageUrl: "https://resources.premierleague.com/photos/2024/04/16/ee85c29e-0c56-4366-9309-643398ecc9ea/FhweyqQXsAEYar9.jpg?width=860&height=573",
    filter: (player) => player.weeklySalary >= 200000
  },
  {
    id: 2,
    title: "Manchester City Players Salaries",
    slug: "manchester-city-players-salaries",
    description: "Manchester City, backed by their wealthy owners, boasts some of the highest-paid footballers in the Premier League. Having established themselves as the dominant force in English football in recent years, City's wage bill reflects their status as one of Europe's elite clubs.",
    imageUrl: "https://resources.premierleague.com/photos/2023/08/14/6d479ab9-f57c-4962-84e5-cfbcbcddbc25/GettyImages-1657774828.jpg?width=860&height=573",
    filter: (player) => player.team.toLowerCase().includes("manchester city")
  },
  {
    id: 3,
    title: "Manchester United Players Salaries",
    slug: "manchester-united-players-salaries",
    description: "Manchester United, despite their recent struggles on the pitch, remain one of the highest-paying clubs in world football. The Red Devils continue to attract top talent with lucrative contracts as they aim to return to their former glory.",
    imageUrl: "https://resources.premierleague.com/photos/2024/01/14/7613f2bb-54ca-4189-9e70-b00d5dac9f2a/Scott-McTominay-Manchester-United.jpg?width=860&height=573",
    filter: (player) => player.team.toLowerCase().includes("manchester united")
  },
  {
    id: 4,
    title: "Liverpool FC Players Salaries",
    slug: "liverpool-players-salaries",
    description: "Liverpool FC has built a competitive squad under careful financial management. While not always the highest spenders, the Reds have invested strategically in key players who have helped bring domestic and European success back to Anfield.",
    imageUrl: "https://resources.premierleague.com/photos/2023/12/17/5b4f00b3-d1c0-4050-ba7b-4837b86df8a3/Liverpool-celebrate.jpg?width=860&height=573",
    filter: (player) => player.team.toLowerCase().includes("liverpool")
  },
  {
    id: 5,
    title: "Arsenal Players Salaries",
    slug: "arsenal-players-salaries",
    description: "Arsenal has shown increasing financial muscle in recent transfer windows as they push to return to Champions League football and challenge for the Premier League title. The Gunners have invested heavily in young talent while also attracting established stars with competitive wages.",
    imageUrl: "https://resources.premierleague.com/photos/2023/04/14/a1cebf96-83c6-449d-8d39-48703d88ed86/kristiaan-henson-GG4zCl0zHWM-unsplash-1.jpg?width=860&height=573",
    filter: (player) => player.team.toLowerCase().includes("arsenal")
  },
  {
    id: 6,
    title: "Top English Players Salaries in the Premier League",
    slug: "top-english-players-salaries",
    description: "English players often command premium wages in the Premier League, with clubs willing to pay a premium for homegrown talent. These wages reflect not only their abilities but also their importance for meeting homegrown player quotas and connecting with domestic fans.",
    imageUrl: "https://resources.premierleague.com/photos/2024/03/26/27080302-1015-47d8-812d-65ab569f5c1a/England.jpg?width=860&height=573",
    filter: (player) => player.nationality.toLowerCase() === "england"
  }
];

// Get all EPL categories 
export function getAllEPLCategories(): EPLCategory[] {
  return eplCategories;
}

// Find a category by slug
export function findEPLCategoryBySlug(slug: string): EPLCategory | undefined {
  return eplCategories.find(category => category.slug === slug);
}

// Get a category ID by slug
export function getEPLCategoryIdBySlug(slug: string): number | undefined {
  const category = eplCategories.find(category => category.slug === slug);
  return category?.id;
}

// Get players by category ID
export function getPlayersByCategory(categoryId: number): any[] {
  const category = eplCategories.find(cat => cat.id === categoryId);
  
  if (!category) {
    return [];
  }
  
  return eplPlayers.filter(player => category.filter(player));
}

// Get category metadata
export interface CategoryMetadata {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageUrl?: string;
}

// Get all category metadata
export function getAllEPLCategoriesMetadata(): CategoryMetadata[] {
  return eplCategories.map(({ id, title, slug, description, imageUrl }) => ({
    id,
    title,
    slug,
    description,
    imageUrl,
  }));
}
