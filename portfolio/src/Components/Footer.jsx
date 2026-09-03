import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Footer() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <footer className="py-8 border-t border-slate-800/80 text-center text-xs text-slate-400 space-y-2">
      <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
      <p className="text-slate-500">Built with React, Vite & Tailwind CSS</p>
    </footer>
  );
}

