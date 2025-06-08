import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, MapPin, List } from 'lucide-react';
import { Event, events2025 } from '../data/events2025';
import CountdownTimer from '@/components/CountdownTimer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import EventPageLink from '@/components/EventPageLink';
import Header from '../components/Header';
import SEO from '../components/SEO';
import ShareButton from "../components/ShareButton";
import { getSouthAfricaTime } from '../utils/timeUtils';

const formatEventDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-TZ', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const generateEventSEOContent = (event: Event): string => {
  const eventDate = new Date(event.date);
  const currentSouthAfricaTime = getSouthAfricaTime();
  const currentDate = new Date(currentSouthAfricaTime.getFullYear(), currentSouthAfricaTime.getMonth(), currentSouthAfricaTime.getDate());
  const formattedDate = formatEventDate(event.date);
  
  // Set both dates to midnight for accurate comparison
  const eventDateMidnight = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate());
  const currentDateMidnight = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
  
  const isPastEvent = eventDateMidnight < currentDateMidnight;
  const isToday = eventDateMidnight.getTime() === currentDateMidnight.getTime();
  
  // Get category-specific terminology
  const getCategoryTerm = (category) => {
    switch (category) {
      case 'holiday': return 'public holiday';
      case 'sports': return 'sporting event';
      case 'running': return 'running event';
      case 'technology': return 'technology event';
      case 'music': return 'musical event';
      case 'movies': return 'film release';
      case 'tv-series': return 'series premiere';
      case 'games': return 'gaming event';
      case 'comedy': return 'comedy show';
      default: return `${category} event`;
    }
  };
  
  const categoryTerm = getCategoryTerm(event.category);
  
  // Generate customized sentences based on timing
  let sentence1;
  
  if (isPastEvent) {
    // Past event variations
    const pastSentences = [
      `${event.title} was celebrated on ${formattedDate} in ${event.location}, marking an important ${categoryTerm} that brought together South Africans nationwide.`,
      `${event.title} took place on ${formattedDate} in ${event.location}, serving as a memorable ${categoryTerm} for the South African community.`,
      `${event.title} was observed on ${formattedDate}, representing a significant ${categoryTerm} in South Africa's calendar.`
    ];
    sentence1 = pastSentences[Math.floor(Math.random() * pastSentences.length)];
    
  } else if (isToday) {
    // Present/today variations
    const todaySentences = [
`${event.title} Is underway at this very moment, ${formattedDate}, in ${event.location} — a major ${categoryTerm} drawing attention across South Africa.`,
`${event.title} is happening today, ${formattedDate}, in ${event.location}. South Africans are coming together to celebrate this special ${categoryTerm}.`,
`${event.title} is underway right now ${formattedDate} in ${event.location}, offering South Africans a chance to join this meaningful ${categoryTerm}.`,
`${event.title} is happening right now as you read this in ${event.location} for a standout ${categoryTerm} on ${formattedDate}.`
    ];
    sentence1 = todaySentences[Math.floor(Math.random() * todaySentences.length)];
    
  } else {
    // Future event variations
    const futureSentences = [
`${event.title} takes place on ${formattedDate} in ${event.location}, expected to be a major ${categoryTerm} many South Africans are talking about.`,
`${event.title} will fall on ${formattedDate} in ${event.location} — a standout ${categoryTerm} bringing people together.`,
`${event.title} is set to take place on ${formattedDate} in ${event.location}, giving South Africans a chance to enjoy a key ${categoryTerm}.`,
`${event.title} will be observed on ${formattedDate} in ${event.location}, this is a can't-miss ${categoryTerm} for South Africans everywhere.`
    ];
    sentence1 = futureSentences[Math.floor(Math.random() * futureSentences.length)];
  }
  
  return sentence1;
};

