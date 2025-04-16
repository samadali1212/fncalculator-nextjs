
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import SEO from "../components/SEO";
import ShareButton from "../components/ShareButton";
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
  getAllNetWorthPeople,
  findPersonById,
  findPersonBySlug,
  formatNetWorth,
  NetWorthPerson
} from "../utils/netWorthData";

const CompareNetWorth = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [person1Id, setPerson1Id] = useState<string | null>(searchParams.get("p1"));
  const [person2Id, setPerson2Id] = useState<string | null>(searchParams.get("p2"));
  const [person1, setPerson1] = useState<NetWorthPerson | null>(null);
  const [person2, setPerson2] = useState<NetWorthPerson | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<NetWorthPerson[]>([]);
  const [activePersonSelect, setActivePersonSelect] = useState<'p1' | 'p2' | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const allPeople = getAllNetWorthPeople();
  
  // Load people data based on URL params
  useEffect(() => {
    if (person1Id) {
      const found = findPersonBySlug(person1Id);
      if (found) setPerson1(found);
    }
    
    if (person2Id) {
      const found = findPersonBySlug(person2Id);
      if (found) setPerson2(found);
    }
    
    // Default to the first two people if none are specified
    if (!person1Id && !person2Id && allPeople.length >= 2) {
      setPerson1(allPeople[0]);
      setPerson2(allPeople[1]);
      setSearchParams({ p1: allPeople[0].slug, p2: allPeople[1].slug });
    } else if (!person1Id && allPeople.length >= 1) {
      setPerson1(allPeople[0]);
      updateSearchParams(allPeople[0].slug, person2Id);
    } else if (!person2Id && allPeople.length >= 2) {
      setPerson2(allPeople[1]);
      updateSearchParams(person1Id, allPeople[1].slug);
    }
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [person1Id, person2Id]);
  
  // Handle search
  useEffect(() => {
    if (searchTerm.length > 1) {
      const results = allPeople
        .filter(person => 
          person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          person.occupation.toLowerCase().includes(searchTerm.toLowerCase()) ||
          person.industry.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(0, 5);
      
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);
  
  // Update URL params when people change
  const updateSearchParams = (p1: string | null, p2: string | null) => {
    const params: Record<string, string> = {};
    if (p1) params.p1 = p1;
    if (p2) params.p2 = p2;
    setSearchParams(params);
  };
  
  // Handle selection of a person
  const selectPerson = (person: NetWorthPerson) => {
    if (activePersonSelect === 'p1') {
      setPerson1(person);
      updateSearchParams(person.slug, person2Id);
    } else if (activePersonSelect === 'p2') {
      setPerson2(person);
      updateSearchParams(person1Id, person.slug);
    }
    
    setActivePersonSelect(null);
    setSearchTerm("");
  };
  
  const getWealthDifferencePercentage = () => {
    if (!person1 || !person2) return 0;
    const person1Worth = person1.netWorth;
    const person2Worth = person2.netWorth;
    
    if (person1Worth === person2Worth) return 0;
    
    const difference = Math.abs(person1Worth - person2Worth);
    const lower = Math.min(person1Worth, person2Worth);
    
    return Math.round((difference / lower) * 100);
  };
  
  const getWealthDifference = () => {
    if (!person1 || !person2) return 0;
    return Math.abs(person1.netWorth - person2.netWorth);
  };
  
  const getRicherPerson = () => {
    if (!person1 || !person2) return null;
    return person1.netWorth > person2.netWorth ? person1 : person2;
  };
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };
  
  const richerPerson = getRicherPerson();
  const wealthDifference = getWealthDifference();
  const percentageDifference = getWealthDifferencePercentage();
  
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
        title={person1 && person2 ? `${person1.name} vs ${person2.name} - Net Worth Comparison` : "Wealth Comparison"}
        description={person1 && person2 ? `Compare the net worth of ${person1.name} (${formatNetWorth(person1.netWorth, person1.currency)}) and ${person2.name} (${formatNetWorth(person2.netWorth, person2.currency)}). See who is richer by how much.` : "Compare the net worth of wealthy individuals."}
        canonicalUrl={"/comparison"}
      />
      
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                className="text-sm text-[#000000] hover:bg-white/60 mr-2"
                onClick={() => navigate('/net-worth')}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Net Worth List
              </Button>
            </div>
            
            <ShareButton 
              title={person1 && person2 ? `${person1.name} vs ${person2.name} - Who is richer?` : "Wealth Comparison"} 
              variant="outline"
            />
          </div>
          
          <div className="mb-4">
            <AdSense slot="9889084223" format="auto" className="py-3" />
          </div>
          
          <div className="bg-white p-6 sm:p-8 rounded-md shadow-sm mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">
              {person1 && person2 ? `${person1.name} vs ${person2.name}` : "Wealth Comparison"}
            </h1>
            
            <p className="text-gray-600 text-center mb-8">
              {person1 && person2 
                ? `Compare the net worth and wealth details between ${person1.name} and ${person2.name}.` 
                : "Select two individuals to compare their wealth."}
            </p>
            
            {/* Comparison Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Person 1 Selector */}
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
                            <p className="text-gray-600 text-sm">{person1.occupation}</p>
                            <p className="text-lg font-semibold mt-1">{formatNetWorth(person1.netWorth, person1.currency)}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-24">
                          <Button 
                            variant="outline" 
                            onClick={() => setActivePersonSelect('p1')}
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
                        placeholder="Search by name, occupation, or industry..." 
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
                                <p className="text-sm text-gray-500">{formatNetWorth(person.netWorth, person.currency)} • {person.industry}</p>
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

              {/* Person 2 Selector */}
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
                            <p className="text-gray-600 text-sm">{person2.occupation}</p>
                            <p className="text-lg font-semibold mt-1">{formatNetWorth(person2.netWorth, person2.currency)}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-24">
                          <Button 
                            variant="outline" 
                            onClick={() => setActivePersonSelect('p2')}
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
                  <div className="space-y-4 py-4">
                    <div className="flex items-center space-x-2">
                      <Search className="h-4 w-4 text-gray-400" />
                      <Input 
                        placeholder="Search by name, occupation, or industry..." 
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
                                <p className="text-sm text-gray-500">{formatNetWorth(person.netWorth, person.currency)} • {person.industry}</p>
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
                {/* Result Card */}
                <Card className="mb-8 bg-gray-50">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-center mb-6">Comparison Results</h2>
                    
                    <div className="bg-white p-4 rounded-lg border mb-4">
                      <div className="text-center">
                        <Badge className="mb-2" variant="outline">
                          {richerPerson?.name === person1?.name ? "Person 1 is Richer" : "Person 2 is Richer"}
                        </Badge>
                        <h3 className="text-lg font-bold mb-1">
                          {richerPerson?.name} is richer by {formatNetWorth(wealthDifference, richerPerson?.currency || "USD")}
                        </h3>
                        <p className="text-gray-600">
                          That's {percentageDifference}% more wealth
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold mb-2">{person1.name}</h4>
                        <p className="text-lg font-bold">{formatNetWorth(person1.netWorth, person1.currency)}</p>
                        <p className="text-sm text-gray-600">{person1.industry} • {person1.occupation}</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold mb-2">{person2.name}</h4>
                        <p className="text-lg font-bold">{formatNetWorth(person2.netWorth, person2.currency)}</p>
                        <p className="text-sm text-gray-600">{person2.industry} • {person2.occupation}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="mb-4">
                  <AdSense slot="9889084223" format="auto" className="py-3" />
                </div>
                
                {/* Detailed Comparison */}
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
                        <TableCell className="font-medium">Net Worth</TableCell>
                        <TableCell>{formatNetWorth(person1.netWorth, person1.currency)}</TableCell>
                        <TableCell>{formatNetWorth(person2.netWorth, person2.currency)}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Industry</TableCell>
                        <TableCell>{person1.industry}</TableCell>
                        <TableCell>{person2.industry}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Occupation</TableCell>
                        <TableCell>{person1.occupation}</TableCell>
                        <TableCell>{person2.occupation}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Company</TableCell>
                        <TableCell>{person1.company || "Multiple ventures"}</TableCell>
                        <TableCell>{person2.company || "Multiple ventures"}</TableCell>
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
                
                {/* Description Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">About {person1.name} and {person2.name}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold mb-2">{person1.name}</h4>
                      <p className="text-gray-700">{person1.description}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold mb-2">{person2.name}</h4>
                      <p className="text-gray-700">{person2.description}</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          
          {/* SEO Content */}
          <div className="bg-white p-6 sm:p-8 rounded-md shadow-sm">
            <h2 className="text-xl font-bold mb-4">Compare Net Worth of Wealthy Individuals</h2>
            <p className="mb-4 text-gray-700">
              Our wealth comparison tool allows you to compare the net worth of different wealthy individuals side by side. 
              See who is richer, by how much, and learn about their sources of wealth, industries, and background.
            </p>
            <p className="mb-4 text-gray-700">
              Whether you're curious about business magnates, tech entrepreneurs, celebrities, or sports stars, this 
              comparison tool provides detailed insights into their relative wealth.
            </p>
            <p className="text-gray-700">
              Simply select the two individuals you want to compare using the search tool above, and get a comprehensive 
              breakdown of their wealth differences, complete with percentages and detailed comparisons across various factors.
            </p>
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

export default CompareNetWorth;
