
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import SEO from '../components/SEO';
import { celebrities } from '../utils/celebrityData';
import { createComparisonUrl, getRandomInt } from '../utils/utils';

const NetWorthComparisonList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Filter celebrities based on search term
  const filteredCelebrities = celebrities.filter(celebrity => 
    celebrity.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get current page's data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCelebrities = filteredCelebrities.slice(indexOfFirstItem, indexOfLastItem);

  // Handle navigating to a comparison
  const handleCompare = (celebrity1: string, celebrity2: string) => {
    navigate(`/compare/${celebrity1}-vs-${celebrity2}`);
  };

  // Generate a random comparison between two celebrities
  const handleRandomComparison = () => {
    if (celebrities.length < 2) return;
    
    const index1 = getRandomInt(0, celebrities.length - 1);
    let index2 = getRandomInt(0, celebrities.length - 1);
    
    // Ensure we don't compare the same celebrity
    while (index1 === index2) {
      index2 = getRandomInt(0, celebrities.length - 1);
    }
    
    const celebrity1 = celebrities[index1].slug;
    const celebrity2 = celebrities[index2].slug;
    
    navigate(`/compare/${celebrity1}-vs-${celebrity2}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO
        title="Compare Net Worth | Wealth Comparisons"
        description="Compare the net worth of different celebrities, public figures, and wealthy individuals side by side."
        canonicalUrl="/compare"
      />
      
      <h1 className="text-3xl font-bold mb-6 text-center">Compare Net Worth</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <p className="text-gray-700 mb-4">
          Select any two celebrities or wealthy individuals from our database to compare their net worth. 
          See the differences in wealth, income sources, and more.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-between mb-6">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search celebrities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <Button onClick={handleRandomComparison} className="bg-primary hover:bg-primary/90">
            Random Comparison
          </Button>
        </div>
        
        {/* Table of celebrities */}
        <div className="overflow-x-auto rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Net Worth</TableHead>
                <TableHead>Occupation</TableHead>
                <TableHead className="text-right">Compare</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentCelebrities.map(celebrity => (
                <TableRow key={celebrity.id}>
                  <TableCell>
                    <div className="font-medium">{celebrity.name}</div>
                  </TableCell>
                  <TableCell>${celebrity.netWorth?.toLocaleString() || 'Unknown'}</TableCell>
                  <TableCell>{celebrity.occupation || 'Celebrity'}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        // Find a random celebrity to compare with
                        let randomIndex = getRandomInt(0, celebrities.length - 1);
                        // Ensure it's not the same celebrity
                        while (celebrities[randomIndex].id === celebrity.id) {
                          randomIndex = getRandomInt(0, celebrities.length - 1);
                        }
                        
                        handleCompare(celebrity.slug, celebrities[randomIndex].slug);
                      }}
                    >
                      Compare
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {/* Pagination */}
        {filteredCelebrities.length > itemsPerPage && (
          <Pagination className="mt-6">
            <PaginationContent>
              {Array.from({ length: Math.ceil(filteredCelebrities.length / itemsPerPage) }).map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    isActive={currentPage === index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
            </PaginationContent>
          </Pagination>
        )}
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold mb-4">Popular Net Worth Comparisons</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {celebrities.slice(0, 6).map((celebrity, index) => {
            // Get the next celebrity for comparison, or the first one if we're at the end
            const nextCelebrity = celebrities[(index + 1) % celebrities.length];
            
            return (
              <div 
                key={celebrity.id} 
                className="p-4 border rounded-md hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleCompare(celebrity.slug, nextCelebrity.slug)}
              >
                <p className="font-medium text-center">{celebrity.name} vs {nextCelebrity.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NetWorthComparisonList;
