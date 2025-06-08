
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Event, events2025 } from "../data/events2025";
import { Search, ArrowUpRight, ChevronDown, Calendar, MapPin, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import EventPageLink from "@/components/EventPageLink";
import Header from "../components/Header";
import SEO from "../components/SEO";
import { usePageReload } from "../hooks/usePageReload";
import { getSouthAfricaTime } from "../utils/timeUtils";

const EVENTS_PER_PAGE = 150;

const MonthPage = () => {
  const { month, year, monthYear } = useParams<{ month?: string; year?: string; monthYear?: string }>();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState("all");
  const [visibleCount, setVisibleCount] = useState(EVENTS_PER_PAGE);
  const [error, setError] = useState<string | null>(null);
  const { pageKey } = usePageReload();

  // Safety check for data
  const safeEvents = events2025 || [];

  // Parse SEO-friendly URLs like "january-2025" or legacy URLs
  let monthNumber = 1;
  let yearNumber: string | undefined = undefined;
  let isValidFormat = true;

  const monthNames = [
    "", "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  if (monthYear) {
    // Handle SEO-friendly URLs like "january-2025"
    const monthNamesLower = [
      "january", "february", "march", "april", "may", "june",
      "july", "august", "september", "october", "november", "december"
    ];
    
    const parts = monthYear.toLowerCase().split('-');
    if (parts.length === 2) {
      const monthName = parts[0];
      yearNumber = parts[1];
      monthNumber = monthNamesLower.indexOf(monthName) + 1;
      
      // If it's not a valid month-year format, mark as invalid
      if (monthNumber === 0 || !/^\d{4}$/.test(yearNumber)) {
        isValidFormat = false;
      }
    } else {
      isValidFormat = false;
    }
  } else if (month) {
    // Handle legacy URLs
    monthNumber = parseInt(month) || 1;
    yearNumber = year;
  }

  const isValidMonth = monthNumber >= 1 && monthNumber <= 12;
  const monthName = isValidMonth ? monthNames[monthNumber] : "Unknown";

  // Get available years that have events for this specific month - DYNAMIC GENERATION
  const getAvailableYearsForMonth = () => {
    const yearsWithEvents = [...new Set(safeEvents
      .filter(event => {
        const eventDate = new Date(event.date);
        return eventDate.getMonth() + 1 === monthNumber;
      })
      .map(event => new Date(event.date).getFullYear())
    )].sort((a, b) => a - b);
    
    return yearsWithEvents;
  };

  const availableYears = getAvailableYearsForMonth();

  // Get current date for determining past events
  const currentSouthAfricaTime = getSouthAfricaTime?.() || new Date();
  const currentDate = new Date(currentSouthAfricaTime.getFullYear(), currentSouthAfricaTime.getMonth(), currentSouthAfricaTime.getDate());

  // Filter events by month and optionally by year
  const monthEvents = safeEvents.filter(event => {
    try {
      const eventDate = new Date(event.date);
      const eventMonth = eventDate.getMonth() + 1;
      const eventYear = eventDate.getFullYear();
      
      const matchesMonth = eventMonth === monthNumber;
      const matchesYear = selectedYear === "all" || eventYear.toString() === selectedYear;
      
      return matchesMonth && matchesYear;
    } catch (err) {
      console.error("Error filtering event:", event, err);
      return false;
    }
  });

  // Move state updates to useEffect to prevent infinite re-renders
  useEffect(() => {
    // Handle invalid formats
    if (!isValidFormat || !isValidMonth) {
      setError("Invalid month or year format");
      setIsLoading(false);
      return;
    }
    
    // Set the selected year from URL if provided
    if (yearNumber && yearNumber !== selectedYear) {
      setSelectedYear(yearNumber);
    } else if (year && year !== selectedYear) {
      setSelectedYear(year);
    }
    
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [isValidFormat, isValidMonth, yearNumber, year]);

  useEffect(() => {
    setVisibleCount(EVENTS_PER_PAGE);
  }, [searchQuery, selectedYear]);

  const filteredEvents = monthEvents.filter(event => {
    if (!searchQuery.trim()) return true;
    
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = event.title?.toLowerCase().includes(searchLower) ||
                         event.location?.toLowerCase().includes(searchLower) ||
                         (event.description && event.description.toLowerCase().includes(searchLower));
    
    return matchesSearch;
  }).sort((a, b) => {
    try {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA.getTime() - dateB.getTime();
    } catch (err) {
      return 0;
    }
  });

  const visibleEvents = filteredEvents.slice(0, visibleCount);

  // Group events by year
  const groupedEvents = visibleEvents.reduce((groups: Record<string, Event[]>, event) => {
    try {
      const eventYear = new Date(event.date).getFullYear();
      const yearKey = eventYear.toString();
      
      if (!groups[yearKey]) {
        groups[yearKey] = [];
      }
      groups[yearKey].push(event);
      return groups;
    } catch (err) {
      console.error("Error grouping event:", event, err);
      return groups;
    }
  }, {});

  const formatDate = (dateString: string): string => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-ZA', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    } catch (err) {
      return dateString;
    }
  };

  const formatDateShort = (dateString: string): string => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-ZA', {
        day: 'numeric',
        month: 'short'
      });
    } catch (err) {
      return dateString;
    }
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + EVENTS_PER_PAGE);
  };

  const handleBackClick = () => {
    navigate("/");
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedYear("all");
  };

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-[#f6f6f0] pt-20">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm border border-red-200 text-center py-16">
            <div className="text-red-500 mb-4">
              <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg mb-2">Invalid Page</p>
              <p className="text-sm">The requested month page could not be found.</p>
            </div>
            <Button onClick={handleBackClick}>
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Loading state
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

  const pageTitle = selectedYear === "all" 
    ? `${monthName} Holidays in Tanzania` 
    : `${monthName} Holidays in Tanzania ${selectedYear}`;

  // Update canonical URL for SEO-friendly format
  const canonicalUrl = yearNumber 
    ? `/${monthName.toLowerCase()}-${yearNumber}`
    : `/month/${monthNumber}`;

  return (
    <motion.div
      key={pageKey}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO
        title={`${pageTitle} - HolidaysDB`}
        description={`Complete list of Tanzanian public holidays and events in ${monthName}${selectedYear !== "all" ? ` ${selectedYear}` : ""}. Find all national holidays and cultural events.`}
        canonicalUrl={canonicalUrl}
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBackClick}
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to All Events
              </Button>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
              {pageTitle}
            </h1>
            <p>
              This is a complete calendar of cultural celebrations, religious and public holidays in Tanzania for {monthName}
              {selectedYear !== "all" ? ` ${selectedYear}` : " across all years"}. Perfect for planning your month, understanding cultural significance, and staying informed about national observances.
            </p>
            <p><strong>
              {monthEvents.length} holidays found in {monthName}
              {selectedYear !== "all" ? ` ${selectedYear}` : " across all years"}.</strong>
            </p>
          </div>
        </div>

        {/* Dynamic Year Filter Links for the selected month */}
        <div className="mb-6">
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {availableYears.map(yearNum => (
                <EventPageLink
                  key={yearNum}
                  to={`/${monthName.toLowerCase()}-${yearNum}`}
                  className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {monthName} {yearNum}
                </EventPageLink>
              ))}
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
              placeholder={`Search ${monthName} holidays and events...`}
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        {Object.keys(groupedEvents).length > 0 ? (
          <div className="space-y-8">
            {Object.entries(groupedEvents)
              .sort(([a], [b]) => parseInt(a) - parseInt(b))
              .map(([yearKey, yearEvents], yearIndex) => (
              <motion.div
                key={yearKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: yearIndex * 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200"
              >
                <div className="px-4 sm:px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-green-50 rounded-t-lg">
                  <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-blog-accent" />
                    <span className="truncate">{monthName} {yearKey}</span>
                    <span className="text-xs sm:text-sm font-normal text-gray-500 flex-shrink-0">
                      ({yearEvents.length} {yearEvents.length === 1 ? 'event' : 'events'})
                    </span>
                  </h2>
                </div>

                <div className="divide-y divide-gray-100">
                  {yearEvents.map((event, eventIndex) => {
                    const eventDate = new Date(event.date);
                    const isPast = eventDate < currentDate;
                    
                    return (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: eventIndex * 0.05 }}
                        className={`group px-4 sm:px-6 py-4 hover:bg-gray-50 transition-colors ${isPast ? 'opacity-70' : ''}`}
                      >
                        {/* Mobile Layout */}
                        <div className="block sm:hidden">
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <div className={`bg-gradient-to-r ${isPast ? 'from-gray-400 to-gray-500' : 'from-blue-500 to-green-500'} text-white px-2 py-1 rounded text-xs font-medium`}>
                              {formatDateShort(event.date)}
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              asChild
                              className="hover:bg-gray-100 px-2 py-1 text-xs"
                            >
                              <EventPageLink to={`/events/${event.id}`}>
                                View
                              </EventPageLink>
                            </Button>
                          </div>
                          
                          <EventPageLink 
                            to={`/events/${event.id}`}
                            className="text-base sm:text-lg font-medium text-gray-900 hover:text-blog-accent transition-colors block mb-2"
                          >
                            <h3 className="text-lg">{event.title}</h3>
                          </EventPageLink>
                          
                          <div className="space-y-2 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3 flex-shrink-0" />
                              <span>{formatDate(event.date)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3 flex-shrink-0" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex flex-wrap items-center gap-2">
                              <Badge variant="outline" className="text-xs bg-green-50 text-green-700">
                                {event.category?.charAt(0).toUpperCase() + event.category?.slice(1)}
                              </Badge>
                              {isPast && (
                                <Badge variant="outline" className="text-xs bg-gray-50 text-gray-600">
                                  Past
                                </Badge>
                              )}
                            </div>
                          </div>
                          
                          {event.description && (
                            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                              {event.description}
                            </p>
                          )}
                        </div>

                        {/* Desktop Layout */}
                        <div className="hidden sm:block">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start gap-3">
                                <div className={`flex-shrink-0 bg-gradient-to-r ${isPast ? 'from-gray-400 to-gray-500' : 'from-blue-500 to-green-500'} text-white px-2 py-1 rounded text-xs font-medium`}>
                                  {formatDateShort(event.date)}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <EventPageLink 
                                    to={`/events/${event.id}`}
                                    className="text-lg font-medium text-gray-900 hover:text-blog-accent transition-colors group-hover:underline flex items-center gap-1"
                                  >
                                    <h3 className="text-lg">{event.title}</h3>
                                    <ArrowUpRight 
                                      className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity"
                                    />
                                  </EventPageLink>
                                  
                                  <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-500">
                                    <span className="flex items-center gap-1">
                                      <Calendar className="h-3 w-3" />
                                      {formatDate(event.date)}
                                    </span>
                                    <span>• {event.location}</span>
                                    <Badge variant="outline" className="text-xs bg-green-50 text-green-700">
                                      {event.category?.charAt(0).toUpperCase() + event.category?.slice(1)}
                                    </Badge>
                                    {isPast && (
                                      <Badge variant="outline" className="text-xs bg-gray-50 text-gray-600">
                                        Past
                                      </Badge>
                                    )}
                                  </div>
                                  
                                  {event.description && (
                                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                                      {event.description}
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
                              <EventPageLink to={`/events/${event.id}`}>
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
              <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg mb-2">No events found for {monthName}</p>
              <p className="text-sm">Try adjusting your search or year filter</p>
            </div>
            <Button
              variant="link"
              onClick={handleClearFilters}
            >
              Clear filters
            </Button>
          </div>
        )}
        
        {filteredEvents.length > visibleCount && (
          <div className="flex justify-center mt-8">
            <Button 
              variant="outline" 
              onClick={loadMore}
              className="gap-2"
            >
              Load More Events <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        )}
      </main>

      <footer className="border-t border-gray-300 py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} HolidaysDB. All rights reserved.</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default MonthPage;
