
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  calculateCompoundInterest, 
  formatCompoundCurrency,
  CompoundInterestCalculation
} from "../utils/compoundInterestCalculator";

const CompoundInterestCalculator = () => {
  const [initialDeposit, setInitialDeposit] = useState<number>(10000);
  const [regularDeposit, setRegularDeposit] = useState<number>(1000);
  const [depositFrequency, setDepositFrequency] = useState<number>(12);
  const [compoundFrequency, setCompoundFrequency] = useState<number>(12);
  const [numberOfYears, setNumberOfYears] = useState<number>(10);
  const [interestRate, setInterestRate] = useState<number>(8);
  const [result, setResult] = useState<CompoundInterestCalculation | null>(null);

  const performCalculation = () => {
    const calculation = calculateCompoundInterest(
      initialDeposit,
      regularDeposit,
      depositFrequency,
      compoundFrequency,
      numberOfYears,
      interestRate
    );
    setResult(calculation);
  };

  useEffect(() => {
    performCalculation();
  }, [initialDeposit, regularDeposit, depositFrequency, compoundFrequency, numberOfYears, interestRate]);

  // Generate example scenarios for the table
  const generateExampleScenarios = () => {
    const scenarios = [
      { years: 5, initialDeposit: 10000, regularDeposit: 500, rate: 6 },
      { years: 10, initialDeposit: 15000, regularDeposit: 1000, rate: 8 },
      { years: 15, initialDeposit: 20000, regularDeposit: 1500, rate: 10 },
      { years: 20, initialDeposit: 25000, regularDeposit: 2000, rate: 12 },
      { years: 25, initialDeposit: 30000, regularDeposit: 2500, rate: 14 }
    ];

    return scenarios.map(scenario => {
      const calc = calculateCompoundInterest(
        scenario.initialDeposit,
        scenario.regularDeposit,
        12, // Monthly
        12, // Monthly compounding
        scenario.years,
        scenario.rate
      );
      return {
        ...scenario,
        totalAmount: calc.totalAmount,
        totalInterest: calc.totalAmount - calc.totalContributions
      };
    });
  };

  const exampleScenarios = generateExampleScenarios();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 space-y-6"
    >
      {/* Input Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label htmlFor="initialDeposit" className="text-sm font-medium text-gray-700">
            Initial Deposit (R)
          </Label>
          <Input
            id="initialDeposit"
            type="number"
            value={initialDeposit || ''}
            onChange={(e) => setInitialDeposit(parseFloat(e.target.value) || 0)}
            className="h-10 border-gray-300 focus:border-primary"
            placeholder="10000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="regularDeposit" className="text-sm font-medium text-gray-700">
            Regular Deposit (R)
          </Label>
          <Input
            id="regularDeposit"
            type="number"
            value={regularDeposit || ''}
            onChange={(e) => setRegularDeposit(parseFloat(e.target.value) || 0)}
            className="h-10 border-gray-300 focus:border-primary"
            placeholder="1000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="depositFrequency" className="text-sm font-medium text-gray-700">
            Deposit Frequency (per year)
          </Label>
          <select
            id="depositFrequency"
            value={depositFrequency}
            onChange={(e) => setDepositFrequency(parseInt(e.target.value))}
            className="h-10 w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <option value={1}>Annually (1)</option>
            <option value={2}>Semi-annually (2)</option>
            <option value={4}>Quarterly (4)</option>
            <option value={12}>Monthly (12)</option>
            <option value={52}>Weekly (52)</option>
            <option value={365}>Daily (365)</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="compoundFrequency" className="text-sm font-medium text-gray-700">
            Compound Frequency (per year)
          </Label>
          <select
            id="compoundFrequency"
            value={compoundFrequency}
            onChange={(e) => setCompoundFrequency(parseInt(e.target.value))}
            className="h-10 w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <option value={1}>Annually (1)</option>
            <option value={2}>Semi-annually (2)</option>
            <option value={4}>Quarterly (4)</option>
            <option value={12}>Monthly (12)</option>
            <option value={365}>Daily (365)</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="numberOfYears" className="text-sm font-medium text-gray-700">
            Number of Years
          </Label>
          <Input
            id="numberOfYears"
            type="number"
            value={numberOfYears || ''}
            onChange={(e) => setNumberOfYears(parseInt(e.target.value) || 1)}
            className="h-10 border-gray-300 focus:border-primary"
            placeholder="10"
            min="1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="interestRate" className="text-sm font-medium text-gray-700">
            Annual Interest Rate (%)
          </Label>
          <Input
            id="interestRate"
            type="number"
            step="0.1"
            value={interestRate || ''}
            onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
            className="h-10 border-gray-300 focus:border-primary"
            placeholder="8.0"
          />
        </div>
      </div>

      {/* Results Section - Below inputs */}
      {result && (
        <div className="space-y-4 mt-8">
          {/* Main Result */}
          <Card className="border-2 border-primary">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-lg text-gray-600 mb-2">Total Amount after {result.numberOfYears} years</div>
                <div className="text-3xl font-bold text-primary">
                  {formatCompoundCurrency(result.totalAmount)}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Analysis */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Analysis</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Initial Deposit:</span>
                    <span className="font-semibold">{formatCompoundCurrency(result.initialDeposit)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Regular Deposits:</span>
                    <span className="font-semibold">{formatCompoundCurrency(result.regularDepositsTotal)}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Total Interest Earned:</span>
                    <span className="font-semibold text-green-600">{formatCompoundCurrency(result.totalInterest)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-800 font-medium">Total Savings:</span>
                    <span className="font-bold text-primary text-lg">{formatCompoundCurrency(result.totalAmount)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Example Scenarios Table */}
      <div className="mt-12">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Example Investment Scenarios</h3>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Years</TableHead>
                    <TableHead>Initial Deposit</TableHead>
                    <TableHead>Monthly Deposit</TableHead>
                    <TableHead>Interest Rate</TableHead>
                    <TableHead>Total Amount</TableHead>
                    <TableHead>Interest Earned</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {exampleScenarios.map((scenario, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{scenario.years}</TableCell>
                      <TableCell>{formatCompoundCurrency(scenario.initialDeposit)}</TableCell>
                      <TableCell>{formatCompoundCurrency(scenario.regularDeposit)}</TableCell>
                      <TableCell>{scenario.rate}%</TableCell>
                      <TableCell className="font-semibold text-primary">
                        {formatCompoundCurrency(scenario.totalAmount)}
                      </TableCell>
                      <TableCell className="font-semibold text-green-600">
                        {formatCompoundCurrency(scenario.totalInterest)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default CompoundInterestCalculator;
