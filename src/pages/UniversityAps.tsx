
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Calculator, GraduationCap, BookOpen, ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import UniversityAPSCalculator from "@/components/UniversityAPSCalculator";
import AdSense from "@/components/AdSense";
import { getUniversityById } from "@/utils/universitiesData";

const UniversityAps = () => {
  const { universityId } = useParams<{ universityId: string }>();
  const university = universityId ? getUniversityById(universityId) : null;

  if (!university) {
    return (
      <div className="min-h-screen bg-[#f6f6f0] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">University Not Found</h1>
          <p className="text-gray-600 mb-4">The university you're looking for doesn't exist in our database.</p>
          <a href="/aps" className="text-primary hover:underline">Go back to APS Calculator</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f6f0]">
      <Helmet>
        <title>{university.fullName} APS Calculator | Calculate Your Admission Point Score</title>
        <meta 
          name="description" 
          content={`Calculate your APS (Admission Point Score) for ${university.fullName}. Customized for ${university.name}'s specific requirements and ${university.apsScale === "standard" ? "7-point" : "8-point"} scale.`}
        />
        <meta name="keywords" content={`${university.name} APS calculator, ${university.fullName}, admission point score, South Africa, university admission, matric results`} />
        <link rel="canonical" href={`https://fncalculator.com/aps/${university.id}`} />
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
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {university.name} APS Calculator
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
              Calculate your Admission Point Score (APS) specifically for {university.fullName}.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-2">
              <span>{university.location}</span>
              <span>•</span>
              <a 
                href={university.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-primary hover:underline"
              >
                Visit Website <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              {university.description}
            </p>
          </div>

          {/* Calculator Section */}
          <UniversityAPSCalculator university={university} />

          {/* AdSense */}
          <div className="my-8">
            <AdSense slot="9889084223" />
          </div>

          {/* University-specific Information */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold text-gray-900">{university.name} Requirements</h2>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">APS Scale:</span>
                  <span className="font-medium">{university.apsScale === "standard" ? "7-point (Standard)" : "8-point (University-specific)"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Life Orientation:</span>
                  <span className="font-medium">{university.includesLifeOrientation ? "Required" : "Optional"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium">{university.location}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold text-gray-900">Faculty Requirements</h2>
              </div>
              <div className="space-y-2 text-sm">
                {Object.entries(university.minApsRequirements).map(([faculty, minAps]) => (
                  <div key={faculty} className="flex justify-between">
                    <span className="text-gray-600">{faculty}:</span>
                    <span className="font-medium">{minAps} APS</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Important Notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8"
          >
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Important Notes for {university.name}</h3>
            <ul className="text-blue-800 space-y-2 text-sm">
              <li>• This calculator is specifically configured for {university.fullName}</li>
              <li>• Uses {university.apsScale === "standard" ? "7-point standard" : "8-point university-specific"} scale</li>
              <li>• Life Orientation is {university.includesLifeOrientation ? "required" : "optional"} for this university</li>
              <li>• APS requirements shown are general guidelines - specific programs may have different requirements</li>
              <li>• Always check the official {university.name} website for the most current admission requirements</li>
            </ul>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default UniversityAps;
