
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ChevronRight, ArrowUpRight, ListFilter, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import AdSense from "../components/AdSense";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import useIsMobile from "@/hooks/use-mobile";
import { banks, branchCodes, findBankBySlug } from "@/utils/branchCodeData";

const BranchCodes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [displayType, setDisplayType] = useState<"banks" | "branches">("banks");
  const isMobile = useIsMobile();
  
  // Change initial visible count to 150 branches
  const [visibleCount, setVisibleCount] = useState(150);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Reset visible count when search or activeTab changes
  useEffect(() => {
    setVisibleCount(150);
  }, [searchQuery, activeTab, displayType]);

  const filteredBranchCodes = branchCodes.filter(branch => {
    const searchLower = searchQuery.toLowerCase();
    return (
      (activeTab === "all" || branch.bankName === activeTab) &&
      (branch.branchCode.toLowerCase().includes(searchLower) ||
        branch.bankName.toLowerCase().includes(searchLower) ||
        branch.branchName.toLowerCase().includes(searchLower) ||
        branch.city.toLowerCase().includes(searchLower))
    );
  });
  
  // Get only the visible items
  const visibleBranchCodes = filteredBranchCodes.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount(prev => prev + 150);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f6f6f0] pt-20">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center h-64">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-16 h-16 border-4 border-blog-accent border-t-transparent rounded-full animate-spin"
            ></motion.div>
          </div>
        </div>
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
        title="South African Bank Branch Codes"
        description="Find branch codes for all major South African banks. Look up branch codes by bank, city, or branch name."
        canonicalUrl="/"
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">South African Bank Branch Codes Directory</h1>
            <p className="text-gray-600">
              Find branch codes for all major South African banks in one place. Easily search for the code you need to make secure transactions, transfers, and payments without hassle. Simple, accurate, and always up to date.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-8">
          <AdSense slot="9803570345" format="auto" className="py-4" />
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
              placeholder="Search by branch code, bank or city..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2">
            <Button
              variant={displayType === "banks" ? "default" : "outline"}
              onClick={() => setDisplayType("banks")}
              size="sm"
              className="flex-1"
            >
              Banks
            </Button>
            <Button
              variant={displayType === "branches" ? "default" : "outline"}
              onClick={() => setDisplayType("branches")}
              size="sm"
              className="flex-1"
            >
              Branch Codes
            </Button>
          </div>
        </motion.div>

        {activeTab !== "all" && (
          <div className="mb-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setActiveTab("all")}
              className="text-gray-500 hover:text-gray-800"
            >
              ← All Banks
            </Button>
          </div>
        )}

        {displayType === "banks" ? (
          <div className="bg-white rounded-sm shadow-sm border border-gray-200 mb-6">
            <div className="overflow-x-auto">
              <div className="p-4 border-b border-gray-100 bg-gray-50">
                <div className="grid grid-cols-12 text-xs font-medium text-gray-600">
                  <div className="col-span-1">#</div>
                  <div className="col-span-7 md:col-span-8">Bank</div>
                  <div className="col-span-4 md:col-span-3 text-right">Branches</div>
                </div>
              </div>
              
              {banks.map((bank, index) => (
                <motion.div 
                  key={bank.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`group px-4 py-3 ${index !== banks.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <div className="grid grid-cols-12 items-center">
                    <div className="col-span-1 text-sm text-gray-500">
                      {index + 1}
                    </div>
                    
                    <div className="col-span-7 md:col-span-8">
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8 mr-3">
                          <AvatarImage src={bank.logoUrl || "/placeholder.svg"} alt={bank.name} />
                          <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-xs">
                            {bank.name.substring(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div>
                          <Link 
                            to={`/branch-codes/${bank.slug}`}
                            className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-blog-accent flex items-center"
                          >
                            {bank.name}
                            <ArrowUpRight 
                              className="h-3.5 w-3.5 ml-1 text-blog-subtle opacity-0 group-hover:opacity-100 transition-opacity"
                            />
                          </Link>
                          <div className="text-xs text-gray-500">{bank.description.length > 60 ? bank.description.substring(0, 60) + '...' : bank.description}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-span-4 md:col-span-3 text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="hover:bg-gray-100"
                      >
                        <Link to={`/branch-codes/${bank.slug}`}>
                          {branchCodes.filter(b => b.bankName === bank.name).length} branches
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-sm shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-100 bg-gray-50">
              <div className="grid grid-cols-10 text-xs font-medium text-gray-600">
                <div className="col-span-1">#</div>
                <div className="col-span-5 md:col-span-5">Branch</div>
                <div className="col-span-3 md:col-span-3">Bank</div>
                <div className="col-span-1 md:col-span-1 text-right">Details</div>
              </div>
            </div>
            
            {visibleBranchCodes.map((branch, index) => (
              <motion.div 
                key={branch.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group px-4 py-3 ${index !== visibleBranchCodes.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <div className="grid grid-cols-10 items-center">
                  <div className="col-span-1 text-sm text-gray-500">
                    {index + 1}
                  </div>
                  
                  <div className="col-span-5 md:col-span-5">
                    <div className="flex flex-col">
                      <Link 
                        to={`/branch-codes/${branch.slug}`}
                        className="text-[#333] hover:underline text-sm font-medium transition-colors group-hover:text-blog-accent flex items-center"
                      >
                        {branch.branchName}
                        <ArrowUpRight 
                          className="h-3 w-3 ml-1 text-blog-subtle opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </Link>
                      <div className="text-xs text-gray-500">{branch.city}</div>
                    </div>
                  </div>
                  
                  <div className="col-span-3 md:col-span-3">
                    <span className="px-1.5 py-0.5 bg-gray-100 rounded text-[#666] text-xs">
                      {branch.bankName}
                    </span>
                  </div>
                  
                  <div className="col-span-1 md:col-span-1 text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="hover:bg-gray-100 px-2"
                    >
                      <Link to={`/branch-codes/${branch.slug}`}>
                        View
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {visibleBranchCodes.length === 0 && (
              <div className="text-center py-10">
                <p className="text-gray-500 mb-2">No branch codes found</p>
                <Button
                  variant="link"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveTab("all");
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
            
            {/* Load More Button - only show if there are more branches to load */}
            {filteredBranchCodes.length > visibleCount && (
              <div className="flex justify-center p-4 border-t border-gray-100">
                <Button 
                  variant="outline" 
                  onClick={loadMore}
                  className="gap-2"
                >
                  Load More <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
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

export default BranchCodes;
