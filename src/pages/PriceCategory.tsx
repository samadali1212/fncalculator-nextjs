import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  getExpensiveThingsByCategory,
  getCategoryBySlug,
  formatPrice,
  ExpensiveThing,
  Category
} from "../utils/expensiveThingsData";

const GlobalNetWorthCategory = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsToShow, setItemsToShow] = useState(50);
  const [sortField, setSortField] = useState<string>("price");
  
  const category = slug ? getCategoryBySlug(slug) : undefined;
  
  const [items, setItems] = useState<ExpensiveThing[]>([]);
  
  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      if (category) {
        const categoryItems = getExpensiveThingsByCategory(category.id);
        setItems(categoryItems);
      }
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [category]);
  
  const filteredItems = items.filter(item => {
    return searchQuery 
      ? item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      : true;
  });
  
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortField === "price") {
      return b.price.amount - a.price.amount;
    } else if (sortField === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortField === "year") {
      return b.price.year - a.price.year;
    }
    return 0;
  });
  
  const displayedItems = sortedItems.slice(0, itemsToShow);
  const hasMoreItems = displayedItems.length < filteredItems.length;
  
  const loadMore = () => {
    setItemsToShow(prevItemsToShow => prevItemsToShow + 10);
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

  if (!category) {
    return (
      <div className="min-h-screen bg-[#f6f6f0] flex items-center justify-center">
        <Header />
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Category Not Found</h2>
          <p className="mb-4">The category you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/price-categories')}>
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
        title={`${category.name}`}
        description={category.description}
        canonicalUrl={`/price/category/${slug}`}
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="mb-6">
          <Link 
            to="/price-categories"
            className="inline-flex items-center text-sm text-[#000000] hover:underline"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            All Categories
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
            <p className="text-gray-600">
              {category.description}
            </p>
          </div>
          
          <Link 
            to="/price-categories"
            className="mt-4 md:mt-0 inline-flex items-center text-blog-accent hover:text-blog-accent-hover transition-colors"
          >
            <ListFilter className="h-4 w-4 mr-1.5" />
            All Categories
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
              placeholder="Search by name, description, or tags..."
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
                <SelectItem value="price">Sort by Price</SelectItem>
                <SelectItem value="title">Sort by Title</SelectItem>
                <SelectItem value="year">Sort by Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {category.imageUrl && (
          <div className="mb-8 rounded-md overflow-hidden">
            <img 
              src={category.imageUrl} 
              alt={category.name} 
              className="w-full h-64 object-cover"
            />
          </div>
        )}

        <div className="mb-6">
          <AdSense slot="9889084223" format="auto" className="py-3" />
        </div>
        
        <div className="bg-white rounded-sm shadow-sm border border-gray-200">
          {filteredItems.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No items found matching "{searchQuery}"
            </div>
          ) : (
            <>
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="w-[50px] font-medium text-xs text-gray-600">#</TableHead>
                    <TableHead className="font-medium text-xs text-gray-600">Item</TableHead>
                    <TableHead className="font-medium text-xs text-gray-600">Price</TableHead>
                    <TableHead className="hidden md:table-cell font-medium text-xs text-gray-600">Year</TableHead>
                    <TableHead className="hidden md:table-cell font-medium text-xs text-gray-600">Tags</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {displayedItems.map((item, index) => (
                    <React.Fragment key={`item-row-${item.id}`}>
                      <TableRow className="group hover:bg-gray-50">
                        <TableCell className="text-sm text-gray-500">
                          {index + 1}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Avatar className="h-8 w-8 mr-3 flex-shrink-0">
                              <AvatarImage 
                                src={item.imageUrl || "/placeholder.svg"} 
                                alt={item.title} 
                                className="object-cover"
                              />
                              <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-xs">
                                {item.title.substring(0, 2).toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                            
                            <div className="min-w-0">
                              <Link 
                                to={`/price/${item.slug}`}
                                className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-blog-accent flex items-center"
                              >
                                {item.title}
                                <ArrowUpRight 
                                  className="h-3.5 w-3.5 ml-1 text-blog-subtle opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                                />
                              </Link>
                              <div className="text-xs text-gray-500 truncate max-w-[200px] md:max-w-full">
                                {item.shortDescription.substring(0, 60)}...
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        
                        <TableCell className="text-sm font-medium">
                          {formatPrice(item.price)}
                        </TableCell>
                        
                        <TableCell className="hidden md:table-cell">
                          <span className="px-1.5 py-0.5 bg-gray-100 rounded text-[#666] text-xs">
                            {item.price.year}
                          </span>
                        </TableCell>
                        
                        <TableCell className="hidden md:table-cell">
                          <span className="text-xs text-gray-600">{item.tags[0] || "—"}</span>
                        </TableCell>
                      </TableRow>
                      {(index + 1) % 12 === 0 && index !== displayedItems.length - 1 && (
                        <TableRow>
                          <TableCell colSpan={5} className="p-0">
                            <div className="my-2">
                              <AdSense slot="9889084223" format="auto" className="py-3" />
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
              
              {hasMoreItems && (
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
            &copy; {new Date().getFullYear()} SoExpensive. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default GlobalNetWorthCategory;
