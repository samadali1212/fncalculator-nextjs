
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { 
  CategoryMetadata, 
  NetWorthPerson, 
  formatNetWorth, 
  getPeopleByCategory 
} from "../utils/netWorthData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CategoryRoundupProps {
  category: CategoryMetadata;
  categoryId: string;
  limit?: number;
}

const CategoryRoundup = ({ category, categoryId, limit = 10 }: CategoryRoundupProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [people, setPeople] = useState<NetWorthPerson[]>([]);
  
  useEffect(() => {
    // Simulate loading state for better UX
    setIsLoading(true);
    const timer = setTimeout(() => {
      const categoryPeople = getPeopleByCategory(Number(categoryId));
      setPeople(categoryPeople);
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [categoryId, limit]);
  
  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  if (isLoading) {
    return (
      <div className="py-6 flex justify-center">
        <div className="w-8 h-8 border-4 border-blog-accent border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (people.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-gray-500">No individuals found in this category.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-sm shadow-sm border border-gray-200">
      <div className="p-4 border-b border-gray-100 bg-gray-50">
        <div className="grid grid-cols-12 text-xs font-medium text-gray-600">
          <div className="col-span-1">#</div>
          <div className="col-span-5 md:col-span-4">Name</div>
          <div className="col-span-3 md:col-span-3">Net Worth</div>
          <div className="hidden md:block md:col-span-2">Industry</div>
          <div className="col-span-3 md:col-span-2">Company</div>
        </div>
      </div>
      
      {people.map((person, index) => (
        <motion.div 
          key={person.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className={`group px-4 py-3 ${index !== people.length - 1 ? 'border-b border-gray-100' : ''}`}
        >
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-1 text-sm text-gray-500">
              {index + 1}
            </div>
            
            <div className="col-span-5 md:col-span-4">
              <div className="flex items-center">
                <Avatar className="h-8 w-8 mr-3">
                  <AvatarImage src={person.imageUrl || "/placeholder.svg"} alt={person.name} />
                  <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-xs">
                    {getInitials(person.name)}
                  </AvatarFallback>
                </Avatar>
                
                <div>
                  <Link 
                    to={`/net-worth/${person.slug}`}
                    className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-blog-accent flex items-center"
                  >
                    {person.name}
                    <ArrowUpRight 
                      className="h-3.5 w-3.5 ml-1 text-blog-subtle opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                  <div className="text-xs text-gray-500">{person.occupation}</div>
                </div>
              </div>
            </div>
            
            <div className="col-span-3 md:col-span-3">
              <span className="text-sm font-medium">{formatNetWorth(person.netWorth, person.currency)}</span>
            </div>
            
            <div className="hidden md:block md:col-span-2">
              <span className="px-1.5 py-0.5 bg-gray-100 rounded text-[#666] text-xs">
                {person.industry}
              </span>
            </div>
            
            <div className="col-span-3 md:col-span-2">
              <span className="text-xs text-gray-600">{person.company || "—"}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CategoryRoundup;
