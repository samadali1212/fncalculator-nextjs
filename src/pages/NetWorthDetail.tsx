import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SEO from "../components/SEO";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  Calendar, 
  User, 
  ArrowRight, 
  Building, 
  MapPin, 
  Banknote, 
  Award, 
  Info,
  TrendingUp,
  Briefcase,
  Globe
} from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  const [activeTab, setActiveTab] = useState("overview");
  
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
            <Card className="mb-8 overflow-hidden border-none shadow-md">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <Skeleton className="h-24 w-24 rounded-full" />
                    <div className="flex-1">
                      <Skeleton className="h-10 w-3/4 mb-4" />
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <Skeleton className="h-5 w-24" />
                        <Skeleton className="h-5 w-20" />
                        <Skeleton className="h-5 w-16" />
                      </div>
                      <Skeleton className="h-8 w-48 mt-2" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <Skeleton className="h-6 w-48 mb-4" />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <Skeleton className="h-28 rounded-lg" />
                    <Skeleton className="h-28 rounded-lg" />
                    <Skeleton className="h-28 rounded-lg" />
                  </div>
                  <Skeleton className="h-4 w-full mb-3" />
                  <Skeleton className="h-4 w-full mb-3" />
                  <Skeleton className="h-4 w-5/6 mb-3" />
                  <Skeleton className="h-4 w-full mb-3" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              </CardContent>
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
        <Card className="max-w-md mx-auto shadow-lg border-none">
          <CardHeader>
            <CardTitle>Person Not Found</CardTitle>
            <CardDescription>We couldn't find the person you're looking for</CardDescription>
          </CardHeader>
          <CardContent className="p-6 text-center">
            <div className="mb-6">
              <Info className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">The requested profile doesn't exist or may have been removed.</p>
            </div>
            <Button 
              onClick={() => navigate('/net-worth')} 
              className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all"
            >
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
            className="inline-flex items-center text-sm text-indigo-600 mb-6 hover:underline font-medium"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            All Wealthy Individuals
          </Link>
          
          <Card className="mb-8 overflow-hidden border-none shadow-md">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8">
              <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
                <div className="relative">
                  <Avatar className="h-24 w-24 rounded-full border-4 border-white shadow-md">
                    <AvatarImage src={person.imageUrl || "/placeholder.svg"} alt={person.name} />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-lg font-medium">
                      {getInitials(person.name)}
                    </AvatarFallback>
                  </Avatar>
                  <Badge className="absolute -bottom-2 -right-2 bg-indigo-600">{person.industry}</Badge>
                </div>
                
                <div className="flex-1">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                    {person.name}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1 text-indigo-500" />
                      <span>{person.age} years old</span>
                    </div>
                    
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-indigo-500" />
                      <span>{person.country}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1 text-indigo-500" />
                      <span>{person.occupation}</span>
                    </div>
                  </div>
                  
                  <div className="text-3xl font-bold text-indigo-700">
                    {formatNetWorth(person.netWorth, person.currency)}
                  </div>
                  
                  <div className="flex items-center mt-1 text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-xs">Updated: {person.lastUpdated}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <CardContent className="p-0">
              <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
                <div className="border-b">
                  <TabsList className="justify-start h-12 bg-white px-6 w-full">
                    <TabsTrigger value="overview" className="data-[state=active]:text-indigo-700">
                      Overview
                    </TabsTrigger>
                    <TabsTrigger value="details" className="data-[state=active]:text-indigo-700">
                      Wealth Details
                    </TabsTrigger>
                    <TabsTrigger value="similar" className="data-[state=active]:text-indigo-700">
                      Similar People
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="overview" className="pt-6 px-8 pb-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 shadow-sm border-none">
                      <CardContent className="p-4 text-center">
                        <Banknote className="h-8 w-8 mx-auto mb-2 text-indigo-600" />
                        <h3 className="text-gray-600 text-sm mb-1">Net Worth</h3>
                        <div className="text-xl font-bold text-gray-800">{formatNetWorth(person.netWorth, person.currency)}</div>
                        <div className="text-gray-500 text-xs mt-1">Source: {person.source}</div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 shadow-sm border-none">
                      <CardContent className="p-4 text-center">
                        <Briefcase className="h-8 w-8 mx-auto mb-2 text-indigo-600" />
                        <h3 className="text-gray-600 text-sm mb-1">Occupation</h3>
                        <div className="text-lg font-medium text-gray-800">{person.occupation}</div>
                        <div className="text-gray-500 text-xs mt-1">{person.industry}</div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 shadow-sm border-none">
                      <CardContent className="p-4 text-center">
                        <Building className="h-8 w-8 mx-auto mb-2 text-indigo-600" />
                        <h3 className="text-gray-600 text-sm mb-1">Company</h3>
                        <div className="text-lg font-medium text-gray-800">{person.company || "Multiple Ventures"}</div>
                        <div className="text-gray-500 text-xs mt-1">{person.country}</div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                      <User className="h-5 w-5 mr-2 text-indigo-600" />
                      About {person.name}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      {person.description}
                    </p>
                  </div>
                  
                  <Card className="bg-indigo-50 border-none shadow-sm">
                    <CardContent className="p-5">
                      <h3 className="font-medium mb-3 flex items-center text-indigo-800">
                        <Info className="h-4 w-4 mr-2" />
                        About This Data
                      </h3>
                      <p className="text-sm text-gray-700">
                        Net worth estimates are based on publicly available information and may not reflect the individual's actual wealth. The figures shown here are approximations and subject to change based on market conditions and private investments.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="details" className="pt-6 px-8 pb-8">
                  <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-indigo-600" />
                    Wealth Details
                  </h2>
                  
                  <Card className="mb-8 shadow-sm">
                    <CardContent className="p-0">
                      <Table>
                        <TableHeader className="bg-indigo-50">
                          <TableRow>
                            <TableHead className="text-indigo-900">Detail</TableHead>
                            <TableHead className="text-right text-indigo-900">Value</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow className="hover:bg-blue-50">
                            <TableCell className="font-medium">Estimated Net Worth</TableCell>
                            <TableCell className="text-right font-bold text-indigo-700">{formatNetWorth(person.netWorth, person.currency)}</TableCell>
                          </TableRow>
                          <TableRow className="hover:bg-blue-50">
                            <TableCell className="font-medium">Primary Industry</TableCell>
                            <TableCell className="text-right">{person.industry}</TableCell>
                          </TableRow>
                          <TableRow className="hover:bg-blue-50">
                            <TableCell className="font-medium">Primary Company</TableCell>
                            <TableCell className="text-right">{person.company || "Multiple Ventures"}</TableCell>
                          </TableRow>
                          <TableRow className="hover:bg-blue-50">
                            <TableCell className="font-medium">Country of Residence</TableCell>
                            <TableCell className="text-right">{person.country}</TableCell>
                          </TableRow>
                          <TableRow className="hover:bg-blue-50">
                            <TableCell className="font-medium">Age</TableCell>
                            <TableCell className="text-right">{person.age} years</TableCell>
                          </TableRow>
                          <TableRow className="hover:bg-blue-50">
                            <TableCell className="font-medium">Information Source</TableCell>
                            <TableCell className="text-right">{person.source}</TableCell>
                          </TableRow>
                          <TableRow className="hover:bg-blue-50">
                            <TableCell className="font-medium">Last Updated</TableCell>
                            <TableCell className="text-right">{person.lastUpdated}</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-r from-indigo-50 to-blue-50 border-none shadow-sm">
                    <CardContent className="p-5">
                      <h3 className="font-medium mb-3 flex items-center text-indigo-800">
                        <Info className="h-4 w-4 mr-2" />
                        How We Calculate Net Worth
                      </h3>
                      <p className="text-sm text-gray-700">
                        Our net worth calculations include public holdings, estimated private assets, real estate, and other valuable possessions based on publicly available information. Values are approximated and converted to {person.currency} using current exchange rates.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="similar" className="pt-6 px-8 pb-8">
                  <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-indigo-600" />
                    Similar Wealthy Individuals
                  </h2>
                  
                  {similarPeople.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {similarPeople.map((similarPerson, index) => (
                        <motion.div 
                          key={similarPerson.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <Card className="overflow-hidden hover:shadow-md transition-shadow border border-gray-200 h-full">
                            <Link 
                              to={`/net-worth/${similarPerson.slug}`}
                              className="block h-full"
                            >
                              <CardContent className="p-4 flex items-center h-full">
                                <Avatar className="h-12 w-12 mr-4">
                                  <AvatarImage src={similarPerson.imageUrl || "/placeholder.svg"} alt={similarPerson.name} />
                                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-xs">
                                    {getInitials(similarPerson.name)}
                                  </AvatarFallback>
                                </Avatar>
                                
                                <div className="flex-1">
                                  <div className="text-indigo-700 font-medium group-hover:underline transition-colors">
                                    {similarPerson.name}
                                  </div>
                                  
                                  <div className="text-gray-700 font-bold mt-1">
                                    {formatNetWorth(similarPerson.netWorth, similarPerson.currency)}
                                  </div>
                                  
                                  <div className="flex items-center text-xs text-gray-600 mt-1">
                                    <Badge variant="outline" className="text-xs bg-indigo-50 text-indigo-700 border-indigo-200">
                                      {similarPerson.industry}
                                    </Badge>
                                    <span className="mx-2">•</span>
                                    <span>{similarPerson.country}</span>
                                  </div>
                                </div>
                                <ArrowRight className="w-4 h-4 text-indigo-400" />
                              </CardContent>
                            </Link>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <Card>
                      <CardContent className="p-6 text-center">
                        <p className="text-gray-600">No similar individuals found</p>
                      </CardContent>
                    </Card>
                  )}
                  
                  <div className="text-center mt-6">
                    <Button 
                      variant="outline" 
                      className="bg-white hover:bg-indigo-50 border-indigo-200 text-indigo-700 hover:text-indigo-800 transition-all"
                      onClick={() => navigate('/net-worth')}
                    >
                      View All Wealthy Individuals
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="border-t border-gray-200 py-8 bg-white">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <p>
            &copy; {new Date().getFullYear()} MoneyWorth. All rights reserved.
          </p>
          <div className="mt-2 text-xs text-gray-500">
            Wealth data is for informational purposes only. Values may not be accurate.
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default NetWorthDetail;
