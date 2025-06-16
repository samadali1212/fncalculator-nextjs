import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import TrafficOffence from "./pages/TrafficOffence";
import Insurance from "./pages/Insurance";
import Bmi from "./pages/Bmi";
import Edd from "./pages/Edd";
import Ovulation from "./pages/Ovulation";
import NotFound from "./pages/NotFound";
import Events from "./pages/Events";
import EventPage from "./pages/EventPage";
import YearPage from "./pages/YearPage";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Paye from "./pages/Paye";
import PayeDetail from "./pages/PayeDetail";
import Crdb from "./pages/Crdb";
import Nmb from "./pages/Nmb";
import Nbc from "./pages/Nbc";
import Absa from "./pages/Absa";
import Azania from "./pages/Azania";
import LoanDetail from "./pages/LoanDetail";
import MonthPageWrapper from "./components/MonthPageWrapper";

const App = () => {
  return (
    <Layout>
      <Routes>
        {/* Traffic offence checker as homepage */}
        <Route path="/" element={<TrafficOffence />} />
        
        {/* Keep existing traffic offence routes for backward compatibility */}
        <Route path="/traffic-offence" element={<Navigate to="/" replace />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/bmi" element={<Bmi />} />
        <Route path="/edd" element={<Edd />} />
        <Route path="/ovulation" element={<Ovulation />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:eventId" element={<EventPage />} />
        <Route path="/year/:year" element={<YearPage />} />
        <Route path="/:monthYear" element={<MonthPageWrapper />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/paye" element={<Paye />} />
        <Route path="/paye/monthly" element={<Paye />} />
        <Route path="/paye/yearly" element={<Paye />} />
        <Route path="/paye/monthly/:incomeId" element={<PayeDetail />} />
        <Route path="/paye/yearly/:incomeId" element={<PayeDetail />} />
        <Route path="/paye/:incomeId" element={<PayeDetail />} />
        <Route path="/crdb" element={<Crdb />} />
        <Route path="/crdb/monthly" element={<Crdb />} />
        <Route path="/crdb/yearly" element={<Crdb />} />
        <Route path="/crdb/monthly/:amount/:rate/:term" element={<LoanDetail />} />
        <Route path="/crdb/yearly/:amount/:rate/:term" element={<LoanDetail />} />
        <Route path="/crdb/:amount/:rate/:term" element={<LoanDetail />} />
        <Route path="/nmb" element={<Nmb />} />
        <Route path="/nmb/monthly" element={<Nmb />} />
        <Route path="/nmb/yearly" element={<Nmb />} />
        <Route path="/nmb/monthly/:amount/:rate/:term" element={<LoanDetail />} />
        <Route path="/nmb/yearly/:amount/:rate/:term" element={<LoanDetail />} />
        <Route path="/nmb/:amount/:rate/:term" element={<LoanDetail />} />
        <Route path="/nbc" element={<Nbc />} />
        <Route path="/nbc/monthly" element={<Nbc />} />
        <Route path="/nbc/yearly" element={<Nbc />} />
        <Route path="/nbc/monthly/:amount/:rate/:term" element={<LoanDetail />} />
        <Route path="/nbc/yearly/:amount/:rate/:term" element={<LoanDetail />} />
        <Route path="/nbc/:amount/:rate/:term" element={<LoanDetail />} />
        <Route path="/absa" element={<Absa />} />
        <Route path="/absa/monthly" element={<Absa />} />
        <Route path="/absa/yearly" element={<Absa />} />
        <Route path="/absa/monthly/:amount/:rate/:term" element={<LoanDetail />} />
        <Route path="/absa/yearly/:amount/:rate/:term" element={<LoanDetail />} />
        <Route path="/absa/:amount/:rate/:term" element={<LoanDetail />} />
        <Route path="/azania" element={<Azania />} />
        <Route path="/azania/monthly" element={<Azania />} />
        <Route path="/azania/yearly" element={<Azania />} />
        <Route path="/azania/monthly/:amount/:rate/:term" element={<LoanDetail />} />
        <Route path="/azania/yearly/:amount/:rate/:term" element={<LoanDetail />} />
        <Route path="/azania/:amount/:rate/:term" element={<LoanDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
