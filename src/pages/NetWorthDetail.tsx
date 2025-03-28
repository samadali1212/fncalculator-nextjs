import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, User, TrendingUp, Briefcase, MapPin, Calendar, ExternalLink, ChevronsUp, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import SEO from "../components/SEO";
import { getPersonBySlug, formatNetWorth, getCategoryBySlug, NetWorthPerson, getPeopleByCategory } from "../utils/netWorthData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";

const NetWorthDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [person, setPerson] = useState<NetWorthPerson | null>(null);
  const [categoryPeople, setCategoryPeople] = useState<NetWorthPerson[]>([]);
  
  useEffect(() => {
    setIsLoading(true);
    
    if (!slug) {
      navigate("/net-worth");
      return;
    }
    
    const fetchData = async () => {
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const foundPerson = getPersonBySlug(slug);
      setPerson(foundPerson || null);
      
      if (foundPerson?.categories && foundPerson.categories.length > 0) {
        const categoryId = foundPerson.categories[0]; // Use the first category
        const sameCategoryPeople = getPeopleByCategory(categoryId, 5)
          .filter(p => p.slug !== slug);
        setCategoryPeople(sameCategoryPeople);
      }
      
      setIsLoading(false);
    };
    
    fetchData();
  }, [slug, navigate]);
  
  // Get initials for avatar fallback
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
      <div className="min-h-screen bg-[#f6f6f0]">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="h-8 mb-6">
              <Skeleton className="w-32 h-6" />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Skeleton className="h-64 w-full rounded-xl mb-8" />
                <Skeleton className="h-8 w-3/4 mb-4" />
                <div className="space-y-4 mb-8">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
                <Skeleton className="h-64 w-full rounded-xl" />
              </div>
              
              <div>
                <Skeleton className="h-96 w-full rounded-xl mb-8" />
                <Skeleton className="h-64 w-full rounded-xl" />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!person) {
    return (
      <div className="min-h-screen bg-[#f6f6f0] flex items-center justify-center">
        <Card className="w-96 p-6">
          <h2 className="text-xl font-semibold mb-4">Person Not Found</h2>
          <p className="mb-6 text-gray-600">The person you're looking for doesn't exist or has been removed.</p>
          <Link to="/net-worth" className="text-blog-accent hover:underline flex items-center">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Net Worth List
          </Link>
        </Card>
      </div>
    );
  }

  const category = person.categories && person.categories.length > 0 
    ? getCategoryBySlug(person.categories[0]) 
    : null;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title={`${person.name} Net Worth - ${formatNetWorth(person.netWorth, person.currency)} | MoneyWorth`}
        description={`${person.name} has a net worth of ${formatNetWorth(person.netWorth, person.currency)}. Learn about ${person.name.split(' ')[0]}'s wealth, business ventures, and financial journey.`}
        canonicalUrl={`/net-worth/${person.slug}`}
        ogImage={person.imageUrl || "/MoneyWorth.webp"}
      />
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link 
            to="/net-worth"
            className="inline-flex items-center text-sm text-[#000000] mb-6 hover:underline"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Net Worth List
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Hero Card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <div className="relative h-56 md:h-72 overflow-hidden bg-gradient-to-r from-gray-700 to-gray-900">
                  {person.backgroundUrl ? (
                    <img 
                      src={person.backgroundUrl} 
                      alt={`${person.name} background`} 
                      className="w-full h-full object-cover opacity-50"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900" />
                  )}
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-20 w-20 border-4 border-white shadow-xl">
                        <AvatarImage src={person.imageUrl || ""} alt={person.name} />
                        <AvatarFallback className="text-2xl bg-gray-200 text-gray-700">
                          {getInitials(person.name)}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="ml-5">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">
                          {person.name}
                        </h1>
                        <div className="flex items-center text-gray-300 text-sm">
                          <Briefcase className="w-4 h-4 mr-1 opacity-80" />
                          <span>{person.occupation}</span>
                          {person.company && (
                            <>
                              <span className="mx-1">•</span>
                              <span>{person.company}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                        {formatNetWorth(person.netWorth, person.currency)}
                      </h2>
                      <div className="flex items-center mb-4">
                        <Badge variant="outline" className="border-green-500 text-green-600 font-medium">
                          <ChevronsUp className="mr-1 h-3 w-3" />
                          Wealthy South African
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <div className="text-xs text-gray-500">Industry</div>
                          <div className="font-medium">{person.industry}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Category</div>
                          <div className="font-medium">
                            {category?.name || "Uncategorized"}
                          </div>
                        </div>
                        {person.birthdate && (
                          <div>
                            <div className="text-xs text-gray-500">Birthdate</div>
                            <div className="font-medium flex items-center">
                              <Calendar className="h-3.5 w-3.5 mr-1.5 text-gray-400" />
                              {person.birthdate}
                            </div>
                          </div>
                        )}
                        {person.location && (
                          <div>
                            <div className="text-xs text-gray-500">Location</div>
                            <div className="font-medium flex items-center">
                              <MapPin className="h-3.5 w-3.5 mr-1.5 text-gray-400" />
                              {person.location}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Wealth Source</div>
                        <div className="flex items-center space-x-2">
                          {person.wealthSource?.split(",").map((source, index) => (
                            <Badge key={index} variant="secondary" className="bg-gray-100">
                              {source.trim()}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {person.affiliations && (
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Affiliations</div>
                          <div className="text-sm">{person.affiliations}</div>
                        </div>
                      )}
                      
                      {person.website && (
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Website</div>
                          <a 
                            href={person.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blog-accent hover:underline flex items-center text-sm"
                          >
                            {person.website.replace(/^https?:\/\//, '')}
                            <ExternalLink className="h-3.5 w-3.5 ml-1" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Bio Section */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl p-6 md:p-8 shadow-md"
              >
                <h2 className="text-xl font-bold mb-4">About {person.name.split(' ')[0]}</h2>
                <div className="prose prose-sm max-w-none">
                  {person.bio ? (
                    <p className="text-gray-700 whitespace-pre-line">{person.bio}</p>
                  ) : (
                    <p className="text-gray-700 whitespace-pre-line">{person.description}</p>
                  )}
                  
                  {person.achievements && (
                    <>
                      <h3 className="text-lg font-semibold mt-6 mb-3">Key Achievements</h3>
                      <p className="text-gray-700">{person.achievements}</p>
                    </>
                  )}
                </div>
              </motion.div>
              
              {/* Wealth Comparison */}
              {categoryPeople.length > 0 && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-xl p-6 md:p-8 shadow-md"
                >
                  <h2 className="text-xl font-bold mb-4">Compared to other {category?.name || "individuals"}</h2>
                  
                  <div className="space-y-6">
                    {categoryPeople.map((otherPerson, index) => (
                      <div key={otherPerson.id} className="space-y-2">
                        <div className="flex justify-between">
                          <div className="flex items-center">
                            <Avatar className="h-6 w-6 mr-2">
                              <AvatarImage src={otherPerson.imageUrl || ""} alt={otherPerson.name} />
                              <AvatarFallback className="text-xs bg-gray-200 text-gray-700">
                                {getInitials(otherPerson.name)}
                              </AvatarFallback>
                            </Avatar>
                            <Link 
                              to={`/net-worth/${otherPerson.slug}`}
                              className="text-sm font-medium hover:text-blog-accent transition-colors"
                            >
                              {otherPerson.name}
                            </Link>
                          </div>
                          <span className="text-sm font-medium">
                            {formatNetWorth(otherPerson.netWorth, otherPerson.currency)}
                          </span>
                        </div>
                        
                        <Progress
                          value={(otherPerson.netWorth / person.netWorth) * 100}
                          className="h-2"
                          indicatorClassName={`${
                            otherPerson.netWorth > person.netWorth 
                              ? "bg-amber-500" 
                              : "bg-emerald-500"
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                  
                  {category && (
                    <div className="mt-6 text-center">
                      <Link
                        to={`/net-worth/category/${category.slug}`}
                        className="inline-flex items-center text-blog-accent hover:underline text-sm"
                      >
                        View all {category.name}
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
            
            {/* Sidebar Column */}
            <div className="space-y-8">
              {/* Wealth Distribution */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="bg-white rounded-xl p-6 md:p-8 shadow-md"
              >
                <h2 className="text-xl font-semibold mb-4">Assets & Investments</h2>
                
                {person.assets ? (
                  <div className="space-y-4">
                    {person.assets.split(",").map((asset, index) => (
                      <div key={index} className="flex items-center justify-between pb-3 border-b border-gray-100">
                        <div className="flex items-start">
                          <Badge className="bg-green-50 text-green-700 border-green-200 h-6">
                            Asset
                          </Badge>
                          <div className="ml-3">
                            <div className="font-medium text-sm">{asset.trim()}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-gray-500 text-sm italic">
                    Detailed asset information not available.
                  </div>
                )}
                
                {/* Investments Section */}
                {person.investments && (
                  <>
                    <h3 className="text-lg font-semibold mt-6 mb-4">Key Investments</h3>
                    <div className="space-y-3">
                      {person.investments.split(",").map((investment, index) => (
                        <div key={index} className="flex items-center">
                          <TrendingUp className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                          <span>{investment.trim()}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </motion.div>
              
              {/* Additional Info Card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="bg-white rounded-xl p-6 md:p-8 shadow-md"
              >
                <h2 className="text-xl font-semibold mb-4">Business Interests</h2>
                
                {person.businessInterests ? (
                  <div className="space-y-3">
                    {person.businessInterests.split(",").map((interest, index) => (
                      <div key={index} className="pb-3 border-b border-gray-100 last:border-0">
                        <div className="font-medium">{interest.trim()}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-gray-500 text-sm italic">
                    Detailed business interest information not available.
                  </div>
                )}
                
                {person.education && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-3">Education</h3>
                    <div className="text-sm text-gray-700">
                      {person.education}
                    </div>
                  </div>
                )}
              </motion.div>
              
              {/* Quote Card (if available) */}
              {person.quote && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-xl p-6 md:p-8 shadow-md relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-16 h-16 text-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.023.302.023.479 0 .774-.242.774-.651 0-.366-.254-.586-.704-.586zm1.975.02c-.2 0-.33.018-.407.036v1.168c.077.018.172.023.308.023.501 0 .813-.242.813-.651 0-.366-.262-.576-.714-.576zM18.5 2h-13A3.5 3.5 0 0 0 2 5.5v13A3.5 3.5 0 0 0 5.5 22h13a3.5 3.5 0 0 0 3.5-3.5v-13A3.5 3.5 0 0 0 18.5 2zM7.06 15.975c-.56 0-.9-.397-.9-.883 0-.71.543-1.106 1.453-1.106.172 0 .308.011.407.02v-.082c0-.204-.111-.312-.375-.312-.277 0-.548.096-.768.227l-.197-.548c.243-.138.59-.247.987-.247.74 0 1.05.407 1.05.997v.815c0 .193.011.336.021.444h-.6l-.04-.204h-.012c-.164.156-.4.247-.626.247zm1.982 0c-.507 0-.9-.214-.9-.207l.142-.561c.172.097.468.204.764.204.258 0 .375-.065.375-.183 0-.108-.082-.16-.407-.247-.563-.154-.822-.419-.822-.83 0-.493.406-.863 1.059-.863.348 0 .66.107.815.183l-.157.537a1.43 1.43 0 0 0-.663-.172c-.22 0-.34.076-.34.178 0 .106.102.156.43.247.567.163.801.406.801.84.001.494-.376.874-1.097.874zm2.03-.537v1.459h-.7v-3.24h.7v.289c.172-.183.415-.332.725-.332.574 0 .987.44.987 1.11 0 .847-.5 1.175-1.055 1.175a.939.939 0 0 1-.657-.247zm2.343.537c-.492 0-.846-.087-1.072-.183l.157-.537c.215.097.516.173.854.173.29 0 .433-.065.433-.194 0-.118-.093-.173-.45-.26-.647-.163-.944-.43-.944-.872 0-.505.43-.85 1.134-.85.355 0 .678.075.883.162l-.172.526c-.14-.065-.37-.152-.72-.152-.26 0-.386.087-.386.185 0 .118.117.172.493.27.581.15.886.366.886.882.001.496-.383.85-1.096.85zm3.96-1.658c0 .75-.43 1.701-1.565 1.701-.537 0-.867-.172-1.137-.431v.366h-.7v-3.24h.7v1.459c.237-.226.543-.366.986-.366.997.001 1.716.656 1.716 1.511zm-11.885-.177c0 .183.082.388.334.388.14 0 .258-.032.324-.064v-.516c-.054-.02-.14-.033-.247-.033-.214 0-.411.097-.411.225z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  
                  <div className="relative">
                    <blockquote className="italic text-white/90 mb-4">
                      "{person.quote}"
                    </blockquote>
                    <div className="text-sm text-white/70">– {person.name}</div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
          
          {/* Additional Resources Section (if any) */}
          {person.additionalResources && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 bg-white rounded-xl p-6 md:p-8 shadow-md"
            >
              <h2 className="text-xl font-bold mb-4">Additional Resources</h2>
              <div className="prose prose-sm max-w-none">
                <p className="whitespace-pre-line">{person.additionalResources}</p>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <footer className="border-t border-gray-300 py-6 bg-white">
        <div className="container mx-auto px-4 text-center text-[#828282] text-sm">
          <p>
            &copy; {new Date().getFullYear()} MoneyWorth. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default NetWorthDetail;
