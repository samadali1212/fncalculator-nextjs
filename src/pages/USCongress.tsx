
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ArrowUpRight, ListFilter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SEO from "../components/SEO";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { congressMembers, formatCongressSalary } from "../utils/usCongressData";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";

const USCongress = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsToShow, setItemsToShow] = useState(10);
  const [partyFilter, setPartyFilter] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(true);

  // Get unique parties for filter
  const parties = ["all", ...Array.from(new Set(congressMembers.map(member => member.party)))];
  
  // Filter members based on search query and party
  const filteredMembers = congressMembers.filter(member => {
    const matchesSearch = searchQuery 
      ? member.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        member.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.state.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
      
    const matchesParty = partyFilter === "all" || member.party === partyFilter;
    
    return matchesSearch && matchesParty;
  });
  
  // Sort by salary (descending)
  const sortedMembers = [...filteredMembers].sort((a, b) => b.salary - a.salary);
  
  // Paginate results
  const displayedMembers = sortedMembers.slice(0, itemsToShow);
  const hasMoreMembers = displayedMembers.length < filteredMembers.length;
  
  const loadMore = () => {
    setItemsToShow(prevItemsToShow => prevItemsToShow + 10);
  };

  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
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
        title="US Congress Members' Salaries" 
        description="Explore the salaries of United States Congress members. Updated information on earnings of senators and representatives across different positions."
        canonicalUrl="/uscongress"
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">US Congress Members' Salaries</h1>
            <p className="text-gray-600">
              Discover how much members of the United States Congress earn. This list provides salary information for senators and representatives, including leadership positions that command higher compensation.
            </p>
          </div>
        </div>
        
        <motion.div 
          className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative md:col-span-2">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search by name, position, or state..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div>
            <Select 
              value={partyFilter} 
              onValueChange={setPartyFilter}
            >
              <SelectTrigger>
                <SelectValue placeholder="Filter by party" />
              </SelectTrigger>
              <SelectContent>
                {parties.map((party) => (
                  <SelectItem key={party} value={party}>
                    {party === "all" ? "All Parties" : party}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        <div className="bg-white rounded-sm shadow-sm border border-gray-200">
          {filteredMembers.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No congress members found matching "{searchQuery}"
            </div>
          ) : (
            <>
              <div className="p-4 border-b border-gray-100 bg-gray-50">
                <div className="grid grid-cols-12 text-xs font-medium text-gray-600">
                  <div className="col-span-1">#</div>
                  <div className="col-span-5 md:col-span-4">Name</div>
                  <div className="col-span-3 md:col-span-3">Salary</div>
                  <div className="hidden md:block md:col-span-2">Party</div>
                  <div className="col-span-3 md:col-span-2">State</div>
                </div>
              </div>
              
              {displayedMembers.map((member, index) => (
                <motion.div 
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`group px-4 py-3 ${index !== displayedMembers.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <div className="grid grid-cols-12 items-center">
                    <div className="col-span-1 text-sm text-gray-500">
                      {index + 1}
                    </div>
                    
                    <div className="col-span-5 md:col-span-4">
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8 mr-3">
                          <AvatarImage 
                            src={member.imageUrl || "/placeholder.svg"} 
                            alt={member.name}
                            className="object-cover"
                          />
                          <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-xs">
                            {getInitials(member.name)}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div>
                          <Link 
                            to={`/uscongress/${member.slug}`}
                            className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-blog-accent flex items-center"
                          >
                            {member.name}
                            <ArrowUpRight 
                              className="h-3.5 w-3.5 ml-1 text-blog-subtle opacity-0 group-hover:opacity-100 transition-opacity"
                            />
                          </Link>
                          <div className="text-xs text-gray-500">{member.position}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-span-3 md:col-span-3">
                      <span className="text-sm font-medium">{formatCongressSalary(member.salary)}</span>
                    </div>
                    
                    <div className="hidden md:block md:col-span-2">
                      <span className="px-1.5 py-0.5 bg-gray-100 rounded text-[#666] text-xs">
                        {member.party}
                      </span>
                    </div>
                    
                    <div className="col-span-3 md:col-span-2">
                      <span className="text-xs text-gray-600">{member.state}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {hasMoreMembers && (
                <Pagination className="py-5">
                  <PaginationContent>
                    <PaginationItem className="w-full">
                      <Button 
                        variant="outline" 
                        onClick={loadMore} 
                        className="w-full"
                      >
                        Load More Results
                      </Button>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </>
          )}
        </div>
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

export default USCongress;
