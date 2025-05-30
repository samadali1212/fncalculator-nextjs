
import React, { useState } from 'react';
import { X, Shield, AlertCircle, CheckCircle2, Car, FileText, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface InsuranceResultsModalProps {
  show: boolean;
  data: any;
  onClose: () => void;
}

const InsuranceResultsModal: React.FC<InsuranceResultsModalProps> = ({
  show,
  data,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState('coverage');

  const getStatusBadge = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'active':
      case 'valid':
        return <Badge variant="default" className="bg-green-600 text-xs">Active</Badge>;
      case 'expired':
        return <Badge variant="destructive" className="text-xs">Expired</Badge>;
      case 'suspended':
        return <Badge variant="secondary" className="bg-yellow-600 text-xs">Suspended</Badge>;
      default:
        return <Badge variant="secondary" className="text-xs">{status || 'Unknown'}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    try {
      return new Date(dateString).toLocaleDateString('en-GB');
    } catch {
      return dateString;
    }
  };

  const renderCoverageDetails = () => {
    if (!data) return null;

    return (
      <div className="space-y-4">
        {/* Coverage Status Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              Insurance Coverage Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Coverage Status:</span>
              {getStatusBadge(data.status || data.coverageStatus)}
            </div>
            
            {data.policyNumber && (
              <div className="flex items-center justify-between">
                <span className="font-medium">Policy Number:</span>
                <span className="text-gray-700">{data.policyNumber}</span>
              </div>
            )}

            {data.coverNoteNumber && (
              <div className="flex items-center justify-between">
                <span className="font-medium">Cover Note Number:</span>
                <span className="text-gray-700">{data.coverNoteNumber}</span>
              </div>
            )}

            {data.insuranceCompany && (
              <div className="flex items-center justify-between">
                <span className="font-medium">Insurance Company:</span>
                <span className="text-gray-700">{data.insuranceCompany}</span>
              </div>
            )}

            {data.startDate && (
              <div className="flex items-center justify-between">
                <span className="font-medium flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Start Date:
                </span>
                <span className="text-gray-700">{formatDate(data.startDate)}</span>
              </div>
            )}

            {data.endDate && (
              <div className="flex items-center justify-between">
                <span className="font-medium flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  End Date:
                </span>
                <span className="text-gray-700">{formatDate(data.endDate)}</span>
              </div>
            )}

            {data.premiumAmount && (
              <div className="flex items-center justify-between">
                <span className="font-medium">Premium Amount:</span>
                <span className="text-gray-700">{data.premiumAmount} TZS</span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Vehicle Information Card */}
        {(data.vehicleDetails || data.registrationNumber || data.chassisNumber) && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="h-5 w-5 text-blue-600" />
                Vehicle Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {data.registrationNumber && (
                <div className="flex items-center justify-between">
                  <span className="font-medium">Registration Number:</span>
                  <span className="text-gray-700">{data.registrationNumber}</span>
                </div>
              )}

              {data.chassisNumber && (
                <div className="flex items-center justify-between">
                  <span className="font-medium">Chassis Number:</span>
                  <span className="text-gray-700">{data.chassisNumber}</span>
                </div>
              )}

              {data.vehicleType && (
                <div className="flex items-center justify-between">
                  <span className="font-medium">Vehicle Type:</span>
                  <span className="text-gray-700">{data.vehicleType}</span>
                </div>
              )}

              {data.vehicleMake && (
                <div className="flex items-center justify-between">
                  <span className="font-medium">Make:</span>
                  <span className="text-gray-700">{data.vehicleMake}</span>
                </div>
              )}

              {data.vehicleModel && (
                <div className="flex items-center justify-between">
                  <span className="font-medium">Model:</span>
                  <span className="text-gray-700">{data.vehicleModel}</span>
                </div>
              )}

              {data.yearOfManufacture && (
                <div className="flex items-center justify-between">
                  <span className="font-medium">Year:</span>
                  <span className="text-gray-700">{data.yearOfManufacture}</span>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    );
  };

  const renderSearchDetails = () => {
    if (!data?.searchData) return null;

    const searchFields = [
      { key: 'coverNoteRef', label: 'Cover Note Reference', icon: FileText },
      { key: 'registrationNumber', label: 'Registration Number', icon: Car },
      { key: 'stickerNumber', label: 'Sticker Number', icon: Shield },
      { key: 'chassisNumber', label: 'Chassis Number', icon: Car }
    ];

    const usedFields = searchFields.filter(field => data.searchData[field.key]);

    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-600" />
            Search Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {usedFields.map(field => {
            const IconComponent = field.icon;
            return (
              <div key={field.key} className="flex items-center justify-between">
                <span className="font-medium flex items-center gap-2">
                  <IconComponent className="h-4 w-4" />
                  {field.label}:
                </span>
                <span className="text-gray-700">{data.searchData[field.key]}</span>
              </div>
            );
          })}
        </CardContent>
      </Card>
    );
  };

  if (!data) return null;

  return (
    <Dialog open={show} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-xl">Insurance Coverage Verification Results</DialogTitle>
        </DialogHeader>
        
        <div className="overflow-auto max-h-[calc(90vh-120px)]">
          {/* Tab Navigation */}
          <div className="flex gap-2 mb-6 border-b">
            <button
              onClick={() => setActiveTab('coverage')}
              className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
                activeTab === 'coverage'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Coverage Details
            </button>
            <button
              onClick={() => setActiveTab('search')}
              className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
                activeTab === 'search'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Search Information
            </button>
          </div>

          {/* Content */}
          {activeTab === 'coverage' && renderCoverageDetails()}
          {activeTab === 'search' && renderSearchDetails()}

          {/* No Coverage Found Message */}
          {!data.status && !data.coverageStatus && !data.policyNumber && (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <AlertCircle className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">No Coverage Information Found</h3>
                <p className="text-gray-600 text-center">
                  No insurance coverage information could be found for the provided details. 
                  Please verify your information and try again.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InsuranceResultsModal;
