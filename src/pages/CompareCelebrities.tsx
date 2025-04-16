
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useSearchParams, useParams } from 'react-router-dom';
import Header from '../components/Header';
import SEO from '../components/SEO';
import ShareButton from '../components/ShareButton';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, TrendingUp, TrendingDown, Activity, User, MapPin, Building, Banknote, Search } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import AdSense from "../components/AdSense";
import { 
  celebrities,
  formatSalary,
} from "../utils/celebrityData";
import { createComparisonUrl } from "../utils/utils";

// Import the Celebrity type directly from the source
import type { Celebrity } from "../utils/celebrityData";

const CompareCelebrities = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { person1: oldPerson1Slug, person2: oldPerson2Slug, comparison } = useParams();
  
  const [person1Slug, person2Slug] = comparison ? comparison.split('-vs-') : [null, null];
  
  const [person1Id, setPerson1Id] = useState<string | null>(
    person1Slug || oldPerson1Slug || searchParams.get("p1")
  );
  const [person2Id, setPerson2Id] = useState<string | null>(
    person2Slug || oldPerson2Slug || searchParams.get("p2")
  );
  const [person1, setPerson1] = useState<Celebrity | null>(null);
  const [person2, setPerson2] = useState<Celebrity | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Celebrity[]>([]);
  const [activePersonSelect, setActivePersonSelect] = useState<'p1' | 'p2' | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Use the imported celebrities directly
  const allPeople = celebrities;
  
  const findPersonBySlug = (slug: string): Celebrity | null => {
    return allPeople.find(person => person.slug === slug) || null;
  };
  
  useEffect(() => {
    if (person1Id) {
      const found = findPersonBySlug(person1Id);
      if (found) setPerson1(found);
    }
    
    if (person2Id) {
      const found = findPersonBySlug(person2Id);
      if (found) setPerson2(found);
    }
    
    if (!person1Id && !person2Id && allPeople.length >= 2) {
      setPerson1(allPeople[0]);
      setPerson2(allPeople[1]);
      navigateToSEOUrl(allPeople[0].slug, allPeople[1].slug);
    } else if (!person1Id && allPeople.length >= 1) {
      setPerson1(allPeople[0]);
      updateUrlParams(allPeople[0].slug, person2Id);
    } else if (!person2Id && allPeople.length >= 2) {
      setPerson2(allPeople[1]);
      updateUrlParams(person1Id, allPeople[1].slug);
    }
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [person1Id, person2Id]);
  
  useEffect(() => {
    if (searchTerm.length > 1) {
      const results = allPeople
        .filter(person => 
          person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          person.profession.toLowerCase().includes(searchTerm.toLowerCase()) ||
          person.industry.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(0, 5);
      
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);
  
  const updateUrlParams = (p1: string | null, p2: string | null) => {
    if (p1 && p2) {
      navigateToSEOUrl(p1, p2);
    } else {
      const params: Record<string, string> = {};
      if (p1) params.p1 = p1;
      if (p2) params.p2 = p2;
      setSearchParams(params);
    }
  };
  
  const navigateToSEOUrl = (p1: string, p2: string) => {
    navigate(createComparisonUrl(p1, p2));
  };
  
  const selectPerson = (person: Celebrity) => {
    if (activePersonSelect === 'p1') {
      setPerson1(person);
      if (person2) {
        navigateToSEOUrl(person.slug, person2.slug);
      } else {
        updateUrlParams(person.slug, person2Id);
      }
    } else if (activePersonSelect === 'p2') {
      setPerson2(person);
      if (person1) {
        navigateToSEOUrl(person1.slug, person.slug);
      } else {
        updateUrlParams(person1Id, person.slug);
      }
    }
    
    setActivePersonSelect(null);
    setSearchTerm("");
  };
  
  const getSalaryDifferencePercentage = () => {
    if (!person1 || !person2) return 0;
    const person1Salary = person1.salary;
    const person2Salary = person2.salary;
    
    if (person1Salary === person2Salary) return 0;
    
    const difference = Math.abs(person1Salary - person2Salary);
    const lower = Math.min(person1Salary, person2Salary);
    
    return Math.round((difference / lower) * 100);
  };
  
  const getSalaryDifference = () => {
    if (!person1 || !person2) return 0;
    return Math.abs(person1.salary - person2.salary);
  };
  
  const getHigherEarningPerson = () => {
    if (!person1 || !person2) return null;
    return person1.salary > person2.salary ? person1 : person2;
  };

  const getLowerEarningPerson = () => {
    if (!person1 || !person2) return null;
    return person1.salary < person2.salary ? person1 : person2;
  };
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  const generateComparisonText = () => {
    if (!person1 || !person2) return "";
    
    const higher = getHigherEarningPerson();
    const lower = getLowerEarningPerson();
    const difference = getSalaryDifference();
    const percentage = getSalaryDifferencePercentage();
    
    let text = `${higher?.name} earns more than ${lower?.name} with a salary of ${formatSalary(higher?.salary || 0, "yearly")}. `;
    
    text += `This is ${formatSalary(difference, "yearly")} or ${percentage}% more than ${lower?.name}'s salary of ${formatSalary(lower?.salary || 0, "yearly")}. `;
    
    if (higher?.industry === lower?.industry) {
      text += `Both celebrities work in the ${higher?.industry} industry. `;
    } else {
      text += `While ${higher?.name} works in the ${higher?.industry} industry, ${lower?.name} works in the ${lower?.industry} industry. `;
    }
    
    if (higher?.country === lower?.country) {
      text += `Both are from ${higher?.country}. `;
    } else {
      text += `${higher?.name} is from ${higher?.country}, while ${lower?.name} is from ${lower?.country}. `;
    }
    
    const ageDiff = Math.abs(higher?.age - (lower?.age || 0));
    if (ageDiff > 0) {
      text += `There is a ${ageDiff} year age difference between them, with ${higher?.name} being ${higher?.age > (lower?.age || 0) ? 'older' : 'younger'}. `;
    }
    
    return text;
  };
  
  const higherEarningPerson = getHigherEarningPerson();
  const lowerEarningPerson = getLowerEarningPerson();
  const salaryDifference = getSalaryDifference();
  const percentageDifference = getSalaryDifferencePercentage();
  const comparisonText = generateComparisonText();
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f6f6f0]">
        <Header />
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="h-8 mb-6"></div>
            <div className="animate-pulse">
              <div className="bg-white p-6 rounded-md shadow-sm mb-8">
                <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-100 p-4 rounded">
                    <div className="h-16 bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded">
                    <div className="h-16 bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title={person1 && person2 ? `${person1.name} vs ${person2.name} Salary - Who Earns More?` : "Celebrity Salary Comparison"}
        description={person1 && person2 ? `Compare the salary of ${person1.name} (${formatSalary(person1.salary, "yearly")}) and ${person2.name} (${formatSalary(person2.salary, "yearly")}). Find out who earns more and by how much.` : "Compare the salaries of celebrities and famous individuals."}
        canonicalUrl={person1 && person2 ? `/compare-celebrities/${person1.slug}-vs-${person2.slug}` : "/compare-celebrities"}
      />
      
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                className="text-sm text-[#000000] hover:bg-white/60 mr-2"
                onClick={() => navigate('/celebrities')}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Celebrities
              </Button>
            </div>
            
            <ShareButton 
              title={person1 && person2 ? `${person1.name} vs ${person2.name} - Who earns more?` : "Celebrity Salary Comparison"} 
              variant="outline"
            />
          </div>
          
          <div className="mb-4">
            <AdSense slot="9889084223" format="auto" className="py-3" />
          </div>
          
          <div className="bg-white p-6 sm:p-8 rounded-md shadow-sm mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">
              {person1 && person2 ? `${person1.name} vs ${person2.name} - Who Earns More?` : "Celebrity Salary Comparison"}
            </h1>
            
            <p className="text-gray-600 text-center mb-8">
              {person1 && person2 
                ? `Compare the salary and details between ${person1.name} and ${person2.name}.` 
                : "Select two celebrities to compare their earnings."}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Dialog open={activePersonSelect === 'p1'} onOpenChange={(open) => !open && setActivePersonSelect(null)}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      {person1 ? (
                        <div className="flex items-center">
                          <Avatar className="h-16 w-16 mr-4">
                            <AvatarImage src={person1.imageUrl || "/placeholder.svg"} alt={person1.name} />
                            <AvatarFallback>{getInitials(person1.name)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="text-lg font-bold mb-1">{person1.name}</h3>
                            <p className="text-gray-600 text-sm">{person1.profession}</p>
                            <p className="text-lg font-semibold mt-1">{formatSalary(person1.salary, "yearly")}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-24">
                          <Button 
                            variant="outline" 
                            onClick={() => setActivePersonSelect('p1')}
                          >
                            <User className="h-4 w-4 mr-2" />
                            Select Celebrity 1
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Select First Celebrity to Compare</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="flex items-center space-x-2">
                      <Search className="h-4 w-4 text-gray-400" />
                      <Input 
                        placeholder="Search by name, profession, or industry..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-1"
                      />
                    </div>
                    <div className="border rounded-md overflow-hidden">
                      {searchResults.length > 0 ? (
                        <div className="divide-y">
                          {searchResults.map(person => (
                            <div 
                              key={person.id} 
                              className="p-3 hover:bg-gray-50 cursor-pointer flex items-center"
                              onClick={() => selectPerson(person)}
                            >
                              <Avatar className="h-10 w-10 mr-3">
                                <AvatarImage src={person.imageUrl || "/placeholder.svg"} alt={person.name} />
                                <AvatarFallback>{getInitials(person.name)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">{person.name}</p>
                                <p className="text-sm text-gray-500">{formatSalary(person.salary, "yearly")} • {person.industry}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : searchTerm.length > 1 ? (
                        <p className="p-3 text-center text-gray-500">No results found</p>
                      ) : (
                        <div className="p-3 text-center text-gray-500">
                          Type to search for celebrities
                        </div>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog open={activePersonSelect === 'p2'} onOpenChange={(open) => !open && setActivePersonSelect(null)}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      {person2 ? (
                        <div className="flex items-center">
                          <Avatar className="h-16 w-16 mr-4">
                            <AvatarImage src={person2.imageUrl || "/placeholder.svg"} alt={person2.name} />
                            <AvatarFallback>{getInitials(person2.name)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="text-lg font-bold mb-1">{person2.name}</h3>
                            <p className="text-gray-600 text-sm">{person2.profession}</p>
                            <p className="text-lg font-semibold mt-1">{formatSalary(person2.salary, "yearly")}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-24">
                          <Button 
                            variant="outline" 
                            onClick={() => setActivePersonSelect('p2')}
                          >
                            <User className="h-4 w-4 mr-2" />
                            Select Celebrity 2
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Select Second Celebrity to Compare</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="flex items-center space-x-2">
                      <Search className="h-4 w-4 text-gray-400" />
                      <Input 
                        placeholder="Search by name, profession, or industry..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-1"
                      />
                    </div>
                    <div className="border rounded-md overflow-hidden">
                      {searchResults.length > 0 ? (
                        <div className="divide-y">
                          {searchResults.map(person => (
                            <div 
                              key={person.id} 
                              className="p-3 hover:bg-gray-50 cursor-pointer flex items-center"
                              onClick={() => selectPerson(person)}
                            >
                              <Avatar className="h-10 w-10 mr-3">
                                <AvatarImage src={person.imageUrl || "/placeholder.svg"} alt={person.name} />
                                <AvatarFallback>{getInitials(person.name)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">{person.name}</p>
                                <p className="text-sm text-gray-500">{formatSalary(person.salary, "yearly")} • {person.industry}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : searchTerm.length > 1 ? (
                        <p className="p-3 text-center text-gray-500">No results found</p>
                      ) : (
                        <div className="p-3 text-center text-gray-500">
                          Type to search for celebrities
                        </div>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            {person1 && person2 && (
              <>
                <Card className="mb-8 bg-gray-50">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-center mb-6">Comparison Results</h2>
                    
                    <div className="bg-white p-4 rounded-lg border mb-4">
                      <div className="text-center">
                        <Badge className="mb-2" variant="outline">
                          {higherEarningPerson?.name} Earns More
                        </Badge>
                        <h3 className="text-lg font-bold mb-1">
                          {higherEarningPerson?.name} earns more by {formatSalary(salaryDifference, "yearly")}
                        </h3>
                        <p className="text-gray-600">
                          That's {percentageDifference}% more earnings
                        </p>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border mb-4">
                      <p className="text-gray-700 leading-relaxed">
                        {comparisonText}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold mb-2">{person1.name}</h4>
                        <p className="text-lg font-bold">{formatSalary(person1.salary, "yearly")}</p>
                        <p className="text-sm text-gray-600">{person1.industry} • {person1.profession}</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold mb-2">{person2.name}</h4>
                        <p className="text-lg font-bold">{formatSalary(person2.salary, "yearly")}</p>
                        <p className="text-sm text-gray-600">{person2.industry} • {person2.profession}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="mb-4">
                  <AdSense slot="9889084223" format="auto" className="py-3" />
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Detailed Comparison</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Category</TableHead>
                        <TableHead>{person1.name}</TableHead>
                        <TableHead>{person2.name}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Salary</TableCell>
                        <TableCell>{formatSalary(person1.salary, "yearly")}</TableCell>
                        <TableCell>{formatSalary(person2.salary, "yearly")}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Industry</TableCell>
                        <TableCell>{person1.industry}</TableCell>
                        <TableCell>{person2.industry}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Profession</TableCell>
                        <TableCell>{person1.profession}</TableCell>
                        <TableCell>{person2.profession}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Company/Show</TableCell>
                        <TableCell>{person1.company || "Multiple projects"}</TableCell>
                        <TableCell>{person2.company || "Multiple projects"}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Country</TableCell>
                        <TableCell>{person1.country}</TableCell>
                        <TableCell>{person2.country}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Age</TableCell>
                        <TableCell>{person1.age} years</TableCell>
                        <TableCell>{person2.age} years</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </>
            )}
          </div>
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

export default CompareCelebrities;
