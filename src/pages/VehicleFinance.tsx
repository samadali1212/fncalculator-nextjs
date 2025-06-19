
import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import VehicleFinanceCalculator from "../components/VehicleFinanceCalculator";
import SEO from "../components/SEO";
import { VehicleFinanceTimeFrame } from "../utils/vehicleFinanceCalculator";

const VehicleFinance = () => {
  const { timeFrame: urlTimeFrame } = useParams();
  const location = useLocation();
  
  const [timeFrame, setTimeFrame] = useState<VehicleFinanceTimeFrame>(
    (urlTimeFrame as VehicleFinanceTimeFrame) || "monthly"
  );

  const handleTimeFrameChange = (value: string) => {
    setTimeFrame(value as VehicleFinanceTimeFrame);
    // Update URL when timeframe changes
    const newPath = `/vehicle-finance/${value}`;
    window.history.pushState({}, '', newPath);
  };

  const pageTitle = `South Africa Vehicle Finance Calculator - ${timeFrame === "monthly" ? "Monthly" : "Annual"} Payment Calculator`;
  const pageDescription = `Calculate your vehicle finance payments in South Africa. Get accurate ${timeFrame === "monthly" ? "monthly" : "annual"} payment estimates for car loans with down payment and balloon payment options.`;

  return (
    <>
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords="vehicle finance calculator, car loan calculator, South Africa, monthly payments, balloon payment, down payment"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Vehicle Finance Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate your vehicle finance payments in South Africa. Get accurate estimates for your car loan with customizable down payment and balloon payment options.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calculator Input Section */}
            <div className="lg:col-span-1">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    Vehicle Finance Details
                  </CardTitle>
                  <CardDescription>
                    Enter your vehicle and loan information to calculate payments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <VehicleFinanceCalculator 
                    timeFrame={timeFrame}
                    onTimeFrameChange={handleTimeFrameChange}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Results will be shown in the calculator component */}
            <div className="lg:col-span-2">
              {/* This space is intentionally left for the results from the calculator */}
            </div>
          </div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-800">
                  About Vehicle Finance in South Africa
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-gray-600 mb-4">
                  Vehicle finance in South Africa allows you to purchase a car by borrowing money from a financial institution. 
                  The loan is typically secured against the vehicle itself, which means the lender has a claim on the car until the loan is fully repaid.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Key Features:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Down Payment:</strong> An upfront payment that reduces the loan amount</li>
                  <li><strong>Balloon Payment:</strong> A larger final payment that reduces monthly installments</li>
                  <li><strong>Interest Rate:</strong> The cost of borrowing, typically ranging from 8% to 15%</li>
                  <li><strong>Loan Term:</strong> Usually between 24 to 84 months</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Benefits of Balloon Payments:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Lower monthly payments during the loan term</li>
                  <li>More cash available for other expenses</li>
                  <li>Option to refinance or trade in at the end of the term</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default VehicleFinance;
