
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { getHourlyRateDetails, formatWithSpaces, HourlyRate } from '@/utils/hourlyConverter';

const HourlyRateDetail: React.FC = () => {
  const { rateId } = useParams<{ rateId: string }>();
  const hourlyRate = parseFloat(rateId || '0');
  
  const [workHours, setWorkHours] = useState<number>(40);
  const [workWeeks, setWorkWeeks] = useState<number>(48);
  const [rateDetails, setRateDetails] = useState<HourlyRate | null>(null);
  
  useEffect(() => {
    if (!isNaN(hourlyRate)) {
      const details = getHourlyRateDetails(hourlyRate, workHours, workWeeks);
      setRateDetails(details);
    }
  }, [hourlyRate, workHours, workWeeks]);
  
  if (isNaN(hourlyRate) || !rateDetails) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Invalid Hourly Rate</h1>
        <p>Sorry, the hourly rate provided is not valid.</p>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto py-8">
      <Helmet>
        <title>R{hourlyRate}/hour - Hourly Rate Calculator | SASSA Insider</title>
        <meta 
          name="description" 
          content={`Convert R${hourlyRate} per hour to monthly and yearly salary with our South African hourly rate calculator. Customize working hours and weeks per year.`}
        />
      </Helmet>
      
      <h1 className="text-3xl font-bold mb-6">
        R{formatWithSpaces(hourlyRate)} Hourly Rate Calculator
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Customize Calculation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="workHours">Working Hours Per Week: {workHours}</Label>
                    <span className="text-sm text-gray-500">(Standard: 40)</span>
                  </div>
                  <Slider
                    id="workHours"
                    min={5}
                    max={80}
                    step={1}
                    value={[workHours]}
                    onValueChange={(value) => setWorkHours(value[0])}
                  />
                  <Input
                    type="number"
                    value={workHours}
                    onChange={(e) => setWorkHours(Number(e.target.value))}
                    min={1}
                    max={168}
                    className="mt-2"
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="workWeeks">Working Weeks Per Year: {workWeeks}</Label>
                    <span className="text-sm text-gray-500">(Standard: 48)</span>
                  </div>
                  <Slider
                    id="workWeeks"
                    min={30}
                    max={52}
                    step={1}
                    value={[workWeeks]}
                    onValueChange={(value) => setWorkWeeks(value[0])}
                  />
                  <Input
                    type="number"
                    value={workWeeks}
                    onChange={(e) => setWorkWeeks(Number(e.target.value))}
                    min={1}
                    max={52}
                    className="mt-2"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Calculated Income</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Hourly Rate</h3>
                  <p className="text-2xl font-bold">R{formatWithSpaces(rateDetails.hourlyRate)}</p>
                  <p className="text-sm text-gray-500 mt-1">Base hourly pay rate</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Daily Income (8 hours)</h3>
                  <p className="text-2xl font-bold">
                    R{formatWithSpaces(rateDetails.hourlyRate * 8)}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Based on an 8-hour work day</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Weekly Income</h3>
                  <p className="text-2xl font-bold">
                    R{formatWithSpaces(rateDetails.hourlyRate * workHours)}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Based on {workHours} hours per week</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Monthly Income</h3>
                  <p className="text-2xl font-bold">
                    R{formatWithSpaces(rateDetails.monthlyEquivalent)}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Based on 4 weeks per month</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Yearly Income</h3>
                  <p className="text-2xl font-bold">
                    R{formatWithSpaces(rateDetails.yearlySalary)}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Based on {workWeeks} working weeks per year</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">About This Calculation</h2>
        <p className="mb-4">
          This calculator shows what R{formatWithSpaces(hourlyRate)} per hour equates to on a daily, weekly, monthly, and yearly basis.
          The values are calculated based on your specified {workHours} working hours per week and {workWeeks} working weeks per year.
        </p>
        <p className="mb-4">
          The standard South African work week is 40-45 hours (8-9 hours per day, 5 days per week). 
          A typical work year consists of 48 weeks, accounting for annual leave, public holidays, and occasional sick days.
        </p>
        <p>
          Please note that these calculations are before tax and other deductions. Your actual take-home pay will depend on your tax bracket and other factors.
        </p>
      </div>
    </div>
  );
};

export default HourlyRateDetail;
