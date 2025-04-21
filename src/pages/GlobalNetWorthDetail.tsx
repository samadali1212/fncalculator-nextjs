
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Share2, Asterisk, RefreshCw } from "lucide-react";
import Header from "../components/Header";
import SEO from "../components/SEO";
import { Button } from "@/components/ui/button";
import { findPersonBySlug, formatNetWorth } from "../utils/globalNetWorthData";
import SEOParagraph from "../components/SEOParagraph";

const GlobalNetWorthDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [person, setPerson] = useState<any>(null);
  
  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      if (slug) {
        const foundPerson = findPersonBySlug(slug);
        setPerson(foundPerson);
      }
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: a0 }}
          animate={{ opacity: 1 }}
          className="w-16 h-16 border-4 border-blog-accent border-t-transparent rounded-full animate-spin"
        ></motion.div>
      </div>
    );
  }

  if (!person) {
    return (
      <div className="min-h-screen bg-[#f6f6f0] flex items-center justify-center">
        <Header />
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Person Not Found</h2>
          <p className="mb-4">The person you're looking for doesn't exist in our database.</p>
          <Button onClick={() => navigate('/global-net-worth')}>
            Back to Global Net Worth
          </Button>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Global Net Worth", path: "/global-net-worth" },
    { name: person.name, path: `/global-net-worth/${slug}`, current: true }
  ];

  const pageTitle = `${person.name} Net Worth | Global Figures`;
  const pageDescription = `Discover ${person.name}'s net worth, career, investments, and wealth accumulation details. Learn how ${person.name} built their fortune in ${person.industry || 'business'}.`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={`/global-net-worth/${slug}`}
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="mb-6">
          <Link 
            to="/global-net-worth"
            className="inline-flex items-center text-sm text-[#000000] hover:underline"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Net Worth List
          </Link>
        </div>
        
        <div className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-gray-200">
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="w-full md:w-1/3">
              {person.imageUrl ? (
                <img 
                  src={person.imageUrl}
                  alt={person.name}
                  className="w-full aspect-square object-cover rounded-md shadow-sm border border-gray-200"
                />
              ) : (
                <div className="w-full aspect-square bg-gray-100 rounded-md shadow-sm border border-gray-200 flex items-center justify-center">
                  <span className="text-4xl font-medium text-gray-400">
                    {person.name.split(' ').map((n: string) => n[0]).join('').toUpperCase()}
                  </span>
                </div>
              )}
            </div>
            
            <div className="w-full md:w-2/3">
              <h1 className="text-3xl font-bold mb-2">{person.name}</h1>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {person.industry && (
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                    {person.industry}
                  </span>
                )}
                {person.country && (
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                    {person.country}
                  </span>
                )}
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-1">Net Worth</h2>
                <div className="text-3xl font-bold text-blog-accent">
                  {formatNetWorth(person.netWorth, person.currency || 'USD')}
                </div>
                <div className="text-sm text-gray-500 mt-1">Estimated Net Worth</div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {person.occupation && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Occupation</h3>
                    <div className="text-base">{person.occupation}</div>
                  </div>
                )}
                
                {person.company && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Company</h3>
                    <div className="text-base">{person.company}</div>
                  </div>
                )}
                
                {person.age && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Age</h3>
                    <div className="text-base">{person.age} years</div>
                  </div>
                )}
                
                {person.birthDate && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Born</h3>
                    <div className="text-base">{person.birthDate}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">About {person.name}</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                {person.about || `${person.name} is known for their achievements in ${person.industry || 'business'} and has accumulated significant wealth throughout their career.`}
              </p>
              
              <p className="mb-4">
                {person.wealthSource || `${person.name}'s wealth primarily comes from their work as ${person.occupation || 'a business person'}${person.company ? ` with ${person.company}` : ''}.`}
              </p>
              
              <SEOParagraph
                branchCode={null}
                bank={null}
              />
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

export default GlobalNetWorthDetail;
