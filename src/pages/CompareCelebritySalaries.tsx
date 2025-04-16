// src/pages/CompareCelebritySalaries.tsx (or your appropriate path)

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useSearchParams, useParams } from 'react-router-dom';
import Header from '../components/Header'; // Assuming Header path is correct
import SEO from '../components/SEO'; // Assuming SEO path is correct
import ShareButton from '../components/ShareButton'; // Assuming ShareButton path is correct
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, TrendingUp, TrendingDown, Activity, User, MapPin, Building, Banknote, Search, Briefcase, Landmark } from "lucide-react"; // Added Briefcase, Landmark
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import AdSense from "../components/AdSense"; // Assuming AdSense path is correct

// Changed: Import celebrity data and formatting function
import { celebrityData } from "../utils/celebrityData"; // Adjust path as needed
import { formatSalary } from "../utils/formattingUtils"; // Assuming a formatting utility file
import { createComparisonUrl } from "../utils/utils"; // Assuming utils path is correct

// Changed: Define the interface based on celebrityData structure
interface Celebrity {
  id: string; // Assuming uuidv4 generates strings
  slug: string;
  name: string;
  occupation: string;
  salary: number; // Changed from netWorth
  currency: string;
  imageUrl?: string;
  description: string;
  age: number;
  country: string;
  company?: string;
  industry: string;
  source?: string; // Optional field from your data
  lastUpdated?: string; // Optional field from your data
}

