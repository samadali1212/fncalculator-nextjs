
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import TrafficOffence from "./pages/TrafficOffence";
import NotFound from "./pages/NotFound";
import Events from "./pages/Events";
import EventPage from "./pages/EventPage";
import YearPage from "./pages/YearPage";
import MonthPage from "./pages/MonthPage";
import Jobs from "./pages/Jobs";
import JobDetail from "./pages/JobDetail";
import JobsByCategory from "./pages/JobsByCategory";
import JobsByCity from "./pages/JobsByCity";
import JobsByRegion from "./pages/JobsByRegion";

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
          
          {/* Job City Pages */}
          <Route path="/jobs/city/:citySlug" element={<JobsByCity />} />

          {/* Job Region Pages */}
          <Route path="/jobs/region/:regionSlug" element={<JobsByRegion />} />
   

          {/* Events routes */}
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventId" element={<EventPage />} />
        
            {/* Year-specific routes */}
            <Route path="/year/:year" element={<YearPage />} />
            
            {/* SEO-friendly month routes like /january-2025 */}
            <Route path="/:monthYear" element={<MonthPage />} />
                        
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
