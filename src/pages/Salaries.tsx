
import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Header from "../components/Header";
import JobList from "../components/JobList";
import SEO from "../components/SEO";
import { 
  ToggleGroup, 
  ToggleGroupItem 
} from "@/components/ui/toggle-group";

// Job categories for filtering
const jobCategories = [
  "All",
  "Finance",
  "Tech",
  "Healthcare",
  "Education",
  "Engineering",
  "Marketing",
  "Legal",
  "Service"
];

const Salaries = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Handle category selection
  const handleCategoryChange = (value: string) => {
    if (value) setSelectedCategory(value);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title="South African Salaries Guide" 
        description="Explore salary ranges for various jobs and professions in South Africa. Updated salary information to help with job searches and career planning."
        canonicalUrl="/salaries"
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">South African Salaries Guide</h1>
        <p className="text-gray-600">
          This list covers average Salaries across industries, factors influencing pay, and tips for negotiating better compensation. Stay informed about job market trends and see how your income compares to national standards.
        </p>
        
        <motion.div 
          className="mb-6 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Toggle filter - now positioned above the search bar */}
          <div className="mb-4 overflow-x-auto">
            <ToggleGroup 
              type="single" 
              value={selectedCategory} 
              onValueChange={handleCategoryChange}
              className="flex space-x-2 pb-2"
            >
              {jobCategories.map((category) => (
                <ToggleGroupItem 
                  key={category} 
                  value={category}
                  variant="outline"
                  className="text-sm whitespace-nowrap"
                >
                  {category}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          {/* Search bar - now positioned below the toggle filter */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search jobs..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        <JobList searchQuery={searchQuery} categoryFilter={selectedCategory} />
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

export default Salaries;
