
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ListFilter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import BlogList from "../components/BlogList";
import SEO from "../components/SEO";
import { blogPosts } from "../utils/blogData";
import { Button } from "@/components/ui/button";
import { netWorthPeople, formatNetWorth } from "../utils/netWorthData";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [blogSearchQuery, setBlogSearchQuery] = useState("");
  const [industryFilter, setIndustryFilter] = useState("all");
  
  // Get unique industries for filter
  const industries = ["all", ...Array.from(new Set(netWorthPeople.map(person => person.industry)))];
  
  // Filter people based on search query (name only) and industry
  const filteredPeople = netWorthPeople.filter(person => {
    const matchesSearch = searchQuery 
      ? person.name.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
      
    const matchesIndustry = industryFilter === "all" || person.industry === industryFilter;
    
    return matchesSearch && matchesIndustry;
  });
  
  // Sort by net worth (descending) and limit to top 5
  const topPeople = [...filteredPeople]
    .sort((a, b) => b.netWorth - a.netWorth)
    .slice(0, 5);
    
  // Get initials for avatar fallback
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
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
        title="MoneyWorth - South African Financial Guides & Calculators"
        description="MoneyWorth provides expert financial insights tailored for South Africans. Find salary guides, tax calculators, and practical money advice."
        canonicalUrl="/"
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/categories" className="block">
              <div className="bg-white p-6 rounded-md shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <h2 className="text-lg font-semibold mb-2">Browse Wealth Categories</h2>
                <p className="text-sm text-gray-600 mb-3">Explore South Africa's wealthiest individuals by category</p>
                <Button variant="outline" size="sm" className="w-full">View Categories</Button>
              </div>
            </Link>
            <Link to="/salaries" className="block">
              <div className="bg-white p-6 rounded-md shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <h2 className="text-lg font-semibold mb-2">Explore Salaries</h2>
                <p className="text-sm text-gray-600 mb-3">Discover salary information across different professions</p>
                <Button variant="outline" size="sm" className="w-full">View Salaries</Button>
              </div>
            </Link>
            <Link to="/tax-calculator" className="block">
              <div className="bg-white p-6 rounded-md shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <h2 className="text-lg font-semibold mb-2">Tax Calculator</h2>
                <p className="text-sm text-gray-600 mb-3">Calculate your tax liability with our simple tool</p>
                <Button variant="outline" size="sm" className="w-full">Calculate Now</Button>
              </div>
            </Link>
          </div>
        </div>

        {/* Net Worth Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">SA Richest People</h2>
            <Link 
              to="/net-worth"
              className="text-blog-accent hover:text-blog-accent-hover transition-colors text-sm font-medium"
            >
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="md:col-span-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search by name..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <Select 
                value={industryFilter} 
                onValueChange={setIndustryFilter}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Filter by industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((industry) => (
                    <SelectItem key={industry} value={industry}>
                      {industry === "all" ? "All Industries" : industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="bg-white rounded-md shadow-sm border border-gray-200">
            {topPeople.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                No individuals found matching your search
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {topPeople.map((person) => (
                  <Link 
                    key={person.id} 
                    to={`/net-worth/${person.slug}`}
                    className="block p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={person.imageUrl} alt={person.name} />
                          <AvatarFallback className="bg-[#f6f6f0] text-gray-700">
                            {getInitials(person.name)}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-base font-medium text-[#333] truncate">
                          {person.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {person.industry} • {person.company || 'N/A'}
                        </p>
                      </div>
                      <div className="flex-shrink-0 ml-2">
                        <p className="text-sm font-semibold text-blog-accent">
                          {formatNetWorth(person.netWorth, person.currency)}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
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
              placeholder="Search blog posts..."
              className="pl-10"
              value={blogSearchQuery}
              onChange={(e) => setBlogSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        <BlogList posts={blogPosts} searchQuery={blogSearchQuery} />
      </main>

      <footer className="border-t border-gray-300 py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center text-[#828282] text-sm">
          <p>
            &copy; {new Date().getFullYear()} MoneyWorth. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Index;
