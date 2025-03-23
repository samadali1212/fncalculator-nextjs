
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Salaries", path: "/salaries" },
  ];

  return (
    <header className="fixed w-full bg-white z-40 border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/MoneyWorth.png"
              alt="MoneyWorth Logo"
              className="h-8 w-auto"
            />
            <span className="font-bold text-xl hidden sm:inline text-[#ff6600]">
              MoneyWorth
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors hover:text-[#ff6600] ${
                  isActive(item.path) ? "text-[#ff6600]" : "text-gray-600"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-500 hover:text-gray-700"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`py-2 px-3 rounded-md font-medium ${
                    isActive(item.path)
                      ? "bg-gray-100 text-[#ff6600]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#ff6600]"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
