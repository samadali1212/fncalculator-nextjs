
import { Job } from './types';

export const healthcareJobs: Job[] = [
  {
    id: "job-003",
    title: "Registered Nurse",
    company: "Cape Medical Center",
    location: "Cape Town",
    category: "Healthcare",
    salaryRange: "R22,000 - R32,000 per month",
    description: "Cape Medical Center is looking for a dedicated Registered Nurse to provide quality patient care. The successful candidate will work in our medical-surgical unit.",
    requirements: [
      "Bachelor's degree in Nursing",
      "Current SANC registration",
      "Minimum of 1 year of clinical experience",
      "BLS certification",
      "Excellent communication skills"
    ],
    responsibilities: [
      "Provide direct patient care",
      "Administer medications as prescribed",
      "Document patient information accurately",
      "Collaborate with healthcare team members",
      "Educate patients and their families"
    ],
    applicationMethod: {
      type: 'form',
      value: "https://capemedical.co.za/careers",
      instructions: "Complete our online application form and attach your credentials"
    },
    postedDate: "2025-05-10",
    deadline: "2025-06-10",
    featured: true
  }
];
