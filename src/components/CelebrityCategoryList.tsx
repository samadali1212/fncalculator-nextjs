
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import AdSense from "./AdSense";
import { formatSalary } from "../utils/celebrityData";

interface Celebrity {
  id: string;
  name: string;
  slug: string;
  occupation: string;
  industry: string;
  company?: string;
  imageUrl?: string;
  salary: number;
  currency: string;
}

interface CelebrityCategoryListProps {
  celebrities: Celebrity[];
  hasMore: boolean;
  onLoadMore: () => void;
  getInitials: (name: string) => string;
}

const CelebrityCategoryList: React.FC<CelebrityCategoryListProps> = ({
  celebrities,
  hasMore,
  onLoadMore,
  getInitials
}) => {
  if (celebrities.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        No celebrities found
      </div>
    );
  }

  return (
    <>
      <div className="p-4 border-b border-gray-100 bg-gray-50">
        <div className="grid grid-cols-12 text-xs font-medium text-gray-600">
          <div className="col-span-1">#</div>
          <div className="col-span-5 md:col-span-4">Name</div>
          <div className="col-span-3 md:col-span-3">Salary</div>
          <div className="hidden md:block md:col-span-2">Industry</div>
          <div className="col-span-3 md:col-span-2">Company</div>
        </div>
      </div>
      
      {celebrities.map((celebrity, index) => (
        <React.Fragment key={`celebrity-row-${celebrity.id}`}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className={`group px-4 py-3 ${index !== celebrities.length - 1 ? 'border-b border-gray-100' : ''}`}
          >
            <div className="grid grid-cols-12 items-center">
              <div className="col-span-1 text-sm text-gray-500">
                {index + 1}
              </div>
              
              <div className="col-span-5 md:col-span-4">
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-3">
                    <AvatarImage 
                      src={celebrity.imageUrl || "/placeholder.svg"} 
                      alt={celebrity.name} 
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-xs">
                      {getInitials(celebrity.name)}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <Link 
                      to={`/celebrities/${celebrity.slug}`}
                      className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-blog-accent flex items-center"
                    >
                      {celebrity.name}
                      <ArrowUpRight 
                        className="h-3.5 w-3.5 ml-1 text-blog-subtle opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </Link>
                    <div className="text-xs text-gray-500">{celebrity.occupation}</div>
                  </div>
                </div>
              </div>
              
              <div className="col-span-3 md:col-span-3">
                <span className="text-sm font-medium">{formatSalary(celebrity.salary, celebrity.currency)}</span>
              </div>
              
              <div className="hidden md:block md:col-span-2">
                <span className="px-1.5 py-0.5 bg-gray-100 rounded text-[#666] text-xs">
                  {celebrity.industry}
                </span>
              </div>
              
              <div className="col-span-3 md:col-span-2">
                <span className="text-xs text-gray-600">{celebrity.company || "—"}</span>
              </div>
            </div>
          </motion.div>
          {(index + 1) % 12 === 0 && index !== celebrities.length - 1 && (
            <div className="my-6">
              <AdSense slot="9889084223" format="auto" className="py-3" />
            </div>
          )}
        </React.Fragment>
      ))}
      
      {hasMore && (
        <Pagination className="py-5">
          <PaginationContent>
            <PaginationItem className="w-full">
              <Button 
                variant="outline" 
                onClick={onLoadMore} 
                className="w-full"
              >
                Load More Results
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
};

export default CelebrityCategoryList;
