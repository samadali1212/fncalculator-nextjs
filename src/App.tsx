
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "@/components/Layout";
import Paye from "@/pages/Paye";
import Blog from "@/pages/Blog";
import About from "@/pages/About";
import HomeLoan from "@/pages/HomeLoan";
import VAT from "@/pages/Vat";
import Bmi from "@/pages/Bmi";
import Aps from "@/pages/Aps";
import UniversityAps from "@/pages/UniversityAps";
import CompoundInterest from "@/pages/CompoundInterest";
import Ovulation from "@/pages/Ovulation";
import Edd from "@/pages/Edd";
import Uif from "@/pages/Uif";
import Loan from "@/pages/Loan";
import NotFound from "@/pages/NotFound";
import Absa from "@/pages/Absa";
import Azania from "@/pages/Azania";
import BlogDetail from "@/pages/BlogDetail";
import BusinessLoan from "@/pages/BusinessLoan";
import BusinessLoanDetail from "@/pages/BusinessLoanDetail";
import Capitec from "@/pages/Capitec";
import CapitecCarFinance from "@/pages/CapitecCarFinance";
import CarLoan from "@/pages/CarLoan";
import CarLoanDetail from "@/pages/CarLoanDetail";
import Crdb from "@/pages/Crdb";
import HomeLoanDetail from "@/pages/HomeLoanDetail";
import LoanDetail from "@/pages/LoanDetail";
import Nbc from "@/pages/Nbc";
import Nmb from "@/pages/Nmb";
import PayeDetail from "@/pages/PayeDetail";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* PAYE as homepage */}
          <Route path="/" element={<Paye />} />
          <Route path="/paye" element={<Paye />} />
         
          {/* New simplified PAYE detail routes */}
          <Route path="/paye/:incomeId" element={<PayeDetail />} />
          <Route path="/paye/:incomeId/:ageGroup" element={<PayeDetail />} />
          
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          
          <Route path="/about" element={<About />} />
          
          <Route path="/home-loan" element={<HomeLoan />} />
          <Route path="/home-loan/yearly" element={<HomeLoan />} />
          <Route path="/home-loan/:loanAmount/:downPayment/:loanTerm/:interestRate" element={<HomeLoanDetail />} />
          <Route path="/capitec/:loanAmount/:downPayment/:loanTerm/:interestRate" element={<HomeLoanDetail />} />
          
          <Route path="/vat" element={<VAT />} />
          <Route path="/bmi" element={<Bmi />} />
          <Route path="/compound-interest" element={<CompoundInterest />} />
          <Route path="/ovulation" element={<Ovulation />} />
          <Route path="/edd" element={<Edd />} />
          <Route path="/uif" element={<Uif />} />
          
          <Route path="/loan" element={<Loan />} />
          <Route path="/loan/:amount/:rate/:term" element={<LoanDetail />} />
          
          <Route path="/business-loan" element={<BusinessLoan />} />
          <Route path="/business-loan/:amount/:rate/:term" element={<BusinessLoanDetail />} />
          <Route path="/business-loan/yearly/:amount/:rate/:term" element={<BusinessLoanDetail />} />
          
          <Route path="/car-loan" element={<CarLoan />} />
          <Route path="/car-loan/:vehiclePrice/:downPayment/:loanTerm/:interestRate/:balloonPayment" element={<CarLoanDetail />} />
          <Route path="/capitec-car-finance/:vehiclePrice/:downPayment/:loanTerm/:interestRate/:balloonPayment" element={<CarLoanDetail />} />
          
          <Route path="/absa" element={<Absa />} />
          <Route path="/absa/:amount/:rate/:term" element={<LoanDetail />} />
          
          <Route path="/azania" element={<Azania />} />
          <Route path="/azania/:amount/:rate/:term" element={<LoanDetail />} />
          
          <Route path="/capitec" element={<Capitec />} />
          <Route path="/capitec-car-finance" element={<CapitecCarFinance />} />
          
          <Route path="/crdb" element={<Crdb />} />
          <Route path="/crdb/:amount/:rate/:term" element={<LoanDetail />} />
          
          <Route path="/nbc" element={<Nbc />} />
          <Route path="/nbc/:amount/:rate/:term" element={<LoanDetail />} />
          
          <Route path="/nmb" element={<Nmb />} />
          <Route path="/nmb/:amount/:rate/:term" element={<LoanDetail />} />
		  
		  <Route path="/aps" element={<Aps />} />
          <Route path="/aps/:universityId" element={<UniversityAps />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;