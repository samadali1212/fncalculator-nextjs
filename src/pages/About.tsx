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
        title="About MoneyWorth" 
        description="Learn about MoneyWorth - your trusted source for financial insights in South Africa. Discover our mission to help South Africans make informed money decisions."
        canonicalUrl="/about"
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="bg-white p-6 rounded-sm shadow-sm">
          <h1 className="text-2xl font-bold mb-4">About MoneyWorth</h1>
          <div className="prose max-w-none">
 <p>
                This online tool helps drivers in Tanzania check their traffic violations and outstanding fines. 
                You can search using your vehicle registration number, driving license number, or violation reference number.
              </p>
              
              <p>
                The system shows details about any traffic offences including the type of violation, 
                date it occurred, fine amount, and payment status. This helps you stay updated on your 
                driving record and avoid any surprises.
              </p>
              
              <p>
                Payment can be made through M-Pesa, Airtel Money, Tigo Pesa, or Halotel. The tool also 
                provides information about traffic rules and safe driving practices to help prevent future violations.
              </p>
              
              <p>
                Regular checking helps maintain a clean driving record and ensures you're aware of any 
                fines that need to be paid. This prevents issues when renewing your license or during 
                traffic stops.
              </p>
            <p>
              If you have any questions or would like to get in touch, please email:
              <a href="mailto:contact@blogdomain.com" className="text-[#ff6600] hover:underline ml-1">
                flavianjn@gmail.com
              </a>
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-300 py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center text-[#828282] text-sm">
          <p>
            &copy; {new Date().getFullYear()} MoneyWorth. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default About;
