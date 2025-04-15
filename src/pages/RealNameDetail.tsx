
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card';
import { getCelebrityBySlug, getRelatedCelebrities } from '@/utils/realNamesData';

const RealNameDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Get celebrity details
  const celebrity = getCelebrityBySlug(slug || '');
  
  // Get related celebrities
  const relatedCelebrities = celebrity ? getRelatedCelebrities(celebrity.id, 20) : [];
  
  // Handle case when celebrity is not found
  if (!celebrity) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Celebrity not found</h2>
        <p className="mb-6">Sorry, we couldn't find details for this celebrity.</p>
        <Button onClick={() => navigate('/real-names')}>
          Return to Real Names
        </Button>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto py-6 px-4 max-w-4xl">
      <Helmet>
        <title>{celebrity.stageName} Real Name - {celebrity.realName}</title>
        <meta 
          name="description" 
          content={`${celebrity.stageName}'s real name is ${celebrity.realName}. Learn more about the ${celebrity.profession}'s birth name and career.`} 
        />
      </Helmet>
      
      {/* Back button */}
      <Button 
        variant="ghost" 
        onClick={() => navigate('/real-names')} 
        className="mb-6 gap-2"
      >
        <ArrowLeft size={16} />
        Back to All Real Names
      </Button>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          {/* Celebrity image */}
          <div className="md:w-1/3">
            {celebrity.imageUrl ? (
              <img 
                src={celebrity.imageUrl} 
                alt={celebrity.stageName} 
                className="w-full h-80 object-cover" 
              />
            ) : (
              <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
                <User size={64} className="text-gray-400" />
              </div>
            )}
          </div>
          
          {/* Celebrity details */}
          <div className="md:w-2/3 p-6">
            <h1 className="text-3xl font-bold mb-2">{celebrity.stageName}</h1>
            <div className="mb-4">
              <span className="font-semibold">Real Name:</span> 
              <span className="text-xl ml-2">{celebrity.realName}</span>
            </div>
            <div className="mb-6">
              <span className="font-semibold">Profession:</span> 
              <span className="ml-2">{celebrity.profession}</span>
            </div>
            <h2 className="text-xl font-semibold mb-3">Biography</h2>
            <p className="text-gray-700 mb-6">{celebrity.bio}</p>
          </div>
        </div>
      </div>
      
      {/* Related celebrities section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">More Celebrity Real Names</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {relatedCelebrities.map(related => (
            <Link to={`/real-names/${related.slug}`} key={related.id}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    {related.imageUrl ? (
                      <img 
                        src={related.imageUrl} 
                        alt={related.stageName} 
                        className="w-12 h-12 object-cover rounded-full"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                        <User size={18} className="text-gray-500" />
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold">{related.stageName}</h3>
                      <p className="text-sm text-gray-600">{related.realName}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 text-xs text-blue-600">
                  View details →
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealNameDetail;
