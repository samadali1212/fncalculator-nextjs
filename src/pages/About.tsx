
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
        title="About Sassa Insider" 
        description="Learn about Sassa Insider - your trusted source for financial information in South Africa. Discover our mission to help South Africans make informed financial decisions."
        canonicalUrl="/about"
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="bg-white p-6 rounded-sm shadow-sm">
         <h1 className="text-2xl font-bold mb-4">About Sassa Insider</h1>
          <div className="prose max-w-none">
            <p className="mb-4">
              Sassa Insider is your trusted source for financial information in South Africa. We provide up-to-date data on banking, branch codes, net worth insights, and other financial information to help South Africans make informed decisions about their money.
            </p>
            <p className="mb-4">
              Our mission is to bring transparency to financial information, empowering individuals to better understand the banking system and manage their finances effectively. From branch codes to net worth analysis, we offer valuable information to guide your financial decisions.
            </p>
            <p className="mb-4">
              Stay informed and take control of your financial journey with Sassa Insider.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-3">Contact</h2>
            <p>
              For inquiries or collaborations, reach out via email:
              <a href="mailto:flavianjn@gmail.com" className="text-[#ff6600] hover:underline ml-1">
                flavianjn[at]gmail[dot]com
              </a>
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-300 py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center text-[#828282] text-sm">
          <p>
            &copy; {new Date().getFullYear()} Sassa Insider. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default About;
