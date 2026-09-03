import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Navbar() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
          {personal.name}
        </a>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}

