
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import SEO from "../components/SEO";
import AdSense from "../components/AdSense";
import ShareButton from "../components/ShareButton";
import CountdownTimer from "../components/CountdownTimer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Briefcase, 
  ArrowUpRight, 
  Clock, 
  Building,
  ExternalLink,
  Mail,
  Phone,
  Info,
  ChevronDown,
  List,
  Banknote
} from "lucide-react";
import { 
  getJobById, 
  getRelatedJobs,
  getJobsFromSameCompany,
  getJobsInSameLocation,
  formatDate, 
  isJobExpiringSoon, 
  handleJobApplication, 
  getApplicationInstructions,
  parseSalaryRange,
  mapCategoryToEmploymentType
} from "../utils/jobUtils";
import { Job, JobCategory } from "../utils/jobData";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const formatJobDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

const JobDetail = () => {
  const { jobSlug = "" } = useParams<{ jobSlug: string }>();
  const navigate = useNavigate();
  const [job, setJob] = useState<Job | null>(null);
  const [relatedJobs, setRelatedJobs] = useState<Job[]>([]);
  const [sameCompanyJobs, setSameCompanyJobs] = useState<Job[]>([]);
  const [sameLocationJobs, setSameLocationJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleJobs, setVisibleJobs] = useState(5);
  
  useEffect(() => {
    setIsLoading(true);
    
    // Get job ID from the end of the slug - format could be title-id
    const jobId = jobSlug.split('-').pop() || "";
    
    console.log("Looking for job with ID:", jobId);
    
    // Simulate API call
    setTimeout(() => {
      // Try to find the job directly by ID
      let foundJob = getJobById(jobId);
      
      // If not found by direct ID, the ID might be part of a hyphenated slug
      // like "registered-nurse-job-003" where "job-003" is the ID
      if (!foundJob && jobSlug.includes('job-')) {
        const potentialId = "job-" + jobSlug.split('job-')[1];
        console.log("Trying alternative ID format:", potentialId);
        foundJob = getJobById(potentialId);
      }
      
      if (foundJob) {
        console.log("Found job:", foundJob.title);
        setJob(foundJob);
        // Get related jobs in the same category
        if (foundJob.category) {
          setRelatedJobs(getRelatedJobs(foundJob.id, foundJob.category, 15));
          setSameCompanyJobs(getJobsFromSameCompany(foundJob.id, foundJob.company, 15));
          setSameLocationJobs(getJobsInSameLocation(foundJob.id, foundJob.location, 15));
        }
      } else {
        console.error("Job not found with ID:", jobId);
      }
      
      setIsLoading(false);
    }, 500);
  }, [jobSlug]);
  
const handleApply = () => {
  if (job) {
    const applied = handleJobApplication(job.applicationMethod, job.title, job.company);
    
    if (applied) {
      // Show appropriate success message based on application type
      switch(job.applicationMethod.type) {
        case 'email':
          toast.success("Opening email client with pre-filled application");
          break;
        case 'phone':
          toast.success("Opening phone dialer");
          break;
        case 'url':
        case 'form':
          toast.success("Redirecting to application page");
          break;
        default:
          toast.success("Application initiated");
      }
    } else {
      // For application methods that can't be handled automatically
      const instructions = job.applicationMethod.instructions || getApplicationInstructions(job.applicationMethod);
      toast.info(instructions);
    }
  }
};

  const loadMoreJobs = () => {
    setVisibleJobs(prev => prev + 5);
  };

  // Render appropriate application button based on method type
  const renderApplicationButton = (job: Job) => {
    const { applicationMethod } = job;
    
    let icon;
    let text;
    
    switch(applicationMethod.type) {
      case 'url':
      case 'form':
        icon = <ExternalLink className="h-4 w-4" />;
        text = "Apply Now";
        break;
      case 'email':
        icon = <Mail className="h-4 w-4" />;
        text = "Apply via Email";
        break;
      case 'phone':
        icon = <Phone className="h-4 w-4" />;
        text = "Call to Apply";
        break;
      case 'other':
      default:
        icon = <Info className="h-4 w-4" />;
        text = "How to Apply";
        break;
    }
    
    return (
      <Button 
        className="flex-1 gap-2"
        onClick={handleApply}
      >
        {text} {icon}
      </Button>
    );
  };

  const getCategoryStyles = (category: string) => {
    switch(category.toLowerCase()) {
      case 'technology':
        return 'bg-blue-100 text-blue-800';
      case 'healthcare':
        return 'bg-green-100 text-green-800';
      case 'finance':
        return 'bg-purple-100 text-purple-800';
      case 'education':
        return 'bg-orange-100 text-orange-800';
      case 'sales':
        return 'bg-red-100 text-red-800';
      case 'marketing':
        return 'bg-pink-100 text-pink-800';
      case 'administration':
        return 'bg-indigo-100 text-indigo-800';
      case 'customer service':
        return 'bg-teal-100 text-teal-800';
      case 'engineering':
        return 'bg-slate-100 text-slate-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f6f6f0]">
        <Header />
        <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
          <div className="mb-6 flex flex-col sm:flex-row justify-between gap-4">
            <Skeleton className="h-10 w-32" />
          </div>
          
          <div className="bg-white rounded-sm shadow-sm border border-gray-200 mb-8">
            <Skeleton className="h-24 w-full" />
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
              </div>
              <Skeleton className="h-20 w-full mb-6" />
              <div className="flex justify-between items-center">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-8 w-24" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-sm shadow-sm border border-gray-200 mb-8">
            <div className="p-6">
              <Skeleton className="h-6 w-48 mb-4" />
              <div className="grid grid-cols-4 gap-2 md:gap-4">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="h-20 w-full" />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-[#f6f6f0]">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Job Not Found</h1>
            <p className="text-gray-600 mb-4">The job you're looking for doesn't exist.</p>
            <Button asChild>
              <a href="/jobs">Back to Jobs</a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Prepare salary data for schema markup
  const salaryData = parseSalaryRange(job.salaryRange);
  
  // Determine employment type for schema
  const employmentType = mapCategoryToEmploymentType(job.category);

  const categoryStyles = getCategoryStyles(job.category);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title={`${job.title} at ${job.company} | Job Details`}
        description={job.description}
        canonicalUrl={`/jobs/${jobSlug}`}
        jobPosting={{
          title: job.title,
          description: job.description + "\n\n" + job.requirements.join("\n") + "\n\n" + job.responsibilities.join("\n"),
          datePosted: job.postedDate,
          validThrough: job.deadline,
          employmentType: employmentType,
          hiringOrganization: {
            name: job.company,
            logo: "/SalaryList favicon.png" // Use site logo as company logo
          },
          jobLocation: {
            addressLocality: job.location,
            addressRegion: "South Africa", // Assuming South Africa as default
            addressCountry: "South Africa"
          },
          baseSalary: {
            currency: salaryData.currency,
            value: {
              minValue: salaryData.min,
              maxValue: salaryData.max,
              value: salaryData.value
            },
            unitText: salaryData.unitText
          },
          applicantLocationRequirements: "South Africa", // Assuming South Africa as default
          jobLocationType: "TELECOMMUTE" // Default to TELECOMMUTE
        }}
      />
      
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Link 
            to="/jobs"
            className="inline-flex"
          >
            <Button variant="ghost" className="pl-0 hover:pl-1 transition-all">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Jobs
            </Button>
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="bg-white rounded-sm shadow-sm border border-gray-200 mb-8">
            <div className="p-4 border-b border-gray-100 bg-gray-50">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
                  <p className="text-gray-600 mt-1">Job Details</p>
                </div>
                <div className="flex items-center gap-2">
                  {isJobExpiringSoon(job.deadline) && (
                    <Badge variant="outline" className="text-orange-500 border-orange-500">
                      Closing Soon
                    </Badge>
                  )}
                  <Badge variant="outline" className={`text-xs ${categoryStyles}`}>
                    {job.category}
                  </Badge>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-center text-sm">
                    <Building className="h-4 w-4 text-gray-500 mr-3" />
                    <span className="text-gray-700 font-medium">{job.company}</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 text-gray-500 mr-3" />
                    <span className="text-gray-700">{job.location}</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 text-gray-500 mr-3" />
                    <span className="text-gray-700">Posted: {formatJobDate(job.postedDate)}</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-gray-500 mr-3" />
                    <span className="text-gray-700">Deadline: {formatJobDate(job.deadline)}</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Banknote className="h-4 w-4 text-gray-500 mr-3" />
                    <span className="font-medium text-gray-700">{job.salaryRange}</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Job Description</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">{job.description}</p>
                
                <h3 className="text-sm font-medium text-gray-900 mb-2">Requirements</h3>
                <ul className="list-disc pl-5 mb-4">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="text-sm text-gray-700 mb-1">{requirement}</li>
                  ))}
                </ul>
                
                <h3 className="text-sm font-medium text-gray-900 mb-2">Responsibilities</h3>
                <ul className="list-disc pl-5 mb-4">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="text-sm text-gray-700 mb-1">{responsibility}</li>
                  ))}
                </ul>
                
                <h3 className="text-sm font-medium text-gray-900 mb-2">How to Apply</h3>
                <p className="text-sm text-gray-700">
                  {job.applicationMethod.instructions || getApplicationInstructions(job.applicationMethod)}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {renderApplicationButton(job)}
                
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => navigate('/jobs')}
                >
                  Browse More Jobs
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <CountdownTimer targetDate={job.deadline} />
        </motion.div>
        
        <div className="mb-8">
          <AdSense slot="9889084223" format="auto" className="py-3" />
        </div>
        
        {/* Related Jobs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-white rounded-sm shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-100 bg-gray-50">
              <div className="flex items-center">
                <List className="h-5 w-5 text-blog-accent mr-2" />
                <h2 className="text-xl font-semibold text-blog-accent">Related Jobs</h2>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Discover other job opportunities that might interest you
              </p>
            </div>
            
            <Tabs defaultValue="category">
              <div className="px-6 pt-4">
                <TabsList className="w-full">
                  <TabsTrigger value="category" className="flex-1">Same Category</TabsTrigger>
                  <TabsTrigger value="company" className="flex-1">Same Company</TabsTrigger>
                  <TabsTrigger value="location" className="flex-1">Same Location</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="category">
                {relatedJobs.length > 0 ? (
                  <div className="divide-y divide-gray-100">
                    {relatedJobs.slice(0, visibleJobs).map((relatedJob, index) => {
                      const relatedCategoryStyles = getCategoryStyles(relatedJob.category);
                      
                      return (
                        <motion.div 
                          key={relatedJob.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Link 
                            to={`/jobs/${relatedJob.id}`}
                            className="block p-4 hover:bg-gray-50 transition-colors group"
                          >
                            <div className="grid grid-cols-10 items-center">
                              <div className="col-span-1 text-sm text-gray-500">
                                {index + 1}
                              </div>
                              
                              <div className="col-span-6">
                                <h4 className="text-sm font-medium text-gray-900 group-hover:text-blog-accent transition-colors">
                                  {relatedJob.title}
                                </h4>
                                <div className="flex items-center mt-1 text-xs text-gray-500 gap-x-4">
                                  <span>{relatedJob.company}</span>
                                  <span>{relatedJob.location}</span>
                                  <span className="font-medium text-blog-accent">
                                    {relatedJob.salaryRange}
                                  </span>
                                </div>
                              </div>
                              
                              <div className="col-span-2">
                                <Badge variant="outline" className={`text-xs ${relatedCategoryStyles}`}>
                                  {relatedJob.category}
                                </Badge>
                              </div>
                              
                              <div className="col-span-1 text-right">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="hover:bg-gray-100 px-2 text-xs"
                                >
                                  View
                                </Button>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      );
                    })}
                    
                    {relatedJobs.length > visibleJobs && (
                      <div className="p-4 flex justify-center">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={loadMoreJobs}
                          className="flex items-center gap-2"
                        >
                          Show More <ChevronDown className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-6 text-center text-gray-500">
                    No similar jobs found in this category
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="company">
                {sameCompanyJobs.length > 0 ? (
                  <div className="divide-y divide-gray-100">
                    {sameCompanyJobs.slice(0, visibleJobs).map((companyJob, index) => {
                      const companyCategoryStyles = getCategoryStyles(companyJob.category);
                      
                      return (
                        <motion.div 
                          key={companyJob.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Link 
                            to={`/jobs/${companyJob.id}`}
                            className="block p-4 hover:bg-gray-50 transition-colors group"
                          >
                            <div className="grid grid-cols-10 items-center">
                              <div className="col-span-1 text-sm text-gray-500">
                                {index + 1}
                              </div>
                              
                              <div className="col-span-6">
                                <h4 className="text-sm font-medium text-gray-900 group-hover:text-blog-accent transition-colors">
                                  {companyJob.title}
                                </h4>
                                <div className="flex items-center mt-1 text-xs text-gray-500 gap-x-4">
                                  <Badge variant="secondary" className="mr-2">{companyJob.category}</Badge>
                                  <span>{companyJob.location}</span>
                                  <span className="font-medium text-blog-accent">
                                    {companyJob.salaryRange}
                                  </span>
                                </div>
                              </div>
                              
                              <div className="col-span-2">
                                <Badge variant="outline" className={`text-xs ${companyCategoryStyles}`}>
                                  {companyJob.category}
                                </Badge>
                              </div>
                              
                              <div className="col-span-1 text-right">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="hover:bg-gray-100 px-2 text-xs"
                                >
                                  View
                                </Button>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      );
                    })}
                    
                    {sameCompanyJobs.length > visibleJobs && (
                      <div className="p-4 flex justify-center">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={loadMoreJobs}
                          className="flex items-center gap-2"
                        >
                          Show More <ChevronDown className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-6 text-center text-gray-500">
                    No other jobs found at this company
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="location">
                {sameLocationJobs.length > 0 ? (
                  <div className="divide-y divide-gray-100">
                    {sameLocationJobs.slice(0, visibleJobs).map((locationJob, index) => {
                      const locationCategoryStyles = getCategoryStyles(locationJob.category);
                      
                      return (
                        <motion.div 
                          key={locationJob.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Link 
                            to={`/jobs/${locationJob.id}`}
                            className="block p-4 hover:bg-gray-50 transition-colors group"
                          >
                            <div className="grid grid-cols-10 items-center">
                              <div className="col-span-1 text-sm text-gray-500">
                                {index + 1}
                              </div>
                              
                              <div className="col-span-6">
                                <h4 className="text-sm font-medium text-gray-900 group-hover:text-blog-accent transition-colors">
                                  {locationJob.title}
                                </h4>
                                <div className="flex items-center mt-1 text-xs text-gray-500 gap-x-4">
                                  <span>{locationJob.company}</span>
                                  <Badge variant="secondary">{locationJob.category}</Badge>
                                  <span className="font-medium text-blog-accent">
                                    {locationJob.salaryRange}
                                  </span>
                                </div>
                              </div>
                              
                              <div className="col-span-2">
                                <Badge variant="outline" className={`text-xs ${locationCategoryStyles}`}>
                                  {locationJob.category}
                                </Badge>
                              </div>
                              
                              <div className="col-span-1 text-right">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="hover:bg-gray-100 px-2 text-xs"
                                >
                                  View
                                </Button>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      );
                    })}
                    
                    {sameLocationJobs.length > visibleJobs && (
                      <div className="p-4 flex justify-center">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={loadMoreJobs}
                          className="flex items-center gap-2"
                        >
                          Show More <ChevronDown className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-6 text-center text-gray-500">
                    No other jobs found in this location
                  </div>
                )}
              </TabsContent>
            </Tabs>
            
            <div className="p-6 border-t border-gray-100">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate('/jobs')}
              >
                Browse All Jobs
              </Button>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="border-t border-gray-300 py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} SalaryList. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default JobDetail;
