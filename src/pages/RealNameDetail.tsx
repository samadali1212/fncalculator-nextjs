
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, User, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { getCelebrityBySlug, getRelatedCelebrities } from '@/utils/realNamesData';

const RealNameDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Get celebrity details
  const celebrity = getCelebrityBySlug(slug || '');
  
  // Get related celebrities
  const relatedCelebrities = celebrity ? getRelatedCelebrities(celebrity.id, 3) : [];
  
  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };
  
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
    <div className="container mx-auto py-6 px-4 mt-14">
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
      
      {/* Related celebrities section - Now styled as a table */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">More Celebrity Real Names</h2>
        
        <div className="bg-white rounded-sm shadow-sm border border-gray-200">
          <div className="p-4 border-b border-gray-100 bg-gray-50">
            <div className="grid grid-cols-12 text-xs font-medium text-gray-600">
              <div className="col-span-1">#</div>
              <div className="col-span-5 md:col-span-4">Celebrity</div>
              <div className="col-span-6 md:col-span-4">Real Name</div>
              <div className="hidden md:block md:col-span-3">Profession</div>
            </div>
          </div>
          
          {relatedCelebrities.map((related, index) => (
            <Link to={`/real-names/${related.slug}`} key={related.id}>
              <div className={`group px-4 py-3 ${index !== relatedCelebrities.length - 1 ? 'border-b border-gray-100' : ''} hover:bg-gray-50`}>
                <div className="grid grid-cols-12 items-center">
                  <div className="col-span-1 text-sm text-gray-500">
                    {index + 1}
                  </div>
                  
                  <div className="col-span-5 md:col-span-4">
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 mr-3">
                        {related.imageUrl ? (
                          <AvatarImage src={related.imageUrl} alt={related.stageName} />
                        ) : (
                          <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-xs">
                            {getInitials(related.stageName)}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      
                      <div>
                        <span className="text-[#333] text-sm font-medium transition-colors group-hover:text-blog-accent flex items-center">
                          {related.stageName}
                          <ArrowUpRight 
                            className="h-3.5 w-3.5 ml-1 text-blog-subtle opacity-0 group-hover:opacity-100 transition-opacity"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-span-6 md:col-span-4">
                    <span className="text-sm">{related.realName}</span>
                  </div>
                  
                  <div className="hidden md:block md:col-span-3">
                    <span className="px-1.5 py-0.5 bg-gray-100 rounded text-[#666] text-xs">
                      {related.profession}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealNameDetail;
