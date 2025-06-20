import { motion } from "framer-motion";
import { ChevronDown, Info, Calculator, Receipt, Building2, FileText, Calendar, FolderOpen, Send } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const PayeCollapsible = () => {
  return (
    <motion.div 
      className="mt-12 space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding PAYE in Tanzania</h2>
      
      <div className="space-y-4">
        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <Info className="h-5 w-5 text-blue-600 flex-shrink-0" />
              <span className="font-medium text-left">What is PAYE in Tanzania?</span>
            </div>
            <ChevronDown className="h-4 w-4 flex-shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border border-t-0 rounded-t-none">
            <div className="prose prose-sm max-w-none">
              <p className="text-gray-700 mb-4">
                Pay As You Earn (PAYE) is a system of income tax collection in Tanzania where employers deduct tax from employees' salaries before paying them. This ensures continuous tax collection throughout the year.
              </p>
              <p className="text-gray-700 mb-4">
                PAYE applies to employment income including salaries, wages, bonuses, overtime pay, and other benefits. The tax is calculated based on progressive tax brackets, meaning higher earners pay higher rates.
              </p>
              <p className="text-gray-700 mb-0">
                All employers in Tanzania are required to register for PAYE and deduct tax from their employees' salaries before remitting it to the Tanzania Revenue Authority (TRA).
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <Calculator className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="font-medium text-left">Tanzania PAYE Tax Brackets 2024/2025</span>
            </div>
            <ChevronDown className="h-4 w-4 flex-shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border border-t-0 rounded-t-none">
            <div className="prose prose-sm max-w-none">
              <p className="text-gray-700 mb-4">Tanzania uses a progressive tax system with the following monthly brackets for Tanzania Mainland:</p>
              
              {/* Mobile-first responsive tax brackets */}
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <span className="text-sm font-medium text-gray-900">TSh 0 - 270,000</span>
                    <span className="text-sm font-semibold text-green-700 bg-green-100 px-2 py-1 rounded">0% (NIL)</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-gray-900">TSh 270,001 - 520,000</span>
                    <span className="text-sm text-gray-700 bg-blue-100 px-2 py-1 rounded">8% of excess above TSh 270,000</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-gray-900">TSh 520,001 - 760,000</span>
                    <span className="text-sm text-gray-700 bg-yellow-100 px-2 py-1 rounded">TSh 20,000 + 20% of excess above TSh 520,000</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-gray-900">TSh 760,001 - 1,000,000</span>
                    <span className="text-sm text-gray-700 bg-orange-100 px-2 py-1 rounded">TSh 68,000 + 25% of excess above TSh 760,000</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-gray-900">Above TSh 1,000,000</span>
                    <span className="text-sm text-gray-700 bg-red-100 px-2 py-1 rounded">TSh 128,000 + 30% of excess above TSh 1,000,000</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                <p className="text-sm text-blue-800 mb-0">
                  <strong>Note:</strong> Annual income threshold of TSh 3,240,000 is not taxable (equivalent to TSh 270,000 monthly).
                </p>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-indigo-600 flex-shrink-0" />
              <span className="font-medium text-left">Individual Traders Tax Requirements</span>
            </div>
            <ChevronDown className="h-4 w-4 flex-shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border border-t-0 rounded-t-none">
            <div className="prose prose-sm max-w-none">
              <p className="text-gray-700 mb-4">
                <strong>Individual traders who are not under presumptive tax regime</strong> must comply with specific requirements:
              </p>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li>Keep proper records of all business transactions</li>
                <li>File provisional returns on or before 31st March</li>
                <li>Pay tax based on taxable income for the year</li>
                <li>File final returns with audited financial statements by 30th June</li>
                <li>Submit returns to TRA within the specified deadlines</li>
              </ul>
              <p className="text-gray-700 mb-4">
                These individuals pay tax using the same progressive rates as PAYE employees, calculated on their annual taxable income.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800 mb-0">
                  <strong>Important:</strong> Under the presumptive system, individuals are not obliged to file returns but can pay by installments if the assessed amount exceeds TSh 50,000 per year.
                </p>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-red-600 flex-shrink-0" />
              <span className="font-medium text-left">Tax Filing and Payment Schedule</span>
            </div>
            <ChevronDown className="h-4 w-4 flex-shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border border-t-0 rounded-t-none">
            <div className="prose prose-sm max-w-none">
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Provisional Returns (Form ITX200.01.E)</h4>
                <p className="text-gray-700 mb-4">Estimated tax must be filed within 3 months of the year beginning, with payments in 4 installments:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <span className="text-sm font-medium text-blue-900">1st Payment:</span>
                    <span className="text-sm text-blue-800 block">On or before 31st March</span>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <span className="text-sm font-medium text-blue-900">2nd Payment:</span>
                    <span className="text-sm text-blue-800 block">On or before 30th June</span>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <span className="text-sm font-medium text-blue-900">3rd Payment:</span>
                    <span className="text-sm text-blue-800 block">On or before 30th September</span>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <span className="text-sm font-medium text-blue-900">4th Payment:</span>
                    <span className="text-sm text-blue-800 block">On or before 31st December</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Final Returns (Form ITX201.01.E)</h4>
                <p className="text-gray-700 mb-3">Must be filed within 6 months after the tax year ends (between 1st January and 30th June).</p>
                <p className="text-gray-600 mb-0">
                  The Commissioner may extend filing deadlines upon written application with appropriate terms and conditions.
                </p>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <FolderOpen className="h-5 w-5 text-teal-600 flex-shrink-0" />
              <span className="font-medium text-left">Record Keeping Requirements</span>
            </div>
            <ChevronDown className="h-4 w-4 flex-shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border border-t-0 rounded-t-none">
            <div className="prose prose-sm max-w-none">
              <p className="text-gray-700 mb-4">
                The Income Tax Act requires every individual liable for tax to maintain comprehensive documentation:
              </p>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li>All documents necessary for accurate tax determination</li>
                <li>Records must be retained for at least 5 years from the end of the relevant tax year</li>
                <li>Documents not in official languages must be translated by TRA-approved translators</li>
                <li>Business and investment financial information</li>
                <li>Supporting calculations and supplementary documentation</li>
              </ul>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm text-green-800 mb-0">
                  <strong>Tip:</strong> Keep copies of all completed returns and supporting documents for your own records.
                </p>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <Send className="h-5 w-5 text-purple-600 flex-shrink-0" />
              <span className="font-medium text-left">Return Submission Guidelines</span>
            </div>
            <ChevronDown className="h-4 w-4 flex-shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border border-t-0 rounded-t-none">
            <div className="prose prose-sm max-w-none">
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Return Form Components</h4>
                <p className="text-gray-700 mb-3">The return form consists of seven pages plus supplementary pages for:</p>
                <ul className="text-gray-700 space-y-1 mb-0">
                  <li>Gains from realization of shares and securities</li>
                  <li>Gains from realization of assets (excluding shares, securities, or trading stock)</li>
                  <li>Repatriated income of domestic permanent establishment</li>
                  <li>Income from general insurance business</li>
                  <li>Income from life insurance business</li>
                  <li>Income from mining operations</li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-3">Submission Guidelines</h4>
                <ul className="text-gray-700 space-y-2 mb-0">
                  <li>Round down revenue figures, round up tax credits and deductions to nearest shilling</li>
                  <li>Don't delay submission even if some information is missing - estimate and indicate</li>
                  <li>Sign and date the declaration before submission</li>
                  <li>Include all supporting calculations, supplementary pages, and audited accounts</li>
                  <li>You are responsible for filing a correct return - penalties apply for false information</li>
                </ul>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-800 mb-0">
                  <strong>Important:</strong> Contact your nearest TRA Office or Call Centre if you need assistance completing your return or require supplementary pages.
                </p>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <Receipt className="h-5 w-5 text-orange-600 flex-shrink-0" />
              <span className="font-medium text-left">PAYE Deductions and Allowances</span>
            </div>
            <ChevronDown className="h-4 w-4 flex-shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border border-t-0 rounded-t-none">
            <div className="prose prose-sm max-w-none">
              <p className="text-gray-700 mb-4">
                Before calculating PAYE tax, certain deductions are made from gross income:
              </p>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li><strong>NSSF Contributions:</strong> National Social Security Fund contributions (worker's portion)</li>
                <li><strong>PSSSF Contributions:</strong> Public Service Social Security Fund (for public servants)</li>
                <li><strong>LAPF Contributions:</strong> Local Authorities Provident Fund (for local government employees)</li>
                <li><strong>Other approved pension schemes</strong></li>
              </ul>
              <p className="text-gray-700 mb-4">
                The standard NSSF contribution rate is 10% of basic salary (5% employee + 5% employer), with a maximum monthly contribution ceiling.
              </p>
              <p className="text-gray-700 mb-0">
                PAYE tax is then calculated on the income remaining after these deductions.
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <Building2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
              <span className="font-medium text-left">Employer PAYE Obligations</span>
            </div>
            <ChevronDown className="h-4 w-4 flex-shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border border-t-0 rounded-t-none">
            <div className="prose prose-sm max-w-none">
              <p className="text-gray-700 mb-4">
                Employers in Tanzania have several PAYE-related responsibilities:
              </p>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li>Register for PAYE with Tanzania Revenue Authority (TRA)</li>
                <li>Deduct correct amount of PAYE tax from employee salaries</li>
                <li>Remit PAYE tax to TRA by the 15th of the following month</li>
                <li>Submit monthly PAYE returns</li>
                <li>Issue P9A forms (tax deduction cards) to employees</li>
                <li>Submit annual returns and reconciliation</li>
              </ul>
              <p className="text-gray-700 mb-4">
                <strong>Penalties:</strong> Late payment or non-compliance attracts penalties and interest charges from TRA.
              </p>
              <p className="text-gray-700 mb-0">
                Employers must keep proper records of all PAYE transactions for audit purposes.
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </motion.div>
  );
};

export default PayeCollapsible;
