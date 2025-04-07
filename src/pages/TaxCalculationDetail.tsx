
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useLocation } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Header from "../components/Header";
import SEO from "../components/SEO";
import ShareButton from "../components/ShareButton";
import { 
  calculateIncomeTax, 
  formatCurrency,
  convertIncome,
  AgeGroup,
  TimeFrame
} from "../utils/taxCalculator";

const TaxCalculationDetail = () => {
  const { incomeId } = useParams<{ incomeId: string }>();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  
  // Determine if it's monthly or yearly calculation
  const timeFrame: TimeFrame = 
    location.pathname.includes("/yearly") ? "yearly" : "monthly";
  
  // Fixed income from the URL parameter
  const grossIncome = incomeId ? parseInt(incomeId, 10) : 0;
  
  // Sample age groups for comparison
  const ageGroups: { label: string, value: AgeGroup }[] = [
    { label: "Below 65 years", value: "below65" },
    { label: "65-75 years", value: "age65to75" },
    { label: "Above 75 years", value: "above75" }
  ];
  
  // Calculate tax for all age groups
  const calculationsResults = ageGroups.map(group => {
    return {
      ...group,
      ...calculateIncomeTax(grossIncome, group.value, timeFrame)
    };
  });
  
  // Get the default (below 65) calculation
  const defaultCalculation = calculationsResults[0];
  
  // Format title for SEO
  const pageTitle = `${formatCurrency(grossIncome)} ${timeFrame === "monthly" ? "Monthly" : "Annual"} Salary After Tax - SARS Tax Calculator`;
  
  // Format description for SEO
  const pageDescription = `If you earn ${formatCurrency(grossIncome)} ${timeFrame === "monthly" ? "per month" : "per year"}, your take-home pay will be ${formatCurrency(defaultCalculation.netIncome)} after tax. Calculate your SARS income tax and PAYE.`;
  
  // Simulate loading from API
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100); // Reduced from typical higher values for faster loading
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f6f6f0] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-16 h-16 border-4 border-blog-accent border-t-transparent rounded-full animate-spin"
        ></motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }} // Reduced animation time
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={`/tax-calculator/${timeFrame}/${grossIncome}`}
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <a 
            href={`/tax-calculator/${timeFrame}`}
            className="inline-flex items-center text-sm text-[#000000] hover:underline"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Tax Calculator
          </a>
          
          <ShareButton 
            title={`${formatCurrency(grossIncome)} ${timeFrame === "monthly" ? "Monthly" : "Annual"} Income Tax Calculation - SalaryList`} 
            variant="outline"
          />
        </div>
        
        <div className="bg-white rounded-md shadow-sm overflow-hidden mb-8">
          <div className="p-6 md:p-8 border-b border-gray-100">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              {formatCurrency(grossIncome)} {timeFrame === "monthly" ? "Monthly" : "Annual"} Income After Tax
            </h1>
            <p className="text-gray-600">
              SARS Tax Calculation for 2025/2026 Tax Year in South Africa
            </p>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="mb-8">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[#f6f6f0] p-4 rounded-md">
                  <div className="text-gray-500 text-sm mb-1">Gross Income</div>
                  <div className="text-2xl font-bold">{formatCurrency(grossIncome)}</div>
                  <div className="text-gray-500 text-xs mt-1">{timeFrame === "monthly" ? "Monthly" : "Annual"}</div>
                </div>
                
                <div className="bg-[#f6f6f0] p-4 rounded-md">
                  <div className="text-gray-500 text-sm mb-1">Tax Amount</div>
                  <div className="text-2xl font-bold">{formatCurrency(defaultCalculation.netTax)}</div>
                  <div className="text-gray-500 text-xs mt-1">PAYE Tax</div>
                </div>
                
                <div className="bg-[#f6f6f0] p-4 rounded-md">
                  <div className="text-gray-500 text-sm mb-1">Take-Home Pay</div>
                  <div className="text-2xl font-bold text-green-700">{formatCurrency(defaultCalculation.netIncome)}</div>
                  <div className="text-gray-500 text-xs mt-1">After Tax</div>
                </div>
              </div>
            </div>
            
            <div className="mb-8 overflow-hidden">
              <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-xl font-semibold">Tax Breakdown</h2>
                <div className="text-sm text-gray-500">
                  Effective Tax Rate: <span className="font-semibold">{defaultCalculation.effectiveTaxRate.toFixed(1)}%</span>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-md overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-600 text-sm">
                      <th className="px-4 py-3">Item</th>
                      <th className="px-4 py-3 text-right">Amount</th>
                      <th className="px-4 py-3 text-right">Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-4 py-3 text-sm">{timeFrame === "monthly" ? "Monthly" : "Annual"} Income</td>
                      <td className="px-4 py-3 text-right font-medium">{formatCurrency(grossIncome)}</td>
                      <td className="px-4 py-3 text-right">100%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Income Tax</td>
                      <td className="px-4 py-3 text-right font-medium text-red-600">- {formatCurrency(defaultCalculation.netTax)}</td>
                      <td className="px-4 py-3 text-right">{defaultCalculation.effectiveTaxRate.toFixed(1)}%</td>
                    </tr>
                    <tr className="bg-[#f8f9fa]">
                      <td className="px-4 py-3 font-medium">Take-Home Pay</td>
                      <td className="px-4 py-3 text-right font-bold text-green-700">{formatCurrency(defaultCalculation.netIncome)}</td>
                      <td className="px-4 py-3 text-right">{(100 - defaultCalculation.effectiveTaxRate).toFixed(1)}%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Age Group Comparison</h2>
              <div className="bg-gray-50 rounded-md overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-600 text-sm">
                      <th className="px-4 py-3">Age Group</th>
                      <th className="px-4 py-3 text-right">Tax Amount</th>
                      <th className="px-4 py-3 text-right">Take-Home Pay</th>
                      <th className="px-4 py-3 text-right">Effective Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {calculationsResults.map((calc, index) => (
                      <tr key={index} className={calc.value === "below65" ? "bg-[#f8f9fa]" : ""}>
                        <td className="px-4 py-3 text-sm font-medium">{calc.label}</td>
                        <td className="px-4 py-3 text-right">{formatCurrency(calc.netTax)}</td>
                        <td className="px-4 py-3 text-right font-medium">{formatCurrency(calc.netIncome)}</td>
                        <td className="px-4 py-3 text-right">{calc.effectiveTaxRate.toFixed(1)}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {timeFrame === "monthly" && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Annual Equivalent</h2>
                <div className="bg-[#f6f6f0] p-4 rounded-md">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <div className="text-gray-500 text-sm mb-1">Annual Gross Income</div>
                      <div className="text-xl font-bold">{formatCurrency(grossIncome * 12)}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm mb-1">Annual Tax</div>
                      <div className="text-xl font-bold">{formatCurrency(defaultCalculation.netTax * 12)}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm mb-1">Annual Take-Home</div>
                      <div className="text-xl font-bold text-green-700">{formatCurrency(defaultCalculation.netIncome * 12)}</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <a
                    href={`/tax-calculator/yearly/${grossIncome * 12}`}
                    className="text-blog-accent hover:underline inline-flex items-center text-sm"
                  >
                    View detailed annual tax calculation
                  </a>
                </div>
              </div>
            )}
            
            {timeFrame === "yearly" && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Monthly Equivalent</h2>
                <div className="bg-[#f6f6f0] p-4 rounded-md">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <div className="text-gray-500 text-sm mb-1">Monthly Gross Income</div>
                      <div className="text-xl font-bold">{formatCurrency(grossIncome / 12)}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm mb-1">Monthly Tax</div>
                      <div className="text-xl font-bold">{formatCurrency(defaultCalculation.netTax / 12)}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm mb-1">Monthly Take-Home</div>
                      <div className="text-xl font-bold text-green-700">{formatCurrency(defaultCalculation.netIncome / 12)}</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <a
                    href={`/tax-calculator/monthly/${Math.round(grossIncome / 12)}`}
                    className="text-blog-accent hover:underline inline-flex items-center text-sm"
                  >
                    View detailed monthly tax calculation
                  </a>
                </div>
              </div>
            )}
          </div>
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

export default TaxCalculationDetail;
