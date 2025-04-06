
import { motion } from "framer-motion";
import Header from "../components/Header";
import SEO from "../components/SEO";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title="About SalaryList" 
        description="Learn about SalaryList - your trusted source for salary insights in South Africa. Discover our mission to help South Africans make informed career and financial decisions."
        canonicalUrl="/about"
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="bg-white p-6 rounded-sm shadow-sm">
         <h1 className="text-2xl font-bold mb-4">About Salarylist</h1>
<div className="prose max-w-none">
  <p className="mb-4">
    Salarylist is your trusted source for salary insights in South Africa. We provide up-to-date data on earnings across various industries, helping job seekers, employees, and businesses understand market trends and make informed career and hiring decisions.
  </p>
  <p className="mb-4">
    Our mission is to bring transparency to salaries, empowering individuals to negotiate better pay and plan their financial future. From industry comparisons to cost-of-living analysis, we offer valuable information to guide your career and salary expectations.
  </p>
  <p className="mb-4">
    Stay informed and take control of your earning potential with Salarylist.
  </p>
  <h2 className="text-xl font-semibold mt-6 mb-3">Contact</h2>
  <p>
    For inquiries or collaborations, reach out via email:
    <a href="mailto:flavianjn@gmail.com" className="text-[#ff6600] hover:underline ml-1">
      flavianjn@gmail.com
    </a>
  </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-300 py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center text-[#828282] text-sm">
          <p>
            &copy; {new Date().getFullYear()} SalaryList. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default About;
