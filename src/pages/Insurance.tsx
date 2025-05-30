
import React from 'react';
import { motion } from "framer-motion";
import InsuranceChecker from '../components/InsuranceChecker';
import ShareButton from '../components/ShareButton';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Shield, FileText, Car, AlertTriangle, Phone, Info } from 'lucide-react';

const Insurance = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <div className="container mx-auto px-4 md:px-6 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">
            Tanzania Vehicle Insurance Coverage Checker
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Verify your vehicle's insurance coverage status using TIRA's official verification system. 
            Check coverage validity, policy details, and ensure your vehicle is properly insured.
          </p>
          <div className="flex-1 flex justify-end mt-4">
            <ShareButton
              title="Tanzania Insurance Coverage Checker"
              text="Check your vehicle insurance coverage status in Tanzania with this free online tool"
              className="shadow-sm"
            />
          </div>
        </div>

        <InsuranceChecker />

        {/* Disclaimer Section */}
        <div className="mt-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Info className="h-5 w-5 text-blue-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800 mb-1">Official TIRA Service</h3>
                <p className="text-sm text-blue-700">
                  This tool connects directly to TIRA's (Tanzania Insurance Regulatory Authority) 
                  official verification system to provide accurate insurance coverage information.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* User Guide Section */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use & Insurance Guide</h2>
          
          {/* How to Check Coverage */}
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="font-medium text-left">How to Check Insurance Coverage</span>
              </div>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    By Cover Note Reference Number
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Found on your insurance certificate or cover note document.
                  </p>
                  <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                    <li>Enter your cover note reference number in the first field</li>
                    <li>Click "Check Insurance Coverage"</li>
                    <li>View your coverage status, policy details, and validity period</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Car className="h-4 w-4" />
                    By Vehicle Registration Number
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Use your vehicle's registration number from the registration certificate.
                  </p>
                  <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                    <li>Enter your vehicle registration number</li>
                    <li>System will search for active insurance policies linked to the vehicle</li>
                    <li>Review coverage details and expiry dates</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    By Insurance Sticker Number
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Found on the insurance sticker displayed on your vehicle's windscreen.
                  </p>
                  <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                    <li>Enter the sticker number exactly as shown</li>
                    <li>Verify the sticker is authentic and valid</li>
                    <li>Check coverage details and validity period</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Car className="h-4 w-4" />
                    By Chassis Number
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Vehicle identification number found on registration documents.
                  </p>
                  <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                    <li>Enter the complete chassis number</li>
                    <li>System will search for insurance coverage linked to the vehicle</li>
                    <li>Review all associated policies and their status</li>
                  </ol>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Understanding Results */}
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-green-600" />
                <span className="font-medium text-left">Understanding Your Coverage Results</span>
              </div>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
              <div className="space-y-4">
                <p className="text-sm text-gray-700">
                  When insurance coverage is found, you'll see the following information:
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li><strong>Coverage Status:</strong> Active, Expired, or Suspended</li>
                  <li><strong>Policy Number:</strong> Your insurance policy reference number</li>
                  <li><strong>Insurance Company:</strong> Name of the insurance provider</li>
                  <li><strong>Start Date:</strong> When your coverage began</li>
                  <li><strong>End Date:</strong> When your coverage expires</li>
                  <li><strong>Premium Amount:</strong> Cost of the insurance policy</li>
                  <li><strong>Vehicle Details:</strong> Associated vehicle information</li>
                </ul>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Insurance Requirements */}
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                <span className="font-medium text-left">Tanzania Vehicle Insurance Requirements</span>
              </div>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Mandatory Insurance</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li><strong>Third Party Insurance:</strong> Required by law for all motor vehicles</li>
                    <li><strong>Minimum Coverage:</strong> Death, bodily injury, and property damage</li>
                    <li><strong>Valid Period:</strong> Must be renewed annually</li>
                    <li><strong>Display Requirement:</strong> Insurance sticker must be visible on windscreen</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Types of Coverage</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li><strong>Third Party Only:</strong> Covers damage to other parties (minimum legal requirement)</li>
                    <li><strong>Third Party Fire & Theft:</strong> Includes coverage for fire and theft of your vehicle</li>
                    <li><strong>Comprehensive:</strong> Full coverage including damage to your own vehicle</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Penalties for No Insurance</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Heavy fines and penalties</li>
                    <li>Vehicle impoundment</li>
                    <li>Legal liability for all damages caused</li>
                    <li>Difficulty in vehicle registration renewal</li>
                  </ul>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* What to Do Next */}
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red-600" />
                <span className="font-medium text-left">What to Do If Coverage Issues Are Found</span>
              </div>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">If Coverage Has Expired</h4>
                  <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                    <li>Stop driving the vehicle immediately</li>
                    <li>Contact your insurance company to renew coverage</li>
                    <li>Compare quotes from different insurers if needed</li>
                    <li>Obtain new insurance certificate and sticker</li>
                    <li>Display new sticker on your vehicle</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">If No Coverage Found</h4>
                  <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                    <li>Verify your details are correct</li>
                    <li>Contact your insurance company immediately</li>
                    <li>Check if there are system delays in updating records</li>
                    <li>Obtain proof of coverage from your insurer</li>
                    <li>Report any discrepancies to TIRA</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Getting New Insurance</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Contact licensed insurance companies in Tanzania</li>
                    <li>Compare coverage options and premiums</li>
                    <li>Provide vehicle registration and driver details</li>
                    <li>Pay premium and obtain certificate</li>
                    <li>Display insurance sticker prominently</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Emergency Contacts</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li><strong>TIRA (Tanzania Insurance Regulatory Authority):</strong> +255 22 2134336</li>
                    <li><strong>Tanzania Police (Traffic):</strong> 112</li>
                    <li><strong>Emergency Services:</strong> 111</li>
                  </ul>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* FAQ and Support */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Troubleshooting & Support</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-gray-800">Common Issues:</h4>
                <ul className="text-sm text-gray-700 mt-2 space-y-1">
                  <li><strong>"No coverage found":</strong> Verify your input details and contact your insurer</li>
                  <li><strong>"Connection Error":</strong> This may be due to API restrictions or network issues</li>
                  <li><strong>"Invalid details":</strong> Double-check the format of your input data</li>
                </ul>
              </div>
              <div>
                <p className="text-sm text-gray-700">
                  <strong>Need Help?</strong> If you encounter technical issues with this tool or 
                  believe there are errors in the coverage information, contact TIRA directly 
                  or visit their official website for the most reliable verification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-gray-200 py-8 bg-white mt-16">
        <div className="container mx-auto px-4 md:px-6 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} denilagari. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Insurance;
