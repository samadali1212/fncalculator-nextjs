
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import Header from "../components/Header";
import SEO from "../components/SEO";
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getAllPlayers, formatWeeklySalary, EPLPlayer } from "../utils/eplPlayersData";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";

const EPLPlayers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [players, setPlayers] = useState<EPLPlayer[]>([]);
  const [itemsToShow, setItemsToShow] = useState(15);
  
  useEffect(() => {
    // Simulate loading state for better UX
    const timer = setTimeout(() => {
      setPlayers(getAllPlayers());
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Filter players based on search query
  const filteredPlayers = players.filter(player => {
    return searchQuery 
      ? player.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        player.team.toLowerCase().includes(searchQuery.toLowerCase()) ||
        player.position.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
  });
  
  // Sort players by weekly salary (highest first)
  const sortedPlayers = [...filteredPlayers].sort((a, b) => b.weeklySalary - a.weeklySalary);
  
  // Paginate results
  const displayedPlayers = sortedPlayers.slice(0, itemsToShow);
  const hasMorePlayers = displayedPlayers.length < sortedPlayers.length;
  
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title="Premier League Players' Salaries and Wages - SalaryList" 
        description="Discover the salaries and weekly wages of English Premier League football players. Updated figures for the top EPL stars and their contracts."
        canonicalUrl="/epl-players"
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">EPL Players' Salaries</h1>
          <p className="text-gray-600">
            The English Premier League is home to some of the highest-paid football players in the world. 
            Discover the weekly wages and annual salaries of your favorite EPL stars.
          </p>
          
          <div className="flex flex-wrap gap-3 mt-4">
            <Link to="/epl-categories" className="text-sm bg-white px-3 py-1 rounded-full border border-gray-200 hover:border-gray-300 transition-colors">
              View Categories
            </Link>
            <Link to="/highest-paid-epl-players" className="text-sm bg-white px-3 py-1 rounded-full border border-gray-200 hover:border-gray-300 transition-colors">
             Highest paid
            </Link>
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
              placeholder="Search players by name, team, or position..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        <div className="bg-white rounded-sm shadow-sm border border-gray-200">
          {filteredPlayers.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No players found matching "{searchQuery}"
            </div>
          ) : (
            <>
              <div className="p-4 border-b border-gray-100 bg-gray-50">
                <div className="grid grid-cols-12 text-xs font-medium text-gray-600">
                  <div className="col-span-1">#</div>
                  <div className="col-span-5 md:col-span-4">Player</div>
                  <div className="col-span-3 md:col-span-3">Team</div>
                  <div className="col-span-3 md:col-span-2">Position</div>
                  <div className="hidden md:block md:col-span-2">Weekly Salary</div>
                </div>
              </div>
              
              {displayedPlayers.map((player, index) => (
                <motion.div 
                  key={player.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`group px-4 py-4 ${index !== displayedPlayers.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <div className="grid grid-cols-12 items-center">
                    <div className="col-span-1 text-sm text-gray-500">
                      {index + 1}
                    </div>
                    
                    <div className="col-span-5 md:col-span-4">
                      <div className="flex items-center">
                        {player.imageUrl && (
                          <div className="h-10 w-10 mr-3 rounded-full overflow-hidden flex-shrink-0">
                            <img 
                              src={player.imageUrl} 
                              alt={player.name} 
                              className="h-full w-full object-cover"
                            />
                          </div>
                        )}
                        
                        <div>
                          <Link 
                            to={`/epl-players/${player.slug}`}
                            className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-blog-accent flex items-center"
                          >
                            {player.name}
                            <ArrowUpRight 
                              className="h-3.5 w-3.5 ml-1 text-blog-subtle opacity-0 group-hover:opacity-100 transition-opacity"
                            />
                          </Link>
                          <div className="text-xs text-gray-500 md:hidden">
                            {formatWeeklySalary(player.weeklySalary)}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-span-3 md:col-span-3">
                      <span className="text-sm text-gray-700">{player.team}</span>
                    </div>
                    
                    <div className="col-span-3 md:col-span-2">
                      <span className="text-sm text-gray-700">{player.position}</span>
                    </div>
                    
                    <div className="hidden md:block md:col-span-2">
                      <span className="text-sm font-medium">{formatWeeklySalary(player.weeklySalary)}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {hasMorePlayers && (
                <Pagination className="py-5">
                  <PaginationContent>
                    <PaginationItem className="w-full">
                      <Button 
                        variant="outline" 
                        onClick={loadMore} 
                        className="w-full"
                      >
                        Load More Players
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

export default EPLPlayers;
