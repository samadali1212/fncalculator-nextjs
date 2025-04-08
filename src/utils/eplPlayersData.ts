
// EPL Players data

export interface EPLPlayer {
  id: number;
  name: string;
  slug: string;
  team: string;
  position: string;
  nationality: string;
  age: number;
  weeklySalary: number; // in British Pounds
  annualSalary: number; // calculated from weekly
  imageUrl?: string;
  description: string;
  contractUntil: string;
  transferValue?: number; // in millions of pounds
  jerseyNumber?: number;
  height?: string;
  accolades?: string[];
  previousClubs?: string[];
  internationalCaps?: number;
  marketValue?: number; // in millions of pounds
  source: string;
  lastUpdated: string;
}

// Helper function to calculate annual salary
const calculateAnnualSalary = (weeklySalary: number): number => {
  return weeklySalary * 52;
};

// EPL Players data
export const eplPlayers: EPLPlayer[] = [
  {
    id: 1,
    name: "Kevin De Bruyne",
    slug: "kevin-de-bruyne",
    team: "Manchester City",
    position: "Midfielder",
    nationality: "Belgium",
    age: 33,
    weeklySalary: 400000,
    annualSalary: calculateAnnualSalary(400000),
    imageUrl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p61366.png",
    description: "Kevin De Bruyne is widely regarded as one of the best midfielders in the world. Known for his exceptional passing, vision, and shooting ability, he has been instrumental in Manchester City's domestic and European successes. The Belgian international is renowned for his ability to create scoring chances and his excellent set-piece delivery.",
    contractUntil: "June 2025",
    transferValue: 85,
    jerseyNumber: 17,
    height: "1.81m",
    accolades: ["PFA Player of the Year", "Premier League Playmaker of the Season", "UEFA Champions League winner"],
    previousClubs: ["Chelsea", "Wolfsburg", "Genk"],
    internationalCaps: 98,
    marketValue: 70,
    source: "Verified EPL contracts",
    lastUpdated: "July 2024"
  },
  {
    id: 2,
    name: "Mohamed Salah",
    slug: "mohamed-salah",
    team: "Liverpool",
    position: "Forward",
    nationality: "Egypt",
    age: 32,
    weeklySalary: 350000,
    annualSalary: calculateAnnualSalary(350000),
    imageUrl: "https://img.a.transfermarkt.technology/portrait/medium/148455-1727337594.jpg?lm=1",
    description: "Mohamed Salah is one of the most prolific goalscorers in Premier League history. The Egyptian winger combines blistering pace with clinical finishing and has been a cornerstone of Liverpool's recent domestic and European success. His consistent goal-scoring ability and work rate have made him a fan favorite at Anfield.",
    contractUntil: "June 2025",
    transferValue: 80,
    jerseyNumber: 11,
    height: "1.75m",
    accolades: ["Premier League Golden Boot", "FIFA Puskás Award", "African Footballer of the Year"],
    previousClubs: ["Roma", "Fiorentina", "Chelsea", "Basel"],
    internationalCaps: 93,
    marketValue: 65,
    source: "Premier League official records",
    lastUpdated: "July 2024"
  },
  {
    id: 3,
    name: "Erling Haaland",
    slug: "erling-haaland",
    team: "Manchester City",
    position: "Forward",
    nationality: "Norway",
    age: 24,
    weeklySalary: 375000,
    annualSalary: calculateAnnualSalary(375000),
    imageUrl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p223094.png",
    description: "Erling Haaland has established himself as one of the most feared strikers in world football. The Norwegian's combination of physical presence, pace, and lethal finishing has seen him break numerous scoring records since joining Manchester City. His goal-scoring exploits have quickly made him one of the Premier League's biggest stars.",
    contractUntil: "June 2027",
    transferValue: 150,
    jerseyNumber: 9,
    height: "1.94m",
    accolades: ["Premier League Golden Boot", "Bundesliga Player of the Season", "UEFA Champions League winner"],
    previousClubs: ["Borussia Dortmund", "Red Bull Salzburg", "Molde"],
    internationalCaps: 34,
    marketValue: 180,
    source: "EPL financial reports",
    lastUpdated: "July 2024"
  },
  {
    id: 4,
    name: "Bruno Fernandes",
    slug: "bruno-fernandes",
    team: "Manchester United",
    position: "Midfielder",
    nationality: "Portugal",
    age: 29,
    weeklySalary: 240000,
    annualSalary: calculateAnnualSalary(240000),
    imageUrl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p141746.png",
    description: "Bruno Fernandes has been Manchester United's creative hub since his arrival. The Portuguese midfielder combines excellent passing range with an eye for goal, particularly from penalties and free kicks. His leadership qualities have also seen him wear the captain's armband for the Red Devils.",
    contractUntil: "June 2026",
    transferValue: 75,
    jerseyNumber: 8,
    height: "1.79m",
    accolades: ["Manchester United Player of the Year", "Premier League Player of the Month (multiple)"],
    previousClubs: ["Sporting CP", "Sampdoria", "Udinese"],
    internationalCaps: 69,
    marketValue: 70,
    source: "Premier League salary reports",
    lastUpdated: "July 2024"
  },
  {
    id: 5,
    name: "Virgil van Dijk",
    slug: "virgil-van-dijk",
    team: "Liverpool",
    position: "Defender",
    nationality: "Netherlands",
    age: 33,
    weeklySalary: 220000,
    annualSalary: calculateAnnualSalary(220000),
    imageUrl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p97032.png",
    description: "Virgil van Dijk is widely regarded as one of the world's best central defenders. The imposing Dutch international combines physical prowess with excellent ball-playing ability and leadership. His arrival at Liverpool coincided with a period of domestic and European success for the club.",
    contractUntil: "June 2025",
    transferValue: 45,
    jerseyNumber: 4,
    height: "1.93m",
    accolades: ["UEFA Men's Player of the Year", "Premier League winner", "UEFA Champions League winner"],
    previousClubs: ["Southampton", "Celtic", "Groningen"],
    internationalCaps: 64,
    marketValue: 40,
    source: "Liverpool FC official statements",
    lastUpdated: "July 2024"
  },
  {
    id: 6,
    name: "Harry Kane",
    slug: "harry-kane",
    team: "Bayern Munich (Former Tottenham)",
    position: "Forward",
    nationality: "England",
    age: 31,
    weeklySalary: 200000,
    annualSalary: calculateAnnualSalary(200000),
    imageUrl: "https://img.bundesliga.com/tachyon/sites/2/2023/08/231007_FCB_Kane_0095.jpg",
    description: "Harry Kane is one of England's greatest goalscorers, holding the record for most goals for Tottenham Hotspur before his move to Bayern Munich. A complete forward with excellent finishing, passing, and link-up play, Kane has won multiple Premier League Golden Boot awards. The England captain is known for his professionalism and consistent goal-scoring record.",
    contractUntil: "Moved to Bayern Munich",
    transferValue: 100,
    jerseyNumber: 9,
    height: "1.88m",
    accolades: ["Premier League Golden Boot (multiple)", "World Cup Golden Boot"],
    previousClubs: ["Tottenham Hotspur", "Millwall (loan)", "Norwich City (loan)", "Leicester City (loan)"],
    internationalCaps: 91,
    marketValue: 90,
    source: "EPL archives",
    lastUpdated: "July 2024"
  },
  {
    id: 7,
    name: "Bukayo Saka",
    slug: "bukayo-saka",
    team: "Arsenal",
    position: "Winger",
    nationality: "England",
    age: 22,
    weeklySalary: 195000,
    annualSalary: calculateAnnualSalary(195000),
    imageUrl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p223340.png",
    description: "Bukayo Saka has established himself as one of Arsenal's most important players despite his young age. A versatile winger with excellent technical ability, Saka combines pace with intelligent decision-making in the final third. The England international has become a key figure for both club and country.",
    contractUntil: "June 2027",
    transferValue: 120,
    jerseyNumber: 7,
    height: "1.78m",
    accolades: ["Arsenal Player of the Season", "England Player of the Year"],
    previousClubs: ["Arsenal Academy"],
    internationalCaps: 35,
    marketValue: 110,
    source: "Premier League financial disclosures",
    lastUpdated: "July 2024"
  },
  {
    id: 8,
    name: "N'Golo Kanté",
    slug: "ngolo-kante",
    team: "Leicester City (Former)",
    position: "Midfielder",
    nationality: "France",
    age: 33,
    weeklySalary: 290000,
    annualSalary: calculateAnnualSalary(290000),
    imageUrl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p116594.png",
    description: "N'Golo Kanté was one of the Premier League's most influential midfielders, known for his exceptional work rate, tackling ability, and interceptions. The French World Cup winner played a crucial role in Leicester's fairy-tale Premier League title win before moving to Chelsea, where he continued his success. After leaving Chelsea, he joined Saudi Arabian club Al-Ittihad.",
    contractUntil: "Left Premier League",
    transferValue: 30,
    jerseyNumber: 7,
    height: "1.68m",
    accolades: ["Premier League winner (with Leicester and Chelsea)", "FIFA World Cup winner", "UEFA Champions League winner"],
    previousClubs: ["Chelsea", "Leicester City", "Caen", "Boulogne"],
    internationalCaps: 53,
    marketValue: 25,
    source: "Premier League historical data",
    lastUpdated: "July 2024"
  },
  {
    id: 9,
    name: "Jack Grealish",
    slug: "jack-grealish",
    team: "Manchester City",
    position: "Winger",
    nationality: "England",
    age: 28,
    weeklySalary: 300000,
    annualSalary: calculateAnnualSalary(300000),
    imageUrl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p114283.png",
    description: "Jack Grealish became the most expensive British player when he moved from Aston Villa to Manchester City. Known for his close ball control, dribbling ability, and creativity, Grealish can play as a winger or attacking midfielder. His flair and ability to draw fouls make him a dangerous attacking threat.",
    contractUntil: "June 2026",
    transferValue: 70,
    jerseyNumber: 10,
    height: "1.80m",
    accolades: ["Premier League winner", "UEFA Champions League winner"],
    previousClubs: ["Aston Villa"],
    internationalCaps: 36,
    marketValue: 65,
    source: "Manchester City financial reports",
    lastUpdated: "July 2024"
  },
  {
    id: 10,
    name: "Alisson Becker",
    slug: "alisson-becker",
    team: "Liverpool",
    position: "Goalkeeper",
    nationality: "Brazil",
    age: 31,
    weeklySalary: 150000,
    annualSalary: calculateAnnualSalary(150000),
    imageUrl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p116535.png",
    description: "Alisson Becker is widely regarded as one of the world's best goalkeepers. The Brazilian combines exceptional shot-stopping ability with excellent distribution and command of his area. His arrival at Liverpool coincided with a significant improvement in the club's defensive record and subsequent success.",
    contractUntil: "June 2027",
    transferValue: 35,
    jerseyNumber: 1,
    height: "1.91m",
    accolades: ["Premier League Golden Glove", "UEFA Champions League winner", "FIFA Best Goalkeeper"],
    previousClubs: ["Roma", "Internacional"],
    internationalCaps: 62,
    marketValue: 35,
    source: "Liverpool FC salary structures",
    lastUpdated: "July 2024"
  },
  {
    id: 11,
    name: "Declan Rice",
    slug: "declan-rice",
    team: "Arsenal",
    position: "Midfielder",
    nationality: "England",
    age: 25,
    weeklySalary: 240000,
    annualSalary: calculateAnnualSalary(240000),
    imageUrl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p204480.png",
    description: "Declan Rice is one of England's most promising midfielders, combining defensive awareness with excellent passing ability. After establishing himself as West Ham's captain and key player, he made a high-profile move to Arsenal. His ability to break up opposition attacks and progress the ball make him a complete modern midfielder.",
    contractUntil: "June 2028",
    transferValue: 100,
    jerseyNumber: 41,
    height: "1.88m",
    accolades: ["UEFA Europa Conference League winner (West Ham)", "England international"],
    previousClubs: ["West Ham United"],
    internationalCaps: 52,
    marketValue: 110,
    source: "Arsenal FC official contracts",
    lastUpdated: "July 2024"
  },
  {
    id: 12,
    name: "Marcus Rashford",
    slug: "marcus-rashford",
    team: "Manchester United",
    position: "Forward",
    nationality: "England",
    age: 26,
    weeklySalary: 300000,
    annualSalary: calculateAnnualSalary(300000),
    imageUrl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p176297.png",
    description: "Marcus Rashford is a product of Manchester United's youth academy who has developed into one of the club's key attacking players. Known for his pace, direct running, and finishing ability, Rashford has also earned praise for his off-field charitable work. The England international typically operates from the left wing but can play across the forward line.",
    contractUntil: "June 2028",
    transferValue: 75,
    jerseyNumber: 10,
    height: "1.85m",
    accolades: ["MBE for campaigning work", "UEFA Europa League winner", "FA Cup winner"],
    previousClubs: ["Manchester United Academy"],
    internationalCaps: 60,
    marketValue: 70,
    source: "Manchester United financial disclosures",
    lastUpdated: "July 2024"
  },
  {
    id: 13,
    name: "Phil Foden",
    slug: "phil-foden",
    team: "Manchester City",
    position: "Midfielder",
    nationality: "England",
    age: 24,
    weeklySalary: 225000,
    annualSalary: calculateAnnualSalary(225000),
    imageUrl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p209244.png",
    description: "Phil Foden has progressed from Manchester City's academy to become one of the Premier League's most talented attacking midfielders. Known for his technical ability, dribbling, and creativity, Foden has been compared to former City midfielder David Silva. His versatility allows him to play in multiple positions across the midfield and attack.",
    contractUntil: "June 2027",
    transferValue: 110,
    jerseyNumber: 47,
    height: "1.71m",
    accolades: ["Premier League Young Player of the Season", "UEFA Champions League winner", "Multiple Premier League titles"],
    previousClubs: ["Manchester City Academy"],
    internationalCaps: 35,
    marketValue: 130,
    source: "Manchester City salary structure",
    lastUpdated: "July 2024"
  },
  {
    id: 14,
    name: "Trent Alexander-Arnold",
    slug: "trent-alexander-arnold",
    team: "Liverpool",
    position: "Right-Back",
    nationality: "England",
    age: 25,
    weeklySalary: 180000,
    annualSalary: calculateAnnualSalary(180000),
    imageUrl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p169187.png",
    description: "Trent Alexander-Arnold has redefined the role of the modern full-back with his exceptional passing and crossing ability. A product of Liverpool's academy, he has developed into one of the world's best right-backs. His set-piece delivery and ability to create chances from deep positions make him a unique attacking threat from defense.",
    contractUntil: "June 2025",
    transferValue: 80,
    jerseyNumber: 66,
    height: "1.75m",
    accolades: ["Premier League winner", "UEFA Champions League winner", "FIFA Club World Cup winner"],
    previousClubs: ["Liverpool Academy"],
    internationalCaps: 31,
    marketValue: 85,
    source: "Premier League salary database",
    lastUpdated: "July 2024"
  },
  {
    id: 15,
    name: "Raheem Sterling",
    slug: "raheem-sterling",
    team: "Chelsea",
    position: "Winger",
    nationality: "England",
    age: 29,
    weeklySalary: 325000,
    annualSalary: calculateAnnualSalary(325000),
    imageUrl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p103955.png",
    description: "Raheem Sterling is one of England's most accomplished wingers, known for his pace, dribbling ability, and improved finishing. After successful spells at Liverpool and Manchester City, he joined Chelsea in a high-profile transfer. Sterling's ability to consistently deliver goals and assists has made him a valuable asset for both club and country.",
    contractUntil: "June 2027",
    transferValue: 50,
    jerseyNumber: 7,
    height: "1.70m",
    accolades: ["Multiple Premier League titles", "FWA Footballer of the Year", "MBE for services to racial equality in sport"],
    previousClubs: ["Manchester City", "Liverpool", "Queens Park Rangers"],
    internationalCaps: 82,
    marketValue: 45,
    source: "Chelsea FC financial reports",
    lastUpdated: "July 2024"
  }
];

