
import React from 'react';
import { motion } from "framer-motion";
import OffenceChecker from '../components/OffenceChecker';
import ShareButton from '../components/ShareButton';
import Header from '../components/Header';
import SEO from '../components/SEO';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, AlertTriangle, Car, CreditCard, Receipt, Shield, FileText, Phone } from 'lucide-react';

const TrafficOffence = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
            <SEO 
        title="TMS Traffic Fines Check: Kuangalia Deni La Gari" 
        description="TMS check makes it easy to know your deni la gari, view traffic fines, and confirm car ownership in Tanzania. Instantly check deni la gari via denilagari.com and get accurate updates on your vehicle’s status."
        canonicalUrl="/"
      />
      <Header />
      <div className="container mx-auto px-4 md:px-6 py-8 max-w-4xl pt-24">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">
            Tanzania Road Traffic Offence Check (TMS Check)
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
TMS check is the easiest way to know deni la gari in Tanzania, including traffic fines and penalties. Whether you want to check deni la gari before buying a vehicle or need to confirm if your car has any traffic fines, Denilagari.com provides quick and accurate results.
          </p>
         <div className="flex-1 flex justify-end">
              <ShareButton
                title="Tanzania Traffic Offence Checker"
                text="Check your traffic violations and fines in Tanzania with this free online tool"
                className="shadow-sm"
              />
        </div>
        </div>

        <OffenceChecker />

        {/* Disclaimer Section */}
        <div className="mt-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800 mb-1">Important Disclaimer</h3>
                <p className="text-sm text-yellow-700">
                  This website is not affiliated with the Tanzania Police Force or any government agency. 
                  We are an independent service that helps users check for pending traffic offences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* User Guide Section */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use This Tool & Road Safety Guide</h2>
          
          {/* Search Methods Guide */}
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <Car className="h-5 w-5 text-blue-600" />
                <span className="font-medium text-left">How to Search for Traffic Offences</span>
              </div>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Car className="h-4 w-4" />
                    By Vehicle Registration Number
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Find your vehicle registration number on your vehicle's registration card or license plate.
                  </p>
                  <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                    <li>Click on the "Vehicle" tab above</li>
                    <li>Enter your complete vehicle registration number (e.g., T123ABC)</li>
                    <li>Click "Search for Offences"</li>
                    <li>View any outstanding fines, offense details, dates, and payment status</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    By Driving License Number
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Find your license ID on your driving license card.
                  </p>
                  <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                    <li>Click on the "License" tab</li>
                    <li>Enter your license number exactly as shown on your license (at least 10 digits)</li>
                    <li>Click "Search for Offences"</li>
                    <li>View fines linked to your license and any demerit points</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Receipt className="h-4 w-4" />
                    By Reference Number
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Use the reference number from your traffic ticket, SMS notification, or official citation.
                  </p>
                  <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                    <li>Click on the "Reference" tab</li>
                    <li>Enter the reference number accurately (at least 12 digits)</li>
                    <li>Click "Search for Offences"</li>
                    <li>View specific offense details linked to that reference number</li>
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
                <span className="font-medium text-left">Understanding Your Search Results</span>
              </div>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
              <div className="space-y-4">
                <p className="text-sm text-gray-700">
                  When offences are found, you'll see the following information:
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li><strong>Reference Number:</strong> Unique identifier for the offense</li>
                  <li><strong>Offense Description:</strong> Details of what traffic law was violated</li>
                  <li><strong>Fine Amount (TZS):</strong> Amount to be paid in Tanzanian Shillings</li>
                  <li><strong>Location:</strong> Where the offense occurred</li>
                  <li><strong>Date Issued:</strong> When the offense was recorded</li>
                  <li><strong>Status:</strong> Whether the fine is "Pending" or "Paid"</li>
                  <li><strong>Vehicle/License Info:</strong> Associated vehicle or license details</li>
                </ul>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Payment and Next Steps */}
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                <span className="font-medium text-left">What to Do If Fines Are Found</span>
              </div>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">How to Pay Fines</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li><strong>Mobile Money:</strong> M-Pesa, Tigo Pesa, Airtel Money (use official pay bill numbers)</li>
                    <li><strong>Bank Deposits:</strong> Visit participating banks with your reference number</li>
                    <li><strong>Online:</strong> Use government portals like GePG when available</li>
                    <li><strong>In Person:</strong> Visit designated police stations or revenue authority offices</li>
                  </ul>
                </div>

                                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">M-Pesa (Vodacom)</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
 	<li>Dial <code>*150*00#</code></li>
 	<li>Select <strong>Pay with M-Pesa</strong></li>
 	<li>Choose <strong>Pay Bills</strong></li>
 	<li>Select <strong>Traffic Fines</strong></li>
 	<li>Enter the reference (control) number for the fine</li>
 	<li>Input the fine amount</li>
 	<li>Enter your PIN and confirm the payment</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Airtel Money</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
 	<li>Dial <code>*150*60#</code></li>
 	<li>Select <strong>Pay Bill</strong></li>
 	<li>Choose <strong>Traffic Fines</strong></li>
 	<li>Enter the fine amount and reference (control) number</li>
 	<li>Input your PIN and confirm</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Tigo Pesa / Mixx by Yas</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
 	<li>Dial <code>*150*01#</code></li>
 	<li>Select <strong>Pay Bill</strong></li>
 	<li>Choose <strong>Traffic Fines</strong></li>
 	<li>Enter the fine amount and reference (control) number</li>
 	<li>Input your PIN and confirm</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Disputing a Fine</h4>
                  <p className="text-sm text-gray-700">
                    If you believe a fine is incorrect, contact the traffic police or relevant authority 
                    with your reference number and supporting evidence.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Consequences of Non-Payment</h4>
                  <p className="text-sm text-gray-700">
                    Not paying fines on time may result in increased penalties, vehicle seizure, 
                    or legal action. Pay promptly to avoid additional complications.
                  </p>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Best Driving Practices */}
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="font-medium text-left">Best Driving Practices in Tanzania</span>
              </div>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Essential Traffic Laws</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li><strong>Valid License:</strong> Always carry your valid Tanzanian license or IDP. Minimum age: 18</li>
                    <li><strong>Drive Left:</strong> Traffic drives on the left-hand side</li>
                    <li><strong>Speed Limits:</strong> Urban (50 km/h), Highways (80-100 km/h), School zones (30 km/h)</li>
                    <li><strong>Seat Belts:</strong> Mandatory for all passengers</li>
                    <li><strong>Child Safety:</strong> Under 5 in car seats, 5-12 in booster seats, under 12 in back</li>
                    <li><strong>No Mobile Phones:</strong> Unless hands-free</li>
                    <li><strong>No Drink Driving:</strong> BAC limit 0.08%, strict penalties apply</li>
                    <li><strong>Traffic Signals:</strong> Obey all lights and signs</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Defensive Driving</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>Stay alert and avoid distractions</li>
                    <li>Anticipate unexpected maneuvers from other vehicles</li>
                    <li>Maintain safe following distance (two-second rule minimum)</li>
                    <li>Adapt to road conditions (potholes, rain, dust)</li>
                    <li>Avoid night driving when possible</li>
                    <li>Be patient with "dala dalas" and "boda bodas"</li>
                  </ul>
                </div>
