
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Jobs from "./pages/Jobs";
import JobDetail from "./pages/JobDetail";
import JobsByCategory from "./pages/JobsByCategory";
import TrafficOffence from "./pages/TrafficOffence";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Set TrafficOffence as the explicit homepage */}
          <Route path="/" element={<TrafficOffence />} />
          {/* Ensure salaries path also works and doesn't create duplicate content */}
          <Route path="/traffic-offence" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<About />} />
                    
          {/* Job Listing Routes */}
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:jobSlug" element={<JobDetail />} />
          
          {/* Job Category Pages */}
          <Route path="/jobs/category/:categorySlug" element={<JobsByCategory />} />
                        
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
