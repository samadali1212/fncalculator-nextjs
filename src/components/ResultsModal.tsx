
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

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

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (show) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [show, onClose]);

  if (!show) return null;

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return <Badge variant="destructive">Pending</Badge>;
      case 'paid':
        return <Badge variant="default" className="bg-green-600">Paid</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getTableHeaders = () => {
    const baseHeaders = ['#', 'Reference', 'Location', 'Offence', 'Charge', 'Penalty', 'Status', 'Date'];
    
    if (searchType === 'vehicle') {
      return ['#', 'Reference', 'License', 'Location', 'Offence', 'Charge', 'Penalty', 'Status', 'Issued Date'];
    } else if (searchType === 'license') {
      return ['#', 'Reference', 'Vehicle', 'Location', 'Offence', 'Charge', 'Penalty', 'Status', 'Issued Date'];
    } else {
      return ['#', 'Vehicle', 'License', 'Location', 'Offence', 'Charge', 'Penalty', 'Status', 'Issued Date'];
    }
  };

  const renderTableRow = (item: any, index: number) => {
    const commonData = [
      index + 1,
      item.reference || 'N/A',
      item.location || 'N/A',
      item.offence || 'N/A',
      item.charge || 'N/A',
      item.penalty || 'N/A',
      getStatusBadge(item.status || 'Unknown'),
      item.issued_date || item.paydate || 'N/A'
    ];

    if (searchType === 'vehicle') {
      return [
        index + 1,
        item.reference || 'N/A',
        item.licence || 'N/A',
        item.location || 'N/A',
        item.offence || 'N/A',
        item.charge || 'N/A',
        item.penalty || 'N/A',
        getStatusBadge(item.status || 'Unknown'),
        item.issued_date || item.paydate || 'N/A'
      ];
    } else if (searchType === 'license') {
      return [
        index + 1,
        item.reference || 'N/A',
        item.vehicle || 'N/A',
        item.location || 'N/A',
        item.offence || 'N/A',
        item.charge || 'N/A',
        item.penalty || 'N/A',
        getStatusBadge(item.status || 'Unknown'),
        item.issued_date || item.paydate || 'N/A'
      ];
    } else {
      return [
        index + 1,
        item.vehicle || 'N/A',
        item.licence || 'N/A',
        item.location || 'N/A',
        item.offence || 'N/A',
        item.charge || 'N/A',
        item.penalty || 'N/A',
        getStatusBadge(item.status || 'Unknown'),
        item.issued_date || item.paydate || 'N/A'
      ];
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-6xl max-h-[90vh] overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex flex-row items-center justify-between">
          <CardTitle className="text-xl">
            Search Results for {searchType.charAt(0).toUpperCase() + searchType.slice(1)}: {searchQuery}
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-white hover:bg-white/20"
          >
            <X size={20} />
          </Button>
        </CardHeader>
        
        <CardContent className="p-6 overflow-auto max-h-[calc(90vh-120px)]">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="pending">Pending Offences</TabsTrigger>
              <TabsTrigger value="status">
                {searchType === 'vehicle' ? 'Inspection Status' : 'License Status'}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="pending">
              {data?.pending_transactions && data.pending_transactions.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-gray-50">
                        {getTableHeaders().map((header, index) => (
                          <th key={index} className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data.pending_transactions.map((item: any, index: number) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                          {renderTableRow(item, index).map((cell, i) => (
                            <td key={i} className="border border-gray-200 px-4 py-3 text-sm">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">No Pending Offences</h3>
                  <p className="text-gray-600">Great news! No pending offences found for this {searchType}.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="status">
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Status Information</h3>
                <p className="text-gray-600">
                  {searchType === 'vehicle' 
                    ? 'Vehicle inspection status information is not available at this time.'
                    : 'License status information is not available at this time.'
                  }
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultsModal;
