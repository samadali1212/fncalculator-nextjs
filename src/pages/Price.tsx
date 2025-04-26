import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { Input } from "@/components/ui/input";
import AdSense from "../components/AdSense";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { getAllExpensiveThings, getAllCategories, formatPrice, ExpensiveThing, Category } from "../utils/expensiveThingsData";

const GlobalNetWorth = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [things, setThings] = useState<ExpensiveThing[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(100);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const allThings = getAllExpensiveThings();
      const allCategories = getAllCategories();
      setThings(allThings);
      setCategories(allCategories);
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const filteredThings = things.filter(thing => {
    const matchesSearch = searchQuery 
      ? thing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        thing.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        thing.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      : true;
      
    const matchesCategory = selectedCategory === "all" || thing.categoryId === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const sortedThings = [...filteredThings].sort((a, b) => 
    b.price.amount - a.price.amount
  );
  
  const displayedThings = sortedThings.slice(0, itemsToShow);
  const hasMore = displayedThings.length < sortedThings.length;
  
  const loadMore = () => {
    setItemsToShow(prev => prev + 20);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f6f6f0]">
        <Header />
        <div className="container mx-auto px-4 py-20">
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
        title="Most Expensive Things in the World" 
        description="Discover the world's most expensive and luxurious items across different categories. From real estate to jewelry, explore the highest-priced possessions that exist."
        canonicalUrl="/price"
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="flex flex-col mb-8">
          <h1 className="text-3xl font-bold mb-2">Most Expensive Things in the World</h1>
          <p className="text-gray-600 mb-6">
            Explore our comprehensive collection of the world's most expensive items. From magnificent real estate to priceless artworks, discover the most valuable possessions across different categories of life.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
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
          </div>
          
          <div className="bg-white rounded-sm shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-100 bg-gray-50">
              <div className="grid grid-cols-12 text-xs font-medium text-gray-600">
                <div className="col-span-1">#</div>
                <div className="col-span-8">Item</div>
                <div className="col-span-3">Price</div>
              </div>
            </div>
            
            {displayedThings.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                No items found matching your criteria.
              </div>
            ) : (
              <>
                {displayedThings.map((thing, index) => (
                  <motion.div 
                    key={thing.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`group px-4 py-3 ${index !== displayedThings.length - 1 ? 'border-b border-gray-100' : ''}`}
                  >
                    <div className="grid grid-cols-12 items-center">
                      <div className="col-span-1 text-sm text-gray-500">
                        {index + 1}
                      </div>
                      
                      <div className="col-span-8">
                        <div className="flex items-center">
                            <Avatar className="h-8 w-8 mr-3 flex-shrink-0">
                              <AvatarImage 
                                src={thing.imageUrl || "/placeholder.svg"} 
                                alt={thing.title} 
                                className="object-cover"
                              />
                              <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-xs">
                                {thing.title.substring(0, 2).toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                          
                          <div>
                            <Link 
                              to={`/price/${thing.slug}`}
                              className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-blog-accent flex items-center"
                            >
                              {thing.title}
                              <ArrowUpRight 
                                className="h-3.5 w-3.5 ml-1 text-blog-subtle opacity-0 group-hover:opacity-100 transition-opacity"
                              />
                            </Link>
                            <div className="text-xs text-gray-500 line-clamp-2">
                              {thing.shortDescription}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-span-3">
                        <span className="text-sm font-medium">
                          {formatPrice(thing.price)}
                        </span>
                        <div className="text-xs text-gray-500">
                          ({thing.price.year})
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </>
            )}
          </div>
          
          {hasMore && (
            <div className="mt-6">
              <button
                onClick={loadMore}
                className="w-full py-2 bg-white border border-gray-200 rounded-md text-gray-600 hover:bg-gray-50"
              >
                Load More
              </button>
            </div>
          )}
        </div>

        <div className="my-6">
          <AdSense slot="9889084223" format="auto" className="py-4" />
        </div>
      </main>

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

export default GlobalNetWorth;
