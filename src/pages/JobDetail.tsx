
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import SEO from "../components/SEO";
import AdSense from "../components/AdSense";
import ShareButton from "../components/ShareButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  MapPin, 
  Calendar, 
  Briefcase, 
  ArrowUpRight, 
  Clock, 
  Building,
  ExternalLink,
  Mail,
  Phone,
  Info
} from "lucide-react";
import { 
  getJobById, 
  getRelatedJobs, 
  formatDate, 
  isJobExpiringSoon, 
  handleJobApplication, 
  getApplicationInstructions 
} from "../utils/jobUtils";
import { Job, JobCategory } from "../utils/jobData";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";
import { slugify } from "../utils/utils";

const JobDetail = () => {
  const { jobSlug = "" } = useParams<{ jobSlug: string }>();
  const navigate = useNavigate();
  const [job, setJob] = useState<Job | null>(null);
  const [relatedJobs, setRelatedJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
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
          setRelatedJobs(getRelatedJobs(foundJob.id, foundJob.category, 3));
        }
      } else {
        console.error("Job not found with ID:", jobId);
      }
      
      setIsLoading(false);
    }, 500);
  }, [jobSlug]);
  
  const handleApply = () => {
    if (job) {
      const applied = handleJobApplication(job.applicationMethod);
      
      if (applied) {
        toast.success("Redirecting to application");
      } else {
        // For application methods that can't be handled automatically
        toast.info(job.applicationMethod.instructions || getApplicationInstructions(job.applicationMethod));
      }
    }
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f6f6f0]">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="h-8 mb-6"></div>
            <div className="bg-white p-6 sm:p-8 rounded-md shadow-sm mb-8">
              <Skeleton className="h-10 w-3/4 mb-4" />
              <div className="flex flex-wrap items-center gap-3 mb-6 pb-6 border-b border-gray-200">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-5 w-16" />
              </div>
              <Skeleton className="h-24 w-full mb-8" />
              <div className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-[#f6f6f0] flex items-center justify-center">
        <Header />
        <main className="pt-24 pb-16 px-4">
          <div className="container mx-auto max-w-xl">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h1 className="text-xl font-semibold mb-4">Job Not Found</h1>
                <p className="mb-6 text-gray-600">
                  We couldn't find the job you're looking for. It may have been removed or the URL might be incorrect.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button onClick={() => navigate('/jobs')} className="flex-1">
                    Browse All Jobs
                  </Button>
                  <Button variant="outline" onClick={() => window.history.back()} className="flex-1">
                    Go Back
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    );
  }

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
      />
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center justify-between mb-6">
            <Link 
              to="/jobs"
              className="inline-flex items-center text-sm text-[#000000] hover:underline"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              All Jobs
            </Link>
            
            <ShareButton 
              title={`${job.title} at ${job.company} - Job Details`} 
              variant="outline"
            />
          </div>
          
          <div className="mb-6">
            <AdSense slot="9889084223" format="auto" className="py-3" />
          </div>
          
          <article className="bg-white p-6 sm:p-8 rounded-md shadow-sm mb-8">
            <div className="flex justify-between items-start mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-[#333] mb-1">
                {job.title}
              </h1>
              
              {isJobExpiringSoon(job.deadline) && (
                <Badge variant="outline" className="text-orange-500 border-orange-500">
                  Closing Soon
                </Badge>
              )}
            </div>
            
            <div className="text-xl text-gray-700 mb-6 flex items-center">
              <Building className="h-5 w-5 mr-2 text-[#666]" />
              {job.company}
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#666] mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1 text-[#999]" />
                <span>{job.location}</span>
              </div>
              
              <div className="flex items-center">
                <Briefcase className="h-4 w-4 mr-1 text-[#999]" />
                <span>{job.category}</span>
              </div>
              
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1 text-[#999]" />
                <span>Posted: {formatDate(job.postedDate)}</span>
              </div>
              
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-[#999]" />
                <span>Deadline: {formatDate(job.deadline)}</span>
              </div>
            </div>
            
            <div className="mb-6 p-4 bg-[#f7f7f7] rounded-md">
              <h3 className="font-semibold mb-2">Salary Range</h3>
              <p className="text-lg font-medium text-primary">{job.salaryRange}</p>
            </div>
            
            <div className="prose prose-sm sm:prose max-w-none mb-8">
              <h2 className="text-xl font-semibold mb-2">Job Description</h2>
              <p className="text-gray-700 mb-6">
                {job.description}
              </p>
              
              <h2 className="text-xl font-semibold mb-2">Requirements</h2>
              <ul className="list-disc pl-5 mb-6">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="text-gray-700 mb-2">{requirement}</li>
                ))}
              </ul>
              
              <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
              <ul className="list-disc pl-5 mb-6">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="text-gray-700 mb-2">{responsibility}</li>
                ))}
              </ul>
              
              <h2 className="text-xl font-semibold mb-2">How to Apply</h2>
              <p className="text-gray-700 mb-6">
                {job.applicationMethod.instructions || getApplicationInstructions(job.applicationMethod)}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              {renderApplicationButton(job)}
              
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => navigate('/jobs')}
              >
                Browse More Jobs
              </Button>
            </div>
          </article>

          <div className="mb-8">
            <AdSense slot="9889084223" format="auto" className="py-3" />
          </div>
          
          {/* Related Jobs Section */}
          {relatedJobs.length > 0 && (
            <div className="bg-white rounded-md shadow-sm overflow-hidden mb-8">
              <div className="p-6 sm:p-8 border-b border-gray-100">
                <h2 className="text-xl font-bold mb-2">Similar Jobs</h2>
                <p className="text-sm text-gray-600">
                  Explore other opportunities in {job.category}
                </p>
              </div>
              
              <div className="divide-y divide-gray-100">
                {relatedJobs.map((relatedJob, index) => (
                  <motion.div 
                    key={relatedJob.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group p-6"
                  >
                    <Link 
                      to={`/jobs/${relatedJob.id}`}
                      className="block"
                    >
                      <h3 className="text-[#333] hover:underline text-lg font-medium transition-colors group-hover:text-blog-accent">
                        {relatedJob.title}
                      </h3>
                      
                      <div className="flex items-center text-sm text-[#828282] mb-1">
                        <span>{relatedJob.company}</span>
                        <span className="mx-2">•</span>
                        <span>{relatedJob.location}</span>
                      </div>
                      
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-primary-500 font-medium">
                          {relatedJob.salaryRange}
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-[#999] group-hover:text-blog-accent transition-colors opacity-0 group-hover:opacity-100" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-gray-300 py-6 bg-white">
        <div className="container mx-auto px-4 text-center text-[#828282] text-sm">
          <p>
            &copy; {new Date().getFullYear()} SalaryList. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default JobDetail;
