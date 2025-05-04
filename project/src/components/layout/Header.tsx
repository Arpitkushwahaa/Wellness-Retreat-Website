import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import Button from '../ui/Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-forest-800 hover:text-forest-600 transition-colors"
          >
            <Leaf className="h-8 w-8" />
            <span className="text-xl font-serif font-medium">Mindful Escape</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks isScrolled={isScrolled} />
            <Button
              href="/retreats"
              variant="primary"
              size="sm"
            >
              Book a Retreat
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-forest-800 hover:text-forest-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 bg-white shadow-md' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            <NavLinks mobile />
            <Button
              href="/retreats"
              variant="primary"
              size="sm"
              className="mt-2"
              fullWidth
            >
              Book a Retreat
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

const NavLinks = ({ mobile = false, isScrolled = false }) => {
  const location = useLocation();
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Retreats', path: '/retreats' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`${
            mobile
              ? 'block py-2 border-b border-gray-100'
              : ''
          } ${
            location.pathname === link.path
              ? 'text-forest-700 font-medium'
              : `${isScrolled ? 'text-forest-700' : 'text-forest-50'} hover:text-forest-500`
          } transition-colors`}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default Header;