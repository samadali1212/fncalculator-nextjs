import React, { useState } from 'react';
import { Car, CreditCard, Receipt, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
      title: 'Vehicle',
      placeholder: 'Enter registration number (e.g., T359DTT)',
      description: 'Search by vehicle registration number'
    },
    {
      id: 'license',
      icon: CreditCard,
      title: 'License',
      placeholder: 'Enter license number (e.g., 4000453134)',
      description: 'Search by driving license number'
    },
    {
      id: 'reference',
      icon: Receipt,
      title: 'Reference',
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
    <div className="w-full">
      <Card className="border-none shadow-sm">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-xl font-semibold text-foreground flex items-center justify-center gap-2">
            {currentOption && <currentOption.icon size={24} className="text-primary" />}
            Search for Offences
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-10">
              {searchOptions.map((option) => {
                const IconComponent = option.icon;
                return (
                  <TabsTrigger
                    key={option.id}
                    value={option.id}
                    className="flex items-center gap-1 text-sm"
                  >
                    <IconComponent size={16} />
                    <span className="hidden sm:inline">{option.title}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {searchOptions.map((option) => (
              <TabsContent key={option.id} value={option.id} className="mt-4 space-y-4">
                <div className="space-y-3">
                  <Input
                    type="text"
                    placeholder={option.placeholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-11 w-full"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSearch();
                      }
                    }}
                  />
                  
                  <Button
                    onClick={handleSearch}
                    disabled={loading}
                    className="w-full h-11 font-medium"
                    size="lg"
                  >
                    <Search size={18} className="mr-2" />
                    Search
                  </Button>
                </div>

                {loading && (
                  <div className="py-4">
                    <LoadingSpinner />
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

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
