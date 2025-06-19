
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
import Capitec from "./pages/Capitec";
import Loan from "./pages/Loan";
import LoanDetail from "./pages/LoanDetail";
import BusinessLoan from "./pages/BusinessLoan";
import BusinessLoanDetail from "./pages/BusinessLoanDetail";
import HomeLoan from "./pages/HomeLoan";
import HomeLoanDetail from "./pages/HomeLoanDetail";
import CarLoan from "./pages/CarLoan";
import CarLoanDetail from "./pages/CarLoanDetail";
import Vat from "./pages/Vat";
import Uif from "./pages/Uif";
import CompoundInterest from "./pages/CompoundInterest";

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

          {/* VAT Calculator Route */}
          <Route path="/vat" element={<Vat />} />

          {/* UIF Calculator Route */}
          <Route path="/uif" element={<Uif />} />

          {/* Compound Interest Calculator Route */}
          <Route path="/compound-interest" element={<CompoundInterest />} />

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

          {/* General Personal Loan Calculator Routes */}
          <Route path="/loan" element={<Loan />} />
          <Route path="/loan/monthly" element={<Loan />} />
          <Route path="/loan/yearly" element={<Loan />} />
          <Route path="/loan/monthly/:amount/:rate/:term" element={<LoanDetail />} />
          <Route path="/loan/yearly/:amount/:rate/:term" element={<LoanDetail />} />
          <Route path="/loan/:amount/:rate/:term" element={<LoanDetail />} />

          {/* Business Loan Calculator Routes */}
          <Route path="/business-loan" element={<BusinessLoan />} />
          <Route path="/business-loan/monthly" element={<BusinessLoan />} />
          <Route path="/business-loan/yearly" element={<BusinessLoan />} />
          <Route path="/business-loan/monthly/:amount/:rate/:term" element={<BusinessLoanDetail />} />
          <Route path="/business-loan/yearly/:amount/:rate/:term" element={<BusinessLoanDetail />} />
          <Route path="/business-loan/:amount/:rate/:term" element={<BusinessLoanDetail />} />

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

          {/* Capitec Bank Home Loan Calculator Routes */}
          <Route path="/capitec" element={<Capitec />} />
          <Route path="/capitec/monthly" element={<Capitec />} />
          <Route path="/capitec/yearly" element={<Capitec />} />
          <Route path="/capitec/monthly/:loanAmount/:downPayment/:loanTerm/:interestRate" element={<HomeLoanDetail />} />
          <Route path="/capitec/yearly/:loanAmount/:downPayment/:loanTerm/:interestRate" element={<HomeLoanDetail />} />
          <Route path="/capitec/:loanAmount/:downPayment/:loanTerm/:interestRate" element={<HomeLoanDetail />} />

          {/* South Africa Home Loan Calculator Routes */}
          <Route path="/home-loan" element={<HomeLoan />} />
          <Route path="/home-loan/monthly" element={<HomeLoan />} />
          <Route path="/home-loan/yearly" element={<HomeLoan />} />
          <Route path="/home-loan/monthly/:loanAmount/:downPayment/:loanTerm/:interestRate" element={<HomeLoanDetail />} />
          <Route path="/home-loan/yearly/:loanAmount/:downPayment/:loanTerm/:interestRate" element={<HomeLoanDetail />} />
          <Route path="/home-loan/:loanAmount/:downPayment/:loanTerm/:interestRate" element={<HomeLoanDetail />} />

          {/* South Africa Car Loan Calculator Routes */}
          <Route path="/car-loan" element={<CarLoan />} />
          <Route path="/car-loan/monthly" element={<CarLoan />} />
          <Route path="/car-loan/yearly" element={<CarLoan />} />
          <Route path="/car-loan/monthly/:vehiclePrice/:downPayment/:loanTerm/:interestRate/:balloonPayment" element={<CarLoanDetail />} />
          <Route path="/car-loan/yearly/:vehiclePrice/:downPayment/:loanTerm/:interestRate/:balloonPayment" element={<CarLoanDetail />} />
          <Route path="/car-loan/:vehiclePrice/:downPayment/:loanTerm/:interestRate/:balloonPayment" element={<CarLoanDetail />} />
                        
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
