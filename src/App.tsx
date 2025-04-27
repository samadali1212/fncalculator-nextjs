
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
import StandaloneCelebrityCategories from "./pages/StandaloneCelebrityCategories";
import CelebrityCategory from "./pages/CelebrityCategory";
import GeneralKnowledge from "./pages/GeneralKnowledge";
import GeneralKnowledgeDetail from "./pages/GeneralKnowledgeDetail";
import GeneralKnowledgeCategory from "./pages/GeneralKnowledgeCategory";
import GeneralKnowledgeCategories from "./pages/GeneralKnowledgeCategories";
import NotFound from "./pages/NotFound";
import BranchCodes from "./pages/BranchCodes";
import BranchCodeDetail from "./pages/BranchCodeDetail";

// Global net worth pages
import GlobalNetWorth from "./pages/GlobalNetWorth";
import GlobalNetWorthDetail from "./pages/GlobalNetWorthDetail";
import GlobalNetWorthCategory from "./pages/GlobalNetWorthCategory";
import GlobalStandaloneCategories from "./pages/GlobalStandaloneCategories";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Set Salaries as the explicit homepage */}
          <Route path="/" element={<Salaries />} />
          {/* Ensure salaries path also works and doesn't create duplicate content */}
          <Route path="/salaries" element={<Navigate to="/" replace />} />
          <Route path="/branch-codes/:slug" element={<BranchCodeDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/branch-codes" element={<BranchCodes />} />
          <Route path="/salaries" element={<Salaries />} />
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
          
          {/* Global Net Worth Routes */}
          <Route path="/global-net-worth" element={<GlobalNetWorth />} />
          <Route path="/global-net-worth/:slug" element={<GlobalNetWorthDetail />} />
          <Route path="/global-categories" element={<GlobalStandaloneCategories />} />
          <Route path="/global-net-worth/category/:slug" element={<GlobalNetWorthCategory />} />        
          
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
