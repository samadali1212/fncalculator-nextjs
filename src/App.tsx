
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Salaries from "./pages/Salaries";
import JobDetail from "./pages/JobDetail";
import HourlyRates from "./pages/HourlyRates";
import HourlyRateDetail from "./pages/HourlyRateDetail";
import TaxCalculator from "./pages/TaxCalculator";
import TaxCalculationDetail from "./pages/TaxCalculationDetail";
import Celebrities from "./pages/Celebrities";
import CelebrityDetail from "./pages/CelebrityDetail";
import NetWorth from "./pages/NetWorth";
import NetWorthDetail from "./pages/NetWorthDetail";
import CompareNetWorth from "./pages/CompareNetWorth";
import CompareCelebritySalaries from "./pages/CompareCelebritySalaries";
import SalaryComparisonList from "./pages/SalaryComparisonList";
import NetWorthCategory from "./pages/NetWorthCategory";
import StandaloneCategories from "./pages/StandaloneCategories";
import StandaloneCelebrityCategories from "./pages/StandaloneCelebrityCategories";
import CelebrityCategory from "./pages/CelebrityCategory";
import GeneralKnowledge from "./pages/GeneralKnowledge";
import GeneralKnowledgeDetail from "./pages/GeneralKnowledgeDetail";
import GeneralKnowledgeCategory from "./pages/GeneralKnowledgeCategory";
import GeneralKnowledgeCategories from "./pages/GeneralKnowledgeCategories";
import NotFound from "./pages/NotFound";
import BranchCodes from "./pages/BranchCodes";
import BranchCodeDetail from "./pages/BranchCodeDetail";
import { celebrities } from "./utils/celebrityData";

// Get the first two celebrities from the data file for default comparison
const getDefaultCelebrities = () => {
  if (celebrities.length >= 2) {
    return `${celebrities[0].slug}-vs-${celebrities[1].slug}`;
  }
  return "";
};

const App = () => {
  // Get default celebrities for comparison
  const defaultCelebrityComparison = getDefaultCelebrities();
  
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Set BranchCodes as the explicit homepage */}
          <Route path="/" element={<Salaries />} />
          {/* Ensure branch-codes path also works and doesn't create duplicate content */}
          <Route path="/salaries" element={<Navigate to="/" replace />} />
          <Route path="/branch-codes/:slug" element={<BranchCodeDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/branch-codes" element={<BranchCodes />} />
          <Route path="/salaries/:jobId" element={<JobDetail />} />
          <Route path="/hourly-rates" element={<HourlyRates />} />
          <Route path="/hourly-rates/:rateId" element={<HourlyRateDetail />} />
          <Route path="/tax-calculator" element={<TaxCalculator />} />
          <Route path="/tax-calculator/monthly" element={<TaxCalculator />} />
          <Route path="/tax-calculator/yearly" element={<TaxCalculator />} />
          <Route path="/tax-calculator/monthly/:incomeId" element={<TaxCalculationDetail />} />
          <Route path="/tax-calculator/yearly/:incomeId" element={<TaxCalculationDetail />} />
          <Route path="/tax-calculator/:incomeId" element={<TaxCalculationDetail />} />
          <Route path="/celebrities" element={<Celebrities />} />
          <Route path="/celebrities/:slug" element={<CelebrityDetail />} />
          <Route path="/celebrity-categories" element={<StandaloneCelebrityCategories />} />
          <Route path="/celebrities/category/:slug" element={<CelebrityCategory />} />
          <Route path="/net-worth" element={<NetWorth />} />
          
          {/* Net Worth comparison routes */}
          <Route path="/comparison" element={<Navigate to="/compare/patrice-motsepe-vs-johann-rupert" replace />} />
          <Route path="/compare/:comparison" element={<CompareNetWorth />} />
          <Route path="/compare/:person1/:person2" element={<CompareNetWorth />} />
          
          {/* Salary comparison routes - add direct navigation to default comparison */}
          <Route path="/compare-salaries" element={<SalaryComparisonList />} />
          <Route path="/compare-salaries/:comparison" element={<CompareCelebritySalaries />} />
          <Route path="/salary-comparison" element={<Navigate to="/compare-salaries" replace />} />
          
          <Route path="/categories" element={<StandaloneCategories />} />
          <Route path="/net-worth/:slug" element={<NetWorthDetail />} />
          <Route path="/net-worth/category/:slug" element={<NetWorthCategory />} />
          
          {/* General Knowledge Routes */}
          <Route path="/general-knowledge" element={<GeneralKnowledge />} />
          <Route path="/general-knowledge/:slug" element={<GeneralKnowledgeDetail />} />
          <Route path="/general-knowledge/category/:slug" element={<GeneralKnowledgeCategory />} />
          <Route path="/categories/general-knowledge" element={<GeneralKnowledgeCategories />} />
                  
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
