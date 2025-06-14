
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calculator } from "lucide-react";
import Header from "../components/Header";
import SEO from "../components/SEO";
import CrdbCalculator from "../components/CrdbCalculator";
import { Button } from "@/components/ui/button";
import { 
  getCrdbLoanCalculation, 
  formatCurrency,
  CrdbTimeFrame 
} from "../utils/loanCalculator";

const CrdbDetail = () => {
  const { amount, rate, term } = useParams();
  const navigate = useNavigate();
  
  const [timeFrame, setTimeFrame] = useState<CrdbTimeFrame>("monthly");
  
  // Determine timeframe from URL
  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes("/yearly/")) {
      setTimeFrame("yearly");
    } else {
      setTimeFrame("monthly");
    }
  }, []);

  // Parse parameters
  const loanAmount = parseInt(amount || "0");
  const interestRate = parseFloat(rate || "0");
  const loanTerm = parseInt(term || "0");

  // Calculate loan details
  const loanResult = getCrdbLoanCalculation(loanAmount, interestRate, loanTerm, timeFrame);

  const handleTimeFrameChange = (value: string) => {
    if (value === "yearly" || value === "monthly") {
      setTimeFrame(value as CrdbTimeFrame);
      // Convert term when switching timeframes
      let convertedTerm = loanTerm;
      if (timeFrame === "monthly" && value === "yearly") {
        convertedTerm = Math.round(loanTerm / 12);
      } else if (timeFrame === "yearly" && value === "monthly") {
        convertedTerm = loanTerm * 12;
      }
      navigate(`/crdb/${value}/${loanAmount}/${interestRate}/${convertedTerm}`);
    }
  };

  if (!amount || !rate || !term || loanAmount <= 0 || interestRate <= 0 || loanTerm <= 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-[#f6f6f0]"
      >
        <Header />
        <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-4">Invalid Loan Parameters</h1>
            <p className="text-gray-600 mb-6">
              The loan parameters provided are invalid. Please return to the calculator.
            </p>
            <Link to="/crdb">
              <Button>
                <Calculator className="mr-2 h-4 w-4" />
                Back to Calculator
              </Button>
            </Link>
          </div>
        </main>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title={`CRDB Loan ${formatCurrency(loanAmount)} - ${timeFrame === "monthly" ? "Monthly" : "Annual"} Payment ${formatCurrency(loanResult.payment)}`}
        description={`Calculate your CRDB Bank personal loan of ${formatCurrency(loanAmount)} at ${interestRate}% interest rate. ${timeFrame === "monthly" ? "Monthly" : "Annual"} payment of ${formatCurrency(loanResult.payment)} over ${loanResult.termDisplay}.`}
        canonicalUrl={`/crdb/${timeFrame}/${loanAmount}/${interestRate}/${loanTerm}`}
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        {/* Back Navigation */}
        <Link 
          to={`/crdb${timeFrame !== "monthly" ? "/" + timeFrame : ""}`}
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 text-sm"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to CRDB Calculator
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            CRDB Loan Calculator - {formatCurrency(loanAmount)}
          </h1>
          <p className="text-gray-600">
            Detailed breakdown for your CRDB Bank personal loan of {formatCurrency(loanAmount)} at {interestRate}% interest rate over {loanResult.termDisplay}.
          </p>
        </div>

        {/* Loan Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-sm border"
          >
            <div className="text-sm text-gray-500 mb-1">Loan Amount</div>
            <div className="text-xl font-bold text-gray-900">{formatCurrency(loanResult.loanAmount)}</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-sm border-2 border-primary"
          >
            <div className="text-sm text-gray-500 mb-1">{timeFrame === "monthly" ? "Monthly" : "Annual"} Payment</div>
            <div className="text-xl font-bold text-primary">{formatCurrency(loanResult.payment)}</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-sm border"
          >
            <div className="text-sm text-gray-500 mb-1">Total Interest</div>
            <div className="text-xl font-bold text-red-600">{formatCurrency(loanResult.totalInterest)}</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-sm border"
          >
            <div className="text-sm text-gray-500 mb-1">Total Repayment</div>
            <div className="text-xl font-bold text-gray-900">{formatCurrency(loanResult.totalRepayment)}</div>
          </motion.div>
        </div>

        {/* Loan Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-sm border mb-8"
        >
          <h2 className="text-xl font-semibold mb-4">Loan Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Loan Amount:</span>
              <span className="font-medium">{formatCurrency(loanResult.loanAmount)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Interest Rate:</span>
              <span className="font-medium">{loanResult.interestRate}%</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Loan Term:</span>
              <span className="font-medium">{loanResult.termDisplay}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">{timeFrame === "monthly" ? "Monthly" : "Annual"} Payment:</span>
              <span className="font-medium text-primary">{formatCurrency(loanResult.payment)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Total Interest:</span>
              <span className="font-medium text-red-600">{formatCurrency(loanResult.totalInterest)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Total Repayment:</span>
              <span className="font-medium">{formatCurrency(loanResult.totalRepayment)}</span>
            </div>
          </div>
        </motion.div>

        {/* Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white p-6 rounded-lg shadow-sm border mb-8"
        >
          <h2 className="text-xl font-semibold mb-4">Adjust Your Loan</h2>
          <CrdbCalculator 
            timeFrame={timeFrame}
            onTimeFrameChange={handleTimeFrameChange}
            initialAmount={loanAmount.toString()}
            initialRate={interestRate.toString()}
            initialTerm={loanTerm.toString()}
          />
        </motion.div>

        <p className="text-sm text-gray-500 text-center">
          <em><strong>Interest rates may vary based on your credit profile and loan terms. Contact CRDB Bank for personalized rates.</strong></em>
        </p>
      </main>

      <footer className="border-t border-gray-300 py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center text-[#828282] text-sm">
          <p>
            &copy; {new Date().getFullYear()} SalaryList. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default CrdbDetail;
