
import { useMemo } from "react";
import { TanzaniaTaxCalculationResult, TanzaniaTimeFrame, formatTanzaniaCurrency } from "../utils/tanzaniaTaxCalculator";

interface DynamicTaxParagraphProps {
  taxResult: TanzaniaTaxCalculationResult;
  timeFrame: TanzaniaTimeFrame;
}

const DynamicTaxParagraph = ({ taxResult, timeFrame }: DynamicTaxParagraphProps) => {
  const paragraph = useMemo(() => {
    const variations = [
      `Your ${timeFrame} income of ${formatTanzaniaCurrency(taxResult.grossIncome)} falls under the ${taxResult.marginalTaxRate}% tax bracket, resulting in an effective tax rate of ${taxResult.effectiveTaxRate.toFixed(1)}%.`,
      
      `With a ${timeFrame} salary of ${formatTanzaniaCurrency(taxResult.grossIncome)}, you're in the ${taxResult.marginalTaxRate}% marginal tax bracket and pay an effective rate of ${taxResult.effectiveTaxRate.toFixed(1)}% on your total income.`,
      
      `Earning ${formatTanzaniaCurrency(taxResult.grossIncome)} ${timeFrame === "monthly" ? "per month" : "annually"} places you in the ${taxResult.marginalTaxRate}% tax bracket, with an overall effective tax rate of ${taxResult.effectiveTaxRate.toFixed(1)}%.`,
      
      `At ${formatTanzaniaCurrency(taxResult.grossIncome)} ${timeFrame === "monthly" ? "monthly" : "yearly"}, your marginal tax rate is ${taxResult.marginalTaxRate}%, while your effective tax rate across all income is ${taxResult.effectiveTaxRate.toFixed(1)}%.`,
      
      `Your ${timeFrame} gross income of ${formatTanzaniaCurrency(taxResult.grossIncome)} is subject to a ${taxResult.marginalTaxRate}% marginal rate, resulting in ${taxResult.effectiveTaxRate.toFixed(1)}% effective taxation.`,
      
      `Based on your ${timeFrame} income of ${formatTanzaniaCurrency(taxResult.grossIncome)}, you fall into the ${taxResult.marginalTaxRate}% tax bracket with an effective rate of ${taxResult.effectiveTaxRate.toFixed(1)}% applied to your total earnings.`,
      
      `The ${timeFrame} income of ${formatTanzaniaCurrency(taxResult.grossIncome)} puts you in the ${taxResult.marginalTaxRate}% marginal bracket, though your effective tax rate is ${taxResult.effectiveTaxRate.toFixed(1)}% when calculated across all income levels.`,
      
      `Earning ${formatTanzaniaCurrency(taxResult.grossIncome)} ${timeFrame === "monthly" ? "each month" : "per year"} means you're taxed at a marginal rate of ${taxResult.marginalTaxRate}%, with an effective rate of ${taxResult.effectiveTaxRate.toFixed(1)}% on your complete income.`,
      
      `With ${formatTanzaniaCurrency(taxResult.grossIncome)} in ${timeFrame} income, your highest tax bracket is ${taxResult.marginalTaxRate}%, but your effective tax rate is ${taxResult.effectiveTaxRate.toFixed(1)}% when considering the progressive tax structure.`,
      
      `Your ${timeFrame} salary of ${formatTanzaniaCurrency(taxResult.grossIncome)} is taxed progressively, with the highest bracket at ${taxResult.marginalTaxRate}% and an overall effective rate of ${taxResult.effectiveTaxRate.toFixed(1)}%.`,
      
      `At ${formatTanzaniaCurrency(taxResult.grossIncome)} ${timeFrame === "monthly" ? "monthly" : "annually"}, the marginal tax bracket is ${taxResult.marginalTaxRate}%, while the effective tax rate on your entire income is ${taxResult.effectiveTaxRate.toFixed(1)}%.`,
      
      `Your ${timeFrame} earnings of ${formatTanzaniaCurrency(taxResult.grossIncome)} place you in the ${taxResult.marginalTaxRate}% tax category, with an effective taxation rate of ${taxResult.effectiveTaxRate.toFixed(1)}% across all income tiers.`,
      
      `The ${formatTanzaniaCurrency(taxResult.grossIncome)} ${timeFrame} income you earn is subject to a maximum marginal rate of ${taxResult.marginalTaxRate}%, resulting in an effective tax rate of ${taxResult.effectiveTaxRate.toFixed(1)}%.`,
      
      `With a ${timeFrame} income of ${formatTanzaniaCurrency(taxResult.grossIncome)}, your income falls into the ${taxResult.marginalTaxRate}% marginal tax bracket, creating an effective tax burden of ${taxResult.effectiveTaxRate.toFixed(1)}%.`,
      
      `Earning ${formatTanzaniaCurrency(taxResult.grossIncome)} ${timeFrame === "monthly" ? "per month" : "per year"} puts you in the ${taxResult.marginalTaxRate}% bracket for your highest income portion, with ${taxResult.effectiveTaxRate.toFixed(1)}% as your effective rate.`,
      
      `Your ${timeFrame} gross salary of ${formatTanzaniaCurrency(taxResult.grossIncome)} is taxed at a marginal rate of ${taxResult.marginalTaxRate}% for the highest portion, while your effective rate is ${taxResult.effectiveTaxRate.toFixed(1)}%.`,
      
      `At ${formatTanzaniaCurrency(taxResult.grossIncome)} ${timeFrame === "monthly" ? "monthly" : "yearly"} income, you're in the ${taxResult.marginalTaxRate}% marginal tax tier, with an effective tax percentage of ${taxResult.effectiveTaxRate.toFixed(1)}% on your total earnings.`,
      
      `The ${timeFrame} income of ${formatTanzaniaCurrency(taxResult.grossIncome)} positions you in the ${taxResult.marginalTaxRate}% tax bracket, resulting in an effective tax rate of ${taxResult.effectiveTaxRate.toFixed(1)}% when all brackets are considered.`,
      
      `With ${formatTanzaniaCurrency(taxResult.grossIncome)} in ${timeFrame} earnings, your marginal tax bracket is ${taxResult.marginalTaxRate}%, though your effective tax rate is ${taxResult.effectiveTaxRate.toFixed(1)}% due to the progressive tax system.`,
      
      `Your ${timeFrame} income of ${formatTanzaniaCurrency(taxResult.grossIncome)} falls under the ${taxResult.marginalTaxRate}% marginal tax bracket, with an effective tax rate of ${taxResult.effectiveTaxRate.toFixed(1)}% applied to your complete ${timeFrame} earnings.`
    ];
    
    // Use a simple hash of the income to ensure consistent selection for the same income
    const hash = taxResult.grossIncome.toString().split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    
    const index = Math.abs(hash) % variations.length;
    return variations[index];
  }, [taxResult, timeFrame]);

  return (
    <div className="text-sm text-gray-600 leading-relaxed">
      <p>{paragraph}</p>
    </div>
  );
};

export default DynamicTaxParagraph;
