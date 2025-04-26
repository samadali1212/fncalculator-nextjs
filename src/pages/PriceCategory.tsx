
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card } from '../components/ui/card';
import SEO from '../components/SEO';
import { getCategoryBySlug, getExpensiveThingsByCategory, formatPrice } from '../utils/expensiveThingsUtils';
import NotFound from './NotFound';

const PriceCategory = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategoryBySlug(slug || '');
  
  if (!category) {
    return <NotFound />;
  }
  
  const items = getExpensiveThingsByCategory(category.id);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title={`${category.name} - Expensive Items`} 
        description={`Explore the most expensive ${category.name.toLowerCase()} items in the world.`} 
        imageUrl={category.imageUrl}
      />
      
      <div className="mb-4">
        <Link to="/price-categories" className="text-blue-600 hover:underline">&larr; Back to All Categories</Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-4">{category.name}</h1>
      <p className="text-gray-600 mb-8">{category.description}</p>
      
      {items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
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
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">No expensive items found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default PriceCategory;
