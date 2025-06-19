
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "@/components/Layout";
import Paye from "@/pages/Paye";
import Blog from "@/pages/Blog";
import About from "@/pages/About";
import HomeLoan from "@/pages/HomeLoan";
import VAT from "@/pages/VAT";
import Bmi from "@/pages/Bmi";
import Aps from "@/pages/Aps";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Paye />} />
          <Route path="/paye" element={<Paye />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/home-loan" element={<HomeLoan />} />
          <Route path="/vat" element={<VAT />} />
          <Route path="/bmi" element={<Bmi />} />
          <Route path="/aps" element={<Aps />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
