
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
  },
  {
  id: "job-011",
  title: "Driver Grade II",
  company: "Nkasi District Council",
  location: "Nkasi District", // Inferred from employer
  category: "Logistics/Driving",
  salaryRange: "TGS B",
  description: "Nkasi District Council is seeking qualified candidates for the position of Driver Grade II. The role involves ensuring the safe transportation of employees and documents, vehicle maintenance, and adherence to logbook procedures.",
  requirements: [
    "Certificate of Secondary Education (Form IV)",
    "Valid Class E or C driving license",
    "At least one year of experience driving without causing an accident",
    "Must have attended basic vocational training (VETA) or another government-recognized institution"
  ],
  responsibilities: [
    "Inspect the vehicle before and after trips to ensure its safety condition",
    "Transport employees to various locations for official duties",
    "Perform minor vehicle repairs",
    "Collect and distribute various documents",
    "Fill out and maintain records of all trips in the logbook",
    "Clean the vehicle",
    "Perform any other duties as assigned by the Supervisor"
  ],
  applicationMethod: {
    type: 'online',
    value: "https://portal.ajira.go.tz/advert/display_advert/10536",
    instructions: "To submit your application, please follow the provided online link."
  },
  postedDate: "2025-06-06",
  deadline: "2025-06-19",
  featured: false
}
];
