import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import SEO from "../components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar, User, BriefcaseBusiness, ArrowRight, ArrowUpRight, Briefcase, GraduationCap } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getSalaryData } from "../utils/salaryData";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";

type SalaryPeriod = "weekly" | "monthly" | "yearly" | "hourly";

// Job category mapping
const jobCategories: Record<string, string[]> = {
  "Technology": [
    "software_developer", "web_developer", "data_analyst", 
    "net_software_developer", "net_web_developer", "android_developer",
    "application_developer", "application_engineer", "automation_engineer",
    "back_end", "business_intelligence", "business_intelligence_analyst",
    "data_architect", "data_scientist", "database_administrator", "dba",
    "developer", "devops_engineer", "front_end", "front_end_developer",
    "front_end_web_developer", "full_stack_developer", "game_developer",
    "information_developer", "ios_developer", "it_analyst", "it_auditor",
    "it_consultant", "it_manager", "it_project_manager", "it_specialist",
    "it_technician", "java_developer", "network_engineer", "oracle_developer",
    "php_developer", "php_web_developer", "programmer", "programmer_analyst",
    "programmer/developer", "scrum_master", "senior_software_engineer",
    "software_engineer", "software_tester", "solutions_architect", "sql_developer",
    "systems_administrator", "systems_analyst", "systems_developer",
    "systems_engineer", "test_analyst", "test_engineer", "tester",
    "ui_developer", "ux_and_ui", "ux_designer", "web_designer", "web_engineer",
    "web_graphic_designer"
  ],
  "Finance": [
    "accountant", "financial_analyst", "bank_teller", "account_administrator",
    "account_clerk", "account_executive", "account_manager", "account_representative",
    "accounting_manager", "accounts_manager", "accounts_payable", "accounts_receivable",
    "actuarial", "actuarial_analyst", "actuarial_consultant", "actuarial_manager",
    "actuary", "audit_manager", "auditor", "bank_analyst", "bookkeeper",
    "bookkeeper/clerk", "broker", "chief_financial_officer", "commercial_underwriter",
    "controller", "cost_accountant", "credit_analyst", "credit_manager",
    "credit_risk_analyst", "finance_analyst", "finance_assistant", "finance_manager",
    "financial_accountant", "financial_administrator", "financial_advisor",
    "financial_consultant", "financial_controller", "financial_planner",
    "financial_services", "internal_audit_manager", "internal_auditor",
    "investment_advisor", "investment_analyst", "investment_manager",
    "payroll", "payroll_administrator", "payroll_clerk", "payroll_manager",
    "portfolio_manager", "pricing_actuary", "pricing_analyst", "quantitative_analyst",
    "relationship_manager", "risk_analyst", "risk_manager", "tax_compliance_officer",
    "tax_manager", "tax_specialist", "underwriter"
  ],
  "Healthcare": [
    "registered_nurse", "pharmacist", "care_manager", "caregiver", "case_manager",
    "clinical_coordinator", "clinical_nurse", "clinical_pharmacist",
    "clinical_specialist", "critical_care_nurse", "dentist", "dietitian",
    "doctor", "health_manager", "health_officer", "health_safety_manager",
    "health/safety", "hospital_manager", "hospital_pharmacist", "icu_nurse",
    "medical_consultant", "medical_doctor", "medical_manager", "medical_officer",
    "medical_technologist", "midwife", "nurse", "nurse_educator", "nurse_manager",
    "nurse_midwife", "nursing_assistant", "occupational_therapist", "oncology_nurse",
    "optometrist", "paramedic", "pharmacist_assistant", "pharmacy_manager",
    "physiotherapist", "psychologist", "radiographer", "registered_nurse_midwife",
    "scrub_nurse", "surgical_nurse", "surgeon", "therapist", "veterinarian"
  ],
  "Education": [
    "teacher", "assistant_professor", "associate_professor", "coach", "educator",
    "english_teacher", "english_tutor", "instructor", "lecturer", "professor",
    "school_principal", "trainer", "training_consultant", "training_coordinator",
    "training_facilitator", "training_manager", "training_officer",
    "training_specialist", "tutor"
  ],
  "Engineering": [
    "civil_engineer", "mechanical_engineer", "assistant_engineer", "automotive_engineer",
    "bridge_engineer", "building_engineer", "chemical_engineer", "chief_engineer",
    "design_engineer", "electrical_engineer", "electrical_foreman", "electronic_technician",
    "engineer", "engineer_assistant", "processing_engineer", "engineering_manager",
    "engineering_supervisor", "engineering_technician", "environmental_engineer",
    "field_engineer", "fire_engineer", "hvac_engineer", "industrial_engineer",
    "maintenance_engineer", "marine_engineer", "mechanical_technician", "mining_engineer",
    "plant_engineer", "principal_engineer", "process_engineer", "process_technician",
    "product_engineer", "project_engineer", "quality_engineer", "resident_engineer",
    "road_engineer", "senior_engineer", "service_engineer", "structural_engineer",
    "systems_engineer", "technical_engineer", "test_engineer", "traffic_engineer",
    "transport_engineer", "transportation_engineer", "water_engineer"
  ],
  "Management": [
    "marketing_manager", "project_manager", "hr_manager", "account_manager",
    "accounts_manager", "actuarial_manager", "assistant_manager", "assurance_manager",
    "bakery_manager", "branch_manager", "brand_manager", "business_development_manager",
    "business_manager", "category_manager", "commercial_manager", "communications_manager",
    "community_manager", "compliance_manager", "construction_manager", "contract_manager",
    "contracts_manager", "corporate_manager", "credit_manager", "customer_service_manager",
    "delivery_manager", "department_manager", "deputy_director", "development_manager",
    "director", "distribution_manager", "engineering_manager", "executive_chef",
    "facilities_manager", "field_service_manager", "finance_manager", "fleet_manager",
    "food_manager", "general_manager", "group_manager", "health_manager",
    "hospital_manager", "hotel_general_manager", "house_manager", "hr_manager",
    "human_resources_manager", "inventory_manager", "it_manager", "key_account_manager",
    "kitchen_manager", "lab_manager", "logistics_manager", "maintenance_manager",
    "management", "manager", "manufacturing_manager", "market_manager", "marketing_manager",
    "media_manager", "medical_manager", "mine_manager", "mining_manager", "nurse_manager",
    "office_manager", "operations_manager", "plant_manager", "portfolio_manager",
    "principal", "process_manager", "procurement_manager", "product_manager",
    "production_manager", "program_manager", "project_manager", "project_manager,_senior",
    "property_manager", "quality_assurance_manager", "quality_manager", "regional_manager",
    "relationship_manager", "restaurant_manager", "risk_manager", "safety_manager",
    "sales_manager", "senior_project_manager", "service_manager", "site_manager",
    "store_manager", "supply_chain_manager", "supply_manager", "tax_manager",
    "team_leader", "unit_manager", "warehouse_manager"
  ],
  "Creative": [
    "graphic_designer", "art_director", "artist", "author", "content_writer",
    "copywriter", "creative_director", "digital_designer", "fashion_designer",
    "interface_designer", "interior_designer", "journalist", "photographer",
    "reporter", "stylist", "writer", "web_graphic_designer"
  ],
  "Sales": [
    "sales_representative", "account_executive", "account_representative",
    "brand_ambassador", "business_development_executive", "business_representative",
    "commercial_underwriter", "insurance_agent", "insurance_broker", "marketer",
    "pharmaceutical_representative", "real_estate_agent", "retail_sales",
    "sales", "sales_agent", "sales_analyst", "sales_assistant", "sales_associate",
    "sales_consultant", "sales_engineer", "sales_executive", "sales_manager",
    "sales_rep", "sales_specialist", "sales_trainee", "sales/marketing",
    "technical_sales_representative", "travel_agent", "travel_consultant",
    "tour_consultant", "tour_guide"
  ],
  "Legal": [
    "attorney", "compliance_officer", "counsel", "lawyer", "legal_assistant",
    "legal_counsel", "legal_secretary", "litigation_secretary", "paralegal"
  ],
  "Service": [
    "chef", "admin_assistant", "administrative_assistant", "adviser", "advisor",
    "agent", "attendant", "au_pair", "barista", "bartender", "beauty_therapist",
    "call_center_agent", "cashier", "cleaner", "clerk", "concierge", "customer_agent",
    "customer_service_agent", "customer_service_representative", "data_entry_clerk",
    "delivery_driver", "delivery_man", "dispatcher", "driver", "est", "event_coordinator",
    "executive_assistant", "executive_secretary", "facilitator", "field_agent",
    "field_representative", "flight_attendant", "guard", "hair_stylist", "hairstylist",
    "handyman", "host", "hostess", "hotel_receptionist", "hr_administrator",
    "hr_assistant", "hr_generalist", "hr_officer", "hr_specialist", "interpreter",
    "massage_therapist", "nanny", "night_auditor", "office_administrator",
    "office_assistant", "office_cleaner", "officer", "personal_assistant",
    "porter", "receptionist", "recruiter", "recruitment_consultant", "reservationist",
    "resident_assistant", "secretary", "security_assistant", "security_consultant",
    "security_guard", "security_officer", "server_(waiter/waitress)", "service_advisor",
    "service_coordinator", "service_representative", "service_technician",
    "shop_assistant", "social_worker", "stylist", "support_specialist",
    "support_technician", "taxi_driver", "technician", "therapist", "tour_guide",
    "trainer", "translator", "truck_driver", "waiter", "waitress", "warehouse_assistant",
    "warehouse_man", "warehouse_supervisor", "warehouse_worker"
  ],
  "Trades": [
    "electrician", "apprentice", "assembler", "auto_technician", "auto_tester",
    "baker", "boilermaker", "butcher", "carpenter", "chef_de_partie", "cleaner",
    "concrete_foreman", "construction_worker", "cook", "diesel_mechanic",
    "diesel_technician", "dishwasher", "draughtsman", "driver", "dump_operator",
    "electrician", "equipment_operator", "fitter", "fork_operator", "forklift_driver",
    "forklift_operator", "foreman", "general_cleaner", "general_foreman",
    "general_machine_operator", "hand", "handyman", "hvac_technician", "instrument_technician",
    "instrumentation_technician", "laborer", "machine_operator", "machinist",
    "maintenance_mechanic", "maintenance_millwright", "maintenance_planner",
    "maintenance_technician", "manufacturing_millwright", "mechanic", "millwright",
    "miner", "operator", "packer", "painter", "pastry_chef", "picker", "plumber",
    "police_officer", "porter", "rigger", "setter", "steel_fixer", "superintendent",
    "supervisor", "technician", "timberman", "truck_operator", "turner", "welder",
    "winder"
  ]
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
  
  // Convert URL with hyphens back to job ID with underscores
  const actualJobId = jobId ? jobId.replace(/-/g, "_") : "";
  
  const salaryData = useMemo(() => getSalaryData(), []);
  const jobData = actualJobId && salaryData[actualJobId] ? salaryData[actualJobId] : null;
  const jobTitle = actualJobId ? actualJobId.replace(/_/g, " ") : "";
  
  // Get related jobs, making sure to filter out any undefined salary data
  const relatedJobIds = actualJobId ? getRelatedJobs(actualJobId) : [];
  const relatedJobs = relatedJobIds
    .filter(id => salaryData[id] !== undefined) // Filter out any jobs that don't have data
    .map(id => ({
      id,
      title: id.replace(/_/g, " "),
      slug: id.replace(/_/g, "-"), // Convert underscores to hyphens for URLs
      salary: salaryData[id].average,
      experience: salaryData[id].experience,
      education: salaryData[id].education
    }));

  // SEO title and description with job specific information
  const jobCategory = actualJobId ? getJobCategory(actualJobId) : "";
  const seoTitle = jobData 
    ? `${jobTitle} Salary in South Africa (R${jobData.average.toLocaleString()})` 
    : `${jobTitle} Salary in South Africa`;
  const seoDescription = jobData 
    ? `${jobTitle} average salary in South Africa is R${jobData.average.toLocaleString()} per month. Explore salary ranges, requirements, and career insights for ${jobTitle} positions.`
    : `Explore salary information for ${jobTitle} positions in South Africa. Get insights on pay ranges, requirements, and career prospects.`;
  
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
          title={`${jobTitle} | Salary Information Not Found`}
          description={`We couldn't find salary information for ${jobTitle}. Please try another job.`}
          canonicalUrl="/salaries" 
        />
        <Header />
        <main className="pt-20 pb-16 px-4">
          <div className="container mx-auto max-w-xl">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h1 className="text-xl font-semibold mb-4 capitalize">Unable to find {jobTitle} salary data</h1>
                <p className="mb-6 text-gray-600">
                  We couldn't find salary information for this job. The data might be unavailable or the job ID might be incorrect.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button onClick={() => navigate('/salaries')} className="flex-1">
                    Browse All Salaries
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
                <Briefcase className="h-4 w-4 mr-1 text-[#999]" />
                <span className="text-[#555] font-medium">{jobCategory} industry</span>
              </div>
              
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1 text-[#999]" />
                Experience: <span className="capitalize ml-1 font-medium">{jobData.experience}</span>
              </div>
              
              <div className="flex items-center">
                <GraduationCap className="h-4 w-4 mr-1 text-[#999]" />
                <span className="text-xs">{jobData.education.split(" ")[0]}</span>
              </div>
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
                  Explore other {getJobCategory(actualJobId)} jobs with similar skill requirements
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
                          to={`/salaries/${job.slug}`}
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
            &copy; {new Date().getFullYear()} financepedia. All rights reserved.
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