const EventPage = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [relatedEvents, setRelatedEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundEvent = events2025.find(e => e.id === eventId);

      if (foundEvent) {
        setEvent(foundEvent);

        const currentSouthAfricaTime = getSouthAfricaTime();
        const currentDate = new Date(currentSouthAfricaTime.getFullYear(), currentSouthAfricaTime.getMonth(), currentSouthAfricaTime.getDate());

        const upcomingEvents = events2025.filter(e => {
          const relatedEventDate = new Date(e.date);
          return relatedEventDate >= currentDate;
        });

        const sameCategory = upcomingEvents.filter(e =>
          e.id !== eventId && e.category === foundEvent.category
        ).sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateA.getTime() - dateB.getTime();
        }).slice(0, 15);

        setRelatedEvents(sameCategory);
      } else {
        navigate('/events', { replace: true });
      }

      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [eventId, navigate]);

  const getCategoryStyles = (category) => {
    switch (category) {
      case 'sports': return 'bg-blue-100 text-blue-800';
      case 'running': return 'bg-purple-100 text-purple-800';
      case 'technology': return 'bg-green-100 text-green-800';
      case 'holiday': return 'bg-red-100 text-red-800';
      case 'music': return 'bg-orange-100 text-orange-800';
      case 'movies': return 'bg-indigo-100 text-indigo-800';
      case 'tv-series': return 'bg-pink-100 text-pink-800';
      case 'games': return 'bg-teal-100 text-teal-800';
      case 'comedy': return 'bg-slate-100 text-slate-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  const getCategoryDisplayName = (category) => {
    switch (category) {
      case 'tv-series': return 'TV Series';
      case 'running': return 'Running';
      default: return category.charAt(0).toUpperCase() + category.slice(1);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f6f6f0]">
        <Header />
        <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
          <Skeleton className="h-10 w-32 mb-4" />
          <Skeleton className="h-24 w-full mb-6" />
          <Skeleton className="h-6 w-full mb-4" />
          <Skeleton className="h-6 w-full mb-4" />
          <Skeleton className="h-6 w-full mb-4" />
          <Skeleton className="h-6 w-full mb-6" />
          <Skeleton className="h-20 w-full mb-6" />
          <Skeleton className="h-6 w-20 mb-4" />
          <Skeleton className="h-8 w-24 mb-4" />
        </main>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-[#f6f6f0]">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Event Not Found</h1>
            <p className="text-gray-600 mb-4">The event you're looking for doesn't exist.</p>
            <Button asChild>
              <a href="/events">Back to Events</a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const categoryStyles = getCategoryStyles(event.category);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO
        title={`${event.title} - HolidaysDB`}
        description={`Countdown to ${event.title} on ${formatEventDate(event.date)} at ${event.location}. View details and other South African events.`}
        canonicalUrl={`/events/${event.id}`}
      />
      <Header />

      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6">
          <div className="flex items-center justify-between mb-6">
            <a href="/events" className="inline-flex">
              <Button variant="ghost" className="pl-0 hover:pl-1 transition-all">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Events
              </Button>
            </a>
            <ShareButton 
              title={`${event.title} - HolidaysDB`} 
              variant="outline"
            />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <div className="bg-white rounded-sm shadow-sm border border-gray-200 mb-8">
            <div className="p-4 border-b border-gray-100 bg-gray-50">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{event.title}</h1>
                  <p className="text-gray-600 mt-1">Event Details</p>
                </div>
                <Badge variant="outline" className={`text-xs ${categoryStyles}`}>
                  {getCategoryDisplayName(event.category)}
                </Badge>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 text-gray-500 mr-3" />
                    <span className="text-gray-700">{formatEventDate(event.date)}</span>
                  </div>

                  {event.time && (
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 text-gray-500 mr-3" />
                      <span className="text-gray-700">{event.time}</span>
                    </div>
                  )}

                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 text-gray-500 mr-3" />
                    <span className="text-gray-700">{event.location}</span>
                  </div>
                </div>
              </div>

              {event.description && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">About this event</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    {generateEventSEOContent(event)}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">{event.description}</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-8">
          <CountdownTimer targetDate={event.date} targetTime={event.time} />
        </motion.div>

        {/* Related Events Section - Updated with Responsive Design */}
        {relatedEvents.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <div className="bg-white rounded-sm shadow-sm border border-gray-200">
              <div className="p-4 border-b border-gray-100 bg-gray-50">
                <div className="flex items-center">
                  <List className="h-5 w-5 text-blue-600 mr-2" />
                  <h2 className="text-xl font-semibold text-blue-600">
                    More {getCategoryDisplayName(event.category)} Events
                  </h2>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Discover other {event.category} events in South Africa
                </p>
              </div>

              <div className="divide-y divide-gray-100">
                {relatedEvents.map((relatedEvent, index) => {
                  const eventDate = new Date(relatedEvent.date);
                  const month = eventDate.toLocaleString('default', { month: 'long' });
                  const relatedCategoryStyles = getCategoryStyles(relatedEvent.category);

                  return (
                    <motion.div 
                      key={relatedEvent.id} 
                      initial={{ opacity: 0, x: -20 }} 
                      animate={{ opacity: 1, x: 0 }} 
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <EventPageLink 
                        to={`/events/${relatedEvent.id}`} 
                        className="block p-4 hover:bg-gray-50 transition-colors group"
                      >
                        {/* Mobile Layout (< md) */}
                        <div className="block md:hidden">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                {relatedEvent.title}
                              </h4>
                              <div className="flex items-center mt-1 text-xs text-gray-500 gap-x-3">
                                <span>{eventDate.getDate()} {month}</span>
                                {relatedEvent.time && <span>{relatedEvent.time}</span>}
                              </div>
                              <div className="flex items-center mt-1 text-xs text-gray-500 gap-x-3">
                                <span>{relatedEvent.location}</span>
                              </div>
                            </div>
                            <div className="ml-2 flex-shrink-0">
                              <Badge variant="outline" className={`text-xs ${relatedCategoryStyles}`}>
                                {getCategoryDisplayName(relatedEvent.category)}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex items-center justify-end">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="hover:bg-gray-100 px-2 text-xs h-6"
                            >
                              View Event
                            </Button>
                          </div>
                        </div>

                        {/* Desktop Layout (>= md) */}
                        <div className="hidden md:grid md:grid-cols-12 md:items-center md:gap-2">
                          <div className="col-span-1 text-sm text-gray-500">
                            {index + 1}
                          </div>
                          
                          <div className="col-span-7">
                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                              {relatedEvent.title}
                            </h4>
                            <div className="flex items-center mt-1 text-xs text-gray-500 gap-x-4">
                              <span>{eventDate.getDate()} {month}</span>
                              {relatedEvent.time && <span>at {relatedEvent.time}</span>}
                              <span>{relatedEvent.location}</span>
                            </div>
                          </div>
                          
                          <div className="col-span-3">
                            <Badge variant="outline" className={`text-xs ${relatedCategoryStyles}`}>
                              {getCategoryDisplayName(relatedEvent.category)}
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

      <footer className="border-t border-gray-300 py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} HolidaysDB. All rights reserved.</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default EventPage;
