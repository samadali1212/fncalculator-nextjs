
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, CalendarDays, MapPin, ArrowUpRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Header from "../components/Header";
import SEO from "../components/SEO";
import ShareButton from "../components/ShareButton";
import { findCelebrityBySlug, getRelatedCelebrities, getAllRealNames, CelebrityRealName } from "../utils/realNamesData";

const RealNameDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [celebrity, setCelebrity] = useState<CelebrityRealName | null>(null);
  const [relatedCelebrities, setRelatedCelebrities] = useState<CelebrityRealName[]>([]);
  const [moreRelatedCelebrities, setMoreRelatedCelebrities] = useState<CelebrityRealName[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(true);
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      if (slug) {
        const celeb = findCelebrityBySlug(slug);
        
        if (celeb) {
          setCelebrity(celeb);
          // Get celebrities with the same profession
          const related = getRelatedCelebrities(celeb.profession, slug, 4);
          setRelatedCelebrities(related);
          
          // Get random celebrities with different professions for the "More Real Names" section
          const allCelebs = getAllRealNames();
          const filtered = allCelebs
            .filter(c => c.slug !== slug && c.profession !== celeb.profession)
            .sort(() => 0.5 - Math.random()) // Shuffle array
            .slice(0, 8);
          setMoreRelatedCelebrities(filtered);
        }
      }
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [slug]);

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
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-16 h-16 border-4 border-blog-accent border-t-transparent rounded-full animate-spin"
        ></motion.div>
      </div>
    );
  }

  if (!celebrity) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Celebrity Not Found</h1>
        <p className="text-gray-600 mb-6">The celebrity you're looking for doesn't exist in our database.</p>
        <Button asChild>
          <Link to="/real-names">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Celebrity Real Names
          </Link>
        </Button>
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
        title={`${celebrity.stageName} Real Name: ${celebrity.realName}`} 
        description={`Discover ${celebrity.stageName}'s real name (${celebrity.realName}), biography, and interesting facts about this South African ${celebrity.profession.toLowerCase()}.`}
        canonicalUrl={`/real-names/${slug}`}
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="mb-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/real-names')}
            className="gap-1 mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Celebrity Real Names
          </Button>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-full md:w-1/3">
                  <div className="bg-white p-4 rounded-md border border-gray-200 shadow-sm">
                    <div className="aspect-square overflow-hidden rounded-md mb-4">
                      <Avatar className="w-full h-full rounded-md">
                        <AvatarImage 
                          src={celebrity.imageUrl || "/placeholder.svg"} 
                          alt={celebrity.stageName}
                          className="object-cover w-full h-full"
                        />
                        <AvatarFallback className="w-full h-full text-4xl bg-[#f6f6f0]">
                          {getInitials(celebrity.stageName)}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    
                    <div className="text-center">
                      <Badge className="mb-2">{celebrity.profession}</Badge>
                      <h1 className="text-2xl font-bold mb-1">{celebrity.stageName}</h1>
                      <div className="text-sm text-gray-500 mb-3">Born as</div>
                      <div className="text-lg font-medium text-gray-800 mb-4">{celebrity.realName}</div>
                      
                      <div className="flex justify-center space-x-2 mt-2">
                        <ShareButton 
                          title={`${celebrity.stageName}'s Real Name: ${celebrity.realName}`}
                          text={`Did you know that ${celebrity.stageName}'s real name is ${celebrity.realName}?`}
                          variant="outline"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-2/3">
                  <Card className="mb-6">
                    <CardHeader className="pb-3">
                      <CardTitle>Biography</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{celebrity.bio}</p>
                      
                      {(celebrity.birthDate || celebrity.birthPlace) && (
                        <div className="mt-4 flex flex-col space-y-2">
                          {celebrity.birthDate && (
                            <div className="flex items-center text-sm text-gray-600">
                              <CalendarDays className="h-4 w-4 mr-2" />
                              <span>Born: {celebrity.birthDate}</span>
                            </div>
                          )}
                          {celebrity.birthPlace && (
                            <div className="flex items-center text-sm text-gray-600">
                              <MapPin className="h-4 w-4 mr-2" />
                              <span>Birthplace: {celebrity.birthPlace}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                  
                  <Card className="mb-6">
                    <CardHeader className="pb-3">
                      <CardTitle>Fun Facts</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {celebrity.funFacts.map((fact, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blog-accent mr-2 font-bold">•</span>
                            <span className="text-gray-700">{fact}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            
            {relatedCelebrities.length > 0 && (
              <Card className="bg-white shadow-sm mb-8">
                <CardHeader className="pb-3">
                  <CardTitle>More {celebrity.profession}s</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {relatedCelebrities.map((celeb) => (
                      <Link
                        key={celeb.id}
                        to={`/real-names/${celeb.slug}`}
                        className="group"
                      >
                        <div className="p-4 rounded-md border border-gray-200 hover:shadow-md transition-all">
                          <div className="flex items-center mb-3">
                            <Avatar className="h-10 w-10 mr-3">
                              <AvatarImage src={celeb.imageUrl || "/placeholder.svg"} alt={celeb.stageName} />
                              <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-xs">
                                {getInitials(celeb.stageName)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="text-base font-medium group-hover:text-blog-accent transition-colors flex items-center">
                                {celeb.stageName}
                                <ArrowUpRight className="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <div className="text-xs text-gray-500">{celeb.profession}</div>
                            </div>
                          </div>
                          <div className="text-sm text-gray-700">
                            Real name: <span className="font-medium">{celeb.realName}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
            
            {/* New section: More Real Names */}
            {moreRelatedCelebrities.length > 0 && (
              <Card className="bg-white shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle>More Celebrity Real Names</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {moreRelatedCelebrities.map((celeb) => (
                      <Link
                        key={celeb.id}
                        to={`/real-names/${celeb.slug}`}
                        className="group"
                      >
                        <div className="p-4 rounded-md border border-gray-200 hover:shadow-md transition-all">
                          <div className="flex items-center mb-3">
                            <Avatar className="h-10 w-10 mr-3">
                              <AvatarImage src={celeb.imageUrl || "/placeholder.svg"} alt={celeb.stageName} />
                              <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-xs">
                                {getInitials(celeb.stageName)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="text-base font-medium group-hover:text-blog-accent transition-colors flex items-center">
                                {celeb.stageName}
                                <ArrowUpRight className="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <div className="text-xs text-gray-500">{celeb.profession}</div>
                            </div>
                          </div>
                          <div className="text-sm text-gray-700">
                            Real name: <span className="font-medium">{celeb.realName}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/real-names">View All Celebrity Real Names</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </main>

      <footer className="border-t border-gray-300 py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center text-[#828282] text-sm">
          <p>
            &copy; {new Date().getFullYear()} Salary List. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default RealNameDetail;
