
import { Job } from './types';

export const engineeringJobs: Job[] = [
  {
    id: "job-005",
    title: "Civil Engineer",
    company: "Build Right Engineering",
    location: "Durban",
    category: "Engineering",
    salaryRange: "R35,000 - R50,000 per month",
    description: "Build Right Engineering is looking for a qualified Civil Engineer to join our team. The successful candidate will work on various infrastructure projects across KwaZulu-Natal.",
    requirements: [
      "Bachelor's degree in Civil Engineering",
      "Professional Engineering registration",
      "5+ years of experience in infrastructure projects",
      "Proficiency in AutoCAD and related software",
      "Project management experience"
    ],
    responsibilities: [
      "Design and develop civil engineering plans",
      "Conduct site investigations and surveys",
      "Prepare project specifications and cost estimates",
      "Oversee construction activities",
      "Ensure compliance with regulations and standards"
    ],
    applicationMethod: {
      type: 'url',
      value: "https://buildright.co.za/careers",
      instructions: "Apply through our careers portal with your engineering portfolio"
    },
    postedDate: "2025-05-15",
    deadline: "2025-06-20",
    featured: true
  }
];
