
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
      
      <h1 className="text-3xl font-bold mb-6">Most Expensive Things in the World</h1>
      <p className="text-gray-600 mb-8">Explore extraordinary items with extraordinary price tags.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {expensiveItems.map((item) => (
          <Link to={`/price/${item.slug}`} key={item.id}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <div className="p-4">
                {item.imageUrl && (
                  <div className="h-48 mb-4 overflow-hidden rounded-md">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600 mb-2 line-clamp-2">{item.shortDescription}</p>
                <div className="text-lg font-bold text-green-600">
                  {formatPrice(item.price)}
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Price;
