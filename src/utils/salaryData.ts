
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
  .Net Software Developer: {
    min: 32500,
    average: 55000,
    max: 600000,
    experience: "Mid",
    education: "Bachelor's Degree in Computer Science or Software Engineering",
    location_factor: 1.25
  },
  .Net Web Developer: {
    min: 25000,
    average: 38750,
    max: 96000,
    experience: "Mid",
    education: "Bachelor's Degree in Computer Science or Information Technology",
    location_factor: 1.25
  },
  Account Administrator: {
    min: 11375,
    average: 17500,
    max: 31500,
    experience: "Entry",
    education: "Diploma or Bachelor's Degree in Business Administration or related",
    location_factor: 1.08
  },
  Account Clerk: {
    min: 12000,
    average: 13500,
    max: 20000,
    experience: "Entry",
    education: "High School Diploma with relevant certifications",
    location_factor: 1.02
  },
  Account Executive: {
    min: 15000,
    average: 25000,
    max: 60000,
    experience: "Mid",
    education: "Bachelor's Degree in Business, Marketing, or Sales",
    location_factor: 1.15
  },
  Account Manager: {
    min: 20000,
    average: 30000,
    max: 330000,
    experience: "Mid",
    education: "Bachelor's Degree in Business, Marketing, or related",
    location_factor: 1.15
  },
  Account Representative: {
    min: 15000,
    average: 19000,
    max: 33375,
    experience: "Entry",
    education: "Bachelor's Degree in Business or related",
    location_factor: 1.08
  },
  Accountant: {
    min: 21818,
    average: 33890,
    max: 454286,
    experience: "Mid",
    education: "Bachelor's Degree in Accounting",
    location_factor: 1.15
  },
  Accounting Manager: {
    min: 25750,
    average: 40000,
    max: 532500,
    experience: "Senior",
    education: "Bachelor's Degree in Accounting, CA(SA) preferred",
    location_factor: 1.3
  },
  Accounts Manager: {
    min: 24000,
    average: 35000,
    max: 401700,
    experience: "Senior",
    education: "Bachelor's Degree in Accounting, CA(SA) preferred",
    location_factor: 1.3
  },
  Accounts Payable: {
    min: 16000,
    average: 22500,
    max: 182817,
    experience: "Entry",
    education: "Diploma or Bachelor's Degree in Accounting",
    location_factor: 1.02
  },
  Accounts Receivable: {
    min: 17500,
    average: 25000,
    max: 270000,
    experience: "Entry",
    education: "Diploma or Bachelor's Degree in Accounting",
    location_factor: 1.02
  },
  Actuarial: {
    min: 48000,
    average: 109722,
    max: 800000,
    experience: "Entry",
    education: "Bachelor's Degree in Actuarial Science, Mathematics, or Statistics",
    location_factor: 1.3
  },
  Actuarial Analyst: {
    min: 45695,
    average: 91176,
    max: 750000,
    experience: "Entry",
    education: "Bachelor's Degree in Actuarial Science, Mathematics, or Statistics",
    location_factor: 1.3
  },
  "Actuarial Consultant": {
    min: 87500,
    average: 650000,
    max: 850000,
    experience: "Mid",
    education: "Bachelor's Degree in Actuarial Science, Mathematics, or Statistics",
    location_factor: 1.3
  },
  "Actuarial Manager": {
    min: 81000,
    average: 108333,
    max: 900000,
    experience: "Senior",
    education: "Bachelor's Degree in Actuarial Science, Mathematics, or Statistics",
    location_factor: 1.35
  },
  "Actuary": {
    min: 66667,
    average: 125001,
    max: 900000,
    experience: "Senior",
    education: "Bachelor's Degree in Actuarial Science, Mathematics, or Statistics",
    location_factor: 1.35
  },
  "Admin Assistant": {
    min: 10545,
    average: 13000,
    max: 20358,
    experience: "Entry",
    education: "High School Diploma with secretarial or administrative qualifications",
    location_factor: 1.05
  },
  "Administrative Assistant": {
    min: 11000,
    average: 14000,
    max: 27094,
    experience: "Mid",
    education: "High School Diploma with secretarial or administrative qualifications",
    location_factor: 1.05
  },
  "Administrator": {
    min: 13905,
    average: 18000,
    max: 191539,
    experience: "Mid",
    education: "Bachelor's Degree in a relevant field",
    location_factor: 1.05
  },
  "Adviser": {
    min: 12501,
    average: 20000,
    max: 116500,
    experience: "Mid",
    education: "Bachelor's Degree in a relevant field",
    location_factor: 1.05
  },
  "Advisor": {
    min: 15000,
    average: 22500,
    max: 300000,
    experience: "Mid",
    education: "Bachelor's Degree in a relevant field",
    location_factor: 1.05
  },
  "Agent": {
    min: 12500,
    average: 17500,
    max: 100000,
    experience: "Entry",
    education: "High School Diploma with relevant industry certifications",
    location_factor: 1.05
  },
  "Analyst": {
    min: 28810,
    average: 55000,
    max: 625374,
    experience: "Entry",
    education: "Bachelor's Degree in a relevant field (e.g., Business, Finance, Data Science)",
    location_factor: 1.15
  },
  "Android Developer": {
    min: 44028,
    average: 70667,
    max: 750000,
    experience: "Mid",
    education: "Bachelor's Degree in Computer Science or Software Engineering",
    location_factor: 1.25
  },
  "Application Developer": {
    min: 30000,
    average: 53318,
    max: 530000,
    experience: "Mid",
    education: "Bachelor's Degree in Computer Science or Software Engineering",
    location_factor: 1.25
  },
  "Application Engineer": {
    min: 19000,
    average: 47530,
    max: 665000,
    experience: "Mid",
    education: "Bachelor's Degree in Engineering (e.g., Software, Computer)",
    location_factor: 1.25
  },
  "Apprentice": {
    min: 7456,
    average: 9500,
    max: 29150,
    experience: "Entry",
    education: "High School Diploma or enrollment in a vocational training program",
    location_factor: 1.01
  },
  "Architect": {
    min: 25000,
    average: 69627,
    max: 650000,
    experience: "Mid",
    education: "Bachelor's Degree in Architecture",
    location_factor: 1.15
  },
  "Art Director": {
    min: 19500,
    average: 30000,
    max: 50000,
    experience: "Mid",
    education: "Bachelor's Degree in Fine Arts, Graphic Design, or related",
    location_factor: 1.15
  },
  "Artisan": {
    min: 18000,
    average: 28459,
    max: 290098,
    experience: "Mid",
    education: "Relevant vocational training or equivalent experience",
    location_factor: 1.02
  },
  "Artist": {
    min: 12500,
    average: 17500,
    max: 35000,
    experience: "Entry",
    education: "Bachelor's Degree in Fine Arts or equivalent portfolio",
    location_factor: 1.02
  },
  "Assembler": {
    min: 10942,
    average: 15000,
    max: 36120,
    experience: "Entry",
    education: "High School Diploma with technical skills",
    location_factor: 1.01
  },
  "Assistant": {
    min: 13500,
    average: 19000,
    max: 249914,
    experience: "Entry",
    education: "High School Diploma",
    location_factor: 1.02
  },
  "Assistant Engineer": {
    min: 25000,
    average: 41667,
    max: 250000,
    experience: "Entry",
    education: "Bachelor's Degree in Engineering",
    location_factor: 1.08
  },
  "Assistant Manager": {
    min: 15000,
    average: 22500,
    max: 157794,
    experience: "Entry",
    education: "Diploma or Bachelor's Degree in a relevant field",
    location_factor: 1.08
  },
  "Associate Director": {
    min: 15987,
    average: 70000,
    max: 670500,
    experience: "Senior",
    education: "Bachelor's or Master's Degree in a relevant field",
    location_factor: 1.15
  },
  "Associate Professor": {
    min: 567548,
    average: 802254,
    max: 978044,
    experience: "Senior",
    education: "PhD in a relevant field",
    location_factor: 1.15
  },
  "Assurance Manager": {
    min: 21500,
    average: 40000,
    max: 540000,
    experience: "Mid",
    education: "Bachelor's Degree in Accounting or Auditing, relevant certifications",
    location_factor: 1.15
  },
  "Attendant": {
    min: 11750,
    average: 14850,
    max: 30000,
    experience: "Entry",
    education: "Varies depending on the specific role",
    location_factor: 1.01
  },
  "Attorney": {
    min: 17500,
    average: 24225,
    max: 51257,
    experience: "Mid",
    education: "Bachelor of Laws (LLB) degree, admitted as an Attorney",
    location_factor: 1.15
  },
  "Au Pair": {
    min: 10516,
    average: 12500,
    max: 33000,
    experience: "Entry",
    education: "High School Diploma",
    location_factor: 1.01
  },
  "Audio Visual": {
    min: 11250,
    average: 22500,
    max: 293745,
    experience: "Entry",
    education: "Diploma or certification in Audio Visual Technology",
    location_factor: 1.02
  },
  "Audit Manager": {
    min: 30000,
    average: 45000,
    max: 647500,
    experience: "Mid",
    education: "Bachelor's Degree in Accounting or Auditing, relevant certifications",
    location_factor: 1.15
  },
  "Auditor": {
    min: 20000,
    average: 35000,
    max: 532152,
    experience: "Entry",
    education: "Bachelor's Degree in Accounting or Internal Auditing",
    location_factor: 1.08
  },
  "Author": {
    min: 5005,
    average: 252503,
    max: 500000,
    experience: "Entry",
    education: "Varies, strong writing skills and portfolio",
    location_factor: 1.02
  },
  "Auto Technician": {
    min: 14750,
    average: 21500,
    max: 48278,
    experience: "Mid",
    education: "Relevant vocational training or certification",
    location_factor: 1.05
  },
  "Auto Tester": {
    min: 43750,
    average: 47500,
    max: 47500,
    experience: "Entry",
    education: "Relevant vocational training or certification",
    location_factor: 1.02
  },
  "Automation Engineer": {
    min: 33438,
    average: 54439,
    max: 600000,
    experience: "Mid",
    education: "Bachelor's Degree in Engineering (e.g., Electrical, Mechanical, Computer)",
    location_factor: 1.25
  },
  "Automotive Engineer": {
    min: 29875,
    average: 40000,
    max: 364500,
    experience: "Mid",
    education: "Bachelor's Degree in Automotive Engineering or Mechanical Engineering",
    location_factor: 1.35
  }
  };
};
