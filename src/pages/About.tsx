import { motion } from "framer-motion";
import Header from "../components/Header"; // Assuming you have this component
import SEO from "../components/SEO";       // Assuming you have this component

const About = () => {
  const toolName = "[Your Tool's Name]"; // Define your tool's name once
  const contactEmail = "your-email@example.com"; // Define your contact email once

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]" // You can keep or change this background color
    >
      <SEO
        title={`About ${toolName} - Tanzania Traffic Offence Checker`}
        description={`Learn about ${toolName} - your helpful platform for checking traffic offence fines and pending issues in Tanzania. Our mission is to make this information easily accessible to drivers.`}
        canonicalUrl="/about" // Or the correct canonical URL for your about page
      />
      <Header /> {/* Assuming your Header component is set up */}

      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-4xl">
        <div className="bg-white p-6 rounded-sm shadow-sm">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">About {toolName}</h1>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Welcome to {toolName}, your go-to platform for easily checking traffic offence fines and pending issues in Tanzania. We understand that staying informed about traffic matters can sometimes be challenging, and our tool is designed to simplify this process for all road users across the country.
            </p>
            <p className="mb-4">
              Our mission is to provide a straightforward and accessible way for drivers and vehicle owners in Tanzania to verify their traffic offence status. By offering searches by <strong>Vehicle Registration Number</strong>, <strong>Driver's License ID</strong>, and <strong>Reference Number</strong>, we aim to empower you with the information you need, when you need it.
            </p>
            {/* Optional: Add a sentence here about the source of your data. Be accurate and transparent.
            <p className="mb-4">
              [Our platform consolidates information from publicly available records...] or [We strive to provide up-to-date information to the best of our abilities from official channels...]
            </p>
            */}
            <p className="mb-4">
              Using {toolName} can help you:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Quickly check for any outstanding traffic fines.</li>
              <li>Verify the details of a traffic offence.</li>
              <li>Stay informed about your driving record.</li>
              <li>Avoid potential inconveniences or further penalties by addressing issues promptly.</li>
            </ul>
            <p className="mb-4">
              We are committed to helping Tanzanian road users navigate traffic regulations more effectively. We believe that easy access to this information can contribute to more responsible driving and road usage.
            </p>
            <p className="mb-4">
              Drive safely, stay informed, and use {toolName} to keep up-to-date with your traffic offence status.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">Disclaimer</h2>
            <p className="mb-4 text-sm bg-yellow-50 p-3 rounded-md border border-yellow-200">
              <strong>Important:</strong> {toolName} is an independent platform designed to assist users in checking for traffic offences based on data available to us. While we strive to provide accurate and timely information, we do not guarantee the absolute completeness, accuracy, or timeliness of the data. Information provided by this tool should always be verified with the official Tanzanian traffic authorities or relevant government bodies (such as the Tanzania Police Force Traffic Department).
              <br /><br />
              {toolName} is not responsible for any discrepancies, errors, omissions, or for any actions taken based on the information provided herein. All fines should be paid through official government-designated channels. This tool does not process payments nor does it have the authority to alter or forgive any official fines or penalties. Users are solely responsible for ensuring compliance with all traffic laws and regulations.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">Contact Us</h2>
            <p>
              For any questions about how to use the tool, feedback, or inquiries, please feel free to reach out to us:
              <a
                href={`mailto:${contactEmail}`}
                className="text-[#ff6600] hover:underline ml-1" // Keeping your preferred link color
              >
                {contactEmail}
              </a>
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-300 py-8 bg-white mt-12">
        <div className="container mx-auto px-4 md:px-6 text-center text-[#828282] text-sm">
          <p>
            &copy; {new Date().getFullYear()} {trafficcheck}. All rights reserved.
          </p>
          <p className="mt-1">
            Empowering Tanzanian drivers with information. Drive responsibly.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default About;
