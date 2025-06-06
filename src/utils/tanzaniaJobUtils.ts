
import { jobsData } from './jobData';
import { slugify } from './utils';
import { JobCategory, JobLocation } from './jobData/types';

/**
 * Get unique locations from job data (Tanzania specific)
 */
export const getUniqueLocations = (): JobLocation[] => {
  const locationSet = new Set<JobLocation>();
  jobsData.forEach(job => locationSet.add(job.location));
  return Array.from(locationSet);
};

/**
 * Get unique categories from job data
 */
export const getUniqueCategories = (): JobCategory[] => {
  const categorySet = new Set<JobCategory>();
  jobsData.forEach(job => categorySet.add(job.category));
  return Array.from(categorySet);
};

/**
 * Get jobs by category
 */
export const getJobsByCategory = (category: JobCategory) => {
  return jobsData.filter(job => job.category === category);
};

/**
 * Filter jobs based on search query, category, and location
 */
export const filterJobs = (query = '', category?: JobCategory, location?: JobLocation) => {
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
 * Format a date string to display format
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-TZ', {
    year: 'numeric',
    month: 'long', 
    day: 'numeric'
  });
};

/**
 * Check if a job posting is new (posted within the last 7 days)
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
 */
export const isJobExpiringSoon = (deadline: string): boolean => {
  const deadlineDate = new Date(deadline);
  const now = new Date();
  const diffTime = deadlineDate.getTime() - now.getTime();
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  return diffDays > 0 && diffDays <= 3;
};

/**
 * Create SEO-friendly title for category-based job pages
 */
export const createCategoryPageTitle = (category: JobCategory): string => {
  return `${category} Jobs in Tanzania | Latest Vacancies`;
};

/**
 * Create SEO-friendly description for category-based job pages
 */
export const createCategoryPageDescription = (category: JobCategory, jobCount: number): string => {
  return `Browse ${jobCount} ${category.toLowerCase()} job opportunities across Tanzania. Find and apply for the latest ${category.toLowerCase()} vacancies for all experience levels.`;
};
