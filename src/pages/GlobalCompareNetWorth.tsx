import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronLeft, ExternalLink, DollarSign, Calendar, Globe, Award, Building2, Info } from "lucide-react";
import Header from "../components/Header";
import SEO from "../components/SEO";
import { Button } from "@/components/ui/button";
import { findPersonBySlug, NetWorthPerson, formatNetWorth, formatAge } from "../utils/networth";

interface Params {
  person1Slug?: string;
  person2Slug?: string;
}

const GlobalCompareNetWorth: React.FC = () => {
  const { person1Slug, person2Slug } = useParams<Params>();
  const [person1, setPerson1] = useState<NetWorthPerson | undefined>(undefined);
  const [person2, setPerson2] = useState<NetWorthPerson | undefined>(undefined);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const loadPeople = async () => {
      if (person1Slug && person2Slug) {
        const p1 = findPersonBySlug(person1Slug);
        const p2 = findPersonBySlug(person2Slug);
        setPerson1(p1);
        setPerson2(p2);
      }
      setIsLoading(false);
    };

    loadPeople();
  }, [person1Slug, person2Slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-16 h-16 border-4 border-blog-accent border-t-transparent rounded-full animate-spin"
        ></motion.div>
      </div>
    );
  }

  if (!person1 || !person2) {
    return (
      <div className="min-h-screen bg-[#f6f6f0]">
        <Header />
        <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-3xl">
          <div className="mb-6">
            <Link
              to="/compare"
              className="inline-flex items-center text-sm text-[#000000] hover:underline"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Comparison List
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center h-96">
            <h2 className="text-2xl font-semibold mb-4">
              One or more individuals not found
            </h2>
            <p className="text-gray-600">
              Please check the URLs or try different comparisons.
            </p>
            <Button
              onClick={() => navigate("/compare")}
              className="mt-4 bg-blog-accent hover:bg-blog-accent-hover text-white"
            >
              Go to Comparison List
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO
        title={`Net Worth Comparison: ${person1.name} vs ${person2.name}`}
        description={`Compare the net worth, age, industry, and more between ${person1.name} and ${person2.name}.`}
        canonicalUrl={`/compare/${person1.slug}-vs-${person2.slug}`}
      />
      <Header />

      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-5xl">
        <div className="mb-6">
          <Link
            to="/compare"
            className="inline-flex items-center text-sm text-[#000000] hover:underline"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Comparison List
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-center mb-8">
          Net Worth Comparison
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">{person1.name}</h2>
            <div className="flex items-center mb-2">
              <DollarSign className="h-5 w-5 mr-2 text-gray-500" />
              <span>Net Worth: {formatNetWorth(person1.netWorth, person1.currency)}</span>
            </div>
            <div className="flex items-center mb-2">
              <Calendar className="h-5 w-5 mr-2 text-gray-500" />
              <span>Age: {formatAge(person1.dateOfBirth)} years</span>
            </div>
            <div className="flex items-center mb-2">
              <Globe className="h-5 w-5 mr-2 text-gray-500" />
              <span>Country: {person1.country}</span>
            </div>
            <div className="flex items-center mb-2">
              <Award className="h-5 w-5 mr-2 text-gray-500" />
              <span>Industry: {person1.industry}</span>
            </div>
            <div className="flex items-center mb-2">
              <Building2 className="h-5 w-5 mr-2 text-gray-500" />
              <span>Company: {person1.company || "N/A"}</span>
            </div>
            <div className="flex items-center">
              <Info className="h-5 w-5 mr-2 text-gray-500" />
              <Link
                to={`/net-worth/${person1.slug}`}
                className="text-blog-accent hover:underline"
              >
                More Info <ExternalLink className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">{person2.name}</h2>
            <div className="flex items-center mb-2">
              <DollarSign className="h-5 w-5 mr-2 text-gray-500" />
              <span>Net Worth: {formatNetWorth(person2.netWorth, person2.currency)}</span>
            </div>
            <div className="flex items-center mb-2">
              <Calendar className="h-5 w-5 mr-2 text-gray-500" />
              <span>Age: {formatAge(person2.dateOfBirth)} years</span>
            </div>
            <div className="flex items-center mb-2">
              <Globe className="h-5 w-5 mr-2 text-gray-500" />
              <span>Country: {person2.country}</span>
            </div>
            <div className="flex items-center mb-2">
              <Award className="h-5 w-5 mr-2 text-gray-500" />
              <span>Industry: {person2.industry}</span>
            </div>
            <div className="flex items-center mb-2">
              <Building2 className="h-5 w-5 mr-2 text-gray-500" />
              <span>Company: {person2.company || "N/A"}</span>
            </div>
            <div className="flex items-center">
              <Info className="h-5 w-5 mr-2 text-gray-500" />
              <Link
                to={`/net-worth/${person2.slug}`}
                className="text-blog-accent hover:underline"
              >
                More Info <ExternalLink className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-300 py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center text-[#828282] text-sm">
          <p>
            &copy; {new Date().getFullYear()} Sassa Insider. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default GlobalCompareNetWorth;
