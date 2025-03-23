
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Briefcase, Clock, Calendar, ArrowUpRight } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getHourlyRateDetails, convertHourlyRate, generateHourlyRates } from "../utils/hourlyConverter";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Slider } from "@/components/ui/slider";

type DisplayPeriod = "hourly" | "weekly" | "monthly" | "yearly";

const HourlyRateDetail = () => {
  const { rateId } = useParams<{ rateId: string }>();
  const navigate = useNavigate();
  const [displayPeriod, setDisplayPeriod] = useState<DisplayPeriod>("monthly");
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [weeksPerYear, setWeeksPerYear] = useState(48);
  
  const hourlyRate = rateId ? parseFloat(rateId) : 0;
  const rateDetails = useMemo(() => 
    getHourlyRateDetails(hourlyRate, hoursPerWeek, weeksPerYear), 
    [hourlyRate, hoursPerWeek, weeksPerYear]
  );
  
  // Get nearby hourly rates for comparison
  const allRates = useMemo(() => generateHourlyRates(), []);
  const nearbyRates = useMemo(() => {
    if (!hourlyRate) return [];
    
    return allRates
      .filter(rate => rate.hourlyRate !== hourlyRate)
      .sort((a, b) => Math.abs(a.hourlyRate - hourlyRate) - Math.abs(b.hourlyRate - hourlyRate))
      .slice(0, 20);
  }, [hourlyRate, allRates]);
  
  const handlePeriodChange = (value: string) => {
    if (value) {
      setDisplayPeriod(value as DisplayPeriod);
      toast(`Displaying salary as ${value}`);
    }
  };
  
  const handleHoursChange = (value: number[]) => {
    setHoursPerWeek(value[0]);
  };
  
  const handleWeeksChange = (value: number[]) => {
    setWeeksPerYear(value[0]);
  };
  
  const formatSalary = (value: number): string => {
    return new Intl.NumberFormat('en-ZA', { 
      style: 'currency', 
      currency: 'ZAR',
      maximumFractionDigits: 0
    }).format(value);
  };
  
  const getDisplayValue = (period: DisplayPeriod): string => {
    if (!rateDetails) return "R0";
    
    switch (period) {
      case "hourly":
        return formatSalary(rateDetails.hourlyRate);
      case "weekly":
        return formatSalary(rateDetails.hourlyRate * rateDetails.workHoursPerWeek);
      case "monthly":
        return formatSalary(rateDetails.monthlyEquivalent);
      case "yearly":
        return formatSalary(rateDetails.yearlySalary);
      default:
        return formatSalary(rateDetails.monthlyEquivalent);
    }
  };
  
  if (!rateDetails) {
    return (
      <div className="min-h-screen bg-[#f6f6f0] flex items-center justify-center">
        <Card>
          <CardContent className="p-6">
            <p>Rate not found. Please try another rate.</p>
            <Button onClick={() => navigate('/hourly-rates')} className="mt-4">
              Back to Hourly Rates
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
          onClick={() => navigate('/hourly-rates')}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Hourly Rates
        </Button>
        
        {/* Main Rate Information Card */}
        <article className="bg-white rounded-md shadow-sm overflow-hidden mb-8">
          <div className="p-6 sm:p-8 border-b border-gray-100">
            <h1 className="text-3xl font-bold mb-4">R{hourlyRate} Per Hour Salary Information</h1>
            
            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <div className="flex justify-center mb-3">
                <ToggleGroup 
                  type="single" 
                  value={displayPeriod}
                  onValueChange={handlePeriodChange}
                  variant="outline"
                  className="bg-white"
                >
                  <ToggleGroupItem value="hourly" aria-label="Hourly">Hourly</ToggleGroupItem>
                  <ToggleGroupItem value="weekly" aria-label="Weekly">Weekly</ToggleGroupItem>
                  <ToggleGroupItem value="monthly" aria-label="Monthly">Monthly</ToggleGroupItem>
                  <ToggleGroupItem value="yearly" aria-label="Yearly">Yearly</ToggleGroupItem>
                </ToggleGroup>
              </div>
              
              <div className="flex flex-col items-center bg-white p-6 rounded border border-gray-100 shadow-sm">
                <div className="text-gray-600 text-sm mb-1">
                  {displayPeriod.charAt(0).toUpperCase() + displayPeriod.slice(1)} salary
                </div>
                <div className="text-3xl font-bold text-primary">{getDisplayValue(displayPeriod)}</div>
                <div className="text-gray-500 text-sm mt-1">Based on {hoursPerWeek} hours per week, {weeksPerYear} weeks per year</div>
              </div>
            </div>
          </div>
          
          <div className="p-6 sm:p-8">
            <div className="prose prose-sm sm:prose max-w-none mb-8">
              <h2 className="text-xl font-semibold mb-3">Calculation Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                An hourly rate of R{hourlyRate} in South Africa translates to approximately 
                {" "}{formatSalary(rateDetails.monthlyEquivalent)} per month or 
                {" "}{formatSalary(rateDetails.yearlySalary)} per year when working 
                {" "}{hoursPerWeek} hours per week for {weeksPerYear} weeks per year.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-4">Customize Calculation</h3>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">Hours per week: {hoursPerWeek}</label>
                    <span className="text-xs text-gray-500">Standard: 40 hours</span>
                  </div>
                  <Slider 
                    defaultValue={[hoursPerWeek]} 
                    max={80} 
                    min={5} 
                    step={1} 
                    onValueChange={handleHoursChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">Weeks per year: {weeksPerYear}</label>
                    <span className="text-xs text-gray-500">Standard: 48 weeks (4 weeks leave)</span>
                  </div>
                  <Slider 
                    defaultValue={[weeksPerYear]} 
                    max={52} 
                    min={30} 
                    step={1} 
                    onValueChange={handleWeeksChange}
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-3">Detailed Breakdown</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Period</TableHead>
                    <TableHead>Amount (ZAR)</TableHead>
                    <TableHead>Calculation</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Hourly</TableCell>
                    <TableCell>R{rateDetails.hourlyRate.toLocaleString()}</TableCell>
                    <TableCell>Base rate</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Daily (8 hours)</TableCell>
                    <TableCell>R{(rateDetails.hourlyRate * 8).toLocaleString()}</TableCell>
                    <TableCell>Hourly × 8</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Weekly</TableCell>
                    <TableCell>R{(rateDetails.hourlyRate * hoursPerWeek).toLocaleString()}</TableCell>
                    <TableCell>Hourly × {hoursPerWeek} hours</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Monthly</TableCell>
                    <TableCell>R{rateDetails.monthlyEquivalent.toLocaleString()}</TableCell>
                    <TableCell>Weekly × 4 weeks</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Yearly</TableCell>
                    <TableCell>R{rateDetails.yearlySalary.toLocaleString()}</TableCell>
                    <TableCell>Hourly × {hoursPerWeek} hours × {weeksPerYear} weeks</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div className="bg-[#fff9e6] p-5 rounded-md">
              <h3 className="font-medium mb-3">Common Assumptions</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium">Work Hours</h4>
                    <p className="text-sm text-gray-700">
                      A standard work week is typically 40 hours (8 hours × 5 days)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium">Work Weeks</h4>
                    <p className="text-sm text-gray-700">
                      Most South African employees work 48 weeks per year (allowing for leave)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 sm:p-8 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div>
                <h3 className="font-medium">About this calculation</h3>
                <p className="text-sm text-gray-600">
                  Salary conversions are based on standard work hours and may vary by industry and contract.
                </p>
              </div>
              <div className="flex gap-2">
                <Badge variant="outline" className="bg-white">South Africa</Badge>
                <Badge variant="outline" className="bg-white">{hoursPerWeek}h/week</Badge>
                <Badge variant="outline" className="bg-white">{weeksPerYear} weeks/year</Badge>
              </div>
            </div>
          </div>
        </article>
        
        {/* Similar Rates Section */}
        {nearbyRates.length > 0 && (
          <div className="bg-white rounded-md shadow-sm overflow-hidden mb-8">
            <div className="p-6 sm:p-8 border-b border-gray-100">
              <h2 className="text-2xl font-bold mb-2">Similar Hourly Rates</h2>
              <p className="text-sm text-gray-600">
                Compare nearby hourly rates and their monthly equivalents
              </p>
            </div>
            
            <div className="divide-y divide-gray-100">
              {nearbyRates.slice(0, 20).map((rate, index) => (
                <motion.div 
                  key={rate.hourlyRate}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group px-6 sm:px-8 py-4"
                >
                  <div className="flex items-start">
                    <div className="pr-3 text-center hidden sm:block">
                      <span className="text-gray-500 text-sm">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <Link 
                          to={`/hourly-rates/${rate.hourlyRate}`}
                          className="text-[#333] hover:underline text-base sm:text-lg font-medium transition-colors group-hover:text-blog-accent"
                        >
                          R{rate.hourlyRate} per hour
                        </Link>
                        <ArrowUpRight 
                          className="h-3.5 w-3.5 text-blog-subtle opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                      
                      <div className="flex items-center text-xs text-[#828282]">
                        <span>R{rate.monthlyEquivalent.toLocaleString()} per month</span>
                        <span className="mx-1">•</span>
                        <span>R{rate.yearlySalary.toLocaleString()} per year</span>
                        <span className="mx-1">•</span>
                        <span className="px-1.5 py-0.5 bg-gray-100 rounded text-[#666] text-xs">
                          {rate.workHoursPerWeek}h/week
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="p-6 sm:p-8 border-t border-gray-100">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate('/hourly-rates')}
              >
                View All Hourly Rates
              </Button>
            </div>
          </div>
        )}
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

export default HourlyRateDetail;
