
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { getSalaryData } from "../utils/salaryData";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";

interface JobListProps {
  searchQuery: string;
  categoryFilter?: string;
}

// Function to properly capitalize job titles
const capitalizeJobTitle = (title: string): string => {
  return title
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Function to determine job category based on title or other criteria
const getJobCategory = (jobTitle: string): string => {
  const titleLower = jobTitle.toLowerCase();
  
  // Simple mapping based on keywords
  if (titleLower.includes("account") || titleLower.includes("financ") || titleLower.includes("bank") || titleLower.includes("tax")) {
    return "Finance";
  } else if (titleLower.includes("develop") || titleLower.includes("software") || titleLower.includes("programmer") || titleLower.includes("it ") || titleLower.includes("web") || titleLower.includes("data")) {
    return "IT";
  } else if (titleLower.includes("doctor") || titleLower.includes("nurse") || titleLower.includes("health") || titleLower.includes("medical") || titleLower.includes("pharma")) {
    return "Healthcare";
  } else if (titleLower.includes("teach") || titleLower.includes("educat") || titleLower.includes("professor") || titleLower.includes("lecturer")) {
    return "Education";
  } else if (titleLower.includes("engineer") || titleLower.includes("mechanic") || titleLower.includes("technician")) {
    return "Engineering";
  } else if (titleLower.includes("market") || titleLower.includes("sales") || titleLower.includes("advertising") || titleLower.includes("brand")) {
    return "Marketing";
  } else if (titleLower.includes("legal") || titleLower.includes("lawyer") || titleLower.includes("attorney") || titleLower.includes("advocate")) {
    return "Legal";
  }
  
  // Default category for jobs that don't match specific keywords
  return "Other";
};

const JobList = ({ searchQuery, categoryFilter = "All" }: JobListProps) => {
  const salaryData = getSalaryData();
  const [itemsToShow, setItemsToShow] = useState(50);
  
  // Convert object to array of job entries, filtering out any undefined data
  const jobEntries = Object.entries(salaryData)
    .filter(([_, value]) => value !== undefined) // Ensure no undefined values
    .map(([key, value]) => {
      const title = capitalizeJobTitle(key.replace(/_/g, " "));
      return {
        id: key,
        title: title,
        slug: key.replace(/_/g, "-"), // Convert underscore to hyphens for URL
        salary: value.average,
        experience: value.experience,
        education: value.education,
        category: getJobCategory(title)
      };
    });
  
  // Filter jobs based on search query and category
  const filteredJobs = jobEntries.filter(job => {
    const matchesSearch = !searchQuery || 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.experience.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.education.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory = categoryFilter === "All" || job.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  // Sort jobs alphabetically by title
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  
  const displayedJobs = sortedJobs.slice(0, itemsToShow);
  const hasMoreJobs = displayedJobs.length < sortedJobs.length;
  
  const loadMore = () => {
    setItemsToShow(prevItemsToShow => prevItemsToShow + 50);
  };

  return (
    <div className="bg-white rounded-sm shadow-sm border border-gray-200">
      {sortedJobs.length === 0 ? (
        <div className="p-6 text-center text-gray-500">
          {searchQuery 
            ? `No jobs found matching "${searchQuery}"${categoryFilter !== "All" ? ` in ${categoryFilter}` : ''}`
            : categoryFilter !== "All" ? `No jobs found in ${categoryFilter}` : 'No jobs found'}
        </div>
      ) : (
        <>
          {displayedJobs.map((job, index) => (
            <motion.div 
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`group px-4 py-3 ${index !== displayedJobs.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <div className="flex items-start">
                <div className="pr-3 text-center hidden sm:block">
                  <span className="text-gray-500 text-sm">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <Link 
                      to={`/salaries/${job.slug}`}
                      className="text-[#333] hover:underline text-base sm:text-lg font-medium transition-colors group-hover:text-blog-accent capitalize"
                    >
                      {job.title}
                    </Link>
                    <ArrowUpRight 
                      className="h-3.5 w-3.5 text-blog-subtle opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  
                  <div className="flex items-center text-xs text-[#828282]">
                    <span>R{job.salary.toLocaleString()} per month</span>
                    <span className="mx-1">•</span>
                    <span className="font-medium text-[#555] capitalize">{job.experience} level</span>
                    <span className="mx-1">•</span>
                    <span className="px-1.5 py-0.5 bg-gray-100 rounded text-[#666] text-xs">
                      {job.education.split(" ")[0]}
                    </span>
                    <span className="mx-1">•</span>
                    <span className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-xs">
                      {job.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {hasMoreJobs && (
            <Pagination className="py-5">
              <PaginationContent>
                <PaginationItem className="w-full">
                  <Button 
                    variant="outline" 
                    onClick={loadMore} 
                    className="w-full"
                  >
                    Load More Jobs
                  </Button>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </>
      )}
    </div>
  );
};

export default JobList;
