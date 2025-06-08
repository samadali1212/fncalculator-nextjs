
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Event, events2025 } from "../data/events2025";
import { Search, ArrowUpRight, ChevronDown, Calendar, MapPin, Filter, Eye, EyeOff } from "lucide-react";
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

const Events = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showPastEvents, setShowPastEvents] = useState(true);
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedMonth, setSelectedMonth] = useState("all");
  const [visibleCount, setVisibleCount] = useState(EVENTS_PER_PAGE);
  const { pageKey } = usePageReload();

  // Get available years and months for quick filter links
  const availableYears = [...new Set(events2025.map(event => new Date(event.date).getFullYear()))].sort((a, b) => a - b);
  
  // Define yearRange for SEO
  const yearRange = availableYears.length > 1 
    ? `${Math.min(...availableYears)}-${Math.max(...availableYears)}`
    : availableYears[0]?.toString() || "2025";

  const monthNames = [
    "", "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Get available months based on selected year
  const getAvailableMonths = () => {
    const yearEvents = selectedYear === "all" 
      ? events2025 
      : events2025.filter(event => new Date(event.date).getFullYear().toString() === selectedYear);
    
    const months = [...new Set(yearEvents.map(event => new Date(event.date).getMonth() + 1))].sort((a, b) => a - b);
    return months;
  };

  const availableMonths = getAvailableMonths();

  // Reset month selection when year changes
  useEffect(() => {
    if (selectedYear !== "all") {
      const monthsInYear = getAvailableMonths();
      if (selectedMonth !== "all" && !monthsInYear.includes(parseInt(selectedMonth))) {
        setSelectedMonth("all");
      }
    }
  }, [selectedYear]);

  // Get current date for filtering
  const currentSouthAfricaTime = getSouthAfricaTime();
  const currentDate = new Date(currentSouthAfricaTime.getFullYear(), currentSouthAfricaTime.getMonth(), currentSouthAfricaTime.getDate());
  
  // Filter based on past/future preference
  const filteredByDate = showPastEvents 
    ? events2025
    : events2025.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate >= currentDate;
      });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setVisibleCount(EVENTS_PER_PAGE);
  }, [searchQuery, selectedYear, selectedMonth, showPastEvents]);

  const filteredEvents = filteredByDate.filter(event => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = event.title.toLowerCase().includes(searchLower) ||
                         event.location.toLowerCase().includes(searchLower) ||
                         (event.description && event.description.toLowerCase().includes(searchLower));
    
    const eventDate = new Date(event.date);
    const eventYear = eventDate.getFullYear();
    const eventMonth = eventDate.getMonth() + 1;
    
    const matchesYear = selectedYear === "all" || eventYear.toString() === selectedYear;
    const matchesMonth = selectedMonth === "all" || eventMonth.toString() === selectedMonth;
    
    return matchesSearch && matchesYear && matchesMonth;
  }).sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA.getTime() - dateB.getTime();
  });

  const visibleEvents = filteredEvents.slice(0, visibleCount);

  // Group events by month and year
  const groupedEvents = visibleEvents.reduce((groups, event) => {
    const eventDate = new Date(event.date);
    const monthYear = eventDate.toLocaleDateString('en-ZA', {
      month: 'long',
      year: 'numeric'
    });
    
    if (!groups[monthYear]) {
      groups[monthYear] = [];
    }
    groups[monthYear].push(event);
    return groups;
  }, {} as Record<string, Event[]>);

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

  const loadMore = () => {
    setVisibleCount(prev => prev + EVENTS_PER_PAGE);
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
        title={`Public Holidays Calendar in Tanzania For ${yearRange} - HolidaysDB`}
        description={`Discover all Tanzanian public holidays calendar for ${yearRange} including national holidays, cultural events with countdowns and detailed information.`}
        canonicalUrl="/events"
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
              Tanzanian Public Holidays Calendar {yearRange}
            </h1>
            <p className="text-gray-600">
              Discover Tanzanian public holidays for {yearRange} and beyond. Complete calendar with countdowns, detailed information, and cultural significance.
            </p>
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
      placeholder="Search holidays and celebrations..."
      className="pl-10"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  </div>
  
  <div className="flex flex-wrap gap-4 items-center">
    {/* Past Events Toggle */}
    <Button
      variant={!showPastEvents ? "default" : "outline"}
      size="sm"
      onClick={() => setShowPastEvents(!showPastEvents)}
      className="gap-2"
    >
      {!showPastEvents ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      {!showPastEvents ? "Past Events Hidden" : "Show All Events"}
    </Button>
    
    {/* Year Filter Dropdown */}
    <div className="flex items-center gap-2">
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

    {/* Month Filter */}
    <Select value={selectedMonth} onValueChange={setSelectedMonth}>
      <SelectTrigger className="w-40">
        <SelectValue placeholder="Month" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Months</SelectItem>
        {availableMonths.map(month => (
          <SelectItem key={month} value={month.toString()}>
            {monthNames[month]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>

    {/* Inline Year Links */}
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-600">
      <span>Browse by:</span>
      {availableYears.map(year => (
        <EventPageLink
          key={year}
          to={`/year/${year}`}
          className="text-blue-600 hover:text-blue-800 hover:underline"
        >
          {year}
        </EventPageLink>
      ))}
    </div>
  </div>
</motion.div>

        {Object.keys(groupedEvents).length > 0 ? (
          <div className="space-y-8">
            {Object.entries(groupedEvents).map(([monthYear, monthEvents], monthIndex) => (
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
                      ({monthEvents.length} {monthEvents.length === 1 ? 'holiday' : 'holidays'})
                    </span>
                  </h2>
                </div>

                <div className="divide-y divide-gray-100">
                  {monthEvents.map((event, eventIndex) => {
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
                                Public Holiday
                              </Badge>
                              <Badge variant="outline" className="text-xs bg-gray-50 text-gray-600">
                                {new Date(event.date).getFullYear()}
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
                                      Public Holiday
                                    </Badge>
                                    <Badge variant="outline" className="text-xs bg-gray-50 text-gray-600">
                                      {new Date(event.date).getFullYear()}
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
              <p className="text-lg mb-2">No holidays found</p>
              <p className="text-sm">Try adjusting your search terms or filters</p>
            </div>
            <Button
              variant="link"
              onClick={() => {
                setSearchQuery("");
                setSelectedYear("all");
                setSelectedMonth("all");
                setShowPastEvents(true);
              }}
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
              Load More Holidays <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Additional Info */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            About Tanzanian Public Holidays
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <h4 className="font-medium mb-2">National Holidays</h4>
              <p>Tanzania observes 12 official public holidays annually, including Heritage Day, Freedom Day, and other culturally significant dates that reflect the nation's diverse heritage.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Cultural Significance</h4>
              <p>Each holiday carries deep cultural and historical meaning, commemorating important events in Tanzanian history and celebrating the country's rich cultural diversity.</p>
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

export default Events;