<div>
<h4 className="font-semibold text-gray-900 mb-3">Key Information</h4>
<p className="text-sm text-gray-700">Beyond the personal and vehicle documents, every responsible driver in Tanzania should also be familiar with official materials that guide proper driving. Here's what's key:</p>
<ul className="text-sm text-gray-700 space-y-2">
 	<li><a href="https://trade.tanzania.go.tz/media/Road%20Traffic%20Act%201973%20(1)_2.pdf" target="_blank"><strong>Road Traffic Act</strong></a> → The main legal framework governing road use, traffic offenses, penalties, and vehicle requirements</li>
 	<li><a href="https://www.mow.go.tz/uploads/documents/sw-1634716378-A%20Guide%20to%20Traffic%20Signing%202009%20V21.pdf" target="_blank"><strong>Guide to Traffic Signing</strong></a> → A government-issued or approved guide detailing all road signs, markings, and their meanings</li>
 	<li><strong><a href="https://www.mow.go.tz/uploads/documents/sw-1629711171-NATIONAL%20ROAD%20SAFETY%20POLICY.pdf" target="_blank">National Road Safety Policy</a> </strong>→ A national road safety policy is a critical initiative in the effort to elevate road safety issues to a position of high priority on the national agenda.</li>
 	<li><a href="https://www.nit.ac.tz/program/defensive-driving-training/" target="_blank"><strong>Defensive Driving Guidelines</strong></a> → Training materials or guides promoting accident prevention and safe driving techniques</li>
 	<li><strong><a href="https://www.latra.go.tz/uploads/documents/sw-1651936304-THE-TRANSPORT-LICENSING-PUBLIC-SERVICE-VEHICLES-REGULATIONS-2020.pdf" target="_blank">Transport Licensing Regulations (2020)</a></strong> → Covers requirements for public service vehicle operations and licensing.</li>
 	<li><a href="https://www.nemc.or.tz/uploads/publications/sw-1645446559-Air_Quality_Standards_Regulations_2007.pdf" target="_blank"><strong>Environmental and Emission Standards</strong></a> → Documents explaining compliance with pollution and vehicle emissions rules</li>
