import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SEO from "../components/SEO";
import ShareButton from "../components/ShareButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  getItemBySlug,
  getSimilarItems,
  getCategoryBySlug,
} from "../utils/generalKnowledgeData";
import { formatCurrency } from "../utils/utils";

const GeneralKnowledgeDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  const item = slug ? getItemBySlug(slug) : undefined;
  const category = item ? getCategoryBySlug(item.categoryId) : undefined;
  const similarItems = item ? getSimilarItems(item, 10) : [];

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [slug]);

  const getInitials = (title: string) => {
    return title
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

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

  if (!item) {
    return (
      <div className="min-h-screen bg-[#f6f6f0] pt-20">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white p-6 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Item Not Found</h2>
            <p className="mb-4">The item you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/general-knowledge')}>
              Back to Knowledge Base
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
        title={`${item.title} | ${item.categoryName}`}
        description={item.shortDescription}
        canonicalUrl={`/general-knowledge/${item.slug}`}
      />
      
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center justify-between mb-6">
            {category ? (
              <Link 
                to={`/general-knowledge/category/${category.slug}`}
                className="inline-flex items-center text-sm text-[#000000] hover:underline"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to {category.title}
              </Link>
            ) : (
              <Link 
                to="/general-knowledge"
                className="inline-flex items-center text-sm text-[#000000] hover:underline"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                All Categories
              </Link>
            )}
            
            <ShareButton 
              title={`${item.title} | Sassa Insider`} 
              variant="outline"
            />
          </div>
          
          <article className="bg-white p-6 sm:p-8 rounded-md shadow-sm mb-8">
            <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
              <div className="h-24 w-24 rounded-lg border-2 border-gray-100 shadow-sm overflow-hidden">
                {item.imageUrl ? (
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="h-full w-full object-cover" 
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-[#f6f6f0] text-gray-700 text-2xl">
                    {getInitials(item.title)}
                  </div>
                )}
              </div>
              
              <div>
                <h1 className="text-3xl font-bold mb-3">{item.title}</h1>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <Badge variant="outline" className="text-xs">
                    {item.categoryName}
                  </Badge>
                  <span className="text-xs text-gray-500">
                    Updated {formatDate(item.updatedAt)}
                  </span>
                  {item.rating && (
                    <div className="flex items-center">
                      <span className="text-amber-500">★</span>
                      <span className="text-xs ml-1">{item.rating.toFixed(1)}/5</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="prose prose-sm md:prose-base max-w-none text-gray-800 mb-8">
              <p className="text-lg font-medium text-gray-700 mb-4">{item.shortDescription}</p>
              <p>{item.fullDescription}</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Key Facts</h3>
              <div className="bg-gray-50 p-4 rounded-md">
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  {item.facts.map((fact, index) => (
                    <div key={index} className="flex flex-col">
                      <dt className="text-sm text-gray-500">{fact.title}</dt>
                      <dd className="text-base font-medium">{fact.value}</dd>
                    </div>
                  ))}
                  {item.price && (
                    <div className="flex flex-col">
                      <dt className="text-sm text-gray-500">Price</dt>
                      <dd className="text-base font-medium">
                        {formatCurrency(item.price.value, item.price.currency)}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </article>
          
          {similarItems.length > 0 && (
            <div className="bg-white p-6 rounded-md shadow-sm mb-8">
              <h2 className="text-xl font-semibold mb-4">You Might Also Be Interested In</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {similarItems.map((similarItem) => (
                  <Card key={similarItem.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="h-8 w-8 rounded-md overflow-hidden">
                          {similarItem.imageUrl ? (
                            <img 
                              src={similarItem.imageUrl} 
                              alt={similarItem.title}
                              className="h-full w-full object-cover" 
                            />
                          ) : (
                            <div className="h-full w-full flex items-center justify-center bg-[#f6f6f0] text-gray-700 text-xs">
                              {getInitials(similarItem.title)}
                            </div>
                          )}
                        </div>
                        <h3 className="font-medium text-sm line-clamp-1">{similarItem.title}</h3>
                      </div>
                      <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                        {similarItem.shortDescription}
                      </p>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="w-full justify-between" 
                        asChild
                      >
                        <Link to={`/general-knowledge/${similarItem.slug}`}>
                          <span>Read More</span>
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
            &copy; {new Date().getFullYear()} Sassa Insider. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default GeneralKnowledgeDetail;
