
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import SEO from '../components/SEO';
import ShareButton from '../components/ShareButton';
import { getExpensiveThingBySlug, formatPrice, getCategoryById } from '../utils/expensiveThingsUtils';
import NotFound from './NotFound';

const PriceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = getExpensiveThingBySlug(slug || '');
  
  if (!item) {
    return <NotFound />;
  }
  
  const category = getCategoryById(item.categoryId);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title={`${item.title} - Price and Details`} 
        description={item.shortDescription} 
        imageUrl={item.imageUrl}
      />
      
      <div className="mb-4">
        <Link to="/price" className="text-blue-600 hover:underline">&larr; Back to All Expensive Things</Link>
      </div>
      
      <Card className="overflow-hidden">
        <div className="md:flex">
          {item.imageUrl && (
            <div className="md:w-1/3">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="p-6 md:w-2/3">
            <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
            <div className="text-2xl font-bold text-green-600 mb-4">
              {formatPrice(item.price)}
            </div>
            
            {category && (
              <div className="mb-4">
                <span className="text-sm text-gray-600">Category: </span>
                <Link 
                  to={`/price/category/${category.slug}`} 
                  className="text-blue-600 hover:underline"
                >
                  {category.name}
                </Link>
              </div>
            )}
            
            <Separator className="my-4" />
            
            <div className="prose max-w-none">
              <p>{item.fullDescription}</p>
            </div>
            
            {item.facts.length > 0 && (
              <>
                <Separator className="my-6" />
                <h2 className="text-xl font-semibold mb-4">Interesting Facts</h2>
                <div className="grid gap-4">
                  {item.facts.map((fact, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-md">
                      <h3 className="font-semibold">{fact.title}</h3>
                      <p>{fact.value}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
            
            <div className="mt-6">
              <ShareButton title={`Check out ${item.title}`} text={item.shortDescription} />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PriceDetail;
