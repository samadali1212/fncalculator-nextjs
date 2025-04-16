
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import SEO from '../components/SEO';
import { netWorthPeople } from '../utils/netWorthData';
import { createComparisonUrl, getRandomInt } from '../utils/utils';

const NetWorthComparisonList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Filter people based on search term
  const filteredPeople = netWorthPeople.filter(person => 
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get current page's data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPeople = filteredPeople.slice(indexOfFirstItem, indexOfLastItem);

  // Handle navigating to a comparison
  const handleCompare = (person1: string, person2: string) => {
    navigate(`/compare/${person1}-vs-${person2}`);
  };

  // Generate a random comparison between two people
  const handleRandomComparison = () => {
    if (netWorthPeople.length < 2) return;
    
    const index1 = getRandomInt(0, netWorthPeople.length - 1);
    let index2 = getRandomInt(0, netWorthPeople.length - 1);
    
    // Ensure we don't compare the same person
    while (index1 === index2) {
      index2 = getRandomInt(0, netWorthPeople.length - 1);
    }
    
    const person1 = netWorthPeople[index1].slug;
    const person2 = netWorthPeople[index2].slug;
    
    navigate(`/compare/${person1}-vs-${person2}`);
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
          Select any two wealthy individuals from our database to compare their net worth. 
          See the differences in wealth, income sources, and more.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-between mb-6">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <Button onClick={handleRandomComparison} className="bg-primary hover:bg-primary/90">
            Random Comparison
          </Button>
        </div>
        
        {/* Table of wealthy individuals */}
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
              {currentPeople.map(person => (
                <TableRow key={person.id}>
                  <TableCell>
                    <div className="font-medium">{person.name}</div>
                  </TableCell>
                  <TableCell>${person.netWorth?.toLocaleString() || 'Unknown'}</TableCell>
                  <TableCell>{person.occupation || 'Celebrity'}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        // Find a random person to compare with
                        let randomIndex = getRandomInt(0, netWorthPeople.length - 1);
                        // Ensure it's not the same person
                        while (netWorthPeople[randomIndex].id === person.id) {
                          randomIndex = getRandomInt(0, netWorthPeople.length - 1);
                        }
                        
                        handleCompare(person.slug, netWorthPeople[randomIndex].slug);
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
        {filteredPeople.length > itemsPerPage && (
          <Pagination className="mt-6">
            <PaginationContent>
              {Array.from({ length: Math.ceil(filteredPeople.length / itemsPerPage) }).map((_, index) => (
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
          {netWorthPeople.slice(0, 6).map((person, index) => {
            // Get the next person for comparison, or the first one if we're at the end
            const nextPerson = netWorthPeople[(index + 1) % netWorthPeople.length];
            
            return (
              <div 
                key={person.id} 
                className="p-4 border rounded-md hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleCompare(person.slug, nextPerson.slug)}
              >
                <p className="font-medium text-center">{person.name} vs {nextPerson.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NetWorthComparisonList;
