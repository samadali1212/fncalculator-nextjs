
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight, ExternalLink } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ComparisonPerson {
  id: string;
  slug: string;
  name: string;
  imageUrl?: string;
  industry?: string;
  occupation?: string;
}

interface RelatedComparisonsProps {
  comparisons: {
    person1: ComparisonPerson;
    person2: ComparisonPerson;
    comparisonUrl: string;
  }[];
  type: 'net-worth' | 'salary';
  viewMoreLink: string;
}

const RelatedComparisons = ({ comparisons, type, viewMoreLink }: RelatedComparisonsProps) => {
  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  if (comparisons.length === 0) {
    return null;
  }

  return (
    <div className="bg-white p-6 sm:p-8 rounded-md shadow-sm mb-8">
      <h2 className="text-xl font-bold mb-6">Related Comparisons</h2>
      
      <div className="bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden mb-6">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead>Person 1</TableHead>
              <TableHead className="w-12 text-center">VS</TableHead>
              <TableHead>Person 2</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comparisons.map((comparison, index) => (
              <TableRow key={`${comparison.person1.id}-${comparison.person2.id}-${index}`} className="group">
                <TableCell>
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-3">
                      <AvatarImage 
                        src={comparison.person1.imageUrl || "/placeholder.svg"} 
                        alt={comparison.person1.name}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-xs">
                        {getInitials(comparison.person1.name)}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <Link 
                        to={`/${type === 'net-worth' ? 'net-worth' : 'celebrities'}/${comparison.person1.slug}`}
                        className="text-[#333] hover:underline text-base font-medium transition-colors hover:text-blog-accent flex items-center"
                      >
                        {comparison.person1.name}
                        <ExternalLink className="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                      <div className="text-xs text-gray-500">
                        {comparison.person1.occupation || comparison.person1.industry || "Public Figure"}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center">
                    <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 text-gray-600" />
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-3">
                      <AvatarImage 
                        src={comparison.person2.imageUrl || "/placeholder.svg"} 
                        alt={comparison.person2.name}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-xs">
                        {getInitials(comparison.person2.name)}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <Link 
                        to={`/${type === 'net-worth' ? 'net-worth' : 'celebrities'}/${comparison.person2.slug}`}
                        className="text-[#333] hover:underline text-base font-medium transition-colors hover:text-blog-accent flex items-center"
                      >
                        {comparison.person2.name}
                        <ExternalLink className="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                      <div className="text-xs text-gray-500">
                        {comparison.person2.occupation || comparison.person2.industry || "Public Figure"}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <Link 
                    to={comparison.comparisonUrl}
                    className="text-blog-accent hover:text-blog-accent-hover hover:underline transition-colors"
                  >
                    Compare
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="text-center">
        <Button 
          variant="outline" 
          asChild
        >
          <Link to={viewMoreLink}>View More Comparisons</Link>
        </Button>
      </div>
    </div>
  );
};

export default RelatedComparisons;
