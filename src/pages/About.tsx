
import SEO from "@/components/SEO";

const About = () => {
  return (
    <>
      <SEO
        title="About Traffic Offence Checker - Tanzania Traffic Violation Tool"
        description="Learn about our Traffic Offence Checker tool for Tanzania. Check vehicle violations, license status, and reference numbers quickly and securely."
        canonicalUrl="/about"
      />
      
      <div className="min-h-screen bg-[#f6f6f0] py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-4xl font-bold text-[#1a1f2c] mb-6">
              About Traffic Offence Checker
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
