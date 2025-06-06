
import { Job } from './types';

export const educationJobs: Job[] = [
  {
    id: "job-004",
    title: "High School Mathematics Teacher",
    company: "Msimbazi Secondary School",
    location: "Dar es Salaam",
    category: "Education",
    salaryRange: "TSH 800,000 - 1,200,000 per month",
    description: "Msimbazi Secondary School is seeking an experienced Mathematics Teacher for Form 3-6. The ideal candidate will have a passion for education and strong subject knowledge.",
    requirements: [
      "Bachelor's degree in Mathematics or Education",
      "Teachers Service Commission registration",
      "3+ years of teaching experience",
      "Knowledge of Tanzanian curriculum",
      "Strong classroom management skills"
    ],
    responsibilities: [
      "Teach Mathematics to Form 3-6 students",
      "Develop lesson plans and teaching materials",
      "Assess student progress and provide feedback",
      "Participate in parent-teacher conferences",
      "Contribute to extracurricular activities"
    ],
    applicationMethod: {
      type: 'email',
      value: "recruitment@msimbazischool.co.tz",
      instructions: "Email your CV, cover letter and teaching certificates"
    },
    postedDate: "2025-05-12",
    deadline: "2025-06-15",
    featured: false
  }
];
