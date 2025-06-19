import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient } from 'react-query';
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Paye from "@/pages/Paye";
import Blog from "@/pages/Blog";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import HomeLoan from "@/pages/HomeLoan";
import HomeLoanDetails from "@/pages/HomeLoanDetails";
import VAT from "@/pages/VAT";
import Bmi from "@/pages/Bmi";
import Jobs from "@/pages/Jobs";
import JobsBrowse from "@/pages/JobsBrowse";
import JobDetails from "@/pages/JobDetails";
import CapitecHomeLoan from "@/pages/CapitecHomeLoan";
import CapitecHomeLoanDetails from './pages/CapitecHomeLoanDetails';
import Aps from "@/pages/Aps";

function App() {
  return (
    <QueryClient>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/paye" element={<Paye />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/home-loan" element={<HomeLoan />} />
            <Route path="/home-loan/:loanAmount/:downPayment/:loanTerm/:interestRate" element={<HomeLoanDetails />} />
            <Route path="/vat" element={<VAT />} />
            <Route path="/bmi" element={<Bmi />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs-browse" element={<JobsBrowse />} />
            <Route path="/jobs/:slug" element={<JobDetails />} />
            <Route path="/capitec" element={<CapitecHomeLoan />} />
            <Route path="/capitec/:loanAmount/:downPayment/:loanTerm/:interestRate" element={<CapitecHomeLoanDetails />} />
            <Route path="/aps" element={<Aps />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </QueryClient>
  );
}

export default App;
