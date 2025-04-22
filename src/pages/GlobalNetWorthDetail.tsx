import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronLeft, ExternalLink, DollarSign, Calendar, Globe, Award, Building2, Info } from "lucide-react";
import Header from "../components/Header";
import SEO from "../components/SEO";
import AdSense from "../components/AdSense";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { NetWorthPerson, findPersonBySlug, formatNetWorth, formatAge, getSimilarPeople } from "../utils/networth";

const GlobalNetWorthDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [person, setPerson] = useState<NetWorthPerson | undefined>(undefined);
  const [similarPeople, setSimilarPeople] = useState<NetWorthPerson[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    if (slug) {
      const foundPerson = findPersonBySlug(slug);
      setPerson(foundPerson);

      if (foundPerson) {
        const similar = getSimilarPeople(foundPerson);
        setSimilarPeople(similar);
      }
    }
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-16 h-16 border-4 border-blog-accent border-t-transparent rounded-full animate-spin"
        ></motion.div>
      </div>
    );
  }

  if (!person) {
    return (
      <div className="min-h-screen bg-[#f6f6f0] flex items-center justify-center">
        <Header />
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Person Not Found</h2>
          <p className="mb-4">The person you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/global-net-worth')}>
            Back to Net Worth List
          </Button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO
        title={`${person.name} Net Worth`}
        description={`Explore the net worth of ${person.name}, including their sources of wealth and career highlights.`}
        canonicalUrl={`/global-net-worth/${person.slug}`}
      />
      <Header />

      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-3xl">
        <div className="mb-6">
          <Link
            to="/global-net-worth"
            className="inline-flex items-center text-sm text-[#000000] hover:underline"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            All Public Figures
          </Link>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center mb-6">
              <Avatar className="h-24 w-24 md:h-32 md:w-32 mr-0 md:mr-6 mb-4 md:mb-0">
                <AvatarImage
                  src={person.imageUrl || "/placeholder.svg"}
                  alt={person.name}
                  className="object-cover"
                />
                <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-lg">
                  {person.name
                    .split(' ')
                    .map(part => part[0])
                    .join('')
                    .toUpperCase()
                    .substring(0, 2)}
                </AvatarFallback>
              </Avatar>

              <div>
                <h1 className="text-3xl font-bold mb-2">{person.name}</h1>
                <p className="text-gray-600 mb-1">{person.occupation}</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <DollarSign className="h-4 w-4 mr-1" />
                  <span>{formatNetWorth(person.netWorth, person.currency)}</span>
                </div>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                <span>Age: {formatAge(person.dateOfBirth)}</span>
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <Globe className="h-4 w-4 mr-1" />
                <span>Country: {person.country}</span>
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <Award className="h-4 w-4 mr-1" />
                <span>Industry: {person.industry}</span>
              </div>
              {person.company && (
                <div className="flex items-center text-gray-500 text-sm">
                  <Building2 className="h-4 w-4 mr-1" />
                  <span>Company: {person.company}</span>
                </div>
              )}
            </div>

            <Separator className="my-4" />

            <div>
              <h2 className="text-2xl font-semibold mb-2">Overview</h2>
              <p className="text-gray-700">{person.description}</p>
            </div>

            <Separator className="my-4" />

            <div>
              <a
                href={person.source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blog-accent hover:text-blog-accent-hover hover:underline transition-colors"
              >
                <Info className="h-4 w-4 mr-1" />
                Source <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
          </CardContent>
        </Card>

        <AdSense slot="9889084223" format="auto" className="py-3" />

        {similarPeople.length > 0 && (
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Similar People</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {similarPeople.map(similarPerson => (
                  <Link
                    key={similarPerson.id}
                    to={`/global-net-worth/${similarPerson.slug}`}
                    className="block hover:bg-gray-50 rounded-md p-3 transition-colors"
                  >
                    <div className="flex items-center mb-2">
                      <Avatar className="h-8 w-8 mr-3">
                        <AvatarImage
                          src={similarPerson.imageUrl || "/placeholder.svg"}
                          alt={similarPerson.name}
                          className="object-cover"
                        />
                        <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-xs">
                          {similarPerson.name
                            .split(' ')
                            .map(part => part[0])
                            .join('')
                            .toUpperCase()
                            .substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-lg font-medium">{similarPerson.name}</h3>
                    </div>
                    <p className="text-gray-500 text-sm">
                      {similarPerson.occupation}
                    </p>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <AdSense slot="9889084223" format="auto" className="py-3" />
      </main>

      <footer className="border-t border-gray-300 py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center text-[#828282] text-sm">
          <p>
            &copy; {new Date().getFullYear()} Sassa Insider. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default GlobalNetWorthDetail;
