
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ArrowUpRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import SEO from "../components/SEO";
import AdSense from "../components/AdSense";
import useIsMobile from "@/hooks/use-mobile";
import { filterJobs, formatDate, isNewJob, isJobExpiringSoon, getProvinces, getCities } from "../utils/jobUtils";
import { getUniqueCategories, JobCategory, JobLocation } from "../utils/jobData";
import { usePageReload } from "../hooks/usePageReload";

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [displayType, setDisplayType] = useState<"categories" | "provinces" | "cities" | "jobs">("categories");
  const isMobile = useIsMobile();
  const { pageKey } = usePageReload();
  
  // Change initial visible count to 150 jobs
  const [visibleCount, setVisibleCount] = useState(150);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Reset visible count when search or displayType changes
  useEffect(() => {
    setVisibleCount(150);
  }, [searchQuery, displayType]);

  const categories = getUniqueCategories();
  const provinces = getProvinces();
  const cities = getCities();
  const allJobs = filterJobs();

  const filteredJobs = searchQuery
    ? allJobs.filter(job => 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.category.toLowerCase().includes(searchQuery.toLowerCase()))
    : allJobs;
    
  const visibleJobs = filteredJobs.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount(prev => prev + 150);
  };

  const getDisplayData = () => {
    switch (displayType) {
      case "categories":
        return categories.map(category => ({
          name: category,
          count: filterJobs("", category as JobCategory).length,
          slug: category.toLowerCase().replace(/\s+/g, '-'),
          url: `/jobs/category/${category.toLowerCase().replace(/\s+/g, '-')}`
        }));
      case "provinces":
        return provinces.map(province => ({
          name: province,
          count: filterJobs("", undefined, province as JobLocation).length,
          slug: province.toLowerCase().replace(/\s+/g, '-'),
          url: `/jobs/province/${province.toLowerCase().replace(/\s+/g, '-')}`
        }));
      case "cities":
        return cities.map(city => ({
          name: city,
          count: filterJobs("", undefined, city as JobLocation).length,
          slug: city.toLowerCase().replace(/\s+/g, '-'),
          url: `/jobs/city/${city.toLowerCase().replace(/\s+/g, '-')}`
        }));
      default:
        return [];
    }
  };

  const displayData = getDisplayData();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f6f6f0] pt-20">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center h-64">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-16 h-16 border-4 border-blog-accent border-t-transparent rounded-full animate-spin"
            ></motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      key={pageKey}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO
        title="South African Job Listings Directory"
        description="Find job opportunities across South Africa. Search by category, location, or browse all available positions. Your next career move starts here."
        canonicalUrl="/jobs"
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">South African Job Listings Directory</h1>
            <p className="text-gray-600">
              Find job opportunities across South Africa in one place. Easily search for positions by category, location, or company. Simple, comprehensive, and always up to date.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-8">
          <AdSense slot="9889084223" format="auto" className="py-4" />
        </div>

        <motion.div 
          className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative md:col-span-2">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder={displayType === "jobs" ? "Search by job title, company or location..." : "Search..."}
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2">
            <Button
              variant={displayType === "categories" ? "default" : "outline"}
              onClick={() => setDisplayType("categories")}
              size="sm"
              className="flex-1 text-xs"
            >
              Categories
            </Button>
            <Button
              variant={displayType === "provinces" ? "default" : "outline"}
              onClick={() => setDisplayType("provinces")}
              size="sm"
              className="flex-1 text-xs"
            >
              Provinces
            </Button>
            <Button
              variant={displayType === "cities" ? "default" : "outline"}
              onClick={() => setDisplayType("cities")}
              size="sm"
              className="flex-1 text-xs"
            >
              Cities
            </Button>
            <Button
              variant={displayType === "jobs" ? "default" : "outline"}
              onClick={() => setDisplayType("jobs")}
              size="sm"
              className="flex-1 text-xs"
            >
              All Jobs
            </Button>
          </div>
        </motion.div>

        {displayType === "jobs" ? (
          <div className="bg-white rounded-sm shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-100 bg-gray-50">
              <div className="grid grid-cols-10 text-xs font-medium text-gray-600">
                <div className="col-span-1">#</div>
                <div className="col-span-5 md:col-span-5">Job Title</div>
                <div className="col-span-3 md:col-span-3">Company</div>
                <div className="col-span-1 md:col-span-1 text-right">Details</div>
              </div>
            </div>
            
            {visibleJobs.map((job, index) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group px-4 py-3 ${index !== visibleJobs.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <div className="grid grid-cols-10 items-center">
                  <div className="col-span-1 text-sm text-gray-500">
                    {index + 1}
                  </div>
                  
                  <div className="col-span-5 md:col-span-5">
                    <div className="flex flex-col">
                      <Link 
                        to={`/jobs/${job.id}`}
                        className="text-[#333] hover:underline text-sm font-medium transition-colors group-hover:text-blog-accent flex items-center"
                      >
                        {job.title}
                        <ArrowUpRight 
                          className="h-3 w-3 ml-1 text-blog-subtle opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </Link>
                      <div className="text-xs text-gray-500">{job.location} • {job.category}</div>
                    </div>
                  </div>
                  
                  <div className="col-span-3 md:col-span-3">
                    <span className="px-1.5 py-0.5 bg-gray-100 rounded text-[#666] text-xs">
                      {job.company}
                    </span>
                  </div>
                  
                  <div className="col-span-1 md:col-span-1 text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="hover:bg-gray-100 px-2"
                    >
                      <Link to={`/jobs/${job.id}`}>
                        View
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {visibleJobs.length === 0 && (
              <div className="text-center py-10">
                <p className="text-gray-500 mb-2">No jobs found</p>
                <Button
                  variant="link"
                  onClick={() => {
                    setSearchQuery("");
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
            
            {/* Load More Button - only show if there are more jobs to load */}
            {filteredJobs.length > visibleCount && (
              <div className="flex justify-center p-4 border-t border-gray-100">
                <Button 
                  variant="outline" 
                  onClick={loadMore}
                  className="gap-2"
                >
                  Load More <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-sm shadow-sm border border-gray-200 mb-6">
            <div className="overflow-x-auto">
              <div className="p-4 border-b border-gray-100 bg-gray-50">
                <div className="grid grid-cols-12 text-xs font-medium text-gray-600">
                  <div className="col-span-1">#</div>
                  <div className="col-span-7 md:col-span-8">
                    {displayType === "categories" ? "Category/Industry" : 
                     displayType === "provinces" ? "Province" : "City"}
                  </div>
                  <div className="col-span-4 md:col-span-3 text-right">Jobs Available</div>
                </div>
              </div>
              
              {displayData.map((item, index) => (
                <motion.div 
                  key={item.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`group px-4 py-3 ${index !== displayData.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <div className="grid grid-cols-12 items-center">
                    <div className="col-span-1 text-sm text-gray-500">
                      {index + 1}
                    </div>
                    
                    <div className="col-span-7 md:col-span-8">
                      <div className="flex items-center">
                        <div>
                          <Link 
                            to={item.url}
                            className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-blog-accent flex items-center"
                          >
                            {item.name}
                            <ArrowUpRight 
                              className="h-3.5 w-3.5 ml-1 text-blog-subtle opacity-0 group-hover:opacity-100 transition-opacity"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-span-4 md:col-span-3 text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="hover:bg-gray-100"
                      >
                        <Link to={item.url}>
                          {item.count} {item.count === 1 ? 'job' : 'jobs'}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
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
