import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Search, MapPin, Briefcase, Filter, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Header from "../components/Header";
import SEO from "../components/SEO";
import AdSense from "../components/AdSense";
import { 
  filterJobs, 
  formatDate, 
  isNewJob, 
  isJobExpiringSoon,
  getUniqueCategories
} from "../utils/tanzaniaJobUtils";
import { Job, JobLocation } from "../utils/jobData";

const JobsByCity = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Convert slug back to city name with proper handling for "Dar es Salaam"
  const city = citySlug ? (() => {
    if (citySlug === "dar-es-salaam") {
      return "Dar es Salaam";
    }
    return citySlug.split("-").map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(" ");
  })() as JobLocation : "" as JobLocation;
  
  const categories = getUniqueCategories();
  const allJobs = filterJobs("", undefined, city);
  
  console.log("City slug:", citySlug);
  console.log("Converted city:", city);
  console.log("All jobs for city:", allJobs);
  
  // Apply filters when search inputs change
  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      const results = searchQuery === '' ? allJobs : allJobs.filter(job => 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      setFilteredJobs(results);
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [searchQuery, city]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title={`Jobs in ${city}, Tanzania | Latest Vacancies`}
        description={`Browse ${allJobs.length} job opportunities in ${city}, Tanzania. Find and apply for the latest vacancies in ${city} across various industries.`}
        canonicalUrl={`/jobs/city/${citySlug}`}
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="mb-4">
          <Link to="/jobs" className="text-blog-accent hover:underline text-sm">
            ← Back to All Jobs
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-2">Jobs in {city}, Tanzania</h1>
        <p className="text-gray-600 mb-6">
          Browse {allJobs.length} job opportunities in {city}. Find and apply for the latest vacancies in this location.
        </p>
        
        {/* Categories with jobs in this city */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Job Categories in {city}</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => {
              const jobCount = allJobs.filter(job => job.category === category).length;
              if (jobCount === 0) return null;
              
              return (
                <Link 
                  key={category} 
                  to={`/jobs/category/${category.toLowerCase().replace(/\s+/g, "-")}`} 
                  className="px-3 py-1.5 bg-white rounded-md border border-gray-200 text-sm hover:border-blog-accent hover:text-blog-accent transition-colors"
                >
                  {category} ({jobCount})
                </Link>
              );
            })}
          </div>
        </div>
        
        <div className="my-6">
          <AdSense slot="9889084223" format="horizontal" className="py-3" />
        </div>
        
        {/* Search Section */}
        <div className="mb-8">
          <Card className="overflow-visible bg-transparent shadow-none border-none">
            <CardContent className="p-0 space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder={`Search jobs in ${city} by title, company, or category...`}
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex justify-end">
                <Button 
                  variant="outline" 
                  onClick={() => setSearchQuery("")}
                  className="text-sm"
                  disabled={!searchQuery}
                >
                  <Filter className="h-4 w-4 mr-1" /> Reset Search
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Job Listings */}
        <div className="space-y-4">
          {isLoading ? (
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
                <Card className="group hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="text-xl font-semibold group-hover:text-blog-accent">
                        <Link to={`/jobs/${job.id}`} className="hover:underline">
                          {job.title}
                        </Link>
                      </h2>
                      <div className="flex gap-1">
                        {isNewJob(job.postedDate) && (
                          <Badge className="bg-green-500">New</Badge>
                        )}
                        {isJobExpiringSoon(job.deadline) && (
                          <Badge variant="outline" className="text-orange-500 border-orange-500">
                            Closing Soon
                          </Badge>
                        )}
                        {job.featured && (
                          <Badge className="bg-blue-500">Featured</Badge>
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
                    
                    <div className="flex items-center justify-between">
                      <div className="text-primary-500 font-medium">
                        {job.salaryRange}
                      </div>
                      <Link 
                        to={`/jobs/${job.id}`}
                        className="inline-flex items-center text-blog-accent text-sm font-medium hover:underline"
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
                  We couldn't find any jobs in {city} matching your search criteria.
                </p>
                <Button onClick={() => setSearchQuery("")} disabled={!searchQuery}>Clear Search</Button>
              </CardContent>
            </Card>
          )}
        </div>
        
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

export default JobsByCity;
