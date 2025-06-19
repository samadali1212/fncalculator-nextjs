import { formatSouthAfricaCurrency, SouthAfricaTaxCalculationResult, SouthAfricaTimeFrame } from "../utils/southAfricaTaxCalculator";

interface DynamicTaxOverviewParagraphProps {
  taxResult: SouthAfricaTaxCalculationResult;
  timeFrame: SouthAfricaTimeFrame;
  income: number;
}

const DynamicTaxOverviewParagraph = ({ taxResult, timeFrame, income }: DynamicTaxOverviewParagraphProps) => {
  // Generate a variation index based on the income to ensure consistency for the same income
  const variationIndex = Math.abs(income) % 15;
  
  const variations = [
    // Variation 1 - Standard tax calculation format
    () => (
      <p className="text-gray-700 leading-relaxed">
        With a {timeFrame === "monthly" ? "monthly" : "yearly"} income of {formatSouthAfricaCurrency(taxResult.grossIncome)} in South Africa, your PAYE tax would be approximately 
        {" "}{formatSouthAfricaCurrency(taxResult.netTax)} per {timeFrame === "yearly" ? "year" : "month"}, leaving you with a take-home pay of 
        {" "}{formatSouthAfricaCurrency(taxResult.netIncome)} per {timeFrame === "yearly" ? "year" : "month"}.
        {timeFrame === "monthly" ? 
          ` This equals an annual income of ${formatSouthAfricaCurrency(income * 12)} with annual take-home pay of ${formatSouthAfricaCurrency(taxResult.netIncome * 12)}.` : 
          ` This equals a monthly income of ${formatSouthAfricaCurrency(Math.round(income / 12))} with monthly take-home pay of ${formatSouthAfricaCurrency(Math.round(taxResult.netIncome / 12))}.` 
        }
        {" "}Your effective tax rate is {taxResult.effectiveTaxRate.toFixed(1)}%, while your marginal tax rate is {taxResult.marginalTaxRate.toFixed(1)}%.
        {" "}Please note that PAYE is calculated after applying age-related rebates based on your age group.
      </p>
    ),
    
    // Variation 2 - Tax liability focused
    () => (
      <p className="text-gray-700 leading-relaxed">
        Your PAYE tax liability on a {timeFrame === "monthly" ? "monthly" : "yearly"} income of {formatSouthAfricaCurrency(taxResult.grossIncome)} amounts to {formatSouthAfricaCurrency(taxResult.netTax)}. 
        This means you'll retain {formatSouthAfricaCurrency(taxResult.netIncome)} as your net {timeFrame} income after tax obligations are met.
        {timeFrame === "monthly" ? 
          ` Over a full year, your total gross earnings would be ${formatSouthAfricaCurrency(income * 12)}, with net earnings of ${formatSouthAfricaCurrency(taxResult.netIncome * 12)}.` : 
          ` On a monthly basis, this works out to ${formatSouthAfricaCurrency(Math.round(income / 12))} gross income and ${formatSouthAfricaCurrency(Math.round(taxResult.netIncome / 12))} net income.`
        } 
        {" "}The effective tax burden stands at {taxResult.effectiveTaxRate.toFixed(1)}%, with your income falling within the {taxResult.marginalTaxRate.toFixed(1)}% tax bracket.
        {" "}These calculations include applicable tax rebates based on your age category.
      </p>
    ),
    
    // Variation 3 - Tax rate focused
    () => (
      <p className="text-gray-700 leading-relaxed">
        At an effective tax rate of {taxResult.effectiveTaxRate.toFixed(1)}%, your {timeFrame} income of {formatSouthAfricaCurrency(taxResult.grossIncome)} will generate a PAYE tax obligation of {formatSouthAfricaCurrency(taxResult.netTax)}. 
        Your marginal tax rate of {taxResult.marginalTaxRate.toFixed(1)}% determines how additional income will be taxed. After meeting your tax obligations, your net income becomes {formatSouthAfricaCurrency(taxResult.netIncome)}.
        {timeFrame === "monthly" ? 
          ` Annually, this represents ${formatSouthAfricaCurrency(income * 12)} in gross earnings and ${formatSouthAfricaCurrency(taxResult.netIncome * 12)} in net earnings.` : 
          ` Monthly, this breaks down to ${formatSouthAfricaCurrency(Math.round(income / 12))} gross and ${formatSouthAfricaCurrency(Math.round(taxResult.netIncome / 12))} net.`
        } 
        {" "}Tax rebates are automatically applied based on your age to reduce your overall tax liability.
      </p>
    ),
    
    // Variation 4 - Detailed tax breakdown
    () => (
      <p className="text-gray-700 leading-relaxed">
        Breaking down your {timeFrame} compensation of {formatSouthAfricaCurrency(taxResult.grossIncome)}: the South African Revenue Service collects {formatSouthAfricaCurrency(taxResult.netTax)} through PAYE taxation, while you keep {formatSouthAfricaCurrency(taxResult.netIncome)} as net income.
        {timeFrame === "monthly" ? 
          ` Scaling up to annual figures: ${formatSouthAfricaCurrency(income * 12)} gross income yields ${formatSouthAfricaCurrency(taxResult.netIncome * 12)} net income.` : 
          ` On a monthly scale: ${formatSouthAfricaCurrency(Math.round(income / 12))} gross becomes ${formatSouthAfricaCurrency(Math.round(taxResult.netIncome / 12))} net.`
        } 
        {" "}This taxation scenario results in an effective rate of {taxResult.effectiveTaxRate.toFixed(1)}% and places you in the {taxResult.marginalTaxRate.toFixed(1)}% marginal tax category.
        {" "}Age-based tax rebates are factored into these calculations to provide tax relief.
      </p>
    ),
    
    // Variation 5 - Tax calculation methodology
    () => (
      <p className="text-gray-700 leading-relaxed">
        The PAYE calculation methodology applied to your {timeFrame} income of {formatSouthAfricaCurrency(taxResult.grossIncome)} determines a tax liability of {formatSouthAfricaCurrency(taxResult.netTax)}, resulting in net earnings of {formatSouthAfricaCurrency(taxResult.netIncome)}.
        {timeFrame === "monthly" ? 
          ` Extrapolated annually: gross income of ${formatSouthAfricaCurrency(income * 12)} produces net income of ${formatSouthAfricaCurrency(taxResult.netIncome * 12)}.` : 
          ` Divided monthly: gross income of ${formatSouthAfricaCurrency(Math.round(income / 12))} yields net income of ${formatSouthAfricaCurrency(Math.round(taxResult.netIncome / 12))}.`
        }
        {" "}This computation reflects an effective tax burden of {taxResult.effectiveTaxRate.toFixed(1)}% and places you in the {taxResult.marginalTaxRate.toFixed(1)}% marginal tax category.
        {" "}The calculation incorporates statutory tax rebates that vary by age group to reduce your overall tax burden.
      </p>
    ),
    
    // Variation 6 - Income and tax comparison
    () => (
      <p className="text-gray-700 leading-relaxed">
        Your {timeFrame === "monthly" ? "monthly" : "annual"} gross salary of {formatSouthAfricaCurrency(taxResult.grossIncome)} translates to {formatSouthAfricaCurrency(taxResult.netIncome)} in take-home pay after PAYE tax deductions of {formatSouthAfricaCurrency(taxResult.netTax)}. 
        The South African tax system applies an effective rate of {taxResult.effectiveTaxRate.toFixed(1)}% to your income level.
        {timeFrame === "monthly" ? 
          ` On an annual basis, this translates to ${formatSouthAfricaCurrency(income * 12)} gross income and ${formatSouthAfricaCurrency(taxResult.netIncome * 12)} net income.` : 
          ` Breaking this down monthly, you'll earn ${formatSouthAfricaCurrency(Math.round(income / 12))} gross and take home ${formatSouthAfricaCurrency(Math.round(taxResult.netIncome / 12))}.`
        }
        {" "}Your income falls within the {taxResult.marginalTaxRate.toFixed(1)}% marginal tax bracket, with age-based rebates reducing your overall tax liability.
      </p>
    ),
    
    // Variation 7 - Tax burden analysis
    () => (
      <p className="text-gray-700 leading-relaxed">
        The tax burden on your {timeFrame} income of {formatSouthAfricaCurrency(taxResult.grossIncome)} amounts to {formatSouthAfricaCurrency(taxResult.netTax)} in PAYE obligations, preserving {formatSouthAfricaCurrency(taxResult.netIncome)} as your net income.
        This represents an effective tax rate of {taxResult.effectiveTaxRate.toFixed(1)}% on your gross earnings.
        {timeFrame === "monthly" ? 
          ` Over a full year, your tax burden totals ${formatSouthAfricaCurrency(taxResult.netTax * 12)} from gross earnings of ${formatSouthAfricaCurrency(income * 12)}.` : 
          ` Monthly, this tax burden averages ${formatSouthAfricaCurrency(Math.round(taxResult.netTax / 12))} from monthly gross income of ${formatSouthAfricaCurrency(Math.round(income / 12))}.`
        }
        {" "}Your marginal tax rate of {taxResult.marginalTaxRate.toFixed(1)}% determines the tax on any additional income, with tax rebates providing some relief based on your age.
      </p>
    ),
    
    // Variation 8 - Net income focused
    () => (
      <p className="text-gray-700 leading-relaxed">
        Based on your {timeFrame === "monthly" ? "monthly" : "annual"} gross income of {formatSouthAfricaCurrency(taxResult.grossIncome)}, you can expect to receive {formatSouthAfricaCurrency(taxResult.netIncome)} as net income after PAYE deductions. 
        The tax calculation removes {formatSouthAfricaCurrency(taxResult.netTax)} from your gross earnings, representing an effective tax rate of {taxResult.effectiveTaxRate.toFixed(1)}%.
        {timeFrame === "monthly" ? 
          ` Annually, your net income totals ${formatSouthAfricaCurrency(taxResult.netIncome * 12)} from gross annual earnings of ${formatSouthAfricaCurrency(income * 12)}.` : 
          ` Monthly, your net income averages ${formatSouthAfricaCurrency(Math.round(taxResult.netIncome / 12))} from gross monthly earnings of ${formatSouthAfricaCurrency(Math.round(income / 12))}.`
        }
        {" "}This calculation places you in the {taxResult.marginalTaxRate.toFixed(1)}% marginal tax bracket, with statutory tax rebates reducing your taxable liability.
      </p>
    ),
    
    // Variation 9 - Tax efficiency analysis  
    () => (
      <p className="text-gray-700 leading-relaxed">
        Tax efficiency analysis of your {timeFrame} income of {formatSouthAfricaCurrency(taxResult.grossIncome)} shows PAYE tax of {formatSouthAfricaCurrency(taxResult.netTax)} and net income of {formatSouthAfricaCurrency(taxResult.netIncome)}.
        Your tax efficiency rate stands at {taxResult.effectiveTaxRate.toFixed(1)}%, indicating the portion of income allocated to tax obligations.
        {timeFrame === "monthly" ? 
          ` Annual tax efficiency: ${formatSouthAfricaCurrency(taxResult.netTax * 12)} in taxes from ${formatSouthAfricaCurrency(income * 12)} gross income.` : 
          ` Monthly tax efficiency: ${formatSouthAfricaCurrency(Math.round(taxResult.netTax / 12))} in taxes from ${formatSouthAfricaCurrency(Math.round(income / 12))} gross income.`
        }
        {" "}The {taxResult.marginalTaxRate.toFixed(1)}% marginal rate applies to income increases, with age-related rebates optimizing your overall tax position.
      </p>
    ),
    
    // Variation 10 - Gross to net conversion
    () => (
      <p className="text-gray-700 leading-relaxed">
        Converting your gross {timeFrame} income of {formatSouthAfricaCurrency(taxResult.grossIncome)} to net income involves deducting {formatSouthAfricaCurrency(taxResult.netTax)} in PAYE tax, resulting in {formatSouthAfricaCurrency(taxResult.netIncome)} available income.
        This gross-to-net conversion reflects South Africa's progressive tax system with your effective rate at {taxResult.effectiveTaxRate.toFixed(1)}%.
        {timeFrame === "monthly" ? 
          ` Annual conversion: ${formatSouthAfricaCurrency(income * 12)} gross converts to ${formatSouthAfricaCurrency(taxResult.netIncome * 12)} net income.` : 
          ` Monthly conversion: ${formatSouthAfricaCurrency(Math.round(income / 12))} gross converts to ${formatSouthAfricaCurrency(Math.round(taxResult.netIncome / 12))} net income.`
        }
        {" "}Your income level positions you in the {taxResult.marginalTaxRate.toFixed(1)}% marginal bracket, with tax rebates reducing your overall tax burden.
      </p>
    ),
    
    // Variation 11 - Tax obligation summary
    () => (
      <p className="text-gray-700 leading-relaxed">
        Your tax obligations on a {timeFrame} income of {formatSouthAfricaCurrency(taxResult.grossIncome)} total {formatSouthAfricaCurrency(taxResult.netTax)} in PAYE contributions to South Africa's revenue system.
        After fulfilling these tax obligations, your disposable income becomes {formatSouthAfricaCurrency(taxResult.netIncome)}.
        {timeFrame === "monthly" ? 
          ` Annual tax obligations: ${formatSouthAfricaCurrency(taxResult.netTax * 12)} from total earnings of ${formatSouthAfricaCurrency(income * 12)}.` : 
          ` Monthly tax obligations: ${formatSouthAfricaCurrency(Math.round(taxResult.netTax / 12))} from monthly earnings of ${formatSouthAfricaCurrency(Math.round(income / 12))}.`
        }
        {" "}The effective tax obligation rate of {taxResult.effectiveTaxRate.toFixed(1)}% places you in the {taxResult.marginalTaxRate.toFixed(1)}% marginal category, with tax rebates providing relief based on your age.
      </p>
    ),
    
    // Variation 12 - Income tax structure
    () => (
      <p className="text-gray-700 leading-relaxed">
        South Africa's income tax structure applies to your {timeFrame} earnings of {formatSouthAfricaCurrency(taxResult.grossIncome)}, generating {formatSouthAfricaCurrency(taxResult.netTax)} in PAYE tax and {formatSouthAfricaCurrency(taxResult.netIncome)} in net income.
        The tax structure creates an effective rate of {taxResult.effectiveTaxRate.toFixed(1)}% for your income level.
        {timeFrame === "monthly" ? 
          ` Under this tax structure, annual figures show ${formatSouthAfricaCurrency(income * 12)} gross and ${formatSouthAfricaCurrency(taxResult.netIncome * 12)} net.` : 
          ` Under this tax structure, monthly figures show ${formatSouthAfricaCurrency(Math.round(income / 12))} gross and ${formatSouthAfricaCurrency(Math.round(taxResult.netIncome / 12))} net.`
        }
        {" "}Your position in the {taxResult.marginalTaxRate.toFixed(1)}% marginal bracket reflects the progressive nature of South Africa's tax structure, with age-based rebates integrated into the calculation.
      </p>
    ),
    
    // Variation 13 - Tax calculation results
    () => (
      <p className="text-gray-700 leading-relaxed">
        Tax calculation results for your {timeFrame} income of {formatSouthAfricaCurrency(taxResult.grossIncome)} show PAYE tax of {formatSouthAfricaCurrency(taxResult.netTax)} and resulting net income of {formatSouthAfricaCurrency(taxResult.netIncome)}.
        These calculation results demonstrate an effective tax rate of {taxResult.effectiveTaxRate.toFixed(1)}% applied to your gross earnings.
        {timeFrame === "monthly" ? 
          ` Calculation results scale to annual tax of ${formatSouthAfricaCurrency(taxResult.netTax * 12)} and net income of ${formatSouthAfricaCurrency(taxResult.netIncome * 12)}.` : 
          ` Calculation results break down to monthly tax of ${formatSouthAfricaCurrency(Math.round(taxResult.netTax / 12))} and net income of ${formatSouthAfricaCurrency(Math.round(taxResult.netIncome / 12))}.`
        }
        {" "}The results place you in the {taxResult.marginalTaxRate.toFixed(1)}% marginal tax bracket, with statutory rebates factored into the tax calculation.
      </p>
    ),
    
    // Variation 14 - PAYE tax assessment
    () => (
      <p className="text-gray-700 leading-relaxed">
        PAYE tax assessment on your {timeFrame} income of {formatSouthAfricaCurrency(taxResult.grossIncome)} results in tax liability of {formatSouthAfricaCurrency(taxResult.netTax)} and take-home pay of {formatSouthAfricaCurrency(taxResult.netIncome)}.
        This assessment reflects the current PAYE tax rates with an effective rate of {taxResult.effectiveTaxRate.toFixed(1)}% for your income bracket.
        {timeFrame === "monthly" ? 
          ` Annual assessment totals: ${formatSouthAfricaCurrency(taxResult.netTax * 12)} in tax liability from ${formatSouthAfricaCurrency(income * 12)} gross income.` : 
          ` Monthly assessment averages: ${formatSouthAfricaCurrency(Math.round(taxResult.netTax / 12))} in tax liability from ${formatSouthAfricaCurrency(Math.round(income / 12))} gross income.`
        }
        {" "}Your tax assessment positions you in the {taxResult.marginalTaxRate.toFixed(1)}% marginal rate category, with age-based rebates reducing the assessable liability.
      </p>
    ),
    
    // Variation 15 - Income after tax analysis
    () => (
      <p className="text-gray-700 leading-relaxed">
        Income after tax analysis of your {timeFrame} earnings of {formatSouthAfricaCurrency(taxResult.grossIncome)} shows {formatSouthAfricaCurrency(taxResult.netIncome)} remaining after {formatSouthAfricaCurrency(taxResult.netTax)} in PAYE deductions.
        This after-tax income represents {(100 - taxResult.effectiveTaxRate).toFixed(1)}% of your gross earnings, with {taxResult.effectiveTaxRate.toFixed(1)}% allocated to tax obligations.
        {timeFrame === "monthly" ? 
          ` Annual after-tax analysis: ${formatSouthAfricaCurrency(taxResult.netIncome * 12)} from ${formatSouthAfricaCurrency(income * 12)} gross annual income.` : 
          ` Monthly after-tax analysis: ${formatSouthAfricaCurrency(Math.round(taxResult.netIncome / 12))} from ${formatSouthAfricaCurrency(Math.round(income / 12))} gross monthly income.`
        }
        {" "}The analysis confirms your {taxResult.marginalTaxRate.toFixed(1)}% marginal tax rate position, with tax rebates providing beneficial treatment in the calculation.
      </p>
    )
  ];
  
  const selectedVariation = variations[variationIndex];
  
  return selectedVariation();
};

export default DynamicTaxOverviewParagraph;
