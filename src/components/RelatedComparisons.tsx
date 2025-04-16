
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface ComparisonPerson {
  id: string;
  slug: string;
  name: string;
  imageUrl?: string;
  industry?: string;
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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {comparisons.map((comparison, index) => (
          <Link 
            key={`${comparison.person1.id}-${comparison.person2.id}-${index}`}
            to={comparison.comparisonUrl}
            className="block"
          >
            <Card className="hover:shadow-md transition-shadow h-full">
              <CardContent className="p-4">
                <div className="flex items-center mb-3">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src={comparison.person1.imageUrl || "/placeholder.svg"} alt={comparison.person1.name} />
                    <AvatarFallback>{getInitials(comparison.person1.name)}</AvatarFallback>
                  </Avatar>
                  <div className="truncate flex-1">
                    <p className="font-medium text-sm truncate">{comparison.person1.name}</p>
                  </div>
                </div>
                
                <div className="flex justify-center my-1">
                  <Badge variant="outline" className="text-xs">
                    VS
                  </Badge>
                </div>
                
                <div className="flex items-center mt-3">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src={comparison.person2.imageUrl || "/placeholder.svg"} alt={comparison.person2.name} />
                    <AvatarFallback>{getInitials(comparison.person2.name)}</AvatarFallback>
                  </Avatar>
                  <div className="truncate flex-1">
                    <p className="font-medium text-sm truncate">{comparison.person2.name}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <Button 
          variant="outline" 
          onClick={() => {}}
        >
          <Link to={viewMoreLink}>View More Comparisons</Link>
        </Button>
      </div>
    </div>
  );
};

export default RelatedComparisons;
