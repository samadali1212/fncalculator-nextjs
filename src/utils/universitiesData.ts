
export interface University {
  id: string;
  name: string;
  fullName: string;
  location: string;
  apsScale: "standard" | "university";
  includesLifeOrientation: boolean;
  minApsRequirements: {
    [faculty: string]: number;
  };
  website: string;
  description: string;
}

export const southAfricanUniversities: University[] = [
  {
    id: "uct",
    name: "UCT",
    fullName: "University of Cape Town",
    location: "Cape Town, Western Cape",
    apsScale: "standard",
    includesLifeOrientation: false,
    minApsRequirements: {
      "Medicine": 42,
      "Engineering": 35,
      "Commerce": 30,
      "Law": 35,
      "Humanities": 25,
      "Science": 30
    },
    website: "https://www.uct.ac.za",
    description: "The University of Cape Town is South Africa's oldest university and one of Africa's leading research universities."
  },
  {
    id: "wits",
    name: "Wits",
    fullName: "University of the Witwatersrand",
    location: "Johannesburg, Gauteng",
    apsScale: "standard",
    includesLifeOrientation: false,
    minApsRequirements: {
      "Medicine": 40,
      "Engineering": 32,
      "Commerce": 28,
      "Law": 32,
      "Humanities": 22,
      "Science": 28
    },
    website: "https://www.wits.ac.za",
    description: "The University of the Witwatersrand is a multi-campus South African public research university situated in Johannesburg."
  },
  {
    id: "stellenbosch",
    name: "Stellenbosch",
    fullName: "Stellenbosch University",
    location: "Stellenbosch, Western Cape",
    apsScale: "standard",
    includesLifeOrientation: false,
    minApsRequirements: {
      "Medicine": 38,
      "Engineering": 30,
      "Commerce": 26,
      "Law": 30,
      "Humanities": 20,
      "Science": 26
    },
    website: "https://www.sun.ac.za",
    description: "Stellenbosch University is a public research university situated in Stellenbosch, a town in the Western Cape province of South Africa."
  },
  {
    id: "up",
    name: "UP",
    fullName: "University of Pretoria",
    location: "Pretoria, Gauteng",
    apsScale: "university",
    includesLifeOrientation: true,
    minApsRequirements: {
      "Medicine": 42,
      "Engineering": 34,
      "Commerce": 28,
      "Law": 32,
      "Humanities": 22,
      "Science": 28
    },
    website: "https://www.up.ac.za",
    description: "The University of Pretoria is a multi-campus public research university located in Pretoria, the executive capital of South Africa."
  },
  {
    id: "ukzn",
    name: "UKZN",
    fullName: "University of KwaZulu-Natal",
    location: "Durban, KwaZulu-Natal",
    apsScale: "standard",
    includesLifeOrientation: false,
    minApsRequirements: {
      "Medicine": 36,
      "Engineering": 28,
      "Commerce": 24,
      "Law": 28,
      "Humanities": 18,
      "Science": 24
    },
    website: "https://www.ukzn.ac.za",
    description: "The University of KwaZulu-Natal is a public university with multiple campuses in the province of KwaZulu-Natal in South Africa."
  },
  {
    id: "ufs",
    name: "UFS",
    fullName: "University of the Free State",
    location: "Bloemfontein, Free State",
    apsScale: "standard",
    includesLifeOrientation: false,
    minApsRequirements: {
      "Medicine": 34,
      "Engineering": 26,
      "Commerce": 22,
      "Law": 26,
      "Humanities": 16,
      "Science": 22
    },
    website: "https://www.ufs.ac.za",
    description: "The University of the Free State is a public university in Bloemfontein, the capital of the Free State province, South Africa."
  }
];

export const getUniversityById = (id: string): University | undefined => {
  return southAfricanUniversities.find(uni => uni.id === id);
};

export const getUniversityByName = (name: string): University | undefined => {
  return southAfricanUniversities.find(uni => 
    uni.name.toLowerCase() === name.toLowerCase() ||
    uni.fullName.toLowerCase() === name.toLowerCase()
  );
};
