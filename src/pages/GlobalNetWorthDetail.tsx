
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SEO from "../components/SEO";
import ShareButton from "../components/ShareButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar, User, ArrowRight, Building, MapPin, Banknote, Award, Info } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import AdSense from "../components/AdSense";
import { 
  findPersonBySlug,
  formatNetWorth,
  getSimilarPeople,
  NetWorthPerson,
  formatAge,
  generateDynamicDescription
} from "../utils/globalNetWorthData";

const NetWorthDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  const person = findPersonBySlug(slug || "");
  const similarPeople = person ? getSimilarPeople(person, 10) : [];
  
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [slug]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f6f6f0]">
        <Header />
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="h-8 mb-6"></div>
            <div className="bg-white p-6 sm:p-8 rounded-md shadow-sm mb-8">
              <div className="flex items-start gap-4 mb-6">
                <Skeleton className="h-16 w-16 rounded-full" />
                <div className="flex-1">
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
          </div>
        </main>
      </div>
    );
  }

  if (!person) {
    return (
      <div className="min-h-screen bg-[#f6f6f0] flex items-center justify-center">
        <Header />
        <Card>
          <CardContent className="p-6">
            <p>Person not found. Please try another search.</p>
            <Button onClick={() => navigate('/net-worth')} className="mt-4">
              Back to Net Worth List
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const formattedNetWorthForTitle = formatNetWorth(person.netWorth, person.currency).replace(/\s/g, "");
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  const getFormattedDescription = (person: NetWorthPerson) => {
    const birthYear = formatAge(person.dateOfBirth);
    const isFemale = person.gender.toLowerCase() === 'female';
    const pronoun = isFemale ? 'she' : 'he';
    const possessive = isFemale ? 'her' : 'his';
    
    return `${person.name} has an estimated net worth of ${formatNetWorth(person.netWorth, person.currency)}, ${pronoun} has made ${possessive} fortune primarily through ${possessive} work in the ${person.industry.toLowerCase()} industry. Born in ${birthYear}, ${person.name} is a ${person.occupation.toLowerCase()} based in ${person.country}.`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title={`${person.name} Net Worth: ${formattedNetWorthForTitle}`}
        description={`${person.name}'s estimated net worth is ${formatNetWorth(person.netWorth, person.currency)}. Learn about their wealth, career, and ${person.industry} business ventures.`}
        canonicalUrl={`/net-worth/${person.slug}`}
      />
      
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center justify-between mb-6">
            <Link 
              to="/net-worth"
              className="inline-flex items-center text-sm text-[#000000] hover:underline"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              All Wealthy Individuals
            </Link>
            
            <ShareButton 
              title={`${person.name} Net Worth: ${formattedNetWorthForTitle} - SoExpensive`} 
              variant="outline"
            />
          </div>
          
          <div className="mb-4">
            <AdSense slot="9889084223" format="auto" className="py-3" />
          </div>
          
          <article className="bg-white p-6 sm:p-8 rounded-md shadow-sm mb-8">
            <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
              <Avatar className="h-24 w-24 rounded-lg border-2 border-gray-100 shadow-sm">
                <AvatarImage 
                  src={person.imageUrl || "/placeholder.svg"} 
                  alt={person.name}
                  className="object-cover rounded-lg"
                />
                <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-lg font-medium rounded-lg">
                  {getInitials(person.name)}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-[#333] mb-2">
                  {person.name} Net Worth
                </h1>
                
                <div className="flex flex-wrap items-center gap-3 text-sm text-[#666] mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-[#999]" />
                    <span>Birthdate: {formatAge(person.dateOfBirth)}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-[#999]" />
                    <span>{person.country}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Badge variant="outline" className="px-2 py-0 h-5 text-xs">
                      {person.industry}
                    </Badge>
                  </div>
                </div>
                
                <div className="text-xl font-semibold text-green-600">
                  Estimated Net Worth of {formatNetWorth(person.netWorth, person.currency)}
                </div>
                
                <div className="flex items-center mt-1">
                  <Calendar className="h-4 w-4 mr-1 text-[#999]" />
                  <span className="text-xs text-gray-500">Updated: {person.lastUpdated}</span>
                </div>
              </div>
            </div>
            
            <div className="prose prose-sm sm:prose max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed">
                {getFormattedDescription(person)}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="hover:shadow-md transition-shadow duration-300">
                <CardHeader className="border-b border-gray-100 pb-3">
                  <CardTitle className="text-base flex items-center text-gray-800">
                    <User className="h-5 w-5 mr-3 text-gray-500" />
                    Personal Profile
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <dl className="grid grid-cols-2 gap-2 text-sm">
                    <dt className="text-gray-600 font-normal">Full Name</dt>
                    <dd className="text-right font-medium text-gray-800">{person.name}</dd>
                    
                    <dt className="text-gray-600 font-normal">Birthdate</dt>
                    <dd className="text-right font-medium text-gray-800">
                      {person.dateOfBirth}
                    </dd>
                    
                    <dt className="text-gray-600 font-normal">Country</dt>
                    <dd className="text-right font-medium text-gray-800">{person.country}</dd>
                  </dl>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow duration-300">
                <CardHeader className="border-b border-gray-100 pb-3">
                  <CardTitle className="text-base flex items-center text-gray-800">
                    <Building className="h-5 w-5 mr-3 text-gray-500" />
                    Business Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <dl className="grid grid-cols-2 gap-2 text-sm">
                    <dt className="text-gray-600 font-normal">Wealth Source</dt>
                    <dd className="text-right font-medium text-gray-800">{person.industry}</dd>
                    
                    {person.company && (
                      <>
                        <dt className="text-gray-600 font-normal">Company</dt>
                        <dd className="text-right font-medium text-gray-800">{person.company}</dd>
                      </>
                    )}
                    
                    <dt className="text-gray-600 font-normal">Last Updated</dt>
                    <dd className="text-right font-medium text-gray-800">{person.lastUpdated}</dd>
                    
                    <dt className="text-gray-600 font-normal">Source</dt>
                    <dd className="text-right font-medium text-gray-800">
                      {person.source || "Various sources"}
                    </dd>
                  </dl>
                </CardContent>
              </Card>
            </div>

          <div className="mb-4">
            <AdSense slot="9889084223" format="auto" className="py-3" />
          </div>
            
            <div className="prose prose-sm sm:prose max-w-none mb-8">
              <h2 className="text-xl font-semibold mb-3">About {person.name}</h2>
              <p className="text-gray-700 leading-relaxed">
                {person.description}
              </p>
            </div>
            
            <div className="mb-4">
              <AdSense slot="9889084223" format="auto" className="py-3" />
            </div>
            
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-3">Wealth Details</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Detail</TableHead>
                    <TableHead className="text-right">Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Estimated Net Worth</TableCell>
                    <TableCell className="text-right font-medium">{formatNetWorth(person.netWorth, person.currency)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Occupation</TableCell>
                    <TableCell className="text-right">{person.occupation}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Primary Industry</TableCell>
                    <TableCell className="text-right">{person.industry}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Primary Company</TableCell>
                    <TableCell className="text-right">{person.company || "Multiple Ventures"}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Country of Residence</TableCell>
                    <TableCell className="text-right">{person.country}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Age</TableCell>
                    <TableCell className="text-right">{formatAge(person.dateOfBirth)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Information Source</TableCell>
                    <TableCell className="text-right">{person.source}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Last Updated</TableCell>
                    <TableCell className="text-right">{person.lastUpdated}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div className="bg-[#fff9e6] p-5 rounded-md">
              <h3 className="font-medium mb-3 flex items-center">
                <Info className="h-4 w-4 mr-2" />
                About This Data
              </h3>
              <p className="text-sm text-gray-700">
                Net worth estimates are based on publicly available information and may not reflect the individual's actual wealth. The figures shown here are approximations and subject to change based on market conditions and private investments.
              </p>
            </div>
          </article>

          <div className="mb-4">
            <AdSense slot="9889084223" format="auto" className="py-3" />
          </div>
          
          {similarPeople.length > 0 && (
            <div className="bg-white rounded-md shadow-sm overflow-hidden mb-8">
              <div className="p-6 sm:p-8 border-b border-gray-100">
                <h2 className="text-2xl font-bold mb-2">Similar Wealthy Individuals</h2>
                <p className="text-sm text-gray-600">
                  People with similar net worth or in the same industry
                </p>
              </div>
              
              <div className="divide-y divide-gray-100">
                {similarPeople.map((similarPerson, index) => (
                  <motion.div 
                    key={similarPerson.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group py-3 px-6 sm:px-8"
                  >
                    <div className="flex items-center">
                      <div className="pr-3 text-center hidden sm:block">
                        <span className="text-gray-500 text-sm">{index + 1}</span>
                      </div>
                      
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage 
                          src={similarPerson.imageUrl || "/placeholder.svg"} 
                          alt={similarPerson.name}
                          className="object-cover"
                        />
                        <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-xs">
                          {getInitials(similarPerson.name)}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <Link 
                          to={`/net-worth/${similarPerson.slug}`}
                          className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-blog-accent"
                        >
                          {similarPerson.name}
                        </Link>
                        
                        <div className="flex items-center text-xs text-[#828282]">
                          <span>{formatNetWorth(similarPerson.netWorth, similarPerson.currency)}</span>
                          <span className="mx-1">•</span>
                          <span className="font-medium text-[#555]">{similarPerson.industry}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#999] group-hover:text-[#ff6600] transition-colors opacity-0 group-hover:opacity-100" />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="p-6 sm:p-8 border-t border-gray-100">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate('/net-worth')}
                >
                  View All Wealthy Individuals
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-gray-300 py-6 bg-white">
        <div className="container mx-auto px-4 text-center text-[#828282] text-sm">
          <p>
            &copy; {new Date().getFullYear()} SoExpensive. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default GlobalNetWorthDetail;
