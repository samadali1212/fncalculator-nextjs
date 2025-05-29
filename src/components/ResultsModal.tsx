
import React, { useState, useEffect } from 'react';
import { X, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface ResultsModalProps {
  show: boolean;
  data: any;
  onClose: () => void;
  searchType: string;
  searchQuery: string;
}

const ResultsModal: React.FC<ResultsModalProps> = ({
  show,
  data,
  onClose,
  searchType,
  searchQuery
}) => {
  const [activeTab, setActiveTab] = useState('pending');

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return <Badge variant="destructive" className="text-xs">Pending</Badge>;
      case 'paid':
        return <Badge variant="default" className="bg-green-600 text-xs">Paid</Badge>;
      default:
        return <Badge variant="secondary" className="text-xs">{status}</Badge>;
    }
  };

  const renderOffenceCard = (item: any, index: number) => {
    return (
      <Card key={index} className="mb-4">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-gray-600">#{item.reference || 'N/A'}</span>
                {getStatusBadge(item.status || 'Unknown')}
              </div>
              <h3 className="font-medium text-gray-900 mb-1">{item.offence || 'N/A'}</h3>
              <p className="text-sm text-gray-600">{item.location || 'N/A'}</p>
            </div>
            <div className="text-right">
              <div className="text-lg font-semibold text-gray-900">{item.penalty || 'N/A'}</div>
              <div className="text-sm text-gray-500">{item.issued_date || item.paydate || 'N/A'}</div>
            </div>
          </div>
          {(searchType !== 'vehicle' && item.vehicle) && (
            <div className="mt-2 text-sm text-gray-600">Vehicle: {item.vehicle}</div>
          )}
          {(searchType !== 'license' && (item.licence || item.license)) && (
            <div className="mt-1 text-sm text-gray-600">License: {item.licence || item.license}</div>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <Dialog open={show} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-xl">
            Search Results for {searchType.charAt(0).toUpperCase() + searchType.slice(1)}: {searchQuery}
          </DialogTitle>
        </DialogHeader>
        
        <div className="overflow-auto max-h-[calc(90vh-120px)]">
          {/* Tab Navigation */}
          <div className="flex gap-2 mb-6 border-b">
            <button
              onClick={() => setActiveTab('pending')}
              className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
                activeTab === 'pending'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Pending Offences
            </button>
            <button
              onClick={() => setActiveTab('status')}
              className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
                activeTab === 'status'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {searchType === 'vehicle' ? 'Inspection Status' : 'License Status'}
            </button>
          </div>

          {/* Content */}
          {activeTab === 'pending' && (
            <div>
              {data?.pending_transactions && data.pending_transactions.length > 0 ? (
                <div className="space-y-0">
                  {data.pending_transactions.map((item: any, index: number) => 
                    renderOffenceCard(item, index)
                  )}
                </div>
              ) : (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">No Pending Offences</h3>
                    <p className="text-gray-600 text-center">Great news! No pending offences found for this {searchType}.</p>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {activeTab === 'status' && (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <AlertCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Status Information</h3>
                <p className="text-gray-600 text-center">
                  {searchType === 'vehicle' 
                    ? 'Vehicle inspection status information is not available at this time.'
                    : 'License status information is not available at this time.'
                  }
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResultsModal;