// Changed: Renamed component
const CompareCelebritySalaries = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  // Changed: Use 'comparison' param which contains slug1-vs-slug2
  const { comparison } = useParams<{ comparison: string }>();

  // Changed: Extract slugs from the 'comparison' parameter
  const [person1Slug, person2Slug] = comparison ? comparison.split('-vs-') : [null, null];

  // Changed: Initialize state using extracted slugs or search params
  const [person1Id, setPerson1Id] = useState<string | null>(person1Slug || searchParams.get("p1"));
  const [person2Id, setPerson2Id] = useState<string | null>(person2Slug || searchParams.get("p2"));

  // Changed: Use the Celebrity interface for state
  const [person1, setPerson1] = useState<Celebrity | null>(null);
  const [person2, setPerson2] = useState<Celebrity | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  // Changed: Use the Celebrity interface for search results
  const [searchResults, setSearchResults] = useState<Celebrity[]>([]);
  const [activePersonSelect, setActivePersonSelect] = useState<'p1' | 'p2' | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Changed: Use celebrityData
  const allPeople: Celebrity[] = celebrityData;

  // Changed: Function now finds a Celebrity
  const findPersonBySlug = (slug: string): Celebrity | null => {
    return allPeople.find(person => person.slug === slug) || null;
  };

  useEffect(() => {
    setIsLoading(true); // Start loading when IDs change
    let foundP1: Celebrity | null = null;
    let foundP2: Celebrity | null = null;

    if (person1Id) {
      foundP1 = findPersonBySlug(person1Id);
      setPerson1(foundP1);
    } else {
      setPerson1(null); // Clear if ID is null
    }

    if (person2Id) {
      foundP2 = findPersonBySlug(person2Id);
      setPerson2(foundP2);
    } else {
      setPerson2(null); // Clear if ID is null
    }

    // Handle initial state or invalid slugs
    if (!comparison && !person1Id && !person2Id && allPeople.length >= 2) {
      // If no params and enough data, set defaults and update URL
      setPerson1(allPeople[0]);
      setPerson2(allPeople[1]);
      navigateToSEOUrl(allPeople[0].slug, allPeople[1].slug);
    } else if (person1Id && !foundP1) {
      // Handle invalid slug for person 1 (optional: show error or redirect)
      console.warn(`Person 1 with slug ${person1Id} not found.`);
      // Potentially navigate back or show a message
    } else if (person2Id && !foundP2) {
      // Handle invalid slug for person 2
      console.warn(`Person 2 with slug ${person2Id} not found.`);
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Shorter delay might feel better

    return () => clearTimeout(timer);
  }, [person1Id, person2Id, comparison]); // Rerun when slugs change

  useEffect(() => {
    if (searchTerm.length > 1) {
      const results = allPeople
        .filter(person =>
          person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          person.occupation.toLowerCase().includes(searchTerm.toLowerCase()) ||
          person.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (person.company && person.company.toLowerCase().includes(searchTerm.toLowerCase()))
        )
        .slice(0, 5); // Limit results

      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, allPeople]); // Added allPeople dependency

  // Helper to update URL parameters (used less now with SEO URLs)
  const updateUrlParams = (p1: string | null, p2: string | null) => {
    const params: Record<string, string> = {};
    if (p1) params.p1 = p1;
    if (p2) params.p2 = p2;
    setSearchParams(params, { replace: true }); // Use replace to avoid history clutter
  };

  // Navigate to the SEO-friendly URL format: /compare/slug1-vs-slug2
  const navigateToSEOUrl = (p1Slug: string, p2Slug: string) => {
    navigate(createComparisonUrl(p1Slug, p2Slug), { replace: true });
  };

  // Changed: Function now selects a Celebrity
  const selectPerson = (person: Celebrity) => {
    if (activePersonSelect === 'p1') {
      setPerson1(person);
      // If person 2 exists, update the SEO URL
      if (person2) {
        navigateToSEOUrl(person.slug, person2.slug);
      } else {
        // Otherwise, just update the internal ID state (URL updates via useEffect)
        setPerson1Id(person.slug);
      }
    } else if (activePersonSelect === 'p2') {
      setPerson2(person);
      // If person 1 exists, update the SEO URL
      if (person1) {
        navigateToSEOUrl(person1.slug, person.slug);
      } else {
        // Otherwise, just update the internal ID state
        setPerson2Id(person.slug);
      }
    }

    setActivePersonSelect(null);
    setSearchTerm("");
    setSearchResults([]); // Clear search results after selection
  };

  // Changed: Calculate salary difference percentage
  const getSalaryDifferencePercentage = () => {
    if (!person1 || !person2) return 0;
    const person1Salary = person1.salary;
    const person2Salary = person2.salary;

    if (person1Salary === person2Salary || person1Salary <= 0 || person2Salary <= 0) return 0; // Avoid division by zero or negative salary issues

    const difference = Math.abs(person1Salary - person2Salary);
    const lower = Math.min(person1Salary, person2Salary);

    return Math.round((difference / lower) * 100);
  };

  // Changed: Calculate absolute salary difference
  const getSalaryDifference = () => {
    if (!person1 || !person2) return 0;
    return Math.abs(person1.salary - person2.salary);
  };

  // Changed: Get the higher paid person
  const getHigherPaidPerson = () => {
    if (!person1 || !person2) return null;
    return person1.salary > person2.salary ? person1 : person2;
  };

  // Changed: Get the lower paid person
  const getLowerPaidPerson = () => {
      if (!person1 || !person2) return null;
      // Handle tie-case explicitly if needed, otherwise defaults to person2 in case of equality
      return person1.salary < person2.salary ? person1 : person2;
  };


  // Helper for Avatar fallbacks
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  // Changed: Generate comparison text focusing on salary
  const generateComparisonText = () => {
    if (!person1 || !person2) return "";

    const higherPaid = getHigherPaidPerson();
    const lowerPaid = getLowerPaidPerson();
    const difference = getSalaryDifference();
    const percentage = getSalaryDifferencePercentage();

    // Determine currency (use higher paid person's currency or default)
    const displayCurrency = higherPaid?.currency || "USD";

    if (!higherPaid || !lowerPaid) return ""; // Should not happen if person1 and person2 exist

    // Handle the case where salaries are equal
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

    // Normal comparison text
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

  // Pre-calculate values for rendering
  const higherPaidPerson = getHigherPaidPerson();
  const lowerPaidPerson = getLowerPaidPerson();
  const salaryDifference = getSalaryDifference();
  const percentageDifference = getSalaryDifferencePercentage();
  const comparisonText = generateComparisonText();

  // Loading State UI
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f6f6f0]">
        <Header />
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4 max-w-5xl">
             {/* Basic Loading Indicator */}
             <div className="flex justify-center items-center h-64">
                <p className="text-gray-500">Loading comparison...</p>
             </div>
          </div>
        </main>
      </div>
    );
  }

  // Main Component Render
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      {/* Changed: SEO details for salary comparison */}
      <SEO
        title={person1 && person2 ? `${person1.name} vs ${person2.name} Salary - Who Earns More?` : "Salary Comparison"}
        description={person1 && person2 ? `Compare the salary of ${person1.name} (${formatSalary(person1.salary, person1.currency)}) and ${person2.name} (${formatSalary(person2.salary, person2.currency)}). Find out who earns more.` : "Compare the salaries of highly paid individuals."}
        canonicalUrl={person1 && person2 ? `/compare/${person1.slug}-vs-${person2.slug}` : "/comparison"} // Assuming '/compare/' is the base path
      />

      <Header />

      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              {/* Changed: Back button navigates to celebrity list */}
              <Button
                variant="ghost"
                className="text-sm text-[#000000] hover:bg-white/60 mr-2"
                onClick={() => navigate('/celebrities')} // Changed: Navigate to celebrity list page
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Celebrity List
              </Button>
            </div>

            {/* Share button title updated */}
            <ShareButton
               title={person1 && person2 ? `${person1.name} vs ${person2.name} - Who earns more?` : "Salary Comparison"}
               variant="outline"
             />
          </div>

          {/* AdSense Slot */}
          <div className="mb-4">
            <AdSense slot="YOUR_AD_SLOT_ID_1" format="auto" className="py-3" /> {/* Remember to replace YOUR_AD_SLOT_ID */}
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-md shadow-sm mb-8">
            {/* Changed: Title reflects salary comparison */}
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">
              {person1 && person2 ? `${person1.name} vs ${person2.name} - Who Earns More?` : "Salary Comparison"}
            </h1>

            {/* Changed: Subtitle reflects salary comparison */}
            <p className="text-gray-600 text-center mb-8">
              {person1 && person2
                ? `Compare the salary and career details between ${person1.name} and ${person2.name}.`
                : "Select two individuals to compare their salaries."}
            </p>

            {/* Person Selection Cards/Dialogs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Person 1 Selection */}
              <Dialog open={activePersonSelect === 'p1'} onOpenChange={(open) => !open && setActivePersonSelect(null)}>
                <DialogTrigger asChild>
                  <Card
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => !person1 && setActivePersonSelect('p1')} // Only trigger dialog if no person selected yet
                  >
                    <CardContent className="p-6">
                      {person1 ? (
                        <div className="flex items-center" onClick={() => setActivePersonSelect('p1')} > {/* Allow clicking existing card to change */}
                          <Avatar className="h-16 w-16 mr-4 flex-shrink-0">
                            <AvatarImage src={person1.imageUrl || "/placeholder.svg"} alt={person1.name} />
                            <AvatarFallback>{getInitials(person1.name)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="text-lg font-bold mb-1">{person1.name}</h3>
                            <p className="text-gray-600 text-sm">{person1.occupation}</p>
                            {/* Changed: Display salary */}
                            <p className="text-lg font-semibold mt-1">{formatSalary(person1.salary, person1.currency)}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-24">
                          <Button
                            variant="outline"
                            onClick={(e) => { e.stopPropagation(); setActivePersonSelect('p1'); }} // Prevent card click, trigger dialog
                          >
                            <User className="h-4 w-4 mr-2" />
                            Select Person 1
                          </Button>
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
                        placeholder="Search by name, occupation, industry..." // Updated placeholder
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-1"
                      />
                    </div>
                    <div className="border rounded-md overflow-hidden max-h-60 overflow-y-auto"> {/* Added max height and scroll */}
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
                                {/* Changed: Show salary and industry */}
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

              {/* Person 2 Selection (Similar structure as Person 1) */}
               <Dialog open={activePersonSelect === 'p2'} onOpenChange={(open) => !open && setActivePersonSelect(null)}>
                 <DialogTrigger asChild>
                   <Card
                      className="cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => !person2 && setActivePersonSelect('p2')}
                    >
                     <CardContent className="p-6">
                       {person2 ? (
                         <div className="flex items-center" onClick={() => setActivePersonSelect('p2')}>
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
                           <Button
                             variant="outline"
                             onClick={(e) => { e.stopPropagation(); setActivePersonSelect('p2'); }}
                            >
                             <User className="h-4 w-4 mr-2" />
                             Select Person 2
                           </Button>
                         </div>
                       )}
                     </CardContent>
                   </Card>
                 </DialogTrigger>
                 <DialogContent className="sm:max-w-md">
                   <DialogHeader>
                     <DialogTitle>Select Second Person to Compare</DialogTitle>
                   </DialogHeader>
                    {/* Search Input and Results (identical structure to Person 1 Dialog) */}
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

            {/* Comparison Results Section */}
            {person1 && person2 && (
              <>
                <Card className="mb-8 bg-gray-50">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-center mb-6">Comparison Results</h2>

                    {/* Summary Box */}
                     <div className="bg-white p-4 rounded-lg border mb-4">
                       <div className="text-center">
                         {salaryDifference === 0 ? (
                             <Badge className="mb-2" variant="secondary">Salaries are Equal</Badge>
                          ) : (
                             <Badge className="mb-2" variant="outline">
                                {higherPaidPerson?.name} Earns More
                              </Badge>
                          )}

                         {salaryDifference === 0 ? (
                             <h3 className="text-lg font-bold mb-1">
                                 Both earn {formatSalary(person1.salary, person1.currency)}
                             </h3>
                          ) : (
                            <>
                               <h3 className="text-lg font-bold mb-1">
                                 {higherPaidPerson?.name} earns {formatSalary(salaryDifference, higherPaidPerson?.currency || "USD")} more
                               </h3>
                               <p className="text-gray-600">
                                 That's {percentageDifference}% more salary
                               </p>
                            </>
                          )}
                       </div>
                     </div>


                    {/* Generated Text Summary */}
                    <div className="bg-white p-4 rounded-lg border mb-6">
                      <p className="text-gray-700 leading-relaxed">
                        {comparisonText}
                      </p>
                    </div>

                    {/* Quick Salary Cards */}
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

                {/* AdSense Slot */}
                <div className="mb-4">
                   <AdSense slot="YOUR_AD_SLOT_ID_2" format="auto" className="py-3" /> {/* Remember to replace YOUR_AD_SLOT_ID */}
                </div>

                {/* Detailed Comparison Table */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Detailed Comparison</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[150px]">Category</TableHead> {/* Added width hint */}
                        <TableHead>{person1.name}</TableHead>
                        <TableHead>{person2.name}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {/* Changed: Compare Salary */}
                      <TableRow>
                        <TableCell className="font-medium"><Banknote className="inline h-4 w-4 mr-1"/> Salary</TableCell>
                        <TableCell>{formatSalary(person1.salary, person1.currency)}</TableCell>
                        <TableCell>{formatSalary(person2.salary, person2.currency)}</TableCell>
                      </TableRow>
                       {/* Changed: Compare Industry */}
                      <TableRow>
                        <TableCell className="font-medium"><Activity className="inline h-4 w-4 mr-1"/> Industry</TableCell>
                        <TableCell>{person1.industry}</TableCell>
                        <TableCell>{person2.industry}</TableCell>
                      </TableRow>
                       {/* Changed: Compare Occupation */}
                      <TableRow>
                        <TableCell className="font-medium"><Briefcase className="inline h-4 w-4 mr-1"/> Occupation</TableCell>
                        <TableCell>{person1.occupation}</TableCell>
                        <TableCell>{person2.occupation}</TableCell>
                      </TableRow>
                       {/* Changed: Compare Company */}
                      <TableRow>
                        <TableCell className="font-medium"><Landmark className="inline h-4 w-4 mr-1"/> Company</TableCell>
                        <TableCell>{person1.company || "N/A"}</TableCell> {/* Handle missing company */}
                        <TableCell>{person2.company || "N/A"}</TableCell> {/* Handle missing company */}
                      </TableRow>
                       {/* Changed: Compare Country */}
                      <TableRow>
                        <TableCell className="font-medium"><MapPin className="inline h-4 w-4 mr-1"/> Country</TableCell>
                        <TableCell>{person1.country}</TableCell>
                        <TableCell>{person2.country}</TableCell>
                      </TableRow>
                       {/* Changed: Compare Age */}
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
            &copy; {new Date().getFullYear()} Your Website Name. All rights reserved. {/* Changed: Update website name */}
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default CompareCelebritySalaries;

// --- Helper / Utility Functions (Place in appropriate utility file like ../utils/formattingUtils.ts) ---

/**
 * Basic Salary Formatting Example
 * Replace with a more robust solution if needed (e.g., handling locales, large numbers better)
 */
// export const formatSalary = (value: number, currency: string): string => {
//   try {
//     return new Intl.NumberFormat('en-US', { // Use appropriate locale
//       style: 'currency',
//       currency: currency,
//       minimumFractionDigits: 0, // Adjust as needed
//       maximumFractionDigits: 0, // Adjust as needed
//     }).format(value);
//   } catch (error) {
//      console.error(`Error formatting currency ${currency}:`, error);
//      // Fallback formatting
//      return `${currency} ${value.toLocaleString()}`;
//   }
// };

// Placeholder if Intl is not available or causes issues (less ideal)
// export const formatSalary = (value: number, currency: string): string => {
//    return `${currency} ${value.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}`;
// }
