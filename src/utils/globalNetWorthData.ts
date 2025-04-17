
export interface GlobalNetWorthPerson {
  id: string;
  slug: string;
  name: string;
  netWorth: number;
  currency: string;
  occupation: string;
  industry: string;
  company?: string;
  country: string;
  age: number;
  description: string;
  imageUrl?: string;
  source: string;
  lastUpdated: string;
}

// Sample data for global net worth individuals
export const globalNetWorthPeople: GlobalNetWorthPerson[] = [
  {
    id: "elon-musk",
    slug: "elon-musk",
    name: "Elon Musk",
    netWorth: 210000000000,
    currency: "USD",
    occupation: "Entrepreneur",
    industry: "Technology",
    company: "Tesla, SpaceX, X",
    country: "United States",
    age: 52,
    description: "Elon Musk is a business magnate and investor. He is the founder, CEO, and chief engineer of SpaceX; CEO and product architect of Tesla, Inc.; owner and chairman of X Corp.; founder of The Boring Company and xAI; co-founder of Neuralink and OpenAI; and president of the Musk Foundation.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg",
    source: "Forbes",
    lastUpdated: "2023-12-15"
  },
  {
    id: "jeff-bezos",
    slug: "jeff-bezos",
    name: "Jeff Bezos",
    netWorth: 168000000000,
    currency: "USD",
    occupation: "Entrepreneur",
    industry: "Technology",
    company: "Amazon",
    country: "United States",
    age: 60,
    description: "Jeff Bezos is an American entrepreneur, media proprietor, investor, and commercial astronaut. He is the founder, executive chairman, and former president and CEO of Amazon. With a net worth of around $168 billion, Bezos is one of the wealthiest people in the world.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Jeff_Bezos_at_the_Reagan_National_Defense_Forum_%28cropped%29.jpg/440px-Jeff_Bezos_at_the_Reagan_National_Defense_Forum_%28cropped%29.jpg",
    source: "Forbes",
    lastUpdated: "2023-12-20"
  },
  {
    id: "bernard-arnault",
    slug: "bernard-arnault",
    name: "Bernard Arnault",
    netWorth: 196000000000,
    currency: "USD",
    occupation: "Business Executive",
    industry: "Luxury Goods",
    company: "LVMH",
    country: "France",
    age: 75,
    description: "Bernard Arnault is a French businessman, investor, and art collector. He is the chairman and CEO of LVMH Moët Hennessy Louis Vuitton, the world's largest luxury goods company. Arnault and his family are among the world's wealthiest individuals.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Bernard_Arnault_%283%29_-_Inauguration_of_the_Louis_Vuitton_Foundation.jpg/440px-Bernard_Arnault_%283%29_-_Inauguration_of_the_Louis_Vuitton_Foundation.jpg",
    source: "Forbes",
    lastUpdated: "2023-12-22"
  },
  {
    id: "mark-zuckerberg",
    slug: "mark-zuckerberg",
    name: "Mark Zuckerberg",
    netWorth: 141000000000,
    currency: "USD",
    occupation: "Technology Executive",
    industry: "Social Media",
    company: "Meta Platforms",
    country: "United States",
    age: 40,
    description: "Mark Zuckerberg is an American internet entrepreneur and philanthropist. He is known for co-founding Meta Platforms, Inc. (formerly Facebook, Inc.) and serves as its chairman, chief executive officer, and controlling shareholder.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/440px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
    source: "Forbes",
    lastUpdated: "2024-01-05"
  },
  {
    id: "bill-gates",
    slug: "bill-gates",
    name: "Bill Gates",
    netWorth: 128000000000,
    currency: "USD",
    occupation: "Entrepreneur & Philanthropist",
    industry: "Technology",
    company: "Microsoft",
    country: "United States",
    age: 68,
    description: "Bill Gates is an American business magnate, software developer, investor, author, and philanthropist. He is a co-founder of Microsoft Corporation, and was its CEO until 2000. Gates is considered one of the best-known entrepreneurs of the microcomputer revolution.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bill_Gates_2023.jpg/440px-Bill_Gates_2023.jpg",
    source: "Forbes",
    lastUpdated: "2024-01-10"
  },
  {
    id: "warren-buffett",
    slug: "warren-buffett",
    name: "Warren Buffett",
    netWorth: 120000000000,
    currency: "USD",
    occupation: "Investor",
    industry: "Finance",
    company: "Berkshire Hathaway",
    country: "United States",
    age: 93,
    description: "Warren Buffett is an American business magnate, investor, and philanthropist. He is currently the chairman and CEO of Berkshire Hathaway. He is considered one of the most successful investors in the world and has a net worth of over $100 billion.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit.jpg/428px-Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit.jpg",
    source: "Forbes",
    lastUpdated: "2024-01-15"
  },
  {
    id: "larry-ellison",
    slug: "larry-ellison",
    name: "Larry Ellison",
    netWorth: 117000000000,
    currency: "USD",
    occupation: "Technology Executive",
    industry: "Software",
    company: "Oracle Corporation",
    country: "United States",
    age: 79,
    description: "Larry Ellison is an American business magnate and investor who is the co-founder, executive chairman, and chief technology officer of Oracle Corporation. As of 2024, he is listed among the wealthiest people in the world.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Larry_Ellison_picture.png/440px-Larry_Ellison_picture.png",
    source: "Forbes",
    lastUpdated: "2023-12-30"
  },
  {
    id: "mukesh-ambani",
    slug: "mukesh-ambani",
    name: "Mukesh Ambani",
    netWorth: 111000000000,
    currency: "USD",
    occupation: "Business Executive",
    industry: "Diversified",
    company: "Reliance Industries",
    country: "India",
    age: 66,
    description: "Mukesh Ambani is an Indian billionaire businessman. He is the chairman and managing director of Reliance Industries Ltd., a Fortune Global 500 company and India's most valuable company by market value.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Mukesh_Ambani.jpg/440px-Mukesh_Ambani.jpg",
    source: "Forbes",
    lastUpdated: "2024-01-20"
  },
  {
    id: "larry-page",
    slug: "larry-page",
    name: "Larry Page",
    netWorth: 110000000000,
    currency: "USD",
    occupation: "Computer Scientist",
    industry: "Technology",
    company: "Google/Alphabet",
    country: "United States",
    age: 51,
    description: "Larry Page is an American computer scientist and Internet entrepreneur. He is best known as one of the co-founders of Google along with Sergey Brin. Page was the CEO of Google from 1997 until August 2001, then from April 2011 until July 2015 when he became CEO of Alphabet Inc.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg/440px-Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg",
    source: "Forbes",
    lastUpdated: "2024-01-25"
  },
  {
    id: "sergey-brin",
    slug: "sergey-brin",
    name: "Sergey Brin",
    netWorth: 104000000000,
    currency: "USD",
    occupation: "Computer Scientist",
    industry: "Technology",
    company: "Google/Alphabet",
    country: "United States",
    age: 50,
    description: "Sergey Brin is an American business magnate, computer scientist, and Internet entrepreneur. Together with Larry Page, he co-founded Google. Brin was the president of Google's parent company, Alphabet Inc., until December 2019.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Sergey_Brin_cropped.jpg/440px-Sergey_Brin_cropped.jpg",
    source: "Forbes",
    lastUpdated: "2024-01-30"
  },
  {
    id: "steve-ballmer",
    slug: "steve-ballmer",
    name: "Steve Ballmer",
    netWorth: 90000000000,
    currency: "USD",
    occupation: "Business Executive",
    industry: "Technology",
    company: "Microsoft, LA Clippers",
    country: "United States",
    age: 68,
    description: "Steve Ballmer is an American businessman and investor who was the chief executive officer of Microsoft from 2000 to 2014. He is the current owner of the Los Angeles Clippers of the National Basketball Association (NBA).",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Steve_Ballmer_at_CES_2010_cropped.jpg/440px-Steve_Ballmer_at_CES_2010_cropped.jpg",
    source: "Forbes",
    lastUpdated: "2024-02-05"
  },
  {
    id: "carlos-slim",
    slug: "carlos-slim",
    name: "Carlos Slim Helú",
    netWorth: 96000000000,
    currency: "USD",
    occupation: "Business Magnate",
    industry: "Telecommunications",
    company: "América Móvil",
    country: "Mexico",
    age: 84,
    description: "Carlos Slim Helú is a Mexican business magnate, engineer, investor, and philanthropist. From 2010 to 2013, Slim was ranked as the richest person in the world. He derives his fortune from his extensive holdings in a considerable number of Mexican companies through his conglomerate, Grupo Carso.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Carlos_Slim_%2845680472234%29_%28cropped%29.jpg/440px-Carlos_Slim_%2845680472234%29_%28cropped%29.jpg",
    source: "Forbes",
    lastUpdated: "2024-02-10"
  },
  {
    id: "francoise-bettencourt-meyers",
    slug: "francoise-bettencourt-meyers",
    name: "Françoise Bettencourt Meyers",
    netWorth: 92000000000,
    currency: "USD",
    occupation: "Businesswoman",
    industry: "Cosmetics",
    company: "L'Oréal",
    country: "France",
    age: 70,
    description: "Françoise Bettencourt Meyers is a French billionaire heiress and author. She is the only daughter and heiress of Liliane Bettencourt, and as such is one of the principal shareholders of L'Oréal. She is the wealthiest woman in the world.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Francoise_Bettencourt-Meyers_2020_%28cropped%29.jpg/440px-Francoise_Bettencourt-Meyers_2020_%28cropped%29.jpg",
    source: "Forbes",
    lastUpdated: "2024-02-15"
  },
  {
    id: "amancio-ortega",
    slug: "amancio-ortega",
    name: "Amancio Ortega",
    netWorth: 88000000000,
    currency: "USD",
    occupation: "Fashion Executive",
    industry: "Retail",
    company: "Inditex (Zara)",
    country: "Spain",
    age: 87,
    description: "Amancio Ortega is a Spanish billionaire businessman. He is the founder and former chairman of Inditex fashion group, best known for its chain of Zara clothing and accessories shops. He is the wealthiest person in Spain.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Amancio_Ortega_2015_%28cropped%29.jpg/440px-Amancio_Ortega_2015_%28cropped%29.jpg",
    source: "Forbes",
    lastUpdated: "2024-02-20"
  },
  {
    id: "michael-bloomberg",
    slug: "michael-bloomberg",
    name: "Michael Bloomberg",
    netWorth: 85000000000,
    currency: "USD",
    occupation: "Business Executive",
    industry: "Financial Services",
    company: "Bloomberg L.P.",
    country: "United States",
    age: 82,
    description: "Michael Bloomberg is an American businessman, politician, philanthropist, and author. He is the majority owner and co-founder of Bloomberg L.P. He was the mayor of New York City from 2002 to 2013, and was a candidate in the 2020 Democratic presidential primaries.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Mike_Bloomberg_Headshot.jpg/440px-Mike_Bloomberg_Headshot.jpg",
    source: "Forbes",
    lastUpdated: "2024-02-25"
  }
];

