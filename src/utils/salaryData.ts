
type SalaryData = {
  [jobTitle: string]: {
    min: number;
    average: number;
    max: number;
    experience: "entry" | "mid" | "senior";
    education: string;
    location_factor: number;
  };
};

export const getSalaryData = (): SalaryData => {
  return {
  net_software_developer: {
    min: 32500,
    average: 55000,
    max: 600000,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science or Software Engineering",
    location_factor: 1.25
  },
  net_web_developer: {
    min: 25000,
    average: 38750,
    max: 96000,
    experience: "mid",
    education: "Bachelor's Degree in Computer Science or Information Technology",
    location_factor: 1.25
  },
  account_administrator: {
    min: 11375,
    average: 17500,
    max: 31500,
    experience: "entry",
    education: "Diploma or Bachelor's Degree in Business Administration or related",
    location_factor: 1.08
  },
  account_clerk: {
    min: 12000,
    average: 13500,
    max: 20000,
    experience: "entry",
    education: "High School Diploma with relevant certifications",
    location_factor: 1.02
  },
  account_executive: {
    min: 15000,
    average: 25000,
    max: 60000,
    experience: "mid",
    education: "Bachelor's Degree in Business, Marketing, or Sales",
    location_factor: 1.15
  },
  account_manager: {
    min: 20000,
    average: 30000,
    max: 330000,
    experience: "mid",
    education: "Bachelor's Degree in Business, Marketing, or related",
    location_factor: 1.15
  }
  };
};
