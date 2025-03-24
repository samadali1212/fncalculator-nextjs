import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import SEO from "../components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar, User, BriefcaseBusiness, ArrowRight, ArrowUpRight } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getSalaryData } from "../utils/salaryData";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";

type SalaryPeriod = "weekly" | "monthly" | "yearly" | "hourly";

// Job category mapping
const jobCategories: Record<string, string[]> = {
  "Technology": ["software_developer", "web_developer", "data_analyst"],
  "Finance": ["accountant", "financial_analyst", "bank_teller"],
  "Healthcare": ["registered_nurse", "pharmacist"],
  "Education": ["teacher"],
  "Engineering": ["civil_engineer", "mechanical_engineer"],
  "Management": ["marketing_manager", "project_manager", "hr_manager"],
  "Creative": ["graphic_designer"],
  "Sales": ["sales_representative"],
  "Legal": ["attorney"],
  "Service": ["chef", "admin_assistant"],
  "Trades": ["electrician"]
};

// Get job category by job ID
const getJobCategory = (jobId: string): string => {
  for (const [category, jobs] of Object.entries(jobCategories)) {
    if (jobs.includes(jobId)) {
      return category;
    }
  }
  return "Other";
};

// Get related jobs by category, now with a limit parameter defaulting to 20
const getRelatedJobs = (jobId: string, limit: number = 20): string[] => {
  const category = getJobCategory(jobId);
  
  // Get all jobs in the same category
  const categoryJobs = jobCategories[category] || [];
  
  // Filter out the current job and limit to specified number
  return categoryJobs
    .filter(id => id !== jobId)
    .slice(0, limit);
};

