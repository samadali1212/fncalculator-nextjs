
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
 * @param location Job location (can be province, city, or specific location)
 * @returns Filtered array of jobs
 */
export const filterJobs = (
  query: string = '',
  category?: JobCategory,
  location?: JobLocation | string
): Job[] => {
  return jobsData.filter(job => {
    const matchesQuery = query === '' || 
      job.title.toLowerCase().includes(query.toLowerCase()) ||
      job.company.toLowerCase().includes(query.toLowerCase()) ||
      job.description.toLowerCase().includes(query.toLowerCase());
    
    const matchesCategory = !category || job.category === category;
    
    let matchesLocation = true;
    if (location) {
      // Check if location is a province
      const citiesInProvince = getCitiesByProvince(location);
      if (citiesInProvince.length > 0) {
        // It's a province - check if job is in any city of this province or is nationwide/remote
        matchesLocation = job.location === 'Nationwide' || 
                         job.location === 'Remote' || 
                         citiesInProvince.includes(job.location);
      } else {
        // It's a specific location
        matchesLocation = job.location === location;
      }
    }
    
    return matchesQuery && matchesCategory && matchesLocation;
  });
};

/**
 * Get all unique job categories from job data
 * @returns Array of unique categories
 */
export const getUniqueCategories = (): string[] => {
  const categories = new Set<string>();
  jobsData.forEach(job => {
    categories.add(job.category);
  });
  return Array.from(categories);
};

/**
 * Get all unique job locations from job data
 * @returns Array of unique locations
 */
export const getUniqueLocations = (): string[] => {
  const locations = new Set<string>();
  jobsData.forEach(job => {
    locations.add(job.location);
  });
  return Array.from(locations);
};

/**
 * Get related jobs based on job category
 * @param currentJobId Current job ID to exclude
 * @param category Job category to find similar jobs
 * @param limit Maximum number of related jobs to return
 * @returns Array of related jobs
 */
export const getRelatedJobs = (
  currentJobId: string,
  category: string,
  limit: number = 5
): Job[] => {
  return jobsData
    .filter(job => job.id !== currentJobId && job.category === category)
    .slice(0, limit);
};

/**
 * Get jobs from the same company
 * @param currentJobId Current job ID to exclude
 * @param company Company name to find jobs for
 * @param limit Maximum number of jobs to return
 * @returns Array of jobs from the same company
 */
export const getJobsFromSameCompany = (
  currentJobId: string,
  company: string,
  limit: number = 5
): Job[] => {
  return jobsData
    .filter(job => job.id !== currentJobId && job.company === company)
    .slice(0, limit);
};

/**
 * Get jobs from the same location
 * @param currentJobId Current job ID to exclude
 * @param location Location to find jobs for
 * @param limit Maximum number of jobs to return
 * @returns Array of jobs from the same location
 */
export const getJobsInSameLocation = (
  currentJobId: string,
  location: string,
  limit: number = 5
): Job[] => {
  return jobsData
    .filter(job => job.id !== currentJobId && job.location === location)
    .slice(0, limit);
};

/**
 * Get all provinces from job locations
 * @returns Array of unique provinces
 */
export const getProvinces = (): string[] => {
  // In South Africa, the major provinces are:
  const provinces = [
    'Gauteng',
    'Western Cape',
    'KwaZulu-Natal',
    'Eastern Cape',
    'Free State',
    'North West',
    'Mpumalanga',
    'Limpopo',
    'Northern Cape'
  ];
  
  return provinces;
};

/**
 * Get all cities from job data
 * @returns Array of unique cities
 */
export const getCities = (): string[] => {
  // Extract unique cities from job locations
  const cities = new Set<string>();
  
  jobsData.forEach(job => {
    // For locations that are cities, add them directly
    if (job.location !== 'Remote' && job.location !== 'Nationwide') {
      cities.add(job.location);
    }
  });
  
  return Array.from(cities);
};

/**
 * Map province to its major cities
 * @param province Province name
 * @returns Array of cities in that province
 */
export const getCitiesByProvince = (province: string): string[] => {
  const provinceCityMap: Record<string, string[]> = {
    'Gauteng': ['Johannesburg', 'Pretoria', 'Centurion', 'Sandton', 'Midrand'],
    'Western Cape': ['Cape Town', 'Stellenbosch', 'Paarl', 'George'],
    'KwaZulu-Natal': ['Durban', 'Pietermaritzburg', 'Richards Bay'],
    'Eastern Cape': ['Port Elizabeth', 'East London', 'Mthatha'],
    'Free State': ['Bloemfontein', 'Welkom', 'Bethlehem'],
    'North West': ['Rustenburg', 'Potchefstroom', 'Mahikeng'],
    'Mpumalanga': ['Nelspruit', 'Witbank', 'Secunda'],
    'Limpopo': ['Polokwane', 'Tzaneen', 'Musina'],
    'Northern Cape': ['Kimberley', 'Upington', 'Springbok']
  };
  
  return provinceCityMap[province] || [];
};

/**
 * Map city to its province
 * @param city City name
 * @returns Province name
 */
