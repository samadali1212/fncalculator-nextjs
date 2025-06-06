
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Building2, Calendar, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "../components/Header";
import SEO from "../components/SEO";
import AdSense from "../components/AdSense";
import useIsMobile from "@/hooks/use-mobile";
import { filterJobs, formatDate, isNewJob, isJobExpiringSoon } from "../utils/tanzaniaJobUtils";
import { JobCategory } from "../utils/jobData";
import { usePageReload } from "../hooks/usePageReload";

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<JobCategory | "">("");
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();
  const { pageKey } = usePageReload();
  
  const [visibleCount, setVisibleCount] = useState(12);

  // Popular categories
  const popularCategories: JobCategory[] = ["Technology", "Healthcare", "Education", "Finance", "Engineering"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setVisibleCount(12);
  }, [searchQuery, selectedCategory]);

  const filteredJobs = filterJobs(searchQuery, selectedCategory || undefined);
  const visibleJobs = filteredJobs.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount(prev => prev + 12);
  };

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
        title="Tanzania Job Listings Directory"
        description="Find job opportunities across Tanzania. Search by category, location, or browse all available positions. Your next career move starts here."
        canonicalUrl="/jobs"
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Tanzania Job Listings Directory</h1>
            <p className="text-gray-600">
              Find job opportunities across Tanzania in one place. Easily search for positions by category, location, or company.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-8">
          <AdSense slot="9889084223" format="auto" className="py-4" />
        </div>

        <motion.div 
          className="mb-6 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search by job title, company or location..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Popular Categories Toggle */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === "" ? "default" : "outline"}
              onClick={() => setSelectedCategory("")}
              size="sm"
            >
              All Jobs
            </Button>
            {popularCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {visibleJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-200 h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    {/* Header with badges */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex gap-2">
                        {isNewJob(job.postedDate) && (
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            New
                          </Badge>
                        )}
                        {isJobExpiringSoon(job.deadline) && (
                          <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                            Urgent
                          </Badge>
                        )}
                        {job.featured && (
                          <Badge variant="default">
                            Featured
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Job Title */}
                    <Link 
                      to={`/jobs/${job.id}`}
                      className="text-lg font-semibold text-gray-900 hover:text-blog-accent transition-colors mb-2 line-clamp-2"
                    >
                      {job.title}
                    </Link>

                    {/* Company and Location */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600 text-sm">
                        <Building2 className="h-4 w-4 mr-2" />
                        {job.company}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="h-4 w-4 mr-2" />
                        {job.location}
                      </div>
                    </div>

                    {/* Category and Salary */}
                    <div className="mb-4">
                      <Badge variant="outline" className="mb-2">
                        {job.category}
                      </Badge>
                      <p className="text-sm font-medium text-gray-900">
                        {job.salaryRange}
                      </p>
                    </div>

                    {/* Description Preview */}
                    <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
                      {job.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-gray-500 text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(job.postedDate)}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="text-blog-accent hover:bg-blog-accent hover:text-white"
                      >
                        <Link to={`/jobs/${job.id}`} className="flex items-center gap-1">
                          View Details
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Jobs Found */}
        {visibleJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No jobs found matching your criteria</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("");
              }}
            >
              Clear filters
            </Button>
          </div>
        )}

        {/* Load More Button */}
        {filteredJobs.length > visibleCount && (
          <div className="flex justify-center">
            <Button 
              variant="outline" 
              onClick={loadMore}
              className="px-8"
            >
              Load More Jobs
            </Button>
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
