
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import HourlyRates from "./pages/HourlyRates";
import HourlyRateDetail from "./pages/HourlyRateDetail";
import TaxCalculator from "./pages/TaxCalculator";
import TaxCalculationDetail from "./pages/TaxCalculationDetail";
import LoanCalculator from "./pages/LoanCalculator";
import LoanCalculationDetail from "./pages/LoanCalculationDetail";
import NotFound from "./pages/NotFound";
import BranchCodes from "./pages/BranchCodes";
import BranchCodeDetail from "./pages/BranchCodeDetail";
import Jobs from "./pages/Jobs";
import JobDetail from "./pages/JobDetail";
import JobsByProvince from "./pages/JobsByProvince";
import JobsByCity from "./pages/JobsByCity";
import JobsByCategory from "./pages/JobsByCategory";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Set BranchCodeDetail as the explicit homepage */}
          <Route path="/" element={<BranchCodeDetail />} />
          {/* Ensure salaries path also works and doesn't create duplicate content */}
          <Route path="/branch-codes" element={<Navigate to="/" replace />} />
          <Route path="/branch-codes/:slug" element={<BranchCodeDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/branch-codes" element={<BranchCodes />} />
          <Route path="/hourly-rates" element={<HourlyRates />} />
          <Route path="/hourly-rates/:rateId" element={<HourlyRateDetail />} />
          <Route path="/tax-calculator" element={<TaxCalculator />} />
          <Route path="/tax-calculator/monthly" element={<TaxCalculator />} />
          <Route path="/tax-calculator/yearly" element={<TaxCalculator />} />
          <Route path="/tax-calculator/monthly/:incomeId" element={<TaxCalculationDetail />} />
          <Route path="/tax-calculator/yearly/:incomeId" element={<TaxCalculationDetail />} />
          <Route path="/tax-calculator/:incomeId" element={<TaxCalculationDetail />} />
          
          {/* Loan Calculator Routes with SEO-friendly URLs */}
          <Route path="/loan-calculator" element={<LoanCalculator />} />
          <Route path="/loan-calculator/:loanSlug" element={<LoanCalculationDetail />} />
                
          {/* Job Listing Routes */}
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:jobSlug" element={<JobDetail />} />
          
          {/* New Job SEO Pages */}
          <Route path="/jobs/province/:provinceSlug" element={<JobsByProvince />} />
          <Route path="/jobs/city/:citySlug" element={<JobsByCity />} />
          <Route path="/jobs/category/:categorySlug" element={<JobsByCategory />} />
                        
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
