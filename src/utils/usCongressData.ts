
export interface CongressMember {
  id: string;
  name: string;
  slug: string;
  position: string;
  salary: number;
  party: string;
  state: string;
  description: string;
  imageUrl?: string;
  yearsInOffice?: number;
  committees?: string[];
}

export const congressMembers: CongressMember[] = [
  {
    id: "1",
    name: "Nancy Pelosi",
    slug: "nancy-pelosi",
    position: "Speaker of the House",
    salary: 223500,
    party: "Democratic",
    state: "California",
    description: "Nancy Pelosi is an American politician who served as the 52nd Speaker of the United States House of Representatives from 2019 to 2023 and previously from 2007 to 2011. She has served as a U.S. representative from California since 1987.",
    imageUrl: "/placeholder.svg",
    yearsInOffice: 36,
    committees: ["House Administration Committee", "Intelligence Committee"]
  },
  {
    id: "2",
    name: "Chuck Schumer",
    slug: "chuck-schumer",
    position: "Senate Majority Leader",
    salary: 193400,
    party: "Democratic",
    state: "New York",
    description: "Chuck Schumer has been the Senate Majority Leader since 2021 and is the senior United States senator from New York, a seat he has held since 1999. He is the current Senate Democratic Leader, having held the title of Senate Minority Leader from 2017 to 2021.",
    imageUrl: "/placeholder.svg",
    yearsInOffice: 24,
    committees: ["Senate Finance Committee", "Banking Committee"]
  },
  {
    id: "3",
    name: "Mitch McConnell",
    slug: "mitch-mcconnell",
    position: "Senate Minority Leader",
    salary: 193400,
    party: "Republican",
    state: "Kentucky",
    description: "Mitch McConnell is an American politician serving as the senior United States senator from Kentucky, a seat he has held since 1985. He served as Senate Majority Leader from 2015 to 2021 and has served as Senate Minority Leader since 2021.",
    imageUrl: "/placeholder.svg",
    yearsInOffice: 38,
    committees: ["Senate Appropriations Committee", "Rules Committee"]
  },
  {
    id: "4",
    name: "Alexandria Ocasio-Cortez",
    slug: "alexandria-ocasio-cortez",
    position: "Representative",
    salary: 174000,
    party: "Democratic",
    state: "New York",
    description: "Alexandria Ocasio-Cortez, often referred to as AOC, is an American politician who has served as the U.S. representative for New York's 14th congressional district since 2019. The district includes the eastern part of the Bronx, portions of north-central Queens, and Rikers Island in New York City.",
    imageUrl: "/placeholder.svg",
    yearsInOffice: 5,
    committees: ["House Committee on Oversight and Reform", "Financial Services Committee"]
  },
  {
    id: "5",
    name: "Ted Cruz",
    slug: "ted-cruz",
    position: "Senator",
    salary: 174000,
    party: "Republican",
    state: "Texas",
    description: "Ted Cruz is an American politician and attorney serving as the junior United States senator for Texas since 2013. He was a candidate for the Republican nomination for President of the United States in the 2016 election.",
    imageUrl: "/placeholder.svg",
    yearsInOffice: 10,
    committees: ["Senate Judiciary Committee", "Commerce Committee"]
  },
  {
    id: "6",
    name: "Kevin McCarthy",
    slug: "kevin-mccarthy",
    position: "House Minority Leader",
    salary: 193400,
    party: "Republican",
    state: "California",
    description: "Kevin McCarthy is an American politician serving as House Minority Leader in the United States House of Representatives since 2019. He served as House Majority Leader from 2014 to 2019 and has served as the U.S. representative for California's 23rd congressional district since 2007.",
    imageUrl: "/placeholder.svg",
    yearsInOffice: 16,
    committees: ["House Intelligence Committee", "Armed Services Committee"]
  },
  {
    id: "7",
    name: "Bernie Sanders",
    slug: "bernie-sanders",
    position: "Senator",
    salary: 174000,
    party: "Independent",
    state: "Vermont",
    description: "Bernie Sanders is an American politician who has been the junior United States senator from Vermont since 2007. He was a Democratic presidential candidate in the 2016 and 2020 elections. Sanders is the longest-serving independent in U.S. congressional history.",
    imageUrl: "/placeholder.svg",
    yearsInOffice: 16,
    committees: ["Senate Budget Committee", "Health, Education, Labor and Pensions Committee"]
  },
  {
    id: "8",
    name: "Cory Booker",
    slug: "cory-booker",
    position: "Senator",
    salary: 174000,
    party: "Democratic",
    state: "New Jersey",
    description: "Cory Booker is an American politician serving as the junior United States senator from New Jersey since 2013. He was previously the 36th mayor of Newark from 2006 to 2013. He was a candidate for the Democratic nomination for President of the United States in the 2020 election.",
    imageUrl: "/placeholder.svg",
    yearsInOffice: 10,
    committees: ["Senate Judiciary Committee", "Foreign Relations Committee"]
  },
  {
    id: "9",
    name: "Rand Paul",
    slug: "rand-paul",
    position: "Senator",
    salary: 174000,
    party: "Republican",
    state: "Kentucky",
    description: "Rand Paul is an American politician and physician serving as the junior United States senator from Kentucky since 2011. He is the son of former U.S. Representative Ron Paul of Texas who was a presidential candidate in 1988, 2008, and 2012.",
    imageUrl: "/placeholder.svg",
    yearsInOffice: 12,
    committees: ["Senate Health Committee", "Foreign Relations Committee"]
  },
  {
    id: "10",
    name: "Elizabeth Warren",
    slug: "elizabeth-warren",
    position: "Senator",
    salary: 174000,
    party: "Democratic",
    state: "Massachusetts",
    description: "Elizabeth Warren is an American politician and former law professor serving as the senior United States senator from Massachusetts since 2013. She was a candidate for the Democratic nomination for President of the United States in the 2020 election.",
    imageUrl: "/placeholder.svg",
    yearsInOffice: 10,
    committees: ["Senate Banking Committee", "Finance Committee"]
  }
];

// Helper functions
export const getAllCongressMembers = (): CongressMember[] => {
  return congressMembers;
};

export const getCongressMemberBySlug = (slug: string): CongressMember | undefined => {
  return congressMembers.find((member) => member.slug === slug);
};

export const formatCongressSalary = (salary: number, currency: string = "USD"): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 0,
  }).format(salary);
};

export const getRelatedCongressMembers = (currentMember: CongressMember, limit: number = 3): CongressMember[] => {
  return congressMembers
    .filter((member) => member.id !== currentMember.id && member.party === currentMember.party)
    .slice(0, limit);
};
