
import { motion } from "framer-motion";
import Header from "../components/Header";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="bg-white p-6 rounded-sm shadow-sm">
          <h1 className="text-2xl font-bold mb-4">About BlogDomain</h1>
          <div className="prose max-w-none">
            <p className="mb-4">
              MoneyWorth is a personal blog focusing on technology, programming, and design topics.
              The content is curated and written to provide valuable insights and information.
            </p>
            <p className="mb-4">
              This blog is inspired by the minimalist design of sites like Hacker News and Discourse,
              focusing on content readability and easy navigation.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-3">Contact</h2>
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
