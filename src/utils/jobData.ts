
/**
 * Job data structure for job listings
 */

export type JobLocation = 'Remote' | 'Johannesburg' | 'Cape Town' | 'Durban' | 'Pretoria' | 'Port Elizabeth' | 'Bloemfontein' | 'Nationwide';

export type JobCategory = 
  | 'Technology' 
  | 'Finance' 
  | 'Healthcare' 
  | 'Education' 
  | 'Engineering' 
  | 'Sales' 
  | 'Marketing' 
  | 'Customer Service' 
  | 'Administration' 
  | 'Other';

export interface Job {
  id: string;
  title: string;
  company: string;
  location: JobLocation;
  category: JobCategory;
  salaryRange: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  applicationUrl: string;
  postedDate: string;
  deadline: string;
  featured: boolean;
}

// Sample job data
export const jobsData: Job[] = [
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
    applicationUrl: "https://techsolutions.co.za/careers",
    postedDate: "2025-05-01",
    deadline: "2025-06-01",
    featured: true
  },
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
    applicationUrl: "https://investmentpartners.co.za/jobs",
    postedDate: "2025-05-05",
    deadline: "2025-05-30",
    featured: false
  },
  {
    id: "job-003",
    title: "Registered Nurse",
    company: "Cape Medical Center",
    location: "Cape Town",
    category: "Healthcare",
    salaryRange: "R22,000 - R32,000 per month",
    description: "Cape Medical Center is looking for a dedicated Registered Nurse to provide quality patient care. The successful candidate will work in our medical-surgical unit.",
    requirements: [
      "Bachelor's degree in Nursing",
      "Current SANC registration",
      "Minimum of 1 year of clinical experience",
      "BLS certification",
      "Excellent communication skills"
    ],
    responsibilities: [
      "Provide direct patient care",
      "Administer medications as prescribed",
      "Document patient information accurately",
      "Collaborate with healthcare team members",
      "Educate patients and their families"
    ],
    applicationUrl: "https://capemedical.co.za/careers",
    postedDate: "2025-05-10",
    deadline: "2025-06-10",
    featured: true
  },
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
    applicationUrl: "https://greenfieldacademy.co.za/vacancies",
    postedDate: "2025-05-12",
    deadline: "2025-06-15",
    featured: false
  },
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
    applicationUrl: "https://buildright.co.za/careers",
    postedDate: "2025-05-15",
    deadline: "2025-06-20",
    featured: true
  },
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
    applicationUrl: "https://globalproducts.co.za/join-our-team",
    postedDate: "2025-05-18",
    deadline: "2025-06-18",
    featured: false
  },
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
    applicationUrl: "https://mediaminds.co.za/careers",
    postedDate: "2025-05-20",
    deadline: "2025-06-20",
    featured: true
  },
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
    applicationUrl: "https://connecttelecoms.co.za/jobs",
    postedDate: "2025-05-22",
    deadline: "2025-06-22",
    featured: false
  },
  {
    id: "job-009",
    title: "Office Administrator",
    company: "Legal Partners",
    location: "Bloemfontein",
    category: "Administration",
    salaryRange: "R12,000 - R18,000 per month",
    description: "Legal Partners requires an efficient Office Administrator to maintain office operations and provide administrative support to our legal team.",
    requirements: [
      "Diploma in Office Administration or related field",
      "2+ years of administrative experience",
      "Proficiency in MS Office suite",
      "Strong organizational skills",
      "Attention to detail"
    ],
    responsibilities: [
      "Manage office supplies and equipment",
      "Coordinate meetings and appointments",
      "Handle incoming calls and correspondence",
      "Maintain filing systems",
      "Assist with basic bookkeeping tasks"
    ],
    applicationUrl: "https://legalpartners.co.za/careers",
    postedDate: "2025-05-25",
    deadline: "2025-06-25",
    featured: false
  },
  {
    id: "job-010",
    title: "Warehouse Manager",
    company: "Logistics Solutions",
    location: "Johannesburg",
    category: "Other",
    salaryRange: "R25,000 - R35,000 per month",
    description: "Logistics Solutions is seeking an experienced Warehouse Manager to oversee operations at our Johannesburg distribution center.",
    requirements: [
      "Diploma or degree in Logistics or Supply Chain Management",
      "5+ years of warehouse management experience",
      "Knowledge of inventory management systems",
      "Strong leadership and organizational skills",
      "Valid forklift operator's license"
    ],
    responsibilities: [
      "Oversee daily warehouse operations",
      "Manage warehouse staff and schedules",
      "Ensure efficient inventory control",
      "Implement safety and security procedures",
      "Coordinate with transportation department"
    ],
    applicationUrl: "https://logisticssolutions.co.za/vacancies",
    postedDate: "2025-05-28",
    deadline: "2025-06-28",
    featured: true
  }
];

// Get unique locations from job data
export const getUniqueLocations = (): JobLocation[] => {
  const locationSet = new Set<JobLocation>();
  jobsData.forEach(job => locationSet.add(job.location));
  return Array.from(locationSet);
};

// Get unique categories from job data
export const getUniqueCategories = (): JobCategory[] => {
  const categorySet = new Set<JobCategory>();
  jobsData.forEach(job => categorySet.add(job.category));
  return Array.from(categorySet);
};

