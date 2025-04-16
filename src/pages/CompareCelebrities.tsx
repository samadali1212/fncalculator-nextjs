import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { 
  ArrowRight, 
  ChevronDown, 
  Search,
  X
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import SEO from "../components/SEO";
import ShareButton from "../components/ShareButton";
import { formatCurrency } from "../utils/utils";
import { celebrities } from "../utils/celebrityData";

interface Celebrity {
  id: string;
  slug: string;
  name: string;
  salary: number;
  currency: string;
  occupation: string;
  company?: string;
  industry?: string;
  image?: string;
  bio?: string;
}

const CelebrityComparison = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { comparison } = useParams();
  
  const [celebrity1Slug, celebrity2Slug] = comparison ? comparison.split('-vs-') : [null, null];
  
  const [celebrity1Id, setCelebrity1Id] = useState<string | null>(
    celebrity1Slug || searchParams.get("c1")
  );
  const [celebrity2Id, setCelebrity2Id] = useState<string | null>(
    celebrity2Slug || searchParams.get("c2")
  );
  const [celebrity1, setCelebrity1] = useState<Celebrity | null>(null);
  const [celebrity2, setCelebrity2] = useState<Celebrity | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Celebrity[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchingFor, setSearchingFor] = useState<"celebrity1" | "celebrity2">("celebrity1");

  useEffect(() => {
    if (celebrity1Id) {
      const celeb = celebrities.find(c => c.slug === celebrity1Id);
      if (celeb) {
        setCelebrity1({
          id: celeb.id.toString(),
          slug: celeb.slug,
          name: celeb.name,
          salary: celeb.salary,
          currency: celeb.currency || "ZAR",
          occupation: celeb.occupation || "",
          company: celeb.company,
          industry: celeb.industry,
          image: celeb.image || "/placeholder.svg",
          bio: celeb.bio
        });
      }
    } else {
      setCelebrity1(null);
    }
  }, [celebrity1Id]);
  
  useEffect(() => {
    if (celebrity2Id) {
      const celeb = celebrities.find(c => c.slug === celebrity2Id);
      if (celeb) {
        setCelebrity2({
          id: celeb.id.toString(),
          slug: celeb.slug,
          name: celeb.name,
          salary: celeb.salary,
          currency: celeb.currency || "ZAR",
          occupation: celeb.occupation || "",
          company: celeb.company,
          industry: celeb.industry,
          image: celeb.image || "/placeholder.svg",
          bio: celeb.bio
        });
      }
    } else {
      setCelebrity2(null);
    }
  }, [celebrity2Id]);

  useEffect(() => {
    if (celebrity1Id && celebrity2Id) {
      navigateToSEOUrl(celebrity1Id, celebrity2Id);
    }
  }, [celebrity1Id, celebrity2Id]);

  useEffect(() => {
    if (searchTerm.trim().length >= 2) {
      const filtered = celebrities
        .filter(celeb => 
          celeb.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (celeb.occupation && celeb.occupation.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (celeb.company && celeb.company.toLowerCase().includes(searchTerm.toLowerCase()))
        )
        .slice(0, 10)
        .map(celeb => ({
          id: celeb.id.toString(),
          slug: celeb.slug,
          name: celeb.name,
          salary: celeb.salary,
          currency: celeb.currency || "ZAR",
          occupation: celeb.occupation || "",
          company: celeb.company,
          industry: celeb.industry,
          image: celeb.image || "/placeholder.svg",
          bio: celeb.bio
        }));
      
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleSearch1Click = () => {
    setSearchingFor("celebrity1");
    setSearchTerm("");
    setShowDropdown(true);
  };

  const handleSearch2Click = () => {
    setSearchingFor("celebrity2");
    setSearchTerm("");
    setShowDropdown(true);
  };
  
  const navigateToSEOUrl = (c1: string, c2: string) => {
    navigate(`/compare-celebrities/${c1}-vs-${c2}`);
  };
  
  const selectCelebrity = (celebrity: Celebrity) => {
    if (searchingFor === "celebrity1") {
      setCelebrity1Id(celebrity.slug);
    } else {
      setCelebrity2Id(celebrity.slug);
    }
    setSearchTerm("");
    setShowDropdown(false);
  };
  
  const resetComparison = () => {
    setCelebrity1Id(null);
    setCelebrity2Id(null);
    setCelebrity1(null);
    setCelebrity2(null);
    navigate("/compare-celebrities");
  };
  
  const getSalaryDifference = () => {
    if (!celebrity1 || !celebrity2) return 0;
    return Math.abs(celebrity1.salary - celebrity2.salary);
  };
  
  const getSalaryRatio = () => {
    if (!celebrity1 || !celebrity2) return 0;
    
    if (celebrity2.salary === 0) return Infinity;
    if (celebrity1.salary === 0) return 0;
    
    if (celebrity1.salary > celebrity2.salary) {
      return celebrity1.salary / celebrity2.salary;
    } else {
      return celebrity2.salary / celebrity1.salary;
    }
  };
  
  const getRicherCelebrityName = () => {
    if (!celebrity1 || !celebrity2) return "";
    return celebrity1.salary > celebrity2.salary ? celebrity1.name : celebrity2.name;
  };
  
  const getLesserCelebrityName = () => {
    if (!celebrity1 || !celebrity2) return "";
    return celebrity1.salary < celebrity2.salary ? celebrity1.name : celebrity2.name;
  };
  
  const generateComparisonText = () => {
    if (!celebrity1 || !celebrity2) return "";
    
    const richerName = getRicherCelebrityName();
    const lesserName = getLesserCelebrityName();
    const ratio = getSalaryRatio().toFixed(1);
    const difference = getSalaryDifference();
    
    const richerCurrency = celebrity1.salary > celebrity2.salary ? celebrity1.currency : celebrity2.currency;
    const richerSalary = celebrity1.salary > celebrity2.salary ? celebrity1.salary : celebrity2.salary;
    const lesserSalary = celebrity1.salary < celebrity2.salary ? celebrity1.salary : celebrity2.salary;
    
    const richerOccupation = celebrity1.salary > celebrity2.salary ? celebrity1.occupation : celebrity2.occupation;
    const lesserOccupation = celebrity1.salary < celebrity2.salary ? celebrity1.occupation : celebrity2.occupation;
    
    const formattedDifference = formatCurrency(difference, richerCurrency);
    
    let comparisonText = `According to our data, ${richerName} earns more than ${lesserName} with a salary of ${formatCurrency(richerSalary, richerCurrency)}. `;
    
    if (ratio !== "Infinity" && ratio !== "1.0") {
      comparisonText += `${richerName} earns ${ratio} times more than ${lesserName}. `;
    }
    
    comparisonText += `The difference between their salaries is ${formattedDifference}. `;
    
    if (richerOccupation && lesserOccupation) {
      comparisonText += `${richerName} works as a ${richerOccupation}, while ${lesserName} is a ${lesserOccupation}. `;
    }
    
    return comparisonText;
  };

  const renderDropdown = () => {
    if (!showDropdown) return null;
    
    return (
      <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
        <div className="p-2">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search celebrities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <button 
              className="absolute right-3 top-2.5" 
              onClick={() => setShowDropdown(false)}
            >
              <X className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </div>
        
        {searchResults.length > 0 ? (
          <ul className="max-h-60 overflow-y-auto py-2">
            {searchResults.map((celeb) => (
              <li key={celeb.id} className="px-3 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => selectCelebrity(celeb)}>
                <div className="flex items-center">
                  <img src={celeb.image || "/placeholder.svg"} alt={celeb.name} className="w-10 h-10 rounded-full object-cover mr-3" />
                  <div>
                    <div className="font-medium">{celeb.name}</div>
                    <div className="text-sm text-gray-500">
                      {celeb.occupation}{celeb.company ? ` at ${celeb.company}` : ''}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : searchTerm.length >= 2 ? (
          <div className="p-4 text-center text-gray-500">No results found</div>
        ) : (
          <div className="p-4 text-center text-gray-500">Type at least 2 characters to search</div>
        )}
      </div>
    );
  };

  return (
    <>
      <SEO 
        title={celebrity1 && celebrity2 ? `${celebrity1.name} vs ${celebrity2.name} Salary - Who Earns More?` : "Celebrity Salary Comparison"}
        description={celebrity1 && celebrity2 ? `Compare the salaries of ${celebrity1.name} (${formatCurrency(celebrity1.salary, celebrity1.currency)}) and ${celebrity2.name} (${formatCurrency(celebrity2.salary, celebrity2.currency)}). Find out who earns more and by how much.` : "Compare the salaries of celebrities and public figures."}
        canonicalUrl={celebrity1 && celebrity2 ? `/compare-celebrities/${celebrity1.slug}-vs-${celebrity2.slug}` : "/compare-celebrities"}
      />
      
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <h1 className="text-3xl font-bold mb-8 text-center">
          {celebrity1 && celebrity2 
            ? `${celebrity1.name} vs ${celebrity2.name} - Salary Comparison` 
            : "Compare Celebrity Salaries"}
        </h1>
        
        {celebrity1 && celebrity2 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-6 flex justify-end">
              <ShareButton 
                title={`${celebrity1.name} vs ${celebrity2.name} - Salary Comparison`}
                text={`${celebrity1.name} (${formatCurrency(celebrity1.salary, celebrity1.currency)}) vs ${celebrity2.name} (${formatCurrency(celebrity2.salary, celebrity2.currency)})`}
              />
              <Button 
                variant="outline" 
                className="ml-2" 
                onClick={resetComparison}
              >
                New Comparison
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Card className="p-6 shadow-md">
                <div className="flex flex-col items-center">
                  <img 
                    src={celebrity1.image || "/placeholder.svg"} 
                    alt={celebrity1.name} 
                    className="w-32 h-32 rounded-full object-cover mb-4" 
                  />
                  <h2 className="text-xl font-semibold mb-2">{celebrity1.name}</h2>
                  <p className="text-gray-600 mb-1">{celebrity1.occupation}</p>
                  {celebrity1.company && (
                    <p className="text-gray-500 mb-4">{celebrity1.company}</p>
                  )}
                  <div className="text-2xl font-bold text-green-600">
                    {formatCurrency(celebrity1.salary, celebrity1.currency)}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Annual Salary</p>
                </div>
              </Card>
              
              <Card className="p-6 shadow-md">
                <div className="flex flex-col items-center">
                  <img 
                    src={celebrity2.image || "/placeholder.svg"} 
                    alt={celebrity2.name} 
                    className="w-32 h-32 rounded-full object-cover mb-4" 
                  />
                  <h2 className="text-xl font-semibold mb-2">{celebrity2.name}</h2>
                  <p className="text-gray-600 mb-1">{celebrity2.occupation}</p>
                  {celebrity2.company && (
                    <p className="text-gray-500 mb-4">{celebrity2.company}</p>
                  )}
                  <div className="text-2xl font-bold text-green-600">
                    {formatCurrency(celebrity2.salary, celebrity2.currency)}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Annual Salary</p>
                </div>
              </Card>
            </div>
            
            <Card className="p-6 mb-8 shadow-md">
              <h3 className="text-xl font-semibold mb-4">Salary Comparison</h3>
              
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span>Difference:</span>
                  <span className="font-semibold">
                    {formatCurrency(getSalaryDifference(), celebrity1.salary > celebrity2.salary ? celebrity1.currency : celebrity2.currency)}
                  </span>
                </div>
                
                <div className="flex justify-between mb-4">
                  <span>Ratio:</span>
                  <span className="font-semibold">
                    {getSalaryRatio().toFixed(1)}x
                  </span>
                </div>
                
                <div className="h-6 bg-gray-200 rounded-full overflow-hidden">
                  {celebrity1 && celebrity2 && (
                    <div 
                      className="h-full bg-blue-500"
                      style={{ 
                        width: `${(celebrity1.salary / (celebrity1.salary + celebrity2.salary)) * 100}%` 
                      }}
                    />
                  )}
                </div>
                
                <div className="flex justify-between mt-2 text-sm">
                  <span>{celebrity1.name}</span>
                  <span>{celebrity2.name}</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">Summary</h4>
                <p className="text-gray-700">
                  {generateComparisonText()}
                </p>
              </div>
            </Card>
            
            {(celebrity1.bio || celebrity2.bio) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {celebrity1.bio && (
                  <Card className="p-6 shadow-md">
                    <h3 className="text-xl font-semibold mb-4">{celebrity1.name}'s Background</h3>
                    <p className="text-gray-700">{celebrity1.bio}</p>
                  </Card>
                )}
                
                {celebrity2.bio && (
                  <Card className="p-6 shadow-md">
                    <h3 className="text-xl font-semibold mb-4">{celebrity2.name}'s Background</h3>
                    <p className="text-gray-700">{celebrity2.bio}</p>
                  </Card>
                )}
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="p-8 shadow-md mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-center">Choose Two Celebrities to Compare</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <Button 
                    onClick={handleSearch1Click}
                    className="w-full py-6 flex justify-between items-center"
                    variant={celebrity1 ? "outline" : "default"}
                  >
                    {celebrity1 ? (
                      <div className="flex items-center">
                        <img src={celebrity1.image || "/placeholder.svg"} alt={celebrity1.name} className="w-8 h-8 rounded-full mr-3" />
                        <span>{celebrity1.name}</span>
                      </div>
                    ) : (
                      <span>Select First Celebrity</span>
                    )}
                    <ChevronDown className="h-5 w-5 ml-2" />
                  </Button>
                  
                  {searchingFor === "celebrity1" && renderDropdown()}
                </div>
                
                <div className="relative">
                  <Button 
                    onClick={handleSearch2Click}
                    className="w-full py-6 flex justify-between items-center"
                    variant={celebrity2 ? "outline" : "default"}
                  >
                    {celebrity2 ? (
                      <div className="flex items-center">
                        <img src={celebrity2.image || "/placeholder.svg"} alt={celebrity2.name} className="w-8 h-8 rounded-full mr-3" />
                        <span>{celebrity2.name}</span>
                      </div>
                    ) : (
                      <span>Select Second Celebrity</span>
                    )}
                    <ChevronDown className="h-5 w-5 ml-2" />
                  </Button>
                  
                  {searchingFor === "celebrity2" && renderDropdown()}
                </div>
              </div>
              
              {celebrity1 && celebrity2 && (
                <div className="mt-6 flex justify-center">
                  <Button 
                    onClick={() => navigateToSEOUrl(celebrity1.slug, celebrity2.slug)}
                    className="px-8"
                  >
                    Compare <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </Card>
            
            <div className="text-center mb-12">
              <h3 className="text-xl font-semibold mb-4">Popular Comparisons</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    const c1 = celebrities.find(c => c.company?.toLowerCase().includes("kaizer chiefs"));
                    const c2 = celebrities.find(c => c.company?.toLowerCase().includes("orlando pirates"));
                    if (c1 && c2) {
                      navigateToSEOUrl(c1.slug, c2.slug);
                    }
                  }}
                >
                  Kaizer Chiefs vs Orlando Pirates Players
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    const c1 = celebrities.find(c => c.occupation?.toLowerCase().includes("coach"));
                    const c2 = celebrities.find(c => c.occupation?.toLowerCase().includes("player"));
                    if (c1 && c2) {
                      navigateToSEOUrl(c1.slug, c2.slug);
                    }
                  }}
                >
                  Coach vs Player Salary
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </>
  );
};

export default CelebrityComparison;
