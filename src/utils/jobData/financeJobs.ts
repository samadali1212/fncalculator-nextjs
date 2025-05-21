
import { Job } from './types';

export const financeJobs: Job[] = [
  {
    id: "job-002",
    title: "Financial Analyst",
    company: "Investment Partners",
    location: "Johannesburg",
    category: "Finance",
    salaryRange: "R25,000 - R35,000 per month",
    description: "Investment Partners is seeking a detail-oriented Financial Analyst to join our growing team. This role will involve analyzing financial data and preparing reports for management.",
    requirements: [
      "Bachelor's degree in Finance, Accounting, or related field",
      "2+ years of experience in financial analysis",
      "Strong analytical skills and proficiency in Excel",
      "Knowledge of financial modeling and forecasting techniques",
      "CFA designation is a plus"
    ],
    responsibilities: [
      "Prepare financial reports and forecasts",
      "Analyze market trends and investment opportunities",
      "Support budgeting and planning processes",
      "Track financial performance metrics",
      "Present findings to management"
    ],
    applicationMethod: {
      type: 'email',
      value: "careers@investmentpartners.co.za",
      instructions: "Send your CV and cover letter with subject 'Financial Analyst Application'"
    },
    postedDate: "2025-05-05",
    deadline: "2025-05-30",
    featured: false
  }
];
