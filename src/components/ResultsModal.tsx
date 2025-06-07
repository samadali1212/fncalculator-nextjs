
import React, { useState, useEffect } from 'react';
import { X, AlertCircle, CheckCircle2, CreditCard, Phone, Banknote, FileText, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

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
      case 'pass':
        return <Badge variant="default" className="bg-green-600 text-xs">Pass</Badge>;
      case 'fail':
        return <Badge variant="destructive" className="text-xs">Fail</Badge>;
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
              <div className="text-lg font-semibold text-gray-900">
                TZS {item.penalty || item.charge || 'N/A'}
              </div>
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

  const renderInspectionCard = (item: any, index: number) => {
    return (
      <Card key={index} className="mb-4">
        <CardContent className="p-4">
          <div className="flex flex-col gap-4">
            {/* Header with VIR and Status */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-gray-600">VIR: {item.vir_no || 'N/A'}</span>
                  {getStatusBadge(item.finalresult || 'Unknown')}
                </div>
                <div className="text-sm text-gray-600">
                  <div>Region: {item.region || 'N/A'} - {item.district || 'N/A'}</div>
                  <div>Valid Until: {item.valid_untill || 'N/A'}</div>
                  <div>Inspector: {item.inspector || 'N/A'}</div>
                </div>
              </div>
            </div>

            {/* Inspection Details */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
              <div className="flex justify-between">
                <span>Speed Test:</span>
                <span className={item.speed_test === 'Pass' ? 'text-green-600' : 'text-red-600'}>
                  {item.speed_test || 'N/A'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Electrical:</span>
                <span className={item.electrical_system === 'Pass' ? 'text-green-600' : 'text-red-600'}>
                  {item.electrical_system || 'N/A'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Brakes:</span>
                <span className={item.braking_system === 'Pass' ? 'text-green-600' : 'text-red-600'}>
                  {item.braking_system || 'N/A'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Wheels:</span>
                <span className={item.wheels === 'Pass' ? 'text-green-600' : 'text-red-600'}>
                  {item.wheels || 'N/A'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Suspension:</span>
                <span className={item.suspension === 'Pass' ? 'text-green-600' : 'text-red-600'}>
                  {item.suspension || 'N/A'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Steering:</span>
                <span className={item.steering === 'Pass' ? 'text-green-600' : 'text-red-600'}>
                  {item.steering || 'N/A'}
                </span>
              </div>
            </div>

            {/* Remarks */}
            {item.remarks && (
              <div className="mt-3">
                <h4 className="font-medium text-gray-900 mb-2">Inspection Remarks:</h4>
                <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded whitespace-pre-line">
                  {item.remarks}
                </div>
              </div>
            )}

            {/* Driver Info */}
            {item.driver_name && (
              <div className="mt-2 text-sm text-gray-600">
                <div>Driver: {item.driver_name}</div>
                {item.licence && <div>License: {item.licence}</div>}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  const hasPendingOffences = data?.pending_transactions && data.pending_transactions.length > 0;
  const hasInspectionData = data?.inspection_data && data.inspection_data.length > 0;

  // Determine the correct tab label for inspection based on search type
  const getInspectionTabLabel = () => {
    if (searchType === 'license') {
      return 'License Status';
    }
    return searchType === 'vehicle' ? 'Inspection Status' : 'Vehicle Inspection';
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
            {hasPendingOffences && (
              <button
                onClick={() => setActiveTab('payment')}
                className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
                  activeTab === 'payment'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                How to Pay
              </button>
            )}
            <button
              onClick={() => setActiveTab('inspection')}
              className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
                activeTab === 'inspection'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {getInspectionTabLabel()}
            </button>
          </div>

          {/* Content */}
          {activeTab === 'pending' && (
            <div>
              {hasPendingOffences ? (
                <>
                  <div className="space-y-0">
                    {data.pending_transactions.map((item: any, index: number) => 
                      renderOffenceCard(item, index)
                    )}
                  </div>
                  
                  {/* Quick Payment Reminder */}
                  <Card className="mt-6 bg-orange-50 border-orange-200">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                          <CreditCard className="w-5 h-5 text-orange-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-orange-800">Payment Required</h4>
                          <p className="text-sm text-orange-700">
                            You have pending fines that need to be paid. Click the "How to Pay" tab above for detailed payment instructions.
                          </p>
                        </div>
                        <Button 
                          onClick={() => setActiveTab('payment')}
                          size="sm"
                          className="bg-orange-600 hover:bg-orange-700"
                        >
                          Payment Guide
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </>
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

          {activeTab === 'payment' && hasPendingOffences && (
            <div className="space-y-6">
              {/* Mobile Money Payment Methods */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-blue-600" />
                    Mobile Money Payment Methods
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* M-Pesa */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Banknote className="h-4 w-4 text-green-600" />
                      M-Pesa (Vodacom)
                    </h4>
                    <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside bg-gray-50 p-3 rounded">
                      <li>Dial <code className="bg-white px-1 rounded">*150*00#</code></li>
                      <li>Select <strong>Pay with M-Pesa</strong></li>
                      <li>Choose <strong>Pay Bills</strong></li>
                      <li>Select <strong>Traffic Fines</strong></li>
                      <li>Enter the reference (control) number for the fine</li>
                      <li>Input the fine amount</li>
                      <li>Enter your PIN and confirm the payment</li>
                    </ol>
                  </div>

                  {/* Airtel Money */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Banknote className="h-4 w-4 text-red-600" />
                      Airtel Money
                    </h4>
                    <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside bg-gray-50 p-3 rounded">
                      <li>Dial <code className="bg-white px-1 rounded">*150*60#</code></li>
                      <li>Select <strong>Pay Bill</strong></li>
                      <li>Choose <strong>Traffic Fines</strong></li>
                      <li>Enter the fine amount and reference (control) number</li>
                      <li>Input your PIN and confirm</li>
                    </ol>
                  </div>

                  {/* Tigo Pesa */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Banknote className="h-4 w-4 text-blue-600" />
                      Tigo Pesa / Mixx by Yas
                    </h4>
                    <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside bg-gray-50 p-3 rounded">
                      <li>Dial <code className="bg-white px-1 rounded">*150*01#</code></li>
                      <li>Select <strong>Pay Bill</strong></li>
                      <li>Choose <strong>Traffic Fines</strong></li>
                      <li>Enter the fine amount and reference (control) number</li>
                      <li>Input your PIN and confirm</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>

              {/* Other Payment Methods */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-purple-600" />
                    Other Payment Methods
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li><strong>Bank Deposits:</strong> Visit participating banks with your reference number</li>
                    <li><strong>Online:</strong> Use government portals like GePG when available</li>
                    <li><strong>In Person:</strong> Visit designated police stations or revenue authority offices</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Important Notes */}
              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-yellow-800 mb-2">Important Notes</h4>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• Always use the exact reference number shown on your fine</li>
                        <li>• Keep your payment receipt as proof of payment</li>
                        <li>• Payment may take up to 24 hours to reflect in the system</li>
                        <li>• Not paying fines on time may result in increased penalties</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'inspection' && (
            <div>
              {hasInspectionData ? (
                <div className="space-y-0">
                  {data.inspection_data.map((item: any, index: number) => 
                    renderInspectionCard(item, index)
                  )}
                </div>
              ) : (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <FileText className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {searchType === 'license' ? 'No License Data' : 'No Inspection Data'}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {searchType === 'license' 
                        ? 'No license information found for this license number.'
                        : `No vehicle inspection information found for this ${searchType}.`
                      }
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResultsModal;
