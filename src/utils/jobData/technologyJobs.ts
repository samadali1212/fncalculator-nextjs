
import { Job } from './types';

export const technologyJobs: Job[] = [
  {
    id: "job-001",
    title: "Software Developer",
    company: "Tech Solutions SA",
    location: "Cape Town",
    category: "Technology",
    salaryRange: "R30,000 - R45,000 per month",
    description: "We are looking for a skilled Software Developer to join our dynamic team. The ideal candidate will have experience in building web applications using modern frameworks.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years of experience in web development",
      "Proficiency in JavaScript, TypeScript, and React",
      "Experience with backend technologies like Node.js",
      "Good understanding of database design and SQL"
    ],
    responsibilities: [
      "Develop and maintain web applications",
      "Collaborate with cross-functional teams",
      "Participate in code reviews and technical discussions",
      "Troubleshoot and fix bugs",
      "Document technical specifications"
    ],
    applicationMethod: {
      type: 'url',
      value: "https://techsolutions.co.za/careers",
      instructions: "Apply through our careers portal and include your GitHub profile"
    },
    postedDate: "2025-05-01",
    deadline: "2025-06-01",
    featured: true
  }
];
