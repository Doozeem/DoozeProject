import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home', id: 'home' },
    { name: 'Tentang', href: '#about', id: 'about' },
    { name: 'Layanan', href: '#services', id: 'services' },
    { name: 'Portofolio', href: '#projects', id: 'projects' },
    { name: 'Kontak', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl border-gold-100 shadow-sm' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="group flex items-center gap-3"
          >
            {/* Custom SVG Logo 'D' - Bold Logomark Style */}
            <div className="relative flex items-center justify-center">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gold-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <svg 
                viewBox="0 0 24 24" 
                className="w-10 h-10 text-gold-600 fill-current relative z-10 transition-transform duration-300 group-hover:scale-110"
              >
                {/* Bagian Kiri (Pilar) */}
                <path d="M6 6a3 3 0 0 1 3-3h1v18H9a3 3 0 0 1-3-3V6z" />
                
                {/* Bagian Kanan (Lengkungan Dinamis) */}
                <path d="M13 4h2c3.87 0 7 3.13 7 7s-3.13 7-7 7h-2v-4h2c1.66 0 3-1.34 3-3s-1.34-3-3-3h-2V4z" />
              </svg>
            </div>
            
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Dooze <span className="text-gold-600">Project</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === link.id 
                    ? 'text-gold-700 bg-gold-50 font-semibold border border-gold-100' 
                    : 'text-slate-600 hover:text-gold-600 hover:bg-gold-50/50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600 hover:text-gold-600 hover:bg-gold-50 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gold-100 absolute w-full shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`block px-4 py-3 rounded-xl text-base font-medium border transition-colors ${
                  activeSection === link.id
                    ? 'border-gold-200 bg-gold-50 text-gold-700'
                    : 'border-transparent text-slate-600 hover:text-gold-600 hover:bg-gold-50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};