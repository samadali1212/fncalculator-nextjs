import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SEO from "../components/SEO";
import ShareButton from "../components/ShareButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ArrowRight, Clock, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

interface Step {
  title: string;
  description: string;
  imageUrl?: string;
}

interface Fact {
  title: string;
  value: string;
}

interface HowToGuide {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl?: string;
  difficulty: string;
  timeRequired: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  steps: Step[];
  facts?: Fact[];
}

const howToGuides: HowToGuide[] = [
  {
    id: "apply-for-id",
    title: "How To Apply For An ID In South Africa",
    slug: "apply-for-id-south-africa",
    shortDescription: "A step-by-step guide on applying for a new South African ID card, including required documents and process timeframes.",
    fullDescription: "The South African ID document is a crucial form of identification for citizens and permanent residents. This guide walks you through the entire process of applying for a new ID card, from gathering required documents to collecting your new ID.",
    imageUrl: "https://images.pexels.com/photos/6266316/pexels-photo-6266316.jpeg",
    difficulty: "Easy",
    timeRequired: "1-2 hours (excluding processing time)",
    createdAt: "2025-03-20",
    updatedAt: "2025-04-01",
    tags: ["ID Document", "Home Affairs", "Government Services"],
    steps: [
      {
        title: "Gather Required Documents",
        description: "You will need your birth certificate, proof of address (not older than 3 months), and two recent passport-sized photographs. If you're applying for a replacement, bring your police affidavit stating the loss/theft of the previous ID."
      },
      {
        title: "Visit Your Local Department of Home Affairs",
        description: "Find your nearest Home Affairs office. It's advisable to arrive early as offices tend to get busy. Some offices allow online booking of appointments to reduce waiting time."
      },
      {
        title: "Complete the Application Form",
        description: "Fill out form BI-9 (Application for Identity Document). The form is available at the Home Affairs office or can be downloaded from their website and completed beforehand."
      },
      {
        title: "Submit Biometrics",
        description: "Your fingerprints will be taken digitally, and your photo will be captured for the ID card. Ensure you follow the dress code guidelines for the photo."
      },
      {
        title: "Pay the Application Fee",
        description: "The fee for a new ID card is R140 (as of 2025). This can be paid at the Home Affairs office. Keep your receipt safe."
      },
      {
        title: "Receive Your Receipt and Reference Number",
        description: "After submission, you'll get a receipt with a reference number. This is important for tracking your application status."
      },
      {
        title: "Track Your Application",
        description: "You can track the progress of your application online using your reference number on the Department of Home Affairs website or by sending an SMS with your ID number to 32551."
      },
      {
        title: "Collect Your ID",
        description: "Once ready (typically 2-6 weeks), you'll be notified via SMS. Return to the same Home Affairs office with your receipt to collect your ID card."
      }
    ],
    facts: [
      {
        title: "Processing Time",
        value: "2-6 weeks"
      },
      {
        title: "Application Fee",
        value: "R140"
      },
      {
        title: "ID Validity",
        value: "10 years"
      }
    ]
  },
  {
    id: "register-company",
    title: "How To Register A Company In South Africa",
    slug: "register-company-south-africa",
    shortDescription: "Complete guide to registering a business entity in South Africa, from choosing a business structure to CIPC registration.",
    fullDescription: "Starting a business in South Africa requires proper registration with the Companies and Intellectual Property Commission (CIPC). This guide outlines the steps to formally register your company and comply with all legal requirements.",
    imageUrl: "https://images.pexels.com/photos/8867431/pexels-photo-8867431.jpeg",
    difficulty: "Moderate",
    timeRequired: "1-3 days",
    createdAt: "2025-03-15",
    updatedAt: "2025-03-30",
    tags: ["Business Registration", "CIPC", "Entrepreneurship"],
    steps: [
      {
        title: "Choose Your Business Structure",
        description: "Decide whether to register as a Sole Proprietorship, Partnership, Private Company (Pty Ltd), Public Company, or Non-Profit Organization. Each has different registration requirements and tax implications."
      },
      {
        title: "Reserve Your Company Name",
        description: "Register your proposed company name with CIPC. This costs R50 and can be done online. CIPC will check if the name is available and meets requirements."
      },
      {
        title: "Prepare Company Documents",
        description: "For a Private Company (Pty Ltd), you'll need to prepare a Memorandum of Incorporation (MOI) that outlines the company's rules and governance. Standard forms are available on the CIPC website."
      },
      {
        title: "Register with CIPC",
        description: "Complete the CoR14.1 form for company registration and submit it along with certified copies of the directors' ID documents. The filing fee is R175 for online submissions or R475 for manual submissions."
      },
      {
        title: "Register for Tax",
        description: "After receiving your company registration certificate, register with the South African Revenue Service (SARS) for income tax, VAT (if applicable), and PAYE (if you have employees)."
      },
      {
        title: "Open a Business Bank Account",
        description: "Take your company registration documents to a bank to open a business account. Most major banks offer business account options with different fee structures."
      },
      {
        title: "Register for UIF and COIDA",
        description: "If you have employees, register with the Department of Labour for Unemployment Insurance Fund (UIF) and Compensation for Occupational Injuries and Diseases Act (COIDA) compliance."
      }
    ],
    facts: [
      {
        title: "Name Reservation Cost",
        value: "R50"
      },
      {
        title: "Registration Fee (Online)",
        value: "R175"
      },
      {
        title: "Processing Time",
        value: "3-7 business days"
      }
    ]
  }
];

const HowToGuideDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [slug]);
  
  const guide = howToGuides.find(guide => guide.slug === slug);
  const similarGuides = howToGuides
    .filter(g => g.slug !== slug)
    .slice(0, 3);
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-ZA', options);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f6f6f0]">
        <Header />
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="h-8 mb-6"></div>
            <div className="bg-white p-6 sm:p-8 rounded-md shadow-sm mb-8">
              <div className="flex items-start gap-4 mb-6">
                <Skeleton className="h-16 w-16 rounded-md" />
                <div className="flex-1">
                  <Skeleton className="h-10 w-3/4 mb-4" />
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-5 w-20" />
                  </div>
                </div>
              </div>
              <Skeleton className="h-24 w-full mb-8" />
              <div className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!guide) {
    return (
      <div className="min-h-screen bg-[#f6f6f0] pt-20">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white p-6 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Guide Not Found</h2>
            <p className="mb-4">The guide you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/how-to-guides')}>
              Back to How-To Guides
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
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title={`${guide.title} | How-To Guide`}
        description={guide.shortDescription}
        canonicalUrl={`/how-to-guides/${guide.slug}`}
      />
      
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center justify-between mb-6">
            <Link 
              to="/how-to-guides"
              className="inline-flex items-center text-sm text-[#000000] hover:underline"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to How-To Guides
            </Link>
            
            <ShareButton 
              title={`${guide.title} | How-To Guide`} 
              variant="outline"
            />
          </div>
          
          <article className="bg-white p-6 sm:p-8 rounded-md shadow-sm mb-8">
            {guide.imageUrl && (
              <div className="mb-6 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8">
                <img 
                  src={guide.imageUrl} 
                  alt={guide.title}
                  className="w-full h-48 sm:h-64 object-cover" 
                />
              </div>
            )}
            
            <h1 className="text-3xl font-bold mb-3">{guide.title}</h1>
            
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="secondary" className="flex items-center gap-1">
                <BarChart3 className="h-3.5 w-3.5" />
                <span>{guide.difficulty}</span>
              </Badge>
              
              <Badge variant="secondary" className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                <span>{guide.timeRequired}</span>
              </Badge>
              
              <span className="text-xs text-gray-500">
                Updated {formatDate(guide.updatedAt)}
              </span>
            </div>
            
            <div className="prose prose-sm md:prose-base max-w-none text-gray-800 mb-8">
              <p className="text-lg font-medium text-gray-700 mb-4">
                {guide.shortDescription}
              </p>
              <p className="mb-6">{guide.fullDescription}</p>
              
              <h2 className="text-xl font-bold mt-8 mb-4">Step-by-Step Instructions</h2>
              
              <div className="space-y-6">
                {guide.steps.map((step, index) => (
                  <div key={index} className="border-l-4 border-gray-200 pl-4">
                    <h3 className="text-lg font-semibold mb-2">
                      Step {index + 1}: {step.title}
                    </h3>
                    <p className="text-gray-700">{step.description}</p>
                    
                    {step.imageUrl && (
                      <img 
                        src={step.imageUrl} 
                        alt={step.title} 
                        className="mt-3 rounded-md max-w-full"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {guide.facts && guide.facts.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Key Facts</h3>
                <div className="bg-gray-50 p-4 rounded-md">
                  <dl className="grid grid-cols-1 sm:grid-cols-3 gap-y-3 gap-x-6">
                    {guide.facts.map((fact, index) => (
                      <div key={index} className="flex flex-col">
                        <dt className="text-sm text-gray-500">{fact.title}</dt>
                        <dd className="text-base font-medium">{fact.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            )}
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {guide.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </article>
          
          {similarGuides.length > 0 && (
            <div className="bg-white p-6 rounded-md shadow-sm mb-8">
              <h2 className="text-xl font-semibold mb-4">Related How-To Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {similarGuides.map((similarGuide) => (
                  <Card key={similarGuide.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="mb-2">
                        <h3 className="font-medium text-sm line-clamp-2">{similarGuide.title}</h3>
                      </div>
                      <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                        {similarGuide.shortDescription}
                      </p>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="w-full justify-between" 
                        asChild
                      >
                        <Link to={`/how-to-guides/${similarGuide.slug}`}>
                          <span>Read Guide</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
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

export default HowToGuideDetail;
