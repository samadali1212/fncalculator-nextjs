
import { Job } from './types';

export const salesJobs: Job[] = [
  {
    id: "job-006",
    title: "Sales Representative",
    company: "Global Products SA",
    location: "Nationwide",
    category: "Sales",
    salaryRange: "R18,000 base + commission",
    description: "Global Products SA is expanding its sales team and looking for motivated Sales Representatives. This role offers excellent commission opportunities for high performers.",
    requirements: [
      "Matric certificate or higher qualification",
      "1+ years of sales experience",
      "Valid driver's license and own vehicle",
      "Excellent communication and negotiation skills",
      "Target-driven mindset"
    ],
    responsibilities: [
      "Generate leads and acquire new customers",
      "Meet or exceed monthly sales targets",
      "Maintain relationships with existing clients",
      "Conduct product demonstrations",
      "Report sales activities and results"
    ],
    applicationMethod: {
      type: 'phone',
      value: "+27 11 555 1234",
      instructions: "Call our recruitment line between 9AM-5PM, Monday-Friday"
    },
    postedDate: "2025-05-18",
    deadline: "2025-06-18",
    featured: false
  }
];
