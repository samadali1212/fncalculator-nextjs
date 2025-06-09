import { useParams, Navigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, GraduationCap, ArrowLeft, List, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { terms2025 } from "../data/terms";
import EventPageLink from "@/components/EventPageLink";
import Header from "../components/Header";
import SEO from "../components/SEO";
import ShareButton from "../components/ShareButton";
import AdSense from "../components/AdSense";
import CountdownTimer from "../components/CountdownTimer";
import { usePageReload } from "../hooks/usePageReload";
import { useState, useEffect } from "react";

const TermPage = () => {
  const { termId } = useParams();
  const location = useLocation();
  const { pageKey } = usePageReload();
  const [isLoading, setIsLoading] = useState(true);
  
  const term = terms2025.find(t => t.id === termId);
  
  // Dynamically determine province from current route
  const getProvinceFromRoute = () => {
    const pathname = location.pathname;
    // Check if we're on a province-specific route by looking at the referrer or current path structure
    const currentPath = window.location.pathname;
    const referrer = document.referrer;
    
    // Extract province from referrer if coming from a province page
    if (referrer.includes('/terms/western-cape')) return 'Western Cape';
    if (referrer.includes('/terms/gauteng')) return 'Gauteng';
    if (referrer.includes('/terms/kwazulu-natal')) return 'KwaZulu-Natal';
    if (referrer.includes('/terms/eastern-cape')) return 'Eastern Cape';
    if (referrer.includes('/terms/mpumalanga')) return 'Mpumalanga';
    if (referrer.includes('/terms/limpopo')) return 'Limpopo';
    if (referrer.includes('/terms/north-west')) return 'North West';
    if (referrer.includes('/terms/northern-cape')) return 'Northern Cape';
    if (referrer.includes('/terms/free-state')) return 'Free State';
    
    // Check current path structure
    if (currentPath.includes('/terms/western-cape')) return 'Western Cape';
    if (currentPath.includes('/terms/gauteng')) return 'Gauteng';
    if (currentPath.includes('/terms/kwazulu-natal')) return 'KwaZulu-Natal';
    if (currentPath.includes('/terms/eastern-cape')) return 'Eastern Cape';
    if (currentPath.includes('/terms/mpumalanga')) return 'Mpumalanga';
    if (currentPath.includes('/terms/limpopo')) return 'Limpopo';
    if (currentPath.includes('/terms/north-west')) return 'North West';
    if (currentPath.includes('/terms/northern-cape')) return 'Northern Cape';
    if (currentPath.includes('/terms/free-state')) return 'Free State';
    
    // Check session storage for last visited province
    try {
      const lastProvince = sessionStorage.getItem('lastViewedProvince');
      if (lastProvince) return lastProvince;
    } catch (error) {
      console.log('Session storage not available');
    }
    
    return 'Western Cape'; // Default fallback
  };

  const currentProvince = getProvinceFromRoute();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  
  if (!term && !isLoading) {
    return <Navigate to="/terms" replace />;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-ZA', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatDateShort = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-ZA', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(diffDays / 7);
    const days = diffDays % 7;
    
    if (weeks > 0) {
      return days > 0 ? `${weeks} weeks, ${days} days` : `${weeks} weeks`;
    }
    return `${diffDays} days`;
  };

  const getDaysUntil = (dateString) => {
    const targetDate = new Date(dateString);
    const today = new Date();
    const diffTime = targetDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Get related terms (same type)
  const relatedTerms = term ? terms2025.filter(t => 
    t.id !== term.id && t.type === term.type
  ).sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateA.getTime() - dateB.getTime();
  }).slice(0, 15) : [];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f6f6f0]">
        <Header />
        <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
          <div className="mb-6">
            <Skeleton className="h-10 w-32" />
          </div>
          
          <div className="bg-white rounded-sm shadow-sm border border-gray-200 mb-8">
            <Skeleton className="h-24 w-full" />
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
              </div>
              <Skeleton className="h-20 w-full mb-6" />
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!term) {
    return (
      <div className="min-h-screen bg-[#f6f6f0]">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Term Not Found</h1>
            <p className="text-gray-600 mb-4">The school term you're looking for doesn't exist.</p>
            <Button asChild>
              <EventPageLink to="/terms">Back to School Terms</EventPageLink>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const daysUntilStart = getDaysUntil(term.startDate);
  const daysUntilEnd = getDaysUntil(term.endDate);

  return (
    <motion.div
      key={pageKey}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO
        title={`${term.name} ${term.year} - HolidaysDB`}
        description={`Complete information about ${term.name} ${term.year} in ${currentProvince}. Term dates, duration, and important academic calendar details.`}
        canonicalUrl={`/terms/${term.id}`}
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center justify-between"
        >
          <EventPageLink to="/terms" className="inline-flex">
            <Button variant="ghost" className="pl-0 hover:pl-1 transition-all">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to School Terms
            </Button>
          </EventPageLink>

          <ShareButton 
            title={`${term.name} ${term.year} - HolidaysDB`}
            variant="outline"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="bg-white rounded-sm shadow-sm border border-gray-200 mb-8">
            <div className="p-4 border-b border-gray-100 bg-gray-50">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{term.name} {term.year}</h1>
                  <p className="text-gray-600 mt-1">School Term Details</p>
                </div>
                <Badge variant="outline" className={`text-xs ${
                  term.type === 'term' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                }`}>
                  {term.type === 'term' ? 'School Term' : 'School Holiday'}
                </Badge>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 text-gray-500 mr-3" />
                    <div>
                      <span className="text-gray-700 font-medium">Start Date: </span>
                      <span className="text-gray-700">{formatDate(term.startDate)}</span>
                      {daysUntilStart > 0 && (
                        <div className="text-xs text-green-600 mt-1">
                          {daysUntilStart} days from now
                        </div>
                      )}
                      {daysUntilStart <= 0 && daysUntilEnd >= 0 && (
                        <div className="text-xs text-green-600 font-semibold mt-1">
                          Currently active
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 text-gray-500 mr-3" />
                    <div>
                      <span className="text-gray-700 font-medium">End Date: </span>
                      <span className="text-gray-700">{formatDate(term.endDate)}</span>
                      {daysUntilEnd > 0 && (
                        <div className="text-xs text-blue-600 mt-1">
                          {daysUntilEnd} days remaining
                        </div>
                      )}
                      {daysUntilEnd < 0 && (
                        <div className="text-xs text-blue-600 mt-1">
                          Completed
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-gray-500 mr-3" />
                    <span className="text-gray-700">
                      <span className="font-medium">Duration: </span>
                      {calculateDuration(term.startDate, term.endDate)}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 text-gray-500 mr-3" />
                    <span className="text-gray-700">
                      <span className="font-medium">Province: </span>
                      {currentProvince}
                    </span>
                  </div>
                </div>
              </div>
              
              {term.description && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">About this term</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{term.description}</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Countdown Timer Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <CountdownTimer 
            targetDate={daysUntilStart > 0 ? term.startDate : term.endDate}
            targetTime="00:00"
          />
        </motion.div>
        
        {/* Important Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Info className="h-5 w-5 mr-2 text-yellow-600" />
                Important Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-gray-700 space-y-2">
                <p>• Term dates are standardized across South Africa but may vary slightly between schools</p>
                <p>• Always confirm specific dates with your school's academic calendar</p>
                <p>• Public holidays may affect school schedules during term time</p>
                <p>• Some schools may have additional development days or teacher training days</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Related Terms Section */}
        {relatedTerms.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white rounded-sm shadow-sm border border-gray-200">
              <div className="p-4 border-b border-gray-100 bg-gray-50">
                <div className="flex items-center">
                  <List className="h-5 w-5 text-blue-600 mr-2" />
                  <h2 className="text-xl font-semibold text-blue-600">
                    More {term.type === 'term' ? 'School Terms' : 'School Holidays'}
                  </h2>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Discover other {term.type === 'term' ? 'school terms' : 'school holidays'} in South Africa
                </p>
              </div>
              
              <div className="divide-y divide-gray-100">
                {relatedTerms.map((relatedTerm, index) => {
                  const termDate = new Date(relatedTerm.startDate);
                  const month = termDate.toLocaleString('default', { month: 'long' });
                  
                  return (
                    <motion.div
                      key={relatedTerm.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <EventPageLink 
                        to={`/terms/${relatedTerm.id}`}
                        className="block p-4 hover:bg-gray-50 transition-colors group"
                      >
                        {/* Mobile Layout (< md) */}
                        <div className="block md:hidden">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                {relatedTerm.name}
                              </h4>
                              <div className="flex items-center mt-1 text-xs text-gray-500 gap-x-3">
                                <span>{termDate.getDate()} {month}</span>
                                <span>{calculateDuration(relatedTerm.startDate, relatedTerm.endDate)}</span>
                              </div>
                            </div>
                            <div className="ml-2 flex-shrink-0">
                              <Badge variant="outline" className={`text-xs ${
                                relatedTerm.type === 'term' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                              }`}>
                                {relatedTerm.type === 'term' ? 'Term' : 'Holiday'}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">{currentProvince}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="hover:bg-gray-100 px-2 text-xs h-6"
                            >
                              View
                            </Button>
                          </div>
                        </div>

                        {/* Desktop Layout (>= md) */}
                        <div className="hidden md:grid md:grid-cols-10 md:items-center">
                          <div className="col-span-1 text-sm text-gray-500">
                            {index + 1}
                          </div>
                          
                          <div className="col-span-6">
                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                              {relatedTerm.name}
                            </h4>
                            <div className="flex items-center mt-1 text-xs text-gray-500 gap-x-4">
                              <span>{termDate.getDate()} {month}</span>
                              <span>{currentProvince}</span>
                              <span>{calculateDuration(relatedTerm.startDate, relatedTerm.endDate)}</span>
                            </div>
                          </div>
                          
                          <div className="col-span-2">
                            <Badge variant="outline" className={`text-xs ${
                              relatedTerm.type === 'term' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                            }`}>
                              {relatedTerm.type === 'term' ? 'School Term' : 'School Holiday'}
                            </Badge>
                          </div>
                          
                          <div className="col-span-1 text-right">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="hover:bg-gray-100 px-2 text-xs"
                            >
                              View
                            </Button>
                          </div>
                        </div>
                      </EventPageLink>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </motion.div>
  );
};

export default TermPage;