</ul>
<p className="text-sm text-gray-700">
  The Traffic Police Department provides official guidelines on road use, enforcement, fines, and safety campaigns. <a href="https://polisi.go.tz/" target="_blank">Visit Tanzania Police Official Site</a>. </p>
</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Vehicle Maintenance</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>Regular servicing and tire checks</li>
                    <li>Ensure all lights and brakes work properly</li>
                    <li>Check fluids regularly (oil, coolant, brake fluid)</li>
                    <li>Maintain current insurance and registration</li>
                  </ul>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Emergency Information */}
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red-600" />
                <span className="font-medium text-left">Emergency Information & Documentation</span>
              </div>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 p-6 bg-white rounded-lg border">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Always Carry</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Valid Driving License</li>
                    <li>Vehicle Registration Certificate</li>
                    <li>Proof of Vehicle Insurance</li>
                    <li>Emergency contact numbers</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">In Case of Accident</h4>
                  <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                    <li>Stop safely and turn on hazard lights</li>
                    <li>Check for injuries and call emergency services if needed</li>
                    <li>Ensure scene safety with warning triangle</li>
                    <li>Call police within 24 hours</li>
                    <li>Exchange information with other drivers</li>
                    <li>Take photos and gather witness information</li>
                    <li>Report to your insurance company</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Emergency Numbers</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
 	<li><strong>Kuzuia uhalifu</strong>: 111</li>
 	<li><strong>Polisi</strong>: 112</li>
 	<li><strong>Takukuru</strong>: 113</li>
 	<li><strong>Zimamoto</strong>: 114</li>
 	<li><strong>Gari ya wagonjwa</strong>: 115</li>
 	<li><strong>Msaada kwa mtoto</strong>: 116</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Emergency Kit Recommendations</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>First-aid kit and flashlight</li>
                    <li>Reflective warning triangle and vest</li>
                    <li>Jumper cables and basic tools</li>
                    <li>Fire extinguisher</li>
                    <li>Tire pressure gauge</li>
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
                  <li><strong>"No results found":</strong> Double-check your input format and try again</li>
                  <li><strong>"Connection Error":</strong> This may be due to API restrictions or network issues</li>
                  <li><strong>"Incorrect information":</strong> Contact the relevant authority to verify details</li>
                </ul>
              </div>
              <div>
                <p className="text-sm text-gray-700">
                  <strong>Need Help?</strong> If you encounter technical issues with this tool, 
                  the problem may be related to CORS restrictions or API connectivity. 
                  Consider using official government channels for the most reliable results.
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

export default TrafficOffence;
