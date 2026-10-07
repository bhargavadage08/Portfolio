import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Menu, X } from 'lucide-react';

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

    // 1. Open in new tab
    window.open(cvUrl, '_blank', 'noopener,noreferrer');

    // 2. Simultaneously download the file
    const link = document.createElement('a');
    link.href = cvUrl;
    link.setAttribute('download', 'Bhargav_Adage_CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          <a
            href="#about"
            className="group flex items-center gap-2 text-sm sm:text-base font-bold text-white hover:text-cyan-400 transition-colors truncate"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-sky-400">
              {personal.name}
            </span>
          </a>
        </div>

        {/* Top Middle: Floating Pill Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/80 border border-slate-800/80 rounded-full px-4 py-1.5 shadow-xl shadow-black/40 backdrop-blur-xl text-xs sm:text-sm font-medium text-slate-300 transition-all duration-300">
          <a href="#about" className="px-3.5 py-1 rounded-full hover:text-white hover:bg-slate-800/80 transition-all">About</a>
          <a href="#skills" className="px-3.5 py-1 rounded-full hover:text-white hover:bg-slate-800/80 transition-all">Skills</a>
          <a href="#projects" className="px-3.5 py-1 rounded-full hover:text-white hover:bg-slate-800/80 transition-all">Projects</a>
          <a href="#experience" className="px-3.5 py-1 rounded-full hover:text-white hover:bg-slate-800/80 transition-all">Experience</a>
          <a href="#contact" className="px-3.5 py-1 rounded-full hover:text-white hover:bg-slate-800/80 transition-all">Contact</a>
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
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 font-extrabold text-xs sm:text-sm tracking-wider shadow-md shadow-cyan-500/20 hover:shadow-cyan-400/40 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer border border-cyan-300/40"
            >
              CV
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white backdrop-blur-md"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 bg-slate-900/95 border border-slate-800 rounded-2xl backdrop-blur-xl flex flex-col gap-2 text-center text-sm font-medium text-slate-300 shadow-2xl">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2.5 hover:text-cyan-400 hover:bg-slate-800/60 rounded-xl transition-all">About</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="py-2.5 hover:text-cyan-400 hover:bg-slate-800/60 rounded-xl transition-all">Skills</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="py-2.5 hover:text-cyan-400 hover:bg-slate-800/60 rounded-xl transition-all">Projects</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="py-2.5 hover:text-cyan-400 hover:bg-slate-800/60 rounded-xl transition-all">Experience</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2.5 hover:text-cyan-400 hover:bg-slate-800/60 rounded-xl transition-all">Contact</a>
        </div>
      )}
    </header>
  );
}

