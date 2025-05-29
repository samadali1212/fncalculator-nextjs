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
                Welcome to the Traffic Offence Checker, your reliable tool for checking traffic violations 
                and maintaining road safety compliance in Tanzania. Our platform provides citizens with 
                easy and secure access to their traffic violation records, helping promote transparency 
                and road safety awareness.
              </p>
              
              <p>
                This service allows you to quickly check your traffic offences using your vehicle 
                registration number, driver's license number, or violation reference number. You can 
                view detailed information about any outstanding fines, violation dates, and payment 
                options through various mobile money services available in Tanzania.
              </p>
              
              <p>
                We are committed to supporting Tanzania's road safety initiatives by providing accurate, 
                up-to-date information about traffic violations. Our secure platform ensures your 
                personal information remains protected while giving you the transparency you need to 
                stay compliant with traffic regulations.
              </p>
              
              <p>
                Whether you're checking for outstanding fines, verifying your driving record, or simply 
                staying informed about your traffic status, our tool provides a convenient and reliable 
                solution for all Tanzanian drivers and vehicle owners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
