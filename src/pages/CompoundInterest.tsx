
import { motion } from "framer-motion";
import Header from "../components/Header";
import SEO from "../components/SEO";
import CompoundInterestCalculator from "../components/CompoundInterestCalculator";

const CompoundInterest = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title="Compound Interest Calculator South Africa - Investment Growth Calculator" 
        description="Calculate compound interest and investment growth with our comprehensive calculator. See how your money grows over time with regular deposits and compound interest."
        canonicalUrl="/compound-interest"
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-2">Compound Interest Calculator</h1>
        <p className="text-gray-600 mb-8">
          Calculate how your investments grow over time with compound interest. 
          Our calculator shows you the power of compound interest with regular deposits, 
          helping you plan your savings and investment strategy. Perfect for retirement planning, 
          education savings, and long-term financial goals.
        </p>

        {/* Compound Interest Calculator */}
        <CompoundInterestCalculator />

        <p className="text-gray-600 mb-8">
          <em><strong>Note: This calculator assumes a fixed interest rate and regular deposits. Actual investment returns may vary based on market conditions and investment choices.</strong></em>
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

export default CompoundInterest;
