
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SEO from "../components/SEO";
import ShareButton from "../components/ShareButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar, User, ArrowRight, Building, MapPin, Banknote, Award, Info } from "lucide-react";
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
  const similarPeople = person ? getSimilarPeople(person, 10) : [];
  
  // Simulate loading from API
  useEffect(() => {
    setIsLoading(true);
    // Simulate network delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100); // Reduced from 800ms to 100ms for faster loading
    
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
            <Button onClick={() => window.location.href = '/net-worth'} className="mt-4">
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
      transition={{ duration: 0.3 }} // Reduced from 0.5 to 0.3 for faster animation
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
            <a 
              href="/net-worth"
              className="inline-flex items-center text-sm text-[#000000] hover:underline"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              All Wealthy Individuals
            </a>
            
            <ShareButton 
              title={`${person.name} Net Worth: ${formattedNetWorthForTitle} - SalaryList`} 
              variant="outline"
            />
          </div>
          
          <article className="bg-white p-6 sm:p-8 rounded-md shadow-sm mb-8">
            <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
              <Avatar className="h-24 w-24 rounded-full border-2 border-gray-100 shadow-sm">
                <AvatarImage src={person.imageUrl || "/placeholder.svg"} alt={person.name} />
                <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-lg font-medium">
                  {getInitials(person.name)}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-[#333] mb-2">
                  {person.name} Net Worth
                </h1>
                
                <div className="flex flex-wrap items-center gap-3 text-sm text-[#666] mb-3">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1 text-[#999]" />
                    <span>{person.age} years old</span>
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
                
                <div className="text-xl font-semibold text-[#333]">
                  {formatNetWorth(person.netWorth, person.currency)}
                </div>
                
                <div className="flex items-center mt-1">
                  <Calendar className="h-4 w-4 mr-1 text-[#999]" />
                  <span className="text-xs text-gray-500">Updated: {person.lastUpdated}</span>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-100 pt-6 mb-6"></div>
            
            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <div className="grid md:grid-cols-3 gap-2">
                <div className="flex flex-col items-center bg-white p-4 rounded border border-gray-100">
                  <div className="text-gray-600 text-sm mb-1">Net Worth</div>
                  <div className="text-xl font-bold">{formatNetWorth(person.netWorth, person.currency)}</div>
                  <div className="text-gray-500 text-xs mt-1">Source: {person.source}</div>
                </div>
                <div className="flex flex-col items-center bg-white p-4 rounded border border-gray-100">
                  <div className="text-gray-600 text-sm mb-1">Occupation</div>
                  <div className="text-lg font-medium">{person.occupation}</div>
                  <div className="text-gray-500 text-xs mt-1">{person.industry}</div>
                </div>
                <div className="flex flex-col items-center bg-white p-4 rounded border border-gray-100">
                  <div className="text-gray-600 text-sm mb-1">Company</div>
                  <div className="text-lg font-medium">{person.company || "Multiple Ventures"}</div>
                  <div className="text-gray-500 text-xs mt-1">{person.country}</div>
                </div>
              </div>
            </div>
            
            <div className="prose prose-sm sm:prose max-w-none mb-8">
              <h2 className="text-xl font-semibold mb-3">About {person.name}</h2>
              <p className="text-gray-700 leading-relaxed">
                {person.description}
              </p>
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
                    <TableCell className="text-right">{person.age} years</TableCell>
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
          
          {/* Similar People Section */}
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
                    transition={{ duration: 0.2, delay: index * 0.03 }} // Reduced animation times
                    className="group py-3 px-6 sm:px-8"
                  >
                    <div className="flex items-center">
                      <div className="pr-3 text-center hidden sm:block">
                        <span className="text-gray-500 text-sm">{index + 1}</span>
                      </div>
                      
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src={similarPerson.imageUrl || "/placeholder.svg"} alt={similarPerson.name} />
                        <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-xs">
                          {getInitials(similarPerson.name)}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <a 
                          href={`/net-worth/${similarPerson.slug}`}
                          className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-blog-accent"
                        >
                          {similarPerson.name}
                        </a>
                        
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
                  onClick={() => window.location.href = '/net-worth'}
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
            &copy; {new Date().getFullYear()} SalaryList. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default NetWorthDetail;
