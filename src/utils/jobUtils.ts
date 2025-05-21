
import { Job, jobsData, JobCategory, JobLocation, ApplicationMethod } from './jobData';
import { slugify } from './utils';

/**
 * Get all available jobs
 * @returns Array of all jobs
 */
export const getAllJobs = (): Job[] => {
  return jobsData;
};

/**
 * Get a specific job by its ID
 * @param id Job ID
 * @returns The job object or undefined if not found
 */
export const getJobById = (id: string): Job | undefined => {
  // Clean up the id if needed (some URL formats may add extra characters)
  const cleanId = id.trim();
  console.log("Looking for job with clean ID:", cleanId);
  console.log("Available job IDs:", jobsData.map(job => job.id));
  return jobsData.find(job => job.id === cleanId);
};

/**
 * Get a specific job by its slug
 * @param slug Job slug (URL-friendly version of title)
 * @returns The job object or undefined if not found
 */
export const getJobBySlug = (slug: string): Job | undefined => {
  return jobsData.find(job => slugify(job.title) === slug);
};

/**
 * Filter jobs based on search query, category, and location
 * @param query Search query string
 * @param category Job category
 * @param location Job location
 * @returns Filtered array of jobs
 */
export const filterJobs = (
  query: string = '',
  category?: JobCategory,
  location?: JobLocation
): Job[] => {
  return jobsData.filter(job => {
    const matchesQuery = query === '' || 
      job.title.toLowerCase().includes(query.toLowerCase()) ||
      job.company.toLowerCase().includes(query.toLowerCase()) ||
      job.description.toLowerCase().includes(query.toLowerCase());
    
    const matchesCategory = !category || job.category === category;
    
    const matchesLocation = !location || job.location === location;
    
    return matchesQuery && matchesCategory && matchesLocation;
  });
};

/**
 * Get related jobs based on category and excluding the current job
 * @param currentJobId ID of the current job to exclude
 * @param category Category to filter by
 * @param limit Maximum number of related jobs to return
 * @returns Array of related jobs
 */
export const getRelatedJobs = (
  currentJobId: string,
  category: JobCategory,
  limit: number = 3
): Job[] => {
  return jobsData
    .filter(job => job.id !== currentJobId && job.category === category)
    .slice(0, limit);
};

/**
 * Get jobs from the same company excluding the current job
 * @param currentJobId ID of the current job to exclude
 * @param company Company name to filter by
 * @param limit Maximum number of related jobs to return
 * @returns Array of jobs from the same company
 */
export const getJobsFromSameCompany = (
  currentJobId: string,
  company: string,
  limit: number = 3
): Job[] => {
  return jobsData
    .filter(job => job.id !== currentJobId && job.company === company)
    .slice(0, limit);
};

/**
 * Get jobs in the same location excluding the current job
 * @param currentJobId ID of the current job to exclude
 * @param location Location to filter by
 * @param limit Maximum number of related jobs to return
 * @returns Array of jobs in the same location
 */
export const getJobsInSameLocation = (
  currentJobId: string,
  location: JobLocation,
  limit: number = 3
): Job[] => {
  return jobsData
    .filter(job => job.id !== currentJobId && job.location === location)
    .slice(0, limit);
};

/**
 * Format a date string to display format (e.g., "May 15, 2025")
 * @param dateString Date string in format YYYY-MM-DD
 * @returns Formatted date string
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Check if a job posting is new (posted within the last 7 days)
 * @param postedDate Date string in format YYYY-MM-DD
 * @returns Boolean indicating if the job is new
 */
export const isNewJob = (postedDate: string): boolean => {
  const postDate = new Date(postedDate);
  const now = new Date();
  const diffTime = now.getTime() - postDate.getTime();
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  return diffDays <= 7;
};

/**
 * Check if a job posting is about to expire (deadline within the next 3 days)
 * @param deadline Date string in format YYYY-MM-DD
 * @returns Boolean indicating if the job is about to expire
 */
export const isJobExpiringSoon = (deadline: string): boolean => {
  const deadlineDate = new Date(deadline);
  const now = new Date();
  const diffTime = deadlineDate.getTime() - now.getTime();
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  return diffDays > 0 && diffDays <= 3;
};

/**
 * Get application instructions based on application method
 * @param method Application method object
 * @returns Formatted instructions string
 */
