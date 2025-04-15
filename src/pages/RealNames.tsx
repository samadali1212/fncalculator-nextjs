
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search, User, ArrowUpRight } from 'lucide-react';
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
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

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
  
  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };
  
  return (
    <div className="container mx-auto py-6 px-4 mt-14">
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
        
        {/* Celebrity table */}
        <div className="bg-white rounded-sm shadow-sm border border-gray-200">
          <div className="p-4 border-b border-gray-100 bg-gray-50">
            <div className="grid grid-cols-12 text-xs font-medium text-gray-600">
              <div className="col-span-1">#</div>
              <div className="col-span-5 md:col-span-4">Celebrity</div>
              <div className="col-span-6 md:col-span-3">Real Name</div>
              <div className="hidden md:block md:col-span-3">Profession</div>
              <div className="hidden md:block md:col-span-1 text-right">Details</div>
            </div>
          </div>
          
          {visibleCelebrities.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No celebrities found matching "{searchTerm}"
            </div>
          ) : (
            <>
              {visibleCelebrities.map((celebrity, index) => (
                <div 
                  key={celebrity.id}
                  className={`group px-4 py-3 ${index !== visibleCelebrities.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <div className="grid grid-cols-12 items-center">
                    <div className="col-span-1 text-sm text-gray-500">
                      {index + 1}
                    </div>
                    
                    <div className="col-span-5 md:col-span-4">
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8 mr-3">
                          {celebrity.imageUrl ? (
                            <AvatarImage src={celebrity.imageUrl} alt={celebrity.stageName} />
                          ) : (
                            <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-xs">
                              {getInitials(celebrity.stageName)}
                            </AvatarFallback>
                          )}
                        </Avatar>
                        
                        <div>
                          <Link 
                            to={`/real-names/${celebrity.slug}`}
                            className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-blog-accent flex items-center"
                          >
                            {celebrity.stageName}
                            <ArrowUpRight 
                              className="h-3.5 w-3.5 ml-1 text-blog-subtle opacity-0 group-hover:opacity-100 transition-opacity"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-span-6 md:col-span-3">
                      <span className="text-sm">{celebrity.realName}</span>
                    </div>
                    
                    <div className="hidden md:block md:col-span-3">
                      <span className="px-1.5 py-0.5 bg-gray-100 rounded text-[#666] text-xs">
                        {celebrity.profession}
                      </span>
                    </div>
                    
                    <div className="hidden md:block md:col-span-1 text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="hover:bg-gray-100 px-2"
                      >
                        <Link to={`/real-names/${celebrity.slug}`}>
                          View
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              
              {visibleCount < filteredCelebrities.length && (
                <div className="flex justify-center p-4 border-t border-gray-100">
                  <Button 
                    variant="outline" 
                    onClick={handleLoadMore}
                    className="gap-2"
                  >
                    Load More
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
        
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
