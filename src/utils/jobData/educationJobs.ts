
import { Job } from './types';

export const educationJobs: Job[] = [
  {
    id: "job-004",
    title: "High School Mathematics Teacher",
    company: "Greenfield Academy",
    location: "Pretoria",
    category: "Education",
    salaryRange: "R20,000 - R30,000 per month",
    description: "Greenfield Academy is seeking an experienced Mathematics Teacher for grades 10-12. The ideal candidate will have a passion for education and strong subject knowledge.",
    requirements: [
      "Bachelor's degree in Mathematics or Education",
      "SACE registration",
      "3+ years of teaching experience",
      "Knowledge of IEB curriculum",
      "Strong classroom management skills"
    ],
    responsibilities: [
      "Teach Mathematics to grades 10-12",
      "Develop lesson plans and teaching materials",
      "Assess student progress and provide feedback",
      "Participate in parent-teacher conferences",
      "Contribute to extracurricular activities"
    ],
    applicationMethod: {
      type: 'email',
      value: "recruitment@greenfieldacademy.co.za",
      instructions: "Email your CV, cover letter and teaching portfolio"
    },
    postedDate: "2025-05-12",
    deadline: "2025-06-15",
    featured: false
  }
];
