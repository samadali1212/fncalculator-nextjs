
import { Job, JobLocation, JobCategory } from './types';
import { technologyJobs } from './technologyJobs';
import { financeJobs } from './financeJobs';
import { healthcareJobs } from './healthcareJobs';
import { educationJobs } from './educationJobs';
import { engineeringJobs } from './engineeringJobs';
import { salesJobs } from './salesJobs';
import { marketingJobs } from './marketingJobs';
import { customerServiceJobs } from './customerServiceJobs';
import { administrationJobs } from './administrationJobs';
import { otherJobs } from './otherJobs';

// Combine all job data
export const jobsData: Job[] = [
  ...technologyJobs,
  ...financeJobs,
  ...healthcareJobs,
  ...educationJobs,
  ...engineeringJobs,
  ...salesJobs,
  ...marketingJobs,
  ...customerServiceJobs,
  ...administrationJobs,
  ...otherJobs
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
