import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#hero" 
          className={`font-serif text-2xl font-bold tracking-tight z-50 relative ${
            isScrolled || isMenuOpen ? 'text-brand-dark' : 'text-white'
          }`}
        >
          Mariscala.com
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-terracotta ${
                isScrolled ? 'text-gray-700' : 'text-white/90 shadow-black drop-shadow-sm'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled || isMenuOpen ? 'text-brand-dark' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-brand-dark' : 'text-white'}`} />
          )}
        </button>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-brand-sand transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-center items-center space-y-8 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
           {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-brand-dark font-serif text-2xl font-bold hover:text-brand-terracotta transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="absolute bottom-10 text-xs text-gray-400">
              Mariscala de Juárez, Oaxaca
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;