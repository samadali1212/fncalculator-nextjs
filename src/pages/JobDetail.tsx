
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar, User, BriefcaseBusiness } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getSalaryData } from "../utils/salaryData";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

type SalaryPeriod = "weekly" | "monthly" | "yearly" | "hourly";

const JobDetail = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();
  const [displayPeriod, setDisplayPeriod] = useState<SalaryPeriod>("monthly");
  
  const salaryData = useMemo(() => getSalaryData(), []);
  const jobData = jobId ? salaryData[jobId] : null;
  const jobTitle = jobId ? jobId.replace(/_/g, " ") : "";
  
  const handlePeriodChange = (value: string) => {
    if (value) {
      setDisplayPeriod(value as SalaryPeriod);
      toast(`Displaying salary as ${value}`);
    }
  };
  
  const convertSalary = (value: number, from: SalaryPeriod, to: SalaryPeriod): number => {
    if (from === to) return value;
    
    // Convert everything to monthly first
    let monthlyValue = value;
    if (from === "yearly") monthlyValue = value / 12;
    if (from === "hourly") monthlyValue = value * 160; // Assuming 40 hours/week, 4 weeks/month
    if (from === "weekly") monthlyValue = value * 4; // Assuming 4 weeks/month
    
    // Then convert from monthly to target
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
    
    return `A ${jobTitle} in South Africa earns an average of ${avgSalary} ${periodText}. ${expDesc}. ${locationImpact} The salary range typically falls between ${displayValue(jobData.min)} and ${displayValue(jobData.max)} ${periodText}, depending on skills, certifications, and employer.`;
  };

  if (!jobData) {
    return (
      <div className="min-h-screen bg-[#f6f6f0] flex items-center justify-center">
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
      className="min-h-screen bg-[#f6f6f0]"
    >
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <Button 
          variant="ghost" 
          className="mb-6" 
          onClick={() => navigate('/salaries')}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Jobs
        </Button>
        
        <article className="bg-white rounded-md shadow-sm overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-gray-100">
            <h1 className="text-3xl font-bold mb-4 capitalize">{jobTitle} Salary Information</h1>
            
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
          </div>
          
          <div className="p-6 sm:p-8">
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
          </div>
          
          <div className="bg-gray-50 p-6 sm:p-8 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div>
                <h3 className="font-medium">About this data</h3>
                <p className="text-sm text-gray-600">
                  Salary information is based on research conducted by MoneyWorth across South Africa.
                </p>
              </div>
              <div className="flex gap-2">
                <Badge variant="outline" className="bg-white">South Africa</Badge>
                <Badge variant="outline" className="bg-white capitalize">{jobData.experience}</Badge>
                <Badge variant="outline" className="bg-white">{displayPeriod}</Badge>
              </div>
            </div>
          </div>
        </article>
      </main>

      <footer className="border-t border-gray-300 py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center text-[#828282] text-sm">
          <p>
            &copy; {new Date().getFullYear()} MoneyWorth. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default JobDetail;
