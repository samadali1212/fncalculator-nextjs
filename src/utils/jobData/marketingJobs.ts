
import { Job } from './types';

export const marketingJobs: Job[] = [
  {
    id: "job-007",
    title: "Digital Marketing Specialist",
    company: "Media Minds",
    location: "Remote",
    category: "Marketing",
    salaryRange: "R22,000 - R32,000 per month",
    description: "Media Minds is seeking a creative Digital Marketing Specialist to develop and implement online marketing strategies for our clients.",
    requirements: [
      "Bachelor's degree in Marketing or related field",
      "2+ years of experience in digital marketing",
      "Proficiency in Google Analytics and social media platforms",
      "SEO and SEM knowledge",
      "Content creation skills"
    ],
    responsibilities: [
      "Develop and manage digital marketing campaigns",
      "Create and optimize content for digital channels",
      "Monitor and report on performance metrics",
      "Manage social media accounts",
      "Conduct market research and competitor analysis"
    ],
    applicationMethod: {
      type: 'url',
      value: "https://mediaminds.co.za/careers",
      instructions: "Submit your application with portfolio examples of your work"
    },
    postedDate: "2025-05-20",
    deadline: "2025-06-20",
    featured: true
  }
];
