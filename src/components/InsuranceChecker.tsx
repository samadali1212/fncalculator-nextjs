
import React, { useState } from 'react';
import { Shield, Search, FileText, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Swal from 'sweetalert2';
import InsuranceResultsModal from './InsuranceResultsModal';
import LoadingSpinner from './LoadingSpinner';

const InsuranceChecker = () => {
  const [formData, setFormData] = useState({
    coverNoteRef: '',
    registrationNumber: '',
    stickerNumber: '',
    chassisNumber: ''
  });
  const [loading, setLoading] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const validateForm = (): boolean => {
    const { coverNoteRef, registrationNumber, stickerNumber, chassisNumber } = formData;

    if (!coverNoteRef.trim() && !registrationNumber.trim() && !stickerNumber.trim() && !chassisNumber.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Input Required',
        text: 'Please fill in at least one field to search for insurance coverage.',
        confirmButtonColor: '#3b82f6'
      });
      return false;
    }

    // Validate Cover Note Reference if provided
    if (coverNoteRef && !/^[A-Za-z0-9]{6,}$/.test(coverNoteRef)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Cover Note Reference',
        text: 'Please enter a valid cover note reference number (at least 6 characters).',
        confirmButtonColor: '#3b82f6'
      });
      return false;
    }

    // Validate Registration Number if provided
    if (registrationNumber && !/^[A-Za-z0-9]{5,}$/.test(registrationNumber)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Registration Number',
        text: 'Please enter a valid vehicle registration number.',
        confirmButtonColor: '#3b82f6'
      });
      return false;
    }

    // Validate Sticker Number if provided
    if (stickerNumber && !/^[A-Za-z0-9]{6,}$/.test(stickerNumber)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Sticker Number',
        text: 'Please enter a valid insurance sticker number.',
        confirmButtonColor: '#3b82f6'
      });
      return false;
    }

    // Validate Chassis Number if provided
    if (chassisNumber && !/^[A-Za-z0-9]{10,}$/.test(chassisNumber)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Chassis Number',
        text: 'Please enter a valid chassis number (at least 10 characters).',
        confirmButtonColor: '#3b82f6'
      });
      return false;
    }

    return true;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value.toUpperCase()
    }));
  };

  const handleSearch = async () => {
    if (!validateForm()) return;

    setLoading(true);
    console.log('Searching for insurance coverage with:', formData);

    try {
      // Prepare request body with only non-empty fields
      const requestBody: any = {};
      
      if (formData.coverNoteRef) requestBody.coverNoteRef = formData.coverNoteRef;
      if (formData.registrationNumber) requestBody.registrationNumber = formData.registrationNumber;
      if (formData.stickerNumber) requestBody.stickerNumber = formData.stickerNumber;
      if (formData.chassisNumber) requestBody.chassisNumber = formData.chassisNumber;

      console.log('Request body:', requestBody);

      // Make API call to TIRA insurance verification endpoint
      const response = await fetch('https://tiramis.tira.go.tz/covernote/api/public/portal/verify', {
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

      if (data) {
        // Add search metadata to the response
        const responseWithMetadata = {
          ...data,
          searchData: formData
        };
        
        setModalData(responseWithMetadata);
        setModalVisible(true);
      } else {
        Swal.fire({
          icon: 'info',
          title: 'No Coverage Found',
          text: 'No insurance coverage information found for the provided details.',
          confirmButtonColor: '#3b82f6'
        });
      }
    } catch (error) {
      setLoading(false);
      console.error('Insurance search error:', error);
      
      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        Swal.fire({
          icon: 'error',
          title: 'Connection Error',
          html: `
            <p>Unable to connect to the TIRA insurance verification system. This could be due to:</p>
            <ul style="text-align: left; margin-top: 10px;">
              <li>• CORS restrictions from the external API</li>
              <li>• Network connectivity issues</li>
              <li>• TIRA system maintenance</li>
            </ul>
            <p style="margin-top: 15px;"><strong>Suggested Solutions:</strong></p>
            <ul style="text-align: left;">
              <li>• Use a backend proxy server</li>
              <li>• Install a CORS browser extension temporarily</li>
              <li>• Contact TIRA for API access permissions</li>
              <li>• Try again later</li>
            </ul>
          `,
          confirmButtonColor: '#3b82f6'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Verification Error',
          text: `An error occurred while checking insurance coverage: ${error.message}`,
          confirmButtonColor: '#3b82f6'
        });
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Form Header */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <Shield className="h-8 w-8 text-blue-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900">Insurance Coverage Verification</h2>
        </div>
        <p className="text-gray-600">
          Enter any of the following details to check insurance coverage status
        </p>
      </div>

      {/* Input Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Cover Note Reference */}
        <div className="space-y-2">
          <Label htmlFor="coverNoteRef" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Cover Note Reference Number
          </Label>
          <Input
            id="coverNoteRef"
            type="text"
            placeholder="Enter cover note reference (e.g., CN123456)"
            value={formData.coverNoteRef}
            onChange={(e) => handleInputChange('coverNoteRef', e.target.value)}
            className="uppercase"
          />
        </div>

        {/* Registration Number */}
        <div className="space-y-2">
          <Label htmlFor="registrationNumber" className="flex items-center gap-2">
            <Car className="h-4 w-4" />
            Vehicle Registration Number
          </Label>
          <Input
            id="registrationNumber"
            type="text"
            placeholder="Enter registration number (e.g., T123ABC)"
            value={formData.registrationNumber}
            onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
            className="uppercase"
          />
        </div>

        {/* Sticker Number */}
        <div className="space-y-2">
          <Label htmlFor="stickerNumber" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Insurance Sticker Number
          </Label>
          <Input
            id="stickerNumber"
            type="text"
            placeholder="Enter sticker number (e.g., ST123456)"
            value={formData.stickerNumber}
            onChange={(e) => handleInputChange('stickerNumber', e.target.value)}
            className="uppercase"
          />
        </div>

        {/* Chassis Number */}
        <div className="space-y-2">
          <Label htmlFor="chassisNumber" className="flex items-center gap-2">
            <Car className="h-4 w-4" />
            Chassis Number
          </Label>
          <Input
            id="chassisNumber"
            type="text"
            placeholder="Enter chassis number (e.g., CHASSIS123456)"
            value={formData.chassisNumber}
            onChange={(e) => handleInputChange('chassisNumber', e.target.value)}
            className="uppercase"
          />
        </div>
      </div>

      {/* Search Button */}
      <Button
        onClick={handleSearch}
        disabled={loading}
        className="w-full"
        size="lg"
      >
        <Search size={20} className="mr-2" />
        Check Insurance Coverage
      </Button>

      {loading && (
        <div className="mt-6">
          <LoadingSpinner />
        </div>
      )}

      <InsuranceResultsModal
        show={modalVisible}
        data={modalData}
        onClose={() => setModalVisible(false)}
      />
    </div>
  );
};

export default InsuranceChecker;
