import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SEO from "../components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar, User, ArrowRight, Building, MapPin, Banknote, Award, Info, TrendingUp, ExternalLink } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  findPersonBySlug,
  formatNetWorth,
  getSimilarPeople,
  NetWorthPerson
} from "../utils/netWorthData";

const NetWorthDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  const person = findPersonBySlug(slug || "");
  const similarPeople = person ? getSimilarPeople(person, 6) : [];
  
  // Simulate loading from API
  useEffect(() => {
    setIsLoading(true);
    // Simulate network delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [slug]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <Header />
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="h-8 mb-6"></div>
            <Card className="overflow-hidden mb-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 h-24"></div>
              <div className="p-6 sm:p-8 -mt-12">
                <div className="flex items-start gap-4 mb-8">
                  <Skeleton className="h-24 w-24 rounded-full border-4 border-white" />
                  <div className="flex-1 pt-12">
                    <Skeleton className="h-10 w-3/4 mb-4" />
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <Skeleton className="h-5 w-24" />
                      <Skeleton className="h-5 w-20" />
                      <Skeleton className="h-5 w-16" />
                    </div>
                  </div>
                </div>
                <Skeleton className="h-24 w-full mb-8" />
                <div className="space-y-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  if (!person) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center">
        <Header />
        <Card className="w-full max-w-md mx-4">
          <CardContent className="p-8 text-center">
            <div className="text-red-500 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 w-12 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Person Not Found</h2>
            <p className="text-gray-600 mb-6">We couldn't find the person you're looking for. They may have been removed or the URL might be incorrect.</p>
            <Button onClick={() => navigate('/net-worth')} className="w-full">
              Back to Net Worth List
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Format currency for the title without spaces
  const formattedNetWorthForTitle = formatNetWorth(person.netWorth, person.currency).replace(/\s/g, "");
  
  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  // Industry color mapping
  const getIndustryColor = (industry: string) => {
    const industries: Record<string, string> = {
      "Technology": "bg-blue-100 text-blue-800",
      "Finance": "bg-green-100 text-green-800",
      "Entertainment": "bg-purple-100 text-purple-800",
      "Real Estate": "bg-yellow-100 text-yellow-800",
      "Retail": "bg-red-100 text-red-800",
      "Fashion": "bg-pink-100 text-pink-800",
      "Energy": "bg-orange-100 text-orange-800",
      "Manufacturing": "bg-gray-100 text-gray-800"
    };
    
    return industries[industry] || "bg-blue-100 text-blue-800";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <SEO 
        title={`${person.name} Net Worth: ${formattedNetWorthForTitle} | MoneyWorth`}
        description={`${person.name}'s estimated net worth is ${formatNetWorth(person.netWorth, person.currency)}. Learn about their wealth, career, and ${person.industry} business ventures.`}
        canonicalUrl={`/net-worth/${person.slug}`}
      />
      
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link 
            to="/net-worth"
            className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 mb-6 hover:text-blue-600 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            All Wealthy Individuals
          </Link>
          
          <Card className="overflow-hidden mb-8 border-none shadow-md">
            {/* Hero Section with Gradient Background */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-32 relative"></div>
            
            <div className="p-6 sm:p-8 -mt-16 relative">
              <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
                <Avatar className="h-24 w-24 rounded-full border-4 border-white shadow-md">
                  <AvatarImage src={person.imageUrl || "/placeholder.svg"} alt={person.name} />
                  <AvatarFallback className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700 text-lg font-bold">
                    {getInitials(person.name)}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 pt-12 sm:pt-0">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                    {person.name}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1 text-gray-400" />
                      <span>{person.age} years old</span>
                    </div>
                    
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                      <span>{person.country}</span>
                    </div>
                    
                    <Badge className={`px-2 py-0.5 font-medium ${getIndustryColor(person.industry)}`}>
                      {person.industry}
                    </Badge>
                  </div>
                  
                  <div className="mt-2">
                    <div className="text-2xl font-bold text-blue-600">
                      {formatNetWorth(person.netWorth, person.currency)}
                    </div>
                    
                    <div className="flex items-center mt-1">
                      <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                      <span className="text-xs text-gray-500">Updated: {person.lastUpdated}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Card className="border border-gray-200 hover:border-blue-200 transition-colors">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-3 mt-2">
                      <Banknote className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="text-gray-500 text-sm font-medium mb-1">Net Worth</div>
                    <div className="text-xl font-bold text-gray-800">{formatNetWorth(person.netWorth, person.currency)}</div>
                    <div className="text-gray-400 text-xs mt-1">Source: {person.source}</div>
                  </CardContent>
                </Card>
                
                <Card className="border border-gray-200 hover:border-blue-200 transition-colors">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-3 mt-2">
                      <Award className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="text-gray-500 text-sm font-medium mb-1">Occupation</div>
                    <div className="text-lg font-bold text-gray-800">{person.occupation}</div>
                    <div className="text-gray-400 text-xs mt-1">{person.industry}</div>
                  </CardContent>
                </Card>
                
                <Card className="border border-gray-200 hover:border-blue-200 transition-colors">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-3 mt-2">
                      <Building className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="text-gray-500 text-sm font-medium mb-1">Company</div>
                    <div className="text-lg font-bold text-gray-800">{person.company || "Multiple Ventures"}</div>
                    <div className="text-gray-400 text-xs mt-1">{person.country}</div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Bio Section */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <User className="h-5 w-5 mr-2 text-blue-500" />
                  About {person.name}
                </h2>
                <Card className="border border-gray-200">
                  <CardContent className="p-5">
                    <p className="text-gray-700 leading-relaxed">
                      {person.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Wealth Details */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-blue-500" />
                  Wealth Details
                </h3>
                <Card className="overflow-hidden border border-gray-200">
                  <Table>
                    <TableHeader className="bg-gray-50">
                      <TableRow>
                        <TableHead className="text-gray-600">Detail</TableHead>
                        <TableHead className="text-right text-gray-600">Value</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="hover:bg-blue-50">
                        <TableCell className="font-medium">Estimated Net Worth</TableCell>
                        <TableCell className="text-right font-bold text-blue-600">{formatNetWorth(person.netWorth, person.currency)}</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-blue-50">
                        <TableCell>Primary Industry</TableCell>
                        <TableCell className="text-right">{person.industry}</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-blue-50">
                        <TableCell>Primary Company</TableCell>
                        <TableCell className="text-right">{person.company || "Multiple Ventures"}</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-blue-50">
                        <TableCell>Country of Residence</TableCell>
                        <TableCell className="text-right">{person.country}</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-blue-50">
                        <TableCell>Age</TableCell>
                        <TableCell className="text-right">{person.age} years</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-blue-50">
                        <TableCell>Information Source</TableCell>
                        <TableCell className="text-right">{person.source}</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-blue-50">
                        <TableCell>Last Updated</TableCell>
                        <TableCell className="text-right">{person.lastUpdated}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Card>
              </div>
              
              {/* Disclaimer */}
              <Card className="border-none shadow-sm bg-gradient-to-r from-amber-50 to-orange-50 mb-2">
                <CardContent className="p-5">
                  <h3 className="font-medium mb-3 flex items-center text-amber-800">
                    <Info className="h-4 w-4 mr-2 text-amber-600" />
                    About This Data
                  </h3>
                  <p className="text-sm text-amber-700">
                    Net worth estimates are based on publicly available information and may not reflect the individual's actual wealth. The figures shown here are approximations and subject to change based on market conditions and private investments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </Card>
          
          {/* Similar People Section */}
          {similarPeople.length > 0 && (
            <Card className="border-none overflow-hidden shadow-md mb-8">
              <div className="p-6 sm:p-8 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-blue-50">
                <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-500" />
                  Similar Wealthy Individuals
                </h2>
                <p className="text-sm text-gray-600">
                  People with similar net worth or in the same industry
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 divide-x-0 md:divide-x divide-gray-100">
                {similarPeople.map((similarPerson, index) => (
                  <motion.div 
                    key={similarPerson.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group hover:bg-blue-50 transition-colors p-4"
                  >
                    <Link 
                      to={`/net-worth/${similarPerson.slug}`}
                      className="flex items-center"
                    >
                      <Avatar className="h-12 w-12 mr-3 border-2 border-white shadow-sm">
                        <AvatarImage src={similarPerson.imageUrl || "/placeholder.svg"} alt={similarPerson.name} />
                        <AvatarFallback className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700 text-sm">
                          {getInitials(similarPerson.name)}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="text-gray-800 font-medium group-hover:text-blue-600 transition-colors">
                          {similarPerson.name}
                        </div>
                        
                        <div className="flex items-center text-xs text-gray-500">
                          <span className="font-medium text-blue-600">{formatNetWorth(similarPerson.netWorth, similarPerson.currency)}</span>
                          <span className="mx-2">•</span>
                          <Badge className={`px-1.5 py-0.5 text-xs ${getIndustryColor(similarPerson.industry)}`}>
                            {similarPerson.industry}
                          </Badge>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <div className="p-6 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-blue-50">
                <Button 
                  className="w-full bg-white hover:bg-blue-50 text-blue-600 border-blue-200 hover:border-blue-300"
                  onClick={() => navigate('/net-worth')}
                >
                  View All Wealthy Individuals
                </Button>
              </div>
            </Card>
          )}
        </div>
      </main>

      <footer className="border-t border-gray-200 py-8 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} MoneyWorth. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

// This missing Users component is needed for the Similar Individuals heading
const Users = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default NetWorthDetail;
