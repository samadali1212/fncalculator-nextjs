
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/card';
import SEO from '../components/SEO';
import { getAllCategories } from '../utils/expensiveThingsUtils';

const StandalonePrice = () => {
  const categories = getAllCategories();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="Expensive Things Categories" 
        description="Browse categories of the most expensive things in the world." 
      />
      
      <h1 className="text-3xl font-bold mb-6">Expensive Things Categories</h1>
      <p className="text-gray-600 mb-8">Browse our collection of the world's most valuable and expensive items by category.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link to={`/price/category/${category.slug}`} key={category.id}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <div className="p-4">
                {category.imageUrl && (
                  <div className="h-48 mb-4 overflow-hidden rounded-md">
                    <img 
                      src={category.imageUrl} 
                      alt={category.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StandalonePrice;
