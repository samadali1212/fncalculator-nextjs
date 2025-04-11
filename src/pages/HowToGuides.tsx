import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, ArrowUpRight, FileDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import Header from "../components/Header";
import SEO from "../components/SEO";
import { generalKnowledgeCategories } from "../utils/generalKnowledgeCategoriesData";
import { generateHowToGuideTemplate } from "../utils/guideUtils";

const howToGuides = [
  {
    id: "apply-for-id",
    title: "How To Apply For An ID In South Africa",
    slug: "apply-for-id-south-africa",
    description: "A step-by-step guide on applying for a new South African ID card, including required documents and process timeframes.",
    imageUrl: "https://images.pexels.com/photos/6266316/pexels-photo-6266316.jpeg",
    difficulty: "Easy",
    timeRequired: "1-2 hours (excluding processing time)",
    createdAt: "2025-03-20",
    tags: ["ID Document", "Home Affairs", "Government Services"]
  },
  {
    id: "register-company",
    title: "How To Register A Company In South Africa",
    slug: "register-company-south-africa",
    description: "Complete guide to registering a business entity in South Africa, from choosing a business structure to CIPC registration.",
    imageUrl: "https://images.pexels.com/photos/8867431/pexels-photo-8867431.jpeg",
    difficulty: "Moderate",
    timeRequired: "1-3 days",
    createdAt: "2025-03-15",
    tags: ["Business Registration", "CIPC", "Entrepreneurship"]
  },
  {
    id: "apply-university",
    title: "How To Apply To South African Universities",
    slug: "apply-south-african-universities",
    description: "Guide to university application processes in South Africa, including deadlines, required documents, and application fees.",
    imageUrl: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
    difficulty: "Moderate",
    timeRequired: "2-4 weeks",
    createdAt: "2025-02-20",
    tags: ["Higher Education", "University", "Applications"]
  },
  {
    id: "file-tax-return",
    title: "How To File Your Tax Return In South Africa",
    slug: "file-tax-return-south-africa",
    description: "Step-by-step instructions for filing your annual tax return with SARS, including important deadlines and required documentation.",
    imageUrl: "https://images.pexels.com/photos/6863250/pexels-photo-6863250.jpeg",
    difficulty: "Moderate",
    timeRequired: "1-2 hours",
    createdAt: "2025-01-15",
    tags: ["Taxation", "SARS", "Personal Finance"]
  },
  {
    id: "get-drivers-license",
    title: "How To Get A Driver's License In South Africa",
    slug: "get-drivers-license-south-africa",
    description: "Complete guide to obtaining a driver's license in South Africa, from learner's license to full driving license.",
    imageUrl: "https://images.pexels.com/photos/6243268/pexels-photo-6243268.jpeg",
    difficulty: "Moderate",
    timeRequired: "3-6 months",
    createdAt: "2025-01-05",
    tags: ["Driving", "License", "Road Safety"]
  }
];

const HowToGuides = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const howToCategory = generalKnowledgeCategories.find(
    category => category.id === "how-to-guides"
  );
  
  const filteredGuides = howToGuides.filter(guide => {
    if (!searchQuery) return true;
    
    const search = searchQuery.toLowerCase();
    return (
      guide.title.toLowerCase().includes(search) ||
      guide.description.toLowerCase().includes(search) ||
      guide.tags.some(tag => tag.toLowerCase().includes(search))
    );
  });
  
  const sortedGuides = [...filteredGuides].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const handleDownloadTemplate = () => {
    generateHowToGuideTemplate();
    toast({
      title: "Template Downloaded",
      description: "Your How-To guide template has been downloaded. Fill it out to create a new guide.",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title="How-To Guides | Step-by-Step Instructions for South Africans"
        description="Practical step-by-step guides to help South Africans navigate everyday tasks, from applying for IDs to filing taxes and more."
        canonicalUrl="/how-to-guides"
      />
      
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">How-To Guides</h1>
            <p className="text-gray-600">
              Step-by-step instructions to help you navigate everyday tasks in South Africa
            </p>
          </div>
          
          <Button 
            onClick={handleDownloadTemplate} 
            variant="outline" 
            className="mt-4 md:mt-0 flex items-center gap-2"
          >
            <FileDown className="h-4 w-4" />
            <span>Download Guide Template</span>
          </Button>
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
              placeholder="Search guides..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <Card key={index} className="overflow-hidden animate-pulse bg-gray-100">
                <div className="h-40 bg-gray-200"></div>
                <CardContent className="p-4">
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="flex gap-2">
                    <div className="h-5 w-16 bg-gray-200 rounded"></div>
                    <div className="h-5 w-20 bg-gray-200 rounded"></div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : sortedGuides.length === 0 ? (
            <div className="col-span-1 md:col-span-2 p-6 text-center bg-white rounded-md shadow-sm">
              <h3 className="text-lg font-medium">No guides found</h3>
              <p className="text-gray-600 mt-2">
                Try adjusting your search query or check back later for new guides.
              </p>
            </div>
          ) : (
            sortedGuides.map((guide, index) => (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow">
                  <div className="h-40 overflow-hidden">
                    {guide.imageUrl ? (
                      <img 
                        src={guide.imageUrl} 
                        alt={guide.title}
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">No image available</span>
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="p-4 flex flex-col flex-grow">
                    <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                      {guide.title}
                    </h2>
                    
                    <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
                      {guide.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {guide.tags.slice(0, 3).map((tag, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center">
                        <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                          guide.difficulty === "Easy" ? "bg-green-500" : 
                          guide.difficulty === "Moderate" ? "bg-amber-500" : "bg-red-500"
                        }`}></span>
                        <span className="text-xs text-gray-600">
                          {guide.difficulty}
                        </span>
                      </div>
                      
                      <Button
                        variant="ghost" 
                        size="sm" 
                        className="text-xs group" 
                        asChild
                      >
                        <Link to={`/how-to-guides/${guide.slug}`} className="flex items-center">
                          View Guide
                          <ArrowUpRight className="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </main>

      <footer className="border-t border-gray-300 py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center text-[#828282] text-sm">
          <p>
            &copy; {new Date().getFullYear()} Financepedia. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default HowToGuides;
