
/**
 * Job data types for job listings
 */

export type JobLocation = 
  | 'Remote' 
  | 'Dar es Salaam' 
  | 'Arusha' 
  | 'Mwanza' 
  | 'Mbeya' 
  | 'Morogoro' 
  | 'Tanga' 
  | 'Dodoma' 
  | 'Moshi' 
  | 'Nationwide'
  | 'Nkasi District'
  | 'Mtwara, Tanzania'
  | 'Dodoma region, Tanzania'
  | "Chang'ombe, Tanzania";

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
  | 'Other'
  | 'Healthcare/Research'
  | 'Logistics/Driving'
  | 'Manufacturing/Engineering'
  | 'NGO/Community Development'
  | 'Logistics/Warehouse Operations';

export type ApplicationMethod = {
  type: 'url' | 'email' | 'phone' | 'form' | 'other';
  value: string;
  instructions?: string;
};

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
  applicationMethod: ApplicationMethod;
  postedDate: string;
  deadline: string;
  featured: boolean;
}
