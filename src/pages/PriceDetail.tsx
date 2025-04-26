import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AdSense from "../components/AdSense";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHeader,
  TableHead,
} from "@/components/ui/table";
import { 
  getExpensiveThingBySlug, 
  getCategoryById, 
  formatPrice,
  getAllExpensiveThings,
  ExpensiveThing
} from "../utils/expensiveThingsData";

const GlobalNetWorthDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState<ExpensiveThing | null>(null);
  const [category, setCategory] = useState<any>(null);
  const [relatedItems, setRelatedItems] = useState<ExpensiveThing[]>([]);
  
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      if (slug) {
        const foundItem = getExpensiveThingBySlug(slug);
        if (foundItem) {
          setItem(foundItem);
          const itemCategory = getCategoryById(foundItem.categoryId);
          setCategory(itemCategory);
          
          const allItems = getAllExpensiveThings();
          const related = allItems
            .filter(relatedItem => 
              relatedItem.id !== foundItem.id && 
              relatedItem.categoryIds.some(categoryId => 
                foundItem.categoryIds.includes(categoryId)
              )
            )
            .slice(0, 20);
          
          setRelatedItems(related);
        }
      }
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [slug]);

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

  if (!item) {
    return (
      <div className="min-h-screen bg-[#f6f6f0]">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="bg-white p-6 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Item Not Found</h2>
            <p className="mb-4">The requested item doesn't exist.</p>
            <Button onClick={() => navigate('/price')}>
              Back to List
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
        title={`${item?.title} Price`}
        description={item?.shortDescription}
        canonicalUrl={`/price/${slug}`}
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate('/price')}
          className="mb-6"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to List
        </Button>

        <div className="bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden mb-8">
{item.imageUrl && (
  <div className="w-full">
    <img 
      src={item.imageUrl} 
      alt={item.title}
      className="w-full h-auto object-contain"
    />
  </div>
)}
          
          <div className="p-6">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                {item.tags.map((tag: string) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
              <p className="text-gray-600">{item.shortDescription}</p>
            </div>

            <div className="my-6">
              <AdSense slot="9889084223" format="auto" className="py-3" />
            </div>
            
            <div className="prose max-w-none mb-6">
              <p>{item.fullDescription}</p>
            </div>
            
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Price</TableCell>
                  <TableCell>
                    {formatPrice(item.price)} ({item.price.year})
                  </TableCell>
                </TableRow>
                {item.facts.map((fact: any) => (
                  <TableRow key={fact.title}>
                    <TableCell className="font-medium">{fact.title}</TableCell>
                    <TableCell>{fact.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {relatedItems.length > 0 && (
          <div className="bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6">Related Items</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Year</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {relatedItems.map((relatedItem) => (
                    <TableRow key={relatedItem.id}>
                      <TableCell>
                        <Link 
                          to={`/price/${relatedItem.slug}`}
                          className="text-blue-600 hover:underline"
                        >
                          {relatedItem.title}
                        </Link>
                      </TableCell>
                      <TableCell>{formatPrice(relatedItem.price)}</TableCell>
                      <TableCell>{relatedItem.price.year}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-gray-300 py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center text-[#828282] text-sm">
          <p>&copy; {new Date().getFullYear()} SoExpensive. All rights reserved.</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default GlobalNetWorthDetail;
