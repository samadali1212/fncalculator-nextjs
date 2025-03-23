
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getSalaryData } from "../utils/salaryData";
import { Badge } from "@/components/ui/badge";

type SalaryPeriod = "monthly" | "yearly" | "hourly";

const JobDetail = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();
  const [displayPeriod, setDisplayPeriod] = useState<SalaryPeriod>("monthly");
  
  const salaryData = useMemo(() => getSalaryData(), []);
  const jobData = jobId ? salaryData[jobId] : null;
  const jobTitle = jobId ? jobId.replace(/_/g, " ") : "";
  
  const convertSalary = (value: number, from: SalaryPeriod, to: SalaryPeriod): number => {
    if (from === to) return value;
    
    // Convert everything to monthly first
    let monthlyValue = value;
    if (from === "yearly") monthlyValue = value / 12;
    if (from === "hourly") monthlyValue = value * 160; // Assuming 40 hours/week, 4 weeks/month
    
    // Then convert from monthly to target
    if (to === "monthly") return monthlyValue;
    if (to === "yearly") return monthlyValue * 12;
    if (to === "hourly") return monthlyValue / 160;
    
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
        <div className="mb-8">
          <Button 
            variant="ghost" 
            className="mb-4" 
            onClick={() => navigate('/salaries')}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Jobs
          </Button>
          
          <h1 className="text-3xl font-bold mb-2 capitalize">{jobTitle} Salary Information</h1>
          <div className="flex items-center gap-2 mb-6">
            <Badge className="capitalize bg-blue-100 text-blue-800 hover:bg-blue-100">{jobData.experience} Level</Badge>
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">{jobData.education.split(" ")[0]}</Badge>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Display Options</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Display Salary As
                    </label>
                    <Select 
                      value={displayPeriod} 
                      onValueChange={(value) => setDisplayPeriod(value as SalaryPeriod)}
                    >
                      <SelectTrigger id="display-period">
                        <SelectValue placeholder="Select period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="yearly">Yearly</SelectItem>
                        <SelectItem value="hourly">Hourly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="md:col-span-2">
            <CardContent className="p-6">
              <p className="mb-6 text-gray-700 leading-relaxed">
                {generateSalaryDescription()}
              </p>
              
              <h3 className="font-medium text-lg mb-3">Salary Breakdown</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Level</TableHead>
                    <TableHead>Salary ({displayPeriod})</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Minimum</TableCell>
                    <TableCell>{displayValue(jobData.min)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Average</TableCell>
                    <TableCell>{displayValue(jobData.average)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Maximum</TableCell>
                    <TableCell>{displayValue(jobData.max)}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              
              <div className="mt-6 p-3 bg-[#fff9e6] rounded-md">
                <h3 className="font-medium mb-2">Additional Factors</h3>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>Experience Level: <span className="capitalize">{jobData.experience}</span></li>
                  <li>Education: {jobData.education}</li>
                  <li>Location Factor: {jobData.location_factor}x (major cities vs. other areas)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
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
