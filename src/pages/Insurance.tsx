import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Shield, FileText, Users, AlertTriangle, ChevronDown, Car, CreditCard, Receipt, Phone } from 'lucide-react';

// --- Placeholder for @/components/ui/collapsible ---
// Assuming a basic implementation of Collapsible for demonstration purposes.
// In a real project, this would come from your UI library (e.g., shadcn/ui).
const Collapsible = ({ children, open: defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="collapsible-root">
      {React.Children.map(children, child => {
        if (child.type.displayName === 'CollapsibleTrigger') {
          return React.cloneElement(child, { onClick: () => setIsOpen(!isOpen) });
        }
        if (child.type.displayName === 'CollapsibleContent' && !isOpen) {
          return null; // Hide content when not open
        }
        return child;
      })}
    </div>
  );
};
const CollapsibleTrigger = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
CollapsibleTrigger.displayName = 'CollapsibleTrigger'; // For the parent to identify
const CollapsibleContent = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
CollapsibleContent.displayName = 'CollapsibleContent'; // For the parent to identify

// --- Placeholder for CoverNoteData and tiraApi service ---
// This is a simplified type and mock function for demonstration.
// In your actual project, these would be defined in '../services/tiraApi'.
export type CoverNoteData = {
  coverNoteNumber: string;
  insuranceCompany: string;
  coverageStatus: string;
  coveragePeriod: string;
  premiumAmount: number;
  vehicleDetails: {
    registrationNumber: string;
    chassisNumber: string;
  };
  policyType: string;
};

// Mock function for getParamType (assuming it maps search types to API params)
const getParamType = (searchType: string): string => {
  switch (searchType) {
    case 'vehicle':
      return 'vehicle_reg';
    case 'policy':
      return 'policy_number';
    case 'sticker':
      return 'sticker_number';
    default:
      return '';
  }
};

// Mock function for verifyInsurance (simulates an API call)
const verifyInsurance = async (payload: any) => {
  console.log("Mock API call to verifyInsurance with payload:", payload);
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (payload.searchParam === 'ERROR123') {
    return { error: true, message: 'Invalid search parameter provided.' };
  }
  if (payload.searchParam === 'NOCOVER') {
    return { error: true, message: 'No insurance coverage found for this parameter.' };
  }

  // Mock data
  const mockData: CoverNoteData[] = [{
    coverNoteNumber: 'CN-123456789',
    insuranceCompany: 'ABC Insurance Co.',
    coverageStatus: 'Active',
    coveragePeriod: '2024-01-01 to 2024-12-31',
    premiumAmount: 500000,
    vehicleDetails: {
      registrationNumber: payload.searchParam,
      chassisNumber: 'CHASSISABC123'
    },
    policyType: 'Comprehensive'
  }];
  return { error: false, data: mockData };
};


// --- Placeholder for SearchForm Component ---
// This is a simplified mock for the SearchForm component.
// In your actual project, this would be defined in '../components/SearchForm'.
type SearchData = {
  searchType: 'vehicle' | 'policy' | 'sticker';
  searchParam: string;
};

const SearchForm: React.FC<{ onSearch: (data: SearchData) => void; loading: boolean }> = ({ onSearch, loading }) => {
  const [searchType, setSearchType] = useState<SearchData['searchType']>('vehicle');
  const [searchParam, setSearchParam] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ searchType, searchParam });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Verify Your Insurance</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="searchType" className="block text-sm font-medium text-gray-700 mb-1">Search By</label>
          <select
            id="searchType"
            value={searchType}
            onChange={(e) => setSearchType(e.target.value as SearchData['searchType'])}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="vehicle">Vehicle Registration Number</option>
            <option value="policy">Policy/Cover Note Number</option>
            <option value="sticker">Sticker Number</option>
          </select>
        </div>
        <div>
          <label htmlFor="searchParam" className="block text-sm font-medium text-gray-700 mb-1">Enter {searchType === 'vehicle' ? 'Vehicle Registration' : searchType === 'policy' ? 'Policy/Cover Note Number' : 'Sticker Number'}</label>
          <input
            type="text"
            id="searchParam"
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
            placeholder={`e.g., ${searchType === 'vehicle' ? 'T123ABC' : searchType === 'policy' ? 'POL123456789' : 'STI987654321'}`}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Verifying...' : 'Verify Insurance'}
        </button>
      </form>
    </div>
  );
};


