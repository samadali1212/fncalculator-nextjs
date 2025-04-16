
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Search, ExternalLink, Shuffle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Header from "../components/Header";
import SEO from "../components/SEO";
import { celebrities } from "../utils/celebrityData";
import { slugify, createComparisonUrl, getRandomInt } from "../utils/utils";

const NetWorthComparisonList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Filter celebrities based on search term
  const filteredCelebrities = celebrities.filter(celebrity => 
    celebrity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (celebrity.industry && celebrity.industry.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Generate a random comparison
  const generateRandomComparison = () => {
    if (celebrities.length < 2) return;
    
    let index1 = getRandomInt(0, celebrities.length - 1);
    let index2 = getRandomInt(0, celebrities.length - 1);
    
    // Ensure we get two different celebrities
    while (index2 === index1) {
      index2 = getRandomInt(0, celebrities.length - 1);
    }
    
    const person1 = celebrities[index1];
    const person2 = celebrities[index2];
    
    const comparisonUrl = createComparisonUrl(person1.slug, person2.slug, 'net-worth');
    navigate(comparisonUrl);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-16 h-16 border-4 border-blog-accent border-t-transparent rounded-full animate-spin"
        ></motion.div>
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
        title="Compare Net Worth of South African Celebrities" 
        description="Compare the net worth of South African celebrities, businesspeople, and public figures side by side." 
        canonicalUrl="/comparison"
      />
      <Header />

      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Compare Net Worth of South African Celebrities</h1>
          <p className="text-gray-600 mb-4">
            Explore and compare the net worth of various South African celebrities, businesspeople, and public figures.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Search by name or industry..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button 
              onClick={generateRandomComparison}
              className="flex items-center gap-2"
            >
              <Shuffle className="h-4 w-4" />
              Random Comparison
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-md shadow-sm mb-8">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">#</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Industry</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCelebrities.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-8">
                    No celebrities found matching "{searchTerm}"
                  </TableCell>
                </TableRow>
              ) : (
                filteredCelebrities.map((celebrity, index) => (
                  <TableRow key={celebrity.id}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>
                      <Link 
                        to={`/celebrities/${celebrity.slug}`}
                        className="hover:underline text-blog-accent"
                      >
                        {celebrity.name}
                      </Link>
                    </TableCell>
                    <TableCell>{celebrity.industry || "Unknown"}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Link 
                          to={`/celebrities/${celebrity.slug}`}
                          className="inline-flex items-center text-gray-500 hover:text-blog-accent"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">View Profile</span>
                        </Link>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
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

export default NetWorthComparisonList;
