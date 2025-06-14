
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
    // Variation 1 - Standard tax calculation format
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
    
    // Variation 2 - Tax liability focused
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
        Your marginal tax rate of {taxResult.marginalTaxRate}% determines how additional income will be taxed. After meeting your tax obligations, your net income becomes {formatTanzaniaCurrency(taxResult.netIncome)}.
        {timeFrame === "monthly" ? 
          ` Annually, this represents ${formatTanzaniaCurrency(income * 12)} in gross earnings and ${formatTanzaniaCurrency(taxResult.netIncome * 12)} in net earnings.` : 
          ` Monthly, this breaks down to ${formatTanzaniaCurrency(Math.round(income / 12))} gross and ${formatTanzaniaCurrency(Math.round(taxResult.netIncome / 12))} net.`
        }
        Social security contributions are factored into these calculations as they reduce taxable income for PAYE purposes.
      </p>
    ),
    
    // Variation 4 - Detailed tax breakdown
    () => (
      <p className="text-gray-700 leading-relaxed">
        Breaking down your {timeFrame} compensation of {formatTanzaniaCurrency(taxResult.grossIncome)}: the Tanzania Revenue Authority collects {formatTanzaniaCurrency(taxResult.netTax)} through PAYE taxation, while you keep {formatTanzaniaCurrency(taxResult.netIncome)} as net income.
        {timeFrame === "monthly" ? 
          ` Scaling up to annual figures: ${formatTanzaniaCurrency(income * 12)} gross income yields ${formatTanzaniaCurrency(taxResult.netIncome * 12)} net income.` : 
          ` On a monthly scale: ${formatTanzaniaCurrency(Math.round(income / 12))} gross becomes ${formatTanzaniaCurrency(Math.round(taxResult.netIncome / 12))} net.`
        }
         This taxation scenario results in an effective rate of {taxResult.effectiveTaxRate.toFixed(1)}% and places you in the {taxResult.marginalTaxRate}% marginal tax category.
        Social security deductions are applied before PAYE calculations, reducing your taxable income base.
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
    
    // Variation 6 - Income and tax comparison
    () => (
      <p className="text-gray-700 leading-relaxed">
        Your {timeFrame === "monthly" ? "monthly" : "annual"} gross salary of {formatTanzaniaCurrency(taxResult.grossIncome)} translates to {formatTanzaniaCurrency(taxResult.netIncome)} in take-home pay after PAYE tax deductions of {formatTanzaniaCurrency(taxResult.netTax)}. 
        The Tanzania tax system applies an effective rate of {taxResult.effectiveTaxRate.toFixed(1)}% to your income level.
        {timeFrame === "monthly" ? 
          ` On an annual basis, this translates to ${formatTanzaniaCurrency(income * 12)} gross income and ${formatTanzaniaCurrency(taxResult.netIncome * 12)} net income.` : 
          ` Breaking this down monthly, you'll earn ${formatTanzaniaCurrency(Math.round(income / 12))} gross and take home ${formatTanzaniaCurrency(Math.round(taxResult.netIncome / 12))}.`
        }
         Your income falls within the {taxResult.marginalTaxRate}% marginal tax bracket, with pension contributions reducing your overall tax liability.
      </p>
    ),
    
    // Variation 7 - Tax burden analysis
    () => (
      <p className="text-gray-700 leading-relaxed">
        The tax burden on your {timeFrame} income of {formatTanzaniaCurrency(taxResult.grossIncome)} amounts to {formatTanzaniaCurrency(taxResult.netTax)} in PAYE obligations, preserving {formatTanzaniaCurrency(taxResult.netIncome)} as your net income.
        This represents an effective tax rate of {taxResult.effectiveTaxRate.toFixed(1)}% on your gross earnings.
        {timeFrame === "monthly" ? 
          ` Over a full year, your tax burden totals ${formatTanzaniaCurrency(taxResult.netTax * 12)} from gross earnings of ${formatTanzaniaCurrency(income * 12)}.` : 
          ` Monthly, this tax burden averages ${formatTanzaniaCurrency(Math.round(taxResult.netTax / 12))} from monthly gross income of ${formatTanzaniaCurrency(Math.round(income / 12))}.`
        }
        Your marginal tax rate of {taxResult.marginalTaxRate}% determines the tax on any additional income, with social security contributions providing some tax relief.
      </p>
    ),
    
    // Variation 8 - Net income focused
    () => (
      <p className="text-gray-700 leading-relaxed">
        Based on your {timeFrame === "monthly" ? "monthly" : "annual"} gross income of {formatTanzaniaCurrency(taxResult.grossIncome)}, you can expect to receive {formatTanzaniaCurrency(taxResult.netIncome)} as net income after PAYE deductions. 
        The tax calculation removes {formatTanzaniaCurrency(taxResult.netTax)} from your gross earnings, representing an effective tax rate of {taxResult.effectiveTaxRate.toFixed(1)}%.
        {timeFrame === "monthly" ? 
          ` Annually, your net income totals ${formatTanzaniaCurrency(taxResult.netIncome * 12)} from gross annual earnings of ${formatTanzaniaCurrency(income * 12)}.` : 
          ` Monthly, your net income averages ${formatTanzaniaCurrency(Math.round(taxResult.netIncome / 12))} from gross monthly earnings of ${formatTanzaniaCurrency(Math.round(income / 12))}.`
        }
         This calculation places you in the {taxResult.marginalTaxRate}% marginal tax bracket, with mandatory pension contributions reducing your taxable base.
      </p>
    ),
    
    // Variation 9 - Tax efficiency analysis  
    () => (
      <p className="text-gray-700 leading-relaxed">
        Tax efficiency analysis of your {timeFrame} income of {formatTanzaniaCurrency(taxResult.grossIncome)} shows PAYE tax of {formatTanzaniaCurrency(taxResult.netTax)} and net income of {formatTanzaniaCurrency(taxResult.netIncome)}.
        Your tax efficiency rate stands at {taxResult.effectiveTaxRate.toFixed(1)}%, indicating the portion of income allocated to tax obligations.
        {timeFrame === "monthly" ? 
          ` Annual tax efficiency: ${formatTanzaniaCurrency(taxResult.netTax * 12)} in taxes from ${formatTanzaniaCurrency(income * 12)} gross income.` : 
          ` Monthly tax efficiency: ${formatTanzaniaCurrency(Math.round(taxResult.netTax / 12))} in taxes from ${formatTanzaniaCurrency(Math.round(income / 12))} gross income.`
        }
         The {taxResult.marginalTaxRate}% marginal rate applies to income increases, with social security contributions optimizing your overall tax position.
      </p>
    ),
    
    // Variation 10 - Gross to net conversion
    () => (
      <p className="text-gray-700 leading-relaxed">
        Converting your gross {timeFrame} income of {formatTanzaniaCurrency(taxResult.grossIncome)} to net income involves deducting {formatTanzaniaCurrency(taxResult.netTax)} in PAYE tax, resulting in {formatTanzaniaCurrency(taxResult.netIncome)} available income.
        This gross-to-net conversion reflects Tanzania's progressive tax system with your effective rate at {taxResult.effectiveTaxRate.toFixed(1)}%.
        {timeFrame === "monthly" ? 
          ` Annual conversion: ${formatTanzaniaCurrency(income * 12)} gross converts to ${formatTanzaniaCurrency(taxResult.netIncome * 12)} net income.` : 
          ` Monthly conversion: ${formatTanzaniaCurrency(Math.round(income / 12))} gross converts to ${formatTanzaniaCurrency(Math.round(taxResult.netIncome / 12))} net income.`
        }
         Your income level positions you in the {taxResult.marginalTaxRate}% marginal bracket, with pension fund contributions reducing your taxable income.
      </p>
    ),
    
    // Variation 11 - Tax obligation summary
    () => (
      <p className="text-gray-700 leading-relaxed">
        Your tax obligations on a {timeFrame} income of {formatTanzaniaCurrency(taxResult.grossIncome)} total {formatTanzaniaCurrency(taxResult.netTax)} in PAYE contributions to Tanzania's revenue system.
        After fulfilling these tax obligations, your disposable income becomes {formatTanzaniaCurrency(taxResult.netIncome)}.
        {timeFrame === "monthly" ? 
          ` Annual tax obligations: ${formatTanzaniaCurrency(taxResult.netTax * 12)} from total earnings of ${formatTanzaniaCurrency(income * 12)}.` : 
          ` Monthly tax obligations: ${formatTanzaniaCurrency(Math.round(taxResult.netTax / 12))} from monthly earnings of ${formatTanzaniaCurrency(Math.round(income / 12))}.`
        }
         The effective tax obligation rate of {taxResult.effectiveTaxRate.toFixed(1)}% places you in the {taxResult.marginalTaxRate}% marginal category, with social security deductions providing tax base reduction.
      </p>
    ),
    
    // Variation 12 - Income tax structure
    () => (
      <p className="text-gray-700 leading-relaxed">
        Tanzania's income tax structure applies to your {timeFrame} earnings of {formatTanzaniaCurrency(taxResult.grossIncome)}, generating {formatTanzaniaCurrency(taxResult.netTax)} in PAYE tax and {formatTanzaniaCurrency(taxResult.netIncome)} in net income.
        The tax structure creates an effective rate of {taxResult.effectiveTaxRate.toFixed(1)}% for your income level.
        {timeFrame === "monthly" ? 
          ` Under this tax structure, annual figures show ${formatTanzaniaCurrency(income * 12)} gross and ${formatTanzaniaCurrency(taxResult.netIncome * 12)} net.` : 
          ` Under this tax structure, monthly figures show ${formatTanzaniaCurrency(Math.round(income / 12))} gross and ${formatTanzaniaCurrency(Math.round(taxResult.netIncome / 12))} net.`
        }
         Your position in the {taxResult.marginalTaxRate}% marginal bracket reflects the progressive nature of Tanzania's tax structure, with pension contributions integrated into the calculation.
      </p>
    ),
    
    // Variation 13 - Tax calculation results
    () => (
      <p className="text-gray-700 leading-relaxed">
        Tax calculation results for your {timeFrame} income of {formatTanzaniaCurrency(taxResult.grossIncome)} show PAYE tax of {formatTanzaniaCurrency(taxResult.netTax)} and resulting net income of {formatTanzaniaCurrency(taxResult.netIncome)}.
        These calculation results demonstrate an effective tax rate of {taxResult.effectiveTaxRate.toFixed(1)}% applied to your gross earnings.
        {timeFrame === "monthly" ? 
          ` Calculation results scale to annual tax of ${formatTanzaniaCurrency(taxResult.netTax * 12)} and net income of ${formatTanzaniaCurrency(taxResult.netIncome * 12)}.` : 
          ` Calculation results break down to monthly tax of ${formatTanzaniaCurrency(Math.round(taxResult.netTax / 12))} and net income of ${formatTanzaniaCurrency(Math.round(taxResult.netIncome / 12))}.`
        }
         The results place you in the {taxResult.marginalTaxRate}% marginal tax bracket, with social security contributions factored into the tax base calculation.
      </p>
    ),
    
    // Variation 14 - PAYE tax assessment
    () => (
      <p className="text-gray-700 leading-relaxed">
        PAYE tax assessment on your {timeFrame} income of {formatTanzaniaCurrency(taxResult.grossIncome)} results in tax liability of {formatTanzaniaCurrency(taxResult.netTax)} and take-home pay of {formatTanzaniaCurrency(taxResult.netIncome)}.
        This assessment reflects the current PAYE tax rates with an effective rate of {taxResult.effectiveTaxRate.toFixed(1)}% for your income bracket.
        {timeFrame === "monthly" ? 
          ` Annual assessment totals: ${formatTanzaniaCurrency(taxResult.netTax * 12)} in tax liability from ${formatTanzaniaCurrency(income * 12)} gross income.` : 
          ` Monthly assessment averages: ${formatTanzaniaCurrency(Math.round(taxResult.netTax / 12))} in tax liability from ${formatTanzaniaCurrency(Math.round(income / 12))} gross income.`
        }
         Your tax assessment positions you in the {taxResult.marginalTaxRate}% marginal rate category, with mandatory pension contributions reducing the assessable income.
      </p>
    ),
    
    // Variation 15 - Income after tax analysis
    () => (
      <p className="text-gray-700 leading-relaxed">
        Income after tax analysis of your {timeFrame} earnings of {formatTanzaniaCurrency(taxResult.grossIncome)} shows {formatTanzaniaCurrency(taxResult.netIncome)} remaining after {formatTanzaniaCurrency(taxResult.netTax)} in PAYE deductions.
        This after-tax income represents {(100 - taxResult.effectiveTaxRate).toFixed(1)}% of your gross earnings, with {taxResult.effectiveTaxRate.toFixed(1)}% allocated to tax obligations.
        {timeFrame === "monthly" ? 
          ` Annual after-tax analysis: ${formatTanzaniaCurrency(taxResult.netIncome * 12)} from ${formatTanzaniaCurrency(income * 12)} gross annual income.` : 
          ` Monthly after-tax analysis: ${formatTanzaniaCurrency(Math.round(taxResult.netIncome / 12))} from ${formatTanzaniaCurrency(Math.round(income / 12))} gross monthly income.`
        }
         The analysis confirms your {taxResult.marginalTaxRate}% marginal tax rate position, with social security contributions providing beneficial tax treatment in the calculation.
      </p>
    )
  ];
  
  const selectedVariation = variations[variationIndex];
  
  return selectedVariation();
};

export default DynamicTaxOverviewParagraph;
