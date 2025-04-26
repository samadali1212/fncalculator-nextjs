
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
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
        title={`${item.title} - Price and Details`} 
        description={item.shortDescription} 
        ogImage={item.imageUrl}
      />
      
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <Link to="/price" className="text-blue-600 hover:underline">&larr; Back to All Expensive Things</Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3">
              {item.imageUrl ? (
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-64 md:h-full object-cover rounded-lg"
                />
              ) : (
                <Avatar className="w-full h-64 rounded-lg">
                  <AvatarFallback className="w-full h-full text-4xl">
                    {getInitials(item.title)}
                  </AvatarFallback>
                </Avatar>
              )}
            </div>

            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
              <div className="text-2xl font-bold text-green-600 mb-4">
                {formatPrice(item.price)}
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500">Category</div>
                  <div className="text-gray-900">{category?.name}</div>
                </div>

                <div>
                  <div className="text-sm text-gray-500">Price as of</div>
                  <div className="text-gray-900">{item.price.year}</div>
                </div>

                <div>
                  <div className="text-sm text-gray-500">Description</div>
                  <p className="text-gray-900">{item.fullDescription}</p>
                </div>
              </div>

              {item.facts.length > 0 && (
                <>
                  <Separator className="my-6" />
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Interesting Facts</h2>
                    <div className="grid gap-4">
                      {item.facts.map((fact, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-md">
                          <div className="font-medium text-gray-900">{fact.title}</div>
                          <div className="text-gray-600">{fact.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              <div className="mt-6">
                <ShareButton title={`Check out ${item.title}`} text={item.shortDescription} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceDetail;
