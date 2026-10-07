import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <footer className="py-10 border-t border-neutral-800/80 bg-black text-center text-xs text-neutral-400 space-y-4">
      <div className="flex flex-wrap items-center justify-center gap-6 font-medium text-neutral-300">
        <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
        <Link to="/about" className="hover:text-cyan-400 transition-colors">About</Link>
        <Link to="/skills" className="hover:text-cyan-400 transition-colors">Skills</Link>
        <Link to="/projects" className="hover:text-cyan-400 transition-colors">Projects</Link>
        <Link to="/experience" className="hover:text-cyan-400 transition-colors">Experience</Link>
        <Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
      </div>
      
      <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
      <p className="text-neutral-500">Built with React, Vite, Tailwind CSS & React Router</p>
    </footer>
  );
}
