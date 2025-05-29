
import React, { useState } from 'react';
import { Car, CreditCard, Receipt, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Swal from 'sweetalert2';
import ResultsModal from './ResultsModal';
import LoadingSpinner from './LoadingSpinner';

interface SearchOption {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  placeholder: string;
  description: string;
}

const OffenceChecker = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('vehicle');
  const [loading, setLoading] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const searchOptions: SearchOption[] = [
    {
      id: 'vehicle',
      icon: Car,
      title: 'Vehicle Registration',
      placeholder: 'Enter registration number (e.g., T359DTT)',
      description: 'Search by vehicle registration number'
    },
    {
      id: 'license',
      icon: CreditCard,
      title: 'Driving License',
      placeholder: 'Enter license number (e.g., 4000453134)',
      description: 'Search by driving license number'
    },
    {
      id: 'reference',
      icon: Receipt,
      title: 'Reference Number',
      placeholder: 'Enter reference number (e.g., 9910838966983)',
      description: 'Search by offence reference number'
    }
  ];

  const validateSearch = (type: string, query: string): boolean => {
    if (!query.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Input Required',
        text: 'Please enter a search term.',
        confirmButtonColor: '#3b82f6'
      });
      return false;
    }

    switch (type) {
      case 'vehicle':
        if (!/^[A-Za-z0-9]{7}$/.test(query)) {
          Swal.fire({
            icon: 'error',
            title: 'Invalid Vehicle Registration',
            text: 'Please enter a valid 7-character vehicle registration number (e.g., T849EDY).',
            confirmButtonColor: '#3b82f6'
          });
          return false;
        }
        break;
      case 'license':
        if (!/^\d{10,}$/.test(query)) {
          Swal.fire({
            icon: 'error',
            title: 'Invalid License Number',
            text: 'Please enter a valid license number with at least 10 digits.',
            confirmButtonColor: '#3b82f6'
          });
          return false;
        }
        break;
      case 'reference':
        if (!/^\d{12,}$/.test(query)) {
          Swal.fire({
            icon: 'error',
            title: 'Invalid Reference Number',
            text: 'Please enter a valid reference number with at least 12 digits.',
            confirmButtonColor: '#3b82f6'
          });
          return false;
        }
        break;
    }
    return true;
  };

  const handleSearch = async () => {
    if (!validateSearch(activeTab, searchQuery)) return;

    setLoading(true);
    console.log(`Searching for ${activeTab}: ${searchQuery}`);

    try {
      // Create the request body with the correct parameter name for the API
      let requestBody: any = {};
      
      if (activeTab === 'vehicle') {
        requestBody = { vehicle: searchQuery.toUpperCase() };
      } else if (activeTab === 'license') {
        requestBody = { license: searchQuery.toUpperCase() };
      } else if (activeTab === 'reference') {
        requestBody = { reference: searchQuery.toUpperCase() };
      }

      console.log('Request body:', requestBody);

      // Make real API call to the TMS API
      const response = await fetch('https://tms.tpf.go.tz/api/OffenceCheck', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.log('Error response:', errorText);
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }

      const data = await response.json();
      console.log('API Response:', data);
      
      setLoading(false);

      if (data && (data.pending_transactions || data.status === 'success')) {
        // Add search metadata to the response
        const responseWithMetadata = {
          ...data,
          searchType: activeTab,
          searchQuery: searchQuery
        };
        
        setModalData(responseWithMetadata);
        setModalVisible(true);
      } else {
        Swal.fire({
          icon: 'info',
          title: 'No Results Found',
          text: 'No offences found for the provided search term.',
          confirmButtonColor: '#3b82f6'
        });
      }
    } catch (error) {
      setLoading(false);
      console.error('Search error:', error);
      
      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        Swal.fire({
          icon: 'error',
          title: 'Connection Error',
          html: `
            <p>Unable to connect to the TMS API. This could be due to:</p>
            <ul style="text-align: left; margin-top: 10px;">
              <li>• CORS restrictions from the external API</li>
              <li>• Network connectivity issues</li>
              <li>• API server maintenance</li>
            </ul>
            <p style="margin-top: 15px;"><strong>Suggested Solutions:</strong></p>
            <ul style="text-align: left;">
              <li>• Use a backend proxy server</li>
              <li>• Install a CORS browser extension temporarily</li>
              <li>• Contact TMS for API access permissions</li>
              <li>• Try again later</li>
            </ul>
          `,
          confirmButtonColor: '#3b82f6'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'API Error',
          text: `An error occurred while searching: ${error.message}`,
          confirmButtonColor: '#3b82f6'
        });
      }
    }
  };

  const currentOption = searchOptions.find(option => option.id === activeTab);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-black">
            {searchOptions.map((option) => {
              const IconComponent = option.icon;
              return (
                <TabsTrigger
                  key={option.id}
                  value={option.id}
                  className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-black text-white"
                >
                  <IconComponent size={16} />
                  <span className="hidden sm:inline">{option.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {searchOptions.map((option) => (
            <TabsContent key={option.id} value={option.id} className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {option.title} Search
                </h3>
                <p className="text-gray-600">
                  {option.description}
                </p>
              </div>

              <div className="max-w-2xl mx-auto space-y-4">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder={option.placeholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-12 px-4 py-3 border border-gray-300 rounded-md text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSearch();
                      }
                    }}
                  />
                </div>
                
                <Button
                  onClick={handleSearch}
                  disabled={loading}
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors"
                >
                  <Search size={20} className="mr-2" />
                  Search for Offences
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {loading && (
          <div className="mt-8">
            <LoadingSpinner />
          </div>
        )}
      </div>

      {/* Disclaimer Section */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Disclaimer</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  This website is not affiliated with the Tanzania Police Force or any government agency. 
                  We are an independent service that helps users check for pending traffic offences using 
                  publicly available data from the Tanzania Transport Management System (TMS).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ResultsModal
        show={modalVisible}
        data={modalData}
        onClose={() => setModalVisible(false)}
        searchType={activeTab}
        searchQuery={searchQuery}
      />
    </div>
  );
};

export default OffenceChecker;
