import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { terms2025 } from "../data/terms";
import { Search, ArrowUpRight, ChevronDown, Calendar, GraduationCap, MapPin, Clock, Filter, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import EventPageLink from "@/components/EventPageLink";
import Header from "../components/Header";
import SEO from "../components/SEO";
import AdSense from "../components/AdSense";
import { usePageReload } from "../hooks/usePageReload";
import { getSouthAfricaTime } from "../utils/timeUtils";

const TERMS_PER_PAGE = 150;

// Province configuration
const PROVINCES = [
  { value: "all", label: "All Provinces" },
  { value: "western-cape", label: "Western Cape" },
  { value: "gauteng", label: "Gauteng" },
  { value: "kwazulu-natal", label: "KwaZulu-Natal" },
  { value: "eastern-cape", label: "Eastern Cape" },
  { value: "limpopo", label: "Limpopo" },
  { value: "mpumalanga", label: "Mpumalanga" },
  { value: "north-west", label: "North West" },
  { value: "northern-cape", label: "Northern Cape" },
  { value: "free-state", label: "Free State" }
];

// Props for the main page (no specific province)
interface SchoolTermsPageProps {
  province?: string;
  provinceName?: string;
}

const SchoolTermsPage = ({ 
  province,
  provinceName 
}: SchoolTermsPageProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showTermsOnly, setShowTermsOnly] = useState(false);
  const [showPastEvents, setShowPastEvents] = useState(true);
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedProvince, setSelectedProvince] = useState(province || "all");
  const [visibleCount, setVisibleCount] = useState(TERMS_PER_PAGE);
  const { pageKey } = usePageReload();

  // Determine if this is the main SA page or a province-specific page
  const isMainPage = !province;
  const currentProvinceName = provinceName || (selectedProvince === "all" ? "South Africa" : PROVINCES.find(p => p.value === selectedProvince)?.label || "South Africa");

  // Get available years from the data
  const availableYears = [...new Set(terms2025.map(term => term.year))].sort((a, b) => a - b);
  
  // Get year range for display
  const getYearRange = () => {
    if (availableYears.length === 0) return "";
    const minYear = Math.min(...availableYears);
    const maxYear = Math.max(...availableYears);
    return minYear === maxYear ? minYear.toString() : `${minYear}/${maxYear}`;
  };

  const yearRange = getYearRange();

  // Get current date for filtering
  const currentSouthAfricaTime = getSouthAfricaTime();
  const currentDate = new Date(currentSouthAfricaTime.getFullYear(), currentSouthAfricaTime.getMonth(), currentSouthAfricaTime.getDate());
  
  // Filter based on past/future preference
  const filteredByDate = showPastEvents 
    ? terms2025 // Show all terms
    : terms2025.filter(term => {
        const termEndDate = new Date(term.endDate);
        return termEndDate >= currentDate;
      });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setVisibleCount(TERMS_PER_PAGE);
  }, [searchQuery, selectedYear, selectedProvince, showPastEvents]);

  const filteredTerms = filteredByDate.filter(term => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = term.name.toLowerCase().includes(searchLower) ||
                         term.type.toLowerCase().includes(searchLower) ||
                         (term.description && term.description.toLowerCase().includes(searchLower));
    
    const matchesFilter = !showTermsOnly || term.type === 'term';
    
    const matchesYear = selectedYear === "all" || term.year.toString() === selectedYear;
    
    // Province filtering - assuming terms have a province field
    const matchesProvince = selectedProvince === "all" || 
                           (term.province && term.province.toLowerCase() === selectedProvince) ||
                           (!term.province && selectedProvince === "all"); // fallback for terms without province
    
    return matchesSearch && matchesFilter && matchesYear && matchesProvince;
  }).sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateA.getTime() - dateB.getTime();
  });

  const visibleTerms = filteredTerms.slice(0, visibleCount);

  // Group terms by month and year
  const groupedTerms = visibleTerms.reduce((groups, term) => {
    const termDate = new Date(term.startDate);
    const monthYear = termDate.toLocaleDateString('en-ZA', {
      month: 'long',
      year: 'numeric'
    });
    
    if (!groups[monthYear]) {
      groups[monthYear] = [];
    }
    groups[monthYear].push(term);
    return groups;
  }, {} as Record<string, typeof terms2025>);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-ZA', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatDateShort = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-ZA', {
      day: 'numeric',
      month: 'short'
    });
  };

  const calculateDuration = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    // Add 1 to include both start and end dates in the count
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    const weeks = Math.floor(diffDays / 7);
    const days = diffDays % 7;
    
    if (weeks > 0) {
      return days > 0 ? `${weeks} weeks, ${days} days` : `${weeks} weeks`;
    }
    return `${diffDays} ${diffDays === 1 ? 'day' : 'days'}`;
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + TERMS_PER_PAGE);
  };

  // Get display term for province
  const getTermDisplayLocation = (term: any) => {
    if (term.province) {
      const provinceObj = PROVINCES.find(p => p.value === term.province.toLowerCase());
      return provinceObj ? provinceObj.label : term.province;
    }
    return currentProvinceName;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f6f6f0] pt-20">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center h-64">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-16 h-16 border-4 border-blog-accent border-t-transparent rounded-full animate-spin"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      key={pageKey}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO
        title={`${currentProvinceName} School Terms And Calendar ${yearRange} - HolidaysDB`}
        description={`Complete ${currentProvinceName} school terms calendar for ${yearRange}. Find all term dates, school holidays, and academic year schedule for ${isMainPage ? 'South African' : currentProvinceName} schools.`}
        canonicalUrl={isMainPage ? "/terms" : `/terms/${province}`}
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
              {currentProvinceName} School Terms And Calendar {yearRange}
            </h1>
            <p className="text-gray-600">
              Official Academic Calendar for {isMainPage ? 'South African' : currentProvinceName} schools. All term dates, school holidays, and important academic dates.
            </p>
          </div>
        </div>

        {/* Educational Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 p-2 rounded-full">
              <GraduationCap className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">Academic Year Planning</h2>
              <p className="text-blue-800 text-sm">
                This calendar includes all school terms and holidays for {currentProvinceName}. Perfect for planning family activities, 
                school events, and educational trips around the official academic calendar.
              </p>
            </div>
          </div>
        </div>

        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search school terms and holidays..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2 items-center">
            <Button
              variant={!showTermsOnly ? "default" : "outline"}
              size="sm"
              onClick={() => setShowTermsOnly(false)}
            >
              All Periods
            </Button>
            <Button
              variant={showTermsOnly ? "default" : "outline"}
              size="sm"
              onClick={() => setShowTermsOnly(true)}
            >
              Terms Only
            </Button>
            
            {/* Past Events Toggle */}
            <Button
              variant={showPastEvents ? "default" : "outline"}
              size="sm"
              onClick={() => setShowPastEvents(!showPastEvents)}
              className="gap-2"
            >
              {showPastEvents ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
              {showPastEvents ? "All Events" : "Future Only"}
            </Button>
            
            {/* Province Filter - only show on main page */}
            {isMainPage && (
              <div className="flex items-center gap-2 ml-4">
                <MapPin className="h-4 w-4 text-gray-500" />
                <Select value={selectedProvince} onValueChange={setSelectedProvince}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Province" />
                  </SelectTrigger>
                  <SelectContent>
                    {PROVINCES.map(province => (
                      <SelectItem key={province.value} value={province.value}>
                        {province.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
            
            {/* Year Filter */}
            <div className="flex items-center gap-2 ml-4">
              <Filter className="h-4 w-4 text-gray-500" />
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  {availableYears.map(year => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </motion.div>

        {/* Province Quick Links - only show on main page */}
        {isMainPage && selectedProvince === "all" && (
          <motion.div 
            className="mb-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-600" />
              Browse by Province
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {PROVINCES.slice(1).map(province => ( // Skip "All Provinces"
                <Button
                  key={province.value}
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedProvince(province.value)}
                  className="justify-start hover:bg-blue-50 hover:border-blue-300"
                >
                  {province.label}
                </Button>
              ))}
            </div>
          </motion.div>
        )}

        {Object.keys(groupedTerms).length > 0 ? (
          <div className="space-y-8">
            {Object.entries(groupedTerms).map(([monthYear, monthTerms], monthIndex) => (
              <motion.div
                key={monthYear}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: monthIndex * 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200"
              >
                <div className="px-4 sm:px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-green-50 rounded-t-lg">
                  <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-blog-accent" />
                    <span className="truncate">{monthYear}</span>
                    <span className="text-xs sm:text-sm font-normal text-gray-500 flex-shrink-0">
                      ({monthTerms.length} {monthTerms.length === 1 ? 'period' : 'periods'})
                    </span>
                  </h2>
                </div>

                <div className="divide-y divide-gray-100">
                  {monthTerms.map((term, termIndex) => {
                    // Check if this term is in the past
                    const termEndDate = new Date(term.endDate);
                    const isPast = termEndDate < currentDate;
                    
                    return (
                      <motion.div
                        key={term.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: termIndex * 0.05 }}
                        className={`group px-4 sm:px-6 py-4 hover:bg-gray-50 transition-colors ${isPast ? 'opacity-70' : ''}`}
                      >
                        {/* Mobile Layout */}
                        <div className="block sm:hidden">
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <div className={`bg-gradient-to-r ${isPast ? 'from-gray-400 to-gray-500' : 'from-blue-500 to-green-500'} text-white px-2 py-1 rounded text-xs font-medium`}>
                              {formatDateShort(term.startDate)}
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              asChild
                              className="hover:bg-gray-100 px-2 py-1 text-xs"
                            >
                              <EventPageLink to={`/terms/${term.id}`}>
                                View
                              </EventPageLink>
                            </Button>
                          </div>
                          
                          <EventPageLink 
                            to={`/terms/${term.id}`}
                            className="text-base sm:text-lg font-medium text-gray-900 hover:text-blog-accent transition-colors block mb-2"
                          >
                          <h3 className="text-lg">{term.name}</h3>
                          </EventPageLink>
                          
                          <div className="space-y-2 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3 flex-shrink-0" />
                              <span>{formatDate(term.startDate)} - {formatDate(term.endDate)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3 flex-shrink-0" />
                              <span>{getTermDisplayLocation(term)} • {term.year}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3 flex-shrink-0" />
                              <span>{calculateDuration(term.startDate, term.endDate)}</span>
                            </div>
                            <div className="flex flex-wrap items-center gap-2">
                              <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700">
                                {term.type === 'term' ? 'School Term' : 'School Holiday'}
                              </Badge>
                              <Badge variant="outline" className="text-xs bg-green-50 text-green-700">
                                {term.year}
                              </Badge>
                              {isPast && (
                                <Badge variant="outline" className="text-xs bg-gray-50 text-gray-600">
                                  Past
                                </Badge>
                              )}
                            </div>
                          </div>
                          
                          {term.description && (
                            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                              {term.description}
                            </p>
                          )}
                        </div>

                        {/* Desktop Layout */}
                        <div className="hidden sm:block">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start gap-3">
                                <div className={`flex-shrink-0 bg-gradient-to-r ${isPast ? 'from-gray-400 to-gray-500' : 'from-blue-500 to-green-500'} text-white px-2 py-1 rounded text-xs font-medium`}>
                                  {formatDateShort(term.startDate)}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <EventPageLink 
                                    to={`/terms/${term.id}`}
                                    className="text-lg font-medium text-gray-900 hover:text-blog-accent transition-colors group-hover:underline flex items-center gap-1"
                                  >
                                    <h3 className="text-lg">{term.name}</h3>
                                    <ArrowUpRight 
                                      className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity"
                                    />
                                  </EventPageLink>
                                  
                                  <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-500">
                                    <span className="flex items-center gap-1">
                                      <Calendar className="h-3 w-3" />
                                      {formatDate(term.startDate)} - {formatDate(term.endDate)}
                                    </span>
                                    <span>• {getTermDisplayLocation(term)} • {term.year}</span>
                                    <span className="flex items-center gap-1">
                                      <Clock className="h-3 w-3" />
                                      {calculateDuration(term.startDate, term.endDate)}
                                    </span>
                                    <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700">
                                      {term.type === 'term' ? 'School Term' : 'School Holiday'}
                                    </Badge>
                                    <Badge variant="outline" className="text-xs bg-green-50 text-green-700">
                                      {term.year}
                                    </Badge>
                                    {isPast && (
                                      <Badge variant="outline" className="text-xs bg-gray-50 text-gray-600">
                                        Past
                                      </Badge>
                                    )}
                                  </div>
                                  
                                  {term.description && (
                                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                                      {term.description}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                            
                            <Button
                              variant="ghost"
                              size="sm"
                              asChild
                              className="hover:bg-gray-100 px-3 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <EventPageLink to={`/terms/${term.id}`}>
                                View Details
                              </EventPageLink>
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 text-center py-16">
            <div className="text-gray-500 mb-4">
              <GraduationCap className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg mb-2">No school terms found</p>
              <p className="text-sm">Try adjusting your search terms or filters</p>
            </div>
            <Button
              variant="link"
              onClick={() => {
                setSearchQuery("");
                setSelectedYear("all");
                setSelectedProvince("all");
                setShowPastEvents(true);
              }}
            >
              Clear filters
            </Button>
          </div>
        )}
        
        {filteredTerms.length > visibleCount && (
          <div className="flex justify-center mt-8">
            <Button 
              variant="outline" 
              onClick={loadMore}
              className="gap-2"
            >
              Load More School Terms <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Additional School Info */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-blue-600" />
            About {currentProvinceName} School Terms
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <h4 className="font-medium mb-2">Academic Year Structure</h4>
              <p>South African schools follow a 4-term academic year with breaks between each term. Each term is approximately 10-11 weeks long, providing a balanced education calendar.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Important Notes</h4>
              <p>While term dates are standardized across South Africa, individual schools may have slight variations. Always confirm specific dates with your school's academic calendar.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-300 py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} HolidaysDB. All rights reserved.</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default SchoolTermsPage;
