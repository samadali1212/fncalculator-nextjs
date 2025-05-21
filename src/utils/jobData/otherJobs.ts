
import { Job } from './types';

export const otherJobs: Job[] = [
  {
    id: "job-010",
    title: "Warehouse Manager",
    company: "Logistics Solutions",
    location: "Johannesburg",
    category: "Other",
    salaryRange: "R25,000 - R35,000 per month",
    description: "Logistics Solutions is seeking an experienced Warehouse Manager to oversee operations at our Johannesburg distribution center.",
    requirements: [
      "Diploma or degree in Logistics or Supply Chain Management",
      "5+ years of warehouse management experience",
      "Knowledge of inventory management systems",
      "Strong leadership and organizational skills",
      "Valid forklift operator's license"
    ],
    responsibilities: [
      "Oversee daily warehouse operations",
      "Manage warehouse staff and schedules",
      "Ensure efficient inventory control",
      "Implement safety and security procedures",
      "Coordinate with transportation department"
    ],
    applicationMethod: {
      type: 'other',
      value: "In-person at our Johannesburg office",
      instructions: "Visit our office at 123 Industrial Blvd, Johannesburg with your CV between 8AM-3PM weekdays"
    },
    postedDate: "2025-05-28",
    deadline: "2025-06-28",
    featured: true
  }
];
