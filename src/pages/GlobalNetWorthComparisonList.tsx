import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ExternalLink, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SEO from "../components/SEO";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { netWorthPeople } from "../utils/globalNetWorthData";
import { createComparisonUrl, getRandomInt, formatCurrency } from "../utils/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";

const GlobalNetWorthComparisonList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(50);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  const filteredPeople = netWorthPeople.filter(person => {
    return searchQuery
      ? person.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        (person.occupation && person.occupation.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (person.industry && person.industry.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (person.company && person.company.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (person.country && person.country.toLowerCase().includes(searchQuery.toLowerCase()))
      : true;
  });

  const generateComparisonPairs = () => {
    const pairs = [];
    const pairTracker = new Set(); // Track unique pairs to avoid duplicates
    
    for (let i = 0; i < filteredPeople.length; i++) {
      for (let j = i + 1; j < filteredPeople.length; j++) {
        const person1 = filteredPeople[i];
        const person2 = filteredPeople[j];
        
        const slugs = [person1.slug, person2.slug].sort();
        const pairKey = `${slugs[0]}-${slugs[1]}`;
        
        if (!pairTracker.has(pairKey)) {
          pairTracker.add(pairKey);
          
          const [firstPerson, secondPerson] = person1.netWorth >= person2.netWorth
            ? [person1, person2]
            : [person2, person1];
          
          pairs.push({
            person1: firstPerson,
            person2: secondPerson,
            comparisonUrl: createComparisonUrl(
              firstPerson.slug, 
              secondPerson.slug
            )
          });
        }
      }
    }
    
    return pairs.sort((a, b) => 
      ((b.person1.netWorth || 0) + (b.person2.netWorth || 0)) - 
      ((a.person1.netWorth || 0) + (a.person2.netWorth || 0))
    );
  };

  const comparisonPairs = generateComparisonPairs();
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPairs = comparisonPairs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(comparisonPairs.length / itemsPerPage);
  
  const loadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const generateRandomComparison = () => {
    if (netWorthPeople.length < 2) return;
    
    const shuffled = [...netWorthPeople].sort(() => 0.5 - Math.random());
    const randomPair = shuffled.slice(0, 2);
    
    const [person1, person2] = randomPair[0].netWorth >= randomPair[1].netWorth
      ? [randomPair[0], randomPair[1]]
      : [randomPair[1], randomPair[0]];
    
    navigate(createComparisonUrl(person1.slug, person2.slug));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-16 h-16 border-4 border-blog-accent border-t-transparent rounded-full animate-spin"
        ></motion.div>
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
        title="Compare Net Worth" 
        description="Compare the net worth of celebrities, business leaders, and public figures side by side. See who has more wealth and analyze the differences between various wealthy individuals."
        canonicalUrl="/global-compare"
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Net Worth Comparisons</h1>
            <p className="text-gray-600 max-w-2xl">
              Compare the wealth of celebrities, business leaders, and public figures side by side. 
              See how different individuals stack up against each other in terms of net worth.
            </p>
          </div>
          
          <Button 
            onClick={generateRandomComparison} 
            className="mt-4 md:mt-0 bg-blog-accent hover:bg-blog-accent-hover text-white"
          >
            Random Comparison
          </Button>
        </div>
        
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search by name, occupation, industry, country..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        {currentPairs.length === 0 ? (
          <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-200 text-center">
            {searchQuery.trim() !== '' ? (
              <div>
                <p className="text-gray-500 mb-2">No comparison pairs found matching "{searchQuery}"</p>
                <p className="text-sm text-gray-400">
                  Try searching for different terms or check your spelling
                </p>
              </div>
            ) : (
              <p className="text-gray-500">No comparison pairs available</p>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="w-12">#</TableHead>
                  <TableHead>Person 1</TableHead>
                  <TableHead className="w-12 text-center">VS</TableHead>
                  <TableHead>Person 2</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentPairs.map((pair, index) => (
                  <TableRow key={`${pair.person1.id}-${pair.person2.id}-${index}`} className="group">
                    <TableCell className="text-gray-500 text-sm">{indexOfFirstItem + index + 1}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8 mr-3">
                          <AvatarImage 
                            src={pair.person1.imageUrl || "/placeholder.svg"} 
                            alt={pair.person1.name}
                            className="object-cover"
                          />
                          <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-xs">
                            {getInitials(pair.person1.name)}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div>
                          <Link 
                            to={`/global-net-worth/${pair.person1.slug}`}
                            className="text-[#333] hover:underline text-base font-medium transition-colors hover:text-blog-accent flex items-center"
                          >
                            {pair.person1.name}
                            <ExternalLink className="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                          <div className="text-xs text-gray-500">{pair.person1.occupation || "Public Figure"}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center">
                        <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">
                          <ArrowRight className="h-4 w-4 text-gray-600" />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8 mr-3">
                          <AvatarImage 
                            src={pair.person2.imageUrl || "/placeholder.svg"} 
                            alt={pair.person2.name}
                            className="object-cover"
                          />
                          <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-xs">
                            {getInitials(pair.person2.name)}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div>
                          <Link 
                            to={`/global-net-worth/${pair.person2.slug}`}
                            className="text-[#333] hover:underline text-base font-medium transition-colors hover:text-blog-accent flex items-center"
                          >
                            {pair.person2.name}
                            <ExternalLink className="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                          <div className="text-xs text-gray-500">{pair.person2.occupation || "Public Figure"}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Link 
                        to={pair.comparisonUrl}
                        className="text-blog-accent hover:text-blog-accent-hover hover:underline transition-colors"
                      >
                        Compare
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            {currentPage < totalPages && (
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
          </div>
        )}
      </main>

      <footer className="border-t border-gray-300 py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center text-[#828282] text-sm">
          <p>
            &copy; {new Date().getFullYear()} Sassa Insider. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default GlobalNetWorthComparisonList;
