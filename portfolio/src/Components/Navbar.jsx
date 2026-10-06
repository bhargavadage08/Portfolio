import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { personal } = PORTFOLIO_DATA;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <header className="fixed top-0 left-0 right-0 z-50 py-3 px-4 sm:px-8 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Top Left: Greeting with name */}
        <div className="flex items-center gap-2 min-w-0">
          <a
            href="#about"
            className="group flex items-center gap-1.5 text-sm sm:text-base font-medium text-slate-300 hover:text-white transition-colors truncate"
          >
            <span className="text-slate-400 group-hover:text-cyan-400 transition-colors">hello i'm</span>
            <span className="font-extrabold bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              {personal.name}
            </span>
          </a>
        </div>

        {/* Top Middle: Small Navbar */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/90 border border-slate-800/90 rounded-full px-4 py-1.5 shadow-lg shadow-black/20 backdrop-blur-md text-xs sm:text-sm font-medium text-slate-300">
          <a href="#about" className="px-3 py-1 rounded-full hover:text-cyan-400 hover:bg-slate-800/70 transition-all">About</a>
          <a href="#skills" className="px-3 py-1 rounded-full hover:text-cyan-400 hover:bg-slate-800/70 transition-all">Skills</a>
          <a href="#projects" className="px-3 py-1 rounded-full hover:text-cyan-400 hover:bg-slate-800/70 transition-all">Projects</a>
          <a href="#experience" className="px-3 py-1 rounded-full hover:text-cyan-400 hover:bg-slate-800/70 transition-all">Experience</a>
          <a href="#contact" className="px-3 py-1 rounded-full hover:text-cyan-400 hover:bg-slate-800/70 transition-all">Contact</a>
        </nav>

        {/* Top Right: Circle CV Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleCvClick}
            title="Click to Open & Download CV"
            aria-label="Open and Download CV"
            className="relative group w-11 h-11 sm:w-12 sm:h-12 rounded-full p-[2px] bg-gradient-to-tr from-cyan-400 via-sky-400 to-blue-600 shadow-md shadow-cyan-500/20 hover:shadow-cyan-400/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
          >
            <div className="w-full h-full rounded-full bg-slate-950 group-hover:bg-slate-900 transition-colors flex items-center justify-center border border-cyan-500/30">
              <span className="text-xs sm:text-sm font-black tracking-wider text-cyan-400 group-hover:text-white transition-colors">
                CV
              </span>
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-cyan-400 rounded-full border-2 border-slate-950 animate-pulse" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-slate-800/80 flex flex-col gap-2 pb-2 text-center text-sm font-medium text-slate-300">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-cyan-400 hover:bg-slate-900 rounded-lg">About</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-cyan-400 hover:bg-slate-900 rounded-lg">Skills</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-cyan-400 hover:bg-slate-900 rounded-lg">Projects</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-cyan-400 hover:bg-slate-900 rounded-lg">Experience</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-cyan-400 hover:bg-slate-900 rounded-lg">Contact</a>
        </div>
      )}
    </header>
  );
}
