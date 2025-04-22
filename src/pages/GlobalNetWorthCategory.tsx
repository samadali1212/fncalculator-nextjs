import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { Search, ArrowUpRight, ListFilter, ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import Header from "../components/Header";
import SEO from "../components/SEO";
import AdSense from "../components/AdSense";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { 
  findCategoryBySlug, 
  getCategoryIdBySlug,
  getPeopleByCategory
} from "../utils/globalNetWorthData";

const GlobalNetWorthCategory = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsToShow, setItemsToShow] = useState(50);
  const [sortField, setSortField] = useState<string>("netWorth");
  
  const isDirectAccess = location.pathname === "/global-executives";
  const categorySlug = isDirectAccess ? "richest-global-executives" : slug;
  
  const category = categorySlug ? findCategoryBySlug(categorySlug) : undefined;
  const categoryId = categorySlug ? getCategoryIdBySlug(categorySlug) : undefined;
  
  const [people, setPeople] = useState<any[]>([]);
  
  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      if (categoryId) {
        const categoryPeople = getPeopleByCategory(categoryId);
        setPeople(categoryPeople);
      }
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [categoryId]);
  
  const filteredPeople = people.filter(person => {
    return searchQuery 
      ? person.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        person.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        person.industry.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
  });
  
  const sortedPeople = [...filteredPeople].sort((a, b) => {
    if (sortField === "netWorth") {
      return b.netWorth - a.netWorth;
    } else if (sortField === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortField === "company") {
      const companyA = a.company || "";
      const companyB = b.company || "";
      return companyA.localeCompare(companyB);
    }
    return 0;
  });
  
  const displayedPeople = sortedPeople.slice(0, itemsToShow);
  const hasMorePeople = displayedPeople.length < filteredPeople.length;
  
  const loadMore = () => {
    setItemsToShow(prevItemsToShow => prevItemsToShow + 10);
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

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

  if (!category || !categoryId) {
    return (
      <div className="min-h-screen bg-[#f6f6f0] flex items-center justify-center">
        <Header />
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Category Not Found</h2>
          <p className="mb-4">The category you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/global-categories')}>
            All Categories
          </Button>
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
        title={`${category.title} | World's Wealthiest`}
        description={category.description}
        canonicalUrl={isDirectAccess ? "/global-executives" : `/global-net-worth/category/${slug}`}
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        {!isDirectAccess && (
          <div className="mb-6">
            <Link 
              to="/global-categories"
              className="inline-flex items-center text-sm text-[#000000] hover:underline"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              All Categories
            </Link>
          </div>
        )}
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">{category.title}</h1>
            <p className="text-gray-600">
              {category.description}
            </p>
          </div>
          
          {!isDirectAccess && (
            <Link 
              to="/global-categories"
              className="mt-4 md:mt-0 inline-flex items-center text-blog-accent hover:text-blog-accent-hover transition-colors"
            >
              <ListFilter className="h-4 w-4 mr-1.5" />
              Top 10
            </Link>
          )}
        </div>
        
        <div className="mb-6">
         <AdSense slot="9889084223" format="auto" className="py-3" />
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
              placeholder="Search by name, company, or industry..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div>
            <Select 
              value={sortField} 
              onValueChange={setSortField}
            >
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="netWorth">Sort by Net Worth</SelectItem>
                <SelectItem value="name">Sort by Name</SelectItem>
                <SelectItem value="company">Sort by Company</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {category.imageUrl && (
          <div className="mb-8 rounded-md overflow-hidden">
            <img 
              src={category.imageUrl} 
              alt={category.title} 
              className="w-full h-64 object-cover"
            />
          </div>
        )}

         <div className="mb-6">
         <AdSense slot="9889084223" format="auto" className="py-3" />
         </div>
        
        <div className="bg-white rounded-sm shadow-sm border border-gray-200">
          {filteredPeople.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No individuals found matching "{searchQuery}"
            </div>
          ) : (
            <>
              <div className="p-4 border-b border-gray-100 bg-gray-50">
                <div className="grid grid-cols-12 text-xs font-medium text-gray-600">
                  <div className="col-span-1">#</div>
                  <div className="col-span-5 md:col-span-4">Name</div>
                  <div className="col-span-3 md:col-span-3">Net Worth</div>
                  <div className="hidden md:block md:col-span-2">Industry</div>
                  <div className="col-span-3 md:col-span-2">Company</div>
                </div>
              </div>
              
              {displayedPeople.map((person, index) => (
                <React.Fragment key={`person-row-${person.id}`}>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`group px-4 py-3 ${index !== displayedPeople.length - 1 ? 'border-b border-gray-100' : ''}`}
                  >
                    <div className="grid grid-cols-12 items-center">
                      <div className="col-span-1 text-sm text-gray-500">
                        {index + 1}
                      </div>
                      
                      <div className="col-span-5 md:col-span-4">
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-3">
                            <AvatarImage 
                              src={person.imageUrl || "/placeholder.svg"} 
                              alt={person.name} 
                              className="object-cover"
                            />
                            <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-xs">
                              {getInitials(person.name)}
                            </AvatarFallback>
                          </Avatar>
                          
                          <div>
                            <Link 
                              to={`/global-net-worth/${person.slug}`}
                              className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-blog-accent flex items-center"
                            >
                              {person.name}
                              <ArrowUpRight 
                                className="h-3.5 w-3.5 ml-1 text-blog-subtle opacity-0 group-hover:opacity-100 transition-opacity"
                              />
                            </Link>
                            <div className="text-xs text-gray-500">{person.occupation}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-span-3 md:col-span-3">
                        <span className="text-sm font-medium">{person.netWorth.toLocaleString('en-US', {
                          style: 'currency',
                          currency: person.currency,
                          maximumFractionDigits: 1,
                          minimumFractionDigits: 0,
                          notation: 'compact',
                          compactDisplay: 'short',
                        })}</span>
                      </div>
                      
                      <div className="hidden md:block md:col-span-2">
                        <span className="px-1.5 py-0.5 bg-gray-100 rounded text-[#666] text-xs">
                          {person.industry}
                        </span>
                      </div>
                      
                      <div className="col-span-3 md:col-span-2">
                        <span className="text-xs text-gray-600">{person.company || "—"}</span>
                      </div>
                    </div>
                  </motion.div>
                  {(index + 1) % 12 === 0 && index !== displayedPeople.length - 1 && (
                  <div className="my-6">
                    <AdSense slot="9889084223" format="auto" className="py-3" />
                  </div>
                  )}
                </React.Fragment>
              ))}
              
              {hasMorePeople && (
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

      <div className="mb-6">
         <AdSense slot="9889084223" format="auto" className="py-3" />
      </div>

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

export default GlobalNetWorthCategory;
