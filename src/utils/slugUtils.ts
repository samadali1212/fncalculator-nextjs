
/**
 * Utility functions for generating SEO-friendly slugs
 */

/**
 * Generate a SEO-friendly slug from job title and company
 * @param title Job title
 * @param company Company name
 * @returns SEO-friendly slug with random number
 */
export const generateJobSlug = (title: string, company: string): string => {
  // Clean and combine title and company
  const titleSlug = title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters except hyphens
    .replace(/\s+/g, '-')     // Replace spaces with hyphens
    .replace(/-+/g, '-')      // Replace multiple hyphens with single
    .trim();

  const companySlug = company
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();

  // Generate random 3-digit number for uniqueness
  const randomNum = Math.floor(100 + Math.random() * 900);
  
  // Combine title, company and random number
  return `${titleSlug}-at-${companySlug}-${randomNum}`;
};

/**
 * Extract job ID from a slug
 * @param slug SEO-friendly slug
 * @returns Job ID extracted from slug
 */
export const extractJobIdFromSlug = (slug: string): string => {
  // If it's already a job ID format, return as is
  if (slug.startsWith('job-')) {
    return slug;
  }
  
  // Extract the random number from the end of the slug
  const parts = slug.split('-');
  const lastPart = parts[parts.length - 1];
  
  // If the last part is a number, it's likely our random identifier
  if (/^\d{3}$/.test(lastPart)) {
    return `job-${lastPart}`;
  }
  
  // Fallback: return the slug as is
  return slug;
};

/**
 * Convert existing job ID to slug format for backward compatibility
 * @param job Job object
 * @returns Generated slug
 */
export const createSlugFromJob = (job: { title: string; company: string; id: string }): string => {
  // Extract number from job ID (e.g., "job-1" -> "1")
  const idNumber = job.id.replace('job-', '');
  
  const titleSlug = job.title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();

  const companySlug = job.company
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();

  // Use the existing ID number padded to 3 digits for consistency
  const paddedId = idNumber.padStart(3, '0');
  
  return `${titleSlug}-at-${companySlug}-${paddedId}`;
};
