import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import SEO from "../components/SEO";
import AdSense from "../components/AdSense";
import ShareButton from "../components/ShareButton";
import CountdownTimer from "../components/CountdownTimer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { usePageReload } from "../hooks/usePageReload";
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
  Banknote,
  Copy,
  FileText
} from "lucide-react";
import {
  getJobById,
  getJobsInSameLocation,
  formatDate, // Original import
  isJobExpiringSoon,
  handleJobApplication,
  getApplicationInstructions,
  parseSalaryRange,
  mapCategoryToEmploymentType
} from "../utils/jobUtils";
import { Job, JobCategory, ApplicationMethod } from "../utils/jobData"; // Ensure ApplicationMethod is imported if needed
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";

// Local date formatting (used in JSX)
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
  const [sameLocationJobs, setSameLocationJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleJobs, setVisibleJobs] = useState(5);
  const { pageKey } = usePageReload(); // <--- add this line

  useEffect(() => {
    setIsLoading(true);
    const jobId = jobSlug.split('-').pop() || "";
    console.log("Looking for job with ID:", jobId);

    setTimeout(() => {
      let foundJob = getJobById(jobId);
      if (!foundJob && jobSlug.includes('job-')) {
        const potentialId = "job-" + jobSlug.split('job-')[1];
        console.log("Trying alternative ID format:", potentialId);
        foundJob = getJobById(potentialId);
      }

      if (foundJob) {
        console.log("Found job:", foundJob.title);
        setJob(foundJob);
        setSameLocationJobs(getJobsInSameLocation(foundJob.id, foundJob.location, 15));
      } else {
        console.error("Job not found with ID:", jobId);
      }

      setIsLoading(false);
    }, 500);
  }, [jobSlug]);

  // This function now primarily handles 'url', 'form', and 'other' types
  // It will be called via onClick for those buttons.
  const handleApply = () => {
    if (job) {
      const applied = handleJobApplication(job.applicationMethod, job.title, job.company);

      if (applied) {
        switch(job.applicationMethod.type) {
          // Email & Phone cases will likely not be hit, but are harmless here.
          case 'email':
            toast.success("Opening email client...");
            break;
          case 'phone':
            toast.success("Opening phone dialer...");
            break;
          case 'url':
          case 'form':
            toast.success("Redirecting to application page");
            break;
          default:
            toast.success("Application initiated");
        }
      } else {
        // This handles 'other' or cases where handleJobApplication returns false.
        const instructions = job.applicationMethod.instructions || getApplicationInstructions(job.applicationMethod);
        toast.info(instructions);
      }
    }
  };

  // Enhanced email handling function
  const handleEmailApplication = (email: string, jobTitle: string, company: string) => {
    const subject = encodeURIComponent(`Application for ${jobTitle} at ${company}`);
    const body = encodeURIComponent(`Dear Hiring Manager,

I am writing to express my interest in the ${jobTitle} position at ${company}.

Please find my resume attached. I look forward to hearing from you.

Best regards,`);
    
    const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;
    
    console.log('Attempting to open email client with URL:', mailtoUrl);
    
    // Try multiple methods to open email client
    try {
      // Method 1: Direct window.location
      window.location.href = mailtoUrl;
      toast.success("Opening email client...");
    } catch (error) {
      console.error('Failed to open email client:', error);
      
      // Method 2: Fallback - copy email to clipboard and show instructions
      navigator.clipboard.writeText(email).then(() => {
        toast.info(`Email copied to clipboard: ${email}. Please open your email client manually.`);
      }).catch(() => {
        toast.info(`Please send your application to: ${email}`);
      });
    }
  };

  // Copy to clipboard function
  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${type} copied to clipboard!`);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      toast.error(`Failed to copy ${type.toLowerCase()}. Please try again.`);
    }
  };

  const loadMoreJobs = () => {
    setVisibleJobs(prev => prev + 5);
  };

  // Render application section instead of buttons - Updated for cleaner design
  const renderApplicationSection = (job: Job) => {
    const { applicationMethod } = job;
    const { type, value, instructions } = applicationMethod;
    const defaultInstructions = getApplicationInstructions(applicationMethod);

    return (
      <div className="space-y-4">
        {type === 'email' && (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-50 p-4 rounded-md border gap-3">
            <div className="flex items-center min-w-0 flex-1">
              <Mail className="h-4 w-4 text-blue-600 mr-3 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">Send your application via email</p>
                <p className="text-sm text-gray-600 break-all">{value}</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => copyToClipboard(value, "Email address")}
              className="w-full sm:w-auto flex-shrink-0"
            >
              <Copy className="h-4 w-4 mr-1" />
              Copy Email
            </Button>
          </div>
        )}

        {type === 'phone' && (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-50 p-4 rounded-md border gap-3">
            <div className="flex items-center min-w-0 flex-1">
              <Phone className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">Call to apply</p>
                <p className="text-sm text-gray-600">{value}</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => copyToClipboard(value, "Phone number")}
              className="w-full sm:w-auto flex-shrink-0"
            >
              <Copy className="h-4 w-4 mr-1" />
              Copy Number
            </Button>
          </div>
        )}

        {(type === 'url' || type === 'form') && (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-50 p-4 rounded-md border gap-3">
            <div className="flex items-center min-w-0 flex-1">
              <ExternalLink className="h-4 w-4 text-purple-600 mr-3 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">Apply online</p>
                <p className="text-sm text-gray-600 break-all">{value}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(value, "Application URL")}
                className="w-full sm:w-auto"
              >
                <Copy className="h-4 w-4 mr-1" />
                Copy Link
              </Button>
              <Button
                size="sm"
                onClick={() => window.open(value, '_blank')}
                className="w-full sm:w-auto"
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                Apply Now
              </Button>
            </div>
          </div>
        )}

        {type === 'other' && (
          <div className="bg-gray-50 p-4 rounded-md border">
            <div className="flex items-start">
              <Info className="h-4 w-4 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 mb-2">Application Instructions</p>
                <p className="text-sm text-gray-600 leading-relaxed break-words">
                  {instructions || defaultInstructions}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Special Instructions - Only show if different from default */}
        {(instructions && instructions !== defaultInstructions) && (
          <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
            <div className="flex items-start">
              <FileText className="h-4 w-4 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-blue-900 mb-2">Additional Instructions</p>
                <p className="text-sm text-blue-800 leading-relaxed break-words">
                  {instructions}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const getCategoryStyles = (category: string) => {
    switch (category.toLowerCase()) {
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

  const salaryData = parseSalaryRange(job.salaryRange);
  const employmentType = mapCategoryToEmploymentType(job.category);
  const categoryStyles = getCategoryStyles(job.category);

  return (
    <motion.div
      key={pageKey} // <-- force remount on route change
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
            logo: "/SalaryList favicon.png"
          },
          jobLocation: {
            addressLocality: job.location,
            addressRegion: "South Africa",
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
          applicantLocationRequirements: "South Africa",
          jobLocationType: "TELECOMMUTE"
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
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{job.title}</h1>
                  <p className="text-gray-600 mt-1">Job Details</p>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
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

            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-center text-sm">
                    <Building className="h-4 w-4 text-gray-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{job.company}</span>
                  </div>

                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 text-gray-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{job.location}</span>
                  </div>

                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 text-gray-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Posted: {formatJobDate(job.postedDate)}</span>
                  </div>

                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-gray-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Deadline: {formatJobDate(job.deadline)}</span>
                  </div>

                  <div className="flex items-center text-sm">
                    <Banknote className="h-4 w-4 text-gray-500 mr-3 flex-shrink-0" />
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
                <ul className="list-disc pl-5 mb-6">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="text-sm text-gray-700 mb-1">{responsibility}</li>
                  ))}
                </ul>
              </div>

              {/* Replace the button section with application section */}
              {renderApplicationSection(job)}

              <div className="mt-6">
                <Button
                  variant="outline"
                  className="w-full"
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

        {/* Related Jobs Section - Only Same Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="bg-white shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 text-blog-accent mr-2" />
                Jobs in {job.location}
              </CardTitle>
              <p className="text-sm text-gray-500 mt-1">
                Other job opportunities in the same location
              </p>
            </CardHeader>
            <CardContent>
              {sameLocationJobs.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-4">
                  {sameLocationJobs.slice(0, visibleJobs).map((locationJob, index) => {
                    const locationCategoryStyles = getCategoryStyles(locationJob.category);
                    
                    return (
                      <motion.div
                        key={locationJob.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="p-4 rounded-md border border-gray-200 hover:shadow-sm transition-shadow"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-semibold mb-1 line-clamp-2">{locationJob.title}</h3>
                            <div className="text-xs text-gray-500 mb-2 flex items-center gap-2">
                              <span>{locationJob.company}</span>
                              <Badge variant="secondary" className="text-xs">{locationJob.category}</Badge>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-semibold text-green-600">{locationJob.salaryRange}</span>
                              <Link
                                to={`/jobs/${locationJob.id}`}
                                className="text-blog-accent hover:underline text-xs"
                              >
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-500">No other jobs found in {job.location}.</p>
                </div>
              )}
              
              {sameLocationJobs.length > visibleJobs && (
                <div className="mt-4 mb-2">
                  <Button 
                    variant="outline" 
                    onClick={loadMoreJobs}
                    className="w-full gap-2"
                  >
                    Load More Jobs in {job.location}
                  </Button>
                </div>
              )}
              
              <div className="mt-6">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/jobs">View All Jobs</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
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