export const getProvinceByCity = (city: string): string => {
  const cityProvinceMap: Record<string, string> = {
    'Johannesburg': 'Gauteng',
    'Pretoria': 'Gauteng',
    'Cape Town': 'Western Cape',
    'Durban': 'KwaZulu-Natal',
    'Port Elizabeth': 'Eastern Cape',
    'Bloemfontein': 'Free State',
    'East London': 'Eastern Cape',
    'Pietermaritzburg': 'KwaZulu-Natal',
    'Rustenburg': 'North West',
    'Nelspruit': 'Mpumalanga',
    'Polokwane': 'Limpopo',
    'Kimberley': 'Northern Cape'
  };
  
  return cityProvinceMap[city] || 'Unknown';
};

/**
 * Get jobs by province
 * @param province Province name
 * @returns Array of jobs in that province
 */
export const getJobsByProvince = (province: string): Job[] => {
  const citiesInProvince = getCitiesByProvince(province);
  
  return jobsData.filter(job => {
    // Include nationwide and remote jobs in all province listings
    if (job.location === 'Nationwide' || job.location === 'Remote') {
      return true;
    }
    
    // Check if job is in one of the cities in this province
    return citiesInProvince.includes(job.location);
  });
};

/**
 * Get jobs by city
 * @param city City name
 * @returns Array of jobs in that city
 */
export const getJobsByCity = (city: string): Job[] => {
  return jobsData.filter(job => {
    // Include nationwide and remote jobs in all city listings
    if (job.location === 'Nationwide' || job.location === 'Remote') {
      return true;
    }
    
    return job.location === city;
  });
};

/**
 * Get jobs by category
 * @param category Job category
 * @returns Array of jobs in that category
 */
export const getJobsByCategory = (category: JobCategory): Job[] => {
  return jobsData.filter(job => job.category === category);
};

/**
 * Create SEO-friendly title for location-based job pages
 * @param location Location name (province or city)
 * @returns SEO-friendly title
 */
export const createLocationPageTitle = (location: string): string => {
  return `Jobs in ${location}, South Africa | Latest Vacancies`;
};

/**
 * Create SEO-friendly description for location-based job pages
 * @param location Location name (province or city)
 * @param jobCount Number of jobs
 * @returns SEO-friendly description
 */
export const createLocationPageDescription = (location: string, jobCount: number): string => {
  return `Browse ${jobCount} job opportunities in ${location}, South Africa. Find and apply for the latest vacancies in ${location} across various industries and career levels.`;
};

/**
 * Create SEO-friendly title for category-based job pages
 * @param category Job category
 * @returns SEO-friendly title
 */
export const createCategoryPageTitle = (category: string): string => {
  return `${category} Jobs in South Africa | Latest Vacancies`;
};

/**
 * Create SEO-friendly description for category-based job pages
 * @param category Job category
 * @param jobCount Number of jobs
 * @returns SEO-friendly description
 */
export const createCategoryPageDescription = (category: string, jobCount: number): string => {
  return `Browse ${jobCount} ${category.toLowerCase()} job opportunities across South Africa. Find and apply for the latest ${category.toLowerCase()} vacancies for all experience levels.`;
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
 * @param jobTitle Optional job title for email subject
 * @param companyName Optional company name for email content
 * @returns Boolean indicating if the application was initiated
 */
export const handleJobApplication = (
  method: ApplicationMethod, 
  jobTitle?: string, 
  companyName?: string
): boolean => {
  switch(method.type) {
    case 'url':
    case 'form':
      if (method.value) {
        window.open(method.value, '_blank', 'noopener,noreferrer');
        return true;
      }
      return false;
      
    case 'email':
      if (method.value) {
        // Create a proper mailto link with subject and body
        const subject = jobTitle && companyName 
          ? `Application for ${jobTitle} at ${companyName}`
          : jobTitle 
            ? `Application for ${jobTitle}`
            : 'Job Application';
            
        const body = jobTitle && companyName
          ? `Dear Hiring Manager,\n\nI am writing to express my interest in the ${jobTitle} position at ${companyName}.\n\nPlease find my resume attached. I look forward to hearing from you.\n\nBest regards,`
          : 'Dear Hiring Manager,\n\nI am writing to express my interest in this position.\n\nPlease find my resume attached. I look forward to hearing from you.\n\nBest regards,';
        
        const mailtoUrl = `mailto:${method.value}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        try {
          // Try window.location.href first (works better on desktop)
          window.location.href = mailtoUrl;
          return true;
        } catch (error) {
          // Fallback to window.open (better for mobile/some browsers)
          try {
            window.open(mailtoUrl, '_blank');
            return true;
          } catch (fallbackError) {
            console.error('Failed to open email client:', fallbackError);
            return false;
          }
        }
      }
      return false;
      
    case 'phone':
      if (method.value) {
        window.location.href = `tel:${method.value}`;
        return true;
      }
      return false;
      
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
  const result: {
    min?: number;
    max?: number;
    value?: number;
    currency: string;
    unitText: "YEAR" | "MONTH" | "WEEK" | "DAY" | "HOUR";
  } = {
    currency: "ZAR",
    unitText: "MONTH"
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
