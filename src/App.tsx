
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import NotFound from "./pages/NotFound";
import EPLPlayers from "./pages/EPLPlayers";
import EPLPlayerDetail from "./pages/EPLPlayerDetail";
import EPLCategories from "./pages/EPLCategories";
import EPLCategory from "./pages/EPLCategory";
import EPLPlayers from "./pages/Popular";
import EPLPlayerDetail from "./pages/PopularDetail";

const App = () => (
  <TooltipProvider>
    <div className="bg-[#f6f6f0] min-h-screen">
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Salaries />} />
          <Route path="/about" element={<About />} />
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
          <Route path="/net-worth" element={<NetWorth />} />
          <Route path="/categories" element={<StandaloneCategories />} />
          <Route path="/net-worth/:slug" element={<NetWorthDetail />} />
          <Route path="/net-worth/category/:slug" element={<NetWorthCategory />} />
	  <Route path="/epl-players" element={<Popular />} />
          <Route path="/epl-players/:slug" element={<PopularDetail />} />
          
          {/* New EPL Routes */}
          <Route path="/epl-players" element={<EPLPlayers />} />
          <Route path="/epl-players/:slug" element={<EPLPlayerDetail />} />
          <Route path="/epl-categories" element={<EPLCategories />} />
          <Route path="/epl-players/category/:slug" element={<EPLCategory />} />

          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  </TooltipProvider>
);

export default App;
