
import React from 'react';
import { Shield, CheckCircle, XCircle, Calendar, Car, AlertTriangle, Building, FileText, CreditCard, Hash, Clock } from 'lucide-react';
import { CoverNoteData } from '../services/tiraApi';
import LoadingSpinner from './LoadingSpinner';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Table, TableBody, TableRow, TableCell } from '@/components/ui/table';

interface SearchResultsProps {
  results: CoverNoteData[];
  loading: boolean;
  error?: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, loading, error }) => {
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Verification Failed</h3>
            <p className="text-gray-600 text-sm mb-4">{error}</p>
            <p className="text-xs text-gray-500">Please check your search parameters and try again.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="mt-8">
        <Card className="max-w-md mx-auto text-center">
          <CardContent className="pt-8 pb-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-50 flex items-center justify-center">
              <AlertTriangle className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Insurance Found</h3>
            <p className="text-gray-600 text-sm mb-4">No valid insurance coverage found for the provided search criteria.</p>
            <p className="text-xs text-gray-500">Please verify your search parameters or contact the insurance company directly.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const formatCurrency = (amount: number, currency: string = 'TZS') => {
    return new Intl.NumberFormat('en-TZ', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const getDaysRemaining = (endDate: number) => {
    const today = new Date().getTime();
    const diffTime = endDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getDaysExpired = (endDate: number) => {
    const today = new Date().getTime();
    const diffTime = today - endDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getStatusBadge = (statusTitle: string, daysRemaining: number, endDate: number) => {
    if (statusTitle !== 'ACTIVE') {
      const daysExpired = getDaysExpired(endDate);
      const expiredDate = formatDate(endDate);
      return (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-200">
          <XCircle className="h-3 w-3 flex-shrink-0" />
          <span className="whitespace-nowrap">Expired {daysExpired} days ago on {expiredDate}</span>
        </div>
      );
    }
    if (daysRemaining <= 30) {
      return (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-700 border border-orange-200">
          <AlertTriangle className="h-3 w-3 flex-shrink-0" />
          <span className="whitespace-nowrap">Expires in {daysRemaining} days</span>
        </div>
      );
    }
    return (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
        <CheckCircle className="h-3 w-3 flex-shrink-0" />
        <span>Active Coverage</span>
      </div>
    );
  };

  return (
    <div className="mt-8 space-y-6">
      {results.map((coverNote, index) => {
        const daysRemaining = getDaysRemaining(coverNote.coverNoteEndDate);
        
        return (
          <Card key={index} className="overflow-hidden shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100/50 border-b border-blue-200/50">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">Insurance Verified</h3>
                    <p className="text-xs sm:text-sm text-gray-600 truncate">Cover Note #{coverNote.coverNoteNumber}</p>
                  </div>
                </div>
                <div className="flex-shrink-0 self-start sm:self-center">
                  {getStatusBadge(coverNote.statusTitle, daysRemaining, coverNote.coverNoteEndDate)}
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              {/* Enhanced Information Table */}
              <div className="bg-white rounded-lg overflow-hidden">
                <Table>
                  <TableBody>
                    <TableRow className="hover:bg-gray-50/50 transition-colors">
                      <TableCell className="font-medium text-gray-700 py-4 px-6 w-1/3">
                        <div className="flex items-center gap-2">
                          <Car className="h-4 w-4 text-blue-600" />
                          Registration Number
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-900 py-4 px-6 font-medium">
                        {coverNote.motor.registrationNumber}
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-gray-50/50 transition-colors">
                      <TableCell className="font-medium text-gray-700 py-4 px-6">
                        <div className="flex items-center gap-2">
                          <Hash className="h-4 w-4 text-blue-600" />
                          Chassis Number
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-900 py-4 px-6">
                        {coverNote.motor.chassisNumber || 'Not Available'}
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-gray-50/50 transition-colors">
                      <TableCell className="font-medium text-gray-700 py-4 px-6">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-blue-600" />
                          Sticker Number
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-900 py-4 px-6">
                        {coverNote.stickerNumber || 'Not Available'}
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-gray-50/50 transition-colors">
                      <TableCell className="font-medium text-gray-700 py-4 px-6">
                        <div className="flex items-center gap-2">
                          <Hash className="h-4 w-4 text-blue-600" />
                          Cover Note Reference
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-900 py-4 px-6">
                        {coverNote.coverNoteReferenceNumber}
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-gray-50/50 transition-colors">
                      <TableCell className="font-medium text-gray-700 py-4 px-6">
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4 text-blue-600" />
                          Insurer
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-900 py-4 px-6">
                        {coverNote.company.companyName}
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-gray-50/50 transition-colors">
                      <TableCell className="font-medium text-gray-700 py-4 px-6">
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-blue-600" />
                          Class of Insurance
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-900 py-4 px-6">
                        {coverNote.classOfBusiness}
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-gray-50/50 transition-colors">
                      <TableCell className="font-medium text-gray-700 py-4 px-6">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-blue-600" />
                          Type of Cover
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-900 py-4 px-6">
                        {coverNote.productName}
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-gray-50/50 transition-colors">
                      <TableCell className="font-medium text-gray-700 py-4 px-6">
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4 text-blue-600" />
                          Transacting Company
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-900 py-4 px-6">
                        {coverNote.transactingCompany}
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-gray-50/50 transition-colors">
                      <TableCell className="font-medium text-gray-700 py-4 px-6">
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4 text-blue-600" />
                          Company Type
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-900 py-4 px-6">
                        {coverNote.transactingCompanyType}
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-gray-50/50 transition-colors">
                      <TableCell className="font-medium text-gray-700 py-4 px-6">
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4 text-blue-600" />
                          Premium Paid
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-900 py-4 px-6 font-semibold">
                        {formatCurrency(coverNote.totalPremiumAmountIncludingTax, coverNote.currencyCode)}
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-gray-50/50 transition-colors">
                      <TableCell className="font-medium text-gray-700 py-4 px-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-blue-600" />
                          Issue Date
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-900 py-4 px-6">
                        {formatDate(coverNote.issueDate)}
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-gray-50/50 transition-colors">
                      <TableCell className="font-medium text-gray-700 py-4 px-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-green-600" />
                          Start Date
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-900 py-4 px-6">
                        {formatDate(coverNote.coverNoteStartDate)}
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-gray-50/50 transition-colors">
                      <TableCell className="font-medium text-gray-700 py-4 px-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-red-600" />
                          End Date
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-900 py-4 px-6">
                        {formatDate(coverNote.coverNoteEndDate)}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default SearchResults;
