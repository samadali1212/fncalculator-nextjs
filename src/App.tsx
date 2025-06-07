import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import TrafficOffence from "./pages/TrafficOffence";
import NotFound from "./pages/NotFound";
import Events from "./pages/Events";
import EventPage from "./pages/EventPage";

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

          {/* Events routes */}
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventId" element={<EventPage />} />
                        
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
