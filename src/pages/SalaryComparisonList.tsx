
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ExternalLink, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SEO from "../components/SEO";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { celebrities } from "../utils/celebrityData";
import { createComparisonUrl, getRandomInt } from "../utils/utils";
import RelatedComparisons from "../components/RelatedComparisons";
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

const SalaryComparisonList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsToShow, setItemsToShow] = useState(20);
  const [isLoading, setIsLoading] = useState(true);
  const [featuredComparisons, setFeaturedComparisons] = useState<{person1: any, person2: any, comparisonUrl: string}[]>([]);
  const navigate = useNavigate();

  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  // Generate comparison pairs (all possible pairs)
  const generateComparisonPairs = () => {
    const pairs = [];
    
    // Filter celebrities based on search query
    const filteredCelebrities = celebrities.filter(celebrity => {
      return searchQuery 
        ? celebrity.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
          celebrity.industry.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
    });
    
    // Generate all possible combinations
    for (let i = 0; i < filteredCelebrities.length; i++) {
      for (let j = i + 1; j < filteredCelebrities.length; j++) {
        pairs.push({
          person1: filteredCelebrities[i],
          person2: filteredCelebrities[j],
          comparisonUrl: createComparisonUrl(
            filteredCelebrities[i].slug, 
            filteredCelebrities[j].slug, 
            'salary'
          )
        });
      }
    }
    
    // Sort pairs by combined salary (descending)
    return pairs.sort((a, b) => 
      (b.person1.salary + b.person2.salary) - 
      (a.person1.salary + a.person2.salary)
    );
  };
  
  // Generate featured comparisons when the component mounts
  useEffect(() => {
    if (celebrities.length >= 8) {
      const shuffled = [...celebrities].sort(() => 0.5 - Math.random());
      const featured = [];
      
      // Create 4 random comparison pairs
      for (let i = 0; i < 4; i++) {
        if (i * 2 + 1 < shuffled.length) {
          featured.push({
            person1: shuffled[i * 2],
            person2: shuffled[i * 2 + 1],
            comparisonUrl: createComparisonUrl(
              shuffled[i * 2].slug,
              shuffled[i * 2 + 1].slug,
              'salary'
            )
          });
        }
      }
      
      setFeaturedComparisons(featured);
    }
  }, []);
  
  const comparisonPairs = generateComparisonPairs();
  const displayedPairs = comparisonPairs.slice(0, itemsToShow);
  const hasMorePairs = displayedPairs.length < comparisonPairs.length;
  
  const loadMore = () => {
    setItemsToShow(prevItemsToShow => prevItemsToShow + 20);
  };

  // Generate a random comparison
  const generateRandomComparison = () => {
    if (celebrities.length < 2) return;
    
    // Select two random celebrities
    const shuffled = [...celebrities].sort(() => 0.5 - Math.random());
    const randomPair = shuffled.slice(0, 2);
    
    // Navigate to the comparison page
    navigate(createComparisonUrl(randomPair[0].slug, randomPair[1].slug, 'salary'));
  };

  // Simulate loading state
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
        title="Compare South African Celebrity Salaries" 
        description="Compare the salaries of South Africa's most popular celebrities side by side. See who earns more and analyze the differences between various high earners."
        canonicalUrl="/compare-salaries"
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Celebrity Salary Comparisons</h1>
            <p className="text-gray-600 max-w-2xl">
              Compare the earnings of South Africa's top celebrities side by side. See how different 
              personalities from various industries stack up against each other in terms of income.
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
              placeholder="Search by name or industry..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        {comparisonPairs.length === 0 ? (
          <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-200 text-center">
            <p className="text-gray-500">No comparison pairs found matching "{searchQuery}"</p>
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
                {displayedPairs.map((pair, index) => (
                  <TableRow key={`${pair.person1.id}-${pair.person2.id}`} className="group">
                    <TableCell className="text-gray-500 text-sm">{index + 1}</TableCell>
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
                            to={`/celebrities/${pair.person1.slug}`}
                            className="text-[#333] hover:underline text-base font-medium transition-colors hover:text-blog-accent flex items-center"
                          >
                            {pair.person1.name}
                            <ExternalLink className="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                          <div className="text-xs text-gray-500">{pair.person1.industry}</div>
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
                            to={`/celebrities/${pair.person2.slug}`}
                            className="text-[#333] hover:underline text-base font-medium transition-colors hover:text-blog-accent flex items-center"
                          >
                            {pair.person2.name}
                            <ExternalLink className="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                          <div className="text-xs text-gray-500">{pair.person2.industry}</div>
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
            
            {hasMorePairs && (
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
        
        {/* Featured Comparisons Section */}
        {featuredComparisons.length > 0 && searchQuery === "" && (
          <div className="mt-12">
            <RelatedComparisons 
              comparisons={featuredComparisons}
              type="salary"
              viewMoreLink="/compare-salaries"
            />
          </div>
        )}
      </main>

      <footer className="border-t border-gray-300 py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center text-[#828282] text-sm">
          <p>
            &copy; {new Date().getFullYear()} SalaryList. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default SalaryComparisonList;
