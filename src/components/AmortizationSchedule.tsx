
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatCurrency, CrdbTimeFrame } from "../utils/loanCalculator";

interface AmortizationEntry {
  period: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

interface AmortizationScheduleProps {
  loanAmount: number;
  interestRate: number;
  loanTerm: number;
  timeFrame: CrdbTimeFrame;
}

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
    
    for (let period = 1; period <= termInMonths; period++) {
      const interestPayment = remainingBalance * monthlyRate;
      const principalPayment = monthlyPayment - interestPayment;
      remainingBalance = Math.max(0, remainingBalance - principalPayment);
      
      schedule.push({
        period,
        payment: monthlyPayment,
        principal: principalPayment,
        interest: interestPayment,
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
            payment: 0,
            principal: 0,
            interest: 0,
            balance: entry.balance
          };
        }
        acc[yearIndex].payment += entry.payment;
        acc[yearIndex].principal += entry.principal;
        acc[yearIndex].interest += entry.interest;
        // Use the last month's balance for the year
        if ((index + 1) % 12 === 0 || index === amortizationData.length - 1) {
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
      
      <ScrollArea className="h-96">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{timeFrame === "monthly" ? "Month" : "Year"}</TableHead>
              <TableHead className="text-right">Payment</TableHead>
              <TableHead className="text-right">Principal</TableHead>
              <TableHead className="text-right">Interest</TableHead>
              <TableHead className="text-right">Balance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayData.map((entry) => (
              <TableRow key={entry.period}>
                <TableCell className="font-medium">{entry.period}</TableCell>
                <TableCell className="text-right">{formatCurrency(Math.round(entry.payment))}</TableCell>
                <TableCell className="text-right">{formatCurrency(Math.round(entry.principal))}</TableCell>
                <TableCell className="text-right">{formatCurrency(Math.round(entry.interest))}</TableCell>
                <TableCell className="text-right">{formatCurrency(Math.round(entry.balance))}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
};

export default AmortizationSchedule;
