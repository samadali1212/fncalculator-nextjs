
// Sample salary data - this can be expanded based on your needs
export interface SalaryEntry {
  average: number;
  experience: string;
  education: string;
}

export interface SalaryData {
  [key: string]: SalaryEntry;
}

const sampleSalaryData: SalaryData = {
  software_engineer: {
    average: 45000,
    experience: "mid",
    education: "Bachelor's degree"
  },
  data_analyst: {
    average: 35000,
    experience: "entry",
    education: "Bachelor's degree"
  },
  project_manager: {
    average: 55000,
    experience: "senior",
    education: "Bachelor's degree"
  },
  // Add more entries as needed
};

export const getSalaryData = (): SalaryData => {
  return sampleSalaryData;
};
