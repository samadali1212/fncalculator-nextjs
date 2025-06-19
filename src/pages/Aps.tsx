
import { motion } from "framer-motion";
import { Calculator, GraduationCap, BookOpen, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import APSCalculator from "@/components/APSCalculator";
import AdSense from "@/components/AdSense";
import { southAfricanUniversities } from "@/utils/universitiesData";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
          className="max-w-4xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calculator className="h-8 w-8 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                APS Calculator
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Calculate your Admission Point Score (APS) for South African universities. 
              Choose between standard or university-specific calculation methods.
            </p>
          </div>

          {/* General Calculator Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">General APS Calculator</h2>
            <p className="text-sm text-gray-600 text-center mb-6">
              Use this calculator if you want to compare different scales or if your university isn't listed above.
            </p>
            <APSCalculator />
          </div>

          {/* All Universities Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">All South African Universities</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>University</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>APS Scale</TableHead>
                    <TableHead>Life Orientation</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {southAfricanUniversities.map((university) => (
                    <TableRow key={university.id}>
                      <TableCell className="font-medium">
                        <div>
                          <div className="font-semibold">{university.name}</div>
                          <div className="text-sm text-gray-600">{university.fullName}</div>
                        </div>
                      </TableCell>
                      <TableCell>{university.location}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded text-xs ${
                          university.apsScale === "standard" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-blue-100 text-blue-800"
                        }`}>
                          {university.apsScale === "standard" ? "7-point" : "8-point"}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded text-xs ${
                          university.includesLifeOrientation 
                            ? "bg-yellow-100 text-yellow-800" 
                            : "bg-gray-100 text-gray-800"
                        }`}>
                          {university.includesLifeOrientation ? "Required" : "Optional"}
                        </span>
                      </TableCell>
                      <TableCell>
                        <a
                          href={`/aps/${university.id}`}
                          className="text-primary hover:underline text-sm font-medium"
                        >
                          Calculate
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </motion.div>

          {/* AdSense */}
          <div className="my-8">
            <AdSense slot="9889084223" />
          </div>

          {/* Information Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold text-gray-900">What is APS?</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The Admission Point Score (APS) is used by South African universities to assess 
                whether students meet the minimum requirements for admission to specific programs. 
                It's calculated based on your best six matric subject results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold text-gray-900">Required Subjects</h2>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Home Language (compulsory)</li>
                <li>• First Additional Language (compulsory)</li>
                <li>• Mathematics or Mathematical Literacy (compulsory)</li>
                <li>• Three elective subjects</li>
                <li>• Life Orientation (optional for some universities)</li>
              </ul>
            </motion.div>
          </div>

          {/* Important Notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8"
          >
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Important Notes</h3>
            <ul className="text-blue-800 space-y-2 text-sm">
              <li>• Different universities may use different APS calculation methods</li>
              <li>• Some universities use a 7-point scale instead of the standard 8-point scale</li>
              <li>• Life Orientation may or may not be included depending on the university</li>
              <li>• Always check your preferred university's specific admission requirements</li>
              <li>• APS requirements vary by faculty and degree program</li>
            </ul>
          </motion.div>

          {/* University Examples */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">APS Requirements Examples</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Common APS Requirements:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Medicine: 35+ APS</li>
                  <li>• Engineering: 30+ APS</li>
                  <li>• Commerce: 25+ APS</li>
                  <li>• Humanities: 20+ APS</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Note:</h4>
                <p className="text-gray-600">
                  These are general examples. Actual requirements vary by university 
                  and specific program. Always consult official university prospectuses 
                  for accurate requirements.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default Aps;
