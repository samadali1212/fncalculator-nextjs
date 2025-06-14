
import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import AdSense from "@/components/AdSense";
import OvulationCalculator from "@/components/OvulationCalculator";
import OvulationCollapsible from "@/components/OvulationCollapsible";

const Ovulation = () => {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>Ovulation Calculator - Track Your Fertile Days</title>
        <meta name="description" content="Free ovulation calculator to track your fertile days and ovulation period. Calculate your most fertile days for conception planning in Tanzania." />
        <meta name="keywords" content="ovulation calculator, fertile days, conception planning, fertility tracker, menstrual cycle, Tanzania fertility" />
        <link rel="canonical" href="https://denilagari.com/ovulation" />
      </Helmet>

      <div className="min-h-screen bg-[#f6f6f0]">
        <Header />
        
        <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
          <h1 className="text-3xl font-bold mb-2">Ovulation Calculator</h1>
          <p className="text-gray-600 mb-8">
            Calculate your ovulation period and fertile days to plan for conception or understand your menstrual cycle better. 
            Our free ovulation calculator helps you identify your most fertile days based on your menstrual cycle length and last period date.
          </p>

          {/* Ovulation Calculator Component */}
          <OvulationCalculator />

          <p className="text-gray-600 mb-8">
            <em>Ovulation calculations are estimates based on average cycle patterns. Individual cycles may vary. Consult healthcare professionals for personalized fertility advice.</em>
          </p>

          {/* AdSense */}
          <div className="mb-8">
            <AdSense 
              slot="1234567890"
              format="auto"
              responsive={true}
            />
          </div>

          {/* Ovulation Information Collapsibles */}
          <OvulationCollapsible />

          {/* Information Section */}
          <div className="bg-white rounded-sm shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              About Ovulation Calculator
            </h2>
            
            <div className="prose prose-sm max-w-none">
              <p className="text-gray-600 mb-4">
                Ovulation is the process when a mature egg is released from the ovary and becomes available for fertilization. 
                This typically occurs around day 14 of a 28-day menstrual cycle, but can vary based on individual cycle length.
              </p>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How Ovulation is Calculated</h3>
              <ul className="text-gray-600 mb-4 list-disc pl-5">
                <li><strong>Ovulation Day:</strong> Usually occurs 14 days before the next expected period</li>
                <li><strong>Fertile Window:</strong> 5 days before ovulation + ovulation day + 1 day after</li>
                <li><strong>Peak Fertility:</strong> 2-3 days leading up to and including ovulation day</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">Menstrual Cycle Phases</h3>
              <ul className="text-gray-600 mb-4 list-disc pl-5">
                <li><strong>Menstrual Phase:</strong> Days 1-5 (bleeding period)</li>
                <li><strong>Follicular Phase:</strong> Days 1-13 (egg development)</li>
                <li><strong>Ovulation:</strong> Around day 14 (egg release)</li>
                <li><strong>Luteal Phase:</strong> Days 15-28 (preparation for pregnancy)</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">Important Notes</h3>
              <p className="text-gray-600">
                Cycle lengths can vary from 21-35 days and still be considered normal. Stress, illness, travel, 
                and lifestyle changes can affect ovulation timing. For accurate fertility tracking, consider 
                combining calendar methods with other fertility awareness techniques.
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

export default Ovulation;
