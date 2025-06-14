import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import AdSense from "@/components/AdSense";
import BmiCalculator from "@/components/BmiCalculator";
import BmiCollapsible from "@/components/BmiCollapsible";

const Bmi = () => {
  const location = useLocation();
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");

  const handleUnitChange = (value: string) => {
    if (value === "metric" || value === "imperial") {
      setUnit(value);
    }
  };

  return (
    <>
      <Helmet>
        <title>BMI Calculator - Body Mass Index Calculator | Deni La Gari</title>
        <meta name="description" content="Free BMI calculator to check your Body Mass Index. Calculate BMI using metric or imperial units and understand your weight category." />
        <meta name="keywords" content="BMI calculator, body mass index, weight calculator, health calculator, fitness calculator" />
        <link rel="canonical" href="https://denilagari.com/bmi" />
      </Helmet>

      <div className="min-h-screen bg-[#f6f6f0]">
        <Header />
        
        <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
          <h1 className="text-3xl font-bold mb-2">BMI Calculator</h1>
          <p className="text-gray-600 mb-8">
            Calculate your Body Mass Index (BMI) to understand your weight category and maintain a healthy lifestyle. 
            Use our free BMI calculator with both metric and imperial units for accurate health assessments.
          </p>

          {/* BMI Calculator Component */}
          <BmiCalculator 
            unit={unit}
            onUnitChange={handleUnitChange}
          />

          <p className="text-gray-600 mb-8">
            <em>BMI is a screening tool and may not be accurate for athletes, elderly, or pregnant women. Consult healthcare professionals for personalized advice.</em>
          </p>

          {/* AdSense */}
          <div className="mb-8">
            <AdSense 
              slot="1234567890"
              format="auto"
              responsive={true}
            />
          </div>

          {/* BMI Information Collapsibles */}
          <BmiCollapsible />

          {/* Information Section */}
          <div className="bg-white rounded-sm shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              About BMI Calculator
            </h2>
            
            <div className="prose prose-sm max-w-none">
              <p className="text-gray-600 mb-4">
                Body Mass Index (BMI) is a measure of body fat based on height and weight. It's a screening tool 
                to identify whether an adult is underweight, normal weight, overweight, or obese.
              </p>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How BMI is Calculated</h3>
              <ul className="text-gray-600 mb-4 list-disc pl-5">
                <li><strong>Metric:</strong> BMI = weight (kg) ÷ [height (m)]²</li>
                <li><strong>Imperial:</strong> BMI = [weight (lbs) ÷ height (inches)²] × 703</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">BMI Categories</h3>
              <ul className="text-gray-600 mb-4 list-disc pl-5">
                <li><strong>Underweight:</strong> Below 18.5</li>
                <li><strong>Normal weight:</strong> 18.5-24.9</li>
                <li><strong>Overweight:</strong> 25-29.9</li>
                <li><strong>Obese:</strong> 30 and above</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">BMI Limitations</h3>
              <p className="text-gray-600">
                BMI is a useful screening tool but has limitations. It doesn't distinguish between muscle and fat, 
                and may not be accurate for athletes, elderly, or pregnant women. Always consult healthcare 
                professionals for personalized advice.
              </p>
            </div>
          </div>
        </main>

        <footer className="border-t border-gray-300 py-8 bg-white">
          <div className="container mx-auto px-4 md:px-6 text-center text-[#828282] text-sm">
            <p>
              &copy; {new Date().getFullYear()} SalaryList. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Bmi;
