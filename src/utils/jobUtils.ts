
import { Job, jobsData, JobCategory, JobLocation } from './jobData';
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
  return jobsData.find(job => job.id === id);
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

