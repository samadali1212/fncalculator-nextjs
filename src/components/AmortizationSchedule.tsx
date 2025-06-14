import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatCurrency, CrdbTimeFrame } from "../utils/loanCalculator";

interface AmortizationEntry {
  period: number;
  paymentDate: string;
  payment: number;
  principal: number;
  interest: number;
  totalInterest: number;
  balance: number;
}

interface AmortizationScheduleProps {
  loanAmount: number;
  interestRate: number;
  loanTerm: number;
  timeFrame: CrdbTimeFrame;
}

// Helper function to format currency without the TSh prefix
const formatCurrencyValue = (amount: number): string => {
  return amount.toLocaleString('en-US');
};

const AmortizationSchedule = ({ loanAmount, interestRate, loanTerm, timeFrame }: AmortizationScheduleProps) => {
  const generateAmortizationSchedule = (): AmortizationEntry[] => {
    const schedule: AmortizationEntry[] = [];
    const termInMonths = timeFrame === "yearly" ? loanTerm * 12 : loanTerm;
    const monthlyRate = interestRate / 100 / 12;
    
    // Calculate monthly payment
    const monthlyPayment = monthlyRate === 0 
      ? loanAmount / termInMonths 
      : loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, termInMonths)) / 
        (Math.pow(1 + monthlyRate, termInMonths) - 1);
    
    let remainingBalance = loanAmount;
    let cumulativeInterest = 0;
    const startDate = new Date();
    
    for (let period = 1; period <= termInMonths; period++) {
      const interestPayment = remainingBalance * monthlyRate;
      const principalPayment = monthlyPayment - interestPayment;
      remainingBalance = Math.max(0, remainingBalance - principalPayment);
      cumulativeInterest += interestPayment;
      
      // Calculate payment date
      const paymentDate = new Date(startDate);
      paymentDate.setMonth(startDate.getMonth() + period);
      
      schedule.push({
        period,
        paymentDate: paymentDate.toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric' 
        }),
        payment: monthlyPayment,
        principal: principalPayment,
        interest: interestPayment,
        totalInterest: cumulativeInterest,
        balance: remainingBalance
      });
    }
    
    return schedule;
  };

  const amortizationData = generateAmortizationSchedule();
  
  // Group by year if timeFrame is yearly
  const displayData = timeFrame === "yearly" 
    ? amortizationData.reduce((acc, entry, index) => {
        const yearIndex = Math.floor(index / 12);
        if (!acc[yearIndex]) {
          acc[yearIndex] = {
            period: yearIndex + 1,
            paymentDate: entry.paymentDate, // Use the last month's date for the year
            payment: 0,
            principal: 0,
            interest: 0,
            totalInterest: 0,
            balance: entry.balance
          };
        }
        acc[yearIndex].payment += entry.payment;
        acc[yearIndex].principal += entry.principal;
        acc[yearIndex].interest += entry.interest;
        // Use the last month's values for the year
        if ((index + 1) % 12 === 0 || index === amortizationData.length - 1) {
          acc[yearIndex].paymentDate = entry.paymentDate;
          acc[yearIndex].totalInterest = entry.totalInterest;
          acc[yearIndex].balance = entry.balance;
        }
        return acc;
      }, [] as AmortizationEntry[])
    : amortizationData;

  return (
    <div className="bg-white p-6 sm:p-8 rounded-md shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Amortization Schedule</h2>
      <p className="text-sm text-gray-600 mb-4">
        This table shows how your {timeFrame === "monthly" ? "monthly" : "annual"} payments are split between principal and interest over the life of your loan.
      </p>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Payment Date</TableHead>
            <TableHead className="text-right">Payment (TSh)</TableHead>
            <TableHead className="text-right">Principal (TSh)</TableHead>
            <TableHead className="text-right">Interest (TSh)</TableHead>
            <TableHead className="text-right">Total Interest (TSh)</TableHead>
            <TableHead className="text-right">Balance (TSh)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayData.map((entry) => (
            <TableRow key={entry.period}>
              <TableCell className="font-medium">{entry.paymentDate}</TableCell>
              <TableCell className="text-right">{formatCurrencyValue(Math.round(entry.payment))}</TableCell>
              <TableCell className="text-right">{formatCurrencyValue(Math.round(entry.principal))}</TableCell>
              <TableCell className="text-right">{formatCurrencyValue(Math.round(entry.interest))}</TableCell>
              <TableCell className="text-right">{formatCurrencyValue(Math.round(entry.totalInterest))}</TableCell>
              <TableCell className="text-right">{formatCurrencyValue(Math.round(entry.balance))}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AmortizationSchedule;
