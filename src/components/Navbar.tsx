import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Landmark, GraduationCap, Award } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'courses', label: 'Our Courses' },
    { id: 'scholarship', label: 'Scholarship Calc' },
    { id: 'enquiry', label: 'Admission Support' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#121132] border-b-2 border-orange-500 shadow-xl py-2' 
          : 'bg-[#111030]/90 backdrop-blur-md border-b-2 border-indigo-900 py-3'
      }`}
    >
      {/* Top bar with quick contact info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden sm:flex justify-between items-center text-xs pb-1.5 border-b border-white/10 text-slate-300">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse"></span>
          <span className="font-extrabold tracking-wider uppercase text-[10px]">Admissions Open for Year 2026 Batch</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-1 font-bold text-orange-500">
            <Phone className="w-3.5 h-3.5" />
            <span>Admissions Support:</span>
          </span>
          <a href="tel:9611441997" id="top-phone-main" className="hover:text-orange-500 font-extrabold transition-colors">961144 1997</a>
          <span className="text-slate-600">|</span>
          <a href="tel:9591111676" id="top-phone-secondary" className="hover:text-orange-500 font-extrabold transition-colors">959111 1676</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Brand */}
          <div 
            onClick={() => handleLinkClick('home')} 
            className="flex items-center gap-2.5 cursor-pointer select-none"
            id="brand-logo"
          >
            <div className="bg-orange-500 p-2 border-2 border-white shadow-[2px_2px_0px_0px_#312e81] flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-indigo-950" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display-title text-xl sm:text-2xl text-white tracking-tighter">VICTORY</span>
                <span className="text-[9px] uppercase font-black tracking-widest text-indigo-950 bg-orange-500 px-1.5 py-0.5">CHITRADURGA</span>
              </div>
              <p className="text-[10px] font-black text-orange-500 tracking-widest uppercase">COACHING CENTER</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" id="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleLinkClick(item.id)}
                className={`px-3 py-2 text-xs uppercase tracking-wider transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-orange-500 bg-indigo-950 font-black border-b-2 border-orange-500'
                    : 'text-slate-200 hover:text-white hover:bg-slate-800/40 font-bold'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Call to Enquiry Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-cta-button"
              onClick={() => handleLinkClick('enquiry')}
              className="bg-orange-500 hover:bg-orange-600 text-indigo-950 font-black px-5 py-2 border-2 border-white shadow-[2px_2px_0px_0px_#312e81] text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Award className="w-4 h-4 text-indigo-950" />
              <span>Apply Online</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Slidedown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#121132] border-b-2 border-orange-500 transition-all duration-300 shadow-xl" id="mobile-menu-drawer">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleLinkClick(item.id)}
                className={`block w-full text-left px-4 py-2.5 text-base font-extrabold uppercase tracking-wide ${
                  activeSection === item.id
                    ? 'text-orange-500 bg-indigo-950/80 border-l-4 border-orange-500'
                    : 'text-slate-300 hover:text-white hover:bg-slate-905'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 pb-2 border-t border-indigo-950 px-4 mt-2">
              <p className="text-xs text-orange-500 mb-2 font-black uppercase tracking-widest">Fast Admissions Support</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <a href="tel:9611441997" className="flex items-center gap-1.5 p-2 rounded bg-indigo-950 hover:bg-slate-850 text-white font-extrabold text-center justify-center border border-orange-500">
                  <Phone className="w-3.5 h-3.5 text-orange-500" />
                  <span>961144 1997</span>
                </a>
                <a href="tel:9591111676" className="flex items-center gap-1.5 p-2 rounded bg-indigo-950 hover:bg-slate-850 text-white font-extrabold text-center justify-center border border-orange-500">
                  <Phone className="w-3.5 h-3.5 text-orange-500" />
                  <span>959111 1676</span>
                </a>
              </div>
              <button
                id="mobile-drawer-apply-cta"
                onClick={() => handleLinkClick('enquiry')}
                className="w-full mt-3 bg-orange-500 text-indigo-950 text-center font-black py-2.5 text-xs uppercase tracking-widest block border-2 border-white shadow-[2px_2px_0px_0px_#312e81]"
              >
                Register & Check Scholarship
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
