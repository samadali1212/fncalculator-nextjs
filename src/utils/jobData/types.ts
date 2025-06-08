
/**
 * Job data types for job listings
 */

export type JobLocation = 
  | 'Arusha' | 'Dar es Salaam' | 'Dodoma' | 'Geita' | 'Iringa' | 'Kagera' | 'Katavi' | 'Kigoma' | 'Kilimanjaro' | 'Lindi' | 'Manyara' | 'Mara' | 'Mbeya' | 'Morogoro' | 'Mtwara' | 'Mwanza' | 'Njombe' | 'Pwani' | 'Rukwa' | 'Ruvuma' | 'Shinyanga' | 'Simiyu' | 'Singida' | 'Songwe' | 'Tabora' | 'Tanga' | 'Zanzibar' | 'Nationwide';

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
  | 'Construction'
  | 'Hospitality'
  | 'Legal'
  | 'Human Resources'
  | 'Transportation'
  | 'Manufacturing'
  | 'Agriculture'
  | 'Media'
  | 'Security'
  | 'Procurement'
  | 'Other';

export type ApplicationMethod = {
  type: 'url' | 'email' | 'phone' | 'form' | 'letter' | 'other';
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