// Helper function to format net worth
export const formatGlobalNetWorth = (amount: number, currency: string): string => {
  if (amount >= 1000000000) {
    return `${(amount / 1000000000).toFixed(1)}B ${currency}`;
  } else if (amount >= 1000000) {
    return `${(amount / 1000000).toFixed(1)}M ${currency}`;
  } else {
    return `${amount.toLocaleString()} ${currency}`;
  }
};

// Helper function to find person by slug
export const findGlobalPersonBySlug = (slug: string) => {
  return globalNetWorthPeople.find(person => person.slug === slug) || null;
};

// Helper function to get similar people
export const getSimilarGlobalPeople = (person: GlobalNetWorthPerson, limit: number) => {
  if (!person) return [];
  
  const similar = globalNetWorthPeople
    .filter(p => p.id !== person.id)
    .sort((a, b) => {
      // Prioritize same industry
      if (a.industry === person.industry && b.industry !== person.industry) return -1;
      if (a.industry !== person.industry && b.industry === person.industry) return 1;
      
      // Then sort by net worth difference
      const aDiff = Math.abs(a.netWorth - person.netWorth);
      const bDiff = Math.abs(b.netWorth - person.netWorth);
      return aDiff - bDiff;
    })
    .slice(0, limit);
    
  return similar;
};

// Helper function to create comparison URL
export const createGlobalComparisonUrl = (person1: GlobalNetWorthPerson, person2: GlobalNetWorthPerson) => {
  return `/compare-global/${person1.slug}-vs-${person2.slug}`;
};
