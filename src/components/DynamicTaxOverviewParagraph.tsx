import { formatTanzaniaCurrency, TanzaniaTaxCalculationResult, TanzaniaTimeFrame } from "../utils/tanzaniaTaxCalculator";

interface DynamicTaxOverviewParagraphProps {
  taxResult: TanzaniaTaxCalculationResult;
  timeFrame: TanzaniaTimeFrame;
  income: number;
}

const DynamicTaxOverviewParagraph = ({ taxResult, timeFrame, income }: DynamicTaxOverviewParagraphProps) => {
  // Generate a variation index based on the income to ensure consistency for the same income
  const variationIndex = Math.abs(income) % 15;
  
  const variations = [
    // Variation 1 - Standard tax format
    () => (
      <p className="text-gray-700 leading-relaxed">
        With a {timeFrame === "monthly" ? "monthly" : "yearly"} income of {formatTanzaniaCurrency(taxResult.grossIncome)} in Tanzania Mainland, your PAYE tax would be approximately 
        {" "}{formatTanzaniaCurrency(taxResult.netTax)} per {timeFrame === "yearly" ? "year" : "month"}, leaving you with a take-home pay of 
        {" "}{formatTanzaniaCurrency(taxResult.netIncome)} per {timeFrame === "yearly" ? "year" : "month"}.
        {timeFrame === "monthly" ? 
          ` This equals an annual income of ${formatTanzaniaCurrency(income * 12)} with annual take-home pay of ${formatTanzaniaCurrency(taxResult.netIncome * 12)}.` : 
          ` This equals a monthly income of ${formatTanzaniaCurrency(Math.round(income / 12))} with monthly take-home pay of ${formatTanzaniaCurrency(Math.round(taxResult.netIncome / 12))}.`
        }
        Your effective tax rate is {taxResult.effectiveTaxRate.toFixed(1)}%, while your marginal tax rate is {taxResult.marginalTaxRate}%.
        Please note that PAYE is calculated after deducting NSSF or PSSSF contributions from your gross income.
      </p>
    ),
    
    // Variation 2 - Tax liability focus
    () => (
      <p className="text-gray-700 leading-relaxed">
        Your PAYE tax liability on a {timeFrame === "monthly" ? "monthly" : "yearly"} income of {formatTanzaniaCurrency(taxResult.grossIncome)} amounts to {formatTanzaniaCurrency(taxResult.netTax)}. 
        This means you'll retain {formatTanzaniaCurrency(taxResult.netIncome)} as your net {timeFrame} income after tax obligations are met.
        {timeFrame === "monthly" ? 
          ` Over a full year, your total gross earnings would be ${formatTanzaniaCurrency(income * 12)}, with net earnings of ${formatTanzaniaCurrency(taxResult.netIncome * 12)}.` : 
          ` On a monthly basis, this works out to ${formatTanzaniaCurrency(Math.round(income / 12))} gross income and ${formatTanzaniaCurrency(Math.round(taxResult.netIncome / 12))} net income.`
        }
        The effective tax burden stands at {taxResult.effectiveTaxRate.toFixed(1)}%, with your income falling within the {taxResult.marginalTaxRate}% tax bracket.
        These calculations assume standard NSSF/PSSSF deductions are applied before PAYE computation.
      </p>
    ),
    
    // Variation 3 - Tax rate focused
    () => (
      <p className="text-gray-700 leading-relaxed">
        At an effective tax rate of {taxResult.effectiveTaxRate.toFixed(1)}%, your {timeFrame} income of {formatTanzaniaCurrency(taxResult.grossIncome)} will generate a PAYE tax obligation of {formatTanzaniaCurrency(taxResult.netTax)}. 
        Your marginal tax rate of {taxResult.marginalTaxRate}% determines how additional income will be taxed. After meeting your tax obligations, your disposable income becomes {formatTanzaniaCurrency(taxResult.netIncome)}.
        {timeFrame === "monthly" ? 
          ` Annually, this represents ${formatTanzaniaCurrency(income * 12)} in gross earnings and ${formatTanzaniaCurrency(taxResult.netIncome * 12)} in net earnings.` : 
          ` Monthly, this breaks down to ${formatTanzaniaCurrency(Math.round(income / 12))} gross and ${formatTanzaniaCurrency(Math.round(taxResult.netIncome / 12))} net.`
        }
        Social security contributions are factored into these calculations as they reduce taxable income for PAYE purposes.
      </p>
    ),
    
    // Variation 4 - Income breakdown approach
    () => (
      <p className="text-gray-700 leading-relaxed">
        Breaking down your {timeFrame} compensation of {formatTanzaniaCurrency(taxResult.grossIncome)}: the government claims {formatTanzaniaCurrency(taxResult.netTax)} through PAYE taxation, while you keep {formatTanzaniaCurrency(taxResult.netIncome)} for personal use.
        {timeFrame === "monthly" ? 
          ` Scaling up to annual figures: ${formatTanzaniaCurrency(income * 12)} gross income yields ${formatTanzaniaCurrency(taxResult.netIncome * 12)} net income.` : 
          ` On a monthly scale: ${formatTanzaniaCurrency(Math.round(income / 12))} gross becomes ${formatTanzaniaCurrency(Math.round(taxResult.netIncome / 12))} net.`
        }
        This taxation scenario results in an effective rate of {taxResult.effectiveTaxRate.toFixed(1)}% and places you in the {taxResult.marginalTaxRate}% marginal category.
        Social security deductions are applied before PAYE calculations, reducing your taxable income.
      </p>
    ),
    
    // Variation 5 - Tax calculation methodology
    () => (
      <p className="text-gray-700 leading-relaxed">
        The PAYE calculation methodology applied to your {timeFrame} income of {formatTanzaniaCurrency(taxResult.grossIncome)} determines a tax liability of {formatTanzaniaCurrency(taxResult.netTax)}, resulting in net earnings of {formatTanzaniaCurrency(taxResult.netIncome)}.
        {timeFrame === "monthly" ? 
          ` Extrapolated annually: gross income of ${formatTanzaniaCurrency(income * 12)} produces net income of ${formatTanzaniaCurrency(taxResult.netIncome * 12)}.` : 
          ` Divided monthly: gross income of ${formatTanzaniaCurrency(Math.round(income / 12))} yields net income of ${formatTanzaniaCurrency(Math.round(taxResult.netIncome / 12))}.`
        }
        This computation reflects an effective tax burden of {taxResult.effectiveTaxRate.toFixed(1)}% and places you in the {taxResult.marginalTaxRate}% marginal tax category.
        Statutory deductions for social security are applied before determining taxable income for PAYE purposes.
      </p>
    ),
    
    // Variation 6 - Tax bracket analysis
    () => (
      <p className="text-gray-700 leading-relaxed">
        Your income of {formatTanzaniaCurrency(taxResult.grossIncome)} per {timeFrame} places you in the {taxResult.marginalTaxRate}% marginal tax bracket, with an effective tax rate of {taxResult.effectiveTaxRate.toFixed(1)}%. 
        This results in a PAYE tax payment of {formatTanzaniaCurrency(taxResult.netTax)} and net income of {formatTanzaniaCurrency(taxResult.netIncome)}.
        {timeFrame === "monthly" ? 
          ` Your annual tax burden would be ${formatTanzaniaCurrency(taxResult.netTax * 12)} from total annual earnings of ${formatTanzaniaCurrency(income * 12)}.` : 
          ` Your monthly tax burden would be ${formatTanzaniaCurrency(Math.round(taxResult.netTax / 12))} from monthly earnings of ${formatTanzaniaCurrency(Math.round(income / 12))}.`
        }
        The calculation takes into account pension fund contributions that reduce your taxable base before applying PAYE rates.
      </p>
    ),
    
    // Variation 7 - Take-home pay focus
    () => (
      <p className="text-gray-700 leading-relaxed">
        Based on your {timeFrame === "monthly" ? "monthly" : "annual"} gross salary of {formatTanzaniaCurrency(taxResult.grossIncome)}, you can expect to take home {formatTanzaniaCurrency(taxResult.netIncome)} after PAYE tax deductions. 
        The Tanzania Revenue Authority will collect {formatTanzaniaCurrency(taxResult.netTax)} in PAYE tax from your {timeFrame} earnings.
        {timeFrame === "monthly" ? 
          ` On an annual basis, this translates to ${formatTanzaniaCurrency(income * 12)} gross income and ${formatTanzaniaCurrency(taxResult.netIncome * 12)} net income.` : 
          ` Breaking this down monthly, you'll earn ${formatTanzaniaCurrency(Math.round(income / 12))} gross and take home ${formatTanzaniaCurrency(Math.round(taxResult.netIncome / 12))}.`
        }
        This calculation reflects an effective tax rate of {taxResult.effectiveTaxRate.toFixed(1)}% and places you in the {taxResult.marginalTaxRate}% marginal tax bracket.
        Remember that social security contributions are deducted before calculating PAYE.
      </p>
    ),
    
    // Variation 8 - Tax efficiency analysis
    () => (
      <p className="text-gray-700 leading-relaxed">
        The tax efficiency of your {timeFrame} income of {formatTanzaniaCurrency(taxResult.grossIncome)} shows an effective rate of {taxResult.effectiveTaxRate.toFixed(1)}%, resulting in PAYE tax of {formatTanzaniaCurrency(taxResult.netTax)} and net income of {formatTanzaniaCurrency(taxResult.netIncome)}.
        {timeFrame === "monthly" ? 
          ` Tax efficiency over a full year: ${formatTanzaniaCurrency(taxResult.netTax * 12)} in taxes from ${formatTanzaniaCurrency(income * 12)} gross income.` : 
          ` Tax efficiency on a monthly basis: ${formatTanzaniaCurrency(Math.round(taxResult.netTax / 12))} in taxes from ${formatTanzaniaCurrency(Math.round(income / 12))} gross income.`
        }
        Your marginal tax rate of {taxResult.marginalTaxRate}% indicates the tax rate on any additional income earned.
        Tax efficiency benefits from pension contributions that lower your taxable income base.
      </p>
    ),
    
    // Variation 9 - Income tax structure
    () => (
      <p className="text-gray-700 leading-relaxed">
        Within Tanzania's income tax structure, your {timeFrame} earnings of {formatTanzaniaCurrency(taxResult.grossIncome)} are subject to {formatTanzaniaCurrency(taxResult.netTax)} in PAYE tax, leaving you with {formatTanzaniaCurrency(taxResult.netIncome)} in net income.
        {timeFrame === "monthly" ? 
          ` The annual tax structure applies ${formatTanzaniaCurrency(taxResult.netTax * 12)} in taxes to your ${formatTanzaniaCurrency(income * 12)} annual income.` : 
          ` The monthly tax structure applies ${formatTanzaniaCurrency(Math.round(taxResult.netTax / 12))} in taxes to your ${formatTanzaniaCurrency(Math.round(income / 12))} monthly income.`
        }
        This positions you at an effective tax rate of {taxResult.effectiveTaxRate.toFixed(1)}% within the {taxResult.marginalTaxRate}% marginal bracket.
        The tax structure incorporates social security deductions that provide tax relief on your gross income.
      </p>
    ),
    
    // Variation 10 - PAYE computation details
    () => (
      <p className="text-gray-700 leading-relaxed">
        PAYE computation on your {timeFrame} income of {formatTanzaniaCurrency(taxResult.grossIncome)} calculates to {formatTanzaniaCurrency(taxResult.netTax)} in tax liability, with remaining income of {formatTanzaniaCurrency(taxResult.netIncome)}.
        {timeFrame === "monthly" ? 
          ` Annual PAYE computation: ${formatTanzaniaCurrency(taxResult.netTax * 12)} total tax from ${formatTanzaniaCurrency(income * 12)} total income.` : 
          ` Monthly PAYE computation: ${formatTanzaniaCurrency(Math.round(taxResult.netTax / 12))} monthly tax from ${formatTanzaniaCurrency(Math.round(income / 12))} monthly income.`
        }
        The computation yields an effective tax rate of {taxResult.effectiveTaxRate.toFixed(1)}% and places you in the {taxResult.marginalTaxRate}% tax bracket.
        PAYE computation accounts for mandatory pension contributions that reduce your taxable income.
      </p>
    ),
    
    // Variation 11 - Tax burden analysis
    () => (
      <p className="text-gray-700 leading-relaxed">
        Your tax burden on {formatTanzaniaCurrency(taxResult.grossIncome)} {timeFrame} income amounts to {formatTanzaniaCurrency(taxResult.netTax)}, representing an effective tax rate of {taxResult.effectiveTaxRate.toFixed(1)}%. 
        This leaves you with a net income of {formatTanzaniaCurrency(taxResult.netIncome)} for your personal use.
        {timeFrame === "monthly" ? 
          ` Your annual tax burden totals ${formatTanzaniaCurrency(taxResult.netTax * 12)} from gross annual income of ${formatTanzaniaCurrency(income * 12)}.` : 
          ` Your monthly tax burden averages ${formatTanzaniaCurrency(Math.round(taxResult.netTax / 12))} from gross monthly income of ${formatTanzaniaCurrency(Math.round(income / 12))}.`
        }
        The tax burden calculation places you in the {taxResult.marginalTaxRate}% marginal tax bracket.
        Your tax burden is reduced by social security contributions deducted before PAYE calculation.
      </p>
    ),
    
    // Variation 12 - Disposable income focus
    () => (
      <p className="text-gray-700 leading-relaxed">
        From your {timeFrame} gross income of {formatTanzaniaCurrency(taxResult.grossIncome)}, PAYE tax deductions of {formatTanzaniaCurrency(taxResult.netTax)} result in disposable income of {formatTanzaniaCurrency(taxResult.netIncome)}.
        {timeFrame === "monthly" ? 
          ` Annual disposable income reaches ${formatTanzaniaCurrency(taxResult.netIncome * 12)} after ${formatTanzaniaCurrency(taxResult.netTax * 12)} in annual tax deductions.` : 
          ` Monthly disposable income amounts to ${formatTanzaniaCurrency(Math.round(taxResult.netIncome / 12))} after ${formatTanzaniaCurrency(Math.round(taxResult.netTax / 12))} in monthly tax deductions.`
        }
        Your disposable income reflects an effective tax rate of {taxResult.effectiveTaxRate.toFixed(1)}% and marginal rate of {taxResult.marginalTaxRate}%.
        Disposable income calculations benefit from pension contributions that lower your overall tax liability.
      </p>
    ),
    
    // Variation 13 - Net income calculation
    () => (
      <p className="text-gray-700 leading-relaxed">
        Net income calculation for your {timeFrame} salary of {formatTanzaniaCurrency(taxResult.grossIncome)} shows {formatTanzaniaCurrency(taxResult.netIncome)} after deducting {formatTanzaniaCurrency(taxResult.netTax)} in PAYE tax.
        {timeFrame === "monthly" ? 
          ` Net annual income calculation: ${formatTanzaniaCurrency(taxResult.netIncome * 12)} from ${formatTanzaniaCurrency(income * 12)} gross annual salary.` : 
          ` Net monthly income calculation: ${formatTanzaniaCurrency(Math.round(taxResult.netIncome / 12))} from ${formatTanzaniaCurrency(Math.round(income / 12))} gross monthly salary.`
        }
        The net income calculation incorporates an effective tax rate of {taxResult.effectiveTaxRate.toFixed(1)}% within the {taxResult.marginalTaxRate}% marginal bracket.
        Net income calculations account for social security contributions that provide tax advantages.
      </p>
    ),
    
    // Variation 14 - Tax obligation summary
    () => (
      <p className="text-gray-700 leading-relaxed">
        Your tax obligation summary for {formatTanzaniaCurrency(taxResult.grossIncome)} {timeFrame} income: PAYE tax of {formatTanzaniaCurrency(taxResult.netTax)} results in net income of {formatTanzaniaCurrency(taxResult.netIncome)}.
        {timeFrame === "monthly" ? 
          ` Annual tax obligation summary: ${formatTarzaniaCurrency(taxResult.netTax * 12)} PAYE tax from ${formatTanzaniaCurrency(income * 12)} annual income.` : 
          ` Monthly tax obligation summary: ${formatTanzaniaCurrency(Math.round(taxResult.netTax / 12))} PAYE tax from ${formatTanzaniaCurrency(Math.round(income / 12))} monthly income.`
        }
        Tax obligations are calculated at an effective rate of {taxResult.effectiveTaxRate.toFixed(1)}% with marginal rate positioning at {taxResult.marginalTaxRate}%.
        Tax obligations are optimized through pension fund contributions that reduce taxable income.
      </p>
    ),
    
    // Variation 15 - Comprehensive tax overview
    () => (
      <p className="text-gray-700 leading-relaxed">
        A comprehensive tax overview of your {timeFrame} income of {formatTanzaniaCurrency(taxResult.grossIncome)} reveals PAYE tax liability of {formatTanzaniaCurrency(taxResult.netTax)} and resulting net income of {formatTanzaniaCurrency(taxResult.netIncome)}.
        {timeFrame === "monthly" ? 
          ` Comprehensive annual overview: ${formatTanzaniaCurrency(taxResult.netTax * 12)} total tax liability from ${formatTanzaniaCurrency(income * 12)} total income.` : 
          ` Comprehensive monthly overview: ${formatTanzaniaCurrency(Math.round(taxResult.netTax / 12))} monthly tax liability from ${formatTanzaniaCurrency(Math.round(income / 12))} monthly income.`
        }
        The comprehensive analysis shows an effective tax rate of {taxResult.effectiveTaxRate.toFixed(1)}% and positions you in the {taxResult.marginalTaxRate}% marginal tax bracket.
        This comprehensive overview includes the tax benefits of mandatory pension contributions that enhance your overall tax efficiency.
      </p>
    )
  ];
  
  const selectedVariation = variations[variationIndex];
  
  return selectedVariation();
};

export default DynamicTaxOverviewParagraph;
