
import { motion } from "framer-motion";
import Header from "../components/Header";
import SEO from "../components/SEO";
import AdBanner from "../components/ads/AdBanner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
          <Tabs defaultValue="about">
            <TabsList className="mb-6">
              <TabsTrigger value="about">About Us</TabsTrigger>
              <TabsTrigger value="privacy">Privacy & Ads</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about">
              <h1 className="text-2xl font-bold mb-4">About Salarylist</h1>
              <AdBanner adSlot="1234567890" adFormat="horizontal" className="my-6" />
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
              </div>
            </TabsContent>
            
            <TabsContent value="privacy">
              <h1 className="text-2xl font-bold mb-4">Privacy Policy & Advertising</h1>
              <div className="prose max-w-none">
                <p className="mb-4">
                  SalaryList is committed to protecting your privacy while providing you with a valuable service. This section explains how we use advertising on our website.
                </p>
                
                <h2 className="text-xl font-semibold mt-6 mb-3">Advertising</h2>
                <p className="mb-4">
                  SalaryList uses Google AdSense to display advertisements. These ads help support our service and keep it free for users.
                </p>
                <p className="mb-4">
                  Google AdSense uses cookies to serve ads based on your prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.
                </p>
                <p className="mb-4">
                  You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-[#ff6600] hover:underline">Google Ads Settings</a>.
                </p>
                
                <AdBanner adSlot="9876543210" adFormat="rectangle" className="my-6" />
                
                <h2 className="text-xl font-semibold mt-6 mb-3">Cookies</h2>
                <p className="mb-4">
                  We use cookies to analyze website traffic and optimize your website experience. By accepting our use of cookies, your data will be aggregated with all other user data.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="contact">
              <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
              <div className="prose max-w-none">
                <p className="mb-4">
                  For inquiries or collaborations, reach out via email:
                  <a href="mailto:flavianjn@gmail.com" className="text-[#ff6600] hover:underline ml-1">
                    flavianjn@gmail.com
                  </a>
                </p>
              </div>
              
              <AdBanner adSlot="5432167890" adFormat="rectangle" className="my-6" />
            </TabsContent>
          </Tabs>
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
