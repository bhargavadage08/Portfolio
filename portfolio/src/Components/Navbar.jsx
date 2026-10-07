import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const { personal } = PORTFOLIO_DATA;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCvClick = (e) => {
    e.preventDefault();
    const cvUrl = personal.cvUrl || '/Bhargav_Adage_CV.pdf';

    window.open(cvUrl, '_blank', 'noopener,noreferrer');

    const link = document.createElement('a');
    link.href = cvUrl;
    link.setAttribute('download', 'Bhargav_Adage_CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-8 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Top Left: Logo / Name (animates out on scroll) */}
        <div
          className={`flex items-center gap-2 min-w-0 transition-all duration-500 ease-in-out transform ${
            scrolled
              ? 'opacity-0 -translate-x-8 scale-90 pointer-events-none'
              : 'opacity-100 translate-x-0 scale-100 pointer-events-auto'
          }`}
        >
          <Link
            to="/"
            className="group flex items-center gap-2 text-sm sm:text-base font-bold text-white hover:text-cyan-400 transition-colors truncate"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
            <span className="bg-gradient-to-r from-white via-neutral-100 to-neutral-300 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-sky-400">
              {personal.name}
            </span>
          </Link>
        </div>

        {/* Top Middle: Floating Pill Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-black/90 border border-neutral-800 rounded-full px-3 py-1.5 shadow-xl shadow-black/80 backdrop-blur-xl text-xs sm:text-sm font-medium text-neutral-300 transition-all duration-300">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `px-3.5 py-1 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                    : 'hover:text-white hover:bg-neutral-800/80 text-neutral-300'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Top Right: CV Button + Mobile Menu */}
        <div className="flex items-center gap-3">
          <div
            className={`transition-all duration-500 ease-in-out transform ${
              scrolled
                ? 'opacity-0 translate-x-8 scale-75 pointer-events-none'
                : 'opacity-100 translate-x-0 scale-100 pointer-events-auto'
            }`}
          >
            <button
              onClick={handleCvClick}
              title="Open & Download CV"
              aria-label="Open and Download CV"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-gradient-to-r from-cyan-400 to-sky-400 text-neutral-950 font-extrabold text-xs sm:text-sm tracking-wider shadow-md shadow-cyan-500/20 hover:shadow-cyan-400/40 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer border border-cyan-300/40"
            >
              CV
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-black/90 border border-neutral-800 text-neutral-300 hover:text-white backdrop-blur-md"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 bg-black/95 border border-neutral-800 rounded-2xl backdrop-blur-xl flex flex-col gap-2 text-center text-sm font-medium text-neutral-300 shadow-2xl">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `py-2.5 rounded-xl transition-all ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                    : 'hover:text-cyan-400 hover:bg-neutral-800/60'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