export const getApplicationInstructions = (method: ApplicationMethod): string => {
  switch(method.type) {
    case 'url':
      return `Apply online at the employer's website.`;
    case 'email':
      return `Send your application to ${method.value}.`;
    case 'phone':
      return `Call ${method.value} to apply.`;
    case 'form':
      return `Complete the application form online.`;
    case 'other':
      return method.value;
    default:
      return 'Contact the employer directly to apply.';
  }
};

/**
 * Handle job application based on method type
 * @param method Application method object
 * @returns Boolean indicating if the application was initiated
 */
export const handleJobApplication = (method: ApplicationMethod): boolean => {
  switch(method.type) {
    case 'url':
    case 'form':
      window.open(method.value, '_blank');
      return true;
    case 'email':
      window.location.href = `mailto:${method.value}?subject=Job Application`;
      return true;
    case 'phone':
      window.location.href = `tel:${method.value}`;
      return true;
    case 'other':
      return false; // Requires manual handling
    default:
      return false;
  }
};

/**
 * Parse salary range string into min and max values for schema markup
 * @param salaryRange Salary range string (e.g., "R25,000 - R35,000 per month")
 * @returns Object with min, max values and time unit
 */
export const parseSalaryRange = (salaryRange: string): { 
  min?: number; 
  max?: number; 
  value?: number; 
  currency: string; 
  unitText: "YEAR" | "MONTH" | "WEEK" | "DAY" | "HOUR";
} => {
  // Default values
  const result = {
    currency: "ZAR",
    unitText: "MONTH" as const
  };

  // Extract currency (assuming R for Rand)
  if (salaryRange.includes("$")) {
    result.currency = "USD";
  } else if (salaryRange.includes("€")) {
    result.currency = "EUR";
  } else if (salaryRange.includes("£")) {
    result.currency = "GBP";
  }

  // Extract time unit
  if (salaryRange.toLowerCase().includes("per year") || salaryRange.toLowerCase().includes("yearly") || salaryRange.toLowerCase().includes("per annum")) {
    result.unitText = "YEAR";
  } else if (salaryRange.toLowerCase().includes("per month") || salaryRange.toLowerCase().includes("monthly")) {
    result.unitText = "MONTH";
  } else if (salaryRange.toLowerCase().includes("per week") || salaryRange.toLowerCase().includes("weekly")) {
    result.unitText = "WEEK";
  } else if (salaryRange.toLowerCase().includes("per day") || salaryRange.toLowerCase().includes("daily")) {
    result.unitText = "DAY";
  } else if (salaryRange.toLowerCase().includes("per hour") || salaryRange.toLowerCase().includes("hourly")) {
    result.unitText = "HOUR";
  }

  // Extract numeric values
  const numbers = salaryRange.match(/\d[\d\s,\.]*\d|\d/g);
  if (numbers) {
    // Clean and parse the values (removing commas, spaces, etc.)
    const cleanNumbers = numbers.map(n => Number(n.replace(/[^\d\.]/g, '')));
    
    if (cleanNumbers.length >= 2) {
      // If we have at least two numbers, assume it's a range
      result.min = cleanNumbers[0];
      result.max = cleanNumbers[1];
    } else if (cleanNumbers.length === 1) {
      // If only one number, assume it's a fixed value
      result.value = cleanNumbers[0];
    }
  }

  return result;
};

/**
 * Map job category to schema.org employmentType
 * @param category Job category
 * @returns employmentType string for schema markup
 */
export const mapCategoryToEmploymentType = (category: JobCategory): string => {
  // Map common job categories to schema.org employmentType values
  // See https://schema.org/employmentType for valid values
  const categoryMap: Record<string, string> = {
    "Full-time": "FULL_TIME",
    "Part-time": "PART_TIME",
    "Contract": "CONTRACTOR",
    "Temporary": "TEMPORARY",
    "Internship": "INTERN",
    "Volunteer": "VOLUNTEER"
  };
  
  // Look for employmentType keywords in the category
  for (const [key, value] of Object.entries(categoryMap)) {
    if (category.toLowerCase().includes(key.toLowerCase())) {
      return value;
    }
  }
  
  // Default to FULL_TIME if no match found
  return "FULL_TIME";
};
