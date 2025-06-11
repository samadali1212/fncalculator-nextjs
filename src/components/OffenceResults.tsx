import React, { useState } from 'react';
import { Shield, CheckCircle, XCircle, Calendar, Car, AlertTriangle, Building, FileText, CreditCard, Hash, Clock } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Table, TableBody, TableRow, TableCell } from '@/components/ui/table';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

interface OffenceResultsProps {
  results: any;
  loading: boolean;
  error?: string;
  searchType: string;
  searchQuery: string;
}

const OffenceResults: React.FC<OffenceResultsProps> = ({ results, loading, error, searchType, searchQuery }) => {
  if (loading) {
    return (
      <div className="mt-8">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-8">
        <Card className="max-w-md mx-auto text-center">
          <CardContent className="pt-8 pb-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-50 flex items-center justify-center">
              <XCircle className="h-8 w-8 text-red-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Search Failed</h3>
            <p className="text-gray-600 text-sm mb-4">{error}</p>
            <p className="text-xs text-gray-500">Please check your search parameters and try again.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!results || (!results.pending_transactions && !results.inspection_data && !results.license_status && !results.inspection_status)) {
    return (
      <div className="mt-8">
        <Card className="max-w-md mx-auto text-center">
          <CardContent className="pt-8 pb-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-50 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Results Found</h3>
            <p className="text-gray-600 text-sm mb-4">No information found for the provided search criteria.</p>
            <p className="text-xs text-gray-500">Please verify your search parameters and try again.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-TZ', {
      style: 'currency',
      currency: 'TZS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const getSearchTypeIcon = () => {
    switch (searchType) {
      case 'vehicle':
        return <Car className="h-5 w-5 sm:h-6 sm:w-6 text-white" />;
      case 'license':
        return <CreditCard className="h-5 w-5 sm:h-6 sm:w-6 text-white" />;
      case 'reference':
        return <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-white" />;
      default:
        return <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white" />;
    }
  };

  const getSearchTypeLabel = () => {
    switch (searchType) {
      case 'vehicle':
        return 'Vehicle Registration';
      case 'license':
        return 'License Number';
      case 'reference':
        return 'Reference Number';
      default:
        return 'Search Result';
    }
  };

  const getSecondTabLabel = () => {
    switch (searchType) {
      case 'license':
        return 'License Status';
      case 'vehicle':
        return 'Inspection Status';
      default:
        return 'Additional Info';
    }
  };

  const hasPendingOffences = results.pending_transactions && results.pending_transactions.length > 0;
  const hasSecondaryData = (searchType === 'license' && results.license_status) || 
                          (searchType === 'vehicle' && (results.inspection_data || results.inspection_status)) ||
                          (searchType === 'reference' && results.inspection_data);

  const renderPendingOffences = () => (
    <div className="space-y-6">
      {hasPendingOffences ? (
        <Card className="overflow-hidden shadow-lg">
          <CardHeader className="bg-gradient-to-r from-red-50 to-red-100/50 border-b border-red-200/50">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">Pending Offences Found</h3>
                  <p className="text-xs sm:text-sm text-gray-600 truncate">
                    {results.pending_transactions.length} pending fine(s) for {getSearchTypeLabel()}: {searchQuery}
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 self-start sm:self-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-200">
                  <AlertTriangle className="h-3 w-3 flex-shrink-0" />
                  <span>Payment Required</span>
                </div>
              </div>
            </div>
            
            {results.totalPendingAmount && (
              <div className="mt-4 pt-4 border-t border-red-200/50">
                <div className="flex items-center gap-3">
                  <div>
                    <h4 className="text-sm font-semibold text-red-900">Total Pending Amount</h4>
                    <p className="text-xl font-bold text-red-700">
                      {formatCurrency(Number(results.totalPendingAmount))}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardHeader>

          <CardContent className="p-0">
            <div className="bg-white rounded-lg overflow-hidden">
              <Table>
                <TableBody>
                  {results.pending_transactions.map((transaction: any, index: number) => (
                    <React.Fragment key={index}>
                      <TableRow className="bg-gray-50">
                        <TableCell colSpan={2} className="font-semibold text-gray-900 py-4 px-6">
                          Offence #{index + 1}
                        </TableCell>
                      </TableRow>
                      
                      {Object.entries(transaction).map(([key, value]) => {
                        if (value === null || value === undefined) return null;
                        
                        const displayKey = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                        
                        let displayValue = String(value);
                        if (key.includes('date') && value) {
                          try {
                            displayValue = formatDate(String(value));
                          } catch (e) {
                            displayValue = String(value);
                          }
                        } else if ((key.includes('amount') || key.includes('charge') || key.includes('penalty')) && value) {
                          try {
                            displayValue = formatCurrency(Number(value));
                          } catch (e) {
                            displayValue = String(value);
                          }
                        }
                        
                        let icon;
                        if (key.includes('reference')) icon = <Hash className="h-4 w-4 text-red-600" />;
                        else if (key.includes('date')) icon = <Calendar className="h-4 w-4 text-red-600" />;
                        else if (key.includes('amount') || key.includes('charge') || key.includes('penalty')) icon = <CreditCard className="h-4 w-4 text-red-600" />;
                        else if (key.includes('vehicle')) icon = <Car className="h-4 w-4 text-red-600" />;
                        else if (key.includes('location')) icon = <Building className="h-4 w-4 text-red-600" />;
                        else if (key.includes('operator')) icon = <Shield className="h-4 w-4 text-red-600" />;
                        else icon = <FileText className="h-4 w-4 text-red-600" />;
                        
                        return (
                          <TableRow key={`${index}-${key}`} className="hover:bg-gray-50/50 transition-colors">
                            <TableCell className="font-medium text-gray-700 py-4 px-6 w-1/3">
                              <div className="flex items-center gap-2">
                                {icon}
                                {displayKey}
                              </div>
                            </TableCell>
                            <TableCell className={`text-gray-900 py-4 px-6 ${
                              (key.includes('amount') || key.includes('charge') || key.includes('penalty')) 
                                ? 'font-semibold text-red-600' 
                                : key === 'status' && value === 'PENDING' 
                                  ? 'font-medium' 
                                  : ''
                            }`}>
                              {key === 'status' ? (
                                <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-200">
                                  {displayValue}
                                </span>
                              ) : (
                                displayValue
                              )}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                      
                      {index < results.pending_transactions.length - 1 && (
                        <TableRow>
                          <TableCell colSpan={2} className="border-b-2 border-gray-200"></TableCell>
                        </TableRow>
                      )}
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="max-w-md mx-auto text-center">
          <CardContent className="pt-8 pb-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-50 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Pending Offences</h3>
            <p className="text-gray-600 text-sm mb-4">No pending offences found for the provided search criteria.</p>
            <p className="text-xs text-gray-500">This is good news! Your record appears to be clean.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );

  const renderSecondaryData = () => {
    if (searchType === 'license' && results.license_status) {
      return (
        <Card className="overflow-hidden shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100/50 border-b border-blue-200/50">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                <CreditCard className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">License Status</h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Status for License: {searchQuery}
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                <CreditCard className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">License Status</p>
                <p className="text-lg font-semibold text-blue-600">{results.license_status}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      );
    }

    if (searchType === 'vehicle' && (results.inspection_data || results.inspection_status)) {
      return (
        <div className="space-y-6">
          {results.inspection_status && (
            <Card className="overflow-hidden shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100/50 border-b border-blue-200/50">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Car className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Inspection Status</h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Status for Vehicle: {searchQuery}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Car className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Inspection Status</p>
                    <p className="text-lg font-semibold text-blue-600">{results.inspection_status}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {results.inspection_data && results.inspection_data.length > 0 && (
            <Card className="overflow-hidden shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100/50 border-b border-blue-200/50">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <Car className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">Vehicle Inspection Data</h3>
                      <p className="text-xs sm:text-sm text-gray-600 truncate">
                        Detailed inspection information for Vehicle: {searchQuery}
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <div className="bg-white rounded-lg overflow-hidden">
                  <Table>
                    <TableBody>
                      {results.inspection_data.map((inspection: any, inspectionIndex: number) => (
                        <React.Fragment key={inspectionIndex}>
                          <TableRow className="bg-gray-50">
                            <TableCell colSpan={2} className="font-semibold text-gray-900 py-4 px-6">
                              Vehicle Inspection Report #{inspectionIndex + 1}
                            </TableCell>
                          </TableRow>
                          {Object.entries(inspection).map(([key, value], index) => (
                            <TableRow key={`${inspectionIndex}-${index}`} className="hover:bg-gray-50/50 transition-colors">
                              <TableCell className="font-medium text-gray-700 py-4 px-6 w-1/3">
                                <div className="flex items-center gap-2">
                                  <FileText className="h-4 w-4 text-blue-600" />
                                  {key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                </div>
                              </TableCell>
                              <TableCell className="text-gray-900 py-4 px-6">
                                {value ? String(value) : 'Not Available'}
                              </TableCell>
                            </TableRow>
                          ))}
                          {inspectionIndex < results.inspection_data.length - 1 && (
                            <TableRow>
                              <TableCell colSpan={2} className="border-b-2 border-gray-200"></TableCell>
                            </TableRow>
                          )}
                        </React.Fragment>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      );
    }

    return (
      <Card className="max-w-md mx-auto text-center">
        <CardContent className="pt-8 pb-6">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center">
            <FileText className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Additional Data</h3>
          <p className="text-gray-600 text-sm mb-4">No additional information available for this search.</p>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="mt-8 space-y-6">
      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="pending" className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            Pending Offences
          </TabsTrigger>
          <TabsTrigger value="secondary" className="flex items-center gap-2">
            {searchType === 'license' ? <CreditCard className="h-4 w-4" /> : <Car className="h-4 w-4" />}
            {getSecondTabLabel()}
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="pending" className="mt-6">
          {renderPendingOffences()}
        </TabsContent>
        
        <TabsContent value="secondary" className="mt-6">
          {renderSecondaryData()}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OffenceResults;
