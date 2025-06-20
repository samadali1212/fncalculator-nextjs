
import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import AdSense from "@/components/AdSense";
import EddCalculator from "@/components/EddCalculator";
import EddCollapsible from "@/components/EddCollapsible";

const Edd = () => {
  const location = useLocation();
  const [calculationMethod, setCalculationMethod] = useState<"lmp" | "conception">("lmp");

  const handleMethodChange = (value: string) => {
    if (value === "lmp" || value === "conception") {
      setCalculationMethod(value);
    }
  };

  return (
    <>

      <div className="min-h-screen bg-[#f6f6f0]">
        <Header />
        
        <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
          <h1 className="text-3xl font-bold mb-2">Pregnancy Due Dates Calculator</h1>
          <p className="text-gray-600 mb-8">
            Calculate your Expected Due Date (EDD) to plan for your baby's arrival. 
            Use our free pregnancy calculator with both last menstrual period and conception date methods for accurate delivery estimates. Gestational age estimates how far along you are in your pregnancy. Your health care provider uses the gestational age in weeks (rather than months) to plan your care during pregnancy. Most pregnancies last about 40 weeks from the first day of the last menstrual period.
          </p>

          {/* EDD Calculator Component */}
          <EddCalculator 
            calculationMethod={calculationMethod}
            onMethodChange={handleMethodChange}
          />

          <p className="text-gray-600 mb-8">
            <em>EDD calculations are estimates based on average pregnancy duration. Consult healthcare professionals for personalized prenatal care and accurate assessments.</em>
          </p>

          {/* AdSense */}
          <div className="mb-8">
            <AdSense 
              slot="1234567890"
              format="auto"
              responsive={true}
            />
          </div>

          {/* EDD Information Collapsibles */}
          <EddCollapsible />

          {/* Information Section */}
          <div className="bg-white rounded-sm shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              About EDD Calculator
            </h2>
            
            <div className="prose prose-sm max-w-none">
              <p className="text-gray-600 mb-4">
                Expected Due Date (EDD) is the estimated date when your baby will be born. It's calculated based on 
                the average pregnancy duration of 280 days (40 weeks) from the last menstrual period.
              </p>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How EDD is Calculated</h3>
              <ul className="text-gray-600 mb-4 list-disc pl-5">
                <li><strong>LMP Method:</strong> EDD = Last Menstrual Period + 280 days</li>
                <li><strong>Conception Method:</strong> EDD = Conception Date + 266 days</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pregnancy Trimesters</h3>
              <ul className="text-gray-600 mb-4 list-disc pl-5">
                <li><strong>First Trimester:</strong> Weeks 1-12</li>
                <li><strong>Second Trimester:</strong> Weeks 13-26</li>
                <li><strong>Third Trimester:</strong> Weeks 27-40</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">Important Notes</h3>
              <p className="text-gray-600">
                Only about 5% of babies are born on their exact due date. Most babies are born within 
                2 weeks before or after the EDD. Always consult healthcare professionals for comprehensive 
                prenatal care and monitoring throughout your pregnancy.
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

export default Edd;
