
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
import CapitecCarFinance from "./pages/CapitecCarFinance";
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

          {/* South Africa PAYE Calculator Routes - Simplified Structure */}
          <Route path="/paye" element={<Paye />} />
          
          {/* Legacy redirects for backward compatibility */}
          <Route path="/paye/monthly" element={<Navigate to="/paye" replace />} />
          <Route path="/paye/yearly" element={<Navigate to="/paye" replace />} />
          <Route path="/paye/monthly/:incomeId" element={<Navigate to="/paye/:incomeId" replace />} />
          <Route path="/paye/yearly/:incomeId" element={<Navigate to="/paye/:incomeId" replace />} />
          <Route path="/paye/monthly/:incomeId/:ageGroup" element={<Navigate to="/paye/:incomeId/:ageGroup" replace />} />
          <Route path="/paye/yearly/:incomeId/:ageGroup" element={<Navigate to="/paye/:incomeId/:ageGroup" replace />} />
          
          {/* New simplified PAYE detail routes */}
          <Route path="/paye/:incomeId" element={<PayeDetail />} />
          <Route path="/paye/:incomeId/:ageGroup" element={<PayeDetail />} />

          {/* General Personal Loan Calculator Routes - Simplified Structure */}
          <Route path="/loan" element={<Loan />} />
          
          {/* Legacy redirects for backward compatibility */}
          <Route path="/loan/monthly" element={<Navigate to="/loan" replace />} />
          <Route path="/loan/yearly" element={<Navigate to="/loan" replace />} />
          <Route path="/loan/monthly/:amount/:rate/:term" element={<Navigate to="/loan/:amount/:rate/:term" replace />} />
          <Route path="/loan/yearly/:amount/:rate/:term" element={<Navigate to="/loan/:amount/:rate/:term" replace />} />
          
          {/* New simplified Loan detail routes */}
          <Route path="/loan/:amount/:rate/:term" element={<LoanDetail />} />

          {/* Business Loan Calculator Routes */}
          <Route path="/business-loan" element={<BusinessLoan />} />
          <Route path="/business-loan/monthly" element={<BusinessLoan />} />
          <Route path="/business-loan/yearly" element={<BusinessLoan />} />
          <Route path="/business-loan/monthly/:amount/:rate/:term" element={<BusinessLoanDetail />} />
          <Route path="/business-loan/yearly/:amount/:rate/:term" element={<BusinessLoanDetail />} />
          <Route path="/business-loan/:amount/:rate/:term" element={<BusinessLoanDetail />} />

          {/* CRDB Bank Personal Loan Calculator Routes - Simplified Structure */}
          <Route path="/crdb" element={<Crdb />} />
          
          {/* Legacy redirects for backward compatibility */}
          <Route path="/crdb/monthly" element={<Navigate to="/crdb" replace />} />
          <Route path="/crdb/yearly" element={<Navigate to="/crdb" replace />} />
          <Route path="/crdb/monthly/:amount/:rate/:term" element={<Navigate to="/crdb/:amount/:rate/:term" replace />} />
          <Route path="/crdb/yearly/:amount/:rate/:term" element={<Navigate to="/crdb/:amount/:rate/:term" replace />} />
          
          {/* New simplified CRDB detail routes */}
          <Route path="/crdb/:amount/:rate/:term" element={<LoanDetail />} />

          {/* NMB Bank Personal Loan Calculator Routes - Simplified Structure */}
          <Route path="/nmb" element={<Nmb />} />
          
          {/* Legacy redirects for backward compatibility */}
          <Route path="/nmb/monthly" element={<Navigate to="/nmb" replace />} />
          <Route path="/nmb/yearly" element={<Navigate to="/nmb" replace />} />
          <Route path="/nmb/monthly/:amount/:rate/:term" element={<Navigate to="/nmb/:amount/:rate/:term" replace />} />
          <Route path="/nmb/yearly/:amount/:rate/:term" element={<Navigate to="/nmb/:amount/:rate/:term" replace />} />
          
          {/* New simplified NMB detail routes */}
          <Route path="/nmb/:amount/:rate/:term" element={<LoanDetail />} />

          {/* NBC Bank Personal Loan Calculator Routes - Simplified Structure */}
          <Route path="/nbc" element={<Nbc />} />
          
          {/* Legacy redirects for backward compatibility */}
          <Route path="/nbc/monthly" element={<Navigate to="/nbc" replace />} />
          <Route path="/nbc/yearly" element={<Navigate to="/nbc" replace />} />
          <Route path="/nbc/monthly/:amount/:rate/:term" element={<Navigate to="/nbc/:amount/:rate/:term" replace />} />
          <Route path="/nbc/yearly/:amount/:rate/:term" element={<Navigate to="/nbc/:amount/:rate/:term" replace />} />
          
          {/* New simplified NBC detail routes */}
          <Route path="/nbc/:amount/:rate/:term" element={<LoanDetail />} />

          {/* ABSA Bank Personal Loan Calculator Routes - Simplified Structure */}
          <Route path="/absa" element={<Absa />} />
          
          {/* Legacy redirects for backward compatibility */}
          <Route path="/absa/monthly" element={<Navigate to="/absa" replace />} />
          <Route path="/absa/yearly" element={<Navigate to="/absa" replace />} />
          <Route path="/absa/monthly/:amount/:rate/:term" element={<Navigate to="/absa/:amount/:rate/:term" replace />} />
          <Route path="/absa/yearly/:amount/:rate/:term" element={<Navigate to="/absa/:amount/:rate/:term" replace />} />
          
          {/* New simplified ABSA detail routes */}
          <Route path="/absa/:amount/:rate/:term" element={<LoanDetail />} />

          {/* Azania Bank Personal Loan Calculator Routes - Simplified Structure */}
          <Route path="/azania" element={<Azania />} />
          
          {/* Legacy redirects for backward compatibility */}
          <Route path="/azania/monthly" element={<Navigate to="/azania" replace />} />
          <Route path="/azania/yearly" element={<Navigate to="/azania" replace />} />
          <Route path="/azania/monthly/:amount/:rate/:term" element={<Navigate to="/azania/:amount/:rate/:term" replace />} />
          <Route path="/azania/yearly/:amount/:rate/:term" element={<Navigate to="/azania/:amount/:rate/:term" replace />} />
          
          {/* New simplified Azania detail routes */}
          <Route path="/azania/:amount/:rate/:term" element={<LoanDetail />} />

          {/* Capitec Bank Home Loan Calculator Routes */}
          <Route path="/capitec" element={<Capitec />} />
          <Route path="/capitec/monthly" element={<Capitec />} />
          <Route path="/capitec/yearly" element={<Capitec />} />
          <Route path="/capitec/monthly/:loanAmount/:downPayment/:loanTerm/:interestRate" element={<HomeLoanDetail />} />
          <Route path="/capitec/yearly/:loanAmount/:downPayment/:loanTerm/:interestRate" element={<HomeLoanDetail />} />
          <Route path="/capitec/:loanAmount/:downPayment/:loanTerm/:interestRate" element={<HomeLoanDetail />} />

          {/* Capitec Bank Car Finance Calculator Routes */}
          <Route path="/capitec-car-finance" element={<CapitecCarFinance />} />
          <Route path="/capitec-car-finance/monthly" element={<CapitecCarFinance />} />
          <Route path="/capitec-car-finance/yearly" element={<CapitecCarFinance />} />
          <Route path="/capitec-car-finance/monthly/:vehiclePrice/:downPayment/:loanTerm/:interestRate/:balloonPayment" element={<CarLoanDetail />} />
          <Route path="/capitec-car-finance/yearly/:vehiclePrice/:downPayment/:loanTerm/:interestRate/:balloonPayment" element={<CarLoanDetail />} />
          <Route path="/capitec-car-finance/:vehiclePrice/:downPayment/:loanTerm/:interestRate/:balloonPayment" element={<CarLoanDetail />} />

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
