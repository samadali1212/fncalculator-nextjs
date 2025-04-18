
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Search, ArrowUpRight, ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import Header from "../components/Header";
import SEO from "../components/SEO";
import AdSense from "../components/AdSense";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import {
  getCategoryBySlug,
  getItemsByCategory,
  GeneralKnowledgeItem
} from "../utils/generalKnowledgeData";

const GeneralKnowledgeCategory = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsToShow, setItemsToShow] = useState(20);
  
  const category = slug ? getCategoryBySlug(slug) : undefined;
  const [items, setItems] = useState<GeneralKnowledgeItem[]>([]);
  
  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      if (category) {
        const categoryItems = getItemsByCategory(category.id);
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
  
  // Sort items by newest
  const sortedItems = [...filteredItems].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  
  const displayedItems = sortedItems.slice(0, itemsToShow);
  const hasMoreItems = displayedItems.length < filteredItems.length;
  
  const loadMore = () => {
    setItemsToShow(prevItemsToShow => prevItemsToShow + 10);
  };

  // Get initials for avatar fallback
  const getInitials = (title: string) => {
    return title
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

  if (!category) {
    return (
      <div className="min-h-screen bg-[#f6f6f0] pt-20">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white p-6 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Category Not Found</h2>
            <p className="mb-4">The category you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/categories/general-knowledge')}>
              All Categories
            </Button>
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
        title={`${category.title} | South African General Knowledge`}
        description={category.description}
        canonicalUrl={`/general-knowledge/category/${slug}`}
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="mb-6">
          <Link 
            to="/general-knowledge"
            className="inline-flex items-center text-sm text-[#000000] hover:underline"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            All Categories
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">{category.title}</h1>
            <p className="text-gray-600">
              {category.description}
            </p>
          </div>
        </div>

          <div className="mb-6">
           <AdSense slot="9889084223" format="auto" className="py-3" />
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
              placeholder="Search items..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        {category.imageUrl && (
          <div className="mb-8 rounded-md overflow-hidden">
            <img 
              src={category.imageUrl} 
              alt={category.title} 
              className="w-full h-48 md:h-64 object-cover"
            />
          </div>
        )}
        
          <div className="mb-6">
           <AdSense slot="9889084223" format="auto" className="py-3" />
          </div>

        <div className="bg-white rounded-sm shadow-sm border border-gray-200">
          {filteredItems.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              {searchQuery ? 
                `No items found matching "${searchQuery}"` : 
                `No items found in this category`}
            </div>
          ) : (
            <>
              <div className="p-4 border-b border-gray-100 bg-gray-50">
                <div className="grid grid-cols-12 text-xs font-medium text-gray-600">
                  <div className="col-span-1">#</div>
                  <div className="col-span-7">Item</div>
                  <div className="col-span-4 text-right">Details</div>
                </div>
              </div>
              
              {displayedItems.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`group px-4 py-3 ${index !== displayedItems.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <div className="grid grid-cols-12 items-center">
                    <div className="col-span-1 text-sm text-gray-500">
                      {index + 1}
                    </div>
                    
                    <div className="col-span-7">
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src={item.imageUrl} alt={item.title} />
                          <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-xs">
                            {getInitials(item.title)}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div>
                          <Link 
                            to={`/general-knowledge/${item.slug}`}
                            className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-blog-accent flex items-center"
                          >
                            {item.title}
                            <ArrowUpRight 
                              className="h-3.5 w-3.5 ml-1 text-blog-subtle opacity-0 group-hover:opacity-100 transition-opacity"
                            />
                          </Link>
                          <div className="text-xs text-gray-500 line-clamp-1">{item.shortDescription}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-span-4 text-right">
                      <div className="flex flex-wrap justify-end gap-1">
                        {item.tags.slice(0, 2).map((tag, i) => (
                          <span 
                            key={i} 
                            className="px-1.5 py-0.5 bg-gray-100 rounded text-[#666] text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="text-xs hover:bg-gray-100"
                        >
                          <Link to={`/general-knowledge/${item.slug}`}>
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {hasMoreItems && (
                <Pagination className="py-5">
                  <PaginationContent>
                    <PaginationItem className="w-full">
                      <Button 
                        variant="outline" 
                        onClick={loadMore} 
                        className="w-full"
                      >
                        Load More Items
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
            &copy; {new Date().getFullYear()} SalaryList. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default GeneralKnowledgeCategory;
