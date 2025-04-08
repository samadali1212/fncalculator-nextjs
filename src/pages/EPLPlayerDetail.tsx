
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SEO from "../components/SEO";
import ShareButton from "../components/ShareButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar, User, ArrowRight, Building, MapPin, Banknote, Award, Info } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  findPlayerBySlug,
  formatWeeklySalary,
  formatAnnualSalary,
  getSimilarPlayers,
  EPLPlayer
} from "../utils/eplPlayersData";

const EPLPlayerDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  const player = findPlayerBySlug(slug || "");
  const similarPlayers = player ? getSimilarPlayers(player, 5) : [];
  
  // Simulate loading from API
  useEffect(() => {
    setIsLoading(true);
    // Simulate network delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [slug]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f6f6f0]">
        <Header />
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="h-8 mb-6"></div>
            <div className="bg-white p-6 sm:p-8 rounded-md shadow-sm mb-8">
              <div className="flex items-start gap-4 mb-6">
                <Skeleton className="h-16 w-16 rounded-full" />
                <div className="flex-1">
                  <Skeleton className="h-10 w-3/4 mb-4" />
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-5 w-20" />
                    <Skeleton className="h-5 w-16" />
                  </div>
                </div>
              </div>
              <Skeleton className="h-24 w-full mb-8" />
              <div className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!player) {
    return (
      <div className="min-h-screen bg-[#f6f6f0] flex items-center justify-center">
        <Header />
        <Card>
          <CardContent className="p-6">
            <p>Player not found. Please try another search.</p>
            <Button onClick={() => navigate('/epl-players')} className="mt-4">
              Back to EPL Players List
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Format salary for the title without spaces
  const formattedWeeklySalaryForTitle = formatWeeklySalary(player.weeklySalary, "£").replace(/\s/g, "");
  
  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title={`${player.name} Salary Per Week At ${player.team}`}
        description={`${player.name}'s salary at ${player.team} is ${formatWeeklySalary(player.weeklySalary)}. Learn about ${player.name}'s contract, position, and career as a ${player.position}.`}
        canonicalUrl={`/epl-players/${player.slug}`}
      />
      
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center justify-between mb-6">
            <Link 
              to="/epl-players"
              className="inline-flex items-center text-sm text-[#000000] hover:underline"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              All EPL Players
            </Link>
            
            <ShareButton 
              title={`${player.name} Salary Per Week At ${player.team} | SalaryList`} 
              variant="outline"
            />
          </div>
          
          <article className="bg-white p-6 sm:p-8 rounded-md shadow-sm mb-8">
            <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
              <Avatar className="h-24 w-24 rounded-full border-2 border-gray-100 shadow-sm">
                <AvatarImage src={player.imageUrl || "/placeholder.svg"} alt={player.name} />
                <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-lg font-medium">
                  {getInitials(player.name)}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-[#333] mb-2">
                  {player.name} Salary
                </h1>
                
                <div className="flex flex-wrap items-center gap-3 text-sm text-[#666] mb-3">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1 text-[#999]" />
                    <span>{player.age} years old</span>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-[#999]" />
                    <span>{player.nationality}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Badge variant="outline" className="px-2 py-0 h-5 text-xs">
                      {player.position}
                    </Badge>
                  </div>
                </div>
                
                <div className="text-xl font-semibold text-[#333]">
                  {formatWeeklySalary(player.weeklySalary)}
                </div>
                
                <div className="text-sm text-gray-600 mt-1">
                  {formatAnnualSalary(player.weeklySalary * 52)}
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-100 pt-6 mb-6"></div>
            
            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <div className="grid md:grid-cols-3 gap-2">
                <div className="flex flex-col items-center bg-white p-4 rounded border border-gray-100">
                  <div className="text-gray-600 text-sm mb-1">Weekly Salary</div>
                  <div className="text-xl font-bold">{player.weeklySalary}</div>
                  <div className="text-gray-500 text-xs mt-1">Source: {player.source}</div>
                </div>
                <div className="flex flex-col items-center bg-white p-4 rounded border border-gray-100">
                  <div className="text-gray-600 text-sm mb-1">Team</div>
                  <div className="text-lg font-medium">{player.team}</div>
                  <div className="text-gray-500 text-xs mt-1">{player.position}</div>
                </div>
                <div className="flex flex-col items-center bg-white p-4 rounded border border-gray-100">
                  <div className="text-gray-600 text-sm mb-1">Contract Until</div>
                  <div className="text-lg font-medium">{player.contractUntil}</div>
                  <div className="text-gray-500 text-xs mt-1">{player.jerseyNumber ? `Jersey #${player.jerseyNumber}` : "Jersey number not available"}</div>
                </div>
              </div>
            </div>
            
            <div className="prose prose-sm sm:prose max-w-none mb-8">
              <h2 className="text-xl font-semibold mb-3">About {player.name}</h2>
              <p className="text-gray-700 leading-relaxed">
                {player.description}
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-3">Player Details</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Detail</TableHead>
                    <TableHead className="text-right">Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Weekly Salary</TableCell>
                    <TableCell className="text-right font-medium">{formatWeeklySalary(player.weeklySalary)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Annual Salary</TableCell>
                    <TableCell className="text-right font-medium">{formatAnnualSalary(player.annualSalary)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Team</TableCell>
                    <TableCell className="text-right">{player.team}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Position</TableCell>
                    <TableCell className="text-right">{player.position}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Nationality</TableCell>
                    <TableCell className="text-right">{player.nationality}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Age</TableCell>
                    <TableCell className="text-right">{player.age} years</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Contract Until</TableCell>
                    <TableCell className="text-right">{player.contractUntil}</TableCell>
                  </TableRow>
                  {player.height && (
                    <TableRow>
                      <TableCell>Height</TableCell>
                      <TableCell className="text-right">{player.height}</TableCell>
                    </TableRow>
                  )}
                  {player.jerseyNumber && (
                    <TableRow>
                      <TableCell>Jersey Number</TableCell>
                      <TableCell className="text-right">#{player.jerseyNumber}</TableCell>
                    </TableRow>
                  )}
                  {player.transferValue && (
                    <TableRow>
                      <TableCell>Transfer Value</TableCell>
                      <TableCell className="text-right">£{player.transferValue} million</TableCell>
                    </TableRow>
                  )}
                  {player.internationalCaps && (
                    <TableRow>
                      <TableCell>International Caps</TableCell>
                      <TableCell className="text-right">{player.internationalCaps}</TableCell>
                    </TableRow>
                  )}
                  <TableRow>
                    <TableCell>Information Source</TableCell>
                    <TableCell className="text-right">{player.source}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Last Updated</TableCell>
                    <TableCell className="text-right">{player.lastUpdated}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            {player.accolades && player.accolades.length > 0 && (
              <div className="mb-8">
                <h3 className="font-semibold text-lg mb-3">Achievements & Accolades</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {player.accolades.map((accolade, index) => (
                    <li key={index}>{accolade}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {player.previousClubs && player.previousClubs.length > 0 && (
              <div className="mb-8">
                <h3 className="font-semibold text-lg mb-3">Previous Clubs</h3>
                <div className="flex flex-wrap gap-2">
                  {player.previousClubs.map((club, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {club}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            <div className="bg-[#fff9e6] p-5 rounded-md">
              <h3 className="font-medium mb-3 flex items-center">
                <Info className="h-4 w-4 mr-2" />
                About This Data
              </h3>
              <p className="text-sm text-gray-700">
                Salary information is based on reported figures and public disclosures. Actual contracts may vary and might include performance-based bonuses, image rights, and other additional compensation not reflected in the basic weekly salary figures shown here.
              </p>
            </div>
          </article>
          
          {/* Similar Players Section */}
          {similarPlayers.length > 0 && (
            <div className="bg-white rounded-md shadow-sm overflow-hidden mb-8">
              <div className="p-6 sm:p-8 border-b border-gray-100">
                <h2 className="text-2xl font-bold mb-2">Similar Players</h2>
                <p className="text-sm text-gray-600">
                  Players with similar positions or from the same team
                </p>
              </div>
              
              <div className="divide-y divide-gray-100">
                {similarPlayers.map((similarPlayer, index) => (
                  <motion.div 
                    key={similarPlayer.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group py-3 px-6 sm:px-8"
                  >
                    <div className="flex items-center">
                      <div className="pr-3 text-center hidden sm:block">
                        <span className="text-gray-500 text-sm">{index + 1}</span>
                      </div>
                      
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src={similarPlayer.imageUrl || "/placeholder.svg"} alt={similarPlayer.name} />
                        <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-xs">
                          {getInitials(similarPlayer.name)}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <Link 
                          to={`/epl-players/${similarPlayer.slug}`}
                          className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-blog-accent"
                        >
                          {similarPlayer.name}
                        </Link>
                        
                        <div className="flex items-center text-xs text-[#828282]">
                          <span>{formatWeeklySalary(similarPlayer.weeklySalary)}</span>
                          <span className="mx-1">•</span>
                          <span className="font-medium text-[#555]">{similarPlayer.team}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#999] group-hover:text-[#ff6600] transition-colors opacity-0 group-hover:opacity-100" />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="p-6 sm:p-8 border-t border-gray-100">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate('/epl-players')}
                >
                  View All EPL Players
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-gray-300 py-6 bg-white">
        <div className="container mx-auto px-4 text-center text-[#828282] text-sm">
          <p>
            &copy; {new Date().getFullYear()} SalaryList. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default EPLPlayerDetail;
