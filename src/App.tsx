
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
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";

const App = () => (
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
        <Route path="/categories" element={<StandaloneCategories />} />
        <Route path="/net-worth/:slug" element={<NetWorthDetail />} />
        <Route path="/net-worth/category/:slug" element={<NetWorthCategory />} />
        
        {/* General Knowledge Routes */}
        <Route path="/general-knowledge" element={<GeneralKnowledge />} />
        <Route path="/general-knowledge/:slug" element={<GeneralKnowledgeDetail />} />
        <Route path="/general-knowledge/category/:slug" element={<GeneralKnowledgeCategory />} />
        <Route path="/categories/general-knowledge" element={<GeneralKnowledgeCategories />} />
        
        {/* Blog Routes */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
                
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
