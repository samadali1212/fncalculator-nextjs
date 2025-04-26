
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/card';
import SEO from '../components/SEO';
import { getAllExpensiveThings, formatPrice } from '../utils/expensiveThingsUtils';

const Price = () => {
  const expensiveItems = getAllExpensiveThings();

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="Expensive Things and Their Prices" 
        description="Explore the most expensive items in the world and their astonishing prices." 
      />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Most Expensive Things in the World</h1>
        <p className="text-lg text-gray-600 mb-8">Explore extraordinary items with extraordinary price tags.</p>
        
        <div className="grid gap-6">
          {expensiveItems.map((item) => (
            <Link to={`/price/${item.slug}`} key={item.id}>
              <Card className="transition-all duration-300 hover:shadow-lg">
                <div className="p-6 flex flex-col md:flex-row gap-6">
                  {item.imageUrl && (
                    <div className="w-full md:w-48 h-48">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">{item.title}</h2>
                    <p className="text-gray-600 mb-4">{item.shortDescription}</p>
                    <div className="text-xl font-bold text-green-600">
                      {formatPrice(item.price)}
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Price;
