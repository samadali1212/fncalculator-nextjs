
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, ArrowUpRight, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import Header from "../components/Header";
import SEO from "../components/SEO";
import AdSense from "../components/AdSense";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { netWorthPeople, formatNetWorth } from "../utils/netWorthData";

const ComparisonsList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsToShow, setItemsToShow] = useState(20);
  const [isLoading, setIsLoading] = useState(true);
  
  // Generate interesting comparison pairs
  const generateComparisons = () => {
    const people = netWorthPeople;
    const industries = Array.from(new Set(people.map(person => person.industry)));
    const comparisons = [];
    
    // Rich vs Rich (top 10 people against each other)
    const topPeople = [...people].sort((a, b) => b.netWorth - a.netWorth).slice(0, 10);
    
    for (let i = 0; i < topPeople.length; i++) {
      for (let j = i + 1; j < topPeople.length; j++) {
        comparisons.push({
          id: `${topPeople[i].slug}-vs-${topPeople[j].slug}`,
          title: `${topPeople[i].name} vs ${topPeople[j].name}`,
          person1: topPeople[i],
          person2: topPeople[j],
          difference: Math.abs(topPeople[i].netWorth - topPeople[j].netWorth),
          category: "Richest South Africans",
          description: `Compare the wealth of ${topPeople[i].name} (${formatNetWorth(topPeople[i].netWorth, topPeople[i].currency)}) and ${topPeople[j].name} (${formatNetWorth(topPeople[j].netWorth, topPeople[j].currency)}).`
        });
      }
    }
    
    // Industry Leaders (top person from each industry vs others)
    for (const industry of industries) {
      const industryLeaders = [...people]
        .filter(person => person.industry === industry)
        .sort((a, b) => b.netWorth - a.netWorth)
        .slice(0, 2);
      
      if (industryLeaders.length >= 2) {
        comparisons.push({
          id: `${industryLeaders[0].slug}-vs-${industryLeaders[1].slug}`,
          title: `${industryLeaders[0].name} vs ${industryLeaders[1].name}`,
          person1: industryLeaders[0],
          person2: industryLeaders[1],
          difference: Math.abs(industryLeaders[0].netWorth - industryLeaders[1].netWorth),
          category: `Richest in ${industry}`,
          description: `Compare the top two richest people in the ${industry} industry: ${industryLeaders[0].name} and ${industryLeaders[1].name}.`
        });
      }
    }
    
    // Random interesting comparisons (big wealth gap)
    const randomComparisons = [];
    for (let i = 0; i < 10; i++) {
      const person1Index = Math.floor(Math.random() * 10); // One of the top 10
      const person2Index = 10 + Math.floor(Math.random() * (people.length - 20)); // Someone from the middle
      
      if (people[person1Index] && people[person2Index]) {
        randomComparisons.push({
          id: `${people[person1Index].slug}-vs-${people[person2Index].slug}`,
          title: `${people[person1Index].name} vs ${people[person2Index].name}`,
          person1: people[person1Index],
          person2: people[person2Index],
          difference: Math.abs(people[person1Index].netWorth - people[person2Index].netWorth),
          category: "Interesting Comparisons",
          description: `See how ${people[person1Index].name}'s wealth compares to ${people[person2Index].name}'s fortune.`
        });
      }
    }
    
    return [...comparisons, ...randomComparisons];
  };
  
  const allComparisons = generateComparisons();
  
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };
  
  const filteredComparisons = allComparisons.filter(comparison => {
    return searchQuery 
      ? comparison.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comparison.person1.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comparison.person2.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comparison.category.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
  });
  
  const displayedComparisons = filteredComparisons.slice(0, itemsToShow);
  const hasMoreComparisons = displayedComparisons.length < filteredComparisons.length;
  
  const loadMore = () => {
    setItemsToShow(prevItemsToShow => prevItemsToShow + 10);
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
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
                  {Array(6).fill(0).map((_, i) => (
                    <div key={i} className="bg-gray-100 p-4 rounded">
                      <div className="h-6 bg-gray-200 rounded mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  ))}
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
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title="Wealth Comparisons | Who is Richer?" 
        description="Compare the net worth of South Africa's richest individuals side by side. See who is richer and by how much."
        canonicalUrl="/comparisons"
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-5xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Compare South Africa's Richest</h1>
          <p className="text-gray-600 mb-6">
            See who is richer with our side-by-side wealth comparisons
          </p>
          
          <div className="relative max-w-2xl mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search comparisons by name or industry..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <AdSense slot="9889084223" format="auto" className="py-3" />
        </div>
        
        <div className="space-y-4">
          {displayedComparisons.length === 0 ? (
            <div className="bg-white p-8 rounded-md shadow-sm text-center">
              <p className="text-gray-500">No comparisons found matching your search.</p>
            </div>
          ) : (
            <>
              {displayedComparisons.map((comparison, index) => {
                const richerPerson = comparison.person1.netWorth > comparison.person2.netWorth 
                  ? comparison.person1 
                  : comparison.person2;
                const difference = formatNetWorth(comparison.difference, richerPerson.currency);
                
                return (
                  <motion.div
                    key={comparison.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card className="group hover:shadow-md transition-shadow overflow-hidden">
                      <CardContent className="p-0">
                        <Link 
                          to={`/comparison?p1=${comparison.person1.slug}&p2=${comparison.person2.slug}`}
                          className="block"
                        >
                          <div className="p-4 border-b border-gray-100 bg-white">
                            <div className="flex items-center justify-between">
                              <Badge variant="outline" className="mb-2">
                                {comparison.category}
                              </Badge>
                              <div className="flex items-center text-blog-accent text-sm">
                                <TrendingUp className="h-3.5 w-3.5 mr-1" /> 
                                <span>Compare</span>
                                <ArrowUpRight className="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                            </div>
                            <h3 className="text-lg font-semibold group-hover:text-blog-accent transition-colors">
                              {comparison.title}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                              {richerPerson.name} is richer by {difference}
                            </p>
                          </div>
                          
                          <div className="grid grid-cols-2">
                            <div className="p-4 flex items-center">
                              <Avatar className="h-12 w-12 mr-3">
                                <AvatarImage 
                                  src={comparison.person1.imageUrl || "/placeholder.svg"} 
                                  alt={comparison.person1.name} 
                                />
                                <AvatarFallback>{getInitials(comparison.person1.name)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">{comparison.person1.name}</p>
                                <p className="text-sm text-gray-500">{formatNetWorth(comparison.person1.netWorth, comparison.person1.currency)}</p>
                              </div>
                            </div>
                            
                            <div className="p-4 flex items-center bg-gray-50">
                              <Avatar className="h-12 w-12 mr-3">
                                <AvatarImage 
                                  src={comparison.person2.imageUrl || "/placeholder.svg"} 
                                  alt={comparison.person2.name} 
                                />
                                <AvatarFallback>{getInitials(comparison.person2.name)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">{comparison.person2.name}</p>
                                <p className="text-sm text-gray-500">{formatNetWorth(comparison.person2.netWorth, comparison.person2.currency)}</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
              
              {hasMoreComparisons && (
                <Pagination className="py-5">
                  <PaginationContent>
                    <PaginationItem className="w-full">
                      <Button 
                        variant="outline" 
                        onClick={loadMore} 
                        className="w-full"
                      >
                        Load More Comparisons
                      </Button>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </>
          )}
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-bold mb-4">About Wealth Comparisons</h2>
          <p className="mb-4 text-gray-700">
            Our wealth comparison tool helps you understand the significant differences in net worth 
            between South Africa's most affluent individuals. We've organized meaningful comparisons 
            across various categories including top billionaires, industry leaders, and other interesting 
            wealth contrasts.
          </p>
          <p className="mb-4 text-gray-700">
            Each comparison allows you to see the exact wealth difference between two individuals, 
            giving you context about the scale of wealth among the country's richest people. Click on 
            any comparison to see a detailed breakdown with more information about each person.
          </p>
          <p className="text-gray-700">
            You can also create your own custom comparisons using our 
            <Link to="/comparison" className="text-blog-accent hover:underline mx-1">
              comparison tool
            </Link>
            to select any two individuals from our database.
          </p>
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

export default ComparisonsList;
