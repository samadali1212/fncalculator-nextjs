
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
    name: "Lucas Ribeiro",
    slug: "lucas-ribeiro",
    occupation: "Football Player",
    salary: 850000,
    currency: "ZAR",
    imageUrl: "https://sundownsfc.co.za/wp-content/uploads/2023/10/a_%C2%ACKit-Shoot-1447.jpg",
    description: "Lucas Ribeiro is a highly-rated Brazilian professional footballer who excels as an attacking midfielder for Mamelodi Sundowns FC. Known for his ability to revamp the midfield and generate interest from top-flight clubs like Burnley, Ribeiro is considered one of the best players in the league. Born on October 9, 1998, making him 27 years old in 2025, his estimated monthly salary ranges from R700,000 to R1,000,000. He brings international experience and skill to the Mamelodi Sundowns squad.",
    age: 27,
    country: "Brazil",
    company: "Mamelodi Sundowns",
    industry: "Football",
    source: "Research",
    lastUpdated: "2025-04-02",
    categories: ["football-players", "mamelodi-sundowns"]
  },
  {
    id: uuidv4(),
    name: "Ronwen Williams",
    slug: "ronwen-williams",
    occupation: "Football Player",
    salary: 500000,
    currency: "ZAR",
    imageUrl: "https://sundownsfc.co.za/wp-content/uploads/2020/12/Williams.jpg",
    description: "Ronwen Williams is a prominent South African professional footballer who plays as a goalkeeper for Mamelodi Sundowns FC and captains the South African national team. With over 12 years of professional experience, Williams joined Sundowns in 2022 after a long stint at SuperSport United. Born on January 21, 1992, making him 32 years old in 2025, his estimated monthly salary is R500,000. He is a key player for both club and country.",
    age: 32,
    country: "South Africa",
    company: "Mamelodi Sundowns",
    industry: "Football",
    source: "Research",
    lastUpdated: "2025-04-02",
    categories: ["football-players", "mamelodi-sundowns"]
  },
  {
    id: uuidv4(),
    name: "Denis Onyango",
    slug: "denis-onyango",
    occupation: "Football Player",
    salary: 450000,
    currency: "ZAR",
    imageUrl: "https://sundownsfc.co.za/wp-content/uploads/2020/12/Onyango-4.jpg",
    description: "Denis Onyango is a highly experienced Ugandan professional footballer who serves as a goalkeeper for Mamelodi Sundowns FC. Having joined the club in 2014, Onyango has had a distinguished career, also representing Uganda in the Africa Cup of Nations and captaining the national team until his retirement in 2021. Born on May 15, 1985, making him 39 years old in 2025, his alleged monthly salary is R450,000. His leadership and goalkeeping skills are invaluable to Mamelodi Sundowns.",
    age: 39,
    country: "Uganda",
    company: "Mamelodi Sundowns",
    industry: "Football",
    source: "Research",
    lastUpdated: "2025-04-02",
    categories: ["football-players", "mamelodi-sundowns"]
  },
  {
    id: uuidv4(),
    name: "Marcelo Allende",
    slug: "marcelo-allende",
    occupation: "Football Player",
    salary: 430000,
    currency: "ZAR",
    imageUrl: "https://sundownsfc.co.za/wp-content/uploads/2020/12/Allende.jpg",
    description: "Marcelo Allende is a talented Chilean professional footballer who plays as an attacking midfielder for Mamelodi Sundowns FC and the Chile national team. Regarded as a top youth prospect in Chile and having captained their team during the 2015 FIFA U-17 World Cup, Allende brings youthful energy and skill to the squad. Born on April 7, 2002, making him 22 years old in 2025, Marcelo Allende earns a monthly salary of R430,000. He is considered a key player for the future of Mamelodi Sundowns.",
    age: 22,
    country: "Chile",
    company: "Mamelodi Sundowns",
    industry: "Football",
    source: "Research",
    lastUpdated: "2025-04-02",
    categories: ["football-players", "mamelodi-sundowns"]
  },
  {
    id: uuidv4(),
    name: "Thapelo Morena",
    slug: "thapelo-morena",
    occupation: "Football Player",
    salary: 400000,
    currency: "ZAR",
    imageUrl: "https://sundownsfc.co.za/wp-content/uploads/2020/12/Morena-2.jpg",
    description: "Thapelo Morena is a versatile South African professional footballer who plays as both a defender and midfielder for Mamelodi Sundowns FC. Joining the club in 2016 from Bloemfontein Celtic, where he began his professional career in 2013, Morena is a valuable asset to the team. Born on August 6, 1993, making him 31 years old in 2025, his estimated monthly salary is R400,000, making him one of the highest-paid players at Sundowns in 2024. He also represents the South African national team.",
    age: 31,
    country: "South Africa",
    company: "Mamelodi Sundowns",
    industry: "Football",
    source: "Research",
    lastUpdated: "2025-04-02",
    categories: ["football-players", "mamelodi-sundowns"]
  },
  {
    id: uuidv4(),
    name: "Peter Shalulile",
    slug: "peter-shalulile",
    occupation: "Football Player",
    salary: 400000,
    currency: "ZAR",
    imageUrl: "https://sundownsfc.co.za/wp-content/uploads/2020/12/Shalulile-1.jpg",
    description: "Peter Shalulile is a Namibian professional footballer who plays as a striker for Mamelodi Sundowns FC. He also represents the Namibian national team, showcasing his talent on both club and international levels. Shalulile began his career in 2011 at Tura Magic and later moved to Highlands Park in 2015 before joining Sundowns. Born on October 23, 1993, making him 31 years old in 2025, his estimated monthly salary is R400,000. His striking prowess makes him a key player for Mamelodi Sundowns.",
    age: 31,
    country: "Namibia",
    company: "Mamelodi Sundowns",
    industry: "Football",
    source: "Research",
    lastUpdated: "2025-04-02",
    categories: ["football-players", "mamelodi-sundowns"]
  },
  {
    id: uuidv4(),
    name: "Keanu Cupido",
    slug: "keanu-cupido",
    occupation: "Football Player",
    salary: 450000,
    currency: "ZAR",
    imageUrl: "https://sundownsfc.co.za/wp-content/uploads/2025/02/Cupido-WHite-BAckground-Square.jpg",
    description: "Keanu Cupido is a South African defender who plays for Mamelodi Sundowns FC and the Bafana Bafana (South African national team). He recently joined Sundowns from Cape Town City FC before the close of the January 2025 transfer window. Born on January 15, 1998, making him 27 years old in 2025, his estimated monthly salary ranges from R350,000 to R570,000. Cupido is a promising defender strengthening the Sundowns' squad.",
    age: 27,
    country: "South Africa",
    company: "Mamelodi Sundowns",
    industry: "Football",
    source: "Research",
    lastUpdated: "2025-04-02",
    categories: ["football-players", "mamelodi-sundowns"]
  },
  {
    id: uuidv4(),
    name: "Teboho Mokoena",
    slug: "teboho-mokoena",
    occupation: "Football Player",
    salary: 400000,
    currency: "ZAR",
    imageUrl: "https://sundownsfc.co.za/wp-content/uploads/2020/12/Mokoena.jpg",
    description: "Teboho Mokoena is a proficient South African professional footballer recognized for his skills as a midfielder. He has proudly represented South Africa in various international competitions, showcasing his talent on the global stage. Mokoena officially joined Mamelodi Sundowns on January 27, 2022. Born on January 24, 1997, making him 28 years old in 2025, his alleged monthly salary ranges between R300,000 and R500,000. He is a valuable midfielder for Mamelodi Sundowns.",
    age: 28,
    country: "South Africa",
    company: "Mamelodi Sundowns",
    industry: "Football",
    source: "Research",
    lastUpdated: "2025-04-02",
    categories: ["football-players", "mamelodi-sundowns"]
  },
  {
    id: uuidv4(),
    name: "Mosa Lebusa",
    slug: "mosa-lebusa",
    occupation: "Football Player",
    salary: 300000,
    currency: "ZAR",
    imageUrl: "https://sundownsfc.co.za/wp-content/uploads/2020/12/Lebusa-2.jpg",
    description: "Mosa Lebusa is a South African professional footballer who plays as a centre-back and left-back for Mamelodi Sundowns FC. He had his youth career at Dinonyana FC and Ajax Cape Town, making his senior debut in 2012. Lebusa joined Mamelodi Sundowns in 2018 and has become a regular in the starting XI. Born on October 10, 1992, making him 32 years old in 2025, his estimated monthly salary is R300,000. He is a reliable defender for the team.",
    age: 32,
    country: "South Africa",
    company: "Mamelodi Sundowns",
    industry: "Football",
    source: "Research",
    lastUpdated: "2025-04-02",
    categories: ["football-players", "mamelodi-sundowns"]
  },
  {
    id: uuidv4(),
    name: "Aubrey Modiba",
    slug: "aubrey-modiba",
    occupation: "Football Player",
    salary: 290000,
    currency: "ZAR",
    imageUrl: "https://sundownsfc.co.za/wp-content/uploads/2020/12/Modiba-2.jpg",
    description: "Aubrey Modiba is a South African professional footballer who plays as a left winger for Mamelodi Sundowns FC. He has achieved career highs, including representing the South African national team at the Rio De Janeiro 2016 Summer Olympics. Born on July 23, 1995, making him 30 years old in 2025, Modiba's rumored monthly salary at Sundowns is around R290,000. He is a dynamic winger known for his speed and skill.",
    age: 30,
    country: "South Africa",
    company: "Mamelodi Sundowns",
    industry: "Football",
    source: "Research",
    lastUpdated: "2025-04-02",
    categories: ["football-players", "mamelodi-sundowns"]
  },
  {
    id: uuidv4(),
    name: "Themba Zwane",
    slug: "themba-zwane",
    occupation: "Football Player",
    salary: 350000,
    currency: "ZAR",
    imageUrl: "https://sundownsfc.co.za/wp-content/uploads/2020/12/Zwane-3.jpg",
    description: "Themba Zwane is a highly regarded South African professional football player who operates as an attacking midfielder for Mamelodi Sundowns FC and the national team. Known for his goal-scoring ability and playmaking skills, Zwane is a key figure in the Sundowns' midfield. Born on August 3, 1989, making him 36 years old in 2025, his alleged monthly salary at Sundowns ranges from R250,000 to R500,000. His experience and talent make him a vital player.",
    age: 36,
    country: "South Africa",
    company: "Mamelodi Sundowns",
    industry: "Football",
    source: "Research",
    lastUpdated: "2025-04-02",
    categories: ["football-players", "mamelodi-sundowns"]
  },
  {
    id: uuidv4(),
    name: "Mothobi Mvala",
    slug: "mothobi-mvala",
    occupation: "Football Player",
    salary: 250000,
    currency: "ZAR",
    imageUrl: "https://sundownsfc.co.za/wp-content/uploads/2020/12/Mvala1.jpg",
    description: "Mothobi Mvala is a South African professional football central defender who plays for Mamelodi Sundowns FC and the South African national team. Mvala got his big break at Highlands Park and was part of the 2016 Rio Olympics squad. Born on June 14, 1994, making him 30 years old in 2025, his estimated monthly salary at Sundowns is R250,000. He is a solid defender with national team experience.",
    age: 30,
    country: "South Africa",
    company: "Mamelodi Sundowns",
    industry: "Football",
    source: "Research",
    lastUpdated: "2025-04-02",
    categories: ["football-players", "mamelodi-sundowns"]
  },
  {
    id: uuidv4(),
    name: "Iqraam Rayners",
    slug: "iqraam-rayners",
    occupation: "Football Player",
    salary: 350000,
    currency: "ZAR",
    imageUrl: "https://sundownsfc.co.za/wp-content/uploads/2024/08/Rayners-.jpg",
    description: "Iqraam Rayners is a highly regarded South African professional footballer who plays as a forward for Mamelodi Sundowns FC and the Bafana Bafana. Considered one of South Africa's best attackers, Rayners joined the Brazilians in 2024 from Stellenbosch. Born on December 19, 1995, making him 30 years old in 2025, his estimated monthly salary ranges from R200,000 to R500,000. He is a dynamic forward adding firepower to the Sundowns' attack.",
    age: 30,
    country: "South Africa",
    company: "Mamelodi Sundowns",
    industry: "Football",
    source: "Research",
    lastUpdated: "2025-04-02",
    categories: ["football-players", "mamelodi-sundowns"]
  },
  {
    id: uuidv4(),
    name: "Khuliso Mudau",
    slug: "khuliso-mudau",
    occupation: "Football Player",
    salary: 300000,
    currency: "ZAR",
    imageUrl: "https://sundownsfc.co.za/wp-content/uploads/2020/12/Mudau-2.jpg",
    description: "Khuliso Mudau is a South African professional footballer who plays as a right-back for Mamelodi Sundowns FC and the South African national team. Currently regarded as one of the best right-backs in the league, Mudau signed for Mamelodi Sundowns in October 2020 on a five-year contract. Born on April 26, 1995, making him 30 years old in 2025, his estimated monthly salary is between R200,000 and R400,000. He is a key defender for both club and country.",
    age: 30,
    country: "South Africa",
    company: "Mamelodi Sundowns",
    industry: "Football",
    source: "Research",
    lastUpdated: "2025-04-02",
    categories: ["football-players", "mamelodi-sundowns"]
  },
  {
    id: uuidv4(),
    name: "Lucas Suarez",
    slug: "lucas-suarez",
    occupation: "Football Player",
    salary: 300000,
    currency: "ZAR",
    imageUrl: "https://sundownsfc.co.za/wp-content/uploads/2025/02/Suarez-WHite-BAckground-Square.jpg",
    description: "Lucas Suarez is an Argentine professional footballer who plays as a defender and left-back for Mamelodi Sundowns FC. He came on loan from Estudiantes de Río Cuarto and was previously on loan at Talleres, where he reportedly earned around R380,000 monthly. Born on March 17, 1995, making him 30 years old in 2025, his estimated monthly salary at Mamelodi Sundowns ranges from R200,000 to R400,000. He brings international defensive experience to the team.",
    age: 30,
    country: "Argentina",
    company: "Mamelodi Sundowns",
    industry: "Football",
    source: "Research",
    lastUpdated: "2025-04-02",
    categories: ["football-players", "mamelodi-sundowns"]
  },
  {
    id: uuidv4(),
    name: "Grant Kekana",
    slug: "grant-kekana",
    occupation: "Football Player",
    salary: 250000,
    currency: "ZAR",
    imageUrl: "https://sundownsfc.co.za/wp-content/uploads/2020/12/Kekana-2.jpg",
    description: "Grant Kekana is a South African professional footballer who plays as a defender and centre-back for Mamelodi Sundowns FC. Kekana joined Mamelodi Sundowns in July 2021 from their rivals, SuperSport United. Born on October 31, 1992, making him 33 years old in 2025, his estimated monthly salary is between R200,000 and R300,000. He is an experienced defender in the Mamelodi Sundowns squad.",
    age: 33,
    country: "South Africa",
    company: "Mamelodi Sundowns",
    industry: "Football",
    source: "Research",
    lastUpdated: "2025-04-02",
    categories: ["football-players", "mamelodi-sundowns"]
  },
  {
    id: uuidv4(),
    name: "Arthur Sales",
    slug: "arthur-sales",
    occupation: "Football Player",
    salary: 250000,
    currency: "ZAR",
    imageUrl: "https://sundownsfc.co.za/wp-content/uploads/2020/12/Sales.jpg",
    description: "Arthur Sales is a Brazilian professional footballer who plays as a centre-forward for Mamelodi Sundowns FC. He joined the Sundowns in July 2024 for a record transfer fee from Belgian side, Lomel. Born on July 3, 2002, making him 23 years old in 2025, his estimated monthly salary is between R200,000 and R300,000. Despite a shaky start, Sales has become a part of the Mamelodi Sundowns squad, bringing his attacking abilities to the team.",
    age: 23,
    country: "Brazil",
    company: "Mamelodi Sundowns",
    industry: "Football",
    source: "Research",
    lastUpdated: "2025-04-02",
    categories: ["football-players", "mamelodi-sundowns"]
  },
  {
    id: uuidv4(),
    name: "Rivaldo Coetzee",
    slug: "rivaldo-coetzee",
    occupation: "Football Player",
    salary: 200000,
    currency: "ZAR",
    imageUrl: "https://sundownsfc.co.za/wp-content/uploads/2020/12/Coetzee-3.jpg",
    description: "Rivaldo Coetzee is a South African professional footballer who plays as a defender and central midfielder for Mamelodi Sundowns FC. He also plays for the South African national team and made his professional debut at Ajax Cape Town. Coetzee was part of the Bafana Bafana squad in the 2016 Rio Olympics. Born on October 16, 1996, making him 29 years old in 2025, his estimated monthly salary is R200,000. He is a versatile player with both club and national team experience.",
    age: 29,
    country: "South Africa",
    company: "Mamelodi Sundowns",
    industry: "Football",
    source: "Research",
    lastUpdated: "2025-04-02",
    categories: ["football-players", "mamelodi-sundowns"]
  },
  {
    id: uuidv4(),
    name: "Jayden Adams",
    slug: "jayden-adams",
    occupation: "Football Player",
    salary: 200000,
    currency: "ZAR",
    imageUrl: "https://sundownsfc.co.za/wp-content/uploads/2025/02/Adams-WHite-BAckground-Square.jpg",
    description: "Jayden Adams is a young and promising South African professional footballer who plays as an attacking midfielder for Mamelodi Sundowns FC. He recently arrived at the club from Stellies, signing a deal until at least June 2028. Adams also plays for the South African national team. Born on May 5, 2001, making him 24 years old in 2025, his estimated monthly salary is in the region of R100,000 to R200,000. He is considered a talented midfielder with a bright future at Sundowns.",
    age: 24,
    country: "South Africa",
    company: "Mamelodi Sundowns",
    industry: "Football",
    source: "Research",
    lastUpdated: "2025-04-02",
    categories: ["football-players", "mamelodi-sundowns"]
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
