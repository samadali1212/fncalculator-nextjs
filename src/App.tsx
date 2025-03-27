
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NetWorth from "./pages/NetWorth";
import NetWorthDetail from "./pages/NetWorthDetail";
import NetWorthCategories from "./pages/NetWorthCategories";
import NetWorthCategory from "./pages/NetWorthCategory";
import StandaloneCategories from "./pages/StandaloneCategories";
import Index from "./pages/Index";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Salaries from "./pages/Salaries";
import JobDetail from "./pages/JobDetail";
import HourlyRates from "./pages/HourlyRates";
import HourlyRateDetail from "./pages/HourlyRateDetail";
import TaxCalculator from "./pages/TaxCalculator";
import TaxCalculationDetail from "./pages/TaxCalculationDetail";
import NotFound from "./pages/NotFound";

const App = () => (
  <TooltipProvider>
    <div className="bg-[#f6f6f0] min-h-screen">
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NetWorth />} />
          <Route path="/home" element={<Index />} />
          <Route path="/post/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<StandaloneCategories />} />
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
          <Route path="/net-worth" element={<NetWorth />} />
          <Route path="/net-worth/:slug" element={<NetWorthDetail />} />
          <Route path="/net-worth/categories" element={<NetWorthCategories />} />
          <Route path="/net-worth/category/:slug" element={<NetWorthCategory />} />
          <Route path="/insurance-executives" element={<NetWorthCategory />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  </TooltipProvider>
);

export default App;
