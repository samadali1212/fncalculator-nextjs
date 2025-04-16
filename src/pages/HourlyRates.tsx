
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';
import { generateHourlyRates, formatWithSpaces, HourlyRate } from '@/utils/hourlyConverter';
import { Separator } from '@/components/ui/separator';

const HourlyRates: React.FC = () => {
  const [filteredRates, setFilteredRates] = useState<HourlyRate[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const allRates = generateHourlyRates(20, 500, 10);
  
  const handleSearch = () => {
    const numValue = parseFloat(searchValue);
    if (!isNaN(numValue)) {
      // Find the closest rates to the searched value
      const sortedRates = [...allRates].sort((a, b) => 
        Math.abs(a.hourlyRate - numValue) - Math.abs(b.hourlyRate - numValue)
      );
      setFilteredRates(sortedRates.slice(0, 20));
    }
  };
  
  // Show some initial rates if no search has been performed
  const ratesToDisplay = filteredRates.length > 0 ? filteredRates : allRates.slice(0, 20);
  
  return (
    <div className="container mx-auto py-8">
      <Helmet>
        <title>South African Hourly Rate Calculator | SASSA Insider</title>
        <meta name="description" content="Convert hourly rates to monthly and yearly salaries with our South African hourly rate calculator. Find out the equivalent income for different hourly rates." />
        <meta name="keywords" content="hourly rate calculator, South Africa hourly pay, salary conversion, ZAR hourly rate" />
      </Helmet>
      
      <h1 className="text-3xl font-bold mb-6">South African Hourly Rate Calculator</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Find Hourly Rate Conversions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="number"
              placeholder="Enter hourly rate in ZAR"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleSearch}>Calculate</Button>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Enter an hourly rate to see the monthly and yearly equivalents. Default calculations are based on 40 working hours per week and 48 working weeks per year.
          </p>
        </CardContent>
      </Card>
      
      <h2 className="text-2xl font-semibold mb-4">Hourly Rate Conversions</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ratesToDisplay.map((rate) => (
          <Link to={`/hourly-rates/${rate.hourlyRate}`} key={rate.hourlyRate}>
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">
                  R{formatWithSpaces(rate.hourlyRate)}/hour
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <span className="text-gray-500">Monthly:</span>{" "}
                    <span className="font-medium">R{formatWithSpaces(rate.monthlyEquivalent)}</span>
                  </div>
                  <Separator />
                  <div>
                    <span className="text-gray-500">Yearly:</span>{" "}
                    <span className="font-medium">R{formatWithSpaces(rate.yearlySalary)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      
      <div className="mt-8 text-gray-600">
        <h3 className="text-xl font-semibold mb-4">About Hourly Rate Calculations</h3>
        <p className="mb-4">
          These calculations convert hourly rates to monthly and yearly equivalents based on standard South African working hours. The default calculations assume:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>40 working hours per week</li>
          <li>4 weeks per month</li>
          <li>48 working weeks per year (accounting for leave and holidays)</li>
        </ul>
        <p>
          Click on any hourly rate to see more detailed calculations and to adjust the working hours and weeks.
        </p>
      </div>
    </div>
  );
};

export default HourlyRates;
