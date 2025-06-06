
import { Job } from './types';

export const administrationJobs: Job[] = [
{
  id: "job-010",
  title: "Research Nurse/Clinician",
  company: "Mwanza Intervention Trials Unit (MITU)",
  location: "Mwanza",
  category: "Healthcare/Research",
  salaryRange: "Not Disclosed",
  description: "The Mwanza Intervention Trials Unit (MITU) is a collaborative research unit of the London School of Hygiene and Tropical Medicine and the National Institute for Medical Research, based at the National Institute for Medical Research campus in Mwanza, Tanzania. Its mission is to improve health through the development and evaluation of interventions against HIV and other health problems by conducting research, including clinical trials, to the highest international standards, enhancing research capacity in Tanzania and East Africa, and contributing to the translation of research findings into health policy. MITU is currently collaborating with international partners on human papillomavirus (HPV) vaccine studies.",
  requirements: [
    "Fully-registered nurse practitioner or clinical officer (CO) with an up-to-date license to practice in Tanzania",
    "At least 2 years of post-qualification experience in hospitals or clinics",
    "Experience of working within a research setting",
    "Excellent written and oral communication skills in English and Swahili"
  ],
  responsibilities: [
    "Provide trial information to potential participants and ensure understanding, answering any queries",
    "Perform physical examinations and sample collection according to standard operating procedures, following all required QA and reporting requirements",
    "Collect data as required for the trial, completing source documents according to standard operating procedures",
    "Follow all requirements according to the study protocol and the principles of good clinical practice"
  ],
  applicationMethod: {
    type: 'email',
    value: "recruitment@mitu.or.tz",
    instructions: "Email your letter of application, CV, and copies of all relevant certificates, memberships, and qualifications. Clearly state 'Research Nurse/Clinician' in the subject line. All attached documents (cover letter and CV) should be clearly saved using the applicant’s full name, document type, and date of submission (e.g., First Name_Last name_CV_10Jan2025)."
  },
  postedDate: "2025-06-01",
  deadline: "2025-07-05",
  featured: false
}
];
