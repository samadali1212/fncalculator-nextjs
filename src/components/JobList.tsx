
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
}

const JobList = ({ searchQuery }: JobListProps) => {
  const salaryData = getSalaryData();
  const [itemsToShow, setItemsToShow] = useState(50);
  
  // Convert object to array of job entries
  const jobEntries = Object.entries(salaryData).map(([key, value]) => ({
    id: key,
    title: key.replace(/_/g, " "),
    salary: value.average,
    experience: value.experience,
    education: value.education
  }));
  
  // Filter jobs based on search query
  const filteredJobs = searchQuery
    ? jobEntries.filter(job => 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.experience.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.education.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : jobEntries;

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
          No jobs found matching "{searchQuery}"
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
                      to={`/salaries/${job.id}`}
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