const JobDetail = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();
  const [displayPeriod, setDisplayPeriod] = useState<SalaryPeriod>("monthly");
  const [isLoading, setIsLoading] = useState(true);
  
  const salaryData = useMemo(() => getSalaryData(), []);
  const jobData = jobId ? salaryData[jobId] : null;
  const jobTitle = jobId ? jobId.replace(/_/g, " ") : "";
  
  // Get related jobs
  const relatedJobIds = jobId ? getRelatedJobs(jobId) : [];
  const relatedJobs = relatedJobIds.map(id => ({
    id,
    title: id.replace(/_/g, " "),
    salary: salaryData[id].average,
    experience: salaryData[id].experience,
    education: salaryData[id].education
  }));

  // SEO title and description with job specific information
  const jobCategory = jobId ? getJobCategory(jobId) : "";
  const seoTitle = `${jobTitle} Salary in South Africa (R${jobData?.average.toLocaleString()})`;
  const seoDescription = `${jobTitle} average salary in South Africa is R${jobData?.average.toLocaleString()} per month. Explore salary ranges, requirements, and career insights for ${jobTitle} positions.`;
  
  // Simulate loading from an API
  useEffect(() => {
    setIsLoading(true);
    // Simulate network delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [jobId]);
  
  const handlePeriodChange = (value: string) => {
    if (value) {
      setDisplayPeriod(value as SalaryPeriod);
      toast(`Displaying salary as ${value}`);
    }
  };
  
  const convertSalary = (value: number, from: SalaryPeriod, to: SalaryPeriod): number => {
    if (from === to) return value;
    
    let monthlyValue = value;
    if (from === "yearly") monthlyValue = value / 12;
    if (from === "hourly") monthlyValue = value * 160;
    if (from === "weekly") monthlyValue = value * 4;
    
    if (to === "monthly") return monthlyValue;
    if (to === "yearly") return monthlyValue * 12;
    if (to === "hourly") return monthlyValue / 160;
    if (to === "weekly") return monthlyValue / 4;
    
    return value;
  };
  
  const formatSalary = (value: number): string => {
    return new Intl.NumberFormat('en-ZA', { 
      style: 'currency', 
      currency: 'ZAR',
      maximumFractionDigits: displayPeriod === "hourly" ? 2 : 0
    }).format(value);
  };
  
  const displayValue = (value: number): string => {
    return formatSalary(convertSalary(value, "monthly", displayPeriod));
  };
  
  const generateSalaryDescription = () => {
    if (!jobData) return "";
    
    const avgSalary = displayValue(jobData.average);
    const expDesc = jobData.experience === "entry" 
      ? "This is an entry-level position" 
      : jobData.experience === "mid" 
        ? "This is a mid-level position requiring 3-5 years of experience"
        : "This is a senior position typically requiring 5+ years of experience";
    
    const periodText = displayPeriod === "monthly" 
      ? "per month" 
      : displayPeriod === "yearly" 
        ? "per year" 
        : displayPeriod === "weekly"
          ? "per week"
          : "per hour";
    
    const locationImpact = jobData.location_factor > 1 
      ? `Working in major cities like Johannesburg or Cape Town can increase this salary by up to ${Math.round((jobData.location_factor - 1) * 100)}%.`
      : "This salary is relatively consistent across South Africa.";
    
    const article = getArticle(jobTitle);
    
    return `${article} ${jobTitle} in South Africa earns an average of ${avgSalary} ${periodText}. ${expDesc}. ${locationImpact} The salary range typically falls between ${displayValue(jobData.min)} and ${displayValue(jobData.max)} ${periodText}, depending on skills, certifications, and employer.`;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f6f6f0]">
        <SEO 
          title={seoTitle} 
          description={seoDescription} 
          canonicalUrl={`/salaries/${jobId}`} 
        />
        <Header />
        <main className="pt-20 pb-16">
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

  if (!jobData) {
    return (
      <div className="min-h-screen bg-[#f6f6f0] flex items-center justify-center">
        <SEO 
          title="Job Not Found | MoneyWorth" 
          description="The job salary information you're looking for doesn't exist or is invalid." 
          canonicalUrl="/salaries" 
        />
        <Card>
          <CardContent className="p-6">
            <p>Job not found. Please try another job.</p>
            <Button onClick={() => navigate('/salaries')} className="mt-4">
              Back to Jobs List
            </Button>
          </CardContent>
        </Card>
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
        title={seoTitle}
        description={seoDescription}
        canonicalUrl={`/salaries/${jobId}`}
      />
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link 
            to="/salaries"
            className="inline-flex items-center text-sm text-[#000000] mb-6 hover:underline"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            All Salaries
          </Link>
          
          <article className="bg-white p-6 sm:p-8 rounded-md shadow-sm mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#333] mb-4 capitalize">
              {jobTitle} Salary in South Africa
            </h1>
            
            <div className="flex flex-wrap items-center gap-3 text-sm text-[#666] mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1 text-[#999]" />
                Last updated: {new Date().toLocaleDateString()}
              </div>
              
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1 text-[#999]" />
                Experience: <span className="capitalize ml-1">{jobData.experience}</span>
              </div>
              
              <span className="px-2 py-1 bg-gray-100 rounded text-[#666] text-xs">
                {getJobCategory(jobId || "")}
              </span>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <div className="flex justify-center mb-3">
                <ToggleGroup 
                  type="single" 
                  value={displayPeriod}
                  onValueChange={handlePeriodChange}
                  variant="outline"
                  className="bg-white"
                >
                  <ToggleGroupItem value="weekly" aria-label="Weekly">Weekly</ToggleGroupItem>
                  <ToggleGroupItem value="monthly" aria-label="Monthly">Monthly</ToggleGroupItem>
                  <ToggleGroupItem value="yearly" aria-label="Yearly">Yearly</ToggleGroupItem>
                  <ToggleGroupItem value="hourly" aria-label="Hourly">Hourly</ToggleGroupItem>
                </ToggleGroup>
              </div>
              
              <div className="grid md:grid-cols-3 gap-2">
                <div className="flex flex-col items-center bg-white p-4 rounded border border-gray-100">
                  <div className="text-gray-600 text-sm mb-1">Minimum</div>
                  <div className="text-xl font-bold">{displayValue(jobData.min)}</div>
                </div>
                <div className="flex flex-col items-center bg-white p-4 rounded border border-gray-100 shadow-sm">
                  <div className="text-gray-600 text-sm mb-1">Average</div>
                  <div className="text-2xl font-bold text-primary">{displayValue(jobData.average)}</div>
                </div>
                <div className="flex flex-col items-center bg-white p-4 rounded border border-gray-100">
                  <div className="text-gray-600 text-sm mb-1">Maximum</div>
                  <div className="text-xl font-bold">{displayValue(jobData.max)}</div>
                </div>
              </div>
            </div>
            
            <div className="prose prose-sm sm:prose max-w-none mb-8">
              <h2 className="text-xl font-semibold mb-3">Salary Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                {generateSalaryDescription()}
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-3">Detailed Breakdown</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Experience Level</TableHead>
                    <TableHead>Typical Salary ({displayPeriod})</TableHead>
                    <TableHead>Requirements</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Junior</TableCell>
                    <TableCell>{displayValue(Math.round(jobData.min * 1.1))}</TableCell>
                    <TableCell>0-2 years experience</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Mid-level</TableCell>
                    <TableCell>{displayValue(jobData.average)}</TableCell>
                    <TableCell>3-5 years experience</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Senior</TableCell>
                    <TableCell>{displayValue(Math.round(jobData.max * 0.9))}</TableCell>
                    <TableCell>5+ years experience</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div className="bg-[#fff9e6] p-5 rounded-md">
              <h3 className="font-medium mb-3">Additional Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Qualifications</h4>
                  <p className="text-sm text-gray-700">{jobData.education}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Location Factor</h4>
                  <p className="text-sm text-gray-700">
                    {jobData.location_factor > 1 
                      ? `Salaries in major cities like Johannesburg or Cape Town are approximately ${Math.round((jobData.location_factor - 1) * 100)}% higher than the national average.`
                      : "This salary is relatively consistent across South Africa."}
                  </p>
                </div>
              </div>
            </div>
          </article>
          
          {/* Related Salaries Section */}
          {relatedJobs.length > 0 && (
            <div className="bg-white rounded-md shadow-sm overflow-hidden mb-8">
              <div className="p-6 sm:p-8 border-b border-gray-100">
                <h2 className="text-2xl font-bold mb-2">Related Salaries</h2>
                <p className="text-sm text-gray-600">
                  Explore other {getJobCategory(jobId || "")} jobs with similar skill requirements
                </p>
              </div>
              
              <div className="divide-y divide-gray-100">
                {relatedJobs.map((job, index) => (
                  <motion.div 
                    key={job.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group py-3 px-6 sm:px-8"
                  >
                    <div className="flex items-center">
                      <div className="pr-3 text-center hidden sm:block">
                        <span className="text-gray-500 text-sm">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <Link 
                          to={`/salaries/${job.id}`}
                          className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-blog-accent capitalize"
                        >
                          {job.title}
                        </Link>
                        
                        <div className="flex items-center text-xs text-[#828282]">
                          <span>R{job.salary.toLocaleString()} per month</span>
                          <span className="mx-1">•</span>
                          <span className="font-medium text-[#555] capitalize">{job.experience} level</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#999] group-hover:text-[#ff6600] transition-colors opacity-0 group-hover:opacity-100" />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="p-6 sm:p-8 border-t border-gray-100">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate('/salaries')}
                >
                  View All Jobs
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-gray-300 py-6 bg-white">
        <div className="container mx-auto px-4 text-center text-[#828282] text-sm">
          <p>
            &copy; {new Date().getFullYear()} MoneyWorth. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default JobDetail;

const getArticle = (word: string): string => {
  return /^[aeiou]/i.test(word) ? "An" : "A";
};
