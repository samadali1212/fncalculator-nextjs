
import React, { useState } from 'react';
import { Search, Car, FileText, Hash, AlertCircle, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchFormProps {
  onSearch: (data: SearchData) => void;
  loading: boolean;
}

export interface SearchData {
  searchType: 'policy' | 'vehicle' | 'sticker' | 'chassis';
  searchParam: string;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, loading }) => {
  const [searchType, setSearchType] = useState<'policy' | 'vehicle' | 'sticker' | 'chassis'>('vehicle');
  const [searchParam, setSearchParam] = useState('');
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!searchParam.trim()) {
      setError('Please enter a search value');
      return false;
    }
    
    if (searchType === 'vehicle' && searchParam.length < 3) {
      setError('Vehicle registration must be at least 3 characters');
      return false;
    }
    
    if (searchType === 'policy' && searchParam.length < 5) {
      setError('Policy number must be at least 5 characters');
      return false;
    }
    
    if (searchType === 'sticker' && searchParam.length < 5) {
      setError('Sticker number must be at least 5 characters');
      return false;
    }

    if (searchType === 'chassis' && searchParam.length < 8) {
      setError('Chassis number must be at least 8 characters');
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (validateForm()) {
      onSearch({
        searchType,
        searchParam: searchParam.trim().toUpperCase()
      });
    }
  };

  const handleInputChange = (value: string) => {
    setSearchParam(value);
    if (error) {
      setError('');
    }
  };

  const getPlaceholder = () => {
    switch (searchType) {
      case 'policy':
        return 'Cover Note Reference Number';
      case 'vehicle':
        return 'Enter Vehicle Registration (e.g., T123ABC)';
      case 'sticker':
        return 'Enter Sticker Number';
      case 'chassis':
        return 'Enter Chassis Number (e.g., JN1AZ4EH7DM123456)';
      default:
        return 'Enter Search Value';
    }
  };

  const searchOptions = [
    {
      id: 'vehicle' as const,
      icon: Car,
      title: 'Registration Number',
      description: 'Search by registration number'
    },
    {
      id: 'policy' as const,
      icon: FileText,
      title: 'Cover Note Reference',
      description: 'Search by policy number'
    },
    {
      id: 'sticker' as const,
      icon: Hash,
      title: 'Sticker Number',
      description: 'Search by sticker ID'
    },
    {
      id: 'chassis' as const,
      icon: Wrench,
      title: 'Chassis Number',
      description: 'Search by chassis number'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Toggle Buttons - Responsive Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {searchOptions.map((option) => {
          const IconComponent = option.icon;
          return (
            <Button
              key={option.id}
              variant={searchType === option.id ? "default" : "outline"}
              onClick={() => setSearchType(option.id)}
              size="sm"
              className="text-xs"
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
          placeholder={getPlaceholder()}
          className="pl-10"
          value={searchParam}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSubmit(e);
            }
          }}
        />
        {error && (
          <div className="flex items-center text-red-600 text-sm mt-2">
            <AlertCircle className="h-4 w-4 mr-1" />
            {error}
          </div>
        )}
      </div>

      {/* Search Button */}
      <Button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full"
        size="lg"
      >
        <Search size={20} className="mr-2" />
        {loading ? 'Verifying...' : 'Verify Insurance'}
      </Button>
    </div>
  );
};

export default SearchForm;
