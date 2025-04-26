
import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '../components/ui/table';
import SEO from '../components/SEO';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { ArrowUpRight } from 'lucide-react';
import { getAllExpensiveThings, formatPrice } from '../utils/expensiveThingsUtils';

const Price = () => {
  const expensiveItems = getAllExpensiveThings();
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="Expensive Things and Their Prices" 
        description="Explore the most expensive items in the world and their astonishing prices." 
      />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Most Expensive Things in the World</h1>
        <p className="text-gray-600 mb-8">Explore extraordinary items with extraordinary price tags.</p>
        
        <div className="bg-white rounded-sm shadow-sm border border-gray-200">
          <div className="p-4 border-b border-gray-100 bg-gray-50">
            <div className="grid grid-cols-12 text-xs font-medium text-gray-600">
              <div className="col-span-1">#</div>
              <div className="col-span-5 md:col-span-4">Item</div>
              <div className="col-span-3 md:col-span-3">Price</div>
              <div className="hidden md:block md:col-span-2">Category</div>
              <div className="col-span-3 md:col-span-2">Year</div>
            </div>
          </div>

          {expensiveItems.map((item, index) => (
            <div 
              key={item.id}
              className={`group px-4 py-3 ${index !== expensiveItems.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <div className="grid grid-cols-12 items-center">
                <div className="col-span-1 text-sm text-gray-500">
                  {index + 1}
                </div>
                
                <div className="col-span-5 md:col-span-4">
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-3">
                      <AvatarImage 
                        src={item.imageUrl || "/placeholder.svg"} 
                        alt={item.title} 
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-xs">
                        {getInitials(item.title)}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <Link 
                        to={`/price/${item.slug}`}
                        className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-blog-accent flex items-center"
                      >
                        {item.title}
                        <ArrowUpRight 
                          className="h-3.5 w-3.5 ml-1 text-blog-subtle opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </Link>
                      <div className="text-xs text-gray-500">{item.shortDescription.substring(0, 60)}...</div>
                    </div>
                  </div>
                </div>
                
                <div className="col-span-3 md:col-span-3">
                  <span className="text-sm font-medium">{formatPrice(item.price)}</span>
                </div>
                
                <div className="hidden md:block md:col-span-2">
                  <span className="px-1.5 py-0.5 bg-gray-100 rounded text-[#666] text-xs">
                    {item.categoryId}
                  </span>
                </div>
                
                <div className="col-span-3 md:col-span-2">
                  <span className="text-xs text-gray-600">{item.price.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Price;
