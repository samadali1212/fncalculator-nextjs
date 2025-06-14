
import { formatTanzaniaCurrency, TanzaniaTaxCalculationResult, TanzaniaTimeFrame } from "../utils/tanzaniaTaxCalculator";

interface DynamicTaxOverviewParagraphProps {
  taxResult: TanzaniaTaxCalculationResult;
  timeFrame: TanzaniaTimeFrame;
  income: number;
}

const DynamicTaxOverviewParagraph = ({ taxResult, timeFrame, income }: DynamicTaxOverviewParagraphProps) => {
  // Generate a variation index based on the income to ensure consistency for the same income
  const variationIndex = Math.abs(income) % 20;
  
  const variations = [
    // Variation 1 - Standard format
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
    
    // Variation 2 - Focus on take-home pay first
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
    
    // Variation 3 - Tax-focused approach
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
    
    // Variation 4 - Percentage-focused
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
    
    // Variation 5 - Practical approach
    () => (
      <p className="text-gray-700 leading-relaxed">
        For practical budgeting purposes, your {formatTanzaniaCurrency(taxResult.grossIncome)} {timeFrame} salary translates to {formatTanzaniaCurrency(taxResult.netIncome)} in actual spending power after PAYE deductions of {formatTanzaniaCurrency(taxResult.netTax)}.
        {timeFrame === "monthly" ? 
          ` This means your annual financial capacity is ${formatTanzaniaCurrency(taxResult.netIncome * 12)} from a total gross income of ${formatTanzaniaCurrency(income * 12)}.` : 
          ` Monthly, you can plan with ${formatTanzaniaCurrency(Math.round(taxResult.netIncome / 12))} in available funds from ${formatTanzaniaCurrency(Math.round(income / 12))} gross monthly income.`
        }
        Your income is taxed at an effective rate of {taxResult.effectiveTaxRate.toFixed(1)}%, positioning you in the {taxResult.marginalTaxRate}% marginal bracket.
        These figures account for mandatory pension contributions that reduce your taxable base.
      </p>
    ),
    
    // Variation 6 - Detailed breakdown focus
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
    
    // Variation 7 - Future planning approach
    () => (
      <p className="text-gray-700 leading-relaxed">
        Planning your finances around a {timeFrame} income of {formatTanzaniaCurrency(taxResult.grossIncome)} requires understanding that {formatTanzaniaCurrency(taxResult.netTax)} will be allocated to PAYE tax, leaving {formatTanzaniaCurrency(taxResult.netIncome)} for your personal financial goals.
        {timeFrame === "monthly" ? 
          ` Over the course of a year, you'll earn ${formatTanzaniaCurrency(income * 12)} gross and have ${formatTanzaniaCurrency(taxResult.netIncome * 12)} available for savings and expenses.` : 
          ` Month by month, this translates to ${formatTanzaniaCurrency(Math.round(income / 12))} gross income and ${formatTanzaniaCurrency(Math.round(taxResult.netIncome / 12))} net income.`
        }
        Your {taxResult.effectiveTaxRate.toFixed(1)}% effective tax rate and {taxResult.marginalTaxRate}% marginal rate should inform your financial planning decisions.
        Remember that pension fund contributions reduce your PAYE liability by lowering taxable income.
      </p>
    ),
    
    // Variation 8 - Comparative approach
    () => (
      <p className="text-gray-700 leading-relaxed">
        Compared to other income levels, your {timeFrame} earnings of {formatTanzaniaCurrency(taxResult.grossIncome)} generate a moderate PAYE burden of {formatTanzaniaCurrency(taxResult.netTax)}, preserving {formatTanzaniaCurrency(taxResult.netIncome)} for personal use.
        {timeFrame === "monthly" ? 
          ` This monthly arrangement scales to ${formatTanzaniaCurrency(income * 12)} annual gross income and ${formatTanzaniaCurrency(taxResult.netIncome * 12)} annual net income.` : 
          ` This annual structure breaks down to ${formatTanzaniaCurrency(Math.round(income / 12))} monthly gross and ${formatTanzaniaCurrency(Math.round(taxResult.netIncome / 12))} monthly net.`
        }
        With an effective tax rate of {taxResult.effectiveTaxRate.toFixed(1)}% and marginal rate of {taxResult.marginalTaxRate}%, you're positioned favorably within Tanzania's tax structure.
        Social insurance contributions are deducted before PAYE calculations, providing some tax relief.
      </p>
    ),
    
    // Variation 9 - Economic context
    () => (
      <p className="text-gray-700 leading-relaxed">
        Within Tanzania's economic framework, your {timeFrame} income of {formatTanzaniaCurrency(taxResult.grossIncome)} contributes {formatTanzaniaCurrency(taxResult.netTax)} to public revenues through PAYE taxation, while securing {formatTanzaniaCurrency(taxResult.netIncome)} for your household economy.
        {timeFrame === "monthly" ? 
          ` Annually, this represents a contribution of ${formatTanzaniaCurrency(taxResult.netTax * 12)} to national development from total earnings of ${formatTanzaniaCurrency(income * 12)}.` : 
          ` Monthly, this means ${formatTanzaniaCurrency(Math.round(taxResult.netTax / 12))} in tax contributions from ${formatTanzaniaCurrency(Math.round(income / 12))} gross monthly income.`
        }
        Your tax efficiency stands at {taxResult.effectiveTaxRate.toFixed(1)}% effective rate with a {taxResult.marginalTaxRate}% marginal bracket positioning.
        The tax calculation incorporates pension contributions that reduce your overall tax burden.
      </p>
    ),
    
    // Variation 10 - Calculation methodology
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
    
    // Variation 11 - Benefits focus
    () => (
      <p className="text-gray-700 leading-relaxed">
        Your {timeFrame} compensation package of {formatTanzaniaCurrency(taxResult.grossIncome)} provides substantial benefits: after fulfilling your {formatTanzaniaCurrency(taxResult.netTax)} PAYE obligation, you retain {formatTanzaniaCurrency(taxResult.netIncome)} for personal financial management.
        {timeFrame === "monthly" ? 
          ` The annual benefit amounts to ${formatTanzaniaCurrency(taxResult.netIncome * 12)} in disposable income from ${formatTanzaniaCurrency(income * 12)} total earnings.` : 
          ` The monthly benefit equals ${formatTanzaniaCurrency(Math.round(taxResult.netIncome / 12))} in disposable income from ${formatTanzaniaCurrency(Math.round(income / 12))} monthly earnings.`
        }
        Your favorable tax position includes an effective rate of {taxResult.effectiveTaxRate.toFixed(1)}% and marginal rate of {taxResult.marginalTaxRate}%.
        Social security contributions provide additional value by reducing your PAYE tax base while building retirement benefits.
      </p>
    ),
    
    // Variation 12 - Professional context
    () => (
      <p className="text-gray-700 leading-relaxed">
        Professional tax planning for your {timeFrame} income of {formatTanzaniaCurrency(taxResult.grossIncome)} reveals a PAYE liability of {formatTanzaniaCurrency(taxResult.netTax)} and net professional earnings of {formatTanzaniaCurrency(taxResult.netIncome)}.
        {timeFrame === "monthly" ? 
          ` Professional annual earnings total ${formatTanzaniaCurrency(income * 12)} gross with ${formatTanzaniaCurrency(taxResult.netIncome * 12)} available for professional development and personal goals.` : 
          ` Professional monthly earnings average ${formatTanzaniaCurrency(Math.round(income / 12))} gross with ${formatTanzaniaCurrency(Math.round(taxResult.netIncome / 12))} for monthly professional and personal expenses.`
        }
        Your professional tax profile shows an effective rate of {taxResult.effectiveTaxRate.toFixed(1)}% and positions you in the {taxResult.marginalTaxRate}% marginal bracket.
        Professional benefits include reduced taxable income through mandatory pension contributions.
      </p>
    ),
    
    // Variation 13 - Lifestyle implications
    () => (
      <p className="text-gray-700 leading-relaxed">
        Your lifestyle is supported by a {timeFrame} income of {formatTanzaniaCurrency(taxResult.grossIncome)}, which after accounting for {formatTanzaniaCurrency(taxResult.netTax)} in PAYE taxes, provides {formatTanzaniaCurrency(taxResult.netIncome)} for lifestyle expenses and savings.
        {timeFrame === "monthly" ? 
          ` This lifestyle is sustained by annual earnings of ${formatTanzaniaCurrency(income * 12)} gross, delivering ${formatTanzaniaCurrency(taxResult.netIncome * 12)} in net annual income.` : 
          ` This lifestyle is maintained through monthly earnings of ${formatTanzaniaCurrency(Math.round(income / 12))} gross, providing ${formatTanzaniaCurrency(Math.round(taxResult.netIncome / 12))} monthly.`
        }
        The lifestyle implications include an effective tax rate of {taxResult.effectiveTaxRate.toFixed(1)}% and marginal tax considerations at {taxResult.marginalTaxRate}%.
        Lifestyle planning benefits from the tax advantages of mandatory retirement savings contributions.
      </p>
    ),
    
    // Variation 14 - Investment perspective
    () => (
      <p className="text-gray-700 leading-relaxed">
        From an investment perspective, your {timeFrame} income of {formatTanzaniaCurrency(taxResult.grossIncome)} generates investable surplus of {formatTanzaniaCurrency(taxResult.netIncome)} after satisfying PAYE obligations of {formatTanzaniaCurrency(taxResult.netTax)}.
        {timeFrame === "monthly" ? 
          ` Investment planning can work with annual gross income of ${formatTanzaniaCurrency(income * 12)} and net investable income of ${formatTanzaniaCurrency(taxResult.netIncome * 12)}.` : 
          ` Investment planning can utilize monthly gross income of ${formatTanzaniaCurrency(Math.round(income / 12))} and net monthly surplus of ${formatTanzaniaCurrency(Math.round(taxResult.netIncome / 12))}.`
        }
        Investment tax planning should consider your {taxResult.effectiveTaxRate.toFixed(1)}% effective rate and {taxResult.marginalTaxRate}% marginal tax bracket.
        Investment opportunities benefit from the tax-efficient nature of pension contributions that reduce current tax liability.
      </p>
    ),
    
    // Variation 15 - Family financial planning
    () => (
      <p className="text-gray-700 leading-relaxed">
        Family financial planning with a {timeFrame} income of {formatTanzaniaCurrency(taxResult.grossIncome)} requires budgeting around {formatTanzaniaCurrency(taxResult.netIncome)} in available family resources after {formatTanzaniaCurrency(taxResult.netTax)} in PAYE deductions.
        {timeFrame === "monthly" ? 
          ` Family annual financial planning works with ${formatTanzaniaCurrency(income * 12)} gross family income and ${formatTanzaniaCurrency(taxResult.netIncome * 12)} net family resources.` : 
          ` Family monthly financial planning utilizes ${formatTanzaniaCurrency(Math.round(income / 12))} gross monthly income and ${formatTanzaniaCurrency(Math.round(taxResult.netIncome / 12))} net monthly resources.`
        }
        Family tax planning incorporates an effective tax rate of {taxResult.effectiveTaxRate.toFixed(1)}% and marginal considerations at {taxResult.marginalTaxRate}%.
        Family financial security benefits from the retirement savings that reduce current tax obligations.
      </p>
    ),
    
    // Variation 16 - Career progression context
    () => (
      <p className="text-gray-700 leading-relaxed">
        Career progression analysis of your {timeFrame} income of {formatTanzaniaCurrency(taxResult.grossIncome)} shows career advancement value of {formatTanzaniaCurrency(taxResult.netIncome)} after career-related tax obligations of {formatTanzaniaCurrency(taxResult.netTax)}.
        {timeFrame === "monthly" ? 
          ` Career annual progression represents ${formatTanzaniaCurrency(income * 12)} in gross career value with ${formatTanzaniaCurrency(taxResult.netIncome * 12)} in net career advancement.` : 
          ` Career monthly progression delivers ${formatTanzaniaCurrency(Math.round(income / 12))} gross monthly value with ${formatTanzaniaCurrency(Math.round(taxResult.netIncome / 12))} net monthly advancement.`
        }
        Career tax implications include an effective rate of {taxResult.effectiveTaxRate.toFixed(1)}% and positioning in the {taxResult.marginalTaxRate}% marginal bracket.
        Career development benefits from pension contributions that optimize current tax efficiency.
      </p>
    ),
    
    // Variation 17 - Economic contribution
    () => (
      <p className="text-gray-700 leading-relaxed">
        Your economic contribution through a {timeFrame} income of {formatTanzaniaCurrency(taxResult.grossIncome)} includes {formatTanzaniaCurrency(taxResult.netTax)} in public revenue generation while maintaining {formatTanzaniaCurrency(taxResult.netIncome)} for personal economic activity.
        {timeFrame === "monthly" ? 
          ` Annual economic contribution totals ${formatTanzaniaCurrency(taxResult.netTax * 12)} in public revenues from ${formatTanzaniaCurrency(income * 12)} gross economic activity.` : 
          ` Monthly economic contribution averages ${formatTanzaniaCurrency(Math.round(taxResult.netTax / 12))} in public revenues from ${formatTanzaniaCurrency(Math.round(income / 12))} gross monthly activity.`
        }
        Economic efficiency reflects an effective tax rate of {taxResult.effectiveTaxRate.toFixed(1)}% and marginal economic positioning at {taxResult.marginalTaxRate}%.
        Economic planning leverages pension contribution benefits that enhance overall tax efficiency.
      </p>
    ),
    
    // Variation 18 - Savings and expenses
    () => (
      <p className="text-gray-700 leading-relaxed">
        Savings and expense planning for your {timeFrame} income of {formatTanzaniaCurrency(taxResult.grossIncome)} allocates {formatTanzaniaCurrency(taxResult.netTax)} to tax expenses while preserving {formatTanzaniaCurrency(taxResult.netIncome)} for savings and living expenses.
        {timeFrame === "monthly" ? 
          ` Annual savings potential reaches ${formatTanzaniaCurrency(taxResult.netIncome * 12)} from total gross income of ${formatTanzaniaCurrency(income * 12)}.` : 
          ` Monthly savings and expenses work with ${formatTanzaniaCurrency(Math.round(taxResult.netIncome / 12))} from gross monthly income of ${formatTanzaniaCurrency(Math.round(income / 12))}.`
        }
        Savings tax optimization benefits from your {taxResult.effectiveTaxRate.toFixed(1)}% effective rate and {taxResult.marginalTaxRate}% marginal tax position.
        Savings strategies should leverage pension contributions that provide immediate tax advantages.
      </p>
    ),
    
    // Variation 19 - Financial security
    () => (
      <p className="text-gray-700 leading-relaxed">
        Financial security planning around your {timeFrame} income of {formatTanzaniaCurrency(taxResult.grossIncome)} ensures {formatTanzaniaCurrency(taxResult.netIncome)} remains available for security building after meeting {formatTanzaniaCurrency(taxResult.netTax)} in tax obligations.
        {timeFrame === "monthly" ? 
          ` Financial security scales to ${formatTanzaniaCurrency(taxResult.netIncome * 12)} annually from ${formatTanzaniaCurrency(income * 12)} gross annual income.` : 
          ` Financial security provides ${formatTanzaniaCurrency(Math.round(taxResult.netIncome / 12))} monthly from ${formatTanzaniaCurrency(Math.round(income / 12))} gross monthly income.`
        }
        Security planning incorporates an effective tax rate of {taxResult.effectiveTaxRate.toFixed(1)}% and marginal tax implications at {taxResult.marginalTaxRate}%.
        Financial security benefits significantly from pension contributions that reduce immediate tax burden while building long-term security.
      </p>
    ),
    
    // Variation 20 - Comprehensive overview
    () => (
      <p className="text-gray-700 leading-relaxed">
        A comprehensive overview of your {timeFrame} financial position shows {formatTanzaniaCurrency(taxResult.grossIncome)} in gross income supporting {formatTanzaniaCurrency(taxResult.netIncome)} in net financial capacity after comprehensive tax planning that includes {formatTanzaniaCurrency(taxResult.netTax)} in PAYE obligations.
        {timeFrame === "monthly" ? 
          ` Comprehensive annual financial position: ${formatTanzaniaCurrency(income * 12)} gross income supporting ${formatTanzaniaCurrency(taxResult.netIncome * 12)} net annual capacity.` : 
          ` Comprehensive monthly financial position: ${formatTanzaniaCurrency(Math.round(income / 12))} gross income supporting ${formatTanzaniaCurrency(Math.round(taxResult.netIncome / 12))} net monthly capacity.`
        }
        Comprehensive tax analysis reveals an effective rate of {taxResult.effectiveTaxRate.toFixed(1)}% and strategic positioning in the {taxResult.marginalTaxRate}% marginal bracket.
        Comprehensive financial planning maximizes the benefits of pension contributions that enhance overall tax efficiency and retirement preparedness.
      </p>
    )
  ];
  
  const selectedVariation = variations[variationIndex];
  
  return selectedVariation();
};

export default DynamicTaxOverviewParagraph;
