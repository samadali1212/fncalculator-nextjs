
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
import AdSense from "../components/AdSense";
import { 
  getItemBySlug,
  getSimilarItems,
  getCategoryBySlug,
} from "../utils/generalKnowledgeData";
import { formatCurrency } from "../utils/utils";

const GeneralKnowledgeDetail = () => {
  // ... keep existing code (variables, hooks, utility functions)

  // ... keep existing code (loading state UI)

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
            {/* ... keep existing code (back navigation) */}
            
            <ShareButton 
              title={`${item.title} | Sassa Insider`} 
              variant="outline"
            />
          </div>
          
          <div className="mb-4">
            <AdSense slot="9803570345" format="auto" className="py-3" />
          </div>
          
          <article className="bg-white p-6 sm:p-8 rounded-md shadow-sm mb-8">
            {/* ... keep existing code (article content) */}
            
            <div className="prose prose-sm md:prose-base max-w-none text-gray-800 mb-8">
              <p className="text-lg font-medium text-gray-700 mb-4">{item.shortDescription}</p>
              <p>{item.fullDescription}</p>
            </div>
            
            <div className="my-6">
              <AdSense slot="9803570345" format="auto" className="py-3" />
            </div>
            
            {/* ... keep existing code (key facts, tags) */}
          </article>
          
          {similarItems.length > 0 && (
            <div className="bg-white p-6 rounded-md shadow-sm mb-8">
              <h2 className="text-xl font-semibold mb-4">You Might Also Be Interested In</h2>
              
              <div className="mb-4">
                <AdSense slot="9803570345" format="auto" className="py-3" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* ... keep existing code (similar items) */}
              </div>
            </div>
          )}
        </div>
      </main>

      <div className="container mx-auto px-4 pb-8">
        <AdSense slot="9803570345" format="auto" className="py-4" />
      </div>

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