// --- Placeholder for SearchResults Component ---
// This is a simplified mock for the SearchResults component.
// In your actual project, this would be defined in '../components/SearchResults'.
const SearchResults: React.FC<{ results: CoverNoteData[]; loading: boolean; error: string }> = ({ results, loading, error }) => {
  if (loading) {
    return (
      <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200 text-center text-gray-600">
        <p>Loading results...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-lg text-red-700">
        <div className="flex items-center">
          <AlertTriangle className="h-5 w-5 mr-2" />
          <p className="font-medium">Error: {error}</p>
        </div>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200 text-center text-gray-600">
        <p>No insurance details found. Please try a different search or parameter.</p>
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-4">
      {results.map((result, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Insurance Details</h3>
          <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 text-sm">
            <div className="sm:col-span-1">
              <dt className="font-medium text-gray-500">Cover Note Number</dt>
              <dd className="mt-1 text-gray-900">{result.coverNoteNumber}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="font-medium text-gray-500">Insurance Company</dt>
              <dd className="mt-1 text-gray-900">{result.insuranceCompany}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="font-medium text-gray-500">Coverage Status</dt>
              <dd className={`mt-1 font-semibold ${result.coverageStatus === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
                {result.coverageStatus}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="font-medium text-gray-500">Coverage Period</dt>
              <dd className="mt-1 text-gray-900">{result.coveragePeriod}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="font-medium text-gray-500">Premium Amount</dt>
              <dd className="mt-1 text-gray-900">TSH {result.premiumAmount.toLocaleString()}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="font-medium text-gray-500">Policy Type</dt>
              <dd className="mt-1 text-gray-900">{result.policyType}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="font-medium text-gray-500">Vehicle Registration</dt>
              <dd className="mt-1 text-gray-900">{result.vehicleDetails.registrationNumber}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="font-medium text-gray-500">Chassis Number</dt>
              <dd className="mt-1 text-gray-900">{result.vehicleDetails.chassisNumber}</dd>
            </div>
          </dl>
        </div>
      ))}
    </div>
  );
};


// --- Placeholder for ShareButton Component ---
// This is a simplified mock for the ShareButton component.
// In your actual project, this would be defined in '../components/ShareButton'.
const ShareButton: React.FC<{ title: string; text: string; className?: string }> = ({ title, text, className }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: text,
        url: window.location.href,
      }).catch((error) => console.error('Error sharing:', error));
    } else {
      // Fallback for browsers that don't support Web Share API
      alert(`Share this link: ${window.location.href}\nTitle: ${title}\nText: ${text}`);
      // Using execCommand('copy') for better compatibility in iframes
      const el = document.createElement('textarea');
      el.value = window.location.href;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <button
      onClick={handleShare}
      className={`inline-flex items-center px-4 py-2 border border-gray-300 rounded-md font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}
    >
      <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 8a3 3 0 10-2.977-2.977l-4.242 2.438a3 3 0 100 4.242l4.242 2.438A3 3 0 1015 12a3 3 0 00-2.977-2.977l-4.242-2.438a3 3 0 100-4.242l4.242-2.438zM10 5a1 1 0 11-2 0 1 1 0 012 0zm-1 6a1 1 0 11-2 0 1 1 0 012 0zm7-1a1 1 0 11-2 0 1 1 0 012 0z"></path>
      </svg>
      Share Page
    </button>
  );
};

// --- Placeholder for Header Component ---
// This is a simplified mock for the Header component.
// In your actual project, this would be defined in '../components/Header'.
const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">denilagari.com</div>
        {/* You can add navigation links or other header elements here */}
      </div>
    </header>
  );
};

// --- Placeholder for SEO Component ---
// This is a simplified mock for the SEO component.
// In your actual project, this would be defined in '../components/SEO'.
const SEO: React.FC<{ title: string; description: string; canonicalUrl: string }> = ({ title, description, canonicalUrl }) => {
  // In a real application, this component would update meta tags dynamically.
  // For this self-contained example, it just logs the props.
  React.useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = description;
      document.head.appendChild(newMeta);
    }
    const linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute('href', canonicalUrl);
    } else {
      const newLink = document.createElement('link');
      newLink.rel = 'canonical';
      newLink.href = canonicalUrl;
      document.head.appendChild(newLink);
    }
    console.log(`SEO set: Title - ${title}, Description - ${description}, Canonical - ${canonicalUrl}`);
  }, [title, description, canonicalUrl]);
  return null; // This component doesn't render any visible UI
};

// --- Placeholder for ToolStructuredData Component ---
// This is a simplified mock for the ToolStructuredData component.
// In your actual project, this would be defined in '../components/StructuredData/ToolStructuredData'.
const ToolStructuredData: React.FC<{ toolType: string }> = ({ toolType }) => {
  // In a real application, this component would generate JSON-LD for structured data.
  React.useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebTool",
      "name": "TIRA MIS Insurance Check",
      "description": `Online tool to verify insurance status in Tanzania using ${toolType} data.`,
      "applicationCategory": "Utilities",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "TZS"
      }
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [toolType]);
  return null;
};


