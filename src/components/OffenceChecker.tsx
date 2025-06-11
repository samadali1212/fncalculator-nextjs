
import React, { useState } from 'react';
import { Car, CreditCard, Receipt, Search, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import OffenceResults from './OffenceResults';
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
  const [searchResults, setSearchResults] = useState<any>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState<string>('');
  const [validationError, setValidationError] = useState<string>('');

  const searchOptions: SearchOption[] = [
    {
      id: 'vehicle',
      icon: Car,
      title: 'Vehicle',
      placeholder: 'Enter registration number (e.g., T123ABC)',
      description: 'Search by vehicle registration number'
    },
    {
      id: 'license',
      icon: CreditCard,
      title: 'License',
      placeholder: 'Enter license number (e.g., 4000123456)',
      description: 'Search by driving license number'
    },
    {
      id: 'reference',
      icon: Receipt,
      title: 'Reference',
      placeholder: 'Enter reference number (e.g., 9912345678903)',
      description: 'Search by offence reference number'
    }
  ];

  const validateSearch = (type: string, query: string): boolean => {
    if (!query.trim()) {
      setValidationError('Please enter a search term.');
      return false;
    }

    switch (type) {
      case 'vehicle':
        if (!/^[A-Za-z0-9]{7}$/.test(query)) {
          setValidationError('Please enter a valid 7-character vehicle registration number (e.g., T849EDY).');
          return false;
        }
        break;
      case 'license':
        if (!/^\d{10,}$/.test(query)) {
          setValidationError('Please enter a valid license number with at least 10 digits.');
          return false;
        }
        break;
      case 'reference':
        if (!/^\d{12,}$/.test(query)) {
          setValidationError('Please enter a valid reference number with at least 12 digits.');
          return false;
        }
        break;
    }
    return true;
  };

  const handleSearch = async () => {
    setValidationError('');
    if (!validateSearch(activeTab, searchQuery)) return;

    setLoading(true);
    setHasSearched(true);
    setError('');
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

      if (data && (data.pending_transactions || data.inspection_data || data.status === 'success')) {
        // Add search metadata to the response
        const responseWithMetadata = {
          ...data,
          searchType: activeTab,
          searchQuery: searchQuery
        };
        
        setSearchResults(responseWithMetadata);
      } else {
        setSearchResults(null);
      }
    } catch (error) {
      setLoading(false);
      console.error('Search error:', error);
      
      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        setError('Unable to connect to the TMS API. This could be due to CORS restrictions, network connectivity issues, or API server maintenance.');
      } else {
        setError(`An error occurred while searching: ${error.message}`);
      }
      setSearchResults(null);
    }
  };

  const handleInputChange = (value: string) => {
    setSearchQuery(value);
    if (validationError) {
      setValidationError('');
    }
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (validationError) {
      setValidationError('');
    }
  };

  const currentOption = searchOptions.find(option => option.id === activeTab);

  return (
    <div className="space-y-6">
      {/* Toggle Buttons */}
      <div className="flex gap-2">
        {searchOptions.map((option) => {
          const IconComponent = option.icon;
          return (
            <Button
              key={option.id}
              variant={activeTab === option.id ? "default" : "outline"}
              onClick={() => handleTabChange(option.id)}
              size="sm"
              className="flex-1 text-xs"
            >
              <IconComponent size={16} className="mr-1" />
              {option.title}
            </Button>
          );
        })}
      </div>
      
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <Input
          type="text"
          placeholder={currentOption?.placeholder || "Enter search term..."}
          className="pl-10"
          value={searchQuery}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
      </div>

      {/* Validation Error Alert */}
      {validationError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{validationError}</AlertDescription>
        </Alert>
      )}

      {/* Search Button */}
      <Button
        onClick={handleSearch}
        disabled={loading}
        className="w-full"
        size="lg"
      >
        <Search size={20} className="mr-2" />
        Search for Offences
      </Button>

      {/* Search Results */}
      {hasSearched && (
        <OffenceResults 
          results={searchResults} 
          loading={loading} 
          error={error}
          searchType={activeTab}
          searchQuery={searchQuery}
        />
      )}
    </div>
  );
};

export default OffenceChecker;
