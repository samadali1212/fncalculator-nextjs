
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-sm py-2' 
          : 'bg-[#ff6600] py-2'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center max-w-4xl">
        <div className="flex items-center">
          <Link 
            to="/" 
            className={`font-bold text-lg transition-colors ${scrolled ? 'text-[#ff6600]' : 'text-white'}`}
          >
            BlogDomain
          </Link>
          
          <div className="hidden md:flex items-center space-x-6 ml-8">
            <Link 
              to="/" 
              className={`text-sm font-medium ${scrolled ? 'text-gray-700 hover:text-[#ff6600]' : 'text-white/90 hover:text-white'} transition-colors`}
            >
              Home
            </Link>
            <Link 
              to="/category/technology" 
              className={`text-sm font-medium ${scrolled ? 'text-gray-700 hover:text-[#ff6600]' : 'text-white/90 hover:text-white'} transition-colors`}
            >
              Technology
            </Link>
            <Link 
              to="/category/programming" 
              className={`text-sm font-medium ${scrolled ? 'text-gray-700 hover:text-[#ff6600]' : 'text-white/90 hover:text-white'} transition-colors`}
            >
              Programming
            </Link>
          </div>
        </div>

        <div className="md:block">
          <Link 
            to="/new" 
            className={`text-sm font-medium ${scrolled ? 'text-gray-700 hover:text-[#ff6600]' : 'text-white/90 hover:text-white'} transition-colors`}
          >
            Submit
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
