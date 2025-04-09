
import { celebrities } from "./celebrityData";
import { celebrities as popularCelebrities } from "./popularData";

export interface CelebrityCategory {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageUrl?: string;
  filter: (celebrity: any) => boolean;
}

// List of pre-defined celebrity categories
const celebrityCategories: CelebrityCategory[] = [
  {
    id: 1,
    title: "25 Highest Paid Players At Kaizer Chiefs",
    slug: "highest-paid-players-at-kaizer-chiefs",
    description: "Top earning football players from Kaizer Chiefs, one of South Africa's most popular football clubs. Ever wondered which stars command the biggest paychecks at Naturena? We're pulling back the curtain to reveal the highest earners wearing the iconic Gold and Black.",
    imageUrl: "https://kcpub.azureedge.net/storage/uploads/public/67e/292/195/67e292195c72d356849357.jpg",
    filter: (celebrity) => celebrity.company?.toLowerCase().includes("kaizer chiefs")
  },
    {
    id: 2,
    title: "26 Highest Paid Players At Mamelodi Sundowns",
    slug: "highest-paid-players-at-mamelodi-sundowns",
    description: "A list of the highest paid football players at Mamelodi Sundowns. When you talk about financial heavyweights in African football, Mamelodi Sundowns is inevitably part of the conversation. They are the undisputed powerhouse of recent South African football, collecting trophies with relentless consistency. Mamelodi Sundowns' era of dominance is fueled by incredible talent and significant investment.",
    imageUrl: "https://sundownsfc.co.za/wp-content/uploads/2025/03/B25CASS0995-3.jpg",
    filter: (celebrity) => celebrity.company?.toLowerCase().includes("mamelodi sundowns")
  },
      {
    id: 3,
    title: "50 Highest-Paid Football Players in South Africa's PSL",
    slug: "highest-paid-football-players-in-south-africas-psl",
    description: "The South African Premier Soccer League stands as one of Africa's most prominent and financially robust leagues, attracting top talent with competitive salaries. The league's top stars are cashing in with eye-watering salaries, making them some of the highest earners in African football. Here's a breakdown of who's topping the charts financially in the PSL.",
    imageUrl: "https://sundownsfc.co.za/wp-content/uploads/2024/12/Richards-Bay-Report.jpg",
    filter: (celebrity) => 
      celebrity.industry?.toLowerCase() === "football" && 
      celebrity.occupation?.toLowerCase().includes("player") && 
      (celebrity.company?.toLowerCase().includes("premier league") || 
       celebrity.company?.toLowerCase().includes("kaizer") || 
       celebrity.company?.toLowerCase().includes("pirates") || 
       celebrity.company?.toLowerCase().includes("sundowns"))
  },
  {
    id: 4,
    title: "26 Highest Paid Players At Orlando Pirates",
    slug: "highest-paid-players-at-orlando-pirates",
    description: "Highest paid football stars from Orlando Pirates FC in the Premier Soccer League. Big money moves and top-tier talent define Orlando Pirates' current squad. With hefty paychecks to match their skill, some players are earning figures that turn heads both on and off the pitch. From veterans to rising stars, here's a look at who's banking the most at the Buccaneers.",
    imageUrl: "https://www.orlandopiratesfc.com/storage/2025/04/B25DAFRA2950-e1743545142948.jpg",
    filter: (celebrity) => celebrity.company?.toLowerCase().includes("orlando pirates")
  },
        {
    id: 5,
    title: "16 Highest-Paid CEOs in South Africa",
    slug: "highest-paid-ceos-in-south-africa",
    description: "South Africa's corporate sector has some of the highest-paid and influential CEOs on the continent. These leaders are not only responsible for steering billion-rand companies through economic shifts but are also rewarded handsomely for their efforts.",
    imageUrl: "https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A741d8712-6192-4515-b7b3-c19c96e3af16?source=next-article&fit=scale-down&quality=highest&width=1440&dpr=1",
    filter: (celebrity) => celebrity.occupation?.toLowerCase().includes("ceo")
  },
    {
    id: 6,
    title: "10 Highest Paid Coaches in South Africa",
    slug: "highest-paid-coaches-in-south-africa",
    description: "South Africa's Premiership is home to some of the most talented coaches in African football. With top-tier teams and a passionate fanbase, the league attracts skilled managers who are well-compensated for their expertise. Here's a look at the highest-paid coaches in the PSL and what makes them stand out.",
    imageUrl: "https://kcpub.azureedge.net/storage/uploads/public/67e/292/195/67e292195c72d356849357.jpg",
    filter: (celebrity) => celebrity.occupation?.toLowerCase().includes("football coach")
  }
];

// Get all celebrity categories 
export function getAllCelebrityCategories(): CelebrityCategory[] {
  return celebrityCategories;
}

// Find a category by slug
export function findCelebrityCategoryBySlug(slug: string): CelebrityCategory | undefined {
  return celebrityCategories.find(category => category.slug === slug);
}

// Get a category ID by slug
export function getCelebrityCategoryIdBySlug(slug: string): number | undefined {
  const category = celebrityCategories.find(category => category.slug === slug);
  return category?.id;
}

// Get celebrities by category ID
export function getCelebritiesByCategory(categoryId: number): any[] {
  const category = celebrityCategories.find(cat => cat.id === categoryId);
  
  if (!category) {
    return [];
  }
  
  // Use the standard celebrities by default, or popularCelebrities if appropriate
  return celebrities.filter(celebrity => category.filter(celebrity));
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
export function getAllCelebrityMetadata(): CategoryMetadata[] {
  return celebrityCategories.map(({ id, title, slug, description, imageUrl }) => ({
    id,
    title,
    slug,
    description,
    imageUrl,
  }));
}
