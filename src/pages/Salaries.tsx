
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getSalaryData } from "../utils/salaryData";

type SalaryPeriod = "monthly" | "yearly" | "hourly";

const Salaries = () => {
  const [selectedJob, setSelectedJob] = useState("software_developer");
  const [displayPeriod, setDisplayPeriod] = useState<SalaryPeriod>("monthly");
  const [searchTerm, setSearchTerm] = useState("");
  
  const salaryData = useMemo(() => getSalaryData(), []);
  
  const filteredJobs = useMemo(() => {
    return Object.keys(salaryData).filter(job => 
      job.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [salaryData, searchTerm]);
  
  const selectedJobData = salaryData[selectedJob];
  
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
    if (!selectedJobData) return "";
    
    const jobTitle = selectedJob.replace(/_/g, " ");
    const avgSalary = displayValue(selectedJobData.average);
    const expDesc = selectedJobData.experience === "entry" 
      ? "This is an entry-level position" 
      : selectedJobData.experience === "mid" 
        ? "This is a mid-level position requiring 3-5 years of experience"
        : "This is a senior position typically requiring 5+ years of experience";
    
    const periodText = displayPeriod === "monthly" 
      ? "per month" 
      : displayPeriod === "yearly" 
        ? "per year" 
        : "per hour";
    
    const locationImpact = selectedJobData.location_factor > 1 
      ? `Working in major cities like Johannesburg or Cape Town can increase this salary by up to ${Math.round((selectedJobData.location_factor - 1) * 100)}%.`
      : "This salary is relatively consistent across South Africa.";
    
    return `A ${jobTitle} in South Africa earns an average of ${avgSalary} ${periodText}. ${expDesc}. ${locationImpact} The salary range typically falls between ${displayValue(selectedJobData.min)} and ${displayValue(selectedJobData.max)} ${periodText}, depending on skills, certifications, and employer.`;
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">South African Salaries Guide</h1>
        
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Search Jobs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Input 
                    placeholder="Search job titles..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="mb-2"
                  />
                  
                  <div className="h-64 overflow-y-auto border rounded-md">
                    <RadioGroup 
                      value={selectedJob} 
                      onValueChange={setSelectedJob}
                      className="p-1"
                    >
                      {filteredJobs.map(job => (
                        <div key={job} className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded">
                          <RadioGroupItem value={job} id={job} />
                          <Label htmlFor={job} className="cursor-pointer w-full capitalize">
                            {job.replace(/_/g, " ")}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="display-period">Display Salary As</Label>
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
          
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="capitalize">{selectedJob.replace(/_/g, " ")} Salary Information</CardTitle>
            </CardHeader>
            <CardContent>
              {selectedJobData ? (
                <>
                  <p className="mb-4 text-sm text-gray-700">
                    {generateSalaryDescription()}
                  </p>
                  
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
                        <TableCell>{displayValue(selectedJobData.min)}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Average</TableCell>
                        <TableCell>{displayValue(selectedJobData.average)}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Maximum</TableCell>
                        <TableCell>{displayValue(selectedJobData.max)}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  
                  <div className="mt-4 p-3 bg-[#fff9e6] rounded-md">
                    <h3 className="font-medium mb-1">Additional Factors</h3>
                    <ul className="text-sm list-disc pl-5 space-y-1">
                      <li>Experience Level: <span className="capitalize">{selectedJobData.experience}</span></li>
                      <li>Education: {selectedJobData.education}</li>
                      <li>Location Factor: {selectedJobData.location_factor}x (major cities vs. other areas)</li>
                    </ul>
                  </div>
                </>
              ) : (
                <p>Please select a job to view salary information.</p>
              )}
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

export default Salaries;
