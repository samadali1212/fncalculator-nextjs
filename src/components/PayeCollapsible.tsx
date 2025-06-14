
import { motion } from "framer-motion";
import { ChevronDown, Info, Calculator, Receipt, Building2 } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const PayeCollapsible = () => {
  return (
    <motion.div 
      className="mb-8 space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding PAYE in Tanzania</h2>
      
      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <Info className="h-5 w-5 text-blue-600" />
            <span className="font-medium text-left">What is PAYE in Tanzania?</span>
          </div>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
          <div className="text-gray-600">
            <p className="mb-3">
              Pay As You Earn (PAYE) is a system of income tax collection in Tanzania where employers deduct tax from employees' salaries before paying them. This ensures continuous tax collection throughout the year.
            </p>
            <p className="mb-3">
              PAYE applies to employment income including salaries, wages, bonuses, overtime pay, and other benefits. The tax is calculated based on progressive tax brackets, meaning higher earners pay higher rates.
            </p>
            <p>
              All employers in Tanzania are required to register for PAYE and deduct tax from their employees' salaries before remitting it to the Tanzania Revenue Authority (TRA).
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <Calculator className="h-5 w-5 text-green-600" />
            <span className="font-medium text-left">Tanzania PAYE Tax Brackets 2024/2025</span>
          </div>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
          <div className="text-gray-600">
            <p className="mb-3">Tanzania uses a progressive tax system with the following monthly brackets:</p>
            <div className="space-y-2 mb-3">
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span>TSh 0 - 270,000</span>
                <span className="font-medium">0%</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span>TSh 270,001 - 520,000</span>
                <span className="font-medium">9%</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span>TSh 520,001 - 760,000</span>
                <span className="font-medium">20%</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span>TSh 760,001 - 1,000,000</span>
                <span className="font-medium">25%</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span>Above TSh 1,000,000</span>
                <span className="font-medium">30%</span>
              </div>
            </div>
            <p className="text-sm">
              Note: These are monthly brackets. Annual brackets are calculated by multiplying by 12.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <Receipt className="h-5 w-5 text-purple-600" />
            <span className="font-medium text-left">PAYE Deductions and Allowances</span>
          </div>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
          <div className="text-gray-600">
            <p className="mb-3">
              Before calculating PAYE tax, certain deductions are made from gross income:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li><strong>NSSF Contributions:</strong> National Social Security Fund contributions (worker's portion)</li>
              <li><strong>PSSSF Contributions:</strong> Public Service Social Security Fund (for public servants)</li>
              <li><strong>LAPF Contributions:</strong> Local Authorities Provident Fund (for local government employees)</li>
              <li><strong>Other approved pension schemes</strong></li>
            </ul>
            <p className="mb-3">
              The standard NSSF contribution rate is 10% of basic salary (5% employee + 5% employer), with a maximum monthly contribution ceiling.
            </p>
            <p>
              PAYE tax is then calculated on the income remaining after these deductions.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <Building2 className="h-5 w-5 text-orange-600" />
            <span className="font-medium text-left">Employer PAYE Obligations</span>
          </div>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
          <div className="text-gray-600">
            <p className="mb-3">
              Employers in Tanzania have several PAYE-related responsibilities:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li>Register for PAYE with Tanzania Revenue Authority (TRA)</li>
              <li>Deduct correct amount of PAYE tax from employee salaries</li>
              <li>Remit PAYE tax to TRA by the 15th of the following month</li>
              <li>Submit monthly PAYE returns</li>
              <li>Issue P9A forms (tax deduction cards) to employees</li>
              <li>Submit annual returns and reconciliation</li>
            </ul>
            <p className="mb-3">
              <strong>Penalties:</strong> Late payment or non-compliance attracts penalties and interest charges from TRA.
            </p>
            <p>
              Employers must keep proper records of all PAYE transactions for audit purposes.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </motion.div>
  );
};

export default PayeCollapsible;