// Helper functions

// Find a player by slug
export function findPlayerBySlug(slug: string): EPLPlayer | undefined {
  return eplPlayers.find(player => player.slug === slug);
}

// Find a player by ID
export function findPlayerById(id: number): EPLPlayer | undefined {
  return eplPlayers.find(player => player.id === id);
}

// Get all players
export function getAllPlayers(): EPLPlayer[] {
  return eplPlayers;
}

// Format weekly salary
export function formatWeeklySalary(salary: number, currency: string = "£"): string {
  return `${currency}${salary.toLocaleString()}`;
}

// Format annual salary
export function formatAnnualSalary(salary: number, currency: string = "£"): string {
  return `${currency}${salary.toLocaleString()}`;
}

// Get similar players based on position and team
export function getSimilarPlayers(player: EPLPlayer, limit: number = 5): EPLPlayer[] {
  // First look for players on the same team
  const sameTeamPlayers = eplPlayers.filter(p => 
    p.id !== player.id && p.team === player.team
  );
  
  // Then look for players in the same position
  const samePositionPlayers = eplPlayers.filter(p => 
    p.id !== player.id && p.position === player.position && p.team !== player.team
  );
  
  // Combine and limit the results
  const combinedPlayers = [...sameTeamPlayers, ...samePositionPlayers];
  
  // Remove duplicates if any
  const uniquePlayers = Array.from(new Set(combinedPlayers.map(p => p.id)))
    .map(id => combinedPlayers.find(p => p.id === id))
    .filter((p): p is EPLPlayer => p !== undefined);
  
  return uniquePlayers.slice(0, limit);
}
