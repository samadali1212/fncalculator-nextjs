
import { motion } from "framer-motion";
import Header from "../components/Header";
import SEO from "../components/SEO";
import VATCalculator from "../components/VATCalculator";

const VAT = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title="VAT Calculator - 15.5% South Africa Tax Calculator" 
        description="Calculate VAT inclusive and exclusive amounts with our South Africa VAT calculator. Current VAT rate of 15.5% with instant calculations for tax planning and business needs."
        canonicalUrl="/vat"
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-2">VAT Calculator</h1>
        <p className="text-gray-600 mb-8">
          Calculate VAT inclusive and exclusive amounts with our South Africa VAT calculator. 
          Current VAT rate of 15.5% with instant calculations for accurate tax planning, 
          business accounting, and financial management needs.
        </p>

        <VATCalculator />

        <div className="mt-8 bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4">How to Use the VAT Calculator</h2>
          <div className="prose prose-sm max-w-none">
            <p className="mb-4">
              Our VAT calculator provides two calculation methods:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>VAT Exclusive:</strong> Use this when you have a VAT-inclusive amount and want to find the VAT-exclusive amount and VAT portion.</li>
              <li><strong>VAT Inclusive:</strong> Use this when you have a VAT-exclusive amount and want to add VAT to get the total amount.</li>
            </ul>
            <p className="mt-4">
              Simply enter any amount and both calculations will be displayed automatically. 
              The current VAT rate in South Africa is 15.5%.
            </p>
          </div>
        </div>

        <p className="text-gray-600 mt-8 text-center">
          <em>VAT rates are subject to change. Please consult with SARS or a tax professional for the most current rates and regulations.</em>
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

export default VAT;
