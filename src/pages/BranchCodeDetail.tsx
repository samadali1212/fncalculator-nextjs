import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, Phone, MapPin, Copy, ArrowUpRight, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import SEOParagraph from "@/components/SEOParagraph";
import { Button } from "@/components/ui/button";
import AdSense from "../components/AdSense";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import useIsMobile from "@/hooks/use-mobile";
import { 
  findBranchCodeBySlug, 
  findBankBySlug,
  getBranchCodesByBank,
  getSimilarBranchCodes, 
  BranchCode,
  Bank
} from "@/utils/branchCodeData";
import { toast } from "sonner";

const BranchCodeDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [branchCode, setBranchCode] = useState<BranchCode | null>(null);
  const [bank, setBank] = useState<Bank | null>(null);
  const [bankBranches, setBankBranches] = useState<BranchCode[]>([]);
  const [similarBranches, setSimilarBranches] = useState<BranchCode[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();
  
  const [visibleBankCount, setVisibleBankCount] = useState(150);
  const [visibleSimilarCount, setVisibleSimilarCount] = useState(20);

  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      if (slug) {
        const foundBranch = findBranchCodeBySlug(slug);
        
        if (foundBranch) {
          setBranchCode(foundBranch);
          setSimilarBranches(getSimilarBranchCodes(foundBranch, 200));
          setBank(null);
          setBankBranches([]);
        } else {
          const foundBank = findBankBySlug(slug);
          
          if (foundBank) {
            setBank(foundBank);
            const branches = getBranchCodesByBank(foundBank.id);
            setBankBranches(branches);
            setBranchCode(null);
            setSimilarBranches([]);
          }
        }
      }
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [slug]);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast.success(`${type} copied to clipboard`);
      },
      () => {
        toast.error("Failed to copy to clipboard");
      }
    );
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  const loadMoreBankBranches = () => {
    setVisibleBankCount(prev => prev + 150);
  };

  const loadMoreSimilarBranches = () => {
    setVisibleSimilarCount(prev => prev + 20);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f6f6f0]">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="flex justify-center items-center h-64">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-16 h-16 border-4 border-blog-accent border-t-transparent rounded-full animate-spin"
            ></motion.div>
          </div>
        </div>
      </div>
    );
  }

  if (!branchCode && !bank) {
    return (
      <div className="min-h-screen bg-[#f6f6f0]">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="bg-white p-6 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Not Found</h2>
            <p className="mb-4">The requested bank or branch code doesn't exist.</p>
            <Button onClick={() => navigate('/')}>
              All Branch Codes
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (bank) {
    const visibleBankBranches = bankBranches.slice(0, visibleBankCount);
    
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-[#f6f6f0]"
      >
        <SEO
          title={`${bank.name} Branch Codes - South Africa`}
          description={`Find all branch codes for ${bank.name} in South Africa. Complete list of branch codes, addresses and contact information.`}
          canonicalUrl={`/branch-codes/${slug}`}
        />
        <Header />
        <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
          <div className="mb-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/')}
              className="gap-1"
            >
              <ChevronLeft className="h-4 w-4" /> Back to All Banks
            </Button>
          </div>
         
          <div className="my-6">
            <AdSense slot="9889084223" format="horizontal" className="py-3" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-16 w-16">
                  <AvatarImage
                    src={bank.logoUrl}
                    alt={`${bank.name} logo`}
                    className="object-contain"
                  />
                  <AvatarFallback className="bg-[#f6f6f0] text-gray-700">
                    {bank.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-3xl font-bold mb-1">{bank.name} Branch Codes</h1>
                  <p className="text-gray-600">{bank.description}</p>
                </div>
              </div>
            </div>

            <SEOParagraph bank={bank} />

          <div className="my-6">
            <AdSense slot="9889084223" format="auto" className="py-4" />
          </div>

            <div className="bg-white rounded-sm shadow-sm border border-gray-200">
              <div className="p-4 border-b border-gray-100 bg-gray-50">
                <div className="grid grid-cols-10 text-xs font-medium text-gray-600">
                  <div className="col-span-1">#</div>
                  <div className="col-span-5 md:col-span-5">Branch</div>
                  <div className="col-span-3 md:col-span-3">City</div>
                  <div className="col-span-1 md:col-span-1 text-right">Details</div>
                </div>
              </div>
              
              {visibleBankBranches.length > 0 ? (
                visibleBankBranches.map((branch, index) => (
                  <motion.div 
                    key={branch.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`group px-4 py-3 ${index !== visibleBankBranches.length - 1 ? 'border-b border-gray-100' : ''}`}
                  >
                    <div className="grid grid-cols-10 items-center">
                      <div className="col-span-1 text-sm text-gray-500">
                        {index + 1}
                      </div>
                      
                      <div className="col-span-5 md:col-span-5">
                        <div className="flex flex-col">
                          <Link 
                            to={`/branch-codes/${branch.slug}`}
                            className="text-[#333] hover:underline text-sm font-medium transition-colors group-hover:text-blog-accent flex items-center"
                          >
                            {branch.branchName}
                            <ArrowUpRight 
                              className="h-3 w-3 ml-1 text-blog-subtle opacity-0 group-hover:opacity-100 transition-opacity"
                            />
                          </Link>
                          <div className="text-xs text-gray-500">{branch.city}</div>
                        </div>
                      </div>
                      
                      <div className="col-span-3 md:col-span-3">
                        <span className="px-1.5 py-0.5 bg-gray-100 rounded text-[#666] text-xs">
                          {branch.city}
                        </span>
                      </div>
                      
                      <div className="col-span-1 md:col-span-1 text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="hover:bg-gray-100 px-2"
                        >
                          <Link to={`/branch-codes/${branch.slug}`}>
                            View
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-500">No branch codes found for this bank</p>
                </div>
              )}
              
              {bankBranches.length > visibleBankCount && (
                <div className="flex justify-center p-4 border-t border-gray-100">
                  <Button 
                    variant="outline" 
                    onClick={loadMoreBankBranches}
                    className="gap-2"
                  >
                    Load More <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
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
  }

  const visibleSimilarBranches = similarBranches.slice(0, visibleSimilarCount);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO
        title={`${branchCode!.bankName} ${branchCode!.branchName} Branch Code: ${branchCode!.branchCode}`}
        description={`${branchCode!.bankName} ${branchCode!.branchName} branch code is ${branchCode!.branchCode}. Find address, contact details, and BIC/SWIFT code for this branch.`}
        canonicalUrl={`/branch-codes/${slug}`}
      />
      <Header />
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="mb-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/')}
            className="gap-1"
          >
            <ChevronLeft className="h-4 w-4" /> Back to Branch Codes
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-gray-500 mb-2">
                  <span className="px-2 py-0.5 bg-gray-100 rounded text-xs">{branchCode!.bankName}</span>
                  <span>•</span>
                  <span className="flex items-center">
                    <MapPin className="h-3.5 w-3.5 mr-1" /> {branchCode!.city}
                  </span>
                </div>
                <h1 className="text-3xl font-bold">{branchCode!.branchName} Branch</h1>
              </div>
              <div className="bg-white p-3 rounded-lg text-center shadow-sm border border-gray-200">
                <div className="text-sm text-gray-500">Branch Code</div>
                <div className="text-xl font-mono font-bold flex items-center gap-2 justify-center">
                  {branchCode!.branchCode}
                  <button 
                    onClick={() => copyToClipboard(branchCode!.branchCode, "Branch code")}
                    className="text-gray-500 hover:text-gray-800" 
                    aria-label="Copy branch code"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-6 bg-white shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle>Branch Details</CardTitle>  
            </CardHeader>
            <CardContent>
              <SEOParagraph branchCode={branchCode} />
                        <div className="my-6">
            <AdSense slot="9889084223" format="horizontal" className="py-3" />
          </div>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Branch Code</TableCell>
                    <TableCell className="flex justify-between">
                      <span>{branchCode!.branchCode}</span>
                      <button
                        onClick={() => copyToClipboard(branchCode!.branchCode, "Branch code")}
                        className="text-gray-500 hover:text-gray-800"
                        aria-label="Copy branch code"
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">BIC/SWIFT Code</TableCell>
                    <TableCell className="flex justify-between">
                      <span>{branchCode!.bicCode}</span>
                      <button
                        onClick={() => copyToClipboard(branchCode!.bicCode, "BIC code")}
                        className="text-gray-500 hover:text-gray-800"
                        aria-label="Copy BIC code"
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Bank Name</TableCell>
                    <TableCell>{branchCode!.bankName}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Branch Name</TableCell>
                    <TableCell>{branchCode!.branchName}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">City</TableCell>
                    <TableCell>{branchCode!.city}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Branch Address</TableCell>
                    <TableCell>{branchCode!.branchAddress}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Phone</TableCell>
                    <TableCell>
                      <a 
                        href={`tel:${branchCode!.phone}`} 
                        className="flex items-center hover:text-blue-600"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        {branchCode!.phone}
                      </a>
                    </TableCell>
                  </TableRow>
                  {branchCode!.fax && (
                    <TableRow>
                      <TableCell className="font-medium">Fax</TableCell>
                      <TableCell>{branchCode!.fax}</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="my-6">
            <AdSense slot="9889084223" format="horizontal" className="py-3" />
          </div>

          <Card className="bg-white shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle>Related Branches</CardTitle>
            </CardHeader>
            <CardContent>
              {visibleSimilarBranches.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-4">
                  {visibleSimilarBranches.map((branch, index) => (
                    <motion.div
                      key={branch.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="p-4 rounded-md border border-gray-200 hover:shadow-sm transition-shadow"
                    >
                      <h3 className="text-sm font-semibold mb-1">{branch.branchName}</h3>
                      <div className="text-xs text-gray-500 mb-2">{branch.bankName}</div>
                      <Link
                        to={`/branch-codes/${branch.slug}`}
                        className="text-blog-accent hover:underline text-sm"
                      >
                        View Details
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-500">No similar branches found.</p>
                </div>
              )}
              
              {similarBranches.length > visibleSimilarCount && (
                <div className="mt-4 mb-2">
                  <Button 
                    variant="outline" 
                    onClick={loadMoreSimilarBranches}
                    className="w-full gap-2"
                  >
                    Load More <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
              )}
              
              <div className="mt-6">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/">View All Branch Codes</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
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

export default BranchCodeDetail;
