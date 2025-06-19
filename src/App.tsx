
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Bmi from "./pages/Bmi";
import Edd from "./pages/Edd";
import Ovulation from "./pages/Ovulation";
import NotFound from "./pages/NotFound";
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

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Traffic offence checker as homepage */}
          <Route path="/" element={<Paye />} />
          
          {/* Keep existing traffic offence routes for backward compatibility */}
          <Route path="/paye" element={<Navigate to="/" replace />} />
          
          <Route path="/about" element={<About />} />

          {/* BMI Calculator Route */}
          <Route path="/bmi" element={<Bmi />} />

          {/* EDD Calculator Route */}
          <Route path="/edd" element={<Edd />} />

          {/* Ovulation Calculator Route */}
          <Route path="/ovulation" element={<Ovulation />} />

          {/* Blog Routes */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />

          {/* South Africa PAYE Calculator Routes */}
          <Route path="/paye" element={<Paye />} />
          <Route path="/paye/monthly" element={<Paye />} />
          <Route path="/paye/yearly" element={<Paye />} />
          <Route path="/paye/monthly/:incomeId" element={<PayeDetail />} />
          <Route path="/paye/yearly/:incomeId" element={<PayeDetail />} />
          <Route path="/paye/monthly/:incomeId/:ageGroup" element={<PayeDetail />} />
          <Route path="/paye/yearly/:incomeId/:ageGroup" element={<PayeDetail />} />
          <Route path="/paye/:incomeId" element={<PayeDetail />} />

          {/* CRDB Bank Personal Loan Calculator Routes */}
          <Route path="/crdb" element={<Crdb />} />
          <Route path="/crdb/monthly" element={<Crdb />} />
          <Route path="/crdb/yearly" element={<Crdb />} />
          <Route path="/crdb/monthly/:amount/:rate/:term" element={<LoanDetail />} />
          <Route path="/crdb/yearly/:amount/:rate/:term" element={<LoanDetail />} />
          <Route path="/crdb/:amount/:rate/:term" element={<LoanDetail />} />

          {/* NMB Bank Personal Loan Calculator Routes */}
          <Route path="/nmb" element={<Nmb />} />
          <Route path="/nmb/monthly" element={<Nmb />} />
          <Route path="/nmb/yearly" element={<Nmb />} />
          <Route path="/nmb/monthly/:amount/:rate/:term" element={<LoanDetail />} />
          <Route path="/nmb/yearly/:amount/:rate/:term" element={<LoanDetail />} />
          <Route path="/nmb/:amount/:rate/:term" element={<LoanDetail />} />

          {/* NBC Bank Personal Loan Calculator Routes */}
          <Route path="/nbc" element={<Nbc />} />
          <Route path="/nbc/monthly" element={<Nbc />} />
          <Route path="/nbc/yearly" element={<Nbc />} />
          <Route path="/nbc/monthly/:amount/:rate/:term" element={<LoanDetail />} />
          <Route path="/nbc/yearly/:amount/:rate/:term" element={<LoanDetail />} />
          <Route path="/nbc/:amount/:rate/:term" element={<LoanDetail />} />

          {/* ABSA Bank Personal Loan Calculator Routes */}
          <Route path="/absa" element={<Absa />} />
          <Route path="/absa/monthly" element={<Absa />} />
          <Route path="/absa/yearly" element={<Absa />} />
          <Route path="/absa/monthly/:amount/:rate/:term" element={<LoanDetail />} />
          <Route path="/absa/yearly/:amount/:rate/:term" element={<LoanDetail />} />
          <Route path="/absa/:amount/:rate/:term" element={<LoanDetail />} />

          {/* Azania Bank Personal Loan Calculator Routes */}
          <Route path="/azania" element={<Azania />} />
          <Route path="/azania/monthly" element={<Azania />} />
          <Route path="/azania/yearly" element={<Azania />} />
          <Route path="/azania/monthly/:amount/:rate/:term" element={<LoanDetail />} />
          <Route path="/azania/yearly/:amount/:rate/:term" element={<LoanDetail />} />
          <Route path="/azania/:amount/:rate/:term" element={<LoanDetail />} />
                        
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
