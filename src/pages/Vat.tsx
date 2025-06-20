
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Header from "../components/Header";
import VATCalculator from "../components/VATCalculator";
import { Button } from "@/components/ui/button";
import { 
  generateVATCalculations, 
  formatVATCurrency,
  VATCalculation
} from "../utils/vatCalculator";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";

const Vat = () => {
  const [itemsToShow, setItemsToShow] = useState(50);
  
  const vatResults = generateVATCalculations(
    1000,    // Min: R1,000
    100000,  // Max: R100,000
    2500,    // Step: R2,500
  );
    
  const displayedResults = vatResults.slice(0, itemsToShow);
  const hasMoreResults = displayedResults.length < vatResults.length;
  
  const loadMore = () => {
    setItemsToShow(prevItemsToShow => prevItemsToShow + 50);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-2">VAT Calculator South Africa For 2024/2025</h1>
        <p className="text-gray-600 mb-8">
          Calculate VAT in South Africa with our comprehensive VAT calculator tool. 
          Whether you need to calculate VAT inclusive or VAT exclusive amounts, our calculator provides accurate results based on the current 15% VAT rate. 
          Perfect for businesses, accountants, and individuals who need quick and reliable VAT calculations for invoicing, pricing, and financial planning.
        </p>

        {/* Custom VAT Calculator */}
        <VATCalculator />

        <p className="text-gray-600 mb-8">
          <em><strong>Note: VAT (Value Added Tax) in South Africa is currently 15%. Calculations show both VAT inclusive and VAT exclusive scenarios.</strong></em>
        </p>

        <div className="bg-white rounded-sm shadow-sm border border-gray-200">
          <div className="p-4 border-b border-gray-100 bg-gray-50">
            <div className="grid grid-cols-12 text-xs font-medium text-gray-600">
              <div className="col-span-3">Amount</div>
              <div className="col-span-3">Excl. VAT</div>
              <div className="col-span-3">VAT Amount</div>
              <div className="col-span-3">Incl. VAT</div>
            </div>
          </div>
          
          {displayedResults.map((result, index) => (
            <motion.div 
              key={result.originalAmount}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`group px-4 py-3 ${index !== displayedResults.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <div className="grid grid-cols-12 items-center">
                <div className="col-span-3">
                  <span className="text-[#333] text-base font-medium">
                    {formatVATCurrency(result.originalAmount)}
                  </span>
                </div>
                
                <div className="col-span-3">
                  <span className="text-sm">{formatVATCurrency(result.vatExclusive.amountExcludingVAT)}</span>
                </div>
                
                <div className="col-span-3">
                  <span className="text-sm text-red-600">{formatVATCurrency(result.vatExclusive.vatAmount)}</span>
                </div>
                
                <div className="col-span-3">
                  <span className="text-sm">{formatVATCurrency(result.vatExclusive.amountIncludingVAT)}</span>
                </div>
              </div>
            </motion.div>
          ))}
          
          {hasMoreResults && (
            <Pagination className="py-5">
              <PaginationContent>
                <PaginationItem className="w-full">
                  <Button 
                    variant="outline" 
                    onClick={loadMore} 
                    className="w-full"
                  >
                    Load More Results
                  </Button>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
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

export default Vat;
