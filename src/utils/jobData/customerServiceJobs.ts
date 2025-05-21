
import { Job } from './types';

export const customerServiceJobs: Job[] = [
  {
    id: "job-008",
    title: "Customer Service Representative",
    company: "Connect Telecoms",
    location: "Port Elizabeth",
    category: "Customer Service",
    salaryRange: "R15,000 - R20,000 per month",
    description: "Connect Telecoms is looking for friendly Customer Service Representatives to assist our customers with queries and concerns.",
    requirements: [
      "Matric certificate",
      "1+ years of customer service experience",
      "Computer literacy",
      "Good communication skills",
      "Problem-solving ability"
    ],
    responsibilities: [
      "Answer customer inquiries via phone and email",
      "Resolve customer complaints",
      "Process orders and returns",
      "Update customer information in the system",
      "Escalate complex issues to supervisors"
    ],
    applicationMethod: {
      type: 'url',
      value: "https://connecttelecoms.co.za/jobs",
      instructions: "Complete our online assessment as part of your application"
    },
    postedDate: "2025-05-22",
    deadline: "2025-06-22",
    featured: false
  }
];
