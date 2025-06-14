import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import TrafficOffence from "./pages/TrafficOffence";
import Insurance from "./pages/Insurance";
import NotFound from "./pages/NotFound";
import Events from "./pages/Events";
import EventPage from "./pages/EventPage";
import YearPage from "./pages/YearPage";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Paye from "./pages/Paye";
import PayeDetail from "./pages/PayeDetail";
import MonthPageWrapper from "./components/MonthPageWrapper";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Traffic offence checker as homepage */}
          <Route path="/" element={<TrafficOffence />} />
          
          {/* Keep existing traffic offence routes for backward compatibility */}
          <Route path="/traffic-offence" element={<Navigate to="/" replace />} />
          <Route path="/traffic-offence-checker" element={<Navigate to="/" replace />} />
          
          <Route path="/about" element={<About />} />

          {/* New Insurance Page Route */}
          <Route path="/insurance" element={<Insurance />} />

          {/* Events routes */}
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventId" element={<EventPage />} />
        
          {/* Year-specific routes */}
          <Route path="/year/:year" element={<YearPage />} />
          
          {/* SEO-friendly month routes like /january-2025 */}
          <Route path="/:monthYear" element={<MonthPageWrapper />} />

            {/* Blog Routes */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />

          {/* Tanzania PAYE Calculator Routes */}
          <Route path="/paye" element={<Paye />} />
          <Route path="/paye/monthly" element={<Paye />} />
          <Route path="/paye/yearly" element={<Paye />} />
          <Route path="/paye/monthly/:incomeId" element={<PayeDetail />} />
          <Route path="/paye/yearly/:incomeId" element={<PayeDetail />} />
          <Route path="/paye/:incomeId" element={<PayeDetail />} />
                        
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
