
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
    software_developer: {
      min: 20000,
      average: 35000,
      max: 65000,
      experience: "mid",
      education: "Bachelor's Degree in Computer Science or equivalent",
      location_factor: 1.2
    },
    accountant: {
      min: 18000,
      average: 28000,
      max: 45000,
      experience: "mid",
      education: "Bachelor's Degree in Accounting",
      location_factor: 1.15
    },
    teacher: {
      min: 14000,
      average: 22000,
      max: 35000,
      experience: "mid",
      education: "Bachelor's Degree in Education",
      location_factor: 1.1
    },
    registered_nurse: {
      min: 19000,
      average: 30000,
      max: 48000,
      experience: "mid",
      education: "Bachelor's Degree in Nursing",
      location_factor: 1.15
    },
    marketing_manager: {
      min: 25000,
      average: 40000,
      max: 60000,
      experience: "mid",
      education: "Bachelor's Degree in Marketing or related field",
      location_factor: 1.25
    },
    data_analyst: {
      min: 18000,
      average: 30000,
      max: 50000,
      experience: "mid",
      education: "Bachelor's Degree in Statistics, Mathematics, or related field",
      location_factor: 1.2
    },
    graphic_designer: {
      min: 15000,
      average: 25000,
      max: 40000,
      experience: "mid",
      education: "Diploma or Degree in Graphic Design",
      location_factor: 1.15
    },
    project_manager: {
      min: 25000,
      average: 42000,
      max: 65000,
      experience: "senior",
      education: "Bachelor's Degree, PMP certification preferred",
      location_factor: 1.2
    },
    hr_manager: {
      min: 22000,
      average: 38000,
      max: 55000,
      experience: "senior",
      education: "Bachelor's Degree in HR or related field",
      location_factor: 1.15
    },
    admin_assistant: {
      min: 12000,
      average: 18000,
      max: 28000,
      experience: "entry",
      education: "High School Diploma, some college preferred",
      location_factor: 1.1
    },
    sales_representative: {
      min: 15000,
      average: 25000,
      max: 45000,
      experience: "mid",
      education: "High School Diploma or Bachelor's Degree",
      location_factor: 1.2
    },
    chef: {
      min: 14000,
      average: 24000,
      max: 40000,
      experience: "mid",
      education: "Culinary Arts Certificate or Diploma",
      location_factor: 1.15
    },
    attorney: {
      min: 30000,
      average: 55000,
      max: 95000,
      experience: "senior",
      education: "LLB Degree, admission to the bar",
      location_factor: 1.3
    },
    pharmacist: {
      min: 28000,
      average: 45000,
      max: 65000,
      experience: "mid",
      education: "Bachelor's Degree in Pharmacy",
      location_factor: 1.15
    },
    electrician: {
      min: 15000,
      average: 25000,
      max: 40000,
      experience: "mid",
      education: "Trade Certificate, Apprenticeship",
      location_factor: 1.1
    },
    civil_engineer: {
      min: 25000,
      average: 40000,
      max: 65000,
      experience: "mid",
      education: "Bachelor's Degree in Civil Engineering",
      location_factor: 1.2
    },
    bank_teller: {
      min: 12000,
      average: 16000,
      max: 25000,
      experience: "entry",
      education: "High School Diploma, some college preferred",
      location_factor: 1.1
    },
    web_developer: {
      min: 18000,
      average: 32000,
      max: 55000,
      experience: "mid",
      education: "Bachelor's Degree or equivalent experience",
      location_factor: 1.25
    },
    mechanical_engineer: {
      min: 24000,
      average: 38000,
      max: 60000,
      experience: "mid",
      education: "Bachelor's Degree in Mechanical Engineering",
      location_factor: 1.15
    },
    financial_analyst: {
      min: 22000,
      average: 38000,
      max: 60000,
      experience: "mid",
      education: "Bachelor's Degree in Finance or related field",
      location_factor: 1.25
    }
  };
};
