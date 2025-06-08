
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Briefcase, Filter, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Header from "../components/Header";
import SEO from "../components/SEO";
import AdSense from "../components/AdSense";
import { filterJobs, formatDate, isNewJob, isJobExpiringSoon } from "../utils/jobUtils";
import { getUniqueCategories, getUniqueLocations, JobCategory, JobLocation } from "../utils/jobData";

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<JobCategory | undefined>(undefined);
  const [selectedLocation, setSelectedLocation] = useState<JobLocation | undefined>(undefined);
  const [filteredJobs, setFilteredJobs] = useState(filterJobs());
  const [isLoading, setIsLoading] = useState(true);
  
  console.log("Jobs component mounted");
  console.log("Initial filtered jobs:", filteredJobs);
  
  const categories = getUniqueCategories();
  const locations = getUniqueLocations();
  
  console.log("Available categories:", categories);
  console.log("Available locations:", locations);
  
  // Apply filters when search inputs change
  useEffect(() => {
    console.log("Applying filters - searchQuery:", searchQuery, "category:", selectedCategory, "location:", selectedLocation);
    setIsLoading(true);
    
    // Simulate loading for better UX
    const timer = setTimeout(() => {
      const jobs = filterJobs(searchQuery, selectedCategory, selectedLocation);
      console.log("Filtered jobs result:", jobs);
      
      // Sort jobs with featured jobs first, then by posted date (newest first)
      const sortedJobs = jobs.sort((a, b) => {
        // Featured jobs always come first
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        
        // If both are featured or both are not featured, sort by posted date
        return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
      });
      
      console.log("Final sorted jobs:", sortedJobs);
      setFilteredJobs(sortedJobs);
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [searchQuery, selectedCategory, selectedLocation]);
  
  // Reset all filters
  const handleReset = () => {
    setSearchQuery("");
    setSelectedCategory(undefined);
    setSelectedLocation(undefined);
  };

  // Handle category change
  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value === "all" ? undefined : value as JobCategory);
  };

  // Handle location change
  const handleLocationChange = (value: string) => {
    setSelectedLocation(value === "all" ? undefined : value as JobLocation);
  };

  console.log("Rendering Jobs component with", filteredJobs.length, "jobs");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title="Job Listings | Find Your Next Career Opportunity" 
        description="Browse job opportunities across Tanzania. Find positions in technology, finance, healthcare, and more industries."
        canonicalUrl="/jobs"
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-2">Job Listings</h1>
        <p className="text-gray-600 mb-6">
          Find your next career opportunity from our curated list of positions across Tanzania.
        </p>
        
        {/* Top ad placement */}
        <div className="my-6">
          <AdSense slot="9889084223" format="horizontal" className="py-3" />
        </div>
        
        {/* Search and Filter Section */}
        <div className="mb-8">
          <Card className="overflow-visible bg-transparent shadow-none border-none">
            <CardContent className="p-0 space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search jobs by title, company, or keywords..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <div className="flex-1">
                  <Select 
                    value={selectedCategory || "all"}
                    onValueChange={handleCategoryChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex-1">
                  <Select 
                    value={selectedLocation || "all"}
                    onValueChange={handleLocationChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All Locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      {locations.map((location) => (
                        <SelectItem key={location} value={location}>{location}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  variant="outline" 
                  onClick={handleReset}
                  className="text-sm shrink-0"
                  disabled={!searchQuery && !selectedCategory && !selectedLocation}
                >
                  <Filter className="h-4 w-4 mr-1" /> Reset Filters
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Job Listings */}
        <div className="space-y-4">
          {isLoading ? (
            // Loading state
            Array.from({ length: 5 }).map((_, index) => (
              <Card key={index} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div className="h-20 bg-gray-200 rounded mb-4"></div>
                  <div className="flex justify-between items-center">
                    <div className="h-8 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-8 bg-gray-200 rounded w-1/6"></div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className={`group hover:shadow-md transition-shadow ${job.featured ? 'ring-2 ring-blue-200 bg-blue-50/30' : ''}`}>
                  <CardContent className="p-6">
                    {/* Mobile-first responsive header */}
                    <div className="flex flex-col space-y-3 sm:space-y-0 mb-4">
                      {/* Job title */}
                      <h2 className="text-xl font-semibold group-hover:text-blog-accent">
                        <Link to={`/jobs/${job.id}`} className="hover:underline">
                          {job.title}
                        </Link>
                      </h2>
                      
                      {/* Badges - stack on mobile, inline on larger screens */}
                      <div className="flex flex-wrap gap-2">
                        {job.featured && (
                          <Badge className="bg-blue-500 text-xs">Featured</Badge>
                        )}
                        {isNewJob(job.postedDate) && (
                          <Badge className="bg-green-500 text-xs">New</Badge>
                        )}
                        {isJobExpiringSoon(job.deadline) && (
                          <Badge variant="outline" className="text-orange-500 border-orange-500 text-xs">
                            Closing Soon
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="text-gray-600 mb-2">
                      {job.company}
                    </div>
                    
                    <div className="flex flex-wrap gap-3 mb-4 text-sm">
                      <span className="flex items-center text-gray-500">
                        <MapPin className="h-3.5 w-3.5 mr-1" /> {job.location}
                      </span>
                      <span className="flex items-center text-gray-500">
                        <Briefcase className="h-3.5 w-3.5 mr-1" /> {job.category}
                      </span>
                      <span className="text-gray-500">
                        Posted: {formatDate(job.postedDate)}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 mb-6 line-clamp-2 text-sm">
                      {job.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="text-primary-500 font-medium">
                        {job.salaryRange}
                      </div>
                      <Link 
                        to={`/jobs/${job.id}`}
                        className="inline-flex items-center text-blog-accent text-sm font-medium hover:underline self-start"
                      >
                        View Details <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <Card className="text-center p-8">
              <CardContent>
                <h3 className="text-xl font-medium mb-2">No jobs found</h3>
                <p className="text-gray-600 mb-4">
                  We couldn't find any jobs matching your search criteria.
                </p>
                <Button onClick={handleReset}>Clear Filters</Button>
              </CardContent>
            </Card>
          )}
        </div>
        
        {/* Bottom ad placement */}
        <div className="mt-8 mb-4">
          <AdSense slot="9889084223" format="horizontal" className="py-3" />
        </div>
      </main>

      <footer className="border-t border-gray-300 py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center text-[#828282] text-sm">
          <p>
            &copy; {new Date().getFullYear()} SalaryList. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Jobs;
