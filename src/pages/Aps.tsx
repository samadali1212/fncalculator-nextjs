
import { motion } from "framer-motion";
import { Calculator, GraduationCap, BookOpen } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import APSCalculator from "@/components/APSCalculator";
import AdSense from "@/components/AdSense";

const Aps = () => {
  return (
    <div className="min-h-screen bg-[#f6f6f0]">
      <Helmet>
        <title>APS Calculator South Africa | Calculate Your Admission Point Score</title>
        <meta 
          name="description" 
          content="Calculate your APS (Admission Point Score) for South African universities. Support for both standard and university-specific point scales. Essential for matric students applying to university." 
        />
        <meta name="keywords" content="APS calculator, admission point score, South Africa, university admission, matric results, education calculator" />
        <link rel="canonical" href="https://fncalculator.com/aps" />
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 pt-20 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calculator className="h-8 w-8 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                APS Calculator
              </h1>
            </div>
            <p className="text-lg text-gray-600">
              Calculate your Admission Point Score for South African universities
            </p>
          </div>

          {/* Calculator Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <APSCalculator />
          </div>

          {/* AdSense */}
          <div className="my-8">
            <AdSense slot="9889084223" />
          </div>

          {/* What is APS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-semibold text-gray-900">What is APS?</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Admission Point Score (APS) is used by South African universities to assess 
              whether students meet the minimum requirements for admission to specific programs. 
              It's calculated based on your best six matric subject results.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Required Subjects:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Home Language (compulsory)</li>
                  <li>• First Additional Language (compulsory)</li>
                  <li>• Mathematics or Mathematical Literacy (compulsory)</li>
                  <li>• Three elective subjects</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Common Requirements:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Medicine: 35+ APS</li>
                  <li>• Engineering: 30+ APS</li>
                  <li>• Commerce: 25+ APS</li>
                  <li>• Humanities: 20+ APS</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Important Notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-blue-50 border border-blue-200 rounded-lg p-6"
          >
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Important Notes</h3>
            <ul className="text-blue-800 space-y-2 text-sm">
              <li>• Different universities may use different APS calculation methods</li>
              <li>• Some universities use a 7-point scale instead of the standard 8-point scale</li>
              <li>• Life Orientation may or may not be included depending on the university</li>
              <li>• Always check your preferred university's specific admission requirements</li>
            </ul>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default Aps;
