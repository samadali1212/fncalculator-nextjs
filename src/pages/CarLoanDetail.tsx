
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, Calculator } from "lucide-react";
import Header from "../components/Header";
import SEO from "../components/SEO";
import ShareButton from "../components/ShareButton";
import CarLoanDetailCalculator from "../components/CarLoanDetailCalculator";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  getCarLoanCalculation, 
  formatCurrency,
  CarLoanTimeFrame 
} from "../utils/carLoanCalculator";
import { usePageReload } from "../hooks/usePageReload";

const CarLoanDetail = () => {
  const { vehiclePrice, downPayment, loanTerm, interestRate, balloonPayment } = useParams();
  const navigate = useNavigate();
  const { pageKey, isLoading } = usePageReload();
  
  const [timeFrame, setTimeFrame] = useState<CarLoanTimeFrame>("monthly");
  const [currentVehiclePrice, setCurrentVehiclePrice] = useState(0);
  const [currentDownPayment, setCurrentDownPayment] = useState(0);
  const [currentInterestRate, setCurrentInterestRate] = useState(0);
  const [currentLoanTerm, setCurrentLoanTerm] = useState(0);
  const [currentBalloonPayment, setCurrentBalloonPayment] = useState(0);
  
  // Determine bank name and timeframe from URL
  const path = window.location.pathname;
  const getBankInfo = () => {
    // Check for bank-specific routes first
    if (path.includes("/capitec-car-finance/")) {
      return {
        bankName: "Capitec Bank",
        backLink: "/capitec-car-finance",
        displayName: "Capitec"
      };
    }
    // Add more banks here as needed
    
    // Default to general South Africa car loan
    return {
      bankName: "South Africa",
      backLink: "/car-loan",
      displayName: "South Africa"
    };
  };

  const bankInfo = getBankInfo();
  
  // Determine timeframe from URL
  useEffect(() => {
    if (path.includes("/yearly/")) {
      setTimeFrame("yearly");
    } else {
      setTimeFrame("monthly");
    }
  }, [path]);

  // Parse parameters
  const carPrice = parseInt(vehiclePrice || "0");
  const carDownPayment = parseInt(downPayment || "0");
  const carInterestRate = parseFloat(interestRate || "0");
  const carLoanTerm = parseInt(loanTerm || "0");
  const carBalloonPayment = parseInt(balloonPayment || "0");

  // Set initial values
  useEffect(() => {
    setCurrentVehiclePrice(carPrice);
    setCurrentDownPayment(carDownPayment);
    setCurrentInterestRate(carInterestRate);
    setCurrentLoanTerm(carLoanTerm);
    setCurrentBalloonPayment(carBalloonPayment);
  }, [carPrice, carDownPayment, carInterestRate, carLoanTerm, carBalloonPayment]);

  // Calculate loan details using current values
  const loanResult = currentVehiclePrice > 0 && currentInterestRate > 0 && currentLoanTerm > 0
    ? getCarLoanCalculation(currentVehiclePrice, currentDownPayment, currentInterestRate, currentLoanTerm, currentBalloonPayment, timeFrame)
    : null;

  const handleTimeFrameChange = (value: string) => {
    if (value === "yearly" || value === "monthly") {
      setTimeFrame(value as CarLoanTimeFrame);
      const basePath = bankInfo.backLink === "/car-loan" ? "/car-loan" : bankInfo.backLink;
      navigate(`${basePath}/${value}/${currentVehiclePrice}/${currentDownPayment}/${currentLoanTerm}/${currentInterestRate}/${currentBalloonPayment}`);
    }
  };

  const handleLoanChange = (newVehiclePrice: number, newDownPayment: number, newInterestRate: number, newLoanTerm: number, newBalloonPayment: number) => {
    setCurrentVehiclePrice(newVehiclePrice);
    setCurrentDownPayment(newDownPayment);
    setCurrentInterestRate(newInterestRate);
    setCurrentLoanTerm(newLoanTerm);
    setCurrentBalloonPayment(newBalloonPayment);
  };

  if (!vehiclePrice || !downPayment || !loanTerm || !interestRate || !balloonPayment || carPrice <= 0 || carInterestRate <= 0 || carLoanTerm <= 0) {
    return (
      <motion.div
        key={pageKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-[#f6f6f0]"
      >
        <Header />
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <Card>
              <CardContent className="p-6 text-center">
                <h1 className="text-2xl font-bold mb-4">Invalid Car Loan Parameters</h1>
                <p className="text-gray-600 mb-6">
                  The car loan parameters provided are invalid. Please return to the calculator.
                </p>
                <Link to={bankInfo.backLink}>
                  <Button>
                    <Calculator className="mr-2 h-4 w-4" />
                    Back to {bankInfo.bankName} Car Finance Calculator
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </main>
      </motion.div>
    );
  }

  // Format currency for the title without spaces
  const formattedCurrencyForTitle = formatCurrency(currentVehiclePrice).replace(/\s/g, "");

  if (isLoading) {
    return (
      <motion.div
        key={pageKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-[#f6f6f0] flex items-center justify-center"
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      key={pageKey}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title={`${bankInfo.bankName} Car Finance Calculator ${formattedCurrencyForTitle} - ${timeFrame === "monthly" ? "Monthly" : "Annual"} Payment ${loanResult ? formatCurrency(loanResult.payment) : ""}`}
        description={`Calculate your ${bankInfo.bankName} car finance of ${formatCurrency(currentVehiclePrice)} with ${formatCurrency(currentDownPayment)} down payment at ${currentInterestRate}% interest rate. ${timeFrame === "monthly" ? "Monthly" : "Annual"} payment ${loanResult ? `of ${formatCurrency(loanResult.payment)} over ${loanResult.termDisplay}` : ""}.`}
        canonicalUrl={`${bankInfo.backLink}/${timeFrame}/${currentVehiclePrice}/${currentDownPayment}/${currentLoanTerm}/${currentInterestRate}/${currentBalloonPayment}`}
      />
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center justify-between mb-6">
            <Link 
              to={`${bankInfo.backLink}${timeFrame !== "monthly" ? "/" + timeFrame : ""}`}
              className="inline-flex items-center text-sm text-[#000000] hover:underline"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back To {bankInfo.bankName} Car Finance Calculator
            </Link>
            
            <ShareButton 
              title={`${bankInfo.bankName} Car Finance ${formattedCurrencyForTitle} ${timeFrame === "monthly" ? "Monthly" : "Annual"} Payment - SalaryList`} 
              variant="outline"
            />
          </div>

          {/* Title Section */}
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#333] mb-4">
              {bankInfo.bankName} Car Finance Calculator On {formatCurrency(currentVehiclePrice)} {timeFrame === "monthly" ? "Monthly" : "Annual"} Payment
            </h1>
          </div>

          {/* Calculator Section */}
          <div className="mb-6">
            <CarLoanDetailCalculator 
              timeFrame={timeFrame}
              onTimeFrameChange={handleTimeFrameChange}
              initialVehiclePrice={carPrice.toString()}
              initialDownPayment={carDownPayment.toString()}
              initialInterestRate={carInterestRate.toString()}
              initialLoanTerm={carLoanTerm.toString()}
              initialBalloonPayment={carBalloonPayment.toString()}
              onLoanChange={handleLoanChange}
            />
          </div>

          {loanResult && (
            <>
              {/* Combined Loan Overview and Detailed Breakdown Section */}
              <div className="bg-white p-6 sm:p-8 rounded-md shadow-sm mb-8">
                <h2 className="text-xl font-semibold mb-4">Car Finance Overview & Breakdown</h2>
                
                <div className="prose prose-sm sm:prose max-w-none mb-6">
                  <p>
                    Your {bankInfo.displayName} car finance of {formatCurrency(loanResult.vehiclePrice)} with a down payment of {formatCurrency(loanResult.downPayment)} at {loanResult.interestRate}% interest rate for {loanResult.termDisplay} will require {timeFrame === "monthly" ? "monthly" : "annual"} payments of {formatCurrency(loanResult.payment)}. 
                    The total interest you'll pay over the life of the loan is {formatCurrency(loanResult.totalInterest)}, making your total repayment {formatCurrency(loanResult.totalRepayment)}.
                  </p>
                </div>
                
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Description</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-b border-gray-200">
                      <TableCell>Vehicle Price</TableCell>
                      <TableCell className="text-right">{formatCurrency(loanResult.vehiclePrice)}</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-200">
                      <TableCell>Down Payment</TableCell>
                      <TableCell className="text-right">{formatCurrency(loanResult.downPayment)}</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-200">
                      <TableCell>Loan Amount</TableCell>
                      <TableCell className="text-right">{formatCurrency(loanResult.vehiclePrice - loanResult.downPayment)}</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-200">
                      <TableCell>Interest Rate</TableCell>
                      <TableCell className="text-right">{loanResult.interestRate}%</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-200">
                      <TableCell>Loan Term</TableCell>
                      <TableCell className="text-right">{loanResult.termDisplay}</TableCell>
                    </TableRow>
                    {loanResult.balloonPayment > 0 && (
                      <TableRow className="border-b border-gray-200">
                        <TableCell>Balloon Payment</TableCell>
                        <TableCell className="text-right">{formatCurrency(loanResult.balloonPayment)}</TableCell>
                      </TableRow>
                    )}
                    <TableRow className="font-medium border-b border-gray-200">
                      <TableCell>{timeFrame === "monthly" ? "Monthly" : "Annual"} Payment</TableCell>
                      <TableCell className="text-right">{formatCurrency(loanResult.payment)}</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-200">
                      <TableCell>Total Interest</TableCell>
                      <TableCell className="text-right">{formatCurrency(loanResult.totalInterest)}</TableCell>
                    </TableRow>
                    <TableRow className="bg-gray-50 font-medium border-b border-gray-200">
                      <TableCell>Total Repayment</TableCell>
                      <TableCell className="text-right">{formatCurrency(loanResult.totalRepayment)}</TableCell>
                    </TableRow>
                    {timeFrame === "yearly" && (
                      <TableRow className="bg-gray-50">
                        <TableCell>Monthly Payment</TableCell>
                        <TableCell className="text-right">{formatCurrency(Math.round(loanResult.payment / 12))}</TableCell>
                      </TableRow>
                    )}
                    {timeFrame === "monthly" && (
                      <TableRow className="bg-gray-50">
                        <TableCell>Annual Payment</TableCell>
                        <TableCell className="text-right">{formatCurrency(loanResult.payment * 12)}</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </>
          )}

          <p className="text-sm text-gray-500 text-center">
            <em><strong>{bankInfo.bankName === "Capitec Bank" ? "Capitec Bank car finance rates may vary based on your credit profile, loan terms, and market conditions. Contact Capitec Bank for personalized rates." : "Car finance rates may vary based on your credit profile, loan terms, and market conditions. Contact your preferred lender for personalized rates."}</strong></em>
          </p>
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

export default CarLoanDetail;
