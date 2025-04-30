
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Share, Users } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import SEO from "../components/SEO";
import SEOParagraph from "../components/SEOParagraph";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  Card, 
  CardContent, 
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { getCongressMemberBySlug, formatCongressSalary, getRelatedCongressMembers } from "../utils/usCongressData";
import { usePageReload } from "../hooks/usePageReload";

const USCongressDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { pageKey, isLoading, setIsLoading } = usePageReload(); // Updated to use all hook properties
  const [member, setMember] = useState(null);
  const [relatedMembers, setRelatedMembers] = useState([]);
  
  // Get initials for avatar fallback
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };
  
  // Fetch member data when slug changes or page reloads
  useEffect(() => {
    setIsLoading(true);
    
    const fetchData = () => {
      const memberData = getCongressMemberBySlug(slug || "");
      setMember(memberData);
      
      if (memberData) {
        const related = getRelatedCongressMembers(memberData, 9);
        setRelatedMembers(related);
      }
      
      // Simulate loading delay for consistent experience
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };
    
    fetchData();
  }, [slug, setIsLoading, pageKey]); // Add pageKey to dependencies

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

  if (!member) {
    return (
      <div className="min-h-screen bg-[#f6f6f0]">
        <Header />
        <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
          <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-200 text-center">
            <h1 className="text-2xl font-bold mb-4">Member Not Found</h1>
            <p className="text-gray-600 mb-6">
              The congress member you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/uscongress">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Congress Members
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <motion.div
      key={pageKey} // Force remount on route change
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title={`${member.name} Salary`}
        description={`Learn about ${member.name}'s salary as a ${member.position} representing ${member.state}, along with their background and political career details.`}
        canonicalUrl={`/uscongress/${slug}`}
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="flex items-center mb-6">
          <Link 
            to="/uscongress"
            className="text-[#333] hover:text-blog-accent transition-colors flex items-center mr-auto"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Back to Congress Members</span>
          </Link>
        </div>
        
        <motion.div 
          className="bg-white rounded-sm shadow-sm border border-gray-200 p-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4 flex justify-center">
              <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
                <Avatar className="w-full h-full">
                  <AvatarImage 
                    src={member.imageUrl || "/placeholder.svg"} 
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                  <AvatarFallback className="bg-gray-100 text-gray-700 text-2xl w-full h-full flex items-center justify-center">
                    {getInitials(member.name)}
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
            
            <div className="md:w-3/4">
              <h1 className="text-3xl font-bold mb-2">{member.name}</h1>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-100 rounded text-[#666] text-xs">
                  {member.party}
                </span>
                <span className="px-2 py-1 bg-gray-100 rounded text-[#666] text-xs">
                  {member.state}
                </span>
                <span className="px-2 py-1 bg-gray-100 rounded text-[#666] text-xs">
                  {member.position}
                </span>
                {member.yearsInOffice && (
                  <span className="px-2 py-1 bg-gray-100 rounded text-[#666] text-xs">
                    {member.yearsInOffice} years in office
                  </span>
                )}
              </div>
              
              <div className="border-t border-b border-gray-100 py-4 my-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h2 className="text-sm text-gray-500 mb-1">Annual Salary</h2>
                    <p className="text-xl font-bold">{formatCongressSalary(member.salary)}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-sm text-gray-500 mb-1">Monthly Estimate</h2>
                    <p className="text-xl font-bold">{formatCongressSalary(member.salary / 12)}</p>
                  </div>
                </div>
              </div>
              
              <div className="prose max-w-none mb-8 text-gray-700">
                <p>{member.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Member Details */}
        <motion.div 
          className="bg-white rounded-sm shadow-sm border border-gray-200 p-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-xl font-bold mb-4">Member Details</h2>
          <Table>
            <TableBody>
              {member.party && (
                <TableRow>
                  <TableHead className="w-1/3">Party</TableHead>
                  <TableCell>{member.party}</TableCell>
                </TableRow>
              )}
              {member.state && (
                <TableRow>
                  <TableHead className="w-1/3">State</TableHead>
                  <TableCell>{member.state}</TableCell>
                </TableRow>
              )}
              {member.position && (
                <TableRow>
                  <TableHead className="w-1/3">Position</TableHead>
                  <TableCell>{member.position}</TableCell>
                </TableRow>
              )}
              {member.yearsInOffice && (
                <TableRow>
                  <TableHead className="w-1/3">Years in Office</TableHead>
                  <TableCell>{member.yearsInOffice} years</TableCell>
                </TableRow>
              )}
              {member.committees && member.committees.length > 0 && (
                <TableRow>
                  <TableHead className="w-1/3">Committees</TableHead>
                  <TableCell>
                    <ul className="list-disc pl-5">
                      {member.committees.map((committee, index) => (
                        <li key={index}>{committee}</li>
                      ))}
                    </ul>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </motion.div>
        
        {relatedMembers.length > 0 && (
          <motion.div 
            className="bg-white rounded-sm shadow-sm border border-gray-200 p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <h2 className="text-xl font-bold">Similar {member.party} Congress Members</h2>
              <Users className="h-5 w-5 text-gray-400 ml-2" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedMembers.map((related) => (
                <Card key={related.id} className="border border-gray-200">
                  <CardHeader className="p-4">
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage 
                          src={related.imageUrl || "/placeholder.svg"} 
                          alt={related.name}
                          className="object-cover"
                        />
                        <AvatarFallback className="bg-[#f6f6f0] text-gray-700 text-xs">
                          {getInitials(related.name)}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div>
                        <CardTitle className="text-base">
                          <Link 
                            to={`/uscongress/${related.slug}`}
                            className="hover:underline text-[#333]"
                          >
                            {related.name}
                          </Link>
                        </CardTitle>
                        <CardDescription className="text-xs">{related.position}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="text-sm">
                      <span className="text-gray-500">Salary:</span>{" "}
                      <span className="font-medium">{formatCongressSalary(related.salary)}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {related.state} • {related.party}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        )}
      </main>

      <footer className="border-t border-gray-300 py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center text-[#828282] text-sm">
          <p>
            &copy; {new Date().getFullYear()} SalaryList. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default USCongressDetail;
