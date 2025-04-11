
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import Salaries from "./pages/Salaries";
import JobDetail from "./pages/JobDetail";
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
  <TooltipProvider>
    <div className="bg-[#f6f6f0] min-h-screen">
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Set BranchCodes as the explicit homepage */}
          <Route path="/" element={<BranchCodes />} />
          {/* Ensure branch-codes path also works and doesn't create duplicate content */}
          <Route path="/branch-codes" element={<Navigate to="/" replace />} />
          <Route path="/branch-codes/:slug" element={<BranchCodeDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/salaries" element={<Salaries />} />
          <Route path="/salaries/:jobId" element={<JobDetail />} />
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
      </BrowserRouter>
    </div>
  </TooltipProvider>
);

export default App;
