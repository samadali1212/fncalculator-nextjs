
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Salaries from "./pages/Salaries";
import JobDetail from "./pages/JobDetail";
import HourlyRates from "./pages/HourlyRates";
import HourlyRateDetail from "./pages/HourlyRateDetail";
import TaxCalculator from "./pages/TaxCalculator";
import TaxCalculationDetail from "./pages/TaxCalculationDetail";
import LoanCalculator from "./pages/LoanCalculator";
import LoanCalculationDetail from "./pages/LoanCalculationDetail";
import Celebrities from "./pages/Celebrities";
import CelebrityDetail from "./pages/CelebrityDetail";
import NetWorth from "./pages/NetWorth";
import NetWorthDetail from "./pages/NetWorthDetail";
import NetWorthCategory from "./pages/NetWorthCategory";
import StandaloneCategories from "./pages/StandaloneCategories";
import StandaloneCelebrityCategories from "./pages/StandaloneCelebrityCategories";
import CelebrityCategory from "./pages/CelebrityCategory";
import NotFound from "./pages/NotFound";
import BranchCodes from "./pages/BranchCodes";
import BranchCodeDetail from "./pages/BranchCodeDetail";
import Jobs from "./pages/Jobs";
import JobsByProvince from "./pages/JobsByProvince";
import JobsByCity from "./pages/JobsByCity";
import JobsByCategory from "./pages/JobsByCategory";

// Global net worth pages
import GlobalNetWorth from "./pages/GlobalNetWorth";
import GlobalNetWorthDetail from "./pages/GlobalNetWorthDetail";
import GlobalNetWorthCategory from "./pages/GlobalNetWorthCategory";
import GlobalStandaloneCategories from "./pages/GlobalStandaloneCategories";

// US Congress pages
import USCongress from "./pages/USCongress";
import USCongressDetail from "./pages/USCongressDetail";

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
          
          {/* Loan Calculator Routes */}
          <Route path="/loan-calculator" element={<LoanCalculator />} />
          <Route path="/loan-calculator/:loanId" element={<LoanCalculationDetail />} />
          
          <Route path="/celebrities" element={<Celebrities />} />
          <Route path="/celebrities/:slug" element={<CelebrityDetail />} />
          <Route path="/celebrity-categories" element={<StandaloneCelebrityCategories />} />
          <Route path="/celebrities/category/:slug" element={<CelebrityCategory />} />
          <Route path="/net-worth" element={<NetWorth />} />
          <Route path="/net-worth/:slug" element={<NetWorthDetail />} />
                    
          <Route path="/categories" element={<StandaloneCategories />} />
          <Route path="/net-worth/category/:slug" element={<NetWorthCategory />} />
          
          {/* Job Listing Routes */}
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:jobSlug" element={<JobDetail />} />
          
          {/* New Job SEO Pages */}
          <Route path="/jobs/province/:provinceSlug" element={<JobsByProvince />} />
          <Route path="/jobs/city/:citySlug" element={<JobsByCity />} />
          <Route path="/jobs/category/:categorySlug" element={<JobsByCategory />} />
          
          {/* Global Net Worth Routes */}
          <Route path="/global-net-worth" element={<GlobalNetWorth />} />
          <Route path="/global-net-worth/:slug" element={<GlobalNetWorthDetail />} />
          <Route path="/global-categories" element={<GlobalStandaloneCategories />} />
          <Route path="/global-net-worth/category/:slug" element={<GlobalNetWorthCategory />} />        
                  
          {/* US Congress Routes */}
          <Route path="/uscongress" element={<USCongress />} />
          <Route path="/uscongress/:slug" element={<USCongressDetail />} />
                  
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