function Insurance() {
  const [searchResults, setSearchResults] = useState<CoverNoteData[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState<string>('');

  const handleSearch = async (searchData: SearchData) => {
    setLoading(true);
    setHasSearched(true);
    setError('');
    
    try {
      const payload = {
        paramType: getParamType(searchData.searchType),
        searchParam: searchData.searchParam
      };

      const response = await verifyInsurance(payload);
      
      if (response.error) {
        setError(response.message || 'An error occurred while verifying insurance');
        setSearchResults([]);
      } else {
        setSearchResults(response.data || []);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to verify insurance');
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <ToolStructuredData toolType="insurance" />
      <SEO 
        title="TIRA MIS Insurance Check: Kuangalia Bima Ya Gari" 
        description="Access the TIRA MIS via Denilagari.com to perform an insurance check online, search by vehicle number, get your TIRA MIS sticker, and explore your Bima ya gari. Simple, fast, and reliable access to everything from TIRA mis updates to insurance checks."
        canonicalUrl="/insurance"
      />
      <Header />
      
      <div className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="mb-8">
          {/* Header row with title and share button */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
            <h1 className="text-3xl font-bold">
              TIRA MIS Free Insurance Sticker Check Online In Tanzania
            </h1>
            <div className="flex-shrink-0">
              <ShareButton
                title="Tanzania Insurance Verification Portal"
                text="Verify your insurance coverage status with official TIRA data"
              />
            </div>
          </div>
          
          {/* Description paragraph */}
          <p className="text-gray-600 leading-relaxed">
            TIRA MIS offers a simple way to check insurance details online. Use the denilagari.com to perform a bima ya gari check by vehicle number, get your TIRA MIS sticker, and confirm coverage status in tanzania. Whenever you need to verify with tira insurance check online, or searching for information through tira miss, this app provides fast, accurate access.
          </p>
        </div>

        <SearchForm onSearch={handleSearch} loading={loading} />

        {/* Search Results */}
        {hasSearched && (
          <SearchResults results={searchResults} loading={loading} error={error} />
        )}

        {/* Disclaimer Section */}
        <div className="mt-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800 mb-1">Important Disclaimer</h3>
                <p className="text-sm text-yellow-700">
                  This website is not affiliated with TIRA or any government agency. 
                  We are an independent service that helps users verify insurance coverage status.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* User Guide Section */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use This Tool & Insurance Guide</h2>
          
          {/* Search Methods Guide */}
          <Collapsible open={true}> {/* Added open={true} here */}
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <Car className="h-5 w-5 text-blue-600" />
                <span className="font-medium text-left">How to Search for Insurance Coverage</span>
              </div>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Car className="h-4 w-4" />
                    By Vehicle Registration Number
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Find your vehicle registration number on your vehicle's registration card or license plate.
                  </p>
                  <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                    <li>Click on the "Vehicle Registration" tab above</li>
                    <li>Enter your complete vehicle registration number (e.g., T123ABC)</li>
                    <li>Click "Verify Insurance"</li>
                    <li>View insurance coverage details, validity dates, and company information</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    By Policy/Cover Note Number
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Find your policy number on your insurance certificate or cover note.
                  </p>
                  <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                    <li>Click on the "Policy/Cover Note" tab</li>
                    <li>Enter your policy number exactly as shown on your certificate</li>
                    <li>Click "Verify Insurance"</li>
                    <li>View detailed policy information and coverage status</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Receipt className="h-4 w-4" />
                    By Sticker Number
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Use the sticker number from your vehicle's insurance sticker.
                  </p>
                  <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                    <li>Click on the "Sticker Number" tab</li>
                    <li>Enter the sticker number accurately</li>
                    <li>Click "Verify Insurance"</li>
                    <li>View insurance details linked to that sticker</li>
                  </ol>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Understanding Results */}
          <Collapsible open={true}> {/* Added open={true} here */}
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-green-600" />
                <span className="font-medium text-left">Understanding Your Verification Results</span>
              </div>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
              <div className="space-y-4">
                <p className="text-sm text-gray-700">
                  When insurance coverage is found, you'll see the following information:
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li><strong>Cover Note Number:</strong> Unique identifier for the insurance policy</li>
                  <li><strong>Insurance Company:</strong> Name of the issuing insurance company</li>
                  <li><strong>Coverage Status:</strong> Whether the policy is "Active" or expired</li>
                  <li><strong>Coverage Period:</strong> Start and end dates of the insurance coverage</li>
                  <li><strong>Premium Amount:</strong> Amount paid for the insurance coverage</li>
                  <li><strong>Vehicle Details:</strong> Registration number and chassis information</li>
                  <li><strong>Policy Type:</strong> Type of insurance coverage (Comprehensive, Third Party, etc.)</li>
                </ul>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Insurance Requirements */}
          <Collapsible open={true}> {/* Added open={true} here */}
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="font-medium text-left">Tanzania Vehicle Insurance Requirements</span>
              </div>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Mandatory Insurance Requirements</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li><strong>Third Party Insurance:</strong> Minimum legal requirement for all vehicles</li>
                    <li><strong>Valid Coverage:</strong> Must be current and not expired</li>
                    <li><strong>Licensed Insurer:</strong> Insurance must be from a TIRA-licensed company</li>
                    <li><strong>Certificate Display:</strong> Insurance certificate must be carried in the vehicle</li>
                    <li><strong>Sticker Display:</strong> Insurance sticker must be displayed on windscreen</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Types of Vehicle Insurance</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li><strong>Third Party Only:</strong> Covers damage to other people's property and injuries</li>
                    <li><strong>Third Party Fire & Theft:</strong> Includes coverage for fire damage and theft</li>
                    <li><strong>Comprehensive:</strong> Full coverage including own vehicle damage</li>
                    <li><strong>Commercial Vehicle:</strong> Special coverage for business and commercial vehicles</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Consequences of No Insurance</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>Heavy fines and penalties</li>
                    <li>Vehicle impoundment</li>
                    <li>Legal liability for damages</li>
                    <li>Difficulty renewing vehicle registration</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Information</h4>
                  <p className="text-sm text-gray-700">Beyond vehicle documents, responsible drivers should familiarize themselves with official materials:</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li><a href="https://www.tira.go.tz/" target="_blank"><strong>TIRA Official Website</strong></a> → Official insurance regulations and guidelines</li>
                    <li><strong>Insurance Act (Cap. 394)</strong> → Legal framework governing insurance in Tanzania</li>
                    <li><strong>Motor Vehicle Insurance Requirements</strong> → Specific requirements for vehicle insurance coverage</li>
                    <li><strong>Claims Process Guidelines</strong> → How to file and process insurance claims properly</li>
                  </ul>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Claims and Emergency Information */}
          <Collapsible open={true}>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red-600" />
                <span className="font-medium text-left">Insurance Claims & Emergency Contacts</span>
              </div>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">In Case of Accident</h4>
                  <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                    <li>Ensure safety and call emergency services if needed</li>
                    <li>Contact your insurance company immediately</li>
                    <li>Take photos of the accident scene and damage</li>
                    <li>Get contact details from other parties involved</li>
                    <li>Obtain a police report if required</li>
                    <li>Submit claim forms within the specified timeframe</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Always Carry</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Valid Insurance Certificate</li>
                    <li>Vehicle Registration Certificate</li>
                    <li>Valid Driving License</li>
                    <li>Insurance company contact numbers</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">TIRA Contact Information</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li><strong>Phone:</strong> +255 22 211 5393</li>
                    <li><strong>Email:</strong> info@tira.go.tz</li>
                    <li><strong>Website:</strong> www.tira.go.tz</li>
                    <li><strong>Address:</strong> Dar es Salaam, Tanzania</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Emergency Numbers</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li><strong>Kuzuia uhalifu</strong>: 111</li>
                    <li><strong>Polisi</strong>: 112</li>
                    <li><strong>Takukuru</strong>: 113</li>
                    <li><strong>Zimamoto</strong>: 114</li>
                    <li><strong>Gari ya wagonjwa</strong>: 115</li>
                    <li><strong>Msaada kwa mtoto</strong>: 116</li>
                  </ul>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* FAQ and Support */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Troubleshooting & Support</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-gray-800">Common Issues:</h4>
                <ul className="text-sm text-gray-700 mt-2 space-y-1">
                  <li><strong>"No results found":</strong> Verify your search parameters and try different search methods</li>
                  <li><strong>"Connection Error":</strong> Check your internet connection or try again later</li>
                  <li><strong>"Expired Coverage":</strong> Contact your insurance company to renew your policy</li>
                </ul>
              </div>
              <div>
                <p className="text-sm text-gray-700">
                  <strong>Need Help?</strong> If you encounter technical issues with this verification tool, 
                  please contact TIRA directly or reach out to your insurance company for assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-gray-200 py-8 bg-white mt-16">
        <div className="container mx-auto px-4 md:px-6 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} denilagari. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
}

export default Insurance;

