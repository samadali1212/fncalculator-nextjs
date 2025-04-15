
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search, User } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem,
  PaginationLink
} from '@/components/ui/pagination';
import { getAllCelebrityRealNames } from '@/utils/realNamesData';

const RealNames = () => {
  const allCelebrities = getAllCelebrityRealNames();
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(100);
  
  // Filter celebrities based on search term
  const filteredCelebrities = allCelebrities.filter(celebrity => 
    celebrity.stageName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    celebrity.realName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    celebrity.profession.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Get currently visible celebrities
  const visibleCelebrities = filteredCelebrities.slice(0, visibleCount);
  
  // Handle load more button click
  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 50);
  };
  
  return (
    <div className="container mx-auto py-6 px-4 max-w-7xl">
      <Helmet>
        <title>Celebrity Real Names | Discover Famous People's Birth Names</title>
        <meta 
          name="description" 
          content="Discover the real names behind famous celebrities. From musicians to actors, find out the birth names of your favorite stars." 
        />
      </Helmet>
      
      <div className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center">Celebrity Real Names</h1>
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          Ever wondered what your favorite celebrities were named at birth? Many stars adopt stage names for their careers, 
          but their real identities often remain unknown to fans. Discover the birth names of famous actors, musicians, 
          and public figures below.
        </p>
        
        {/* Search bar */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Search by stage name or real name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        {/* Results count */}
        <p className="text-sm text-gray-500 text-center">
          Showing {visibleCelebrities.length} of {filteredCelebrities.length} results
        </p>
        
        {/* Celebrity grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCelebrities.map((celebrity) => (
            <Link to={`/real-names/${celebrity.slug}`} key={celebrity.id}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    {celebrity.imageUrl ? (
                      <img 
                        src={celebrity.imageUrl} 
                        alt={celebrity.stageName} 
                        className="w-16 h-16 object-cover rounded-full"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                        <User size={24} className="text-gray-500" />
                      </div>
                    )}
                    <div>
                      <h3 className="font-bold text-lg">{celebrity.stageName}</h3>
                      <p className="text-gray-600">{celebrity.realName}</p>
                      <p className="text-sm text-gray-500">{celebrity.profession}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 text-sm text-blue-600">
                  View details →
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
        
        {/* Load more button */}
        {visibleCount < filteredCelebrities.length && (
          <div className="flex justify-center mt-8">
            <Button onClick={handleLoadMore} variant="outline" className="gap-2">
              Load More
            </Button>
          </div>
        )}
        
        {/* Simple pagination for SEO */}
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationLink href="/real-names" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/real-names?page=2">2</PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default RealNames;
