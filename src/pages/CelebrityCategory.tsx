
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Search, ArrowUpRight, ListFilter, ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import Header from "../components/Header";
import SEO from "../components/SEO";
import ShareButton from "../components/ShareButton";
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
  findCelebrityCategoryBySlug, 
  getCelebrityCategoryIdBySlug,
  getCelebritiesByCategory
} from "../utils/celebrityCategoriesData";
import { formatSalary } from "../utils/celebrityData";

const CelebrityCategory = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsToShow, setItemsToShow] = useState(50);
  const [sortField, setSortField] = useState<string>("salary");
  
  const category = slug ? findCelebrityCategoryBySlug(slug) : undefined;
  const categoryId = slug ? getCelebrityCategoryIdBySlug(slug) : undefined;
  
  const [celebrities, setCelebrities] = useState<any[]>([]);
  
  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      if (categoryId) {
        const categoryCelebrities = getCelebritiesByCategory(categoryId);
        setCelebrities(categoryCelebrities);
      }
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [categoryId]);
  
  const filteredCelebrities = celebrities.filter(celebrity => {
    return searchQuery 
      ? celebrity.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        celebrity.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        celebrity.industry.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
  });
  
  const sortedCelebrities = [...filteredCelebrities].sort((a, b) => {
    if (sortField === "salary") {
      return b.salary - a.salary;
    } else if (sortField === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortField === "company") {
      const companyA = a.company || "";
      const companyB = b.company || "";
      return companyA.localeCompare(companyB);
    }
    return 0;
  });
  
  const displayedCelebrities = sortedCelebrities.slice(0, itemsToShow);
  const hasMoreCelebrities = displayedCelebrities.length < filteredCelebrities.length;
  
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
          <Button onClick={() => navigate('/celebrity-categories')}>
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
        title={`${category.title} | South Africa's Top Earners`}
        description={category.description}
        canonicalUrl={`/celebrities/category/${slug}`}
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="mb-6">
          <Link 
            to="/celebrity-categories"
            className="inline-flex items-center text-sm text-[#000000] hover:underline"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            All Celebrity Categories
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">{category.title}</h1>
            <p className="text-gray-600">
              {category.description}
            </p>
          </div>
            <ShareButton 
              title={`${celebrity.name}'s Salary - SalaryList`} 
              variant="outline"
            />
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
                <SelectItem value="salary">Sort by Salary</SelectItem>
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

        <div className="bg-white rounded-sm shadow-sm border border-gray-200">
          {filteredCelebrities.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No celebrities found matching "{searchQuery}"
            </div>
          ) : (
            <>
              <div className="p-4 border-b border-gray-100 bg-gray-50">
                <div className="grid grid-cols-12 text-xs font-medium text-gray-600">
                  <div className="col-span-1">#</div>
                  <div className="col-span-5 md:col-span-4">Name</div>
                  <div className="col-span-3 md:col-span-3">Salary</div>
                  <div className="hidden md:block md:col-span-2">Industry</div>
                  <div className="col-span-3 md:col-span-2">Company</div>
                </div>
              </div>
              
              {displayedCelebrities.map((celebrity, index) => (
                <motion.div 
                  key={celebrity.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`group px-4 py-3 ${index !== displayedCelebrities.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <div className="grid grid-cols-12 items-center">
                    <div className="col-span-1 text-sm text-gray-500">
                      {index + 1}
                    </div>
                    
                    <div className="col-span-5 md:col-span-4">
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8 mr-3">
                          <AvatarImage src={celebrity.imageUrl || "/placeholder.svg"} alt={celebrity.name} />
                          <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-xs">
                            {getInitials(celebrity.name)}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div>
                          <Link 
                            to={`/celebrities/${celebrity.slug}`}
                            className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-blog-accent flex items-center"
                          >
                            {celebrity.name}
                            <ArrowUpRight 
                              className="h-3.5 w-3.5 ml-1 text-blog-subtle opacity-0 group-hover:opacity-100 transition-opacity"
                            />
                          </Link>
                          <div className="text-xs text-gray-500">{celebrity.occupation}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-span-3 md:col-span-3">
                      <span className="text-sm font-medium">{formatSalary(celebrity.salary, celebrity.currency)}</span>
                    </div>
                    
                    <div className="hidden md:block md:col-span-2">
                      <span className="px-1.5 py-0.5 bg-gray-100 rounded text-[#666] text-xs">
                        {celebrity.industry}
                      </span>
                    </div>
                    
                    <div className="col-span-3 md:col-span-2">
                      <span className="text-xs text-gray-600">{celebrity.company || "—"}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {hasMoreCelebrities && (
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

export default CelebrityCategory;
