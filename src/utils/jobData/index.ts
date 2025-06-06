
import { Job, JobLocation, JobCategory } from './types';
import { educationJobs } from './educationJobs';
import { administrationJobs } from './administrationJobs';

// Combine all job data
export const jobsData: Job[] = [
  ...educationJobs,
  ...administrationJobs

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

// Export types
export type { Job, JobLocation, JobCategory, ApplicationMethod } from './types';
