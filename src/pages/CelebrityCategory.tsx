
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Search, ArrowUpRight, ListFilter, ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import Header from "../components/Header";
import SEO from "../components/SEO";
import AdSense from "../components/AdSense";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CelebrityCategoryList from "@/components/CelebrityCategoryList";
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
          
          <Link 
            to="/celebrity-categories"
            className="mt-4 md:mt-0 inline-flex items-center text-blog-accent hover:text-blog-accent-hover transition-colors"
          >
            <ListFilter className="h-4 w-4 mr-1.5" />
            Top 10
          </Link>
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
              loading="lazy"
            />
          </div>
        )}
        
        <div className="mb-6">
          <AdSense slot="9889084223" format="auto" className="py-3" />
        </div>
        
        <div className="bg-white rounded-sm shadow-sm border border-gray-200">
          {filteredCelebrities.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No celebrities found matching "{searchQuery}"
            </div>
          ) : (
            <CelebrityCategoryList 
              celebrities={displayedCelebrities}
              hasMore={hasMoreCelebrities}
              onLoadMore={loadMore}
              getInitials={getInitials}
            />
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

export default CelebrityCategory;
