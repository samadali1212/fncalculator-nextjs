
import { Job } from './types';

export const administrationJobs: Job[] = [
  {
    id: "job-009",
    title: "Office Administrator",
    company: "Kilimanjaro Legal Associates",
    location: "Arusha",
    category: "Administration",
    salaryRange: "TSH 600,000 - 900,000 per month",
    description: "Kilimanjaro Legal Associates requires an efficient Office Administrator to maintain office operations and provide administrative support to our legal team.",
    requirements: [
      "Diploma in Office Administration or related field",
      "2+ years of administrative experience",
      "Proficiency in MS Office suite",
      "Strong organizational skills",
      "Attention to detail"
    ],
    responsibilities: [
      "Manage office supplies and equipment",
      "Coordinate meetings and appointments",
      "Handle incoming calls and correspondence",
      "Maintain filing systems",
      "Assist with basic bookkeeping tasks"
    ],
    applicationMethod: {
      type: 'email',
      value: "hr@kilimanjarolegal.co.tz",
      instructions: "Email your CV with subject line 'Office Administrator Position'"
    },
    postedDate: "2025-05-25",
    deadline: "2025-06-25",
    featured: false
  }
];
