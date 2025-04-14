
import React from 'react';
import { BranchCode, Bank } from '@/utils/branchCodeData';

interface SEOParagraphProps {
  branchCode?: BranchCode | null;
  bank?: Bank | null;
}

const SEOParagraph: React.FC<SEOParagraphProps> = ({ branchCode, bank }) => {
  if (!branchCode && !bank) return null;

  // Generate paragraph for a specific branch
  if (branchCode) {
    return (
      <div className="prose max-w-none mb-8 text-gray-700">
        <p>
          What is the branch code for {branchCode.bankName}'s {branchCode.branchName} branch in {branchCode.city}?
          The {branchCode.bankName} {branchCode.branchName} universal branch code is <strong>{branchCode.branchCode}</strong>. 
          This branch is located at {branchCode.branchAddress} and can be contacted at {branchCode.phone}. 
          For international transfers, you might need their BIC/SWIFT code which is <strong>{branchCode.bicCode}</strong>.
        </p>
      </div>
    );
  }

  // Generate paragraph for a bank page
  if (bank) {
    return (
      <div className="prose max-w-none mb-8 text-gray-700">
        <p>
          If you are looking for {bank.name} branch codes, Salary List provides a comprehensive 
          list of all {bank.name} branch codes to facilitate your banking transactions. {bank.description} With our up-to-date database, 
          you can easily find the correct branch code for any {bank.name} location across South Africa, 
          whether you need it for EFT transfers, debit orders, or other banking activities.
        </p>
      </div>
    );
  }

  return null;
};

export default SEOParagraph;
