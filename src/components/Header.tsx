
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path || 
           (path !== "/" && location.pathname.startsWith(path));
  };
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm py-2" : "bg-[#f6f6f0] py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a 
          href="/" 
          className="flex items-center"
        >
          <img src="/SalaryListlogo.png" alt="SalaryList Logo" className="h-8" />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          <a 
            href="/salaries"
            className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              isActive("/salaries") ? "text-[#ff6600] bg-[#fff4eb]" : "text-[#333] hover:bg-[#fff4eb] hover:text-[#ff6600]"
            }`}
          >
            Salaries
          </a>
          <a 
            href="/hourly-rates"
            className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              isActive("/hourly-rates") ? "text-[#ff6600] bg-[#fff4eb]" : "text-[#333] hover:bg-[#fff4eb] hover:text-[#ff6600]"
            }`}
          >
            Hourly Rates
          </a>
          <a 
            href="/tax-calculator"
            className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              isActive("/tax-calculator") ? "text-[#ff6600] bg-[#fff4eb]" : "text-[#333] hover:bg-[#fff4eb] hover:text-[#ff6600]"
            }`}
          >
            Tax Calculator
          </a>
          <a 
            href="/celebrities"
            className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              isActive("/celebrities") ? "text-[#ff6600] bg-[#fff4eb]" : "text-[#333] hover:bg-[#fff4eb] hover:text-[#ff6600]"
            }`}
          >
            Celebrities
          </a>
          <a 
            href="/net-worth"
            className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              isActive("/net-worth") ? "text-[#ff6600] bg-[#fff4eb]" : "text-[#333] hover:bg-[#fff4eb] hover:text-[#ff6600]"
            }`}
          >
            Net Worth
          </a>
          <a 
            href="/about"
            className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              isActive("/about") ? "text-[#ff6600] bg-[#fff4eb]" : "text-[#333] hover:bg-[#fff4eb] hover:text-[#ff6600]"
            }`}
          >
            About
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="sm"
          onClick={toggleMobileMenu}
          className="md:hidden"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2 flex flex-col">
            <a 
              href="/salaries"
              className={`px-3 py-3 text-sm font-medium border-b border-gray-100 ${
                isActive("/salaries") ? "text-[#ff6600]" : "text-[#333]"
              }`}
              onClick={toggleMobileMenu}
            >
              Salaries
            </a>
            <a 
              href="/hourly-rates"
              className={`px-3 py-3 text-sm font-medium border-b border-gray-100 ${
                isActive("/hourly-rates") ? "text-[#ff6600]" : "text-[#333]"
              }`}
              onClick={toggleMobileMenu}
            >
              Hourly Rates
            </a>
            <a 
              href="/tax-calculator"
              className={`px-3 py-3 text-sm font-medium border-b border-gray-100 ${
                isActive("/tax-calculator") ? "text-[#ff6600]" : "text-[#333]"
              }`}
              onClick={toggleMobileMenu}
            >
              Tax Calculator
            </a>
            <a 
              href="/celebrities"
              className={`px-3 py-3 text-sm font-medium border-b border-gray-100 ${
                isActive("/celebrities") ? "text-[#ff6600]" : "text-[#333]"
              }`}
              onClick={toggleMobileMenu}
            >
              Celebrities
            </a>
            <a 
              href="/net-worth"
              className={`px-3 py-3 text-sm font-medium border-b border-gray-100 ${
                isActive("/net-worth") ? "text-[#ff6600]" : "text-[#333]"
              }`}
              onClick={toggleMobileMenu}
            >
              Net Worth
            </a>
            <a 
              href="/about"
              className={`px-3 py-3 text-sm font-medium ${
                isActive("/about") ? "text-[#ff6600]" : "text-[#333]"
              }`}
              onClick={toggleMobileMenu}
            >
              About
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
