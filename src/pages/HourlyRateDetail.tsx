
import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import SEO from "../components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Briefcase, Clock, Calendar, ArrowUpRight, ArrowRight } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getHourlyRateDetails, convertHourlyRate, generateHourlyRates } from "../utils/hourlyConverter";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Slider } from "@/components/ui/slider";
import { Skeleton } from "@/components/ui/skeleton";

type DisplayPeriod = "hourly" | "weekly" | "monthly" | "yearly";

const HourlyRateDetail = () => {
  const { rateId } = useParams<{ rateId: string }>();
  const navigate = useNavigate();
  const [displayPeriod, setDisplayPeriod] = useState<DisplayPeriod>("monthly");
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [weeksPerYear, setWeeksPerYear] = useState(48);
  const [isLoading, setIsLoading] = useState(true);
  
  const hourlyRate = rateId ? parseFloat(rateId) : 0;
  const rateDetails = useMemo(() => 
    getHourlyRateDetails(hourlyRate, hoursPerWeek, weeksPerYear), 
    [hourlyRate, hoursPerWeek, weeksPerYear]
  );
  
  const allRates = useMemo(() => generateHourlyRates(), []);
  const nearbyRates = useMemo(() => {
    if (!hourlyRate) return [];
    
    return allRates
      .filter(rate => rate.hourlyRate !== hourlyRate)
      .sort((a, b) => Math.abs(a.hourlyRate - hourlyRate) - Math.abs(b.hourlyRate - hourlyRate))
      .slice(0, 20);
  }, [hourlyRate, allRates]);
  
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [rateId]);
  
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
    const formatted = new Intl.NumberFormat('en-ZA', { 
      style: 'currency', 
      currency: 'ZAR',
      maximumFractionDigits: 0
    }).format(value);
    
    return formatted.replace(/,/g, ' ');
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
  
  const formatWithSpaces = (value: number): string => {
    return value.toLocaleString().replace(/,/g, ' ');
  };

  // SEO title and description with rate specific information 
  const seoTitle = `R${hourlyRate} Per Hour to Monthly Salary | MoneyWorth`;
  const seoDescription = `Convert R${hourlyRate} hourly rate to monthly salary (R${rateDetails?.monthlyEquivalent.toLocaleString().replace(/,/g, ' ')}) and yearly income in South Africa based on ${hoursPerWeek} hours per week.`;
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f6f6f0]">
        <SEO title={seoTitle} description={seoDescription} canonicalUrl={`/hourly-rates/${rateId}`} />
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

  if (!rateDetails) {
    return (
      <div className="min-h-screen bg-[#f6f6f0] flex items-center justify-center">
        <SEO title="Rate Not Found | MoneyWorth" description="The hourly rate you're looking for doesn't exist or is invalid." canonicalUrl="/hourly-rates" />
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
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title={seoTitle}
        description={seoDescription}
        canonicalUrl={`/hourly-rates/${rateId}`}
      />
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link 
            to="/hourly-rates"
            className="inline-flex items-center text-sm text-[#000000] mb-6 hover:underline"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            All Hourly Rates
          </Link>
          
          <article className="bg-white p-6 sm:p-8 rounded-md shadow-sm mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#333] mb-4">
              R{hourlyRate} Per Hour to Monthly Salary
            </h1>
            
            <div className="flex flex-wrap items-center gap-3 text-sm text-[#666] mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1 text-[#999]" />
                Last updated: {new Date().toLocaleDateString()}
              </div>
              
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-[#999]" />
                {hoursPerWeek} hours/week
              </div>
              
              <span className="px-2 py-1 bg-gray-100 rounded text-[#666] text-xs">
                South Africa
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
                    <TableCell>R{rateDetails.hourlyRate.toLocaleString().replace(/,/g, ' ')}</TableCell>
                    <TableCell>Base rate</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Daily (8 hours)</TableCell>
                    <TableCell>R{(rateDetails.hourlyRate * 8).toLocaleString().replace(/,/g, ' ')}</TableCell>
                    <TableCell>Hourly × 8</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Weekly</TableCell>
                    <TableCell>R{(rateDetails.hourlyRate * hoursPerWeek).toLocaleString().replace(/,/g, ' ')}</TableCell>
                    <TableCell>Hourly × {hoursPerWeek} hours</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Monthly</TableCell>
                    <TableCell>R{rateDetails.monthlyEquivalent.toLocaleString().replace(/,/g, ' ')}</TableCell>
                    <TableCell>Weekly × 4 weeks</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Yearly</TableCell>
                    <TableCell>R{rateDetails.yearlySalary.toLocaleString().replace(/,/g, ' ')}</TableCell>
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
          </article>
          
          {nearbyRates.length > 0 && (
            <div className="bg-white rounded-md shadow-sm overflow-hidden mb-8">
              <div className="p-6 sm:p-8 border-b border-gray-100">
                <h2 className="text-2xl font-bold mb-2">Similar Hourly Rates</h2>
                <p className="text-sm text-gray-600">
                  Compare nearby hourly rates and their monthly equivalents
                </p>
              </div>
              
              <div className="divide-y divide-gray-100">
                {nearbyRates.slice(0, 10).map((rate, index) => (
                  <motion.div 
                    key={rate.hourlyRate}
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
                          to={`/hourly-rates/${rate.hourlyRate}`}
                          className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-blog-accent"
                        >
                          R{rate.hourlyRate} per hour
                        </Link>
                        
                        <div className="flex items-center text-xs text-[#828282]">
                          <span>R{formatWithSpaces(rate.monthlyEquivalent)} per month</span>
                          <span className="mx-1">•</span>
                          <span>R{formatWithSpaces(rate.yearlySalary)} per year</span>
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
                  onClick={() => navigate('/hourly-rates')}
                >
                  View All Hourly Rates
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

export default HourlyRateDetail;
