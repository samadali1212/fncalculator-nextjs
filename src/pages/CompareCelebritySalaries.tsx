
// src/pages/CompareCelebritySalaries.tsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SEO from '../components/SEO';
import ShareButton from '../components/ShareButton';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, TrendingUp, TrendingDown, Activity, User, MapPin, Building, Banknote, Search, Briefcase, Landmark } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import AdSense from "../components/AdSense";

import { celebrities } from "../utils/celebrityData";
import { formatCurrency, createComparisonUrl } from "../utils/utils";

interface Celebrity {
  id: string;
  slug: string;
  name: string;
  occupation: string;
  salary: number;
  currency: string;
  imageUrl?: string;
  description: string;
  age: number;
  country: string;
  company?: string;
  industry: string;
  source?: string;
  lastUpdated?: string;
}

const CompareCelebritySalaries = () => {
  const { comparison } = useParams<{ comparison: string }>();
  const navigate = useNavigate();

  const [person1Slug, person2Slug] = comparison && comparison.includes('-vs-') 
    ? comparison.split('-vs-') 
    : [null, null];
    
  const [person1Id, setPerson1Id] = useState<string | null>(person1Slug);
  const [person2Id, setPerson2Id] = useState<string | null>(person2Slug);
  const [person1, setPerson1] = useState<Celebrity | null>(null);
  const [person2, setPerson2] = useState<Celebrity | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Celebrity[]>([]);
  const [activePersonSelect, setActivePersonSelect] = useState<'p1' | 'p2' | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const allPeople: Celebrity[] = celebrities;

  const findPersonBySlug = (slug: string): Celebrity | null => {
    return allPeople.find(person => person.slug === slug) || null;
  };

  useEffect(() => {
    setIsLoading(true);
    let foundP1: Celebrity | null = null;
    let foundP2: Celebrity | null = null;

    if (person1Id) {
      foundP1 = findPersonBySlug(person1Id);
      setPerson1(foundP1);
    }
    if (person2Id) {
      foundP2 = findPersonBySlug(person2Id);
      setPerson2(foundP2);
    }
    if (!person1Id && !person2Id && allPeople.length >= 2) {
      setPerson1(allPeople[0]);
      setPerson2(allPeople[1]);
    } else if (!person1Id && allPeople.length >= 1) {
      setPerson1(allPeople[0]);
    } else if (!person2Id && allPeople.length >= 2) {
      const differentPerson = person1Id 
        ? allPeople.find(p => p.slug !== person1Id) || allPeople[1] 
        : allPeople[1];
      setPerson2(differentPerson);
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [person1Id, person2Id, comparison]);

  useEffect(() => {
    if (searchTerm.length > 1) {
      const results = allPeople
        .filter(person =>
          person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          person.occupation.toLowerCase().includes(searchTerm.toLowerCase()) ||
          person.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (person.company && person.company.toLowerCase().includes(searchTerm.toLowerCase()))
        )
        .slice(0, 5);

      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, allPeople]);

  const navigateToSEOUrl = (p1Slug: string, p2Slug: string) => {
    const url = createComparisonUrl(p1Slug, p2Slug, 'salary');
    window.location.href = url;
  };

  const selectPerson = (person: Celebrity) => {
    if (activePersonSelect === 'p1') {
      setPerson1(person);
      if (person2) {
        navigateToSEOUrl(person.slug, person2.slug);
      }
    } else if (activePersonSelect === 'p2') {
      setPerson2(person);
      if (person1) {
        navigateToSEOUrl(person1.slug, person.slug);
      }
    }

    setActivePersonSelect(null);
    setSearchTerm("");
    setSearchResults([]);
  };

  const getSalaryDifferencePercentage = () => {
    if (!person1 || !person2) return 0;
    const person1Salary = person1.salary;
    const person2Salary = person2.salary;

    if (person1Salary === person2Salary || person1Salary <= 0 || person2Salary <= 0) return 0;

    const difference = Math.abs(person1Salary - person2Salary);
    const lower = Math.min(person1Salary, person2Salary);

    return Math.round((difference / lower) * 100);
  };

  const getSalaryDifference = () => {
    if (!person1 || !person2) return 0;
    return Math.abs(person1.salary - person2.salary);
  };

  const getHigherPaidPerson = () => {
    if (!person1 || !person2) return null;
    return person1.salary > person2.salary ? person1 : person2;
  };

  const getLowerPaidPerson = () => {
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

    const higherPaid = getHigherPaidPerson();
    const lowerPaid = getLowerPaidPerson();
    const difference = getSalaryDifference();
    const percentage = getSalaryDifferencePercentage();

    const displayCurrency = higherPaid?.currency || "USD";

    if (!higherPaid || !lowerPaid) return "";

    if (difference === 0) {
      let text = `${person1.name} and ${person2.name} have the same reported salary of ${formatSalary(person1.salary, person1.currency)}. `;
      if (person1.industry === person2.industry) {
        text += `Both work in the ${person1.industry} industry. `;
      } else {
        text += `${person1.name} works in ${person1.industry}, while ${person2.name} is in the ${person2.industry} sector. `;
      }
      if (person1.country === person2.country) {
        text += `Both are from ${person1.country}.`;
      } else {
        text += `${person1.name} is from ${person1.country}, while ${person2.name} is from ${person2.country}.`;
      }
      return text;
    }

    let text = `${higherPaid.name} has a higher salary than ${lowerPaid.name}, earning ${formatSalary(higherPaid.salary, displayCurrency)}. `;
    text += `This is ${formatSalary(difference, displayCurrency)} (${percentage}%) more than ${lowerPaid.name}'s salary of ${formatSalary(lowerPaid.salary, lowerPaid.currency)}. `;

    if (higherPaid.industry === lowerPaid.industry) {
      text += `Both individuals work in the ${higherPaid.industry} industry. `;
    } else {
      text += `While ${higherPaid.name} works in the ${higherPaid.industry} industry, ${lowerPaid.name} is in the ${lowerPaid.industry} sector. `;
    }

    if (higherPaid.country === lowerPaid.country) {
      text += `Both are from ${higherPaid.country}. `;
    } else {
      text += `${higherPaid.name} is from ${higherPaid.country}, while ${lowerPaid.name} is from ${lowerPaid.country}. `;
    }

    const ageDiff = Math.abs(higherPaid.age - lowerPaid.age);
    if (ageDiff > 0) {
      text += `There is a ${ageDiff}-year age difference, with ${higherPaid.name} being ${higherPaid.age > lowerPaid.age ? 'older' : 'younger'}.`;
    } else {
      text += `They are the same age.`
    }

    return text.trim();
  };

  const formatSalary = (value: number, currency: string): string => {
    return formatCurrency(value, currency);
  };

  const salaryDifferenceValue = getSalaryDifference();
  const higherPaidPersonValue = getHigherPaidPerson();
  const lowerPaidPersonValue = getLowerPaidPerson();
  const percentageDifferenceValue = getSalaryDifferencePercentage();
  const comparisonTextValue = generateComparisonText();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f6f6f0]">
        <Header />
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex justify-center items-center h-64">
              <div className="w-16 h-16 border-4 border-blog-accent border-t-transparent rounded-full animate-spin"></div>
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
        title={person1 && person2 ? `${person1.name} vs ${person2.name} Salary - Who Earns More?` : "Salary Comparison"}
        description={person1 && person2 ? `Compare the salary of ${person1.name} (${formatSalary(person1.salary, person1.currency)}) and ${person2.name} (${formatSalary(person2.salary, person2.currency)}). Find out who earns more.` : "Compare the salaries of highly paid individuals."}
        canonicalUrl={person1 && person2 ? `/compare-salaries/${person1.slug}-vs-${person2.slug}` : "/compare-salaries"}
      />

      <Header />

      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Button
                variant="ghost"
                className="text-sm text-[#000000] hover:bg-white/60 mr-2"
                onClick={() => window.location.href = '/celebrities'}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Celebrity List
              </Button>
            </div>

            <ShareButton
              title={person1 && person2 ? `${person1.name} vs ${person2.name} - Who earns more?` : "Salary Comparison"}
              variant="outline"
            />
          </div>

          <div className="mb-4">
            <AdSense slot="YOUR_AD_SLOT_ID_1" format="auto" className="py-3" />
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-md shadow-sm mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">
              {person1 && person2 ? `${person1.name} vs ${person2.name} - Who Earns More?` : "Celebrity Salary Comparison"}
            </h1>

            <p className="text-gray-600 text-center mb-8">
              {person1 && person2
                ? `Compare the salary and career details between ${person1.name} and ${person2.name}.`
                : "Select two celebrities to compare their salaries."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Dialog open={activePersonSelect === 'p1'} onOpenChange={(open) => !open && setActivePersonSelect(null)}>
                <DialogTrigger asChild>
                  <Card
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => setActivePersonSelect('p1')}
                  >
                    <CardContent className="p-6">
                      {person1 ? (
                        <div className="flex items-center">
                          <Avatar className="h-16 w-16 mr-4 flex-shrink-0">
                            <AvatarImage src={person1.imageUrl || "/placeholder.svg"} alt={person1.name} />
                            <AvatarFallback>{getInitials(person1.name)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="text-lg font-bold mb-1">{person1.name}</h3>
                            <p className="text-gray-600 text-sm">{person1.occupation}</p>
                            <p className="text-lg font-semibold mt-1">{formatSalary(person1.salary, person1.currency)}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-24">
                          <div className="text-center">
                            <User className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                            <p>Select First Celebrity</p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Select First Person to Compare</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="flex items-center space-x-2">
                      <Search className="h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search by name, occupation, industry..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-1"
                      />
                    </div>
                    <div className="border rounded-md overflow-hidden max-h-60 overflow-y-auto">
                      {searchResults.length > 0 ? (
                        <div className="divide-y">
                          {searchResults.map(person => (
                            <div
                              key={person.id}
                              className="p-3 hover:bg-gray-50 cursor-pointer flex items-center"
                              onClick={() => selectPerson(person)}
                            >
                              <Avatar className="h-10 w-10 mr-3 flex-shrink-0">
                                <AvatarImage src={person.imageUrl || "/placeholder.svg"} alt={person.name} />
                                <AvatarFallback>{getInitials(person.name)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">{person.name}</p>
                                <p className="text-sm text-gray-500">{formatSalary(person.salary, person.currency)} • {person.industry}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : searchTerm.length > 1 ? (
                        <p className="p-3 text-center text-gray-500">No results found</p>
                      ) : (
                        <div className="p-3 text-center text-gray-500">
                          Type to search for people
                        </div>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog open={activePersonSelect === 'p2'} onOpenChange={(open) => !open && setActivePersonSelect(null)}>
                <DialogTrigger asChild>
                  <Card
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => setActivePersonSelect('p2')}
                  >
                    <CardContent className="p-6">
                      {person2 ? (
                        <div className="flex items-center">
                          <Avatar className="h-16 w-16 mr-4 flex-shrink-0">
                            <AvatarImage src={person2.imageUrl || "/placeholder.svg"} alt={person2.name} />
                            <AvatarFallback>{getInitials(person2.name)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="text-lg font-bold mb-1">{person2.name}</h3>
                            <p className="text-gray-600 text-sm">{person2.occupation}</p>
                            <p className="text-lg font-semibold mt-1">{formatSalary(person2.salary, person2.currency)}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-24">
                          <div className="text-center">
                            <User className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                            <p>Select Second Celebrity</p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Select Second Person to Compare</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="flex items-center space-x-2">
                      <Search className="h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search by name, occupation, industry..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-1"
                      />
                    </div>
                    <div className="border rounded-md overflow-hidden max-h-60 overflow-y-auto">
                      {searchResults.length > 0 ? (
                        <div className="divide-y">
                          {searchResults.map(person => (
                            <div
                              key={person.id}
                              className="p-3 hover:bg-gray-50 cursor-pointer flex items-center"
                              onClick={() => selectPerson(person)}
                            >
                              <Avatar className="h-10 w-10 mr-3 flex-shrink-0">
                                <AvatarImage src={person.imageUrl || "/placeholder.svg"} alt={person.name} />
                                <AvatarFallback>{getInitials(person.name)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">{person.name}</p>
                                <p className="text-sm text-gray-500">{formatSalary(person.salary, person.currency)} • {person.industry}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : searchTerm.length > 1 ? (
                        <p className="p-3 text-center text-gray-500">No results found</p>
                      ) : (
                        <div className="p-3 text-center text-gray-500">
                          Type to search for people
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
                        {salaryDifferenceValue === 0 ? (
                            <Badge className="mb-2" variant="secondary">Salaries are Equal</Badge>
                          ) : (
                            <Badge className="mb-2" variant="outline">
                              {higherPaidPersonValue?.name} Earns More
                            </Badge>
                          )}

                        {salaryDifferenceValue === 0 ? (
                            <h3 className="text-lg font-bold mb-1">
                                Both earn {formatSalary(person1.salary, person1.currency)}
                            </h3>
                          ) : (
                            <>
                              <h3 className="text-lg font-bold mb-1">
                                {higherPaidPersonValue?.name} earns {formatSalary(salaryDifferenceValue, higherPaidPersonValue?.currency || "USD")} more
                              </h3>
                              <p className="text-gray-600">
                                That's {percentageDifferenceValue}% more salary
                              </p>
                            </>
                          )}
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border mb-6">
                      <p className="text-gray-700 leading-relaxed">
                        {comparisonTextValue}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold mb-2">{person1.name}</h4>
                        <p className="text-lg font-bold">{formatSalary(person1.salary, person1.currency)}</p>
                        <p className="text-sm text-gray-600">{person1.industry} • {person1.occupation}</p>
                        {person1.company && <p className="text-sm text-gray-500">Company: {person1.company}</p>}
                      </div>
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold mb-2">{person2.name}</h4>
                        <p className="text-lg font-bold">{formatSalary(person2.salary, person2.currency)}</p>
                        <p className="text-sm text-gray-600">{person2.industry} • {person2.occupation}</p>
                        {person2.company && <p className="text-sm text-gray-500">Company: {person2.company}</p>}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mb-4">
                  <AdSense slot="YOUR_AD_SLOT_ID_2" format="auto" className="py-3" />
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Detailed Comparison</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[150px]">Category</TableHead>
                        <TableHead>{person1.name}</TableHead>
                        <TableHead>{person2.name}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium"><Banknote className="inline h-4 w-4 mr-1"/> Salary</TableCell>
                        <TableCell>{formatSalary(person1.salary, person1.currency)}</TableCell>
                        <TableCell>{formatSalary(person2.salary, person2.currency)}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium"><Activity className="inline h-4 w-4 mr-1"/> Industry</TableCell>
                        <TableCell>{person1.industry}</TableCell>
                        <TableCell>{person2.industry}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium"><Briefcase className="inline h-4 w-4 mr-1"/> Occupation</TableCell>
                        <TableCell>{person1.occupation}</TableCell>
                        <TableCell>{person2.occupation}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium"><Landmark className="inline h-4 w-4 mr-1"/> Company</TableCell>
                        <TableCell>{person1.company || "N/A"}</TableCell>
                        <TableCell>{person2.company || "N/A"}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium"><MapPin className="inline h-4 w-4 mr-1"/> Country</TableCell>
                        <TableCell>{person1.country}</TableCell>
                        <TableCell>{person2.country}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium"><User className="inline h-4 w-4 mr-1"/> Age</TableCell>
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

export default CompareCelebritySalaries;
